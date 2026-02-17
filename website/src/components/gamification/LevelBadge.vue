<template>
  <button
    class="relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
    :class="[
      sizeClass,
      level.bg,
      `border-2 ${level.border}`,
      'hover:scale-105'
    ]"
    :title="`Lv.${level.level} ${level.title}`"
    @click="$emit('click')"
  >
    <span
      class="font-bold"
      :class="[level.color, textSizeClass]"
    >
      {{ level.level }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useGamificationStore } from '../../stores/gamification.js'

const props = defineProps({
  size: { type: String, default: 'md' },
})

defineEmits(['click'])

const store = useGamificationStore()
const level = computed(() => store.currentLevel)

const sizeClass = computed(() => {
  const sizes = { sm: 'w-7 h-7', md: 'w-9 h-9', lg: 'w-14 h-14' }
  return sizes[props.size] || sizes.md
})

const textSizeClass = computed(() => {
  const sizes = { sm: 'text-xs', md: 'text-sm', lg: 'text-xl' }
  return sizes[props.size] || sizes.md
})
</script>
