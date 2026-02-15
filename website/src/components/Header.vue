<template>
  <header class="sticky top-0 z-50 transition-all duration-300 glass-effect">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link
          to="/"
          class="flex items-center space-x-3 group cursor-pointer"
          aria-label="AI工具全书 首页"
        >
          <div class="relative">
            <Brain class="w-9 h-9 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div class="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300" />
          </div>
          <span class="text-xl font-bold gradient-text hidden sm:block">
            AI工具全书
          </span>
        </router-link>

        <!-- 桌面导航 -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="nav-link group relative px-4 py-2.5 text-white/60 hover:text-white transition-all duration-200 rounded-lg hover:bg-white/5"
            active-class="text-white bg-white/5"
          >
            <span class="flex items-center gap-2">
              <component
                :is="item.icon"
                class="w-4 h-4"
              />
              {{ item.label }}
            </span>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2" />
          </router-link>
        </div>

        <!-- 右侧: 游戏化元素 + 移动菜单按钮 -->
        <div class="flex items-center space-x-3">
          <!-- 连续打卡 (桌面) -->
          <StreakCounter class="hidden lg:flex" />

          <!-- 等级徽章 -->
          <LevelBadge
            size="sm"
            class="hidden sm:flex"
            @click="isProfileOpen = true"
          />

          <!-- 移动菜单按钮 -->
          <button
            class="lg:hidden p-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer"
            :aria-expanded="isMobileMenuOpen"
            aria-label="切换菜单"
            @click="toggleMobileMenu"
          >
            <Menu
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
            />
            <X
              v-else
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <!-- XP 进度条 (桌面) -->
      <div class="hidden lg:block mt-2">
        <XpBar :compact="true" />
      </div>

      <!-- 移动端菜单 -->
      <transition
        enter="transition ease-out duration-200"
        enter-from="opacity-0 -translate-y-2"
        enter-to="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leave-from="opacity-100 translate-y-0"
        leave-to="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4"
        >
          <!-- 移动端 XP + 等级 -->
          <div class="flex items-center gap-3 mb-4 px-2">
            <LevelBadge
              size="sm"
              @click="isProfileOpen = true; isMobileMenuOpen = false"
            />
            <div class="flex-1">
              <XpBar :compact="true" />
            </div>
            <StreakCounter />
          </div>

          <div class="grid grid-cols-2 gap-2">
            <router-link
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="flex flex-col items-center justify-center p-4 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer min-h-[88px]"
              @click="isMobileMenuOpen = false"
            >
              <component
                :is="item.icon"
                class="w-6 h-6 mb-2"
                :class="item.iconColor"
              />
              <span class="text-sm font-medium">{{ item.label }}</span>
            </router-link>
          </div>
        </div>
      </transition>
    </nav>

    <!-- User Profile Panel -->
    <UserProfilePanel
      :is-open="isProfileOpen"
      @close="isProfileOpen = false"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Brain, Menu, X, Search, Scale, Workflow, GitCompare, BarChart3, BookOpen, HelpCircle } from 'lucide-vue-next'
import LevelBadge from './gamification/LevelBadge.vue'
import XpBar from './gamification/XpBar.vue'
import StreakCounter from './gamification/StreakCounter.vue'
import UserProfilePanel from './gamification/UserProfilePanel.vue'

const isMobileMenuOpen = ref(false)
const isProfileOpen = ref(false)

const navItems = [
  { to: '/', label: '工具列表', icon: Search },
  { to: '/matcher', label: '工具匹配', icon: Scale },
  { to: '/pricing', label: '订阅指南', icon: BarChart3, iconColor: 'text-green-400' },
  { to: '/workflows', label: '工作流', icon: Workflow, iconColor: 'text-purple-400' },
  { to: '/resources', label: '资源中心', icon: BookOpen, iconColor: 'text-cyan-400' },
  { to: '/comparison', label: '对比分析', icon: GitCompare, iconColor: 'text-yellow-400' },
  { to: '/quiz', label: '趣味竞猜', icon: HelpCircle, iconColor: 'text-pink-400' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.nav-link.router-link-active {
  color: white;
}

.nav-link.router-link-active span:last-child {
  width: 50%;
}
</style>
