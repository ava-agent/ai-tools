<template>
  <div
    id="app"
    class="min-h-screen bg-background"
  >
    <ErrorBoundary>
      <Header />
      <main class="container mx-auto px-4 py-8">
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <Footer />
    </ErrorBoundary>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import { usePerformance } from './composables/usePerformance'

// 初始化性能监控
usePerformance()

onMounted(() => {
  document.title = 'AI工具全书 | 2026深度集成与实战教学版'
})
</script>

<style scoped>
#app {
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
}

/* 页面过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
