// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://stability.ai/license",
    "https://platform.stability.ai/pricing",
    "https://stability.ai/stable-image"
  ],
  "id": "stable-diffusion",
  "name": "Stable Diffusion",
  "category": "multimodal",
  "subcategory": "图像生成",
  "developer": "Stability AI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Core Models 自托管许可有收入门槛；API 1 credit = $0.01 并按模型扣费",
      "models": "Stable Diffusion 3.5 / Stable Image / Stability API",
      "link": "https://stability.ai/license"
    }
  ],
  "freeQuota": "核心模型可在许可范围内使用；Stability API 新账号当前提供 25 free credits；商业收入超过 USD $1M 等情况需看 Stability AI license",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "Stable Diffusion 3.5 仍是本地和私有化图像生成的重要路线",
    "Core Models license 对低于 USD $1M 年收入的商业主体更友好，但不是无条件无限制",
    "Stability API 新账号当前提供 25 free credits，之后以 credits 计费，1 credit = $0.01",
    "ComfyUI、LoRA、ControlNet 等生态适合定制化工作流",
    "可在自托管、API 和 Stable Assistant 等入口之间选择"
  ],
  "cons": [
    "许可、收入门槛、模型范围和衍生作品规则需要逐项核对",
    "本地部署仍需要 GPU、模型管理和安全策略",
    "API 与自托管的成本、审核和数据边界不同",
    "高质量工作流对提示词、节点和后处理能力要求高"
  ],
  "bestFor": "本地部署、定制需求",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Stability AI 官方许可页把 Stable Diffusion 3.5 Suite 放在 Core Models 许可框架内，并明确 USD $1M 年收入门槛；开发者平台 pricing 则按 credits 计费。本站不再把它写成无条件免费、无限制或无审核，而改为“自托管许可 + API credits + 本地算力”的三段式判断。",
    "pitfalls": [
      "先确认收入规模和用途是否落在许可范围内",
      "API 成本按 credits 和具体模型估算",
      "本地工作流需要 GPU、模型和内容安全治理"
    ]
  },
  "decisionSummary": {
    "verdict": "适合需要本地可控、风格定制和 ComfyUI 工作流的团队，但许可与算力成本必须单独核算。",
    "bestFor": "本地部署、私有化图像管线、LoRA 风格训练、可控工作流",
    "avoidIf": "你不想维护 GPU/模型环境，或需要开箱即用的消费者级体验",
    "mainRisk": "“开源/免费”容易被误读，Core Models 许可、收入门槛、API credits 和内容治理是不同问题。",
    "alternatives": [
      "FLUX",
      "Midjourney",
      "GPT Image 2 / ChatGPT Images"
    ]
  },
  "swot": {
    "S": "本地可控、生态成熟",
    "W": "许可和部署复杂",
    "O": "私有化视觉生产",
    "T": "商业云端图像模型"
  },
  "tags": [
    "图像",
    "Stable Diffusion 3.5",
    "本地",
    "已核验"
  ]
}
