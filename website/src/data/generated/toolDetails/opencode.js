// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://opencode.ai/",
    "https://github.com/anomalyco/opencode",
    "https://opencode.ai/docs/go/"
  ],
  "id": "opencode",
  "name": "OpenCode",
  "category": "cli",
  "subcategory": "开源CLI",
  "developer": "Anomaly",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "开源免费；可用免费模型/自带 provider；OpenCode Go 可选 $5 首月后 $10/月",
      "models": "75+ providers（含本地模型）；OpenCode Go 提供精选 open coding models",
      "link": "https://opencode.ai/"
    }
  ],
  "freeQuota": "工具开源免费；OpenCode Go 可选，含 5h $12、weekly $30、monthly $60 的 dollar-value limits",
  "contextWindow": "取决于 provider/model",
  "chineseSupport": 3,
  "pros": [
    "当前官方站定位为 open source AI coding agent",
    "支持终端、IDE 扩展和 desktop beta",
    "75+ providers，可接 GitHub Copilot、ChatGPT Plus/Pro 或本地模型",
    "OpenCode Go 文档列出 GLM-5.2、Kimi K2.7 Code、MiniMax M3、Qwen3.7、DeepSeek V4 等 open coding models",
    "LSP、multi-session、share links 和 build/plan agents 完整",
    "官方强调不存储代码和上下文数据"
  ],
  "cons": [
    "旧 opencode-ai 归档结论不再适用于当前 anomalyco/opencode 项目",
    "OpenCode Go 是可选订阅，不是使用 OpenCode 的必需项",
    "provider、Go 订阅和 Zen 按量服务容易让新用户混淆",
    "模型列表和 Go limits 可能随官方策略变化"
  ],
  "bestFor": "开源终端 Agent、多 provider、隐私敏感开发",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，OpenCode 官方站仍将其定位为开源 AI coding agent，覆盖 terminal、IDE 和 desktop beta；OpenCode Go 文档最后更新于 2026-07-05，列出 $5 首月后 $10/月、5h/weekly/monthly dollar-value limits 和一批 open coding models。旧的“已归档、迁移至 Crush”说法应移除。",
    "pitfalls": [
      "不要再链接旧 opencode-ai/opencode 归档仓库",
      "OpenCode Go 是可选订阅而非必选",
      "接入企业项目时仍需确认 provider 数据策略"
    ]
  },
  "decisionSummary": {
    "verdict": "当前是活跃的开源 coding agent，适合终端优先和多 provider 用户；旧归档判断已过时。",
    "bestFor": "开源终端 Agent、多 provider、隐私敏感开发",
    "avoidIf": "你需要成熟商业 SLA、一站式企业管理，或不想理解 provider/Go/Zen 的差异",
    "mainRisk": "开源工具、可选订阅和不同 provider 的责任边界容易混淆",
    "alternatives": [
      "Aider",
      "Codex",
      "Gemini CLI"
    ]
  },
  "swot": {
    "S": "活跃开源、多 provider、终端/IDE/desktop 覆盖",
    "W": "商业支持和订阅边界需解释",
    "O": "适合多模型与本地模型工作流",
    "T": "Aider、Codex、Gemini CLI 争夺终端用户"
  },
  "tags": [
    "开源",
    "CLI",
    "多模型",
    "LSP",
    "PrivacyFirst"
  ],
  "video": {
    "src": "./videos/opencode-cli.mp4"
  }
}
