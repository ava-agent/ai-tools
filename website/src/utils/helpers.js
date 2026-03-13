// 类别标签映射
const categoryLabels = {
  ide: 'AI IDE',
  cli: 'AI CLI',
  llm: 'AI 模型',
  multimodal: '多模态',
  agent: 'Agent',
  mcp: 'MCP 工具',
  skill: 'AI 技能',
  // 兼容旧格式
  IDE: 'AI IDE',
  LLM: 'AI 模型',
  'IDE插件': 'IDE 插件'
}

export function getCategoryLabel(category) {
  return categoryLabels[category] || category
}

// 类别颜色映射
const categoryColors = {
  ide: 'bg-blue-500',
  cli: 'bg-green-500',
  llm: 'bg-purple-500',
  multimodal: 'bg-pink-500',
  agent: 'bg-orange-500',
  mcp: 'bg-cyan-500',
  skill: 'bg-amber-500'
}

export function getCategoryColor(category) {
  return categoryColors[category] || 'bg-gray-500'
}

// 工具名称解析：从显示名称查找工具ID
// excludeNames: 不需要解析的特殊名称列表
export function resolveToolId(name, tools, excludeNames = []) {
  if (!name || excludeNames.includes(name)) return null
  const normalized = name.toLowerCase().replace(/\s+/g, '')
  // 优先精确匹配
  const exact = tools.find(t =>
    t.name.toLowerCase().replace(/\s+/g, '') === normalized
  )
  if (exact) return exact.id
  // 退而求其次：startsWith 匹配
  const partial = tools.find(t => {
    const tn = t.name.toLowerCase().replace(/\s+/g, '')
    return normalized.startsWith(tn) || tn.startsWith(normalized)
  })
  return partial?.id || null
}

export function getTagColor(tag) {
  const colors = {
    // 通用标签
    推荐: 'bg-green-500',
    国产: 'bg-red-500',
    免费: 'bg-blue-500',
    开源: 'bg-purple-500',
    低价: 'bg-yellow-500',
    推理: 'bg-cyan-500',
    // 品牌标签
    DeepSeek: 'bg-orange-500',
    Google: 'bg-blue-600',
    OpenAI: 'bg-emerald-600',
    Claude: 'bg-orange-600',
    Qwen: 'bg-violet-600',
    GitHub: 'bg-gray-700',
    Amazon: 'bg-amber-600',
    腾讯: 'bg-blue-500',
    字节: 'bg-cyan-600',
    阿里: 'bg-orange-500',
    // 功能标签
    LLM: 'bg-pink-500',
    CLI: 'bg-green-600',
    代码: 'bg-indigo-500',
    代码理解: 'bg-indigo-500',
    长上下文: 'bg-teal-500',
    插件: 'bg-slate-600',
    生态: 'bg-emerald-600',
    多模型: 'bg-violet-600',
    中文: 'bg-red-600',
    // IDE 相关
    'VS Code系': 'bg-blue-600',
    'VS Code': 'bg-blue-600',
    Agentic: 'bg-rose-600',
    行业标杆: 'bg-amber-600',
    性价比: 'bg-green-600',
    Cascade: 'bg-purple-600',
    后端: 'bg-slate-600',
    Spec: 'bg-indigo-600',
    规范: 'bg-indigo-500',
    新品: 'bg-cyan-500',
    Gemini: 'bg-blue-500',
    Rust: 'bg-orange-600',
    性能: 'bg-green-500',
    云端: 'bg-sky-500',
    教学: 'bg-violet-500',
    部署: 'bg-emerald-500',
    BYOK: 'bg-gray-600',
    最强: 'bg-yellow-500',
    Git: 'bg-orange-600',
    多IDE: 'bg-purple-500',
    // 多模态
    图像: 'bg-pink-500',
    视频: 'bg-rose-500',
    '3D': 'bg-violet-500',
    艺术: 'bg-pink-600',
    Discord: 'bg-indigo-500',
    集成: 'bg-blue-500',
    本地: 'bg-green-600',
    电影级: 'bg-amber-500',
    连贯: 'bg-teal-500',
    快速: 'bg-cyan-500',
    汇报: 'bg-purple-500',
    // Agent
    无代码: 'bg-blue-500',
    自托管: 'bg-green-600',
    自主: 'bg-orange-500',
    框架: 'bg-indigo-500',
    开发者: 'bg-gray-600',
    图表: 'bg-purple-500',
    // 搜索
    搜索: 'bg-blue-500',
    调研: 'bg-teal-500',
    引用: 'bg-cyan-500',
    // 新增工具标签
    自主Agent: 'bg-rose-600',
    企业级: 'bg-amber-600',
    端到端: 'bg-indigo-600',
    全栈: 'bg-teal-600',
    零配置: 'bg-cyan-600',
    浏览器: 'bg-sky-500',
    React: 'bg-blue-500',
    'Next.js': 'bg-gray-700',
    Vercel: 'bg-gray-800',
    UI生成: 'bg-pink-500',
    Supabase: 'bg-emerald-600',
    Figma: 'bg-purple-500',
    企业: 'bg-amber-600',
    隐私: 'bg-green-700',
    合规: 'bg-blue-700',
    私有部署: 'bg-slate-700',
    终端: 'bg-green-600',
    AI补全: 'bg-cyan-500',
    SOC2: 'bg-blue-700',
    团队协作: 'bg-violet-500',
    Meta: 'bg-blue-600',
    MoE: 'bg-indigo-500',
    欧洲: 'bg-blue-500',
    API: 'bg-gray-600',
    边缘部署: 'bg-teal-600',
    百度: 'bg-blue-500',
    ComfyUI: 'bg-green-500',
    专业: 'bg-amber-500',
    影视: 'bg-rose-600',
    '4K': 'bg-violet-600',
    社交媒体: 'bg-pink-500',
    文字渲染: 'bg-indigo-500',
    设计: 'bg-pink-600',
    Logo: 'bg-amber-500',
    音乐: 'bg-rose-500',
    人声: 'bg-purple-500',
    创作: 'bg-pink-500',
    版权风险: 'bg-red-600',
    语音: 'bg-violet-500',
    配音: 'bg-indigo-600',
    多语言: 'bg-teal-500',
    克隆: 'bg-rose-500',
    不稳定: 'bg-red-500',
    多Agent: 'bg-orange-500',
    Python: 'bg-yellow-600',
    工作流: 'bg-blue-600',
    自动化: 'bg-green-600',
    '400+集成': 'bg-emerald-600',
    // MCP 工具标签
    MCP: 'bg-teal-500',
    协议: 'bg-teal-600',
    文档查询: 'bg-cyan-600',
    防幻觉: 'bg-emerald-500',
    爬取: 'bg-orange-500',
    Markdown: 'bg-gray-600',
    思维链: 'bg-violet-500',
    推理增强: 'bg-indigo-600',
    记忆: 'bg-purple-600',
    跨会话: 'bg-violet-600',
    Notion: 'bg-gray-700',
    知识库: 'bg-teal-600',
    Jira: 'bg-blue-600',
    Confluence: 'bg-blue-500',
    Postman: 'bg-orange-600',
    'API测试': 'bg-amber-600',
    '25+图表': 'bg-purple-500',
    AntV: 'bg-blue-500',
    隐私搜索: 'bg-orange-500',
    Brave: 'bg-orange-600',
    微软: 'bg-blue-700',
    E2E测试: 'bg-green-600',
    截图: 'bg-sky-500',
    设计转码: 'bg-pink-500',
    官方: 'bg-green-500',
    PR管理: 'bg-gray-700',
    Anthropic: 'bg-orange-600'
  }
  return colors[tag] || 'bg-gray-500'
}

