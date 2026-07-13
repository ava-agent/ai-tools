// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/",
    "https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/"
  ],
  "id": "docker-mcp",
  "name": "Docker MCP",
  "category": "mcp",
  "subcategory": "DevOps",
  "developer": "Docker",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Docker MCP Toolkit / MCP Catalog；Availability: Beta，Docker Desktop/Hub/plan 规则另行适用",
      "models": "MCP Toolkit、Catalog、Gateway 和容器化 MCP servers",
      "link": "https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/"
    }
  ],
  "freeQuota": "MCP Toolkit 不是生产资源免费承诺；实际镜像、Docker Desktop、Hub、运行环境和第三方 server 使用仍按各自规则处理",
  "contextWindow": "N/A",
  "chineseSupport": 2,
  "pros": [
    "Docker MCP Toolkit 官方文档标注 Availability: Beta",
    "Docker MCP Catalog 提供 300+ verified servers，并通过 profiles 组织不同项目的 server 配置",
    "MCP Gateway 将 MCP servers 运行在隔离 Docker 容器中，并限制权限、网络访问和资源使用",
    "内置 logging 与 call-tracing，便于治理 AI 工具活动",
    "Docker MCP Toolkit 结合 passive 和 active security，减少 MCP server 运行时攻击面",
    "运行时限制包括 1 CPU 和 2 GB memory allocation"
  ],
  "cons": [
    "Beta 阶段界面和工具行为可能变化，需匹配 Docker Desktop 版本",
    "容器隔离降低风险但不等于可放心操作生产 Docker host",
    "MCP servers 仍可能接触本地文件、网络、凭据或 Docker socket，应按 profile 和权限逐项审查",
    "第三方 MCP server 的供应链和权限边界仍需单独评估"
  ],
  "bestFor": "在 Docker Desktop 管理的开发环境中运行和治理容器化 MCP servers",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，Docker MCP 更准确的定位是 Catalog/Toolkit/Gateway：用 300+ verified servers、profiles、容器隔离、资源限制和调用追踪来管理 MCP server，而不是让 Agent 直接随意控制 Docker 主机。",
    "pitfalls": [
      "只在开发 profile 试点",
      "审查 server 权限和镜像来源",
      "生产环境走 CI/CD 和人工审批"
    ]
  },
  "decisionSummary": {
    "verdict": "适合用 Docker Desktop/Toolkit 管理容器化 MCP servers；重点是隔离、资源限制、日志追踪和 profile 权限治理。",
    "bestFor": "本地开发中的 MCP server 发现、隔离运行、权限治理和调用追踪",
    "avoidIf": "你要让 Agent 操作生产 Docker host，或无法审计镜像来源、网络访问和凭据暴露面",
    "mainRisk": "Docker MCP Gateway 以隔离 Docker 容器降低风险，但 server 仍可能通过网络访问、资源使用或宿主权限造成影响；Beta 阶段需谨慎试点。",
    "alternatives": [
      "Docker CLI/Compose",
      "CI/CD pipeline",
      "Kubernetes RBAC"
    ]
  },
  "swot": {
    "S": "开发环境管理",
    "W": "安全风险",
    "O": "容器化普及",
    "T": "K8s 管理工具"
  },
  "tags": [
    "MCP",
    "Docker",
    "DevOps",
    "容器",
    "官方"
  ]
}
