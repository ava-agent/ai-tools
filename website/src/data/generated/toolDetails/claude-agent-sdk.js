// Generated from src/data/tools.js.
export default {
  "verificationStatus": "verified",
  "lastVerified": "2026-07-08",
  "sources": [
    "https://code.claude.com/docs/en/agent-sdk/overview",
    "https://github.com/anthropics/claude-agent-sdk-python",
    "https://github.com/anthropics/claude-agent-sdk-typescript"
  ],
  "id": "claude-agent-sdk",
  "name": "Claude Agent SDK",
  "category": "agent",
  "subcategory": "开发框架",
  "developer": "Anthropic",
  "logo": null,
  "versions": [
    {
      "type": "Global",
      "pricing": "MIT 开源 SDK；运行成本取决于 Claude Code / Anthropic API / 订阅或自定义 CLI 路径",
      "models": "Claude Code as a library；Python and TypeScript SDK 暴露 Claude Code 的工具、agent loop 和 context management",
      "link": "https://code.claude.com/docs/en/agent-sdk/overview"
    }
  ],
  "decisionSummary": {
    "verdict": "适合把 Claude Code 的 agent loop 程序化进代码任务；Python/TypeScript 都可用，但成本与权限要按 Claude Code/Anthropic 配置确认。",
    "bestFor": "代码库读取、命令执行、文件编辑、复杂代码工作流自动化",
    "avoidIf": "你需要非 Claude 模型优先、多 provider 抽象，或不希望 agent 具备文件/命令执行能力",
    "mainRisk": "SDK 会把 Claude Code 的文件、命令和编辑能力库化，生产使用必须限制工具权限、工作目录和成本路径。",
    "alternatives": [
      "OpenAI Agents SDK",
      "Google ADK",
      "LangChain"
    ]
  },
  "freeQuota": "SDK 免费，API 按量计费",
  "contextWindow": "取决于 Claude Code / 模型配置",
  "chineseSupport": 3,
  "pros": [
    "官方定位是 Build production AI agents with Claude Code as a library",
    "提供与 Claude Code 相同的 tools、agent loop 和 context management",
    "Python and TypeScript 两条 SDK 路径",
    "Python 包要求 Python 3.10+，并内置 Claude Code CLI",
    "TypeScript 包名为 @anthropic-ai/claude-agent-sdk",
    "认证路径覆盖 Amazon Bedrock、Google Cloud 与 Microsoft Azure 等企业部署环境",
    "SDK 能力包含 MCP、Permissions、Sessions、Hooks、Subagents 和内置工具",
    "适合让 agent 自主读文件、跑命令、搜索网页、编辑代码"
  ],
  "cons": [
    "模型与运行路径主要围绕 Claude Code / Anthropic 生态",
    "具备文件和命令能力，权限边界必须明确",
    "成本取决于 Claude Code/Anthropic 当前计划与用量",
    "本地/CI 集成前要确认 CLI 路径、工作目录和沙箱策略"
  ],
  "bestFor": "构建代码智能体、复杂推理 Agent",
  "funRanking": "夯夯",
  "personalExperience": {
    "rating": 4.5,
    "insights": "截至 2026-07-08，Claude Agent SDK 更像是把 Claude Code 的 agent loop 变成可编程库。它适合代码任务自动化，但能力强也意味着权限风险更高：读写文件、运行命令、搜索网页、MCP 和 Permissions 都要在明确边界内使用。旧的上下文数字和泛化能力排行不如官方 SDK/CLI 能力描述可靠。",
    "pitfalls": [
      "限制工作目录和工具权限",
      "确认 Python 3.10+ 或 TypeScript 包路径",
      "把 Claude Code/Anthropic 用量成本纳入预算"
    ]
  },
  "swot": {
    "S": "Claude Code agent loop 库化",
    "W": "权限和成本治理要求高",
    "O": "代码任务自动化",
    "T": "OpenAI Agents SDK、ADK、多 provider 框架"
  },
  "tags": [
    "推荐",
    "Agent",
    "框架",
    "Claude",
    "Anthropic",
    "Claude Code as a library",
    "Python and TypeScript"
  ]
}
