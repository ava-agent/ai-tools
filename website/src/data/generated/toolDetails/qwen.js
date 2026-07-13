// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
    "https://www.alibabacloud.com/help/en/model-studio/models",
    "https://www.alibabacloud.com/help/en/model-studio/coding-plan"
  ],
  "id": "qwen",
  "name": "Qwen",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "阿里巴巴",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "通义千问/Model Studio 分入口；API 按阿里云 Model Studio pricing 分模型计费",
      "models": "qwen3.7-max, qwen3.7-plus, qwen3.7-vl-plus, qwen-coder 等",
      "link": "https://tongyi.aliyun.com"
    }
  ],
  "freeQuota": "通义千问消费入口有免费/订阅路径；API 额度以阿里云 Model Studio 控制台为准",
  "contextWindow": "取决于模型；长上下文、思考模型、视觉模型分档计费",
  "chineseSupport": 5,
  "decisionSummary": {
    "verdict": "中文、代码和国内云生态的稳妥路线，适合国内团队，但 API 模型/价格表要按 Model Studio 当前页核对。",
    "bestFor": "中文场景、代码任务、阿里云/国内企业工作流",
    "avoidIf": "你主要做英文复杂推理、海外 SaaS 集成，或希望完全脱离云厂商控制台",
    "mainRisk": "Qwen 模型名、长上下文和 thinking/VL/coder 档位很多，旧固定 Qwen 单一口径会误导选型和成本",
    "alternatives": [
      "DeepSeek",
      "Gemini",
      "GPT-5.6 / OpenAI"
    ]
  },
  "pros": [
    "中文理解和生成能力强，国内用户入口多",
    "Model Studio pricing 明确列出 qwen3.7-max 等模型，并注明 pay-as-you-go、batch/context cache 与地区价格差异",
    "代码、视觉、多模态和长上下文有独立模型路线",
    "国际服务部署范围才有部分免费 quota，国内和国际入口要分开核价",
    "开源 Qwen 社区活跃，便于本地/私有化探索"
  ],
  "cons": [
    "模型名和价格表非常细，选错档位容易高估或低估成本",
    "超长上下文、thinking、视觉和 coder 模型需分别核价",
    "海外开发者体验和生态成熟度不如 OpenAI/Anthropic/Google",
    "英文复杂推理场景仍建议和 Claude/GPT/Gemini 对比评测"
  ],
  "bestFor": "中文场景、代码任务",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，阿里云 Model Studio 官方价格页将 Qwen API 明确放在 pay-as-you-go 体系里，并列出 qwen3.7-max 等模型的国际/中国大陆部署价格、1M token 级别价格和免费 quota 适用范围。本站不再把 Qwen 固定写成单个型号，而是按中文/代码/视觉/云生态的模型家族来选型。",
    "pitfalls": [
      "先按模型价格表核对输入、输出和 long-context 单价",
      "不要把通义千问 App 免费入口等同于 API 免费",
      "英文复杂推理需要交叉评测"
    ]
  },
  "swot": {
    "S": "中文、代码、阿里云生态",
    "W": "模型和计费分档复杂",
    "O": "国内企业和私有化市场",
    "T": "竞争压力来自 DeepSeek、OpenAI、Anthropic 和 Google"
  },
  "tags": [
    "国产",
    "LLM",
    "中文",
    "阿里",
    "代码",
    "已核验"
  ]
}
