// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://platform.kimi.ai/docs/models",
    "https://platform.kimi.ai/docs/pricing/chat",
    "https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart"
  ],
  "id": "kimi",
  "name": "Kimi / Moonshot",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "月之暗面",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "Kimi API 按模型、输入/输出 token 和缓存计费；具体单价以官方 pricing 为准",
      "models": "kimi-k2.7-code / kimi-k2.7-code-highspeed / kimi-k2.6 / kimi-k2.5 / Moonshot V1；旧 kimi-k2 与 kimi-latest 已停用",
      "link": "https://platform.kimi.ai/docs/models"
    }
  ],
  "freeQuota": "Kimi Chat 有免费入口；API 免费额度、试用和价格以 platform.kimi.ai 当前说明为准",
  "contextWindow": "取决于模型；Kimi 长上下文和代码模型需按官方模型页确认",
  "chineseSupport": 5,
  "pros": [
    "官方文档已列出 kimi-k2.7-code、kimi-k2.7-code-highspeed、kimi-k2.6、kimi-k2.5 等当前模型",
    "长文档、中文问答和代码模型路线清晰",
    "模型页明确旧 kimi-k2 系列、kimi-latest 和 kimi-thinking-preview 已停用",
    "Kimi Chat 和 API 平台入口分开，适合从个人使用过渡到开发集成"
  ],
  "cons": [
    "Kimi Chat 免费入口不等于 API 免费额度",
    "代码模型、Thinking 模型和通用模型计费可能不同",
    "多模态能力和企业治理需按当前官方入口确认"
  ],
  "bestFor": "长文档、中文对话、方案调研",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，Kimi API 官方文档已显示 kimi-k2.7-code、kimi-k2.7-code-highspeed、kimi-k2.6、kimi-k2.5 和 Moonshot V1，并标记旧 kimi-k2 系列、kimi-latest、kimi-thinking-preview 已停用。长文档和中文仍是强项，但 API 价格、缓存和代码模型要按官方 pricing 单独核算。",
    "pitfalls": [
      "不要把 Chat 免费入口等同于 API 免费",
      "代码模型和 Thinking 模型先按 pricing 核价",
      "长上下文任务先估算输入输出成本"
    ]
  },
  "decisionSummary": {
    "verdict": "中文长文档和代码模型路线值得关注，适合资料阅读、方案调研和 Kimi API 集成；新项目应优先看 K2.7 Code 或 K2.6，不能沿用旧 kimi-k2/kimi-latest 口径。",
    "bestFor": "长文档、中文对话、方案调研、Kimi API 代码任务",
    "avoidIf": "你需要已验证的强视觉能力，或不想区分 Chat 与 API 计费",
    "mainRisk": "K2.7 Code、K2.6、K2.5、Moonshot V1 与 Chat/API 入口不同，旧 kimi-k2/kimi-latest 和泛化免费说法会误导成本",
    "alternatives": [
      "Qwen",
      "GLM / Z.AI",
      "DeepSeek"
    ]
  },
  "swot": {
    "S": "长文档、中文",
    "W": "无视觉",
    "O": "国内市场",
    "T": "DeepSeek"
  },
  "tags": [
    "国产",
    "LLM",
    "长上下文",
    "中文"
  ]
}
