/**
 * Fun facts about AI tools — 2-3 per tool
 * Key = tool id, Value = array of fun fact strings
 */
export const funFacts = {
  'cursor': [
    'Cursor 的 Background Agent 功能可以同时运行多个 AI Agent 并行处理不同任务',
    'Cursor 是从 VS Code 分叉出来的，所以几乎所有 VS Code 插件都可以在 Cursor 中使用',
    'Cursor 的 Tab 补全功能能预测你接下来要写的多行代码，准确率惊人',
  ],
  'trae': [
    'Trae 是字节跳动推出的完全免费的 AI IDE，深度集成了国产大模型',
    'Trae 同时提供国际版和国内版，是少数能无障碍在国内使用的 AI IDE',
    'Trae 的 Builder 模式可以从零开始用自然语言构建完整项目',
  ],
  'windsurf': [
    'Windsurf（原 Codeium）的 Cascade 功能是业界首个"超级自动补全"系统',
    'Windsurf 的免费版提供无限的 AI 代码补全，这在付费 IDE 中非常少见',
  ],
  'claude-code': [
    'Claude Code 是完全运行在终端中的 AI 编程助手，不需要 IDE',
    'Claude Code 拥有 1M Token 的超大上下文窗口（Opus 4.6），可以一次理解整个项目',
    'Claude Code 的 /compact 命令可以智能压缩对话历史，延长工作会话',
  ],
  'github-copilot': [
    'GitHub Copilot 是最早的 AI 编程助手之一，训练于数十亿行开源代码',
    'Copilot 现已支持 Agent 模式，可以自主完成多步骤编程任务',
    'GitHub Copilot 的用户数已超过 100 万，是使用最广泛的 AI 编程工具',
  ],
  'gemini-cli': [
    'Gemini CLI 是 Google 推出的开源命令行 AI 工具，支持 100 万 Token 上下文',
    'Gemini CLI 支持 Gemini 3 Pro 模型，在代码推理方面表现突出',
  ],
  'zed': [
    'Zed 号称"世界最快的代码编辑器"，使用 Rust 编写，启动速度极快',
    'Zed 的多人协作功能借鉴了 Google Docs，可以实时看到同事的光标',
    'Zed 支持同时使用多个 AI 模型，包括本地运行的 Ollama 模型',
  ],
  'cline': [
    'Cline（前身是 Claude Dev）是一个开源的 VS Code AI 助手',
    'Cline 的 MCP 工具集成让它可以连接浏览器、数据库等外部工具',
  ],
  'deepseek': [
    'DeepSeek 是目前性价比最高的 AI 模型之一，API 价格远低于 GPT-5 和 Claude',
    'DeepSeek 的推理模型 R1 在数学和编程能力上可与顶级模型媲美',
    'DeepSeek 是由中国团队开发的开源模型，代码完全公开可审计',
  ],
  'gpt': [
    'ChatGPT 在发布后 5 天内就突破了 100 万用户，是历史上增长最快的应用',
    'GPT-5.2 支持多模态输入，可以同时处理文本、图片、音频和视频',
    'ChatGPT 的 Canvas 功能可以像白板一样协作编辑代码和文档',
  ],
  'claude': [
    'Claude 的名字来自信息论之父 Claude Shannon',
    'Claude 的 Artifacts 功能可以实时生成和预览可交互的网页应用',
    'Anthropic 是 OpenAI 联合创始人 Dario Amodei 创立的公司',
  ],
  'gemini': [
    'Gemini 是 Google 将 DeepMind 和 Google Brain 合并后的旗舰模型',
    'Gemini 3 Pro 拥有最长的上下文窗口，可达 200 万 Token',
    'Gemini 的 Deep Research 功能可以自动撰写带引用的深度研究报告',
  ],
  'perplexity': [
    'Perplexity 被称为"AI 搜索引擎"，每个回答都会标注信息来源',
    'Perplexity 的 Pro Search 会自动分解复杂问题，逐步搜索后综合答案',
  ],
  'grok': [
    'Grok 由 Elon Musk 的 xAI 公司开发，可以实时访问 X (Twitter) 数据',
    'Grok-4 号称是"地球上最聪明的 AI"，在多个基准测试中领先',
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
