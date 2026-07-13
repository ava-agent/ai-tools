// Generated from src/data/tools.js.
export default {
  "verificationStatus": "historical",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://microsoft.github.io/autogen/stable/",
    "https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/migration-guide.html",
    "https://github.com/microsoft/autogen"
  ],
  "id": "autogen",
  "name": "AutoGen",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "Microsoft Research / community-managed",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "开源代码可用；模型/API 成本另计；GitHub 仓库标注为维护模式",
      "models": "AutoGen Studio、AgentChat、Core、v0.4 迁移",
      "link": "https://microsoft.github.io/autogen/stable/"
    }
  ],
  "freeQuota": "框架代码可用；运行需自行承担模型、工具和基础设施成本",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "AutoGen Studio 提供无代码原型界面，基于 AgentChat",
    "AgentChat 面向对话式单 Agent 和多 Agent 应用，要求 Python 3.10+",
    "Core 是事件驱动框架，可构建可扩展的多 Agent AI 系统",
    "v0.4 引入异步、事件驱动架构，并提供从 v0.2 迁移指南",
    "文档覆盖 Selector Group Chat、Swarm、Magentic-One、GraphFlow、Memory and RAG、Tracing and Observability"
  ],
  "cons": [
    "GitHub 仓库标注为维护模式，不再新增功能或增强项",
    "从 v0.2 到 v0.4 存在破坏性变更，旧 pyautogen 包也有来源提醒",
    "Microsoft 建议新项目从 Microsoft Agent Framework 开始，AutoGen 后续更偏向社区维护",
    "新项目需要评估是否采用后续 Microsoft Agent Framework 或其他活跃框架"
  ],
  "bestFor": "学习多 Agent 架构、维护历史 AutoGen 项目、迁移 v0.2 到 v0.4",
  "funRanking": "历史",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，AutoGen 更适合“历史项目维护与多 Agent 架构学习”而不是默认新项目首选。官方稳定版文档仍覆盖 AutoGen Studio、autogen-agentchat、Core 和 v0.4 迁移，但 GitHub 仓库已标注为维护模式，并建议新项目评估 Microsoft Agent Framework；后续维护更偏向社区。",
    "pitfalls": [
      "维护模式会影响长期路线",
      "v0.2/v0.4 迁移成本不可忽略",
      "生产项目需评估替代框架活跃度"
    ]
  },
  "decisionSummary": {
    "verdict": "适合作为 AutoGen 历史项目维护和多 Agent 概念学习资料；新项目默认选型要谨慎。",
    "bestFor": "维护既有 AutoGen 项目、学习 AgentChat/Core/Magentic-One 等多 Agent 模式",
    "avoidIf": "你要启动长期生产项目，并希望依赖持续新增功能的核心框架",
    "mainRisk": "GitHub 仓库标注为维护模式，长期路线、依赖升级和社区活跃度都需要重新评估。",
    "alternatives": [
      "Microsoft Agent Framework",
      "LangGraph",
      "CrewAI"
    ]
  },
  "swot": {
    "S": "多 Agent 文档和历史案例",
    "W": "目前处于维护模式",
    "O": "迁移和教学场景",
    "T": "更活跃的新框架"
  },
  "tags": [
    "Agent",
    "免费",
    "开源",
    "微软",
    "多Agent",
    "企业"
  ]
}
