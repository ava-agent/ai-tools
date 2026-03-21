<!-- src/components/landing/HeroSection.vue -->
<template>
  <section class="relative flex flex-col items-center justify-center min-h-[70vh] px-5 text-center overflow-hidden">
    <!-- AI-generated hero background image -->
    <img
      src="/images/landing/hero-bg.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 w-full h-full object-cover pointer-events-none"
      style="opacity: 0.18; mix-blend-mode: screen"
      loading="eager"
    >

    <!-- Constellation network background -->
    <HeroConstellation class="pointer-events-none opacity-40" />

    <!-- Ambient gradient orbs -->
    <div
      class="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <div
        class="absolute w-[600px] h-[600px] rounded-full"
        style="
          background: radial-gradient(circle, #0a84ff, transparent 70%);
          top: -220px;
          left: -180px;
          filter: blur(100px);
          opacity: 0.07;
        "
      />
      <div
        class="absolute w-[450px] h-[450px] rounded-full"
        style="
          background: radial-gradient(circle, #bf5af2, transparent 70%);
          bottom: -120px;
          right: -100px;
          filter: blur(100px);
          opacity: 0.05;
        "
      />
      <div
        class="absolute w-[300px] h-[300px] rounded-full"
        style="
          background: radial-gradient(circle, #30d158, transparent 70%);
          top: 30%;
          right: 10%;
          filter: blur(80px);
          opacity: 0.03;
        "
      />
    </div>

    <!-- Title with gradient text -->
    <h1
      class="hero-entrance relative text-4xl sm:text-5xl font-bold tracking-tight"
      style="
        --hero-delay: 0ms;
        letter-spacing: -1.5px;
        line-height: 1.1;
        background: linear-gradient(
          135deg,
          #ffffff 0%,
          rgba(255, 255, 255, 0.6) 100%
        );
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
      基于真实项目经验的 AI 工具评测与选型指南
    </p>

    <!-- Stats with glow -->
    <div
      class="hero-entrance flex items-center gap-8 sm:gap-12 mt-10"
      style="--hero-delay: 280ms"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center group"
      >
        <div
          class="text-3xl sm:text-4xl font-bold tabular-nums transition-all duration-300"
          :style="{ color: stat.color, textShadow: '0 0 40px ' + stat.color + '40' }"
        >
          {{ animatedValues[stat.key] }}<span class="text-xl opacity-60">+</span>
        </div>
        <div class="text-xs text-white/35 mt-1">
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
      浏览工具全景
    </button>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useToolsStore } from '../../stores/tools'
import HeroConstellation from './HeroConstellation.vue'

const toolsStore = useToolsStore()

const stats = [
  { key: 'tools', label: '款工具深度评测', color: '#0a84ff' },
  { key: 'categories', label: '大类别全景覆盖', color: '#bf5af2' },
  { key: 'insights', label: '条实战洞察', color: '#30d158' },
]

const targetValues = {
  tools: toolsStore.tools.length,
  categories: toolsStore.categories.length - 1,
  insights: toolsStore.tools.reduce((sum, t) => {
    let count = 0
    if (t.personalExperience?.insights) count++
    if (t.personalExperience?.pitfalls) count += t.personalExperience.pitfalls.length
    if (t.pros) count += t.pros.length
    if (t.cons) count += t.cons.length
    return sum + count
  }, 0),
}

const animatedValues = reactive({ tools: 0, categories: 0, insights: 0 })

function animateCount(key, target, duration = 1200) {
  const start = performance.now()
  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
    animatedValues[key] = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // Stagger the animations
  setTimeout(() => animateCount('tools', targetValues.tools), 400)
  setTimeout(() => animateCount('categories', targetValues.categories), 600)
  setTimeout(() => animateCount('insights', targetValues.insights), 800)
})

function scrollToLandscape() {
  document.getElementById('landscape')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
