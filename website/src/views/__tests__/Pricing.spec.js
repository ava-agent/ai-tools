import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import Pricing from '../Pricing.vue'
import { useToolsStore } from '../../stores/tools'

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/pricing', name: 'pricing', component: Pricing },
      { path: '/tool/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
}

const sampleTools = [
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'ide',
    versions: [{ pricing: 'Individual $20/月', models: '多模型', link: 'https://cursor.com' }],
    freeQuota: 'Hobby 免费',
    personalExperience: { rating: 5 },
  },
  {
    id: 'suno',
    name: 'Suno',
    category: 'multimodal',
    versions: [{ pricing: 'Pro $10/月 / Premier $30/月', models: 'Suno v5.5', link: 'https://suno.com' }],
    freeQuota: 'Free plan 50 credits 每日刷新',
    personalExperience: { rating: 3.5 },
  },
  {
    id: 'qwen-cli',
    name: 'Qwen CLI',
    category: 'cli',
    versions: [{ pricing: 'OAuth 需要 Qwen Coding Plan；OpenAI-compatible API 按所选 provider 计费', models: 'Qwen Coder', link: 'https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/' }],
    freeQuota: '旧 OAuth 免费层已于 2026-04-15 停止；当前需 Coding Plan 或自行配置 API key/provider',
    personalExperience: { rating: 4 },
  },
  {
    id: 'codebuddy',
    name: 'CodeBuddy',
    category: 'ide',
    versions: [{ pricing: '个人版 78元/人/月', models: '多模型', link: 'https://copilot.tencent.com' }],
    freeQuota: '无独立永久免费额度',
    personalExperience: { rating: 2.5 },
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'llm',
    versions: [{ pricing: 'Claude Pro $20/月', models: 'Claude models', link: 'https://claude.ai' }],
    freeQuota: 'Claude.ai Free 有限使用',
    personalExperience: { rating: 4.5 },
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'cli',
    versions: [{ pricing: 'Claude Max $200/月', models: 'Claude models', link: 'https://claude.ai/code' }],
    freeQuota: '无独立永久免费额度',
    personalExperience: { rating: 5 },
  },
]

async function mountPricing(toolsInput = sampleTools) {
  const pinia = createPinia()
  setActivePinia(pinia)

  const toolsStore = useToolsStore()
  toolsStore.tools = toolsInput

  const router = makeRouter()
  await router.push('/pricing')
  await router.isReady()

  const wrapper = mount(Pricing, {
    global: {
      plugins: [pinia, router],
    },
  })

  return { wrapper, toolsStore }
}

describe('Pricing', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('exposes budget and combo selectors as readable radio-style groups', async () => {
    const { wrapper } = await mountPricing()

    const budgetGroup = wrapper.get('[data-testid="pricing-budget-group"]')
    expect(budgetGroup.attributes('role')).toBe('radiogroup')
    expect(budgetGroup.attributes('aria-label')).toBe('预算层级')

    const freeTier = wrapper.get('[data-testid="pricing-budget-free"]')
    expect(freeTier.attributes('role')).toBe('radio')
    expect(freeTier.attributes('aria-checked')).toBe('false')
    expect(freeTier.classes()).toContain('min-h-11')

    await freeTier.trigger('click')
    expect(wrapper.get('[data-testid="pricing-budget-free"]').attributes('aria-checked')).toBe('true')

    const comboGroup = wrapper.get('[data-testid="pricing-combo-group"]')
    expect(comboGroup.attributes('role')).toBe('radiogroup')
    expect(comboGroup.attributes('aria-label')).toBe('推荐组合方案')

    const firstCombo = wrapper.get('[data-testid="pricing-combo-option-0"]')
    expect(firstCombo.attributes('role')).toBe('radio')
    expect(firstCombo.attributes('aria-label')).toContain('不设上限方案')
  })

  it('avoids compact-page typography and radio ARIA conflicts', async () => {
    const { wrapper } = await mountPricing()

    expect(wrapper.html()).not.toContain('letter-spacing: -')

    const radioButtons = wrapper.findAll('[role="radio"]')
    expect(radioButtons.length).toBeGreaterThan(0)
    for (const radio of radioButtons) {
      expect(radio.attributes('aria-checked')).toBeDefined()
      expect(radio.attributes('aria-pressed')).toBeUndefined()
    }
  })

  it('renders mobile pricing cards instead of forcing the full desktop table on small screens', async () => {
    const { wrapper } = await mountPricing()

    const desktopTable = wrapper.get('[data-testid="pricing-desktop-table"]')
    expect(desktopTable.classes()).toEqual(expect.arrayContaining(['hidden', 'md:block']))

    const mobileList = wrapper.get('[data-testid="pricing-mobile-list"]')
    expect(mobileList.classes()).toContain('md:hidden')

    const cursorCard = wrapper.get('[data-testid="pricing-mobile-card-cursor"]')
    expect(cursorCard.text()).toContain('Cursor')
    expect(cursorCard.text()).toContain('Hobby 免费')

    const detailLink = wrapper.get('[data-testid="pricing-mobile-detail-cursor"]')
    expect(detailLink.classes()).toEqual(expect.arrayContaining(['min-h-11', 'justify-center']))
  })

  it('does not recommend Qwen CLI as a generic free daily-task option', async () => {
    const { wrapper } = await mountPricing()

    expect(wrapper.text()).toContain('Qwen CLI 需按 Coding Plan、API key 或 provider 成本单独核算')
    expect(wrapper.text()).not.toContain('DeepSeek、Qwen、Gemini CLI 等免费工具足够应对 80%')
    expect(wrapper.text()).not.toContain('日常任务用免费版')
  })

  it('does not describe Claude Code Max as unlimited usage', async () => {
    const { wrapper } = await mountPricing()

    expect(wrapper.text()).toContain('Claude Code Max $200/月起提供更高用量档')
    expect(wrapper.text()).toContain('计划、模型和时段/会话限制核验')
    expect(wrapper.text()).not.toContain('无限额度')
    expect(wrapper.text()).not.toContain('效率提升远超成本')
  })

  it('keeps subscription combo cards resilient for long text on small screens', async () => {
    const { wrapper } = await mountPricing()

    expect(wrapper.get('[data-testid="pricing-combo-name-0"]').classes()).toEqual(
      expect.arrayContaining(['min-w-0', 'break-words']),
    )
    expect(wrapper.get('[data-testid="pricing-combo-budget-0"]').classes()).toContain('shrink-0')

    const firstToolRow = wrapper.get('[data-testid="pricing-combo-tool-0-0"]')
    expect(firstToolRow.classes()).toEqual(expect.arrayContaining(['flex-col', 'sm:flex-row']))
    expect(wrapper.get('[data-testid="pricing-combo-tool-name-0-0"]').classes()).toEqual(
      expect.arrayContaining(['min-w-0', 'break-words']),
    )
    expect(wrapper.get('[data-testid="pricing-combo-tool-cost-0-0"]').classes()).toContain('break-words')
  })

  it('uses pricing signals for free and CNY budget matching', async () => {
    const { wrapper } = await mountPricing()

    await wrapper.get('[data-testid="pricing-budget-free"]').trigger('click')
    expect(wrapper.get('[data-testid="pricing-mobile-card-qwen-cli"]').classes()).toContain('opacity-40')
    expect(wrapper.get('[data-testid="pricing-mobile-card-suno"]').classes()).not.toContain('opacity-40')

    await wrapper.get('[data-testid="pricing-budget-free"]').trigger('click')
    await wrapper.get('[data-testid="pricing-budget-light"]').trigger('click')
    expect(wrapper.get('[data-testid="pricing-mobile-card-codebuddy"]').classes()).not.toContain('opacity-40')
  })

  it('highlights selected combo tools by explicit catalog ids instead of fuzzy name contains', async () => {
    const { wrapper } = await mountPricing()

    await wrapper.get('[data-testid="pricing-combo-option-0"]').trigger('click')

    expect(wrapper.get('[data-testid="pricing-mobile-card-claude-code"]').classes()).toContain('bg-primary/10')
    expect(wrapper.get('[data-testid="pricing-mobile-card-claude"]').classes()).not.toContain('bg-primary/10')
  })

  it('does not expose raw N/A placeholders in pricing rows', async () => {
    const placeholderTools = [
      {
        ...sampleTools[0],
        versions: [{ pricing: 'N/A', models: '多模型', link: 'https://cursor.com' }],
        freeQuota: 'N/A',
      },
    ]

    const { wrapper } = await mountPricing(placeholderTools)

    expect(wrapper.text()).not.toContain('N/A')
    expect(wrapper.text()).toContain('暂无免费额度说明')
    expect(wrapper.text()).toContain('未公开')
  })
})
