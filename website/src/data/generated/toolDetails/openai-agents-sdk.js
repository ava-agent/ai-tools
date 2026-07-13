// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://openai.github.io/openai-agents-python/",
    "https://developers.openai.com/api/docs/guides/agents",
    "https://github.com/openai/openai-agents-python"
  ],
  "id": "openai-agents-sdk",
  "name": "OpenAI Agents SDK",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "OpenAI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "MIT 开源 SDK；模型/API 成本按 OpenAI Responses/Chat Completions 或接入 provider 另计",
      "models": "provider-agnostic：支持 OpenAI Responses、Chat Completions APIs 以及 100+ other LLMs",
      "link": "https://openai.github.io/openai-agents-python/"
    }
  ],
  "decisionSummary": {
    "verdict": "适合用少量核心抽象构建多 Agent 工作流；当前官方 README 已强调 provider-agnostic，不应写成只支持 OpenAI。",
    "bestFor": "OpenAI 优先但希望保留多 provider 接入的 Agent 应用、工具调用、Handoffs 和可追踪工作流",
    "avoidIf": "你需要成熟的图编排生态、低代码画布，或团队已经深度依赖 LangGraph/CrewAI",
    "mainRisk": "SDK 本身轻量，但生产成本和能力边界取决于所选模型/provider、Tracing 留存和 Guardrails 设计。",
    "alternatives": [
      "Claude Agent SDK",
      "Google ADK",
      "LangChain"
    ]
  },
  "freeQuota": "SDK 免费，API 按量计费",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "OpenAI 官方维护的 lightweight multi-agent framework",
    "官方 Agents 指南把 code-first agent app 作为 SDK 快速路径",
    "provider-agnostic，README 标注支持 OpenAI APIs 和 100+ other LLMs",
    "核心能力包括 Agents、Tools、Handoffs、Guardrails、Streaming 和 Human-in-the-loop",
    "Tracing 可记录 agent run、tool calls、handoffs 和 guardrails 等事件",
    "Python SDK 文档完整，并有 JavaScript/TypeScript SDK 路径"
  ],
  "cons": [
    "复杂图编排和长期状态仍可能需要 LangGraph 等生态补足",
    "多 provider 接入后的成本、速率限制和错误处理需要自行治理",
    "Guardrails 需要按业务风险设计，不是默认安全保证",
    "生产可观测性要规划 Tracing 数据策略"
  ],
  "bestFor": "OpenAI 生态下的 Agent 开发",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，OpenAI Agents SDK 的价值在于 code-first、抽象少、上手快，同时把 Handoffs、Guardrails 和 Tracing 这些生产 Agent 必需件放进官方路径。旧文案把它写成只支持 OpenAI 模型已经不准确；现在应按 provider-agnostic 框架来描述，并提醒成本取决于具体 provider。",
    "pitfalls": [
      "不要把 provider-agnostic 理解成所有模型能力一致",
      "Tracing 和 Guardrails 要按生产隐私与安全策略配置",
      "复杂状态编排先评估 LangGraph/工作流框架"
    ]
  },
  "swot": {
    "S": "轻量、Handoffs、Tracing、Guardrails",
    "W": "复杂编排需外部生态",
    "O": "多 provider Agent 应用",
    "T": "LangGraph/CrewAI/ADK"
  },
  "tags": [
    "Agent",
    "框架",
    "OpenAI",
    "provider-agnostic",
    "Handoffs",
    "Guardrails",
    "Tracing"
  ]
}
