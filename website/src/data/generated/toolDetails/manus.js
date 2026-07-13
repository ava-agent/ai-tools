// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://manus.im/",
    "https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus",
    "https://manus.im/help/credits",
    "https://manus.im/docs/introduction/plans"
  ],
  "id": "manus",
  "name": "Manus",
  "category": "agent",
  "subcategory": "自主Agent",
  "developer": "Manus / Meta",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0；Pro from $20/month，另有 $40/month 起含 7-day free trial 的更高 Pro 档；Team from $20 per seat/month；更高额度按计划升级或 add-on credits",
      "models": "Chat Mode, Manus 1.6 Lite / Manus 1.6 / Manus 1.6 Max Agent Mode",
      "link": "https://manus.im/pricing"
    }
  ],
  "freeQuota": "Free：300 credits daily，支持 1 个并发任务；Pro 从 4,000 credits per month 起，更高 Pro 档从 8,000 credits per month 起；Team plan 共享团队 credits",
  "contextWindow": "取决于模型",
  "chineseSupport": 4,
  "pros": [
    "官网明确 Manus is now part of Meta，并提供 Web app、AI slides、AI image generator、AI music generator、Wide Research、Slack integration 等入口",
    "Free/Pro/Team 计划和 credits 口径已在帮助中心公开",
    "Free 仅可在 Agent Mode 使用 Manus 1.6 Lite，Pro 计划可用 Manus 1.6 Max / 1.6 / 1.6 Lite Agent Mode",
    "$20 起 Pro 档从 4,000 monthly credits 起，$40 起 Pro 档从 8,000 monthly credits 起并标注 7-day free trial",
    "Team plan 支持共享 credit pool、SSO 和 Data Training Opt-Out",
    "credits 与任务复杂度相关，仪表盘可在任务前估算消耗"
  ],
  "cons": [
    "复杂或长任务消耗更多 credits，不能按“免费 Agent”估算成本",
    "Plan credits 每月重置，add-on credits 才不会过期",
    "团队隐私、SSO、共享 deliverables 和数据训练 opt-out 需要看 Team/Enterprise 权益",
    "实际可完成任务质量仍需按具体工作流试跑"
  ],
  "bestFor": "自动化调研、幻灯片/网页/内容生成、团队级 AI 工作流探索",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-07，Manus 官网已显示其属于 Meta，并公开 Free、Pro、Team 的 credits 与并发任务口径。帮助中心把 Free 写成每日 300 credits、1 个并发任务；Pro 有 $20 起 4,000 monthly credits 和 $40 起 8,000 monthly credits 两类入口。页面不再保留未经官方来源支持的交易金额、收入和媒体评价，选型重点改为 credits、团队隐私和任务可交付性。",
    "pitfalls": [
      "先用低风险任务估算 credit 消耗",
      "团队使用前确认 Data Training Opt-Out、SSO 和共享权限",
      "复杂任务仍要人工审查中间结果"
    ]
  },
  "decisionSummary": {
    "verdict": "适合试做调研、网页、幻灯片和轻量 Agent 工作流；正式采用前要按 credits、隐私和交付质量试跑。",
    "bestFor": "自动化调研、幻灯片/网页/内容生成、团队级 AI 工作流探索",
    "avoidIf": "你需要可预测的固定成本、严格本地化执行，或对团队数据训练与共享策略不能接受额外配置",
    "mainRisk": "credits 会随任务复杂度、LLM tokens、虚拟机和第三方 API 增加，Plan credits 月度重置，add-on credits 才不失效，Team/Enterprise 才提供更完整团队治理",
    "alternatives": [
      "Devin",
      "n8n",
      "OpenAI Agents SDK"
    ]
  },
  "swot": {
    "S": "Meta 背书、Agent 工作台和团队计划",
    "W": "credits 与复杂任务成本不易预估",
    "O": "企业 AI 工作流和内容自动化",
    "T": "Devin、Replit、n8n 等 Agent 平台"
  },
  "tags": [
    "Agent",
    "自主",
    "Meta",
    "调研",
    "Credits"
  ]
}
