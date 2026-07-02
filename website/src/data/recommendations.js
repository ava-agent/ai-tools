// src/data/recommendations.js
export const recommendations = [
  {
    id: 'daily-coding',
    label: '日常开发',
    tools: ['cursor', 'github-copilot'],
    insight: '优先选主力 IDE 与低摩擦补全组合；高频写码先看免费额度、补全质量和团队 IDE 兼容性。',
  },
  {
    id: 'complex-refactor',
    label: '复杂重构',
    tools: ['claude-code', 'cursor'],
    insight: '跨多文件、要改架构时优先看 CLI/Agent 能力；先小步验证，再放大到整个代码库。',
  },
  {
    id: 'free-stack',
    label: '免费层优先',
    tools: ['trae', 'gemini-cli'],
    insight: '预算敏感时先组合免费层、官方 CLI 和开源工具；注意额度刷新、排队、账号地区和模型可用性。',
  },
  {
    id: 'long-context',
    label: '长上下文研究',
    tools: ['gemini-cli', 'claude-code'],
    insight: '读仓库、长日志和文档调研时优先看上下文窗口、检索能力、终端工作流和可复现引用。',
  },
  {
    id: 'visual-generation',
    label: '视觉生成',
    tools: ['midjourney', 'sora', 'dalle'],
    insight: '图像、视频和多模态生成要分开选型；先核对商用授权、文字生成质量和成本上限。',
  },
]
