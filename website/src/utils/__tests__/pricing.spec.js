import { describe, expect, it } from 'vitest'
import { analyzeToolPricing, extractMonthlyPrices, getFreeQuotaScore, matchesPricingBudget } from '../pricing'

describe('pricing helpers', () => {
  it('treats negative free-tier wording as no free plan before matching free keywords', () => {
    const tool = {
      freeQuota: '无独立永久免费额度，需 ChatGPT 计划或 API 计费',
      versions: [{ pricing: 'ChatGPT Pro / API 按量计费' }],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.hasFreeTier).toBe(false)
    expect(signals.freeTierUnavailable).toBe(true)
    expect(getFreeQuotaScore(tool)).toBe(1)
  })

  it('marks discontinued Qwen OAuth free tier copy as unavailable', () => {
    const tool = {
      freeQuota: 'Qwen OAuth free tier discontinued on 2026-04-15; use Coding Plan or API key',
      versions: [{ pricing: 'Alibaba Cloud Coding Plan / OpenRouter / BYOK API key' }],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.hasFreeTier).toBe(false)
    expect(signals.requiresPaidPlanOrKey).toBe(true)
    expect(getFreeQuotaScore(tool)).toBe(1)
  })

  it('extracts monthly USD and CNY prices without confusing quotas for prices', () => {
    const prices = extractMonthlyPrices('Free 2,000 completions / Pro $20/月 / Team $40-60/人/月 / CodeBuddy 78元/人/月')

    expect(prices.usd).toEqual([20, 40, 60])
    expect(prices.cny).toEqual([78])
    expect(prices.approxUsd).toEqual(expect.arrayContaining([20, 40, 60, 11]))
  })

  it('does not treat token API unit prices as monthly subscription prices', () => {
    const prices = extractMonthlyPrices('API 每 1M tokens：输入 $0.14 / 输出 $0.28；ERNIE 输入 ¥0.006-0.01/千tokens')

    expect(prices.usd).toEqual([])
    expect(prices.cny).toEqual([])
    expect(prices.approxUsd).toEqual([])
  })

  it('does not match monthly budget tiers from API-only token pricing', () => {
    const tool = {
      freeQuota: 'API 无固定永久免费额度，按 token 用量计费',
      versions: [
        {
          pricing: 'API 每 1M tokens：输入 $0.14 / 输出 $0.28；输出量越高成本越高',
        },
      ],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.minApproxMonthlyUsd).toBeNull()
    expect(matchesPricingBudget(signals, 'light')).toBe(false)
    expect(matchesPricingBudget(signals, 'standard')).toBe(false)
    expect(matchesPricingBudget(signals, 'enterprise')).toBe(false)
  })

  it('ignores multi-model API token unit price lists when estimating monthly cost', () => {
    const tool = {
      freeQuota: 'Web/App 有免费入口；API 无固定永久免费额度',
      versions: [
        {
          pricing: 'API 每 1M tokens：V4-Flash 输入 $0.14 / 输出 $0.28；V4-Pro 输入 $0.435 / 输出 $0.87（缓存命中另计）',
        },
      ],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.minApproxMonthlyUsd).toBeNull()
    expect(matchesPricingBudget(signals, 'light')).toBe(false)
    expect(matchesPricingBudget(signals, 'standard')).toBe(false)
  })

  it('ignores per-request prices when estimating monthly subscription cost', () => {
    const tool = {
      freeQuota: '免费额度有限',
      versions: [{ pricing: 'Brave Search API：Free / Data for AI $3/1000次 / Pro 定制' }],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.minApproxMonthlyUsd).toBeNull()
    expect(matchesPricingBudget(signals, 'light')).toBe(false)
  })

  it('ignores revenue license thresholds when estimating monthly subscription cost', () => {
    const tool = {
      freeQuota: '社区许可免费',
      versions: [{ pricing: 'Community 可免费使用；超过 USD $1M 年收入需要企业授权' }],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.minApproxMonthlyUsd).toBeNull()
    expect(matchesPricingBudget(signals, 'light')).toBe(false)
  })

  it('keeps real free plans eligible for free-tier matching', () => {
    const tool = {
      freeQuota: 'Free plan includes 50 credits daily',
      versions: [{ pricing: 'Free / Pro $10/月' }],
    }

    const signals = analyzeToolPricing(tool)

    expect(signals.hasFreeTier).toBe(true)
    expect(getFreeQuotaScore(tool)).toBeGreaterThanOrEqual(4)
  })
})
