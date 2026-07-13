import { describe, it, expect, beforeEach, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import Comparison from '../Comparison.vue'
import { useComparisonStore } from '../../stores/comparison'

const stubs = {
  ToolLogo: { template: '<div class="tool-logo-stub" />' },
}

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/comparison', name: 'comparison', component: { template: '<div />' } },
      { path: '/tool/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
}

const sampleTools = [
  {
    id: 'cursor',
    name: 'Cursor',
    developer: 'Anysphere',
    category: 'ide',
    versions: [{ pricing: '$20/月', models: '多模型', link: 'https://cursor.com' }],
    freeQuota: '有限免费 Agent requests',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-06-25',
    personalExperience: { rating: 5 },
    bestFor: '日常主力开发',
    tags: ['推荐'],
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    developer: 'Anthropic',
    category: 'cli',
    versions: [{ pricing: 'Pro/Max/API', models: 'Claude', link: 'https://claude.ai/code' }],
    freeQuota: '无独立永久免费额度',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-06-25',
    personalExperience: { rating: 5 },
    bestFor: '复杂代码理解',
    tags: ['推荐'],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    developer: 'GitHub',
    category: 'ide',
    versions: [{ pricing: 'Free / Pro / Business', models: '多模型', link: 'https://github.com/features/copilot' }],
    freeQuota: 'Free：2,000 次补全/月',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-06-25',
    personalExperience: { rating: 4.5 },
    bestFor: '企业 IDE 内补全',
    tags: ['企业'],
  },
  {
    id: 'trae',
    name: 'Trae',
    developer: 'ByteDance',
    category: 'ide',
    versions: [{ pricing: '免费 / Solo 订阅', models: '多模型', link: 'https://trae.ai' }],
    freeQuota: 'Free：5,000 次/月 Autocompletion',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-06-26',
    personalExperience: { rating: 4.5 },
    bestFor: '预算有限团队',
    tags: ['国内'],
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    developer: 'Google',
    category: 'cli',
    versions: [{ pricing: '个人账号 OAuth 免费额度；企业/API 另计', models: 'Gemini models', link: 'https://github.com/google-gemini/gemini-cli' }],
    freeQuota: '个人账号 OAuth 免费额度以官方政策为准',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-06-29',
    personalExperience: { rating: 4 },
    bestFor: '长上下文调研',
    tags: ['CLI'],
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    developer: 'SST',
    category: 'cli',
    versions: [{ pricing: '开源免费；模型/provider 成本另计', models: '多 provider', link: 'https://opencode.ai' }],
    freeQuota: '工具开源免费；模型/provider 成本另计',
    chineseSupport: 2,
    verificationStatus: 'verified',
    lastVerified: '2026-06-29',
    personalExperience: { rating: 3.5 },
    bestFor: '开源终端 Agent',
    tags: ['开源'],
  },
  {
    id: 'qwen-cli',
    name: 'Qwen CLI',
    developer: 'Alibaba',
    category: 'cli',
    versions: [{ pricing: '需 Coding Plan 或 API/provider', models: 'Qwen Coder', link: 'https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/' }],
    freeQuota: '旧 OAuth 免费层已停止；当前需 Coding Plan/API provider',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-06-29',
    personalExperience: { rating: 4 },
    bestFor: '中文代码 Agent 补充',
    tags: ['中文'],
  },
]

async function mountComparison(toolsInput = sampleTools, initialRoute = '/comparison') {
  const pinia = createPinia()
  setActivePinia(pinia)

  const toolsStore = useComparisonStore()
  toolsStore.tools = toolsInput
  toolsStore.clearCompare()

  const router = makeRouter()
  await router.push(initialRoute)
  await router.isReady()

  const wrapper = mount(Comparison, {
    global: {
      plugins: [pinia, router],
      stubs,
    },
  })

  await flushPromises()
  await nextTick()

  return { wrapper, toolsStore, router }
}

describe('Comparison', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('loads a scenario preset directly into a decision comparison', async () => {
    const { wrapper, toolsStore } = await mountComparison()
    const scenario = wrapper.get('[data-testid="comparison-scenario-personal-dev"]')

    expect(scenario.attributes('aria-pressed')).toBe('false')

    await scenario.trigger('click')
    await flushPromises()

    expect(toolsStore.comparedToolIds).toEqual(['cursor', 'claude-code', 'github-copilot'])
    expect(scenario.attributes('aria-pressed')).toBe('true')
    expect(wrapper.text()).toContain('场景结论')
    expect(wrapper.text()).toContain('个人主力开发')
    expect(wrapper.text()).toContain('按维度胜出')
    expect(wrapper.text()).toContain('综合评分')
    expect(wrapper.text()).toContain('免费额度')
    expect(wrapper.text()).toContain('Cursor')
  })

  it('opens a shared comparison URL directly in the result state', async () => {
    const { wrapper, toolsStore } = await mountComparison(
      sampleTools,
      '/comparison?tools=cursor,claude-code,github-copilot&start=1',
    )

    expect(toolsStore.comparedToolIds).toEqual(['cursor', 'claude-code', 'github-copilot'])
    expect(wrapper.find('[data-testid="comparison-decision-summary"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('手动对比')
  })

  it('clears the selected tools when navigation removes the shared query', async () => {
    const { router, toolsStore } = await mountComparison(
      sampleTools,
      '/comparison?tools=cursor,claude-code&start=1',
    )

    expect(toolsStore.comparedToolIds).toEqual(['cursor', 'claude-code'])

    await router.push('/comparison')
    await nextTick()

    expect(toolsStore.comparedToolIds).toEqual([])
  })

  it('canonicalizes invalid shared parameters without losing unrelated query state', async () => {
    const { router, toolsStore } = await mountComparison(
      sampleTools,
      '/comparison?tools=cursor,cursor,missing,claude-code,trae,opencode&q=keep&start=1&scenario=personal-dev',
    )

    expect(toolsStore.comparedToolIds).toEqual(['cursor', 'claude-code', 'trae', 'opencode'])
    expect(router.currentRoute.value.query).toEqual({
      tools: 'cursor,claude-code,trae,opencode',
      q: 'keep',
      start: '1',
    })
  })

  it('removes start mode when fewer than two valid tools remain', async () => {
    const { router, toolsStore } = await mountComparison(
      sampleTools,
      '/comparison?tools=cursor,missing&start=1',
    )

    expect(toolsStore.comparedToolIds).toEqual(['cursor'])
    expect(router.currentRoute.value.query).toEqual({ tools: 'cursor' })
  })

  it('searches the comparison catalog and reports the result count', async () => {
    const { wrapper } = await mountComparison()
    const search = wrapper.get('[data-testid="comparison-tool-search"]')

    await search.setValue('Gemini')

    expect(wrapper.get('[data-testid="comparison-result-count"]').text()).toContain('1 个工具')
    expect(wrapper.find('[data-testid="comparison-desktop-table"]').text()).toContain('Gemini CLI')
    expect(wrapper.find('[data-testid="comparison-desktop-table"]').text()).not.toContain('Cursor')
  })

  it('renders a bounded first page and loads more tools on demand', async () => {
    const manyTools = Array.from({ length: 30 }, (_, index) => ({
      ...sampleTools[index % sampleTools.length],
      id: `tool-${index}`,
      name: `Tool ${String(index).padStart(2, '0')}`,
    }))
    const { wrapper } = await mountComparison(manyTools)

    expect(wrapper.findAll('[data-testid^="comparison-mobile-card-"]')).toHaveLength(24)
    expect(wrapper.get('[data-testid="comparison-visible-count"]').text()).toContain('24 / 30')

    await wrapper.get('[data-testid="comparison-load-more"]').trigger('click')

    expect(wrapper.findAll('[data-testid^="comparison-mobile-card-"]')).toHaveLength(30)
    expect(wrapper.find('[data-testid="comparison-load-more"]').exists()).toBe(false)
  })

  it('shows dimension winners for a manual compare flow', async () => {
    const { wrapper } = await mountComparison()
    const checkboxes = wrapper.findAll('input[type="checkbox"]')

    expect(checkboxes[0].attributes('aria-label')).toBe('选择 Cursor 进行对比')
    expect(checkboxes[3].attributes('aria-label')).toBe('选择 Trae 进行对比')

    await checkboxes[0].setValue(true)
    await checkboxes[3].setValue(true)
    await wrapper.get('[data-testid="start-manual-compare"]').trigger('click')
    await flushPromises()

    expect(wrapper.text()).toContain('手动对比')
    expect(wrapper.text()).toContain('按维度胜出')
    expect(wrapper.text()).toContain('综合评分')
    expect(wrapper.text()).toContain('中文支持')
    expect(wrapper.text()).toContain('Trae')
  })

  it('drops a preset conclusion when the selection is changed manually', async () => {
    const { wrapper } = await mountComparison()
    await wrapper.get('[data-testid="comparison-scenario-personal-dev"]').trigger('click')
    await flushPromises()

    await wrapper.get('button[aria-label="移除 Cursor"]').trigger('click')

    const summary = wrapper.get('[data-testid="comparison-decision-summary"]')
    expect(summary.text()).not.toContain('个人主力开发')
    expect(summary.text()).toContain('手动对比')
  })

  it('keeps the low-cost scenario from treating Qwen CLI as zero-cost', async () => {
    const { wrapper, toolsStore } = await mountComparison()
    const scenario = wrapper.get('[data-testid="comparison-scenario-zero-cost"]')

    expect(scenario.text()).toContain('低成本试用')
    expect(scenario.text()).not.toContain('零成本试用')

    await scenario.trigger('click')
    await flushPromises()

    expect(toolsStore.comparedToolIds).toEqual(['trae', 'gemini-cli', 'opencode'])
    expect(toolsStore.comparedToolIds).not.toContain('qwen-cli')
    expect(wrapper.text()).toContain('Qwen CLI 如需中文补充')
    expect(wrapper.text()).toContain('Coding Plan/API provider')
  })

  it('avoids unbounded DeepSeek superiority claims in comparison guidance', async () => {
    const { wrapper } = await mountComparison()

    expect(wrapper.text()).toContain('API 单价有优势')
    expect(wrapper.text()).toContain('以当前官方价格和模型页为准')
    expect(wrapper.text()).not.toContain('推理能力最强，价格最低')
  })

  it('uses accessible sort buttons and announces sort direction', async () => {
    const { wrapper } = await mountComparison()

    const ratingHeader = wrapper.get('[data-testid="sort-header-rating"]')
    const nameHeader = wrapper.get('[data-testid="sort-header-name"]')

    expect(ratingHeader.attributes('aria-sort')).toBe('descending')
    expect(nameHeader.attributes('aria-sort')).toBe('none')

    const nameSort = wrapper.get('[data-testid="sort-button-name"]')
    expect(nameSort.attributes('aria-label')).toContain('按工具名称排序')
    expect(nameSort.classes()).toEqual(expect.arrayContaining(['min-h-11']))

    await nameSort.trigger('click')

    expect(wrapper.get('[data-testid="sort-header-name"]').attributes('aria-sort')).toBe('ascending')
    expect(wrapper.get('[data-testid="sort-header-rating"]').attributes('aria-sort')).toBe('none')
  })

  it('avoids negative letter spacing in compact page headings', async () => {
    const { wrapper } = await mountComparison()

    expect(wrapper.html()).not.toContain('letter-spacing: -')
  })

  it('keeps manual compare checkboxes touch friendly', async () => {
    const { wrapper } = await mountComparison()
    const firstCheckbox = wrapper.find('input[type="checkbox"]')
    const checkboxTarget = firstCheckbox.element.closest('label')

    expect(checkboxTarget.classList.contains('min-h-11')).toBe(true)
    expect(checkboxTarget.classList.contains('min-w-11')).toBe(true)
  })

  it('renders a mobile card list instead of forcing the full table on small screens', async () => {
    const { wrapper } = await mountComparison()

    const desktopTable = wrapper.get('[data-testid="comparison-desktop-table"]')
    expect(desktopTable.classes()).toEqual(expect.arrayContaining(['hidden', 'lg:block']))

    const mobileList = wrapper.get('[data-testid="comparison-mobile-list"]')
    expect(mobileList.classes()).toContain('lg:hidden')

    const firstCard = wrapper.get('[data-testid="comparison-mobile-card-cursor"]')
    expect(firstCard.text()).toContain('Cursor')
    expect(firstCard.text()).toContain('Anysphere')

    const mobileDetailLink = wrapper.get('[data-testid="comparison-mobile-detail-cursor"]')
    expect(mobileDetailLink.classes()).toEqual(expect.arrayContaining(['min-h-11', 'justify-center']))
  })

  it('uses a fixed desktop table rather than internal horizontal scrolling', async () => {
    const { wrapper } = await mountComparison()

    const desktopTable = wrapper.get('[data-testid="comparison-desktop-table"]')
    expect(desktopTable.classes()).toContain('overflow-hidden')
    expect(desktopTable.classes()).not.toContain('overflow-x-auto')

    const table = desktopTable.get('table')
    expect(table.classes()).toEqual(expect.arrayContaining(['w-full', 'table-fixed']))
    expect(table.classes()).not.toContain('min-w-[900px]')
  })

  it('lets mobile users sort the card list with touch-friendly controls', async () => {
    const { wrapper } = await mountComparison()

    const sortBar = wrapper.get('[data-testid="comparison-mobile-sort"]')
    expect(sortBar.classes()).toContain('lg:hidden')

    const nameSort = wrapper.get('[data-testid="mobile-sort-button-name"]')
    expect(nameSort.classes()).toContain('min-h-11')
    expect(nameSort.attributes('aria-label')).toContain('按工具名称排序')

    const getMobileCardIds = () =>
      wrapper.findAll('[data-testid^="comparison-mobile-card-"]').map(card =>
        card.attributes('data-testid').replace('comparison-mobile-card-', ''),
      )

    expect(getMobileCardIds()[0]).toBe('cursor')

    await nameSort.trigger('click')
    expect(getMobileCardIds()[0]).toBe('claude-code')
    expect(wrapper.get('[data-testid="mobile-sort-button-name"]').attributes('aria-label')).toContain('当前升序')

    await wrapper.get('[data-testid="mobile-sort-button-name"]').trigger('click')
    expect(getMobileCardIds()[0]).toBe('trae')
    expect(wrapper.get('[data-testid="mobile-sort-button-name"]').attributes('aria-label')).toContain('当前降序')
  })

  it('formats placeholder pricing and model values for comparison rows and cards', async () => {
    const placeholderTools = [
      {
        ...sampleTools[0],
        developer: '',
        versions: [{ pricing: 'N/A', models: 'N/A', link: 'https://cursor.com' }],
      },
      sampleTools[1],
    ]

    const { wrapper } = await mountComparison(placeholderTools)

    expect(wrapper.text()).not.toContain('N/A')
    expect(wrapper.text()).toContain('未公开')
    expect(wrapper.text()).toContain('待补充')
  })
})
