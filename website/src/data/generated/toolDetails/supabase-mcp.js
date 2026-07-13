// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://supabase.com/docs/guides/ai-tools/mcp",
    "https://github.com/supabase/mcp"
  ],
  "id": "supabase-mcp",
  "name": "Supabase MCP",
  "category": "mcp",
  "subcategory": "开发工具",
  "developer": "Supabase",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "官方 Remote MCP Server；使用受 Supabase 项目、组织权限和计划限制；server pre-1.0",
      "models": "Account management, database, docs, debugging, development, functions, storage and branching feature groups；Storage 默认禁用",
      "link": "https://supabase.com/docs/guides/ai-tools/mcp"
    }
  ],
  "freeQuota": "MCP server 本身不单独售卖；Branching requires a paid plan，项目资源仍按 Supabase 计划计费",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "Supabase 官方 MCP Server，Remote URL 为 https://mcp.supabase.com/mcp",
    "OAuth 登录通常不再需要手动 PAT；CI 可用 Authorization header",
    "可用 read_only=true 让 SQL 以 read-only Postgres user 执行并禁用 mutating tools",
    "可用 project_ref 限定单个项目，避免访问组织内所有项目",
    "可用 features=database,docs 等参数只启用必要工具组",
    "覆盖 account、database、debugging、development、functions、docs、storage、branching 等 feature groups；Storage 默认禁用"
  ],
  "cons": [
    "官方明确提示切勿将 MCP 服务器连接到生产数据；仅用于开发和测试",
    "不设 project_ref 时可访问组织内所有项目，权限面过大",
    "read-only 只控制数据库写入和 mutating tools，仍要管理 OAuth/PAT 与组织权限",
    "server pre-1.0，工具和 schema 可能变化",
    "分支功能需要付费套餐"
  ],
  "bestFor": "在 AI IDE 中直接管理 Supabase 项目：数据库、Auth、存储、Functions",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，Supabase 官方文档已经把安全边界写得很清楚：默认建议 project_ref + read_only=true，并可用 features 限制工具组。它适合开发和测试，不应直接连生产数据。",
    "pitfalls": [
      "默认加 project_ref 和 read_only=true",
      "生产数据不要直连",
      "用 features=database,docs 收敛工具面"
    ]
  },
  "decisionSummary": {
    "verdict": "适合开发/测试环境中让 Agent 查询 Supabase schema、日志和文档；默认应 project-scoped、read-only、最小 feature groups。",
    "bestFor": "开发环境数据库查询、schema 理解、日志排查、TypeScript types 生成",
    "avoidIf": "你要让未充分约束的 Agent 直接连接生产数据库、Auth 或 Storage",
    "mainRisk": "未设置 project_ref、read_only 和 features 会扩大权限面；官方也提示切勿将 MCP 服务器连接到生产数据。",
    "alternatives": [
      "Supabase CLI",
      "只读数据库账号",
      "Postgres MCP"
    ]
  },
  "swot": {
    "S": "官方 remote MCP 与 Supabase 深集成",
    "W": "权限和生产数据风险高",
    "O": "AI 辅助全栈开发",
    "T": "Postgres/Firebase/Neon MCP"
  },
  "tags": [
    "推荐",
    "MCP",
    "开源",
    "Supabase",
    "全栈",
    "官方"
  ]
}
