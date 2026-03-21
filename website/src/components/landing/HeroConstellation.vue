<!-- Animated constellation/network SVG background for the hero section -->
<template>
  <svg
    class="absolute inset-0 w-full h-full"
    viewBox="0 0 1200 700"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <!-- Node glow filters -->
      <filter
        id="glow-blue"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          stdDeviation="4"
          result="blur"
        />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter
        id="glow-purple"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
      >
        <feGaussianBlur
          stdDeviation="3"
          result="blur"
        />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Gradient for connection lines -->
      <linearGradient
        id="line-grad-1"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop
          offset="0%"
          stop-color="#0a84ff"
          stop-opacity="0.15"
        />
        <stop
          offset="50%"
          stop-color="#bf5af2"
          stop-opacity="0.08"
        />
        <stop
          offset="100%"
          stop-color="#30d158"
          stop-opacity="0.12"
        />
      </linearGradient>
    </defs>

    <!-- Connection lines -->
    <g opacity="0.4">
      <line
        v-for="(line, i) in lines"
        :key="'l' + i"
        :x1="line.x1"
        :y1="line.y1"
        :x2="line.x2"
        :y2="line.y2"
        stroke="url(#line-grad-1)"
        stroke-width="0.8"
        class="constellation-line"
        :style="{ animationDelay: i * 0.3 + 's' }"
      />
    </g>

    <!-- Nodes -->
    <g>
      <circle
        v-for="(node, i) in nodes"
        :key="'n' + i"
        :cx="node.x"
        :cy="node.y"
        :r="node.r"
        :fill="node.color"
        :filter="node.r > 3 ? 'url(#glow-blue)' : ''"
        class="constellation-node"
        :style="{ animationDelay: node.delay + 's', animationDuration: node.dur + 's' }"
      />
    </g>

    <!-- Floating particles -->
    <g opacity="0.3">
      <circle
        v-for="(p, i) in particles"
        :key="'p' + i"
        :cx="p.x"
        :cy="p.y"
        r="1"
        :fill="p.color"
        class="constellation-particle"
        :style="{ animationDelay: p.delay + 's' }"
      />
    </g>
  </svg>
</template>

<script setup>
// Deterministic node positions for the constellation
const nodes = [
  // Large anchor nodes
  { x: 180, y: 200, r: 5, color: '#0a84ff', delay: 0, dur: 4 },
  { x: 420, y: 140, r: 4, color: '#bf5af2', delay: 0.5, dur: 5 },
  { x: 700, y: 180, r: 5, color: '#30d158', delay: 1, dur: 4.5 },
  { x: 950, y: 220, r: 4, color: '#0a84ff', delay: 0.3, dur: 5.5 },
  { x: 1050, y: 120, r: 3, color: '#bf5af2', delay: 0.8, dur: 4 },

  // Medium nodes
  { x: 280, y: 350, r: 3, color: '#bf5af2', delay: 1.2, dur: 5 },
  { x: 550, y: 400, r: 3.5, color: '#0a84ff', delay: 0.7, dur: 4.5 },
  { x: 830, y: 380, r: 3, color: '#30d158', delay: 1.5, dur: 5 },
  { x: 150, y: 500, r: 3, color: '#30d158', delay: 0.4, dur: 4 },
  { x: 1000, y: 450, r: 3.5, color: '#bf5af2', delay: 1.1, dur: 5.5 },

  // Small nodes
  { x: 320, y: 100, r: 2, color: '#64d2ff', delay: 0.6, dur: 5 },
  { x: 600, y: 280, r: 2, color: '#ff9f0a', delay: 1.3, dur: 4 },
  { x: 80, y: 350, r: 2, color: '#ffd60a', delay: 0.9, dur: 5 },
  { x: 1100, y: 300, r: 2, color: '#ff375f', delay: 1.4, dur: 4.5 },
  { x: 480, y: 550, r: 2, color: '#64d2ff', delay: 0.2, dur: 5 },
  { x: 750, y: 520, r: 2, color: '#ff9f0a', delay: 1.6, dur: 4 },
  { x: 900, y: 580, r: 1.5, color: '#0a84ff', delay: 0.5, dur: 5.5 },
  { x: 350, y: 600, r: 1.5, color: '#bf5af2', delay: 1.0, dur: 4 },
]

// Connection lines between nodes
const lines = [
  { x1: 180, y1: 200, x2: 420, y2: 140 },
  { x1: 420, y1: 140, x2: 700, y2: 180 },
  { x1: 700, y1: 180, x2: 950, y2: 220 },
  { x1: 950, y1: 220, x2: 1050, y2: 120 },
  { x1: 180, y1: 200, x2: 280, y2: 350 },
  { x1: 280, y1: 350, x2: 550, y2: 400 },
  { x1: 550, y1: 400, x2: 830, y2: 380 },
  { x1: 700, y1: 180, x2: 830, y2: 380 },
  { x1: 830, y1: 380, x2: 1000, y2: 450 },
  { x1: 420, y1: 140, x2: 320, y2: 100 },
  { x1: 550, y1: 400, x2: 600, y2: 280 },
  { x1: 150, y1: 500, x2: 280, y2: 350 },
  { x1: 480, y1: 550, x2: 550, y2: 400 },
  { x1: 750, y1: 520, x2: 830, y2: 380 },
  { x1: 1000, y1: 450, x2: 1100, y2: 300 },
]

// Floating particles
const particles = Array.from({ length: 30 }, (_, i) => ({
  x: 50 + ((i * 397) % 1100),
  y: 50 + ((i * 283) % 600),
  color: ['#0a84ff', '#bf5af2', '#30d158', '#64d2ff', '#ff9f0a'][i % 5],
  delay: (i * 0.4) % 6,
}))
</script>

<style scoped>
@keyframes nodePulse {
  0%,
  100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);
  }
}

@keyframes lineTrace {
  0% {
    stroke-dashoffset: 200;
    opacity: 0;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.15;
  }
}

@keyframes particleFloat {
  0%,
  100% {
    opacity: 0;
    transform: translateY(0);
  }
  20% {
    opacity: 0.5;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.constellation-node {
  animation: nodePulse var(--dur, 4s) ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

.constellation-line {
  stroke-dasharray: 200;
  animation: lineTrace 3s ease-out forwards;
}

.constellation-particle {
  animation: particleFloat 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .constellation-node,
  .constellation-line,
  .constellation-particle {
    animation: none;
    opacity: 0.3;
  }
  .constellation-line {
    stroke-dasharray: none;
    stroke-dashoffset: 0;
  }
}
</style>
