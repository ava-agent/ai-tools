<template>
  <div class="flex items-center justify-center py-20" role="status" aria-live="polite">
    <div class="relative" aria-hidden="true">
      <!-- 外圈 -->
      <div class="w-16 h-16 border-4 border-primary/20 rounded-full" />
      <!-- 内圈动画 -->
      <div class="absolute top-0 left-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <!-- 中心点 -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse" />
    </div>
    <span class="sr-only">加载中...</span>
  </div>
</template>

<script setup>
// 加载动画组件 - 使用 CSS 动画实现旋转效果
</script>
