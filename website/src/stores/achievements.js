import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useGamificationStore } from './gamification.js'
import { aiToolsData } from '../data/tools.js'

/**
 * Achievement definitions
 * tier: bronze | silver | gold | platinum
 */
const ACHIEVEMENT_DEFS = [
  {
    id: 'first-look',
    name: '初见',
    description: '查看第一个工具详情',
    tier: 'bronze',
    xp: 20,
    icon: 'Eye',
    check: (s) => s.toolsViewed.length >= 1,
  },
  {
    id: 'explorer-5',
    name: '初级探索者',
    description: '查看 5 个不同的工具',
    tier: 'bronze',
    xp: 50,
    icon: 'Compass',
    check: (s) => s.toolsViewed.length >= 5,
  },
  {
    id: 'explorer-15',
    name: '中级探索者',
    description: '查看 15 个不同的工具',
    tier: 'silver',
    xp: 100,
    icon: 'Map',
    check: (s) => s.toolsViewed.length >= 15,
  },
  {
    id: 'explorer-all',
    name: '全知全能',
    description: `查看全部 ${aiToolsData.length} 个工具`,
    tier: 'platinum',
    xp: 500,
    icon: 'Crown',
    check: (s) => s.toolsViewed.length >= aiToolsData.length,
  },
  {
    id: 'quiz-starter',
    name: '答题新手',
    description: '完成第一次竞猜',
    tier: 'bronze',
    xp: 30,
    icon: 'HelpCircle',
    check: (s) => s.quizzesCompleted >= 1,
  },
  {
    id: 'quiz-master',
    name: '答题大师',
    description: '竞猜获得满分',
    tier: 'gold',
    xp: 200,
    icon: 'Award',
    check: (s) => s.quizBestScore > 0 && s.quizBestScore >= 10,
  },
  {
    id: 'quiz-addict',
    name: '答题狂人',
    description: '完成 10 次竞猜',
    tier: 'silver',
    xp: 150,
    icon: 'Zap',
    check: (s) => s.quizzesCompleted >= 10,
  },
  {
    id: 'battle-voter',
    name: '评审员',
    description: '在工具对决中投票 5 次',
    tier: 'bronze',
    xp: 50,
    icon: 'Vote',
    check: (s) => s.battlesVoted >= 5,
  },
  {
    id: 'battle-judge',
    name: '首席评审',
    description: '在工具对决中投票 20 次',
    tier: 'silver',
    xp: 150,
    icon: 'Gavel',
    check: (s) => s.battlesVoted >= 20,
  },
  {
    id: 'streak-3',
    name: '三天打鱼',
    description: '连续访问 3 天',
    tier: 'bronze',
    xp: 30,
    icon: 'Flame',
    check: (_s, streak) => streak.current >= 3 || streak.longest >= 3,
  },
  {
    id: 'streak-7',
    name: '周周来访',
    description: '连续访问 7 天',
    tier: 'silver',
    xp: 100,
    icon: 'Flame',
    check: (_s, streak) => streak.current >= 7 || streak.longest >= 7,
  },
  {
    id: 'streak-30',
    name: '月度常客',
    description: '连续访问 30 天',
    tier: 'gold',
    xp: 300,
    icon: 'Flame',
    check: (_s, streak) => streak.current >= 30 || streak.longest >= 30,
  },
  {
    id: 'personality',
    name: '认识自己',
    description: '完成 AI 工具人格测试',
    tier: 'bronze',
    xp: 40,
    icon: 'User',
    check: (s) => s.personalityResult !== null,
  },
  {
    id: 'matcher-pro',
    name: '选型专家',
    description: '使用工具匹配器 3 次',
    tier: 'silver',
    xp: 80,
    icon: 'Target',
    check: (s) => s.matcherCompleted >= 3,
  },
  {
    id: 'compare-fan',
    name: '对比达人',
    description: '使用对比功能',
    tier: 'bronze',
    xp: 30,
    icon: 'GitCompare',
    check: (s) => s.comparisonsUsed >= 1,
  },
]

/**
 * Tier styling
 */
export const TIER_STYLES = {
  bronze:   { label: '铜',   color: 'text-amber-600',  bg: 'bg-amber-600/20',  border: 'border-amber-600/30' },
  silver:   { label: '银',   color: 'text-gray-300',   bg: 'bg-gray-300/20',   border: 'border-gray-300/30' },
  gold:     { label: '金',   color: 'text-yellow-400', bg: 'bg-yellow-400/20', border: 'border-yellow-400/30' },
  platinum: { label: '铂金', color: 'text-cyan-300',   bg: 'bg-cyan-300/20',   border: 'border-cyan-300/30' },
}

/**
 * Achievements Store
 * Persisted via piniaLocalStorage plugin
 */
export const useAchievementsStore = defineStore('achievements', () => {
  // State — set of unlocked achievement IDs
  const unlockedIds = ref([])
  // Toast queue for new unlocks
  const toastQueue = ref([])

  // Computed
  const allAchievements = computed(() =>
    ACHIEVEMENT_DEFS.map((def) => ({
      ...def,
      unlocked: unlockedIds.value.includes(def.id),
      tierStyle: TIER_STYLES[def.tier],
    }))
  )

  const unlockedCount = computed(() => unlockedIds.value.length)
  const totalCount = computed(() => ACHIEVEMENT_DEFS.length)
  const progressPercent = computed(() =>
    Math.round((unlockedCount.value / totalCount.value) * 100)
  )

  // Actions

  /**
   * Check all achievement conditions against current stats.
   * Unlocks any newly satisfied achievements.
   */
  function checkAll() {
    const gamification = useGamificationStore()
    const currentStats = gamification.stats
    const currentStreak = gamification.streak

    for (const def of ACHIEVEMENT_DEFS) {
      if (unlockedIds.value.includes(def.id)) continue

      if (def.check(currentStats, currentStreak)) {
        // Unlock!
        unlockedIds.value = [...unlockedIds.value, def.id]
        // Award XP
        gamification.awardAchievementXp(def.xp)
        // Queue toast notification
        toastQueue.value = [
          ...toastQueue.value,
          {
            id: def.id,
            name: def.name,
            description: def.description,
            tier: def.tier,
            tierStyle: TIER_STYLES[def.tier],
            xp: def.xp,
            timestamp: Date.now(),
          },
        ]
      }
    }
  }

  /**
   * Dismiss the first toast in the queue
   */
  function dismissToast() {
    toastQueue.value = toastQueue.value.slice(1)
  }

  /**
   * Hydrate unlocked achievements from cloud (used by SyncService)
   */
  function hydrateUnlocked(ids) {
    if (!ids || !Array.isArray(ids)) return
    unlockedIds.value = [...new Set([...unlockedIds.value, ...ids])]
  }

  /**
   * Reset all achievements
   */
  function resetAll() {
    unlockedIds.value = []
    toastQueue.value = []
  }

  return {
    unlockedIds,
    toastQueue,
    allAchievements,
    unlockedCount,
    totalCount,
    progressPercent,
    checkAll,
    dismissToast,
    hydrateUnlocked,
    resetAll,
  }
})
