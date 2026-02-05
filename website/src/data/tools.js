// AI工具完整数据库
// 基于调研文档整合 30+ 工具

export const aiToolsData = [
  // ============= AI IDE (10个) =============
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Anysphere',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$20/$60/$200/月', models: 'Composer-1, Claude 3.5, GPT-4o, o1', link: 'https://cursor.sh' }
    ],
    freeQuota: '免费试用有限',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['业内标杆，功能最全', 'Composer-1 自研模型速度快 4 倍', '8 个 Agent 并行处理', 'Tab 补全极其流畅', '支持本地知识库/Repo Index'],
    cons: ['价格昂贵 ($20/mo 起)', '计费模型变动频繁', '国内访问需优化'],
    bestFor: '日常主力开发、复杂架构重构与高频编码',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: '目前最成熟的 AI 原生 IDE。2026 年引入 Composer-1 自研模型速度提升 4 倍，支持 8 个 Agent 并行处理复杂任务。Composer 带来的跨文件重构能力是其护城河。如果不考虑价格，可以 only one 使用。',
      pitfalls: ['不要让它一次性改超过 10 个文件', '敏感项目建议关闭云端索引']
    },
    swot: { S: '全流程开发能力一流', W: '订阅成本高', O: '演进为代码自治 Agent', T: 'Trae、GitHub Copilot 竞争' },
    tags: ['推荐', 'VS Code系', 'Agentic', '行业标杆']
  },
  {
    id: 'trae',
    name: 'Trae',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: '字节跳动',
    logo: null,
    versions: [
      { type: 'CN', pricing: '完全免费', models: '豆包, DeepSeek R1/V3', link: 'https://trae.ai' },
      { type: 'Global', pricing: '待公布', models: 'Claude, GPT-4, DeepSeek', link: 'https://trae.ai' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: ['完全免费', 'DeepSeek R1 深度集成', 'Solo 双模式：Builder (0→1) + Coder (1→100)', '实时跟踪能力方便快速调试', 'UI/UX 现代流畅', '600 万全球开发者'],
    cons: ['功能迭代中', '生态不如 Cursor 成熟', '隐私条款需注意：临时上传代码用于 embeddings 计算'],
    bestFor: '国内开发者、预算有限团队、快速原型',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: 'Cursor 的最佳平替。从"免费预览期"改为"完全免费"，Solo 双模式强大：Builder 负责从 0 到 1 的快速原型，Coder 负责从 1 到 100 的迭代优化。实时跟踪能力方便快速调试。全球开发者已达 600 万。免费是巨大优势。',
      pitfalls: ['功能可能频繁变动', '敏感代码慎用（隐私条款：会临时上传代码用于 embeddings 计算）']
    },
    swot: { S: '免费、DeepSeek 集成', W: '功能迭代中', O: '国内市场巨大', T: 'Cursor 先发优势' },
    tags: ['推荐', '国产', '免费', 'DeepSeek']
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Codeium',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$15/月', models: 'Claude, GPT-4, SWE-1.5', link: 'https://codeium.com/windsurf' }
    ],
    freeQuota: '免费版功能强大',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['Cascade AI 多步骤跨文件更改', 'SWE-1.5 模型速度快', 'Flow 模式上下文理解丝滑', 'AI 驱动 Codemaps 可视化代码导航', '价格比 Cursor 便宜 $5', 'Apple 级 UI 设计', '实际体验远超预期'],
    cons: ['Cascade 过度自主性需干预', '复杂重构时可能破坏现有功能', '知名度较低'],
    bestFor: '复杂逻辑重构、多文件协作、预算敏感',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights: '实际体验远超预期！Cascade AI 能力强大，跨文件重构精准。Flow 模式上下文理解极其丝滑，Codemaps 可视化代码导航是亮点。$15/月性价比极高，是 Cursor 的最佳平替。2026 年初的更新让其体验大幅提升。',
      pitfalls: ['Cascade 有时过于自主', '必须明确限制改动范围', '复杂重构时注意测试']
    },
    swot: { S: 'Cascade AI 强、性价比高', W: '品牌知名度低', O: '企业市场潜力', T: 'Cursor 生态' },
    tags: ['推荐', '性价比', 'Cascade', '超预期']
  },
  {
    id: 'qoder',
    name: 'Qoder',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      { type: 'CN', pricing: '中等', models: 'Qwen-Coder-Qoder 480B MoE', link: 'https://qoder.dev' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '128K',
    chineseSupport: 5,
    pros: ['Repo Wiki 强大', 'Qwen-Coder-Qoder 480B MoE 后端能力强', '适合存量代码理解', '2026 年 2 月最新模型'],
    cons: ['相对小众', '不同项目效果波动'],
    bestFor: '中大型后端项目、工作项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4.5,
      insights: '2026 年 2 月推出 Qwen-Coder-Qoder 480B MoE 模型，后端能力大幅提升。借助 Repo Wiki 让 AI 更好理解现有业务架构，适合大型 Java/Go 项目。',
      pitfalls: ['项目效果有波动', '不如 Cursor 全面']
    },
    swot: { S: 'Repo Wiki、后端强', W: '小众', O: '企业级市场', T: 'Cursor 全能' },
    tags: ['国产', '后端', 'Qwen', 'MoE']
  },
  {
    id: 'zed',
    name: 'Zed',
    category: 'ide',
    subcategory: '性能优先IDE',
    developer: 'Zed Industries',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: '多模型支持', link: 'https://zed.dev' }
    ],
    freeQuota: '完全免费开源',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['Rust 编写，120fps 性能', '内置实时多人协作', '创新的 Edit Prediction 功能', '完全开源免费', '界面简洁流畅', '跨平台支持'],
    cons: ['AI 功能相对基础', '扩展生态较小且较新', '仅支持 Mac 和 Linux（Windows 早期访问）', '学习曲线较陡'],
    bestFor: '追求极致性能、团队协作、开源爱好者',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3,
      insights: '性能优势被广泛认可，120fps 的流畅体验是其他编辑器无法比拟的。创新的 Edit Prediction 功能和内置协作是亮点。AI 功能虽然不如 Cursor 全面，但性能和协作能力使其成为特定场景下的最佳选择。',
      pitfalls: ['AI 功能不如 Cursor 全面', '扩展生态在建设中', '仅限 Mac/Linux（Windows 早期访问）']
    },
    swot: { S: '性能、开源', W: 'AI 基础', O: '社区增长', T: 'VS Code 生态' },
    tags: ['免费', '开源', '性能', 'Rust']
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'ide',
    subcategory: '云端IDE',
    developer: 'Replit',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费-$20/月', models: '多模型', link: 'https://replit.com' }
    ],
    freeQuota: '免费版可用',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['云端一体开发托管', 'Agent 3 可自主工作 200 分钟', '内置浏览器测试和自我修复', '一键部署', '实时协作', '适合教学'],
    cons: ['私有代码需谨慎', '复杂本地依赖支持有限'],
    bestFor: '快速原型验证、编程教学、分布式团队、非技术人员构建内部工具',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '云端开发一体化解决方案，特别适合教学和快速原型。Agent 3 可自主工作 200 分钟，内置浏览器测试和自我修复能力强大。',
      pitfalls: ['私有代码需谨慎', '复杂依赖支持有限']
    },
    swot: { S: '云端一体', W: '隐私顾虑', O: '教育市场', T: '本地 IDE' },
    tags: ['云端', '教学', '部署']
  },
  {
    id: 'kiro',
    name: 'Kiro',
    category: 'ide',
    subcategory: 'Spec驱动IDE',
    developer: 'Amazon',
    logo: null,
    versions: [
      { type: 'Global', pricing: '50 credits/月', models: 'Auto + Sonnet 4', link: 'https://kiro.dev' }
    ],
    freeQuota: '新用户 500 credits/14天',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['Spec 驱动工作流', '需求→设计→任务拆解强', '规范严谨'],
    cons: ['Free credits 很少', '太重量级', '迭代不便'],
    bestFor: '需求拆解、规格文档、任务分解',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '适合做需求拆解和规格文档，但不适合当主力写代码。',
      pitfalls: ['Free credits 太少', '不当主力写码']
    },
    swot: { S: 'Spec 驱动', W: '重量级', O: '企业规范', T: '轻量 IDE' },
    tags: ['Amazon', 'Spec', '规范']
  },
  {
    id: 'codebuddy',
    name: 'Codebuddy',
    category: 'ide',
    subcategory: '云集成IDE',
    developer: '腾讯',
    logo: null,
    versions: [
      { type: 'CN', pricing: '低价', models: '自有模型 + BYOK', link: 'https://codebuddy.ai' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: ['腾讯云集成', '便宜', '部署便捷', '支持自定义模型'],
    cons: ['不支持多会话严重影响体验', '稳定性问题', '优化差，流程中断或失去响应', '功能相对基础'],
    bestFor: '腾讯云用户、快速部署（非主力）',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '腾讯云生态内的选择，但不支持多会话严重影响使用体验。稳定性问题和优化差（经常流程中断或失去响应）使其难以作为主力。可期待 Trae 后续提供火山引擎的原生集成能力。建议在 Trae 等 IDE 中完成开发后，仅使用 Codebuddy 进行部署。',
      pitfalls: ['不支持多会话是致命伤', '稳定性问题频繁', '优化差，流程经常中断', '不适合作为主力开发工具']
    },
    swot: { S: '腾讯云集成', W: '多会话缺失、稳定性、优化差', O: '云服务市场', T: 'Cursor 功能' },
    tags: ['国产', '腾讯', 'BYOK', '不推荐主力']
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '待公布', models: 'Gemini', link: 'https://antigravity.dev' }
    ],
    freeQuota: '待公布',
    contextWindow: '1M (Gemini)',
    chineseSupport: 3,
    pros: ['Google 出品', 'Gemini 深度集成', '1M 上下文', '2025 年底已发布', '基于 VS Code fork 的完整平台（非插件）', '专注 Agentic Development'],
    cons: ['信息较少', '功能待探索', '定价待公布'],
    bestFor: 'Google 生态用户、尝鲜新品',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: 'Google 2025 年底发布的 AI IDE，基于 VS Code fork 的完整平台（非插件），专注 Agentic Development。Gemini 深度集成，1M 上下文。值得关注但需要更多实际使用验证。',
      pitfalls: ['新品功能待验证', '定价待公布']
    },
    swot: { S: 'Google、Gemini', W: '新品未知', O: '生态整合', T: '成熟竞品' },
    tags: ['Google', 'Gemini', '新品']
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'GitHub',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$10/月', models: 'GPT-4, Codex', link: 'https://github.com/features/copilot' }
    ],
    freeQuota: 'Free: 2000补全/月 + 50 premium/月',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['生态最成熟', '与 GitHub 深度集成', '多 IDE 支持', '企业版强大'],
    cons: ['功能较单一', 'Free 配额少', '重构能力有限'],
    bestFor: 'GitHub 用户、多 IDE 开发者',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '最成熟的 AI 编程助手，生态支持最好。适合作为辅助工具使用。',
      pitfalls: ['Free 配额太少', '重构不如 Cursor']
    },
    swot: { S: '生态成熟', W: '功能单一', O: 'Workspace', T: 'Cursor' },
    tags: ['推荐', 'GitHub', '插件', '生态']
  },
  {
    id: 'verdent',
    name: 'Verdent',
    category: 'ide',
    subcategory: '多Agent IDE',
    developer: 'Verdent Team',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/付费', models: 'Claude, GPT-4, DeepSeek', link: 'https://verdent.dev' }
    ],
    freeQuota: '免费版可用',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['多 Agent 并行执行', 'Plan Mode 规划能力', 'Git Worktrees 隔离', 'DiffLens 智能审查'],
    cons: ['新工具生态有限', '功能迭代中'],
    bestFor: '复杂任务分解、多 Agent 协作、代码审查',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '多 Agent 并行执行是亮点，SWE-bench 76.1% 成功率。Git Worktrees 提供安全隔离环境。',
      pitfalls: ['新工具仍在快速迭代', '需要熟悉多 Agent 工作流']
    },
    swot: { S: '多 Agent、Plan Mode', W: '新工具', O: '企业级市场', T: 'Cursor 生态' },
    tags: ['多Agent', 'PlanMode', 'GitWorktrees', 'DiffLens']
  },
  {
    id: 'jetbrains-ai',
    name: 'JetBrains AI Assistant',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'JetBrains',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$5-23/月', models: '多模型', link: 'https://www.jetbrains.com/ai' }
    ],
    freeQuota: '有免费试用',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['原生集成到 IntelliJ、PyCharm 等', '深度 IDE 集成', '企业级支持', '最广泛的 IDE 支持'],
    cons: ['仅限 JetBrains IDE', '功能相对单一'],
    bestFor: 'JetBrains 生态系统用户、企业团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '原生集成到 JetBrains IDE，深度 IDE 集成和企业级支持是亮点。适合 JetBrains 生态系统用户和企业团队。',
      pitfalls: ['仅限 JetBrains IDE', '功能相对单一']
    },
    swot: { S: 'JetBrains 集成、企业级', W: '仅限 JetBrains', O: '企业市场', T: 'GitHub Copilot' },
    tags: ['IDE', 'JetBrains', '企业', '插件']
  },

  // ============= AI CLI (8个) =============
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Anthropic',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$20-100/月', models: 'Claude 4.5 (Opus/Sonnet/Haiku)', link: 'https://docs.anthropic.com/claude-code' }
    ],
    freeQuota: '无免费额度',
    contextWindow: '200K',
    chineseSupport: 4,
    pros: ['推理能力顶级', 'Workflow 成熟', '多文件改动稳定', '2026 年 1 月新增：Skills 热重载', 'MCP Tool Search 工具搜索', '分叉上下文并行探索', 'Checkpointing 检查点保存恢复状态', 'Subagents 子代理委托专业任务', 'Hooks 自动化触发操作', 'Chrome 扩展浏览器自动化', '终端/IDE/Web 三种访问方式'],
    cons: ['价格贵', '需要订阅', '实际使用成本高（约 $8/90 分钟密集工作）', '需熟悉终端工作流'],
    bestFor: '关键方案、复杂重构、高难定位、大型代码库',
    funRanking: '夯夯',
    personalExperience: {
      rating: 5,
      insights: '能力最强的 CLI 工具。2026 年 1 月新增 Skills 热重载、MCP Tool Search、分叉上下文等强大功能。支持 Opus 4.5、Sonnet 4.5、Haiku 4.5 模型。深度集成到终端工作流，透明的权限系统。只在关键方案中使用，贵但值得。',
      pitfalls: ['价格贵', '关键任务再用', '实际使用成本高']
    },
    swot: { S: '能力最强', W: '价格高', O: '企业需求', T: '免费替代' },
    tags: ['推荐', 'CLI', '最强', 'Claude']
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: 'Gemini 2.5 Pro', link: 'https://github.com/google-gemini/gemini-cli' }
    ],
    freeQuota: '1000次/天免费额度（60次/分钟速率限制）',
    contextWindow: '1M',
    chineseSupport: 4,
    pros: ['1M 上下文', '免费额度大', '可接 MCP', '适合大仓库理解'],
    cons: ['请求数有上限', '复杂工程一般'],
    bestFor: '读仓库、长日志、多文件定位、方案调研',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: '长上下文方案调研的首选，免费额度很大。1M 上下文是巨大优势。',
      pitfalls: ['有请求数上限', '极复杂任务用 Claude Code']
    },
    swot: { S: '1M 上下文、免费', W: '复杂工程一般', O: 'Google 生态', T: 'Claude Code 能力' },
    tags: ['推荐', 'CLI', '免费', '长上下文', 'Google']
  },
  {
    id: 'qwen-cli',
    name: 'Qwen CLI',
    category: 'cli',
    subcategory: '终端Agent',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费', models: 'Qwen Coder', link: 'https://github.com/QwenLM/qwen-code' }
    ],
    freeQuota: '2000次/天免费额度（60次/分钟速率限制）',
    contextWindow: '128K+',
    chineseSupport: 5,
    pros: ['中文强', 'Terminal agent 完整', '免费额度大', '开源可查'],
    cons: ['深度推理有限', '配额制'],
    bestFor: '中文需求、中小项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '中文开发语境很顺手，免费额度足够日常使用。',
      pitfalls: ['深度推理有限', '企业场景走 API key']
    },
    swot: { S: '中文、免费', W: '深度推理', O: '国内市场', T: 'Gemini CLI' },
    tags: ['推荐', 'CLI', '免费', '国产', '中文']
  },
  {
    id: 'aider',
    name: 'Aider',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Paul Gauthier',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费 (API 成本)', models: '多模型支持', link: 'https://aider.chat' }
    ],
    freeQuota: '工具免费，API 自付',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['完全开源', 'Git 深度集成', '自动生成合理的提交消息', '直接与本地 Git 仓库工作', '代码库映射用于大型项目', '支持任意 LLM（OpenAI/Anthropic/本地 Ollama）', '支持图像和网页作为上下文', '语音输入支持', '自动 Lint 和测试', '隐私优先可完全本地运行'],
    cons: ['仅限终端界面（有实验性浏览器 UI）', '需要自带 API key', 'CLI 学习曲线较陡'],
    bestFor: 'Git 工作流、多模型切换、隐私意识强团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '开源 Git 集成的 CLI，适合终端高手。Git 深度集成是亮点，能自动生成合理的提交消息，直接与本地 Git 仓库工作。支持任意 LLM，隐私优先可完全本地运行。',
      pitfalls: ['需要自带 API key', '仅终端', '学习曲线较陡']
    },
    swot: { S: '开源、Git', W: '仅终端', O: '开源社区', T: '集成工具' },
    tags: ['开源', 'CLI', 'Git', '多模型']
  },
  {
    id: 'cline',
    name: 'Cline',
    category: 'cli',
    subcategory: 'VS Code插件',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: '多模型支持', link: 'https://github.com/cline/cline' }
    ],
    freeQuota: '工具免费，API 自付',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['VS Code/JetBrains 扩展', '自主执行多步骤任务', '规划并执行创建/编辑文件运行终端命令', '人在环中的审批系统', '支持 MCP 创建自定义工具', '本地优先架构', '快照检查点用于回滚', '在仓库内操作非旁观', '完全开源免费（Apache 2.0）'],
    cons: ['需自带 API', '学习曲线', '稳定性待验证'],
    bestFor: 'VS Code 用户、自主执行任务',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: 'VS Code 内的自主 AI 代理工具。人在环中的审批系统和本地优先架构是亮点，可自主执行多步骤任务，在仓库内操作而非旁观。完全开源免费。',
      pitfalls: ['需要自带 API key', '学习曲线']
    },
    swot: { S: 'VS Code 集成', W: '需 API', O: '插件生态', T: 'Copilot' },
    tags: ['免费', 'CLI', 'VS Code', '插件']
  },
  {
    id: 'continue',
    name: 'Continue',
    category: 'cli',
    subcategory: '开源平台',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: '多模型支持', link: 'https://continue.dev' }
    ],
    freeQuota: '完全免费开源',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['最成熟的开源 AI 编码助手平台', 'VS Code 和 JetBrains 扩展', '20K+ GitHub 星标', '模型无关架构', '支持本地 Ollama 模型或云 API', 'Hub 用于分享自定义助手', '完全透明的数据处理', '隐私优先', '可自托管'],
    cons: ['配置复杂', '需要 API'],
    bestFor: '多 IDE 用户、自托管需求',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '最成熟的开源 AI 编码助手平台，20K+ GitHub 星标。Hub 功能强大可创建和分享自定义 AI 助手。完全透明的数据处理和隐私优先设计是亮点。',
      pitfalls: ['配置较复杂']
    },
    swot: { S: '开源、多 IDE', W: '配置复杂', O: '开源生态', T: '商业产品' },
    tags: ['开源', 'CLI', '多IDE']
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'OpenCode Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费 (API 自付)', models: '75+ LLM providers', link: 'https://github.com/OpenCodeOpen/AI' }
    ],
    freeQuota: '工具免费，API 自付',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['开源', '75+ LLM providers', '隐私优先', '支持本地模型', '95K+ GitHub stars（2026 年 1 月）', '650+ contributors', 'Claude Code 的最强开源对手'],
    cons: ['需要配置 API', '新手上手有门槛'],
    bestFor: '隐私敏感用户、多模型切换、本地模型需求',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: '开源社区热门项目，2026 年 1 月已获得 95K+ GitHub stars。隐私优先设计，支持本地模型是巨大优势。被认为是 Claude Code 的最强开源对手。',
      pitfalls: ['需要自备 API key', '新手配置有学习成本']
    },
    swot: { S: '开源、隐私、多模型', W: '配置门槛', O: '企业级隐私市场', T: 'Claude Code 能力' },
    tags: ['推荐', '开源', 'CLI', '隐私', '多模型']
  },
  {
    id: 'codex',
    name: 'Codex CLI',
    category: 'cli',
    subcategory: '代码生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'API 付费', models: 'Codex', link: 'https://openai.com/api' }
    ],
    freeQuota: 'API 自付',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['代码生成能力强', '多语言支持', 'OpenAI 生态', 'API 稳定'],
    cons: ['需要 API key', '价格较高', '国内访问受限'],
    bestFor: '代码生成、补全、多语言项目',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights: 'OpenAI Codex 是代码生成的标杆，多语言支持强大，API 稳定可靠。',
      pitfalls: ['需要 OpenAI API key', '价格相对较高']
    },
    swot: { S: '代码生成、生态', W: '价格、访问', O: '企业级市场', T: '开源替代' },
    tags: ['推荐', 'CLI', 'OpenAI', '代码生成', '多语言']
  },
  {
    id: 'goose',
    name: 'Goose',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Block',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费开源', models: '多模型支持', link: 'https://github.com/block/goose' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['开源 AI 代理框架', '完全本地运行', '可写代码、调试', '与文件系统交互', '强调透明性和可扩展性'],
    cons: ['需要配置', '生态较新'],
    bestFor: '本地部署、隐私优先用户',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: 'Block 开源的 AI 代理框架，完全本地运行是亮点。强调透明性和可扩展性。',
      pitfalls: ['需要配置环境', '生态较新']
    },
    swot: { S: '开源、本地', W: '生态新', O: '隐私市场', T: '云端工具' },
    tags: ['开源', 'CLI', '本地', 'Block']
  },
  {
    id: 'openhands',
    name: 'OpenHands',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'OpenHands Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费开源', models: '多模型支持', link: 'https://github.com/OpenHands/openhands' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['开源 AI 编码助手', '充当全能软件开发者', '可修改代码、运行命令', '浏览网页、调用 API', '综合界面包含聊天、工作区、Jupyter、浏览器、终端'],
    cons: ['需要配置', '学习曲线'],
    bestFor: '开源用户、多模型切换',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights: '开源 AI 编码助手，综合界面强大包含聊天、工作区、Jupyter、浏览器、终端。充当全能软件开发者。',
      pitfalls: ['需要配置环境', '学习曲线较陡']
    },
    swot: { S: '开源、综合界面', W: '学习曲线', O: '开源社区', T: '商业产品' },
    tags: ['开源', 'CLI', '多模型', '综合']
  },

  // ============= LLM (11个) =============
  {
    id: 'claude',
    name: 'Claude 4.5 Series',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'Anthropic',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$20/月 (Pro)', models: 'Claude 4.5 Sonnet, Opus, Haiku', link: 'https://claude.ai' }
    ],
    freeQuota: '有限免费使用',
    contextWindow: '200K (可扩展至1M)',
    chineseSupport: 4,
    pros: ['代码理解能力极强', '200K 上下文窗口（可扩展至 1M）', '安全性和准确性领先', '推理稳定可靠', '多模态能力显著提升', '擅长复杂分析和编码'],
    cons: ['API 价格较高', '国内访问受限'],
    bestFor: '代码审查、方案设计、长上下文任务、多模态任务、复杂推理',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights: 'Claude 4.5 Sonnet 是目前最均衡的模型。代码能力极强，推理稳定，多模态能力显著提升。Opus 推理能力最强，Haiku 快速响应性价比高。主要用于方案设计和技术文档撰写。',
      pitfalls: ['输出价格高', '国内访问需代理']
    },
    swot: { S: '代码能力、推理稳定', W: '价格高', O: '企业市场', T: 'GPT-5.2 竞争' },
    tags: ['推荐', 'LLM', '代码', '长上下文', '多模态']
  },
  {
    id: 'gpt',
    name: 'GPT-5.2 Series',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$20-200/月', models: 'GPT-5.2, o3, o1', link: 'https://openai.com' }
    ],
    freeQuota: 'ChatGPT Free 有限',
    contextWindow: '128K+',
    chineseSupport: 3,
    pros: ['生态最成熟', '插件生态系统强大', '多模态能力强', 'Agent 能力强', '推理能力顶尖', 'Code Interpreter 数据分析', 'DALL-E 3 图像生成'],
    cons: ['输出价格极高', '易"过度输出"导致成本飙升', '国内访问受限'],
    bestFor: '通用任务、生态集成、推理任务、插件生态',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights: 'GPT-5.2 系列是 OpenAI 最新旗舰，推理能力进一步提升。o3 是推理增强模型，DALL-E 3 集成于 ChatGPT 订阅。生态最成熟是最大优势。',
      pitfalls: ['输出成本高', '控制输出长度避免过度输出']
    },
    swot: { S: '生态成熟、推理强', W: '价格高', O: 'Agent 市场', T: 'Claude 竞争' },
    tags: ['推荐', 'LLM', 'OpenAI', '生态', '推理']
  },
  {
    id: 'gemini',
    name: 'Gemini 3 Series',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/订阅', models: 'Gemini 3 Pro, Flash', link: 'https://gemini.google.com' }
    ],
    freeQuota: '免费版可用',
    contextWindow: '1M+',
    chineseSupport: 4,
    pros: ['1M+ 上下文', '多模态强', 'Google 生态', '免费版强大', '推理能力提升'],
    cons: ['输出价格高', '免费层数据用于改进'],
    bestFor: '长文档处理、多模态任务、方案设计',
    funRanking: '夯夯',
    personalExperience: {
      rating: 5,
      insights: 'Gemini 3 系列是 Google 最新旗舰，1M+ 上下文是巨大优势，推理能力显著提升。',
      pitfalls: ['免费层数据可能用于改进', '输出价格高']
    },
    swot: { S: '1M+ 上下文、推理', W: '输出贵', O: 'Google 整合', T: 'Claude 能力' },
    tags: ['推荐', 'LLM', 'Google', '长上下文', '推理']
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '深度求索',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/低价', models: 'DeepSeek R1, V3, Coder', link: 'https://deepseek.com' },
      { type: 'Global', pricing: '极低', models: 'DeepSeek R1, V3', link: 'https://api.deepseek.com' }
    ],
    freeQuota: '有免费使用',
    contextWindow: '64K',
    chineseSupport: 5,
    pros: ['DeepSeek R1 推理能力极强', '价格极具竞争力', '开源友好可自托管', '编码能力优秀', '中文支持良好'],
    cons: ['生态不成熟', 'API 工具链待完善', '多模态弱', 'API 稳定性偶有波动'],
    bestFor: '预算有限、中文场景、推理任务',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 4,
      insights: 'DeepSeek R1 推理能力极强，价格极具竞争力。是 GPT-4 的强力替代。成本效益高，可自托管。用于日常使用和搜索资料。',
      pitfalls: ['API 稳定性偶有波动', '多模态能力弱']
    },
    swot: { S: '推理强、价格低', W: '生态', O: '开源社区', T: 'OpenAI 生态' },
    tags: ['推荐', '国产', '开源', '低价', '推理']
  },
  {
    id: 'qwen',
    name: 'Qwen3',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/低价', models: 'Qwen3-235B, Coder-Plus, Coder-480B MoE', link: 'https://tongyi.aliyun.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '128K-1M',
    chineseSupport: 5,
    pros: ['中文能力强', '多工具入口方便', '成本分档可控', 'Qwen-Coder 代码专项版本能力强', 'Qwen3-Coder-480B MoE (35B 激活) 后端能力强'],
    cons: ['超长上下文价格陡增'],
    bestFor: '中文场景、代码任务',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Qwen3 中文表现优秀，Qwen-Coder 代码专项版本能力强。生成图片、海报等中文内容效果好。',
      pitfalls: ['超长上下文分档收费']
    },
    swot: { S: '中文、代码', W: '长上下文贵', O: '国内生态', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '中文', '阿里']
  },
  {
    id: 'glm',
    name: 'GLM-4.7',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '智谱 AI',
    logo: null,
    versions: [
      { type: 'CN', pricing: '$0.6/1M in, $2.2/1M out', models: 'GLM-4.7, Flash', link: 'https://z.ai' }
    ],
    freeQuota: 'Flash 有免费额度',
    contextWindow: '200K',
    chineseSupport: 5,
    pros: ['前端审美好', '完整 demo 生成', 'Agent 友好', '价格低'],
    cons: ['极复杂任务弱于 Claude/GPT'],
    bestFor: '前端开发、完整 demo、Agent 场景',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'GLM-4.7 前端审美和完整度不错，价格便宜。',
      pitfalls: ['极复杂任务不如 Claude']
    },
    swot: { S: '前端、价格', W: '复杂任务', O: '国内市场', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '低价', 'Agent']
  },
  {
    id: 'kimi',
    name: 'Kimi K2.5',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '月之暗面',
    logo: null,
    versions: [
      { type: 'CN', pricing: '$0.6/1M in, $2.5/1M out', models: 'K2.5, K2.5 Thinking', link: 'https://kimi.ai' }
    ],
    freeQuota: '有免费对话',
    contextWindow: '256K',
    chineseSupport: 5,
    pros: ['长文档处理', 'Agent 支持好', '中文流畅'],
    cons: ['不支持视觉', 'Turbo 版输出贵'],
    bestFor: '长文档、中文对话、方案调研',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Kimi K2.5 长文档处理能力强，中文对话流畅。',
      pitfalls: ['不支持视觉输入']
    },
    swot: { S: '长文档、中文', W: '无视觉', O: '国内市场', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '长上下文', '中文']
  },
  {
    id: 'minimax',
    name: 'MiniMax M2.1',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'MiniMax',
    logo: null,
    versions: [
      { type: 'CN', pricing: '$0.3/1M in, $1.2/1M out', models: 'M2.1, M2.1-lightning', link: 'https://minimax.io' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '200K',
    chineseSupport: 5,
    pros: ['多语言强', 'Rust/Java/Go 优秀', '框架泛化好', '价格低'],
    cons: ['知名度不如顶级玩家'],
    bestFor: '多语言项目、高频 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'M2.1 多语言和后端能力不错，价格极具竞争力。',
      pitfalls: ['知名度较低']
    },
    swot: { S: '多语言、价格', W: '知名度', O: 'API 市场', T: '顶级模型' },
    tags: ['国产', 'LLM', '低价', '多语言']
  },
  {
    id: 'doubao',
    name: 'Doubao',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '字节跳动',
    logo: null,
    versions: [
      { type: 'CN', pricing: '¥1.2/百万 in', models: 'Doubao-Seed-Code', link: 'https://volcengine.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '256K',
    chineseSupport: 5,
    pros: ['Bugfix/前端专项', '深度思考', '缓存机制', '价格低'],
    cons: ['长上下文分档涨价'],
    bestFor: '前端开发、Bug 修复',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '豆包适合"多读少说"的场景，输出短效果好。',
      pitfalls: ['长上下文会跳档涨价']
    },
    swot: { S: '前端、缓存', W: '长上下文贵', O: '字节生态', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '字节', '前端']
  },
  {
    id: 'grok',
    name: 'Grok-4 Series',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'xAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '订阅/付费', models: 'Grok-4, Grok-4 Mini', link: 'https://x.ai' }
    ],
    freeQuota: 'X Premium 订阅',
    contextWindow: '128K+',
    chineseSupport: 3,
    pros: ['实时信息接入（X/Twitter 数据）', '推理能力强', 'X平台深度集成', '多模态', '内容政策相对宽松', '幽默讽刺风格'],
    cons: ['需 X Premium 订阅', '生态较新'],
    bestFor: '实时信息、推理任务、X 平台用户、特定内容（成人内容等）',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Grok-4 是 xAI 旗舰模型，实时信息接入是巨大优势，推理能力显著提升。与 X 平台深度集成，内容政策相对宽松，适合特定内容场景。',
      pitfalls: ['需要 X Premium 订阅', '生态仍在发展中']
    },
    swot: { S: '实时信息、推理', W: '生态新', O: 'X 整合', T: 'GPT/Claude' },
    tags: ['LLM', 'xAI', '实时', '推理']
  },

  // ============= 多模态 (8个) =============
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Midjourney',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$10-60/月', models: 'MJ v6', link: 'https://midjourney.com' }
    ],
    freeQuota: '无免费',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: ['艺术风格强', '质量高', '社区活跃'],
    cons: ['需要 Discord', '价格较高'],
    bestFor: '艺术创作、概念设计',
    funRanking: '夯夯',
    personalExperience: { rating: 5, insights: '艺术风格最强的图像生成工具。', pitfalls: ['需要 Discord'] },
    swot: { S: '艺术质量', W: 'Discord 依赖', O: '创意市场', T: '免费替代' },
    tags: ['图像', '艺术', 'Discord']
  },
  {
    id: 'dalle',
    name: 'DALL-E 3',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'ChatGPT Plus 内含', models: 'DALL-E 3', link: 'https://openai.com/dall-e-3' }
    ],
    freeQuota: 'ChatGPT Free 有限',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['与 ChatGPT 集成', '文字渲染好', '理解力强'],
    cons: ['订阅制'],
    bestFor: '与 ChatGPT 配合使用',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '与 ChatGPT 集成方便，文字渲染不错。', pitfalls: ['需要订阅'] },
    swot: { S: 'ChatGPT 集成', W: '订阅制', O: 'OpenAI 生态', T: 'Midjourney' },
    tags: ['图像', 'OpenAI', '集成']
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Stability AI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费开源', models: 'SD 3, SDXL', link: 'https://stability.ai' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['开源可本地', '完全免费', '社区庞大', '可定制'],
    cons: ['需要本地算力', '学习曲线'],
    bestFor: '本地部署、定制需求',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '开源免费，本地部署自由度高。', pitfalls: ['需要 GPU'] },
    swot: { S: '开源、免费', W: '需算力', O: '开源社区', T: '云端服务' },
    tags: ['图像', '开源', '免费', '本地']
  },
  {
    id: 'meitu-ai',
    name: '美图AI',
    category: 'multimodal',
    subcategory: '图像编辑',
    developer: '美图',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/订阅', models: '美图 AI', link: 'https://www.meitu.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['AI 美颜', '图像增强', '背景替换', '风格转换', '易于使用', '移动端和 PC 端'],
    cons: ['消费者应用', '非开发者工具'],
    bestFor: '照片二次编辑和美化',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '照片二次编辑和美化工具，AI 美颜、图像增强、背景替换、风格转换等功能强大。易于使用，移动端和 PC 端都有。',
      pitfalls: ['消费者应用', '非开发者工具']
    },
    swot: { S: '易用、中文', W: '消费者应用', O: '大众市场', T: '专业软件' },
    tags: ['图像', '编辑', '美颜', '国产']
  },
  {
    id: 'sora',
    name: 'Sora',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '订阅制', models: 'Sora 2', link: 'https://openai.com/sora' }
    ],
    freeQuota: '2026年1月10日起免费用户无法使用',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['电影级质感', '60秒时长', '物理模拟强', 'Sora 2 已发布（2025年9月30日）', '同步音频功能', '角色客串功能', '2026年初将包含迪士尼品牌角色'],
    cons: ['需 ChatGPT Plus/Team/Enterprise 订阅', '价格高', '分阶段地区推出'],
    bestFor: '电影级视频创作',
    funRanking: '夯夯',
    personalExperience: { rating: 4, insights: '视频质量极高，Sora 2 已于 2025 年 9 月发布。2026 年 1 月 10 日起免费用户无法使用，需要付费订阅。', pitfalls: ['需付费订阅', '分阶段地区推出'] },
    swot: { S: '质量顶级', W: '访问限制', O: '影视市场', T: '竞品崛起' },
    tags: ['视频', 'OpenAI', '电影级']
  },
  {
    id: 'kling',
    name: '可灵 (Kling)',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: '快手',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/订阅', models: '可灵', link: 'https://kling.kuaishou.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['动作连贯性好', '10秒时长', '国内访问友好'],
    cons: ['时长限制'],
    bestFor: '短视频创作、动作连贯',
    funRanking: '夯夯',
    personalExperience: { rating: 5, insights: '动作连贯性在国内工具中最好，推荐使用。', pitfalls: ['时长有限'] },
    swot: { S: '动作连贯', W: '时长', O: '短视频市场', T: 'Sora' },
    tags: ['推荐', '视频', '国产', '连贯']
  },
  {
    id: 'jianying',
    name: '剪映',
    category: 'multimodal',
    subcategory: '视频编辑',
    developer: '字节跳动',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/订阅', models: '剪映 AI', link: 'https://www.capcut.cn' }
    ],
    freeQuota: '免费版功能强大',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['AI 智能剪辑', '字幕自动生成', '特效和转场', '智能配音', '易于使用', '移动端和 PC 端', '与抖音集成'],
    cons: ['消费者应用', '非开发者工具'],
    bestFor: '视频/照片二次编辑',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '视频二次编辑工具，AI 智能剪辑、字幕自动生成、特效和转场、智能配音等功能强大。易于使用，移动端和 PC 端都有，与抖音深度集成。',
      pitfalls: ['消费者应用', '非开发者工具']
    },
    swot: { S: '易用、抖音集成', W: '消费者应用', O: '短视频市场', T: '专业软件' },
    tags: ['视频', '编辑', '国产', '字节']
  },
  {
    id: 'meshy',
    name: 'Meshy',
    category: 'multimodal',
    subcategory: '3D生成',
    developer: 'Meshy',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/订阅', models: 'Meshy', link: 'https://meshy.ai' }
    ],
    freeQuota: '有免费额度',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['文本/图像转 3D', '多种格式', '易用'],
    cons: ['质量待提升'],
    bestFor: '快速 3D 原型',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '快速生成 3D 模型的好工具。', pitfalls: ['质量有限'] },
    swot: { S: '易用', W: '质量', O: '游戏/设计', T: '专业软件' },
    tags: ['3D', '多模态', '快速']
  },
  {
    id: 'hunyuan3d',
    name: '混元3D',
    category: 'multimodal',
    subcategory: '3D生成',
    developer: '腾讯',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/低价', models: '混元3D', link: 'https://hunyuan.tencent.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['腾讯出品', '中文优化', '质量不错'],
    cons: ['生态较新'],
    bestFor: '中文 3D 创作',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '腾讯出品，中文场景友好。', pitfalls: ['生态较新'] },
    swot: { S: '中文', W: '生态新', O: '国内市场', T: '海外工具' },
    tags: ['3D', '国产', '腾讯']
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'multimodal',
    subcategory: '内容生成',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: 'Gemini', link: 'https://notebooklm.google.com' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['PPT/视频/音频生成', '汇报材料强', '免费', '支持 9 种输出格式'],
    cons: ['功能较专一'],
    bestFor: '汇报材料制作',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '汇报材料神器！完全免费，支持 9 种输出格式（PPT、视频、音频、文档等）。从资料到成品汇报材料的效率提升巨大，是职场人士必备工具。',
      pitfalls: ['功能较专一']
    },
    swot: { S: '汇报材料、免费', W: '功能单一', O: '办公市场', T: '专业软件' },
    tags: ['推荐', '免费', '汇报', 'Google']
  },

  // ============= Agent 平台 (7个) =============
  {
    id: 'qinglizi',
    name: '氢离子',
    category: 'agent',
    subcategory: '垂直领域',
    developer: '氢离子团队',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/订阅', models: '医学模型', link: 'https://qinglizi.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: ['医学专业 AI', '中文医学知识库', '低幻觉', '高循证'],
    cons: ['垂直领域', '仅限医学'],
    bestFor: '医学问题咨询',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '医学专业 AI，中文医学知识库强大。低幻觉、高循证是亮点。用于健康相关问题咨询。',
      pitfalls: ['仅限医学领域', '不能替代专业医生']
    },
    swot: { S: '医学专业', W: '垂直领域', O: '医疗市场', T: '通用模型' },
    tags: ['医学', 'AI', '国产', '垂直']
  },
  {
    id: 'coze',
    name: 'Coze',
    category: 'agent',
    subcategory: '无代码平台',
    developer: '字节跳动',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/订阅', models: '多模型', link: 'https://coze.cn' },
      { type: 'Global', pricing: '免费/订阅', models: '多模型', link: 'https://coze.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: ['无代码', '插件丰富', '多平台部署'],
    cons: ['复杂流程有限'],
    bestFor: '日程辅助、信息收集、工作流自动化',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '无代码搭建智能体，插件生态丰富。', pitfalls: ['复杂流程受限'] },
    swot: { S: '无代码、插件', W: '复杂流程', O: '自动化市场', T: '专业平台' },
    tags: ['推荐', 'Agent', '无代码', '字节']
  },
  {
    id: 'dify',
    name: 'Dify',
    category: 'agent',
    subcategory: '开源平台',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源免费', models: '多模型', link: 'https://dify.ai' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['开源可自托管', '工作流强', '模型灵活'],
    cons: ['需要部署'],
    bestFor: '自托管、复杂工作流',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '开源可自托管，工作流能力强。', pitfalls: ['需要自己部署'] },
    swot: { S: '开源、自托管', W: '需部署', O: '企业自建', T: '云服务' },
    tags: ['开源', 'Agent', '自托管']
  },
  {
    id: 'autogpt',
    name: 'AutoGPT',
    category: 'agent',
    subcategory: '自主Agent',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源免费', models: '多模型', link: 'https://github.com/Significant-Gravitas/AutoGPT' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['自主决策', '开源', '可扩展'],
    cons: ['稳定性一般', '需要调试'],
    bestFor: '实验性自主任务',
    funRanking: '夯',
    personalExperience: { rating: 3, insights: '开创性的自主 Agent，但稳定性需要优化。', pitfalls: ['稳定性一般'] },
    swot: { S: '自主决策', W: '稳定性', O: '研究', T: '成熟产品' },
    tags: ['开源', 'Agent', '自主']
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'agent',
    subcategory: '开发框架',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源免费', models: '多模型', link: 'https://langchain.com' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['灵活编排', '社区活跃', '文档丰富'],
    cons: ['需要编程', '学习曲线'],
    bestFor: '开发者自建 Agent',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '最流行的 Agent 开发框架，灵活度高。', pitfalls: ['需要编程能力'] },
    swot: { S: '灵活、社区', W: '学习曲线', O: '开发者市场', T: '低代码平台' },
    tags: ['开源', 'Agent', '框架', '开发者']
  },
  {
    id: 'nanobanana',
    name: 'Nano Banana',
    category: 'agent',
    subcategory: '特色工具',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: 'Gemini', link: 'https://nanobanana.google' }
    ],
    freeQuota: '免费',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['架构图/示意图生成', '免费', '技术文档配图'],
    cons: ['功能专一'],
    bestFor: '技术文档配图',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '生成架构图和示意图的好工具，免费好用。', pitfalls: ['功能专一'] },
    swot: { S: '架构图', W: '专一', O: '技术文档', T: '专业绘图工具' },
    tags: ['免费', '图表', 'Google']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'agent',
    subcategory: '搜索增强Agent',
    developer: 'Perplexity AI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$20/月', models: 'Pro Search', link: 'https://perplexity.ai' }
    ],
    freeQuota: '免费版可用',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['带引用搜索', '实时信息', '适合调研', 'Agent 模式'],
    cons: ['代码能力一般'],
    bestFor: '日常调研、实时信息查询、信息 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '带引用的搜索型 AI Agent，适合快速调研和验证信息。',
      pitfalls: ['代码能力一般']
    },
    swot: { S: '搜索、引用', W: '代码弱', O: '调研市场', T: '传统搜索' },
    tags: ['推荐', '搜索', 'Agent', '调研', '引用']
  }
]

// 工具分类统计
export const getToolsByCategory = (category) => aiToolsData.filter(t => t.category === category)
export const getToolById = (id) => aiToolsData.find(t => t.id === id)
export const getAllCategories = () => [...new Set(aiToolsData.map(t => t.category))]
export const getAllTags = () => [...new Set(aiToolsData.flatMap(t => t.tags))]
