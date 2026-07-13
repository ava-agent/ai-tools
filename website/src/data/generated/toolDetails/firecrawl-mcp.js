// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.firecrawl.dev/pricing",
    "https://github.com/firecrawl/firecrawl-mcp-server"
  ],
  "id": "firecrawl-mcp",
  "name": "Firecrawl MCP",
  "category": "mcp",
  "subcategory": "数据工具",
  "developer": "Mendable / Firecrawl",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free：1,000 credits / month；Hobby $16/月（年付）5,000 pages；Standard $83/月（年付）100,000 pages",
      "models": "无需 LLM，提供 scrape/crawl/map/search/interact 等网页上下文 API",
      "link": "https://www.firecrawl.dev/pricing"
    }
  ],
  "decisionSummary": {
    "verdict": "适合把网页搜索、抓取和结构化提取接进 AI agent；成本要按 credits、并发和 endpoint 计算。",
    "bestFor": "RAG 数据准备、网页转 Markdown、带搜索的研究代理、需要 JS 渲染页面的抓取",
    "avoidIf": "你只需要少量静态页面 fetch，或不希望引入 FIRECRAWL_API_KEY 与月度 credits 管理",
    "mainRisk": "Free 只有 1,000 credits / month；Scrape/Crawl/Map 通常 1 credit/page，Search 2/10 results，Interact 按 browser minute 扣 credits。",
    "alternatives": [
      "普通 fetch MCP",
      "Playwright MCP",
      "自建爬虫"
    ]
  },
  "freeQuota": "Free 计划 1,000 credits / month，低 rate limits；更高并发和用量需 Hobby/Standard/Growth/Scale",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "官方 Firecrawl MCP Server",
    "支持 scrape、crawl、map、search、extract、deep research 等工具",
    "自动转换为 LLM 友好的 Markdown 或结构化数据",
    "支持 JavaScript 渲染和交互型网页",
    "可通过 FIRECRAWL_API_KEY 接入 MCP 客户端",
    "Search 2/10 results 并可通过反馈返还部分 search credit"
  ],
  "cons": [
    "免费层 credits 和并发有限",
    "需要 API key 或平台侧认证",
    "大规模抓取成本按 credits 累计",
    "部分网站反爬机制仍可能导致失败",
    "标准计划 credits 不自动结转"
  ],
  "bestFor": "深度网站爬取、内容提取转 Markdown、RAG 数据准备",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "比简单 fetch 更适合深度抓取和 RAG 数据准备。当前价格已经从旧的固定免费次数表述变化为 credits 体系，Free 是 1,000 credits / month；如果用 search、interact 或大规模 crawl，要先按 endpoint credits 和并发需求估算。",
    "pitfalls": [
      "注意 endpoint credits 消耗",
      "反爬严格的网站可能失败",
      "大规模抓取前先小样本测试并记录成本"
    ]
  },
  "swot": {
    "S": "Markdown 转换、智能爬取",
    "W": "credits 与并发限制",
    "O": "RAG 数据管道",
    "T": "自建爬虫与浏览器自动化方案"
  },
  "tags": [
    "MCP",
    "爬取",
    "Markdown",
    "API",
    "credits"
  ]
}
