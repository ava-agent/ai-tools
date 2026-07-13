// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://github.com/aider-ai/aider",
    "https://aider.chat/docs/llms.html",
    "https://aider.chat/docs/usage.html"
  ],
  "id": "aider",
  "name": "Aider",
  "category": "cli",
  "subcategory": "开源CLI",
  "developer": "Paul Gauthier",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "免费开源；API/订阅由所选模型 provider 自付",
      "models": "可连接多数 LLM；官方当前 best-models 页仍建议用代码编辑能力强的模型，并参考 Aider LLM leaderboards",
      "link": "https://aider.chat/docs/llms.html"
    }
  ],
  "freeQuota": "工具免费；可接免费 API provider 或本地模型，但能力和限额取决于 provider",
  "contextWindow": "取决于所选模型；按需将文件加入 chat",
  "chineseSupport": 3,
  "pros": [
    "Git 深度集成，AI 修改会自动落到 Git 工作流中",
    "可连接多数 LLM，支持免费 provider 和 Ollama/本地模型路径",
    "安装路径简单，官方推荐 aider-install",
    "支持把指定文件加入 chat，并可自动提交与 /undo",
    "适合喜欢终端和可审计 diff 的开发者"
  ],
  "cons": [
    "无完整 GUI/IDE 体验，需要命令行舒适度",
    "模型能力决定编辑质量，较弱模型可能无法可靠完成修改",
    "API key、provider 配额和网络环境需要自行管理",
    "大型代码库仍要主动选择相关文件进入上下文"
  ],
  "bestFor": "Git 工作流、多模型切换、隐私意识强团队",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-07，Aider 官方文档仍强调“连接多数 LLM”，并建议查看 LLM leaderboards 选择更会返回 code edits 的模型。它的核心价值是 Git-first、终端内可审计修改和多 provider 灵活性，不应写成某个固定模型绑定工具。",
    "pitfalls": [
      "需要自带 API key 或配置本地模型",
      "仅终端无完整 GUI",
      "低能力模型会明显拖累编辑质量",
      "大型代码库要主动挑文件进上下文"
    ]
  },
  "decisionSummary": {
    "verdict": "终端和 Git 工作流用户的稳健开源选择，但效果高度依赖所选模型和上下文文件选择。",
    "bestFor": "Git 工作流、多模型切换、隐私意识强团队",
    "avoidIf": "你想要完整 IDE 图形体验，或不愿管理 API key、模型和上下文文件",
    "mainRisk": "模型能力、provider 额度和手动上下文选择会直接影响编辑质量",
    "alternatives": [
      "Gemini CLI",
      "Codex",
      "OpenCode"
    ]
  },
  "swot": {
    "S": "开源、Git-first、多模型",
    "W": "仅终端且需自管 provider",
    "O": "本地模型和开源社区持续增长",
    "T": "IDE 内置 Agent 降低使用门槛"
  },
  "tags": [
    "开源",
    "CLI",
    "Git",
    "多模型",
    "TerminalNative",
    "LocalLLM"
  ]
}
