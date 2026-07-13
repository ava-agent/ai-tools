import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import CompareView from '../CompareView.vue'
import { useComparisonStore } from '../../stores/comparison'

const stubs = {
  RouterLink: {
    template: '<a :href="to"><slot /></a>',
    props: ['to'],
  },
  'router-link': {
    template: '<a :href="to"><slot /></a>',
    props: ['to'],
  },
  ToolLogo: { template: '<div class="tool-logo-stub" />' },
}

const tools = [
  {
    id: 'cursor',
    name: 'Cursor',
    developer: 'Anysphere',
    category: 'ide',
    versions: [{ pricing: 'Individual $20/month with agent usage caveats' }],
    freeQuota: 'Hobby plan with limited requests',
    contextWindow: 'Model-dependent',
    chineseSupport: 4,
    personalExperience: { rating: 5 },
    pros: ['Strong agent workflow for complex multi-file edits'],
    cons: ['Usage-based cost can surprise teams'],
    bestFor: 'Daily coding and refactoring',
  },
  {
    id: 'zed',
    name: 'Zed',
    developer: 'Zed Industries',
    category: 'ide',
    versions: [{ pricing: 'Personal free, Pro hosted models with credits' }],
    freeQuota: 'Personal includes edit predictions; BYOK is separate',
    contextWindow: 'Provider-dependent',
    chineseSupport: 3,
    personalExperience: { rating: 3 },
    pros: ['Fast editor with flexible external agent paths'],
    cons: ['Hosted AI requires credit planning'],
    bestFor: 'High-performance editing and BYOK workflows',
  },
]

function mountCompareView(toolsInput = tools) {
  const pinia = createPinia()
  setActivePinia(pinia)
  const toolsStore = useComparisonStore()
  toolsStore.clearCompare = vi.fn()

  const wrapper = mount(CompareView, {
    props: { tools: toolsInput },
    global: {
      plugins: [pinia],
      stubs,
    },
  })

  return { wrapper, toolsStore }
}

describe('CompareView', () => {
  it('renders a compact mobile metric matrix with collapsed detail sections', () => {
    const { wrapper } = mountCompareView()

    const desktop = wrapper.get('[data-testid="compare-desktop-table"]')
    expect(desktop.classes()).toEqual(expect.arrayContaining(['hidden', 'md:block']))
    expect(desktop.get('table').classes()).toContain('min-w-[600px]')

    const mobileMatrix = wrapper.get('[data-testid="compare-mobile-matrix"]')
    expect(mobileMatrix.classes()).toContain('md:hidden')
    expect(wrapper.get('[data-testid="compare-mobile-scroll"]').classes()).toContain('overflow-x-auto')
    expect(mobileMatrix.findAll('tbody th[scope="row"]')).toHaveLength(8)
    expect(mobileMatrix.text()).toContain('Cursor')
    expect(mobileMatrix.text()).toContain('Individual $20/month')

    const pricing = wrapper.get('[data-testid="compare-mobile-field-cursor-pricing"]')
    expect(pricing.classes()).toContain('break-words')

    const pro = wrapper.get('[data-testid="compare-mobile-pro-cursor-0"]')
    expect(pro.classes()).toContain('break-words')

    const con = wrapper.get('[data-testid="compare-mobile-con-cursor-0"]')
    expect(con.classes()).toContain('break-words')
    expect(wrapper.get('[data-testid="compare-mobile-detail-cursor"]').attributes('open')).toBeUndefined()
  })

  it('keeps the clear comparison action touch friendly', async () => {
    const { wrapper, toolsStore } = mountCompareView()

    const button = wrapper.get('[data-testid="compare-clear-button"]')
    expect(button.attributes('type')).toBe('button')
    expect(button.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    await button.trigger('click')
    expect(toolsStore.clearCompare).toHaveBeenCalledTimes(1)
  })

  it('exposes row headers and readable score labels without relying on color', () => {
    const { wrapper } = mountCompareView()
    const rowHeaders = wrapper.findAll('tbody th[scope="row"]')

    expect(rowHeaders.map((header) => header.text())).toEqual(
      expect.arrayContaining(['开发者', '分类', '评分', '定价', '免费额度', '上下文', '中文支持'])
    )

    const mobileRating = wrapper.get('[data-testid="compare-mobile-field-cursor-rating"]')
    const mobileChinese = wrapper.get('[data-testid="compare-mobile-field-cursor-chinese"]')
    expect(mobileRating.attributes('aria-label')).toContain('评分 5 / 5，并列最高')
    expect(mobileChinese.attributes('aria-label')).toContain('中文支持 4 / 5，并列最高')
    expect(mobileRating.text()).toContain('最高')
  })

  it('translates placeholder metrics instead of exposing raw N/A copy', () => {
    const placeholderTools = [
      {
        ...tools[0],
        developer: '',
        versions: [{ pricing: 'N/A' }],
        freeQuota: 'N/A',
        contextWindow: 'N/A',
        chineseSupport: undefined,
        bestFor: '',
      },
      tools[1],
    ]

    const { wrapper } = mountCompareView(placeholderTools)

    expect(wrapper.text()).not.toContain('N/A')
    expect(wrapper.text()).toContain('未公开')
    expect(wrapper.text()).toContain('不适用')
    expect(wrapper.text()).toContain('未评分')
    expect(wrapper.text()).toContain('待补充')
  })
})
