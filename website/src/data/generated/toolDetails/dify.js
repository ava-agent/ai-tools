// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://dify.ai/pricing",
    "https://docs.dify.ai/en/cloud/use-dify/workspace/subscription-management",
    "https://dify.ai/education"
  ],
  "id": "dify",
  "name": "Dify",
  "category": "agent",
  "subcategory": "开源平台",
  "developer": "LangGenius, Inc.",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Sandbox Free；Professional $59/月或 $590/year；Team $159/月或 $1590/year；Enterprise 定制；Self-hosted Community Edition",
      "models": "Agentic workflows、RAG pipelines、integrations、observability",
      "link": "https://dify.ai/pricing"
    }
  ],
  "freeQuota": "Sandbox Free：200 message credits、1 workspace、1 member、5 apps；Community Edition 可自托管",
  "contextWindow": "取决于模型",
  "chineseSupport": 4,
  "pros": [
    "Dify Cloud 明确提供 Sandbox Free、Professional 和 Team 档",
    "Professional 当前价格页展示 $590/workspace/year，含 5,000 message credits/month",
    "Team 当前价格页展示 $1590/workspace/year，含 10,000 message credits/month",
    "Sandbox Free 含 200 message credits、5 apps、50 knowledge documents 和 30 days log history",
    "Community Edition 可自托管，采用 Dify modified Apache 2.0 license，部署前需核对附加条款",
    "产品定位覆盖 agentic workflows、RAG pipelines、integrations 和 observability"
  ],
  "cons": [
    "Cloud 额度受 workspace 订阅限制，自托管也需要模型、向量库和运维成本",
    "生产环境要关注知识库数据存储、日志、权限和 API rate limit",
    "插件和模型供应商配置会影响实际部署复杂度",
    "Community Edition 不是未经修改的标准 Apache 2.0，分发和多租户场景需审查附加许可条款"
  ],
  "bestFor": "团队搭建 RAG、Agentic workflow 和可观测的 AI 应用",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Dify 的价值不只是“可自托管”，而是把 RAG、Workflow、Agent、插件和观测做成一套产品化工作台。当前 pricing 页默认展示 Professional $590/year、Team $1590/year 与 Sandbox Free 200 message credits；选型时应把 Cloud workspace 额度、annual/monthly billing 和 Community Edition 的运维成本分开算。",
    "pitfalls": [
      "Cloud 额度不是无限",
      "自托管仍要承担模型和基础设施成本",
      "企业数据权限和日志留存需要单独设计"
    ]
  },
  "decisionSummary": {
    "verdict": "适合希望产品化搭建 RAG/Agent 工作流的团队，Cloud 快速启动，自托管适合数据边界更清晰的场景。",
    "bestFor": "知识库问答、客服 Agent、内部 AI 应用和可观测工作流",
    "avoidIf": "你只需要一个简单聊天机器人，或没有人维护模型、权限和部署环境",
    "mainRisk": "Cloud 订阅额度、自托管基础设施和模型调用成本需要合并预算，否则容易低估长期成本。",
    "alternatives": [
      "Coze",
      "LangChain",
      "n8n"
    ]
  },
  "swot": {
    "S": "RAG/Workflow 产品化",
    "W": "部署和额度要规划",
    "O": "企业 AI 应用落地",
    "T": "低代码 Agent 与工程框架竞争"
  },
  "tags": [
    "开源",
    "Agent",
    "自托管"
  ]
}
