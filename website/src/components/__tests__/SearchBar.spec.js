import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import SearchBar from '../SearchBar.vue'
import { useCatalogStore } from '../../stores/catalog'

describe('SearchBar decision filters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  function mountSearchBar() {
    const pinia = createPinia()
    setActivePinia(pinia)
    const store = useCatalogStore()
    const wrapper = mount(SearchBar, {
      global: {
        plugins: [pinia],
      },
    })
    return { wrapper, store }
  }

  it('updates scenario, budget, and verification filters from the UI', async () => {
    const { wrapper, store } = mountSearchBar()

    expect(wrapper.text()).toContain('按场景选工具')

    await wrapper.get('[data-testid="scenario-filter-complex-refactor"]').trigger('click')
    await wrapper.get('[data-testid="budget-filter-free"]').trigger('click')
    await wrapper.get('[data-testid="verification-filter-verified"]').trigger('click')

    expect(store.selectedScenario).toBe('complex-refactor')
    expect(store.selectedBudget).toBe('free')
    expect(store.selectedVerification).toBe('verified')

    await wrapper.get('[data-testid="decision-clear-filters"]').trigger('click')

    expect(store.selectedScenario).toBe('all')
    expect(store.selectedBudget).toBe('all')
    expect(store.selectedVerification).toBe('all')
  })

  it('labels search controls and gives filter pills mobile-friendly hit areas', async () => {
    const { wrapper } = mountSearchBar()

    const input = wrapper.get('input[type="text"]')
    expect(input.attributes('aria-label')).toBe('搜索工具')
    expect(input.classes()).toContain('pr-14')

    await input.setValue('cursor')
    const clearSearch = wrapper.get('button[aria-label="清空搜索"]')
    expect(clearSearch.classes()).toEqual(expect.arrayContaining(['min-h-11', 'min-w-11']))

    const categoryFilter = wrapper.findAll('button').find((button) => button.text().includes('全部'))
    expect(categoryFilter?.attributes('aria-pressed')).toBe('true')
    expect(categoryFilter?.classes()).toContain('min-h-11')

    const scenarioFilter = wrapper.get('[data-testid="scenario-filter-complex-refactor"]')
    expect(scenarioFilter.attributes('aria-pressed')).toBe('false')
    expect(scenarioFilter.classes()).toContain('min-h-11')

    await scenarioFilter.trigger('click')
    expect(scenarioFilter.attributes('aria-pressed')).toBe('true')
    const clearFilters = wrapper.get('[data-testid="decision-clear-filters"]')
    expect(clearFilters.attributes('aria-label')).toBe('清空筛选条件')
    expect(clearFilters.classes()).toContain('min-h-11')
  })

  it('groups decision filters by scenario, budget, and verification state', () => {
    const { wrapper } = mountSearchBar()

    const scenarioGroup = wrapper.get('[data-testid="decision-group-scenario"]')
    expect(scenarioGroup.attributes('role')).toBe('group')
    expect(scenarioGroup.attributes('aria-labelledby')).toBe('decision-group-label-scenario')
    expect(wrapper.get('#decision-group-label-scenario').text()).toBe('场景')

    const budgetGroup = wrapper.get('[data-testid="decision-group-budget"]')
    expect(budgetGroup.attributes('role')).toBe('group')
    expect(budgetGroup.attributes('aria-labelledby')).toBe('decision-group-label-budget')
    expect(wrapper.get('#decision-group-label-budget').text()).toBe('预算')

    const verificationGroup = wrapper.get('[data-testid="decision-group-verification"]')
    expect(verificationGroup.attributes('role')).toBe('group')
    expect(verificationGroup.attributes('aria-labelledby')).toBe('decision-group-label-verification')
    expect(wrapper.get('#decision-group-label-verification').text()).toBe('状态')
  })
})
