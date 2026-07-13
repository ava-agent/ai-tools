// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.cohere.com/docs/models",
    "https://docs.cohere.com/docs/how-does-cohere-pricing-work",
    "https://docs.cohere.com/docs/command-a"
  ],
  "id": "cohere",
  "name": "Cohere / Command",
  "category": "llm",
  "subcategory": "企业大模型",
  "developer": "Cohere",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Command A+ 提供 Apache 2.0 open weights；API 可在 rate limits 内试用，生产通过 Model Vault / enterprise 路径核价",
      "models": "Command A+ 05-2026, Command A 03-2025, Command R+ 08-2024, Command R 08-2024",
      "link": "https://docs.cohere.com/docs/models"
    }
  ],
  "freeQuota": "API 在官方 trial rate limits 内可用；生产 usage tier、Model Vault 与企业部署以 Cohere dashboard 为准",
  "contextWindow": "Command A 256K；Command A+ / Command R+ 128K",
  "chineseSupport": 2,
  "pros": [
    "Command A+ 是 2026 年 Cohere Command A family 最新模型之一，提供 Apache 2.0 open weights，并支持图像、Agent、reasoning 和翻译能力",
    "Command A 官方定位为企业 Agent、tool use、RAG 和多语言任务",
    "Command R / R+ 仍适合 RAG 与多步工具调用场景",
    "官方文档列出模型 ID、上下文、输出上限和计费方式",
    "可通过私有部署、云服务和企业集成路径评估数据边界"
  ],
  "cons": [
    "Command R+ 08-2024 已不是唯一推荐入口，多数新场景应同时评估 Command A 系列",
    "中文生态和国内可访问性不如国产平台",
    "试用/生产限制、私有部署和企业安全配置需要账户级确认"
  ],
  "bestFor": "企业 RAG 应用、知识库检索、多语言业务",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Cohere 官方模型页已经把 Command A+、Command A、Command A Reasoning/Vision 与 Command R/R+ 并列展示，并提供 rate limits / pricing docs 供生产前核验。本站不再把 Cohere 简化为 Command R+，而按企业 RAG、Agent、tool use 和多语言场景来定位。",
    "pitfalls": [
      "新项目优先比较 Command A 系列",
      "RAG 效果要结合自有知识库评测",
      "生产 usage tier、rate limit 和私有部署需向 Cohere 确认"
    ]
  },
  "decisionSummary": {
    "verdict": "适合企业 RAG、Agent 和多语言任务，当前选型应从 Command A 系列开始比较。",
    "bestFor": "企业知识库、tool use、Agent、多语言检索增强",
    "avoidIf": "你需要中文生态优先、消费级聊天入口或国内部署便利性",
    "mainRisk": "旧 Command R+ 口径容易低估新模型线；试用、限额和私有部署要账户级确认。",
    "alternatives": [
      "Claude",
      "GPT-5.6 / OpenAI",
      "Amazon Nova"
    ]
  },
  "swot": {
    "S": "企业 RAG 和 Agent 定位清晰",
    "W": "国内生态弱",
    "O": "企业知识库和私有部署",
    "T": "OpenAI、Anthropic、云厂商托管模型"
  },
  "tags": [
    "LLM",
    "RAG",
    "企业",
    "多语言",
    "已核验"
  ]
}
