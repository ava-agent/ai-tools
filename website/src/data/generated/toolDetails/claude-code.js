// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan",
    "https://support.claude.com/en/articles/11049741-what-is-the-max-plan",
    "https://docs.anthropic.com/en/docs/claude-code/costs",
    "https://docs.anthropic.com/en/docs/about-claude/pricing"
  ],
  "id": "claude-code",
  "name": "Claude Code",
  "category": "cli",
  "subcategory": "终端Agent",
  "developer": "Anthropic",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Claude Pro/Max 订阅路径可用；API 路径按 token 消耗计费，订阅计划价格以 claude.com/pricing 为准",
      "models": "Claude models（以当前账号/计划/API 可用模型为准）",
      "link": "https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan"
    }
  ],
  "freeQuota": "无独立永久免费额度；Pro/Max 使用量与 Claude 共用，API 路径按 token 和组织限制计费",
  "contextWindow": "取决于当前 Claude 模型与订阅/API 路径",
  "chineseSupport": 4,
  "pros": [
    "终端和支持的 IDE 中直接使用 Claude models",
    "Pro/Max 订阅与 Claude Code 统一，不一定需要单独 API key",
    "VS Code、Cursor forks、JetBrains 等 IDE 路径可用",
    "API 路径按 token 消耗，适合需要组织级计费、限额和自动化的场景",
    "官方成本文档强调按模型、代码库规模和自动化使用量管理成本"
  ],
  "cons": [
    "Pro/Max 使用量与 Claude 共用",
    "API token 消耗与订阅路径分开，开错路径会产生额外成本",
    "Max/订阅路径仍有使用限制和优先级差异",
    "仅限 Claude 生态，模型选择不如多模型 CLI 灵活",
    "简单任务可能过度消耗高价值额度"
  ],
  "bestFor": "关键方案、复杂重构、高难定位、大型代码库",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 5,
    "insights": "截至 2026-07-13，Claude Code 仍适合把高难任务交给 Claude 在终端或 IDE 里推进。官方成本文档强调 API 路径按 token 消耗计费，订阅计划价格应回到 claude.com/pricing；Pro/Max 订阅路径和 API 路径要分开管理。",
    "pitfalls": [
      "先确认是 Pro/Max 订阅路径还是 API token 路径",
      "关键任务再用",
      "订阅路径仍有使用限制和优先级差异",
      "简单任务可能过度消耗高价值额度"
    ]
  },
  "decisionSummary": {
    "verdict": "强任务优先的 Claude 终端/IDE Agent，适合复杂方案和高难重构，但要严控订阅路径和 API token 成本。",
    "bestFor": "关键方案、复杂重构、高难定位、大型代码库",
    "avoidIf": "你需要永久免费主力工具、多模型自由切换，或不希望与 Claude 对话额度共享",
    "mainRisk": "Pro/Max 使用量与 Claude 共用，API token 消耗又是单独计费路径，容易误判真实成本",
    "alternatives": [
      "Gemini CLI",
      "Codex",
      "Cursor"
    ]
  },
  "swot": {
    "S": "复杂任务能力突出",
    "W": "价格高",
    "O": "企业需求",
    "T": "低成本替代"
  },
  "tags": [
    "推荐",
    "CLI",
    "Claude",
    "AgentTeams",
    "ContextCompaction",
    "AdaptiveThinking"
  ],
  "video": {
    "src": "./videos/claude-code.mp4"
  }
}
