import { analyzeToolPricing } from './pricing.js'
import { getDecisionSummary, getToolVerification } from './toolMetadata.js'

export const decisionScenarios = [
  { id: 'all', label: '全部场景' },
  { id: 'daily-coding', label: '日常开发' },
  { id: 'complex-refactor', label: '复杂重构' },
  { id: 'free-stack', label: '免费/开源' },
  { id: 'long-context', label: '长上下文研究' },
  { id: 'visual-generation', label: '视觉生成' }
]

export const budgetOptions = [
  { id: 'all', label: '全部预算' },
  { id: 'free', label: '免费优先' },
  { id: 'low-cost', label: '低成本' },
  { id: 'paid', label: '付费可接受' }
]

export const verificationOptions = [
  { id: 'all', label: '全部状态' },
  { id: 'verified', label: '已核验' },
  { id: 'needs-review', label: '待核验' },
  { id: 'historical', label: '历史信息' },
  { id: 'deprecated', label: '已停更' }
]

const scenarioToolIds = {
  'daily-coding': new Set([
    'cursor',
    'trae',
    'qoder',
    'windsurf',
    'zed',
    'replit',
    'kiro',
    'github-copilot',
    'verdent',
    'jetbrains-ai',
    'claude-code',
    'codex',
    'gemini-cli',
    'qwen-cli',
    'aider',
    'cline',
    'continue',
    'opencode',
    'crush'
  ]),
  'complex-refactor': new Set([
    'cursor',
    'qoder',
    'windsurf',
    'github-copilot',
    'verdent',
    'claude-code',
    'codex',
    'gemini-cli',
    'aider',
    'cline',
    'opencode',
    'openhands',
    'devin'
  ]),
  'long-context': new Set([
    'claude',
    'gemini',
    'gpt',
    'kimi',
    'grok',
    'claude-code',
    'codex',
    'gemini-cli',
    'notebooklm',
    'perplexity',
    'context7'
  ]),
  'visual-generation': new Set(['gpt', 'gemini', 'claude'])
}

export function collectCatalogText(value) {
  if (!value) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(collectCatalogText).join(' ')
  if (typeof value === 'object') return Object.values(value).map(collectCatalogText).join(' ')
  return ''
}

export function getToolSearchText(tool) {
  if (typeof tool.searchText === 'string') return tool.searchText
  return collectCatalogText([
    tool.name,
    tool.developer,
    tool.category,
    tool.subcategory,
    tool.bestFor,
    tool.freeQuota,
    tool.tags,
    tool.pricing,
    tool.models,
    tool.versions,
    tool.pros,
    tool.cons,
    tool.personalExperience,
    tool.decisionSummary
  ]).toLowerCase()
}

export function toolHasFreeTier(tool) {
  if (typeof tool.hasFreeTier === 'boolean') return tool.hasFreeTier
  return analyzeToolPricing(tool).hasFreeTier
}

export function toolHasLowCostSignal(tool) {
  if (typeof tool.hasLowCostSignal === 'boolean') return tool.hasLowCostSignal
  const pricingText = collectCatalogText([
    tool.freeQuota,
    tool.versions?.map((version) => [version.type, version.pricing])
  ]).toLowerCase()
  const contextText = collectCatalogText([
    tool.bestFor,
    tool.tags,
    tool.decisionSummary?.bestFor
  ]).toLowerCase()
  return toolHasFreeTier(tool) || /低价|低成本|预算有限|credits|按量|hobby|trial|试用|\$[1-9]|元\/|月/.test(`${pricingText} ${contextText}`)
}

export function matchesToolScenario(tool, scenario) {
  if (scenario === 'all') return true
  if (scenario === 'free-stack') return toolHasFreeTier(tool)
  if (Array.isArray(tool.scenarioIds)) return tool.scenarioIds.includes(scenario)
  if (scenario === 'visual-generation') {
    return tool.category === 'multimodal' || scenarioToolIds[scenario].has(tool.id)
  }
  return scenarioToolIds[scenario]?.has(tool.id) || false
}

export function matchesToolBudget(tool, budget) {
  if (budget === 'all') return true
  if (budget === 'free') return toolHasFreeTier(tool)
  if (budget === 'low-cost') return toolHasLowCostSignal(tool)
  if (budget === 'paid') {
    if (typeof tool.hasPaidSignal === 'boolean') return tool.hasPaidSignal
    return /pro|plus|max|team|business|enterprise|订阅|付费|按量|\$|credits|元\/|月|年/.test(
      getToolSearchText(tool)
    )
  }
  return true
}

export function matchesToolVerification(tool, verification) {
  return verification === 'all' || getToolVerification(tool).status === verification
}

export function createHomeCatalogEntry(tool) {
  const verification = getToolVerification(tool)
  const publicSourceCount = verification.sources.filter((source) => /^https?:\/\//i.test(source)).length
  const decisionSummary = getDecisionSummary(tool)
  const scenarioIds = decisionScenarios
    .map((option) => option.id)
    .filter((scenario) => scenario !== 'all' && matchesToolScenario(tool, scenario))

  return {
    id: tool.id,
    name: tool.name,
    developer: tool.developer,
    category: tool.category,
    tags: tool.tags?.slice(0, 1) || [],
    versions: tool.versions?.length ? [{ pricing: tool.versions[0]?.pricing }] : [],
    personalExperience: {
      rating: tool.personalExperience?.rating || 0,
      insights: tool.personalExperience?.insights?.slice(0, 60) || ''
    },
    decisionSummary: {
      bestFor: decisionSummary.bestFor,
      mainRisk: decisionSummary.mainRisk
    },
    verificationStatus: verification.status,
    lastVerified: verification.lastVerified,
    sourceCount: verification.sourceCount,
    publicSourceCount,
    hasPublicSource: publicSourceCount > 0,
    hasFreeTier: toolHasFreeTier(tool),
    hasLowCostSignal: toolHasLowCostSignal(tool),
    hasPaidSignal: matchesToolBudget(tool, 'paid'),
    scenarioIds
  }
}
