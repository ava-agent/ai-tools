// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.llama.com/models/llama-4/",
    "https://www.llama.com/docs/model-cards-and-prompt-formats/llama4/",
    "https://ai.meta.com/blog/llama-4-multimodal-intelligence/"
  ],
  "id": "llama",
  "name": "Llama 4 / Meta",
  "category": "llm",
  "subcategory": "开源大模型",
  "developer": "Meta",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "权重可下载；推理成本取决于自托管、云服务和许可约束",
      "models": "Llama 4 Scout (17B active / 109B total), Llama 4 Maverick (17B active / 400B total)",
      "link": "https://www.llama.com/models/llama-4/"
    }
  ],
  "freeQuota": "权重可下载；自托管算力和托管 API 另行计费",
  "contextWindow": "Scout 10M / Maverick 1M（官方模型卡注明评估条件）",
  "chineseSupport": 3,
  "pros": [
    "Llama 4 Scout 和 Llama 4 Maverick 是官方当前 4 代主模型",
    "原生多模态输入，支持文本与图像理解",
    "Scout 官方标注 10M context，Maverick 标注 1M context",
    "MoE 架构每 token 17B active parameters，适合自部署和云部署评估",
    "Meta 官方博客说明 Scout/Maverick 已可在 llama.com 和 Hugging Face 下载，Behemoth 仍是 preview/teacher model 线索",
    "官方模型卡、prompt format 和下载入口完整"
  ],
  "cons": [
    "不是 Apache/MIT 等无条件许可，商用和分发需遵守 Meta Llama 许可",
    "10M context 的官方脚注说明了特定评估条件，不能直接等同所有部署可用",
    "需要自行处理推理基础设施、量化、监控和安全护栏",
    "中文和本地生态体验通常不如国产平台开箱即用"
  ],
  "bestFor": "本地部署、隐私优先、长上下文处理",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4,
    "insights": "截至 2026-07-13，Meta 官方 Llama 4 页面、模型卡和 Meta AI 博客列出 Scout 与 Maverick：两者都是多模态 MoE 模型，Scout 标注 10M context，Maverick 标注 1M context；Behemoth 仍应作为 preview/teacher model 线索而非已发布主力。本站不再把它描述成无条件免费开源，而改为开放权重 + 自托管/云成本 + 许可约束的口径。",
    "pitfalls": [
      "先核 Meta Llama 许可与使用场景",
      "长上下文能力要在目标部署上实测",
      "自托管需要预算 GPU、推理框架和安全评估"
    ]
  },
  "decisionSummary": {
    "verdict": "适合需要开放权重、自托管和长上下文实验的团队，成本和许可要单独评估。",
    "bestFor": "隐私优先、本地推理、多模态长文档分析",
    "avoidIf": "你需要无需运维的托管聊天产品或无许可限制的模型",
    "mainRisk": "部署成本、许可边界、Behemoth preview 状态和长上下文实际效果都需要在目标环境里验证。",
    "alternatives": [
      "Qwen",
      "DeepSeek",
      "Mistral / Le Chat"
    ]
  },
  "swot": {
    "S": "开放权重、多模态、长上下文",
    "W": "自部署门槛和许可约束",
    "O": "企业私有化和边缘推理",
    "T": "Qwen、DeepSeek、Mistral 开放模型竞争"
  },
  "tags": [
    "开放权重",
    "Meta",
    "MoE",
    "长上下文",
    "本地",
    "已核验"
  ]
}
