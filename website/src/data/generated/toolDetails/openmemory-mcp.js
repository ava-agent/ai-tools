// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://mem0.ai/blog/introducing-openmemory-mcp",
    "https://docs.mem0.ai/platform/mem0-mcp",
    "https://github.com/mem0ai/mem0-mcp",
    "https://docs.mem0.ai/integrations/claude-code",
    "https://mem0.ai/pricing"
  ],
  "id": "openmemory-mcp",
  "name": "OpenMemory / Mem0 MCP",
  "category": "mcp",
  "subcategory": "AI增强",
  "developer": "Mem0",
  "logo": null,
  "versions": [
    {
      "type": "Cloud MCP",
      "pricing": "Mem0 Platform account + API key；平台价格和额度以 Mem0 pricing 为准",
      "models": "cloud-hosted MCP server requires no local installation, https://mcp.mem0.ai/mcp",
      "link": "https://docs.mem0.ai/platform/mem0-mcp"
    },
    {
      "type": "Claude Code plugin",
      "pricing": "Plugin + MCP + lifecycle hooks；需要 MEM0_API_KEY",
      "models": "9 memory tools plus lifecycle hooks and SDK skill",
      "link": "https://docs.mem0.ai/integrations/claude-code"
    },
    {
      "type": "Legacy package",
      "pricing": "旧 mem0-mcp-server repository 已 archived，不再作为新项目首选",
      "models": "archived wrapper for Mem0 Memory API",
      "link": "https://github.com/mem0ai/mem0-mcp"
    }
  ],
  "freeQuota": "云端按 Mem0 Platform pricing 和 API key 额度；OSS/本地部署仍需自行承担 LLM、embedding、vector store 与 hosting 成本",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Mem0 MCP 官方文档要求 Mem0 Platform account 和 API key，可通过托管端点接入 Claude、Claude Code、Codex、Cursor、Windsurf、VS Code 等客户端",
    "cloud-hosted MCP server requires no local installation，适合先验证跨会话记忆工作流",
    "OpenMemory 强调 self-hostable、user-owned memory；Mem0 MCP API 路径适合 add_memory、search_memories、get_memories 和 delete_memory",
    "可暴露 add_memory、search_memories、get_memories、get_memory、update_memory、delete_memory、delete_all_memories 等 9 memory tools",
    "Claude Code 集成可用 MEM0_API_KEY、MCP server、lifecycle hooks 和 SDK skill",
    "旧 mem0-mcp-server 已 archived，新项目应优先看官方托管 MCP 文档"
  ],
  "cons": [
    "memory persistence risk：记忆可能包含敏感偏好、客户信息、项目结构或过时结论，需要删除、更新和作用域治理",
    "云端版依赖 Mem0 Platform 账号、API key 和 pricing/free tier 额度",
    "本地/OSS 路径仍要维护 LLM、embedding、vector store、storage、backup 和访问控制",
    "记忆召回质量取决于写入粒度、embedding、过滤器和用户清理习惯",
    "跨客户端共享记忆前要明确哪些内容允许长期保存"
  ],
  "bestFor": "跨 AI 客户端保存长期偏好、项目上下文和可复用工作方式",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，OpenMemory/Mem0 的关键变化是托管 Mem0 MCP 已明确可用，同时 OpenMemory 强调 self-hostable、user-owned memory。选型时应把“本地 OpenMemory / OSS 依赖”和“Mem0 cloud MCP / API key / pricing”分开评估。",
    "pitfalls": [
      "先确认保存哪些记忆",
      "敏感项目默认不开长期记忆",
      "定期清理过期或错误记忆"
    ]
  },
  "decisionSummary": {
    "verdict": "适合需要跨会话记忆的重度 AI 用户，但必须明确 cloud MCP、本地部署、API key、记忆治理和成本边界。",
    "bestFor": "跨客户端长期偏好、项目背景、工作习惯和可复用上下文",
    "avoidIf": "你不能把项目上下文长期保存，或无法治理 API key、记忆删除、过期内容和敏感信息",
    "mainRisk": "memory persistence risk：错误或敏感记忆会跨会话持续影响 Agent；云端版受 Mem0 Platform 额度和 API key 控制，本地版受部署和存储治理质量影响。",
    "alternatives": [
      "Claude Project Memory",
      "Codex memories",
      "本地 Markdown runbook"
    ]
  },
  "swot": {
    "S": "跨会话记忆和多客户端接入",
    "W": "记忆治理和成本边界复杂",
    "O": "个性化 Agent 工作流增长",
    "T": "IDE/Agent 原生记忆能力"
  },
  "tags": [
    "MCP",
    "记忆",
    "跨会话",
    "Mem0",
    "已核验"
  ]
}
