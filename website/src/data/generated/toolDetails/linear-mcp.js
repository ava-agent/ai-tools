// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://linear.app/docs/mcp",
    "https://linear.app/pricing"
  ],
  "id": "linear-mcp",
  "name": "Linear MCP",
  "category": "mcp",
  "subcategory": "项目管理",
  "developer": "Linear",
  "logo": null,
  "versions": [
    {
      "type": "Remote",
      "pricing": "Linear workspace 计划适用：Free 含 250 issues，Basic $10 per user/month，Business $16 per user/month",
      "models": "https://mcp.linear.app/mcp；OAuth token 或 API keys；Authorization: Bearer",
      "link": "https://linear.app/docs/mcp"
    }
  ],
  "freeQuota": "Linear Free 计划含 250 issues；MCP access、AI credits、issue/project/comment 操作和 API limits 受 workspace plan 与权限影响",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Linear 官方 remote MCP，入口为 https://mcp.linear.app/mcp",
    "支持通过 OAuth token 或 API keys 接入，API key 可用 Authorization: Bearer 头",
    "适合在 AI 客户端查找、创建和更新 issues、projects、comments",
    "Pricing 页面明确列出 Free、Basic $10 per user/month、Business $16 per user/month",
    "Agent platform 中包含 MCP access 和 AI credits 相关能力"
  ],
  "cons": [
    "不是独立无限额度能力，受 Linear workspace plan、OAuth scopes、API keys 权限和 API limits 影响",
    "写入 issue、comment、project status 前应做人工确认",
    "Free 的 250 issues 和 AI credits 边界需要按 workspace 当前计划复核",
    "管理员应最小化 token 权限并定期轮换"
  ],
  "bestFor": "把 Linear issue、project、comment 上下文接入 AI 客户端，辅助研发任务流转",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-08，Linear MCP 应按官方 remote MCP 和 workspace 计划来判断：它很适合让 Agent 处理 issues/projects/comments，但费用、AI credits、API limits 和 token scopes 都跟 Linear workspace 治理绑定。",
    "pitfalls": [
      "OAuth/API key 最小权限",
      "写操作人工确认",
      "复核 plan 与 AI credits"
    ]
  },
  "decisionSummary": {
    "verdict": "适合 Linear 团队把 issue/project/comment 流程接入 AI 客户端；价格与额度按 workspace plan、MCP access 和 AI credits 判断。",
    "bestFor": "研发任务查询、issue/comment 草稿、项目状态整理和低风险更新",
    "avoidIf": "你无法治理 OAuth token、API keys、Authorization: Bearer 凭据或写操作确认",
    "mainRisk": "Agent 可创建和更新真实 Linear 记录；AI credits、Free/Basic/Business 计划、API limits 与权限治理会影响成本和可靠性。",
    "alternatives": [
      "Linear Web/App",
      "Linear API",
      "Jira/GitHub Issues"
    ]
  },
  "swot": {
    "S": "官方 remote MCP 与研发任务语义强",
    "W": "计划、credits 和权限边界需要治理",
    "O": "AI 辅助 issue/project 流转",
    "T": "Jira/GitHub Issues/Shortcut"
  },
  "tags": [
    "MCP",
    "Linear",
    "项目管理",
    "Issue",
    "OAuth",
    "官方",
    "已核验"
  ]
}
