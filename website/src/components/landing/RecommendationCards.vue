<!-- src/components/landing/RecommendationCards.vue -->
<template>
  <section class="max-w-[960px] mx-auto px-5 py-16">
    <h2 class="text-2xl font-bold text-white tracking-tight mb-2">
      我的推荐栈
    </h2>
    <p class="text-sm text-white/35 mb-8">
      基于日常使用的个人工具组合
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="rec in recommendations"
        :key="rec.id"
        class="glass-card p-4 flex gap-3"
      >
        <div class="flex-shrink-0 flex items-start gap-1.5 pt-0.5">
          <ToolLogo
            v-for="toolId in rec.tools"
            :key="toolId"
            :tool-id="toolId"
            :tool-name="getToolName(toolId)"
            size="sm"
          />
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-[11px] text-accent uppercase tracking-widest font-semibold mb-1">
            {{ rec.label }}
          </div>
          <div
            class="text-[13px] text-white/55 leading-relaxed"
            style="border-left: 2px solid rgba(48, 209, 88, 0.3); padding-left: 10px"
          >
            {{ rec.insight }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { recommendations } from '../../data/recommendations.js'
import { useToolsStore } from '../../stores/tools'
import ToolLogo from '../ToolLogo.vue'

const toolsStore = useToolsStore()

function getToolName(toolId) {
  return toolsStore.getToolById(toolId)?.name || toolId
}
</script>
