import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { XP_ACTIONS, getLevelForXp, getNextLevelXp, getLevelProgress } from '../data/levelConfig.js'

/**
 * Gamification Store — central hub for all user progress
 * Persisted via piniaLocalStorage plugin
 */
export const useGamificationStore = defineStore('gamification', () => {
  // ── State ──
  const xp = ref(0)
  const streak = ref({
    current: 0,
    longest: 0,
    lastVisitDate: null,
  })
  const stats = ref({
    toolsViewed: [],
    quizzesCompleted: 0,
    quizBestScore: 0,
    battlesVoted: 0,
    matcherCompleted: 0,
    comparisonsUsed: 0,
    personalityResult: null,
    firstVisitDate: null,
    visitDates: [],
  })
  const battleVotes = ref({})
  const dailyToolSeen = ref(null)

  // ── Computed ──
  const currentLevel = computed(() => getLevelForXp(xp.value))
  const nextLevelXp = computed(() => getNextLevelXp(xp.value))
  const xpProgress = computed(() => getLevelProgress(xp.value))
  const levelTitle = computed(() => currentLevel.value.title)
  const levelColor = computed(() => currentLevel.value.color)
  const toolsViewedCount = computed(() => stats.value.toolsViewed.length)
  const isMaxLevel = computed(() => nextLevelXp.value === null)

  // ── Helpers ──
  function getUtcDateStr() {
    return new Date().toISOString().slice(0, 10)
  }

  // ── Actions ──

  /**
   * Award XP for an action. Returns the amount awarded.
   */
  function awardXp(action) {
    const amount = XP_ACTIONS[action] || 0
    if (amount > 0) {
      xp.value = xp.value + amount
    }
    return amount
  }

  /**
   * Track first visit for a tool. Awards XP only on first view.
   */
  function trackToolView(toolId) {
    if (!toolId) return 0
    if (stats.value.toolsViewed.includes(toolId)) return 0

    stats.value = {
      ...stats.value,
      toolsViewed: [...stats.value.toolsViewed, toolId],
    }
    return awardXp('tool-view')
  }

  /**
   * Track daily visit. Updates streak count.
   */
  function trackDailyVisit() {
    const today = getUtcDateStr()

    // First visit ever
    if (!stats.value.firstVisitDate) {
      stats.value = {
        ...stats.value,
        firstVisitDate: today,
      }
    }

    // Already visited today
    if (streak.value.lastVisitDate === today) return 0

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayStr = yesterday.toISOString().slice(0, 10)

    let newCurrent = 1
    if (streak.value.lastVisitDate === yesterdayStr) {
      newCurrent = streak.value.current + 1
    }

    const newLongest = Math.max(streak.value.longest, newCurrent)

    streak.value = {
      current: newCurrent,
      longest: newLongest,
      lastVisitDate: today,
    }

    // Record visit date for calendar
    const visitDates = stats.value.visitDates || []
    if (!visitDates.includes(today)) {
      stats.value = {
        ...stats.value,
        visitDates: [...visitDates, today],
      }
    }

    return awardXp('daily-visit')
  }

  /**
   * Track quiz completion
   */
  function trackQuizComplete(score, total) {
    const bestScore = Math.max(stats.value.quizBestScore, score)
    stats.value = {
      ...stats.value,
      quizzesCompleted: stats.value.quizzesCompleted + 1,
      quizBestScore: bestScore,
    }
    let awarded = awardXp('quiz-complete')
    if (score === total && total > 0) {
      awarded += awardXp('quiz-perfect')
    }
    return awarded
  }

  /**
   * Track battle vote
   */
  function trackBattleVote(matchupKey, winnerId) {
    battleVotes.value = {
      ...battleVotes.value,
      [matchupKey]: winnerId,
    }
    stats.value = {
      ...stats.value,
      battlesVoted: stats.value.battlesVoted + 1,
    }
    return awardXp('battle-vote')
  }

  /**
   * Track matcher completion
   */
  function trackMatcherComplete() {
    stats.value = {
      ...stats.value,
      matcherCompleted: stats.value.matcherCompleted + 1,
    }
    return awardXp('matcher-complete')
  }

  /**
   * Track comparison usage
   */
  function trackComparisonUse() {
    stats.value = {
      ...stats.value,
      comparisonsUsed: stats.value.comparisonsUsed + 1,
    }
    return awardXp('comparison-use')
  }

  /**
   * Record personality test result
   */
  function recordPersonalityResult(resultId) {
    stats.value = {
      ...stats.value,
      personalityResult: resultId,
    }
    return awardXp('personality')
  }

  /**
   * Track daily tool view
   */
  function trackDailyTool() {
    const today = getUtcDateStr()
    if (dailyToolSeen.value === today) return 0
    dailyToolSeen.value = today
    return awardXp('daily-tool')
  }

  /**
   * Award achievement bonus XP (called from achievements store)
   */
  function awardAchievementXp(amount) {
    if (amount > 0) {
      xp.value = xp.value + amount
    }
  }

  /**
   * Hydrate from cloud data (used by SyncService)
   */
  function hydrate(data) {
    if (!data) return
    xp.value = data.xp ?? xp.value
    streak.value = {
      current: data.streak_current ?? streak.value.current,
      longest: data.streak_longest ?? streak.value.longest,
      lastVisitDate: data.streak_last_visit_date ?? streak.value.lastVisitDate,
    }
    stats.value = {
      toolsViewed: data.tools_viewed ?? stats.value.toolsViewed,
      quizzesCompleted: data.quizzes_completed ?? stats.value.quizzesCompleted,
      quizBestScore: data.quiz_best_score ?? stats.value.quizBestScore,
      battlesVoted: data.battles_voted ?? stats.value.battlesVoted,
      matcherCompleted: data.matcher_completed ?? stats.value.matcherCompleted,
      comparisonsUsed: data.comparisons_used ?? stats.value.comparisonsUsed,
      personalityResult: data.personality_result ?? stats.value.personalityResult,
      firstVisitDate: data.first_visit_date ?? stats.value.firstVisitDate,
      visitDates: data.visit_dates ?? stats.value.visitDates,
    }
    battleVotes.value = data.battle_votes ?? battleVotes.value
    dailyToolSeen.value = data.daily_tool_seen ?? dailyToolSeen.value
  }

  /**
   * Serialize state to cloud DB format (used by SyncService)
   */
  function toCloudFormat() {
    return {
      xp: xp.value,
      streak_current: streak.value.current,
      streak_longest: streak.value.longest,
      streak_last_visit_date: streak.value.lastVisitDate,
      tools_viewed: stats.value.toolsViewed,
      quizzes_completed: stats.value.quizzesCompleted,
      quiz_best_score: stats.value.quizBestScore,
      battles_voted: stats.value.battlesVoted,
      matcher_completed: stats.value.matcherCompleted,
      comparisons_used: stats.value.comparisonsUsed,
      personality_result: stats.value.personalityResult,
      first_visit_date: stats.value.firstVisitDate,
      visit_dates: stats.value.visitDates,
      daily_tool_seen: dailyToolSeen.value,
      battle_votes: battleVotes.value,
    }
  }

  /**
   * Reset all progress (with confirmation)
   */
  function resetAll() {
    xp.value = 0
    streak.value = { current: 0, longest: 0, lastVisitDate: null }
    stats.value = {
      toolsViewed: [],
      quizzesCompleted: 0,
      quizBestScore: 0,
      battlesVoted: 0,
      matcherCompleted: 0,
      comparisonsUsed: 0,
      personalityResult: null,
      firstVisitDate: null,
      visitDates: [],
    }
    battleVotes.value = {}
    dailyToolSeen.value = null
  }

  return {
    // State
    xp,
    streak,
    stats,
    battleVotes,
    dailyToolSeen,

    // Computed
    currentLevel,
    nextLevelXp,
    xpProgress,
    levelTitle,
    levelColor,
    toolsViewedCount,
    isMaxLevel,

    // Actions
    awardXp,
    trackToolView,
    trackDailyVisit,
    trackQuizComplete,
    trackBattleVote,
    trackMatcherComplete,
    trackComparisonUse,
    recordPersonalityResult,
    trackDailyTool,
    awardAchievementXp,
    hydrate,
    toCloudFormat,
    resetAll,
  }
})
