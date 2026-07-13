// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://cline.bot/pricing",
    "https://docs.cline.bot/getting-started/cline-provider",
    "https://docs.cline.bot/getting-started/clinepass"
  ],
  "id": "cline",
  "name": "Cline",
  "category": "cli",
  "subcategory": "VS Code插件",
  "developer": "Cline Bot Inc.",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "插件开源；Cline (usage-billing) 按 credits 付费；ClinePass $9.99/月；自带 API key / provider 另计",
      "models": "Cline (usage-billing) 100+ 模型、ClinePass open coding models、Claude、OpenAI、Gemini、本地模型等",
      "link": "https://cline.bot/pricing"
    }
  ],
  "freeQuota": "个人开源扩展免费；模型调用、Cline credits、ClinePass 或自带 provider 费用另计",
  "contextWindow": "取决于模型，部分 provider/model 支持最高 1M context",
  "chineseSupport": 3,
  "pros": [
    "VS Code 扩展与 CLI 路径成熟，JetBrains 扩展需按当前企业/产品页确认",
    "Plan/Act 双模式适合审批式 Agent 工作流",
    "支持 Cline (usage-billing)、ClinePass 与自带 API key",
    "ClinePass 是单独 provider，$9.99/月，面向精选 open coding models 提供更高限额",
    "MCP 协议生态集成",
    "人在环审批和检查点回滚适合代码库内操作",
    "本地优先架构降低部分数据外流风险"
  ],
  "cons": [
    "插件开源不等于模型调用免费",
    "Cline credits、ClinePass 和自带 provider 的计费边界需要看清",
    "超时问题特别是 Ollama",
    "偶尔生成错误代码",
    "长上下文分割问题",
    "运行时调试能力有限",
    "边缘情况工作流失败"
  ],
  "bestFor": "VS Code 用户、自主执行任务",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-13，Cline 官方价格页说明个人开源扩展免费、只按 AI inference 付费；文档将 Cline (usage-billing) 和 ClinePass 明确拆成两个 provider。它仍是强力的 VS Code/CLI Agent，但预算应按 credits、ClinePass 或自带 provider 分开管理。",
    "pitfalls": [
      "先确认使用 Cline (usage-billing)、ClinePass 还是自带 API key",
      "学习曲线",
      "超时问题特别是 Ollama",
      "模型调用成本可能被低估"
    ]
  },
  "decisionSummary": {
    "verdict": "VS Code/CLI 里的开源 Agent 插件强选，但真实成本取决于 Cline (usage-billing)、ClinePass 或自带模型 provider。",
    "bestFor": "VS Code 用户、自主执行任务、需要人在环审批的团队",
    "avoidIf": "你需要一个不接任何付费模型/provider 的长期主力方案",
    "mainRisk": "插件开源、Cline credits、ClinePass $9.99/月和自带 API key 会形成多条计费路径，容易低估成本",
    "alternatives": [
      "Continue",
      "OpenCode",
      "GitHub Copilot"
    ]
  },
  "swot": {
    "S": "VS Code 集成",
    "W": "需 API",
    "O": "插件生态",
    "T": "Copilot"
  },
  "tags": [
    "CLI",
    "VS Code",
    "插件",
    "Provider",
    "JetBrains",
    "MCP",
    "ComputerUse"
  ]
}
