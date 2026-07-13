<template>
  <footer
    class="footer-safe-bottom glass-nav border-t border-white/[0.06] pt-12 mt-16"
    role="contentinfo"
  >
    <div class="max-w-[960px] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- 品牌信息 -->
        <div>
          <router-link
            to="/"
            class="flex min-h-11 items-center gap-2 mb-4 group"
          >
            <img
              :src="brandMark"
              alt=""
              aria-hidden="true"
              class="h-9 w-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
              width="36"
              height="36"
            >
            <h3 class="text-xl font-bold text-white">
              AI工具全书
            </h3>
          </router-link>
          <p class="text-white/55 text-sm leading-relaxed">
            持续核验的实战 AI 工具选型指南
          </p>
        </div>

        <!-- 快速链接 -->
        <div>
          <h4 class="text-base font-semibold mb-4 text-white">
            快速链接
          </h4>
          <nav aria-label="页脚导航">
            <ul class="space-y-2 text-sm">
              <li
                v-for="item in navLinks"
                :key="item.to"
              >
                <router-link
                  :to="item.to"
                  class="nav-link group -mx-1 inline-flex min-h-11 items-center gap-1 rounded-lg px-1 text-white/55 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white"
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
                class="-mx-1 inline-flex min-h-11 items-center gap-1 rounded-lg px-1 text-white/55 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white group"
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
          基于
          <Heart class="w-3 h-3 text-[#ff453a] fill-[#ff453a]/20" />
          Vue 3 与 Tailwind CSS 构建
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ChevronRight, Github, FileText, Mail, ExternalLink, Heart } from 'lucide-vue-next'

const brandMark = `${import.meta.env.BASE_URL}brand/ai-tools-mark-2026-64.png`

const navLinks = [
  { to: '/tools', label: '工具列表' },
  { to: '/matcher', label: '工具匹配' },
  { to: '/pricing', label: '订阅指南' },
  { to: '/workflows', label: '工作流' },
  { to: '/resources', label: '资源中心' },
  { to: '/comparison', label: '对比分析' }
]

const footerResources = [
  { label: 'GitHub 仓库', href: 'https://github.com/ava-agent/ai-tools', icon: Github, external: true },
  { label: '提交反馈', href: 'https://github.com/ava-agent/ai-tools/issues', icon: FileText, external: true },
  { label: '联系作者', href: 'https://github.com/ava-agent', icon: Mail, external: true }
]
</script>

<style scoped>
.footer-safe-bottom {
  padding-bottom: calc(6.5rem + env(safe-area-inset-bottom));
}

@media (min-width: 640px) {
  .footer-safe-bottom {
    padding-bottom: 3rem;
  }
}

.nav-link.router-link-active {
  color: white;
}

.nav-link.router-link-active span:last-child {
  width: 50%;
}
</style>
