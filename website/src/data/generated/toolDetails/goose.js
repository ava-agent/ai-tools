// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://goose-docs.ai/",
    "https://github.com/aaif-goose/goose",
    "https://goose-docs.ai/docs/getting-started/providers/"
  ],
  "id": "goose",
  "name": "Goose",
  "category": "cli",
  "subcategory": "开源CLI",
  "developer": "AAIF / Goose community",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Apache-2.0 开源软件；模型、云 provider 或企业部署费用另计",
      "models": "15+ providers：Anthropic、OpenAI、Google、Ollama、OpenRouter、Azure、Bedrock 等，另有 ACP 和 70+ MCP extensions",
      "link": "https://goose-docs.ai/docs/getting-started/providers/"
    }
  ],
  "freeQuota": "Goose 软件开源；本地模型、托管 provider、API key 和企业环境成本需分别核算",
  "contextWindow": "取决于所选 provider/model",
  "chineseSupport": 3,
  "pros": [
    "项目已从 block/goose 迁到 Linux Foundation 旗下 Agentic AI Foundation (AAIF)",
    "官方 README 定位为 desktop app、CLI 和 API 三种形态的本地开源 AI agent",
    "Apache-2.0 开源，适合自托管和二次开发",
    "支持 15+ provider、ACP 订阅接入和 70+ MCP extensions",
    "适合把终端、文件和工具调用放在本地工作流中"
  ],
  "cons": [
    "Goose 项目已迁到 AAIF 组织，旧 block/goose 链接不宜作为当前主链接",
    "软件开源不代表模型调用免费",
    "本地模型需额外配置下载",
    "某些 provider 需预配置 AWS/Azure/API 凭证",
    "配置复杂",
    "生态仍在变化"
  ],
  "bestFor": "本地部署、隐私优先用户",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，Goose 官方 README 明确项目已从 block/goose 迁到 AAIF，并定位为 desktop app、CLI、API 都可用的本地开源 AI agent。它适合本地优先、多 provider 和可扩展 Agent 场景，但预算仍应按所选模型/API/云环境核算。",
    "pitfalls": [
      "不要再把旧 block/goose 当作当前主仓库",
      "需要配置模型 provider 或本地模型",
      "软件开源不等于推理成本为零"
    ]
  },
  "decisionSummary": {
    "verdict": "AAIF 旗下本地优先、多 provider 的开源 Agent 选择，适合想掌控运行环境的开发者，但模型和云端成本要单独算。",
    "bestFor": "本地部署、隐私优先用户、多 provider Agent 实验",
    "avoidIf": "你想要开箱即用的托管商业 Agent 或不愿配置模型 provider",
    "mainRisk": "旧仓库地址、开源软件成本和 provider 推理成本容易混淆",
    "alternatives": [
      "OpenCode",
      "Cline",
      "OpenHands"
    ]
  },
  "swot": {
    "S": "开源、本地",
    "W": "生态新",
    "O": "隐私市场",
    "T": "云端工具"
  },
  "tags": [
    "开源",
    "CLI",
    "本地",
    "AAIF",
    "Rust",
    "MCP",
    "MultiModel",
    "SessionForking"
  ]
}
