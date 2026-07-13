// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.make.com/en/pricing",
    "https://www.make.com/en/integrations",
    "https://help.make.com/credits",
    "https://www.make.com/en/mcp",
    "https://www.make.com/en/ai-agents"
  ],
  "id": "make",
  "name": "Make (Integromat)",
  "category": "agent",
  "subcategory": "工作流自动化",
  "developer": "Make",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0，1,000 credits/month；统一 Make Plan 从 $9/月起（默认 5,000 credits）；Company 定制",
      "models": "可视化工作流构建器、3000+ apps、350+ AI apps",
      "link": "https://www.make.com/en/pricing"
    },
    {
      "type": "Make + AI",
      "pricing": "AI Provider 可在所有计划使用；部分 AI/advanced apps 动态消耗 credits",
      "models": "Make AI Agents、Make MCP Server、AI Toolkit、AI Web Search、AI Content Extractor",
      "link": "https://help.make.com/credits"
    }
  ],
  "freeQuota": "Free：1,000 credits/month；credits 是计费单位，过量后需升级、购买额外 credits 或启用自动购买",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Free 计划含 1,000 credits/month、无代码可视化工作流构建器和 3000+ apps",
    "统一 Make Plan 从 $9/月起，价格页默认按 5,000 credits 展示；Company 走定制采购",
    "Make + AI 覆盖 350+ AI apps、Make MCP Server、AI Content Extractor、AI Web Search、Make AI Agents 和 Make AI Toolkit",
    "credits 是计费单位，常见模块动作通常 1 credit，便于从场景执行量估算成本",
    "可视化 scenario、routers、filters、error handlers 和 scheduled scenarios 适合复杂业务流程建模"
  ],
  "cons": [
    "使用 Make AI Provider 的部分高级功能可能消耗更多，AI usage 也可能取决于 token/model",
    "credits replaced operations，不能再用旧的操作数口径做成本对比",
    "Make MCP Server 和 scenario runs 会消耗 credits，AI Agent 聊天和工具调用也要估算 credits",
    "免费层适合试用但 active scenarios、调度间隔、执行时长和数据传输都有差异",
    "国内访问、英文文档和权限治理需要团队实测"
  ],
  "bestFor": "可视化编排、复杂分支、跨 SaaS 流程、AI agent/MCP 与自动化结合",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Make 已把旧 Core/Pro/Teams 梯度收敛为统一 Make Plan，从默认 5,000 credits 的 $9/月起，Company 定制。它仍按 credits 计费，不能和 Zapier tasks 一比一比较。",
    "pitfalls": [
      "按 scenario 逐步估算 credits",
      "AI Provider 费用单独看 tokens/model",
      "不要用旧 operations 文案"
    ]
  },
  "decisionSummary": {
    "verdict": "Make 适合复杂可视化编排和 AI 自动化场景；真实成本必须按 credits、AI token/model 和 scenario 运行频率估算。",
    "bestFor": "复杂流程、分支/错误处理、AI Agents、Make MCP Server 和跨 SaaS 自动化",
    "avoidIf": "你需要极低学习成本、中文本地化支持，或无法持续监控 credits 与 AI 用量",
    "mainRisk": "credits 是计费单位；AI features 可能随 token/model/usage 动态消耗 credits，Make MCP Server 和 scenario runs 也会消耗 credits，不能沿用旧 operations 口径。",
    "alternatives": [
      "Zapier",
      "n8n",
      "Pipedream"
    ]
  },
  "swot": {
    "S": "可视化 scenario 编排和 AI/MCP 能力",
    "W": "credits 与 AI 计费需要细算",
    "O": "业务流程和 Agent 自动化增长",
    "T": "Zapier、n8n、Pipedream 竞争"
  },
  "tags": [
    "Agent",
    "部分免费",
    "自动化",
    "可视化",
    "工作流",
    "已核验"
  ]
}
