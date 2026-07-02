<template>
  <section class="max-w-[960px] mx-auto px-5 pt-6 pb-0">
    <h1
      class="text-[28px] font-bold text-white"
      style="line-height: 1.15;"
    >
      按场景筛选已核验 AI 工具
    </h1>
    <p class="text-sm text-white/45 mt-1.5">
      {{ toolCount }} 款工具 · {{ categoryCount }} 大类别 · 持续核验
    </p>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../stores/tools'

const toolsStore = useToolsStore()
const toolCount = computed(() => toolsStore.tools.length)
const categoryCount = computed(() => toolsStore.categories.length - 1) // exclude 'all'
</script>
