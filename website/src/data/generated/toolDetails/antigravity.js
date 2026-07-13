// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://antigravity.google/pricing",
    "https://gemini.google/subscriptions/",
    "https://support.google.com/googleone/answer/14534406?hl=en",
    "https://support.google.com/googleone/answer/16286513?hl=en"
  ],
  "id": "antigravity",
  "name": "Antigravity",
  "category": "ide",
  "subcategory": "AI原生IDE",
  "developer": "Google",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free / Google AI Pro / Google AI Ultra；价格按所在地区与当前 Google AI 订阅页确认，Antigravity 具体限额按官方 Plans 页面与订阅说明",
      "models": "Gemini 与第三方模型接入范围以 Antigravity 当前 Plans 和模型选择器为准",
      "link": "https://antigravity.google/pricing"
    }
  ],
  "freeQuota": "Free 层可用；Google AI Pro 提供更高 Antigravity limits 与 prioritized traffic；Google AI Ultra 视计划提供相对 Pro 5x 或 20x usage quota，并可用 AI credits overage",
  "contextWindow": "取决于所选 agent model；Antigravity 限额按订阅层级、任务复杂度和 AI credits 机制管理",
  "chineseSupport": 3,
  "decisionSummary": {
    "verdict": "适合 Google/Gemini 生态用户尝试 agent-first IDE；正式使用应按 Free/Pro/Ultra 限额和 AI credits 机制评估。",
    "bestFor": "Google AI Pro/Ultra 用户、想在 Gemini 生态里尝试 Agent Manager 和 agentic IDE 的开发者",
    "avoidIf": "你需要明确透明的固定用量、成熟团队治理，或不希望订阅层级影响模型访问",
    "mainRisk": "Google AI Pro/Ultra 的 Antigravity 限额是 rate limits / usage limits 口径，不等同于无限使用；达到 baseline quota 后可能需要 AI credits",
    "alternatives": [
      "Gemini CLI",
      "Cursor",
      "Qoder"
    ]
  },
  "pros": [
    "Google 官方 agentic development platform",
    "Google AI Pro 提供 Antigravity higher rate limits，订阅价格按地区确认",
    "Google AI Ultra 提供更高 limits，官方 Help 写明相对 Pro 可达 5x 或 20x quota",
    "Google One Help 明确 Ultra 有最高 limits、prioritized traffic、first access to new models 与 baseline quota / AI credits 两层机制",
    "支持通过 AI credits 扩展 Antigravity 用量",
    "适合与 Gemini、Jules、AI Studio 等 Google 开发生态联动"
  ],
  "cons": [
    "实际可用模型和限额受账号、地区、订阅层级与容量影响",
    "官方 Help 当前写明 Antigravity prompt/instructions 只支持英文，容量不保证",
    "rate limits 按复杂度/任务工作量消耗，不适合用请求次数简单估算",
    "新平台安全和自主执行边界需要谨慎配置",
    "团队治理、审计和企业采购路径仍需验证"
  ],
  "bestFor": "Google 生态用户、尝鲜新品",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，Antigravity 已不应只按“Public Preview 免费”描述。Google AI Pro / Ultra 订阅页和 Google One Help 都把 Antigravity 放进订阅权益与 AI credits 体系里，重点是 baseline quota、限额层级、优先流量、英文提示限制和超额续用机制。",
    "pitfalls": [
      "先确认所在地区和账号能否使用对应计划",
      "把 baseline quota 与 AI credits 分开估算",
      "自主 Agent 执行前要检查权限和审批设置",
      "不要把 Ultra 口径理解成无限使用",
      "英文提示和容量限制会影响非英语团队试用"
    ]
  },
  "swot": {
    "S": "Google、Gemini、Antigravity highest usage limits 路径",
    "W": "限额透明度和成熟度仍需实测",
    "O": "Google AI 订阅和开发生态整合",
    "T": "成熟 AI IDE 与多模型 CLI"
  },
  "tags": [
    "Google",
    "Gemini",
    "AgentFirst",
    "Google AI Pro",
    "Google AI Ultra",
    "AI credits"
  ],
  "video": {
    "src": "./videos/antigravity.mp4"
  },
  "radarChart": "images/antigravity_radar_chart.png"
}
