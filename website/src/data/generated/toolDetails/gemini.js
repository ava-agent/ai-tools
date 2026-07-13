// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://ai.google.dev/gemini-api/docs/models",
    "https://ai.google.dev/gemini-api/docs/pricing",
    "https://gemini.google/subscriptions/"
  ],
  "id": "gemini",
  "name": "Gemini",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "Google",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Gemini app / Google AI Pro / Google AI Ultra；Gemini API 有 Free、Paid、Enterprise 层，按模型、token、grounding、batch/flex/priority 等路径计费",
      "models": "Gemini 3.5 Flash、Gemini 3.1 Pro Preview、Gemini 3.1 Flash-Lite、Gemini Omni Flash Preview 等",
      "link": "https://ai.google.dev/gemini-api/docs/pricing"
    }
  ],
  "freeQuota": "Gemini app 有免费入口；API 免费层和额度以 Google AI Studio/官方 pricing 为准",
  "contextWindow": "取决于模型；Gemini 系列主打长上下文，具体 token limit 以官方模型页为准",
  "chineseSupport": 4,
  "decisionSummary": {
    "verdict": "长上下文和 Google 生态成熟的通用路线之一，适合读长资料、研究和多模态，但要看清免费层和数据/计费边界。",
    "bestFor": "长文档处理、多模态任务、方案设计、Google 生态工作流",
    "avoidIf": "你需要固定低延迟、完全脱离 Google 账号/云生态，或非常明确的国内可用性",
    "mainRisk": "Gemini app 订阅、API 免费层、模型上下文和数据使用政策分属不同入口，容易混淆",
    "alternatives": [
      "GPT-5.5 / OpenAI",
      "Claude",
      "Qwen"
    ]
  },
  "pros": [
    "官方 Gemini API 提供多型号选择，当前 pricing 将 Gemini 3.5 Flash、3.1 Pro Preview、3.1 Flash-Lite 等分档展示",
    "Free、Paid、Enterprise 三层入口清楚，Paid 明确内容不用于改进产品",
    "长上下文能力适合整仓库、长文档和研究材料处理",
    "多模态和 Google 生态整合强，适合搜索、文档、工作区和 Android 用户",
    "Batch/Flex/Priority 与 grounding 计费路径适合按任务做成本优化"
  ],
  "cons": [
    "Gemini app 订阅、API 免费层、Paid Tier 和 Enterprise/Google Cloud 路径不同，不能混为一谈",
    "免费层数据使用和额度策略需要按官方文档确认",
    "国内访问受限",
    "最高上下文、模型可用性和价格随型号变化明显"
  ],
  "bestFor": "长文档处理、多模态任务、方案设计",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 5,
    "insights": "截至 2026-07-07，Google 官方 Gemini API pricing 将 Free、Paid、Enterprise、Gemini 3.5 Flash、3.1 Pro Preview、3.1 Flash-Lite、Omni Flash Preview 等入口和价格分开说明。本站不再把 Gemini 固定写成单一系列结论，而是强调长上下文、多模态、Google 生态和不同计费路径的边界。",
    "pitfalls": [
      "区分 Gemini app 订阅和 API 计费",
      "免费层数据和额度按官方条款确认",
      "长上下文任务先估算输入输出成本"
    ]
  },
  "swot": {
    "S": "长上下文、多模态、Google 生态",
    "W": "入口和计费路径复杂",
    "O": "搜索/文档/移动生态整合",
    "T": "Claude、GPT、国产模型"
  },
  "tags": [
    "推荐",
    "LLM",
    "Google",
    "长上下文",
    "推理",
    "已核验"
  ]
}
