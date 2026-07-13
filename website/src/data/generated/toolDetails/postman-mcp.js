// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/overview",
    "https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server",
    "https://www.postman.com/pricing/"
  ],
  "id": "postman-mcp",
  "name": "Postman MCP",
  "category": "mcp",
  "subcategory": "API工具",
  "developer": "Postman",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Postman 官方 MCP Server；Postman 工作区、计划和 API 权限另行适用",
      "models": "Minimal / Code / Full tool configurations, 100+ Postman tools",
      "link": "https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/overview"
    },
    {
      "type": "US Remote",
      "pricing": "OAuth 推荐；也支持 Bearer API key",
      "models": "https://mcp.postman.com/minimal, /code, /mcp",
      "link": "https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server"
    },
    {
      "type": "EU / Local",
      "pricing": "EU remote server 和 local server 需要 Postman API key",
      "models": "https://mcp.eu.postman.com/minimal, /code, /mcp",
      "link": "https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server"
    }
  ],
  "freeQuota": "MCP server 本身不是独立免费额度承诺；实际使用受 Postman account、workspace 权限、API key/OAuth 与 pricing plan 影响",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "Postman 官方 MCP Server，可让 Agent 管理 collections、specs、environments、workspaces 等 Postman 资源",
    "提供 Minimal、Code、Full 三种配置，Full 覆盖 100+ tools，日常可先用 Minimal 降低工具面",
    "remote MCP 支持 OAuth、DCR 和 PKCE，US/EU endpoint 与认证方式需要分开配置",
    "US remote server 支持 OAuth，官方说明 OAuth 不需要手动 API key，且符合 MCP Authorization specification",
    "EU remote server only supports API key authentication，local server 也需要 API key",
    "Codex 可用 remote URL https://mcp.postman.com/minimal，或通过 npx @postman/postman-mcp-server 搭配 POSTMAN_API_KEY"
  ],
  "cons": [
    "Full 模式工具面很大，Agent 可改 collections、environments、workspace 等资源，需限制工作区和人工确认",
    "API key 应存入环境变量或 secret store，不要写进共享配置",
    "EU remote server 必须使用 API key，不能按 US OAuth 流程配置",
    "Postman pricing、团队权限和高级协作能力仍按 Postman 计划结算"
  ],
  "bestFor": "让 Agent 在受控工作区内辅助维护 Postman collections、specs、environments 和 API 文档",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，Postman MCP 已有官方文档和 remote server。选型重点不是“能不能免费启动”，而是 Minimal/Code/Full 的工具面、OAuth/DCR/PKCE/API key 的区域差异，以及 Agent 是否会改动共享工作区资源。",
    "pitfalls": [
      "默认先用 Minimal",
      "API key 放 secrets",
      "Full 模式写操作要人工确认"
    ]
  },
  "decisionSummary": {
    "verdict": "适合 Postman 重度用户把 API 文档、集合和环境维护接入 Agent；默认用 Minimal，写共享资源前人工确认。",
    "bestFor": "Postman collections/specs/environments 的查询、同步和轻量维护",
    "avoidIf": "你无法治理 workspace 权限、API key/OAuth、区域差异和 Agent 写操作确认",
    "mainRisk": "Full 配置暴露 100+ Postman tools；OAuth/API key 与 EU remote server 规则不同，权限过大时可能误改共享 API 资产。",
    "alternatives": [
      "Postman Web/桌面端",
      "Postman CLI/Newman",
      "OpenAPI tooling"
    ]
  },
  "swot": {
    "S": "官方 remote/local MCP 与 Postman API 深集成",
    "W": "Full 工具面和共享资源写风险",
    "O": "API 协作自动化",
    "T": "IDE 内置 HTTP/OpenAPI 工具"
  },
  "tags": [
    "MCP",
    "Postman",
    "API测试",
    "API",
    "官方"
  ]
}
