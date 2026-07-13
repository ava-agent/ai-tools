import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import Workflows from '../Workflows.vue'
import { pitfalls, workflows } from '../../data/workflows.js'
import { useWorkflowCatalogStore } from '../../stores/workflowCatalog'

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'landing', component: { template: '<div />' } },
      { path: '/workflows', name: 'workflows', component: { template: '<div />' } },
      { path: '/tool/:id', name: 'tool-detail', component: { template: '<div />' } },
    ],
  })
}

const workflowTools = [
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'ide',
    developer: 'Anysphere',
    verificationStatus: 'verified',
    lastVerified: '2026-06-25',
    versions: [{ link: 'https://cursor.com' }],
  },
  {
    id: 'trae',
    name: 'Trae',
    category: 'ide',
    developer: 'ByteDance',
    verificationStatus: 'verified',
    lastVerified: '2026-06-26',
    versions: [{ link: 'https://trae.ai' }],
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    category: 'ide',
    developer: 'Cognition',
    verificationStatus: 'verified',
    lastVerified: '2026-06-26',
    versions: [{ link: 'https://windsurf.com' }],
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'llm',
    developer: 'Anthropic',
    verificationStatus: 'verified',
    lastVerified: '2026-06-26',
    versions: [{ link: 'https://claude.ai' }],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'llm',
    developer: 'Google',
    verificationStatus: 'verified',
    lastVerified: '2026-06-26',
    versions: [{ link: 'https://gemini.google.com' }],
  },
]

async function mountWorkflows() {
  const pinia = createPinia()
  setActivePinia(pinia)

  const toolsStore = useWorkflowCatalogStore()
  toolsStore.tools = workflowTools

  const router = makeRouter()
  await router.push('/workflows')
  await router.isReady()

  return mount(Workflows, {
    global: {
      plugins: [pinia, router],
    },
  })
}

describe('Workflows', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows a recommended stack and verification badges for the active workflow', async () => {
    const wrapper = await mountWorkflows()

    expect(wrapper.text()).toContain('推荐工具栈')
    expect(wrapper.text()).toContain('主力实现')
    expect(wrapper.text()).toContain('Cursor')
    expect(wrapper.text()).toContain('已核验')
    expect(wrapper.text()).toContain('核验于 2026-06-25')
  })

  it('presents reviewed workflow templates with direct official sources', async () => {
    const wrapper = await mountWorkflows()
    const dailyWorkflow = workflows.find(workflow => workflow.id === 'daily-dev')

    expect(wrapper.text()).toContain('AI 可编辑工作流模板')
    expect(wrapper.text()).toContain('可编辑工作流模板，基于公开产品能力整理，执行前按团队环境验证')
    expect(wrapper.get('[data-testid="workflow-review-meta"]').text()).toContain('模板复核于 2026-07-13')
    expect(wrapper.get('[data-testid="workflow-source-daily-dev-0"]').attributes('href')).toBe(
      dailyWorkflow.sources[0]
    )
  })

  it('updates the recommended stack when switching workflow tabs', async () => {
    const wrapper = await mountWorkflows()

    await wrapper.get('[data-testid="workflow-tab-rapid-prototype"]').trigger('click')

    expect(wrapper.text()).toContain('快速原型流')
    expect(wrapper.text()).toContain('0→1 原型')
    expect(wrapper.text()).toContain('TRAE Work')
    expect(wrapper.text()).toContain('SOLO Agent')
    expect(wrapper.text()).toContain('Windsurf')
    expect(wrapper.text()).toContain('Cascade Plan/Code/Ask')
    expect(wrapper.text()).toContain('已核验')
  })

  it('keeps terminology, quality gates, and parallel-work guidance conservative', () => {
    const rapidPrototype = workflows.find(workflow => workflow.id === 'rapid-prototype')
    const refactorFlow = workflows.find(workflow => workflow.id === 'refactor-flow')
    const criticalTask = workflows.find(workflow => workflow.id === 'critical-task')
    const workflowText = JSON.stringify(workflows)

    for (const workflow of workflows) {
      expect(workflow.lastReviewed).toBe('2026-07-13')
      expect(workflow.sources.length).toBeGreaterThan(0)
      expect(workflow.sources.every(source => source.startsWith('https://'))).toBe(true)
    }

    expect(workflowText).toContain('Agent/Plan/Ask')
    expect(workflowText).toContain('Cascade Plan/Code/Ask')
    expect(workflowText).not.toMatch(/Composer|Solo Builder|Solo Coder|Flow 模式/)
    expect(rapidPrototype.tips.join(' ')).toContain('安全、可运行、可回滚的最低质量线')
    expect(criticalTask.steps[0].tip).toContain('experimental')
    expect(criticalTask.steps[0].tip).toContain('默认关闭')
    expect(criticalTask.steps[0].tip).toContain('可独立并行')
    expect(criticalTask.steps[0].tip).toContain('单会话/子代理')
    expect(refactorFlow.steps.at(-1).tip).toContain('隔离分支')
    expect(refactorFlow.steps.at(-1).tip).toContain('小提交')
    expect(refactorFlow.steps.at(-1).tip).toContain('tag 仅用于')
    expect(pitfalls.cli.at(-1).solution).toContain('稳定里程碑')
  })

  it('does not nest glass cards inside the workflow detail card', async () => {
    const wrapper = await mountWorkflows()

    expect(wrapper.find('.workflow-detail-card .glass-card').exists()).toBe(false)
    expect(wrapper.get('[data-testid="workflow-tab-daily-dev"]').attributes('aria-pressed')).toBe('true')
  })

  it('keeps workflow step rows resilient for long action and tool labels on mobile', async () => {
    const wrapper = await mountWorkflows()

    const firstStep = wrapper.get('[data-testid="workflow-step-1"]')
    expect(firstStep.classes()).toEqual(expect.arrayContaining(['flex-col', 'sm:flex-row']))

    const content = wrapper.get('[data-testid="workflow-step-content-1"]')
    expect(content.classes()).toContain('min-w-0')

    const actionRow = wrapper.get('[data-testid="workflow-step-action-row-1"]')
    expect(actionRow.classes()).toEqual(expect.arrayContaining(['flex-col', 'sm:flex-row', 'sm:items-center']))

    const action = wrapper.get('[data-testid="workflow-step-action-1"]')
    expect(action.classes()).toContain('break-words')
  })

  it('renders compound workflow tool labels as separate tool links', async () => {
    const wrapper = await mountWorkflows()

    await wrapper.get('[data-testid="workflow-tab-design-flow"]').trigger('click')

    const stepThreeLinks = wrapper.findAll('[data-testid^="workflow-step-3-tool-"]')
    expect(stepThreeLinks.map(link => link.text())).toEqual(['Claude', 'Gemini'])
    expect(wrapper.get('[data-testid="workflow-step-3-tool-claude"]').attributes('href')).toContain('/tool/claude')
    expect(wrapper.get('[data-testid="workflow-step-3-tool-gemini"]').attributes('href')).toContain('/tool/gemini')
  })
})
