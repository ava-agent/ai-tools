// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/",
    "https://github.com/cloudflare/mcp",
    "https://github.com/cloudflare/mcp-server-cloudflare"
  ],
  "id": "cloudflare-mcp",
  "name": "Cloudflare MCP",
  "category": "mcp",
  "subcategory": "DevOps",
  "developer": "Cloudflare",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Cloudflare managed remote MCP servers；实际资源按 Cloudflare 产品与计划计费",
      "models": "Cloudflare API Code Mode server https://mcp.cloudflare.com/mcp and product-specific MCP servers",
      "link": "https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/"
    }
  ],
  "freeQuota": "MCP server 连接本身不代表资源免费；Workers、R2、D1、AI Gateway、DNS 等仍按 Cloudflare 计划和用量计费",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Cloudflare 官方 managed remote MCP servers，可通过 OAuth 接入",
    "Cloudflare API MCP server 覆盖 over 2,500 endpoints across DNS, Workers, R2, Zero Trust 等",
    "当前 Code Mode 暴露 docs()、search() 和 execute() 三个工具，以较小工具面覆盖大量 API",
    "生成代码在 isolated Dynamic Worker sandbox 中执行",
    "CI/CD 或 automation 可用 Cloudflare API token，并只授予所需 permissions",
    "managed remote MCP servers 支持 streamable-http transport；SSE transport 已标注 deprecated",
    "另有 docs、bindings、builds、observability、browser、AI Gateway、audit logs、DNS Analytics 等 product-specific MCP servers"
  ],
  "cons": [
    "execute() 可执行 Cloudflare API 调用，可能改 DNS、Workers、KV/R2/D1、Zero Trust 等资源",
    "OAuth 授权或 API token 权限过大时风险很高",
    "MCP server 免费不等于 Cloudflare 资源免费",
    "Code Mode 广覆盖适合专家，普通团队应优先使用 product-specific servers 收敛工具面"
  ],
  "bestFor": "在 AI IDE 中管理 Cloudflare Workers、KV 存储和 DNS",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Cloudflare MCP 分为广覆盖的 API Code Mode server 和更收敛的 product-specific MCP servers。它很强，但应按权限治理来用：OAuth 选择最小权限，CI/CD 用 API token，并优先选择具体产品 server 降低误操作面；当前文档以 streamable-http 为主，SSE 属 deprecated transport。",
    "pitfalls": [
      "OAuth/API token 只给必要权限",
      "DNS/Workers/R2/D1 写操作要人工确认",
      "能连接 MCP 不代表资源免费"
    ]
  },
  "decisionSummary": {
    "verdict": "适合 Cloudflare 重度用户把查询、调试和部署接入 Agent；默认应最小权限、优先 product-specific server、写操作人工确认。",
    "bestFor": "Workers、R2、D1、DNS、AI Gateway、Observability 和 Audit Logs 的 AI 辅助运维/开发",
    "avoidIf": "你无法约束 OAuth/API token 权限，或不希望 Agent 拥有 DNS、部署、存储和安全配置的执行能力",
    "mainRisk": "Cloudflare API MCP 覆盖 over 2,500 endpoints，search()/execute() 能触达大量资源；权限过大可能造成 DNS、部署或账单风险。",
    "alternatives": [
      "Wrangler CLI",
      "Cloudflare Dashboard",
      "product-specific MCP servers"
    ]
  },
  "swot": {
    "S": "官方 remote MCP、Code Mode 覆盖面大",
    "W": "权限和误操作面大",
    "O": "边缘应用和 AI 运维增长",
    "T": "AWS/GCP/Vercel 平台工具"
  },
  "tags": [
    "MCP",
    "免费",
    "Cloudflare",
    "Workers",
    "DevOps",
    "官方"
  ]
}
