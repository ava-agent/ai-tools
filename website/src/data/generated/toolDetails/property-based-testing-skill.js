// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://trailofbits.com/skills/property-based-testing/",
    "邻近本地 skill: superpowers:test-driven-development",
    "邻近本地 skill: superpowers:systematic-debugging"
  ],
  "id": "property-based-testing-skill",
  "name": "property-based-testing",
  "category": "skill",
  "subcategory": "测试",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "提供覆盖 Hypothesis、fast-check、proptest 和 Echidna 的属性测试指导",
      "link": "https://trailofbits.com/skills/property-based-testing/"
    }
  ],
  "freeQuota": "暂无独立免费额度证据；实际成本取决于所选测试库和运行环境",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明该 Skill 会按语言推荐 Hypothesis、fast-check、proptest 或 Echidna",
    "强调 roundtrip property、invariants、edge cases 和生成式测试设计",
    "test-driven-development 提供 RED/GREEN/REFACTOR 纪律，可承接属性测试用例设计",
    "systematic-debugging 强调先复现和找根因，适合分析 fuzz 失败样本",
    "适合在解析、序列化、状态机等高风险逻辑中考虑性质约束"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "属性定义和 shrink 结果解释需要经验",
    "测试运行成本和随机性需要种子管理"
  ],
  "bestFor": "把属性测试作为方法论纳入 TDD/调试流程，而不是依赖不存在的同名 Skill",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，property-based-testing 有 Trail of Bits 公开上游，覆盖 Hypothesis、fast-check、proptest、Echidna 和 roundtrip property 等模式；实际落地仍要按语言生态选择库并固定失败样本。",
    "pitfalls": [
      "先选择语言对应测试库",
      "固定随机种子",
      "把失败样本转成回归测试"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为属性测试方法和语言库选择的工作流入口。",
    "bestFor": "解析器、序列化、状态机、权限规则等适合定义不变量的代码",
    "avoidIf": "团队没有选定属性测试库，或当前只需要小范围示例回归测试",
    "mainRisk": "属性不变量写错会制造噪音，随机失败需要固定种子、保存失败样本并系统化复现。",
    "alternatives": [
      "test-driven-development",
      "systematic-debugging",
      "language-specific property testing libraries"
    ]
  },
  "swot": {
    "S": "适合不变量测试场景",
    "W": "需单独安装且属性设计门槛高",
    "O": "可并入 TDD 和 systematic-debugging",
    "T": "语言生态原生测试库竞争"
  },
  "tags": [
    "Skills",
    "测试",
    "属性测试",
    "已核验",
    "public-upstream"
  ]
}
