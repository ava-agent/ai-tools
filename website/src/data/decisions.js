// 决策树数据
// 基于调研文档中的选型决策指南

export const decisionTrees = {
    ide: {
        title: 'AI IDE 选型决策树',
        nodes: [
            {
                id: 'start',
                question: '预算是否充足（$20+/月）？',
                yes: 'budget-yes',
                no: 'budget-no'
            },
            {
                id: 'budget-yes',
                question: '需要 Agent 能力最强？',
                yes: { result: 'Cursor', reason: 'Composer-1.5 自研模型，8 个 Agent 并行处理' },
                no: { result: 'Windsurf', reason: 'Cascade AI 超预期，性价比高，$15/月' }
            },
            {
                id: 'budget-no',
                question: '需要快速原型？',
                yes: { result: 'Trae', reason: 'Solo 双模式，完全免费' },
                no: 'budget-no-2'
            },
            {
                id: 'budget-no-2',
                question: '需要中文优化？',
                yes: { result: 'Trae', reason: '国内生态友好，完全免费' },
                no: { result: 'Zed', reason: '开源免费，性能极佳' }
            }
        ]
    },
    cli: {
        title: 'AI CLI 选型决策树',
        nodes: [
            {
                id: 'start',
                question: '预算充足？',
                yes: { result: 'Claude Code', reason: '能力最强' },
                no: 'cli-free'
            },
            {
                id: 'cli-free',
                question: '需要长上下文？',
                yes: { result: 'Gemini CLI', reason: '1M 上下文，1000/天免费' },
                no: 'cli-free-2'
            },
            {
                id: 'cli-free-2',
                question: '需要 Git 集成？',
                yes: { result: 'Aider', reason: '开源，Git 工作流' },
                no: { result: 'Qwen CLI', reason: '2000/天免费，中文优化' }
            }
        ]
    },
    model: {
        title: 'AI 模型选型决策树',
        nodes: [
            {
                id: 'start',
                question: '主要用途是什么？',
                options: [
                    { label: '代码生成/重构', next: 'code' },
                    { label: '方案设计/推理', next: 'reasoning' },
                    { label: '日常对话/调研', next: 'chat' },
                    { label: '垂直领域', next: 'vertical' }
                ]
            },
            {
                id: 'code',
                question: '预算情况？',
                options: [
                    { label: '充足', result: 'Claude 4.5 Sonnet', reason: '代码能力最强' },
                    { label: '中文项目', result: 'Qwen3-Coder', reason: '中文代码优化' },
                    { label: '免费', result: 'DeepSeek-V3', reason: '免费且强大' }
                ]
            },
            {
                id: 'reasoning',
                question: '上下文需求？',
                options: [
                    { label: '超长（2M+）', result: 'Gemini 3 Pro', reason: '2M 上下文' },
                    { label: '长（200K）', result: 'Claude 4.5', reason: '推理稳定' },
                    { label: '复杂推理', result: 'o1/o3', reason: '推理最强但贵' }
                ]
            },
            {
                id: 'chat',
                question: '语言偏好？',
                options: [
                    { label: '通用', result: 'GPT-5.2', reason: '生态最成熟' },
                    { label: '中文', result: 'Qwen3 / DeepSeek', reason: '中文表现优异' },
                    { label: '实时信息', result: 'Perplexity', reason: '带引用搜索' }
                ]
            },
            {
                id: 'vertical',
                question: '领域？',
                options: [
                    { label: '医学', result: '氢离子', reason: '低幻觉、高循证' },
                    { label: '法律', result: '通义法睿', reason: '中文法律优化' },
                    { label: '编程专项', result: 'Qwen-Coder', reason: '代码专项优化' }
                ]
            }
        ]
    }
}

// 场景对照表（基于 AI工具全景图谱 v2.5 更新）
export const scenarioGuide = [
    { scenario: '日常开发主力', primary: 'Cursor', backup: 'Windsurf、Trae', budget: '$20/月' },
    { scenario: '预算有限开发', primary: 'Trae', backup: 'Zed + Gemini CLI', budget: '免费-$15/月' },
    { scenario: '快速原型验证', primary: 'Trae (Solo Builder)', backup: 'Replit', budget: '免费-$20/月' },
    { scenario: '中大型后端项目', primary: 'Qoder + Cursor', backup: 'Aider + Gemini CLI', budget: '$20/月' },
    { scenario: '关键方案/复杂重构', primary: 'Claude Code', backup: 'Gemini CLI', budget: '$20-200/月' },
    { scenario: '长文档调研/代码分析', primary: 'Gemini CLI', backup: 'Qwen CLI', budget: '免费' },
    { scenario: '企业团队协作', primary: 'Cursor Teams + Qoder', backup: 'Claude Code', budget: '$40-60/人/月' },
    { scenario: '视频内容创作', primary: '可灵', backup: 'Sora', budget: '免费-$20/月' }
]

export const getDecisionTree = (type) => decisionTrees[type]
