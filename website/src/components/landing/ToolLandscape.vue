<!-- src/components/landing/ToolLandscape.vue -->
<template>
  <section
    id="landscape"
    class="max-w-[960px] mx-auto px-5 py-16"
  >
    <h2 class="text-2xl font-bold text-white tracking-tight mb-2">
      工具版图
    </h2>
    <p class="text-sm text-white/35 mb-8">
      {{ toolsStore.tools.length }} 款工具 · 7 大类别 · 点击探索详情
    </p>

    <div class="space-y-8">
      <div
        v-for="cat in groupedTools"
        :key="cat.id"
      >
        <div class="flex items-center gap-2 mb-3">
          <div
            class="w-2.5 h-2.5 rounded-full"
            :style="{ background: cat.color }"
          />
          <span class="text-sm font-semibold text-white/70">{{ cat.nameZh }}</span>
          <span class="text-xs text-white/25">{{ cat.tools.length }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <router-link
            v-for="tool in cat.tools"
            :key="tool.id"
            :to="{ name: 'tool-detail', params: { id: tool.id } }"
            class="group relative flex items-center justify-center rounded-full transition-all hover:scale-110 hover:z-10"
            :style="{
              width: bubbleSize(tool) + 'px',
              height: bubbleSize(tool) + 'px',
              background: cat.color + '18',
              border: '1px solid ' + cat.color + '30',
            }"
            :title="tool.name + ' — ' + (tool.bestFor || '')"
          >
            <ToolLogo
              :tool-id="tool.id"
              :tool-name="tool.name"
              :size="bubbleSize(tool) > 48 ? 'md' : 'sm'"
            />
            <!-- Tooltip on hover -->
            <div
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
              style="background: rgba(20, 20, 40, 0.95); border: 1px solid rgba(255, 255, 255, 0.1)"
            >
              <div class="font-semibold text-white">
                {{ tool.name }}
              </div>
              <div class="text-white/50 mt-0.5">
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
import ToolLogo from '../ToolLogo.vue'

const toolsStore = useToolsStore()

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
  // Map rating 1-5 to size 36-64px
  return 36 + (rating - 1) * 7
}
</script>
