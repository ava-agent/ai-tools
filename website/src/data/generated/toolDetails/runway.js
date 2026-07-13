// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://runwayml.com/pricing",
    "https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5",
    "https://docs.dev.runwayml.com/guides/pricing/",
    "https://docs.dev.runwayml.com/api-details/api_changelog/",
    "https://help.runwayml.com/hc/en-us/articles/18053095835795-Unlimited-plan-details"
  ],
  "id": "runway",
  "name": "Runway Gen-4.5",
  "category": "multimodal",
  "subcategory": "视频生成",
  "developer": "Runway",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free 一次性 125 credits；Standard $15/月或$12/月年付、Pro $35/$28、Max $95/$76、Enterprise 定制；API credits $0.01/credit",
      "models": "Gen-4.5, Gen-4 Turbo, Aleph 2.0, Seedance 2.0, Veo 3.1 and Runway API models",
      "link": "https://runwayml.com/pricing"
    }
  ],
  "freeQuota": "Free plan 一次性 125 credits，不会刷新；生产用量需按付费计划、API credits 或 Max 计划估算",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "官方 pricing 页显示 Free、Standard、Pro、Max、Enterprise，并把 Gen-4.5 秒数换算进 credits",
    "Gen-4.5 帮助文档标注 Standard 及以上可用、12 credits per second、支持 2-10 秒输出",
    "Free plan 提供一次性 125 credits，适合试用但不适合作为持续免费层",
    "Runway API 单独通过 developer portal 购买 credits，官方 API pricing 标注 $0.01/credit",
    "适合高质量广告片、产品镜头、影视预览和动态图形工作流",
    "Max 正在替代旧 Unlimited 作为高产量计划，旧订阅迁移日期需要团队留意"
  ],
  "cons": [
    "免费 credits 不刷新，试完就需要升级或补充计划",
    "Gen-4.5、Aleph、Seedance、Veo、API endpoints 的 credit rate 不同，短片成本会随模型和时长快速上升",
    "Web app credits、API credits、Max/旧 Unlimited 计划不是同一个简单额度池",
    "中文提示、人物一致性和品牌安全仍要人工评测"
  ],
  "bestFor": "专业视频创作、影视级内容生成",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-07，Runway pricing 页显示 Free 一次性 125 credits、Standard/Pro/Max/Enterprise 计划，并明确 Gen-4.5 约 60 credits/5s；Gen-4.5 帮助文档标注 12 credits per second。Runway API 另按 developer portal credits 计费，$0.01/credit，不能和 Web app 计划混算。",
    "pitfalls": [
      "按 seconds * credits rate 估算每条视频成本",
      "Free plan 不会刷新 credits",
      "Web app credits、API credits 和旧 Unlimited/Max 迁移要分开核算"
    ]
  },
  "decisionSummary": {
    "verdict": "适合专业视频生成和团队创作，但要按 Gen-4.5 credits per second、Web/API credits 和 Max/Enterprise 计划分别估算成本。",
    "bestFor": "广告片、产品视频、影视预览、动态图形、团队视频工作流",
    "avoidIf": "你需要长期免费生成，或预算无法承受按秒扣 credits 的视频模型",
    "mainRisk": "Free 125 credits 是一次性试用，Gen-4.5 以 12 credits per second 计费，API credits 与 Web app 计划分离，旧 Unlimited 正在向 Max 迁移。",
    "alternatives": [
      "Sora",
      "可灵 (Kling)",
      "Luma Dream Machine"
    ]
  },
  "swot": {
    "S": "专业视频工作流和 API",
    "W": "Web/API credits 与计划迁移复杂",
    "O": "品牌和影视生产",
    "T": "Sora、Kling、Luma"
  },
  "tags": [
    "视频",
    "专业",
    "Gen-4.5",
    "API",
    "已核验"
  ]
}
