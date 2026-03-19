<template>
  <header class="sticky top-0 z-50 glass-nav">
    <div class="max-w-[960px] mx-auto flex items-center h-12 px-5 gap-3">
      <!-- Logo -->
      <router-link
        to="/"
        class="flex items-center gap-2 flex-shrink-0"
      >
        <div
          class="w-6 h-6 rounded-md flex items-center justify-center text-xs"
          style="background: linear-gradient(135deg, #0a84ff, #bf5af2);"
        >
          <Brain class="w-3.5 h-3.5 text-white" />
        </div>
        <span class="text-[15px] font-semibold text-white tracking-tight hidden sm:block">AI Tools</span>
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
          v-slot="{ navigate, isExactActive }"
          :to="item.to"
          custom
        >
          <button
            class="segment"
            :class="{ 'segment-active': isExactActive }"
            @click="navigate"
          >
            {{ item.label }}
          </button>
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
          class="hidden lg:block text-xs text-white/45 hover:text-white transition-colors px-2"
        >
          {{ item.label }}
        </router-link>

        <!-- Search trigger -->
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-control text-xs cursor-pointer"
          style="background: rgba(255,255,255,0.06);"
          @click="$router.push('/')"
        >
          <Search class="w-3.5 h-3.5 text-white/25" />
          <span class="text-white/25 hidden sm:inline">搜索</span>
        </button>

        <!-- Auth avatar -->
        <button
          v-if="authStore.isAuthenticated"
          class="flex items-center p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
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
          class="md:hidden p-2 rounded-lg text-white/45 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <Menu
            v-if="!isMobileMenuOpen"
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
        v-if="isMobileMenuOpen"
        class="md:hidden px-5 pb-4 pt-2 border-t border-white/[0.06]"
      >
        <div class="flex flex-col gap-1">
          <router-link
            v-for="item in [...mainNav, ...secondaryNav]"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            @click="isMobileMenuOpen = false"
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
import { ref } from 'vue'
import { Brain, Menu, X, Search, Scale, BarChart3, GitCompare, Workflow, BookOpen, HelpCircle, UserCircle } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import UserProfilePanel from './gamification/UserProfilePanel.vue'

const authStore = useAuthStore()
const isMobileMenuOpen = ref(false)
const isProfileOpen = ref(false)

const mainNav = [
  { to: '/', label: '发现', icon: Search },
  { to: '/comparison', label: '对比', icon: GitCompare },
  { to: '/matcher', label: '匹配', icon: Scale },
  { to: '/pricing', label: '定价', icon: BarChart3 },
]

const secondaryNav = [
  { to: '/workflows', label: '工作流', icon: Workflow },
  { to: '/resources', label: '资源', icon: BookOpen },
  { to: '/quiz', label: '竞猜', icon: HelpCircle },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
