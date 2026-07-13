// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://github.com/agentscope-ai/agentscope",
    "https://docs.agentscope.io/",
    "https://pypi.org/project/agentscope/"
  ],
  "id": "agentscope",
  "name": "AgentScope",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "AgentScope / Alibaba Tongyi Lab",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Apache License 2.0 开源框架；模型供应商和工具运行时成本另计",
      "models": "AgentScope 2.0、事件系统、权限系统、沙箱、多会话服务",
      "link": "https://github.com/agentscope-ai/agentscope"
    }
  ],
  "freeQuota": "package 本身没有托管额度；运行成本取决于模型供应商、沙箱后端和部署方式",
  "contextWindow": "取决于模型",
  "chineseSupport": 5,
  "pros": [
    "AgentScope 2.0 定位为具备事件驱动抽象的 production-ready agent framework",
    "Quickstart 要求 Python 3.11 或更高版本，并支持 uv pip install agentscope 或 pip install agentscope",
    "GitHub release 线显示 v2.0.4，新闻中持续强调 long-term memory、Agentic Memory、RAG 和 Agent Team",
    "2.0 核心能力包含 Event System、Permission System、Multi-tenancy & Multi-session Service、Workspace / Sandbox Support、middleware、RAG 和长期记忆",
    "Agent-as-service 示例提供 FastAPI 服务和面向多会话 Agent 的 Web UI 模式",
    "Apache License 2.0 让核心框架可用于内部和商业工程，但仍需常规许可审查"
  ],
  "cons": [
    "AgentScope 2.0 相比旧 API 是一次主要迁移，因此需要迁移和兼容性测试",
    "权限、沙箱、多租户和 agent service 能力会增加运维责任，而不是自动消除风险",
    "DashScope、OpenAI、Anthropic、Ollama 等外部模型后端仍决定成本、延迟和政策约束",
    "使用 Bash、Read、Write、Edit、Docker 或 E2B 类 workspace 执行工具时，需要明确权限设计"
  ],
  "bestFor": "需要事件流、权限、沙箱、多租户和服务化的 Agent 应用",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，更有用的理解方式是 AgentScope 2.0：事件流、权限控制、多会话服务、workspace/sandbox 支持、long-term memory 和 Agent Team。这让它更适合生产形态实验，但也带来迁移和治理工作。",
    "pitfalls": [
      "把 2.0 当作迁移边界处理",
      "授予工具写权限前先设计权限和沙箱策略",
      "测算模型和 workspace 后端成本"
    ]
  },
  "decisionSummary": {
    "verdict": "严肃的开源 Agent 框架，适合构建可见、可授权、服务化的 Agent，尤其在沙箱和多会话架构重要时更有价值。",
    "bestFor": "Agent 服务后端、受控工具使用、RAG 服务、沙箱编码 Agent 和事件流 UI 集成",
    "avoidIf": "你需要无代码 Bot builder、无法承接 AgentScope 2.0 迁移，或不想治理工具权限",
    "mainRisk": "AgentScope 2.0 增强了事件、权限、沙箱和服务抽象，但迁移、API 变化、工具权限和模型供应商成本都需要主动管理。",
    "alternatives": [
      "LangGraph",
      "CAMEL-AI",
      "Dify"
    ]
  },
  "swot": {
    "S": "事件、权限、沙箱和服务抽象",
    "W": "2.0 迁移与治理复杂度",
    "O": "生产形态 Agent 服务",
    "T": "LangGraph、Dify、CrewAI、CAMEL-AI"
  },
  "tags": [
    "Agent",
    "开源",
    "Apache License 2.0",
    "AgentScope 2.0",
    "权限",
    "沙箱",
    "已核验"
  ]
}
