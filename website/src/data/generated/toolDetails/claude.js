// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://platform.claude.com/docs/en/about-claude/models/overview",
    "https://claude.com/pricing",
    "https://support.anthropic.com/en/articles/11049762-choosing-a-claude-ai-plan"
  ],
  "id": "claude",
  "name": "Claude",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "Anthropic",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Claude Free / Pro $20月付或$17/月年付 / Max $100/月起 / Team 标准席 $25月付或$20/月年付、Premium 席 $125月付或$100/月年付 / Enterprise；API 按模型计费",
      "models": "Claude Fable 5, Claude Opus 4.8, Claude Sonnet 5, Claude Haiku 4.5 等",
      "link": "https://claude.com/pricing"
    }
  ],
  "freeQuota": "Claude.ai Free 有限使用；API 无固定永久免费额度，按官方价格页计费",
  "contextWindow": "Claude Fable 5 / Opus 4.8 / Sonnet 5 为 1M；Claude Haiku 4.5 为 200K",
  "chineseSupport": 4,
  "decisionSummary": {
    "verdict": "强代码、强推理、长上下文的一线通用模型，适合复杂工程和严肃写作，但成本和额度要按计划管理。",
    "bestFor": "代码审查、方案设计、长上下文任务、多模态任务、复杂推理",
    "avoidIf": "你需要极低 API 成本、国内无障碍访问，或只做轻量日常问答",
    "mainRisk": "Claude.ai 计划、API 价格和具体可用模型变化快，不能按旧 Sonnet/Opus 版本号做长期判断",
    "alternatives": [
      "GPT-5.6 / OpenAI",
      "Gemini",
      "DeepSeek"
    ]
  },
  "pros": [
    "Claude Fable 5 是 Anthropic 当前高能力模型之一，适合长任务 Agent 和复杂执行",
    "Opus 4.8 面向复杂 agentic coding 和企业工作，Sonnet 5 平衡速度与能力，Haiku 4.5 控制延迟与成本",
    "Claude.com 已把 Free/Pro/Max/Team/Enterprise 和 API 分开展示，个人与团队入口更清晰",
    "Fable/Opus/Sonnet 当前文档展示 1M context，适合长文档和工程上下文任务",
    "Artifacts、文件、代码执行、Research、Skills 与连接器增强了知识工作流"
  ],
  "cons": [
    "API 价格通常高于国产低价模型",
    "Free/Pro/Max/Team 的使用额度、seat 类型和模型能力需要按官方价格页核验",
    "国内访问受限",
    "模型名称和可用性变化快，旧固定 Claude 结论需要持续更新"
  ],
  "bestFor": "代码审查、方案设计、长上下文任务、多模态任务、复杂推理",
  "funRanking": "夯夯夯",
  "personalExperience": {
    "rating": 5,
    "insights": "截至 2026-07-13，Anthropic 模型页显示 Claude Fable 5、Opus 4.8、Sonnet 5、Haiku 4.5，并把 API 价格、context 和模型 ID 分开说明；Claude.com pricing 也将 Free/Pro/Max、Team 标准席/Premium 席和 Enterprise 分层。Claude 仍是复杂代码、长上下文方案和严肃写作的强选，但要按 seat、usage 和 API 价格管理成本。",
    "pitfalls": [
      "按官方模型页确认当前可用型号",
      "输出成本高，长任务先估算 token",
      "国内访问需代理或企业路径"
    ]
  },
  "swot": {
    "S": "代码能力、推理稳定、长上下文",
    "W": "成本和额度管理压力",
    "O": "企业知识工作和工程 Agent",
    "T": "GPT-5.6、Gemini、国产低价模型"
  },
  "tags": [
    "推荐",
    "LLM",
    "代码",
    "长上下文",
    "多模态",
    "已核验"
  ]
}
