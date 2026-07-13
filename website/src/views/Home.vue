<template>
  <div class="min-h-screen">
    <IntroVideo
      :show="showIntro"
      @close="handleIntroClose"
    />
    <Hero />
    <SearchBar />

    <div
      class="home-content-safe-bottom max-w-[1180px] mx-auto px-5"
      data-testid="home-content"
    >
      <!-- Featured / Editor's Pick -->
      <router-link
        v-if="featuredTool"
        :to="{ name: 'tool-detail', params: { id: featuredTool.id } }"
        class="glass-card glass-card-interactive mb-4 flex cursor-pointer items-center gap-4 p-4"
      >
        <ToolLogo
          :tool-id="featuredTool.id"
          :tool-name="featuredTool.name"
          size="lg"
        />
        <div class="flex-1 min-w-0">
          <div class="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-[#7dd3fc]">
            编辑推荐
          </div>
          <div class="text-lg font-bold text-white">
            {{ featuredTool.name }}
          </div>
          <div class="mt-0.5 truncate text-[13px] text-slate-400">
            {{ featuredTool.personalExperience?.insights?.substring(0, 60) }}...
          </div>
        </div>
        <div class="flex-shrink-0">
          <span class="btn-capsule btn-capsule-sm">查看</span>
        </div>
      </router-link>

      <!-- Replay Intro Button -->
      <Transition name="fade">
        <div
          v-if="!showIntro"
          class="mb-4 flex justify-end"
        >
          <button
            class="glass-card inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#3fb950]/35 hover:bg-[#121712]"
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
              class="text-[#3fb950]"
            >
              <path d="M9 18V5l12 6-12 6" />
            </svg>
            重看演示
          </button>
        </div>
      </Transition>

      <DecisionShortlist :tools="filteredTools" />

      <div
        v-if="toolsStore.searchIndexError"
        class="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[#ffd60a]/25 bg-[#ffd60a]/[0.06] px-4 py-3 text-sm text-[#ffe680]"
        role="alert"
        data-testid="home-search-index-error"
      >
        <span>完整搜索索引加载失败，当前仅搜索名称、开发者、标签和结论。</span>
        <button
          type="button"
          class="pill pill-inactive min-h-11 px-3 py-2 text-xs"
          @click="toolsStore.retrySearchIndex()"
        >
          重试
        </button>
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
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCatalogStore } from '../stores/catalog'
import Hero from '../components/Hero.vue'
import SearchBar from '../components/SearchBar.vue'
import DecisionShortlist from '../components/DecisionShortlist.vue'
import ToolGrid from '../components/ToolGrid.vue'
import ToolLogo from '../components/ToolLogo.vue'
import IntroVideo from '../components/IntroVideo.vue'
import { shouldAutoShowIntro } from '../utils/intro'

const toolsStore = useCatalogStore()
const route = useRoute()
const router = useRouter()
const showIntro = ref(false)
let applyingRouteFilters = false

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

function getQueryValue(queryValue) {
  return Array.isArray(queryValue) ? queryValue[0] : queryValue
}

watch(
  () => route.query,
  (query) => {
    applyingRouteFilters = true
    const scenario = getQueryValue(query.scenario)
    const budget = getQueryValue(query.budget)
    const verification = getQueryValue(query.verification)
    const category = getQueryValue(query.category)

    toolsStore.setSearchQuery(getQueryValue(query.q) || '')
    toolsStore.setSelectedCategory(toolsStore.categories.includes(category) ? category : 'all')
    toolsStore.setScenarioFilter(
      toolsStore.decisionScenarios.some((option) => option.id === scenario) ? scenario : 'all'
    )
    toolsStore.setBudgetFilter(
      toolsStore.budgetOptions.some((option) => option.id === budget) ? budget : 'all'
    )
    toolsStore.setVerificationFilter(
      toolsStore.verificationOptions.some((option) => option.id === verification)
        ? verification
        : 'all'
    )
    applyingRouteFilters = false
  },
  { immediate: true }
)

watch(
  () => [
    toolsStore.searchQuery,
    toolsStore.selectedCategory,
    toolsStore.selectedScenario,
    toolsStore.selectedBudget,
    toolsStore.selectedVerification
  ],
  ([q, category, scenario, budget, verification]) => {
    if (applyingRouteFilters) return
    const query = {}
    if (q) query.q = q
    if (category !== 'all') query.category = category
    if (scenario !== 'all') query.scenario = scenario
    if (budget !== 'all') query.budget = budget
    if (verification !== 'all') query.verification = verification
    void router.replace({ name: 'tools', query })
  }
)

const filteredTools = computed(() => toolsStore.filteredTools)

// Featured tool: daily rotation among top-rated tools
const featuredTool = computed(() => {
  const tools = toolsStore.tools
  if (!tools.length) return null
  const topTools = tools.filter((t) => (t.personalExperience?.rating || 0) >= 5)
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
  padding-bottom: calc(2rem + env(safe-area-inset-bottom));
}

@media (min-width: 640px) {
  .home-content-safe-bottom {
    padding-bottom: 2rem;
  }
}
</style>
