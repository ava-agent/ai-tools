import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useCatalogStore } from '../catalog'
import { useToolsStore } from '../tools'

function filteredIds(store) {
  return store.filteredTools.map((tool) => tool.id)
}

describe('catalog store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('preserves full-catalog search and filter results with lightweight entries', async () => {
    const catalogStore = useCatalogStore()
    const fullStore = useToolsStore()

    expect(catalogStore.tools.map((tool) => tool.id)).toEqual(fullStore.tools.map((tool) => tool.id))
    expect(filteredIds(catalogStore)).toEqual(filteredIds(fullStore))

    for (const query of ['Cursor', '长上下文', 'public upstream', '商业授权', 'API']) {
      catalogStore.$reset()
      fullStore.$reset()
      await catalogStore.setSearchQuery(query)
      fullStore.setSearchQuery(query)
      expect(filteredIds(catalogStore), `search: ${query}`).toEqual(filteredIds(fullStore))
    }

    for (const scenario of catalogStore.decisionScenarios.map((option) => option.id)) {
      catalogStore.$reset()
      fullStore.$reset()
      catalogStore.setScenarioFilter(scenario)
      fullStore.setScenarioFilter(scenario)
      expect(filteredIds(catalogStore), `scenario: ${scenario}`).toEqual(filteredIds(fullStore))
    }

    for (const budget of catalogStore.budgetOptions.map((option) => option.id)) {
      catalogStore.$reset()
      fullStore.$reset()
      catalogStore.setBudgetFilter(budget)
      fullStore.setBudgetFilter(budget)
      expect(filteredIds(catalogStore), `budget: ${budget}`).toEqual(filteredIds(fullStore))
    }

    for (const verification of catalogStore.verificationOptions.map((option) => option.id)) {
      catalogStore.$reset()
      fullStore.$reset()
      catalogStore.setVerificationFilter(verification)
      fullStore.setVerificationFilter(verification)
      expect(filteredIds(catalogStore), `verification: ${verification}`).toEqual(filteredIds(fullStore))
    }

    for (const category of catalogStore.categories) {
      catalogStore.$reset()
      fullStore.$reset()
      catalogStore.setSelectedCategory(category)
      fullStore.setSelectedCategory(category)
      expect(filteredIds(catalogStore), `category: ${category}`).toEqual(filteredIds(fullStore))
    }
  })

  it('keeps home comparison selection bounded to four tools', () => {
    const store = useCatalogStore()
    store.tools.slice(0, 5).forEach((tool) => store.addToCompare(tool.id))

    expect(store.comparedToolIds).toHaveLength(4)
    store.removeFromCompare(store.comparedToolIds[0])
    expect(store.comparedToolIds).toHaveLength(3)
    store.clearCompare()
    expect(store.comparedToolIds).toEqual([])
  })
})
