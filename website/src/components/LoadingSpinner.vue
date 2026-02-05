<template>
  <div class="flex items-center justify-center py-20">
    <div class="relative">
      <!-- 外圈 -->
      <div class="w-16 h-16 border-4 border-primary/20 rounded-full" />
      <!-- 内圈动画 -->
      <div class="absolute top-0 left-0 w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <!-- 文字 -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span class="text-xs text-primary font-medium">加载中</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// 加载动画组件
</script>
