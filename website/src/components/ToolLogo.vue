<template>
  <!-- 图片 Logo 模式 -->
  <img
    v-if="logo?.logoUrl"
    :src="logo.logoUrl"
    :alt="toolName"
    class="inline-flex items-center justify-center rounded-xl object-contain flex-shrink-0 bg-white/10 p-1"
    :class="sizeClass"
    referrerpolicy="no-referrer"
    crossorigin="anonymous"
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
import { computed, ref } from 'vue'
import { getToolLogo } from '../data/toolLogos.js'

const props = defineProps({
  toolId: { type: String, required: true },
  toolName: { type: String, default: '' },
  size: { type: String, default: 'md' },
})

const imageError = ref(false)

const logo = computed(() => {
  const logoData = getToolLogo(props.toolId)
  if (imageError.value && logoData) {
    // 图片加载失败，移除 logoUrl 使用首字母模式
    return { ...logoData, logoUrl: null }
  }
  return logoData
})

const handleImageError = () => {
  imageError.value = true
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
