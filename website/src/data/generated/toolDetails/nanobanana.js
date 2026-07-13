// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://gemini.google/overview/image-generation/",
    "https://ai.google.dev/gemini-api/docs/image-generation",
    "https://blog.google/innovation-and-ai/products/nano-banana-pro/",
    "https://ai.google.dev/gemini-api/docs/pricing"
  ],
  "id": "nanobanana",
  "name": "Nano Banana / Gemini Image",
  "category": "multimodal",
  "subcategory": "图像生成/编辑",
  "developer": "Google",
  "logo": null,
  "versions": [
    {
      "type": "Gemini App",
      "pricing": "Gemini app 访问取决于地区、账号年龄、计划和额度；Google AI Pro/Plus/Ultra 用户有更高的 Nano Banana Pro 使用权益",
      "models": "Nano Banana 2、Nano Banana Pro、Gemini 图像生成与编辑",
      "link": "https://gemini.google/overview/image-generation/"
    },
    {
      "type": "Gemini API",
      "pricing": "Gemini API 图像模型按官方 API 价格和所选模型计费",
      "models": "gemini-3.1-flash-lite-image、gemini-3.1-flash-image、gemini-3-pro-image",
      "link": "https://ai.google.dev/gemini-api/docs/image-generation"
    }
  ],
  "freeQuota": "消费者入口有额度限制；API 与企业使用应按 Google AI 价格和计划规则单独估算",
  "contextWindow": "N/A",
  "chineseSupport": 4,
  "pros": [
    "Nano Banana 2 定位为 Gemini 内的图像生成与编辑能力，可通过 Gemini app 的 Create images 入口使用",
    "Gemini API 文档将 Nano Banana 描述为 Gemini 原生图像生成能力，支持对话式图文编辑",
    "API 模型族包含 Nano Banana 2 Lite（Gemini 3.1 Flash Lite Image）、Nano Banana 2（Gemini 3.1 Flash Image）和 Nano Banana Pro（Gemini 3 Pro Image）",
    "开发者模型 ID 包括 gemini-3.1-flash-image 和 gemini-3-pro-image",
    "Gemini API 文档已将 gemini-2.5-flash-image 标为 legacy，并建议新项目迁移到 Nano Banana 2 Lite",
    "Gemini 图像输出会使用 SynthID 和可见水印来标识 AI 生成视觉内容"
  ],
  "cons": [
    "Nano Banana 不是独立图表网站，而是横跨消费者、API 和企业入口的 Gemini 图像模型族",
    "可用性、额度和 Pro 重新生成能力取决于国家/地区、账号、年龄与 Google 计划",
    "API 成本、延迟和质量由模型选择决定，不能按单一免费层理解",
    "品牌、肖像、事实型信息图和政策敏感输出仍需要人工审核"
  ],
  "bestFor": "Gemini 内的图片生成、照片编辑、文字海报、视觉草图和 API 图像工作流",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-07，这个条目应指向 Gemini 图像生成，而不是一个独立轻量图表服务。Nano Banana 是 Google 在 Gemini app 与 Gemini API 场景中的图像模型族昵称，当前选型重点是 Nano Banana 2 Lite、Nano Banana 2 与 Nano Banana Pro；旧的 gemini-2.5-flash-image 已进入 legacy 迁移口径。",
    "pitfalls": [
      "使用 Gemini 或 Google AI Studio 官方入口",
      "明确选择 API 模型 ID",
      "新项目不要继续默认使用 gemini-2.5-flash-image",
      "发布前检查水印、内容政策和权利边界"
    ]
  },
  "decisionSummary": {
    "verdict": "这是 Google Gemini 的图像生成与编辑路线，最好按模型层级、计划额度、API 价格和水印/政策要求来评估。",
    "bestFor": "Gemini app 图片编辑、含文字海报、照片变换、API 图像工作流和创意草稿",
    "avoidIf": "你需要专门的结构化图表工具、完全没有水印/政策约束，或稳定的免费生产额度",
    "mainRisk": "旧条目容易把 Nano Banana 误认为独立免费图表站；真实产品是 Gemini 图像模型族，涉及计划限制、API 价格、legacy 模型迁移、SynthID 和可见水印义务。",
    "alternatives": [
      "Ideogram",
      "GPT Image / ChatGPT Images",
      "Adobe Firefly"
    ]
  },
  "swot": {
    "S": "Gemini 原生图像编辑与 API 入口",
    "W": "计划额度和水印/政策约束",
    "O": "消费者编辑与 API 创意工作流",
    "T": "竞争压力来自 OpenAI Images、Adobe Firefly 和 Ideogram"
  },
  "tags": [
    "Google",
    "Gemini",
    "Nano Banana 2",
    "图像生成",
    "SynthID",
    "已核验"
  ]
}
