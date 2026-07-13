// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://github.com/antvis/mcp-server-chart",
    "https://www.npmjs.com/package/@antv/mcp-server-chart",
    "https://github.com/antvis/chart-visualization-skills"
  ],
  "id": "antv-chart-mcp",
  "name": "AntV Chart MCP",
  "category": "mcp",
  "subcategory": "可视化",
  "developer": "蚂蚁集团 (AntV)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "开源 MCP server package；可本地运行，也可通过 HTTP/SSE 或受支持的 MCP marketplace 使用",
      "models": "@antv/mcp-server-chart、chart-visualization skill",
      "link": "https://github.com/antvis/mcp-server-chart"
    }
  ],
  "freeQuota": "package 本身没有托管额度；成本来自 MCP host、渲染服务、部署和外部地图服务使用",
  "contextWindow": "N/A",
  "chineseSupport": 5,
  "pros": [
    "@antv/mcp-server-chart 是基于 AntV 的 TypeScript MCP server，用于图表生成和数据分析",
    "server 暴露 25+ 图表类型，包括 generate_word_cloud_chart、generate_spreadsheet 等工具",
    "支持通过 npx 安装接入桌面 MCP 客户端，Windows 场景需要 cmd 包装",
    "也可在 Dify 中使用，并支持 HTTP、SSE 或 Streamable transport",
    "配套 chart-visualization skill 可根据数据描述辅助选择合适图表类型"
  ],
  "cons": [
    "输入数据结构仍决定生成图表是否有效或误导",
    "地理可视化使用 AMap 服务，目前只支持中国范围地图生成",
    "生成图表应视为分析和报告草稿，不应直接当作审计过的统计结论",
    "生产可控使用需要配置部署、环境变量、禁用工具和私有渲染服务"
  ],
  "bestFor": "数据可视化、生成报表图表、项目进度展示",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-08，AntV Chart MCP 是具体的可视化 MCP server，而不是泛泛的数据分析承诺。它最适合数据已经结构化、用户需要通过 MCP host 或 Dify 工作流生成图表 artifact 的场景。",
    "pitfalls": [
      "生成图表前验证数据 schema 与聚合口径",
      "不要把中国地图工具用于其支持范围之外",
      "发布决策前复核生成图表"
    ]
  },
  "decisionSummary": {
    "verdict": "实用的 AntV MCP server，可把结构化数据转成图表 artifact，并支持本地与托管 MCP 路线。",
    "bestFor": "AI 辅助图表、快速报告视觉、Dify 图表生成，以及需要 25+ 图表类型的 MCP 工作流",
    "avoidIf": "你需要经过审计的 BI 看板、高度定制交互应用，或在 AMap 支持范围外生成地图",
    "mainRisk": "即便输入 schema、聚合口径或地理范围有误，图表也可能显得很有说服力；地图生成还依赖 AMap 且有地区限制。",
    "alternatives": [
      "ECharts",
      "Observable Plot",
      "Python matplotlib/Altair",
      "BI dashboards"
    ]
  },
  "swot": {
    "S": "通过 MCP 调用 AntV 生成图表",
    "W": "数据结构和地图区域存在约束",
    "O": "适用于 AI 辅助报告和 Dify 工作流",
    "T": "面临 BI 工具和自定义可视化技术栈的竞争"
  },
  "tags": [
    "推荐",
    "MCP",
    "AntV",
    "25+ chart types",
    "Dify",
    "chart-visualization",
    "已核验"
  ]
}
