// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://mcp.sentry.dev/",
    "https://github.com/getsentry/sentry-mcp",
    "https://docs.sentry.io/product/sentry-mcp/",
    "https://docs.sentry.io/account/auth-tokens/",
    "https://docs.sentry.io/api/auth/"
  ],
  "id": "sentry-mcp",
  "name": "Sentry MCP",
  "category": "mcp",
  "subcategory": "监控调试",
  "developer": "Sentry",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Sentry MCP / OAuth；Sentry 项目、组织和计划另行适用",
      "models": "Sentry issue, project and telemetry context through MCP",
      "link": "https://docs.sentry.io/product/sentry-mcp/"
    }
  ],
  "freeQuota": "MCP 连接不等于 Sentry 数据免费；使用受 Sentry plan、organization/project permissions、OAuth/Auth Token scopes 限制",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Sentry MCP 支持通过 OAuth authentication flow 连接 Claude Code 等 MCP client",
    "官方仓库说明 remote MCP 主要面向 human-in-the-loop coding agents 和 debugging workflows，不是 general-purpose MCP server",
    "可把 Sentry issue、stack trace、project context 和 production error data 带入 Agent 排查",
    "Auth Token 模式需要明确 permissions and scopes，并映射到 Sentry API 权限",
    "适合只读查看错误上下文、生成修复假设和复现线索",
    "可与项目/组织权限结合，按 project scopes 收敛访问面"
  ],
  "cons": [
    "production error data 可能包含 PII、请求参数、客户标识或内部路径，接入 Agent 前需确认数据脱敏和保留策略",
    "Auth Token scopes 过大时可访问组织或项目级敏感数据",
    "AI 给出的根因和修复建议仍需复现、测试和人工审查",
    "完整 API 能力和历史数据受 Sentry plan 与组织权限影响"
  ],
  "bestFor": "在 AI IDE 中只读检索 Sentry 错误上下文，并辅助生成可验证的修复方案",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-08，Sentry MCP 的选型重点是错误数据治理：OAuth/Auth Token 如何授权、哪些 project scopes 可见、production error data 中是否含 PII，以及 Agent 输出是否有测试闭环。它更适合 human-in-the-loop coding agents，不应当成 general-purpose MCP server。",
    "pitfalls": [
      "优先只读和最小 scopes",
      "确认 PII 脱敏",
      "修复建议必须复现和测试"
    ]
  },
  "decisionSummary": {
    "verdict": "适合把 Sentry 错误上下文带入 Agent 做排查辅助；默认只读、项目级授权、保护 PII，并用测试验证修复。",
    "bestFor": "错误堆栈分析、issue 聚类、复现线索整理、修复草案生成",
    "avoidIf": "你无法约束 organization/project scopes，或错误事件中包含未脱敏的客户数据和 PII",
    "mainRisk": "Sentry MCP 会暴露 production error data；Auth Token/OAuth permissions and scopes 配置过大时，Agent 可接触敏感项目和用户数据。",
    "alternatives": [
      "Sentry Web UI",
      "Sentry CLI",
      "只读错误摘要导出"
    ]
  },
  "swot": {
    "S": "AI 辅助 Debug 闭环",
    "W": "依赖 Sentry",
    "O": "可观测性 + AI",
    "T": "其他 APM 工具 MCP"
  },
  "tags": [
    "MCP",
    "Sentry",
    "监控",
    "Debug",
    "错误追踪"
  ]
}
