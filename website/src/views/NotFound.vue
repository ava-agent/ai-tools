<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="text-center">
      <div class="text-9xl font-bold gradient-text mb-4">
        404
      </div>
      <h1 class="text-4xl font-bold text-white mb-4">
        页面未找到
      </h1>
      <p class="text-xl text-white/60 mb-8">
        抱歉，您访问的页面不存在或已被移除
      </p>
      <router-link
        to="/"
        class="btn-primary inline-flex items-center"
      >
        <Home class="w-5 h-5 mr-2" />
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Home } from 'lucide-vue-next'
</script>
