// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://www.01.ai/",
    "https://www.01.ai/yi-models",
    "https://www.01.ai/yi-license",
    "https://platform.01.ai/docs",
    "https://huggingface.co/01-ai",
    "https://github.com/01-ai/Yi",
    "https://platform.01.ai/useragreement",
    "https://platform.01.ai/termsPage.html",
    "https://platform.01.ai/privacypolicy"
  ],
  "id": "yi",
  "name": "Yi / 01.AI",
  "category": "llm",
  "subcategory": "通用大模型",
  "developer": "零一万物 (01.AI)",
  "logo": null,
  "versions": [
    {
      "type": "01.AI API Platform",
      "pricing": "公开价格表未在文本页面核到；platform 仍展示 Billing / Payment，采购需登录账户确认",
      "models": "托管 API 可用模型、上下文、限流和 SLA 需以当前 platform 为准",
      "link": "https://platform.01.ai/docs"
    },
    {
      "type": "Yi open-weight models",
      "pricing": "官方 GitHub 写明代码和权重 Apache 2.0；不同分发路径仍需按具体 license/terms 核验",
      "models": "Yi-1.5、Yi-Coder、Yi-VL、Yi 6B/9B/34B 等可通过 01.AI、Hugging Face 和 GitHub 追踪",
      "link": "https://github.com/01-ai/Yi"
    },
    {
      "type": "NVIDIA API / Terms path",
      "pricing": "Terms of Use 写明 limited trial purposes only，without use of Yi Model or Outputs in production；生产需额外许可确认",
      "models": "NVIDIA API trial path 与 01.AI platform / open weights 需要分开评估",
      "link": "https://platform.01.ai/termsPage.html"
    }
  ],
  "freeQuota": "公开来源未核到稳定免费额度",
  "contextWindow": "Yi-1.5 页面展示 4K/16K/32K，Yi-Coder 页面展示 128K；当前托管 API 可用上下文需以 platform/docs 为准",
  "chineseSupport": 5,
  "pros": [
    "01.AI 官网仍展示 WorldWise Enterprise LLM Platform、Yi-Lightning、Yi-Large 和 Yi Open-source 线索",
    "Yi Foundation Models 页面列出 Yi-1.5、Yi-Coder、Yi-VL 等模型线及 coding、math、reasoning 等方向",
    "官方 01-ai Hugging Face 组织和 01-ai/Yi GitHub 仍可追踪 Yi-Coder、Yi-1.5、Yi-VL 和 Yi 系列模型",
    "01-ai/Yi GitHub 写明代码和权重 Apache 2.0，可作为开放权重路径的核验来源",
    "platform 文档入口仍提供 Documentation、API Keys、Billing、Payment 和 Profile"
  ],
  "cons": [
    "公开 API 文档页面信息很少，价格和最新托管模型能力需要登录 platform billing 确认",
    "用户协议要求账号注册、手机号绑定和 real-name authentication",
    "《使用条款》中的 NVIDIA API 服务路径写明仅限试用，不得在生产环境使用 Yi Model 或其输出",
    "Privacy Policy 说明会记录交互输入、评价、usage history、input and generated content",
    "开放权重、01.AI platform API、NVIDIA API trial 和企业 WorldWise 授权需要分开评估"
  ],
  "bestFor": "跟踪 01.AI 企业 Agent、Yi 开放模型和中文场景备选",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3,
    "insights": "截至 2026-07-08，01.AI 官网可确认 Yi-Lightning、Yi Open-source 和 WorldWise 企业方向仍在展示；Yi Foundation Models、Hugging Face 与 GitHub 能核验开放模型线，platform 入口能核验 Billing / Payment 等账号路径。公开资料仍不足以给出 API 价格、托管模型 SLA 或生产采购结论。",
    "pitfalls": [
      "价格和额度要登录 platform billing 确认",
      "分清开放权重、01.AI platform API、NVIDIA API trial 和企业 WorldWise 授权",
      "不要沿用旧 benchmark、速度或无限制许可数字"
    ]
  },
  "decisionSummary": {
    "verdict": "已核验为活跃的 01.AI/Yi 生态条目，但公开资料仍不足以直接支撑 API 价格、SLA 或采购结论。",
    "bestFor": "需要跟踪 Yi 开放模型、企业 Agent 和中文模型备选的团队",
    "avoidIf": "你需要立即可核验的 API 价格、额度和稳定模型 SLA",
    "mainRisk": "开放权重、01.AI platform API、NVIDIA API trial 与企业 WorldWise 授权边界不同；Billing/Payment、real-name authentication、limited trial purposes only 和输入/生成内容记录都需要账户内和协议层面确认。",
    "alternatives": [
      "Qwen",
      "DeepSeek",
      "ERNIE / 百度千帆"
    ]
  },
  "swot": {
    "S": "Yi 模型线、开放权重和企业平台仍可追踪",
    "W": "公开 API 价格和托管 SLA 不足",
    "O": "可继续观察企业 Agent 和中文场景",
    "T": "Qwen、DeepSeek、百度千帆竞争"
  },
  "tags": [
    "国产",
    "Yi",
    "企业",
    "中文",
    "开放权重",
    "已核验"
  ]
}
