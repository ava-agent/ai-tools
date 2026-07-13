import { describe, it, expect, beforeEach, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import ToolDetail from '../ToolDetail.vue'

const detailRepository = vi.hoisted(() => ({
  catalog: [],
  load: vi.fn()
}))

vi.mock('../../data/generated/toolDetails.js', () => ({
  toolDetailCatalog: detailRepository.catalog,
  hasToolDetail: (id) => detailRepository.catalog.some((tool) => tool.id === id),
  loadToolDetail: (id) => detailRepository.load(id)
}))

const stubs = {
  ToolLogo: { template: '<div class="tool-logo-stub" />' },
  StarRating: { template: '<span>★★★★★</span>', props: ['rating', 'size'] },
  ScoreRadar: { template: '<div />' },
  ToolRating: { template: '<div />' },
  ToolReviews: { template: '<div />' },
  FunFact: { template: '<div />' },
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to']
  }
}

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools', name: 'tools', component: { template: '<div />' } },
      { path: '/tool/:id', name: 'tool-detail', component: ToolDetail },
      { path: '/comparison', name: 'comparison', component: { template: '<div />' } }
    ]
  })
}

describe('ToolDetail', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    detailRepository.catalog.splice(0)
  })

  async function mountDetail() {
    const pinia = createPinia()
    setActivePinia(pinia)

    const tools = [
      {
        id: 'decision-tool',
        name: 'Decision Tool',
        category: 'ide',
        subcategory: 'AI IDE',
        developer: 'Decision Labs',
        versions: [
          {
            type: 'Global',
            pricing: 'Pro $20/月',
            models: 'Decision Model',
            link: 'https://example.com'
          },
          {
            type: 'Global',
            pricing: 'Team $40/月',
            models: 'Decision Team Model',
            link: 'https://example.com/team'
          }
        ],
        contextWindow: '200K',
        chineseSupport: 4,
        pros: ['Strong pro'],
        cons: ['Expensive if casual'],
        bestFor: '复杂重构',
        funRanking: '夯',
        verificationStatus: 'verified',
        lastVerified: '2026-06-26',
        sources: ['https://example.com/pricing'],
        decisionSummary: {
          verdict: '适合作为复杂重构主力',
          bestFor: '中大型代码库、复杂重构',
          avoidIf: '只需要轻量补全',
          mainRisk: '订阅额度容易被长任务消耗',
          alternatives: ['Claude Code', 'Cursor']
        },
        personalExperience: {
          rating: 5,
          insights: '实战洞察应该在结论卡之后出现。',
          pitfalls: ['先估算额度']
        },
        swot: { S: '强', W: '贵', O: '工程自动化', T: '竞品' },
        tags: ['推荐']
      },
      {
        id: 'related-tool',
        name: 'Related Tool',
        category: 'ide',
        subcategory: 'AI IDE',
        developer: 'Related Labs',
        versions: [{ type: 'Global', pricing: 'Free', link: 'https://example.com/related' }],
        chineseSupport: 3,
        personalExperience: { rating: 4 },
        tags: ['推荐']
      }
    ]
    detailRepository.catalog.splice(0, detailRepository.catalog.length, ...tools.map((tool) => ({
      id: tool.id,
      name: tool.name,
      category: tool.category,
      subcategory: tool.subcategory,
      developer: tool.developer,
      tags: tool.tags,
      personalExperience: { rating: tool.personalExperience?.rating || 0 }
    })))
    detailRepository.load.mockImplementation(async (id) => tools.find((tool) => tool.id === id) || null)

    const router = makeRouter()
    await router.push('/tool/decision-tool')
    await router.isReady()

    const wrapper = mount(ToolDetail, {
      props: {
        id: 'decision-tool'
      },
      global: {
        plugins: [pinia, router],
        stubs
      }
    })
    await flushPromises()
    await nextTick()
    return wrapper
  }

  it('renders a top decision summary before deeper analysis', async () => {
    const wrapper = await mountDetail()
    const card = wrapper.find('[data-testid="decision-summary-card"]')

    expect(card.exists()).toBe(true)
    expect(card.text()).toContain('结论')
    expect(card.text()).toContain('适合作为复杂重构主力')
    expect(card.text()).toContain('适合')
    expect(card.text()).toContain('中大型代码库、复杂重构')
    expect(card.text()).toContain('避开')
    expect(card.text()).toContain('只需要轻量补全')
    expect(card.text()).toContain('主要风险')
    expect(card.text()).toContain('订阅额度容易被长任务消耗')
    expect(card.text()).toContain('Claude Code')
    expect(card.text()).toContain('Cursor')

    expect(wrapper.text().indexOf('结论')).toBeLessThan(wrapper.text().indexOf('实战洞察'))
  })

  it('uses semantic headings for the detail title and major sections', async () => {
    const wrapper = await mountDetail()

    const headings1 = wrapper.findAll('h1')
    expect(headings1).toHaveLength(1)
    expect(headings1[0].text()).toBe('Decision Tool')

    const headings2 = wrapper.findAll('h2').map((heading) => heading.text())
    expect(headings2).toEqual(
      expect.arrayContaining([
        '结论',
        '核验来源',
        '实战洞察',
        '下一步：比较相近方案',
        '🔗 版本与链接',
        '⭐ 社区评价',
        '🔄 相关工具'
      ])
    )
  })

  it('continues from detail into a shareable related-tool comparison', async () => {
    const wrapper = await mountDetail()

    expect(wrapper.get('[data-testid="tool-detail-next-step"]').text()).toContain(
      'Decision Tool、Related Tool',
    )

    expect(wrapper.vm.detailComparisonTarget).toEqual({
      name: 'comparison',
      query: { tools: 'decision-tool,related-tool', start: '1' }
    })
  })

  it('shows clickable verification source links for traceability', async () => {
    const wrapper = await mountDetail()
    const sources = wrapper.get('[data-testid="tool-detail-sources"]')

    expect(sources.text()).toContain('核验来源')
    expect(sources.text()).toContain('example.com')

    const sourceLink = sources.get('a[href="https://example.com/pricing"]')
    expect(sourceLink.attributes('target')).toBe('_blank')
    expect(sourceLink.attributes('rel')).toContain('noopener')
    expect(sourceLink.classes()).toContain('min-h-11')
    expect(sourceLink.text()).toContain('https://example.com/pricing')
  })

  it('renders public pending sources but keeps local install evidence hidden', async () => {
    const wrapper = await mountDetail()

    wrapper.vm.tool.sources = [
      'local-skill:C:/Users/PC/.codex/skills/example/SKILL.md',
      '本地 skill: build-web-apps:frontend-app-builder',
      '邻近本地 skill: superpowers:brainstorming',
      'source-pending:no exact local skill found on 2026-07-02',
      'https://example.com/pricing'
    ]
    await nextTick()

    const sources = wrapper.get('[data-testid="tool-detail-sources"]')
    const links = sources.findAll('a')

    expect(sources.text()).toContain('核验来源')
    expect(links).toHaveLength(1)
    expect(links[0].attributes('href')).toBe('https://example.com/pricing')
    expect(
      sources.find('a[href="local-skill:C:/Users/PC/.codex/skills/example/SKILL.md"]').exists()
    ).toBe(false)
    expect(sources.text()).toContain('公开来源不足')
    expect(sources.text()).toContain('公开来源仍需补充（检查于 2026-07-02）')
    expect(sources.text()).not.toContain('安装环境线索')
    expect(sources.text()).not.toContain('当前安装环境')
    expect(sources.text()).not.toContain('本机')
    expect(sources.text()).not.toContain('C:/Users')
    expect(sources.text()).not.toContain('.codex')
    expect(sources.text()).not.toContain('本地 skill')
    expect(sources.text()).not.toContain('邻近本地 skill')
    expect(sources.text()).not.toContain('frontend-app-builder')
    expect(sources.text()).not.toContain('superpowers:brainstorming')
    expect(sources.text()).not.toContain('local-skill:')
    expect(sources.text()).not.toContain('source-pending:')
    expect(sources.text()).not.toContain('未找到精确同名')
    expect(sources.text()).not.toContain('no exact local skill found')
  })

  it('hides the verification source card when only local install evidence exists', async () => {
    const wrapper = await mountDetail()

    wrapper.vm.tool.sources = [
      'local-skill:C:/Users/PC/.codex/skills/example/SKILL.md',
      '本地核验线索：frontend-app-builder',
      '本地 skill: build-web-apps:frontend-app-builder',
      '邻近本地 skill: superpowers:brainstorming'
    ]
    await nextTick()

    expect(wrapper.find('[data-testid="tool-detail-sources"]').exists()).toBe(false)
    expect(wrapper.text()).not.toContain('核验来源')
    expect(wrapper.text()).not.toContain('安装环境线索')
    expect(wrapper.text()).not.toContain('本地 skill')
    expect(wrapper.text()).not.toContain('邻近本地 skill')
    expect(wrapper.text()).not.toContain('frontend-app-builder')
    expect(wrapper.text()).not.toContain('superpowers:brainstorming')
    expect(wrapper.text()).not.toContain('C:/Users')
  })

  it('uses a softer date label when metadata is not fully verified', async () => {
    const wrapper = await mountDetail()

    expect(wrapper.text()).toContain('核验于 2026-06-26')

    wrapper.vm.tool.verificationStatus = 'needs-review'
    wrapper.vm.tool.lastVerified = '2026-07-02'
    await nextTick()

    expect(wrapper.text()).toContain('检查于 2026-07-02')
    expect(wrapper.text()).not.toContain('核验于 2026-07-02')
  })

  it('translates placeholder metric values instead of showing raw N/A', async () => {
    const wrapper = await mountDetail()

    wrapper.vm.tool.versions[0].pricing = 'N/A'
    wrapper.vm.tool.contextWindow = 'N/A'
    wrapper.vm.tool.chineseSupport = undefined
    await nextTick()

    expect(wrapper.text()).toContain('未公开')
    expect(wrapper.text()).toContain('不适用')
    expect(wrapper.text()).toContain('未评分')
    expect(wrapper.text()).not.toContain('N/A')
  })

  it('renders repeated version types with stable row identifiers', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const wrapper = await mountDetail()
    const rows = wrapper.findAll('[data-testid^="tool-version-row-"]')

    expect(rows).toHaveLength(2)
    expect(rows[0].text()).toContain('国际版')
    expect(rows[0].text()).toContain('Pro $20/月')
    expect(rows[0].classes()).toContain('min-h-11')
    expect(rows[1].text()).toContain('国际版')
    expect(rows[1].text()).toContain('Team $40/月')
    expect(rows[1].classes()).toContain('min-h-11')
    expect(warnSpy.mock.calls.flat().join('\n')).not.toMatch(/Duplicate keys/i)

    warnSpy.mockRestore()
  })

  it('renders non-http version links as text instead of unsafe anchors', async () => {
    const wrapper = await mountDetail()

    wrapper.vm.tool.versions = [
      {
        type: 'Installed skill',
        pricing: '随当前环境可用',
        models: 'Local capability',
        link: 'local-skill:frontend-testing-debugging'
      }
    ]
    await nextTick()

    const row = wrapper.get('[data-testid="tool-version-row-0"]')
    expect(row.element.tagName).toBe('DIV')
    expect(row.text()).toContain('已安装技能')
    expect(row.attributes('href')).toBeUndefined()
    expect(wrapper.find('a[href="local-skill:frontend-testing-debugging"]').exists()).toBe(false)
  })

  it('keeps the detail header readable and touch friendly on narrow screens', async () => {
    const wrapper = await mountDetail()

    const backButton = wrapper.get('[data-testid="tool-detail-back"]')
    expect(backButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'px-3']))

    const heroLayout = wrapper.get('[data-testid="tool-detail-hero"]')
    expect(heroLayout.classes()).toEqual(expect.arrayContaining(['flex-col', 'sm:flex-row']))

    const titleGroup = wrapper.get('[data-testid="tool-detail-title-group"]')
    expect(titleGroup.classes()).toContain('min-w-0')

    const title = wrapper.get('[data-testid="tool-detail-title"]')
    expect(title.classes()).toEqual(expect.arrayContaining(['break-words', 'tracking-normal']))

    const mainLink = wrapper.get('[data-testid="tool-detail-main-link"]')
    expect(mainLink.classes()).toEqual(
      expect.arrayContaining(['w-full', 'sm:w-auto', 'justify-center'])
    )
  })

  it('sets the browser title to the current tool name on render', async () => {
    await mountDetail()

    expect(document.title).toBe('Decision Tool - AI工具全书')
  })

  it('updates the browser title when the current tool data becomes available after mount', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    document.title = 'Generic detail title'

    const lateTool = {
      id: 'late-tool',
      name: 'Late Tool',
      category: 'ide',
      subcategory: 'AI IDE',
      developer: 'Late Labs',
      versions: [{ type: 'Global', pricing: 'Free', link: 'https://example.com/late' }],
      chineseSupport: 3,
      personalExperience: { rating: 4 },
      tags: []
    }
    detailRepository.catalog.push({
      id: lateTool.id,
      name: lateTool.name,
      category: lateTool.category,
      subcategory: lateTool.subcategory,
      developer: lateTool.developer,
      tags: lateTool.tags,
      personalExperience: lateTool.personalExperience
    })
    let resolveLoad
    detailRepository.load.mockImplementation(() => new Promise((resolve) => {
      resolveLoad = resolve
    }))

    const router = makeRouter()
    await router.push('/tool/late-tool')
    await router.isReady()

    const wrapper = mount(ToolDetail, {
      props: {
        id: 'late-tool'
      },
      global: {
        plugins: [pinia, router],
        stubs
      }
    })

    await nextTick()
    expect(wrapper.find('[data-testid="tool-detail-loading"]').exists()).toBe(true)

    resolveLoad(lateTool)
    await flushPromises()
    await nextTick()

    expect(document.title).toMatch(/^Late Tool - /)
    expect(wrapper.get('[data-testid="tool-detail-title"]').text()).toBe('Late Tool')
  })

  it('shows an explicit not-found state without requesting an unknown id', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const router = makeRouter()
    await router.push('/tool/missing-tool')
    await router.isReady()

    const wrapper = mount(ToolDetail, {
      props: { id: 'missing-tool' },
      global: { plugins: [pinia, router], stubs }
    })
    await nextTick()

    expect(wrapper.get('[data-testid="tool-detail-not-found"]').text()).toContain('未找到该工具')
    expect(detailRepository.load).not.toHaveBeenCalled()
  })

  it('shows a retry action when the detail chunk fails to load', async () => {
    const tool = {
      id: 'retry-tool',
      name: 'Retry Tool',
      category: 'ide',
      subcategory: 'AI IDE',
      developer: 'Retry Labs',
      versions: [],
      personalExperience: { rating: 3 },
      tags: []
    }
    detailRepository.catalog.push({ ...tool })
    detailRepository.load.mockRejectedValueOnce(new Error('chunk unavailable'))

    const pinia = createPinia()
    setActivePinia(pinia)
    const router = makeRouter()
    await router.push('/tool/retry-tool')
    await router.isReady()
    const wrapper = mount(ToolDetail, {
      props: { id: 'retry-tool' },
      global: { plugins: [pinia, router], stubs }
    })
    await flushPromises()

    expect(wrapper.get('[data-testid="tool-detail-error"]').text()).toContain(
      '工具详情加载失败，请检查网络后重试'
    )

    detailRepository.load.mockResolvedValueOnce(tool)
    await wrapper.get('[data-testid="tool-detail-error"] button').trigger('click')
    await flushPromises()
    await nextTick()

    expect(wrapper.get('[data-testid="tool-detail-title"]').text()).toBe('Retry Tool')
  })

  it('keeps related tool links large enough for touch input', async () => {
    const wrapper = await mountDetail()
    const relatedLink = wrapper.get('[data-testid="tool-detail-related-related-tool"]')

    expect(relatedLink.text()).toContain('Related Tool')
    expect(relatedLink.classes()).toContain('min-h-11')
  })
})
