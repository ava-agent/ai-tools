/**
 * Level definitions: XP thresholds, titles, and colors
 */
export const LEVELS = [
  { level: 1,  title: 'AI 新手',   xpRequired: 0,    color: 'text-gray-400',   bg: 'bg-gray-500/20',   border: 'border-gray-500/30' },
  { level: 2,  title: 'AI 学徒',   xpRequired: 100,  color: 'text-green-400',  bg: 'bg-green-500/20',  border: 'border-green-500/30' },
  { level: 3,  title: 'AI 探索者', xpRequired: 300,  color: 'text-blue-400',   bg: 'bg-blue-500/20',   border: 'border-blue-500/30' },
  { level: 4,  title: 'AI 研究员', xpRequired: 600,  color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/30' },
  { level: 5,  title: 'AI 实践者', xpRequired: 1000, color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/30' },
  { level: 6,  title: 'AI 专家',   xpRequired: 1600, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/30' },
  { level: 7,  title: 'AI 大师',   xpRequired: 2500, color: 'text-red-400',    bg: 'bg-red-500/20',    border: 'border-red-500/30' },
  { level: 8,  title: 'AI 先知',   xpRequired: 3500, color: 'text-pink-400',   bg: 'bg-pink-500/20',   border: 'border-pink-500/30' },
  { level: 9,  title: 'AI 传奇',   xpRequired: 5000, color: 'text-cyan-400',   bg: 'bg-cyan-500/20',   border: 'border-cyan-500/30' },
  { level: 10, title: 'AI 造物主', xpRequired: 7500, color: 'text-primary',    bg: 'bg-primary/20',    border: 'border-primary/30' },
]

/**
 * XP rewards per user action
 */
export const XP_ACTIONS = {
  'tool-view':        10,
  'quiz-complete':    30,
  'quiz-perfect':     50,
  'battle-vote':       5,
  'personality':      40,
  'matcher-complete':  15,
  'comparison-use':   10,
  'daily-visit':      20,
  'daily-tool':       10,
  'achievement':       0, // achievements award their own XP via the achievements store
}

/**
 * Get level info for a given XP total
 */
export function getLevelForXp(xp) {
  let result = LEVELS[0]
  for (const lvl of LEVELS) {
    if (xp >= lvl.xpRequired) {
      result = lvl
    } else {
      break
    }
  }
  return result
}

/**
 * Get XP needed for next level (null if max level)
 */
export function getNextLevelXp(xp) {
  const current = getLevelForXp(xp)
  const next = LEVELS.find(l => l.level === current.level + 1)
  return next ? next.xpRequired : null
}

/**
 * Get progress percentage within current level (0-100)
 */
export function getLevelProgress(xp) {
  const current = getLevelForXp(xp)
  const nextXp = getNextLevelXp(xp)
  if (nextXp === null) return 100
  const range = nextXp - current.xpRequired
  const progress = xp - current.xpRequired
  return Math.min(100, Math.round((progress / range) * 100))
}
