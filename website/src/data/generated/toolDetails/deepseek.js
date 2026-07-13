// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://api-docs.deepseek.com/quick_start/pricing",
    "https://api-docs.deepseek.com/news/news260424",
    "https://api-docs.deepseek.com/updates"
  ],
  "id": "deepseek",
  "name": "DeepSeek",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "深度求索",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "Web/App 有免费入口；API 按官方价格页计费",
      "models": "DeepSeek-V4-Pro / DeepSeek-V4-Flash（入口以官方当前开放为准）",
      "link": "https://deepseek.com"
    },
    {
      "type": "Global",
      "pricing": "API 每 1M tokens：V4-Flash 输入 $0.14 / 输出 $0.28；V4-Pro 输入 $0.435 / 输出 $0.87（缓存命中另计）",
      "models": "deepseek-v4-flash / deepseek-v4-pro；官方预告 deepseek-chat/reasoner 兼容别名将在 2026-07-24 下线",
      "link": "https://api-docs.deepseek.com/quick_start/pricing"
    }
  ],
  "freeQuota": "Web/App 有免费入口；API 免费额度未在本站核验，按官方控制台/价格页为准",
  "contextWindow": "官方 pricing 页展示 V4-Flash / V4-Pro 均为 1M 上下文，最大输出 384K tokens",
  "chineseSupport": 5,
  "decisionSummary": {
    "verdict": "中文和低成本 API 的强选，适合预算敏感的推理/代码/批处理任务，但要按 V4 Flash/Pro 当前档位和业务稳定性实测。",
    "bestFor": "预算有限、中文场景、推理任务、批量 API 调用",
    "avoidIf": "你需要最成熟的企业生态、强多模态工具链，或严格 SLA 的全球服务",
    "mainRisk": "deepseek-chat / deepseek-reasoner 仍可兼容路由，但官方预告这些旧别名将在 2026-07-24 下线，生产迁移应改用 deepseek-v4-flash / deepseek-v4-pro",
    "alternatives": [
      "Qwen",
      "GPT-5.6 / OpenAI",
      "Claude"
    ]
  },
  "pros": [
    "官方 pricing 页列出 DeepSeek-V4-Flash 与 DeepSeek-V4-Pro 两档，输入/输出价格明显适合批量 API 任务",
    "V4-Flash 与 V4-Pro 均支持 1M 上下文和 384K 最大输出，适合长资料与代码库分析",
    "官方保留 deepseek-chat / deepseek-reasoner 兼容期，给旧调用留出迁移窗口",
    "中文、代码和推理任务性价比高，适合批量分类、摘要、轻量推理和中文内容处理",
    "开源和社区生态仍有吸引力"
  ],
  "cons": [
    "API 稳定性和峰值体验需要按业务实测",
    "多模态和工具生态不如 OpenAI/Google/Anthropic 成熟",
    "企业治理、区域可用性和合规能力需要单独评估",
    "旧 deepseek-chat/reasoner 调用需要按官方预告在 2026-07-24 前迁移到 V4 Flash/Pro 模型名"
  ],
  "bestFor": "预算有限、中文场景、推理任务",
  "funRanking": "夯夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，DeepSeek 官方价格页将 API 主模型列为 deepseek-v4-flash 与 deepseek-v4-pro：两者均支持 1M 上下文、384K 最大输出，价格分别为输入 $0.14/$0.435、输出 $0.28/$0.87（每 1M tokens，缓存命中另计）。deepseek-chat 与 deepseek-reasoner 是兼容别名，官方预告将在 2026-07-24 下线；新项目应直接使用 V4 Flash/Pro 模型名。",
    "pitfalls": [
      "新项目直接用 deepseek-v4-flash / deepseek-v4-pro",
      "旧 deepseek-chat/reasoner 调用要按官方预告日期迁移",
      "高峰期稳定性要压测",
      "强多模态任务另选专业工具"
    ]
  },
  "swot": {
    "S": "中文强、价格低、推理/代码性价比",
    "W": "生态和稳定性需实测",
    "O": "企业降本和国产替代",
    "T": "Qwen、OpenAI/Anthropic 降价"
  },
  "tags": [
    "推荐",
    "国产",
    "低价",
    "推理",
    "API",
    "已核验"
  ]
}
