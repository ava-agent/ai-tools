// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://developers.notion.com/guides/mcp/overview",
    "https://developers.notion.com/guides/mcp/get-started-with-mcp",
    "https://github.com/makenotion/notion-mcp-server"
  ],
  "id": "notion-mcp",
  "name": "Notion MCP",
  "category": "mcp",
  "subcategory": "协作工具",
  "developer": "Notion Labs",
  "logo": null,
  "versions": [
    {
      "type": "Remote",
      "pricing": "Notion hosted server；Notion workspace、plan、权限和 API 限流另行适用",
      "models": "托管式远程 MCP 服务，采用标准 OAuth，并根据访问权限读写内容",
      "link": "https://developers.notion.com/guides/mcp/overview"
    },
    {
      "type": "Local (not actively supported)",
      "pricing": "local MCP server repository 仍可参考，但官方不再积极支持或监控",
      "models": "local MCP server repository；remote MCP 和 OAuth 入口优先",
      "link": "https://github.com/makenotion/notion-mcp-server"
    }
  ],
  "freeQuota": "MCP 连接本身不代表 Notion 功能或额度承诺；实际能力受 workspace plan、Notion AI、用户权限与 rate limits 影响",
  "contextWindow": "N/A",
  "chineseSupport": 4,
  "pros": [
    "Notion 官方 hosted server 可通过 remote MCP 接入",
    "standard OAuth 授权后按用户 access and permissions 执行 read and write",
    "可查询、创建和更新页面、数据库、评论等 Notion workspace 内容",
    "官方 supported tools 文档可作为工具面来源",
    "适合把项目文档、任务库和团队知识带入 AI 客户端"
  ],
  "cons": [
    "OAuth 后 Agent 可按用户权限读写真实 workspace 内容，需先限定工作区和页面访问范围",
    "查询 data sources、connected sources 和 AI search 会受 Notion AI、Business/Enterprise 能力与 rate limits 影响",
    "local MCP server repository 已不是推荐集成路径，GitHub issues/PRs not actively monitored",
    "复杂数据库 schema 和团队权限仍需要人工确认"
  ],
  "bestFor": "在 AI 客户端中受控查询、创建和更新 Notion 文档、数据库、项目资料",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Notion MCP 的准确口径应从旧本地包转向官方 hosted server：remote MCP + standard OAuth，Agent 能在用户 access and permissions 范围内 read and write。选型重点是权限、限流、Notion AI/计划门槛和写操作确认。",
    "pitfalls": [
      "限定 workspace/page 权限",
      "写入前人工确认",
      "不要按旧本地包口径采购"
    ]
  },
  "decisionSummary": {
    "verdict": "适合把 Notion workspace 纳入 AI 客户端，但必须按 OAuth、用户权限、工具面和限流治理来评估。",
    "bestFor": "团队文档、项目数据库、知识库页面和评论的受控查询与更新",
    "avoidIf": "你不能接受 Agent 按用户权限读写 Notion 内容，或无法治理 workspace 访问范围与计划限制",
    "mainRisk": "OAuth 授权后 Agent 可按 access and permissions 对 Notion 内容 read and write；部分搜索和数据源能力受 Notion AI、计划与 rate limits 影响。",
    "alternatives": [
      "Notion Web/API",
      "只读知识库同步",
      "本地 Markdown runbook"
    ]
  },
  "swot": {
    "S": "官方 hosted server 与 OAuth",
    "W": "权限和计划边界复杂",
    "O": "AI 文档与项目资料自动化",
    "T": "Google Drive/Confluence/飞书等知识库 MCP"
  },
  "tags": [
    "MCP",
    "Notion",
    "知识库",
    "OAuth",
    "官方",
    "团队协作",
    "已核验"
  ]
}
