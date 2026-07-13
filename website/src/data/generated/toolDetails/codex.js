// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://learn.chatgpt.com/docs/pricing",
    "https://developers.openai.com/codex/pricing",
    "https://developers.openai.com/codex/cli/features",
    "https://developers.openai.com/codex/models",
    "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan",
    "https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-freegopluspro-sora"
  ],
  "id": "codex",
  "name": "Codex",
  "category": "cli",
  "subcategory": "代码生成",
  "developer": "OpenAI",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Codex 已包含在 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise；超出计划可用量时按 flexible credits / API 路径计费",
      "models": "Codex 推荐模型与可选模型以官方 Codex Models 文档为准",
      "link": "https://developers.openai.com/codex/pricing"
    }
  ],
  "freeQuota": "Codex 随 ChatGPT Free/Go 等计划开放有限能力；各计划限制和 flexible credits 以官方 Codex pricing/Help Center 为准",
  "contextWindow": "取决于所选 OpenAI 模型",
  "chineseSupport": 3,
  "pros": [
    "OpenAI 官方 Codex CLI/开发者文档持续维护",
    "Codex pricing 页明确列出 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise 覆盖",
    "可通过 /model 或 codex --model 切换模型，具体模型以官方 Codex Models 为准",
    "Help Center 明确说明计划限制和 credit options 会随计划变化",
    "适合与 OpenAI API/code generation 工作流衔接"
  ],
  "cons": [
    "模型命名和可用性变化快，需要按官方文档核验",
    "价格与额度取决于 ChatGPT 计划、flexible credits 或 API 路径",
    "旧固定 Codex 型号和价格说法已从本站推荐语中移除",
    "国内访问受限",
    "高风险改动仍需要测试与人工审查"
  ],
  "bestFor": "OpenAI 生态内的代码生成、代码审查、CLI Agent 任务",
  "funRanking": "夯夯夯",
  "personalExperience": {
    "rating": 5,
    "insights": "截至 2026-07-13，OpenAI 官方 Codex pricing 页明确 Codex 包含在 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise 中；Help Center 说明不同计划的 usage limits 和 credit options 不同。采购或部署时应按官方 Codex pricing、models 和 credits 文档核验。",
    "pitfalls": [
      "模型名和额度变化快，使用前看官方 Codex docs",
      "不要沿用旧的固定 Codex 型号和价格断言",
      "区分 ChatGPT 计划、flexible credits 和 API 路径",
      "高风险改动必须保留测试和人工审查"
    ]
  },
  "decisionSummary": {
    "verdict": "OpenAI 生态首选的代码 Agent 路线，适合已经使用 ChatGPT/OpenAI API 的团队；模型、计划限制和 credits 必须跟官方文档走。",
    "bestFor": "OpenAI 生态内的代码生成、代码审查、CLI Agent 任务",
    "avoidIf": "你需要固定模型名、固定免费额度，或项目无法使用 OpenAI 服务",
    "mainRisk": "Codex 模型推荐、计划限制、flexible credits 和 API 计费路径变化快，旧资料很容易过时",
    "alternatives": [
      "Claude Code",
      "Gemini CLI",
      "GitHub Copilot"
    ]
  },
  "swot": {
    "S": "代码生成、生态",
    "W": "价格、访问",
    "O": "企业级市场",
    "T": "开源替代"
  },
  "tags": [
    "推荐",
    "CLI",
    "OpenAI",
    "代码生成",
    "多语言",
    "GPT-5",
    "Agent"
  ],
  "video": {
    "src": "./videos/codex-cli.mp4"
  },
  "radarChart": "images/codex.png"
}
