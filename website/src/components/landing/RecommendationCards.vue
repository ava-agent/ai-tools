<!-- src/components/landing/RecommendationCards.vue -->
<template>
  <section
    id="scenarios"
    ref="sectionRef"
    class="max-w-[960px] mx-auto px-5 py-16"
    :class="{ revealed: isRevealed }"
  >
    <h2
      class="reveal-item text-2xl font-bold text-white tracking-normal mb-2"
      style="--reveal-i: 0"
    >
      按场景选工具
    </h2>
    <p
      class="reveal-item mb-8 text-sm text-white/60"
      style="--reveal-i: 1"
    >
      先按任务缩小范围，再进入详情核对价格、风险和替代方案
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <RouterLink
        v-for="(rec, index) in recommendations"
        :key="rec.id"
        :to="{ name: 'tools', query: { scenario: rec.id } }"
        class="reveal-item rec-card glass-card glass-card-interactive p-4 flex gap-3 relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
        :style="{ '--reveal-i': index + 2 }"
        :aria-label="`${rec.label}：${rec.insight}`"
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
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { recommendations } from '../../data/recommendations.js'
import { LANDING_TOOL_NAMES } from '../../data/landingCatalog.js'
import { useReveal } from '../../composables/useReveal'
import ToolLogo from '../ToolLogo.vue'

const { sectionRef, isRevealed } = useReveal()

const landingImage = (name) => `${import.meta.env.BASE_URL}images/landing/${name}.webp`
const recBgMap = {
  'daily-coding': landingImage('rec-coding'),
  'complex-refactor': landingImage('rec-refactor'),
  'free-stack': landingImage('rec-free'),
  'long-context': landingImage('rec-refactor'),
  'visual-generation': landingImage('rec-design'),
}

function getToolName(toolId) {
  return LANDING_TOOL_NAMES[toolId] || toolId
}
</script>
