// AI工具分类体系
// 基于调研文档中的五大核心类别

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
        examples: ['Claude Code', 'Gemini CLI', 'Aider']
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
    }
]

// 快速选型对照表
export const quickSelectionGuide = [
    { need: '写代码/改项目', primary: 'AI IDE', secondary: 'AI CLI', tip: '不要一次让 AI 改太多文件' },
    { need: '调研/写方案', primary: 'AI Models', secondary: 'AI IDE', tip: '关键结论要交叉验证' },
    { need: '批量改动/重构', primary: 'AI CLI', secondary: 'AI IDE', tip: '必须先给范围限制' },
    { need: '生成图片/视频', primary: 'AI Multimodal', secondary: 'AI Models', tip: '注意版权和隐私' },
    { need: '自动化工作流', primary: 'AI Agent', secondary: 'AI CLI', tip: '先约束权限边界' }
]

// 推荐组合方案
export const recommendedCombos = [
    {
        name: '全栈开发者方案',
        budget: '$20/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', usage: '日常开发主力，Composer 模式处理复杂任务', cost: '$20/月' },
            { layer: 'CLI 补强', tool: 'Gemini CLI', usage: '批量改动、长文档调研', cost: '免费' },
            { layer: '快速验证', tool: 'Trae', usage: '原型验证、想法快速落地', cost: '免费' }
        ]
    },
    {
        name: '预算敏感方案',
        budget: '$0-15/月',
        tools: [
            { layer: '主力 IDE', tool: 'Trae', usage: '完全免费，国产模型优化', cost: '免费' },
            { layer: 'CLI 补强', tool: 'Gemini CLI + Qwen CLI', usage: '长上下文 + 中文优化', cost: '免费' },
            { layer: '备用 IDE', tool: 'Windsurf', usage: '需要时启用，Cascade AI 能力强', cost: '$15/月可选' }
        ]
    },
    {
        name: '独立开发者方案',
        budget: '$20-40/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', usage: '全栈开发主力', cost: '$20/月' },
            { layer: '快速原型', tool: 'Trae', usage: 'Solo Builder 模式 MVP 验证', cost: '免费' },
            { layer: 'CLI 补强', tool: 'Claude Code', usage: '关键任务、复杂重构', cost: '$20/月' }
        ]
    },
    {
        name: '企业团队方案',
        budget: '$40-60/人/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor Teams', usage: '团队协作，统一代码规范', cost: '$40/月' },
            { layer: '后端专家', tool: 'Qoder', usage: 'Java/Go 项目，Repo Wiki', cost: '免费/付费' },
            { layer: 'CLI 补强', tool: 'Claude Code', usage: '关键任务、代码审查', cost: '$20/月' }
        ]
    },
    {
        name: '后端专项方案',
        budget: '$20/月',
        tools: [
            { layer: '主力 IDE', tool: 'Qoder + Cursor', usage: 'Qoder 存量项目理解 + Cursor 开发', cost: '$20/月' },
            { layer: 'CLI 补强', tool: 'Aider', usage: 'Git 工作流集成', cost: '免费' },
            { layer: '长上下文', tool: 'Gemini CLI', usage: '大型代码库分析', cost: '免费' }
        ]
    }
]

