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
                yes: { result: 'Trae', reason: 'Solo 双模式，免费层可用' },
                no: 'budget-no-2'
            },
            {
                id: 'budget-no-2',
                question: '需要中文优化？',
                yes: { result: 'Trae', reason: '国内生态友好，免费层+Pro $10/月' },
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
    },
    multimodal: {
        title: '多模态工具选型决策树',
        nodes: [
            {
                id: 'start',
                question: '主要创作内容类型？',
                options: [
                    { label: '图像生成', next: 'image' },
                    { label: '视频生成', next: 'video' },
                    { label: '音频/音乐', next: 'audio' },
                    { label: '3D 模型', next: '3d' }
                ]
            },
            {
                id: 'image',
                question: '需要什么风格？',
                options: [
                    { label: '艺术创作/高品质', result: 'Midjourney', reason: '艺术风格业界领先' },
                    { label: '含文字的设计', result: 'GPT-5 图像生成', reason: '文字渲染最强，对话式迭代' },
                    { label: '开源/本地部署', result: 'FLUX', reason: 'Schnell 完全免费开源' },
                    { label: '中文/国产', result: '即梦', reason: '中文提示词最佳，免费友好' }
                ]
            },
            {
                id: 'video',
                question: '预算和质量要求？',
                options: [
                    { label: '最高画质', result: 'Sora', reason: '电影级质感，物理模拟最强' },
                    { label: '性价比高', result: '可灵', reason: '动作连贯，免费额度慷慨' },
                    { label: '专业影视', result: 'Runway Gen-4', reason: '精确运动控制，4K 输出' },
                    { label: '创意短视频', result: 'Pika', reason: '价格亲民，创意特效丰富' }
                ]
            },
            {
                id: 'audio',
                question: '音频类型？',
                options: [
                    { label: '音乐/歌曲', result: 'Suno', reason: '完整歌曲含人声，60 秒出歌' },
                    { label: '配音/语音', result: 'ElevenLabs', reason: '语音质量最强，74 种语言' }
                ]
            },
            {
                id: '3d',
                question: '语言偏好？',
                options: [
                    { label: '英文/国际', result: 'Meshy', reason: '易用，支持 PBR 材质导出' },
                    { label: '中文优先', result: '混元3D', reason: '中文提示词理解最佳' }
                ]
            }
        ]
    },
    agent: {
        title: 'Agent 平台选型决策树',
        nodes: [
            {
                id: 'start',
                question: '你的技术背景？',
                options: [
                    { label: '无代码/低代码', next: 'nocode' },
                    { label: '会编程', next: 'developer' }
                ]
            },
            {
                id: 'nocode',
                question: '主要用途？',
                options: [
                    { label: 'Bot/对话助手', result: 'Coze', reason: '无代码搭建，国内平台集成强' },
                    { label: '工作流自动化', result: 'n8n', reason: '自托管免费，400+ 集成' },
                    { label: '自主调研/数据分析', result: 'Manus', reason: '通用 AI Agent，自然语言驱动' }
                ]
            },
            {
                id: 'developer',
                question: '偏好哪个模型生态？',
                options: [
                    { label: 'Claude（代码最强）', result: 'Claude Agent SDK', reason: '代码能力最强，200K 上下文' },
                    { label: 'OpenAI（生态最大）', result: 'OpenAI Agents SDK', reason: '官方出品，设计简洁' },
                    { label: 'Gemini（上下文最长）', result: 'Google ADK', reason: '2M 上下文，Google 生态' },
                    { label: '不绑定/自由选择', next: 'framework' }
                ]
            },
            {
                id: 'framework',
                question: '需求复杂度？',
                options: [
                    { label: '复杂有状态 Agent', result: 'LangChain', reason: 'LangGraph 有状态编排最强' },
                    { label: '多 Agent 协作', result: 'CrewAI', reason: '角色分工明确，多 Agent 协作' },
                    { label: '自托管/私有部署', result: 'Dify', reason: '开源，Docker 一键部署' }
                ]
            }
        ]
    },
    mcp: {
        title: 'MCP 工具选型决策树',
        nodes: [
            {
                id: 'start',
                question: '你需要 MCP 做什么？',
                options: [
                    { label: '增强 AI 编码', next: 'coding' },
                    { label: '连接外部服务', next: 'services' },
                    { label: '数据和可视化', next: 'data' },
                    { label: '团队协作', next: 'collab' }
                ]
            },
            {
                id: 'coding',
                question: '具体需求？',
                options: [
                    { label: '查文档防幻觉', result: 'Context7', reason: '零配置，实时拉取最新文档' },
                    { label: '浏览器自动化/测试', result: 'Playwright MCP', reason: '微软官方，E2E 测试完整支持' },
                    { label: '增强推理能力', result: 'Sequential Thinking', reason: 'Anthropic 官方，分步推理' },
                    { label: 'AI 记忆/偏好', result: 'OpenMemory MCP', reason: '跨会话持久化记忆' }
                ]
            },
            {
                id: 'services',
                question: '哪个平台？',
                options: [
                    { label: 'GitHub', result: 'GitHub MCP', reason: 'Issue/PR/Code Search 全覆盖' },
                    { label: 'Supabase', result: 'Supabase MCP', reason: '数据库/Auth/存储/Functions' },
                    { label: 'Vercel', result: 'Vercel MCP', reason: '部署管理、日志查询' },
                    { label: 'Figma', result: 'Figma MCP', reason: '设计稿转代码' }
                ]
            },
            {
                id: 'data',
                question: '数据类型？',
                options: [
                    { label: '网站爬取', result: 'Firecrawl MCP', reason: '智能爬取转 Markdown' },
                    { label: '图表可视化', result: 'AntV Chart MCP', reason: '25+ 种图表类型' },
                    { label: '网络搜索', result: 'Brave Search MCP', reason: '隐私优先，独立索引' }
                ]
            },
            {
                id: 'collab',
                question: '哪个平台？',
                options: [
                    { label: 'Notion', result: 'Notion MCP', reason: '官方出品，21 种操作' },
                    { label: 'Jira/Confluence', result: 'Atlassian MCP', reason: '双平台集成' },
                    { label: 'API 开发', result: 'Postman MCP', reason: '100+ 工具，API 全流程' }
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
    { scenario: '视频内容创作', primary: '可灵 (Kling)', backup: 'Sora、Runway Gen-3/Gen-4', budget: '免费-$20/月' },
    { scenario: '图像设计/海报', primary: 'Midjourney', backup: 'GPT-5、即梦 (Jimeng)', budget: '免费-$30/月' },
    { scenario: '音乐/配乐创作', primary: 'Suno', backup: 'ElevenLabs', budget: '免费-$30/月' },
    { scenario: '构建 AI Agent', primary: 'Claude Agent SDK', backup: 'LangChain、Dify', budget: '按 API 用量' },
    { scenario: '工作流自动化', primary: 'n8n', backup: 'Coze', budget: '免费-$50/月' },
    { scenario: 'MCP 必装三件套', primary: 'Context7', backup: 'Playwright MCP、GitHub MCP', budget: '免费' }
]

export const getDecisionTree = (type) => decisionTrees[type]
