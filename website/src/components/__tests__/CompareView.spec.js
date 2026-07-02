import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import CompareView from '../CompareView.vue'
import { useToolsStore } from '../../stores/tools'

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
  const toolsStore = useToolsStore()
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
  it('renders mobile stacked comparison cards instead of only a wide table', () => {
    const { wrapper } = mountCompareView()

    const desktop = wrapper.get('[data-testid="compare-desktop-table"]')
    expect(desktop.classes()).toEqual(expect.arrayContaining(['hidden', 'md:block']))
    expect(desktop.get('table').classes()).toContain('min-w-[600px]')

    const mobileCards = wrapper.get('[data-testid="compare-mobile-cards"]')
    expect(mobileCards.classes()).toEqual(expect.arrayContaining(['md:hidden', 'space-y-4']))

    const cursorCard = wrapper.get('[data-testid="compare-mobile-card-cursor"]')
    expect(cursorCard.text()).toContain('Cursor')
    expect(cursorCard.text()).toContain('Individual $20/month')
    expect(cursorCard.text()).toContain('Strong agent workflow')

    const pricing = wrapper.get('[data-testid="compare-mobile-field-cursor-pricing"]')
    expect(pricing.classes()).toContain('break-words')

    const pro = wrapper.get('[data-testid="compare-mobile-pro-cursor-0"]')
    expect(pro.classes()).toContain('break-words')

    const con = wrapper.get('[data-testid="compare-mobile-con-cursor-0"]')
    expect(con.classes()).toContain('break-words')
  })

  it('keeps the clear comparison action touch friendly', async () => {
    const { wrapper, toolsStore } = mountCompareView()

    const button = wrapper.get('[data-testid="compare-clear-button"]')
    expect(button.attributes('type')).toBe('button')
    expect(button.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    await button.trigger('click')
    expect(toolsStore.clearCompare).toHaveBeenCalledTimes(1)
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
