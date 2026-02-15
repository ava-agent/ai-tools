<template>
  <section class="py-12 md:py-16 text-center relative overflow-hidden">
    <!-- 背景装饰 -->
    <div
      class="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div
        class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 1s"
      />
    </div>

    <div class="max-w-4xl mx-auto relative z-10 px-4">
      <!-- 主标题 -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
        <span class="gradient-text">AI工具全书</span>
      </h1>

      <!-- 副标题 -->
      <p
        class="text-base sm:text-lg md:text-xl text-white/80 mb-4 animate-slide-up leading-relaxed"
        style="animation-delay: 0.1s"
      >
        深度评测 <span class="text-primary font-semibold">{{ toolCount }}款</span> AI 工具 · 配套 PPT 讲解和实战视频
      </p>

      <!-- 简洁统计行 -->
      <div
        class="flex items-center justify-center gap-4 md:gap-6 text-sm text-white/50 mb-8 animate-slide-up"
        style="animation-delay: 0.15s"
      >
        <span>{{ toolCount }}+ 工具</span>
        <span class="w-1 h-1 rounded-full bg-white/30" />
        <span>{{ workflowCount }} 工作流</span>
        <span class="w-1 h-1 rounded-full bg-white/30" />
        <span>{{ pdfCount + videoCount }} 资源</span>
        <span class="w-1 h-1 rounded-full bg-white/30" />
        <span>100% 实战</span>
      </div>

      <!-- CTA 按钮组：1主 + 1副 -->
      <div
        class="flex flex-col sm:flex-row gap-3 justify-center animate-slide-up"
        style="animation-delay: 0.2s"
      >
        <router-link
          to="/matcher"
          class="btn-primary inline-flex items-center justify-center px-8 py-3 text-base"
        >
          <Search class="w-5 h-5 mr-2" />
          智能匹配工具
        </router-link>
        <router-link
          to="/comparison"
          class="btn-secondary inline-flex items-center justify-center px-6 py-3 text-sm"
        >
          <ArrowRightLeft class="w-4 h-4 mr-2" />
          对比分析
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Search, ArrowRightLeft } from 'lucide-vue-next'
import { useToolsStore } from '../stores/tools'
import { workflows } from '../data/workflows.js'
import { resources } from '../data/resources.js'

const toolsStore = useToolsStore()

const toolCount = computed(() => toolsStore.tools.length)
const workflowCount = computed(() => workflows.length)
const pdfCount = computed(() => resources.filter(r => r.type === 'pdf').length)
const videoCount = computed(() => resources.filter(r => r.type === 'video').length)
</script>
