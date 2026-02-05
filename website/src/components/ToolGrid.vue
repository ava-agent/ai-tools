<template>
  <section
    id="tools"
    class="py-16"
  >
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4 gradient-text">
        AI工具列表
      </h2>
      <p class="text-xl text-white/80">
        精选{{ tools?.length || 0 }}款主流AI开发工具深度评测
      </p>
    </div>

    <!-- 空状态 -->
    <div
      v-if="!tools || tools.length === 0"
      class="text-center py-16"
    >
      <div class="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-full mb-6">
        <SearchX class="w-12 h-12 text-white/50" />
      </div>
      <h3 class="text-2xl font-semibold text-white mb-2">
        未找到匹配的工具
      </h3>
      <p class="text-white/60 mb-6">
        请尝试调整搜索关键词或筛选条件
      </p>
      <button
        class="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors"
        @click="$emit('clearFilters')"
      >
        清除筛选条件
      </button>
    </div>

    <!-- 工具列表 -->
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <ToolCard
        v-for="tool in tools"
        :key="tool.id"
        :tool="tool"
      />
    </div>
  </section>
</template>

<script setup>
import { SearchX } from 'lucide-vue-next'
import ToolCard from './ToolCard.vue'

defineProps({
  tools: {
    type: Array,
    required: true
  }
})

defineEmits(['clearFilters'])
</script>
