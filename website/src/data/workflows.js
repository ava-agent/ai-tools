// 可编辑工作流模板
// 基于公开产品能力整理，执行前按团队环境验证

const WORKFLOW_LAST_REVIEWED = '2026-07-13'

const OFFICIAL_SOURCES = {
    cursorModes: 'https://docs.cursor.com/en/agent/modes',
    traeChangelog: 'https://www.trae.ai/changelog',
    windsurfCascadeModes: 'https://docs.windsurf.com/windsurf/cascade/modes',
    deepseekDocs: 'https://api-docs.deepseek.com/',
    claudeDocs: 'https://docs.anthropic.com/en/docs/overview',
    geminiDocs: 'https://ai.google.dev/gemini-api/docs',
    notebookLmHelp: 'https://support.google.com/notebooklm/answer/16164461',
    geminiCli: 'https://github.com/google-gemini/gemini-cli',
    claudeCode: 'https://code.claude.com/docs/en/overview',
    claudeCodeAgentTeams: 'https://code.claude.com/docs/en/agent-teams',
    qoderRepoWiki: 'https://docs.qoder.com/user-guide/repo-wiki'
}

export const workflows = [
    {
        id: 'daily-dev',
        name: '日常开发流',
        nameZh: '日常开发流',
        description: '适用于功能开发、Bug 修复、小型重构',
        lastReviewed: WORKFLOW_LAST_REVIEWED,
        sources: [OFFICIAL_SOURCES.cursorModes],
        recommendedStack: [
            { role: '主力实现', tool: 'Cursor', reason: '用 Agent 负责代码实现、上下文补全和多文件改动' },
            { role: '规划与审查', tool: 'Cursor', reason: 'Cursor Agent/Plan/Ask：复杂任务先用 Plan 拆解，再用 Ask 只读核对上下文与 diff' }
        ],
        steps: [
            { step: 1, action: '代码实现', tool: 'Cursor', tip: '复杂任务先用 Plan 明确步骤，再用 Agent 实现；限定只修改必要目录' },
            { step: 2, action: '审查 diff', tool: 'Cursor', tip: '用 Ask 只读核对相关上下文，并逐文件审查 diff，不要批量接受所有改动' },
            { step: 3, action: '验证功能', tool: '手动测试', tip: '运行测试用例，验证功能，每个子任务完成后都要验证' },
            { step: 4, action: '提交代码', tool: 'Git', tip: '提交代码，保持工作区干净，下一步前确保 Git 状态正常' }
        ],
        tips: [
            '拆分任务为 3-7 个子任务，每步验证',
            '明确"允许改"和"禁止改"的目录',
            '每步都要看 diff，不要直接接受'
        ],
        flowImage: 'images/daily_dev_flow.png'
    },
    {
        id: 'rapid-prototype',
        name: '快速原型流',
        nameZh: '快速原型流',
        description: '适用于 MVP 验证、Demo 开发、概念验证',
        lastReviewed: WORKFLOW_LAST_REVIEWED,
        sources: [OFFICIAL_SOURCES.traeChangelog, OFFICIAL_SOURCES.windsurfCascadeModes],
        recommendedStack: [
            { role: '0→1 原型', tool: 'TRAE Work', reason: '用 TRAE Work / SOLO Agent 生成并迭代可运行原型' },
            { role: '快速调整', tool: 'Windsurf', reason: '用 Cascade Plan/Code/Ask 分别规划、实施和只读核对' }
        ],
        steps: [
            { step: 1, action: '想法描述', tool: 'TRAE Work (SOLO Agent)', tip: '用自然语言描述目标与边界，0→1 生成原型，先跑通核心链路' },
            { step: 2, action: '迭代优化', tool: 'TRAE Work (SOLO Agent)', tip: '继续小步迭代，每轮明确验收条件并审查改动' },
            { step: 3, action: '快速调整', tool: 'Windsurf', tip: '使用 Cascade Plan 规划、Code 实施、Ask 只读核对' },
            { step: 4, action: '验证决策', tool: '手动', tip: '验证核心功能，决定是否继续投入，原型通过后再投入生产开发' }
        ],
        tips: [
            '原型阶段可控制投入，但必须保留安全、可运行、可回滚的最低质量线',
            '利用免费额度快速试错',
            '原型验证成功后，用主力 IDE 重新开发生产版本'
        ],
        flowImage: 'images/rapid_prototype_flow.png'
    },
    {
        id: 'design-flow',
        name: '方案设计流',
        nameZh: '方案设计流',
        description: '适用于架构设计、技术调研、方案评审',
        lastReviewed: WORKFLOW_LAST_REVIEWED,
        sources: [
            OFFICIAL_SOURCES.deepseekDocs,
            OFFICIAL_SOURCES.claudeDocs,
            OFFICIAL_SOURCES.geminiDocs,
            OFFICIAL_SOURCES.notebookLmHelp
        ],
        recommendedStack: [
            { role: '低成本调研', tool: 'DeepSeek', reason: '先收集背景信息和备选路线' },
            { role: '深度推理', tool: 'Claude', reason: '用于长上下文分析和方案权衡' },
            { role: '交叉验证', tool: 'Gemini', reason: '对关键结论做第二模型检查' }
        ],
        steps: [
            { step: 1, action: '初步调研', tool: 'DeepSeek', tip: '成本低，快速获取背景信息' },
            { step: 2, action: '深度分析', tool: 'Claude', tip: '长上下文，深度推理' },
            { step: 3, action: '方案设计', tool: 'Claude / Gemini', toolIds: ['claude', 'gemini'], tip: '输出结构化的技术方案' },
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
        description: '适用于架构升级、模块拆分、技术栈迁移',
        lastReviewed: WORKFLOW_LAST_REVIEWED,
        sources: [
            OFFICIAL_SOURCES.geminiCli,
            OFFICIAL_SOURCES.claudeCode,
            OFFICIAL_SOURCES.cursorModes,
            OFFICIAL_SOURCES.qoderRepoWiki
        ],
        recommendedStack: [
            { role: '代码库全景', tool: 'Gemini CLI', reason: '先建立全局依赖和模块地图' },
            { role: '重构计划', tool: 'Claude Code', reason: '拆解影响面、风险和回归点' },
            { role: '分步实现', tool: 'Cursor', reason: '按计划小步改动并审查 diff' }
        ],
        steps: [
            { step: 1, action: '全局理解代码库', tool: 'Gemini CLI', tip: '1M 上下文全局理解代码库，生成代码库全景文档' },
            { step: 2, action: '分析改动影响面', tool: 'Claude Code', tip: '分析改动影响面和风险点，生成详细的重构计划' },
            { step: 3, action: '后端业务理解', tool: 'Qoder', tip: '后端项目用 Repo Wiki 理解业务，生成架构文档辅助决策' },
            { step: 4, action: '分步执行重构', tool: 'Cursor', tip: '用 Plan 固化步骤，再用 Agent 小步实施，最后用 Ask 只读核对影响面' },
            { step: 5, action: '回归测试', tool: '自动化测试', tip: '每步完成后运行回归测试，确保功能不受影响' },
            { step: 6, action: '保留可回滚记录', tool: 'Git', tip: '在隔离分支上保持小提交，tag 仅用于已验证的稳定里程碑' }
        ],
        tips: [
            '先给范围限制，分步执行',
            '每次改动前确保 Git 工作区干净',
            '使用隔离分支与小提交保留回滚点，tag 仅用于稳定里程碑'
        ],
        flowImage: 'images/refactoring_flow.png'
    },
    {
        id: 'legacy-takeover',
        name: '存量项目接手流',
        nameZh: '存量项目接手流',
        description: '适用于接手他人项目、理解遗留代码',
        lastReviewed: WORKFLOW_LAST_REVIEWED,
        sources: [
            OFFICIAL_SOURCES.qoderRepoWiki,
            OFFICIAL_SOURCES.geminiCli,
            OFFICIAL_SOURCES.cursorModes,
            OFFICIAL_SOURCES.claudeCode
        ],
        recommendedStack: [
            { role: '文档生成', tool: 'Qoder', reason: '先生成 Repo Wiki 和项目结构说明' },
            { role: '依赖分析', tool: 'Gemini CLI', reason: '识别关键模块和调用链' },
            { role: '技术债总结', tool: 'Claude Code', reason: '整理风险、债务和接手顺序' }
        ],
        steps: [
            { step: 1, action: '代码库文档生成', tool: 'Qoder', tip: '利用 Repo Wiki 生成代码库文档' },
            { step: 2, action: '依赖关系分析', tool: 'Gemini CLI', tip: '分析核心模块依赖关系' },
            { step: 3, action: '阅读关键代码', tool: 'Cursor', tip: '使用 Ask 只读理解关键代码；需要修改时先用 Plan，再交给 Agent 实施' },
            { step: 4, action: '总结技术债务', tool: 'Claude Code', tip: '总结技术债务和风险点' }
        ],
        tips: [
            '不要急于修改，先理解再动手',
            '关注代码中的业务逻辑，不只是技术实现',
            '记录遇到的问题，形成项目知识库'
        ],
        flowImage: 'images/legacy_takeover_flow.png'
    },
    {
        id: 'critical-task',
        name: '关键任务攻关流',
        nameZh: '关键任务攻关流',
        description: '适用于高难 Bug 定位、性能优化、复杂方案设计',
        lastReviewed: WORKFLOW_LAST_REVIEWED,
        sources: [
            OFFICIAL_SOURCES.claudeCodeAgentTeams,
            OFFICIAL_SOURCES.geminiCli,
            OFFICIAL_SOURCES.cursorModes
        ],
        recommendedStack: [
            { role: '深度定位', tool: 'Claude Code', reason: '分析复杂原因链和修复路径' },
            { role: '全局搜索', tool: 'Gemini CLI', reason: '覆盖日志、调用链和跨目录上下文' },
            { role: '谨慎落地', tool: 'Cursor', reason: '逐文件实施并保留人工审查' }
        ],
        steps: [
            { step: 1, action: '深度推理分析', tool: 'Claude Code', tip: 'Agent Teams 仍属 experimental 且默认关闭，仅用于可独立并行的任务；顺序任务或强依赖任务优先单会话/子代理' },
            { step: 2, action: '搜索相关代码和日志', tool: 'Gemini CLI', tip: '1M 上下文全面覆盖' },
            { step: 3, action: '实施解决方案', tool: 'Cursor', tip: '先用 Plan 限定范围，再用 Agent 实施，最后用 Ask 只读审查并逐文件确认' },
            { step: 4, action: '充分测试验证', tool: '手动', tip: '关键任务要格外谨慎' }
        ],
        tips: [
            '关键任务使用 Claude Code 深度推理',
            'Agent Teams 只适合边界清晰、可独立并行的工作',
            'Gemini CLI 1M 上下文搜索相关代码',
            '每步都要充分测试验证'
        ],
        flowImage: 'images/critical_task_flow.png'
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
        { issue: '不保存检查点', solution: '使用隔离分支和小提交，tag 仅用于稳定里程碑' }
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
