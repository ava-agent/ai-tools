// src/data/recommendations.js
export const recommendations = [
  {
    id: 'daily-coding',
    label: '日常编码',
    tools: ['cursor'],
    insight: '主力 IDE，Composer 跨文件重构是护城河，但不要让它一次改超过 10 个文件',
  },
  {
    id: 'complex-refactor',
    label: '复杂重构',
    tools: ['claude-code'],
    insight: '超过 10 文件的改动切到 CLI，Agent 能力最强，终端里的架构师',
  },
  {
    id: 'free-stack',
    label: '零成本方案',
    tools: ['trae', 'gemini-cli'],
    insight: 'Trae 写代码 + Gemini CLI 做调研，1M 上下文分析长文档无敌',
  },
  {
    id: 'visual-design',
    label: '视觉设计',
    tools: ['midjourney'],
    insight: '艺术风格选 Midjourney，含文字的设计用 GPT-5 图像生成',
  },
]
