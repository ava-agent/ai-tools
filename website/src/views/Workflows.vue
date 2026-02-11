<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          AI 工作流最佳实践
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          基于真实项目经验总结的 AI 工作流方案，帮助您高效使用 AI 工具
        </p>
      </div>

      <!-- Workflow Tabs -->
      <div class="max-w-5xl mx-auto mb-8">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="workflow in workflows"
            :key="workflow.id"
            class="px-4 py-2 rounded-lg transition-all"
            :class="selectedWorkflow === workflow.id ? 'bg-primary text-white' : 'bg-surface text-white/80 hover:bg-surface/80'"
            @click="selectedWorkflow = workflow.id"
          >
            <component
              :is="getWorkflowIcon(workflow.id)"
              class="w-4 h-4 inline mr-2"
            />
            {{ workflow.nameZh }}
          </button>
        </div>
      </div>

      <!-- Workflow Detail -->
      <div
        v-if="currentWorkflow"
        class="max-w-5xl mx-auto mb-12"
      >
        <div class="card">
          <div class="mb-6">
            <h2 class="text-3xl font-bold text-white mb-2">
              {{ currentWorkflow.nameZh }}
            </h2>
            <p class="text-lg text-white/70">
              {{ currentWorkflow.description }}
            </p>
          </div>

          <!-- Steps -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <ListOrdered class="w-5 h-5 text-primary mr-2" />
              执行步骤
            </h3>
            <div class="space-y-4">
              <div
                v-for="(step, index) in currentWorkflow.steps"
                :key="step.step"
                class="flex items-start p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div class="flex-shrink-0 w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <span class="text-primary font-bold">{{ step.step }}</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center mb-2">
                    <h4 class="text-lg font-semibold text-white mr-3">
                      {{ step.action }}
                    </h4>
                    <span class="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                      {{ step.tool }}
                    </span>
                  </div>
                  <p class="text-white/60 text-sm">
                    <Lightbulb class="w-4 h-4 inline text-yellow-500 mr-1" />
                    {{ step.tip }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Tips -->
          <div
            v-if="currentWorkflow.tips && currentWorkflow.tips.length"
            class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4"
          >
            <h4 class="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <Info class="w-5 h-5 mr-2" />
              关键提示
            </h4>
            <ul class="space-y-2 text-white/80">
              <li
                v-for="(tip, index) in currentWorkflow.tips"
                :key="index"
                class="flex items-start"
              >
                <ArrowRight class="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span>{{ tip }}</span>
              </li>
            </ul>
          </div>

          <!-- Flow Image -->
          <div
            v-if="currentWorkflow.flowImage"
            class="mt-6"
          >
            <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
              <ImageIcon class="w-5 h-5 text-primary mr-2" />
              流程图
            </h4>
            <div class="bg-white/5 rounded-xl p-4 border border-white/10">
              <img
                :src="currentWorkflow.flowImage"
                :alt="currentWorkflow.nameZh + ' 流程图'"
                class="w-full rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Pitfalls Guide -->
      <div class="max-w-5xl mx-auto mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <AlertTriangle class="w-6 h-6 text-yellow-500 mr-2" />
          避坑指南
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(categoryPitfalls, category) in pitfalls"
            :key="category"
            class="card"
          >
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <component
                :is="getCategoryIcon(category)"
                class="w-5 h-5 text-primary mr-2"
              />
              {{ getCategoryLabel(category) }}
            </h3>
            <ul class="space-y-4">
              <li
                v-for="pitfall in categoryPitfalls"
                :key="pitfall.issue"
                class="border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <div class="flex items-start mb-2">
                  <X class="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-white/90 text-sm font-medium">{{ pitfall.issue }}</span>
                </div>
                <div class="flex items-start ml-6">
                  <CheckCircle class="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span class="text-white/70 text-sm">{{ pitfall.solution }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Prompt Templates -->
      <div class="max-w-4xl mx-auto mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <FileText class="w-6 h-6 text-blue-500 mr-2" />
          Prompt 模板
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="template in promptTemplates"
            :key="template.name"
            class="card"
          >
            <h3 class="text-lg font-bold text-white mb-3">
              {{ template.name }}
            </h3>
            <div class="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 overflow-x-auto">
              <pre class="whitespace-pre-wrap">{{ template.template }}</pre>
            </div>
            <button
              class="mt-3 w-full btn-secondary text-sm py-2"
              @click="copyTemplate(template.template)"
            >
              <Copy class="w-4 h-4 inline mr-2" />
              复制模板
            </button>
          </div>
        </div>
      </div>

      <!-- Best Practices -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Award class="w-6 h-6 text-yellow-500 mr-2" />
          最佳实践原则
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card">
            <h3 class="text-lg font-bold text-white mb-4">
              黄金法则
            </h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-start">
                <span class="text-2xl mr-3">🎯</span>
                <div>
                  <strong class="text-white">任务拆分</strong>
                  <p class="text-sm text-white/60">
                    将大任务拆分成 3-7 个子任务，每步验证
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-2xl mr-3">🔒</span>
                <div>
                  <strong class="text-white">明确边界</strong>
                  <p class="text-sm text-white/60">
                    告诉 AI "允许改"和"禁止改"的目录
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-2xl mr-3">👁️</span>
                <div>
                  <strong class="text-white">人工审查</strong>
                  <p class="text-sm text-white/60">
                    每步都要看 diff，不要直接接受
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-2xl mr-3">💾</span>
                <div>
                  <strong class="text-white">版本控制</strong>
                  <p class="text-sm text-white/60">
                    重要节点手动创建 Git tag 作为检查点
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="card">
            <h3 class="text-lg font-bold text-white mb-4">
              禁忌事项
            </h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-start">
                <span class="text-2xl mr-3">🚫</span>
                <div>
                  <strong class="text-white">不要一次改太多文件</strong>
                  <p class="text-sm text-white/60">
                    超过 10 个文件的建议分批处理
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-2xl mr-3">🚫</span>
                <div>
                  <strong class="text-white">不要盲目相信输出</strong>
                  <p class="text-sm text-white/60">
                    关键结论要来源核验，交叉验证
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-2xl mr-3">🚫</span>
                <div>
                  <strong class="text-white">不要上传敏感信息</strong>
                  <p class="text-sm text-white/60">
                    先脱敏再使用云模型
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <span class="text-2xl mr-3">🚫</span>
                <div>
                  <strong class="text-white">不要忽视成本变化</strong>
                  <p class="text-sm text-white/60">
                    定期检查订阅和用量
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  ListOrdered,
  Lightbulb,
  Info,
  ArrowRight,
  AlertTriangle,
  CheckCircle,
  X,
  FileText,
  Copy,
  Award,
  Monitor,
  Terminal,
  Brain,
  Code,
  Image as ImageIcon
} from 'lucide-vue-next'
import { workflows, pitfalls, promptTemplates } from '../data/workflows.js'

const selectedWorkflow = ref(workflows[0]?.id || 'daily-dev')

const currentWorkflow = computed(() => {
  return workflows.find(w => w.id === selectedWorkflow.value)
})

function getCategoryLabel(category) {
  const labels = {
    ide: 'AI IDE',
    cli: 'AI CLI',
    model: 'AI 模型'
  }
  return labels[category] || category
}

function getCategoryIcon(category) {
  const icons = {
    ide: Monitor,
    cli: Terminal,
    model: Brain
  }
  return icons[category] || Code
}

function getWorkflowIcon(workflowId) {
  const icons = {
    'daily-dev': Code,
    'rapid-prototype': Monitor,
    'design-flow': Brain,
    'refactor-flow': Terminal,
    'legacy-takeover': Code,
    'critical-task': Brain
  }
  return icons[workflowId] || Code
}

function copyTemplate(template) {
  navigator.clipboard.writeText(template).then(() => {
    alert('模板已复制到剪贴板')
  })
}
</script>
