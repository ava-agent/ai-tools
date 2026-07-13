// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://github.com/trailofbits/skills/tree/main/plugins/differential-review",
    "https://github.com/trailofbits/skills/blob/main/plugins/differential-review/skills/differential-review/SKILL.md",
    "https://code.claude.com/docs/en/code-review",
    "https://github.com/anthropics/claude-code-security-review"
  ],
  "id": "differential-review-skill",
  "name": "differential-review",
  "category": "skill",
  "subcategory": "安全审计",
  "developer": "Trail of Bits / Omar Inuwa",
  "logo": null,
  "versions": [
    {
      "type": "Public plugin skill",
      "pricing": "Trail of Bits community/plugin Skill；需要单独安装，无独立免费额度承诺",
      "models": "面向 PR、commit 或 diff 的 security-focused differential review；使用 Git history、blast radius、test coverage 和 markdown report",
      "link": "https://github.com/trailofbits/skills/tree/main/plugins/differential-review"
    },
    {
      "type": "Official adjacent reference",
      "pricing": "Claude Code Review / GitHub Action 按 Anthropic 计划和 API 使用计费",
      "models": "managed Code Review, /code-review, claude-code-security-review action",
      "link": "https://github.com/anthropics/claude-code-security-review"
    }
  ],
  "freeQuota": "该 Skill 无独立免费额度承诺；Trail of Bits plugin 安装、Codex/Claude 会话和 Anthropic Code Review 计费需分开核算",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "Trail of Bits 公开 plugins/differential-review，可通过 plugin install 路径单独安装",
    "需要 Git 仓库，围绕 PR、commit 或 diff 做 security-focused differential review",
    "Skill 描述覆盖 git history、blast radius、test coverage、risk-first triage 和 markdown report",
    "官方 Claude Code Review 参考显示发现会标注严重性，但不会批准或阻止 PR",
    "结果适合进入人工复核，辅助 reviewer 聚焦风险"
  ],
  "cons": [
    "该 Skill 需要单独安装，不能当作当前 Codex 环境内置能力",
    "差异审查可能遗漏运行时配置、依赖和历史上下文问题",
    "官方 security-review action 明示缺少提示注入防护证据，只建议用于可信 PR",
    "安全发现是建议性质，需要人工复核",
    "大型变更会增加上下文和误报成本"
  ],
  "bestFor": "有 Git diff 的 PR 风险初筛、人工 Code Review 前的安全线索整理",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "Trail of Bits 的公开插件仓库已能核验 differential-review Skill 上游存在；它更像“安全差异审查工作流”，帮助 reviewer 关注认证、权限、输入校验、依赖、Git history、blast radius 和 test coverage。它不能替代人工判断，也不能自动阻断 PR。",
    "pitfalls": [
      "先确认是否已安装 Trail of Bits differential-review plugin",
      "不要用于不可信 PR 的自动安全结论",
      "复杂安全问题仍需人工判断和复现"
    ]
  },
  "decisionSummary": {
    "verdict": "Trail of Bits differential-review Skill 已有公开上游证据，可作为需要单独安装的安全差异审查工作流入口。",
    "bestFor": "可信代码库中的 PR diff 初筛、人工审查前的风险问题清单",
    "avoidIf": "需要合规级安全审计、全仓扫描、自动阻断或处理不可信 PR",
    "mainRisk": "需要单独安装，且差异审查不等于全仓审计；官方相邻能力也说明 Code Review 不会批准或阻止 PR，security-review action 缺少提示注入防护证据，只审查 diff 可能漏掉上下文问题。",
    "alternatives": [
      "Claude Code Review",
      "claude-code-security-review action",
      "Semgrep CLI"
    ]
  },
  "swot": {
    "S": "公开 Skill 上游和差异审查方法明确",
    "W": "依赖 Git history、安装状态和上下文质量",
    "O": "可作为 DevSecOps 审查入口",
    "T": "官方 Code Review 和专业 SAST 工具竞争"
  },
  "tags": [
    "Skills",
    "安全",
    "PR审查",
    "DevSecOps",
    "已核验"
  ]
}
