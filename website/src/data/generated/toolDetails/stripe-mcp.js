// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.stripe.com/mcp",
    "https://github.com/stripe/ai",
    "https://docs.stripe.com/keys/restricted-api-keys"
  ],
  "id": "stripe-mcp",
  "name": "Stripe MCP",
  "category": "mcp",
  "subcategory": "支付API",
  "developer": "Stripe",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Stripe 官方 remote MCP server；MCP server 不单独定价，实际操作受 Stripe 产品费用、API 权限和账号模式影响",
      "models": "Stripe API tools, documentation search, implementation planner",
      "link": "https://docs.stripe.com/mcp"
    }
  ],
  "freeQuota": "连接方式优先 OAuth；自主 Agent 可用 restricted API keys，sandbox and live mode access 分开管理",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Stripe 官方 MCP Server，remote URL 为 https://mcp.stripe.com",
    "支持 Cursor、Claude Code、ChatGPT、VS Code 和自定义 MCP client",
    "默认推荐 OAuth，比直接使用 secret key 更细粒度且可撤销",
    "Autonomous agents 可用 restricted API keys，并按最小权限授权",
    "工具包括 stripe_api_search、stripe_api_details、stripe_api_read、stripe_api_write、create_refund、search_stripe_documentation 等",
    "MCP access 在 Dashboard 中按 sandbox and live mode 分开管理"
  ],
  "cons": [
    "涉及客户、付款、退款、发票和订阅等高敏资源",
    "stripe_api_write 可触发 POST/PATCH/PUT/DELETE，必须启用 human confirmation",
    "与其他 MCP server 混用时要防 prompt injection",
    "不要把 restricted or secret API keys 写入代码，应放入 secrets vault 或环境变量",
    "Connect 平台调用 connected accounts 时不能用 OAuth，需要 restricted access keys 和 Stripe-Account header"
  ],
  "bestFor": "在 AI IDE 中查询支付数据、调试 Webhook、管理产品",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Stripe MCP 是官方 remote MCP server，不应再指向泛 Claude Code 仓库。支付类 MCP 的重点是权限治理：OAuth 优先，Agent 用 restricted API keys，写工具必须 human confirmation，并且 sandbox/live mode 分开管理。",
    "pitfalls": [
      "优先 OAuth 和 restricted API keys",
      "启用 human confirmation",
      "sandbox/live mode 分开授权"
    ]
  },
  "decisionSummary": {
    "verdict": "适合让 Agent 辅助 Stripe 集成和只读排查；涉及写操作、退款、订阅变更时必须人工确认和最小权限。",
    "bestFor": "Stripe 文档检索、API 集成规划、客户/订单/订阅只读排查、sandbox 调试",
    "avoidIf": "你不能治理 OAuth session、restricted keys、sandbox/live mode 和写工具确认流程",
    "mainRisk": "stripe_api_write、create_refund 等工具可修改真实支付资源；应使用受限 API 密钥、人工确认，并隔离沙箱与正式环境。",
    "alternatives": [
      "Stripe Dashboard",
      "Stripe CLI",
      "自建只读后台"
    ]
  },
  "swot": {
    "S": "官方 remote MCP 与 Stripe API/文档结合",
    "W": "支付写操作高风险",
    "O": "SaaS 计费与 AI 编程工具融合",
    "T": "Dashboard/CLI 和自建权限层"
  },
  "tags": [
    "MCP",
    "免费",
    "Stripe",
    "支付",
    "SaaS"
  ]
}
