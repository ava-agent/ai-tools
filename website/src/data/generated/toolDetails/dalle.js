// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://developers.openai.com/api/docs/guides/images-vision",
    "https://developers.openai.com/api/docs/models/gpt-image-2",
    "https://openai.com/index/introducing-chatgpt-images-2-0/"
  ],
  "id": "dalle",
  "name": "GPT Image 2 / ChatGPT Images",
  "category": "multimodal",
  "subcategory": "图像生成",
  "developer": "OpenAI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "ChatGPT 计划或 Images API 计费（以官方 pricing / calculator 为准）",
      "models": "gpt-image-2 / ChatGPT Images 2.0",
      "link": "https://developers.openai.com/api/docs/guides/images-vision"
    }
  ],
  "freeQuota": "ChatGPT Free 有限额度",
  "contextWindow": "N/A",
  "chineseSupport": 4,
  "pros": [
    "OpenAI 官方 Images API 当前主推 GPT Image models，最新模型为 gpt-image-2",
    "支持文本生成图像、图像编辑和多轮迭代工作流",
    "适合海报、配图、信息图、产品图和需要文字渲染的视觉任务",
    "与 ChatGPT / Responses API / Images API 生态衔接",
    "可按官方 pricing 和 image generation calculator 估算成本"
  ],
  "cons": [
    "ChatGPT 入口和 API 入口的可用性、额度与计费路径不同",
    "高质量/大尺寸图像成本需要按官方价格页单独估算",
    "艺术风格和品牌一致性仍需要人工审查",
    "安全策略和版权风险需要按具体商用场景评估"
  ],
  "bestFor": "与 ChatGPT 配合使用，快速出图",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，OpenAI 官方 Images 文档仍将 API 图像能力表述为 GPT Image models，并列出最新模型 gpt-image-2；ChatGPT 产品侧对应 ChatGPT Images 2.0。本站不再展示 “DALL-E 4” 或固定 “GPT-5 图像生成” 口径，改为按官方 Images API/ChatGPT 图像入口核验。",
    "pitfalls": [
      "入口和额度按 ChatGPT 计划或 API 路径区分",
      "生成成本按官方 calculator 估算",
      "涉及品牌、人物和版权的商用图像要人工审查"
    ]
  },
  "decisionSummary": {
    "verdict": "OpenAI 图像生成条目应按 GPT Image 2 / ChatGPT Images 2.0 口径展示，而不是继续使用 DALL-E 旧命名。",
    "bestFor": "需要 ChatGPT 集成、文字渲染、图像编辑、多轮视觉迭代和 OpenAI API 生态衔接的团队",
    "avoidIf": "你需要本地自托管、完全可控的开源模型权重，或无法接受按 ChatGPT/API 路径分别核算额度和成本",
    "mainRisk": "ChatGPT 产品入口与 API Images / Responses API 的可用性、额度、价格和安全策略不同，商用前要逐项确认。",
    "alternatives": [
      "Midjourney V7",
      "FLUX",
      "Stable Diffusion"
    ]
  },
  "swot": {
    "S": "ChatGPT 集成、文字渲染",
    "W": "订阅制、风格保守",
    "O": "OpenAI 生态垄断",
    "T": "Midjourney、FLUX 品质追赶"
  },
  "tags": [
    "推荐",
    "图像",
    "OpenAI",
    "集成",
    "文字渲染"
  ]
}
