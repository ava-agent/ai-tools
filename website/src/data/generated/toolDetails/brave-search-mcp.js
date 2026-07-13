// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://brave.com/search/api/",
    "https://github.com/brave/brave-search-mcp-server",
    "https://brave.com/search/api/guides/use-with-openclaw/"
  ],
  "id": "brave-search-mcp",
  "name": "Brave Search MCP",
  "category": "mcp",
  "subcategory": "搜索",
  "developer": "Brave Software",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Search 每 1,000 次请求 5 美元，含每月 5 美元免费额度；Answers 每 1,000 次请求 4 美元，另加每百万输入/输出 token 5 美元",
      "models": "Brave Search API + Brave Search MCP Server",
      "link": "https://brave.com/search/api/"
    }
  ],
  "freeQuota": "每月自动应用 $5 in free monthly credits；建议在 dashboard 设置 usage limits 控制预算",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Brave 官方 MCP Server，集成 Brave Search API",
    "Search 计划列出 $5 per 1,000 requests，并包含 $5 in free monthly credits",
    "Answers 计划列出 $4 per 1,000 requests + $5 per million input/output tokens",
    "MCP Server 支持 web、local、video、image、news、summarizer、place search 和 brave_llm_context",
    "默认 STDIO transport，HTTP 需设置 BRAVE_MCP_TRANSPORT 或 --transport http",
    "适合给 RAG 和 Agent 提供独立搜索索引与 LLM context"
  ],
  "cons": [
    "旧的 2,000 免费查询/月口径已不适合作为当前价格说明",
    "需要 Brave Search API key，必须监控用量并设置 usage limits",
    "Answers 还会产生 token 费用",
    "中文搜索效果和索引覆盖需要按场景实测"
  ],
  "bestFor": "在 AI IDE 中进行隐私优先的网络搜索和信息检索",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Brave Search API 已按 credits 和请求数展示价格：Search 是 $5/1,000 requests，Answers 是 $4/1,000 requests 外加 token 费用。Brave MCP Server 本身是官方仓库，但真实成本取决于 API key 用量。",
    "pitfalls": [
      "不要再写 2,000 免费查询/月",
      "先设置 usage limits",
      "Answers 费用要把 request 和 token 分开算"
    ]
  },
  "decisionSummary": {
    "verdict": "适合把独立 Web search、LLM context 和 summarizer 接入 Agent，但必须按 API credits 和 usage limits 管理成本。",
    "bestFor": "RAG/Agent 的实时网页搜索、技术资料检索、独立搜索索引需求",
    "avoidIf": "你需要长期固定免费额度、强中文搜索质量，或不想管理 API key 和月度预算",
    "mainRisk": "旧免费查询口径已过时；Search、Answers 和 token 费用不同，泄露 API key 或未设 usage limits 都可能造成额外账单。",
    "alternatives": [
      "Perplexity API",
      "Firecrawl MCP",
      "自建搜索/抓取"
    ]
  },
  "swot": {
    "S": "独立索引、官方 MCP、LLM context",
    "W": "中文和费用需实测",
    "O": "Agent/RAG 搜索需求",
    "T": "Google、Perplexity、Tavily 等搜索 API"
  },
  "tags": [
    "MCP",
    "搜索",
    "隐私",
    "隐私搜索",
    "Brave",
    "API"
  ]
}
