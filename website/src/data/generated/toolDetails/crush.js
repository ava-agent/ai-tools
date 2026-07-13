// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://github.com/charmbracelet/crush",
    "https://charm.land/blog/crush-comes-home/",
    "https://hyper.charm.land/"
  ],
  "id": "crush",
  "name": "Crush",
  "category": "cli",
  "subcategory": "开源CLI",
  "developer": "Charmbracelet, Inc. (Charm)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Crush 工具开源；模型可 BYOK / provider 自付 / Charm Hyper credits",
      "models": "Multi-Model：OpenAI/Anthropic-compatible APIs、provider 路径和 Charm Hyper 等，以配置为准",
      "link": "https://github.com/charmbracelet/crush"
    }
  ],
  "freeQuota": "Crush 本体可安装使用；Charm Hyper 公开 Free 层为 100 Hypercredits/月，Subscription $20/月提供每日刷新的 250 Hypercredits；预付包从 $5/100 Hypercredits 起且不失效",
  "contextWindow": "取决于所选模型",
  "chineseSupport": 3,
  "pros": [
    "Charm Bracelet 官方维护，定位为终端里的 AI coding companion",
    "Multi-Model：可选择多种 LLM，也支持 OpenAI/Anthropic-compatible APIs",
    "支持会话上下文、mid-session model switching、LSP 增强和 MCP 扩展",
    "跨 macOS、Linux、Windows PowerShell/WSL、BSD 等终端环境",
    "可配 Charm Hyper 获取 coding-optimized inference 和 Hypercredits 计费路径"
  ],
  "cons": [
    "工具本身与推理费用是两件事，BYOK/provider/Hyper 成本需要分开算",
    "Hypercredits 映射 token 成本，官方当前写明 1 Hypercredit = 5¢",
    "项目仍快速演进，企业治理和团队预算需跟进官方说明",
    "需要自行配置 provider、API key 或 Hyper 账户",
    "中文资料和国内网络体验需要实测"
  ],
  "bestFor": "喜欢精美 TUI 的开源 CLI 用户",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Charm 官方 GitHub 将 Crush 描述为可在终端中运行的 AI coding companion，支持 Multi-Model、session-based context、LSP 和 MCP。Charm Hyper 另有 Free 100 Hypercredits/月、$20/月订阅、预付 bundles 和 1 Hypercredit = 5¢ 口径，因此应把 Crush 本体、BYOK/provider 成本和 Hyper credits 分开评估。",
    "pitfalls": [
      "不要把开源工具本体等同于免费推理",
      "先确认走 BYOK、provider API 还是 Charm Hyper credits"
    ]
  },
  "decisionSummary": {
    "verdict": "适合喜欢终端 TUI、开源生态和多 provider 配置的开发者；预算要按 BYOK/provider 或 Hypercredits 单独核算。",
    "bestFor": "喜欢精美 TUI 的开源 CLI 用户",
    "avoidIf": "你想要商业 IDE 级开箱即用、统一账单和成熟企业管理控制台",
    "mainRisk": "开源安装、provider API 与 Charm Hyper 是不同成本层，容易被混成“完全免费”或单一订阅",
    "alternatives": [
      "OpenCode",
      "Goose",
      "Warp"
    ]
  },
  "swot": {
    "S": "精美 TUI、Multi-Model、LSP、MCP、Charm 生态",
    "W": "provider/credits 成本需自管",
    "O": "终端 Agent 与 Hyper 推理生态",
    "T": "Claude Code、Codex、Warp 等商业路径"
  },
  "tags": [
    "开源",
    "CLI",
    "TUI",
    "Charm",
    "MCP",
    "MultiModel"
  ]
}
