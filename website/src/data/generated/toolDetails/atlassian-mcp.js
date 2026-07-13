// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.atlassian.com/platform/remote-mcp-server",
    "https://github.com/atlassian/atlassian-mcp-server",
    "https://support.atlassian.com/atlassian-rovo-mcp-server/docs/supported-tools/",
    "https://github.com/sooperset/mcp-atlassian",
    "https://developer.atlassian.com/cloud/jira/platform/rate-limiting/"
  ],
  "id": "atlassian-mcp",
  "name": "Atlassian Rovo MCP",
  "category": "mcp",
  "subcategory": "协作工具",
  "developer": "Atlassian / Sooperset community alternative",
  "logo": null,
  "versions": [
    {
      "type": "Official Cloud",
      "pricing": "官方 Atlassian Rovo MCP Server；当前 Remote MCP 不单独消耗 Rovo credits，但 Beta tools 未来可能计入 Rovo credits",
      "models": "Atlassian Rovo MCP Server, Generally Available, OAuth 2.1 or API tokens",
      "link": "https://github.com/atlassian/atlassian-mcp-server"
    },
    {
      "type": "Community self-hosted",
      "pricing": "社区 Sooperset 版本；需自行部署并配置 Atlassian API token/PAT",
      "models": "Cloud and Server/Data Center deployments for Confluence and Jira",
      "link": "https://github.com/sooperset/mcp-atlassian"
    }
  ],
  "freeQuota": "官方 Remote MCP 受 Atlassian Cloud 计划、站点权限、API rate limits 和未来 Beta tools/Rovo credits 规则影响；社区版仍需 Atlassian 账号和 API/PAT 权限",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "官方 Atlassian Rovo MCP Server 是 cloud-hosted bridge，可连接 Jira、Confluence、Jira Service Management、Bitbucket 和 Compass",
    "官方 GitHub 标注 Generally Available，并支持 OAuth 2.1 or API tokens",
    "每次操作 respects existing access controls，按用户已有权限和 scopes 执行",
    "supported tools 页面说明 Beta tools 当前可用，但未来可能成为 paid features billed in Rovo credits",
    "Sooperset 社区版仍可作为 Cloud and Server/Data Center deployments 的自托管替代"
  ],
  "cons": [
    "写操作可创建或更新 Jira issue、Confluence page 等真实协作资产，应按 Read/Write/Search 权限组和人工确认收敛",
    "API token 方式、domain allowlist、审计日志和组织策略需要管理员治理",
    "Jira/Confluence API rate limits 会影响大规模查询和自动化",
    "官方 cloud MCP 与 Sooperset 社区版部署、认证和产品范围不同，不能混写",
    "合规场景需先确认 Rovo MCP 对 FedRAMP、HIPAA、数据驻留和审计要求的支持"
  ],
  "bestFor": "Atlassian Cloud 团队在 AI 客户端中查询、总结和受控更新 Jira/Confluence/Bitbucket 资料",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，Atlassian 已有官方 Atlassian Rovo MCP Server，旧条目不能再按“仅有社区版、未来才可能有官方方案”的口径推荐。现在的重点是选择官方云端 Rovo MCP 还是 Sooperset 自托管替代，并把写权限、审计、API rate limits 和 Rovo credits 风险说清楚。",
    "pitfalls": [
      "默认限制 Read/Search",
      "写入 Jira/Confluence 前人工确认",
      "社区版和官方版不要混配认证说明"
    ]
  },
  "decisionSummary": {
    "verdict": "官方 Atlassian Rovo MCP 已可作为首选评估；社区 Sooperset 版本只作为自托管/Server/Data Center 替代。",
    "bestFor": "已在 Atlassian Cloud 上管理工程、产品、支持和知识库的团队",
    "avoidIf": "无法治理 AI 客户端写操作、API token、domain allowlist、权限组和审计日志",
    "mainRisk": "Agent 可在 existing access controls 范围内读取和更新真实 Jira/Confluence/Bitbucket 资料；Beta tools、Rovo credits、API rate limits 和合规要求必须逐项确认。",
    "alternatives": [
      "Jira/Confluence Web UI",
      "Atlassian REST API",
      "Sooperset mcp-atlassian"
    ]
  },
  "swot": {
    "S": "官方 cloud MCP 和 Atlassian 权限体系",
    "W": "写操作治理复杂",
    "O": "AI 客户端接入系统-of-record",
    "T": "通用项目管理 MCP 和内置 Rovo 能力"
  },
  "tags": [
    "MCP",
    "Atlassian",
    "Jira",
    "Confluence",
    "Rovo",
    "已核验"
  ]
}
