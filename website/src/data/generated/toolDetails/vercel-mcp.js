// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://vercel.com/docs/agent-resources/vercel-mcp",
    "https://vercel.com/docs/agent-resources/vercel-mcp/tools"
  ],
  "id": "vercel-mcp",
  "name": "Vercel MCP",
  "category": "mcp",
  "subcategory": "开发工具",
  "developer": "Vercel",
  "logo": null,
  "versions": [
    {
      "type": "Remote Beta",
      "pricing": "Vercel MCP is Beta and available on all plans；Vercel 资源、seat、domain 和用量仍按计划计费",
      "models": "OAuth 远程端点为 https://mcp.vercel.com；工具分为公开工具和需认证工具",
      "link": "https://vercel.com/docs/agent-resources/vercel-mcp"
    }
  ],
  "freeQuota": "MCP 入口本身不等于资源免单；项目、部署、日志、域名购买和运行资源按 Vercel plan/resource billing applies",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "Vercel 官方 remote MCP，Beta 阶段可在 all plans 试用",
    "入口为 https://mcp.vercel.com，使用 OAuth 授权",
    "将 public tools 与 authenticated tools 分开，未登录可查文档，登录后可触达项目、部署、日志和 Agent Runs",
    "工具参考包含 get_runtime_logs 等日志排查能力",
    "approved by Vercel 的客户端会收到 reviewed/approved 标识；官方仍有 approved clients 支持边界"
  ],
  "cons": [
    "需认证工具可触达真实项目、部署、日志、受保护 URL、Toolbar 讨论串、域名查询或购买及 CLI 部署操作，必须启用人工确认",
    "官方明确提示 prompt injection 风险，不能把未审查网页内容直接变成生产操作",
    "实际成本按 Vercel plan、资源用量、seat 和域名交易结算",
    "Beta 工具面和客户端支持可能变化"
  ],
  "bestFor": "在 AI 客户端中查询 Vercel 文档、项目、部署状态和运行日志，并受控执行平台操作",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-08，Vercel MCP 是官方 Beta remote MCP。它适合让 Agent 查 docs、项目、部署和日志，但 authenticated tools 已经接近运维入口，且官方客户端支持有 approved clients 限制；必须把 human confirmation、prompt injection 和账单边界放在第一层。",
    "pitfalls": [
      "开启 human confirmation",
      "限制 OAuth 账号权限",
      "高风险操作先在预览环境验证"
    ]
  },
  "decisionSummary": {
    "verdict": "适合 Vercel 用户把 docs、projects、deployments 和 runtime logs 接入 Agent；生产动作必须有确认和账单意识。",
    "bestFor": "Vercel 项目诊断、部署状态查询、运行日志排查和文档检索",
    "avoidIf": "你无法控制 OAuth 授权范围、账单风险，或不愿对 Agent 触发的平台动作做人工确认",
    "mainRisk": "authenticated tools 可触达真实 Vercel 资源；prompt injection 与误操作可能造成部署、域名购买或账单影响，必须 human confirmation。",
    "alternatives": [
      "Vercel Dashboard",
      "Vercel CLI",
      "只读日志/部署摘要导出"
    ]
  },
  "swot": {
    "S": "官方 remote MCP 与 Vercel 平台上下文",
    "W": "Beta 与平台绑定",
    "O": "AI 辅助部署诊断和日志排查",
    "T": "Netlify/Cloudflare/Render 工具链"
  },
  "tags": [
    "MCP",
    "Vercel",
    "部署",
    "Next.js",
    "OAuth",
    "官方",
    "已核验"
  ]
}
