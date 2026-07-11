<!-- src/components/landing/ToolLandscape.vue -->
<template>
  <section
    id="landscape"
    ref="sectionRef"
    class="max-w-[960px] mx-auto px-5 py-16"
    :class="{ revealed: isRevealed }"
  >
    <h2
      class="reveal-item text-2xl font-bold text-white tracking-normal mb-2"
      style="--reveal-i: 0"
    >
      工具版图
    </h2>
    <p
      class="reveal-item text-sm text-white/35 mb-8"
      style="--reveal-i: 1"
    >
      {{ toolsStore.tools.length }} 款工具 · 7 大类别 · 点击探索详情
    </p>

    <div class="space-y-8">
      <div
        v-for="(cat, catIndex) in groupedTools"
        :key="cat.id"
        class="reveal-item relative overflow-visible rounded-xl p-4"
        :style="{ '--reveal-i': catIndex + 2 }"
      >
        <!-- Category background decoration -->
        <img
          :src="publicAsset(`images/landing/cat-${cat.id}.png`)"
          alt=""
          aria-hidden="true"
          class="absolute right-0 top-0 h-full w-auto max-w-[40%] object-cover object-left pointer-events-none"
          style="opacity: 0.08; mask-image: linear-gradient(to left, rgba(0,0,0,0.6), transparent); -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.6), transparent)"
          loading="lazy"
        >
        <!-- Category header -->
        <div class="flex items-center gap-2.5 mb-3">
          <div
            class="w-6 h-6 rounded-lg flex items-center justify-center"
            :style="{ background: cat.color + '15', border: '1px solid ' + cat.color + '25' }"
          >
            <component
              :is="categoryIconMap[cat.id]"
              :color="cat.color"
            />
          </div>
          <span class="text-sm font-semibold text-white/70">{{ cat.nameZh }}</span>
          <span class="text-xs text-white/25">{{ cat.tools.length }}</span>
        </div>

        <!-- Tool bubbles -->
        <div class="flex flex-wrap gap-2">
          <router-link
            v-for="tool in cat.tools"
            :key="tool.id"
            :to="{ name: 'tool-detail', params: { id: tool.id } }"
            class="tool-bubble group relative flex min-h-11 min-w-11 items-center justify-center rounded-full"
            :style="{
              width: bubbleSize(tool) + 'px',
              height: bubbleSize(tool) + 'px',
              background: cat.color + '18',
              border: '1px solid ' + cat.color + '30',
              '--bubble-glow': cat.color + '35',
            }"
            :title="tool.name + ' — ' + (tool.bestFor || '')"
            :aria-label="`查看 ${tool.name} 详情：${tool.bestFor || '工具详情'}`"
            :aria-describedby="`tool-bubble-tip-${tool.id}`"
          >
            <ToolLogo
              :tool-id="tool.id"
              :tool-name="tool.name"
              :size="bubbleSize(tool) > 48 ? 'md' : 'sm'"
            />

            <!-- Enhanced tooltip -->
            <div
              :id="`tool-bubble-tip-${tool.id}`"
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 max-w-[220px] px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 pointer-events-none z-20 scale-95 group-hover:scale-100 group-focus-visible:scale-100"
              :style="{
                background: 'rgba(12, 12, 30, 0.95)',
                border: '1px solid ' + cat.color + '25',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.03)',
              }"
            >
              <div class="font-semibold text-white">
                {{ tool.name }}
              </div>
              <div
                class="mt-0.5"
                :style="{ color: cat.color + 'aa' }"
              >
                {{ tool.personalExperience?.rating?.toFixed(1) }} ·
                {{ tool.bestFor?.substring(0, 30) }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../../stores/tools'
import { categories } from '../../data/categories.js'
import { useReveal } from '../../composables/useReveal'
import { publicAsset } from '../../utils/publicAsset.js'
import ToolLogo from '../ToolLogo.vue'
import { categoryIconMap } from './CategoryIcons.js'

const toolsStore = useToolsStore()
const { sectionRef, isRevealed } = useReveal({
  threshold: 0.02,
  rootMargin: '0px 0px -24px 0px',
})

const categoryColors = {
  ide: '#0a84ff',
  cli: '#30d158',
  llm: '#bf5af2',
  multimodal: '#ff375f',
  agent: '#ff9f0a',
  mcp: '#64d2ff',
  skill: '#ffd60a',
}

const groupedTools = computed(() => {
  return categories.map((cat) => ({
    id: cat.id,
    nameZh: cat.nameZh,
    color: categoryColors[cat.id] || '#ffffff',
    tools: toolsStore.tools
      .filter((t) => t.category === cat.id)
      .sort(
        (a, b) => (b.personalExperience?.rating || 0) - (a.personalExperience?.rating || 0),
      ),
  }))
})

function bubbleSize(tool) {
  const rating = tool.personalExperience?.rating || 3
  // Map rating 1-5 to a touch-safe 44-64px range.
  return 44 + (rating - 1) * 5
}
</script>
