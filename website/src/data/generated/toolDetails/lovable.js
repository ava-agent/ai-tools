// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://lovable.dev/pricing",
    "https://docs.lovable.dev/introduction/subscription-plans",
    "https://docs.lovable.dev/integrations/supabase",
    "https://docs.lovable.dev/integrations/github",
    "https://docs.lovable.dev/introduction/credits-and-usage"
  ],
  "id": "lovable",
  "name": "Lovable",
  "category": "agent",
  "subcategory": "AI应用构建器",
  "developer": "Lovable (原 GPT Engineer)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free / Pro 100 credits 起 $25/月 / Business 100 credits 起 $50/月 / Enterprise 定制；Top-up：Pro $15/50 credits、Business $30/50 credits",
      "models": "托管模型未固定；一个 credit balance 覆盖 build、Cloud 与部署后 AI gateway usage",
      "link": "https://lovable.dev/pricing"
    }
  ],
  "freeQuota": "Free：5 build credits/day（每月最多 30），20 Cloud credits/月，4 AI credits/月",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "自然语言构建全栈 Web app，并通过 Lovable Cloud 运行",
    "原生 Supabase 集成，可在同一聊天界面管理 UI 与 PostgreSQL 后端",
    "GitHub 集成支持代码备份、协作、双向同步、分支和本地 IDE 工作流",
    "一个 credit balance 正在滚动覆盖 building、hosting/running 和部署后 AI features",
    "Plan mode 每条消息 1 credit，Build mode 随请求复杂度浮动，适合先规划再构建"
  ],
  "cons": [
    "免费 build credits 每月封顶 30，复杂 MVP 很快触顶",
    "credits 用尽后 building 会停止，依赖 Lovable Cloud 或 AI features 的部署应用也可能暂停",
    "统一 credit balance 正在逐步 rollout，部分 workspace 可能仍看到旧 Cloud/AI balance",
    "GitHub 集成不能导入既有 GitHub repo 到 Lovable，只能从 Lovable 导出/同步",
    "复杂业务逻辑和生产治理仍需要开发者审查"
  ],
  "bestFor": "全栈 Web 应用快速构建、非技术人员建站",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Lovable 官方文档显示其正在滚动到一个 credit balance：building、Lovable Cloud hosting/running 和部署后 AI gateway usage 都会从 credits 扣除。Free 有 5 daily build credits（每月最多 30）、20 Cloud credits/月和 4 AI credits/月；Plan mode 每条消息 1 credit，Build mode 随复杂度浮动。",
    "pitfalls": [
      "先估算 build/cloud/AI 都会吃同一 credit balance",
      "credits 用尽会阻断继续构建甚至影响托管应用",
      "接 GitHub 前理解只能从 Lovable 向 GitHub 同步的限制"
    ]
  },
  "decisionSummary": {
    "verdict": "全栈 MVP 和 Supabase/GitHub 流程很顺，但核心风险是 credits 体系和生产治理。",
    "bestFor": "全栈 Web 应用快速构建、非技术人员建站、Supabase MVP",
    "avoidIf": "你需要导入既有大型 GitHub repo、严格成本上限，或生产级复杂业务逻辑",
    "mainRisk": "同一 credits balance 覆盖 build、Cloud 和 AI features，用尽后会停止构建或影响运行",
    "alternatives": [
      "Bolt.new",
      "Replit",
      "v0"
    ]
  },
  "swot": {
    "S": "全栈、Supabase、GitHub sync",
    "W": "credits 成本和导入限制",
    "O": "MVP、内部工具、非技术创业者",
    "T": "Bolt.new、Replit、v0"
  },
  "tags": [
    "全栈",
    "Supabase",
    "GitHub",
    "Credits",
    "MVP"
  ]
}
