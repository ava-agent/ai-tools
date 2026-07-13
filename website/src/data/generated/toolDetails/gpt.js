// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://developers.openai.com/api/docs/guides/latest-model",
    "https://developers.openai.com/api/docs/pricing",
    "https://openai.com/chatgpt/pricing/"
  ],
  "id": "gpt",
  "name": "GPT-5.6 / OpenAI",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "OpenAI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "ChatGPT Free/Go/Plus/Pro/Business/Edu/Enterprise；API 按模型、工具、服务层和缓存计费",
      "models": "gpt-5.6-sol、gpt-5.6-terra、gpt-5.6-luna 与 OpenAI reasoning/audio/image/video models",
      "link": "https://developers.openai.com/api/docs/guides/latest-model"
    }
  ],
  "freeQuota": "ChatGPT Free 有限；API 无固定永久免费额度，按官方价格页计费",
  "contextWindow": "取决于模型、API 与工具配置；以官方模型和价格文档为准",
  "chineseSupport": 3,
  "decisionSummary": {
    "verdict": "生态完整的通用 AI 平台，GPT-5.6 系列适合复杂生产工作流和 Agent，但价格、工具与服务层计费要精细控制。",
    "bestFor": "通用任务、生态集成、推理任务、Agent 工作流、多模态工具链",
    "avoidIf": "你需要固定低成本、国内无障碍访问，或只做简单批量文本任务",
    "mainRisk": "模型、ChatGPT 计划、API 工具和服务层计费变化快，旧固定 GPT 口径会误导成本判断",
    "alternatives": [
      "Claude",
      "Gemini",
      "DeepSeek"
    ]
  },
  "pros": [
    "GPT-5.6 sol/terra/luna 覆盖不同性能和成本层级，适合复杂生产工作流、工具型 Agent 与代码场景",
    "Responses API、托管工具、结构化输出、推理 effort 和 verbosity 控制完整",
    "ChatGPT 生态成熟，覆盖对话、文件、数据分析、图像、视频和自定义 GPT/应用入口",
    "OpenAI API 平台和 Codex/Agents SDK 生态衔接强",
    "模型和工具选择丰富，适合从个人到企业不同路径"
  ],
  "cons": [
    "API 成本由模型、reasoning effort、工具、缓存和服务层共同决定，容易低估",
    "旧固定 GPT 迁移提示不能直接复用到当前模型",
    "国内访问受限",
    "高质量 Agent 流程需要评测和编排，不是简单替换模型名"
  ],
  "bestFor": "通用任务、生态集成、推理任务、插件生态",
  "funRanking": "夯夯夯",
  "personalExperience": {
    "rating": 5,
    "insights": "截至 2026-07-13，当前 OpenAI 模型入口以 GPT-5.6 sol/terra/luna 分层。本站采用 GPT-5.6 / OpenAI 生态口径：适合复杂生产工作流、工具型 Agent 和代码任务，但必须按模型、工具、缓存、服务层和实际用量控制成本。",
    "pitfalls": [
      "不要沿用旧固定 GPT 提示词和价格判断",
      "控制 reasoning effort、verbosity 和工具调用",
      "高风险任务要用评测和人工审查兜底"
    ]
  },
  "swot": {
    "S": "生态成熟、工具链完整、推理强",
    "W": "成本复杂、国内访问受限",
    "O": "Agent 和企业流程自动化",
    "T": "Claude、Gemini、国产低价模型"
  },
  "tags": [
    "推荐",
    "LLM",
    "OpenAI",
    "生态",
    "推理",
    "GPT-5.6",
    "已核验"
  ]
}
