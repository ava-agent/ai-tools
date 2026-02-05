<template>
  <div class="mb-8">
    <!-- 搜索框和分类筛选 -->
    <div class="flex flex-col md:flex-row gap-4">
      <!-- 搜索输入框 -->
      <div class="flex-1 relative group">
        <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 transition-colors group-focus-within:text-primary z-10" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索工具名称、开发者或用途..."
          class="w-full pl-12 pr-4 py-3.5 rounded-xl text-white placeholder-white/40 transition-all duration-300"
          style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px);"
          @focus="$event.target.style.borderColor = 'rgba(59, 130, 246, 0.5)'; $event.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'"
          @blur="$event.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; $event.target.style.boxShadow = 'none'"
          @input="handleSearch"
        >
        <div class="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <!-- 分类筛选按钮 -->
      <div class="flex flex-wrap gap-2">
        <button
          v-for="category in categories"
          :key="category"
          class="px-4 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group"
          :class="selectedCategory === category
            ? 'text-white shadow-lg'
            : 'text-white/70 hover:text-white'"
          @click="selectCategory(category)"
        >
          <span
            class="relative z-10"
            :class="selectedCategory === category ? 'font-semibold' : ''"
          >
            {{ category === 'all' ? '全部' : getCategoryDisplayName(category) }}
          </span>
          <!-- 选中状态背景 -->
          <div
            v-if="selectedCategory === category"
            class="absolute inset-0 transition-all duration-300"
            style="background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
          />
          <div
            v-else
            class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </button>
      </div>
    </div>

    <!-- 标签筛选 -->
    <div
      v-if="allTags && allTags.length > 0"
      class="mb-6"
    >
      <div class="flex items-center mb-4">
        <div class="relative">
          <Tag class="w-5 h-5 text-primary" />
          <div class="absolute inset-0 bg-primary/20 blur-sm" />
        </div>
        <h3 class="text-lg font-semibold text-white ml-2">
          标签筛选
        </h3>
        <button
          v-if="selectedTags && selectedTags.length > 0"
          class="ml-auto px-4 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg text-white/70 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
          @click="clearTags"
        >
          清除筛选
        </button>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="tag in allTags"
          :key="tag"
          class="px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 relative overflow-hidden group"
          :class="[
            selectedTags.includes(tag)
              ? 'text-white shadow-md scale-105'
              : 'text-white/70 hover:text-white hover:scale-105',
            getTagColor(tag)
          ]"
          @click="toggleTag(tag)"
        >
          <span class="relative z-10">{{ tag }}</span>
          <!-- 悬停光晕效果 -->
          <div
            v-if="!selectedTags.includes(tag)"
            class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
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

const categories = computed(() => toolsStore.categories)
const allTags = computed(() => toolsStore.allTags)

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
