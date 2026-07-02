<template>
  <div class="min-h-screen">
    <IntroVideo
      :show="showIntro"
      @close="handleIntroClose"
    />
    <Hero />
    <SearchBar />

    <div
      class="home-content-safe-bottom max-w-[960px] mx-auto px-5"
      data-testid="home-content"
    >
      <!-- Featured / Editor's Pick -->
      <router-link
        v-if="featuredTool"
        :to="{ name: 'tool-detail', params: { id: featuredTool.id } }"
        class="glass-card glass-card-interactive p-5 mb-4 flex items-center gap-4 cursor-pointer"
        style="border-radius: 16px;"
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
          <div class="text-lg font-bold text-white">
            {{ featuredTool.name }}
          </div>
          <div class="text-[13px] text-white/50 mt-0.5 truncate">
            {{ featuredTool.personalExperience?.insights?.substring(0, 60) }}...
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="btn-capsule btn-capsule-sm">查看</span>
        </div>
      </router-link>

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
        class="replay-intro-button fixed z-40 flex min-h-11 min-w-11 items-center gap-2 px-4 py-2 glass-card text-white text-sm font-medium rounded-full transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a84ff]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080814]"
        style="border: 1px solid rgba(255,255,255,0.1);"
        data-testid="replay-intro"
        aria-label="重看演示视频"
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
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useToolsStore } from '../stores/tools'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import ToolGrid from '../components/ToolGrid.vue'
import ToolLogo from '../components/ToolLogo.vue'
import IntroVideo from '../components/IntroVideo.vue'
import { shouldAutoShowIntro } from '../utils/intro'

const toolsStore = useToolsStore()
const route = useRoute()
const showIntro = ref(false)

function handleIntroClose() {
  showIntro.value = false
  sessionStorage.setItem('hasSeenIntro', 'true')
}

onMounted(() => {
  // Check if user has seen intro in this session
  const hasSeen = sessionStorage.getItem('hasSeenIntro')
  showIntro.value = shouldAutoShowIntro({
    hasSeenIntro: Boolean(hasSeen),
    routeName: route.name
  })
})

function getScenarioFromQuery(queryValue) {
  const scenario = Array.isArray(queryValue) ? queryValue[0] : queryValue
  const validScenario = toolsStore.decisionScenarios.some(option => option.id === scenario)
  return validScenario ? scenario : 'all'
}

watch(
  () => route.query.scenario,
  (scenario) => {
    toolsStore.setScenarioFilter(getScenarioFromQuery(scenario))
  },
  { immediate: true }
)

const filteredTools = computed(() => toolsStore.filteredTools)

// Featured tool: daily rotation among top-rated tools
const featuredTool = computed(() => {
  const tools = toolsStore.tools
  if (!tools.length) return null
  const topTools = tools.filter(t => (t.personalExperience?.rating || 0) >= 5)
  if (!topTools.length) return tools[0]
  const dayIndex = Math.floor(Date.now() / 86400000) % topTools.length
  return topTools[dayIndex]
})

function handleClearFilters() {
  toolsStore.clearFilters()
}
</script>

<style scoped>
.home-content-safe-bottom {
  padding-bottom: calc(6.5rem + env(safe-area-inset-bottom));
}

.replay-intro-button {
  right: max(1rem, env(safe-area-inset-right));
  bottom: calc(1rem + env(safe-area-inset-bottom));
}

@media (min-width: 640px) {
  .home-content-safe-bottom {
    padding-bottom: 2rem;
  }

  .replay-intro-button {
    right: calc(1.5rem + env(safe-area-inset-right));
    bottom: calc(1.5rem + env(safe-area-inset-bottom));
  }
}
</style>
