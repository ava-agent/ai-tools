// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.coze.com/premium",
    "https://www.coze.com/open/docs/guides/subscription",
    "https://www.coze.com/open/docs/guides/message_credits"
  ],
  "id": "coze",
  "name": "Coze",
  "category": "agent",
  "subcategory": "无代码平台",
  "developer": "字节跳动",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "免费版每天 10 积分；Premium Lite 每天 100 积分；Premium $19；Premium Plus $39",
      "models": "多模型 Agent / Workflow / Plugin",
      "link": "https://www.coze.com"
    },
    {
      "type": "CN",
      "pricing": "以 coze.cn 产品内为准",
      "models": "多模型 Agent / Workflow",
      "link": "https://coze.cn"
    }
  ],
  "freeQuota": "Global Free：10 credits/day；Premium plans 标注 3-day free trial，额度按模型调用和能力消耗",
  "contextWindow": "取决于模型",
  "chineseSupport": 5,
  "pros": [
    "面向 AI Agent 的低代码/无代码构建平台",
    "Global 版 Free 每日 10 credits，Premium Lite 每日 100 credits",
    "Premium 和 Premium Plus 分别提供更高日额度，官方页列出 $19 和 $39 档",
    "官方文档将 Premium plan、message credits、Coze tokens、API/Web SDK 与非 SDK 场景计费分开说明",
    "工作流、插件、知识库和 API/Web SDK 可组合",
    "适合快速把 Bot、Workflow 和外部工具串成可发布应用"
  ],
  "cons": [
    "credit 消耗随模型调用和能力而变化，长期成本要按实际工作流压测",
    "Premium 页面和 docs 页面是 JS-heavy，采购时仍要以登录后账单页、订阅页和当前文档为准",
    "CN 与 Global 版能力、生态和计费口径可能不同",
    "复杂多步骤 Agent 仍需要日志、回放和人工验收"
  ],
  "bestFor": "快速搭建 Bot、轻量工作流和可发布的 Agent 应用",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-08，Coze 更适合当作低代码 Agent 发布平台评估：先用 Free 10 credits/day 做原型，再按 Premium Lite 100 credits/day 或更高档估算真实调用成本。官方 docs 同时区分 message credits、Coze tokens、API/Web SDK 和非 SDK 场景费用，不要只看“能搭起来”，要看账单页、日志、异常恢复和渠道发布后的维护成本。",
    "pitfalls": [
      "credit 模型需要实测",
      "CN/Global 计费和能力可能不同",
      "复杂流程要保留人工兜底"
    ]
  },
  "decisionSummary": {
    "verdict": "适合快速发布 Agent/Bot 原型，生产使用前要按 credit 消耗做成本和稳定性压测。",
    "bestFor": "业务人员和开发者快速组合 Bot、Workflow、Plugin 与知识库",
    "avoidIf": "你需要强自托管、严格版本锁定，或非常复杂的跨系统事务编排",
    "mainRisk": "credit、message billing、Coze tokens、API/Web SDK 与非 SDK 插件费用会随模型、插件、工作流复杂度变化，账单预测不能只看订阅名义价格。",
    "alternatives": [
      "Dify",
      "n8n",
      "Make (Integromat)"
    ]
  },
  "swot": {
    "S": "低代码 Agent 发布",
    "W": "credit 成本需实测",
    "O": "业务自动化和 Bot 分发",
    "T": "Dify、n8n、Make 等平台"
  },
  "tags": [
    "推荐",
    "Agent",
    "无代码",
    "字节"
  ]
}
