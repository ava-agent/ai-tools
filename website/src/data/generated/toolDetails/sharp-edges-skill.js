// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://trailofbits.com/skills/sharp-edges/",
    "邻近本地 skill: security-best-practices"
  ],
  "id": "sharp-edges-skill",
  "name": "sharp-edges",
  "category": "skill",
  "subcategory": "安全审计",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "对容易误用的危险设计、API 设计和抗误用能力进行 Sharp Edges 分析",
      "link": "https://trailofbits.com/skills/sharp-edges/"
    },
    {
      "type": "Adjacent installed skill",
      "pricing": "随当前 Codex Skills 环境可用；无独立免费额度声明",
      "models": "security-best-practices can guide secure-by-default implementation and review reports",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "暂无该 Skill 的独立免费额度证据；取决于 Codex 会话和外部工具",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明该 Skill 识别 error-prone APIs、dangerous configurations 和 footgun designs",
    "强调 misuse resistance、API design、默认行为和错误路径是否容易被误用",
    "可结合 security-best-practices 的 secure-by-default guidance 做人工复核",
    "适合在 SDK、权限接口、危险操作和配置 API 设计阶段使用",
    "结论适合作为人工复核的问题清单，而非自动合规结论"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "API 设计判断高度依赖业务语境和威胁模型",
    "仅靠该视角无法替代安全测试、SAST 或正式审计"
  ],
  "bestFor": "API design 评审、SDK 易误用风险梳理、权限/配置接口的 secure-by-default 设计检查",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，sharp-edges 有 Trail of Bits 公开上游，定位是发现 footgun designs、危险配置和缺乏 misuse resistance 的 API design；推荐时要说明需单独安装并结合人工复核。",
    "pitfalls": [
      "先确认同名 Skill 来源",
      "结合威胁模型判断",
      "安全结论需要人工复核"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为 API design 和 misuse resistance 审查方向展示。",
    "bestFor": "评审 SDK、权限、配置和危险操作 API 是否容易被误用",
    "avoidIf": "你需要可量化覆盖率、自动扫描或合规审计结论",
    "mainRisk": "需单独安装该 Skill；API design 建议仍依赖业务语境、威胁模型和人工复核。",
    "alternatives": [
      "security-best-practices",
      "security-threat-model",
      "differential-review"
    ]
  },
  "swot": {
    "S": "能聚焦 API 易误用和默认行为",
    "W": "需单独安装且判断主观",
    "O": "可并入 API/SDK 安全设计复核",
    "T": "威胁建模和专业 API 安全测试竞争"
  },
  "tags": [
    "Skills",
    "安全",
    "API",
    "设计审计",
    "已核验",
    "public-upstream"
  ]
}
