// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://hailuoai.video/",
    "https://hailuoai.video/doc/payment-policy.html",
    "https://www.minimax.io/news/minimax-hailuo-23",
    "https://platform.minimax.io/docs/pricing/overview",
    "https://platform.minimax.io/docs/guides/pricing-paygo"
  ],
  "id": "hailuo",
  "name": "海螺AI (Hailuo)",
  "category": "multimodal",
  "subcategory": "视频生成",
  "developer": "MiniMax",
  "logo": null,
  "versions": [
    {
      "type": "Global/CN",
      "pricing": "Standard $14.99/1,000 credits；Pro $54.99/4,500；Master $119.99/10,000；Ultra $124.99/12,000；Max $199.99/20,000 + Relax Mode；Open Platform API pay-go 分开核算",
      "models": "Hailuo 2.3、MiniMax-Hailuo-2.3-Fast、MiniMax-Hailuo-2.3、Media Agent",
      "link": "https://hailuoai.video"
    }
  ],
  "freeQuota": "免费/Bonus credits 可能随活动变化；长期生产成本应按 Membership Credits、Purchased Credits 或 Open Platform API pricing 估算",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "MiniMax 表示 Hailuo 2.3 已覆盖网站、移动 app 和 Open Platform API",
    "支付政策列出 Standard、Pro、Master、Ultra、Max 多档会员，并把 Max 的 Relax Mode 单独作为高用量权益",
    "支付政策区分 Membership Credits 与 Purchased Credits，其中 Purchased Credits 标价为 $1 可购买 70 credits",
    "MiniMax Open Platform 价格将实时 API 计费与订阅式 quota plans 分开",
    "API pay-go 列出 MiniMax-Hailuo-2.3-Fast，并包含 Fast 768P、6 秒视频 $0.19 和常规模型 768P、6 秒视频 $0.28 的价格",
    "Hailuo 2.3 发布资料同时强调视频模型与 Media Agent，适合把消费者端和 API 端一起评估"
  ],
  "cons": [
    "消费者 Hailuo credits 与 MiniMax Open Platform API 计费是不同账户路径",
    "Membership Credits 按月过期且不结转，Purchased Credits 也有自己的有效期规则",
    "Bonus credits、Membership Credits 和 Purchased Credits 的有效期与用途不同，不能混成一个余额池",
    "异步 API 工作流、排队、内容政策和失败生成处理都需要实现规划"
  ],
  "bestFor": "中文场景视频生成、短视频内容创作",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Hailuo 应作为 MiniMax 视频栈评估：既有消费者 app 入口，也有 Open Platform API 入口。当前需要保留的关键事实是 Hailuo 2.3、Media Agent、多档会员价格、Membership Credits、Purchased Credits、Bonus credits 和 API pay-go 价格。",
    "pitfalls": [
      "分开核算消费者 credits 与 Open Platform API 计费",
      "不要把活动/Bonus credits 视为稳定生产预算",
      "按模型、分辨率、时长和异步流程开销估算视频成本"
    ]
  },
  "decisionSummary": {
    "verdict": "可信的 MiniMax 视频生成选项，适合中文和全球创意工作流，但必须按 credit 类型和 API 路线分别建模成本。",
    "bestFor": "短视频生成、Hailuo 网页/移动端实验，以及基于 Hailuo 2.3 模型的 API 视频渲染",
    "avoidIf": "你需要永久免费额度、覆盖所有 Hailuo 和 MiniMax 入口的统一 credit 钱包，或无需排队处理的实时视频生成",
    "mainRisk": "Membership Credits、Purchased Credits、Bonus credits 和 MiniMax Open Platform API pay-go 很容易混淆，从而扭曲生产成本估算。",
    "alternatives": [
      "Sora",
      "Kling",
      "Runway",
      "Luma"
    ]
  },
  "swot": {
    "S": "Hailuo 2.3 覆盖网页、移动端和 API",
    "W": "多套 credit 与 API 计费路径",
    "O": "中文与全球短视频生产",
    "T": "Sora、Kling、Runway、Luma"
  },
  "tags": [
    "多模态",
    "视频生成",
    "国产",
    "中文",
    "Hailuo 2.3",
    "已核验"
  ]
}
