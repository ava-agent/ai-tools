// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://platform.minimax.io/docs/guides/text-generation",
    "https://platform.minimax.io/docs/guides/pricing-paygo",
    "https://platform.minimax.io/docs/release-notes/models"
  ],
  "id": "minimax",
  "name": "MiniMax / MiniMax-M3",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "MiniMax",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "MiniMax-M3 按输入长度分档，Standard/Priority 价格不同；文本、语音、视频等能力分产品核价",
      "models": "MiniMax-M3 1M context / M2.7 / M2.7-highspeed / Speech / Video 等，以官方当前文档为准",
      "link": "https://platform.minimax.io/docs/guides/text-generation"
    }
  ],
  "freeQuota": "平台可能有试用或活动额度；API 正式用量按官方 pay-as-you-go pricing 为准",
  "contextWindow": "MiniMax-M3 1,000,000 tokens；M2.7 系列 204,800 tokens；其他模型以官方文档为准",
  "chineseSupport": 5,
  "pros": [
    "官方文档已列出 MiniMax-M3、M2.7 等文本模型路线",
    "MiniMax-M3 面向 agentic reasoning、tool use、coding 和 long-context tasks",
    "M3 价格页显示 ≤512k 与 >512k 输入分档，并有 permanent 50% off 口径",
    "文本、语音、图像/视频产品线完整，适合多模态应用组合",
    "API 文档和 pay-as-you-go pricing 路径清晰",
    "中文和多语言场景成本可控"
  ],
  "cons": [
    "旧 M2.1 口径已不能代表当前模型线",
    "文本、语音、视频等产品分开计费，不能只看单一文本单价",
    "社区生态和国际知名度不如 OpenAI/Anthropic/Google"
  ],
  "bestFor": "多语言项目、高频 Agent",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-07，MiniMax 官方文档显示 MiniMax-M3 是最新 M-series language model，支持 1M context，并按 ≤512k / >512k 输入和 Standard / Priority 分档计费。它适合多语言文本、语音和多模态应用组合，但不要再用 M2.1 旧型号和单一低价口径做预算。",
    "pitfalls": [
      "按文本、语音、视频等产品分别核价",
      "不要继续用 M2.1 作为当前主模型口径",
      "复杂推理任务建议与 Claude/GPT/Gemini 交叉测试"
    ]
  },
  "decisionSummary": {
    "verdict": "多语言文本与语音/多模态应用组合值得考虑，当前应按 MiniMax-M3 1M context、M2.7 和产品线分项核价。",
    "bestFor": "多语言项目、语音+文本应用、高频 API 调用",
    "avoidIf": "你只想按旧 M2.1 单价做长期预算，或需要最成熟的国际开发者生态",
    "mainRisk": "M3 输入长度分档、Priority 1.5x、文本/语音/视频产品线分开计费，旧 M2.1 低价口径会低估真实成本",
    "alternatives": [
      "Doubao / Volcano Ark",
      "Qwen",
      "DeepSeek"
    ]
  },
  "swot": {
    "S": "多语言、价格",
    "W": "知名度",
    "O": "API 市场",
    "T": "顶级模型"
  },
  "tags": [
    "国产",
    "LLM",
    "低价",
    "多语言"
  ]
}
