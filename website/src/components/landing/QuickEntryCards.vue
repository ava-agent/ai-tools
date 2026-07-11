<!-- src/components/landing/QuickEntryCards.vue -->
<template>
  <section
    ref="sectionRef"
    class="max-w-[960px] mx-auto px-5 py-16"
    :class="{ revealed: isRevealed }"
  >
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <router-link
        v-for="(entry, index) in entries"
        :key="entry.to"
        :to="entry.to"
        class="reveal-item entry-card glass-card glass-card-interactive p-5 text-center group"
        :style="{ '--reveal-i': index }"
      >
        <!-- Scene illustration -->
        <div class="w-full h-24 mb-3 overflow-hidden rounded-lg">
          <img
            :src="entry.bgImage"
            :alt="entry.label"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
          >
        </div>
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
import { useReveal } from '../../composables/useReveal'
import { publicAsset } from '../../utils/publicAsset.js'

const { sectionRef, isRevealed } = useReveal()

const entries = [
  { to: '/tools', label: '全景浏览', desc: '125+ 工具分类浏览与搜索', bgImage: publicAsset('images/landing/entry-browse.png') },
  { to: '/comparison', label: '选型对比', desc: '最多 4 款工具横向对比', bgImage: publicAsset('images/landing/entry-compare.png') },
  { to: '/workflows', label: '工作流指南', desc: '6 套实战工作流模板', bgImage: publicAsset('images/landing/entry-workflow.png') },
]
</script>
