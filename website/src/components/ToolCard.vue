<template>
  <router-link
    :to="{ name: 'tool-detail', params: { id: tool.id } }"
    class="block"
  >
    <article class="glass-card glass-card-interactive p-4">
      <!-- Header: Icon + Name + Developer -->
      <div class="flex items-center gap-2.5 mb-2.5">
        <ToolLogo
          :tool-id="tool.id"
          :tool-name="tool.name"
          size="sm"
        />
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
import ToolLogo from './ToolLogo.vue'

defineProps({
  tool: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
a { text-decoration: none; }
</style>
