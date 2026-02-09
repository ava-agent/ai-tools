<template>
  <section class="py-16 md:py-24 text-center relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s" />
    </div>

    <div class="max-w-5xl mx-auto relative z-10 px-4">
      <!-- 版本标签 -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-fade-in glass-effect cursor-pointer hover:scale-105 transition-all duration-300">
        <Sparkles class="w-4 h-4 text-primary" />
        <span class="text-sm text-primary font-medium">2026深度集成与实战教学版</span>
      </div>

      <!-- 主标题 -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
        <span class="gradient-text">AI工具全书</span>
      </h1>

      <!-- 副标题 -->
      <p class="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 animate-slide-up leading-relaxed" style="animation-delay: 0.1s">
        整合多份调研文档、SWOT分析与<span class="text-primary font-semibold">49款</span>AI工具的CN/Global双版本实战数据
      </p>

      <!-- 描述 -->
      <p class="text-base md:text-lg text-muted mb-10 animate-slide-up max-w-3xl mx-auto leading-relaxed" style="animation-delay: 0.2s">
        涵盖Cursor、Windsurf、Trae、Claude Code、JetBrains AI等AI IDE、CLI、LLM、多模态工具的深度评测与选型建议
      </p>

      <!-- CTA 按钮组 -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.3s">
        <router-link to="/matcher" class="btn-primary inline-flex items-center justify-center px-8 py-4 text-base">
          <Search class="w-5 h-5 mr-2" />
          工具匹配
        </router-link>
        <router-link to="/pricing" class="btn-secondary inline-flex items-center justify-center px-8 py-4 text-base">
          <BarChart3 class="w-5 h-5 mr-2" />
          订阅指南
        </router-link>
      </div>

      <!-- 统计数据 -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style="animation-delay: 0.4s">
        <div class="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
          <div class="text-3xl md:text-4xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
            49+
          </div>
          <div class="text-sm text-muted">AI工具</div>
        </div>
        <div class="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
          <div class="text-3xl md:text-4xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
            10+
          </div>
          <div class="text-sm text-muted">调研文档</div>
        </div>
        <div class="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
          <div class="text-3xl md:text-4xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
            5
          </div>
          <div class="text-sm text-muted">工具类别</div>
        </div>
        <div class="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer">
          <div class="text-3xl md:text-4xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-110">
            100%
          </div>
          <div class="text-sm text-muted">实战数据</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Sparkles, Search, BarChart3 } from 'lucide-vue-next'
</script>
