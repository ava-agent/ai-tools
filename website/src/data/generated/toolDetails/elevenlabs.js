// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://elevenlabs.io/docs/overview/models",
    "https://elevenlabs.io/docs/changelog/2026/6/8",
    "https://elevenlabs.io/docs/changelog",
    "https://elevenlabs.io/pricing",
    "https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform"
  ],
  "id": "elevenlabs",
  "name": "ElevenLabs",
  "category": "multimodal",
  "subcategory": "语音合成",
  "developer": "ElevenLabs",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Free $0 / Starter $6 / Creator $22 / Pro $99 / Scale $299 / Business $990 / Enterprise 定制",
      "models": "Eleven v3, Multilingual v2, Flash v2.5, Scribe v2 / Scribe v2 Realtime",
      "link": "https://elevenlabs.io/pricing"
    }
  ],
  "freeQuota": "Free plan 10,000 credits；免费层不含 commercial license，公开发布需按官方政策署名",
  "contextWindow": "N/A",
  "chineseSupport": 4,
  "pros": [
    "Eleven v3 是官方当前最先进语音合成模型，强调自然、多语言和高情绪表达",
    "Multilingual v2 适合稳定长文本，Flash v2.5 面向低延迟和更低 API 成本",
    "官方模型页和 2026-06-08 changelog 已标注 scribe_v1、eleven_monolingual_v1、eleven_multilingual_v1 于 2026-07-09 移除",
    "pricing 页列出 Free 10,000 credits 以及 Starter/Creator/Pro/Scale/Business 等计划",
    "付费计划包含 commercial license，适合旁白、播客、有声书和产品语音",
    "API、Studio、Dubbing、Agents 等能力共享 credits 或按专门价格计费，需要分场景核算"
  ],
  "cons": [
    "Free plan 不包含 commercial license，不能直接用于商业发布",
    "旧 TTS v1 与 Scribe v1 已过 2026-07-09 移除日期，历史集成必须确认迁移完成",
    "credits 与 API 美元计费、Agents call minutes 等口径并不完全相同",
    "v3、Multilingual v2、Flash v2.5 在质量、延迟、语言覆盖和字符限制上取舍不同",
    "语音克隆、肖像声纹和授权素材需要额外合规审查"
  ],
  "bestFor": "专业配音、有声读物、视频旁白、多语言内容",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-12，ElevenLabs 官方模型文档列出 Eleven v3、Multilingual v2、Flash v2.5 以及 Scribe v2 路线；2026-06-08 changelog 明确 scribe_v1、eleven_monolingual_v1、eleven_multilingual_v1 于 2026-07-09 移除。pricing 页显示 Free 10,000 credits，且 free plan 不含 commercial license。",
    "pitfalls": [
      "Free plan 不可直接商用",
      "旧 v1 / Scribe v1 集成应确认已完成迁移",
      "API、Studio、Agents 的计费口径要分开",
      "语音克隆和声纹授权需合规审查"
    ]
  },
  "decisionSummary": {
    "verdict": "适合专业配音、多语言旁白和语音产品原型，商用必须进入付费授权和 credits 成本核算。",
    "bestFor": "有声书、视频旁白、产品语音、多语言配音、语音 Agent",
    "avoidIf": "你只想用免费层做商业素材，或需要完全离线的声纹/数据控制",
    "mainRisk": "Free 10,000 credits 不含 commercial license；旧 scribe_v1、eleven_monolingual_v1、eleven_multilingual_v1 已到官方移除日期，且 TTS/API/Agents/Studio 的计费口径不同。",
    "alternatives": [
      "Suno",
      "Udio",
      "开源 TTS"
    ]
  },
  "swot": {
    "S": "Eleven v3 和多语言语音",
    "W": "商用授权与计费复杂",
    "O": "语音产品和内容生产",
    "T": "开源 TTS 与平台内置语音"
  },
  "tags": [
    "语音",
    "配音",
    "多语言",
    "commercial license",
    "已核验"
  ]
}
