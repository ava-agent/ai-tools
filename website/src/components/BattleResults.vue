<template>
  <div
    v-if="stats"
    class="mt-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.04]"
  >
    <p class="text-xs text-white/40 mb-2">
      社区投票 ({{ stats.total }} 票)
    </p>
    <div class="flex items-center gap-2">
      <!-- Tool A -->
      <span class="text-xs text-white/60 w-16 text-right truncate">{{ toolAName }}</span>
      <div class="flex-1 h-5 bg-white/[0.04] rounded-full overflow-hidden flex">
        <div
          class="h-full bg-[#0a84ff]/60 rounded-l-full transition-all duration-500 flex items-center justify-end pr-1"
          :style="{ width: toolAPercent + '%' }"
        >
          <span
            v-if="toolAPercent > 15"
            class="text-[10px] text-white font-medium"
          >{{ toolAPercent }}%</span>
        </div>
        <div
          class="h-full bg-orange-500/60 rounded-r-full transition-all duration-500 flex items-center pl-1"
          :style="{ width: toolBPercent + '%' }"
        >
          <span
            v-if="toolBPercent > 15"
            class="text-[10px] text-white font-medium"
          >{{ toolBPercent }}%</span>
        </div>
      </div>
      <!-- Tool B -->
      <span class="text-xs text-white/60 w-16 truncate">{{ toolBName }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  stats: { type: Object, default: null },
  toolAName: { type: String, default: '' },
  toolBName: { type: String, default: '' },
})

const toolAPercent = computed(() => {
  if (!props.stats || props.stats.total === 0) return 50
  return Math.round((props.stats.toolAVotes / props.stats.total) * 100)
})

const toolBPercent = computed(() => {
  if (!props.stats || props.stats.total === 0) return 50
  return 100 - toolAPercent.value
})
</script>
