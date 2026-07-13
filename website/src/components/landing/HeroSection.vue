<!-- src/components/landing/HeroSection.vue -->
<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-[70vh] px-5 text-center overflow-hidden"
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
      class="pointer-events-none absolute inset-0 bg-black/25"
      aria-hidden="true"
    />

    <!-- Title with gradient text -->
    <h1
      class="hero-entrance relative text-4xl sm:text-5xl font-bold tracking-normal text-white"
      style="
        --hero-delay: 0ms;
        line-height: 1.1;
        text-shadow: 0 10px 40px rgba(0, 0, 0, 0.55);
      "
    >
      AI 工具全书
    </h1>

    <p
      class="hero-entrance text-base text-white/65 mt-3 max-w-lg"
      style="--hero-delay: 120ms"
    >
      按场景、预算和核验状态筛选 AI 工具，先看结论，再查价格、风险与替代方案
    </p>

    <!-- Stats with glow -->
    <div
      data-testid="hero-stats"
      class="hero-entrance mt-9 grid w-full max-w-lg grid-cols-3 gap-2 sm:mt-10 sm:gap-8"
      style="--hero-delay: 280ms"
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
          class="mt-1 break-words text-[11px] leading-tight text-white/35 sm:text-xs"
        >
          {{ stat.label }}
        </div>
      </div>
    </div>

    <div
      class="hero-entrance mt-11 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
      style="--hero-delay: 450ms"
    >
      <button
        type="button"
        class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#0a84ff] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0a84ff]/20 transition-colors hover:bg-[#2995ff] active:bg-[#0071e3]"
        data-testid="hero-primary-action"
        @click="scrollToLandscape"
      >
        <Compass
          class="h-4 w-4"
          aria-hidden="true"
        />
        按场景选工具
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
import { Compass, Play } from 'lucide-vue-next'
import { LANDING_STATS } from '../../data/landingCatalog.js'

const emit = defineEmits(['play-intro'])

const stats = [
  { key: 'tools', label: '款工具深度评测', color: '#0a84ff' },
  { key: 'categories', label: '大类别全景覆盖', color: '#bf5af2' },
  { key: 'insights', label: '条实战洞察', color: '#30d158' }
]

const statValues = LANDING_STATS

function scrollToLandscape() {
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  document
    .getElementById('landscape')
    ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}
</script>
