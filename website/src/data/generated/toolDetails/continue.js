// Generated from src/data/tools.js.
export default {
  "verificationStatus": "historical",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.continue.dev/",
    "https://github.com/continuedev/continue",
    "https://docs.continue.dev/customize/model-providers/overview"
  ],
  "id": "continue",
  "name": "Continue",
  "category": "cli",
  "subcategory": "开源平台",
  "developer": "Continue team; now Cursor/Anysphere",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "仓库已不再主动维护且对用户 read-only；历史开源版本仍可参考，模型/provider 自付",
      "models": "OpenAI、Anthropic、Gemini、DeepSeek、Mistral、本地模型等 provider 配置（以历史文档为准）",
      "link": "https://www.continue.dev/"
    }
  ],
  "freeQuota": "历史开源项目；本地/自带 provider 成本取决于模型和部署方式",
  "contextWindow": "取决于模型 (Claude 200K+, 自动上下文选择)",
  "chineseSupport": 3,
  "pros": [
    "历史上成熟的 VS Code/JetBrains 开源 AI 编码助手",
    "模型 provider 配置灵活",
    "本地助手配置和工作区规则仍有参考价值",
    "官方 GitHub README 明确 final 2.0.0 release 覆盖 VS Code extension、CLI 和 JetBrains plugin",
    "可作为理解开源 AI IDE 架构和迁移到 Cursor 后生态去向的资料"
  ],
  "cons": [
    "官方首页说明 Continue 已被 Cursor 收购，仓库已不再主动维护且对用户 read-only",
    "不适合作为新项目长期依赖的主推工具",
    "代码质量依赖所选模型",
    "本地模型需大量内存",
    "历史文档和当前 Cursor 生态之间需要区分"
  ],
  "bestFor": "多 IDE 用户、自托管需求",
  "funRanking": "历史",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，Continue 官方首页显示团队已加入 Cursor，GitHub 仓库 README 明确该仓库已不再主动维护、对所有用户只读，并有 final 2.0.0 release 覆盖 VS Code extension、CLI 和 JetBrains plugin。它仍适合做历史参考或迁移评估，但不应继续作为“正在快速演进的开源主力平台”推荐。",
    "pitfalls": [
      "新项目优先评估 Cursor 或其他活跃替代",
      "区分历史 Continue 文档与当前 Cursor 生态",
      "代码质量仍取决于所选模型/provider"
    ]
  },
  "decisionSummary": {
    "verdict": "Continue 现在更适合作为历史开源 AI 编码助手参考；新项目不宜把它列为活跃主推工具。",
    "bestFor": "迁移评估、开源架构参考、仍在使用 Continue 的存量团队",
    "avoidIf": "你正在为新团队选择长期维护的 AI 编码平台",
    "mainRisk": "官方已加入 Cursor，仓库不再主动维护且对用户 read-only；final 2.0.0 release 之后的历史能力和当前维护状态容易混淆",
    "alternatives": [
      "Cursor",
      "Cline",
      "OpenCode"
    ]
  },
  "swot": {
    "S": "开源、多 IDE",
    "W": "配置复杂",
    "O": "开源生态",
    "T": "商业产品"
  },
  "tags": [
    "开源",
    "CLI",
    "多IDE",
    "历史信息",
    "Cursor",
    "Provider"
  ]
}
