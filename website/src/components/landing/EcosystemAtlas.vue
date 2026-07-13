<template>
  <section
    ref="sectionRef"
    class="mx-auto max-w-[1080px] px-5 py-12 sm:py-16"
    :class="{ revealed: isRevealed }"
    aria-labelledby="ecosystem-atlas-title"
  >
    <div
      class="reveal-item mb-7 max-w-2xl"
      style="--reveal-i: 0"
    >
      <p class="mb-2 text-xs font-semibold uppercase text-[#64d2ff]">
        2026 工具生态图
      </p>
      <h2
        id="ecosystem-atlas-title"
        class="text-2xl font-bold text-white sm:text-3xl"
      >
        从开发入口到可复用能力
      </h2>
      <p class="mt-3 text-sm leading-6 text-white/50">
        IDE、CLI 和模型负责起点，Agent、MCP 与 Skills 把一次任务连接成可持续的工作流。
      </p>
    </div>

    <figure
      class="reveal-item"
      style="--reveal-i: 1"
    >
      <div class="overflow-hidden rounded-lg border border-white/[0.08] bg-[#0b0d12]">
        <img
          :src="atlasImage"
          alt="AI 工具生态图：IDE、CLI、大模型、多模态、Agent、MCP 和 Skills 七类能力围绕选型中心相互连接"
          class="block aspect-video w-full object-cover"
          width="1920"
          height="1080"
          loading="lazy"
          decoding="async"
        >
      </div>

      <figcaption class="mt-5">
        <ul class="flex flex-wrap gap-2 text-xs text-white/65">
          <li
            v-for="category in categories"
            :key="category.label"
          >
            <RouterLink
              :to="{ name: 'tools', query: { category: category.id } }"
              class="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/[0.08] px-3 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              <span
                class="h-2 w-2 rounded-full"
                :style="{ backgroundColor: category.color }"
                aria-hidden="true"
              />
              {{ category.label }}
            </RouterLink>
          </li>
        </ul>
      </figcaption>
    </figure>
  </section>
</template>

<script setup>
import { useReveal } from '../../composables/useReveal'
import { RouterLink } from 'vue-router'

const { sectionRef, isRevealed } = useReveal({
  threshold: 0.06,
  rootMargin: '0px 0px -32px 0px',
})

const atlasImage = `${import.meta.env.BASE_URL}images/landing/ecosystem-atlas.webp`

const categories = [
  { id: 'ide', label: 'AI IDE', color: '#0a84ff' },
  { id: 'cli', label: 'AI CLI', color: '#30d158' },
  { id: 'llm', label: '大模型', color: '#bf5af2' },
  { id: 'multimodal', label: '多模态', color: '#ff6b6b' },
  { id: 'agent', label: 'Agent', color: '#ff9f0a' },
  { id: 'mcp', label: 'MCP', color: '#64d2ff' },
  { id: 'skill', label: 'Skills', color: '#ffd60a' },
]
</script>
