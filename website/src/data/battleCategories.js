/**
 * Tool Battle: dimensions for comparison
 */
export const battleDimensions = [
  { id: 'code-quality', label: '代码质量', question: '谁生成的代码质量更高？', icon: 'Code' },
  { id: 'speed', label: '响应速度', question: '谁的响应速度更快？', icon: 'Zap' },
  { id: 'value', label: '性价比', question: '谁的性价比更高？', icon: 'DollarSign' },
  { id: 'ease-of-use', label: '易用性', question: '谁更容易上手？', icon: 'Smile' },
  { id: 'ai-capability', label: 'AI 能力', question: '谁的 AI 能力更强？', icon: 'Brain' },
]

/**
 * Get a random battle dimension
 */
export function getRandomDimension() {
  return battleDimensions[Math.floor(Math.random() * battleDimensions.length)]
}

/**
 * Generate a random matchup from tools
 * @param {Array} tools - tool data array
 * @returns {{ toolA: Object, toolB: Object, dimension: Object, matchupKey: string }}
 */
export function generateMatchup(tools) {
  if (!tools || tools.length < 2) return null

  // Pick two random different tools (Fisher-Yates for first 2)
  const arr = [...tools]
  for (let i = arr.length - 1; i > arr.length - 3 && i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  const toolA = arr[arr.length - 1]
  const toolB = arr[arr.length - 2]
  const dimension = getRandomDimension()

  const ids = [toolA.id, toolB.id].sort()
  const matchupKey = `${ids[0]}-vs-${ids[1]}-${dimension.id}`

  return { toolA, toolB, dimension, matchupKey }
}
