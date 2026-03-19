<template>
  <div class="max-w-[960px] mx-auto px-5 py-4">
    <!-- Search input -->
    <div class="relative mb-3">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
      <input
        v-model="localQuery"
        type="text"
        placeholder="搜索工具名称、开发者、标签..."
        class="input-field w-full pl-9 pr-9 py-2.5"
        @input="handleSearch"
      >
      <button
        v-if="localQuery"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
        @click="clearSearch"
      >
        <X class="w-4 h-4" />
      </button>
    </div>

    <!-- Category pills -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category"
        class="pill"
        :class="selectedCategory === category ? 'pill-active' : 'pill-inactive'"
        @click="selectCategory(category)"
      >
        {{ category === 'all' ? '全部' : getCategoryDisplayName(category) }}
        <span
          class="ml-1 text-[10px] opacity-60"
        >{{ getCategoryCount(category) }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { Search, X } from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { getCategoryLabel } from '../utils/helpers'

const toolsStore = useToolsStore()

const selectedCategory = computed(() => toolsStore.selectedCategory)
const categories = computed(() => toolsStore.categories)
const localQuery = ref(toolsStore.searchQuery)

// Sync store → local when store changes externally (e.g. clearFilters)
watch(() => toolsStore.searchQuery, (val) => {
  localQuery.value = val
})

let debounceTimer
function handleSearch() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    toolsStore.setSearchQuery(localQuery.value)
  }, 200)
}

function clearSearch() {
  localQuery.value = ''
  toolsStore.setSearchQuery('')
}

const selectCategory = (category) => {
  toolsStore.setSelectedCategory(category)
}

const getCategoryDisplayName = (category) => {
  if (category === 'all') return '全部'
  return getCategoryLabel(category)
}

const getCategoryCount = (category) => {
  if (category === 'all') return toolsStore.tools.length
  return toolsStore.categoryStats[category] || 0
}
</script>
