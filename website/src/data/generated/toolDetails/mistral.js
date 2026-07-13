// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.mistral.ai/models/overview",
    "https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12",
    "https://docs.mistral.ai/resources/known-limitations"
  ],
  "id": "mistral",
  "name": "Mistral / Vibe (former Le Chat)",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "Mistral AI (法国)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Vibe：Free / Pro $14.99/月 / Team $24.99/用户/月 / Enterprise 定制；API 按模型 token 另计",
      "models": "Mistral Medium 3.5, Mistral Small 4, Mistral Large 3, Ministral 3",
      "link": "https://docs.mistral.ai/models/overview"
    }
  ],
  "freeQuota": "Vibe 提供 Free 计划；API tier 以 Mistral 控制台为准，生产用量按模型另计",
  "contextWindow": "Large 3 / Medium 3.5 / Small 4 / Ministral 3 最高 256K",
  "chineseSupport": 3,
  "pros": [
    "官方模型列表已包含 Mistral Medium 3.5、Small 4、Large 3 和 Ministral 3",
    "Mistral Large 3 是 open-weight general-purpose multimodal MoE 模型",
    "Ministral 3 系列面向更小规模和本地/边缘部署",
    "官方模型卡直接列出上下文、价格和端点能力",
    "欧洲供应商和自部署选项适合合规敏感团队评估"
  ],
  "cons": [
    "不同模型的开放程度、价格和上下文不同，不能用单一订阅价概括",
    "中文生态、国内访问和第三方教程不如国产模型丰富",
    "复杂 Agent 工作流仍需与 OpenAI、Claude、Gemini、Qwen 实测比较"
  ],
  "bestFor": "性价比优先、开源部署、欧洲合规场景",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Mistral 的托管产品现以 Vibe（原 Le Chat）展示 Free、Pro、Team 与 Enterprise，API 仍按模型另计。模型主线包括 Medium 3.5、Small 4、Large 3、Devstral 2 和 Ministral 3；选型应同时核对计划、模型卡与限制。",
    "pitfalls": [
      "按具体模型卡核上下文和价格",
      "中文/国内场景先做小样本评测",
      "开放权重不等于所有商业限制都消失"
    ]
  },
  "decisionSummary": {
    "verdict": "适合欧洲合规、开放权重和 API 成本都要兼顾的团队，按具体模型而不是品牌做选择。",
    "bestFor": "欧洲合规、多模态 API、自部署或边缘模型评估",
    "avoidIf": "你需要中文生态优先或只想用一个通用托管聊天入口",
    "mainRisk": "模型线更新快，采购前要逐项确认模型卡、价格、上下文和可用区域。",
    "alternatives": [
      "Llama 4 / Meta",
      "Qwen",
      "Claude"
    ]
  },
  "swot": {
    "S": "开放权重、欧洲供应商、模型梯度完整",
    "W": "中文生态相对弱",
    "O": "合规市场和私有化部署",
    "T": "Llama、Qwen、DeepSeek、OpenAI"
  },
  "tags": [
    "开放权重",
    "欧洲",
    "MoE",
    "API",
    "已核验"
  ]
}
