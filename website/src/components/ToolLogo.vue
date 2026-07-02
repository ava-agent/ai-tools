<template>
  <!-- 图片 Logo 模式 -->
  <img
    v-if="currentLogoUrl"
    :src="currentLogoUrl"
    :alt="toolName"
    class="inline-flex items-center justify-center rounded-xl object-contain flex-shrink-0 bg-white/10 p-1"
    :class="sizeClass"
    referrerpolicy="no-referrer"
    @error="handleImageError"
  >
  <!-- 首字母渐变模式 -->
  <div
    v-else
    class="inline-flex items-center justify-center rounded-xl font-bold select-none flex-shrink-0"
    :class="sizeClass"
    :style="logoStyle"
  >
    {{ displayInitials }}
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { getToolLogo } from '../data/toolLogos.js'

const props = defineProps({
  toolId: { type: String, required: true },
  toolName: { type: String, default: '' },
  size: { type: String, default: 'md' },
  preferImage: { type: Boolean, default: false },
})

const errorCount = ref(0)

const logo = computed(() => getToolLogo(props.toolId))

watch(
  () => [props.toolId, logo.value?.logoUrl],
  () => {
    errorCount.value = 0
  }
)

// Build fallback URL from DuckDuckGo URL by extracting the domain
const googleFallbackUrl = computed(() => {
  const ddgUrl = logo.value?.logoUrl
  if (!ddgUrl) return null
  const match = ddgUrl.match(/ip3\/(.+)\.ico$/)
  if (!match) return null
  return `https://www.google.com/s2/favicons?domain=${match[1]}&sz=128`
})

const currentLogoUrl = computed(() => {
  if (!props.preferImage) return null
  if (errorCount.value === 0) return logo.value?.logoUrl || null
  if (errorCount.value === 1) return googleFallbackUrl.value
  return null // fall back to initials
})

const handleImageError = () => {
  errorCount.value++
}

const displayInitials = computed(() => {
  if (logo.value) return logo.value.initials
  // Fallback: first 2 chars of tool name
  const name = props.toolName || props.toolId
  return name.slice(0, 2).toUpperCase()
})

const sizeClass = computed(() => {
  const map = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-lg',
    xl: 'w-20 h-20 text-2xl',
  }
  return map[props.size] || map.md
})

const logoStyle = computed(() => {
  if (logo.value) {
    return {
      background: `linear-gradient(135deg, ${logo.value.colors[0]}, ${logo.value.colors[1]})`,
      color: logo.value.text,
    }
  }
  return {
    background: 'linear-gradient(135deg, #374151, #1f2937)',
    color: '#9ca3af',
  }
})
</script>
