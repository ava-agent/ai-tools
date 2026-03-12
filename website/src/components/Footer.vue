<template>
  <footer
    class="glass-nav border-t border-white/[0.06] py-12 mt-16"
    role="contentinfo"
  >
    <div class="max-w-[960px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- 品牌信息 -->
        <div>
          <router-link
            to="/"
            class="flex items-center gap-2 mb-4 group"
          >
            <div class="relative">
              <Brain class="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <div class="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300" />
            </div>
            <h3 class="text-xl font-bold gradient-text">
              AI工具全书
            </h3>
          </router-link>
          <p class="text-white/55 text-sm leading-relaxed">
            2026深度集成与实战教学版 - AI工具选型指南
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h4 class="text-base font-semibold mb-4 text-white">
            快速链接
          </h4>
          <nav aria-label="Footer navigation">
            <ul class="space-y-2 text-sm">
              <li
                v-for="item in navLinks"
                :key="item.to"
              >
                <router-link
                  :to="item.to"
                  class="text-white/55 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <ChevronRight class="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>

        <!-- 相关资源 -->
        <div>
          <h4 class="text-base font-semibold mb-4 text-white">
            相关资源
          </h4>
          <ul class="space-y-2 text-sm">
            <li
              v-for="item in footerResources"
              :key="item.label"
            >
              <a
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="text-white/55 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
              >
                <component
                  :is="item.icon"
                  class="w-3.5 h-3.5"
                />
                {{ item.label }}
                <ExternalLink
                  v-if="item.external"
                  class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/55">
        <p>&copy; 2026 AI工具全书. 保留所有权利。</p>
        <p class="flex items-center gap-1">
          Built with
          <Heart class="w-3 h-3 text-[#ff453a] fill-[#ff453a]/20" />
          using Vue 3 + Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Brain, ChevronRight, Github, FileText, Mail, ExternalLink, Heart } from 'lucide-vue-next'

const navLinks = [
  { to: '/', label: '工具列表' },
  { to: '/matcher', label: '工具匹配' },
  { to: '/pricing', label: '订阅指南' },
  { to: '/workflows', label: '工作流' },
  { to: '/resources', label: '资源中心' },
  { to: '/comparison', label: '对比分析' }
]

const footerResources = [
  { label: 'GitHub 仓库', href: 'https://github.com/ava-agent/ai-tools', icon: Github, external: true },
  { label: '使用文档', href: '/docs', icon: FileText, external: false },
  { label: '联系我们', href: 'mailto:contact@example.com', icon: Mail, external: false }
]
</script>

<style scoped>
.nav-link.router-link-active {
  color: white;
}

.nav-link.router-link-active span:last-child {
  width: 50%;
}
</style>
