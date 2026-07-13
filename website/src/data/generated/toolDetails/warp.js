// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.warp.dev/pricing",
    "https://docs.warp.dev/support-and-community/plans-and-billing/plans-pricing-refunds/"
  ],
  "id": "warp",
  "name": "Warp",
  "category": "cli",
  "subcategory": "AI终端",
  "developer": "Warp",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0 / Build $20/月（年付 $18/月）/ Max $200/月 / Business $50/用户/月；Enterprise 定制",
      "models": "Warp Agent + frontier OpenAI、Anthropic、Google models；Free 可 BYOK / custom endpoint / subscription",
      "link": "https://www.warp.dev/pricing"
    }
  ],
  "freeQuota": "Free 包含现代终端核心能力和 BYOK；官方 docs 明确 Free plan 不含 Warp Agent bundled AI usage",
  "contextWindow": "取决于模型",
  "chineseSupport": 2,
  "pros": [
    "Free 层保留现代终端、BYOK、有限 cloud agents access 和 Drive/协作能力",
    "Build $20/月含 1,500 credits per month for cloud and local agents",
    "Build 解锁完整 Warp Agent，并包含 OpenAI、Anthropic、Google 等 frontier models",
    "Max 提供 Build 的 12× included credits，Business $50/用户/月提供团队 usage metrics、data controls 和 SAML SSO",
    "Enterprise 支持 custom shared credit pools、advanced spend controls、Enterprise Analytics API 和 self-hosted cloud agents",
    "docs 将 BYOK、custom endpoint、SuperGrok/X Premium subscription 和 paid plans 区分清楚"
  ],
  "cons": [
    "Free 不再等同内置 AI 请求配额，使用 Warp Agent 需要付费或自带推理",
    "credits 同时覆盖 cloud/local agents，重度使用要设置 reload 和 spend cap",
    "企业侧 pricing 和 shared credit pools 需要销售确认",
    "需要登录账号和联网能力，中文/CJK 输入体验仍建议实测"
  ],
  "bestFor": "终端重度用户、DevOps 工程师、命令行学习",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，Warp 官方 pricing 是 Free、Build、Max、Business、Enterprise，并用 credits 管理 cloud/local agents。Free 可 BYOK，但 docs 明确不含 Warp Agent bundled AI usage；如果要完整 Agent 能力，至少应按 Build $20/月、1,500 credits 和 reload/spend cap 估算。",
    "pitfalls": [
      "不要再用旧请求数或旧档位口径预算",
      "先估算 Build credits 是否覆盖真实 cloud/local agent 用量"
    ]
  },
  "decisionSummary": {
    "verdict": "适合把终端、Agent 和团队协作放到同一个工作台；真实成本要按 Build/Max/Business credits 或 BYOK 分开核算。",
    "bestFor": "终端重度用户、DevOps 工程师、命令行学习",
    "avoidIf": "你只想要完全本地、无需账号、无需 credits 管理的传统终端",
    "mainRisk": "Free 不含 bundled AI usage，Build/Max/Business credits、add-on credits 和 BYOK/custom endpoint 口径不同，旧请求数口径会低估使用 Warp Agent 的真实成本",
    "alternatives": [
      "Claude Code",
      "Codex",
      "Crush"
    ]
  },
  "swot": {
    "S": "Agent 终端、BYOK、credits 透明度",
    "W": "登录和 credits 管理门槛",
    "O": "DevOps/团队 agentic terminal",
    "T": "传统终端和 CLI Agent 分流"
  },
  "tags": [
    "CLI",
    "终端",
    "BYOK",
    "Credits",
    "团队协作"
  ]
}
