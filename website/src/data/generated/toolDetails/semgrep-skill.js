// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://github.com/semgrep/skills",
    "https://github.com/semgrep/skills/blob/main/skills/semgrep/SKILL.md",
    "https://semgrep.dev/pricing/",
    "https://docs.semgrep.dev/for-developers/cli",
    "https://docs.semgrep.dev/semgrep-pro-vs-oss",
    "https://docs.semgrep.dev/semgrep-code/semgrep-pro-engine-intro",
    "https://docs.semgrep.dev/licensing"
  ],
  "id": "semgrep-skill",
  "name": "semgrep",
  "category": "skill",
  "subcategory": "安全审计",
  "developer": "Semgrep / Semgrep Skills",
  "logo": null,
  "versions": [
    {
      "type": "Public Skill",
      "pricing": "semgrep/skills 公开仓库提供 semgrep Skill；需要通过 semgrep/skills 或技能管理器单独安装，无独立额度承诺",
      "models": "运行 Semgrep static analysis scans、创建 custom detection rules；有 MCP tools 时优先用 MCP，否则回退 CLI",
      "link": "https://github.com/semgrep/skills/blob/main/skills/semgrep/SKILL.md"
    },
    {
      "type": "Semgrep CLI / AppSec Platform",
      "pricing": "semgrep scan 可无登录运行 Community Edition 轻量 SAST；Semgrep Code、Secrets、Supply Chain 和 AppSec Platform 为单独授权/付费路径",
      "models": "Semgrep Community Edition, Semgrep Code, Pro Rules, Pro Engine, cross-file analysis",
      "link": "https://docs.semgrep.dev/for-developers/cli"
    }
  ],
  "freeQuota": "Semgrep Skill 本身无独立额度；Semgrep CLI CE 和 Platform/Code/Secrets/Supply Chain 需按当前 licensing 与 pricing 分开核算",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "semgrep/skills 公开仓库已列出 semgrep Skill，可运行 Semgrep static analysis scans 和 custom detection rules",
    "需要 Semgrep CLI 或 Semgrep MCP tools，适合把规则扫描纳入 Agent 工作流",
    "Semgrep Community Edition 可通过 semgrep scan 执行轻量 SAST，且不需要登录",
    "Semgrep Code / Pro Engine 支持跨函数和可选 cross-file analysis，但需按授权状态确认",
    "Semgrep CE engine 为 LGPL 2.1，AppSec Platform / Code / Secrets / Supply Chain 为 proprietary 路径"
  ],
  "cons": [
    "该 Skill 需要单独安装，不能当作当前 Codex 环境内置能力",
    "Semgrep Community Edition 与 Semgrep Code / Pro Engine 能力边界不同",
    "跨文件分析可能更慢、占用更多内存，超大项目会回退或超时",
    "规则集、配置和授权状态会显著影响发现率",
    "安全发现需要人工复核，不能直接替代人工审计"
  ],
  "bestFor": "已安装 Semgrep Skill、Semgrep CLI 或 MCP tools 的代码安全扫描、规则化漏洞检查、PR 辅助审计",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 4,
    "insights": "Semgrep 的公开 semgrep/skills 仓库已经能核验 semgrep Skill 上游存在；实际扫描能力仍取决于是否安装该 Skill、Semgrep CLI/MCP tools、规则集和授权档位。采购或推荐时应把 Skill wrapper、Semgrep Community Edition、Semgrep Code 和 AppSec Platform 分开评估。",
    "pitfalls": [
      "先确认是否已安装 semgrep/skills 或 Semgrep CLI",
      "区分 Community Edition 与 Pro/Code 能力",
      "将结果作为安全线索而非最终结论"
    ]
  },
  "decisionSummary": {
    "verdict": "semgrep Skill 的公开上游和 Semgrep 产品边界已核验；适合作为需要单独安装的 Semgrep 工作流入口。",
    "bestFor": "已有 Semgrep 规则、CLI/MCP tools 或平台授权的团队，用于辅助 PR 安全检查和修复建议整理",
    "avoidIf": "你希望无需安装、无需规则配置、无需授权即可获得完整安全审计",
    "mainRisk": "需要单独安装 Skill/CLI 或配置 MCP tools；Semgrep Community Edition 与 Semgrep Code / Pro Engine 能力、价格和 cross-file analysis 范围不同，发现仍需人工复核。",
    "alternatives": [
      "Semgrep CLI",
      "GitHub Advanced Security",
      "Snyk Code"
    ]
  },
  "swot": {
    "S": "公开 Skill 上游和成熟静态分析工具链",
    "W": "依赖外部 CLI、规则和授权",
    "O": "可作为 PR 安全检查候选入口",
    "T": "GitHub Advanced Security / Snyk / SonarQube 竞争"
  },
  "tags": [
    "Skills",
    "安全",
    "Semgrep",
    "静态分析",
    "已核验"
  ]
}
