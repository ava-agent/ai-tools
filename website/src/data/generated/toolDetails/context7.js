// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://context7.com/plans",
    "https://context7.com/docs/installation",
    "https://context7.com/docs/resources/all-clients",
    "https://github.com/upstash/context7",
    "https://context7.com/about"
  ],
  "id": "context7",
  "name": "Context7",
  "category": "mcp",
  "subcategory": "AI增强",
  "developer": "Upstash",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free for personal use：1,000 API calls/月；Pro $10/seat/月，含 5,000 free API calls/seat/月，额外 $10/1,000 calls",
      "models": "远程端点 https://mcp.context7.com/mcp；当前推荐用 npx ctx7 setup 配置 MCP 或 Skills",
      "link": "https://context7.com/plans"
    }
  ],
  "decisionSummary": {
    "verdict": "适合给 AI 编码工具补最新库文档，但应按 public/private repo、API calls 和团队席位区分成本。",
    "bestFor": "Cursor、Claude Code、Codex、Gemini CLI 等需要查询最新 API/框架文档的编码场景",
    "avoidIf": "你需要完全离线、完全本地的文档检索，或对社区收录文档质量没有复核流程",
    "mainRisk": "Free 计划只有 1,000 API calls/月；Pro 为 $10/seat/月并含 5,000 free API calls/seat/月，私有仓库解析另按 tokens 计费。",
    "alternatives": [
      "Playwright MCP",
      "Firecrawl MCP",
      "官方框架文档"
    ]
  },
  "freeQuota": "Free for personal use，公开仓库场景含 1,000 API calls/月；更高限额、私有仓库和团队协作需 Pro/Enterprise",
  "contextWindow": "按需查询",
  "chineseSupport": 3,
  "pros": [
    "提供远程 MCP 服务，当前推荐通过 npx ctx7 setup 配置客户端",
    "支持 CLI + Skills 与 MCP 双模式，远程端点为 https://mcp.context7.com/mcp",
    "可查询版本化文档和代码示例",
    "支持 Cursor / Claude Code / Codex / Gemini CLI 等多种客户端配置",
    "API key 可提升限额并支持私有仓库能力",
    "Enterprise pricing 按 seat 和 teamspace size 调整，小团队约 $30/user/month 起，大团队可低至 $2.50/user/month",
    "由 Upstash 团队维护且开源 MCP server"
  ],
  "cons": [
    "免费层有 1,000 API calls/月限制",
    "私有仓库和团队协作需要 Pro 或 Enterprise",
    "查询结果依赖社区收录与源文档质量",
    "需要联网使用",
    "私有仓库解析按 token 另计费"
  ],
  "bestFor": "开发时实时查阅最新 API 文档、减少过期代码示例和 hallucinated API",
  "funRanking": "夯夯夯",
  "personalExperience": {
    "rating": 5,
    "insights": "截至 2026-07-13，MCP Core 核心工具之一。它把最新、版本化的库文档拉进 AI 编码上下文，尤其适合处理训练数据落后的 API 用法。当前不能再按“无限免费”理解：个人公开仓库有免费层，团队、私有仓库、较高调用量、Enterprise seat pricing 和解析私有源都要看 Context7 Plans。",
    "pitfalls": [
      "免费层 API calls 有月度上限",
      "私有仓库解析和团队空间会产生额外成本",
      "社区收录内容仍需对照官方文档复核"
    ]
  },
  "swot": {
    "S": "远程 MCP、版本化文档",
    "W": "调用限额与私有仓库成本",
    "O": "成为 AI 编码文档层",
    "T": "各框架自建 MCP 或 IDE 内置文档检索"
  },
  "tags": [
    "推荐",
    "MCP",
    "Free tier",
    "文档查询",
    "防幻觉",
    "API key"
  ]
}
