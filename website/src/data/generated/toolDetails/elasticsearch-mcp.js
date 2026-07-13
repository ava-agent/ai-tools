// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.elastic.co/docs/explore-analyze/ai-features",
    "https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/mcp-server",
    "https://github.com/elastic/mcp-server-elasticsearch"
  ],
  "id": "elasticsearch-mcp",
  "name": "Elastic Agent Builder MCP server",
  "category": "mcp",
  "subcategory": "数据工具",
  "developer": "Elastic",
  "logo": null,
  "versions": [
    {
      "type": "Agent Builder",
      "pricing": "Elastic project、Kibana 和基础设施成本另行适用",
      "models": "Agent Builder MCP 服务；Elasticsearch 9.2+ 和 Serverless 项目的推荐方案",
      "link": "https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/mcp-server"
    },
    {
      "type": "Deprecated legacy server",
      "pricing": "旧版 mcp-server-elasticsearch 已弃用，仅接收关键安全更新，不再作为新项目路径",
      "models": "提供两种 MCP 服务器方案；访问范围由 API 密钥被授予的权限决定",
      "link": "https://github.com/elastic/mcp-server-elasticsearch"
    }
  ],
  "freeQuota": "MCP server 不包含 Elastic 集群或 Serverless 项目成本；API_KEY 权限、KIBANA_URL、索引范围和最小权限原则需要自行治理",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Elastic 官方文档提供两种 MCP 服务器方案：Agent Builder MCP server 与旧版 mcp-server-elasticsearch",
    "Agent Builder MCP server 是 Elasticsearch 9.2 及以上版本和 Serverless 项目的推荐方案",
    "通过 KIBANA_URL 与 API_KEY 接入，能力取决于 API 密钥被授予的权限范围",
    "旧版服务器仍可用于较早 Elasticsearch 版本的有限查询场景",
    "适合把日志、索引 mapping、ES|QL/search 辅助带入受控 Agent 流程"
  ],
  "cons": [
    "旧 mcp-server-elasticsearch 已弃用且仅接收关键安全更新，只适合老版本迁移期",
    "API_KEY 权限过大可能暴露大量日志、PII、业务数据或高成本查询面",
    "必须按最小权限原则、索引范围、只读查询和查询成本限制来配置",
    "大规模搜索/ES|QL 查询可能影响集群性能与费用"
  ],
  "bestFor": "Elastic 9.2+ 或 Serverless 项目优先评估 Agent Builder MCP server，旧集群再考虑 legacy server",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Elastic MCP 选型要先区分 Agent Builder MCP server 与 legacy server。新 Elastic 9.2+ 与 Serverless projects 优先走 Agent Builder；旧 server 适合有限只读排查，并且 API_KEY 必须最小权限。",
    "pitfalls": [
      "优先 Agent Builder",
      "API_KEY 最小 scope",
      "限制索引与查询成本"
    ]
  },
  "decisionSummary": {
    "verdict": "新项目优先评估 Elastic Agent Builder MCP server；旧版服务器只适合较早 Elasticsearch 版本的受限只读查询和迁移期。",
    "bestFor": "Elastic 日志/搜索数据的受控查询、mapping 理解、ES|QL 辅助和排障上下文整理",
    "avoidIf": "你不能限制 API_KEY、索引范围、查询成本或敏感日志访问，或希望 Agent 直接处理生产高风险数据",
    "mainRisk": "KIBANA_URL 与 API_KEY 的暴露面取决于 API 密钥权限；若未按最小权限原则配置，Agent 可能读取敏感日志或触发昂贵查询。",
    "alternatives": [
      "Kibana Discover/Agent Builder",
      "Elastic API",
      "只读日志导出"
    ]
  },
  "swot": {
    "S": "官方 Agent Builder 路径与 Elastic 数据上下文",
    "W": "旧 server 与新路径容易混淆",
    "O": "AI 辅助可观测性和搜索排障",
    "T": "Datadog/Splunk/OpenSearch 工具链"
  },
  "tags": [
    "MCP",
    "Elasticsearch",
    "Elastic",
    "日志",
    "搜索",
    "数据",
    "已核验"
  ]
}
