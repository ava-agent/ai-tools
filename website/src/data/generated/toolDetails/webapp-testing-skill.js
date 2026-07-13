// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "本地 skill: build-web-apps:frontend-testing-debugging"
  ],
  "id": "webapp-testing-skill",
  "name": "frontend-testing-debugging",
  "category": "skill",
  "subcategory": "测试",
  "developer": "OpenAI curated build-web-apps plugin",
  "logo": null,
  "versions": [
    {
      "type": "Installed skill",
      "pricing": "随当前 Codex 插件环境可用；无独立免费额度声明",
      "models": "优先使用 Browser 插件；仅在 Browser 不可用或受阻时降级到 Playwright",
      "link": "https://openai.com/codex/"
    }
  ],
  "freeQuota": "无独立免费额度证据；按 Codex/插件环境和模型使用计费",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "frontend-testing-debugging 明确服务于渲染后的前端验证、UI 回归和交互调试",
    "Browser plugin 路径优先，包含页面身份、非空、无框架 overlay 检查",
    "要求 DOM 快照、控制台健康检查、截图证据和交互证明",
    "Browser 不可用时可记录原因并使用 Playwright 降级验证",
    "适合在本地 dev server 上验证桌面和移动视口"
  ],
  "cons": [
    "更偏 QA 验证流程，不是通用测试框架生成器",
    "需要能启动目标前端应用并访问渲染页面",
    "浏览器插件或 Playwright 环境异常时需要记录 fallback 原因"
  ],
  "bestFor": "前端页面烟测、渲染错误排查、交互回归验证、响应式布局和控制台健康检查",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "这个条目应从“自动生成测试用例”调整为“真实浏览器验证工作流”。它的价值在于把页面身份、空白页、错误 overlay、控制台健康检查、截图证据和交互证明串成一套可复核的 QA 闭环。",
    "pitfalls": [
      "先定义目标 flow",
      "不要只用 build 结果替代浏览器验证",
      "截图和交互状态要能支撑结论"
    ]
  },
  "decisionSummary": {
    "verdict": "当前核验环境已确认 frontend-testing-debugging，可作为前端渲染、响应式和交互 QA 的已核验工作流。",
    "bestFor": "本地页面加载、样式回归、控制台错误、响应式和核心交互验证",
    "avoidIf": "你只想生成单元测试或覆盖率报告，而不需要打开真实页面",
    "mainRisk": "它验证真实页面状态，不替代单元测试覆盖率；Browser 插件不可用或 dev server 无法启动时需要降级到 Playwright，并清楚记录 fallback 原因。",
    "alternatives": [
      "frontend-testing-debugging",
      "Playwright",
      "Vitest + Vue Test Utils"
    ]
  },
  "swot": {
    "S": "真实浏览器 QA 闭环可复用",
    "W": "依赖页面可运行和浏览器工具",
    "O": "可作为前端验收流程",
    "T": "Playwright / Cypress 原生工作流竞争"
  },
  "tags": [
    "Skills",
    "测试",
    "前端QA",
    "Browser",
    "本地核验"
  ]
}
