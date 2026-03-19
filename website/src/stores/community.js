import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '../lib/supabase.js'

/**
 * Community Store — 社区评分、评论、对决投票
 * 读取: 任何人可用 (anon key)
 * 写入: 需要登录
 */
export const useCommunityStore = defineStore('community', () => {
  // 工具评分统计缓存: { [toolId]: { avgRating, ratingCount } }
  const ratingStats = ref({})
  // 用户自己的评分: { [toolId]: rating }
  const myRatings = ref({})
  // 工具评论缓存: { [toolId]: Review[] }
  const reviewCache = ref({})
  // 对决投票统计: { [matchupKey]: { toolAVotes, toolBVotes, total } }
  const battleStats = ref({})

  // ── 评分 ──

  async function fetchRatingStats() {
    if (!supabase) return
    const { data } = await supabase.from('tool_rating_stats').select('*')
    if (data) {
      const map = {}
      for (const row of data) {
        map[row.tool_id] = {
          avgRating: parseFloat(row.avg_rating),
          ratingCount: row.rating_count,
        }
      }
      ratingStats.value = map
    }
  }

  async function fetchMyRatings(userId) {
    if (!supabase || !userId) return
    const { data } = await supabase
      .from('tool_ratings')
      .select('tool_id, rating')
      .eq('user_id', userId)
    if (data) {
      const map = {}
      for (const row of data) {
        map[row.tool_id] = row.rating
      }
      myRatings.value = map
    }
  }

  async function submitRating(userId, toolId, rating) {
    if (!supabase || !userId) return { message: '未登录或服务未配置' }
    const { error } = await supabase.from('tool_ratings').upsert(
      {
        user_id: userId,
        tool_id: toolId,
        rating,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id,tool_id' },
    )
    if (!error) {
      myRatings.value = { ...myRatings.value, [toolId]: rating }
      await fetchRatingStats()
      return null
    }
    return error
  }

  // ── 评论 ──

  /**
   * Sanitize avatar URL — only allow https
   */
  function _sanitizeAvatarUrl(url) {
    if (!url) return null
    try {
      const parsed = new URL(url)
      if (parsed.protocol !== 'https:') return null
      return url
    } catch {
      return null
    }
  }

  async function fetchReviewsForTool(toolId) {
    if (!supabase) return []
    const { data } = await supabase
      .from('tool_reviews')
      .select(
        `
        id,
        user_id,
        content,
        created_at,
        updated_at,
        user_profiles ( display_name, avatar_url )
      `,
      )
      .eq('tool_id', toolId)
      .order('created_at', { ascending: false })
      .limit(50)

    const reviews = (data || []).map((r) => ({
      id: r.id,
      userId: r.user_id,
      content: r.content,
      createdAt: r.created_at,
      displayName: r.user_profiles?.display_name || '匿名用户',
      avatarUrl: _sanitizeAvatarUrl(r.user_profiles?.avatar_url),
    }))
    reviewCache.value = { ...reviewCache.value, [toolId]: reviews }
    return reviews
  }

  async function submitReview(userId, toolId, content) {
    if (!supabase || !userId) return { error: '未登录' }
    const trimmed = (content || '').trim()
    if (trimmed.length < 10) return { error: '评论至少需要 10 个字符' }
    if (trimmed.length > 2000) return { error: '评论不能超过 2000 个字符' }
    const { error } = await supabase.from('tool_reviews').insert({
      user_id: userId,
      tool_id: toolId,
      content: trimmed,
    })
    if (!error) {
      await fetchReviewsForTool(toolId)
    }
    return { error: error?.message || null }
  }

  async function deleteReview(reviewId, toolId, userId) {
    if (!supabase || !userId) return { error: '未登录' }
    const { error } = await supabase
      .from('tool_reviews')
      .delete()
      .eq('id', reviewId)
      .eq('user_id', userId) // Server-side ownership enforcement
    if (!error) {
      await fetchReviewsForTool(toolId)
    }
    return { error: error?.message || null }
  }

  // ── 对决投票 ──

  async function fetchBattleStats(matchupKey) {
    if (!supabase) return null
    // Use maybeSingle — row may not exist yet for a new matchup
    const { data, error } = await supabase
      .from('battle_vote_stats')
      .select('*')
      .eq('matchup_key', matchupKey)
      .maybeSingle()

    if (error) {
      console.warn('[CommunityStore] fetchBattleStats error:', error.message)
      return null
    }

    if (data) {
      const normalized = {
        toolAVotes: data.tool_a_votes,
        toolBVotes: data.tool_b_votes,
        total: data.total_votes,
      }
      battleStats.value = { ...battleStats.value, [matchupKey]: normalized }
      return normalized
    }
    return null
  }

  async function submitBattleVote(userId, matchupKey, winnerId, dimensionId, toolAId, toolBId) {
    if (!supabase || !userId) return { message: '未登录或服务未配置' }
    const { error } = await supabase.from('battle_votes').upsert(
      {
        user_id: userId,
        matchup_key: matchupKey,
        winner_id: winnerId,
        dimension_id: dimensionId,
        tool_a_id: toolAId,
        tool_b_id: toolBId,
      },
      { onConflict: 'user_id,matchup_key' },
    )
    if (!error) {
      await fetchBattleStats(matchupKey)
    }
    return error
  }

  return {
    ratingStats,
    myRatings,
    reviewCache,
    battleStats,
    fetchRatingStats,
    fetchMyRatings,
    submitRating,
    fetchReviewsForTool,
    submitReview,
    deleteReview,
    fetchBattleStats,
    submitBattleVote,
  }
})
