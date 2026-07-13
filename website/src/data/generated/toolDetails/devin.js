// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://devin.ai/pricing/",
    "https://cognition.com/blog/new-self-serve-plans-for-devin",
    "https://docs.devin.ai/get-started/devin-intro",
    "https://docs.devin.ai/integrations/overview",
    "https://devin.ai/"
  ],
  "id": "devin",
  "name": "Devin",
  "category": "agent",
  "subcategory": "自主Agent",
  "developer": "Cognition Labs",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0 / Pro $20/月 / Max $200/月 / Teams $80/月 plan + $40/月每 full dev seat / Enterprise 定制",
      "models": "Devin Desktop、Devin Cloud、SWE 1.6、OpenAI/Claude/Gemini frontier models 与开源模型（以官方计划可用为准）",
      "link": "https://devin.ai/pricing/"
    }
  ],
  "freeQuota": "Free：light quota to code with agents、limited model availability、unlimited inline edits 与 Tab completions；付费超额可按 API pricing 购买 extra usage",
  "contextWindow": "取决于模型",
  "chineseSupport": 2,
  "pros": [
    "官方 pricing 已把 Devin Desktop/Cloud 与 Windsurf 迁移后的计划放在同一 Devin 口径下",
    "Free 提供轻量 agent quota、有限模型、无限 inline edits 与 Tab completions",
    "Pro $20 可访问 OpenAI、Claude、Gemini frontier models、SWE 1.6、Devin Cloud 和 extra usage",
    "Teams 是 $80/月 plan + $40/月每 full dev seat，并支持 unlimited team members 与集中管理",
    "DeepWiki/Ask Devin/Devin Review/Integrations 扩展了代码库理解和 PR 审查场景"
  ],
  "cons": [
    "旧 Core、Team $500 或旧 Windsurf 价格结论不再准确",
    "Free 只是轻量 quota，持续 agent 使用需要 Pro/Max/Teams 或 Enterprise",
    "超出 included quota 后可按 API pricing 购买 extra usage，成本仍需预算控制",
    "模型选择、任务大小和 reasoning 会影响单条消息成本",
    "复杂任务仍要人审查输出和 PR"
  ],
  "bestFor": "自主化开发任务、端到端功能实现、Bug 修复自动化",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-07，Devin pricing 明确展示 Free、Pro $20、Max $200、Teams $80/月 plan + $40/月每 full dev seat、Enterprise，并说明 Windsurf 已迁入 Devin Desktop。它仍适合团队 backlog、迁移、PR Review 和多工具集成，而不是个人随手补全。",
    "pitfalls": [
      "不要再按旧 $500 Team 入门价判断",
      "先用小任务测算 quota 和额外用量",
      "复杂任务必须让人审查 PR、测试和安全影响"
    ]
  },
  "decisionSummary": {
    "verdict": "Devin 更适合团队级 backlog、迁移和 PR 审查自动化；价格门槛降低了，但持续使用仍要按 quota 和额外用量管理。",
    "bestFor": "自主化开发任务、端到端功能实现、Bug 修复自动化、工程团队 backlog",
    "avoidIf": "你只是个人日常写代码、预算很低，或团队没有成熟代码审查和测试流程",
    "mainRisk": "included quota、extra usage、full dev seat 和模型/任务复杂度会影响真实成本，复杂任务输出不能免审",
    "alternatives": [
      "Claude Code",
      "Codex",
      "Replit"
    ]
  },
  "swot": {
    "S": "端到端工程任务、Devin Desktop/Cloud 和集成强",
    "W": "成本、seat 结构和审查压力仍高",
    "O": "企业自动化、迁移、PR Review",
    "T": "竞争压力来自 Claude Code、Cursor 和 Replit Agent"
  },
  "tags": [
    "自主Agent",
    "企业级",
    "端到端",
    "Backlog",
    "PRReview"
  ]
}
