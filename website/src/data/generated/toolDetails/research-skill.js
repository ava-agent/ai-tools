// Generated from src/data/tools.js.
export default {
  "verificationStatus": "needs-review",
  "lastVerified": "2026-07-13",
  "sources": [
    "本地 skill: product-design:research",
    "本地 skill: anycap-deepresearch"
  ],
  "id": "research-skill",
  "name": "research",
  "category": "skill",
  "subcategory": "研究分析",
  "developer": "Multiple unrelated skill sources",
  "logo": null,
  "versions": [
    {
      "type": "Product Design research",
      "pricing": "随 Product Design 插件环境可用；需要公共或内部来源访问",
      "models": "快速、基于来源的 UX 研究，聚焦当前产品痛点和体验摩擦",
      "link": "https://openai.com/codex/"
    },
    {
      "type": "AnyCap Deep Research",
      "pricing": "需要 anycap CLI 已认证；外部搜索/发布能力按 AnyCap 环境而定",
      "models": "多来源研究，覆盖网页搜索、抓取、引用、综合分析和交付工作流",
      "link": "https://anycap.ai"
    }
  ],
  "freeQuota": "无独立免费额度证据；取决于 Product Design / AnyCap / 搜索和模型调用环境",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "精确 research Skill 存在：快速、基于来源的 UX 研究，聚焦用户痛点和体验摩擦",
    "要求引用来源，并区分观察证据与推断",
    "适合产品体验、入门流程、文档/帮助、开发者体验和支持痛点研究",
    "AnyCap Deep Research 提供多来源研究、网页搜索/抓取、引用、综合分析和交付工作流",
    "适合把 UX 快速扫描和更深的市场/技术研究区分开"
  ],
  "cons": [
    "Product Design research 范围偏产品/UX，不等同于任意技术深研",
    "AnyCap Deep Research 需要 anycap CLI 已认证",
    "公开来源信号可能弱，必须说明来源访问缺失或证据较弱"
  ],
  "bestFor": "产品 UX 研究、用户痛点聚类、竞品/市场/技术深度研究的证据化报告",
  "funRanking": "待复核",
  "personalExperience": {
    "rating": 4.5,
    "insights": "research 现在应拆成两层：Product Design 的 research 负责当前用户痛点和体验摩擦；AnyCap Deep Research 负责更广的多源研究报告。共同边界是必须引用来源、区分证据和推断。",
    "pitfalls": [
      "先确认研究范围和时间窗口",
      "来源弱时要明说",
      "不要把轶事当频率结论"
    ]
  },
  "decisionSummary": {
    "verdict": "当前核验环境存在精确 Product Design research Skill，并有 AnyCap Deep Research 作为深研邻近能力，可保留为已核验条目。",
    "bestFor": "产品 UX pain 扫描、开发者体验/文档摩擦研究、竞品或技术主题的多源报告",
    "avoidIf": "你无法提供产品/研究范围，或需要不带来源的快速主观判断",
    "mainRisk": "研究结论依赖来源质量；必须区分观察证据和推断，公开来源弱时要降置信度。",
    "alternatives": [
      "anycap-deepresearch",
      "Product Design audit",
      "notion-research-documentation"
    ]
  },
  "swot": {
    "S": "精确 UX research 来源和 AnyCap 深研来源都存在",
    "W": "依赖来源质量和工具授权",
    "O": "可支撑产品决策和竞品研究流程",
    "T": "Perplexity、Glean、Notion AI 等研究工具竞争"
  },
  "tags": [
    "Skills",
    "研究",
    "UX",
    "引用",
    "待拆分",
    "needs-review"
  ]
}
