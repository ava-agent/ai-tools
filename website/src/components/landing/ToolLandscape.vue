<!-- src/components/landing/ToolLandscape.vue -->
<template>
  <section
    id="landscape"
    ref="sectionRef"
    class="mx-auto max-w-[1080px] px-5 py-12 sm:py-16"
    :class="{ revealed: isRevealed }"
  >
    <h2
      class="reveal-item text-2xl font-bold text-white tracking-normal mb-2"
      style="--reveal-i: 0"
    >
      按能力浏览
    </h2>
    <p
      class="reveal-item mb-8 text-sm text-white/60"
      style="--reveal-i: 1"
    >
      {{ LANDING_STATS.tools }} 款工具分为 {{ LANDING_STATS.categories }} 类，先看代表工具，再进入完整目录筛选。
    </p>

    <div class="grid gap-4 lg:grid-cols-2">
      <article
        v-for="(cat, catIndex) in groupedTools"
        :key="cat.id"
        class="reveal-item relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.025] p-4"
        :style="{ '--reveal-i': catIndex + 2 }"
      >
        <!-- Category background decoration -->
        <img
          :src="landingImage(`cat-${cat.id}`)"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute right-0 top-0 h-full w-auto max-w-[45%] object-cover object-left"
          style="opacity: 0.08; mask-image: linear-gradient(to left, rgba(0,0,0,0.6), transparent); -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,0.6), transparent)"
          loading="lazy"
        >
        <!-- Category header -->
        <div class="relative z-10 mb-4 flex items-center gap-2.5">
          <div
            class="flex h-7 w-7 items-center justify-center rounded-lg"
            :style="{ background: cat.color + '15', border: '1px solid ' + cat.color + '25' }"
          >
            <component
              :is="categoryIconMap[cat.id]"
              :color="cat.color"
            />
          </div>
          <span class="text-sm font-semibold text-white">{{ cat.nameZh }}</span>
          <router-link
            :to="{ name: 'tools', query: { category: cat.id } }"
            class="ml-auto inline-flex min-h-11 items-center rounded-lg px-2 text-xs text-primary transition-colors hover:bg-primary/10"
          >
            查看全部 {{ cat.total }} 款
          </router-link>
        </div>

        <div class="relative z-10 grid gap-1 sm:grid-cols-2">
          <router-link
            v-for="tool in cat.tools"
            :key="tool.id"
            :to="{ name: 'tool-detail', params: { id: tool.id } }"
            class="group flex min-h-14 min-w-0 items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06]"
            :aria-label="`查看 ${tool.name} 详情：${tool.bestFor || '工具详情'}`"
          >
            <ToolLogo
              :tool-id="tool.id"
              :tool-name="tool.name"
              size="sm"
            />
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-semibold text-white/90 group-hover:text-white">
                {{ tool.name }}
              </div>
              <div class="mt-0.5 line-clamp-1 text-xs text-white/55">
                {{ tool.bestFor }}
              </div>
            </div>
          </router-link>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { categories } from '../../data/categories.js'
import { LANDING_CATEGORY_SUMMARY, LANDING_STATS } from '../../data/landingCatalog.js'
import { useReveal } from '../../composables/useReveal'
import ToolLogo from '../ToolLogo.vue'
import { categoryIconMap } from './CategoryIcons.js'

const { sectionRef, isRevealed } = useReveal({
  threshold: 0.02,
  rootMargin: '0px 0px -24px 0px',
})

const categoryColors = {
  ide: '#0a84ff',
  cli: '#30d158',
  llm: '#bf5af2',
  multimodal: '#ff375f',
  agent: '#ff9f0a',
  mcp: '#64d2ff',
  skill: '#ffd60a',
}

function landingImage(name) {
  return `${import.meta.env.BASE_URL}images/landing/${name}.webp`
}

const groupedTools = computed(() => {
  return categories.map((cat) => ({
    id: cat.id,
    nameZh: cat.nameZh,
    color: categoryColors[cat.id] || '#ffffff',
    total: LANDING_CATEGORY_SUMMARY[cat.id]?.total || 0,
    tools: LANDING_CATEGORY_SUMMARY[cat.id]?.featured || [],
  }))
})

</script>
