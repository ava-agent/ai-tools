// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://adk.dev/",
    "https://adk.dev/agents/models/google-gemini/",
    "https://github.com/google/adk-python"
  ],
  "id": "google-adk",
  "name": "Google ADK",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "Google",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Apache 2.0 开源 SDK；模型、Vertex AI、Gemini Enterprise 或 Google Cloud 资源按对应服务计费",
      "models": "ADK 2.0、Graph Workflows；支持 Gemini 模型能力；ADK 可用于 Python, TypeScript, Go, Java, and Kotlin",
      "link": "https://adk.dev/"
    }
  ],
  "decisionSummary": {
    "verdict": "适合希望用 Google 官方多语言 ADK 构建、调试和部署 agent 的团队，尤其是已在 Gemini/Google Cloud 生态内的项目。",
    "bestFor": "Google 生态、多语言 agent 开发、Gemini 工具能力、企业级调试与部署路径",
    "avoidIf": "你不想绑定 Google Cloud/Gemini 生态，或需要更成熟的第三方框架社区",
    "mainRisk": "ADK 框架开源不等于运行免费；Gemini、Vertex AI、Agent Engine 和企业能力仍需按对应服务计费与权限治理。",
    "alternatives": [
      "OpenAI Agents SDK",
      "Claude Agent SDK",
      "LangChain"
    ]
  },
  "freeQuota": "SDK 开源；Gemini/API/Cloud 免费层和计费以对应 Google 官方服务为准",
  "contextWindow": "取决于 Gemini 模型与部署配置",
  "chineseSupport": 3,
  "pros": [
    "Google 官方 open-source agent development framework",
    "支持 Python, TypeScript, Go, Java, and Kotlin",
    "ADK 2.0 面向 build、debug、deploy production agents，并突出 Graph Workflows",
    "官方说明 ADK can work with almost any generative AI model，虽然 Google/Gemini 生态路径最顺",
    "Gemini 模型页说明支持 Code Execution、Google Search、Context caching、Computer use 和 Interactions API",
    "Python 仓库采用 Apache 2.0 License",
    "可与 Gemini Enterprise / Google Cloud agent 平台衔接"
  ],
  "cons": [
    "主要优势在 Google/Gemini 生态，跨 provider 抽象不如部分独立框架",
    "部分生产部署、企业治理和观测能力依赖 Google Cloud / Gemini Enterprise",
    "内置工具组合有已知限制，需要按文档规避",
    "模型和云资源成本要单独核算"
  ],
  "bestFor": "利用 Gemini 长上下文构建复杂 Agent",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，Google ADK 当前更应按官方多语言 production agents 框架来介绍，而不是只强调某个上下文数字。ADK 2.0、Graph Workflows、几乎任意生成式模型接入、Google Search / Code Execution 等 Gemini 工具能力，以及后续部署到企业平台的路径，是当前选型重点。",
    "pitfalls": [
      "先确认是本地 SDK、Vertex AI 还是 Gemini Enterprise 路径",
      "模型和云资源成本分开核算",
      "内置工具组合限制要看 Gemini 模型页"
    ]
  },
  "swot": {
    "S": "多语言、Google/Gemini 工具能力",
    "W": "生态绑定和云成本",
    "O": "企业级 agent 部署",
    "T": "OpenAI/Claude SDK 与独立框架"
  },
  "tags": [
    "Agent",
    "框架",
    "Google",
    "Gemini",
    "Python, TypeScript, Go, Java, and Kotlin",
    "Apache 2.0"
  ]
}
