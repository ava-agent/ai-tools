<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4 gradient-text">
          工具对比
        </h1>
        <p class="text-xl text-white/80">
          横向对比主流 AI 开发工具的核心特性
        </p>
      </div>

      <div class="card overflow-x-auto">
        <table class="w-full min-w-[800px]">
          <thead>
            <tr class="border-b border-white/10">
              <th class="text-left p-4 text-white font-semibold">
                工具名称
              </th>
              <th class="text-left p-4 text-white font-semibold">
                开发者
              </th>
              <th class="text-left p-4 text-white font-semibold">
                类别
              </th>
              <th class="text-left p-4 text-white font-semibold">
                评分
              </th>
              <th class="text-left p-4 text-white font-semibold">
                定价
              </th>
              <th class="text-left p-4 text-white font-semibold">
                核心模型
              </th>
              <th class="text-left p-4 text-white font-semibold">
                操作
              </th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="tool in tools" 
              :key="tool.id"
              class="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td class="p-4">
                <div class="flex items-center">
                  <span class="font-semibold text-white">{{ tool.name }}</span>
                  <div class="flex flex-wrap gap-1 ml-2">
                    <span
                      v-for="tag in (tool.tags || []).slice(0, 2)"
                      :key="tag"
                      class="px-2 py-0.5 text-xs rounded-full text-white"
                      :class="getTagColor(tag)"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </td>
              <td class="p-4 text-white/80">
                {{ tool.developer }}
              </td>
              <td class="p-4">
                <span class="px-2 py-1 bg-primary/20 text-primary text-sm rounded-full">
                  {{ tool.category }}
                </span>
              </td>
              <td class="p-4">
                <div class="flex items-center space-x-1">
                  <Star
                    v-for="i in 5"
                    :key="i"
                    class="w-5 h-5"
                    :class="i <= (tool.personalExperience?.rating || 0) ? 'text-primary fill-primary' : 'text-gray-600'"
                  />
                </div>
              </td>
              <td class="p-4 text-white/80">
                {{ tool.versions?.[0]?.pricing || 'N/A' }}
              </td>
              <td class="p-4 text-white/80 text-sm">
                {{ tool.versions?.[0]?.models || 'N/A' }}
              </td>
              <td class="p-4">
                <a
                  :href="`/tool/${tool.id}`"
                  class="text-primary hover:text-primary/80 transition-colors"
                >
                  查看详情 →
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div class="card">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <CheckCircle class="w-5 h-5 text-green-500 mr-2" />
            推荐场景
          </h3>
          <ul class="space-y-2 text-white/80">
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>日常主力开发：Cursor</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>预算有限团队：Trae</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>代码审查任务：Claude</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-500 mr-2">✓</span>
              <span>国产开源方案：DeepSeek</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <Zap class="w-5 h-5 text-yellow-500 mr-2" />
            核心优势对比
          </h3>
          <ul class="space-y-3 text-white/80">
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Cursor：</span>
              <span>Composer-1.5 多文件协同能力最强</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Trae：</span>
              <span>完全免费，国产模型深度集成</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">Claude：</span>
              <span>200K 上下文窗口，代码理解能力强</span>
            </li>
            <li class="flex items-start">
              <span class="font-semibold text-primary mr-2">DeepSeek：</span>
              <span>推理能力最强，价格最低</span>
            </li>
          </ul>
        </div>

        <div class="card">
          <h3 class="text-xl font-bold text-white mb-4 flex items-center">
            <TrendingUp class="w-5 h-5 text-blue-500 mr-2" />
            选型建议
          </h3>
          <ul class="space-y-2 text-white/80">
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">1.</span>
              <span>根据团队预算选择付费或免费方案</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">2.</span>
              <span>考虑网络环境对国内工具的影响</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">3.</span>
              <span>评估团队对 AI 功能的需求深度</span>
            </li>
            <li class="flex items-start">
              <span class="text-blue-500 mr-2">4.</span>
              <span>优先选择支持多模型的工具</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../stores/tools'
import { getTagColor } from '../utils/helpers'
import { CheckCircle, Zap, TrendingUp, Star } from 'lucide-vue-next'

const toolsStore = useToolsStore()

const tools = computed(() => toolsStore.tools)
</script>
