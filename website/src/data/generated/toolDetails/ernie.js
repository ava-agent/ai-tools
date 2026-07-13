// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://cloud.baidu.com/product-s/qianfan_home",
    "https://cloud.baidu.com/doc/qianfan-docs/s/7m95lyy43",
    "https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j",
    "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya"
  ],
  "id": "ernie",
  "name": "ERNIE / 百度千帆",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "百度",
  "logo": null,
  "versions": [
    {
      "type": "CN",
      "pricing": "ERNIE 5.1：按当前千帆计费页和订单页核算；ERNIE 5.0 仍在模型列表与价格页中",
      "models": "ERNIE 5.1, ERNIE 5.0, ERNIE 5.0 Thinking",
      "link": "https://cloud.baidu.com/product-s/qianfan_home"
    },
    {
      "type": "CN",
      "pricing": "ERNIE 4.5 Turbo 128K：输入 ¥0.0008/千tokens，输出 ¥0.0032/千tokens",
      "models": "ERNIE 4.5 Turbo, ERNIE 4.5 Turbo VL, ERNIE X1.1 Preview",
      "link": "https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya"
    }
  ],
  "freeQuota": "消费者入口和千帆 API 分开核算；API 以千帆价格页和控制台为准",
  "contextWindow": "ERNIE 5.1 / 5.0 / 4.5 Turbo 128K；ERNIE X1.1 Preview 64K",
  "chineseSupport": 5,
  "pros": [
    "百度千帆官方模型列表已列出 ERNIE 5.1、ERNIE 5.0、ERNIE 4.5 Turbo 和 ERNIE X1.1 Preview",
    "千帆首页定位为以 Agent 为核心的一站式企业级大模型服务平台，包含多智能体协同Agent、自主规划Agent、工作流Agent、知识库RAG 和全链路可观测",
    "千帆模型列表提供接入点、上下文、最大输入输出和默认流控",
    "价格页列出按量推理和预付费资源包口径",
    "首页同时可见 DeepSeek-V4 预览版 API 服务入口，说明千帆还承载第三方模型服务",
    "中文搜索、百度云和企业应用生态衔接强",
    "ERNIE 4.5 Turbo 128K 的 API 价格和上下文信息可被官方文档核验"
  ],
  "cons": [
    "消费者文心入口和千帆 API 是不同路径，不能混用免费结论",
    "海外访问、企业合规和账号体系要单独确认",
    "与 DeepSeek/Qwen/OpenAI 的效果对比应按任务实测，不宜用单一榜单判断"
  ],
  "bestFor": "中文场景、百度生态用户、预算敏感",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-08，百度千帆官方页面已列出 ERNIE 5.1、ERNIE 5.0、ERNIE-5.0-Thinking-Preview、ERNIE 4.5 Turbo、ERNIE 4.5 Turbo VL 和 ERNIE X1.1 Preview，并给出 API 接入点、上下文和价格。千帆首页现在更强调以 Agent 为核心的一站式企业级大模型服务平台，本站去掉消费者端永久免费和对标 GPT 的强结论，改为百度千帆 API/Agent 平台选型口径。",
    "pitfalls": [
      "按 API/消费者入口分别核算费用",
      "中文任务先做自有数据评测",
      "海外或跨境业务要确认访问与合规"
    ]
  },
  "decisionSummary": {
    "verdict": "适合百度云和中文企业场景，API 价格、模型和上下文已有官方千帆文档可查。",
    "bestFor": "百度生态、中文搜索增强、企业 API 接入",
    "avoidIf": "你需要全球化开发者生态或开源自托管模型",
    "mainRisk": "消费者入口、千帆 API、Agent 平台、第三方模型服务和资源包价格要分开核算，不能用单一免费结论覆盖。",
    "alternatives": [
      "Qwen",
      "DeepSeek",
      "Hunyuan"
    ]
  },
  "swot": {
    "S": "中文和百度云生态强",
    "W": "全球生态较弱",
    "O": "国内企业 API 和搜索增强",
    "T": "Qwen、DeepSeek、OpenAI 竞争"
  },
  "tags": [
    "国产",
    "中文",
    "百度",
    "千帆",
    "已核验"
  ]
}
