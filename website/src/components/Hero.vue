<template>
  <section class="max-w-[1180px] mx-auto px-5 pt-7 pb-0">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div class="max-w-2xl">
        <p class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
          AI 工具决策工作台
        </p>
        <h1
          class="text-[30px] font-bold text-white sm:text-[34px]"
          style="line-height: 1.1"
        >
          按场景筛选 AI 工具
        </h1>
        <p class="mt-3 max-w-xl text-sm leading-6 text-slate-300/75">
          先看编辑结论、价格和风险，再按核验状态缩小范围并进入详情页检查来源。适合做采购短名单、个人工具栈和团队 AI 工作流选型。
        </p>
      </div>

      <div class="grid grid-cols-2 gap-2 sm:grid-cols-5 lg:min-w-[560px]">
        <div
          v-for="(metric, metricIndex) in metrics"
          :key="metric.label"
          class="rounded-lg border border-[#2c352d]/80 bg-[#111410]/80 px-3 py-2"
        >
          <div class="text-[11px] text-[#9aa596]">
            {{ metric.label }}
          </div>
          <div
            class="mt-1 text-xl font-semibold text-white tabular-nums"
            :data-testid="
              metricIndex === metrics.length - 1 ? 'hero-current-round-count' : undefined
            "
          >
            {{ metric.value }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCatalogStore } from '../stores/catalog'

const toolsStore = useCatalogStore()
const toolCount = computed(() => toolsStore.tools.length)
const categoryCount = computed(() => toolsStore.categories.length - 1) // exclude 'all'
const verifiedCount = computed(
  () => toolsStore.tools.filter((tool) => tool.verificationStatus === 'verified').length
)
const latestVerificationDate = computed(() =>
  toolsStore.tools.reduce(
    (latest, tool) => tool.lastVerified && tool.lastVerified > latest ? tool.lastVerified : latest,
    ''
  )
)
const refreshedTodayCount = computed(() =>
  toolsStore.tools.filter((tool) => tool.lastVerified === latestVerificationDate.value).length
)
const publicSourceCount = computed(() =>
  toolsStore.tools.reduce((total, tool) => {
    return total + (tool.publicSourceCount || 0)
  }, 0)
)

const metrics = computed(() => [
  { label: '工具', value: toolCount.value },
  { label: '类别', value: categoryCount.value },
  { label: '已核验', value: verifiedCount.value },
  { label: '公开来源', value: publicSourceCount.value },
  { label: '本轮更新', value: refreshedTodayCount.value }
])
</script>
