<template>
  <div class="mb-8 space-y-6">
    <!-- 搜索框和分类筛选 -->
    <div class="flex flex-col lg:flex-row gap-4">
      <!-- 搜索输入框 -->
      <div class="flex-1 relative group">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted transition-colors group-focus-within:text-primary z-10" />
        <input
          v-model="searchQuery"
          type="search"
          placeholder="搜索工具名称、开发者或用途..."
          class="input-field pl-12 pr-4 py-3.5"
          @input="handleSearch"
        >
        <div class="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <!-- 分类筛选按钮 -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="category in categories"
          :key="category"
          :aria-pressed="selectedCategory === category"
          :aria-label="`筛选${getCategoryDisplayName(category)}`"
          class="tag-pill text-sm relative overflow-hidden group"
          :class="selectedCategory === category ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:text-white'"
          @click="selectCategory(category)"
        >
          <span class="relative z-10" :class="selectedCategory === category ? 'font-semibold' : ''">
            {{ category === 'all' ? '全部' : getCategoryDisplayName(category) }}
          </span>
        </button>
      </div>
    </div>

    <!-- 标签筛选 -->
    <div v-if="allTags && allTags.length > 0" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Tag class="w-5 h-5 text-primary" />
          <h3 class="text-base font-semibold text-white">
            标签筛选
          </h3>
          <span v-if="selectedTags.length > 0" class="text-sm text-muted">
            (已选 {{ selectedTags.length }} 个)
          </span>
        </div>
        <button
          v-if="selectedTags.length > 0"
          class="px-4 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-all duration-200 border border-white/10 cursor-pointer"
          @click="clearTags"
        >
          清除筛选
        </button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tag in displayedTags"
          :key="tag"
          :aria-pressed="selectedTags.includes(tag)"
          :aria-label="`筛选${tag}`"
          class="tag-pill text-sm relative overflow-hidden group"
          :class="[
            selectedTags.includes(tag) ? 'text-white shadow-md' : 'text-white/70 hover:text-white',
            getTagColor(tag)
          ]"
          @click="toggleTag(tag)"
        >
          <span class="relative z-10">{{ tag }}</span>
        </button>
        <button
          v-if="allTags.length > displayLimit"
          class="tag-pill text-sm bg-white/5 text-white/60 hover:text-white"
          @click="toggleExpanded"
        >
          {{ isExpanded ? '收起' : `+${allTags.length - displayLimit} 更多` }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useToolsStore } from '../stores/tools'
import { Search, Tag } from 'lucide-vue-next'
import { getTagColor, getCategoryLabel } from '../utils/helpers'
import { debounce } from '../utils/helpers'

const toolsStore = useToolsStore()

const searchQuery = ref(toolsStore.searchQuery)
const selectedCategory = ref(toolsStore.selectedCategory)
const selectedTags = ref([...toolsStore.selectedTags])
const isExpanded = ref(false)
const displayLimit = 20

const categories = computed(() => toolsStore.categories)
const allTags = computed(() => toolsStore.allTags)

const displayedTags = computed(() => {
  if (isExpanded.value) return allTags.value
  return allTags.value.slice(0, displayLimit)
})

const handleSearch = debounce((event) => {
  toolsStore.setSearchQuery(event.target.value)
}, 300)

const selectCategory = (category) => {
  toolsStore.setSelectedCategory(category)
}

const toggleTag = (tag) => {
  toolsStore.toggleTag(tag)
}

const clearTags = () => {
  toolsStore.selectedTags = []
}

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const getCategoryDisplayName = (category) => {
  if (category === 'all') return '全部'
  return getCategoryLabel(category)
}

watch(() => toolsStore.searchQuery, (newValue) => {
  searchQuery.value = newValue
})

watch(() => toolsStore.selectedCategory, (newValue) => {
  selectedCategory.value = newValue
})

watch(() => toolsStore.selectedTags, (newValue) => {
  selectedTags.value = [...newValue]
})
</script>
