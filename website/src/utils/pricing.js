const CNY_TO_USD_ESTIMATE = 7.2

const emptyPriceLabels = new Set(['', '-', 'n/a', 'na', '无', '暂无'])

const negativeFreePatterns = [
  /无独立.*免费/i,
  /无固定.*免费/i,
  /无.*免费额度/i,
  /无免费/i,
  /不提供.*免费/i,
  /免费层.*(停止|取消|不再|discontinued)/i,
  /free tier.*(discontinued|shutdown|removed|no longer)/i,
]

const paidPathPatterns = [
  /coding plan/i,
  /api key/i,
  /byok/i,
  /按量计费/i,
  /自行配置.*api/i,
  /需.*(计划|订阅|api|provider)/i,
]

function normalizeText(value) {
  return String(value || '').trim()
}

function hasRecurringPriceContext(source, index, matchLength) {
  const rightContext = source.slice(index, index + matchLength + 36)
  const leftContext = source.slice(Math.max(0, index - 18), index)

  return (
    /\/\s*(月|mo|month|年|yr|year)|每月|每年|monthly|annually|annual|月付|年付|\/人\/月|\/席\/月|\/用户\/月/i.test(rightContext) ||
    /(pro|plus|max|team|business|enterprise|starter|creator|scale|plan|subscription|订阅|套餐|月费|年费|个人版|团队|企业)\s*$/i.test(leftContext)
  )
}

function isUsageUnitPrice(source, index, matchLength) {
  const rightContext = source.slice(index, index + matchLength + 56)
  const leftContext = source.slice(Math.max(0, index - 32), index)
  const usageUnitAfter = /(tokens?|token|credits?|credit|input|output|输入|输出|\/\s*m\b|\/\s*1m|千\s*tokens?|万\s*tokens?|百万\s*tokens?|每\s*1m)/i.test(rightContext)
  const usageUnitBefore = /(api|按量|计费|每\s*1m|per\s*)/i.test(leftContext)

  return (usageUnitAfter || usageUnitBefore) && !hasRecurringPriceContext(source, index, matchLength)
}

function collectPricingText(tool) {
  const versionPricing = (tool.versions || [])
    .map(version => version.pricing)
    .filter(Boolean)
    .join(' / ')

  return {
    freeText: normalizeText(tool.freeQuota ?? tool.free),
    paidText: normalizeText(versionPricing || tool.paid),
  }
}

export function extractMonthlyPrices(text) {
  const source = normalizeText(text)
  const usd = []
  const cny = []

  for (const match of source.matchAll(/(?:\$|USD\s*)(\d+(?:\.\d+)?)(?:\s*[-–]\s*(\d+(?:\.\d+)?))?/gi)) {
    if (!hasRecurringPriceContext(source, match.index, match[0].length)) continue
    if (isUsageUnitPrice(source, match.index, match[0].length)) continue
    usd.push(Number(match[1]))
    if (match[2]) usd.push(Number(match[2]))
  }

  for (const match of source.matchAll(/(?:(?:¥|￥|CNY\s*)(\d+(?:\.\d+)?)(?:\s*[-–]\s*(\d+(?:\.\d+)?))?|(\d+(?:\.\d+)?)\s*(?:元|人民币))/gi)) {
    if (!hasRecurringPriceContext(source, match.index, match[0].length)) continue
    if (isUsageUnitPrice(source, match.index, match[0].length)) continue
    const first = match[1] || match[3]
    const second = match[2]
    if (first) cny.push(Number(first))
    if (second) cny.push(Number(second))
  }

  const approxUsd = [
    ...usd,
    ...cny.map(value => Math.round(value / CNY_TO_USD_ESTIMATE)),
  ].filter(Number.isFinite)

  return { usd, cny, approxUsd }
}

export function analyzeToolPricing(tool) {
  const { freeText, paidText } = collectPricingText(tool)
  const combinedText = `${freeText} ${paidText}`.trim()
  const normalizedFree = freeText.toLowerCase()
  const isEmptyFreeText = emptyPriceLabels.has(normalizedFree)
  const freeTierUnavailable = !isEmptyFreeText && negativeFreePatterns.some(pattern => pattern.test(freeText))
  const requiresPaidPlanOrKey = paidPathPatterns.some(pattern => pattern.test(combinedText))
  const hasPositiveFreeSignal = /(完全免费|开源免费|free plan|free tier|\bfree\b|免费)/i.test(combinedText)
  const hasTrialOnly = /(trial|试用)/i.test(combinedText) && !hasPositiveFreeSignal
  const prices = extractMonthlyPrices(combinedText)
  const minApproxMonthlyUsd = prices.approxUsd.length ? Math.min(...prices.approxUsd) : null

  return {
    hasFreeTier: !freeTierUnavailable && hasPositiveFreeSignal,
    freeTierUnavailable,
    requiresPaidPlanOrKey,
    hasTrialOnly,
    minMonthlyUsd: prices.usd.length ? Math.min(...prices.usd) : null,
    minMonthlyCny: prices.cny.length ? Math.min(...prices.cny) : null,
    minApproxMonthlyUsd,
  }
}

export function getFreeQuotaScore(tool) {
  const text = `${tool.freeQuota || ''} ${tool.versions?.[0]?.pricing || ''}`.trim()
  if (!text) return 0

  const signals = analyzeToolPricing(tool)
  if (signals.freeTierUnavailable) return 1
  if (/(完全免费|开源免费)/i.test(text)) return 5
  if (/(trial|试用)/i.test(text)) return 3
  if (signals.hasFreeTier) return 4
  return 2
}

export function matchesPricingBudget(signals, tierId) {
  if (!tierId) return true
  if (tierId === 'free') return signals.hasFreeTier

  const cost = signals.minApproxMonthlyUsd
  if (!Number.isFinite(cost)) return false

  if (tierId === 'light') return cost <= 30
  if (tierId === 'standard') return cost <= 100
  if (tierId === 'enterprise') return cost > 30 && cost <= 200
  return cost >= 100
}
