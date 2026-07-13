// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.codebuddy.ai/docs/ide/Account/pricing",
    "https://www.codebuddy.ai/docs/ide/Account/credits",
    "https://www.codebuddy.ai/docs/ide/Features/models"
  ],
  "id": "codebuddy",
  "name": "Codebuddy",
  "category": "ide",
  "subcategory": "云集成IDE",
  "developer": "腾讯",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Pro $9.95/month（原价 $19.90/month）或 $119.40/year；Team Plan $40.00/person/month 或 $480.00/person/year",
      "models": "内置模型 + models.json 自定义模型；自定义端点需使用 OpenAI interface format",
      "link": "https://www.codebuddy.ai/docs/ide/Account/pricing"
    }
  ],
  "freeQuota": "正式计划按 credits 管理；Pro 含 1,000 credits / month，Team Plan 含 1,000 credits per seat per month；更高用量可购买 top-ups / add-on credits",
  "contextWindow": "取决于所选内置/自定义模型；models.json 可配置 maxInputTokens 与 maxOutputTokens",
  "chineseSupport": 5,
  "decisionSummary": {
    "verdict": "适合腾讯生态或需要 IDE/CLI/plugin 多入口的团队试用，但不应再按旧的永久免费 token 口径推荐。",
    "bestFor": "腾讯云用户、需要 CodeBuddy IDE/CLI/plugin 与 credits 统一管理的团队",
    "avoidIf": "你需要成熟的多会话体验、稳定的跨项目 Agent 工作流，或不想管理 credits/add-on",
    "mainRisk": "所有 conversation 相关请求都会消耗 credits，复杂任务和高级模型会更快消耗额度；自定义模型仍要按 OpenAI interface format 配置",
    "alternatives": [
      "Trae",
      "Cursor",
      "Qoder"
    ]
  },
  "pros": [
    "Pro 与 Team Plan 价格/credits 分层清晰",
    "Pro 含 1,000 credits / month，Team Plan 含 1,000 credits per seat per month",
    "Credits 会按模型 tier、任务复杂度和上下文长度消耗",
    "Pricing 页列出 Pro 1,000 credits top-up $9.95 以及 Teams 批量 top-ups",
    "支持 IDE/CLI/plugin 多种使用形式",
    "可通过 models.json 配置自定义模型列表和 maxInputTokens",
    "自定义模型端点按 OpenAI interface format 接入",
    "Plan Mode、Subagents、Skills、Hooks、MCP 等功能路径已进入官方文档"
  ],
  "cons": [
    "credits 消耗随模型和任务复杂度变化，真实成本需实测",
    "自定义模型配置需要处理 API key 和完整接口路径",
    "多会话和稳定性体验仍需项目内实测",
    "价格与促销可能随地区和账号状态变化"
  ],
  "bestFor": "腾讯云用户、快速部署（非主力）",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 2.5,
    "insights": "截至 2026-07-13，官方文档将 CodeBuddy 计费写成 Pro / Team Plan + credits / top-ups 的口径，并说明 Credits 会按模型 tier、任务复杂度和上下文长度消耗。旧的固定免费 token/月说法不再适合作为当前推荐理由。",
    "pitfalls": [
      "先用真实项目测 credits 消耗",
      "不要把 add-on credits 当成无限额度",
      "自定义模型要按 OpenAI interface format 配置完整 URL",
      "不适合作为未经验证的主力开发工具"
    ]
  },
  "swot": {
    "S": "腾讯云集成、IDE/CLI/plugin 多入口",
    "W": "credits 计费和体验成熟度仍需实测",
    "O": "云服务市场和国内团队采购",
    "T": "Cursor/Trae/Qoder 等成熟竞品"
  },
  "tags": [
    "国产",
    "腾讯",
    "Credits",
    "Team Plan",
    "OpenAI interface format"
  ],
  "video": {
    "src": "./videos/codebuddy.mp4"
  },
  "radarChart": "images/codebuddy_radar_chart.png"
}
