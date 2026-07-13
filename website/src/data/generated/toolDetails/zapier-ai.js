// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://zapier.com/pricing",
    "https://zapier.com/apps",
    "https://docs.zapier.com/mcp/home",
    "https://help.zapier.com/hc/en-us/articles/17013994198925-Zapier-AI-actions-in-other-apps",
    "https://help.zapier.com/hc/en-us/articles/32337438839565-What-s-included-in-Zapier-s-Free-plan"
  ],
  "id": "zapier-ai",
  "name": "Zapier AI Automation",
  "category": "agent",
  "subcategory": "工作流自动化",
  "developer": "Zapier",
  "logo": null,
  "versions": [
    {
      "type": "Platform",
      "pricing": "免费版 $0/月，每月含 100 个任务；专业版 $19.99/月起；团队版 $69/月起",
      "models": "Zap 工作流、Zapier MCP Beta、SDK、Agents、Chatbots、Tables 与 Forms",
      "link": "https://zapier.com/pricing"
    },
    {
      "type": "Zapier MCP",
      "pricing": "按任务量计费；AI 步骤、代码和 SDK 共用同一个任务额度池",
      "models": "9,000+ apps, 40,000+ actions, dynamic tool discovery",
      "link": "https://docs.zapier.com/mcp/home"
    },
    {
      "type": "Legacy AI Actions",
      "pricing": "仅供现有用户参考",
      "models": "AI Actions 已停止开发和支持",
      "link": "https://help.zapier.com/hc/en-us/articles/17013994198925-Zapier-AI-actions-in-other-apps"
    }
  ],
  "freeQuota": "Free：100 tasks per month；Zap workflows、MCP server actions 等共享任务额度",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Zapier MCP 可把 AI 客户端连接到 9,000+ apps 和 40,000+ actions",
    "Free 计划包含 100 tasks per month，适合低频验证",
    "定价页显示 AI steps, code, and SDK 采用统一 task-based pricing，便于跨产品估算成本",
    "MCP、SDK、Agents、Chatbots、Tables 和 Forms 已纳入统一平台叙事",
    "Each successful action in a Zap counts as a separate task，MCP/AI 调用也要按任务池管理"
  ],
  "cons": [
    "AI Actions is no longer being developed and supported，新项目应优先评估 Zapier MCP Beta、SDK 或 Agents",
    "shared task pool 意味着 Zap workflows、AI steps、code、MCP、SDK 会共同消耗任务额度",
    "自动化一旦连接真实 SaaS 账号，AI 工具调用可能发送邮件、改 CRM、建 issue 或更新表格，需要权限和确认策略",
    "高级治理、SSO、审计、app controls 等能力集中在 Team/Enterprise 档位",
    "国内访问、SaaS 授权和数据出境要按企业环境实测"
  ],
  "bestFor": "需要 9,000+ SaaS 连接、AI-to-app 操作和统一治理的业务自动化团队",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，Zapier 条目不应再以 AI Actions 为主。官方帮助页说明 AI Actions 已停止开发和支持；当前选型应看 Zapier MCP Beta、SDK、Agents 和统一任务计费。",
    "pitfalls": [
      "先按真实动作数估算 tasks",
      "AI 调用真实 SaaS 前设置人工确认",
      "不要把 AI Actions 当新项目入口"
    ]
  },
  "decisionSummary": {
    "verdict": "Zapier 仍适合 AI-to-app 自动化，但 AI Actions 已转为存量参考，新项目应优先看 Zapier MCP、SDK 或 Agents。",
    "bestFor": "跨 SaaS 应用的自然语言操作、业务自动化、团队治理和低代码工作流",
    "avoidIf": "你需要本地优先、开源自托管、低成本高频任务，或无法治理 AI 对真实 SaaS 账号的写操作",
    "mainRisk": "task-based pricing 和 shared task pool 会让 Zap workflows、AI steps、code、MCP、SDK 共用额度；AI 工具调用真实业务系统前必须控制权限和确认。",
    "alternatives": [
      "Make",
      "n8n",
      "Pipedream"
    ]
  },
  "swot": {
    "S": "SaaS 连接面广、MCP/SDK/Agents 统一",
    "W": "任务计费和治理复杂",
    "O": "AI orchestration 平台化",
    "T": "Make、n8n、Pipedream 等自动化平台"
  },
  "tags": [
    "Agent",
    "部分免费",
    "自动化",
    "工作流",
    "ZapierMCP",
    "已核验"
  ]
}
