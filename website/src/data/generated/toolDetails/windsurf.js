// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://windsurf.com/pricing",
    "https://devin.ai/pricing/",
    "https://docs.devin.ai/desktop/accounts/usage",
    "https://docs.devin.ai/desktop/accounts/quota",
    "https://docs.devin.ai/desktop/devin-desktop-faq"
  ],
  "id": "windsurf",
  "name": "Windsurf",
  "category": "ide",
  "subcategory": "AI原生IDE",
  "developer": "Cognition",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0 / Pro $20/月 / Max $200/月 / Teams $80/月起 + $40/月每 full dev seat / Enterprise 定制",
      "models": "Devin Desktop / Windsurf 模型按 plan quota 与 extra usage 计费；可用模型以官方模型页为准",
      "link": "https://windsurf.com/pricing"
    }
  ],
  "freeQuota": "Free：轻量 agent quota、有限模型可用性；2026-03 起由 credits 转为日/周 quota",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "Windsurf 已迁移为 Devin Desktop 产品线，Free、Pro、Max、Teams 和 Enterprise 档位明确",
    "自助计划按日/周 quota 与 extra usage 管理，不再沿用旧 credits 主叙事",
    "Teams 当前是 $80/月起并按 full dev seat 加价，适合多人共享管理",
    "仍保留 agentic coding 与 IDE 工作流，并向 Devin Cloud/Agent Command Center 延展"
  ],
  "cons": [
    "品牌从 Codeium/Windsurf 到 Cognition/Devin Desktop 的迁移容易造成资料混乱",
    "Teams 不再适合写成简单 $40/席/月，采购前必须核对当前 seat 结构",
    "高阶模型和 extra usage 成本需要按官方估算表单独核算",
    "中文资料和社区仍弱于主流 VS Code 生态"
  ],
  "bestFor": "复杂逻辑重构、多文件协作、预算敏感",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Windsurf/Devin Desktop 官方 pricing 展示 Free $0、Pro $20/月、Max $200/月、Teams $80/月起 + $40/月每 full dev seat、Enterprise 定制。旧的 $15/月、Teams $40/席/月和 credits 主叙事都要避免。",
    "pitfalls": [
      "不要沿用旧 Codeium/Windsurf 价格",
      "Teams 采购要按 base fee + full dev seat 计算",
      "长任务和高阶模型要先估算 extra usage 成本",
      "复杂重构仍要限制改动范围并跑测试"
    ]
  },
  "decisionSummary": {
    "verdict": "仍值得观察，但应按 Devin Desktop 新品牌、quota/extra usage 和 Teams 新 seat 结构重新评估。",
    "bestFor": "复杂逻辑重构、多文件协作、希望接入 Devin 生态的团队",
    "avoidIf": "你需要稳定中文资料、低学习成本，或不想处理品牌迁移和配额规则变化",
    "mainRisk": "Windsurf/Devin 迁移期文档、Teams seat 结构、quota 与 extra usage 口径变化大，容易误算成本",
    "alternatives": [
      "Cursor",
      "Trae",
      "Kiro"
    ]
  },
  "swot": {
    "S": "Cascade/Devin 生态协同",
    "W": "品牌和计费迁移期复杂",
    "O": "从 IDE 延展到更强自治开发",
    "T": "Cursor、Trae、GitHub Copilot 争夺主力 IDE 位"
  },
  "tags": [
    "推荐",
    "DevinDesktop",
    "Cascade",
    "迁移期",
    "配额制"
  ],
  "video": {
    "src": "./videos/windsurf.mp4"
  }
}
