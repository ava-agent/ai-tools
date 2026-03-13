<template>
  <router-link
    :to="{ name: 'tool-detail', params: { id: tool.id } }"
    class="block"
  >
    <article class="glass-card glass-card-interactive p-4">
      <!-- Header: Icon + Name + Developer -->
      <div class="flex items-center gap-2.5 mb-2.5">
        <div
          class="w-9 h-9 rounded-icon flex items-center justify-center text-base flex-shrink-0"
          :style="{ background: categoryIconBg[tool.category] || 'rgba(255,255,255,0.1)' }"
        >
          {{ categoryEmoji[tool.category] || '🔧' }}
        </div>
        <div class="min-w-0">
          <div
            class="text-sm font-semibold text-white truncate"
            style="letter-spacing: -0.2px;"
          >
            {{ tool.name }}
          </div>
          <div class="text-[11px] text-white/40 truncate">
            {{ tool.developer }}
          </div>
        </div>
      </div>

      <!-- Description -->
      <p class="text-xs text-white/45 leading-relaxed mb-2.5 line-clamp-2">
        {{ tool.bestFor }}
      </p>

      <!-- Footer: Stars + Score Badge -->
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-0.5 text-[11px] text-[#ffd60a]">
          <span
            v-for="i in 5"
            :key="i"
          >{{ i <= Math.round(tool.personalExperience?.rating || 0) ? '★' : '☆' }}</span>
        </div>
        <div
          v-if="tool.personalExperience?.rating"
          class="text-[11px] text-[#30d158] px-2 py-0.5 rounded-md"
          style="background: rgba(48, 209, 88, 0.1);"
        >
          {{ tool.personalExperience.rating.toFixed(1) }}
        </div>
      </div>
    </article>
  </router-link>
</template>

<script setup>
defineProps({
  tool: {
    type: Object,
    required: true
  }
})

const categoryIconBg = {
  ide: 'rgba(10,132,255,0.15)',
  cli: 'rgba(10,132,255,0.15)',
  'deep-research': 'rgba(48,209,88,0.15)',
  llm: 'rgba(255,214,10,0.15)',
  multimodal: 'rgba(191,90,242,0.15)',
  agent: 'rgba(255,159,10,0.15)',
  mcp: 'rgba(255,69,58,0.15)',
  skill: 'rgba(245,158,11,0.15)',
}

const categoryEmoji = {
  ide: '⚡',
  cli: '💻',
  'deep-research': '🔬',
  llm: '🤖',
  multimodal: '🎨',
  agent: '🧠',
  mcp: '🔗',
  skill: '🔧',
}
</script>

<style scoped>
a { text-decoration: none; }
</style>
