// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://github.com/camel-ai/camel",
    "https://docs.camel-ai.org/",
    "https://pypi.org/project/camel-ai/"
  ],
  "id": "camel-ai",
  "name": "CAMEL-AI",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "CAMEL-AI.org",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Apache 2.0 开源框架；模型 API、向量库、工具和部署成本另计",
      "models": "ChatAgent、Agent Societies、Workforce、RAG、工具、记忆、数据生成",
      "link": "https://github.com/camel-ai/camel"
    }
  ],
  "freeQuota": "框架本身没有 SaaS 额度；运行成本取决于所选模型供应商和外部工具",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "CAMEL 聚焦多 Agent 研究与开发，覆盖 scaling laws、任务自动化、世界模拟和数据生成",
    "Quick start 使用 pip install camel-ai，并提供由模型供应商和工具支撑的 ChatAgent 示例",
    "GitHub 当前 release 线显示 v0.2.90，仍处在快速演进阶段",
    "核心模块包含 Agent Societies、Data Generation、Models、Tools、Memory、Storage、Benchmarks、Interpreters、Retrievers、Runtime 和 Human-in-the-Loop",
    "Apache 2.0 源码许可适合开放实验和内部框架工作",
    "Cookbooks 覆盖 RAG、Graph RAG、工具使用、数据生成、文档/视频处理和多 Agent 应用"
  ],
  "cons": [
    "框架覆盖面大且演进快，团队需要版本锁定、回归测试和清晰模块边界",
    "多 Agent 工作流会放大模型调用、工具调用、日志和调试面",
    "研究导向示例进入生产前需要补齐权限、可观测性、重试和数据边界",
    "外部模型供应商、搜索工具、向量库和部署环境都有各自成本与条款"
  ],
  "bestFor": "多 Agent 研究、数据生成、RAG/工具编排、Agent society 原型",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，CAMEL-AI 更像一个宽口径的多 Agent 研究与工程框架，而不是简单的角色扮演 demo。它在 agent societies、数据生成、RAG、工具和实验上很有潜力；当前 v0.2.90 仍提示生产用户需要为模型/工具调用和快速依赖演进预留预算。",
    "pitfalls": [
      "锁定框架和供应商版本",
      "多 Agent 生产运行前补齐 traces 与测试",
      "为模型、检索和工具调用成本做预算"
    ]
  },
  "decisionSummary": {
    "verdict": "适合多 Agent 研究和原型的开源框架，尤其适合需要在代码中组合 agent societies、数据生成、工具、记忆和 RAG 的团队。",
    "bestFor": "Agent societies、研究原型、合成数据生成、RAG 实验和多 Agent 自动化 cookbook",
    "avoidIf": "你需要托管无代码产品、小而稳定的 API 面，或没有 instrumentation 也能预测模型支出",
    "mainRisk": "CAMEL-AI 活跃且覆盖广，但多 Agent 系统会迅速增加版本、依赖、可观测性和模型/工具成本复杂度。",
    "alternatives": [
      "LangChain / LangGraph",
      "CrewAI",
      "AgentScope"
    ]
  },
  "swot": {
    "S": "Agent societies 与研究覆盖广",
    "W": "依赖面大且变化快",
    "O": "多 Agent 研究和数据生成",
    "T": "托管 Agent 平台与更窄框架"
  },
  "tags": [
    "Agent",
    "开源",
    "Apache 2.0",
    "多Agent",
    "ChatAgent",
    "已核验"
  ]
}
