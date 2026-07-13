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
                question: '更重视成熟 Agent 协同？',
                yes: { result: 'Cursor', toolIds: ['cursor'], reason: 'Agent 体验成熟，适合多文件协同；具体模型与额度以官方页面为准' },
                no: { result: 'Windsurf', toolIds: ['windsurf'], reason: 'Cascade/Devin Desktop 生态，Pro $20/月起，需按新配额与 overage 评估' }
            },
            {
                id: 'budget-no',
                question: '需要快速原型？',
                yes: { result: 'Trae', toolIds: ['trae'], reason: 'Solo 双模式，免费层可用' },
                no: 'budget-no-2'
            },
            {
                id: 'budget-no-2',
                question: '需要中文优化？',
                yes: { result: 'Trae', toolIds: ['trae'], reason: '国内生态友好，免费层+Pro $10/月' },
                no: { result: 'Zed', toolIds: ['zed'], reason: '开源免费，性能极佳' }
            }
        ]
    },
    cli: {
        title: 'AI CLI 选型决策树',
        nodes: [
            {
                id: 'start',
                question: '预算充足？',
                yes: { result: 'Claude Code', toolIds: ['claude-code'], reason: '复杂代码理解和计划能力稳定' },
                no: 'cli-free'
            },
            {
                id: 'cli-free',
                question: '需要长上下文？',
                yes: { result: 'Gemini CLI', toolIds: ['gemini-cli'], reason: '长上下文友好，免费层额度以官方政策为准' },
                no: 'cli-free-2'
            },
            {
                id: 'cli-free-2',
                question: '需要 Git 集成？',
                yes: { result: 'Aider', toolIds: ['aider'], reason: '开源，Git 工作流' },
                no: { result: 'Qwen CLI', toolIds: ['qwen-cli'], reason: '中文生态友好，但当前需 Coding Plan、第三方 provider 或自带 API key；不再按免费层推荐' }
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
                    { label: '充足', result: 'Claude / Claude Code', toolIds: ['claude', 'claude-code'], reason: '代码理解和复杂重构稳定' },
                    { label: '中文项目', result: 'Qwen Coder', toolIds: ['qwen'], reason: '中文代码与国内云生态友好' },
                    { label: '低成本', result: 'DeepSeek V4 Flash', toolIds: ['deepseek'], reason: '中文与批处理 API 性价比高' }
                ]
            },
            {
                id: 'reasoning',
                question: '上下文需求？',
                options: [
                    { label: '超长上下文', result: 'Gemini', toolIds: ['gemini'], reason: '长上下文与多模态生态强' },
                    { label: '长（200K）', result: 'Claude', toolIds: ['claude'], reason: '推理和代码理解稳定' },
                    { label: '复杂推理', result: 'OpenAI 推理模型', toolIds: ['gpt'], reason: '适合复杂推理，成本通常更高' }
                ]
            },
            {
                id: 'chat',
                question: '语言偏好？',
                options: [
                    { label: '通用', result: 'GPT / OpenAI', toolIds: ['gpt'], reason: '生态成熟，工具链完整' },
                    { label: '中文', result: 'Qwen / DeepSeek', toolIds: ['qwen', 'deepseek'], reason: '中文表现优异，国内路径清晰' },
                    { label: '实时信息', result: 'Perplexity', toolIds: ['perplexity'], reason: '带引用搜索' }
                ]
            },
            {
                id: 'vertical',
                question: '领域？',
                options: [
                    { label: '医学', result: '氢离子', toolIds: ['qinglizi'], reason: '医学资料检索辅助，结论需人工复核' },
                    { label: '法律', result: 'Qwen / 通用模型辅助', toolIds: ['qwen'], reason: '法律资料整理辅助，结论需人工复核' },
                    { label: '编程专项', result: 'Qwen-Coder', toolIds: ['qwen'], reason: '代码专项优化' }
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
                    { label: '艺术创作/高品质', result: 'Midjourney', toolIds: ['midjourney'], reason: '艺术风格成熟，适合高质感视觉探索' },
                    { label: '含文字的设计', result: 'GPT Image / ChatGPT 图像', toolIds: ['dalle'], reason: '以 OpenAI Images 当前模型与 ChatGPT 图像入口为准，适合对话式迭代' },
                    { label: '开源/本地部署', result: 'FLUX', toolIds: ['flux'], reason: 'FLUX.1 [schnell] 开放权重，本地硬件、API 和商用授权需分开核验' },
                    { label: '中文/国产', result: '即梦', toolIds: ['jimeng'], reason: '中文创作链路完整，消费者积分/会员和火山 API 需按当前入口核算' }
                ]
            },
            {
                id: 'video',
                question: '预算和质量要求？',
                options: [
                    { label: '最高画质', result: 'Sora', toolIds: ['sora'], reason: '高质感视频生成，效果与额度需按当前入口核验' },
                    { label: '预算可控', result: '海螺 AI', toolIds: ['hailuo'], reason: '会员 credits 与 Open Platform API 计费可分开核算，按模型、时长和分辨率估算' },
                    { label: '专业影视', result: 'Runway', toolIds: ['runway'], reason: '专业视频编辑生态成熟，清晰度和控制能力以当前套餐为准' },
                    { label: '创意短视频', result: 'Pika', toolIds: ['pika'], reason: '适合创意短视频，套餐与生成额度需按当前说明核验' }
                ]
            },
            {
                id: 'audio',
                question: '音频类型？',
                options: [
                    { label: '音乐/歌曲', result: 'Suno', toolIds: ['suno'], reason: '完整歌曲含人声，60 秒出歌' },
                    { label: '配音/语音', result: 'ElevenLabs', toolIds: ['elevenlabs'], reason: '多语言语音生态成熟，语言数量和额度以官方说明为准' }
                ]
            },
            {
                id: '3d',
                question: '语言偏好？',
                options: [
                    { label: '英文/国际', result: 'Meshy', toolIds: ['meshy'], reason: '易用，支持 PBR 材质导出' },
                    { label: '中文优先', result: '混元3D', toolIds: ['hunyuan3d'], reason: '中文提示词理解最佳' }
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
                    { label: 'Bot/对话助手', result: 'Dify', toolIds: ['dify'], reason: '支持低代码 Agent、Workflow、RAG 和可观测工作流' },
                    { label: '工作流自动化', result: 'n8n', toolIds: ['n8n'], reason: '执行计费清晰，Community Edition 需看许可边界' },
                    { label: '自主调研/数据分析', result: 'Manus', toolIds: ['manus'], reason: '通用 AI Agent，自然语言驱动' }
                ]
            },
            {
                id: 'developer',
                question: '偏好哪个模型生态？',
                options: [
                    { label: 'Claude（代码任务）', result: 'Claude Agent SDK', toolIds: ['claude-agent-sdk'], reason: 'Claude Code agent loop 库化，适合代码任务' },
                    { label: 'OpenAI（生态最大）', result: 'OpenAI Agents SDK', toolIds: ['openai-agents-sdk'], reason: '轻量多 Agent 框架，provider-agnostic' },
                    { label: 'Gemini（Google 生态）', result: 'Google ADK', toolIds: ['google-adk'], reason: '多语言 ADK，Google/Gemini 工具能力' },
                    { label: '不绑定/自由选择', next: 'framework' }
                ]
            },
            {
                id: 'framework',
                question: '需求复杂度？',
                options: [
                    { label: '复杂有状态 Agent', result: 'LangChain', toolIds: ['langchain'], reason: '适合有状态编排和复杂工作流' },
                    { label: '多 Agent 协作', result: 'CrewAI', toolIds: ['crewai'], reason: '角色分工明确，多 Agent 协作' },
                    { label: '自托管/私有部署', result: 'Dify', toolIds: ['dify'], reason: '开源，Docker 一键部署' }
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
                    { label: '查文档防幻觉', result: 'Context7', toolIds: ['context7'], reason: '零配置，实时拉取最新文档' },
                    { label: '浏览器自动化/测试', result: 'Playwright MCP', toolIds: ['playwright-mcp'], reason: '微软官方，E2E 测试完整支持' },
                    { label: '增强推理能力', result: 'Sequential Thinking', toolIds: ['sequential-thinking-mcp'], reason: 'MCP 参考 server，提供结构化分步推理工具' },
                    { label: 'AI 记忆/偏好', result: 'OpenMemory MCP', toolIds: ['openmemory-mcp'], reason: '跨会话持久化记忆' }
                ]
            },
            {
                id: 'services',
                question: '哪个平台？',
                options: [
                    { label: 'GitHub', result: 'GitHub MCP', toolIds: ['github-mcp'], reason: 'Issue/PR/Code Search 全覆盖' },
                    { label: 'Supabase', result: 'Supabase MCP', toolIds: ['supabase-mcp'], reason: '数据库/Auth/存储/Functions' },
                    { label: 'Vercel', result: 'Vercel MCP', toolIds: ['vercel-mcp'], reason: '部署管理、日志查询' },
                    { label: 'Figma', result: 'Figma MCP', toolIds: ['figma-mcp'], reason: '设计稿转代码' }
                ]
            },
            {
                id: 'data',
                question: '数据类型？',
                options: [
                    { label: '网站爬取', result: 'Firecrawl MCP', toolIds: ['firecrawl-mcp'], reason: '智能爬取转 Markdown' },
                    { label: '图表可视化', result: 'AntV Chart MCP', toolIds: ['antv-chart-mcp'], reason: '25+ 种图表类型' },
                    { label: '网络搜索', result: 'Brave Search MCP', toolIds: ['brave-search-mcp'], reason: '隐私优先，独立索引' }
                ]
            },
            {
                id: 'collab',
                question: '哪个平台？',
                options: [
                    { label: 'Notion', result: 'Notion MCP', toolIds: ['notion-mcp'], reason: '官方出品，21 种操作' },
                    { label: 'Jira/Confluence', result: 'Atlassian MCP', toolIds: ['atlassian-mcp'], reason: '双平台集成' },
                    { label: 'API 开发', result: 'Postman MCP', toolIds: ['postman-mcp'], reason: '100+ 工具，API 全流程' }
                ]
            }
        ]
    },
    skill: {
        title: 'AI Skills 选型决策树',
        nodes: [
            {
                id: 'start',
                question: '你想增强哪类 Codex/Claude Code 能力？',
                options: [
                    { label: '前端/体验', next: 'frontend' },
                    { label: '测试/质量', next: 'quality' },
                    { label: '安全审计', next: 'security' },
                    { label: '数据/内容', next: 'data-content' }
                ]
            },
            {
                id: 'frontend',
                question: '前端工作重点是什么？',
                options: [
                    {
                        label: '设计实现',
                        result: 'frontend-app-builder',
                        toolIds: ['frontend-design-skill'],
                        reason: '已核验的前端应用与页面现代化工作流，适合把需求或设计转成页面，并用浏览器验证体验。'
                    },
                    {
                        label: 'Web App 测试',
                        result: 'webapp-testing',
                        toolIds: ['webapp-testing-skill'],
                        reason: '适合本地应用烟测、浏览器验证、交互回归和响应式问题定位。'
                    }
                ]
            },
            {
                id: 'quality',
                question: '更关注哪种质量保障？',
                options: [
                    {
                        label: '第二视角审查',
                        result: 'differential-review',
                        toolIds: ['differential-review-skill'],
                        reason: '适合让独立审查工作流检查 PR、commit 或 diff 的风险、blast radius 和 test coverage。'
                    },
                    {
                        label: '测试策略',
                        result: 'test-driven-development',
                        reason: '适合为复杂输入、边界条件和不变量补测试，避免只测 happy path。'
                    }
                ]
            },
            {
                id: 'security',
                question: '安全检查重点是什么？',
                options: [
                    {
                        label: '代码扫描',
                        result: 'semgrep',
                        toolIds: ['semgrep-skill'],
                        reason: '适合用规则扫描常见安全问题，并把发现转成可审查的修复建议。'
                    },
                    {
                        label: '默认配置风险',
                        result: 'security-best-practices / threat-model',
                        reason: '适合发现默认不安全配置、误用风险和容易踩坑的 API 设计；进入详情页前先按当前技术栈做安全复核。'
                    }
                ]
            },
            {
                id: 'data-content',
                question: '数据或内容任务类型？',
                options: [
                    {
                        label: 'Supabase',
                        result: 'supabase',
                        toolIds: ['supabase-skill'],
                        reason: '适合数据库、Auth、Realtime 和 Supabase 项目的实现与诊断。'
                    },
                    {
                        label: '研究/周报',
                        result: 'Perplexity',
                        toolIds: ['perplexity'],
                        reason: '适合带引用的资料研究、证据整理和结构化内容产出。'
                    }
                ]
            }
        ]
    }
}

// 场景对照表（基于 AI工具全景图谱 v2.5 更新）
export const scenarioGuide = [
    { scenario: '日常开发主力', primary: 'Cursor', primaryToolIds: ['cursor'], backup: 'Windsurf、Trae', budget: '$20/月' },
    { scenario: '预算有限开发', primary: 'Trae', primaryToolIds: ['trae'], backup: 'Zed + Gemini CLI', budget: '免费-$20/月' },
    { scenario: '快速原型验证', primary: 'Trae (Solo Builder)', primaryToolIds: ['trae'], backup: 'Replit', budget: '免费-$20/月' },
    { scenario: '中大型后端项目', primary: 'Qoder + Cursor', primaryToolIds: ['qoder', 'cursor'], backup: 'Aider + Gemini CLI', budget: '$20/月' },
    { scenario: '关键方案/复杂重构', primary: 'Claude Code', primaryToolIds: ['claude-code'], backup: 'Gemini CLI', budget: '$20-200/月' },
    { scenario: '长文档调研/代码分析', primary: 'Gemini CLI', primaryToolIds: ['gemini-cli'], backup: 'OpenCode；Qwen CLI 需 Coding Plan/API provider', budget: 'Gemini CLI 免费层；Qwen 需计划/API' },
    { scenario: '企业团队协作', primary: 'Cursor Teams + Qoder', primaryToolIds: ['cursor', 'qoder'], backup: 'Claude Code', budget: '$40-60/人/月' },
    { scenario: '视频内容创作', primary: 'Runway', primaryToolIds: ['runway'], backup: '海螺 AI、Pika', budget: '按 credits 与时长核算' },
    { scenario: '图像设计/海报', primary: 'Midjourney', primaryToolIds: ['midjourney'], backup: 'GPT Image、即梦 (Jimeng)', budget: '免费-$30/月' },
    { scenario: '音乐/配乐创作', primary: 'Suno', primaryToolIds: ['suno'], backup: 'ElevenLabs', budget: '免费-$30/月' },
    { scenario: '构建 AI Agent', primary: 'Claude Agent SDK', primaryToolIds: ['claude-agent-sdk'], backup: 'LangChain、Dify', budget: '按 API 用量' },
    { scenario: '工作流自动化', primary: 'n8n', primaryToolIds: ['n8n'], backup: 'Make、Zapier', budget: '20€/mo 起；自托管看许可' },
    { scenario: 'MCP 必装三件套', primary: 'Context7', primaryToolIds: ['context7'], backup: 'Playwright MCP、GitHub MCP', budget: '免费' }
]

const decisionTreeAliases = {
    llm: 'model'
}

export const getDecisionTree = (type) => decisionTrees[decisionTreeAliases[type] || type]
