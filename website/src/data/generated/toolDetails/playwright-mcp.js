// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://playwright.dev/docs/getting-started-mcp",
    "https://github.com/microsoft/playwright-mcp"
  ],
  "id": "playwright-mcp",
  "name": "Playwright MCP",
  "category": "mcp",
  "subcategory": "开发工具",
  "developer": "Microsoft",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Apache-2.0 开源 MCP server；运行成本来自本地/CI 浏览器资源而非托管额度",
      "models": "无需 LLM，基于 Playwright 和 accessibility snapshots 的浏览器自动化",
      "link": "https://playwright.dev/docs/getting-started-mcp"
    }
  ],
  "decisionSummary": {
    "verdict": "适合让 AI 通过结构化页面快照做浏览器验证；高吞吐编码代理可优先评估 Playwright CLI + Skills。",
    "bestFor": "网页回归验证、表单流测试、截图核对、需要真实浏览器状态的调试",
    "avoidIf": "你只需要一次性抓取静态网页，或无法在本地/CI 环境稳定运行浏览器",
    "mainRisk": "需要 Node.js 18+ 和 MCP 客户端；accessibility snapshots 会占上下文，复杂任务还会消耗本地浏览器资源。",
    "alternatives": [
      "Chrome DevTools MCP",
      "Firecrawl MCP",
      "Playwright CLI + Skills"
    ]
  },
  "freeQuota": "开源软件本身无托管用量限制；实际成本取决于本地机器、CI 分钟数和浏览器会话数量",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "微软/Playwright 官方维护",
    "通过 accessibility snapshots 让 LLM 操作页面而不依赖视觉模型",
    "支持导航、点击、输入、截图、网络监控和 storage state",
    "支持 VS Code、Cursor、Windsurf、Claude Code、Codex 等 MCP 客户端",
    "可用 npx @playwright/mcp@latest 快速接入",
    "支持 headless、浏览器选择、独立 HTTP server 等配置"
  ],
  "cons": [
    "需要 Node.js 18 或更新版本",
    "复杂页面会增加上下文与浏览器资源消耗",
    "某些动作需要可信客户端才能启用 browser_run_code_unsafe",
    "高频自动化最好评估 Playwright CLI + Skills 的 token 成本"
  ],
  "bestFor": "Web 自动化测试、页面截图、爬取动态页面",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "MCP Core 核心工具之一。它的优势是把浏览器交互转成结构化快照和工具调用，适合让 AI 在真实页面里做回归验证、交互测试和截图核对。官方也提醒 CLI + Skills 在高吞吐编码场景可能更省上下文；MCP 更适合需要持续页面状态和探索式自动化的任务。",
    "pitfalls": [
      "先确认本地或 CI 能稳定跑浏览器",
      "复杂页面要控制上下文和截图频率",
      "只给可信客户端开放任意 Playwright 代码执行"
    ]
  },
  "swot": {
    "S": "官方维护、结构化快照",
    "W": "浏览器资源与上下文成本",
    "O": "AI 驱动测试自动化",
    "T": "竞争或替代方案包括 Chrome DevTools MCP，以及 CLI 与 Skills 组合"
  },
  "tags": [
    "推荐",
    "MCP",
    "开源",
    "微软",
    "E2E测试",
    "浏览器",
    "accessibility snapshots"
  ]
}
