// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.langchain.com/",
    "https://www.langchain.com/pricing",
    "https://docs.langchain.com/langsmith/faq"
  ],
  "id": "langchain",
  "name": "LangChain",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "LangChain, Inc.",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "LangChain/LangGraph 为开源软件；LangSmith 开发者版每席位 $0，Plus 每席位 $39，企业版定制",
      "models": "LangChain, LangGraph, LangSmith, Deep Agents",
      "link": "https://www.langchain.com"
    }
  ],
  "freeQuota": "LangGraph 采用 MIT 许可证；LangSmith Developer 每席位 $0，含每月 5,000 条基础追踪，超出后按量计费；Plus 含每月 10,000 条基础追踪",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "LangChain 提供 agent 开发入口，LangGraph 负责更可控的 stateful orchestration",
    "LangGraph 采用 MIT 许可证，适合自建复杂 Agent 系统",
    "LangSmith 覆盖 observe、evaluate、deploy 和 monitor",
    "LangSmith Developer 每席位 $0，Plus 每席位 $39，Enterprise 定制",
    "Plus 计划含每月 10,000 条基础追踪；大模型用量另行计费，按所接模型供应商核算",
    "官方称 open source frameworks 约 100M+ monthly downloads"
  ],
  "cons": [
    "LangSmith 不是开源产品，超出免费 trace 后按量计费",
    "工程能力要求高，框架选择要在 LangChain、LangGraph、Deep Agents 间取舍",
    "生产环境需要自建评测、追踪、权限和模型成本治理"
  ],
  "bestFor": "开发者构建可观测、可评估、可部署的 Agent 应用",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，LangChain 条目应拆成“开源框架 + LangSmith 平台”来理解：LangGraph 适合需要明确状态和控制流的 Agent，LangSmith 则解决追踪、评测和部署。团队选型时要同时评估代码复杂度、每月 5,000/10,000 条基础追踪阶梯、大模型用量另行计费和可观测性预算。",
    "pitfalls": [
      "需要工程化能力",
      "LangSmith 超额按量",
      "框架组合要避免过度设计"
    ]
  },
  "decisionSummary": {
    "verdict": "适合工程团队构建可控 Agent/RAG 系统，尤其需要 LangGraph 状态编排和 LangSmith 观测评测时。",
    "bestFor": "需要代码级控制、评测、追踪和部署流水线的 AI 应用团队",
    "avoidIf": "你更需要无代码 Bot 发布，或没有人维护框架、测试和观测链路",
    "mainRisk": "容易低估工程复杂度与 LangSmith trace/seat 成本，原型和生产治理要分阶段推进。",
    "alternatives": [
      "Dify",
      "CrewAI",
      "OpenAI Agents SDK"
    ]
  },
  "swot": {
    "S": "LangGraph 控制力与 LangSmith 观测",
    "W": "工程复杂度高",
    "O": "Agent 工程平台化",
    "T": "低代码平台和托管 Agent SDK"
  },
  "tags": [
    "开源",
    "Agent",
    "框架",
    "开发者"
  ]
}
