import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useToolsStore } from '../tools'

const sampleTools = [
  {
    id: 'daily',
    name: 'Daily Dev',
    developer: 'Daily Labs',
    category: 'ide',
    bestFor: '日常主力开发、高频编码',
    freeQuota: 'Free：有限额度',
    verificationStatus: 'verified',
    personalExperience: { rating: 5 },
    tags: ['推荐', 'Agentic'],
  },
  {
    id: 'refactor',
    name: 'Refactor CLI',
    developer: 'Refactor Labs',
    category: 'cli',
    bestFor: '复杂重构、大型代码库、架构迁移',
    freeQuota: '无独立永久免费额度',
    verificationStatus: 'verified',
    personalExperience: { rating: 4.8 },
    tags: ['CLI', '长上下文'],
    scenarioIds: ['complex-refactor'],
  },
  {
    id: 'visual',
    name: 'Visual Maker',
    developer: 'Visual Labs',
    category: 'image',
    bestFor: '视觉生成、图片创作',
    freeQuota: '付费订阅',
    verificationStatus: 'needs-review',
    personalExperience: { rating: 4.2 },
    tags: ['图像', '设计'],
  },
  {
    id: 'version-only',
    name: 'Plain Shell',
    developer: 'Plain Labs',
    category: 'cli',
    bestFor: '命令行工具',
    freeQuota: '付费订阅',
    verificationStatus: 'verified',
    personalExperience: { rating: 4 },
    tags: ['CLI'],
    versions: [
      {
        type: 'Global',
        pricing: 'Starter $9/月',
        models: 'Nebula Context Engine',
        link: 'https://example.com/nebula-context',
      },
    ],
  },
  {
    id: 'misleading-free-copy',
    name: 'Paid Asset Tool',
    developer: 'Paid Labs',
    category: 'image',
    bestFor: '商业资产生产',
    freeQuota: '无独立永久免费额度',
    verificationStatus: 'verified',
    personalExperience: { rating: 3.9 },
    tags: ['图像'],
    pros: ['Free outputs require attribution in a legacy note, but current production use is paid'],
    cons: ['需要商业授权'],
    versions: [
      {
        type: 'Global',
        pricing: 'Enterprise custom quote',
        models: 'Asset model',
        link: 'https://example.com/paid',
      },
    ],
  },
]

describe('tools store decision filters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  function makeStore() {
    const store = useToolsStore()
    store.tools = sampleTools
    store.clearFilters()
    return store
  }

  it('filters tools by decision scenario', () => {
    const store = makeStore()

    store.setScenarioFilter('complex-refactor')

    expect(store.filteredTools.map(tool => tool.id)).toEqual(['refactor'])
  })

  it('filters tools by budget intent', () => {
    const store = makeStore()

    store.setBudgetFilter('free')

    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily'])
  })

  it('uses the shared pricing analysis for catalog free-tier decisions', () => {
    const store = useToolsStore()
    store.clearFilters()

    store.setBudgetFilter('free')

    expect(store.filteredTools.map((tool) => tool.id)).not.toContain('qwen-cli')
  })

  it('does not classify warning copy about free outputs as a free-tier signal', () => {
    const store = makeStore()

    store.setScenarioFilter('free-stack')

    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily'])
    expect(store.filteredTools.map(tool => tool.id)).not.toContain('version-only')
    expect(store.filteredTools.map(tool => tool.id)).not.toContain('misleading-free-copy')

    store.setBudgetFilter('free')
    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily'])
  })

  it('keeps low-cost monthly tools out of the free-stack scenario', () => {
    const store = makeStore()

    store.setBudgetFilter('low-cost')
    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily', 'version-only'])

    store.clearFilters()
    store.setScenarioFilter('free-stack')
    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily'])
  })

  it('filters tools by verification status', () => {
    const store = makeStore()

    store.setVerificationFilter('verified')

    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily', 'refactor', 'version-only', 'misleading-free-copy'])
  })

  it('searches version pricing, models, and links', () => {
    const store = makeStore()

    store.setSearchQuery('nebula context')

    expect(store.filteredTools.map(tool => tool.id)).toEqual(['version-only'])
  })

  it('clears category, tag, and decision filters together', () => {
    const store = makeStore()
    store.setSelectedCategory('ide')
    store.setScenarioFilter('daily-coding')
    store.setBudgetFilter('free')
    store.setVerificationFilter('verified')

    store.clearFilters()

    expect(store.selectedCategory).toBe('all')
    expect(store.selectedScenario).toBe('all')
    expect(store.selectedBudget).toBe('all')
    expect(store.selectedVerification).toBe('all')
    expect(store.filteredTools.map(tool => tool.id)).toEqual(['daily', 'refactor', 'visual', 'version-only', 'misleading-free-copy'])
  })
})
