// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://crewai.com/pricing",
    "https://docs.crewai.com/",
    "https://github.com/crewAIInc/crewAI",
    "https://crewai.com/open-source"
  ],
  "id": "crewai",
  "name": "CrewAI",
  "category": "agent",
  "subcategory": "多Agent框架",
  "developer": "CrewAI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Basic Free；Enterprise Custom；Basic 含 50 workflow executions/month",
      "models": "CrewAI OSS, Crews, Flows, Crew Control Plane / AMP Suite",
      "link": "https://crewai.com/pricing"
    }
  ],
  "freeQuota": "Basic Free：50 workflow executions/month；开源框架本地运行成本取决于所接 LLM/API",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "官方文档定位为设计 agents、编排 crews、自动化 flows，并内置 guardrails、memory、knowledge、observability",
    "GitHub 项目是 open-source Python framework，支持 Crews 与 Flows 两套抽象",
    "Pricing 页将商业计划简化为 Basic Free 与 Enterprise Custom",
    "Basic Free 提供 Visual editor、AI copilot、GitHub integration 和 50 workflow executions/month",
    "官网称已被 63% of the Fortune 500 使用，适合把它视为企业化控制平面与开源框架组合",
    "开源页强调 MCP、A2A、checkpointing、async/await、tools、knowledge 和 LLM 调用"
  ],
  "cons": [
    "Basic 的 50 workflow executions/month 更适合原型，不适合高频生产",
    "开源框架成本主要来自所接 LLM、工具和部署基础设施",
    "Enterprise Custom 才覆盖 private infrastructure、客户基础设施、现场支持和更完整治理",
    "多 Agent 编排调试复杂，仍需观测和测试纪律"
  ],
  "bestFor": "多 Agent 工作流编排、AI 自动化任务",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，CrewAI 应按“开源 Python 编排框架 + 商业控制平面”理解。官方 pricing 当前突出 Basic Free 与 Enterprise Custom，不再沿用旧的固定月费/年费档描述；企业页强调 private infrastructure 与 63% of the Fortune 500。适合会写代码、需要 Crews/Flows 和观测治理的团队。",
    "pitfalls": [
      "把开源框架成本和 CrewAI 云端 workflow executions 分开算",
      "生产工作流先接 tracing/observability",
      "多 Agent 任务要从单 crew 小范围验证"
    ]
  },
  "decisionSummary": {
    "verdict": "适合代码优先的多 Agent 编排和生产工作流探索；商业成本要按 Basic/Enterprise 与外部 LLM 成本分开算。",
    "bestFor": "多 Agent 工作流编排、AI 自动化任务、需要 Crews 与 Flows 的 Python 团队",
    "avoidIf": "你只需要无代码自动化，或团队没有能力调试多 Agent 状态、工具调用和观测链路",
    "mainRisk": "Basic Free 的 50 workflow executions/month 与开源本地运行不是同一成本模型，生产部署还要承担 LLM/API/基础设施成本",
    "alternatives": [
      "LangGraph",
      "OpenAI Agents SDK",
      "Google ADK"
    ]
  },
  "swot": {
    "S": "Crews/Flows、Python、观测和控制平面",
    "W": "生产调试与成本分层复杂",
    "O": "企业 Agent 自动化",
    "T": "竞争压力来自 LangGraph、OpenAI Agents SDK 和 Google ADK"
  },
  "tags": [
    "Agent",
    "多Agent",
    "Python",
    "开源",
    "框架"
  ]
}
