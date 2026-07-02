const STATUS_CONFIG = {
  verified: {
    label: '已核验',
    description: '核心价格、模型、产品状态或能力边界已按可追踪来源核验',
    className: 'text-[#30d158] bg-[#30d158]/10 border-[#30d158]/20',
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

export function isPlaceholderMetricValue(value) {
  if (value === null || value === undefined) return true
  return PLACEHOLDER_VALUES.has(String(value).trim().toLowerCase())
}

export function getToolVerification(tool = {}) {
  const status = normalizeStatus(tool.verificationStatus)
  const config = STATUS_CONFIG[status]
  const sources = Array.isArray(tool.sources) ? tool.sources.filter(Boolean) : []

  return {
    status,
    label: config.label,
    description: config.description,
    lastVerified: tool.lastVerified || null,
    sources,
    sourceCount: sources.length,
    isVerified: config.isVerified,
  }
}

export function getVerificationBadgeClass(tool = {}) {
  const status = normalizeStatus(tool.verificationStatus)
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
