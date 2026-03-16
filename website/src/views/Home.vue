<template>
  <div class="min-h-screen">
    <IntroVideo
      :show="showIntro"
      @close="handleIntroClose"
    />
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
        <ToolLogo
          :tool-id="featuredTool.id"
          :tool-name="featuredTool.name"
          size="lg"
        />
        <div class="flex-1 min-w-0">
          <div class="text-[10px] text-[#bf5af2] uppercase tracking-widest font-semibold mb-0.5">
            编辑推荐
          </div>
          <div
            class="text-lg font-bold text-white"
            style="letter-spacing: -0.3px;"
          >
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

    <!-- Replay Intro Button -->
    <Transition name="fade">
      <button
        v-if="!showIntro"
        class="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2 glass-card text-white text-sm font-medium rounded-full transition-all hover:scale-105"
        style="border: 1px solid rgba(255,255,255,0.1);"
        @click="showIntro = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-[#0a84ff]"
        >
          <path d="M9 18V5l12 6-12 6" />
        </svg>
        重看演示
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useToolsStore } from '../stores/tools'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import ToolGrid from '../components/ToolGrid.vue'
import ToolLogo from '../components/ToolLogo.vue'
import IntroVideo from '../components/IntroVideo.vue'

const toolsStore = useToolsStore()
const showIntro = ref(false)

function handleIntroClose() {
  showIntro.value = false
  sessionStorage.setItem('hasSeenIntro', 'true')
}

onMounted(() => {
  // Check if user has seen intro in this session
  const hasSeen = sessionStorage.getItem('hasSeenIntro')
  if (!hasSeen) {
    showIntro.value = true
  }
})

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
