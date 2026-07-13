// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://bolt.new/pricing",
    "https://github.com/stackblitz/bolt.new",
    "https://bolt.new/"
  ],
  "id": "bolt-new",
  "name": "Bolt.new",
  "category": "agent",
  "subcategory": "AI应用构建器",
  "developer": "StackBlitz",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0 / Pro $25/月 / Teams $30/成员/月 / Enterprise 定制",
      "models": "自动路由模型；Standard 全用户，Max Pro only",
      "link": "https://bolt.new/pricing"
    }
  ],
  "freeQuota": "Free：300K tokens/day，1M tokens/month，含公开/私有项目、Bolt branding 和 10MB 文件上传限制",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "通过聊天创建 apps 和 websites，支持从 Figma/GitHub 导入",
    "基于 StackBlitz WebContainers，可在浏览器里安装 npm 包、运行 Node.js servers、编辑和部署",
    "Pro 起无 daily token limit，10M tokens/month 起，并支持自定义域名、SEO、数据库和 AI 图片编辑",
    "Teams 增加集中账单、团队访问管理、私有 npm registry 和设计系统知识",
    "适合前端/全栈原型从提示词直接跑起来"
  ],
  "cons": [
    "核心计费约束是 tokens，项目文件系统越大每次消息可能越耗 token",
    "Free 有 300K/day 和 1M/month 限制，触顶后 AI 交互暂停或需要升级",
    "GitHub README 仍提示产品在快速演进，复杂后端和大型项目要谨慎",
    "浏览器环境不等于完整生产工程治理"
  ],
  "bestFor": "快速原型、全栈 Web 应用构建、MVP 验证",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Bolt 官方价格页显示 Free、Pro $25、Teams $30/成员、Enterprise 定制，并以 token 额度管理使用；Free 是 300K/day、1M/month，Pro 从 10M/month 起且取消 daily token limit。它的独特点仍是 WebContainers 里的可运行全栈环境，适合快速把网页和应用原型跑起来。",
    "pitfalls": [
      "先控制项目体量，文件越多越耗 token",
      "Free 触顶后会暂停 AI 交互",
      "生产级权限、数据和测试仍要离开“vibe coding”心态做审查"
    ]
  },
  "decisionSummary": {
    "verdict": "浏览器全栈原型很强，但预算要按 tokens、项目文件系统规模和团队席位估算，不能只看月费。",
    "bestFor": "快速原型、全栈 Web 应用构建、MVP 验证",
    "avoidIf": "你需要严格后端架构控制、复杂生产环境、或项目文件体量已经很大",
    "mainRisk": "token 消耗与项目文件系统规模强相关，Free/Pro/Teams 额度和 rollover 规则可能比预期更快影响迭代",
    "alternatives": [
      "Lovable",
      "Replit",
      "v0"
    ]
  },
  "swot": {
    "S": "零配置全栈、WebContainers、即开即用",
    "W": "token 成本和浏览器环境边界",
    "O": "快速原型和营销站/小应用市场",
    "T": "Replit、Lovable、v0"
  },
  "tags": [
    "推荐",
    "全栈",
    "零配置",
    "浏览器",
    "Token制"
  ]
}
