/**
 * Personality Quiz: "你是哪种 AI 工具？"
 * 8 questions, each with 4 options mapping to different personality types
 */

export const personalityQuestions = [
  {
    question: '你更喜欢哪种开发方式？',
    options: [
      { text: '在 IDE 中边写边让 AI 补全', types: ['pioneer', 'efficiency'] },
      { text: '用自然语言描述需求，让 AI 生成', types: ['pragmatist', 'free-spirit'] },
      { text: '在终端中用命令行完成一切', types: ['architect', 'researcher'] },
      { text: '先详细规划再动手实现', types: ['architect', 'pioneer'] },
    ],
  },
  {
    question: '遇到 Bug 你会怎么做？',
    options: [
      { text: '让 AI 帮我分析和修复', types: ['pioneer', 'pragmatist'] },
      { text: '系统地排查，从日志入手', types: ['architect', 'researcher'] },
      { text: '先搜索类似问题的解决方案', types: ['researcher', 'efficiency'] },
      { text: '凭直觉改几个地方试试', types: ['free-spirit', 'pragmatist'] },
    ],
  },
  {
    question: '你最看重工具的什么特性？',
    options: [
      { text: '速度和响应性', types: ['efficiency', 'free-spirit'] },
      { text: 'AI 能力的准确度', types: ['pioneer', 'architect'] },
      { text: '价格和性价比', types: ['pragmatist', 'researcher'] },
      { text: '可定制和可扩展性', types: ['architect', 'free-spirit'] },
    ],
  },
  {
    question: '你理想的工作环境是？',
    options: [
      { text: '功能强大的全能 IDE', types: ['pioneer', 'efficiency'] },
      { text: '简洁快速的编辑器', types: ['free-spirit', 'architect'] },
      { text: '命令行 + 浏览器就够了', types: ['architect', 'researcher'] },
      { text: '什么都不用装，在线就行', types: ['pragmatist', 'free-spirit'] },
    ],
  },
  {
    question: '团队协作时你通常扮演什么角色？',
    options: [
      { text: '技术领袖，做架构决策', types: ['architect', 'pioneer'] },
      { text: '高效执行者，快速交付', types: ['efficiency', 'pragmatist'] },
      { text: '调研者，找到最佳方案', types: ['researcher', 'architect'] },
      { text: '创新者，提出新想法', types: ['free-spirit', 'pioneer'] },
    ],
  },
  {
    question: '对你来说，学习新工具意味着什么？',
    options: [
      { text: '提升开发效率的投资', types: ['efficiency', 'pragmatist'] },
      { text: '探索技术前沿的乐趣', types: ['pioneer', 'free-spirit'] },
      { text: '做出更明智决策的基础', types: ['researcher', 'architect'] },
      { text: '实用就行，不需要深入', types: ['pragmatist', 'efficiency'] },
    ],
  },
  {
    question: '选工具时你更倾向于？',
    options: [
      { text: '大厂出品，生态完善', types: ['pioneer', 'efficiency'] },
      { text: '开源社区，自由可控', types: ['free-spirit', 'architect'] },
      { text: '免费优先，够用就好', types: ['pragmatist', 'researcher'] },
      { text: '最新技术，哪怕不稳定', types: ['free-spirit', 'pioneer'] },
    ],
  },
  {
    question: '你对 AI 编程的态度是？',
    options: [
      { text: 'AI 是我的核心生产力工具', types: ['pioneer', 'efficiency'] },
      { text: 'AI 是辅助，核心逻辑自己写', types: ['architect', 'researcher'] },
      { text: '能少花钱多办事就好', types: ['pragmatist', 'efficiency'] },
      { text: '喜欢尝试各种 AI 工具', types: ['free-spirit', 'researcher'] },
    ],
  },
]

export const personalityResults = {
  pioneer: {
    id: 'pioneer',
    name: '先锋探索者',
    tool: 'Cursor',
    description: '你是技术前沿的领路人，总是第一个拥抱新技术。强大的 AI 能力和前沿功能是你的最爱。',
    traits: ['追求极致', '拥抱创新', '效率至上'],
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  pragmatist: {
    id: 'pragmatist',
    name: '实用主义者',
    tool: 'Trae',
    description: '你注重性价比，追求"够用就好"的实用哲学。免费、稳定、好用就是你的选择标准。',
    traits: ['务实高效', '精打细算', '注重结果'],
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  architect: {
    id: 'architect',
    name: '架构师',
    tool: 'Claude Code',
    description: '你思维缜密，喜欢从全局出发，注重代码质量和架构设计。终端操作和深度思考是你的强项。',
    traits: ['思维全局', '注重质量', '深度思考'],
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  efficiency: {
    id: 'efficiency',
    name: '效率大师',
    tool: 'Windsurf',
    description: '你追求极致的开发效率，每一秒都要花在刀刃上。自动化和智能补全是你的生产力密码。',
    traits: ['效率优先', '自动化', '快速交付'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  researcher: {
    id: 'researcher',
    name: '调研达人',
    tool: 'Gemini',
    description: '你重视信息的准确性和全面性，善于做技术调研和方案比较。深度分析是你的核心能力。',
    traits: ['深度分析', '严谨求证', '方案对比'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  'free-spirit': {
    id: 'free-spirit',
    name: '自由灵魂',
    tool: 'Zed',
    description: '你追求自由和灵活性，喜欢掌控一切。开源、可定制、轻量级是你的关键词。',
    traits: ['追求自由', '灵活多变', '独特品味'],
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
}

/**
 * Calculate personality result from answers
 * @param {Array} answers - array of selected option indexes (0-3) for each question
 * @returns {Object} personality result
 */
export function calculatePersonality(answers) {
  const scores = {}

  answers.forEach((optionIndex, questionIndex) => {
    const question = personalityQuestions[questionIndex]
    if (!question || optionIndex == null) return
    const option = question.options[optionIndex]
    if (!option) return

    option.types.forEach((type) => {
      scores[type] = (scores[type] || 0) + 1
    })
  })

  // Find the type with highest score
  let maxType = 'pioneer'
  let maxScore = 0
  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score
      maxType = type
    }
  }

  return personalityResults[maxType]
}
