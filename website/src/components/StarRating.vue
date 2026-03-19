<template>
  <span class="inline-flex items-center">
    <span
      v-for="i in 5"
      :key="i"
      class="relative"
      :class="starSizeClass"
    ><template v-if="i <= fullStars">★</template><template v-else-if="i === fullStars + 1 && hasHalf"><span class="half-star">★</span><span class="text-white/15">★</span></template><template v-else><span class="text-white/15">★</span></template></span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 0 },
  size: { type: String, default: 'sm' },
})

const fullStars = computed(() => Math.floor(props.rating))
const hasHalf = computed(() => props.rating % 1 >= 0.5)

const starSizeClass = computed(() => {
  const map = {
    xs: 'text-[10px]',
    sm: 'text-[11px]',
    md: 'text-[13px]',
    lg: 'text-base',
  }
  return map[props.size] || map.sm
})
</script>

<style scoped>
.half-star {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 50%;
}
</style>
