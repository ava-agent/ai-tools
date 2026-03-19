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
  const isLoading = ref(false)
  const error = ref(null)
  const comparedToolIds = ref([])

  // Getters
  const filteredTools = computed(() => {
    let result = tools.value

    // 搜索过滤
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase().trim()
      result = result.filter(tool => {
        return (
          tool.name?.toLowerCase().includes(query) ||
          tool.developer?.toLowerCase().includes(query) ||
          tool.bestFor?.toLowerCase().includes(query) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(query))
        )
      })
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
    selectedTags.value.length > 0
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

  function clearFilters() {
    searchQuery.value = ''
    selectedCategory.value = 'all'
    selectedTags.value = []
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
    isLoading.value = false
    error.value = null
  }

  return {
    // State
    tools,
    searchQuery,
    selectedCategory,
    selectedTags,
    isLoading,
    error,
    comparedToolIds,

    // Getters
    filteredTools,
    toolsCount,
    hasFilters,
    categories,
    allTags,
    categoryStats,
    comparedTools,

    // Actions
    addToCompare,
    removeFromCompare,
    clearCompare,
    setSearchQuery,
    setSelectedCategory,
    toggleTag,
    setTags,
    clearFilters,
    getToolById,
    getToolsByCategory,
    getToolsByTag,
    $reset
  }
})
