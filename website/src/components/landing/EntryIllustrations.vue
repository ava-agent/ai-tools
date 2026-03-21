<!-- SVG scene illustrations for quick entry cards -->
<template>
  <!-- Browse/Explore: telescope + galaxy of dots -->
  <svg
    v-if="type === 'browse'"
    viewBox="0 0 120 80"
    fill="none"
    class="w-full h-full"
    aria-hidden="true"
  >
    <!-- Star field -->
    <circle
      v-for="(s, i) in browseStars"
      :key="i"
      :cx="s.x"
      :cy="s.y"
      :r="s.r"
      :fill="s.color"
      :opacity="s.opacity"
      class="entry-star"
      :style="{ animationDelay: i * 0.2 + 's' }"
    />
    <!-- Telescope body -->
    <g transform="translate(50, 40)">
      <line
        x1="0"
        y1="0"
        x2="-18"
        y2="22"
        stroke="#0a84ff"
        stroke-width="2.5"
        stroke-linecap="round"
      />
      <line
        x1="-24"
        y1="22"
        x2="-12"
        y2="22"
        stroke="#0a84ff"
        stroke-width="2"
        stroke-linecap="round"
        opacity="0.5"
      />
      <ellipse
        cx="4"
        cy="-5"
        rx="10"
        ry="5"
        transform="rotate(-35)"
        stroke="#0a84ff"
        stroke-width="1.5"
        fill="#0a84ff"
        fill-opacity="0.08"
      />
      <!-- Lens glow -->
      <circle
        cx="10"
        cy="-10"
        r="6"
        fill="#0a84ff"
        opacity="0.1"
      />
    </g>
    <!-- Connecting arcs -->
    <path
      d="M70 25 Q85 15, 95 30"
      stroke="#0a84ff"
      stroke-width="0.5"
      opacity="0.2"
      fill="none"
    />
    <path
      d="M75 35 Q88 28, 100 40"
      stroke="#bf5af2"
      stroke-width="0.5"
      opacity="0.15"
      fill="none"
    />
  </svg>

  <!-- Compare: balanced scales -->
  <svg
    v-else-if="type === 'compare'"
    viewBox="0 0 120 80"
    fill="none"
    class="w-full h-full"
    aria-hidden="true"
  >
    <!-- Scale beam -->
    <line
      x1="30"
      y1="30"
      x2="90"
      y2="30"
      stroke="#bf5af2"
      stroke-width="2"
      stroke-linecap="round"
    />
    <!-- Pivot -->
    <polygon
      points="60,25 56,35 64,35"
      fill="#bf5af2"
      opacity="0.4"
    />
    <line
      x1="60"
      y1="35"
      x2="60"
      y2="65"
      stroke="#bf5af2"
      stroke-width="1.5"
      opacity="0.4"
    />
    <line
      x1="50"
      y1="65"
      x2="70"
      y2="65"
      stroke="#bf5af2"
      stroke-width="2"
      stroke-linecap="round"
      opacity="0.3"
    />
    <!-- Left pan -->
    <line
      x1="30"
      y1="30"
      x2="30"
      y2="45"
      stroke="#bf5af2"
      stroke-width="1"
      opacity="0.5"
    />
    <path
      d="M20 45 Q25 52 30 45 Q35 52 40 45"
      stroke="#bf5af2"
      stroke-width="1.5"
      fill="#bf5af2"
      fill-opacity="0.08"
    />
    <!-- Left items -->
    <rect
      x="24"
      y="38"
      width="5"
      height="5"
      rx="1"
      fill="#0a84ff"
      opacity="0.6"
    />
    <rect
      x="31"
      y="38"
      width="5"
      height="5"
      rx="1"
      fill="#30d158"
      opacity="0.5"
    />
    <!-- Right pan -->
    <line
      x1="90"
      y1="30"
      x2="90"
      y2="45"
      stroke="#bf5af2"
      stroke-width="1"
      opacity="0.5"
    />
    <path
      d="M80 45 Q85 52 90 45 Q95 52 100 45"
      stroke="#bf5af2"
      stroke-width="1.5"
      fill="#bf5af2"
      fill-opacity="0.08"
    />
    <!-- Right items -->
    <rect
      x="84"
      y="38"
      width="5"
      height="5"
      rx="1"
      fill="#ff9f0a"
      opacity="0.6"
    />
    <rect
      x="91"
      y="38"
      width="5"
      height="5"
      rx="1"
      fill="#ff375f"
      opacity="0.5"
    />
    <!-- Measurement lines -->
    <line
      x1="25"
      y1="55"
      x2="40"
      y2="55"
      stroke="#bf5af2"
      stroke-width="0.5"
      opacity="0.2"
      stroke-dasharray="2 2"
    />
    <line
      x1="80"
      y1="55"
      x2="100"
      y2="55"
      stroke="#bf5af2"
      stroke-width="0.5"
      opacity="0.2"
      stroke-dasharray="2 2"
    />
  </svg>

  <!-- Workflow: flowing pipeline nodes -->
  <svg
    v-else-if="type === 'workflow'"
    viewBox="0 0 120 80"
    fill="none"
    class="w-full h-full"
    aria-hidden="true"
  >
    <!-- Flow path -->
    <path
      d="M15 40 Q30 20, 45 35 Q55 45, 70 30 Q80 20, 95 35 Q105 45, 110 40"
      stroke="#30d158"
      stroke-width="1.5"
      opacity="0.3"
      fill="none"
    />
    <!-- Animated flow particle -->
    <circle
      r="2"
      fill="#30d158"
      opacity="0.7"
      class="entry-flow-dot"
    >
      <animateMotion
        dur="4s"
        repeatCount="indefinite"
        path="M15 40 Q30 20, 45 35 Q55 45, 70 30 Q80 20, 95 35 Q105 45, 110 40"
      />
    </circle>
    <!-- Nodes -->
    <g>
      <circle
        cx="15"
        cy="40"
        r="6"
        stroke="#30d158"
        stroke-width="1.5"
        fill="#30d158"
        fill-opacity="0.1"
      />
      <rect
        x="12"
        y="37"
        width="6"
        height="6"
        rx="1"
        fill="#30d158"
        opacity="0.5"
      />
    </g>
    <g>
      <circle
        cx="45"
        cy="35"
        r="7"
        stroke="#30d158"
        stroke-width="1.5"
        fill="#30d158"
        fill-opacity="0.1"
      />
      <path
        d="M42 35l2 2 4-4"
        stroke="#30d158"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <g>
      <circle
        cx="75"
        cy="30"
        r="7"
        stroke="#0a84ff"
        stroke-width="1.5"
        fill="#0a84ff"
        fill-opacity="0.1"
      />
      <path
        d="M72 30h6M75 27v6"
        stroke="#0a84ff"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </g>
    <g>
      <circle
        cx="105"
        cy="38"
        r="6"
        stroke="#bf5af2"
        stroke-width="1.5"
        fill="#bf5af2"
        fill-opacity="0.1"
      />
      <path
        d="M102 38l2.5 2.5 3.5-4"
        stroke="#bf5af2"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <!-- Labels -->
    <text
      x="15"
      y="58"
      text-anchor="middle"
      fill="white"
      fill-opacity="0.2"
      font-size="5"
    >
      输入
    </text>
    <text
      x="45"
      y="54"
      text-anchor="middle"
      fill="white"
      fill-opacity="0.2"
      font-size="5"
    >
      分析
    </text>
    <text
      x="75"
      y="50"
      text-anchor="middle"
      fill="white"
      fill-opacity="0.2"
      font-size="5"
    >
      选型
    </text>
    <text
      x="105"
      y="56"
      text-anchor="middle"
      fill="white"
      fill-opacity="0.2"
      font-size="5"
    >
      输出
    </text>
  </svg>
</template>

<script setup>
defineProps({
  type: { type: String, required: true },
})

// Stars for the browse illustration
const browseStars = [
  { x: 75, y: 18, r: 2.5, color: '#0a84ff', opacity: 0.7 },
  { x: 92, y: 28, r: 2, color: '#bf5af2', opacity: 0.6 },
  { x: 100, y: 42, r: 1.8, color: '#30d158', opacity: 0.5 },
  { x: 85, y: 50, r: 2.2, color: '#ff9f0a', opacity: 0.6 },
  { x: 105, y: 18, r: 1.5, color: '#64d2ff', opacity: 0.4 },
  { x: 68, y: 35, r: 1.5, color: '#ffd60a', opacity: 0.4 },
  { x: 110, y: 55, r: 1.2, color: '#ff375f', opacity: 0.3 },
  { x: 78, y: 60, r: 1.3, color: '#0a84ff', opacity: 0.35 },
  { x: 95, y: 12, r: 1, color: '#bf5af2', opacity: 0.25 },
  { x: 60, y: 52, r: 1, color: '#30d158', opacity: 0.25 },
]
</script>

<style scoped>
@keyframes starTwinkle {
  0%,
  100% {
    opacity: var(--base-opacity, 0.5);
  }
  50% {
    opacity: 1;
  }
}

.entry-star {
  animation: starTwinkle 3s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .entry-star {
    animation: none;
  }
  .entry-flow-dot {
    display: none;
  }
}
</style>
