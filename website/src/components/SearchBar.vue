<template>
  <div class="max-w-[1180px] mx-auto px-5 py-5">
    <!-- Search input -->
    <div class="relative mb-3">
      <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        v-model="localQuery"
        type="text"
        aria-label="搜索工具"
        placeholder="搜索工具、开发者、标签或结论..."
        class="input-field w-full pl-11 pr-14 py-3 text-[13px]"
        @input="handleSearch"
      >
      <button
        v-if="localQuery"
        aria-label="清空搜索"
        class="absolute right-2 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full text-white/50 hover:text-white/80 transition-colors"
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
        class="pill min-h-11 px-3.5 text-xs"
        :class="selectedCategory === category ? 'pill-active' : 'pill-inactive'"
        :aria-pressed="selectedCategory === category"
        @click="selectCategory(category)"
      >
        {{ category === 'all' ? '全部' : getCategoryDisplayName(category) }}
        <span class="ml-1 text-[10px] opacity-60">{{ getCategoryCount(category) }}</span>
      </button>
    </div>

    <!-- Decision filters -->
    <div
      class="mt-3 rounded-lg border border-[#2c352d]/80 bg-[#090b09]/55 p-3"
      data-testid="decision-filter-panel"
    >
      <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div class="flex items-center gap-2 text-sm font-semibold text-white">
          <SlidersHorizontal class="h-4 w-4 text-[#3fb950]" />
          按场景选工具
          <span
            class="rounded-md border border-[#2c352d] bg-[#111410] px-2 py-1 text-[11px] font-medium text-[#9aa596]"
          >
            {{ filteredCount }} / {{ totalCount }}
          </span>
        </div>
        <button
          v-if="hasFilters"
          aria-label="清空筛选条件"
          class="pill pill-inactive inline-flex min-h-11 items-center gap-1.5 px-3 py-2 text-xs"
          data-testid="decision-clear-filters"
          @click="clearAllFilters"
        >
          <RotateCcw class="h-3.5 w-3.5" />
          清空
        </button>
      </div>

      <div class="grid gap-3 md:grid-cols-3">
        <div
          v-for="group in decisionFilterGroups"
          :key="group.id"
          class="min-w-0"
          role="group"
          :aria-labelledby="`decision-group-label-${group.id}`"
          :data-testid="`decision-group-${group.id}`"
        >
          <div
            :id="`decision-group-label-${group.id}`"
            class="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500"
          >
            {{ group.label }}
          </div>
          <div class="flex flex-wrap gap-1.5">
            <button
              v-for="option in group.options"
              :key="option.id"
              class="pill min-h-11 px-3 py-2 text-xs"
              :class="group.selected === option.id ? 'pill-active' : 'pill-inactive'"
              :aria-pressed="group.selected === option.id"
              :data-testid="`${group.id}-filter-${option.id}`"
              @click="group.select(option.id)"
            >
              {{ option.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { RotateCcw, Search, SlidersHorizontal, X } from 'lucide-vue-next'
import { useCatalogStore } from '../stores/catalog'
import { getCategoryLabel } from '../utils/helpers'

const toolsStore = useCatalogStore()

const selectedCategory = computed(() => toolsStore.selectedCategory)
const selectedScenario = computed(() => toolsStore.selectedScenario)
const selectedBudget = computed(() => toolsStore.selectedBudget)
const selectedVerification = computed(() => toolsStore.selectedVerification)
const categories = computed(() => toolsStore.categories)
const hasFilters = computed(() => toolsStore.hasFilters)
const totalCount = computed(() => toolsStore.tools.length)
const filteredCount = computed(() => toolsStore.filteredTools.length)
const localQuery = ref(toolsStore.searchQuery)

const decisionFilterGroups = computed(() => [
  {
    id: 'scenario',
    label: '场景',
    selected: selectedScenario.value,
    options: toolsStore.decisionScenarios,
    select: toolsStore.setScenarioFilter
  },
  {
    id: 'budget',
    label: '预算',
    selected: selectedBudget.value,
    options: toolsStore.budgetOptions,
    select: toolsStore.setBudgetFilter
  },
  {
    id: 'verification',
    label: '状态',
    selected: selectedVerification.value,
    options: toolsStore.verificationOptions,
    select: toolsStore.setVerificationFilter
  }
])

// Sync store → local when store changes externally (e.g. clearFilters)
watch(
  () => toolsStore.searchQuery,
  (val) => {
    localQuery.value = val
  }
)

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

const clearAllFilters = () => {
  localQuery.value = ''
  toolsStore.clearFilters()
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
