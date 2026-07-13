// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://trailofbits.com/skills/audit-context-building/",
    "邻近本地 skill: security-threat-model",
    "邻近本地 skill: security-best-practices"
  ],
  "id": "audit-context-building-skill",
  "name": "audit-context-building",
  "category": "skill",
  "subcategory": "代码质量",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "在查找漏洞或缺陷前，逐行构建深入的架构上下文",
      "link": "https://trailofbits.com/skills/audit-context-building/"
    },
    {
      "type": "Adjacent security workflow",
      "pricing": "随当前 security skills 环境可用；无独立额度声明",
      "models": "repository-grounded threat modeling plus security-best-practices major issues review",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "暂无独立免费额度证据；取决于 Codex 会话和外部安全工具",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明该 Skill 用 line-by-line / block-by-block 分析构建 deep architectural context",
    "security-threat-model 要求 repository-grounded threat modeling，并枚举 trust boundaries、assets、entry points 和 abuse paths",
    "security-best-practices 可在安全报告中聚焦 major issues",
    "适合把代码证据、架构假设和攻击面整理清楚后再审查",
    "输出应标注假设和证据，不负责直接给漏洞结论"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "不是独立审计 Skill，需要和威胁建模或安全最佳实践流程搭配",
    "大型仓库仍需要明确范围和人工确认"
  ],
  "bestFor": "安全审计前的系统模型梳理、trust boundaries 和关键资产盘点、基于仓库证据的风险分析",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，audit-context-building 有 Trail of Bits 公开上游，定位是审计前用 line-by-line 分析建立 deep architectural context；它不负责直接给漏洞结论，实际使用前需单独安装。",
    "pitfalls": [
      "先确认审计范围",
      "所有架构判断都要有仓库证据",
      "不要把上下文构建当作漏洞扫描"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为审计前上下文构建工作流展示。",
    "bestFor": "需要先厘清系统边界、资产、入口和假设，再做安全审查的仓库",
    "avoidIf": "你需要已验证的自动漏洞扫描、逐行审计或全仓数据流分析能力",
    "mainRisk": "需单独安装该 Skill；若范围和证据不明确，line-by-line context building 仍会变成泛泛架构总结。",
    "alternatives": [
      "security-threat-model",
      "security-best-practices",
      "Semgrep CLI"
    ]
  },
  "swot": {
    "S": "可帮助审计先列证据和边界",
    "W": "需单独安装且依赖审计范围质量",
    "O": "可并入 threat model / security-best-practices",
    "T": "SAST 和专业威胁建模工具竞争"
  },
  "tags": [
    "Skills",
    "代码审计",
    "安全",
    "public-upstream"
  ]
}
