<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="max-w-[720px] mx-auto px-5 py-6">
      <div class="glass-card rounded-2xl p-10 text-center">
        <div
          class="text-9xl font-bold text-white mb-4"
          style="letter-spacing: -0.8px"
        >
          404
        </div>
        <h1
          class="text-[28px] font-bold text-white mb-4"
          style="letter-spacing: -0.8px"
        >
          页面未找到
        </h1>
        <p class="text-xl text-white/60 mb-8">
          抱歉，您访问的页面不存在或已被移除
        </p>
        <router-link
          to="/"
          class="btn-capsule inline-flex items-center"
        >
          <Home class="w-5 h-5 mr-2" />
          返回首页
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Home } from 'lucide-vue-next'
</script>
