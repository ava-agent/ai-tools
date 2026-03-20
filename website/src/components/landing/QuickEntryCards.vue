<!-- src/components/landing/QuickEntryCards.vue -->
<template>
  <section class="max-w-[960px] mx-auto px-5 py-16">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <router-link
        v-for="entry in entries"
        :key="entry.to"
        :to="entry.to"
        class="glass-card glass-card-interactive p-5 text-center group"
      >
        <component
          :is="entry.icon"
          class="w-6 h-6 mx-auto mb-3 text-white/40 group-hover:text-primary transition-colors"
        />
        <div class="text-sm font-semibold text-white mb-1">
          {{ entry.label }}
        </div>
        <div class="text-xs text-white/35">
          {{ entry.desc }}
        </div>
      </router-link>
    </div>

    <div class="text-center mt-12 text-xs text-white/25">
      Kevin · AI 工具深度用户 · 持续更新中 ·
      <a
        href="https://github.com/ava-agent/ai-tools"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/35 hover:text-white/60 transition-colors"
      >
        GitHub
      </a>
    </div>
  </section>
</template>

<script setup>
import { LayoutGrid, GitCompare, Workflow } from 'lucide-vue-next'

const entries = [
  { to: '/tools', label: '全景浏览', desc: '125+ 工具分类浏览与搜索', icon: LayoutGrid },
  { to: '/comparison', label: '选型对比', desc: '最多 4 款工具横向对比', icon: GitCompare },
  { to: '/workflows', label: '工作流指南', desc: '6 套实战工作流模板', icon: Workflow },
]
</script>
