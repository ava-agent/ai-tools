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
      { type: 'Global', pricing: '免费/$20/$60(Pro+)/$200/月/$40用户月(团队)', models: 'Composer-1.5, Claude, GPT-4o, o1', link: 'https://cursor.sh' }
    ],
    freeQuota: '免费(50请求+2000Tab)',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: ['业内标杆，功能最全', 'Composer-1.5 自研模型强化推理（强化学习扩展20倍）', '支持 8 个 Agent 并行处理', 'Tab 补全极其流畅（Pro 计划无限次）', '本地知识库/Repo Index，语义搜索整个代码库', '原子级 diffs 精确代码更改', 'VS Code 生态无缝兼容', '.cursorrules 自定义规则强大', 'MCP 协议支持'],
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
    video: { src: './videos/cursor.mp4', thumbnail: './videos/cursor-thumb.jpg' },
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
      { type: 'Global', pricing: '待公布', models: 'Claude, GPT-4, DeepSeek', link: 'https://trae.ai' }
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
    video: { src: './videos/trae.mp4', thumbnail: './videos/trae-thumb.jpg' },
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
      { type: 'Global', pricing: '$15/月', models: 'Claude, GPT-4, SWE-1.5', link: 'https://codeium.com/windsurf' }
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
    video: { src: './videos/windsurf.mp4', thumbnail: './videos/windsurf-thumb.jpg' },
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
    freeQuota: '2026年2月1-15日免费试用',
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
    video: { src: './videos/qoder.mp4', thumbnail: './videos/qoder-thumb.jpg' },
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
    pros: ['Rust 编写，120fps 性能', '内置实时多人协作', '创新的 Edit Prediction 功能（支持多模型）', '完全开源免费', '界面简洁流畅', '跨平台支持（Windows已正式支持）', 'GPU 加速渲染', '内存占用极低', 'GPUI 创新架构', '健康的项目活跃度', 'Vim 模式原生支持'],
    cons: ['AI 功能相对基础', '扩展生态较小且较新', '学习曲线较陡', '调试功能有限', 'LSP 支持不完整', '远程开发支持弱', '数据库插件缺失', '没有内置终端'],
    bestFor: '追求极致性能、团队协作、开源爱好者',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3,
      insights: '性能优势被广泛认可，120fps 的流畅体验是其他编辑器无法比拟的。创新的 Edit Prediction 功能支持多模型预测，内置协作是亮点。2026年Windows已正式支持，完全跨平台。AI 功能虽然不如 Cursor 全面，但性能和协作能力使其成为特定场景下的最佳选择。',
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
      insights: '云端开发一体化解决方案，特别适合教学和快速原型。Agent 3 可自主工作 200 分钟，支持复杂多步骤任务，内置浏览器测试和自我修复能力强大。团队版 $35/月 适合协作开发。',
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
      insights: '适合做需求拆解和规格文档，集成 Amazon Q Developer 增强企业级能力，但不适合当主力写代码。',
      pitfalls: ['Free credits 太少', '不当主力写码']
    },
    swot: { S: 'Spec 驱动', W: '重量级', O: '企业规范', T: '轻量 IDE' },
    tags: ['Amazon', 'Spec', '规范', 'AmazonQ'],
    video: { src: './videos/kiro.mp4', thumbnail: './videos/kiro-thumb.jpg' },
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
    freeQuota: '有免费额度',
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
    video: { src: './videos/codebuddy.mp4', thumbnail: './videos/codebuddy-thumb.jpg' },
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
    freeQuota: 'Public Preview期间免费（每 5 小时刷新配额）',
    contextWindow: '2M (Gemini 3 Pro)',
    chineseSupport: 3,
    pros: ['Google 出品', 'Gemini 2.5 Pro 深度集成', '2M 超长上下文', '2025 年底已发布', '基于 VS Code fork 的完整平台（非插件）', '专注 Agentic Development', 'Agent Skills 系统', 'Beta期间免费', 'Google 生态无缝集成', 'Gmail/Drive/Calendar 集成潜力', '多模态支持强大'],
    cons: ['信息较少', '功能待探索', 'Beta 阶段稳定性未知', '未来定价不确定', '社区尚未形成', '学习资源匮乏', '企业功能待验证', '长期维护存疑'],
    bestFor: 'Google 生态用户、尝鲜新品',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights: 'Google 2025年11月18日发布的 AI IDE，基于 VS Code fork 的完整平台（非插件），专注 Agentic Development。Gemini 3 Pro 深度集成，2M 上下文窗口。引入 Agent Skills 系统，原生集成 Nano Banana 增强能力。Public Preview 期间免费（每 5 小时刷新配额），值得关注但需要更多实际使用验证。',
      pitfalls: ['新品功能待验证', '存在安全漏洞报告（Prompt Injection 攻击风险）', '每周使用限制存在']
    },
    swot: { S: 'Google、Gemini', W: '新品未知', O: '生态整合', T: '成熟竞品' },
    tags: ['Google', 'Gemini', '新品', 'AgentSkills', 'Beta免费'],
    video: { src: './videos/antigravity.mp4', thumbnail: './videos/antigravity-thumb.jpg' },
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
      insights: '最成熟的 AI 编程助手，生态支持最好。2025 年 12 月推出 Agent Mode 和 MCP 支持，支持多模型选择。适合作为辅助工具使用。',
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
    video: { src: './videos/verdent.mp4', thumbnail: './videos/verdent-thumb.jpg' }
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

  // ============= AI CLI (8个) =============
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Anthropic',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费/$17-20/$100-200/月', models: 'Claude Opus 4.6, Sonnet 4.5, Haiku 4.5', link: 'https://docs.anthropic.com/claude-code' }
    ],
    freeQuota: 'Free tier 可用 (5x less than paid)',
    contextWindow: '200K (1M beta)',
    chineseSupport: 4,
    pros: ['推理能力顶级', 'Workflow 成熟', '多文件改动稳定', 'Terminal-Bench 2.0 和 SWE-bench 72.5% 最高分', '5.5x token 效率比竞品更高', 'Agent teams 并行协作 (2026)', 'Context compaction 无限对话', 'Adaptive thinking 动态推理', '30% 更少代码返工', 'Skills 热重载', 'MCP Tool Search', '分叉上下文并行探索', 'Checkpointing 状态保存', 'Subagents 专业委托', 'Hooks 自动化', 'Chrome 扩展浏览器自动化', '终端/IDE/Web 三种访问', 'GitHub @claude 提及集成'],
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
    video: { src: './videos/claude-code.mp4', thumbnail: './videos/claude-code-thumb.jpg' },
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
      { type: 'Global', pricing: '免费', models: 'Gemini 2.5 Pro, 2.5 Flash, 2.5 Flash-Lite, 3 Pro', link: 'https://github.com/google-gemini/gemini-cli' }
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
    pros: ['无 Token 数量限制仅限调用次数', '本地部署支持 (32B 模型可 MacBook 运行)', '多模态支持开箱即用', 'FP8 格式无需量化', 'LiveCodeBench/Spider/BIRD-SQL 超越 GPT-4o/Claude 3.5', '开源可定制', '长期免费政策', 'MCP 服务器集成', '中文强', 'Terminal agent 完整'],
    cons: ['实际性能与基准有差距', '社区较小教程少', '大型仓库偶现不准确', '适合快速编辑非企业级', 'qwen.md 配置有时被忽略', '成熟度不如 Claude Code/Gemini CLI'],
    bestFor: '中文需求、中小项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights: '被称为"平民化的 Claude Code CLI"。2026 年 1 月发布 Qwen3 系列，包括旗舰 Qwen3-235B-A22B 和 Qwen3-Max-Thinking。Qwen3-Coder-Next 于 2026 年 2 月发布专为编码代理设计。在 LiveCodeBench、Spider、BIRD-SQL 等基准测试中超越 GPT-4o 和 Claude 3.5 Sonnet，但实际使用中"好但不算优秀"。无 Token 数量限制仅限调用次数是巨大优势，更适合预算有限的开发者和小型项目。',
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
      { type: 'Global', pricing: '免费 (API 自付)', models: 'Gemini 2.5 Pro, DeepSeek R1/V3, Claude 3.7 Sonnet, OpenAI o3/o4-mini/GPT-4.1, 本地模型', link: 'https://aider.chat' }
    ],
    freeQuota: '完全免费开源 (API 成本自付)',
    contextWindow: '百万级 token (GPT-4.1: 1M, GPT-5: 400K)',
    chineseSupport: 3,
    pros: ['支持 100+ 编程语言', '自驱动开发 (70-80% 代码由 AI 编写)', '终端原生无需离开命令行', '自动测试迭代修复直到通过', '成本效益高', '灵活模型支持云端和本地', 'LLM 排行榜维护者', 'Git 深度集成', '自动生成合理提交消息', '直接与本地 Git 仓库工作', '代码库映射大型项目', '支持任意 LLM', '图像网页语音输入', '自动 Lint 测试', '隐私优先可本地运行'],
    cons: ['无 GUI/IDE 集成', '需要命令行舒适度', '学习曲线陡峭', '非完全自主 Agent', '响应时间较长', '大型代码库编辑受限', '多文件上下文处理有限'],
    bestFor: 'Git 工作流、多模型切换、隐私意识强团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights: '2025-2026 年最活跃的开源 AI 编程助手之一，由 Paul Gauthier 维护。核心优势是 Git 优先设计，每次 AI 交互都作为 Git 操作处理，代码变更准确率达 81-88%。最新版本 v0.81.0 支持 Gemini 2.5 Pro、DeepSeek V3 等最新模型。自驱动开发特点显著 - 每个版本 70-80% 代码由 Aider 自己编写。还维护权威 LLM 代码编辑排行榜。支持百万级 token 上下文 (GPT-4.1: 1M)。',
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
      { type: 'Global', pricing: '免费 (API 自付)', models: 'Claude, OpenAI, Gemini 2.5, DeepSeek, AWS Bedrock, Azure, GCP, 本地模型', link: 'https://github.com/cline/cline' }
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
      { type: 'Global', pricing: '免费开源', models: '50+ 提供商 (OpenAI GPT-5, Anthropic Claude 4.5/Opus 4.6, Google Gemini 2.5, DeepSeek, Mistral, 本地模型)', link: 'https://continue.dev' }
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
    name: 'OpenCode (已归档)',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'OpenCode Community (已迁移到 Crush)',
    logo: null,
    versions: [
      { type: 'Global', pricing: '免费 (API 自付)', models: '75+ LLM providers', link: 'https://github.com/opencode-ai/opencode' }
    ],
    freeQuota: '工具免费，API 自付',
    contextWindow: '支持自动压缩功能',
    chineseSupport: 3,
    pros: ['开源免费', '75+ LLM 提供商模型选择灵活', '终端原生 TUI 界面友好', 'MCP 协议扩展', 'LSP 集成代码智能', '会话管理和持久化', '自定义命令系统', '自动压缩长对话', '非交互模式脚本自动化', '隐私优先支持本地模型'],
    cons: ['项目已归档不再维护', '需要迁移到 Crush 项目', '需自行配置 API 密钥', '仅终端操作无图形界面'],
    bestFor: '已迁移到 Crush 项目',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights: '⚠️ 重要更新：OpenCode 项目已于 2026 年被归档，原项目作者和 Charm 团队推出了继任者 Crush。建议用户关注 Crush 项目获取最新功能和维护支持。原 OpenCode 支持 75+ 个 LLM 提供商，具有完整的 MCP 和 LSP 集成能力。',
      pitfalls: ['项目已归档', '建议迁移到 Crush']
    },
    swot: { S: '开源、隐私、多模型', W: '已归档', O: 'Crush 继任者', T: 'Claude Code 能力' },
    tags: ['开源', 'CLI', '隐私', '多模型', '已归档', 'Crush'],
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
    tags: ['推荐', 'CLI', 'OpenAI', '代码生成', '多语言', 'GPT-5', 'Agent', 'Deprecated'],
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
      { type: 'Global', pricing: '完全免费开源 Apache-2.0', models: '20+ LLM: Anthropic Claude, OpenAI GPT-4o/o1, Google Gemini, xAI Grok-3, Groq 免费模型, Ollama 本地, Azure, AWS Bedrock, Mistral, OpenRouter', link: 'https://github.com/block/goose' }
    ],
    freeQuota: '本地模型完全免费 | Tetrate $10 首次免费 | Groq 免费开源模型',
    contextWindow: 'xAI Grok-3: 131K | Claude Copilot: 200K | Gemini CLI: 1M',
    chineseSupport: 3,
    pros: ['Block (Jack Dorsey 创立) 开发支持', '30.1K+ GitHub 星标 2.7K+ Fork 384+ 贡献者', 'Session Forking 会话分支功能', '自动 prompt caching 降低成本', '多模型配置 Lead/Worker Planning Mode', '内置 MCP 服务器集成', 'CLI 和 Desktop 双模式', 'Rust 构建性能优异', '自定义 OpenAI 兼容端点', 'CLI Pass-through Claude Code/ChatGPT/Cursor 现有订阅', '开源 AI 代理框架', '完全本地运行', '可写代码调试', '与文件系统交互', '透明性和可扩展性'],
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
      { type: 'Global', pricing: '免费开源 | Cloud Individual 免费 | Cloud Growth $500/月起', models: 'Claude Sonnet 4.5/Opus 4.1, GPT-4/GPT-5, DeepSeek V3.2/R1, Qwen3, OpenHands LM 自研 (128K), 本地模型 Ollama', link: 'https://github.com/OpenHands/openhands' }
    ],
    freeQuota: '开源版完全免费 | Cloud Individual 每日 10 次对话',
    contextWindow: 'OpenHands LM: 128K | 兼容模型最高 400K',
    chineseSupport: 3,
    pros: ['67.7K+ GitHub 星标', '180+ 贡献者活跃开发', '模型无关架构自由切换', 'MCP 服务器支持扩展工具', '企业级功能完整 RBAC SAML/SSO', '本地运行支持 AMD 合作', 'OpenHands Index 基准测试体系', '87% bug 同日修复率', '最新版本 1.12.0 (2026-02-09)', '开源 AI 编码助手', '充当全能软件开发者', '修改代码运行命令', '浏览网页调用 API', '综合界面聊天工作区 Jupyter 浏览器终端'],
    cons: ['CLI 模式稳定性问题', '浏览器功能 CLI 下受限', 'CLI 提示词未优化', '社区讨论热度相对较低', 'Individual Cloud 每日限制 10 次', '学习曲线陡', '需要配置'],
    bestFor: '开源用户、多模型切换',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights: '开源 AI 编码助手，综合界面强大包含聊天、工作区、Jupyter、浏览器、终端。GitHub 星标达到 67.7K+，180+ 贡献者活跃开发。最新版本 1.12.0 (2026-02-09)。模型无关架构可自由切换，企业级功能完整包括 RBAC 和 SAML/SSO。自研 OpenHands LM 模型基于 Qwen Coder 2.5 (128K 上下文)。客户案例显示 87% bug 同日修复率。Cloud Individual 层免费但每日限制 10 次对话。',
      pitfalls: ['需要配置环境', '学习曲线较陡', 'CLI 模式稳定性问题', 'Individual Cloud 每日限制 10 次']
    },
    swot: { S: '开源、综合界面', W: '学习曲线', O: '开源社区', T: '商业产品' },
    tags: ['开源', 'CLI', '多模型', '综合', 'OpenHandsLM', 'MCP', '企业级', 'RBAC']
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
