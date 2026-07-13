// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/",
    "https://www.alibabacloud.com/help/en/model-studio/coding-plan",
    "https://www.alibabacloud.com/help/en/model-studio/model-pricing",
    "https://github.com/QwenLM/qwen-code"
  ],
  "id": "qwen-cli",
  "name": "Qwen CLI",
  "category": "cli",
  "subcategory": "终端Agent",
  "developer": "阿里巴巴",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "Alibaba ModelStudio：Coding Plan 固定订阅 / Token Plan 用量计费 / Standard API Key；第三方或自定义 provider 另行计费",
      "models": "Coding Plan 支持 qwen3-coder-plus、qwen3.7-plus、qwen3-max-2026-01-23、GLM、Kimi、MiniMax 等，按地区和计划可用性变化",
      "link": "https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/"
    }
  ],
  "freeQuota": "旧 OAuth 免费层已于 2026-04-15 停止；当前需 Coding Plan 或自行配置 API key/provider",
  "contextWindow": "取决于当前 Qwen 模型与 API/provider 路径",
  "chineseSupport": 5,
  "pros": [
    "官方 Qwen Code 项目，适合中文代码和终端 Agent 场景",
    "当前 /auth 主入口是 Alibaba ModelStudio、第三方 provider 和自定义 provider",
    "Coding Plan 提供较可预测成本，Token Plan 和 Standard API Key 适合团队或已有 ModelStudio 配额",
    "可接 Qwen Coder/Max、GLM、Kimi、MiniMax 等当前 Coding Plan 支持模型",
    "MCP 服务器集成，适合国内模型栈试验"
  ],
  "cons": [
    "旧 OAuth 免费请求额度已于 2026-04-15 停止，不能再按免费 CLI 规划",
    "Coding Plan、Token Plan、Standard API Key、第三方 provider 的成本和地区入口不同",
    "API/provider 计费、地区和模型可用性需分别确认",
    "大型仓库仍需人工审查",
    "成熟度不如 Claude Code/Gemini CLI"
  ],
  "bestFor": "中文需求、中小项目开发",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Qwen Code 官方认证文档明确旧 OAuth free tier 已于 2026-04-15 停止；当前 /auth 应在 Alibaba ModelStudio、第三方 provider 或自定义 provider 中选择。Coding Plan 适合个人开发者做固定成本路径，Token Plan/API Key 则要按 Model Studio 当前模型价格核算。",
    "pitfalls": [
      "旧 OAuth 免费额度不可再作为预算依据",
      "先确认 Coding Plan 或 API provider",
      "大型仓库仍需人工审查"
    ]
  },
  "decisionSummary": {
    "verdict": "中文和 Qwen 生态里的终端 Agent 值得跟进，但旧免费额度已停止，必须按 Coding Plan/API 路径重新估算成本。",
    "bestFor": "中文需求、中小项目开发、Qwen/API provider 已就绪的团队",
    "avoidIf": "你依赖旧的每日免费调用额度，或不想配置 Coding Plan/API key",
    "mainRisk": "2026-04-15 后 OAuth 免费层已停，Coding Plan、Token Plan、Standard API Key 和 provider 计费路径容易被误判",
    "alternatives": [
      "Gemini CLI",
      "Aider",
      "OpenCode"
    ]
  },
  "swot": {
    "S": "中文、Qwen 生态、ModelStudio 路径明确",
    "W": "计费和地区入口较复杂",
    "O": "国内模型栈和终端 Agent 试点",
    "T": "Gemini CLI、Aider、OpenCode"
  },
  "tags": [
    "推荐",
    "CLI",
    "国产",
    "中文",
    "Qwen",
    "CodingPlan",
    "多模态",
    "MCP"
  ]
}
