// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://bfl.ai/pricing",
    "https://docs.bfl.ai/quick_start/pricing",
    "https://docs.bfl.ai/flux_2/flux2_overview",
    "https://bfl.ai/blog/24-08-01-bfl"
  ],
  "id": "flux",
  "name": "FLUX",
  "category": "multimodal",
  "subcategory": "图像生成",
  "developer": "Black Forest Labs",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "BFL API 按 credits/像素计费，1 credit = $0.01 USD；FLUX.2 [klein] 4B text-to-image from $0.014",
      "models": "FLUX.2 [klein]/[pro]/[max]/[flex], FLUX.1 [schnell]/[dev]/[pro], FLUX MCP",
      "link": "https://bfl.ai/pricing"
    }
  ],
  "freeQuota": "FLUX.1 [schnell] 与 FLUX.2 [klein] 4B 提供 Apache 2.0（Apache2.0）路线；FLUX.2 [klein] 9B 使用 FLUX NCL，BFL API 采用 1 credit = $0.01 USD 的按图计费",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "FLUX.2 是当前推荐模型家族，覆盖 [klein]/[pro]/[max]/[flex] 多档",
    "官方文档明确 FLUX.2 支持 multi-reference editing、color control 和 up to 4MP output",
    "FLUX.2 [klein] 覆盖 4B Apache 2.0 与 9B FLUX NCL 权重路线，FLUX.1 [schnell] 仍适合本地开发与个人探索",
    "官方页面已把 FLUX MCP 放进开发者入口，适合把图像能力接入 Claude Desktop、Cursor 等 MCP host",
    "API 与 Playground 使用 credit-based pricing，便于按图估算",
    "Open Weights Licensing 覆盖 Builder、Platform、Professional、Enterprise 等路径"
  ],
  "cons": [
    "FLUX.2 [dev] 文档标注为 local only / non-commercial，需要区分用途",
    "高质量或商用部署要看 API、Open Weights Licensing 或企业条款",
    "FLUX.2 [flex]、实验端点和 MCP 工具链仍可能有 beta/preview 风险",
    "本地运行仍依赖 GPU/显存和工作流配置",
    "中文提示词、字体和商业交付需要实测"
  ],
  "bestFor": "开源/开放权重图像工作流、API 图像生成、本地 ComfyUI 探索",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，Black Forest Labs 官方文档把 FLUX.2 作为推荐模型家族：FLUX.2 [klein] 面向实时/高量，[pro] 面向生产，[flex] 面向精细控制，[max] 面向最高质量。价格页和 API 文档都强调按生成计费，FLUX MCP 与开放权重路线也要按授权和 host 权限单独评估。",
    "pitfalls": [
      "先区分 API、Playground、本地权重和商业授权路径",
      "FLUX.2 [dev] 的 non-commercial 限制要在商用前核对",
      "本地部署要单独评估显存、速度和工作流维护成本"
    ]
  },
  "decisionSummary": {
    "verdict": "适合需要本地开放权重或可控 API 图像生成的团队，但要按 FLUX.2 计费、授权和硬件路径分开评估。",
    "bestFor": "开源/开放权重图像工作流、API 图像生成、本地 ComfyUI 探索",
    "avoidIf": "你需要完全托管的一体化设计产品，或商用授权/数据权利无法接受额外核对",
    "mainRisk": "“开源模型”和“商用可用”不是同一件事，FLUX.2 API、FLUX.2 [klein] 4B/9B、FLUX.2 [dev]、FLUX MCP 与 Open Weights Licensing 需要分开看",
    "alternatives": [
      "Midjourney",
      "Stable Diffusion",
      "GPT Image / ChatGPT Images"
    ]
  },
  "swot": {
    "S": "FLUX.2 模型族、API 和开放权重路径清晰",
    "W": "授权与硬件路径复杂",
    "O": "本地和企业图像工作流",
    "T": "竞争压力来自 Midjourney、OpenAI Images 和 Stable Diffusion"
  },
  "tags": [
    "推荐",
    "开源",
    "免费",
    "图像",
    "本地",
    "ComfyUI"
  ]
}
