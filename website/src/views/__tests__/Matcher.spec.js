import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import Matcher from '../Matcher.vue'
import { categories } from '../../data/categories.js'

const YES_LABEL = '\u56de\u7b54 \u662f'
const NO_LABEL = '\u56de\u7b54 \u5426'

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/tools', name: 'tools', component: { template: '<div />' } },
      { path: '/matcher', name: 'matcher', component: Matcher },
      { path: '/tool/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
}

async function mountMatcher() {
  const pinia = createPinia()
  setActivePinia(pinia)

  const router = makeRouter()
  await router.push('/matcher')
  await router.isReady()

  return mount(Matcher, {
    global: {
      plugins: [pinia, router],
      stubs: {
        RouterLink: {
          template: '<a :href="to"><slot /></a>',
          props: ['to'],
        },
      },
    },
  })
}

function findButtonByText(wrapper, text) {
  return wrapper.findAll('button').find((button) => button.text().includes(text))
}

describe('Matcher accessibility', () => {
  it('does not use negative letter spacing in compact page headings', async () => {
    const wrapper = await mountMatcher()

    expect(wrapper.html()).not.toContain('letter-spacing: -')
  })

  it('exposes selected category and decision answer states through buttons', async () => {
    const wrapper = await mountMatcher()
    const firstCategory = categories[0]
    const categoryButton = wrapper.findAll('button').find((button) =>
      button.text().includes(firstCategory.nameZh),
    )

    expect(categoryButton.exists()).toBe(true)
    expect(categoryButton.attributes('type')).toBe('button')
    expect(categoryButton.attributes('aria-pressed')).toBe('false')

    await categoryButton.trigger('click')

    expect(categoryButton.attributes('aria-pressed')).toBe('true')
    expect(wrapper.get(`button[aria-label="${YES_LABEL}"]`).attributes('type')).toBe('button')
    expect(wrapper.get(`button[aria-label="${NO_LABEL}"]`).attributes('type')).toBe('button')
  })

  it('keeps the active decision panel from nesting glass cards', async () => {
    const wrapper = await mountMatcher()
    const firstCategory = categories[0]
    const categoryButton = wrapper.findAll('button').find((button) =>
      button.text().includes(firstCategory.nameZh),
    )

    await categoryButton.trigger('click')

    const decisionCard = wrapper.get('[data-testid="matcher-decision-card"]')
    expect(decisionCard.find('.glass-card').exists()).toBe(false)
  })

  it('stacks multi-choice answers on mobile before switching to two columns', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 模型').trigger('click')

    const options = wrapper.get('[data-testid="matcher-multi-options"]')
    expect(options.classes()).toEqual(expect.arrayContaining(['grid-cols-1', 'sm:grid-cols-2']))
    expect(options.classes()).not.toContain('grid-cols-2')
  })

  it('renders composite recommendations as separate catalog links', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 模型').trigger('click')
    await findButtonByText(wrapper, '代码生成/重构').trigger('click')
    await findButtonByText(wrapper, '充足').trigger('click')

    expect(wrapper.get('[data-testid="matcher-result-label"]').text()).toContain('Claude / Claude Code')
    expect(wrapper.get('[data-testid="matcher-result-tool-link-claude"]').text()).toContain('Claude')
    expect(wrapper.get('[data-testid="matcher-result-tool-link-claude-code"]').text()).toContain('Claude Code')
    expect(wrapper.find('[data-testid="matcher-result-unlinked"]').exists()).toBe(false)
  })

  it('lets the AI Skills category reach linked skill recommendations', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 技能').trigger('click')

    expect(wrapper.get('[data-testid="matcher-decision-card"]').text()).toContain('AI Skills')

    await findButtonByText(wrapper, '前端/体验').trigger('click')
    await findButtonByText(wrapper, '设计实现').trigger('click')

    expect(wrapper.get('[data-testid="matcher-result-label"]').text()).toContain('frontend-app-builder')
    expect(wrapper.get('[data-testid="matcher-result-tool-link-frontend-design-skill"]').text()).toContain('frontend-app-builder')
    expect(wrapper.find('[data-testid="matcher-result-tool-link-ui-ux-pro-max-skill"]').exists()).toBe(false)
  })

  it('links conservative legal recommendations to cataloged model tools', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 模型').trigger('click')
    await findButtonByText(wrapper, '垂直领域').trigger('click')
    await findButtonByText(wrapper, '法律').trigger('click')

    expect(wrapper.get('[data-testid="matcher-result-label"]').text()).toContain('Qwen / 通用模型辅助')
    expect(wrapper.get('[data-testid="matcher-result-tool-link-qwen"]').text()).toContain('Qwen')
    expect(wrapper.get('[data-testid="matcher-decision-card"]').text()).toContain('法律资料整理辅助，结论需人工复核')
    expect(wrapper.find('[data-testid="matcher-result-unlinked"]').exists()).toBe(false)
  })

  it('shows verified status for Semgrep security decision results', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 技能').trigger('click')
    await findButtonByText(wrapper, '安全审计').trigger('click')
    await findButtonByText(wrapper, '代码扫描').trigger('click')

    expect(wrapper.get('[data-testid="matcher-result-tool-link-semgrep-skill"]').text()).toContain('semgrep')
    expect(wrapper.get('[data-testid="matcher-result-verification-semgrep-skill"]').text()).toContain('已核验')
    expect(wrapper.find('[data-testid="matcher-result-verification-note"]').exists()).toBe(false)
  })

  it('wraps result actions on narrow screens and keeps them touch friendly', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 技能').trigger('click')
    await findButtonByText(wrapper, '前端/体验').trigger('click')
    await findButtonByText(wrapper, '设计实现').trigger('click')

    const actions = wrapper.get('[data-testid="matcher-result-actions"]')
    expect(actions.classes()).toEqual(expect.arrayContaining(['flex-wrap', 'justify-center']))

    const resetButton = actions.get('button')
    expect(resetButton.classes()).toEqual(expect.arrayContaining(['min-h-11', 'justify-center']))

    const catalogLink = actions.get('[data-testid="matcher-result-tools-link"]')
    expect(catalogLink.classes()).toEqual(expect.arrayContaining(['min-h-11', 'justify-center']))
    expect(catalogLink.attributes('href')).toBe('/tools')
  })

  it('lets scenario guide links wrap instead of forcing mobile overflow', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'AI 技能').trigger('click')

    const scenarioLinkRows = wrapper.findAll('[data-testid="matcher-scenario-link-row"]')
    expect(scenarioLinkRows.length).toBeGreaterThan(0)
    scenarioLinkRows.forEach((row) => {
      expect(row.classes()).toEqual(expect.arrayContaining(['flex-wrap', 'min-w-0', 'justify-end']))
    })
  })

  it('shows verification status for verified scenario links', async () => {
    const wrapper = await mountMatcher()

    await findButtonByText(wrapper, 'MCP 工具').trigger('click')

    expect(wrapper.get('[data-testid="matcher-scenario-tool-link-n8n"]').text()).toContain('n8n')
    expect(wrapper.get('[data-testid="matcher-scenario-verification-n8n"]').text()).toContain('已核验')
  })
})
