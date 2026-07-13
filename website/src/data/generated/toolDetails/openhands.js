// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://www.openhands.dev/pricing",
    "https://github.com/OpenHands/OpenHands"
  ],
  "id": "openhands",
  "name": "OpenHands",
  "category": "cli",
  "subcategory": "开源CLI",
  "developer": "OpenHands Community / All Hands AI, Inc.",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "Local / Individual / Enterprise；本地自托管与云端计划能力不同，价格以官方 pricing 为准",
      "models": "OpenHands + 所选 LLM/provider；本地或云端路径以官方当前说明为准",
      "link": "https://www.openhands.dev/pricing"
    }
  ],
  "freeQuota": "Local 可自托管；云端 Individual 当前为每日 10 次 conversations，模型/API 与托管资源成本仍需单独确认",
  "contextWindow": "取决于所选模型/provider",
  "chineseSupport": 3,
  "pros": [
    "官方 pricing 已将 Local、Individual、Enterprise 路径拆开",
    "开源代码库活跃，适合自托管研究和工程实验",
    "可作为软件开发 Agent 运行命令、编辑文件和连接工具",
    "适合需要本地/企业部署选择的团队",
    "多 provider 路径便于结合现有模型账号"
  ],
  "cons": [
    "本地自托管、云端 Individual、Enterprise 的能力和成本不同",
    "模型/API、计算资源和托管计划可能分别计费",
    "学习曲线陡",
    "需要配置环境",
    "企业能力需按官方销售/计划确认"
  ],
  "bestFor": "开源用户、多模型切换",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，OpenHands 官方 pricing 将 Local、Individual、Enterprise 分层展示：Local open source 免费，Individual SaaS 免费但 BYOK 或 at-cost provider 另计，Enterprise 定制价格。它仍是开源软件开发 Agent 的重要选择，但要避免把本地自托管、云端计划和模型/API 成本合并成一个简单“免费版”。",
    "pitfalls": [
      "先选 Local、Individual 还是 Enterprise 路径",
      "模型/API 和托管资源成本另算",
      "需要配置环境和权限边界"
    ]
  },
  "decisionSummary": {
    "verdict": "开源软件开发 Agent 的重要路线，适合自托管和企业评估；成本要按 Local/Individual/Enterprise 与模型 provider 拆开。",
    "bestFor": "开源用户、多模型切换、本地/企业部署评估",
    "avoidIf": "你需要不配置环境的轻量 IDE 插件，或希望所有成本由单一免费层覆盖",
    "mainRisk": "本地部署、云端计划、模型/API 和企业能力边界容易混淆",
    "alternatives": [
      "Goose",
      "OpenCode",
      "Cline"
    ]
  },
  "swot": {
    "S": "开源、综合界面",
    "W": "学习曲线",
    "O": "开源社区",
    "T": "商业产品"
  },
  "tags": [
    "开源",
    "CLI",
    "多模型",
    "综合",
    "OpenHandsLM",
    "MCP",
    "企业级",
    "RBAC"
  ]
}
