import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { homeCatalog, loadHomeSearchIndex } from '../data/generated/homeCatalog.js'
import {
  budgetOptions,
  collectCatalogText,
  decisionScenarios,
  matchesToolBudget,
  matchesToolScenario,
  matchesToolVerification,
  verificationOptions
} from '../utils/catalogFilters.js'

export const useCatalogStore = defineStore('catalog', () => {
  const tools = ref(homeCatalog)
  const searchQuery = ref('')
  const selectedCategory = ref('all')
  const selectedScenario = ref('all')
  const selectedBudget = ref('all')
  const selectedVerification = ref('all')
  const comparedToolIds = ref([])
  const searchIndex = ref(null)
  const searchIndexError = ref(false)
  const isSearchIndexLoading = ref(false)
  let searchIndexPromise = null

  function getFallbackSearchText(tool) {
    return collectCatalogText([
      tool.name,
      tool.developer,
      tool.category,
      tool.tags,
      tool.decisionSummary
    ]).toLowerCase()
  }

  const filteredTools = computed(() => {
    let result = tools.value
    const query = searchQuery.value.toLowerCase().trim()
    if (query) {
      result = result.filter((tool) =>
        (searchIndex.value?.[tool.id] || getFallbackSearchText(tool)).includes(query)
      )
    }
    if (selectedCategory.value !== 'all') {
      result = result.filter((tool) => tool.category === selectedCategory.value)
    }
    result = result.filter((tool) =>
      matchesToolScenario(tool, selectedScenario.value) &&
      matchesToolBudget(tool, selectedBudget.value) &&
      matchesToolVerification(tool, selectedVerification.value)
    )

    return [...result].sort((a, b) => {
      const ratingDifference = (b.personalExperience?.rating || 0) - (a.personalExperience?.rating || 0)
      return ratingDifference || a.name.localeCompare(b.name, 'zh-CN')
    })
  })

  const categories = computed(() => ['all', ...new Set(tools.value.map((tool) => tool.category))])
  const categoryStats = computed(() => {
    const stats = new Map()
    tools.value.forEach((tool) => stats.set(tool.category, (stats.get(tool.category) || 0) + 1))
    return Object.fromEntries(stats)
  })
  const hasFilters = computed(() =>
    Boolean(searchQuery.value) ||
    selectedCategory.value !== 'all' ||
    selectedScenario.value !== 'all' ||
    selectedBudget.value !== 'all' ||
    selectedVerification.value !== 'all'
  )

  async function ensureSearchIndex() {
    if (searchIndex.value) return searchIndex.value
    if (!searchIndexPromise) {
      isSearchIndexLoading.value = true
      searchIndexError.value = false
      searchIndexPromise = loadHomeSearchIndex()
        .then((index) => {
          searchIndex.value = index
          return index
        })
        .catch((error) => {
          searchIndexError.value = true
          throw error
        })
        .finally(() => {
          isSearchIndexLoading.value = false
          searchIndexPromise = null
        })
    }
    return searchIndexPromise
  }

  async function setSearchQuery(query) {
    searchQuery.value = query?.trim() || ''
    if (searchQuery.value && !searchIndex.value) {
      try {
        await ensureSearchIndex()
      } catch {
        // The visible fields remain searchable while the retry state is shown.
      }
    }
  }

  function retrySearchIndex() {
    return ensureSearchIndex().catch(() => null)
  }

  function setSelectedCategory(category) {
    selectedCategory.value = category || 'all'
  }

  function setScenarioFilter(scenario) {
    selectedScenario.value = scenario || 'all'
  }

  function setBudgetFilter(budget) {
    selectedBudget.value = budget || 'all'
  }

  function setVerificationFilter(verification) {
    selectedVerification.value = verification || 'all'
  }

  function clearFilters() {
    searchQuery.value = ''
    selectedCategory.value = 'all'
    selectedScenario.value = 'all'
    selectedBudget.value = 'all'
    selectedVerification.value = 'all'
  }

  function addToCompare(toolId) {
    if (comparedToolIds.value.length < 4 && !comparedToolIds.value.includes(toolId)) {
      comparedToolIds.value = [...comparedToolIds.value, toolId]
    }
  }

  function removeFromCompare(toolId) {
    comparedToolIds.value = comparedToolIds.value.filter((id) => id !== toolId)
  }

  function clearCompare() {
    comparedToolIds.value = []
  }

  function $reset() {
    tools.value = homeCatalog
    clearFilters()
    clearCompare()
  }

  return {
    tools,
    searchQuery,
    selectedCategory,
    selectedScenario,
    selectedBudget,
    selectedVerification,
    comparedToolIds,
    isSearchIndexLoading,
    searchIndexError,
    filteredTools,
    categories,
    categoryStats,
    hasFilters,
    decisionScenarios,
    budgetOptions,
    verificationOptions,
    setSearchQuery,
    retrySearchIndex,
    setSelectedCategory,
    setScenarioFilter,
    setBudgetFilter,
    setVerificationFilter,
    clearFilters,
    addToCompare,
    removeFromCompare,
    clearCompare,
    $reset
  }
})
