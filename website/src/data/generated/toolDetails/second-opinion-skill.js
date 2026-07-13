// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://trailofbits.com/skills/second-opinion/",
    "邻近本地 skill: superpowers:requesting-code-review",
    "邻近本地 skill: superpowers:receiving-code-review"
  ],
  "id": "second-opinion-skill",
  "name": "second-opinion",
  "category": "skill",
  "subcategory": "代码质量",
  "developer": "Trail of Bits / public upstream",
  "logo": null,
  "versions": [
    {
      "type": "Public upstream",
      "pricing": "公开上游已验证；需单独安装 Trail of Bits plugin",
      "models": "Codex CLI / Gemini CLI second-opinion diff review workflow",
      "link": "https://trailofbits.com/skills/second-opinion/"
    },
    {
      "type": "Adjacent installed workflow",
      "pricing": "随当前 Superpowers 插件环境可用；无独立额度声明",
      "models": "使用 requesting-code-review 和 receiving-code-review 组织审查闭环与反馈处理",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "暂无独立免费额度证据；若外接其他模型或 CLI，按对应工具计费",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开上游已验证；需要通过 Trail of Bits plugin 单独安装",
    "Trail of Bits 页面说明可用 Codex CLI 与 Gemini CLI 对 diff 运行 second-opinion review",
    "Codex 路径使用 codex exec read-only；Gemini 路径提示 --yolo 会自动批准工具调用",
    "requesting-code-review 强调在 major feature 或 merge 前派发 reviewer subagent",
    "receiving-code-review 强调先验证反馈是否适合当前代码库，再逐项实现",
    "适合把高风险变更送入结构化复核，而不是承诺外部模型自动结论",
    "可与人工 review、测试和 diff 检查组合使用"
  ],
  "cons": [
    "需要单独安装该 Skill，当前页面按公开上游能力展示",
    "Codex CLI 或 Gemini CLI 未安装、无 API key/订阅时不能使用",
    "reviewer 建议仍需用代码证据验证，不能盲目采纳"
  ],
  "bestFor": "重大变更前的结构化复核、代码审查反馈处理、需要第二视角但可人工验证的场景",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，second-opinion 有 Trail of Bits 公开上游，定位是通过 Codex CLI / Gemini CLI 对 diff 做外部第二意见；页面按公开上游说明展示，并提醒 Gemini --yolo 风险和工具/订阅前置条件。",
    "pitfalls": [
      "先确认同名 Skill 上游",
      "不要把外部模型调用写成默认能力",
      "review 结论必须用测试或代码证据复核"
    ]
  },
  "decisionSummary": {
    "verdict": "公开上游已验证，需单独安装；适合作为需要 Codex CLI / Gemini CLI 的外部 diff review 工作流展示。",
    "bestFor": "重大变更后的 reviewer subagent 检查，以及收到 review feedback 后的技术验证流程",
    "avoidIf": "你明确需要自动调用其他模型 CLI 的实现和可审计日志",
    "mainRisk": "需单独安装该 Skill；Gemini --yolo 会自动批准工具调用，Codex/Gemini CLI、API key 或订阅状态都需现场核验。",
    "alternatives": [
      "requesting-code-review",
      "receiving-code-review",
      "GitHub PR review"
    ]
  },
  "swot": {
    "S": "复核流程可作为线索",
    "W": "需单独安装且依赖外部 CLI/订阅",
    "O": "可并入真实 code-review workflows",
    "T": "GitHub Copilot review 和 IDE 内置 review 竞争"
  },
  "tags": [
    "Skills",
    "代码审查",
    "复核",
    "已核验",
    "public-upstream"
  ]
}
