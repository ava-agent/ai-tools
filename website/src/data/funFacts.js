/**
 * Fun facts about AI tools — 2-3 per tool
 * Key = tool id, Value = array of fun fact strings
 */
export const funFacts = {
  'cursor': [
    'Cursor 的 Background Agent 功能可以同时运行多个 AI Agent 并行处理不同任务',
    'Cursor 是从 VS Code 分叉出来的，所以几乎所有 VS Code 插件都可以在 Cursor 中使用',
    'Cursor 的 Tab 补全功能面向多行补全和下一步编辑预测，适合高频日常编码',
  ],
  'trae': [
    'Trae 是字节跳动推出的 AI IDE，提供 Free 层和付费能力，深度集成国产模型生态',
    'Trae 同时提供国际版和国内版，是少数能无障碍在国内使用的 AI IDE',
    'Trae 的 Builder 模式可以从零开始用自然语言构建完整项目',
  ],
  'windsurf': [
    'Windsurf（原 Codeium）的 Cascade 是其核心 agentic coding 工作流，当前应按 Devin Desktop 口径和配额规则评估',
    'Windsurf 已并入 Devin Desktop 口径，免费和付费档位都需要按当前日/周配额与 overage 规则评估',
  ],
  'claude-code': [
    'Claude Code 是完全运行在终端中的 AI 编程助手，不需要 IDE',
    'Claude Code 的上下文能力取决于当前可用 Claude 模型、订阅计划和 API/客户端路径，不应按固定旧模型号判断',
    'Claude Code 的 /compact 命令可以智能压缩对话历史，延长工作会话',
  ],
  'github-copilot': [
    'GitHub Copilot 是最早的 AI 编程助手之一，训练于数十亿行开源代码',
    'Copilot 现已支持 Agent 模式，可以自主完成多步骤编程任务',
    'GitHub Copilot 已从补全插件扩展到 Agent mode、MCP 和多 IDE 工作流',
  ],
  'gemini-cli': [
    'Gemini CLI 是 Google 推出的开源命令行 AI 工具，支持 100 万 Token 上下文',
    'Gemini CLI 适合先读取仓库和长日志，再把明确任务交给更强的执行 Agent',
  ],
  'zed': [
    'Zed 使用 Rust 编写，重点卖点是高速编辑体验、多人协作和外部 Agent 接入',
    'Zed 的多人协作功能借鉴了 Google Docs，可以实时看到同事的光标',
    'Zed 支持同时使用多个 AI 模型，包括本地运行的 Ollama 模型',
  ],
  'cline': [
    'Cline（前身是 Claude Dev）是一个开源的 VS Code AI 助手',
    'Cline 的 MCP 工具集成让它可以连接浏览器、数据库等外部工具',
  ],
  'deepseek': [
    'DeepSeek V4 Flash/Pro API 价格适合把批量中文和轻量推理任务从高价模型中分流出来',
    'DeepSeek 的 deepseek-chat / deepseek-reasoner 兼容别名需要按官方退役日期迁移',
    'DeepSeek 由中国团队开发，API 选型应重点看当前模型、价格、上下文和兼容别名退役日期',
  ],
  'gpt': [
    'ChatGPT 在发布后 5 天内就突破了 100 万用户，是历史上增长最快的应用',
    'OpenAI 模型生态覆盖文本、图片、音频、视频和代码 Agent 等多种工作流',
    'ChatGPT 的 Canvas 功能可以像白板一样协作编辑代码和文档',
  ],
  'claude': [
    'Claude 的名字来自信息论之父 Claude Shannon',
    'Claude 的 Artifacts 功能可以实时生成和预览可交互的网页应用',
    'Anthropic 是 OpenAI 联合创始人 Dario Amodei 创立的公司',
  ],
  'gemini': [
    'Gemini 是 Google 将 DeepMind 和 Google Brain 合并后的旗舰模型',
    'Gemini 的长上下文和 Google 生态整合适合长资料调研、文档处理和多模态任务',
    'Gemini 的 Deep Research 功能可以自动撰写带引用的深度研究报告',
  ],
  'perplexity': [
    'Perplexity 被称为"AI 搜索引擎"，每个回答都会标注信息来源',
    'Perplexity 的 Pro Search 会自动分解复杂问题，逐步搜索后综合答案',
  ],
  'grok': [
    'Grok 由 Elon Musk 的 xAI 公司开发，可以实时访问 X (Twitter) 数据',
    'Grok 的模型、订阅和 API 入口变化很快，使用前应按 xAI 官方模型页和 pricing 核对',
  ],
}

/**
 * Get a random fun fact for a specific tool
 */
export function getRandomFact(toolId) {
  const facts = funFacts[toolId]
  if (!facts || facts.length === 0) return null
  return facts[Math.floor(Math.random() * facts.length)]
}

/**
 * Get a random fun fact from any tool
 * Returns { toolId, fact }
 */
export function getRandomFactAny() {
  const toolIds = Object.keys(funFacts)
  if (toolIds.length === 0) return null
  const toolId = toolIds[Math.floor(Math.random() * toolIds.length)]
  const fact = getRandomFact(toolId)
  return { toolId, fact }
}
