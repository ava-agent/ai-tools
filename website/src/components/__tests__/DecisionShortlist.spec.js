import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { nextTick } from 'vue'
import DecisionShortlist from '../DecisionShortlist.vue'
import { useCatalogStore } from '../../stores/catalog'

const tools = [
  {
    id: 'cursor',
    name: 'Cursor',
    developer: 'Anysphere',
    bestFor: '日常主力开发、复杂架构重构与高频编码',
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['https://cursor.com/pricing', 'local-note'],
    personalExperience: { rating: 5, pitfalls: ['用量成本需要监控'] },
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    developer: 'Anthropic',
    bestFor: '关键方案、复杂重构、高难定位、大型代码库',
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://docs.anthropic.com/', 'https://anthropic.com/pricing'],
    personalExperience: { rating: 5, pitfalls: ['订阅与 API 成本路径不同'] },
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    developer: 'Google',
    bestFor: '读仓库、长日志、多文件定位、方案调研',
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://github.com/google-gemini/gemini-cli'],
    personalExperience: { rating: 4.5, pitfalls: ['需要关注配额和登录状态'] },
  },
  {
    id: 'qwen-cli',
    name: 'Qwen CLI',
    developer: 'Alibaba',
    bestFor: '中文需求、中小项目开发',
    verificationStatus: 'needs-review',
    sources: [],
    personalExperience: { rating: 4, pitfalls: ['成本路径需要再核验'] },
  },
]

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: { template: '<div />' } },
      { path: '/comparison', name: 'comparison', component: { template: '<div />' } },
      { path: '/tool/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
}

async function mountShortlist(inputTools = tools) {
  const pinia = createPinia()
  setActivePinia(pinia)
  const router = makeRouter()
  await router.push('/')
  await router.isReady()

  const wrapper = mount(DecisionShortlist, {
    props: { tools: inputTools },
    global: {
      plugins: [pinia, router],
      stubs: {
        ToolLogo: true,
      },
    },
  })

  return { wrapper, store: useCatalogStore(), router }
}

describe('DecisionShortlist', () => {
  it('renders the top three tools as a focused shortlist', async () => {
    const { wrapper } = await mountShortlist()

    expect(wrapper.get('[data-testid="decision-shortlist"]').text()).toContain('本轮短名单')
    expect(wrapper.findAll('[data-testid^="decision-shortlist-card-"]')).toHaveLength(3)
    expect(wrapper.text()).toContain('Cursor')
    expect(wrapper.text()).toContain('Claude Code')
    expect(wrapper.text()).toContain('Gemini CLI')
    expect(wrapper.text()).not.toContain('Qwen CLI')
    expect(wrapper.text()).toContain('1 个公开来源')
    expect(wrapper.text()).toContain('2 个公开来源')
  })

  it('adds the top three tools to comparison in one action', async () => {
    const { wrapper, store } = await mountShortlist()
    const compareLink = wrapper.get('[data-testid="decision-shortlist-compare-top"]')

    expect(decodeURIComponent(compareLink.attributes('href'))).toContain(
      '/comparison?tools=cursor,claude-code,gemini-cli&start=1',
    )

    await compareLink.trigger('click')
    await nextTick()

    expect(store.comparedToolIds).toEqual(['cursor', 'claude-code', 'gemini-cli'])
  })

  it('toggles an individual shortlist tool in comparison', async () => {
    const { wrapper, store } = await mountShortlist()

    await wrapper.get('[data-testid="decision-shortlist-toggle-cursor"]').trigger('click')
    expect(store.comparedToolIds).toEqual(['cursor'])

    await wrapper.get('[data-testid="decision-shortlist-toggle-cursor"]').trigger('click')
    expect(store.comparedToolIds).toEqual([])
  })

  it('disables new additions and explains the four-tool limit', async () => {
    const { wrapper, store } = await mountShortlist()
    store.comparedToolIds = ['one', 'two', 'three', 'four']
    await nextTick()

    const cursorToggle = wrapper.get('[data-testid="decision-shortlist-toggle-cursor"]')
    expect(cursorToggle.attributes('disabled')).toBeDefined()
    expect(cursorToggle.attributes('aria-label')).toContain('对比已满')
    expect(wrapper.get('[data-testid="decision-shortlist-limit-message"]').text()).toContain(
      '对比已满 4 个',
    )
  })

  it('does not render when there are no matching tools', async () => {
    const { wrapper } = await mountShortlist([])

    expect(wrapper.find('[data-testid="decision-shortlist"]').exists()).toBe(false)
  })
})
