// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://trailofbits.com/skills/insecure-defaults/",
    "邻近本地 skill: security-best-practices"
  ],
  "id": "insecure-defaults-skill",
  "name": "insecure-defaults",
  "category": "skill",
  "subcategory": "安全审计",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "Detects fail-open defaults, hardcoded secrets, weak auth, permissive security",
      "link": "https://trailofbits.com/skills/insecure-defaults/"
    },
    {
      "type": "Adjacent installed skill",
      "pricing": "随当前 Codex Skills 环境可用；无独立免费额度声明",
      "models": "security-best-practices 为受支持的技术栈提供默认安全指导和重大问题审查",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "暂无该 Skill 的独立免费额度证据；取决于 Codex 会话和外部工具",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明该 Skill 检测 fail-open defaults、hardcoded secrets、weak auth 和 permissive security",
    "security-best-practices 强调写 secure-by-default code，并可在报告模式下梳理 major issues",
    "适合把认证、授权、环境配置、公开资源 ID 和开发/生产差异纳入人工清单",
    "发现结果应进入人工复核，而不是直接作为漏洞结论",
    "可与具体语言/框架安全参考一起使用，减少泛泛而谈"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "强相关 Skill 只覆盖部分语言和框架，超出范围需要额外来源",
    "业务例外和部署环境差异需要人工判断"
  ],
  "bestFor": "上线前安全默认值复核、配置风险清单、secure-by-default 编码检查的辅助视角",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，insecure-defaults 有 Trail of Bits 公开上游，适合定位 fail-open defaults、hardcoded secrets、weak auth 等生产可达配置风险；实际使用前需安装 Trail of Bits plugin 并人工复核。",
    "pitfalls": [
      "先补充同名 Skill 的上游仓库",
      "按实际技术栈加载安全参考",
      "所有发现都要人工复核"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为 fail-open 默认值和弱配置审查方向展示。",
    "bestFor": "把 secure-by-default、环境配置和高影响安全问题纳入上线前人工复核",
    "avoidIf": "你需要可审计覆盖率、规则集和误报率明确的安全扫描产品",
    "mainRisk": "需单独安装该 Skill；即便使用公开上游，发现也必须验证生产可达性并由人工复核。",
    "alternatives": [
      "security-best-practices",
      "Semgrep CLI",
      "GitHub Advanced Security"
    ]
  },
  "swot": {
    "S": "聚焦安全默认值和高影响问题",
    "W": "需单独安装且需人工复核",
    "O": "可并入上线前安全复核清单",
    "T": "SAST、配置扫描和云安全平台竞争"
  },
  "tags": [
    "Skills",
    "安全",
    "配置",
    "secure-defaults",
    "已核验",
    "public-upstream"
  ]
}
