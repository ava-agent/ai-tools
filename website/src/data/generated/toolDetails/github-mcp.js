// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://github.com/github/github-mcp-server",
    "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server",
    "https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server"
  ],
  "id": "github-mcp",
  "name": "GitHub MCP",
  "category": "mcp",
  "subcategory": "开发工具",
  "developer": "GitHub (Microsoft)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "MIT 开源本地 server；远程 OAuth 入口随 GitHub Copilot/IDE 支持而定，GitHub API 仍受权限与 rate limits 约束",
      "models": "远程端点 https://api.githubcopilot.com/mcp/；也支持本地 Docker/二进制 server",
      "link": "https://github.com/github/github-mcp-server"
    }
  ],
  "decisionSummary": {
    "verdict": "适合把仓库、Issue、PR 和 Actions 接进 AI IDE；默认应从 read-only、最小 toolsets 和最小权限开始。",
    "bestFor": "仓库查询、Issue/PR 协作、CI 排障、代码搜索、AI DevOps 工作流",
    "avoidIf": "你无法管理 OAuth/PAT 权限，或不希望 AI 工具获得任何写入 GitHub 的能力",
    "mainRisk": "远程 OAuth 可免 PAT，但不同 IDE 支持不同；本地模式常用 PAT，toolsets 和 read-only 配置必须严格收敛权限。",
    "alternatives": [
      "GitHub CLI",
      "GitLab MCP",
      "只读 GitHub App"
    ]
  },
  "freeQuota": "server 本身开源；实际使用受 GitHub 账号、Copilot/IDE 远程支持、OAuth/PAT 权限与 GitHub API rate limits 影响",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "GitHub 官方 MCP Server",
    "remote GitHub MCP server https://api.githubcopilot.com/mcp/ 已进入官方主路径，适合 repo、Issue、PR、Actions 的受控 AI 工作流",
    "支持远程 OAuth 与本地 Docker/二进制部署路径",
    "覆盖 repos、issues、pull_requests、actions、code_security 等 toolsets",
    "可用 --toolsets 或 GITHUB_TOOLSETS 缩小暴露能力",
    "支持 read-only 模式降低误操作风险",
    "适合把 GitHub 上下文直接接入 Copilot/Claude/Codex 等 IDE 工作流"
  ],
  "cons": [
    "OAuth、PAT 和 GitHub App 支持随宿主 IDE 而异",
    "受 GitHub API rate limits 与仓库权限约束",
    "写入工具需要严格最小权限",
    "默认工具集仍可能暴露较多上下文给模型"
  ],
  "bestFor": "在 AI IDE 中直接管理 GitHub 仓库、Issue、PR",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "MCP Core 核心工具之一。GitHub 官方 server 的价值在于把 repo、Issue、PR、Actions 和代码搜索变成可控工具集。生产使用时不要只看“能连上”：先开 read-only 或最小 toolsets，再逐步放开写入能力；OAuth 优先，PAT 只给必要 scope。",
    "pitfalls": [
      "Token 权限要最小化",
      "注意 API rate limits",
      "默认先启用 read-only 和最小 toolsets"
    ]
  },
  "swot": {
    "S": "官方出品、toolsets 完整",
    "W": "权限与 rate limits",
    "O": "AI DevOps 核心",
    "T": "GitLab MCP 与平台原生代理"
  },
  "tags": [
    "推荐",
    "MCP",
    "开源",
    "GitHub",
    "官方",
    "PR管理",
    "read-only"
  ]
}
