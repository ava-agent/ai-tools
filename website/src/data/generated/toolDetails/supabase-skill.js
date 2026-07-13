// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "本地 skill: supabase",
    "本地 skill: build-web-apps:supabase-postgres-best-practices",
    "https://supabase.com/docs"
  ],
  "id": "supabase-skill",
  "name": "supabase",
  "category": "skill",
  "subcategory": "数据库",
  "developer": "Supabase / OpenAI curated plugin",
  "logo": null,
  "versions": [
    {
      "type": "Installed skill",
      "pricing": "随当前 Supabase 插件环境可用；Supabase 项目和外部服务按官方账户计费",
      "models": "Supabase Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues, CLI and MCP server",
      "link": "https://supabase.com/docs"
    },
    {
      "type": "Postgres best practices",
      "pricing": "MIT skill guidance；数据库运行成本按 Supabase/Postgres 环境计费",
      "models": "Postgres 性能、RLS、模式、查询、连接、锁和监控指导",
      "link": "https://supabase.com/docs/guides/database/overview"
    }
  ],
  "freeQuota": "Skill 本身无独立免费额度声明；Supabase 服务额度以当前官方计划为准",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "当前核验环境中的 supabase Skill 覆盖 Database、Auth、Edge Functions、Realtime、Storage、Vectors、Cron、Queues、CLI 和 MCP server",
    "明确提醒 Supabase changes frequently，需要 verify against changelog 和当前 docs",
    "安全清单覆盖 RLS、service_role 暴露、JWT metadata、views、SECURITY DEFINER 和 storage upsert",
    "Supabase CLI 命令要求通过 --help 发现，避免记忆过时",
    "supabase-postgres-best-practices 覆盖 Postgres performance、connection、schema、RLS、locking 和 monitoring"
  ],
  "cons": [
    "强依赖 Supabase 生态和项目权限",
    "实现 schema/auth/RLS 改动后必须执行真实验证",
    "文档和 CLI 更新频繁，需要按任务检索最新资料"
  ],
  "bestFor": "Supabase 项目开发、Auth/RLS 安全复核、CLI/MCP 排障、Postgres schema 和性能优化",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "这是本批里证据更充分的条目之一：当前核验环境有精确 supabase Skill，也有 Supabase Postgres best practices。推荐时重点应放在“先查 changelog / docs、做真实 SQL 或 CLI 验证、严守 RLS 安全清单”。",
    "pitfalls": [
      "先查 changelog 和 docs",
      "RLS/权限变更必须验证",
      "不要暴露 service_role 或 secret key"
    ]
  },
  "decisionSummary": {
    "verdict": "当前核验环境存在精确 Supabase Skill 和 Supabase Postgres 最佳实践，可作为已核验条目保留。",
    "bestFor": "Supabase Auth/RLS/CLI/MCP/Schema/Realtime/Storage 等项目开发和排障",
    "avoidIf": "项目不是 Supabase/Postgres 技术栈，或没有数据库权限可验证变更",
    "mainRisk": "Supabase 变更频繁；如果不查 changelog/docs 并执行真实验证，容易按过时 API 或错误 RLS 模式实现。",
    "alternatives": [
      "Supabase MCP server",
      "supabase-postgres-best-practices",
      "Postgres official docs"
    ]
  },
  "swot": {
    "S": "安装环境来源明确且覆盖广",
    "W": "平台绑定和验证成本高",
    "O": "BaaS 与 Postgres 应用增长",
    "T": "Firebase / Neon / PlanetScale 竞争"
  },
  "tags": [
    "Skills",
    "Supabase",
    "数据库",
    "PostgreSQL",
    "已核验"
  ]
}
