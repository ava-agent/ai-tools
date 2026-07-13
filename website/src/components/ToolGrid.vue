<template>
  <section
    id="tools"
    aria-labelledby="tools-heading"
  >
    <h2
      id="tools-heading"
      class="sr-only"
    >
      工具列表
    </h2>

    <!-- Empty state -->
    <div
      v-if="!tools || tools.length === 0"
      class="glass-card text-center py-16 px-4"
      style="border-radius: 16px"
      role="status"
      aria-live="polite"
      data-testid="tool-grid-empty-state"
    >
      <div
        class="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full mb-6"
      >
        <SearchX
          class="w-10 h-10 sm:w-12 sm:h-12 text-muted"
          aria-hidden="true"
        />
      </div>
      <h3 class="text-xl sm:text-2xl font-semibold text-white mb-2">
        未找到匹配的工具
      </h3>
      <p class="text-muted mb-6 max-w-md mx-auto">
        请尝试调整搜索关键词或筛选条件以找到更多工具
      </p>
      <button
        type="button"
        class="btn-capsule inline-flex items-center gap-2"
        @click="$emit('clearFilters')"
      >
        <RefreshCw
          class="w-4 h-4"
          aria-hidden="true"
        />
        清除筛选条件
      </button>
    </div>

    <!-- Tool list with pagination -->
    <template v-else>
      <div
        class="mb-2 hidden rounded-lg border border-[#2c352d]/80 bg-[#090b09]/60 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8c9889] lg:grid lg:grid-cols-[minmax(220px,1.25fr)_minmax(180px,1fr)_minmax(180px,1fr)_minmax(120px,auto)] lg:gap-4"
        data-testid="tool-grid-table-header"
      >
        <span>工具</span>
        <span>最佳用途</span>
        <span>价格 / 风险</span>
        <span class="text-right">评分 / 来源</span>
      </div>
      <TransitionGroup
        tag="div"
        name="tool-card"
        class="space-y-2"
      >
        <ToolCard
          v-for="tool in visibleTools"
          :key="tool.id"
          :tool="tool"
        />
      </TransitionGroup>

      <!-- Load more -->
      <div
        v-if="hasMore"
        class="text-center mt-6"
      >
        <button
          type="button"
          class="pill pill-inactive inline-flex items-center gap-2"
          @click="loadMore"
        >
          <ChevronDown
            class="w-4 h-4"
            aria-hidden="true"
          />
          加载更多（还有 {{ remainingCount }} 个）
        </button>
      </div>

      <!-- Result count -->
      <div
        class="text-center mt-4 text-xs text-slate-400"
        role="status"
        aria-live="polite"
        data-testid="tool-grid-result-count"
      >
        显示 {{ visibleTools.length }} / {{ tools.length }} 个工具
      </div>
    </template>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { SearchX, RefreshCw, ChevronDown } from 'lucide-vue-next'
import ToolCard from './ToolCard.vue'

const PAGE_SIZE = 30

const props = defineProps({
  tools: {
    type: Array,
    required: true
  }
})

defineEmits(['clearFilters'])

const displayCount = ref(PAGE_SIZE)

// Reset pagination when tools list changes (search/filter)
watch(
  () => props.tools.map((tool) => tool.id).join('|'),
  () => {
    displayCount.value = PAGE_SIZE
  }
)

const visibleTools = computed(() => props.tools.slice(0, displayCount.value))
const hasMore = computed(() => displayCount.value < props.tools.length)
const remainingCount = computed(() => props.tools.length - displayCount.value)

function loadMore() {
  displayCount.value += PAGE_SIZE
}
</script>

<style scoped>
.tool-card-enter-active {
  transition: all 0.3s ease-out;
}

.tool-card-leave-active {
  transition: all 0.2s ease-in;
}

.tool-card-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.tool-card-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.tool-card-move {
  transition: transform 0.3s ease;
}
</style>
