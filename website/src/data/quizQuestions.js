/**
 * Auto-generate quiz questions from tool data
 * 4 question types: guess-tool, true-false, pricing, scenario
 */

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pick(arr, n) {
  return shuffle(arr).slice(0, n)
}

/**
 * Type 1: "Which tool has this pro/con?"
 */
function generateGuessTool(tools) {
  const candidates = tools.filter(t => t.pros?.length > 0)
  if (candidates.length < 4) return null

  const answer = candidates[Math.floor(Math.random() * candidates.length)]
  const usesPro = Math.random() > 0.3
  const clueList = usesPro ? answer.pros : answer.cons
  if (!clueList || clueList.length === 0) return null
  const clue = clueList[Math.floor(Math.random() * clueList.length)]

  const distractors = pick(
    candidates.filter(t => t.id !== answer.id),
    3
  )

  const options = shuffle([answer, ...distractors]).map(t => ({
    text: t.name,
    correct: t.id === answer.id,
  }))

  return {
    type: 'guess-tool',
    question: `哪个工具的${usesPro ? '优势' : '劣势'}是：「${clue}」？`,
    options,
    explanation: `${answer.name} — ${answer.bestFor}`,
  }
}

/**
 * Type 2: True/False about a tool
 */
function generateTrueFalse(tools) {
  const tool = tools[Math.floor(Math.random() * tools.length)]
  const isTrue = Math.random() > 0.5
  let statement, explanation

  if (isTrue) {
    if (tool.developer) {
      statement = `${tool.name} 是由 ${tool.developer} 开发的`
      explanation = `正确！${tool.name} 由 ${tool.developer} 开发。`
    } else {
      return null
    }
  } else {
    const otherTool = tools.filter(t => t.id !== tool.id && t.developer)[
      Math.floor(Math.random() * (tools.length - 1))
    ]
    if (!otherTool) return null
    statement = `${tool.name} 是由 ${otherTool.developer} 开发的`
    explanation = `错误！${tool.name} 由 ${tool.developer} 开发，不是 ${otherTool.developer}。`
  }

  return {
    type: 'true-false',
    question: `判断: ${statement}`,
    options: [
      { text: '正确', correct: isTrue },
      { text: '错误', correct: !isTrue },
    ],
    explanation,
  }
}

/**
 * Type 3: Scenario — which tool fits best?
 */
function generateScenario(tools) {
  const scenarios = [
    { scenario: '我需要一个免费的 AI IDE 来进行日常开发', filter: t => t.category === 'ide' && t.freeQuota },
    { scenario: '我需要一个能处理超长代码文件的工具', filter: t => t.contextWindow },
    { scenario: '我需要进行深度技术调研和分析', filter: t => t.category === 'deep-research' },
    { scenario: '我想在终端中使用 AI 编程助手', filter: t => t.category === 'cli' },
    { scenario: '我需要用自然语言快速生成 Web 应用', filter: t => t.category === 'app-builder' },
    { scenario: '我的团队预算有限，需要免费方案', filter: t => t.freeQuota && (t.freeQuota.includes('免费') || t.freeQuota.includes('free')) },
  ]

  const s = scenarios[Math.floor(Math.random() * scenarios.length)]
  const matching = tools.filter(s.filter)
  if (matching.length === 0) return null

  const answer = matching[Math.floor(Math.random() * matching.length)]
  const distractors = pick(
    tools.filter(t => t.id !== answer.id && !matching.find(m => m.id === t.id)),
    3
  )
  if (distractors.length < 3) return null

  const options = shuffle([answer, ...distractors]).map(t => ({
    text: t.name,
    correct: t.id === answer.id,
  }))

  return {
    type: 'scenario',
    question: `场景: ${s.scenario}，以下哪个工具最合适？`,
    options,
    explanation: `${answer.name} — ${answer.bestFor}`,
  }
}

/**
 * Generate a set of quiz questions
 * @param {Array} tools - array of tool data objects
 * @param {number} count - number of questions
 * @returns {Array} questions
 */
export function generateQuizSet(tools, count = 10) {
  const generators = [generateGuessTool, generateTrueFalse, generateScenario]
  const questions = []
  const maxAttempts = count * 5

  let attempts = 0
  while (questions.length < count && attempts < maxAttempts) {
    const gen = generators[Math.floor(Math.random() * generators.length)]
    const q = gen(tools)
    if (q) {
      questions.push(q)
    }
    attempts++
  }

  return questions
}
