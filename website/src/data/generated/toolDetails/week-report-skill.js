// Generated from src/data/tools.js.
export default {
  "verificationStatus": "historical",
  "lastVerified": "2026-07-13",
  "sources": [
    "公开来源不足：未发现同名 week-report-generator skill（检查于 2026-07-13）"
  ],
  "id": "week-report-skill",
  "name": "week-report-generator",
  "category": "skill",
  "subcategory": "内容生成",
  "developer": "历史概念 / 公开来源不足",
  "logo": null,
  "versions": [
    {
      "type": "历史概念",
      "pricing": "未找到可公开核验的同名 Skill；需要真实内部数据源和模板后才能恢复推荐",
      "models": "需要具体内部数据源、报告 schema 和访问路径",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "暂无独立免费额度证据；内部数据源、告警平台和模型调用成本需单独确认",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "公开来源不足，适合保留为内部报告自动化想法",
    "需要具体内部数据源，缺少数据源时不能承诺生成质量",
    "需要报告 schema、字段映射、访问权限和输出模板",
    "适合在已有告警/工单/监控数据接入后重新评估",
    "历史概念，当前不应作为公开可用 Skill 推荐"
  ],
  "cons": [
    "未找到可公开核验的同名 week-report-generator Skill",
    "内部平台、数据权限和模板均未验证",
    "没有样例输入输出时无法判断适用场景"
  ],
  "bestFor": "内部周报自动化需求的待办线索；恢复前需补真实数据源、模板和样例",
  "funRanking": "归档",
  "personalExperience": {
    "rating": 2.5,
    "insights": "这是典型的“自研想法遗留项”：没有安装环境 Skill 或数据源证据时，应先弃用公开推荐，只保留为后续补模板和数据接入的候选。",
    "pitfalls": [
      "先补真实数据源",
      "提供样例周报模板",
      "明确访问权限和脱敏规则"
    ]
  },
  "decisionSummary": {
    "verdict": "当前不建议作为 active Skill 展示；需要补齐内部数据源、模板和运行证据后再恢复。",
    "bestFor": "内部监控/告警/工单数据已经可访问，且有固定周报模板的团队",
    "avoidIf": "没有真实数据源、字段定义、访问授权或样例输出",
    "mainRisk": "所有核心卖点都依赖未验证的内部平台和模板，公开展示会过度承诺。",
    "alternatives": [
      "notion-knowledge-capture",
      "spreadsheets reports",
      "custom report template"
    ]
  },
  "swot": {
    "S": "内部报告自动化线索待补证",
    "W": "同名来源和数据源缺失",
    "O": "可并入已有 BI/监控报告流程",
    "T": "BI/监控平台自带报告"
  },
  "tags": [
    "Skills",
    "周报",
    "自动化",
    "historical"
  ]
}
