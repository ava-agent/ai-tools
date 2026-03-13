// AI工具完整数据库
// 基于调研文档整合 82 款工具

export const aiToolsData = [
  // ============= AI IDE (17个) =============
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Anysphere',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费(50请求+2000Tab)/$20月付($16年付)/$60月付(Pro+)/$200月/$40用户月付(团队)', models: 'Composer-1.5, Claude, GPT-5.2, o3', link: 'https://cursor.sh' }
    ],
    freeQuota: '免费(50请求+2000Tab)',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['业内标杆，功能最全', 'Composer-1.5 自研模型强化推理，支持 8 个 Agent 并行处理', 'Tab 补全极其流畅（Pro 计划无限次）', '本地知识库/Repo Index，语义搜索整个代码库', '原子级 diffs 精确代码更改', 'VS Code 生态无缝兼容', '.cursorrules 自定义规则强大', 'MCP 协议支持'],
    cons: ['不要让它一次性改超过 10 个文件', '敏感项目建议关闭云端索引', '价格昂贵（$20/月起）', '国内访问需优化'],
    bestFor: '日常主力开发、复杂架构重构与高频编码',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: '目前最成熟的 AI 原生 IDE。2026 年引入 Composer-1.5 自研模型，通过强化学习扩展 20 倍提升推理能力，支持 8 个 Agent 并行处理复杂任务。Composer 带来的跨文件重构能力是其护城河。如果不考虑价格，可以 only one 使用。',
      pitfalls: ['不要让它一次性改超过 10 个文件', '敏感项目建议关闭云端索引']
    },
    swot: { S: '全流程开发能力一流', W: '订阅成本高', O: '演进为代码自治 Agent', T: 'Trae、GitHub Copilot 竞争' },
    tags: ['推荐', 'VS Code系', 'Agentic', '行业标杆'],
    video: { src: './videos/cursor.mp4'},
    radarChart: 'images/cursor_radar_chart.png'
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
      { type: 'Global', pricing: '待公布', models: 'Claude, GPT-5, DeepSeek', link: 'https://trae.ai' }
    ],
    freeQuota: '完全免费',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: ['完全免费（SOLO 模式）', 'Solo 双模式：Builder (0→1) + Coder (1→100)', '国产模型深度集成', '月活 160 万，全球累计用户 600 万（覆盖近 200 个国家和地区）', 'Cue 功能代码补全、多行修改、智能导入、智能重命名', '支持图像转代码（通过 MCP 支持 Figma 设计稿转代码）', 'SOLO Coder Plan 模式：先输出开发计划，确认后再编写代码', '自定义智能体（累计创建 36.5 万个）', '字节跳动技术背书', '国产化适配优秀'],
    cons: ['隐私条款：会临时上传代码用于 embeddings 计算', '功能可能频繁变动', '敏感代码慎用'],
    bestFor: '国内开发者、预算有限团队、快速原型',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: 'Cursor 的最佳平替。Solo 双模式强大：Builder 负责从 0 到 1 的快速原型，Coder 负责从 1 到 100 的迭代优化。实时跟踪能力方便快速调试。全球开发者已达 600 万，月活用户 160 万。2026 年新增 Cue 功能、图像转代码、SOLO Coder 的 Plan 模式、自定义智能体（36.5 万个）等功能。免费是巨大优势。',
      pitfalls: ['功能可能频繁变动', '敏感代码慎用（隐私条款：会临时上传代码用于 embeddings 计算）']
    },
    swot: { S: '免费、DeepSeek 集成', W: '功能迭代中', O: '国内市场巨大', T: 'Cursor 先发优势' },
    tags: ['推荐', '国产', '免费', 'DeepSeek', '月活100万', 'Cue功能', '图像转码'],
    video: { src: './videos/trae.mp4'},
    radarChart: 'images/trae_radar_chart.png'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Codeium',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$15/月', models: 'Claude, GPT-5, SWE-1.5', link: 'https://codeium.com/windsurf' }
    ],
    freeQuota: '免费版功能强大',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['Cascade AI 多步骤跨文件更改', 'SWE-1.5 模型速度快 (950 tokens/秒)', 'Flow 模式上下文理解丝滑', 'AI 驱动 Codemaps 可视化代码导航', '价格比 Cursor 便宜 $5', 'Apple 级 UI 设计', '实际体验远超预期', 'Git Worktree 隔离支持', 'Codeium 企业级背景', '免费版功能不阉割', '资源占用低于 Cursor', '支持 70+ 编程语言'],
    cons: ['Cascade 过度自主性需干预', '复杂重构时可能破坏现有功能', '知名度较低', '社区规模小', '中文文档有限', '插件生态不如 VS Code', '客服支持响应慢', '偶尔代码生成需人工修正'],
    bestFor: '复杂逻辑重构、多文件协作、预算敏感',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights: '实际体验远超预期！Cascade AI 能力强大，跨文件重构精准。Flow 模式上下文理解极其丝滑，Codemaps 可视化代码导航是亮点。SWE-1.5 模型推理速度达 950 tokens/秒，支持 Git Worktree 隔离环境。$15/月性价比极高，是 Cursor 的最佳平替。2026 年初的更新让其体验大幅提升。',
      pitfalls: ['Cascade 有时过于自主', '必须明确限制改动范围', '复杂重构时注意测试']
    },
    swot: { S: 'Cascade AI 强、性价比高', W: '品牌知名度低', O: '企业市场潜力', T: 'Cursor 生态' },
    tags: ['推荐', '性价比', 'Cascade', '超预期', 'SWE-1.5', 'GitWorktree'],
    video: { src: './videos/windsurf.mp4'},
    radarChart: 'images/windsurf_radar_chart.png'
  },
  {
    id: 'qoder',
    name: 'Qoder',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      { type: 'CN', pricing: 'Pro $20/月、Pro+ $60/月', models: 'Qwen-Coder-Qoder 480B MoE', link: 'https://qoder.dev' }
    ],
    freeQuota: 'Pro $20/月、Pro+ $60/月（免费试用已结束）',
    contextWindow: '128K',
    chineseSupport: 5,
    pros: ['Repo Wiki 强大（AI自动生成代码库文档）', 'Qwen-Coder-Qoder 480B MoE 后端能力强', '适合存量代码理解', '2026 年 2 月最新模型', 'Pro版仅2美元/月性价比高', '阿里云企业级服务保障', '通义千问模型持续优化', '中文支持出色', '适合 Java/Go 后端项目', '代码补全准确率高'],
    cons: ['相对小众', '不同项目效果波动', '前端支持不如后端', '插件生态有限', 'UI/UX 不够现代', '社区资源较少', '跨文件能力一般', '调试功能较弱'],
    bestFor: '中大型后端项目、工作项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4.5,
      insights: '2026 年 2 月推出 Qwen-Coder-Qoder 480B MoE 模型，后端能力大幅提升。借助 Repo Wiki（AI自动生成代码库文档）让 AI 更好理解现有业务架构，特别适合存量项目接手和大型 Java/Go 项目。Pro版仅2美元/月，性价比极高。',
      pitfalls: ['项目效果有波动', '不如 Cursor 全面']
    },
    swot: { S: 'Repo Wiki、后端强', W: '小众', O: '企业级市场', T: 'Cursor 全能' },
    tags: ['国产', '后端', 'Qwen', 'MoE'],
    video: { src: './videos/qoder.mp4'},
    radarChart: 'images/qoder_radar_chart.png'
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
    pros: ['Rust 编写，GPU 加速渲染高性能', '内置实时多人协作（基于 CRDT 技术）', 'Edit Prediction 支持多个提供商：Zeta、Mercury Coder、Sweep、Ollama、GitHub Copilot Next-Edit', '完全开源免费', '完全跨平台（Windows 已正式发布，支持 WSL 深度集成）', '扩展生态系统包含数百个扩展'],
    cons: ['AI 功能相对基础', '扩展生态较小且较新', '学习曲线较陡', '调试功能有限', 'LSP 支持不完整', '远程开发支持弱', '数据库插件缺失', '没有内置终端'],
    bestFor: '追求极致性能、团队协作、开源爱好者',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3,
      insights: '性能优势被广泛认可，GPU 加速渲染的高性能流畅体验是其他编辑器无法比拟的。创新的 Edit Prediction 功能支持多模型预测，内置协作是亮点。Windows 版已于 2025 年 10 月正式发布，支持 WSL 深度集成，完全跨平台。AI 功能虽然不如 Cursor 全面，但性能和协作能力使其成为特定场景下的最佳选择。',
      pitfalls: ['AI 功能不如 Cursor 全面', '扩展生态在建设中']
    },
    swot: { S: '性能、开源', W: 'AI 基础', O: '社区增长', T: 'VS Code 生态' },
    tags: ['免费', '开源', '性能', 'Rust', 'Windows']
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'ide',
    subcategory: '云端IDE',
    developer: 'Replit',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$20/$35/月', models: '多模型', link: 'https://replit.com' }
    ],
    freeQuota: '免费版可用，团队版$35/月',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['云端一体开发托管', 'Agent 3 可自主工作 200 分钟', '内置浏览器测试和自我修复', '一键部署', '实时协作', '适合教学', 'Agent 3 支持复杂多步骤任务', '丰富的项目模板库', '活跃的社区项目分享', '支持 50+ 语言环境', '零配置启动', '内置数据库服务', 'Ghostwriter 代码补全'],
    cons: ['私有代码需谨慎', '复杂本地依赖支持有限', '网络延迟影响体验', '免费版资源受限', '大项目性能下降', '离线无法使用', '企业版价格偏高', '自定义环境配置复杂'],
    bestFor: '快速原型验证、编程教学、分布式团队、非技术人员构建内部工具',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '云端开发一体化解决方案，特别适合教学和快速原型验证。Agent 3 可自主工作 200 分钟，支持复杂多步骤任务，内置浏览器测试和自我修复能力强大。无需本地环境配置是最大优势，浏览器打开即用。团队版 $35/月适合协作开发。但网络依赖性强，离线无法使用，大项目性能有瓶颈。',
      pitfalls: ['私有代码需谨慎', '复杂依赖支持有限']
    },
    swot: { S: '云端一体', W: '隐私顾虑', O: '教育市场', T: '本地 IDE' },
    tags: ['云端', '教学', '部署', 'Agent3']
  },
  {
    id: 'kiro',
    name: 'Kiro',
    category: 'ide',
    subcategory: 'Spec驱动IDE',
    developer: 'Amazon',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/Pro $20/月/Pro+ $40/月/Power $200/月', models: 'Claude Sonnet 4/Opus 4.6, Auto', link: 'https://kiro.dev' }
    ],
    freeQuota: '免费版 50 credits/月 + 500 一次性试用',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['Spec 驱动工作流（三阶段：生成用户故事→技术设计文档→可追踪任务列表）', '需求→设计→任务拆解强', 'AWS 开发，使用 Claude 模型（Sonnet 4/Opus 4.6）', 'MCP 协议支持', '企业级合规审查', '自主 Agent、Powers 系统、Run all tasks 批量执行'],
    cons: ['Free credits 太少', '不当主力写码'],
    bestFor: '需求拆解、规格文档、任务分解',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'AWS 推出的 AI IDE，最大特色是「Spec 驱动开发」模式——先用 AI 生成需求规格文档，再据此编写代码。集成 Amazon Q Developer 增强企业级能力，对 AWS 生态集成最好。适合需求拆解和规格文档场景，但纯写代码速度不如 Cursor。适合 AWS 技术栈的企业团队。',
      pitfalls: ['Free credits 太少', '不当主力写码']
    },
    swot: { S: 'Spec 驱动', W: '重量级', O: '企业规范', T: '轻量 IDE' },
    tags: ['Amazon', 'Spec', '规范', 'AmazonQ'],
    video: { src: './videos/kiro.mp4'},
    radarChart: 'images/kiro_radar_chart.png'
  },
  {
    id: 'codebuddy',
    name: 'Codebuddy',
    category: 'ide',
    subcategory: '云集成IDE',
    developer: '腾讯',
    logo: null,
    versions: [
      { type: 'CN', pricing: '个人版免费/旗舰版 78元/人/月', models: '混元 + DeepSeek 双模型架构', link: 'https://codebuddy.ai' }
    ],
    freeQuota: '个人版完全免费（10万token/月）',
    contextWindow: '200K+',
    chineseSupport: 5,
    pros: ['腾讯云集成', '个人版完全免费（10万token/月）', '混元 + DeepSeek 双模型架构', 'Max Mode 保留完整上下文信息', 'Plan Agent 计划模式', 'MCP 协议支持', '部署便捷'],
    cons: ['不支持多会话严重影响体验', '稳定性问题：经常流程中断或失去响应', '优化差，用户体验有待提升'],
    bestFor: '腾讯云用户、快速部署（非主力）',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '腾讯云生态内的选择，但不支持多会话严重影响使用体验。稳定性问题和优化差（经常流程中断或失去响应）使其难以作为主力。v4.3.3 版本新增 Plan Agent、MCP 支持、自定义 Agent 等功能。建议在 Trae 等 IDE 中完成开发后，仅使用 Codebuddy 进行部署。',
      pitfalls: ['不支持多会话是致命伤', '稳定性问题频繁', '优化差，流程经常中断', '不适合作为主力开发工具']
    },
    swot: { S: '腾讯云集成', W: '多会话缺失、稳定性、优化差', O: '云服务市场', T: 'Cursor 功能' },
    tags: ['国产', '腾讯', 'BYOK', '不推荐主力', '混元'],
    video: { src: './videos/codebuddy.mp4'},
    radarChart: 'images/codebuddy_radar_chart.png'
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'Public Preview期间免费', models: 'Gemini 3 Pro, Gemini 3 Flash, Claude Sonnet/Opus 4.5', link: 'https://antigravity.dev' }
    ],
    freeQuota: 'Public Preview 期间免费（每 5 小时刷新配额，正式版定价待定）',
    contextWindow: '2M (Gemini 3 Pro)',
    chineseSupport: 3,
    pros: ['Google 出品，Gemini 3 Pro 深度集成（相比 Gemini 2.5 Pro 推理和可靠性提升 50%+）', '支持 Gemini 2M 上下文窗口', 'Agent Skills 系统（2026年1月14日全面集成）', '原生集成 Nano Banana 和 Nano Banana Pro', 'Agent-First 开发平台，基于 VS Code fork 的完整 IDE（非插件）', '多窗口设计，包含 Agent Manager', '多模型支持：Gemini 3 Flash、Claude Sonnet/Opus 4.5'],
    cons: ['信息较少', '功能待探索', 'Beta 阶段稳定性未知', '未来定价不确定', '社区尚未形成', '学习资源匮乏', '企业功能待验证', '长期维护存疑'],
    bestFor: 'Google 生态用户、尝鲜新品',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: 'Google 于 2025 年 11 月发布的 AI IDE，基于 VS Code fork 的完整平台（非插件），专注 Agentic Development。Gemini 3 Pro 深度集成，2M 上下文窗口。已引入 Agent Skills 系统，原生集成 Nano Banana 增强能力。Public Preview 期间免费（每 5 小时刷新配额），值得关注但需要更多实际使用验证。',
      pitfalls: ['新品功能待验证', '存在安全漏洞报告（Prompt Injection 攻击风险）', '每周使用限制存在']
    },
    swot: { S: 'Google、Gemini', W: '新品未知', O: '生态整合', T: '成熟竞品' },
    tags: ['Google', 'Gemini', 'AgentFirst', 'AgentSkills', 'Beta免费'],
    video: { src: './videos/antigravity.mp4'},
    radarChart: 'images/antigravity_radar_chart.png'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'GitHub',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$10月付/$39月付/$19用户月(Business)', models: 'Claude Opus 4.6/Haiku 4.5, Gemini 3 Flash, GPT-4.1/GPT-5-mini, Grok Code Fast 1', link: 'https://github.com/features/copilot' }
    ],
    freeQuota: 'Free: 2000代码补全 + 50聊天请求/月',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['生态最成熟', '与 GitHub 深度集成', '支持 7 大平台（VS Code、Visual Studio、JetBrains 全套、Vim/Neovim、Azure Data Studio、Xcode、Eclipse）', '企业版强大', 'Agent Mode + MCP 支持', '多模型选择：Claude Opus 4.6/Haiku 4.5、Gemini 3 Flash、GPT-4.1/GPT-5-mini、Grok Code Fast 1'],
    cons: ['功能较单一', 'Free 配额少', '重构能力有限', '代码隐私顾虑', '生成质量参差不齐', '过度依赖易退化编码能力', '企业版价格昂贵', '离线无法使用'],
    bestFor: 'GitHub 用户、多 IDE 开发者',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '最成熟的 AI 编程助手，GitHub 生态集成无人能及。已推出 Agent Mode 和 MCP 支持（2025年12月），支持 GPT-5、Claude 4.5 等多模型选择。代码补全准确率高，在 VS Code 和 JetBrains 中体验一致。适合作为与 Cursor 互补的辅助工具，特别是重度 GitHub 用户。',
      pitfalls: ['Free 配额太少（2000 代码补全 + 50 聊天请求/月）', '重构不如 Cursor']
    },
    swot: { S: '生态成熟', W: '功能单一', O: 'Workspace', T: 'Cursor' },
    tags: ['推荐', 'GitHub', '插件', '生态', 'CodingAgent']
  },
  {
    id: 'verdent',
    name: 'Verdent',
    category: 'ide',
    subcategory: '多Agent IDE',
    developer: 'Verdent Team',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'Free 7天100 credits/Starter $19/月/Pro $59/月/Max $179/月', models: 'Claude Sonnet/Opus 4.5, Gemini 3 Pro, GPT-5.2/Codex', link: 'https://verdent.dev' }
    ],
    freeQuota: '免费版可用',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['多 Agent 并行执行（Parallel Thinking & Parallel Coding）', 'Plan Mode 规划能力 + Clarification 主动提问', 'Git Worktrees 隔离', 'DiffLens 智能审查', 'SWE-bench Verified 76.1% pass@1', '安全沙箱环境', '多模型支持：Claude Sonnet/Opus 4.5、Gemini 3 Pro、GPT-5.2/Codex'],
    cons: ['新工具生态有限', '功能迭代中', '学习曲线陡峭', '配置复杂度高', '文档不够完善', '社区支持有限', '资源占用较高', '新手上手困难'],
    bestFor: '复杂任务分解、多 Agent 协作、代码审查',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '多 Agent 并行执行是亮点，SWE-bench 76.1% 成功率证明其实力。Plan Mode 提供智能任务规划，Git Worktrees 提供安全隔离环境。DiffLens 智能审查增强代码质量。',
      pitfalls: ['新工具仍在快速迭代', '需要熟悉多 Agent 工作流']
    },
    swot: { S: '多 Agent、Plan Mode', W: '新工具', O: '企业级市场', T: 'Cursor 生态' },
    tags: ['多Agent', 'PlanMode', 'GitWorktrees', 'DiffLens', 'SWE-bench'],
    video: { src: './videos/verdent.mp4'}
  },
  {
    id: 'jetbrains-ai',
    name: 'JetBrains AI Assistant',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'JetBrains',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/纥825-2,500/年', models: '多模型 + 本地AI (Ollama/LM Studio)', link: 'https://www.jetbrains.com/ai' }
    ],
    freeQuota: '免费层无限本地代码补全',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['原生集成到 IntelliJ、PyCharm 等', '深度 IDE 集成', '企业级支持', '无限本地代码补全（免费层）', '支持本地 AI（Ollama、LM Studio）', '支持 11 个 JetBrains IDE'],
    cons: ['仅限 JetBrains IDE', '功能相对单一', 'IDE 启动速度受影响', '建议有时过于保守', '不支持其他编辑器', '上下文理解不如专用 AI IDE', '代码生成速度较慢'],
    bestFor: 'JetBrains 生态系统用户、企业团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '原生集成到 JetBrains IDE，深度 IDE 集成和企业级支持是亮点。免费层包含无限本地代码补全和本地 AI 支持（3 AI Credits/30天用于云功能），AI Pro 纥825/年、AI Ultimate 纥2,500/年的定价适合不同规模团队。适合 JetBrains 生态系统用户和企业团队。',
      pitfalls: ['仅限 JetBrains IDE', '功能相对单一']
    },
    swot: { S: 'JetBrains 集成、企业级', W: '仅限 JetBrains', O: '企业市场', T: 'GitHub Copilot' },
    tags: ['IDE', 'JetBrains', '企业', '插件', '本地AI']
  },

  // ============= AI CLI (11个) =============
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Anthropic',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$20月($200年)/$200月', models: 'Claude Opus 4.6, Sonnet 4.5, Haiku 4.5', link: 'https://docs.anthropic.com/claude-code' }
    ],
    freeQuota: 'Free tier 可用',
    contextWindow: '1M (Opus 4.6: 1M token 上下文，128K 输出)',
    chineseSupport: 4,
    pros: ['推理能力顶级，SWE-bench 67.60% 官方最高分（早期报告 72.5%）', 'Agent Teams 并行协作（2026）', 'Context Compaction 无限对话（减少 85% 上下文消耗）', 'Adaptive Thinking 动态推理', 'Opus 4.6：1M token 上下文窗口，128K 输出 tokens', 'MCP Tool Search', '分叉上下文并行探索', 'Checkpointing 状态保存', 'Chrome 扩展浏览器自动化'],
    cons: ['需 Claude Pro 订阅 ($17-20/月起)', '频繁权限请求打断工作流', '学习曲线陡峭', '比竞品更慢 (更彻底方法)', '仅限 Claude 模型无多模型灵活性', '使用量与 Claude.ai 共享', 'Max 层成本快速上升 $100-200/月', '上下文持久化问题', '无法恢复对话历史', '简单任务过度思考增加成本', '复杂架构偶有 inconsistencies'],
    bestFor: '关键方案、复杂重构、高难定位、大型代码库',
    funRanking: '夯夯',
    personalExperience: {
      rating: 5,
      insights: '能力最强的 CLI 工具。2026 年新增 Agent teams 并行协作、Context compaction 无限对话、Adaptive thinking 动态推理。支持 Claude Opus 4.6、Sonnet 4.5、Haiku 4.5。5.5x token 效率比竞品更高，30% 更少代码返工。深度集成到终端工作流，透明的权限系统。代表"自主 Agent"哲学 - AI 驱动你监督，与 Cursor 的"你驱动 AI 辅助"形成互补。只在关键方案中使用，贵但值得。',
      pitfalls: ['价格贵需 Pro 订阅', '关键任务再用', '频繁权限请求', '简单任务可能过度思考']
    },
    swot: { S: '能力最强', W: '价格高', O: '企业需求', T: '免费替代' },
    tags: ['推荐', 'CLI', '最强', 'Claude', 'AgentTeams', 'ContextCompaction', 'AdaptiveThinking'],
    video: { src: './videos/claude-code.mp4'},
    radarChart: 'images/claude_code.png'
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: 'Gemini 3 Pro, 2.5 Pro, 2.5 Flash, Flash-Lite', link: 'https://github.com/google-gemini/gemini-cli' }
    ],
    freeQuota: '1000次/天 (60次/分钟) + 免费用户可用 Gemini 3 系列',
    contextWindow: '1M (支持 2M 用于大规模扫描)',
    chineseSupport: 4,
    pros: ['1M 上下文 (2M 扫描模式)', '免费额度大', 'MCP 协议支持扩展工具', 'Flash-Lite 响应优先模式', '原生音频输出支持', '处理 3 小时视频内容', 'Google Workspace 扩展', '免费用户可访问 Gemini 3 Pro', '开源架构社区活跃'],
    cons: ['请求数有上限', '复杂工程一般', 'MCP 配置曾有技术问题', '安全漏洞风险 (CVE-2026-0755)', '深度分析不如 Claude Code', '企业级功能有限', '文档资源较少'],
    bestFor: '读仓库、长日志、多文件定位、方案调研',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: '长上下文方案调研的首选，免费额度很大。1M 上下文是巨大优势，支持 2M 扫描模式。2026 年新增 MCP 协议支持、Flash-Lite 响应优先模式、视频处理 3 小时。免费用户可访问 Gemini 3 Pro。注意 MCP 存在安全漏洞 CVE-2026-0755 需谨慎。',
      pitfalls: ['有请求数上限', '极复杂任务用 Claude Code', 'MCP 安全漏洞需关注']
    },
    swot: { S: '1M 上下文、免费', W: '复杂工程一般', O: 'Google 生态', T: 'Claude Code 能力' },
    tags: ['推荐', 'CLI', '免费', '长上下文', 'Google', 'Gemini3', 'MCP', 'FlashLite', 'Video'],
    video: { src: './videos/gemini-cli.mp4'},
    radarChart: 'images/geminicli.png'
  },
  {
    id: 'qwen-cli',
    name: 'Qwen CLI',
    category: 'cli',
    subcategory: '终端Agent',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费', models: 'Qwen3-Coder, Qwen3-235B-A22B, Qwen3-Max-Thinking', link: 'https://github.com/QwenLM/qwen-code' }
    ],
    freeQuota: '中国 2000次/天 | 海外 1000次/天 (60次/分钟)',
    contextWindow: '256K (可扩展至 1M)',
    chineseSupport: 5,
    pros: ['无 Token 数量限制仅限调用次数', '本地部署支持 (32B 模型可 MacBook 运行)', '多模态支持开箱即用', 'FP8 格式无需量化', 'LiveCodeBench/Spider/BIRD-SQL 基准测试表现优异（2026年初数据）', '开源可定制', '长期免费政策', 'MCP 服务器集成', '中文强', 'Terminal agent 完整'],
    cons: ['实际性能与基准有差距', '社区较小教程少', '大型仓库偶现不准确', '适合快速编辑非企业级', 'qwen.md 配置有时被忽略', '成熟度不如 Claude Code/Gemini CLI'],
    bestFor: '中文需求、中小项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '被称为"平民化的 Claude Code CLI"。Qwen3 系列已发布，包括旗舰 Qwen3-235B-A22B 和 Qwen3-Max-Thinking。Qwen3-Coder-Next 专为编码代理设计。在 LiveCodeBench、Spider、BIRD-SQL 等基准测试中表现优异（2026年初数据），但实际使用中"好但不算优秀"。无 Token 数量限制仅限调用次数是巨大优势，更适合预算有限的开发者和小型项目。',
      pitfalls: ['实际性能与基准有差距', '大型仓库偶现不准确', '适合快速编辑非企业级']
    },
    swot: { S: '中文、免费', W: '深度推理', O: '国内市场', T: 'Gemini CLI' },
    tags: ['推荐', 'CLI', '免费', '国产', '中文', 'Qwen3', '本地部署', '多模态', 'MCP'],
    radarChart: 'images/qwencli.png'
  },
  {
    id: 'aider',
    name: 'Aider',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Paul Gauthier',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费 (API 自付)', models: 'Gemini 2.5 Pro 全系列, DeepSeek V3.2-Exp, GPT-5 全家桶, Grok-4, Claude Sonnet 4/Opus 4, o3/o4-mini, Qwen3 235B, Kimi K2', link: 'https://aider.chat' }
    ],
    freeQuota: '完全免费开源 (API 成本自付)',
    contextWindow: '百万级 token (Gemini 2.5 Pro 1M)',
    chineseSupport: 3,
    pros: ['Git 深度集成', '自动生成合理提交消息', '代码变更准确率 52.4-88%（基于 Aider Polyglot Leaderboard）', '支持大量模型：Gemini 2.5 Pro、DeepSeek V3.2-Exp、GPT-5、Grok-4、Claude Sonnet 4/Opus 4、o3/o4-mini、Qwen3 235B、Kimi K2', '隐私优先可本地运行', '支持底层模型的大上下文能力（如 Gemini 2.5 Pro 1M）'],
    cons: ['无 GUI/IDE 集成', '需要命令行舒适度', '学习曲线陡峭', '非完全自主 Agent', '响应时间较长', '大型代码库编辑受限', '多文件上下文处理有限'],
    bestFor: 'Git 工作流、多模型切换、隐私意识强团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '最活跃的开源 AI 编程助手之一，由 Paul Gauthier 维护。核心优势是 Git 优先设计，每次 AI 交互都作为 Git 操作处理。支持大量最新模型，还维护权威 LLM 代码编辑排行榜（Aider Polyglot Leaderboard）。',
      pitfalls: ['需要自带 API key', '仅终端无 GUI', '学习曲线陡', '大型代码库编辑受限']
    },
    swot: { S: '开源、Git', W: '仅终端', O: '开源社区', T: '集成工具' },
    tags: ['开源', 'CLI', 'Git', '多模型', 'TerminalNative', 'SelfCoding', 'LocalLLM']
  },
  {
    id: 'cline',
    name: 'Cline',
    category: 'cli',
    subcategory: 'VS Code插件',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费 (API 自付)', models: 'Claude, OpenAI, Gemini 3, DeepSeek, AWS Bedrock, Azure, GCP, 本地模型', link: 'https://github.com/cline/cline' }
    ],
    freeQuota: '免费开源 (API 自付), Open Source Teams 至 2026 Q1 免费 (最多 10 席位)',
    contextWindow: '200K-400K+ (取决于模型)',
    chineseSupport: 3,
    pros: ['2026 新增 Skills 兼容性', '内置 Web 搜索和网页抓取', 'CLI 2.0 多代理并行执行', '免费 Kimi K2.5 集成', 'Claude Sonnet Computer Use', '官方 JetBrains 插件', 'Plan/Act 双模式企业审批', '终端优先直接执行命令', 'MCP 协议生态集成', 'VS Code/JetBrains 扩展', '自主执行多步骤任务', '人在环审批系统', '本地优先架构', '检查点回滚', '仓库内操作非旁观', '完全开源免费 Apache 2.0', '5M+ 开发者使用'],
    cons: ['超时问题特别是 Ollama', '偶尔生成错误代码', '长上下文分割问题', '运行时调试能力有限', '缺乏审批工作流审计追踪', '系统级集成较少', '边缘情况工作流失败', '用户评分 3.00/5'],
    bestFor: 'VS Code 用户、自主执行任务',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: 'VS Code 内的自主 AI 代理工具。2026 年重大更新：3.48.0 新增 Skills 兼容性和内置 Web 搜索功能；CLI 2.0 支持多代理并行执行和免费 Kimi K2.5；官方 JetBrains 插件正式发布。Plan/Act 双模式设计为企业级 AI 编程工具提供审批友好架构。MCP 生态集成持续扩展。人在环中的审批系统和本地优先架构是亮点，可自主执行多步骤任务。5M+ 开发者使用，完全开源免费。',
      pitfalls: ['需要自带 API key', '学习曲线', '超时问题特别是 Ollama', '用户评分 3.00/5']
    },
    swot: { S: 'VS Code 集成', W: '需 API', O: '插件生态', T: 'Copilot' },
    tags: ['免费', 'CLI', 'VS Code', '插件', 'Skills', 'WebSearch', 'JetBrains', 'MCP', 'ComputerUse']
  },
  {
    id: 'continue',
    name: 'Continue',
    category: 'cli',
    subcategory: '开源平台',
    developer: '开源社区',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费开源', models: '50+ 提供商 (OpenAI GPT-5, Anthropic Claude 4.5/Opus 4.6, Google Gemini 3, DeepSeek, Mistral, 本地模型)', link: 'https://continue.dev' }
    ],
    freeQuota: '完全免费开源 (本地模型无额外成本)',
    contextWindow: '取决于模型 (Claude 200K+, 自动上下文选择)',
    chineseSupport: 3,
    pros: ['MCP 协议支持扩展工具', '可分享自定义 AI 助手', 'Code Review Inbox PR 解决冲突', '远程 Agent 连接云端工作流', 'CLI 和 IDE 扩展双模式', 'Agent 模式自主文件读写', 'Instant Edit 无需流式 diff', '多标签页聊天并行任务', '本地助手配置工作区规则', 'GPT-5 Codex 完整支持', '最成熟开源平台 27.3K+ 星标', 'VS Code/JetBrains 扩展', '模型无关架构', 'Hub 分享自定义助手', '完全透明数据处理', '隐私优先可自托管'],
    cons: ['代码质量依赖所选模型', '本地模型需大量内存', '频繁更新功能出现消失', '复杂任务专业工具更有效', '配置复杂需自管 API', '环境变量配置灵活性有限', '扩展市场不如 Copilot', '文档社区仍在发展'],
    bestFor: '多 IDE 用户、自托管需求',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '最成熟的开源 AI 编码助手平台，2026 年 1 月发布 v1.5.34 版本，GitHub 星标增长至 27.3K+，获得 Y Combinator 和 Heavybit 投资支持。新增 Shareable Agents 可生成公开链接分享自定义 AI 助手，Code Review Inbox 提供 PR 管理界面一键解决冲突和审查意见。已从单纯的 AI 编码助手进化为支持自定义 AI 助手的开放平台。Hub 功能强大可创建和分享自定义 AI 助手。完全透明的数据处理和隐私优先设计是亮点。',
      pitfalls: ['配置较复杂', '代码质量依赖所选模型', '频繁更新功能不稳定']
    },
    swot: { S: '开源、多 IDE', W: '配置复杂', O: '开源生态', T: '商业产品' },
    tags: ['开源', 'CLI', '多IDE', 'MCP', 'AgentMode', 'CodeReview', 'Shareable']
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'OpenCode Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费 (API 自付)', models: '75+ LLM providers', link: 'https://github.com/opencode-ai/opencode' }
    ],
    freeQuota: '工具免费，API 自付',
    contextWindow: '支持自动压缩功能',
    chineseSupport: 3,
    pros: ['开源免费', '75+ LLM 提供商模型选择灵活', '终端原生 TUI 界面友好', 'MCP 协议扩展', 'LSP 集成代码智能', '会话管理和持久化', '自定义命令系统', '自动压缩长对话', '非交互模式脚本自动化', '隐私优先支持本地模型'],
    cons: ['需自行配置 API 密钥', '仅终端操作无图形界面', '社区规模较小', '文档资源有限'],
    bestFor: '注重隐私的开源 CLI 开发',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'OpenCode 支持 75+ 个 LLM 提供商，具有完整的 MCP 和 LSP 集成能力。终端原生 TUI 界面设计精良，会话管理和自动压缩功能实用。非交互模式支持脚本自动化，适合 CI/CD 集成。隐私优先架构支持本地模型部署。',
      pitfalls: ['需自行配置 API key', '社区较小文档有限', '大型项目性能待优化']
    },
    swot: { S: '开源、隐私、多模型', W: '社区较小', O: '开源 CLI 需求增长', T: 'Claude Code 能力' },
    tags: ['开源', 'CLI', '隐私', '多模型', 'MCP', 'LSP', 'TUI'],
    video: { src: './videos/opencode-cli.mp4'},
    radarChart: 'images/opencode.png'
  },
  {
    id: 'codex',
    name: 'GPT-5.x-Codex (原 Codex)',
    category: 'cli',
    subcategory: '代码生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'API 付费', models: 'GPT-5.2-Codex, GPT-5.1-Codex/Mini/Max, GPT-5-Codex (codex-mini-latest 已弃用)', link: 'https://openai.com/api' }
    ],
    freeQuota: '新用户试用额度',
    contextWindow: 'GPT-5.2: 400K (输出 128K) | GPT-4.1: 1M',
    chineseSupport: 3,
    pros: ['OpenAI 生态深度集成', '专为 Agent 编程长周期推理', '400K 超大上下文窗口', '可配置推理努力', '多模型变体 Mini/Max 适应需求', '缓存输入降低成本', '代码生成能力强', '多语言支持', 'API 稳定'],
    cons: ['原始 Codex 已整合不再独立存在', 'GPT-5.2-Codex 输出定价高 $14/1M', 'codex-mini-latest 已弃用', '上下文比 GPT-4.1 小 (400K vs 1M)', '需要付费 API 无永久免费', '国内访问受限'],
    bestFor: '代码生成、补全、多语言项目',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights: 'Codex 在 2026 年已完全进化为 GPT-5.x-Codex 系列。原始的独立 Codex 模型不再存在，其能力已被整合到 GPT-5.2、GPT-5.1 等新一代模型中。OpenAI 现在提供多个 Codex 变体：GPT-5.2-Codex (最智能专为长周期 Agent 任务优化)、GPT-5.1-Codex (可配置推理)、GPT-5.1-Codex-Mini (成本效益) 和 GPT-5.1-Codex-Max (长时间任务)。之前的 codex-mini-latest 模型已被标记为 Deprecated。上下文窗口达到 400K tokens (最大输出 128K)。',
      pitfalls: ['原始 Codex 已不再独立', 'GPT-5.2-Codex 输出定价高', 'codex-mini-latest 已弃用']
    },
    swot: { S: '代码生成、生态', W: '价格、访问', O: '企业级市场', T: '开源替代' },
    tags: ['推荐', 'CLI', 'OpenAI', '代码生成', '多语言', 'GPT-5', 'Agent'],
    video: { src: './videos/codex-cli.mp4'},
    radarChart: 'images/codex.png'
  },
  {
    id: 'goose',
    name: 'Goose',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Block (原 Square)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费开源 Apache-2.0', models: '20+ LLM: Anthropic Claude, OpenAI GPT-5/o3, Google Gemini, xAI Grok-4, Groq 免费模型, Ollama 本地, Azure, AWS Bedrock, Mistral, OpenRouter', link: 'https://github.com/block/goose' }
    ],
    freeQuota: '本地模型完全免费 | Tetrate $10 首次免费 | Groq 免费开源模型',
    contextWindow: 'xAI Grok-4: 131K | Claude Copilot: 200K | Gemini CLI: 1M',
    chineseSupport: 3,
    pros: ['Block 公司（Square 母公司）开发支持', '30.2K GitHub 星标', 'Session Management（会话管理，支持多会话切换、导入导出、会话搜索）', 'Desktop + CLI 双模式，支持多模型配置', 'Rust 58.3% + TypeScript 33.4% 构建', '完全本地运行', '开源 AI 代理框架（Apache-2.0 许可）'],
    cons: ['严重依赖工具调用不支持受限', '本地模型需额外配置下载', '默认 4096 上下文可能不足', 'o1-mini/o1-preview 不支持', '免费模型性能不如付费', '缺乏企业级支持服务', '某些提供商需预配置 AWS/Azure 凭证', '配置复杂', '生态较新'],
    bestFor: '本地部署、隐私优先用户',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: 'Block 公司在 2025-2026 年大力投入的开源 AI Agent 项目。与 Claude Code (最高 $200/月) 不同，Goose 完全免费且开源。项目采用 Rust 构建，支持本地优先的隐私保护方案。2026 年 1 月达到 27k+ 星标，2 月初突破 30k 星标，社区活跃度极高。最新版本 v1.23.2 (2026-02-06) 引入会话分支等新功能。核心优势在于其可扩展性和多模型支持，特别适合需要隐私保护和成本控制的企业开发者。支持 CLI Pass-through 可使用现有 Claude Code/ChatGPT/Cursor 订阅。',
      pitfalls: ['需要配置环境', '生态较新', '严重依赖工具调用能力', '本地模型需额外配置']
    },
    swot: { S: '开源、本地', W: '生态新', O: '隐私市场', T: '云端工具' },
    tags: ['开源', 'CLI', '本地', 'Block', 'Rust', 'MCP', 'MultiModel', 'SessionForking']
  },
  {
    id: 'openhands',
    name: 'OpenHands',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'OpenHands Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费开源 | Cloud Individual 免费 | Cloud Growth $500/月起', models: 'Claude Sonnet 4.5/Opus 4.1, GPT-5, DeepSeek V3.2/R1, Qwen3, OpenHands LM 自研 (128K), 本地模型 Ollama', link: 'https://github.com/OpenHands/openhands' }
    ],
    freeQuota: '开源版完全免费 | Cloud Individual 每日 10 次对话',
    contextWindow: 'OpenHands LM: 128K | 兼容模型最高 400K',
    chineseSupport: 3,
    pros: ['67.7K+ GitHub 星标', '468+ 贡献者活跃开发', '模型无关架构自由切换', 'MCP 服务器支持扩展工具', '企业级功能完整 RBAC SAML/SSO', '本地运行支持 AMD 合作', 'OpenHands Index 基准测试体系', '87% bug 同日修复率', '最新版本 1.12.0 (2026-02-09)', '开源 AI 编码助手', '充当全能软件开发者', '修改代码运行命令', '浏览网页调用 API', '综合界面聊天工作区 Jupyter 浏览器终端'],
    cons: ['CLI 模式稳定性问题', '浏览器功能 CLI 下受限', 'CLI 提示词未优化', '社区讨论热度相对较低', 'Individual Cloud 每日限制 10 次', '学习曲线陡', '需要配置'],
    bestFor: '开源用户、多模型切换',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights: '开源 AI 编码助手，综合界面强大包含聊天、工作区、Jupyter、浏览器、终端。GitHub 星标达到 67.7K+，468+ 贡献者活跃开发。最新版本 1.12.0 (2026-02-09)。模型无关架构可自由切换，企业级功能包括 RBAC 权限控制。87% bug 同日修复率。',
      pitfalls: ['需要配置环境', '学习曲线较陡', 'CLI 模式稳定性问题', 'Individual Cloud 每日限制 10 次']
    },
    swot: { S: '开源、综合界面', W: '学习曲线', O: '开源社区', T: '商业产品' },
    tags: ['开源', 'CLI', '多模型', '综合', 'OpenHandsLM', 'MCP', '企业级', 'RBAC']
  },

  // ============= LLM (14个) =============
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
      insights: 'Claude 4.5 Sonnet 是目前最均衡的编程模型，代码能力极强，推理稳定，多模态能力显著提升。Opus 推理能力最强但价格较高，Haiku 快速响应性价比高。Artifacts 功能可以实时生成可交互的网页应用，非常适合原型验证。主要用于方案设计、技术文档撰写和复杂代码重构，是编程场景的首选对话模型。',
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
      insights: 'GPT-5.2 系列是 OpenAI 最新旗舰，推理能力大幅提升，多模态支持最全面（文本、图片、音频、视频）。o3 是专门的推理增强模型，适合数学和逻辑密集任务。ChatGPT 生态最成熟，插件、GPTs 商店和 Canvas 协作编辑等功能丰富。DALL-E 3 集成于订阅内，一站式满足文本+图像需求。适合需要全能型 AI 助手的用户。',
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
      insights: 'Google 最新旗舰模型系列，最大亮点是 200 万 Token 的超长上下文窗口，处理大型代码库和长文档无压力。Gemini 3 Pro 推理能力显著提升，编码能力已接近 Claude 4.5。Deep Research 功能可自动撰写带引用的深度研究报告，调研场景极为强大。免费版 API 额度慷慨，非常适合长上下文场景和深度调研任务。',
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
      insights: 'DeepSeek R1 推理能力极强，在数学和编程基准测试中可与顶级模型媲美。API 价格远低于 GPT 和 Claude，成本效益是最大优势。完全开源可自托管，适合对数据隐私有要求的场景。V3 模型在日常对话和通用任务上表现出色。中文理解和生成能力在开源模型中领先。唯一不足是峰值期间 API 响应速度可能较慢。',
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
    cons: ['超长上下文价格陡增，大文档处理成本高', '英文场景表现不如 Claude/GPT 等海外模型'],
    bestFor: '中文场景、代码任务',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: '阿里推出的 Qwen3 系列是国产大模型的领军者，中文理解和生成能力出色。Qwen-Coder 代码专项版本在 HumanEval 等基准上表现优异。Qwen3-235B-A22B 采用 MoE 架构，推理和长上下文能力显著增强。生成中文图片、海报等内容效果好。开源版本可自由部署，商业化友好。超长上下文价格陡增是主要短板。',
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
    cons: ['极复杂推理和多步骤任务表现弱于 Claude/GPT', '英文内容生成质量不如中文'],
    bestFor: '前端开发、完整 demo、Agent 场景',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: '智谱 AI 推出的 GLM-4.7 系列性价比极高，前端代码生成的审美和完整度令人惊喜。价格在国产大模型中非常有竞争力，适合预算敏感的场景。支持联网搜索、代码执行、图像理解等多模态能力。清言（ChatGLM）对话体验流畅，智能体平台功能不断完善。极复杂推理任务上与 Claude/GPT 有差距，但日常使用绰绰有余。',
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
      insights: '月之暗面推出的 Kimi K2.5 长文档处理能力是核心亮点，20 万字长文一次读入，摘要和问答质量高。中文对话体验流畅自然，回答风格讨喜。探索版功能支持深度搜索和多步骤推理。免费版额度相对慷慨，日常使用基本够用。适合长文档阅读、论文总结、合同审阅等需要处理大量文本的场景。',
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
    cons: ['知名度和社区生态不如 GPT/Claude 等头部产品', '极复杂推理任务表现有提升空间'],
    bestFor: '多语言项目、高频 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'MiniMax 的 M2.1 模型在多语言能力和后端代码生成上表现不错，性价比在国产模型中极具竞争力。语音合成技术是其独特优势，海螺 AI 的语音克隆和 TTS 能力业界领先。支持 API 和网页两种使用方式，接入灵活。适合需要语音+文本多模态能力的应用场景，以及对成本敏感的 API 调用场景。',
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
    cons: ['长上下文使用时按档位涨价，成本不够透明', '深度推理和复杂编程能力不如顶级模型'],
    bestFor: '前端开发、Bug 修复',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '字节跳动旗下的 AI 对话助手，背靠豆包大模型。日常对话体验流畅，回答风格活泼接地气。与抖音、飞书等字节生态深度集成，办公场景实用性强。支持联网搜索、图片理解、文档处理等多模态功能。免费使用且无需复杂注册，入门门槛极低。适合日常问答和轻量级办公辅助，深度推理和编程任务建议用更专业的模型。',
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
      insights: 'xAI 的旗舰模型 Grok-4 推理能力显著提升，号称「地球上最聪明的 AI」在多项基准中领先。最大差异化优势是实时接入 X (Twitter) 数据，时事和热点话题回答极为及时。内容政策相对宽松，对创意写作限制少。与 X Premium 捆绑订阅，已有 X 会员的用户性价比高。适合需要实时信息和开放内容政策的场景。',
      pitfalls: ['需要 X Premium 订阅', '生态仍在发展中']
    },
    swot: { S: '实时信息、推理', W: '生态新', O: 'X 整合', T: 'GPT/Claude' },
    tags: ['LLM', 'xAI', '实时', '推理']
  },

  // ============= 多模态 (17个) =============
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
    pros: ['艺术风格质量业界领先，光影和构图极其出色', '社区生态丰富，海量风格模板和提示词库', 'V6.1 版本细节表现大幅提升', '支持图片混合、风格迁移等高级功能', '生成速度快，标准模式约 30 秒出图'],
    cons: ['需要 Discord 使用，门槛较高', '价格较高（$10-60/月）'],
    bestFor: '艺术创作、概念设计',
    funRanking: '夯夯',
    personalExperience: { rating: 5, insights: '艺术风格最强的 AI 图像生成工具，V6.1 版本在细节、光影和构图上达到了新高度。通过 Discord 使用的方式门槛较高，但社区生态极其丰富，大量风格模板和提示词可直接复用。适合需要高质量艺术风格图像的设计师和创意工作者，不适合需要快速迭代的场景。', pitfalls: ['需要 Discord', '提示词工程学习成本高'] },
    swot: { S: '艺术质量', W: 'Discord 依赖', O: '创意市场', T: '免费替代' },
    tags: ['图像', '艺术', 'Discord']
  },
  {
    id: 'dalle',
    name: 'GPT-5 图像生成',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'ChatGPT Plus 内含', models: 'GPT-5 (原生图像) + DALL-E 4', link: 'https://openai.com/index/introducing-5-image-generation/' }
    ],
    freeQuota: 'ChatGPT Free 有限额度',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['GPT-4o 原生图像生成，自然语言描述即可出图', '文字渲染能力业界最强，海报和配图利器', '支持对话式多轮迭代修改图像', '安全过滤严格，商用风险低', '与 ChatGPT 深度集成，零学习成本', '支持图像编辑、局部重绘和风格转换'],
    cons: ['需要 ChatGPT Plus 订阅（$20/月）获得完整体验', '艺术风格偏保守，创意表现力不如 Midjourney', '免费用户额度极有限'],
    bestFor: '与 ChatGPT 配合使用，快速出图',
    funRanking: '夯夯',
    personalExperience: { rating: 4.5, insights: 'GPT-4o 原生图像生成能力是 2025 年的重大升级，告别了调用外部 DALL-E 模型的割裂感。现在可以在对话中直接描述需求生成图像，支持多轮迭代修改，体验流畅自然。文字渲染能力仍然是业界最强。吉卜力风格等创意应用一度引爆社交媒体。对于需要快速、便捷出图的用户来说，这是最好的选择。', pitfalls: ['免费额度少', '风格偏保守', '高峰期可能需排队'] },
    swot: { S: 'ChatGPT 集成、文字渲染', W: '订阅制、风格保守', O: 'OpenAI 生态垄断', T: 'Midjourney、FLUX 品质追赶' },
    tags: ['推荐', '图像', 'OpenAI', '集成', '文字渲染']
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
    pros: ['完全开源免费，无使用次数限制', '本地部署隐私安全，无内容审核', 'LoRA/ControlNet 等扩展生态极其丰富', '可训练专属风格模型，定制化能力最强', 'ComfyUI 工作流支持复杂图像处理流水线'],
    cons: ['需要本地 GPU 算力，配置门槛高', 'ComfyUI 工作流学习曲线陡峭'],
    bestFor: '本地部署、定制需求',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '开源生态最完善的 AI 图像生成工具，SD3.5 和 SDXL 模型质量已接近商业工具。本地部署完全免费且无审核限制，LoRA 微调可训练专属风格。但上手门槛高，需要配置 Python 环境和 GPU，ComfyUI 工作流学习曲线陡峭。适合有技术背景、需要高度定制化的用户。', pitfalls: ['需要 GPU', '环境配置复杂'] },
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
      insights: '国内最成熟的 AI 图像编辑工具，美颜、背景替换、风格转换等功能开箱即用。移动端体验极佳，操作流畅直觉化，完全不需要设计基础。AI 消除和扩图功能实用性强，处理产品图和社交媒体配图效率极高。免费版功能已经很够用，VIP 价格也很亲民。适合电商、社交媒体运营等需要大量图片处理的场景。',
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
    freeQuota: '需 ChatGPT Plus/Pro 订阅',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['电影级质感，物理模拟业界领先', '支持最长 60 秒高质量视频', 'Sora 2 同步音频和角色客串功能', '支持文生视频、图生视频、视频延展', '迪士尼品牌角色集成', '画面一致性和运动连贯性顶级'],
    cons: ['需 ChatGPT Plus/Pro 订阅（$20-200/月）', '生成速度较慢，复杂场景需数分钟', '部分地区不可用'],
    bestFor: '电影级视频创作、专业内容制作',
    funRanking: '夯夯',
    personalExperience: { rating: 4, insights: 'OpenAI 的视频生成旗舰，Sora 2 在画质和动作连贯性上达到业界顶级水平。支持文生视频、图生视频、视频延展等多种模式。同步音频和角色客串是独特亮点。但价格门槛高，需要 ChatGPT Plus 或 Pro 订阅。生成速度偏慢，复杂场景需要耐心等待。适合追求最高画质的专业内容创作者。可灵在性价比上更友好。', pitfalls: ['需付费订阅', '生成速度慢', '部分地区不可用'] },
    swot: { S: '质量顶级、OpenAI 品牌', W: '价格高、速度慢', O: '影视市场', T: '可灵、Runway 竞争' },
    tags: ['视频', 'OpenAI', '电影级', '专业']
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
    pros: ['动作连贯性和物理真实感业界领先', '每日免费赠送积分，日常使用零成本', '中文提示词理解准确', '支持 1080P 高清视频输出', '运镜控制和场景切换能力强'],
    cons: ['单次生成时长限制（最长 10 秒）', '海外访问速度较慢，需要中国网络环境'],
    bestFor: '短视频创作、动作连贯',
    funRanking: '夯夯',
    personalExperience: { rating: 5, insights: '快手旗下的 AI 视频生成工具，动作连贯性和物理真实感在国产工具中领先。可灵 2.0 支持 1080P 高清输出，运镜控制和场景切换能力强。每日免费赠送积分足够日常使用，性价比极高。中文提示词理解准确，特别适合国内内容创作者。短视频和社交媒体内容制作的首选国产工具。', pitfalls: ['时长有限', '海外访问慢'] },
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
      insights: '字节跳动旗下的视频编辑神器，AI 功能全面且易用。智能字幕识别准确率极高，一键生成字幕省去大量手工时间。智能配音、AI 特效、自动卡点等功能让视频制作门槛大幅降低。与抖音深度集成，模板和素材库极其丰富。移动端和桌面端体验一致，随时随地可以编辑。国内短视频创作者的标配工具，免费版功能已非常强大。',
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
    pros: ['文字/图片均可生成 3D 模型，上手简单', '支持 PBR 材质和多种格式导出（GLB/FBX/OBJ）', 'Meshy-4 几何细节和纹理质量显著提升', '免费版有月度生成额度'],
    cons: ['复杂场景和精细模型质量仍有差距', '免费版生成速度较慢，需排队等待'],
    bestFor: '快速 3D 原型',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '目前最易用的 AI 3D 模型生成工具，支持文字描述和图片两种方式生成 3D 模型。Meshy-4 版本在几何细节和纹理质量上有显著提升，支持 PBR 材质导出。适合游戏开发、建筑可视化等场景的快速原型制作。免费版每月有生成额度，专业版 $20/月性价比不错。', pitfalls: ['质量有限', '免费版排队'] },
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
    pros: ['中文提示词理解最佳', '单张图片即可生成 3D 模型', '腾讯生态集成潜力大', '持续快速迭代，版本更新频繁'],
    cons: ['生态和社区相比 Meshy 仍较年轻', '导出格式和工作流集成有待完善'],
    bestFor: '中文 3D 创作',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '腾讯推出的 AI 3D 生成工具，对中文提示词的理解在同类工具中最好。混元 3D 2.0 支持从单张图片生成高质量 3D 模型，纹理细节和几何精度持续提升。作为腾讯生态的一部分，与微信小程序、QQ 等平台的集成潜力大。目前仍在快速迭代中，适合关注国产 3D 生成能力发展的开发者。', pitfalls: ['生态较新', '导出格式有限'] },
    swot: { S: '中文', W: '生态新', O: '国内市场', T: '海外工具' },
    tags: ['3D', '国产', '腾讯']
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'llm',
    subcategory: '内容生成',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: 'Gemini', link: 'https://notebooklm.google.com' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['PPT/视频/音频生成', '汇报材料强', '完全免费', '支持 9 种输出格式', '音频概述功能可将文档变为播客式对话', '支持多份资料交叉引用分析'],
    cons: ['功能聚焦于资料整理和汇报生成，不支持通用对话', '上传资料有数量和大小限制'],
    bestFor: '汇报材料制作',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '汇报材料神器！Google 出品，完全免费。支持 9 种输出格式（PPT、视频、音频、文档等），从原始资料到成品汇报材料的效率提升巨大。音频概述功能可以把文档变成播客式对话，通勤时听特别方便。是职场人士制作汇报材料和学习总结的必备工具。上传多份资料后可交叉引用分析，洞察力强。',
      pitfalls: ['功能较专一', '资料上传有限制']
    },
    swot: { S: '汇报材料、免费', W: '功能单一', O: '办公市场', T: '专业软件' },
    tags: ['推荐', '免费', '汇报', 'Google']
  },

  // ============= Agent 平台 (8个) =============
  {
    id: 'qinglizi',
    name: '氢离子',
    category: 'llm',
    subcategory: '垂直领域',
    developer: '氢离子团队',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/订阅', models: '医学模型', link: 'https://qinglizi.com' }
    ],
    freeQuota: '有免费额度',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: ['医学专业 AI，低幻觉高循证', '中文医学知识库覆盖面广', '标注证据等级和参考文献', '支持症状分析、用药查询、报告解读'],
    cons: ['垂直领域，仅限医学场景', '不能替代专业医生诊断'],
    bestFor: '医学问题咨询',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '国内医学垂直领域最专业的 AI 工具，低幻觉和高循证是核心优势。回答基于医学文献和临床指南，标注证据等级和参考文献，可信度远高于通用 AI。支持症状分析、用药查询、检查报告解读等场景。中文医学知识库覆盖面广，对罕见病和中医药也有不错的支持。适合医疗从业者辅助决策和普通用户健康咨询，但不能替代专业医生诊断。',
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
    pros: ['无代码可视化搭建，零门槛上手', '插件生态丰富，集成能力强', '与飞书/微信等国内平台深度集成', '工作流编排支持条件分支和循环', '免费额度慷慨'],
    cons: ['极复杂多步骤工作流稳定性有待提升', '对海外服务集成不如 n8n 等平台丰富'],
    bestFor: '日程辅助、信息收集、工作流自动化',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '字节跳动推出的 AI Bot 构建平台，无代码可视化搭建智能体是最大亮点。插件市场丰富，可快速集成搜索、绘图、数据分析等能力。工作流编排支持条件分支和循环，能构建相当复杂的自动化流程。与飞书、微信等国内平台集成便利，适合企业内部自动化场景。免费额度慷慨，入门门槛极低。', pitfalls: ['复杂流程受限', '海外服务集成弱'] },
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
    pros: ['完全开源，可自托管保障数据安全', '可视化工作流编排，支持复杂流程', '支持几乎所有主流 LLM 接入', '社区活跃，模板和插件丰富', 'Docker 一键部署，上手快'],
    cons: ['自托管需要服务器资源和运维能力', '高并发场景下性能调优门槛较高'],
    bestFor: '自托管、复杂工作流',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '最受欢迎的开源 LLMOps 平台，可自托管保障数据隐私。可视化工作流编排能力强大，支持 RAG、Agent、文本生成等多种应用类型。支持接入 OpenAI、Claude、本地模型等几乎所有主流 LLM。社区活跃，插件和模板资源丰富。Docker 一键部署简单，但生产环境配置需要一定运维经验。适合有自托管需求的团队和企业。', pitfalls: ['需要自己部署', '运维成本'] },
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
    pros: ['AI Agent 概念先驱，社区影响力巨大', '自主任务分解和执行能力', '平台版提供可视化界面和模板', '开源免费，学习 Agent 机制的好工具'],
    cons: ['稳定性一般，复杂任务易偏离目标', '需要较多调试和人工干预'],
    bestFor: '实验性自主任务',
    funRanking: '夯',
    personalExperience: { rating: 3, insights: 'AI Agent 概念的开创者，首次实现了让 AI 自主分解目标、规划步骤并执行任务。AutoGPT 平台版提供可视化界面和预置 Agent 模板，降低了使用门槛。但自主执行的不可控性仍是核心挑战，复杂任务容易陷入循环或偏离目标。作为概念验证和学习 Agent 机制的工具很有价值，生产环境建议用更成熟的框架。', pitfalls: ['稳定性一般', '复杂任务易失控'] },
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
    pros: ['生态最完善，文档和教程资源极其丰富', 'LangGraph 有状态 Agent 编排能力强大', 'LangSmith 提供专业的调试追踪工具', '支持几乎所有 LLM 和向量数据库'],
    cons: ['框架抽象层较多，学习曲线陡峭', 'API 变化频繁，需持续关注版本更新'],
    bestFor: '开发者自建 Agent',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '最流行的 LLM 应用开发框架，提供了从 RAG 到 Agent 的完整工具链。LangGraph 子项目专注于有状态多步骤 Agent 编排，是构建复杂 Agent 的首选。LangSmith 平台提供调试、追踪和评估能力。但框架抽象层较多，新手学习曲线陡峭，且 API 变化频繁需要持续关注版本更新。适合有 Python 基础的 AI 应用开发者。', pitfalls: ['需要编程能力', 'API 变化频繁'] },
    swot: { S: '灵活、社区', W: '学习曲线', O: '开发者市场', T: '低代码平台' },
    tags: ['开源', 'Agent', '框架', '开发者']
  },
  {
    id: 'nanobanana',
    name: 'Nano Banana',
    category: 'multimodal',
    subcategory: '图表生成',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费', models: 'Gemini', link: 'https://nanobanana.google' }
    ],
    freeQuota: '免费',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['文字描述即可生成专业技术图表', '支持架构图、流程图、ER 图等多种类型', '完全免费，无需注册', '排版和配色自动优化，开箱即用'],
    cons: ['功能专注于图表生成，不支持其他场景', '复杂图表的布局和细节定制能力有限'],
    bestFor: '技术文档配图',
    funRanking: '夯',
    personalExperience: { rating: 4, insights: '专注于 AI 生成架构图和流程图的轻量工具，输入文字描述即可生成专业的技术图表。支持系统架构图、流程图、ER 图等多种图表类型，排版和配色自动优化。完全免费使用，无需注册。生成速度快，适合技术方案评审和文档配图。但定制化能力有限，复杂图表建议作为初稿再手动调整。', pitfalls: ['功能专一', '定制能力有限'] },
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
    pros: ['回答标注信息来源，可信度高', 'Pro Search 自动分解复杂问题深度搜索', '支持多模态搜索（文件、图片）', '免费版功能实用，日常调研够用', '搜索结果时效性强，接近实时信息'],
    cons: ['代码生成和技术推理能力不如专用编程助手', '深度分析能力不如 Claude/GPT 等对话模型'],
    bestFor: '日常调研、实时信息查询、信息 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'AI 搜索引擎的标杆产品，每个回答都标注信息来源和引用链接，可信度远高于普通 AI 对话。Pro Search 会自动分解复杂问题，逐步搜索后综合答案，调研效率极高。支持上传文件和图片进行多模态搜索。免费版每天有一定的 Pro Search 次数，日常调研够用。最适合需要快速验证信息、做竞品调研和技术选型的场景。',
      pitfalls: ['代码能力一般', '深度分析弱于对话模型']
    },
    swot: { S: '搜索、引用', W: '代码弱', O: '调研市场', T: '传统搜索' },
    tags: ['推荐', '搜索', 'Agent', '调研', '引用']
  },

  // ============= 新增 AI IDE/Coding (5个) =============
  {
    id: 'devin',
    name: 'Devin',
    category: 'ide',
    subcategory: '自主AI工程师',
    developer: 'Cognition Labs',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$500/月(团队)', models: 'Claude Sonnet 4.5, 自研Agent系统', link: 'https://devin.ai' }
    ],
    freeQuota: '无免费版',
    contextWindow: '取决于模型',
    chineseSupport: 2,
    pros: ['首个自主AI软件工程师，可独立完成编程任务', '端到端任务执行：从需求理解到代码提交', '支持部署、调试、Bug修复完整流程', '基于 Claude Sonnet 4.5 重构后性能提升 12%', '规划能力提升 18%，并行工具执行效率高', 'SWE-bench 基准测试表现优异'],
    cons: ['价格极高（$500/月）', '复杂任务仍需人工监督', '上下文窗口接近极限时会走捷径', '不适合所有类型的开发任务', '中文支持弱'],
    bestFor: '自主化开发任务、端到端功能实现、Bug 修复自动化',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'Cognition Labs 打造的首个自主 AI 工程师，2025 年基于 Claude Sonnet 4.5 重构后性能大幅提升。可独立完成从需求分析到代码部署的完整流程，但价格极高（$500/月），更适合企业团队。存在"上下文焦虑"问题——接近上下文窗口极限时会主动走捷径。',
      pitfalls: ['价格极高不适合个人', '复杂任务需监督', '上下文焦虑问题']
    },
    swot: { S: '自主开发、端到端', W: '价格极高', O: '企业自动化', T: 'Claude Code Agent' },
    tags: ['自主Agent', '企业级', '端到端', 'Claude']
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    category: 'ide',
    subcategory: 'AI应用构建器',
    developer: 'StackBlitz',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$20/$50/$100/月', models: 'Claude, GPT-5, Gemini', link: 'https://bolt.new' }
    ],
    freeQuota: '免费版有限 token',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['浏览器内全栈开发，零配置即开即用', '基于 WebContainer 技术，无需本地环境', '支持 React/Next.js/Vue/Svelte 等主流框架', '一键部署到 Netlify/Vercel', '实时预览和热更新', '支持多种 AI 模型切换'],
    cons: ['复杂后端逻辑支持有限', '大型项目性能下降', '依赖浏览器环境', 'Token 消耗较快'],
    bestFor: '快速原型、全栈 Web 应用构建、MVP 验证',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'StackBlitz 推出的 AI 全栈应用构建器，基于 WebContainer 技术在浏览器内实现完整开发环境。最大优势是零配置即开即用，特别适合快速原型和 MVP 验证。支持多种前端框架和一键部署。',
      pitfalls: ['Token 消耗快需注意', '复杂后端逻辑受限', '大型项目体验下降']
    },
    swot: { S: '零配置全栈、即开即用', W: '后端受限', O: '快速原型市场', T: 'Replit、Lovable' },
    tags: ['推荐', '免费', '全栈', '零配置', '浏览器']
  },
  {
    id: 'v0',
    name: 'v0',
    category: 'ide',
    subcategory: 'AI UI生成器',
    developer: 'Vercel',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费($5额度)/$20月(Premium)/$30用户月(Team)', models: 'v0-1.5-md/lg, GPT-5, AutoFix自研模型', link: 'https://v0.app' }
    ],
    freeQuota: '免费版 $5 额度',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['生成生产级 React/Next.js 代码', 'Vercel 一键部署', '自研 Composite Model 架构（RAG + LLM + AutoFix）', 'Figma 导入支持（Premium）', '自然语言迭代优化组件', 'AutoFix 模型自动修复错误，速度比 GPT-4o-mini 快 10-40 倍'],
    cons: ['仅输出 React/Next.js 代码', '依赖 Tailwind CSS', '不生成后端逻辑', '复杂交互处理受限', '代码质量偶尔不稳定'],
    bestFor: 'UI 快速原型、React 组件生成、Landing Page',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'Vercel 的 AI UI 生成器，生成最干净的 React/Next.js 代码。2025 年推出自研 Composite Model 架构，结合 RAG、LLM 和自训练 AutoFix 模型。集成 GPT-5 作为底层模型。适合 UI 快速原型，但全栈应用建议用 Lovable 或 Bolt。',
      pitfalls: ['仅限 React/Next.js', '不含后端逻辑', '复杂 UI 需手动调整']
    },
    swot: { S: 'React UI 最强、Vercel 集成', W: '仅前端', O: '前端开发市场', T: 'Bolt.new 全栈' },
    tags: ['推荐', 'React', 'Next.js', 'Vercel', 'UI生成']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'ide',
    subcategory: 'AI应用构建器',
    developer: 'Lovable (原 GPT Engineer)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$20/$50/$200/月', models: 'Claude, GPT-5', link: 'https://lovable.dev' }
    ],
    freeQuota: '免费版有限使用',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['全栈应用构建（前端 + 后端 + 数据库）', '原生 Supabase 集成（认证、数据库、存储）', '支持 GitHub 同步和版本控制', '自然语言驱动的迭代开发', '内置部署到 Lovable 域名或自定义域名', '从 Figma 设计稿生成代码'],
    cons: ['复杂逻辑需手动介入', '生成代码质量参差不齐', '大型项目扩展性受限', 'Token 消耗较快'],
    bestFor: '全栈 Web 应用快速构建、非技术人员建站',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '原名 GPT Engineer，是全栈 AI 应用构建器。最大亮点是原生 Supabase 集成，可以直接生成带认证、数据库和存储的完整应用。支持 GitHub 同步。适合快速构建 MVP 和内部工具。',
      pitfalls: ['复杂逻辑需手动调整', '代码质量不稳定', 'Token 消耗注意控制']
    },
    swot: { S: '全栈 + Supabase 集成', W: '代码质量不稳定', O: '非技术创业者', T: 'Bolt.new、Replit' },
    tags: ['全栈', 'Supabase', 'GitHub', 'Figma']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'Tabnine',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$12用户月(Dev)/$39用户月(Enterprise)', models: '多模型 + 自研模型 + 私有化部署', link: 'https://tabnine.com' }
    ],
    freeQuota: '免费版基础代码补全',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['零数据保留政策，隐私保护最强', '支持私有化部署（VPC/Air-gapped）', '可连接企业代码仓库训练定制模型', 'IP 保护：不使用非许可代码训练', 'IDE 覆盖率比 Copilot 更广', '企业级合规（SOC 2、GDPR）'],
    cons: ['代码生成创意性不如 Copilot', '免费版功能有限', '企业版价格较高', '市场份额被 Copilot 挤压'],
    bestFor: '企业隐私优先、合规要求严格的团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '企业级 AI 代码补全工具，最大优势是隐私保护：零数据保留、支持 Air-gapped 私有部署、不使用 GPL 代码训练。适合金融、医疗、国防等合规严格行业。但代码生成创意性和能力不如 Copilot。',
      pitfalls: ['代码生成不如 Copilot', '市场份额下降', '免费版功能有限']
    },
    swot: { S: '隐私、合规、私有部署', W: '代码生成能力', O: '企业合规市场', T: 'Copilot 市场份额' },
    tags: ['企业', '隐私', '合规', 'IDE', '私有部署']
  },

  // ============= 新增 AI CLI (1个) =============
  {
    id: 'warp',
    name: 'Warp',
    category: 'cli',
    subcategory: 'AI终端',
    developer: 'Warp',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费(~150请求/月)/$20月(Pro)/$40月(Turbo)/$200月(Lightspeed)', models: 'Claude Sonnet 4.5, Claude Haiku 4.5, GPT-5.2', link: 'https://warp.dev' }
    ],
    freeQuota: '免费版 ~150 AI 请求/月',
    contextWindow: '取决于模型',
    chineseSupport: 2,
    pros: ['自然语言转命令行指令', '智能错误分析和修复建议', 'Block-based 组织终端输出', 'Warp 2.0 Agentic 开发环境（Code + Agents + Terminal + Drive）', '400+ CLI 工具实时自动补全', 'SOC 2 Type 2 安全认证', '团队协作和分享功能'],
    cons: ['需要登录账号才能使用', '中文支持差（UI 仅英文，CJK 输入法有问题）', '不支持 Tmux', 'AI 功能需联网', '终端界面不适合代码审查'],
    bestFor: '终端重度用户、DevOps 工程师、命令行学习',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '首个 AI 原生终端，2025 年推出 Warp 2.0 Agentic 开发环境。自然语言转命令、错误分析是核心亮点。Block-based 输出组织让终端更可读。但需要登录账号是争议点，中文支持（CJK 输入法）存在问题。SOC 2 Type 2 安全认证值得信赖。',
      pitfalls: ['需要登录账号', '中文输入法问题', '不支持 Tmux']
    },
    swot: { S: 'AI 终端先行者、安全认证', W: '登录要求、中文差', O: 'DevOps 市场', T: '传统终端惯性' },
    tags: ['CLI', '终端', 'AI补全', 'SOC2', '团队协作']
  },

  // ============= 新增 LLM (4个) =============
  {
    id: 'llama',
    name: 'Llama 4',
    category: 'llm',
    subcategory: '开源大模型',
    developer: 'Meta',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费开源', models: 'Llama 4 Scout (17B激活/109B), Llama 4 Maverick (17B激活/400B)', link: 'https://llama.com' }
    ],
    freeQuota: '完全免费（开源部署）',
    contextWindow: '10M (Scout, 基于长度泛化) / 1M (Maverick)',
    chineseSupport: 3,
    pros: ['完全开源免费，可自由部署', 'Scout 模型 10M token 超长上下文', 'MoE 架构效率高（17B 激活参数）', '多模态支持（视觉+语言）', '社区生态庞大', '可本地部署保护隐私'],
    cons: ['EU 地区禁止使用（AI Act 监管）', '10M 上下文基于长度泛化非直接训练', '"开源"许可证存在使用限制争议', '基准测试表现存疑', '需要自行部署和维护', '国内访问 Meta 资源受限'],
    bestFor: '本地部署、隐私优先、长上下文处理',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'Meta 的开源旗舰模型。Llama 4 采用 MoE 架构，Scout 提供 10M token 超长上下文（但基于长度泛化非直接训练）。完全免费开源是巨大优势，但 EU 地区因 AI Act 被禁用引发争议。适合自部署和隐私敏感场景。',
      pitfalls: ['EU 禁止使用', '长上下文非直接训练', '需自行部署维护']
    },
    swot: { S: '开源免费、长上下文', W: 'EU 限制、部署门槛', O: '开源社区', T: 'DeepSeek 开源竞争' },
    tags: ['开源', '免费', 'Meta', 'MoE', '长上下文', '本地']
  },
  {
    id: 'mistral',
    name: 'Mistral Large 3',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'Mistral AI (法国)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$14.99月(Pro)/$24.99月(Team)', models: 'Mistral Large 3 (675B MoE), Ministral 3B/8B/14B', link: 'https://mistral.ai' }
    ],
    freeQuota: 'Le Chat 免费版可用',
    contextWindow: '256K (Large 3) / 128K-256K (Ministral)',
    chineseSupport: 3,
    pros: ['欧洲最强 AI（法国开发）', 'Large 3: 675B 总参数 MoE 架构，41B 激活参数', '开源开放权重（Apache License）', 'API 定价远低于 OpenAI/Anthropic', 'Le Chat Pro $14.99/月最便宜的订阅', 'Ministral 边缘模型可单 GPU 运行', '多模态支持', '无遥测模式保护隐私'],
    cons: ['中文能力不如国产模型', '生态不如 OpenAI/Google 成熟', '社区规模较小', '企业级功能还在发展中'],
    bestFor: '性价比优先、开源部署、欧洲合规场景',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '法国 Mistral AI 的旗舰模型。Large 3 是首个 MoE 架构开源旗舰（675B 总参数），性能对标 GPT-5 级别。Le Chat Pro 仅 $14.99/月，是最便宜的订阅方案。Ministral 3B/8B/14B 边缘模型可单 GPU 运行，成本极低。API 定价远低于竞品。',
      pitfalls: ['中文能力一般', '生态尚在发展', '复杂推理不如顶级模型']
    },
    swot: { S: '开源、性价比、欧洲', W: '中文弱、生态小', O: '欧洲合规市场', T: 'Llama、DeepSeek' },
    tags: ['开源', '性价比', '欧洲', 'MoE', 'API']
  },
  {
    id: 'yi',
    name: 'Yi-Lightning',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '零一万物 (01.AI)',
    logo: null,
    versions: [
      { type: 'CN', pricing: '$0.14/1M tokens', models: 'Yi-Lightning (MoE)', link: 'https://01.ai' },
      { type: 'Global', pricing: '$0.14/1M tokens', models: 'Yi-Lightning', link: 'https://platform.01.ai' }
    ],
    freeQuota: 'API 有免费额度',
    contextWindow: '16K',
    chineseSupport: 5,
    pros: ['推理速度极快（RTX 4090 200+ tokens/s, H100 500+）', '价格极低 $0.14/1M tokens', '完全开源 Apache 2.0 无商用限制', 'MoE 架构轻量高效', '可本地部署（2-4 H100 或消费级多 GPU）', '李开复创办，技术背书强'],
    cons: ['上下文窗口仅 16K 较短', '复杂推理不如顶级模型', '生态规模小', '更新频率不如 DeepSeek/Qwen'],
    bestFor: '实时推理、低延迟场景、成本敏感的边缘部署',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '零一万物的 Yi-Lightning 定位快速推理，推理速度极快（消费级 GPU 200+ tokens/s），价格极低。完全开源 Apache 2.0 可自由商用。但 16K 上下文窗口较短，复杂推理能力不如顶级模型。适合对速度和成本敏感的实时应用。',
      pitfalls: ['上下文窗口仅 16K', '复杂推理能力有限', '生态较小']
    },
    swot: { S: '速度快、价格低、开源', W: '上下文短、推理弱', O: '边缘部署', T: 'DeepSeek 竞争' },
    tags: ['国产', '开源', '低价', '快速', '边缘部署']
  },
  {
    id: 'ernie',
    name: 'ERNIE 4.5',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '百度',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费(消费者)/API极低价', models: 'ERNIE 4.5, ERNIE X1, ERNIE 5.0', link: 'https://yiyan.baidu.com' }
    ],
    freeQuota: '消费者完全免费（2025年4月起）',
    contextWindow: '128K',
    chineseSupport: 5,
    pros: ['消费者完全免费使用', 'ERNIE 4.5 综合评分 79.6 超越 GPT-4.5', 'X1 推理模型中文知识问答、文学创作强', 'API 定价极低（Turbo: ¥0.8/1M输入）', '百度搜索生态集成', '中文场景优化最佳之一'],
    cons: ['主要面向中国市场，海外访问受限', '英文能力不如国际顶级模型', '需 VPN 才能海外使用', '生态封闭程度高', 'ERNIE 5.0 刚发布功能待验证'],
    bestFor: '中文场景、百度生态用户、预算敏感',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '百度的 ERNIE 系列在中文场景表现优异。ERNIE 4.5/X1 已发布，消费者完全免费。API 定价极低，X1 中文知识问答和文学创作能力强。ERNIE 5.0 于 2025 年底发布，持续迭代中。但海外访问受限是最大短板。',
      pitfalls: ['海外访问受限', '英文能力一般', '生态相对封闭']
    },
    swot: { S: '中文强、免费、百度生态', W: '海外受限', O: '国内企业市场', T: 'DeepSeek 开源竞争' },
    tags: ['国产', '免费', '低价', '中文', '百度']
  },

  // ============= 新增多模态 (7个) =============
  {
    id: 'flux',
    name: 'FLUX',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Black Forest Labs',
    logo: null,
    versions: [
      { type: 'Global', pricing: 'Schnell免费开源/Dev非商用/Pro付费API', models: 'FLUX.1 Schnell/Dev/Pro, FLUX.2', link: 'https://bfl.ai' }
    ],
    freeQuota: 'Schnell 完全免费开源 (Apache)',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: ['Schnell 版本完全开源免费（Apache License）', '图像质量堪比 Midjourney', '文字渲染能力强', '支持本地部署（ComfyUI/WebUI）', 'FLUX.2 多语言理解', '社区生态活跃（最流行的开源图像模型）'],
    cons: ['Pro 版本需付费 API', '需要本地 GPU 算力运行', '中文提示词支持有限', '生成速度依赖硬件'],
    bestFor: '开源图像生成、本地部署、高质量AI艺术',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Black Forest Labs（Stable Diffusion 原班人马）打造的开源图像生成模型。Schnell 是首个真正超越 Midjourney 的开源模型。FLUX.2 进一步提升质量和多语言支持。配合 ComfyUI 本地部署是免费图像生成的最佳选择。',
      pitfalls: ['需要 GPU 算力', '中文提示词效果一般', 'Pro 版才有最佳质量']
    },
    swot: { S: '开源免费、质量高', W: '需算力', O: '开源图像社区', T: 'Midjourney 品牌' },
    tags: ['推荐', '开源', '免费', '图像', '本地', 'ComfyUI']
  },
  {
    id: 'runway',
    name: 'Runway Gen-3/Gen-4',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'Runway',
    logo: null,
    versions: [
      { type: 'Global', pricing: '$12/$28/$76/月', models: 'Gen-3 Alpha, Gen-4', link: 'https://runway.ml' }
    ],
    freeQuota: '免费试用 125 credits',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: ['视频质量业界领先', '支持文本/图像/视频多种输入', '精确的运动控制和镜头语言', 'Gen-4 几何一致性大幅提升', '专业影视制作工具集', '支持 4K 分辨率输出'],
    cons: ['价格较高', '免费额度极少', '生成时间较长', '中文支持弱', '国内访问受限'],
    bestFor: '专业视频创作、影视级内容生成',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'AI 视频生成领域的先驱和标杆工具。Gen-4 在几何一致性和运动控制上实现重大突破，画面质量接近专业影视级别。支持文生视频、图生视频、运动笔刷等多种创作模式，创意自由度高。Act-One 功能可以用真人表情驱动虚拟角色。但价格是同类产品中最高的，$12/月起步且额度有限。适合专业影视制作和高端内容创作。',
      pitfalls: ['价格高', '免费额度少', '国内访问受限']
    },
    swot: { S: '视频质量、专业工具', W: '价格高', O: '影视制作', T: 'Sora、可灵竞争' },
    tags: ['视频', '专业', '影视', '4K']
  },
  {
    id: 'pika',
    name: 'Pika',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'Pika Labs',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$8/$28/月', models: 'Pika 2.5', link: 'https://pika.art' }
    ],
    freeQuota: '免费版每日有限 credits',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['价格亲民入门门槛低', '生成速度快', '创意特效丰富（挤压、融化、爆炸等）', 'Pika 2.5 画质大幅提升', '易用性好适合初学者', '支持图片转视频'],
    cons: ['视频质量不如 Runway/Sora', 'Credit 计费系统复杂', '无原生音频', '精细控制能力有限'],
    bestFor: '社交媒体内容、创意短视频、AI 视频入门',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: 'AI 视频生成的平价之选，Pika 2.5 画质大幅提升，已接近 Runway 水平。独特的创意特效（挤压、融化、爆炸等）是差异化亮点，非常适合社交媒体吸睛内容。$8/月起的价格对预算有限的内容创作者极为友好。场景一致性和运动连贯性持续改善，性价比在视频生成工具中数一数二。适合社交媒体短视频和创意内容制作。',
      pitfalls: ['质量不如 Runway', 'Credit 计费复杂', '无原生音频']
    },
    swot: { S: '价格低、创意特效', W: '质量一般', O: '短视频市场', T: 'Runway、Sora' },
    tags: ['视频', '性价比', '创意', '社交媒体']
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Ideogram',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$8/$20/月', models: 'Ideogram 2.0/3.0', link: 'https://ideogram.ai' }
    ],
    freeQuota: '免费版每日有限生成',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['文字渲染能力业界最强', '图像中文字清晰准确', '价格亲民', 'Logo 和海报设计出色', '支持多种风格', '3.0 版本图像质量大幅提升'],
    cons: ['复杂场景偶有失真', '生成速度一般', '社区规模不如 Midjourney', '部分风格不够稳定'],
    bestFor: '含文字的图像设计、Logo、海报、社交媒体配图',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '文字渲染最强的 AI 图像生成工具，在图中生成清晰准确的文字是独一无二的优势。Ideogram 3.0 画质全面提升，风格多样性也明显增强。特别适合 Logo 设计、海报制作、社交媒体配图等需要文字元素的场景。免费版每天可生成约 10 张图，日常使用完全够用。价格亲民，$8/月专业版性价比高。是 Midjourney 和 DALL-E 之外的有力补充选项。',
      pitfalls: ['复杂场景偶有失真', '部分风格不稳定']
    },
    swot: { S: '文字渲染最强', W: '复杂场景', O: '设计市场', T: 'Midjourney 质量' },
    tags: ['图像', '文字渲染', '设计', 'Logo', '性价比']
  },
  {
    id: 'jimeng',
    name: '即梦 (Jimeng)',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: '字节跳动',
    logo: null,
    versions: [
      { type: 'CN', pricing: '免费/¥69月(年付)/¥79月', models: '即梦 3.0', link: 'https://jimeng.jianying.com' }
    ],
    freeQuota: '每日 80-100 积分（约数张图片）',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['中文提示词支持最佳', '支持中文字体直接生成', '国潮/小红书风格优化', '2K 高清输出', '12种电影级镜头运动', '表情迁移技术', '免费策略极友好（每日登录送积分）'],
    cons: ['海外版功能有限', '中文排版仍需优化', '高分辨率需较高硬件', '视频生成质量待提升'],
    bestFor: '中文图像/视频创作、国潮设计、社交媒体内容',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '字节跳动（剪映/星图团队）的 AI 创作平台，中文提示词支持最佳，直接生成中文字体是独特优势。即梦 3.0 海外版支持电影级画质和 2K 输出，质量已接近 Midjourney。每日登录送 80-100 积分的免费策略极为慷慨。支持图片生成、视频生成和图片编辑三大功能板块，功能全面性在国产工具中领先。',
      pitfalls: ['海外版功能有限', '中文排版还需优化', '视频质量一般']
    },
    swot: { S: '中文最强、免费友好', W: '海外受限', O: '国内创作市场', T: 'Midjourney 质量' },
    tags: ['推荐', '国产', '免费', '图像', '中文', '字节']
  },
  {
    id: 'suno',
    name: 'Suno',
    category: 'multimodal',
    subcategory: '音乐生成',
    developer: 'Suno',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$10/$30/月', models: 'Suno v4', link: 'https://suno.com' }
    ],
    freeQuota: '免费版每日有限 credits',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['完整歌曲生成（含人声和伴奏）', '60 秒内生成 90 秒以上完整歌曲', '人声质量接近真人', '4690 万月访问量（最受欢迎的 AI 音乐工具）', '支持多种音乐风格和语言', '操作极其简单'],
    cons: ['版权争议严重（唱片公司起诉）', '生成质量不稳定', '歌词偶有重复或脱节', '精细控制受限', 'Credit 不可累积', '可能生成侵权"相似曲"'],
    bestFor: '快速音乐创作、内容配乐、音乐灵感',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights: '最受欢迎的 AI 音乐生成工具，月访问量 4690 万。可在 60 秒内生成含人声的完整歌曲，操作极其简单。但面临 Sony/Universal/Warner 的版权诉讼，商用需谨慎。生成质量不稳定，需多次尝试。',
      pitfalls: ['版权诉讼风险', '商用需谨慎', '质量不稳定需多次尝试']
    },
    swot: { S: '生成完整歌曲、易用', W: '版权风险', O: '内容创作', T: '版权诉讼、Udio竞争' },
    tags: ['音乐', '人声', '创作', '版权风险']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'multimodal',
    subcategory: '语音合成',
    developer: 'ElevenLabs',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$5/$22/$99/$330/月', models: 'Eleven V3, Flash v2.5, Multilingual v2', link: 'https://elevenlabs.io' }
    ],
    freeQuota: '免费版 10,000 字符/月',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['语音质量业界最强（最接近真人）', 'Eleven V3 表情丰富的情感语音', '支持 74 种语言（含中文普通话）', '语音克隆功能强大', '音频配音翻译保留说话人特征', 'Flash v2.5 超低延迟（~75ms）', '语音隔离和背景降噪'],
    cons: ['价格较高（Credits 消耗快）', '实际项目预算需 3 倍预估', '多语言翻译未达专业水准', '部分声音将被弃用', '音乐生成功能一般（不如 Suno）'],
    bestFor: '专业配音、有声读物、视频旁白、多语言内容',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '语音合成领域的绝对标杆。Eleven V3 生成的情感语音堪称业界最强。支持 74 种语言含中文普通话。语音克隆和音频配音翻译是独特优势。但 Credits 消耗快，实际项目预算需按广告价 3 倍计算。',
      pitfalls: ['Credits 消耗快预算翻倍', '多语言翻译不够专业', '部分声音将被弃用']
    },
    swot: { S: '语音质量最强、多语言', W: '价格高', O: '配音市场', T: '开源 TTS 追赶' },
    tags: ['语音', '配音', '多语言', '克隆', '专业']
  },

  // ============= 新增 Agent 平台 (6个) =============
  {
    id: 'manus',
    name: 'Manus',
    category: 'agent',
    subcategory: '自主Agent',
    developer: 'Butterfly Effect (已被 Meta 收购)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '订阅制（具体定价待定）', models: 'Claude, Qwen (微调版)', link: 'https://manus.im' }
    ],
    freeQuota: '邀请制，等待名单近百万',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['首个通用 AI Agent，可自主完成复杂任务', '支持市场调研、编程、数据分析', '8 个月内年化收入超 $1 亿', '自然语言驱动的任务执行', '2025 年 12 月被 Meta 以 $20亿+ 收购'],
    cons: ['系统稳定性差（频繁崩溃和卡顿）', '高峰期性能严重下降', '常被验证码和付费墙阻挡', '上下文长度限制导致任务碎片化', 'Bug 多（空 ZIP、刷新循环等）', '非真正自主 Agent，复杂任务需人工干预', '被 Meta 收购后部分客户流失'],
    bestFor: '自动化调研、数据分析、内容生成',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '2025 年最火爆的 AI Agent 产品，等待名单近百万。中国团队开发后迁至新加坡，2025 年 12 月被 Meta 以 $20亿+ 收购。概念超前但稳定性堪忧，系统频繁崩溃、Bug 众多。MIT Technology Review 的评测也指出实际表现与宣传有差距。不建议专业业务使用。',
      pitfalls: ['稳定性极差', 'Bug 众多', '被 Meta 收购后前景不确定', '专业用途不推荐']
    },
    swot: { S: '概念创新、Meta 收购', W: '稳定性、Bug', O: 'Meta 生态整合', T: '用户信任危机' },
    tags: ['Agent', '自主', 'Meta', '调研', '不稳定']
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    category: 'agent',
    subcategory: '多Agent框架',
    developer: 'CrewAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费(50次/月)/$99月(Basic)', models: '多模型支持', link: 'https://crewai.com' }
    ],
    freeQuota: '免费版 50 次执行/月',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['多 Agent 协作框架（角色分工明确）', 'Python 原生支持', '可视化 Crew Studio 无代码构建', '支持自定义工具和 Agent', '开源核心 + 云端部署', '执行流程可观测'],
    cons: ['免费额度极少（50次/月）', '付费跳转极大（$99/月 Basic -> $6000/年）', '不支持按量付费', '学习曲线较陡', '文档和社区在建设中'],
    bestFor: '多 Agent 工作流编排、AI 自动化任务',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '多 Agent 协作框架，通过角色分工让多个 AI Agent 协同工作。Python 原生支持，Crew Studio 提供无代码可视化构建。开源核心可自托管。但免费额度极少（50次/月），付费方案价格跳跃大。',
      pitfalls: ['免费额度极少', '付费价格跳跃大', '学习曲线陡']
    },
    swot: { S: '多 Agent 协作、Python', W: '定价策略', O: 'AI 自动化市场', T: 'LangGraph 竞争' },
    tags: ['Agent', '多Agent', 'Python', '开源', '框架']
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'agent',
    subcategory: '工作流自动化',
    developer: 'n8n GmbH (德国)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '自托管免费/$20月(Cloud)/$50月(Pro)', models: '集成 OpenAI/Anthropic/Cohere 等', link: 'https://n8n.io' }
    ],
    freeQuota: '自托管完全免费 / Cloud 免费试用',
    contextWindow: '取决于集成模型',
    chineseSupport: 2,
    pros: ['自托管完全免费（fair-code 许可）', '400+ 集成连接器', '内置 AI Agent 构建器（记忆、工具、护栏）', '可视化工作流编辑器', '2025 年估值 $25 亿（C轮 $1.8 亿）', '支持自定义代码节点', '活跃的开源社区（GitHub 60K+ 星标）'],
    cons: ['中文界面不支持（仅英文）', '自托管需技术能力', '协作功能受限（自托管）', '复杂工作流调试困难', '企业级功能需付费'],
    bestFor: '工作流自动化、AI Agent 编排、企业集成',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '德国开发的工作流自动化平台，2025 年估值达 $25 亿。最大优势是自托管完全免费，400+ 集成连接器覆盖主流服务。内置 AI Agent 构建器可设计带记忆和工具的智能工作流。GitHub 60K+ 星标，社区极活跃。适合技术团队构建 AI 自动化流程。',
      pitfalls: ['不支持中文界面', '自托管需技术能力', '协作受限']
    },
    swot: { S: '自托管免费、400+集成', W: '中文缺失、技术门槛', O: 'AI 自动化爆发', T: 'Make.com、Zapier' },
    tags: ['推荐', '开源', '免费', '工作流', '自动化', '400+集成']
  },
  {
    id: 'openai-agents-sdk',
    name: 'OpenAI Agents SDK',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'OpenAI',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源免费（按 API 用量计费）', models: 'GPT-5, o1, o3 等 OpenAI 模型', link: 'https://github.com/openai/openai-agents-python' }
    ],
    freeQuota: 'SDK 免费，API 按量计费',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: ['OpenAI 官方出品，与 GPT 系列深度集成', '内置 Handoff 机制支持多 Agent 协作', '原生支持 Tool Use 和 Function Calling', '轻量级设计，核心概念少易上手', 'Tracing 内置调试追踪', '支持 Guardrails 安全护栏'],
    cons: ['仅支持 OpenAI 模型（不支持 Claude/Gemini）', '生态较新，社区资源不如 LangChain', 'Python 优先，其他语言支持有限', '复杂编排能力不如 LangGraph'],
    bestFor: 'OpenAI 生态下的 Agent 开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'OpenAI 2025 年发布的官方 Agent SDK，设计哲学是"简单但强大"。核心概念只有 Agent、Tool、Handoff、Guardrail 四个，上手极快。Handoff 机制让多 Agent 协作变得直观——Agent 之间可以自然地"交接"任务。内置 Tracing 对调试非常有帮助。但只支持 OpenAI 自家模型是最大限制。',
      pitfalls: ['仅限 OpenAI 模型', 'Python 为主', '生态还在建设中']
    },
    swot: { S: '官方出品、设计简洁', W: '模型锁定', O: 'OpenAI 生态', T: 'LangChain/CrewAI 竞争' },
    tags: ['Agent', '框架', 'OpenAI', '官方', 'Python']
  },
  {
    id: 'claude-agent-sdk',
    name: 'Claude Agent SDK',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'Anthropic',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源免费（按 API 用量计费）', models: 'Claude 4.5 Sonnet, Claude Opus 4.6', link: 'https://github.com/anthropics/claude-code-sdk-python' }
    ],
    freeQuota: 'SDK 免费，API 按量计费',
    contextWindow: '200K',
    chineseSupport: 3,
    pros: ['Anthropic 官方 Agent 开发框架', '基于 Claude Code 的成熟 Agent 能力', '支持 Tool Use、多轮对话、文件操作', '200K 超长上下文窗口', '代码理解和生成能力业界最强', 'Python 和 TypeScript 双语言支持', '与 Claude Code CLI 无缝集成'],
    cons: ['仅支持 Claude 模型', 'API 费用较高', '生态相比 LangChain 较新', '需要 Anthropic API Key'],
    bestFor: '构建代码智能体、复杂推理 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Anthropic 官方的 Agent SDK，底层能力与 Claude Code 一致。Claude 的代码理解和复杂推理能力在 Agent 场景中优势明显，特别适合构建需要深度代码分析和多步骤推理的智能体。200K 上下文窗口让 Agent 可以处理大型代码库。Python 和 TypeScript 双语言支持覆盖面广。',
      pitfalls: ['仅限 Claude 模型', 'API 费用注意控制', '文档持续完善中']
    },
    swot: { S: '代码能力最强、长上下文', W: '模型锁定、API 贵', O: 'AI 编码 Agent 市场', T: 'OpenAI Agents SDK' },
    tags: ['推荐', 'Agent', '框架', 'Claude', 'Anthropic', '官方']
  },
  {
    id: 'google-adk',
    name: 'Google ADK',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'Google',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源免费（按 API 用量计费）', models: 'Gemini 系列', link: 'https://google.github.io/adk-docs/' }
    ],
    freeQuota: 'SDK 免费，Gemini API 有免费额度',
    contextWindow: '2M（Gemini 2.5 Pro）',
    chineseSupport: 3,
    pros: ['Google 官方 Agent 开发框架', '支持 2M 超长上下文（Gemini 2.5 Pro）', '内置多 Agent 编排和任务委派', '与 Google 生态深度集成（搜索、地图等）', '支持 A2A 协议跨 Agent 通信', 'Gemini API 有慷慨免费额度', '支持流式响应和多模态输入'],
    cons: ['主要支持 Gemini 模型', '文档和社区仍在建设中', 'Python 优先', '部分功能需要 Google Cloud'],
    bestFor: '利用 Gemini 长上下文构建复杂 Agent',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: 'Google 2025 年发布的 Agent Development Kit，核心优势是 Gemini 的 2M 超长上下文——可以让 Agent 处理整个代码库或超长文档。支持多 Agent 编排和 A2A（Agent-to-Agent）协议。与 Google 搜索、地图等服务的集成是独特卖点。但框架成熟度不如 LangChain，生态还在早期。',
      pitfalls: ['主要绑定 Gemini', '生态较新', '部分功能依赖 Google Cloud']
    },
    swot: { S: '2M 上下文、Google 生态', W: '模型绑定、生态新', O: '长上下文 Agent 场景', T: 'LangGraph、OpenAI Agents' },
    tags: ['Agent', '框架', 'Google', 'Gemini', '长上下文', '官方']
  },

  // ============= MCP 工具 (14个+1) =============
  {
    id: 'context7',
    name: 'Context7',
    category: 'mcp',
    subcategory: 'AI增强',
    developer: 'Upstash',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: '无需LLM，独立文档服务', link: 'https://context7.com' }
    ],
    freeQuota: '完全免费',
    contextWindow: '按需查询',
    chineseSupport: 3,
    pros: ['零配置即可使用（远程服务）', '实时查询最新官方技术文档', '有效防止 LLM API 幻觉', '支持版本化文档查询', '上下文占用极低', '支持 Cursor / Claude Code 等主流 AI IDE', '覆盖主流编程语言和框架'],
    cons: ['仅支持已收录的库和框架', '查询结果依赖文档质量', '需要联网使用', '中文文档支持有限'],
    bestFor: '开发时实时查阅最新 API 文档、防止代码幻觉',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights: 'MCP Core 核心工具之一。零配置远程服务，每次编码都可能用到。最大价值是解决 LLM 编码时的"幻觉"问题——直接拉取官方最新文档而非依赖训练数据。上下文占用极低，建议所有 AI IDE 用户必装。',
      pitfalls: ['仅对已收录框架有效', '需要联网']
    },
    swot: { S: '零配置、防幻觉', W: '覆盖面有限', O: '成为 AI 编码标配', T: '各框架自建 MCP' },
    tags: ['推荐', 'MCP', '免费', '文档查询', '防幻觉', '零配置']
  },
  {
    id: 'playwright-mcp',
    name: 'Playwright MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'Microsoft',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，浏览器自动化服务', link: 'https://github.com/microsoft/playwright-mcp' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['微软官方维护，稳定可靠', '支持 Chromium、Firefox、WebKit 三大浏览器', '浏览器自动化：导航、点击、表单填写', '页面截图和视频录制', '支持无头模式和设备模拟', '高级配置：代理设置、网络控制、轨迹追踪', 'E2E 端到端测试完整支持', 'npx 一键启动，零依赖安装'],
    cons: ['上下文占用中等', '复杂场景配置较多', '无头模式部分功能受限', '大型页面操作较慢'],
    bestFor: 'Web 自动化测试、页面截图、爬取动态页面',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'MCP Core 核心工具之一。微软官方出品的浏览器自动化 MCP，功能远超简单的截图工具。支持完整的 E2E 测试流程：导航→操作→断言→截图。配合 AI IDE 使用可以自动化回归测试。推荐使用 --headless --caps=vision,pdf,testing 参数启动。',
      pitfalls: ['上下文占用中等', '复杂场景需仔细配置 capabilities']
    },
    swot: { S: '微软官方、功能全面', W: '上下文占用', O: 'AI 驱动测试自动化', T: 'Chrome DevTools MCP' },
    tags: ['推荐', 'MCP', '免费', '开源', '微软', 'E2E测试', '浏览器', '截图']
  },
  {
    id: 'firecrawl-mcp',
    name: 'Firecrawl MCP',
    category: 'mcp',
    subcategory: '数据工具',
    developer: 'Mendable / Firecrawl',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费(500次/月)/$19月(Hobby)/$49月(Standard)', models: '无需LLM，爬取服务', link: 'https://firecrawl.dev' }
    ],
    freeQuota: '免费 500 次爬取/月',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['智能网站全站爬取，无需 Sitemap', '自动转换为 LLM 友好的 Markdown 格式', '内置搜索和内容发现功能', '智能重试机制（可配置重试次数和延迟）', '积分消耗预警（可配置阈值）', '支持 JavaScript 渲染页面', '输出格式适配 RAG 流水线', '比 fetch 更适合深度爬取'],
    cons: ['免费额度有限（500次/月）', '需要 API Key', '大规模爬取成本较高', '部分网站反爬机制可能导致失败'],
    bestFor: '深度网站爬取、内容提取转 Markdown、RAG 数据准备',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: '比简单的 fetch MCP 更强大的爬取工具。最大优势是自动将网页转为 LLM-ready 的 Markdown 格式，非常适合 RAG 数据准备。智能重试和积分预警机制设计贴心。免费额度 500 次/月基本够用。建议与 fetch 配合：简单请求用 fetch，深度爬取用 Firecrawl。',
      pitfalls: ['注意积分消耗', '反爬严格的网站可能失败', '大规模爬取前先测试']
    },
    swot: { S: 'Markdown 转换、智能爬取', W: '付费门槛', O: 'RAG 数据管道', T: '免费替代方案' },
    tags: ['MCP', '爬取', 'Markdown', 'API']
  },
  {
    id: 'github-mcp',
    name: 'GitHub MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'GitHub (Microsoft)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，GitHub API 服务', link: 'https://github.com/github/github-mcp-server' }
    ],
    freeQuota: '完全免费（受 GitHub API 限额）',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['GitHub 官方出品，功能全面', '仓库管理、文件操作', 'Issue 和 PR 自动化管理', 'CI/CD 智能分析', '支持细粒度工具权限控制（toolsets）', '支持本地 CLI 和远程 HTTP 两种模式', '代码审查辅助', 'Code Search 代码搜索'],
    cons: ['需要 Personal Access Token', '受 GitHub API Rate Limit 限制', 'Go 语言编译方式启动较慢', '权限配置需谨慎'],
    bestFor: '在 AI IDE 中直接管理 GitHub 仓库、Issue、PR',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'MCP Core 核心工具之一。GitHub 官方 MCP 服务器，支持 repos/issues/pull_requests 等 toolsets 细粒度控制。推荐使用远程 HTTP 模式（api.githubcopilot.com）避免本地 Go 编译。配合 Claude Code 使用体验极好，可以直接在对话中完成 PR 创建、Issue 管理等操作。',
      pitfalls: ['Token 权限要最小化', '注意 API Rate Limit', '远程模式更方便']
    },
    swot: { S: '官方出品、功能全面', W: 'Rate Limit', O: 'AI DevOps 核心', T: 'GitLab MCP 竞争' },
    tags: ['推荐', 'MCP', '免费', '开源', 'GitHub', '官方', 'PR管理']
  },
  {
    id: 'sequential-thinking-mcp',
    name: 'Sequential Thinking',
    category: 'mcp',
    subcategory: 'AI增强',
    developer: 'Anthropic (MCP 官方)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '增强任何 LLM 的推理能力', link: 'https://github.com/modelcontextprotocol/server-sequential-thinking' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['MCP 官方出品', '结构化顺序思考，提升推理质量', '复杂问题自动分解为步骤', '思维链构建透明可观测', '帮助发现思维盲点', '适合代码审查和架构设计', 'npx 一键启动'],
    cons: ['上下文占用中等', '简单问题使用反而增加开销', '推理步骤可能过长', '依赖 LLM 本身的推理能力'],
    bestFor: '复杂业务逻辑分析、算法问题分解、代码 Bug 根因分析',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'MCP Core 核心工具之一。Anthropic 官方出品，帮助 LLM 进行分步骤推理。对复杂问题的解决质量有显著提升，特别是架构设计权衡和 Bug 根因分析场景。不过对于简单问题有点"杀鸡用牛刀"。Claude Code 内置深度思考能力后，这个工具在 Claude Code 中不是必须的，但在 Cursor 等 IDE 中仍然推荐。',
      pitfalls: ['简单问题不需要启用', '注意上下文占用']
    },
    swot: { S: '官方出品、推理增强', W: '上下文占用', O: '成为复杂推理标配', T: 'LLM 原生能力提升' },
    tags: ['MCP', '免费', '开源', '思维链', '推理增强', '官方']
  },
  {
    id: 'antv-chart-mcp',
    name: 'AntV Chart MCP',
    category: 'mcp',
    subcategory: '可视化',
    developer: '蚂蚁集团 (AntV)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，图表生成服务', link: 'https://github.com/antvis/mcp-server-chart' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['阿里 AntV 官方出品，质量有保障', '支持 25+ 种图表类型', '基础图表：折线、柱状、饼图、面积图', '高级图表：箱线、雷达、热力、旭日图', '统计图表：直方图、小提琴图', '关系图表：桑基图、河流图、力导向图', '输出格式美观，可直接用于文档', 'SDK 支持程序化调用', 'npx 零配置启动'],
    cons: ['图表交互性有限（静态输出）', '自定义样式能力一般', '部分复杂图表数据格式要求严格', '国际化文档较少'],
    bestFor: '数据可视化、生成报表图表、项目进度展示',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights: 'MCP Core 核心工具之一。AntV 团队出品，25+ 种图表类型覆盖绝大部分数据可视化需求。零配置 npx 启动，在 AI 对话中直接生成图表非常方便。支持 SDK 程序化调用，可以集成到自动化报表流程中。输出质量高，直接用于文档或汇报。',
      pitfalls: ['复杂图表注意数据格式', '静态输出无交互']
    },
    swot: { S: 'AntV 官方、图表丰富', W: '交互性有限', O: 'AI 数据分析可视化', T: 'ECharts 等竞品' },
    tags: ['推荐', 'MCP', '免费', '开源', '国产', 'AntV', '25+图表', '图表', '阿里']
  },
  {
    id: 'brave-search-mcp',
    name: 'Brave Search MCP',
    category: 'mcp',
    subcategory: '搜索',
    developer: 'Brave Software',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费(2000次/月)/$3/1000次(付费)', models: '无需LLM，搜索服务', link: 'https://brave.com/search/api/' }
    ],
    freeQuota: '免费 2000 次查询/月',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: ['隐私优先，不追踪用户', '独立搜索索引（非 Google/Bing 代理）', '支持网页、图片、视频、新闻搜索', '本地商业搜索功能', 'AI 摘要生成', '免费额度充足（2000次/月）', '支持 HTTP 和 Docker 部署', '不依赖大型科技公司'],
    cons: ['需要 API Key', '中文搜索效果一般', '索引覆盖面不如 Google', '高级功能需付费'],
    bestFor: '在 AI IDE 中进行隐私优先的网络搜索和信息检索',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '隐私优先的搜索 MCP。最大特点是拥有独立搜索索引，不是 Google 的套壳。免费额度 2000 次/月基本够用。不过中文搜索效果一般，英文技术搜索质量不错。适合注重隐私或需要独立于 Google 搜索结果的场景。',
      pitfalls: ['中文搜索效果一般', '需要注册获取 API Key']
    },
    swot: { S: '隐私优先、独立索引', W: '中文支持弱', O: '隐私意识增强', T: 'Google 搜索质量' },
    tags: ['MCP', '搜索', '隐私', '隐私搜索', 'Brave', 'API']
  },
  {
    id: 'openmemory-mcp',
    name: 'OpenMemory MCP',
    category: 'mcp',
    subcategory: 'AI增强',
    developer: 'Mem0',
    logo: null,
    versions: [
      { type: 'Global', pricing: '开源自托管免费 / 云端版待定', models: '增强任何 LLM 的记忆能力', link: 'https://github.com/mem0ai/mem0' }
    ],
    freeQuota: '自托管免费',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: ['跨会话持久化记忆存储', '基于向量相似度的语义搜索', '支持记忆分类和优先级管理', '记忆强化机制（权重调整）', '让 AI 记住用户偏好和习惯', '与 Claude/Cursor 无缝集成', '开源可自托管'],
    cons: ['需要启动本地服务', '配置相对复杂', '中文语义理解有限', '自托管需要向量数据库'],
    bestFor: '让 AI 记住个人编码偏好、项目上下文、常用模式',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '创新性极强的 MCP 工具，让 AI 拥有跨会话的长期记忆。可以记住你的编码风格、常用库、项目结构等偏好，每次新对话都延续个性化体验。但配置门槛较高，需要启动本地服务和向量数据库（Qdrant）。适合重度 AI 编码用户，能显著减少重复解释项目上下文的时间。',
      pitfalls: ['配置门槛高', '中文语义理解有限', '需要本地服务']
    },
    swot: { S: '跨会话记忆、个性化', W: '配置复杂', O: '个性化 AI 编码', T: 'IDE 原生记忆功能' },
    tags: ['MCP', '开源', '记忆', '跨会话', '自托管']
  },
  {
    id: 'notion-mcp',
    name: 'Notion MCP',
    category: 'mcp',
    subcategory: '协作工具',
    developer: 'Notion Labs',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，Notion API 服务', link: 'https://github.com/notionhq/notion-mcp-server' }
    ],
    freeQuota: '完全免费（受 Notion API 限额）',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: ['Notion 官方出品', '支持 21 种工具操作', '页面搜索、创建、编辑', '数据库查询和管理', '评论和讨论操作', '自动化文档创建和管理', '项目管理数据库操作', 'npx 一键启动'],
    cons: ['需要 Notion Integration Token', '操作受 Notion API 限速', '复杂数据库操作学习成本高', '部分高级功能需 Notion 付费版'],
    bestFor: '在 AI IDE 中直接管理 Notion 文档、数据库、项目',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'Notion 官方 MCP，21 种工具覆盖页面、数据库、评论等所有核心操作。配合 AI IDE 使用可以在编码过程中直接创建或更新 Notion 文档，实现"代码 + 文档"的无缝衔接。Token 配置简单，推荐 Notion 用户安装。',
      pitfalls: ['需要创建 Notion Integration 获取 Token', '注意 API Rate Limit']
    },
    swot: { S: '官方出品、21 种工具', W: 'API 限速', O: 'AI 文档自动化', T: '飞书等竞品 MCP' },
    tags: ['MCP', '免费', '开源', 'Notion', '知识库', '官方', '团队协作']
  },
  {
    id: 'postman-mcp',
    name: 'Postman MCP',
    category: 'mcp',
    subcategory: 'API工具',
    developer: 'Postman',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，API 管理服务', link: 'https://github.com/nicobailon/postman-mcp-server' }
    ],
    freeQuota: '完全免费（需 Postman API Key）',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['100+ 完整工具集', 'API 集合和环境管理', 'API 测试和自动化执行', '多语言代码生成', '工作流自动化', '三种模式：Minimal / Full / Code', 'Minimal 模式轻量快速', 'Full 模式企业级功能', 'Code 模式 API 发现和代码生成'],
    cons: ['Full 模式工具过多可能影响上下文', '需要 Postman API Key', '依赖 Postman 平台生态', '部分高级功能需 Postman 付费版'],
    bestFor: 'API 开发全流程：文档→测试→代码生成→自动化',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: 'API 开发的瑞士军刀。三种模式设计很聪明：日常用 Minimal 保持轻量，需要时切换到 Full 获取全部功能。100+ 工具覆盖 API 开发全流程。但在 Claude Code 等已有强大 HTTP 能力的 IDE 中，使用频率不算高。更适合 API 密集型开发场景。',
      pitfalls: ['建议日常使用 Minimal 模式', 'Full 模式上下文占用大', '需要 Postman 账号']
    },
    swot: { S: '100+ 工具、全流程', W: '上下文占用', O: 'API 经济增长', T: 'IDE 内置 HTTP 能力' },
    tags: ['MCP', '免费', '开源', 'Postman', 'API测试', 'API']
  },
  {
    id: 'atlassian-mcp',
    name: 'Atlassian MCP',
    category: 'mcp',
    subcategory: '协作工具',
    developer: 'Sooperset (社区)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，Atlassian API 服务', link: 'https://github.com/sooperset/mcp-atlassian' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['Confluence + Jira 双平台集成', 'Confluence 文档搜索、创建、管理', 'Jira Issue 创建、搜索、更新', '支持空间和项目过滤', 'OAuth 2.0 安全认证', '只读模式保护生产数据', '支持 Docker 和 uvx 部署', '企业级团队协作利器'],
    cons: ['需要 Confluence/Jira API Token', '配置参数较多', '社区维护（非官方）', '部分操作受 Atlassian API 限制'],
    bestFor: '在 AI IDE 中直接查询 Confluence 文档、管理 Jira Issue',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights: '企业级协作 MCP，Confluence + Jira 双平台支持。对于使用 Atlassian 技术栈的团队来说是效率利器，可以在编码时直接查询相关文档和 Issue，不用切换窗口。只读模式设计贴心，适合生产环境。Docker 部署简单。',
      pitfalls: ['Token 配置较复杂', '需要多个环境变量', '建议先用只读模式']
    },
    swot: { S: 'Confluence+Jira 双平台', W: '社区维护', O: '企业 AI 效率工具', T: '官方 MCP 出现' },
    tags: ['MCP', '免费', '开源', 'Jira', 'Confluence', '企业级', '团队协作']
  },
  {
    id: 'supabase-mcp',
    name: 'Supabase MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'Supabase',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费（开源）', models: '无需LLM，Supabase 管理服务', link: 'https://github.com/supabase-community/supabase-mcp' }
    ],
    freeQuota: '完全免费（受 Supabase 项目配额）',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['Supabase 官方出品', '数据库操作（SQL 执行、表管理）', 'Auth 用户认证管理', 'Storage 文件存储操作', 'Edge Functions 部署管理', '项目配置和监控', 'TypeScript 类型生成', '日志查询和分析', 'npx 一键启动'],
    cons: ['需要 Supabase Access Token', '操作生产数据需谨慎', '功能依赖 Supabase 平台', '部分高级功能需 Supabase Pro'],
    bestFor: '在 AI IDE 中直接管理 Supabase 项目：数据库、Auth、存储、Functions',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Supabase 全栈开发的核心 MCP。可以直接在 AI 对话中执行 SQL、管理用户认证、操作文件存储、部署 Edge Functions。配合 Claude Code 实现"AI 全栈开发"体验极佳。TypeScript 类型自动生成功能省去大量手动工作。强烈推荐 Supabase 用户安装。',
      pitfalls: ['生产环境操作要谨慎', '建议用只读 Token 做日常查询', '注意 Token 权限最小化']
    },
    swot: { S: '官方出品、全栈覆盖', W: '平台绑定', O: 'AI 全栈开发', T: 'Firebase MCP 等竞品' },
    tags: ['推荐', 'MCP', '免费', '开源', 'Supabase', '全栈', '官方']
  },
  {
    id: 'figma-mcp',
    name: 'Figma MCP',
    category: 'mcp',
    subcategory: '设计工具',
    developer: 'Figma',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: '无需LLM，Figma API 服务', link: 'https://www.figma.com/developers' }
    ],
    freeQuota: '完全免费（受 Figma API 限额）',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['Figma 官方出品', '读取设计稿完整数据', '设计到代码转换辅助', 'HTTP OAuth 零配置认证', '支持组件和样式提取', '设计系统数据获取', '与 AI IDE 无缝集成', '远程 HTTP 服务无需本地安装'],
    cons: ['需要 Figma API Key 或 OAuth', '复杂设计稿数据量大', '代码转换质量依赖 LLM', '需要 Figma 付费版获取完整功能'],
    bestFor: '设计稿转代码、提取设计 Token、设计系统同步',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '设计师和前端开发者的桥梁 MCP。最大亮点是 HTTP OAuth 零配置——直接访问 mcp.figma.com 即可使用。可以在 AI IDE 中直接读取 Figma 设计稿，让 LLM 辅助将设计转换为代码。设计系统 Token 提取功能对前端组件库开发很有帮助。',
      pitfalls: ['复杂设计稿可能数据量很大', '代码转换仍需人工审查']
    },
    swot: { S: '官方出品、零配置', W: '数据量大', O: '设计转码自动化', T: '其他设计工具 MCP' },
    tags: ['MCP', '免费', 'Figma', '设计', '设计转码', '官方']
  },
  {
    id: 'vercel-mcp',
    name: 'Vercel MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'Vercel',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: '无需LLM，Vercel API 服务', link: 'https://vercel.com/docs/mcp' }
    ],
    freeQuota: '完全免费（受 Vercel 计划限额）',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: ['Vercel 官方出品', '部署管理：查看、触发、回滚部署', '运行时日志和构建日志查询', '项目配置和环境变量管理', '域名管理和 DNS 配置', '支持 Toolbar 评论和反馈', '零配置远程 HTTP 模式', '与 Next.js 生态深度集成'],
    cons: ['需要 Vercel 账号和认证', '功能受 Vercel 计划限制', '主要面向 Vercel 平台用户', '非 Vercel 部署无法使用'],
    bestFor: '在 AI IDE 中直接管理 Vercel 部署、查看日志、配置项目',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'Vercel 官方 MCP，对于使用 Vercel + Next.js 技术栈的团队来说是效率利器。可以在 AI IDE 中直接查看部署状态、读取构建日志、排查线上问题。远程 HTTP 模式零配置，认证后即可使用。Toolbar 评论集成让代码审查和设计反馈闭环更完整。',
      pitfalls: ['仅限 Vercel 平台', '注意部署操作权限']
    },
    swot: { S: '官方出品、零配置', W: '平台绑定', O: 'Next.js 生态', T: 'Netlify 等竞品 MCP' },
    tags: ['MCP', '免费', 'Vercel', '部署', 'Next.js', '官方']
  },
  // ============= AI Skills (4个) =============
  {
    id: 'frontend-design-skill',
    name: 'frontend-design',
    category: 'skill',
    subcategory: 'UI/UX设计',
    developer: 'Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: 'Claude Code 内置', link: 'https://github.com/anthropics/claude-code' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['UI/UX 设计智能助手', '67 种风格、96 种调色板', '57 种字体配对方案', '25 种图表类型支持', '支持 13 种技术栈（React、Vue、Next.js、SwiftUI 等）', '玻璃态、粘土态、极简等现代风格', '响应式设计自动适配', 'shadcn/ui MCP 集成'],
    cons: ['需要 Claude Code 环境', '复杂设计需要多次迭代', '依赖设计规范理解'],
    bestFor: 'UI/UX 设计、前端组件开发、设计系统构建',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Claude Code Skills 中的 UI/UX 设计专家。支持 67 种设计风格和 96 种调色板，覆盖从玻璃态到极简主义的各种风格。对前端开发者非常友好，可以直接生成 React/Vue/Next.js 代码。shadcn/ui 集成让组件搜索和示例获取更便捷。',
      pitfalls: ['复杂设计需多轮迭代', '需要一定的设计基础']
    },
    swot: { S: '风格全面、技术栈丰富', W: '需 Claude Code 环境', O: 'AI 设计工具市场增长', T: '专业设计工具竞争' },
    tags: ['Skills', '免费', 'UI/UX', '设计', '前端']
  },
  {
    id: 'webapp-testing-skill',
    name: 'webapp-testing',
    category: 'skill',
    subcategory: '测试',
    developer: 'Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: 'Claude Code 内置', link: 'https://github.com/anthropics/claude-code' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['Web 应用测试专家', 'E2E 测试用例生成', 'Playwright/Cypress 集成', '测试覆盖率分析', '边界条件和异常测试', '自动化测试脚本生成', '支持属性测试和快照测试'],
    cons: ['需要 Claude Code 环境', '复杂场景需人工调整', '测试环境配置依赖'],
    bestFor: 'Web 应用测试、E2E 测试、测试用例编写',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'Claude Code Skills 中的测试专家。可以自动生成 E2E 测试用例，支持 Playwright 和 Cypress 框架。对于提高测试覆盖率、发现边界条件问题非常有帮助。生成的测试脚本质量不错，但复杂场景仍需人工调整。',
      pitfalls: ['复杂场景需人工调整', '测试环境需提前配置']
    },
    swot: { S: '自动化测试生成', W: '需 Claude Code 环境', O: 'AI 测试工具需求增长', T: '专业测试工具竞争' },
    tags: ['Skills', '免费', '测试', 'E2E', 'Playwright']
  },
  {
    id: 'mcp-builder-skill',
    name: 'mcp-builder',
    category: 'skill',
    subcategory: 'MCP开发',
    developer: 'Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: 'Claude Code 内置', link: 'https://github.com/anthropics/claude-code' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['MCP 服务器开发专家', '完整的 MCP 协议支持', '工具、资源、提示词模板生成', 'TypeScript/Python 双语言支持', '最佳实践和设计模式指导', '调试和测试辅助', '文档自动生成'],
    cons: ['需要 Claude Code 环境', 'MCP 协议更新需跟进', '复杂 MCP 需要深度定制'],
    bestFor: 'MCP 服务器开发、工具集成、API 封装',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: 'Claude Code Skills 中的 MCP 开发专家。对于想要快速构建 MCP 服务器的开发者来说是必备工具。支持 TypeScript 和 Python 两种语言，可以生成完整的 MCP 服务器代码，包括工具定义、资源暴露和提示词模板。最佳实践指导让新手也能写出高质量的 MCP。',
      pitfalls: ['MCP 协议更新需关注', '复杂场景需深度定制']
    },
    swot: { S: 'MCP 开发专家', W: '需 Claude Code 环境', O: 'MCP 生态快速增长', T: '官方工具链竞争' },
    tags: ['Skills', '免费', 'MCP', '开发', 'API']
  },
  {
    id: 'skill-creator-skill',
    name: 'skill-creator',
    category: 'skill',
    subcategory: 'Skills开发',
    developer: 'Community',
    logo: null,
    versions: [
      { type: 'Global', pricing: '完全免费', models: 'Claude Code 内置', link: 'https://github.com/anthropics/claude-code' }
    ],
    freeQuota: '完全免费',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: ['Skills 创建专家', '领域专家设计原则', '提示词工程最佳实践', '技能模板和结构生成', '测试和验证辅助', '文档和示例编写', '技能发布流程指导'],
    cons: ['需要 Claude Code 环境', '高质量技能需要领域知识', '技能设计需要多次迭代'],
    bestFor: 'Claude Code Skills 开发、自定义技能创建',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: 'Claude Code Skills 中的元技能——用于创建其他 Skills。遵循领域专家设计原则，可以帮助你快速构建自定义技能。从提示词设计到技能结构，再到测试验证，全流程覆盖。对于想要扩展 Claude Code 能力的开发者来说是必备工具。',
      pitfalls: ['需要领域专业知识', '技能设计需多次迭代']
    },
    swot: { S: 'Skills 创建专家', W: '需 Claude Code 环境', O: 'Skills 生态增长', T: '官方 Skills 工具' },
    tags: ['Skills', '免费', '元技能', '开发', '创建']
  }
]

// 工具分类统计
export const getToolsByCategory = (category) => aiToolsData.filter(t => t.category === category)
export const getToolById = (id) => aiToolsData.find(t => t.id === id)
export const getAllCategories = () => [...new Set(aiToolsData.map(t => t.category))]
export const getAllTags = () => [...new Set(aiToolsData.flatMap(t => t.tags))]
