// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://trailofbits.com/skills/ask-questions-if-underspecified/",
    "邻近本地 skill: superpowers:brainstorming",
    "邻近本地 skill: product-design:get-context"
  ],
  "id": "ask-questions-skill",
  "name": "ask-questions-if-underspecified",
  "category": "skill",
  "subcategory": "开发工具",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "针对需求不明确的任务，提出最少量澄清问题，识别必须回答的问题并处理未声明假设",
      "link": "https://trailofbits.com/skills/ask-questions-if-underspecified/"
    }
  ],
  "freeQuota": "暂无独立免费额度证据；取决于 Codex 会话和相关插件",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明该 Skill 生成 minimum set of clarifying questions",
    "强调 implementation 前先提出 must-have questions，或在用户同意后明确 assumptions",
    "brainstorming 要求先探索上下文、提出方案并获得设计批准",
    "Product Design get-context 要求在 UI 工作前确认产品、视觉来源和交互级别",
    "适合用 one targeted question 解决关键不确定性"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "过度提问会阻塞明确任务",
    "需要区分必须澄清和可用保守默认处理的问题"
  ],
  "bestFor": "复杂需求前的 brief 澄清、产品设计上下文确认、降低误解返工风险",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-08，ask-questions-if-underspecified 有 Trail of Bits 公开上游，定位是用 minimum set of clarifying questions 找出 must-have questions；它应与 brainstorming 和 get-context 搭配，避免过度提问。",
    "pitfalls": [
      "只问阻塞决策的问题",
      "能用安全默认值推进时不要过度等待",
      "产品设计问题先走 get-context"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为复杂任务前的最小澄清问题工作流。",
    "bestFor": "模糊需求、产品 UI brief、复杂实现前的关键决策澄清",
    "avoidIf": "任务已经明确、低风险，继续提问只会拖慢执行",
    "mainRisk": "如果不控制问题数量，minimum set of clarifying questions 仍可能把主动协作变成阻塞。",
    "alternatives": [
      "brainstorming",
      "Product Design get-context",
      "writing-plans"
    ]
  },
  "swot": {
    "S": "可减少需求误解",
    "W": "需单独安装且容易过度提问",
    "O": "可并入 brainstorming / get-context",
    "T": "模型原生意图理解提升"
  },
  "tags": [
    "Skills",
    "需求澄清",
    "协作",
    "已核验",
    "public-upstream"
  ]
}
