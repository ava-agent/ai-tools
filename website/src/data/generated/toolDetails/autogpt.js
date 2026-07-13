// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-13",
  "sources": [
    "https://agpt.co/pricing/",
    "https://agpt.co/docs/platform",
    "https://github.com/Significant-Gravitas/AutoGPT/blob/master/LICENSE"
  ],
  "id": "autogpt",
  "name": "AutoGPT",
  "category": "agent",
  "subcategory": "自主Agent",
  "developer": "Significant Gravitas / AutoGPT",
  "logo": null,
  "versions": [
    {
      "type": "托管云版",
      "pricing": "Pro $42.50/月（年付，1x usage）；Max $272.00/月（年付，8.5x usage）；Team 计划标注即将推出",
      "models": "AutoPilot、可视化 Agent Builder、运行看板、Marketplace",
      "link": "https://agpt.co/pricing/"
    },
    {
      "type": "自托管",
      "pricing": "Self-Host 开源路线；需自带模型 API key、硬件/云资源和运维能力",
      "models": "AutoGPT Platform 与经典仓库组件",
      "link": "https://github.com/Significant-Gravitas/AutoGPT"
    }
  ],
  "freeQuota": "自托管可避开托管订阅费，但仍有基础设施和模型调用成本；云版按计划与 credits 规则使用",
  "contextWindow": "取决于模型",
  "chineseSupport": 3,
  "pros": [
    "AutoGPT Platform 现在更偏向 AutoPilot 对话创建、可视化 Agent Builder、运行看板、marketplace agents、定时任务、触发器和集成",
    "云版价格页列出 Pro 与 Max，Team 计划仍标注即将推出",
    "功能矩阵包含可视化 Agent Builder、MCP Tool Support、浏览器自动化、GitHub CLI、作为积木的 sub-agents 和任务历史",
    "Max 计划标注 8.5x usage；价格页同时展示 AutoPilot Chat allowance 和 credit wallet pay-as-you-go 机制",
    "自托管仍适合想控制基础设施和模型 key 的技术团队",
    "适合可重复的数字工作流，便于观察、停止、恢复和复盘运行记录"
  ],
  "cons": [
    "托管云版和自托管是两套成本模型；自带模型 key、存储、计算与运维可能才是真实预算大头",
    "许可边界需要核对：autogpt_platform 使用 Polyform Shield License，其他部分使用 MIT License",
    "长时间运行的 Agent 会影响外部应用和账号，因此定时、触发器、凭证和 webhook 权限都需要治理",
    "高风险业务动作仍需要人工复核、限定凭证范围并保留运行可见性"
  ],
  "bestFor": "可重复数字工作流、可视化 Agent 编排、定时/触发式自动化",
  "funRanking": "夯",
  "personalExperience": {
    "rating": 3.5,
    "insights": "截至 2026-07-13，AutoGPT 更应该按平台型 Agent 自动化工具评估，而不是只看早期经典 autonomous-agent demo。关键问题是你的流程是否需要云端运行管理、可视化积木、marketplace agents、定时任务、MCP 集成、AutoPilot Chat 和 pay-as-you-go credits，还是自托管加模型成本更合适。",
    "pitfalls": [
      "分开核算托管订阅和自托管成本",
      "再分发或平台复用前核对 Polyform Shield License 边界",
      "写入类动作要使用限定凭证并保留人工复核"
    ]
  },
  "decisionSummary": {
    "verdict": "适合可重复工作流的知名 Agent 自动化平台，但选型时必须分清托管计划、自托管运维、credits 和双许可边界。",
    "bestFor": "定时 Agent、可视化流程编排、marketplace agents、可观测自动化和 MCP 工具工作流",
    "avoidIf": "你需要低风险无人值守决策系统、所有目录统一宽松许可，或不跟踪模型/API 使用量的稳定成本",
    "mainRisk": "项目已经从经典 AutoGPT 演示转向平台模式；托管云成本、自托管基础设施、凭证治理，以及 Polyform Shield License 与 MIT License 的边界都容易被误读。",
    "alternatives": [
      "Dify",
      "LangChain / LangGraph",
      "CrewAI"
    ]
  },
  "swot": {
    "S": "平台化 Agent 编排和可观测运行",
    "W": "许可、credits 和自托管成本复杂",
    "O": "业务流程自动化和 Agent marketplace",
    "T": "Dify、LangGraph、CrewAI、托管 Agent 平台"
  },
  "tags": [
    "Agent",
    "自动化",
    "AutoPilot",
    "Visual Builder",
    "MCP",
    "已核验"
  ]
}
