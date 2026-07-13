// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://github.com/google-gemini/gemini-cli",
    "https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/quota-and-pricing.md",
    "https://developers.google.com/gemini-code-assist/resources/quotas"
  ],
  "id": "gemini-cli",
  "name": "Gemini CLI",
  "category": "cli",
  "subcategory": "终端Agent",
  "developer": "Google",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "个人 Google 账号 OAuth 免费额度；API/企业路径按 Google AI / Gemini Code Assist 计划计费",
      "models": "Gemini 3 models，1M token context（以官方 README 当前说明为准）",
      "link": "https://github.com/google-gemini/gemini-cli"
    }
  ],
  "freeQuota": "个人 Google 账号：60 requests/minute，1,000 requests/day",
  "contextWindow": "1M token context",
  "chineseSupport": 4,
  "pros": [
    "官方 GitHub 项目，Apache-2.0 开源",
    "个人账号 OAuth 无需 API key 即可使用免费额度",
    "60 requests/minute 与 1,000 requests/day 对调研很友好",
    "Gemini 3 models 与 1M token context 适合读仓库和长日志",
    "内置工具与 MCP 支持，终端优先"
  ],
  "cons": [
    "请求数和日额度有上限，高阶/Pro 模型可用性可能低于总额度",
    "复杂工程落地仍需要人工审查",
    "Google 账号、Code Assist license 和网络环境会影响可用性",
    "企业级权限、审计和计费需要走对应 Google 路径",
    "模型可用性随官方最新策略变化"
  ],
  "bestFor": "读仓库、长日志、多文件定位、方案调研",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-13，官方 README 仍确认个人 Google 账号 OAuth 路径可用 60 RPM / 1,000 RPD 免费额度、Gemini 3 models、1M token context、内置工具与 MCP。适合先读懂项目，再决定是否交给更贵的 Agent 执行。",
    "pitfalls": [
      "有请求数和日额度上限",
      "高阶模型和付费 license 可用性要按当前账号确认",
      "极复杂任务仍要人工拆分或交给 Claude Code/Codex",
      "MCP 工具权限需要按项目最小化配置"
    ]
  },
  "decisionSummary": {
    "verdict": "免费长上下文调研首选，适合读仓库和日志；复杂执行和高阶模型可用性仍要按账号/计划确认。",
    "bestFor": "读仓库、长日志、多文件定位、方案调研",
    "avoidIf": "你需要无请求上限、企业级审计，或需要一次性完成高风险重构",
    "mainRisk": "免费额度、高阶模型可用性、Code Assist license 和 Google 账号路径会影响稳定性",
    "alternatives": [
      "Claude Code",
      "Codex",
      "Aider"
    ]
  },
  "swot": {
    "S": "1M 上下文、免费",
    "W": "复杂工程一般",
    "O": "Google 生态",
    "T": "Claude Code 能力"
  },
  "tags": [
    "推荐",
    "CLI",
    "免费",
    "长上下文",
    "Google",
    "Gemini",
    "MCP",
    "FlashLite",
    "Video"
  ],
  "video": {
    "src": "./videos/gemini-cli.mp4"
  },
  "radarChart": "images/geminicli.png"
}
