import { supabase } from './supabase.js'

/**
 * SyncService — 双向同步 Pinia stores 与 Supabase
 *
 * 策略:
 * - 登录时: 拉取云端数据, 与 localStorage 合并 (max/union), 推送合并结果
 * - 状态变更: debounced 推送到云端
 * - 登出: localStorage 保持不变 (离线回退)
 */
export class SyncService {
  constructor(gamificationStore, achievementsStore) {
    this.gamification = gamificationStore
    this.achievements = achievementsStore
    this._unsubscribes = []
    this._pushTimer = null
  }

  /**
   * 首次登录: 合并本地与云端数据
   */
  async migrateLocalToCloud(userId) {
    if (!supabase || !userId) return

    try {
      const cloudData = await this.pullFromCloud(userId)
      const localData = this._getLocalState()
      const merged = this._merge(localData, cloudData)

      // 更新 Pinia stores
      this.gamification.hydrate(merged.gamification)
      this.achievements.hydrateUnlocked(merged.achievementIds)

      // 推送合并结果到云端
      await this._pushGamification(userId, merged.gamification)
      await this._pushAchievements(userId, merged.achievementIds)
    } catch (e) {
      console.warn('[SyncService] migrateLocalToCloud failed:', e.message)
    }
  }

  /**
   * 从云端拉取数据
   */
  async pullFromCloud(userId) {
    if (!supabase || !userId) return null

    const [gamResult, achResult] = await Promise.all([
      // maybeSingle: returns null data when 0 rows (not error)
      supabase.from('user_gamification').select('*').eq('user_id', userId).maybeSingle(),
      supabase.from('user_achievements').select('achievement_id').eq('user_id', userId),
    ])

    // Propagate real errors (network, RLS) instead of silently treating as empty
    if (gamResult.error) {
      throw new Error(`Failed to read gamification: ${gamResult.error.message}`)
    }
    if (achResult.error) {
      throw new Error(`Failed to read achievements: ${achResult.error.message}`)
    }

    return {
      gamification: gamResult.data,
      achievementIds: (achResult.data || []).map((r) => r.achievement_id),
    }
  }

  /**
   * 推送当前状态到云端
   */
  async pushToCloud(userId) {
    if (!supabase || !userId) return

    try {
      const localData = this._getLocalState()
      await Promise.all([
        this._pushGamification(userId, localData.gamification),
        this._pushAchievements(userId, localData.achievementIds),
      ])
    } catch (e) {
      console.warn('[SyncService] pushToCloud failed:', e.message)
    }
  }

  /**
   * 启动自动同步 (debounced)
   */
  startAutoSync(userId) {
    this.stopAutoSync()

    const debouncedPush = () => {
      clearTimeout(this._pushTimer)
      this._pushTimer = setTimeout(() => this.pushToCloud(userId), 2000)
    }

    // 监听 gamification store 变化
    this._unsubscribes.push(this.gamification.$subscribe(debouncedPush))
    this._unsubscribes.push(this.achievements.$subscribe(debouncedPush))
  }

  /**
   * 停止自动同步
   */
  stopAutoSync() {
    clearTimeout(this._pushTimer)
    this._unsubscribes.forEach((unsub) => unsub())
    this._unsubscribes = []
  }

  // ── 内部方法 ──

  _getLocalState() {
    return {
      gamification: this.gamification.toCloudFormat(),
      achievementIds: [...this.achievements.unlockedIds],
    }
  }

  /**
   * 日期比较: 取更近的日期
   */
  static _maxDate(a, b) {
    if (!a && !b) return null
    if (!a) return b
    if (!b) return a
    return a >= b ? a : b // ISO date strings sort lexicographically
  }

  /**
   * 日期比较: 取更早的日期
   */
  static _minDate(a, b) {
    if (!a && !b) return null
    if (!a) return b
    if (!b) return a
    return a <= b ? a : b
  }

  /**
   * 合并策略: max/union
   * - 数值: Math.max(local, cloud)
   * - 数组: union + 去重
   * - 对象: shallow merge (云端优先)
   * - 日期: 取更近/更早 (视语义)
   * - 标量: 云端优先, 除非云端为 null
   */
  _merge(local, cloud) {
    const lg = local.gamification || {}
    const cg = cloud?.gamification || {}

    const merged = {
      gamification: {
        xp: Math.max(lg.xp || 0, cg.xp || 0),
        streak_current: Math.max(lg.streak_current || 0, cg.streak_current || 0),
        streak_longest: Math.max(lg.streak_longest || 0, cg.streak_longest || 0),
        streak_last_visit_date: SyncService._maxDate(
          lg.streak_last_visit_date,
          cg.streak_last_visit_date,
        ),
        tools_viewed: [...new Set([...(lg.tools_viewed || []), ...(cg.tools_viewed || [])])],
        quizzes_completed: Math.max(lg.quizzes_completed || 0, cg.quizzes_completed || 0),
        quiz_best_score: Math.max(lg.quiz_best_score || 0, cg.quiz_best_score || 0),
        battles_voted: Math.max(lg.battles_voted || 0, cg.battles_voted || 0),
        matcher_completed: Math.max(lg.matcher_completed || 0, cg.matcher_completed || 0),
        comparisons_used: Math.max(lg.comparisons_used || 0, cg.comparisons_used || 0),
        personality_result: cg.personality_result || lg.personality_result || null,
        first_visit_date: SyncService._minDate(lg.first_visit_date, cg.first_visit_date),
        visit_dates: [...new Set([...(lg.visit_dates || []), ...(cg.visit_dates || [])])].sort(),
        daily_tool_seen: SyncService._maxDate(lg.daily_tool_seen, cg.daily_tool_seen),
        // 云端投票优先, 本地未同步的投票也保留
        battle_votes: { ...(lg.battle_votes || {}), ...(cg.battle_votes || {}) },
      },
      achievementIds: [
        ...new Set([...(local.achievementIds || []), ...(cloud?.achievementIds || [])]),
      ],
    }

    return merged
  }

  async _pushGamification(userId, data) {
    if (!supabase) return
    const { error } = await supabase.from('user_gamification').upsert(
      {
        user_id: userId,
        ...data,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    )
    if (error) {
      throw new Error(`[SyncService] gamification upsert failed: ${error.message}`)
    }
  }

  async _pushAchievements(userId, achievementIds) {
    if (!supabase || !achievementIds.length) return

    // Use upsert with ignoreDuplicates to avoid TOCTOU race condition
    const { error } = await supabase.from('user_achievements').upsert(
      achievementIds.map((id) => ({ user_id: userId, achievement_id: id })),
      { onConflict: 'user_id,achievement_id', ignoreDuplicates: true },
    )
    if (error) {
      throw new Error(`[SyncService] achievements upsert failed: ${error.message}`)
    }
  }
}
