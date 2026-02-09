<template>
  <section id="tools" class="py-16" aria-labelledby="tools-heading">
    <!-- 标题区域 -->
    <header class="text-center mb-12">
      <h2 id="tools-heading" class="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
        AI工具列表
      </h2>
      <p class="text-lg sm:text-xl text-white/80">
        精选 <span class="text-primary font-semibold">{{ toolsCount }}</span> 款主流AI开发工具深度评测
      </p>
    </header>

    <!-- 空状态 -->
    <div
      v-if="!tools || tools.length === 0"
      class="text-center py-16 px-4"
    >
      <div class="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full mb-6">
        <SearchX class="w-10 h-10 sm:w-12 sm:h-12 text-muted" />
      </div>
      <h3 class="text-xl sm:text-2xl font-semibold text-white mb-2">
        未找到匹配的工具
      </h3>
      <p class="text-muted mb-6 max-w-md mx-auto">
        请尝试调整搜索关键词或筛选条件以找到更多工具
      </p>
      <button
        class="btn-primary inline-flex items-center gap-2 px-6 py-3"
        @click="$emit('clearFilters')"
      >
        <RefreshCw class="w-4 h-4" />
        清除筛选条件
      </button>
    </div>

    <!-- 工具列表 - 使用 transition-group 实现列表动画 -->
    <TransitionGroup
      v-else
      tag="div"
      name="tool-card"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ToolCard
        v-for="tool in tools"
        :key="tool.id"
        :tool="tool"
      />
    </TransitionGroup>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { SearchX, RefreshCw } from 'lucide-vue-next'
import ToolCard from './ToolCard.vue'

const props = defineProps({
  tools: {
    type: Array,
    required: true
  }
})

defineEmits(['clearFilters'])

const toolsCount = computed(() => props.tools?.length || 0)
</script>

<style scoped>
/* 工具卡片过渡动画 */
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

/* 列表重排动画 */
.tool-card-move {
  transition: transform 0.3s ease;
}
</style>
