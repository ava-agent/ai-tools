// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-07",
  "sources": [
    "https://cloud.tencent.com/product/tclm",
    "https://cloud.tencent.com/document/product/1729/104753",
    "https://cloud.tencent.com/document/product/1729/97731"
  ],
  "id": "hunyuan",
  "name": "腾讯混元 / Tencent HY",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "腾讯",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "Hy3 preview / TokenHub 新入口优先确认；旧平台免费资源包和后付费规则仍适用于存量模型",
      "models": "Hy3：192K 最大输入、128K 最大输出、295B/21B MoE、no_think/think_low/think_high",
      "link": "https://cloud.tencent.com/product/tclm"
    },
    {
      "type": "CN",
      "pricing": "新模型能力逐步迁移至 TokenHub，原平台不再新增模型能力",
      "models": "TokenHub / hunyuan-a13b / Tencent HY Vision 1.5 / translation / role 等存量路径",
      "link": "https://cloud.tencent.com/document/product/1729/97731"
    }
  ],
  "freeQuota": "旧平台首次开通部分模型会发放一次性免费资源包，例如 hunyuan-a13b 100 万 tokens；Hy3/TokenHub 以控制台为准",
  "contextWindow": "Hy3 最大输入 192K、最大输出 128K；hunyuan-a13b 与视觉模型按旧平台文档另行核算",
  "chineseSupport": 5,
  "pros": [
    "腾讯云官方页面将混元描述为通用与多模态大模型家族，覆盖文本、图像、视频、3D 等模态",
    "Hy3 于 2026-07-06 更新，强化 Coding、长文、推理和 Agent 能力",
    "Hy3 采用 295B 总参数、21B 激活 MoE 架构，并提供 no_think / think_low / think_high",
    "产品概述列出角色扮演、翻译、视觉理解等专项模型",
    "购买指南列出免费资源包、后付费、预付费和 token 单价",
    "与腾讯云、腾讯元器和企业微信等生态更易衔接"
  ],
  "cons": [
    "原混元平台新购/新增能力正在向 TokenHub 迁移，入口和计费路径需要确认",
    "国际生态和第三方教程不如 AWS/OpenAI/Anthropic 丰富",
    "腾讯生态外的独立开发体验需要实测",
    "旧模型命名和新 TokenHub 资源容易混淆"
  ],
  "bestFor": "腾讯生态应用、中文内容生成、企业微信集成",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-07，腾讯云混元产品页已将 Hy3 preview 放到主推位置，标注 192K 输入、128K 输出、295B/21B MoE 和多档思考模式；购买指南仍提示旧平台能力逐步迁移至 TokenHub。本站不再以 hunyuan-a13b 作为唯一主线，而是把 Hy3/TokenHub 与旧平台存量模型分开展示。",
    "pitfalls": [
      "先确认是否走 Hy3 / TokenHub 新入口",
      "免费资源包耗尽后默认不一定自动转后付费",
      "腾讯生态外接入要实测 SDK、区域和账单流程"
    ]
  },
  "decisionSummary": {
    "verdict": "适合腾讯云/企微生态内的中文和多模态应用，当前要优先确认 Hy3/TokenHub 新入口与旧平台计费路径。",
    "bestFor": "腾讯云、企业微信、腾讯元器、中文内容和多模态 API",
    "avoidIf": "你需要国际生态、开源自托管或非常清晰的跨云迁移路径",
    "mainRisk": "Hy3、TokenHub、hunyuan-a13b 等旧平台模型、免费资源包和后付费设置并存，需要逐项确认。",
    "alternatives": [
      "Qwen",
      "ERNIE / 百度千帆",
      "Doubao / Volcano Ark"
    ]
  },
  "swot": {
    "S": "腾讯生态、Hy3、中文、多模态",
    "W": "入口迁移和生态绑定",
    "O": "企微和腾讯云企业应用",
    "T": "通义千问、文心、豆包竞争"
  },
  "tags": [
    "LLM",
    "部分免费",
    "国产",
    "腾讯",
    "中文",
    "已核验"
  ]
}
