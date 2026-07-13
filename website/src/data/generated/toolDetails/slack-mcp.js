// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.slack.dev/ai/slack-mcp-server",
    "https://slack.com/help/articles/48855576908307-Guide-to-Model-Context-Protocol-in-Slack",
    "https://api.slack.com/authentication/oauth-v2"
  ],
  "id": "slack-mcp",
  "name": "Slack MCP",
  "category": "mcp",
  "subcategory": "协作工具",
  "developer": "Slack",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Slack MCP server；Slack workspace/Enterprise 权限、partner app 和计划另行适用",
      "models": "Slack MCP tools for search, messages, canvases, member info",
      "link": "https://slack.com/help/articles/48855576908307-Guide-to-Model-Context-Protocol-in-Slack"
    }
  ],
  "freeQuota": "未作为独立永久免费额度承诺；可用性取决于 Slack workspace/Enterprise、partner app、管理员批准和 OAuth scopes",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Slack 官方说明 MCP server provides secure access to your Slack workspace，让第三方 AI assistants 能访问组织数据",
    "官方 Slack MCP Server 可搜索频道、发送消息，并由工作区管理员审批和管理 MCP 客户端集成",
    "官方端点为 https://mcp.slack.com/mcp；工具同样受 Slack Web API rate limits 约束",
    "可搜索消息、文件、成员和频道，并读取或发送消息",
    "连接后 AI 助手可以读取指定频道或会话、发送消息并创建 Canvas",
    "Slack OAuth 使用权限范围；权限范围决定应用具体可以访问哪些功能和数据",
    "适合把 Slack 搜索和线程上下文带入受控 Agent 工作流"
  ],
  "cons": [
    "消息、文件、成员资料和 channel history 都可能含敏感信息，OAuth scopes 必须最小化",
    "发送消息属于写操作，默认应要求人工确认",
    "Slack MCP 依赖 partner app/管理员批准，不能把任意客户端接入视为稳定可用",
    "非 Marketplace 或自建应用还要关注 Slack API rate limits 和 workspace policy"
  ],
  "bestFor": "在受控 workspace 中让 Agent 检索 Slack 上下文，或在人工确认后辅助回复线程",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Slack 已有官方 MCP Server 文档。它的关键价值是把 Slack 搜索、频道/线程、消息发送和 Canvas 变成 Agent 上下文；关键风险是同一个连接可能读取或发送消息，所以应按工作区策略、管理员审批和 OAuth 权限范围进行最小授权。",
    "pitfalls": [
      "最小化 OAuth scopes",
      "写消息前人工确认",
      "敏感频道先排除"
    ]
  },
  "decisionSummary": {
    "verdict": "适合把 Slack 历史消息和线程上下文接入 Agent；默认按只读优先、最小 scopes、发送消息人工确认来配置。",
    "bestFor": "Slack 消息/文件/成员/频道搜索，线程上下文整理，人工确认后的回复草稿",
    "avoidIf": "你无法限制频道范围、OAuth scopes、partner app 权限，或不希望 Agent 接触内部沟通数据",
    "mainRisk": "Slack MCP 可读取指定频道或会话，也可发送消息；OAuth 权限范围和工作区管理不到位会扩大内部数据与误发消息风险。",
    "alternatives": [
      "Slack 搜索",
      "Slack Workflow Builder",
      "只读导出/知识库同步"
    ]
  },
  "swot": {
    "S": "团队沟通集成",
    "W": "权限管理复杂",
    "O": "远程办公需求",
    "T": "原生 Slack AI"
  },
  "tags": [
    "MCP",
    "Slack",
    "协作",
    "消息",
    "官方"
  ]
}
