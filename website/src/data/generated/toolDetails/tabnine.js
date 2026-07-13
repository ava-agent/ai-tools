// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.tabnine.com/pricing/",
    "https://www.tabnine.com/"
  ],
  "id": "tabnine",
  "name": "Tabnine",
  "category": "ide",
  "subcategory": "IDE插件",
  "developer": "Tabnine",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Code Assistant $39/用户/月（Annual subscription）/ Agentic Platform $59/用户/月；实际购买以 quote/合同为准",
      "models": "Anthropic、OpenAI、Google、Meta、Mistral 等 LLM + Tabnine enterprise context / private deployment",
      "link": "https://www.tabnine.com/pricing/"
    }
  ],
  "freeQuota": "公开 pricing 当前以团队/企业年付方案为主；试用、个人入口或免费能力需以官网注册/销售确认",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "Code Assistant 平台提供代码补全、IDE chat 和代码库上下文",
    "Agentic Platform 增加 agentic workflows、Tabnine Context Engine 和 CLI 能力",
    "支持 SaaS、VPC、on-premises、air-gapped 等部署形态",
    "强调不保留代码、不使用用户代码训练模型，也不与第三方共享代码",
    "Agentic Platform 可通过 MCP 使用 Git、测试框架、linters、Jira、Confluence、Docker、CI/CD 等工具",
    "面向 GDPR、SOC 2、ISO 27001 等合规要求的企业团队"
  ],
  "cons": [
    "公开价格已明显转向企业/团队 annual subscription，个人低价档需重新确认",
    "Tabnine-provided LLM access 可能按 provider price + 5% handling fee 另计",
    "需要组织级上下文和治理时才更容易体现价值",
    "和 Copilot/Cursor 相比，个人开发者上手成本更高"
  ],
  "bestFor": "企业隐私优先、合规要求严格的团队",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-08，Tabnine 官方 pricing 将 Code Assistant 标为 $39/用户/月（Annual subscription），Agentic Platform 标为 $59/用户/月，并强调私有部署、Context Engine、CLI、MCP 工具调用和合规能力；Tabnine-provided LLM access 另按实际 provider price + 5% handling fee 计。它更像企业 AI coding platform，而不是个人低价补全插件。",
    "pitfalls": [
      "先确认合同价格、LLM access 计费和部署形态",
      "不要继续用旧的 Dev 低价档或免费版口径做采购预算"
    ]
  },
  "decisionSummary": {
    "verdict": "适合把隐私、合规、私有部署和组织上下文放在第一位的企业；个人低价补全不是当前公开 pricing 的主轴。",
    "bestFor": "企业隐私优先、合规要求严格的团队",
    "avoidIf": "个人开发者只想要低价、即时开通、强创意代码生成",
    "mainRisk": "公开价格、annual subscription、quote/合同和 Tabnine-provided LLM access 附加计费需要分开核实，不能沿用旧 Dev/Enterprise 档位",
    "alternatives": [
      "GitHub Copilot",
      "Cursor",
      "JetBrains AI Assistant"
    ]
  },
  "swot": {
    "S": "隐私、合规、私有部署、Context Engine",
    "W": "个人入门成本不清晰",
    "O": "企业 agentic 平台",
    "T": "Copilot/Cursor 生态压力"
  },
  "tags": [
    "企业",
    "隐私",
    "合规",
    "IDE",
    "私有部署"
  ]
}
