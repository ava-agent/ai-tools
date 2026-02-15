/**
 * Deterministic "Tool of the Day" — same tool for all users on the same day
 */
function simpleHash(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

/**
 * Get today's recommended tool (deterministic by UTC date)
 * @param {Array} tools - array of tool objects with .id
 * @returns {Object} the tool of the day
 */
export function getToolOfTheDay(tools) {
  if (!tools || tools.length === 0) return null
  const utcDate = new Date().toISOString().slice(0, 10)
  const hash = simpleHash(utcDate)
  // Shuffle tools deterministically by date + id
  const shuffled = [...tools].sort(
    (a, b) => simpleHash(a.id + utcDate) - simpleHash(b.id + utcDate)
  )
  return shuffled[hash % shuffled.length]
}
