// AI工具分类体系
// 基于当前站点的七大核心类别

export const categories = [
    {
        id: 'ide',
        name: 'AI IDE',
        nameZh: 'AI 开发环境',
        icon: 'Monitor',
        description: '智能开发环境，代码生成、项目重构、调试协同',
        color: 'blue',
        examples: ['Cursor', 'Windsurf', 'Trae', 'Qoder']
    },
    {
        id: 'cli',
        name: 'AI CLI',
        nameZh: 'AI 命令行',
        icon: 'Terminal',
        description: '命令行工具，批量处理、自动化、长任务推进',
        color: 'green',
        examples: ['Claude Code', 'Gemini CLI', 'Qwen CLI']
    },
    {
        id: 'llm',
        name: 'AI Models',
        nameZh: 'AI 模型',
        icon: 'Brain',
        description: '大语言模型，方案设计、调研总结、知识问答',
        color: 'purple',
        examples: ['Claude', 'GPT', 'Gemini', 'DeepSeek']
    },
    {
        id: 'multimodal',
        name: 'AI Multimodal',
        nameZh: 'AI 多模态',
        icon: 'Image',
        description: '多模态工具，图像、视频、3D、音频生成',
        color: 'pink',
        examples: ['Sora', '可灵', 'Meshy', 'Midjourney']
    },
    {
        id: 'agent',
        name: 'AI Agent',
        nameZh: 'AI 智能体',
        icon: 'Bot',
        description: '智能体平台，工作流编排、自动化任务',
        color: 'orange',
        examples: ['Coze', 'Dify', 'AutoGPT']
    },
    {
        id: 'mcp',
        name: 'MCP Tools',
        nameZh: 'MCP 工具',
        icon: 'Plug',
        description: 'MCP 协议工具，连接 AI 与外部数据源和服务',
        color: 'cyan',
        examples: ['Playwright MCP', 'Supabase MCP', 'GitHub MCP', 'Context7']
    },
    {
        id: 'skill',
        name: 'AI Skills',
        nameZh: 'AI 技能',
        icon: 'Wrench',
        description: 'Claude Code 技能扩展，文档处理、测试、内容创作',
        color: 'amber',
        examples: ['semgrep', 'second-opinion', 'ui-ux-pro-max', 'supabase', 'research']
    }
]

// 快速选型对照表
export const quickSelectionGuide = [
    { need: '写代码/改项目', primary: 'AI IDE', secondary: 'AI CLI', tip: '不要一次让 AI 改太多文件' },
    { need: '调研/写方案', primary: 'AI Models', secondary: 'AI IDE', tip: '关键结论要交叉验证' },
    { need: '批量改动/重构', primary: 'AI CLI', secondary: 'AI IDE', tip: '必须先给范围限制' },
    { need: '生成图片/视频', primary: 'AI Multimodal', secondary: 'AI Models', tip: '注意版权和隐私' },
    { need: '自动化工作流', primary: 'AI Agent', secondary: 'AI CLI', tip: '先约束权限边界' },
    { need: '连接外部服务/数据', primary: 'MCP Tools', secondary: 'AI Agent', tip: '先确认 IDE 是否已内置对应 MCP' }
]

// 推荐组合方案
export const recommendedCombos = [
    {
        name: '不设上限方案',
        budget: '$200+/月',
        tools: [
            { layer: '核心引擎', tool: 'Claude Code Max', toolIds: ['claude-code'], usage: 'Max 高用量档可显著提升 Claude Code 额度，但仍受计划、模型和时段限制，适合重度 AI 编程', cost: '$200/月' },
            { layer: '主力 IDE', tool: 'Cursor', toolIds: ['cursor'], usage: '日常 IDE 开发，Composer 模式协同', cost: '$20/月' },
            { layer: '长上下文', tool: 'Gemini CLI', toolIds: ['gemini-cli'], usage: '百万 Token 调研分析', cost: '免费' }
        ]
    },
    {
        name: '全栈开发者方案',
        budget: '$20/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', toolIds: ['cursor'], usage: '日常开发主力，Composer 模式处理复杂任务', cost: '$20/月' },
            { layer: 'CLI 补强', tool: 'Gemini CLI', toolIds: ['gemini-cli'], usage: '批量改动、长文档调研', cost: '免费' },
            { layer: '快速验证', tool: 'Trae', toolIds: ['trae'], usage: '原型验证、想法快速落地，Free 层有限制', cost: 'Free/付费档' }
        ]
    },
    {
        name: '预算敏感方案',
        budget: '$0/月',
        tools: [
            { layer: '主力 IDE', tool: 'Trae', toolIds: ['trae'], usage: 'Free 层可入门，SOLO mode 和云任务需看额度', cost: 'Free 限制' },
            { layer: 'CLI 补强', tool: 'Gemini CLI + OpenCode', toolIds: ['gemini-cli', 'opencode'], usage: '长上下文 + 开源终端 Agent；Qwen CLI 仅在已配置 Coding Plan/API provider 时作为中文补充', cost: 'Gemini 免费层 + OpenCode 开源；Qwen 需另核成本' },
            { layer: '备用 CLI', tool: 'Codex', toolIds: ['codex'], usage: 'OpenAI 出品，成本取决于 ChatGPT/API 路径和当前计划', cost: '按计划核验' }
        ]
    },
    {
        name: '独立开发者方案',
        budget: '$20-40/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', toolIds: ['cursor'], usage: '全栈开发主力', cost: '$20/月' },
            { layer: '快速原型', tool: 'Trae', toolIds: ['trae'], usage: 'Solo Builder 模式 MVP 验证，按额度选择 Free 或付费档', cost: 'Free/付费档' },
            { layer: 'CLI 补强', tool: 'Claude Code', toolIds: ['claude-code'], usage: '关键任务、复杂重构；Codex 可作为 OpenAI 路径补充但需核验额度', cost: '$20/月起' }
        ]
    },
    {
        name: '企业团队方案',
        budget: '$40-60/人/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor Teams', toolIds: ['cursor'], usage: '团队协作，统一代码规范', cost: '$40/月' },
            { layer: '后端专家', tool: 'Qoder', toolIds: ['qoder'], usage: 'Java/Go 项目，Repo Wiki', cost: '免费/付费' },
            { layer: 'CLI 补强', tool: 'Claude Code', toolIds: ['claude-code'], usage: '关键任务、代码审查', cost: '$20/月' }
        ]
    },
    {
        name: '后端专项方案',
        budget: '$20/月',
        tools: [
            { layer: '主力 IDE', tool: 'Qoder + Cursor', toolIds: ['qoder', 'cursor'], usage: 'Qoder 存量项目理解 + Cursor 开发', cost: '$20/月' },
            { layer: 'CLI 补强', tool: 'Qwen CLI', toolIds: ['qwen-cli'], usage: '中文优化、代码生成能力强；需先配置 Coding Plan/API provider', cost: '需另核 Coding Plan/API 成本' },
            { layer: '长上下文', tool: 'Gemini CLI', toolIds: ['gemini-cli'], usage: '大型代码库分析', cost: '免费' }
        ]
    }
]

