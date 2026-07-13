// Generated from src/data/tools.js.
export default {
  "verificationStatus": "historical",
  "lastVerified": "2026-07-08",
  "sources": [
    "公开来源不足：未发现同名 supabase-realtime skill（检查于 2026-07-08）",
    "邻近本地 skill: supabase",
    "https://supabase.com/docs/guides/realtime"
  ],
  "id": "supabase-realtime-skill",
  "name": "supabase-realtime",
  "category": "skill",
  "subcategory": "数据库",
  "developer": "Supabase historical alias",
  "logo": null,
  "versions": [
    {
      "type": "Historical catalog alias",
      "pricing": "未发现可公开核验的同名 Skill；以 Supabase Skill 的 Realtime 触发范围和官方 Realtime 文档作为邻近来源",
      "models": "Supabase Skill 将 Realtime 与身份认证、RLS、CLI 和 MCP 服务工作一并列为适用场景",
      "link": "https://supabase.com/docs/guides/realtime"
    }
  ],
  "freeQuota": "暂无该 Skill 的独立免费额度证据；Supabase Realtime 用量以官方项目计划为准",
  "contextWindow": "N/A",
  "chineseSupport": 3,
  "pros": [
    "公开来源不足，适合作为 Supabase Realtime 子方向保留",
    "精确 supabase Skill 描述中包含 Realtime 触发范围",
    "可与 auth、RLS、CLI 和 MCP server 排障一起处理",
    "适合在 Supabase 项目内讨论实时消息、通知、presence 或协作需求",
    "需要按官方 Realtime docs 和项目设置继续复核"
  ],
  "cons": [
    "未找到可公开核验的同名 supabase-realtime Skill，不能确认同名 Skill 的专门迁移指南",
    "实时功能和 RLS/鉴权耦合强，必须用项目环境验证",
    "WebSocket、channel 和权限问题排查成本较高"
  ],
  "bestFor": "Supabase 项目中的 Realtime 功能规划、RLS/权限排查和实现前资料入口；作为历史别名指向主 Supabase Skill",
  "funRanking": "历史",
  "personalExperience": {
    "rating": 4,
    "insights": "当前不能把它写成独立 Realtime 专家 Skill；更准确的是 Supabase Skill 的一个子场景和历史别名。保留时要提示用户回到 Supabase 官方 Realtime 文档和项目配置中验证。",
    "pitfalls": [
      "先确认项目 Realtime 设置",
      "RLS/授权和频道订阅要一起测",
      "不要承诺具体迁移路线"
    ]
  },
  "decisionSummary": {
    "verdict": "作为历史别名保留，指向 Supabase 主 Skill 与官方 Realtime 文档；不要宣传独立专项 Skill、专门迁移或性能能力。",
    "bestFor": "已有 Supabase 项目，想把 Realtime 与 auth/RLS/CLI/MCP 排障放在一起处理",
    "avoidIf": "你需要独立的 Realtime 专项 Skill、完整迁移指南或跨平台实时系统方案",
    "mainRisk": "同名来源缺失；实时订阅问题高度依赖项目设置、RLS 和网络环境。",
    "alternatives": [
      "supabase",
      "Supabase Realtime docs",
      "Firebase Realtime / Firestore"
    ]
  },
  "swot": {
    "S": "Supabase 主 Skill 覆盖 Realtime 线索",
    "W": "同名专项公开来源不足",
    "O": "可作为协作和通知子场景线索",
    "T": "Firebase / Ably / Pusher 竞争"
  },
  "tags": [
    "Skills",
    "Supabase",
    "Realtime",
    "historical"
  ]
}
