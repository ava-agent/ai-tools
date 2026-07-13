// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "本地 skill: skill-creator"
  ],
  "id": "skill-creator-skill",
  "name": "skill-creator",
  "category": "skill",
  "subcategory": "Skills开发",
  "developer": "OpenAI system skill",
  "logo": null,
  "versions": [
    {
      "type": "Installed system skill",
      "pricing": "随当前 Codex Skills 环境可用；无独立免费额度声明",
      "models": "创建或更新 SKILL.md 目录，可选包含脚本、参考资料、资源文件和 agents/openai.yaml",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "无独立免费额度证据；主要消耗来自 Codex 会话和模型调用",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "skill-creator 是当前核验环境已安装的 system Skill，用于创建或更新 Codex Skills",
    "明确要求每个 Skill 具备 SKILL.md，并可按需包含 scripts、references、assets",
    "提供 scripts/init_skill.py 初始化模板，减少手工结构错误",
    "提供 scripts/quick_validate.py 校验 YAML frontmatter、必填字段和命名规则",
    "支持生成 agents/openai.yaml，并强调 progressive disclosure 减少上下文浪费"
  ],
  "cons": [
    "高质量 Skill 仍需要清楚的触发场景和领域样例",
    "复杂 Skill 需要 forward-testing 或 subagent 验证",
    "不应把 README、安装指南等无关文件塞进 Skill 目录"
  ],
  "bestFor": "创建新的 Codex Skill、维护已有 Skill、为可重复工作流沉淀脚本和参考资料",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "这个条目有明确安装环境来源：skill-creator 指导从示例理解、资源规划、init_skill.py 初始化、SKILL.md 编辑到 quick_validate.py 校验的完整流程。它的重点不是泛泛的提示词技巧，而是把可重复流程沉淀成结构化 Skill。",
    "pitfalls": [
      "先明确真实使用样例",
      "资源只放必要内容",
      "修改后运行 quick_validate.py"
    ]
  },
  "decisionSummary": {
    "verdict": "当前核验环境已安装并读取 skill-creator，可作为 Codex Skill 创建/维护工作流保留为已核验条目。",
    "bestFor": "需要把稳定流程、领域知识、脚本或模板沉淀成 Codex Skill 的用户",
    "avoidIf": "只是一次性普通提示词，不需要可复用的文件夹、脚本或参考资料",
    "mainRisk": "Skill 质量取决于触发描述、资源边界和验证流程；过度堆文档会浪费上下文并降低可用性。",
    "alternatives": [
      "plugin-creator",
      "skill-installer",
      "template-creator"
    ]
  },
  "swot": {
    "S": "system Skill 来源明确",
    "W": "产物质量依赖需求澄清",
    "O": "可沉淀个人工作流",
    "T": "一次性提示词和插件形态竞争"
  },
  "tags": [
    "Skills",
    "元技能",
    "开发",
    "创建",
    "本地核验"
  ]
}
