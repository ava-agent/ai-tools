<template>
  <header
    class="sticky top-0 z-50 pt-[env(safe-area-inset-top)] glass-nav"
    @keydown.esc="handleMobileMenuEscape"
  >
    <div class="max-w-[1180px] mx-auto flex items-center h-12 px-5 gap-3">
      <!-- Logo -->
      <router-link
        to="/"
        aria-label="返回首页"
        class="flex min-h-11 min-w-11 items-center gap-2 flex-shrink-0 -ml-2 px-2"
      >
        <img
          :src="brandMark"
          alt=""
          aria-hidden="true"
          class="h-7 w-7 flex-shrink-0 rounded-md object-contain"
          width="28"
          height="28"
        >
        <span class="hidden text-[15px] font-semibold tracking-normal text-white sm:block">AI 工具全书</span>
      </router-link>

      <div class="flex-1" />

      <!-- Segmented Control (desktop) -->
      <nav
        class="hidden md:flex segmented-control"
        aria-label="主导航"
      >
        <router-link
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          class="segment"
          active-class="segment-active"
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
          class="hidden min-h-11 items-center rounded-lg px-2 text-xs text-white/60 transition-colors hover:bg-white/[0.04] hover:text-white lg:inline-flex"
        >
          {{ item.label }}
        </router-link>

        <!-- Search trigger -->
        <button
          type="button"
          aria-label="打开工具搜索"
          class="flex min-h-11 min-w-11 items-center justify-center gap-1.5 px-3 py-1.5 rounded-control text-xs cursor-pointer"
          style="background: rgba(255, 255, 255, 0.06)"
          @click="$router.push('/tools')"
        >
          <Search class="w-3.5 h-3.5 text-white/55" />
          <span class="hidden text-white/60 sm:inline">搜索</span>
        </button>

        <!-- Guest sign in (desktop) -->
        <button
          v-if="authAvailable && !authStore.isAuthenticated"
          type="button"
          data-testid="desktop-login"
          class="hidden min-h-11 cursor-pointer items-center gap-2 rounded-lg px-3 text-xs font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white md:inline-flex"
          @click="openLogin"
        >
          <LogIn
            class="h-4 w-4"
            aria-hidden="true"
          />
          <span>登录</span>
        </button>

        <!-- Auth avatar -->
        <button
          v-if="authStore.isAuthenticated"
          type="button"
          data-testid="desktop-profile"
          :aria-label="`打开 ${authStore.displayName || '用户'} 资料面板`"
          class="flex min-h-11 min-w-11 items-center justify-center p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          @click="openProfile"
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
          ref="mobileMenuButtonRef"
          class="min-h-11 min-w-11 cursor-pointer rounded-lg p-2 text-white/60 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
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
      <nav
        v-if="isMobileMenuVisible"
        id="mobile-navigation"
        ref="mobileNavigationRef"
        aria-label="移动导航"
        class="border-t border-white/[0.06] px-5 pb-4 pt-2 lg:hidden"
      >
        <div class="flex flex-col gap-1">
          <router-link
            v-for="item in [...mainNav, ...secondaryNav]"
            :key="item.to"
            :to="item.to"
            class="flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            :class="{ 'md:hidden': mainNav.some((navItem) => navItem.to === item.to) }"
            @click="closeMobileMenu"
          >
            <component
              :is="item.icon"
              class="w-4 h-4"
            />
            {{ item.label }}
          </router-link>

          <button
            v-if="authAvailable && !authStore.isAuthenticated"
            type="button"
            data-testid="mobile-login"
            class="flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            @click="openLogin"
          >
            <LogIn
              class="h-4 w-4"
              aria-hidden="true"
            />
            <span>登录</span>
          </button>

          <button
            v-else-if="authStore.isAuthenticated"
            type="button"
            data-testid="mobile-profile"
            class="flex min-h-11 w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            @click="openProfile"
          >
            <UserCircle
              class="h-4 w-4"
              aria-hidden="true"
            />
            <span>个人中心</span>
          </button>
        </div>
      </nav>
    </transition>

    <!-- User Profile Panel -->
    <UserProfilePanel
      :is-open="isProfileOpen"
      @close="isProfileOpen = false"
    />
  </header>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  Home,
  Menu,
  X,
  Search,
  LayoutGrid,
  GitCompare,
  Workflow,
  UserCircle,
  LogIn,
  Sparkles,
  DollarSign,
  BookOpen
} from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import { isSupabaseConfigured } from '../lib/supabase.js'
import UserProfilePanel from './gamification/UserProfilePanel.vue'

const props = defineProps({
  authAvailable: {
    type: Boolean,
    default: () => isSupabaseConfigured()
  }
})

const authStore = useAuthStore()
const authAvailable = computed(() => props.authAvailable)
const router = useRouter()
const brandMark = `${import.meta.env.BASE_URL}brand/ai-tools-mark-2026-64.png`
const isMobileMenuOpen = ref(false)
const mobileMenuRoute = ref('')
const mobileMenuButtonRef = ref(null)
const mobileNavigationRef = ref(null)
const isProfileOpen = ref(false)
const isMobileMenuVisible = computed(
  () => isMobileMenuOpen.value && mobileMenuRoute.value === router.currentRoute.value.fullPath
)

const mainNav = [
  { to: '/', label: '首页', icon: Home },
  { to: '/tools', label: '全景浏览', icon: LayoutGrid },
  { to: '/comparison', label: '工具对比', icon: GitCompare },
  { to: '/workflows', label: '工作流', icon: Workflow }
]

const secondaryNav = [
  { to: '/matcher', label: '帮我选', icon: Sparkles },
  { to: '/pricing', label: '订阅指南', icon: DollarSign },
  { to: '/resources', label: '资源库', icon: BookOpen }
]

const toggleMobileMenu = async () => {
  if (isMobileMenuVisible.value) {
    closeMobileMenu({ restoreFocus: true })
    return
  }
  mobileMenuRoute.value = router.currentRoute.value.fullPath
  isMobileMenuOpen.value = true
  await nextTick()
  mobileNavigationRef.value?.querySelector('a, button')?.focus()
}

const closeMobileMenu = (options = {}) => {
  const restoreFocus = options?.restoreFocus === true
  isMobileMenuOpen.value = false
  mobileMenuRoute.value = ''
  if (restoreFocus) {
    nextTick(() => mobileMenuButtonRef.value?.focus())
  }
}

const handleMobileMenuEscape = (event) => {
  if (!isMobileMenuVisible.value) return
  event.preventDefault()
  event.stopPropagation()
  closeMobileMenu({ restoreFocus: true })
}

const openLogin = () => {
  closeMobileMenu()
  authStore.openAuthModal()
}

const openProfile = () => {
  closeMobileMenu()
  isProfileOpen.value = true
}

const removeRouteGuard = router.afterEach(() => {
  closeMobileMenu()
})

watch(() => router.currentRoute.value.fullPath, closeMobileMenu)

onMounted(() => {
  window.addEventListener('popstate', closeMobileMenu)
})

onBeforeUnmount(() => {
  removeRouteGuard()
  window.removeEventListener('popstate', closeMobileMenu)
})
</script>
