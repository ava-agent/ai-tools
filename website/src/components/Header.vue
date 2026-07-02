<template>
  <header class="sticky top-0 z-50 pt-[env(safe-area-inset-top)] glass-nav">
    <div class="max-w-[960px] mx-auto flex items-center h-12 px-5 gap-3">
      <!-- Logo -->
      <router-link
        to="/"
        aria-label="返回首页"
        class="flex min-h-11 min-w-11 items-center gap-2 flex-shrink-0 -ml-2 px-2"
      >
        <div
          class="w-6 h-6 rounded-md flex items-center justify-center text-xs"
          style="background: linear-gradient(135deg, #0a84ff, #bf5af2);"
        >
          <Brain class="w-3.5 h-3.5 text-white" />
        </div>
        <span class="text-[15px] font-semibold text-white tracking-normal hidden sm:block">AI Tools</span>
      </router-link>

      <div class="flex-1" />

      <!-- Segmented Control (desktop) -->
      <nav
        class="hidden md:flex segmented-control"
        aria-label="Main navigation"
      >
        <router-link
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="segment"
          exact-active-class="segment-active"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="flex-1" />

      <!-- Right side -->
      <div class="flex items-center gap-2">
        <!-- Secondary nav links (desktop) -->
        <router-link
          v-for="item in secondaryNav"
          :key="item.to"
          :to="item.to"
          class="hidden min-h-11 items-center rounded-lg px-2 text-xs text-white/45 transition-colors hover:bg-white/[0.04] hover:text-white lg:inline-flex"
        >
          {{ item.label }}
        </router-link>

        <!-- Search trigger -->
        <button
          type="button"
          aria-label="打开工具搜索"
          class="flex min-h-11 min-w-11 items-center justify-center gap-1.5 px-3 py-1.5 rounded-control text-xs cursor-pointer"
          style="background: rgba(255,255,255,0.06);"
          @click="$router.push('/tools')"
        >
          <Search class="w-3.5 h-3.5 text-white/55" />
          <span class="text-white/25 hidden sm:inline">搜索</span>
        </button>

        <!-- Auth avatar -->
        <button
          v-if="authStore.isAuthenticated"
          :aria-label="`打开 ${authStore.displayName || '用户'} 资料面板`"
          class="flex min-h-11 min-w-11 items-center justify-center p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          @click="isProfileOpen = true"
        >
          <img
            v-if="authStore.avatarUrl"
            :src="authStore.avatarUrl"
            :alt="authStore.displayName"
            class="w-6 h-6 rounded-full border border-white/20"
          >
          <UserCircle
            v-else
            class="w-6 h-6 text-white/45"
          />
        </button>

        <!-- Mobile menu button -->
        <button
          class="md:hidden min-h-11 min-w-11 p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          :aria-expanded="isMobileMenuVisible"
          aria-controls="mobile-navigation"
          :aria-label="isMobileMenuVisible ? '关闭菜单' : '打开菜单'"
          @click="toggleMobileMenu"
        >
          <Menu
            v-if="!isMobileMenuVisible"
            class="w-5 h-5"
          />
          <X
            v-else
            class="w-5 h-5"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuVisible"
        id="mobile-navigation"
        class="md:hidden px-5 pb-4 pt-2 border-t border-white/[0.06]"
      >
        <div class="flex flex-col gap-1">
          <router-link
            v-for="item in [...mainNav, ...secondaryNav]"
            :key="item.to"
            :to="item.to"
            class="flex min-h-11 items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            @click="closeMobileMenu"
          >
            <component
              :is="item.icon"
              class="w-4 h-4"
            />
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </transition>

    <!-- User Profile Panel -->
    <UserProfilePanel
      :is-open="isProfileOpen"
      @close="isProfileOpen = false"
    />
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Brain, Menu, X, Search, LayoutGrid, GitCompare, Workflow, UserCircle, Sparkles, DollarSign, BookOpen } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import UserProfilePanel from './gamification/UserProfilePanel.vue'

const authStore = useAuthStore()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const mobileMenuRoute = ref('')
const isProfileOpen = ref(false)
const isMobileMenuVisible = computed(
  () => isMobileMenuOpen.value && mobileMenuRoute.value === router.currentRoute.value.fullPath,
)

const mainNav = [
  { to: '/', label: '首页', icon: Brain },
  { to: '/tools', label: '全景浏览', icon: LayoutGrid },
  { to: '/comparison', label: '工具对比', icon: GitCompare },
  { to: '/workflows', label: '工作流', icon: Workflow },
]

const secondaryNav = [
  { to: '/matcher', label: '帮我选', icon: Sparkles },
  { to: '/pricing', label: '订阅指南', icon: DollarSign },
  { to: '/resources', label: '资源库', icon: BookOpen },
]

const toggleMobileMenu = () => {
  if (isMobileMenuVisible.value) {
    closeMobileMenu()
    return
  }
  mobileMenuRoute.value = router.currentRoute.value.fullPath
  isMobileMenuOpen.value = true
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  mobileMenuRoute.value = ''
}

const removeRouteGuard = router.afterEach(() => {
  closeMobileMenu()
})

watch(
  () => router.currentRoute.value.fullPath,
  closeMobileMenu,
)

onMounted(() => {
  window.addEventListener('hashchange', closeMobileMenu)
  window.addEventListener('popstate', closeMobileMenu)
})

onBeforeUnmount(() => {
  removeRouteGuard()
  window.removeEventListener('hashchange', closeMobileMenu)
  window.removeEventListener('popstate', closeMobileMenu)
})
</script>
