<template>
  <div class="max-w-[960px] mx-auto px-5 py-4">
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category"
        class="pill"
        :class="selectedCategory === category ? 'pill-active' : 'pill-inactive'"
        @click="selectCategory(category)"
      >
        {{ category === 'all' ? '全部' : getCategoryDisplayName(category) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../stores/tools'
import { getCategoryLabel } from '../utils/helpers'

const toolsStore = useToolsStore()

const selectedCategory = computed(() => toolsStore.selectedCategory)
const categories = computed(() => toolsStore.categories)

const selectCategory = (category) => {
  toolsStore.setSelectedCategory(category)
}

const getCategoryDisplayName = (category) => {
  if (category === 'all') return '全部'
  return getCategoryLabel(category)
}
</script>
