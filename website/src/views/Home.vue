<template>
  <div class="min-h-screen">
    <Hero />
    <SearchBar />

    <div class="max-w-[960px] mx-auto px-5">
      <!-- Featured / Editor's Pick -->
      <div
        v-if="featuredTool"
        class="glass-card glass-card-interactive p-5 mb-4 flex items-center gap-4 cursor-pointer"
        style="border-radius: 16px;"
        @click="$router.push({ name: 'tool-detail', params: { id: featuredTool.id } })"
      >
        <div
          class="w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0"
          style="background: linear-gradient(135deg, rgba(10,132,255,0.3), rgba(191,90,242,0.2));"
        >
          ⚡
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-[10px] text-[#bf5af2] uppercase tracking-widest font-semibold mb-0.5">
            编辑推荐
          </div>
          <div class="text-lg font-bold text-white" style="letter-spacing: -0.3px;">
            {{ featuredTool.name }}
          </div>
          <div class="text-[13px] text-white/50 mt-0.5 truncate">
            {{ featuredTool.personalExperience?.insights?.substring(0, 60) }}...
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="btn-capsule btn-capsule-sm">查看</span>
        </div>
      </div>

      <!-- Tool Grid -->
      <ToolGrid
        :tools="filteredTools"
        @clear-filters="handleClearFilters"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../stores/tools'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import ToolGrid from '../components/ToolGrid.vue'

const toolsStore = useToolsStore()

const filteredTools = computed(() => toolsStore.filteredTools)

// Featured tool: highest rated tool (first in sorted list)
const featuredTool = computed(() => {
  const tools = toolsStore.tools
  if (!tools.length) return null
  return [...tools].sort((a, b) =>
    (b.personalExperience?.rating || 0) - (a.personalExperience?.rating || 0)
  )[0]
})

function handleClearFilters() {
  toolsStore.clearFilters()
}
</script>
