// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://github.com/features/copilot/plans",
    "https://docs.github.com/en/copilot/get-started/plans",
    "https://docs.github.com/en/copilot/concepts/billing/individual-plans",
    "https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises"
  ],
  "id": "github-copilot",
  "name": "GitHub Copilot",
  "category": "ide",
  "subcategory": "IDE插件",
  "developer": "GitHub",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0 / Pro $10/月 / Pro+ $39/月 / Max $100/月 / Business $19/席/月 / Enterprise $39/席/月",
      "models": "按计划开放自动模型选择、premium models、Agent mode、Cloud agent 与 AI credits；具体模型以 GitHub Docs 当前表为准",
      "link": "https://github.com/features/copilot/plans"
    }
  ],
  "freeQuota": "Free：最多 2,000 次代码补全/月；付费个人计划含 AI credits，Pro 1,500、Pro+ 7,000、Max 20,000/月",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "GitHub 生态集成最稳",
    "Free 计划可用 2,000 次代码补全/月",
    "Pro、Pro+、Max 计划提供无限 inline suggestions 和不同额度 AI credits",
    "Agent mode、Cloud agent、code review 和 MCP 能力持续扩展",
    "Business/Enterprise 提供组织策略、审计和集中管理；Enterprise 仍可联系销售采购"
  ],
  "cons": [
    "Free 更适合试用而不是主力",
    "高级模型、Cloud agent、代码审查和 Agent 用量受 AI credits 影响",
    "大型跨文件重构不如 AI 原生 IDE 顺手",
    "代码隐私与企业策略需要单独确认",
    "自 2026-04-22 起，GitHub Free/Team 组织的新 Copilot Business 自助注册暂时暂停，采购前需确认销售或企业路径",
    "离线无法使用"
  ],
  "bestFor": "GitHub 用户、多 IDE 开发者",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，GitHub 官方 plans/docs 列出 Free、Pro、Pro+、Max、Business 与 Enterprise；其中 GitHub Free/Team 组织的新 Business 自助注册自 2026-04-22 起暂时暂停。它更像可靠的 GitHub 工作流底座，不是替代 Cursor/Claude Code 的完整深度重构 Agent。",
    "pitfalls": [
      "Free 只有 2,000 次代码补全/月，主力使用通常要升级",
      "高级模型、Cloud agent 和 Agent mode 用量要看 AI credits",
      "GitHub Free/Team 组织的新 Business 自助注册当前暂停，应走官方当前采购入口确认"
    ]
  },
  "decisionSummary": {
    "verdict": "成熟的跨 IDE 与 GitHub 工作流底座，AI credits 体系更透明，但仍不应替代深度重构 Agent。",
    "bestFor": "GitHub 用户、多 IDE 开发者、需要低摩擦代码补全和 Agent mode 的团队",
    "avoidIf": "你需要 AI 原生 IDE 的项目级规划、跨文件大改和独立工作区体验",
    "mainRisk": "高级模型与 Agent 功能的 AI credits 消耗需要持续观察；Business 新自助注册当前还有采购入口限制",
    "alternatives": [
      "Cursor",
      "Claude Code",
      "Gemini CLI"
    ]
  },
  "swot": {
    "S": "生态成熟",
    "W": "功能单一",
    "O": "Workspace",
    "T": "Cursor"
  },
  "tags": [
    "推荐",
    "GitHub",
    "插件",
    "生态",
    "CodingAgent"
  ]
}
