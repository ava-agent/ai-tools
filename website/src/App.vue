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
      <ToastContainer />
      <AchievementToast />
    </ErrorBoundary>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import ToastContainer from './components/ToastContainer.vue'
import AchievementToast from './components/gamification/AchievementToast.vue'
import { usePerformance } from './composables/usePerformance'
import { useEasterEggs } from './composables/useEasterEggs'
import { useGamificationStore } from './stores/gamification'
import { useAchievementsStore } from './stores/achievements'

// 初始化性能监控
usePerformance()

// 初始化彩蛋系统 (Konami code, console welcome)
useEasterEggs()

onMounted(() => {
  document.title = 'AI工具全书 | 2026深度集成与实战教学版'

  // Track daily visit for gamification
  const gamification = useGamificationStore()
  const achievements = useAchievementsStore()
  gamification.trackDailyVisit()
  achievements.checkAll()
})
</script>

<style scoped>
#app {
  font-family: 'IBM Plex Sans', system-ui, sans-serif;
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
