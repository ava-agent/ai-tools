<template>
  <section class="max-w-[960px] mx-auto px-5 pt-6 pb-0">
    <h1
      class="text-[28px] font-bold text-white"
      style="letter-spacing: -0.8px; line-height: 1.15;"
    >
      发现最好的 AI 工具
    </h1>
    <p class="text-sm text-white/45 mt-1.5">
      {{ toolCount }} 款工具深度评测 · 持续更新
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../stores/tools'

const toolsStore = useToolsStore()
const toolCount = computed(() => toolsStore.tools.length)
</script>
