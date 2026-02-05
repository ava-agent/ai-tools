<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    style="background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.08);"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3 group cursor-pointer">
          <div class="relative">
            <Brain class="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <div class="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300" />
          </div>
          <h1 class="text-xl font-bold gradient-text">
            AI工具全书
          </h1>
        </div>

        <!-- 桌面导航 -->
        <div class="hidden md:flex items-center space-x-1">
          <router-link
            to="/"
            class="nav-link relative px-4 py-2 text-white/70 hover:text-white transition-all duration-300"
            active-class="text-white"
          >
            工具列表
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </router-link>
          <router-link
            to="/matcher"
            class="nav-link relative px-4 py-2 text-white/70 hover:text-white transition-all duration-300"
            active-class="text-white"
          >
            工具匹配
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </router-link>
          <router-link
            to="/pricing"
            class="nav-link relative px-4 py-2 text-white/70 hover:text-white transition-all duration-300"
            active-class="text-white"
          >
            订阅指南
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </router-link>
          <router-link
            to="/workflows"
            class="nav-link relative px-4 py-2 text-white/70 hover:text-white transition-all duration-300"
            active-class="text-white"
          >
            工作流
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </router-link>
          <router-link
            to="/comparison"
            class="nav-link relative px-4 py-2 text-white/70 hover:text-white transition-all duration-300"
            active-class="text-white"
          >
            对比分析
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          </router-link>
        </div>

        <!-- 移动菜单按钮 -->
        <div class="flex items-center space-x-4">
          <button
            class="md:hidden text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
            @click="toggleMobileMenu"
          >
            <Menu class="w-6 h-6" />
          </button>
        </div>
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
          class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4"
        >
          <div class="flex flex-col space-y-3">
            <router-link
              to="/"
              class="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex items-center">
                <span class="w-2 h-2 rounded-full bg-primary mr-3" />
                工具列表
              </span>
            </router-link>
            <router-link
              to="/matcher"
              class="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex items-center">
                <span class="w-2 h-2 rounded-full bg-accent mr-3" />
                工具匹配
              </span>
            </router-link>
            <router-link
              to="/pricing"
              class="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex items-center">
                <span class="w-2 h-2 rounded-full bg-green-400 mr-3" />
                订阅指南
              </span>
            </router-link>
            <router-link
              to="/workflows"
              class="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex items-center">
                <span class="w-2 h-2 rounded-full bg-purple-400 mr-3" />
                工作流
              </span>
            </router-link>
            <router-link
              to="/comparison"
              class="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              @click="isMobileMenuOpen = false"
            >
              <span class="flex items-center">
                <span class="w-2 h-2 rounded-full bg-yellow-400 mr-3" />
                对比分析
              </span>
            </router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Brain, Menu } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
.nav-link.router-link-active {
  color: white;
}

.nav-link.router-link-active span:last-child {
  width: 100%;
}
</style>
