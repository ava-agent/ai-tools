<!-- src/components/landing/RecommendationCards.vue -->
<template>
  <section
    ref="sectionRef"
    class="max-w-[960px] mx-auto px-5 py-16"
    :class="{ revealed: isRevealed }"
  >
    <h2
      class="reveal-item text-2xl font-bold text-white tracking-tight mb-2"
      style="--reveal-i: 0"
    >
      我的推荐栈
    </h2>
    <p
      class="reveal-item text-sm text-white/35 mb-8"
      style="--reveal-i: 1"
    >
      基于日常使用的个人工具组合
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="(rec, index) in recommendations"
        :key="rec.id"
        class="reveal-item rec-card glass-card p-4 flex gap-3 relative overflow-hidden"
        :style="{ '--reveal-i': index + 2 }"
      >
        <!-- Scene background decoration -->
        <img
          :src="recBgMap[rec.id]"
          alt=""
          aria-hidden="true"
          class="absolute right-0 top-0 h-full w-auto max-w-[50%] object-cover object-left pointer-events-none"
          style="opacity: 0.1; mask-image: linear-gradient(to left, rgba(0,0,0,0.5), transparent 80%); -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.5), transparent 80%)"
          loading="lazy"
        >
        <div class="flex-shrink-0 flex items-start gap-1.5 pt-0.5 relative z-10">
          <ToolLogo
            v-for="toolId in rec.tools"
            :key="toolId"
            :tool-id="toolId"
            :tool-name="getToolName(toolId)"
            size="sm"
          />
        </div>
        <div class="flex-1 min-w-0 relative z-10">
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
import { useReveal } from '../../composables/useReveal'
import ToolLogo from '../ToolLogo.vue'

const toolsStore = useToolsStore()
const { sectionRef, isRevealed } = useReveal()

const recBgMap = {
  'daily-coding': '/images/landing/rec-coding.png',
  'complex-refactor': '/images/landing/rec-refactor.png',
  'free-stack': '/images/landing/rec-free.png',
  'visual-design': '/images/landing/rec-design.png',
}

function getToolName(toolId) {
  return toolsStore.getToolById(toolId)?.name || toolId
}
</script>
