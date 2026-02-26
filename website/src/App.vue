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
      <AuthModal />
    </ErrorBoundary>
  </div>
</template>

<script setup>
import { onMounted, watch, onUnmounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import ToastContainer from './components/ToastContainer.vue'
import AchievementToast from './components/gamification/AchievementToast.vue'
import AuthModal from './components/AuthModal.vue'
import { usePerformance } from './composables/usePerformance'
import { useEasterEggs } from './composables/useEasterEggs'
import { useAuthStore } from './stores/auth'
import { useGamificationStore } from './stores/gamification'
import { useAchievementsStore } from './stores/achievements'
import { useCommunityStore } from './stores/community'
import { SyncService } from './lib/syncService.js'

// 初始化性能监控
usePerformance()

// 初始化彩蛋系统 (Konami code, console welcome)
useEasterEggs()

const authStore = useAuthStore()
const gamification = useGamificationStore()
const achievements = useAchievementsStore()
const communityStore = useCommunityStore()

// 云同步服务
const syncService = new SyncService(gamification, achievements)

// 监听认证状态变化，自动启停云同步 + 加载用户评分
const stopAuthWatch = watch(
  () => authStore.isAuthenticated,
  async (isAuth) => {
    if (isAuth && authStore.userId) {
      await syncService.migrateLocalToCloud(authStore.userId)
      syncService.startAutoSync(authStore.userId)
      communityStore.fetchMyRatings(authStore.userId)
    } else {
      syncService.stopAutoSync()
    }
  },
)

onMounted(() => {
  document.title = 'AI工具全书 | 2026深度集成与实战教学版'

  // Track daily visit for gamification
  gamification.trackDailyVisit()
  achievements.checkAll()

  // 加载社区评分统计
  communityStore.fetchRatingStats()
  if (authStore.isAuthenticated && authStore.userId) {
    communityStore.fetchMyRatings(authStore.userId)
  }
})

onUnmounted(() => {
  stopAuthWatch()
  syncService.stopAutoSync()
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
