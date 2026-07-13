// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://developers.figma.com/docs/figma-mcp-server/",
    "https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/",
    "https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server",
    "https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/"
  ],
  "id": "figma-mcp",
  "name": "Figma MCP",
  "category": "mcp",
  "subcategory": "设计工具",
  "developer": "Figma",
  "logo": null,
  "versions": [
    {
      "type": "Remote beta",
      "pricing": "Beta 期间免费；未来将成为按用量计费功能。View/Collab 席位最多 6 次/月；Dev/Full 席位按计划最多 200 次/日，Enterprise 最多 600 次/日",
      "models": "远程 server 覆盖所有 seat/plan；OAuth endpoint 为 https://mcp.figma.com/mcp",
      "link": "https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/"
    },
    {
      "type": "Desktop beta",
      "pricing": "桌面 server 需要付费计划中的 Dev 或 Full seat",
      "models": "本地 desktop server，可提供 design context 并支持 write native Figma content",
      "link": "https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server"
    }
  ],
  "freeQuota": "Beta 期间免费；View/Collab 最多 6 次/月，Dev/Full 最多 200 次/日，Enterprise Dev/Full 最多 600 次/日，另有每分钟限流",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "Figma 官方 MCP server 可向 Agent 提供 design context",
    "远程 server 覆盖所有 seat/plan，入口为 https://mcp.figma.com/mcp",
    "桌面 server 需要 Dev 或 Full seat，可更贴近桌面端文件上下文",
    "支持将 Agent 输出写成 write native Figma content",
    "适合设计系统提取、设计理解和设计到代码的受控辅助"
  ],
  "cons": [
    "当前 Beta 期间免费，但官方已说明未来会成为按用量计费功能",
    "View/Collab 仅最多 6 次/月；Dev/Full 依计划为最多 200 次/日，Enterprise 最多 600 次/日，且另有每分钟限流",
    "写入 canvas、生成设计内容和转码结果都需要人工审查",
    "仅在 supported clients 和正确 OAuth 流程下稳定使用"
  ],
  "bestFor": "把 Figma 文件上下文带入 AI 客户端，辅助设计理解、转码和设计系统整理",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Figma MCP 远程端点覆盖所有 seat/plan，但 View/Collab 只有最多 6 次/月；Dev/Full 依计划最多 200 次/日，Enterprise 最多 600 次/日。桌面 server 仍要求付费计划的 Dev 或 Full seat。",
    "pitfalls": [
      "核对 seat 对应的月/日调用上限",
      "确认文件权限与支持的 MCP 客户端",
      "写入设计前人工审查"
    ]
  },
  "decisionSummary": {
    "verdict": "适合设计与前端团队试点，但要把 beta、seat、文件权限、rate limits 和未来 usage 计费写入采购判断。",
    "bestFor": "Figma design context、设计系统提取、设计转码辅助和受控写入画布",
    "avoidIf": "你需要稳定长期固定价格，或无法人工审查 AI 写入的设计内容与生成代码",
    "mainRisk": "View/Collab 每月最多 6 次调用，Dev/Full 的日限额也随计划变化；未来计费、OAuth、文件权限和支持客户端仍可能变化。",
    "alternatives": [
      "Figma REST API",
      "Figma Dev Mode",
      "手动设计交付/截图标注"
    ]
  },
  "swot": {
    "S": "官方 MCP 与设计上下文质量",
    "W": "beta 计费和席位边界未完全稳定",
    "O": "设计转码和设计系统自动化",
    "T": "Builder.io/Locofy/设计工具原生 AI"
  },
  "tags": [
    "MCP",
    "Figma",
    "设计",
    "设计转码",
    "OAuth",
    "官方",
    "已核验"
  ]
}
