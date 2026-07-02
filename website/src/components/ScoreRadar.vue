<script setup>
import { computed } from 'vue'

const props = defineProps({
  tool: { type: Object, required: true },
})

const dimensions = computed(() => {
  const t = props.tool
  const pe = t.personalExperience || {}

  const codeAbility = Math.min((pe.rating || 0) * 20, 100)
  const easeOfUse = Math.min(((t.pros?.length || 0) >= 5 ? 80 : (t.pros?.length || 0) * 16) + (t.freeQuota ? 10 : 0), 100)
  const chineseSupport = Math.min((t.chineseSupport || 0) * 20, 100)

  let costEffect = 40
  if (t.freeQuota && t.freeQuota.includes('免费')) costEffect = 90
  else if (t.freeQuota && t.freeQuota !== '无') costEffect = 70
  const versions = t.versions || []
  const hasFree = versions.some(v => v.pricing && (v.pricing.includes('免费') || v.pricing.includes('$0') || v.pricing === '开源免费'))
  if (hasFree) costEffect = Math.max(costEffect, 85)

  const ecosystem = Math.min((t.tags?.length || 0) * 12, 100)

  return [
    { label: '能力', value: codeAbility },
    { label: '易用', value: easeOfUse },
    { label: '中文', value: chineseSupport },
    { label: '性价比', value: costEffect },
    { label: '生态', value: ecosystem },
  ]
})

const size = 200
const center = size / 2
const radius = 70
const angleStep = (2 * Math.PI) / 5
const startAngle = -Math.PI / 2

function getPoint(index, value) {
  const angle = startAngle + index * angleStep
  const r = (value / 100) * radius
  return {
    x: center + r * Math.cos(angle),
    y: center + r * Math.sin(angle),
  }
}

const polygonPoints = computed(() => {
  return dimensions.value
    .map((d, i) => {
      const p = getPoint(i, d.value)
      return `${p.x},${p.y}`
    })
    .join(' ')
})

const gridLevels = [25, 50, 75, 100]

function getGridPolygon(level) {
  return Array.from({ length: 5 }, (_, i) => {
    const p = getPoint(i, level)
    return `${p.x},${p.y}`
  }).join(' ')
}

const labelPositions = computed(() => {
  return dimensions.value.map((d, i) => {
    const p = getPoint(i, 115)
    return { ...d, x: p.x, y: p.y }
  })
})

const radarLabel = computed(() => {
  const toolName = props.tool.name || '\u5f53\u524d\u5de5\u5177'
  const scores = dimensions.value
    .map(d => `${d.label} ${Math.round(d.value)}/100`)
    .join('\uff0c')
  return `\u8bc4\u5206\u96f7\u8fbe\u56fe\uff1a${toolName}\uff0c${scores}`
})
</script>

<template>
  <div class="flex flex-col items-center">
    <svg
      :viewBox="`0 0 ${size} ${size}`"
      class="w-48 h-48"
      role="img"
      :aria-label="radarLabel"
    >
      <title>{{ props.tool.name || '\u5f53\u524d\u5de5\u5177' }} \u8bc4\u5206\u96f7\u8fbe\u56fe</title>
      <desc>{{ radarLabel }}</desc>
      <!-- Grid lines -->
      <polygon
        v-for="level in gridLevels"
        :key="level"
        :points="getGridPolygon(level)"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        stroke-width="1"
      />
      <!-- Axis lines -->
      <line
        v-for="(_, i) in 5"
        :key="'axis-' + i"
        :x1="center"
        :y1="center"
        :x2="getPoint(i, 100).x"
        :y2="getPoint(i, 100).y"
        stroke="rgba(255,255,255,0.1)"
        stroke-width="1"
      />
      <!-- Data polygon -->
      <polygon
        :points="polygonPoints"
        fill="rgba(10,132,255,0.15)"
        stroke="rgba(10,132,255,0.6)"
        stroke-width="2"
      />
      <!-- Data points -->
      <circle
        v-for="(d, i) in dimensions"
        :key="'dot-' + i"
        :cx="getPoint(i, d.value).x"
        :cy="getPoint(i, d.value).y"
        r="3"
        fill="rgb(10,132,255)"
      />
      <!-- Labels -->
      <text
        v-for="lp in labelPositions"
        :key="lp.label"
        :x="lp.x"
        :y="lp.y"
        text-anchor="middle"
        dominant-baseline="middle"
        class="fill-white/40 text-[10px]"
      >
        {{ lp.label }}
      </text>
    </svg>
  </div>
</template>
