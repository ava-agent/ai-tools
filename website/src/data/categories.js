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
        budget: '$20-40/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', usage: '日常开发', cost: '$20/月' },
            { layer: '深度推理', tool: 'Claude Code', usage: '复杂任务', cost: '$20/月' },
            { layer: '大规模分析', tool: 'Gemini CLI', usage: '代码分析、调研', cost: '免费' }
        ]
    },
    {
        name: '预算敏感方案',
        budget: '$0/月',
        tools: [
            { layer: '主力 IDE', tool: 'Trae', usage: '日常开发', cost: '免费' },
            { layer: 'CLI 补强', tool: 'Gemini CLI', usage: '大规模分析', cost: '免费' },
            { layer: '中文优化', tool: 'Qwen CLI', usage: '中文场景', cost: '免费' }
        ]
    },
    {
        name: '独立开发者方案',
        budget: '$20/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', usage: '全栈开发', cost: '$20/月' },
            { layer: '深度推理', tool: 'Claude Code', usage: '复杂任务', cost: '$20/月' },
            { layer: '快速原型', tool: 'Trae', usage: 'MVP 验证', cost: '免费' }
        ]
    },
    {
        name: '企业团队方案',
        budget: '$40-60/人/月',
        tools: [
            { layer: '主力 IDE', tool: 'Cursor', usage: '团队开发', cost: '$40/月' },
            { layer: '协作', tool: 'GitHub Copilot', usage: 'PR 审查', cost: '$19/月' },
            { layer: '需求管理', tool: 'Kiro', usage: 'Spec 驱动', cost: '$20+/月' }
        ]
    },
    {
        name: '后端专项方案',
        budget: '$20/月',
        tools: [
            { layer: '存量代码', tool: 'Qoder', usage: 'Repo Wiki 理解', cost: '$20/月' },
            { layer: '深度推理', tool: 'Claude Code', usage: '复杂任务', cost: '$20/月' }
        ]
    }
]

export const getCategoryById = (id) => categories.find(c => c.id === id)
export const getCategoryColor = (id) => {
    const colorMap = {
        ide: 'bg-blue-500',
        cli: 'bg-green-500',
        llm: 'bg-purple-500',
        multimodal: 'bg-pink-500',
        agent: 'bg-orange-500'
    }
    return colorMap[id] || 'bg-gray-500'
}
