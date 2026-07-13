<!-- src/components/landing/HeroSection.vue -->
<template>
  <section
    class="relative flex min-h-[640px] flex-col items-center justify-center overflow-hidden px-5 py-20 text-center sm:min-h-[620px]"
  >
    <img
      :src="heroBg"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style="opacity: 0.62"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    >

    <div
      class="pointer-events-none absolute inset-0 bg-[rgba(2,8,7,0.42)]"
      aria-hidden="true"
    />

    <p
      class="hero-entrance relative mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase text-[#7dd3fc]"
      style="--hero-delay: 0ms"
    >
      <span
        class="h-1.5 w-1.5 rounded-full bg-[#30d158]"
        aria-hidden="true"
      />
      2026 AI 工具决策指南
    </p>

    <h1
      class="hero-entrance relative text-4xl font-bold tracking-normal text-white sm:text-5xl"
      style="
        --hero-delay: 80ms;
        line-height: 1.1;
        text-shadow: 0 10px 40px rgba(0, 0, 0, 0.55);
      "
    >
      AI 工具全书
    </h1>

    <p
      class="hero-entrance relative mt-4 max-w-xl text-base leading-7 text-white/75"
      style="--hero-delay: 160ms"
    >
      从 {{ LANDING_STATS.tools }} 款工具中按场景、预算和核验状态缩小范围，先看结论，再核对价格、风险与替代方案。
    </p>

    <form
      class="hero-entrance relative mt-7 flex w-full max-w-xl items-center rounded-lg border border-white/15 bg-black/55 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-md"
      style="--hero-delay: 240ms"
      role="search"
      @submit.prevent="submitSearch"
    >
      <Search
        class="ml-3 h-5 w-5 flex-shrink-0 text-white/55"
        aria-hidden="true"
      />
      <label
        class="sr-only"
        for="hero-tool-search"
      >搜索 AI 工具</label>
      <input
        id="hero-tool-search"
        v-model="searchQuery"
        type="search"
        class="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/45"
        placeholder="试试：复杂重构、免费 CLI、视频生成"
        autocomplete="off"
      >
      <button
        type="submit"
        class="inline-flex min-h-11 min-w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#0a84ff] text-white transition-colors hover:bg-[#2995ff]"
        aria-label="搜索工具"
        title="搜索工具"
        data-testid="hero-search-submit"
      >
        <ArrowRight
          class="h-4 w-4"
          aria-hidden="true"
        />
      </button>
    </form>

    <nav
      class="hero-entrance relative mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-white/65"
      style="--hero-delay: 300ms"
      aria-label="热门选型入口"
    >
      <RouterLink
        :to="{ name: 'tools', query: { scenario: 'daily-coding' } }"
        class="hover:text-white"
      >
        日常开发
      </RouterLink>
      <RouterLink
        :to="{ name: 'tools', query: { scenario: 'complex-refactor' } }"
        class="hover:text-white"
      >
        复杂重构
      </RouterLink>
      <RouterLink
        :to="{ name: 'tools', query: { budget: 'free' } }"
        class="hover:text-white"
      >
        免费 / 开源
      </RouterLink>
      <RouterLink
        :to="{ name: 'tools', query: { scenario: 'visual-generation' } }"
        class="hover:text-white"
      >
        视觉生成
      </RouterLink>
    </nav>

    <!-- Stats with glow -->
    <div
      data-testid="hero-stats"
      class="hero-entrance relative mt-8 grid w-full max-w-lg grid-cols-3 gap-2 sm:gap-8"
      style="--hero-delay: 360ms"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        data-testid="hero-stat"
        class="group min-w-0 text-center"
      >
        <div
          class="text-3xl sm:text-4xl font-bold tabular-nums transition-all duration-300"
          :style="{ color: stat.color, textShadow: '0 0 40px ' + stat.color + '40' }"
        >
          {{ statValues[stat.key] }}
        </div>
        <div
          data-testid="hero-stat-label"
          class="mt-1 break-words text-[11px] leading-tight text-white/60 sm:text-xs"
        >
          {{ stat.label }}
        </div>
      </div>
    </div>

    <div
      class="hero-entrance relative mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
      style="--hero-delay: 440ms"
    >
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
        data-testid="hero-primary-action"
        @click="scrollToLandscape"
      >
        <Compass
          class="h-4 w-4"
          aria-hidden="true"
        />
        查看场景方案
      </button>
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/30 px-6 py-3 text-sm font-semibold text-white/85 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-black/45 hover:text-white"
        data-testid="hero-video-action"
        @click="emit('play-intro')"
      >
        <Play
          class="h-4 w-4 fill-current"
          aria-hidden="true"
        />
        观看 12 秒导览
      </button>
    </div>
  </section>
</template>

<script setup>
import heroBg from '../../assets/landing/hero-bg.webp'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowRight, Compass, Play, Search } from 'lucide-vue-next'
import { LANDING_STATS } from '../../data/landingCatalog.js'

const emit = defineEmits(['play-intro', 'search'])
const searchQuery = ref('')

const stats = [
  { key: 'tools', label: '款工具深度评测', color: '#0a84ff' },
  { key: 'categories', label: '大类别全景覆盖', color: '#bf5af2' },
  { key: 'verifiedTools', label: '款已完成核验', color: '#30d158' }
]

const statValues = LANDING_STATS

function scrollToLandscape() {
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  document
    .getElementById('scenarios')
    ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}

function submitSearch() {
  const query = searchQuery.value.trim()
  if (!query) return
  emit('search', query)
}
</script>
