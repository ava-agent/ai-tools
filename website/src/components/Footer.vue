<template>
  <footer class="bg-surface border-t border-white/10 py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <Brain class="w-8 h-8 text-primary" />
            <h3 class="text-xl font-bold gradient-text">
              AI工具全书
            </h3>
          </div>
          <p class="text-white/60 text-sm">
            2026深度集成与实战教学版 - AI工具选型指南
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">
            快速链接
          </h4>
          <ul class="space-y-2 text-white/60 text-sm">
            <li>
              <router-link
                to="/"
                class="hover:text-white transition-colors"
              >
                工具列表
              </router-link>
            </li>
            <li>
              <router-link
                to="/matcher"
                class="hover:text-white transition-colors"
              >
                工具匹配
              </router-link>
            </li>
            <li>
              <router-link
                to="/pricing"
                class="hover:text-white transition-colors"
              >
                订阅指南
              </router-link>
            </li>
            <li>
              <router-link
                to="/workflows"
                class="hover:text-white transition-colors"
              >
                工作流
              </router-link>
            </li>
            <li>
              <router-link
                to="/comparison"
                class="hover:text-white transition-colors"
              >
                对比分析
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">
            相关资源
          </h4>
          <ul class="space-y-2 text-white/60 text-sm">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >GitHub</a>
            </li>
            <li>
              <a
                href="https://docs.example.com"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition-colors"
              >文档</a>
            </li>
            <li>
              <a
                href="mailto:contact@example.com"
                class="hover:text-white transition-colors"
              >联系我们</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
        <p>&copy; 2026 AI工具全书项目组. 保留所有权利。</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Brain } from 'lucide-vue-next'
</script>
