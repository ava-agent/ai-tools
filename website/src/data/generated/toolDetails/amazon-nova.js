// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://docs.aws.amazon.com/nova/latest/nova2-userguide/what-is-nova-2.html",
    "https://docs.aws.amazon.com/nova/latest/nova2-userguide/whats-new.html",
    "https://docs.aws.amazon.com/nova/latest/nova2-userguide/extended-thinking.html",
    "https://docs.aws.amazon.com/nova/latest/nova2-userguide/embeddings.html",
    "https://docs.aws.amazon.com/nova/latest/userguide/what-is-nova.html",
    "https://aws.amazon.com/nova/pricing/",
    "https://aws.amazon.com/bedrock/pricing/"
  ],
  "id": "amazon-nova",
  "name": "Amazon Nova",
  "category": "llm",
  "subcategory": "云平台大模型",
  "developer": "Amazon (AWS)",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "通过 Amazon Bedrock / Nova pricing 按 tier、区域、模型和 modality 计费；Nova 2 能力以 nova2 user guide 为准",
      "models": "Amazon Nova 2 Lite, Amazon Nova Multimodal Embeddings, Nova Premier/Pro/Lite/Micro, Nova Canvas/Reel/Sonic",
      "link": "https://docs.aws.amazon.com/nova/latest/nova2-userguide/what-is-nova-2.html"
    }
  ],
  "freeQuota": "AWS 试用和免费层以控制台和区域为准；Bedrock/Nova 生产按量计费",
  "contextWindow": "Nova 2 文档标注 up to 1M context；Nova v1 Premier 1M / Pro-Lite 300K / Micro 128K",
  "chineseSupport": 3,
  "pros": [
    "Amazon Nova 2 文档已经列出 extended thinking and reasoning、built-in tools、AI agent building、enhanced document/video understanding",
    "Nova 2 Lite 支持 extended thinking，面向多步骤推理、agentic workflows、数学、规划和代码生成",
    "Nova 2 built-in tools 包含 web grounding 和 code interpreter，减少外部集成成本",
    "Amazon Nova Multimodal Embeddings 支持文本、文档、图像、视频和音频的统一语义空间",
    "与 Bedrock Knowledge Bases、Agents、Guardrails、评估和批处理能力衔接",
    "Nova v1 系列仍包含 Premier、Pro、Lite、Micro、Canvas、Reel、Sonic，老项目需要按模型线区分"
  ],
  "cons": [
    "强依赖 AWS 账号、区域和 Bedrock 权限",
    "独立聊天体验不如 ChatGPT/Claude/Gemini 直接",
    "Nova 2、Nova v1、embedding、image/video/speech 模型价格要按模型、区域、tier 和输入模态计算",
    "国内网络、账单和合规流程需要额外评估"
  ],
  "bestFor": "AWS 生态应用、成本敏感的 AI 部署、长文档处理",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，AWS Nova 2 文档已经把 Nova 2 描述为支持 up to 1M context、advanced reasoning、built-in tools、AI agent building、document/video understanding 与 multimodal embeddings 的新路线。本站不再只按 Nova v1 Premier/Pro/Lite/Micro 口径展示，而是把 Nova 2 与 Bedrock 生态一起评估。",
    "pitfalls": [
      "先确认目标区域是否支持",
      "用 Bedrock pricing 按模型和 tier 估算成本",
      "与 Claude/OpenAI/Google on Bedrock 做同任务评测"
    ]
  },
  "decisionSummary": {
    "verdict": "适合 AWS/Bedrock 原生团队做多模态、RAG、Agent 和 embeddings 应用，下一批选型应优先看 Nova 2 能力。",
    "bestFor": "AWS 生态、Bedrock Agents/Knowledge Bases、Nova 2 reasoning/tools、长文档和多模态输入",
    "avoidIf": "你不想接入 AWS 账号、区域权限和 Bedrock 账单体系",
    "mainRisk": "Nova 2、Nova v1、multimodal embeddings、Canvas/Reel/Sonic 和 Bedrock 服务层价格/区域不同，不能用单一低价结论采购。",
    "alternatives": [
      "Claude on Bedrock",
      "OpenAI on Bedrock",
      "Cohere / Command"
    ]
  },
  "swot": {
    "S": "AWS 集成、Nova 2 reasoning/tools、长上下文、多模态 embeddings",
    "W": "平台绑定和模型线区分明显",
    "O": "Bedrock 企业应用",
    "T": "Anthropic、OpenAI、Google 和 Meta 模型同台竞争"
  },
  "tags": [
    "LLM",
    "按量计费",
    "AWS",
    "企业",
    "长上下文",
    "已核验"
  ]
}
