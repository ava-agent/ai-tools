// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.z.ai/guides/overview/pricing",
    "https://bigmodel.cn/pricing"
  ],
  "id": "glm",
  "name": "GLM / Z.AI",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "智谱 AI",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "Z.AI / BigModel API 按模型、输入、输出和缓存计费，需按官方 pricing 逐项核价",
      "models": "GLM-5.2 / GLM-5.1 / GLM-5 / GLM-5-Turbo / GLM-4.7 等，以官方当前列表为准",
      "link": "https://docs.z.ai/guides/overview/pricing"
    }
  ],
  "freeQuota": "GLM-4.7-Flash 与 GLM-4.5-Flash 提供免费调用路径；其他额度和活动以控制台为准",
  "contextWindow": "取决于模型；GLM-5.2 等上下文和输出上限以官方模型页/价格页为准",
  "chineseSupport": 5,
  "pros": [
    "官方 Z.AI/BigModel pricing 已列出 GLM-5.2 等当前模型",
    "中文、前端 demo 和 Agent 场景体验仍有吸引力",
    "国内账号、企业和 API 路径相对友好",
    "可按不同 GLM 型号在成本、速度和能力间取舍"
  ],
  "cons": [
    "GLM 型号和计费档位变化快，不能继续按单一 GLM-4.7 价格判断",
    "极复杂推理和多步骤任务仍需和 Claude/GPT/Gemini 交叉评测",
    "海外生态和工具链不如国际头部模型成熟"
  ],
  "bestFor": "前端开发、完整 demo、Agent 场景",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，Z.AI/BigModel 官方 pricing 已把 GLM 拆成 GLM-5.2、GLM-4.7、GLM-4.6、GLM-Z1 等多档。本站不再把 GLM 固定写成 GLM-4.7 单一版本，而是按“GLM / Z.AI 模型家族”展示，使用前应按实际模型和 token 计费核算。",
    "pitfalls": [
      "先按官方 pricing 选择具体 GLM 型号",
      "极复杂任务建议和 Claude/GPT/Gemini 交叉评测",
      "API 免费额度以控制台为准"
    ]
  },
  "decisionSummary": {
    "verdict": "中文和前端/Agent 场景里的国产模型家族选择，适合国内团队，但必须按 GLM-5.2 等具体型号核价。",
    "bestFor": "前端 demo、中文 Agent、国内账号/API 路径",
    "avoidIf": "你需要固定旧 GLM-4.7 成本口径，或不想频繁跟随模型/价格变化",
    "mainRisk": "GLM-5.2、GLM-4.7 等型号和计费档位并存，旧单一型号/价格会误导预算",
    "alternatives": [
      "Qwen",
      "DeepSeek",
      "Gemini"
    ]
  },
  "swot": {
    "S": "前端、价格",
    "W": "复杂任务",
    "O": "国内市场",
    "T": "DeepSeek"
  },
  "tags": [
    "国产",
    "LLM",
    "低价",
    "Agent"
  ]
}
