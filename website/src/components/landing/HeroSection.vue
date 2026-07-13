<!-- src/components/landing/HeroSection.vue -->
<template>
  <section
    class="relative flex flex-col items-center justify-center min-h-[70vh] px-5 text-center overflow-hidden"
  >
    <!-- Optimized hero background image -->
    <img
      :src="heroBg"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style="opacity: 0.18; mix-blend-mode: screen"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    >

    <!-- Constellation network background -->
    <HeroConstellation class="pointer-events-none opacity-40" />

    <!-- Title with gradient text -->
    <h1
      class="hero-entrance relative text-4xl sm:text-5xl font-bold tracking-normal"
      style="
        --hero-delay: 0ms;
        line-height: 1.1;
        background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      "
    >
      AI 工具全书
    </h1>

    <p
      class="hero-entrance text-base text-white/45 mt-3 max-w-md"
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
          {{ statValues[stat.key] }}<span class="text-xl opacity-60">+</span>
        </div>
        <div
          data-testid="hero-stat-label"
          class="mt-1 break-words text-[11px] leading-tight text-white/35 sm:text-xs"
        >
          {{ stat.label }}
        </div>
      </div>
    </div>

    <!-- CTA with glow pulse -->
    <button
      class="hero-entrance mt-12 px-7 py-3.5 rounded-capsule text-sm font-semibold text-white cursor-pointer transition-all hover:scale-105 active:scale-95"
      style="
        --hero-delay: 450ms;
        background: linear-gradient(135deg, #0a84ff, #bf5af2);
        animation: ctaGlow 3s ease-in-out infinite;
      "
      @click="scrollToLandscape"
    >
      按场景选工具
    </button>
  </section>
</template>

<script setup>
import heroBg from '../../assets/landing/hero-bg.webp'
import { LANDING_STATS } from '../../data/landingCatalog.js'
import HeroConstellation from './HeroConstellation.vue'

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
