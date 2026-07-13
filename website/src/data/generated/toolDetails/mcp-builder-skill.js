// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "本地 skill: cloudflare:building-mcp-server-on-cloudflare",
    "https://modelcontextprotocol.io/docs/learn/architecture",
    "https://modelcontextprotocol.io/specification/2025-06-18/server/tools"
  ],
  "id": "mcp-builder-skill",
  "name": "building-mcp-server-on-cloudflare",
  "category": "skill",
  "subcategory": "MCP开发",
  "developer": "Cloudflare / OpenAI curated plugin",
  "logo": null,
  "versions": [
    {
      "type": "Installed skill",
      "pricing": "随当前 Cloudflare/Codex 插件环境可用；Cloudflare Workers 和外部 API 成本需单独评估",
      "models": "building-mcp-server-on-cloudflare 聚焦 remote MCP servers on Cloudflare Workers",
      "link": "https://modelcontextprotocol.io/docs/learn/architecture"
    },
    {
      "type": "Official MCP reference",
      "pricing": "MCP 是协议和 SDK 生态；具体托管、模型和工具成本取决于实现",
      "models": "MCP 架构涵盖主机、客户端、服务器、工具、资源、提示词和传输层",
      "link": "https://modelcontextprotocol.io/specification/2025-06-18/server/tools"
    }
  ],
  "freeQuota": "暂无该 Skill 的独立免费额度证据；MCP 实现成本取决于宿主、服务器和外部 API",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "当前核验环境存在精确 building-mcp-server-on-cloudflare Skill",
    "适合规划 remote MCP servers on Cloudflare Workers",
    "官方 MCP architecture 明确 host、client、server、data layer 和 transport layer 边界",
    "tools expose executable functions，适合把 API、文件操作或数据库查询暴露给 AI 应用",
    "MCP 同时包含 resources 和 prompts 等 primitives，可帮助梳理 server 设计范围"
  ],
  "cons": [
    "这是 Cloudflare Workers 方向，不是所有语言/平台的通用 MCP 生成器",
    "具体 server 实现仍需复核，鉴权、部署和安全边界差异很大",
    "MCP 规范版本和 SDK 更新较快，旧模板可能过时"
  ],
  "bestFor": "Cloudflare Workers 上的 remote MCP server 规划、MCP architecture 学习、把外部能力封装成 tools/resources/prompts",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "当前核验环境存在精确 building-mcp-server-on-cloudflare Skill。推荐时应把它写成 Cloudflare Workers remote MCP server 工作流，而不是泛化成所有平台和语言的 mcp-builder。",
    "pitfalls": [
      "先确认目标是否是 Cloudflare Workers",
      "按目标 SDK 复核代码模板",
      "安全、鉴权和部署需要单独设计"
    ]
  },
  "decisionSummary": {
    "verdict": "当前核验环境已确认 building-mcp-server-on-cloudflare；可作为 Cloudflare Workers remote MCP server 的已核验工作流入口。",
    "bestFor": "想在 Cloudflare Workers 上规划 remote MCP server，并评估哪些 API 可以暴露为 tools 的开发者",
    "avoidIf": "你需要跨所有运行时的通用 MCP 生成器，或不打算使用 Cloudflare Workers",
    "mainRisk": "能力范围偏 Cloudflare Workers；语言、鉴权、部署和安全边界仍需按项目复核。",
    "alternatives": [
      "MCP official SDKs",
      "MCP Inspector",
      "Cloudflare Workers docs"
    ]
  },
  "swot": {
    "S": "已确认 Cloudflare Workers MCP 工作流",
    "W": "平台范围不等于通用生成器",
    "O": "可作为 remote MCP server 规划入口",
    "T": "官方 SDK 和成熟模板竞争"
  },
  "tags": [
    "Skills",
    "MCP",
    "Cloudflare",
    "API",
    "已核验"
  ]
}
