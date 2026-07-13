// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://zed.dev/pricing",
    "https://zed.dev/docs/ai/overview"
  ],
  "id": "zed",
  "name": "Zed",
  "category": "ide",
  "subcategory": "性能优先IDE",
  "developer": "Zed Industries",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Personal $0 / Pro $10/月 / Business $30/席/月；Pro 含 $5 token credits，超出按 API list price +10%",
      "models": "Zed Agent 可走 Zed-hosted models、provider API keys、subscriptions、gateways、local models，也可接 external agents",
      "link": "https://zed.dev/pricing"
    }
  ],
  "freeQuota": "Personal：$0 forever，含 2,000 accepted edit predictions；BYOK 或 external agents 成本按外部 provider/agent 计算",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "高速编辑器、多人协作和每周发布节奏仍是核心优势",
    "Personal 可免费日常使用，并允许 BYOK 或连接 Claude Agent、Codex CLI 等外部 Agent",
    "Pro $10/月包含 Zed-hosted models、无限 Edit Predictions 和 $5 token credits",
    "Pro trial 为两周或 $20 token credits，用完或到期即结束",
    "Business 提供 org-wide AI model policies、data governance、统一 spend visibility 和 RBAC",
    "AI 文档把 Agent、model access 和 features 分开，便于按团队策略配置"
  ],
  "cons": [
    "Personal 免费不等于托管 AI 无限使用",
    "Pro 超出 $5 token credits 后按 API list price +10% 计费",
    "Business seats 不固定捆绑 LLM credits，团队需要另行管理模型支出",
    "SSO、SAML 和 SCIM 官方仍标注为“计划中，当前不可用”",
    "VS Code 生态迁移仍要评估扩展覆盖"
  ],
  "bestFor": "追求高速编辑、多人协作、BYOK/外部 Agent 组合的开发者",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-07，Zed 官方 pricing 将 Personal、Pro、Business 分层展示：Personal $0 并含 2,000 accepted edit predictions，Pro $10/月含 $5 token credits，Business $30/席/月提供组织控制。Pro trial 为两周或 $20 token credits；它更适合把高速编辑器、BYOK 和外部 Agent 组合起来，而不是把所有 AI 能力理解成免费无限。",
    "pitfalls": [
      "先确认是 Personal/BYOK 路径还是 Pro 托管模型路径",
      "团队治理能力需要按 Business controls 和当前 SSO 状态核对"
    ]
  },
  "decisionSummary": {
    "verdict": "适合作为高速、协作优先的编辑器底座；AI 预算要按 Personal/BYOK、Pro credits 和 Business 管理能力分开算。",
    "bestFor": "追求高速编辑、多人协作、BYOK/外部 Agent 组合的开发者",
    "avoidIf": "你想要 Cursor 式开箱即用的一体化 Agent IDE，或企业必须立即具备完整 SSO/SAML/SCIM",
    "mainRisk": "Personal 免费容易被误读成托管 AI 免费；Pro 和 Business 的真实成本仍取决于 token/provider 用量",
    "alternatives": [
      "Cursor",
      "Windsurf",
      "Warp"
    ]
  },
  "swot": {
    "S": "性能、协作、BYOK/外部 Agent 灵活",
    "W": "托管 AI 需要 credits/usage 管理",
    "O": "Zed Agent 与外部 Agent 生态",
    "T": "VS Code/Cursor 生态惯性"
  },
  "tags": [
    "性能",
    "协作",
    "BYOK",
    "Agent",
    "Rust"
  ]
}
