<!-- src/components/landing/HeroSection.vue -->
<template>
  <section class="flex flex-col items-center justify-center min-h-[70vh] px-5 text-center">
    <h1
      class="text-4xl sm:text-5xl font-bold text-white tracking-tight"
      style="letter-spacing: -1.5px; line-height: 1.1"
    >
      AI 工具全书
    </h1>
    <p class="text-base text-white/45 mt-3 max-w-md">
      基于真实项目经验的 AI 工具评测与选型指南
    </p>

    <div class="flex items-center gap-8 sm:gap-12 mt-10">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center"
      >
        <div class="text-3xl sm:text-4xl font-bold text-accent tabular-nums">
          {{ animatedValues[stat.key] }}<span class="text-xl">+</span>
        </div>
        <div class="text-xs text-white/35 mt-1">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <button
      class="mt-12 px-6 py-3 rounded-capsule text-sm font-semibold text-white cursor-pointer transition-all hover:scale-105"
      style="background: linear-gradient(135deg, #0a84ff, #bf5af2)"
      @click="scrollToLandscape"
    >
      浏览工具全景
    </button>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useToolsStore } from '../../stores/tools'

const toolsStore = useToolsStore()

const stats = [
  { key: 'tools', label: '款工具深度评测' },
  { key: 'categories', label: '大类别全景覆盖' },
  { key: 'insights', label: '条实战洞察' },
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
  setTimeout(() => animateCount('tools', targetValues.tools), 200)
  setTimeout(() => animateCount('categories', targetValues.categories), 400)
  setTimeout(() => animateCount('insights', targetValues.insights), 600)
})

function scrollToLandscape() {
  document.getElementById('landscape')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
