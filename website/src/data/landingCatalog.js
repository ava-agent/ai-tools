export const LANDING_STATS = {
  tools: 125,
  categories: 7,
  insights: 1723,
}

export const LANDING_CATEGORY_SUMMARY = {
  ide: {
    total: 13,
    featured: [
      { id: 'cursor', name: 'Cursor', bestFor: '日常主力开发、复杂架构重构与高频编码', rating: 5 },
      { id: 'trae', name: 'Trae', bestFor: '国内开发者、预算有限团队、快速原型', rating: 5 },
      { id: 'qoder', name: 'Qoder', bestFor: '中大型后端项目、工作项目开发', rating: 4.5 },
      { id: 'windsurf', name: 'Windsurf', bestFor: '复杂逻辑重构、多文件协作、预算敏感', rating: 4 },
      { id: 'antigravity', name: 'Antigravity', bestFor: 'Google 生态用户、尝鲜新品', rating: 3.5 },
      { id: 'verdent', name: 'Verdent', bestFor: '复杂任务分解、多 Agent 协作、代码审查', rating: 3.5 },
    ],
  },
  cli: {
    total: 12,
    featured: [
      { id: 'claude-code', name: 'Claude Code', bestFor: '关键方案、复杂重构、高难定位、大型代码库', rating: 5 },
      { id: 'codex', name: 'Codex', bestFor: 'OpenAI 生态内的代码生成、代码审查、CLI Agent 任务', rating: 5 },
      { id: 'gemini-cli', name: 'Gemini CLI', bestFor: '读仓库、长日志、多文件定位、方案调研', rating: 4.5 },
      { id: 'crush', name: 'Crush', bestFor: '喜欢精美 TUI 的开源 CLI 用户', rating: 4 },
      { id: 'qwen-cli', name: 'Qwen CLI', bestFor: '中文需求、中小项目开发', rating: 4 },
      { id: 'openhands', name: 'OpenHands', bestFor: '开源用户、多模型切换', rating: 3.5 },
    ],
  },
  llm: {
    total: 18,
    featured: [
      { id: 'claude', name: 'Claude', bestFor: '代码审查、方案设计、长上下文任务、多模态任务、复杂推理', rating: 5 },
      { id: 'gemini', name: 'Gemini', bestFor: '长文档处理、多模态任务、方案设计', rating: 5 },
      { id: 'gpt', name: 'GPT-5.6 / OpenAI', bestFor: '通用任务、生态集成、推理任务、插件生态', rating: 5 },
      { id: 'glm', name: 'GLM / Z.AI', bestFor: '前端开发、完整 demo、Agent 场景', rating: 4.5 },
      { id: 'grok', name: 'Grok / xAI', bestFor: '实时信息、推理任务、X 平台用户、特定内容', rating: 4.5 },
      { id: 'kimi', name: 'Kimi / Moonshot', bestFor: '长文档、中文对话、方案调研', rating: 4.5 },
    ],
  },
  multimodal: {
    total: 21,
    featured: [
      { id: 'midjourney', name: 'Midjourney', bestFor: '艺术创作、概念设计', rating: 5 },
      { id: 'flux', name: 'FLUX', bestFor: '开源/开放权重图像工作流、API 图像生成、本地 ComfyUI 探索', rating: 4.5 },
      { id: 'dalle', name: 'GPT Image 2 / ChatGPT Images', bestFor: '与 ChatGPT 配合使用，快速出图', rating: 4.5 },
      { id: 'hailuo', name: '海螺AI (Hailuo)', bestFor: '中文场景视频生成、短视频内容创作', rating: 4 },
      { id: 'hunyuan3d', name: '混元3D', bestFor: '中文 3D 创作', rating: 4 },
      { id: 'jimeng', name: '即梦 (Jimeng)', bestFor: '中文图像/视频创作、国潮设计、社交媒体内容', rating: 4 },
    ],
  },
  agent: {
    total: 20,
    featured: [
      { id: 'claude-agent-sdk', name: 'Claude Agent SDK', bestFor: '构建代码智能体、复杂推理 Agent', rating: 4.5 },
      { id: 'agentscope', name: 'AgentScope', bestFor: '需要事件流、权限、沙箱、多租户和服务化的 Agent 应用', rating: 4 },
      { id: 'bolt-new', name: 'Bolt.new', bestFor: '快速原型、全栈 Web 应用构建、MVP 验证', rating: 4 },
      { id: 'devin', name: 'Devin', bestFor: '自主化开发任务、端到端功能实现、Bug 修复自动化', rating: 4 },
      { id: 'dify', name: 'Dify', bestFor: '团队搭建 RAG、Agentic workflow 和可观测的 AI 应用', rating: 4 },
      { id: 'langchain', name: 'LangChain', bestFor: '开发者构建可观测、可评估、可部署的 Agent 应用', rating: 4 },
    ],
  },
  mcp: {
    total: 22,
    featured: [
      { id: 'context7', name: 'Context7', bestFor: '开发时实时查阅最新 API 文档、减少过期代码示例和虚构 API', rating: 5 },
      { id: 'github-mcp', name: 'GitHub MCP', bestFor: '在 AI IDE 中直接管理 GitHub 仓库、Issue、PR', rating: 4.5 },
      { id: 'playwright-mcp', name: 'Playwright MCP', bestFor: 'Web 自动化测试、页面截图、爬取动态页面', rating: 4.5 },
      { id: 'sentry-mcp', name: 'Sentry MCP', bestFor: '在 AI IDE 中只读检索错误上下文并生成可验证修复方案', rating: 4.5 },
      { id: 'supabase-mcp', name: 'Supabase MCP', bestFor: '在 AI IDE 中管理 Supabase 数据库、Auth、存储和 Functions', rating: 4.5 },
      { id: 'antv-chart-mcp', name: 'AntV Chart MCP', bestFor: '数据可视化、生成报表图表、项目进度展示', rating: 4 },
    ],
  },
  skill: {
    total: 19,
    featured: [
      { id: 'supabase-skill', name: 'supabase', bestFor: 'Supabase 开发、Auth/RLS 复核、CLI/MCP 排障和性能优化', rating: 4.5 },
      { id: 'ask-questions-skill', name: 'ask-questions-if-underspecified', bestFor: '复杂需求前的 brief 澄清和上下文确认', rating: 4 },
      { id: 'frontend-design-skill', name: 'frontend-app-builder', bestFor: '页面改版、视觉现代化和真实浏览器验收', rating: 4 },
      { id: 'webapp-testing-skill', name: 'frontend-testing-debugging', bestFor: '前端烟测、渲染排查、交互回归和响应式验证', rating: 4 },
      { id: 'semgrep-skill', name: 'semgrep', bestFor: '代码安全扫描、规则化漏洞检查和 PR 辅助审计', rating: 4 },
      { id: 'skill-creator-skill', name: 'skill-creator', bestFor: '创建新的 Codex Skill、维护已有 Skill、为可重复工作流沉淀脚本和参考资料', rating: 4 },
    ],
  },
}

export const LANDING_TOOL_NAMES = {
  cursor: 'Cursor',
  'github-copilot': 'GitHub Copilot',
  'claude-code': 'Claude Code',
  trae: 'Trae',
  'gemini-cli': 'Gemini CLI',
  midjourney: 'Midjourney',
  sora: 'Sora',
  dalle: 'GPT Image 2 / ChatGPT Images',
}
