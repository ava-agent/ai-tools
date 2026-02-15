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
        <!-- Easter egg: search "42" -->
        <transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-1"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="easterEggMessage"
            class="absolute top-full left-0 right-0 mt-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm z-20"
          >
            {{ easterEggMessage }}
          </div>
        </transition>
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
          <span
            class="relative z-10"
            :class="selectedCategory === category ? 'font-semibold' : ''"
          >
            {{ category === 'all' ? '全部' : getCategoryDisplayName(category) }}
          </span>
        </button>
      </div>
    </div>

    <!-- 快捷标签 -->
    <div class="flex items-center gap-2 flex-wrap">
      <Tag class="w-4 h-4 text-white/40 flex-shrink-0" />
      <button
        v-for="tag in curatedTags"
        :key="tag"
        :aria-pressed="selectedTags.includes(tag)"
        class="px-3 py-1 text-xs rounded-full transition-all cursor-pointer"
        :class="[
          selectedTags.includes(tag) ? 'text-white shadow-md' : 'text-white/60 hover:text-white',
          getTagColor(tag)
        ]"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </button>
      <button
        v-if="selectedTags.length > 0"
        class="px-2 py-1 text-xs text-white/40 hover:text-white transition-colors cursor-pointer"
        @click="clearTags"
      >
        清除
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useToolsStore } from '../stores/tools'
import { Search, Tag } from 'lucide-vue-next'
import { getTagColor, getCategoryLabel } from '../utils/helpers'
import { debounce } from '../utils/helpers'
import { easterEggs } from '../data/easterEggs.js'

const toolsStore = useToolsStore()

const easterEggMessage = ref(null)
const searchQuery = ref(toolsStore.searchQuery)
const selectedCategory = ref(toolsStore.selectedCategory)
const selectedTags = ref([...toolsStore.selectedTags])

const categories = computed(() => toolsStore.categories)

// Curated high-level tags only (meaningful for filtering)
const CURATED_TAG_LIST = ['推荐', '免费', '开源', '国产']
const curatedTags = computed(() =>
  CURATED_TAG_LIST.filter(tag => toolsStore.allTags.includes(tag))
)

const handleSearch = debounce((event) => {
  const val = event.target.value
  toolsStore.setSearchQuery(val)

  // Easter egg: search "42"
  if (val.trim() === easterEggs.search42.value) {
    easterEggMessage.value = easterEggs.search42.response
    setTimeout(() => { easterEggMessage.value = null }, 4000)
  } else {
    easterEggMessage.value = null
  }
}, 300)

const selectCategory = (category) => {
  toolsStore.setSelectedCategory(category)
}

const toggleTag = (tag) => {
  toolsStore.toggleTag(tag)
}

const clearTags = () => {
  toolsStore.setTags([])
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
