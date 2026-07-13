// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://n8n.io/pricing/",
    "https://docs.n8n.io/sustainable-use-license/",
    "https://docs.n8n.io/advanced-ai/ai-workflow-builder/"
  ],
  "id": "n8n",
  "name": "n8n",
  "category": "agent",
  "subcategory": "工作流自动化",
  "developer": "n8n GmbH (德国)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Cloud Starter 20€/mo 年付起，Pro 50€/mo 年付起；Business self-hosted 667€/mo 年付起；Community Edition 可自托管但受 Sustainable Use License 限制",
      "models": "工作流可集成 OpenAI、Anthropic、Google Gemini 等节点；模型成本按对应 provider 计算",
      "link": "https://n8n.io/pricing/"
    }
  ],
  "decisionSummary": {
    "verdict": "适合技术团队做工作流自动化和 AI 编排，但要区分 Cloud 执行次数计费、Business 自托管和 Community Edition 许可边界。",
    "bestFor": "内部工作流自动化、AI Agent 编排、跨系统数据同步、企业集成",
    "avoidIf": "你需要中文界面、低维护成本托管，或计划把 n8n 嵌入面向客户的商业产品但未确认许可",
    "mainRisk": "Cloud 按 monthly workflow executions 计费；Community Edition 使用 Sustainable Use License，不应简单理解为无限制开源。",
    "alternatives": [
      "Make",
      "Zapier AI",
      "Dify"
    ]
  },
  "freeQuota": "Cloud Starter/Pro 有 free trial；Community Edition 可自托管用于个人、非商业或内部业务场景，商业分发/嵌入需看许可",
  "contextWindow": "取决于集成模型",
  "chineseSupport": 2,
  "pros": [
    "Cloud 计划包含 unlimited users、unlimited workflows 和 every integration",
    "按完整 workflow execution 计费，而不是按每一步计费",
    "Starter 年付 20€/mo 含 2.5K executions；AI Assistant preview 当前提供每月 2,300 credits",
    "Pro 年付 50€/mo 含 10K executions；AI Assistant preview 当前最高提供每月 13,700 credits",
    "Business self-hosted 年付 667€/mo 起；AI Assistant preview 的额度与可用性需按当前计划表核对",
    "Community Edition 可自托管，适合内部自动化和技术团队控制数据位置",
    "支持 JS/Python code steps、API、webhooks、queues、credentials 和多种集成节点"
  ],
  "cons": [
    "中文界面不支持（仅英文）",
    "Community Edition 受 Sustainable Use License 限制，不是 OSI 开源",
    "自托管需技术能力和运维成本",
    "SSO/SAML、Git 版本控制、长留存和企业治理能力主要在 Business/Enterprise",
    "复杂工作流调试和执行历史留存受计划限制"
  ],
  "bestFor": "工作流自动化、AI Agent 编排、企业集成",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，n8n 仍是技术团队做自动化和 AI 工作流的强选择，但当前页面应按官方 pricing、AI Workflow Builder credits 与 Sustainable Use License 来解释。Cloud 价格以完整 workflow executions、并发和 AI Workflow Builder credits 为核心；Community Edition 更适合内部业务或个人场景，面向客户的商业嵌入要先看许可。",
    "pitfalls": [
      "先确认 Cloud 还是 Community Edition 路径",
      "商业嵌入和再分发要核对 Sustainable Use License",
      "自托管要预留运维、备份和安全配置成本"
    ]
  },
  "swot": {
    "S": "execution 计费、集成丰富、可自托管",
    "W": "许可边界和运维门槛",
    "O": "AI 自动化和内部工具编排",
    "T": "Make.com、Zapier、Dify"
  },
  "tags": [
    "推荐",
    "fair-code",
    "工作流",
    "自动化",
    "AI Workflow Builder"
  ]
}
