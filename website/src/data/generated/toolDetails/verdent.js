// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://www.verdent.ai/pricing",
    "https://www.verdent.ai/blog/swe-bench-verified-technical-report",
    "https://www.verdent.ai/docs/account-billing/model-pricing",
    "https://www.verdent.ai/blog/introducing-eco-mode-byok-and-updated-pricing"
  ],
  "id": "verdent",
  "name": "Verdent",
  "category": "ide",
  "subcategory": "多Agent IDE",
  "developer": "Verdent Team",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "免费试用：7 天 100 credits；Starter $19/月；Pro $59/月；Max $179/月；Teams $20/用户/月；Top-ups 约 1 credit = $0.059，当前标注 No Markup on Model Costs",
      "models": "Pricing 页展示 Claude Fable/Opus/Sonnet、GPT-5.5、Gemini 3.1 Pro、GLM-5.2、Kimi K2.7 Code 等；模型与 provider pricing 以官方模型价格页为准",
      "link": "https://www.verdent.ai/pricing"
    }
  ],
  "freeQuota": "7 天免费试用含 100 credits；包含 Eco Mode，BYOK/BYOA 可降低或绕开部分 credits 消耗",
  "contextWindow": "取决于模型",
  "chineseSupport": 4,
  "decisionSummary": {
    "verdict": "适合愿意尝试多 Agent 编码和 VS Code/desktop 双入口的开发者；benchmark 可作为参考，但不要单独当成选型结论。",
    "bestFor": "复杂任务分解、多 Agent 协作、需要 Eco Mode / BYOK / PAYG 控制成本的开发者",
    "avoidIf": "你只需要稳定补全或不想管理 credits、top-up、BYOK 和模型选择",
    "mainRisk": "官方 pricing 有限时 bonus 和 credits 结构，真实成本取决于模型 provider pricing、任务复杂度和 Eco Mode/BYOK 使用方式",
    "alternatives": [
      "Cursor",
      "Claude Code",
      "OpenAI Agents SDK"
    ]
  },
  "pros": [
    "免费试用提供 7 天 100 credits",
    "Starter / Pro / Max 分别提供 480、1,500、4,500 monthly credits（含限时 bonus）",
    "Eco Mode 可用低成本模型继续工作，且不消耗 Verdent credits",
    "BYOK / BYOA 支持自带模型或账号来控制成本",
    "Pricing 页当前标注 No Markup on Model Costs，并给出 never expire top-ups",
    "官方技术报告披露 SWE-bench Verified 上的 76.1% pass@1 / 81.2% pass@3",
    "模型价格页公开 provider pricing，标注按每 1M tokens 计价"
  ],
  "cons": [
    "限时 bonus 会变化，不能把当前 credits 当成长期固定额度",
    "credits 消耗依赖模型类型和工作负载",
    "SWE-bench 分数来自官方技术报告，仍需结合真实项目验证",
    "新工具生态、社区和企业治理成熟度仍要观察"
  ],
  "bestFor": "复杂任务分解、多 Agent 协作、代码审查",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-07，Verdent 的亮点是多 Agent 工作流和成本控制组合，而不是单一 benchmark 分数。官方 pricing 仍显示 7 天 100 credits、Starter/Pro/Max/Teams、No Markup on Model Costs 和 top-ups；2026-04-02 博文则说明 Eco Mode、BYOK、PAYG 与 subscription credits 并存。",
    "pitfalls": [
      "先看任务类型会消耗多少 credits",
      "注意限时 bonus 变化",
      "SWE-bench 结果要与本仓库真实任务试跑结合",
      "需要熟悉多 Agent 工作流"
    ]
  },
  "swot": {
    "S": "多 Agent、Eco Mode、BYOK、PAYG",
    "W": "credits 与模型价格估算复杂",
    "O": "复杂工程任务和成本可控 Agent 市场",
    "T": "成熟 IDE Agent 与 benchmark 过拟合风险"
  },
  "tags": [
    "多Agent",
    "Eco Mode",
    "BYOK",
    "PAYG",
    "provider pricing",
    "SWE-bench"
  ],
  "video": {
    "src": "./videos/verdent.mp4"
  }
}
