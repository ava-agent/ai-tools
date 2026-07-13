// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/",
    "https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server_tools/",
    "https://docs.gitlab.com/user/profile/personal_access_tokens/"
  ],
  "id": "gitlab-mcp",
  "name": "GitLab MCP",
  "category": "mcp",
  "subcategory": "开发工具",
  "developer": "GitLab",
  "logo": null,
  "versions": [
    {
      "type": "Official Beta",
      "pricing": "适用于 Premium、Ultimate；当前状态：Beta",
      "models": "OAuth 2.0 Dynamic Client Registration over HTTP transport at /api/v4/mcp",
      "link": "https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/"
    },
    {
      "type": "PAT fallback",
      "pricing": "personal access tokens 需按最小 scope 管理",
      "models": "Rotate and Revoke token lifecycle；GitLab.com/Self-Managed/Dedicated 权限另行适用",
      "link": "https://docs.gitlab.com/user/profile/personal_access_tokens/"
    }
  ],
  "freeQuota": "官方 MCP server 是 Premium, Ultimate 的 Beta 功能；账号、项目权限、Duo/MCP 工具和 rate limits 另行适用",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "GitLab 官方 MCP server，Status: Beta，适用于 Premium, Ultimate",
    "使用 OAuth 2.0 Dynamic Client Registration 和 HTTP transport，端点为 /api/v4/mcp",
    "可让客户端访问 GitLab 数据，并代表用户执行操作",
    "工具覆盖 issue、merge request、pipeline、search、semantic_code_search 等研发场景",
    "支持 GitLab.com, Self-Managed and Dedicated 时需按实例与权限配置"
  ],
  "cons": [
    "不是社区免维护工具，需确认 Premium, Ultimate 层级、Beta 状态和组织策略",
    "AI 客户端可代表用户执行 GitLab 操作，create_issue、create_merge_request、manage_pipeline 等需人工确认",
    "personal access tokens 仍需最小 scope、Rotate、Revoke 和到期策略",
    "自托管网络、OAuth 注册和 rate limits 需要管理员治理"
  ],
  "bestFor": "GitLab Premium/Ultimate 团队在 AI 客户端中受控查询和更新 issue、MR、pipeline 与代码搜索",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，GitLab MCP 已有官方 Beta 文档，应按 Premium, Ultimate、GitLab.com, Self-Managed and Dedicated、OAuth DCR、HTTP /api/v4/mcp 和工具权限来评估。它能触达真实 MR、issue 和 pipeline，因此风险管理比“能不能连上”更重要。",
    "pitfalls": [
      "确认 Premium/Ultimate 和 Beta 限制",
      "OAuth/PAT 最小权限",
      "pipeline/MR 操作人工确认"
    ]
  },
  "decisionSummary": {
    "verdict": "适合已在 GitLab Premium/Ultimate 上的团队试点官方 Beta MCP；必须按 OAuth、PAT、工具权限和人工确认治理。",
    "bestFor": "issue/MR/pipeline/search/semantic_code_search 的受控 AI 辅助",
    "avoidIf": "你只使用 Free/无 Duo 场景，或无法配置 OAuth 2.0 Dynamic Client Registration、PAT 生命周期和审计策略",
    "mainRisk": "GitLab MCP 可代你执行操作；manage_pipeline、MR 和 issue 写入会影响真实研发流程，个人访问令牌必须定期轮换或撤销，并遵循最小授权。",
    "alternatives": [
      "GitLab Web UI",
      "GitLab CLI/API",
      "GitHub MCP"
    ]
  },
  "swot": {
    "S": "官方 GitLab MCP 与企业权限体系",
    "W": "Beta 与 Premium/Ultimate 门槛",
    "O": "企业研发流程 AI 化",
    "T": "GitHub/Jira/CI 平台工具"
  },
  "tags": [
    "MCP",
    "GitLab",
    "CI/CD",
    "MR",
    "OAuth",
    "官方",
    "已核验"
  ]
}
