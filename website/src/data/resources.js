// 资源中心数据
const RESOURCE_ASSET_CHECKED_AT = '2026-07-02'
const RESOURCE_FRESHNESS_NOTE = '历史快照：非实时价格、模型或额度依据'
const LEGACY_UI_DEMO_LABEL = '2026-02 旧版界面演示'

export const RESOURCE_HISTORY_NOTICE = `资源中心包含当前项目导览及 2026-02 历史快照；工具视频均为${LEGACY_UI_DEMO_LABEL}，价格、模型、额度和产品状态请以当前官方来源为准。`

function withResourceMetadata(resource) {
    const isLegacyUiDemo = resource.type === 'video' && resource.id.startsWith('demo-') && resource.date === '2026-02'

    return {
        verificationStatus: 'historical',
        lastVerified: null,
        assetCheckedAt: RESOURCE_ASSET_CHECKED_AT,
        ...resource,
        title: isLegacyUiDemo ? `${resource.title}（${LEGACY_UI_DEMO_LABEL}）` : resource.title,
        titleEn: isLegacyUiDemo ? `${resource.titleEn} (Legacy UI Demo, 2026-02)` : resource.titleEn,
        freshnessNote: resource.freshnessNote || RESOURCE_FRESHNESS_NOTE,
        sources: resource.sources?.length ? resource.sources : [`/${resource.src}`]
    }
}

export const resources = [
    // ============= PPT/PDF =============
    {
        id: 'ai-dev-tool-ecosystem',
        title: 'AI 开发工具生态全景图',
        titleEn: 'AI Dev Tool Ecosystem 2026',
        type: 'pdf',
        description: '全面梳理 2026 年 AI 开发工具生态，涵盖 IDE、CLI、模型、多模态等多个维度的工具对比与选型建议。',
        src: 'pdfs/AI_Dev_Tool_Ecosystem_2026.pdf',
        tags: ['生态图谱', 'AI IDE', 'AI CLI', '选型'],
        date: '2026-02'
    },
    {
        id: 'agent-code-stack',
        title: 'Agent 编程技术栈',
        titleEn: 'Agent Code Stack 2026',
        type: 'pdf',
        description: '深入解析 Agent 编程的核心技术栈，包括 Agent 架构、MCP 协议、多 Agent 协作模式等前沿实践。',
        src: 'pdfs/Agent_Code_Stack_2026.pdf',
        tags: ['Agent', 'MCP', '技术栈', '架构'],
        date: '2026-02'
    },
    {
        id: 'agentic-development',
        title: 'Agentic Development 实战',
        titleEn: 'Agentic Development 2026',
        type: 'pdf',
        description: '从概念到实践，讲解如何利用 AI Agent 驱动的开发模式提升研发效率，收录若干项目案例示例。',
        src: 'pdfs/Agentic_Development_2026.pdf',
        tags: ['Agentic', '实战', '案例', '工作流模板'],
        date: '2026-02'
    },
    // ============= 专题视频 =============
    {
        id: 'project-intro-2026',
        title: 'AI 工具全书 12 秒导览',
        titleEn: 'AI Tools Handbook — 12-second Introduction',
        type: 'video',
        description: '从 AI IDE、CLI 和模型一路连接到 Agent、MCP 与 Skills，快速理解本站覆盖的工具版图。',
        src: 'hero-network.mp4',
        tags: ['项目导览', '生态图谱', '2026'],
        date: '2026-07',
        verificationStatus: 'verified',
        lastVerified: '2026-07-13',
        assetCheckedAt: '2026-07-13',
        freshnessNote: '当前项目导览',
        sources: ['/hero-network.mp4']
    },
    {
        id: 'ai-coding-tool-map',
        title: 'AI 编程工具地图',
        titleEn: 'AI Coding Tool Map',
        type: 'video',
        description: '一张图看懂 2026 年 AI 编程工具全景：从 IDE 到 CLI，从模型到 Agent，帮你快速定位适合自己的工具组合。',
        src: 'videos/AI_编程工具地图.mp4',
        tags: ['工具地图', '全景', '入门'],
        date: '2026-02'
    },
    {
        id: 'beyond-autocomplete',
        title: '超越自动补全：AI 编码智能体新浪潮',
        titleEn: 'Beyond Autocomplete: The New Wave of AI Coding Agents',
        type: 'video',
        description: 'AI 编码工具正从简单的代码补全进化为自主编码智能体，深度解析这一趋势的技术演进、代表性产品与未来方向。',
        src: 'videos/超越自动补全：AI_编码智能体新浪潮.mp4',
        tags: ['Agent', '趋势', '深度解析'],
        date: '2026-02'
    },
    // ============= 工具演示视频 =============
    {
        id: 'demo-cursor',
        title: 'Cursor 使用演示',
        titleEn: 'Cursor Demo',
        type: 'video',
        description: '2026-02 录制的旧版界面演示；当前工作流使用 Agent/Plan/Ask 术语，界面与功能请以官方版本为准。',
        src: 'videos/cursor.mp4',
        tags: ['Cursor', 'AI IDE', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-windsurf',
        title: 'Windsurf 使用演示',
        titleEn: 'Windsurf Demo',
        type: 'video',
        description: '2026-02 录制的旧版界面演示；当前 Cascade 使用 Plan/Code/Ask 模式，界面与功能请以官方版本为准。',
        src: 'videos/windsurf.mp4',
        tags: ['Windsurf', 'AI IDE', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-trae',
        title: 'TRAE 使用演示',
        titleEn: 'TRAE Demo',
        type: 'video',
        description: '2026-02 录制的旧版界面演示；现行术语为 TRAE Work / SOLO Agent，旧界面中的模式名称已合并更新。',
        src: 'videos/trae.mp4',
        tags: ['TRAE', 'AI IDE', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-claude-code',
        title: 'Claude Code 使用演示',
        titleEn: 'Claude Code Demo',
        type: 'video',
        description: 'Claude Code CLI 工具演示：Agent 模式、批量处理、项目级重构。',
        src: 'videos/claude-code.mp4',
        tags: ['Claude Code', 'AI CLI', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-gemini-cli',
        title: 'Gemini CLI 使用演示',
        titleEn: 'Gemini CLI Demo',
        type: 'video',
        description: 'Gemini CLI 使用演示：百万 Token 上下文、大型代码库分析。',
        src: 'videos/gemini-cli.mp4',
        tags: ['Gemini CLI', 'AI CLI', '演示', '长上下文'],
        date: '2026-02'
    },
    {
        id: 'demo-codex-cli',
        title: 'Codex CLI 使用演示',
        titleEn: 'Codex CLI Demo',
        type: 'video',
        description: 'OpenAI Codex CLI 使用演示：代码生成、任务自动化。',
        src: 'videos/codex-cli.mp4',
        tags: ['Codex', 'AI CLI', '演示', 'OpenAI'],
        date: '2026-02'
    },
    {
        id: 'demo-qoder',
        title: 'Qoder 使用演示',
        titleEn: 'Qoder Demo',
        type: 'video',
        description: 'Qoder IDE 使用演示：后端专项、Repo Wiki、Java/Go 项目理解。',
        src: 'videos/qoder.mp4',
        tags: ['Qoder', 'AI IDE', '演示', '后端'],
        date: '2026-02'
    },
    {
        id: 'demo-qoder-cli',
        title: 'Qoder CLI 使用演示',
        titleEn: 'Qoder CLI Demo',
        type: 'video',
        description: 'Qoder CLI 命令行工具演示：代码库分析、批量操作。',
        src: 'videos/qoder-cli.mp4',
        tags: ['Qoder', 'AI CLI', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-kiro',
        title: 'Kiro 使用演示',
        titleEn: 'Kiro Demo',
        type: 'video',
        description: 'AWS Kiro IDE 使用演示：Spec 驱动开发、自动化工作流。',
        src: 'videos/kiro.mp4',
        tags: ['Kiro', 'AI IDE', '演示', 'AWS'],
        date: '2026-02'
    },
    {
        id: 'demo-verdent',
        title: 'Verdent 使用演示',
        titleEn: 'Verdent Demo',
        type: 'video',
        description: 'Verdent 工具使用演示。',
        src: 'videos/verdent.mp4',
        tags: ['Verdent', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-antigravity',
        title: 'Antigravity 使用演示',
        titleEn: 'Antigravity Demo',
        type: 'video',
        description: 'Antigravity AI IDE 的 2026-02 旧版界面演示。',
        src: 'videos/antigravity.mp4',
        tags: ['Antigravity', 'AI IDE', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-chrome-ai',
        title: 'Chrome AI 插件演示',
        titleEn: 'Chrome AI Demo',
        type: 'video',
        description: 'Chrome AI 插件使用演示：浏览器内 AI 辅助功能。',
        src: 'videos/chrome-ai.mp4',
        tags: ['Chrome', 'AI 插件', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-codebuddy',
        title: 'CodeBuddy 使用演示',
        titleEn: 'CodeBuddy Demo',
        type: 'video',
        description: 'CodeBuddy IDE 使用演示。',
        src: 'videos/codebuddy.mp4',
        tags: ['CodeBuddy', 'AI IDE', '演示'],
        date: '2026-02'
    },
    {
        id: 'demo-opencode-cli',
        title: 'OpenCode CLI 使用演示',
        titleEn: 'OpenCode CLI Demo',
        type: 'video',
        description: 'OpenCode CLI 使用演示：开源 AI 命令行工具。',
        src: 'videos/opencode-cli.mp4',
        tags: ['OpenCode', 'AI CLI', '演示', '开源'],
        date: '2026-02'
    }
].map(withResourceMetadata)
