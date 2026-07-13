<template>
  <div
    id="app"
    class="min-h-screen"
  >
    <a
      href="#main-content"
      class="fixed left-3 top-3 z-[100] -translate-y-20 rounded-md bg-white px-3 py-2 text-sm font-semibold text-black transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      跳到主内容
    </a>
    <ErrorBoundary>
      <Header />
      <main
        id="main-content"
        ref="mainContent"
        tabindex="-1"
      >
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            mode="out-in"
          >
            <component
              :is="Component"
              :key="$route.fullPath"
            />
          </transition>
        </router-view>
      </main>
      <Footer />
      <NetworkStatus />
      <ToastContainer />
      <AchievementToast />
      <AuthModal />
    </ErrorBoundary>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import ToastContainer from './components/ToastContainer.vue'
import NetworkStatus from './components/NetworkStatus.vue'
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
const route = useRoute()
const mainContent = ref(null)

// 云同步服务
const syncService = new SyncService(gamification, achievements)

// 监听认证状态变化，自动启停云同步 + 加载用户评分
const stopAuthWatch = watch(
  [() => authStore.isAuthenticated, () => authStore.userId],
  async ([isAuth, userId]) => {
    if (isAuth && userId) {
      communityStore.fetchMyRatings(userId)
      await syncService.migrateLocalToCloud(userId)
      syncService.startAutoSync(userId)
    } else {
      communityStore.clearMyRatings()
      syncService.stopAutoSync()
    }
  },
)

const stopRouteWatch = watch(
  () => route.fullPath,
  async (_currentPath, previousPath) => {
    if (!previousPath) return
    await nextTick()
    mainContent.value?.focus({ preventScroll: true })
  }
)

onMounted(() => {
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
  stopRouteWatch()
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
