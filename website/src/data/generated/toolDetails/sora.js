// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://developers.openai.com/api/docs/guides/video-generation",
    "https://developers.openai.com/api/docs/pricing",
    "https://developers.openai.com/api/docs/models/sora-2"
  ],
  "id": "sora",
  "name": "Sora",
  "category": "multimodal",
  "subcategory": "视频生成",
  "developer": "OpenAI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "ChatGPT/Sora 入口随计划与地区开放；Videos API 按模型、时长和分辨率计费；官方已标记 Sora 2/Videos API 将于 2026-09-24 下线",
      "models": "sora-2、sora-2-pro（已弃用）",
      "link": "https://developers.openai.com/api/docs/guides/video-generation"
    }
  ],
  "freeQuota": "OpenAI API Free tier 不支持 Sora；ChatGPT/Sora App 可用性以账号计划和地区为准",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "decisionSummary": {
    "verdict": "OpenAI 视频生成仍有参考价值，但官方已标记 Sora 2/Videos API 将在 2026-09-24 下线，新项目不应做长期依赖。",
    "bestFor": "短期高质量视频试验、历史项目迁移评估、营销素材概念验证",
    "avoidIf": "你需要长期稳定 API、大量低成本短视频、真人/公众人物生成，或必须即时返回结果",
    "mainRisk": "Sora 2 与 Videos API 官方已标记 deprecated，并将于 2026-09-24 shut down；仍要额外管理异步渲染、模型/时长/分辨率计费和内容限制",
    "alternatives": [
      "Runway Gen-3/Gen-4",
      "可灵 (Kling)",
      "Luma Dream Machine"
    ]
  },
  "pros": [
    "官方文档仍可核验 sora-2 / sora-2-pro 的文本/图像输入与视频/音频输出能力",
    "sora-2 注重速度和探索，sora-2-pro 注重高质量输出",
    "支持同步音频、图像参考、视频延展和视频编辑等视频工作流能力",
    "模型页明确展示 Sora 2 按秒计费，便于旧项目估算迁移成本",
    "适合作为短期概念片和历史 API 迁移参考"
  ],
  "cons": [
    "官方已标记 Sora 2 video generation models 与 Videos API deprecated，并将于 2026-09-24 下线",
    "API Free tier 不支持 Sora，成本按模型、时长和分辨率上升",
    "异步渲染可能需要数分钟，不适合强实时体验",
    "对未成年人不适内容、版权角色/音乐、真人和公众人物有严格限制",
    "复杂视频工作流需要队列、轮询/webhook、存储和失败重试设计"
  ],
  "bestFor": "短期视频概念验证、历史 Sora API 迁移评估",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，OpenAI 官方 Video generation 文档明确提示 Sora 2 video generation models 与 Videos API 已 deprecated，并将于 2026-09-24 shut down；模型页仍列出 sora-2 / sora-2-pro 与按秒计费信息。现阶段它更适合短期概念验证和迁移评估，而不是新建长期视频 API 依赖。",
    "pitfalls": [
      "不要把 Sora 2 作为新的长期 API 依赖",
      "先按 2026-09-24 下线日期制定迁移计划",
      "仍需估算模型/时长/分辨率成本并处理异步任务"
    ]
  },
  "swot": {
    "S": "质量与同步音频能力仍可参考",
    "W": "官方已标记 deprecated 且有下线日期",
    "O": "短期概念验证与迁移窗口",
    "T": "可灵、Runway、Luma 及后续 OpenAI 视频路线"
  },
  "tags": [
    "视频",
    "OpenAI",
    "DeprecatedAPI",
    "迁移风险",
    "已核验"
  ]
}
