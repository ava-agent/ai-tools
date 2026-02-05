import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { aiToolsData } from '../data/tools.js'

export const useToolsStore = defineStore('tools', () => {
  const tools = ref(aiToolsData)
  const searchQuery = ref('')
  const selectedCategory = ref('all')
  const selectedTags = ref([])

  const filteredTools = computed(() => {
    let result = tools.value

    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.developer.toLowerCase().includes(query) ||
        tool.bestFor.toLowerCase().includes(query)
      )
    }

    if (selectedCategory.value !== 'all') {
      result = result.filter(tool => tool.category === selectedCategory.value)
    }

    if (selectedTags.value.length > 0) {
      result = result.filter(tool =>
        tool.tags && Array.isArray(tool.tags) &&
        tool.tags.some(tag => selectedTags.value.includes(tag))
      )
    }

    // 按星级降序排序
    result = [...result].sort((a, b) => {
      const ratingA = a.personalExperience?.rating || 0
      const ratingB = b.personalExperience?.rating || 0
      return ratingB - ratingA
    })

    return result
  })

  const categories = computed(() => {
    const cats = new Set(tools.value.map(t => t.category))
    return ['all', ...Array.from(cats)]
  })

  const allTags = computed(() => {
    const tags = new Set()
    tools.value.forEach(tool => {
      if (tool.tags && Array.isArray(tool.tags)) {
        tool.tags.forEach(tag => tags.add(tag))
      }
    })
    return Array.from(tags)
  })

  function setSearchQuery(query) {
    searchQuery.value = query
  }

  function setSelectedCategory(category) {
    selectedCategory.value = category
  }

  function toggleTag(tag) {
    const index = selectedTags.value.indexOf(tag)
    if (index === -1) {
      selectedTags.value.push(tag)
    } else {
      selectedTags.value.splice(index, 1)
    }
  }

  function clearFilters() {
    searchQuery.value = ''
    selectedCategory.value = 'all'
    selectedTags.value = []
  }

  return {
    tools,
    searchQuery,
    selectedCategory,
    selectedTags,
    filteredTools,
    categories,
    allTags,
    setSearchQuery,
    setSelectedCategory,
    toggleTag,
    clearFilters
  }
})
