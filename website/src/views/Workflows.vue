<template>
  <div class="min-h-screen bg-background">
    <div class="max-w-[960px] mx-auto px-5 py-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1
          class="text-[28px] font-bold text-white mb-4"
        >
          AI 工作流最佳实践
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">
          基于真实项目经验总结的 AI 工作流方案，帮助您高效使用 AI 工具
        </p>
      </div>

      <!-- Workflow Tabs -->
      <div class="mb-8">
        <div class="flex flex-wrap gap-2 justify-center">
          <button
            v-for="workflow in workflows"
            :key="workflow.id"
            class="pill cursor-pointer"
            :class="selectedWorkflow === workflow.id ? 'pill-active' : 'pill-inactive'"
            :aria-pressed="selectedWorkflow === workflow.id"
            :data-testid="`workflow-tab-${workflow.id}`"
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
        class="mb-12"
      >
        <div class="workflow-detail-card glass-card p-4">
          <div class="mb-6">
            <h2 class="text-3xl font-bold text-white mb-2">
              {{ currentWorkflow.nameZh }}
            </h2>
            <p class="text-lg text-white/70">
              {{ currentWorkflow.description }}
            </p>
          </div>

          <!-- Recommended Stack -->
          <div
            v-if="currentRecommendedStack.length"
            class="mb-8"
          >
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <Target class="w-5 h-5 text-[#0a84ff] mr-2" />
              推荐工具栈
            </h3>
            <div class="grid md:grid-cols-2 gap-3">
              <div
                v-for="item in currentRecommendedStack"
                :key="`${item.role}-${item.toolName}`"
                class="border-l-2 border-white/[0.12] py-2 pl-4"
              >
                <div class="flex items-center justify-between gap-3 mb-2">
                  <span class="text-[12px] font-semibold text-[#0a84ff]">{{ item.role }}</span>
                  <span
                    v-if="item.tool"
                    :class="getWorkflowVerificationClass(item.tool)"
                    :title="getWorkflowVerification(item.tool).description"
                  >
                    {{ getWorkflowVerification(item.tool).label }}
                  </span>
                </div>
                <router-link
                  v-if="item.tool"
                  :to="{ name: 'tool-detail', params: { id: item.tool.id } }"
                  class="text-base font-semibold text-white hover:text-primary transition-colors"
                >
                  {{ item.tool.name }}
                </router-link>
                <div
                  v-else
                  class="text-base font-semibold text-white"
                >
                  {{ item.toolName }}
                </div>
                <p class="text-xs text-white/55 leading-relaxed mt-2">
                  {{ item.reason }}
                </p>
                <p
                  v-if="item.tool && getWorkflowVerification(item.tool).lastVerified"
                  class="text-[11px] text-white/35 mt-2"
                >
                  核验于 {{ getWorkflowVerification(item.tool).lastVerified }}
                </p>
              </div>
            </div>
          </div>

          <!-- Steps -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <ListOrdered class="w-5 h-5 text-[#0a84ff] mr-2" />
              执行步骤
            </h3>
            <div class="space-y-4">
              <div
                v-for="step in currentWorkflow.steps"
                :key="step.step"
                class="border-l-2 border-white/[0.12] py-2 pl-4 flex flex-col items-start gap-3 sm:flex-row"
                :data-testid="`workflow-step-${step.step}`"
              >
                <div class="flex-shrink-0 w-10 h-10 bg-[#0a84ff]/20 rounded-full flex items-center justify-center sm:mr-1">
                  <span class="text-[#0a84ff] font-bold">{{ step.step }}</span>
                </div>
                <div
                  class="min-w-0 flex-1"
                  :data-testid="`workflow-step-content-${step.step}`"
                >
                  <div
                    class="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center"
                    :data-testid="`workflow-step-action-row-${step.step}`"
                  >
                    <h4
                      class="text-lg font-semibold text-white break-words sm:mr-3"
                      :data-testid="`workflow-step-action-${step.step}`"
                    >
                      {{ step.action }}
                    </h4>
                    <div
                      v-if="resolveWorkflowStepTools(step).length"
                      class="flex flex-wrap items-center gap-1.5"
                    >
                      <template
                        v-for="tool in resolveWorkflowStepTools(step)"
                        :key="tool.id"
                      >
                        <router-link
                          :to="{ name: 'tool-detail', params: { id: tool.id } }"
                          class="break-words px-2 py-1 bg-[#0a84ff]/20 text-[#0a84ff] text-xs rounded-full hover:bg-[#0a84ff]/30 transition-colors"
                          :data-testid="`workflow-step-${step.step}-tool-${tool.id}`"
                        >
                          {{ tool.name }}
                        </router-link>
                        <span
                          :class="getWorkflowVerificationClass(tool)"
                          :title="getWorkflowVerification(tool).description"
                        >
                          {{ getWorkflowVerification(tool).label }}
                        </span>
                      </template>
                    </div>
                    <span
                      v-else
                      class="break-words px-2 py-1 bg-[#0a84ff]/20 text-[#0a84ff] text-xs rounded-full"
                    >
                      {{ step.tool }}
                    </span>
                  </div>
                  <p class="text-white/60 text-sm break-words">
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
            class="rounded-lg border border-white/[0.06] border-l-2 border-l-[#0a84ff] bg-white/[0.03] p-4"
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
              <ImageIcon class="w-5 h-5 text-[#0a84ff] mr-2" />
              流程图
            </h4>
            <div class="border-l-2 border-white/[0.12] py-2 pl-4">
              <img
                :src="resolvePublicAssetPath(currentWorkflow.flowImage)"
                :alt="currentWorkflow.nameZh + ' 流程图'"
                class="w-full rounded-lg"
                loading="lazy"
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Pitfalls Guide -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <AlertTriangle class="w-6 h-6 text-yellow-500 mr-2" />
          避坑指南
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(categoryPitfalls, category) in pitfalls"
            :key="category"
            class="glass-card p-4"
          >
            <h3 class="text-lg font-bold text-white mb-4 flex items-center">
              <component
                :is="getCategoryIcon(category)"
                class="w-5 h-5 text-[#0a84ff] mr-2"
              />
              {{ getCategoryLabel(category) }}
            </h3>
            <ul class="space-y-4">
              <li
                v-for="pitfall in categoryPitfalls"
                :key="pitfall.issue"
                class="border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
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
      <div class="mb-12">
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <FileText class="w-6 h-6 text-blue-500 mr-2" />
          Prompt 模板
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="template in promptTemplates"
            :key="template.name"
            class="glass-card p-4"
          >
            <h3 class="text-lg font-bold text-white mb-3">
              {{ template.name }}
            </h3>
            <div class="bg-black/30 rounded-lg p-4 font-mono text-sm text-white/80 overflow-x-auto">
              <pre class="whitespace-pre-wrap">{{ template.template }}</pre>
            </div>
            <button
              class="mt-3 w-full btn-capsule text-sm py-2"
              @click="copyTemplate(template.template)"
            >
              <Copy class="w-4 h-4 inline mr-2" />
              复制模板
            </button>
          </div>
        </div>
      </div>

      <!-- Best Practices -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
          <Award class="w-6 h-6 text-yellow-500 mr-2" />
          最佳实践原则
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="glass-card p-4">
            <h3 class="text-lg font-bold text-white mb-4">
              黄金法则
            </h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Target class="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <strong class="text-white">任务拆分</strong>
                  <p class="text-sm text-white/60">
                    将大任务拆分成 3-7 个子任务，每步验证
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Lock class="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <strong class="text-white">明确边界</strong>
                  <p class="text-sm text-white/60">
                    告诉 AI "允许改"和"禁止改"的目录
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Eye class="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <strong class="text-white">人工审查</strong>
                  <p class="text-sm text-white/60">
                    每步都要看 diff，不要直接接受
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Save class="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <strong class="text-white">版本控制</strong>
                  <p class="text-sm text-white/60">
                    重要节点手动创建 Git tag 作为检查点
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div class="glass-card p-4">
            <h3 class="text-lg font-bold text-white mb-4">
              禁忌事项
            </h3>
            <ul class="space-y-3 text-white/80">
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Ban class="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <strong class="text-white">不要一次改太多文件</strong>
                  <p class="text-sm text-white/60">
                    超过 10 个文件的建议分批处理
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Ban class="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <strong class="text-white">不要盲目相信输出</strong>
                  <p class="text-sm text-white/60">
                    关键结论要来源核验，交叉验证
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Ban class="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <strong class="text-white">不要上传敏感信息</strong>
                  <p class="text-sm text-white/60">
                    先脱敏再使用云模型
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Ban class="w-4 h-4 text-red-400" />
                </div>
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
  Image as ImageIcon,
  Target,
  Lock,
  Eye,
  Save,
  Ban
} from 'lucide-vue-next'
import { useUIStore } from '../stores/ui'
import { useWorkflowCatalogStore } from '../stores/workflowCatalog'
import { getCategoryLabel, resolveToolId as _resolveToolId, resolveToolLinks } from '../utils/helpers'
import { getToolVerification, getVerificationBadgeClass } from '../utils/toolMetadata'
import { resolvePublicAssetPath } from '../utils/publicAssets.js'
import { workflows, pitfalls, promptTemplates } from '../data/workflows.js'

const uiStore = useUIStore()
const toolsStore = useWorkflowCatalogStore()

const WORKFLOW_EXCLUDE_NAMES = ['手动', '手动测试', 'Git', '自动化测试']

function resolveToolId(name) {
  return _resolveToolId(name, toolsStore.tools, WORKFLOW_EXCLUDE_NAMES)
}

function resolveWorkflowTool(name) {
  const id = resolveToolId(name)
  if (!id) return null
  return toolsStore.getToolById(id) || null
}

function resolveWorkflowStepTools(step) {
  return resolveToolLinks(step.tool, toolsStore.tools, step.toolIds)
    .map(link => toolsStore.getToolById(link.id))
    .filter(Boolean)
}

const selectedWorkflow = ref(workflows[0]?.id || 'daily-dev')

const currentWorkflow = computed(() => {
  return workflows.find(w => w.id === selectedWorkflow.value)
})

const currentRecommendedStack = computed(() => {
  return (currentWorkflow.value?.recommendedStack || []).map((item) => {
    return {
      ...item,
      toolName: item.tool,
      tool: resolveWorkflowTool(item.tool),
    }
  })
})

function getWorkflowVerification(tool) {
  return getToolVerification(tool)
}

function getWorkflowVerificationClass(tool) {
  return getVerificationBadgeClass(tool)
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
    uiStore.showToast('模板已复制到剪贴板')
  }).catch(() => {
    uiStore.showToast('复制失败，请手动复制', 'error')
  })
}
</script>
