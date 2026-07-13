const STATUS_CONFIG = {
  verified: {
    label: '已核验',
    description: '核心价格、模型、产品状态或能力边界已按可追踪来源核验',
    className: 'text-[#30d158] bg-[#30d158]/10 border-[#30d158]/20',
    isVerified: true,
  },
  'local-verified': {
    label: '本地核验',
    description: '已按当前运行环境中的可追踪本地来源核验，公开可访问性仍需单独确认',
    className: 'text-[#64d2ff] bg-[#64d2ff]/10 border-[#64d2ff]/20',
    isVerified: true,
  },
  'needs-review': {
    label: '待核验',
    description: '价格、模型、额度或能力边界尚未完成可追踪来源核验',
    className: 'text-[#ffd60a] bg-[#ffd60a]/10 border-[#ffd60a]/20',
    isVerified: false,
  },
  historical: {
    label: '历史信息',
    description: '该信息保留用于历史参考，不代表当前状态',
    className: 'text-white/45 bg-white/[0.06] border-white/[0.08]',
    isVerified: false,
  },
  deprecated: {
    label: '已停更',
    description: '该工具或项目已停更、归档或不建议作为新项目首选',
    className: 'text-[#ff453a] bg-[#ff453a]/10 border-[#ff453a]/20',
    isVerified: false,
  },
}

function normalizeStatus(status) {
  return STATUS_CONFIG[status] ? status : 'needs-review'
}

function firstSentence(text) {
  if (!text) return ''
  return text
    .split(/[。.!?！？]/)
    .map((part) => part.trim())
    .find(Boolean) || ''
}

const PLACEHOLDER_VALUES = new Set([
  '',
  '-',
  'n/a',
  'na',
  'unknown',
  'null',
  'undefined',
  '未公开',
  '不适用',
])

const VERSION_TYPE_LABELS = {
  Global: '国际版',
  CN: '中国版',
  'CN/Global': '中国版 / 国际版',
  'Global/CN': '国际版 / 中国版',
  'CN/Open Source': '中国版 / 开源版',
  'Public upstream': '公开上游版本',
  'Installed skill': '已安装技能',
  'Installed system skill': '已安装系统技能',
  'Adjacent installed skill': '邻近已安装技能',
  Remote: '远程版',
  'US Remote': '美国远程版',
  'EU / Local': '欧洲区 / 本地版',
  'Official Cloud': '官方云版本',
  'Community self-hosted': '社区自托管版',
  'Remote beta': '远程测试版',
  'Remote Beta': '远程测试版',
  'Desktop beta': '桌面测试版',
  'Official Beta': '官方测试版',
  'PAT fallback': 'PAT 备用方案',
  'Legacy package': '旧版软件包',
  'Local legacy': '本地旧版',
  'Legacy server': '旧版服务器',
  'Cloud MCP': '云端 MCP',
  Platform: '平台版',
  'Validation workflow': '验证工作流',
  'Official MCP reference': '官方 MCP 参考实现',
  'Public Skill': '公开技能',
  'Public plugin skill': '公开插件技能',
  'Official adjacent reference': '官方邻近参考',
  'Adjacent installed workflow': '邻近已安装工作流',
  'Adjacent security workflow': '邻近安全工作流',
  'Historical catalog alias': '历史目录别名',
  'Product Design research': '产品设计研究',
  'AnyCap Deep Research': 'AnyCap 深度研究',
}

export function isPlaceholderMetricValue(value) {
  if (value === null || value === undefined) return true
  return PLACEHOLDER_VALUES.has(String(value).trim().toLowerCase())
}

export function getToolVerification(tool = {}) {
  const declaredStatus = normalizeStatus(tool.verificationStatus)
  const sources = Array.isArray(tool.sources) ? tool.sources.filter(Boolean) : []
  const sourceCount = Number.isFinite(tool.sourceCount) ? tool.sourceCount : sources.length
  const publicSourceCount = Number.isFinite(tool.publicSourceCount)
    ? tool.publicSourceCount
    : sources.filter((source) => /^https?:\/\//i.test(source)).length
  const hasPublicSource = typeof tool.hasPublicSource === 'boolean'
    ? tool.hasPublicSource
    : publicSourceCount > 0
  const status = declaredStatus === 'verified' && sourceCount > 0 && !hasPublicSource
    ? 'local-verified'
    : declaredStatus
  const config = STATUS_CONFIG[status]

  return {
    status,
    label: config.label,
    description: config.description,
    lastVerified: tool.lastVerified || null,
    sources,
    sourceCount,
    publicSourceCount,
    isVerified: config.isVerified,
  }
}

export function getVerificationBadgeClass(tool = {}) {
  const status = getToolVerification(tool).status
  return [
    'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium',
    STATUS_CONFIG[status].className,
  ].join(' ')
}

export function getDecisionSummary(tool = {}) {
  const summary = tool.decisionSummary || {}
  const pitfalls = tool.personalExperience?.pitfalls || []

  return {
    verdict: summary.verdict || firstSentence(tool.personalExperience?.insights) || '待补充结论',
    bestFor: summary.bestFor || tool.bestFor || '待补充适用场景',
    avoidIf: summary.avoidIf || tool.cons?.[0] || '待补充不适用场景',
    mainRisk: summary.mainRisk || pitfalls[0] || tool.cons?.[0] || '待补充主要风险',
    alternatives: Array.isArray(summary.alternatives) ? summary.alternatives : [],
  }
}

export function formatMetricValue(value, fallback = '未公开') {
  const text = String(value).trim()
  if (isPlaceholderMetricValue(text)) return fallback
  return text
}

export function formatVersionType(value) {
  const text = formatMetricValue(value, '未标注版本')
  return VERSION_TYPE_LABELS[text] || text
}

export function formatContextWindow(value) {
  return formatMetricValue(value, '不适用')
}

export function hasMeaningfulContextWindow(value) {
  return !isPlaceholderMetricValue(value)
}

export function formatChineseSupport(value) {
  const level = Number(value)
  if (!Number.isFinite(level) || level <= 0) return '未评分'
  const normalizedLevel = Math.min(5, Math.max(0, Math.round(level)))
  return '★'.repeat(normalizedLevel) + '☆'.repeat(5 - normalizedLevel)
}
