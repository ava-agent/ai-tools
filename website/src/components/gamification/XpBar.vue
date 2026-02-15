<template>
  <div class="w-full">
    <!-- Compact mode (for header) -->
    <div
      v-if="compact"
      class="relative h-1 bg-white/10 rounded-full overflow-hidden"
    >
      <div
        class="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
        :style="{ width: `${progress}%` }"
        :class="isMax ? 'bg-gradient-to-r from-cyan-400 via-primary to-purple-400' : 'bg-gradient-to-r from-primary to-secondary'"
      />
    </div>

    <!-- Full mode (for profile) -->
    <div v-else>
      <div class="flex items-center justify-between mb-2">
        <span class="text-sm font-medium" :class="levelColor">
          Lv.{{ level.level }} {{ level.title }}
        </span>
        <span class="text-xs text-white/50">
          <template v-if="isMax">MAX</template>
          <template v-else>{{ xp }} / {{ nextXp }} XP</template>
        </span>
      </div>
      <div class="relative h-2.5 bg-white/10 rounded-full overflow-hidden">
        <div
          class="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
          :style="{ width: `${progress}%` }"
          :class="isMax ? 'bg-gradient-to-r from-cyan-400 via-primary to-purple-400' : 'bg-gradient-to-r from-primary to-secondary'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useGamificationStore } from '../../stores/gamification.js'

const props = defineProps({
  compact: { type: Boolean, default: false },
})

const store = useGamificationStore()

const xp = computed(() => store.xp)
const level = computed(() => store.currentLevel)
const levelColor = computed(() => store.levelColor)
const nextXp = computed(() => store.nextLevelXp)
const progress = computed(() => store.xpProgress)
const isMax = computed(() => store.isMaxLevel)
</script>
