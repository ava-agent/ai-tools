import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { aiToolsData } from '../data/tools.js'

/**
 * 工具数据存储 Store
 * 使用 Composition API 风格
 */
export const useToolsStore = defineStore('tools', () => {
  // State
  const tools = ref(aiToolsData)
  const searchQuery = ref('')
  const selectedCategory = ref('all')
  const selectedTags = ref([])
  const selectedScenario = ref('all')
  const selectedBudget = ref('all')
  const selectedVerification = ref('all')
  const comparedToolIds = ref([])

  const decisionScenarios = [
    { id: 'all', label: '全部场景' },
    { id: 'daily-coding', label: '日常开发' },
    { id: 'complex-refactor', label: '复杂重构' },
    { id: 'free-stack', label: '免费/开源' },
    { id: 'long-context', label: '长上下文研究' },
    { id: 'visual-generation', label: '视觉生成' }
  ]

  const budgetOptions = [
    { id: 'all', label: '全部预算' },
    { id: 'free', label: '免费优先' },
    { id: 'low-cost', label: '低成本' },
    { id: 'paid', label: '付费可接受' }
  ]

  const verificationOptions = [
    { id: 'all', label: '全部状态' },
    { id: 'verified', label: '已核验' },
    { id: 'needs-review', label: '待核验' }
  ]

  const scenarioMatchers = {
    'daily-coding': /日常|主力|开发|编码|补全|ide|cli|编辑器/i,
    'complex-refactor': /复杂|重构|架构|大型代码库|代码库|迁移|影响面|多文件/i,
    'free-stack': /免费|free|开源|永久免费|\$0/i,
    'long-context': /长上下文|上下文|1m|研究|调研|搜索|文档|日志|代码库/i,
    'visual-generation': /图像|图片|视觉|视频|生成|设计|动画|image|video/i
  }

  function collectText(value) {
    if (!value) return ''
    if (typeof value === 'string' || typeof value === 'number') return String(value)
    if (Array.isArray(value)) return value.map(collectText).join(' ')
    if (typeof value === 'object') return Object.values(value).map(collectText).join(' ')
    return ''
  }

  function getToolSearchText(tool) {
    return collectText([
      tool.name,
      tool.developer,
      tool.category,
      tool.subcategory,
      tool.bestFor,
      tool.freeQuota,
      tool.tags,
      tool.pricing,
      tool.models,
      tool.versions,
      tool.pros,
      tool.cons,
      tool.personalExperience,
      tool.decisionSummary
    ]).toLowerCase()
  }

  function getPricingSearchText(tool) {
    return collectText([
      tool.freeQuota,
      tool.versions?.map(version => [
        version.type,
        version.pricing,
      ]),
    ]).toLowerCase()
  }

  function matchesScenario(tool, scenario) {
    if (scenario === 'all') return true
    if (scenario === 'free-stack') return hasFreeTier(tool)
    const matcher = scenarioMatchers[scenario]
    if (!matcher) return true
    const toolText = getToolSearchText(tool)
    return matcher.test(toolText)
  }

  function hasFreeTier(tool) {
    const pricingText = getPricingSearchText(tool)
    const hasFreeSignal = /完全免费|免费开源|永久免费|免费额度|免费入口|免费计划|免费层|free\s*(plan|tier)?|\$0|开源/.test(pricingText)
    const hasNoFreeSignal = /无独立永久免费|无固定永久免费|无永久免费|无免费|不提供免费|free tier 不支持|付费订阅/.test(pricingText)
    return hasFreeSignal && !hasNoFreeSignal
  }

  function hasLowCostSignal(tool) {
    const pricingText = getPricingSearchText(tool)
    const contextText = collectText([tool.bestFor, tool.tags, tool.decisionSummary?.bestFor]).toLowerCase()
    return hasFreeTier(tool) || /低价|低成本|预算有限|credits|按量|hobby|trial|试用|\$[1-9]|元\/|月/.test(`${pricingText} ${contextText}`)
  }

  function matchesBudget(tool, budget) {
    if (budget === 'all') return true
    const toolText = getToolSearchText(tool)

    if (budget === 'free') {
      return hasFreeTier(tool)
    }

    if (budget === 'low-cost') {
      return hasLowCostSignal(tool)
    }

    if (budget === 'paid') {
      return /pro|plus|max|team|business|enterprise|订阅|付费|按量|\$|credits|元\/|月|年/.test(toolText)
    }

    return true
  }

  function matchesVerification(tool, verification) {
    if (verification === 'all') return true
    const status = tool.verificationStatus || 'needs-review'
    if (verification === 'needs-review') return status !== 'verified'
    return status === verification
  }

  // Getters
  const filteredTools = computed(() => {
    let result = tools.value

    // 搜索过滤
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase().trim()
      result = result.filter(tool => getToolSearchText(tool).includes(query))
    }

    // 类别过滤
    if (selectedCategory.value !== 'all') {
      result = result.filter(tool => tool.category === selectedCategory.value)
    }

    // 标签过滤
    if (selectedTags.value.length > 0) {
      result = result.filter(tool =>
        tool.tags && Array.isArray(tool.tags) &&
        selectedTags.value.some(tag => tool.tags.includes(tag))
      )
    }

    // 决策过滤
    result = result.filter(tool =>
      matchesScenario(tool, selectedScenario.value) &&
      matchesBudget(tool, selectedBudget.value) &&
      matchesVerification(tool, selectedVerification.value)
    )

    // 按星级降序排序，星级相同按名称排序
    result = [...result].sort((a, b) => {
      const ratingA = a.personalExperience?.rating || 0
      const ratingB = b.personalExperience?.rating || 0

      if (ratingB !== ratingA) {
        return ratingB - ratingA
      }
      return a.name.localeCompare(b.name, 'zh-CN')
    })

    return result
  })

  const toolsCount = computed(() => filteredTools.value.length)
  const hasFilters = computed(() =>
    searchQuery.value !== '' ||
    selectedCategory.value !== 'all' ||
    selectedTags.value.length > 0 ||
    selectedScenario.value !== 'all' ||
    selectedBudget.value !== 'all' ||
    selectedVerification.value !== 'all'
  )

  const categories = computed(() => {
    const cats = new Set(tools.value.map(t => t.category))
    return ['all', ...Array.from(cats)]
  })

  const allTags = computed(() => {
    const tagMap = new Map()
    tools.value.forEach(tool => {
      if (tool.tags && Array.isArray(tool.tags)) {
        tool.tags.forEach(tag => {
          tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
        })
      }
    })
    // 按使用频率排序标签
    return Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag)
  })

  const categoryStats = computed(() => {
    const stats = new Map()
    tools.value.forEach(tool => {
      stats.set(tool.category, (stats.get(tool.category) || 0) + 1)
    })
    return Object.fromEntries(stats)
  })

  const comparedTools = computed(() =>
    comparedToolIds.value
      .map(id => tools.value.find(t => t.id === id))
      .filter(Boolean)
  )

  // Actions
  function addToCompare(toolId) {
    if (comparedToolIds.value.length < 4 && !comparedToolIds.value.includes(toolId)) {
      comparedToolIds.value = [...comparedToolIds.value, toolId]
    }
  }

  function removeFromCompare(toolId) {
    comparedToolIds.value = comparedToolIds.value.filter(id => id !== toolId)
  }

  function clearCompare() {
    comparedToolIds.value = []
  }

  function setSearchQuery(query) {
    searchQuery.value = query?.trim() || ''
  }

  function setSelectedCategory(category) {
    selectedCategory.value = category
  }

  function toggleTag(tag) {
    if (selectedTags.value.includes(tag)) {
      selectedTags.value = selectedTags.value.filter(t => t !== tag)
    } else {
      selectedTags.value = [...selectedTags.value, tag]
    }
  }

  function setTags(tags) {
    selectedTags.value = [...tags]
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
    selectedTags.value = []
    selectedScenario.value = 'all'
    selectedBudget.value = 'all'
    selectedVerification.value = 'all'
  }

  function getToolById(id) {
    return tools.value.find(tool => tool.id === id)
  }

  function getToolsByCategory(category) {
    return tools.value.filter(tool => tool.category === category)
  }

  function getToolsByTag(tag) {
    return tools.value.filter(tool =>
      tool.tags && tool.tags.includes(tag)
    )
  }

  // 重置状态
  function $reset() {
    tools.value = aiToolsData
    searchQuery.value = ''
    selectedCategory.value = 'all'
    selectedTags.value = []
    selectedScenario.value = 'all'
    selectedBudget.value = 'all'
    selectedVerification.value = 'all'
  }

  return {
    // State
    tools,
    searchQuery,
    selectedCategory,
    selectedTags,
    selectedScenario,
    selectedBudget,
    selectedVerification,
    comparedToolIds,

    // Getters
    filteredTools,
    toolsCount,
    hasFilters,
    categories,
    allTags,
    categoryStats,
    comparedTools,
    decisionScenarios,
    budgetOptions,
    verificationOptions,

    // Actions
    addToCompare,
    removeFromCompare,
    clearCompare,
    setSearchQuery,
    setSelectedCategory,
    toggleTag,
    setTags,
    setScenarioFilter,
    setBudgetFilter,
    setVerificationFilter,
    clearFilters,
    getToolById,
    getToolsByCategory,
    getToolsByTag,
    $reset
  }
})
