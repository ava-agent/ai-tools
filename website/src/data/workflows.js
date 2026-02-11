// 工作流推荐方案
// 基于调研文档中的工作流最佳实践

export const workflows = [
    {
        id: 'daily-dev',
        name: '日常开发流',
        nameZh: '日常开发流',
        description: '适用于日常功能开发、Bug修复、小型重构',
        steps: [
            { step: 1, action: '需求澄清', tool: 'Claude / DeepSeek', tip: '用 AI 澄清需求，生成验收标准' },
            { step: 2, action: '方案设计', tool: 'Cursor', tip: '在 IDE 中结合代码上下文设计方案' },
            { step: 3, action: '代码实现', tool: 'Cursor', tip: '使用 Composer 模式多文件协同' },
            { step: 4, action: '批量改动', tool: 'Gemini CLI', tip: '大范围格式化、重命名等批量操作' },
            { step: 5, action: '验证交付', tool: '手动测试', tip: '运行测试用例，确认功能正常' }
        ],
        tips: [
            '拆分任务为 3-7 个子任务，每步验证',
            '明确改动范围，告诉 AI "允许改"和"禁止改"的目录',
            '每步都要看 diff，不要直接接受'
        ],
        flowImage: '/images/daily_dev_flow.png'
    },
    {
        id: 'rapid-prototype',
        name: '快速原型流',
        nameZh: '快速原型流',
        description: '适用于 MVP 验证、Demo 开发、概念验证',
        steps: [
            { step: 1, action: '想法描述', tool: 'Trae (Solo)', tip: '用自然语言描述想法' },
            { step: 2, action: '快速实现', tool: 'Trae (Solo)', tip: 'Solo Builder 模式快速生成原型' },
            { step: 3, action: '实时调试', tool: 'Trae', tip: '实时预览和调整' },
            { step: 4, action: '快速部署', tool: 'Windsurf / Replit', tip: 'Windsurf Cascade AI 能力强，或一键部署到云端' }
        ],
        tips: [
            '不要追求完美，先跑通再优化',
            '利用免费额度快速试错（Trae 完全免费）',
            '原型验证后再决定是否继续投入',
            '原型验证成功后，用主力 IDE 重新开发生产版本'
        ],
        flowImage: '/images/rapid_prototype_flow.png'
    },
    {
        id: 'design-flow',
        name: '方案设计流',
        nameZh: '方案设计流',
        description: '适用于架构设计、技术调研、方案评审',
        steps: [
            { step: 1, action: '初步调研', tool: 'DeepSeek', tip: '成本低，快速获取背景信息' },
            { step: 2, action: '深度分析', tool: 'Claude', tip: '长上下文，深度推理' },
            { step: 3, action: '方案设计', tool: 'Claude / Gemini', tip: '输出结构化的技术方案' },
            { step: 4, action: '汇报材料', tool: 'NotebookLM', tip: '生成 PPT、视频等汇报材料' }
        ],
        tips: [
            '关键结论要交叉验证（用多个模型）',
            '敏感信息上传前要脱敏',
            '调研结论要抽查原文来源'
        ]
    },
    {
        id: 'refactor-flow',
        name: '大型重构流',
        nameZh: '大型重构流',
        description: '适用于大规模代码重构、模块拆分、架构升级',
        steps: [
            { step: 1, action: '仓库理解', tool: 'Gemini CLI', tip: '1M 上下文，全局理解代码库' },
            { step: 2, action: '影响分析', tool: 'Claude Code', tip: '分析改动影响面' },
            { step: 3, action: '分步重构', tool: 'Cursor', tip: '每步只改一个模块' },
            { step: 4, action: '回归测试', tool: '自动化测试', tip: '每步都要跑测试' },
            { step: 5, action: 'Code Review', tool: 'Claude', tip: '让 AI 帮助审查改动' }
        ],
        tips: [
            '先给范围限制，分步执行',
            '每次改动前确保 Git 工作区干净',
            '重要节点手动创建 Git tag 作为检查点'
        ],
        flowImage: '/images/refactoring_flow.png'
    },
    {
        id: 'legacy-takeover',
        name: '存量项目接手流',
        nameZh: '存量项目接手流',
        description: '适用于接手他人项目、理解遗留代码',
        steps: [
            { step: 1, action: '代码库文档生成', tool: 'Qoder', tip: '利用 Repo Wiki 生成代码库文档' },
            { step: 2, action: '依赖关系分析', tool: 'Gemini CLI', tip: '分析核心模块依赖关系' },
            { step: 3, action: '阅读关键代码', tool: 'Cursor', tip: '阅读关键代码，添加注释' },
            { step: 4, action: '总结技术债务', tool: 'Claude Code', tip: '总结技术债务和风险点' }
        ],
        tips: [
            '不要急于修改，先理解再动手',
            '关注代码中的业务逻辑，不只是技术实现',
            '记录遇到的问题，形成项目知识库'
        ],
        flowImage: '/images/legacy_takeover_flow.png'
    },
    {
        id: 'critical-task',
        name: '关键任务攻关流',
        nameZh: '关键任务攻关流',
        description: '适用于高难 Bug 定位、性能优化、复杂方案设计',
        steps: [
            { step: 1, action: '深度推理分析', tool: 'Claude Code', tip: '利用 Agent Teams 并行协作' },
            { step: 2, action: '搜索相关代码和日志', tool: 'Gemini CLI', tip: '1M 上下文全面覆盖' },
            { step: 3, action: '实施解决方案', tool: 'Cursor', tip: '逐文件审查改动' },
            { step: 4, action: '充分测试验证', tool: '手动', tip: '关键任务要格外谨慎' }
        ],
        tips: [
            '关键任务使用 Claude Code 深度推理',
            'Gemini CLI 1M 上下文搜索相关代码',
            '每步都要充分测试验证'
        ],
        flowImage: '/images/critical_task_flow.png'
    }
]

// 避坑指南
export const pitfalls = {
    ide: [
        { issue: '一次让 AI 改太多文件', solution: '拆成 3-7 个子任务，每步验证' },
        { issue: '不限制改动范围', solution: '明确"允许改"和"禁止改"的目录' },
        { issue: '忽视代码审查', solution: '强制 diff 审查，不要直接接受' },
        { issue: '过度依赖单一工具', solution: '关键任务用第二模型交叉验证' },
        { issue: '不关注成本变化', solution: '定期检查订阅和用量' }
    ],
    cli: [
        { issue: '自动执行危险命令', solution: '关闭 YOLO 模式，人工确认' },
        { issue: '大范围自动重构', solution: '先给范围限制，分步执行' },
        { issue: '忽视 Git 状态', solution: '每次改动前确保干净工作区' },
        { issue: '不保存检查点', solution: '重要节点手动创建 Git tag' }
    ],
    model: [
        { issue: '盲目相信模型输出', solution: '关键结论要来源核验' },
        { issue: '上传敏感信息', solution: '先脱敏再使用云模型' },
        { issue: '忽视上下文限制', solution: '长文档先分段处理' },
        { issue: '单一模型依赖', solution: '重要决策用多模型交叉验证' }
    ]
}

// Prompt 模板
export const promptTemplates = [
    {
        name: '需求澄清模板',
        template: `你是[角色]，我要做[目标]。
背景是[现状]，约束是[时间/范围/技术栈]。
请输出：
1) 需要确认的 8 个问题
2) 验收标准（DoD）
3) 风险点与规避策略`
    },
    {
        name: '代码改动模板',
        template: `只允许修改：[目录/文件]
禁止修改：[目录/文件]
先输出：改动清单 + 影响面 + 回归点
每步输出 diff 等你确认`
    }
]

export const getWorkflowById = (id) => workflows.find(w => w.id === id)
