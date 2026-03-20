# 「双层体验」改造实现计划

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 AI 工具全书从工具列表页改造为双层体验——震撼的 Landing Page + 保留原有功能页，定位为个人技术名片。

**Architecture:** 新建 Landing.vue 作为首页（Hero + 工具版图 + 推荐栈 + 快速入口），原 Home.vue 移至 `/tools` 路由。修改 Header 导航精简为 4 项，ToolDetail.vue 内容提权将个人洞察提到版本信息之前。

**Tech Stack:** Vue 3 Composition API、Tailwind CSS、Lucide Icons、纯 CSS 动画（无新依赖）

**Spec:** `docs/superpowers/specs/2026-03-21-dual-layer-experience-design.md`

---

## File Structure

### New Files

| File | Responsibility |
|------|---------------|
| `src/data/recommendations.js` | 个人推荐栈静态数据（4 条） |
| `src/components/landing/HeroSection.vue` | Hero 区域：标题、动态计数、CTA |
| `src/components/landing/ToolLandscape.vue` | 工具版图：7 类别气泡网格 |
| `src/components/landing/RecommendationCards.vue` | 推荐栈：4 张洞察卡片 |
| `src/components/landing/QuickEntryCards.vue` | 快速入口：3 张导航卡片 |
| `src/views/Landing.vue` | 新首页，组合以上 4 个组件 |

### Modified Files

| File | Changes |
|------|---------|
| `src/router/index.js` | `/` → Landing.vue，新增 `/tools` → Home.vue |
| `src/components/Header.vue` | mainNav 改为 4 项，secondaryNav 清空 |
| `src/views/ToolDetail.vue` | 将「使用心得」+「注意事项」区块移到 Info grid 之后、Pros/Cons 之前 |

---

## Task 1: 推荐栈数据

**Files:**
- Create: `src/data/recommendations.js`

- [ ] **Step 1: Create recommendations data file**

```javascript
// src/data/recommendations.js
export const recommendations = [
  {
    id: 'daily-coding',
    label: '日常编码',
    tools: ['cursor'],
    insight: '主力 IDE，Composer 跨文件重构是护城河，但不要让它一次改超过 10 个文件'
  },
  {
    id: 'complex-refactor',
    label: '复杂重构',
    tools: ['claude-code'],
    insight: '超过 10 文件的改动切到 CLI，Agent 能力最强，终端里的架构师'
  },
  {
    id: 'free-stack',
    label: '零成本方案',
    tools: ['trae', 'gemini-cli'],
    insight: 'Trae 写代码 + Gemini CLI 做调研，1M 上下文分析长文档无敌'
  },
  {
    id: 'visual-design',
    label: '视觉设计',
    tools: ['midjourney'],
    insight: '艺术风格选 Midjourney，含文字的设计用 GPT-5 图像生成'
  }
]
```

- [ ] **Step 2: Commit**

```bash
git add src/data/recommendations.js
git commit -m "feat: add recommendations data for landing page"
```

---

## Task 2: HeroSection 组件

**Files:**
- Create: `src/components/landing/HeroSection.vue`

- [ ] **Step 1: Create landing components directory**

```bash
mkdir -p src/components/landing
```

- [ ] **Step 2: Build HeroSection component**

HeroSection 需要：
- 主标题「AI 工具全书」+ 副标题
- 3 个动态计数（工具数、类别数、洞察数）—— 用 `requestAnimationFrame` 实现从 0 到目标值的计数动画
- CTA 按钮滚动到版图区（`#landscape`）

```vue
<!-- src/components/landing/HeroSection.vue -->
<template>
  <section class="flex flex-col items-center justify-center min-h-[70vh] px-5 text-center">
    <h1
      class="text-4xl sm:text-5xl font-bold text-white tracking-tight"
      style="letter-spacing: -1.5px; line-height: 1.1;"
    >
      AI 工具全书
    </h1>
    <p class="text-base text-white/45 mt-3 max-w-md">
      基于真实项目经验的 AI 工具评测与选型指南
    </p>

    <div class="flex items-center gap-8 sm:gap-12 mt-10">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center"
      >
        <div class="text-3xl sm:text-4xl font-bold text-accent tabular-nums">
          {{ animatedValues[stat.key] }}<span class="text-xl">+</span>
        </div>
        <div class="text-xs text-white/35 mt-1">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <button
      class="mt-12 px-6 py-3 rounded-capsule text-sm font-semibold text-white cursor-pointer transition-all hover:scale-105"
      style="background: linear-gradient(135deg, #0a84ff, #bf5af2);"
      @click="scrollToLandscape"
    >
      浏览工具全景
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'
import { useToolsStore } from '../../stores/tools'

const toolsStore = useToolsStore()

const stats = [
  { key: 'tools', label: '款工具深度评测' },
  { key: 'categories', label: '大类别全景覆盖' },
  { key: 'insights', label: '条实战洞察' }
]

const targetValues = {
  tools: toolsStore.tools.length,
  categories: toolsStore.categories.length - 1,
  insights: toolsStore.tools.reduce((sum, t) => {
    let count = 0
    if (t.personalExperience?.insights) count++
    if (t.personalExperience?.pitfalls) count += t.personalExperience.pitfalls.length
    if (t.pros) count += t.pros.length
    if (t.cons) count += t.cons.length
    return sum + count
  }, 0)
}

const animatedValues = reactive({ tools: 0, categories: 0, insights: 0 })

function animateCount(key, target, duration = 1200) {
  const start = performance.now()
  function step(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
    animatedValues[key] = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

onMounted(() => {
  // Stagger the animations
  setTimeout(() => animateCount('tools', targetValues.tools), 200)
  setTimeout(() => animateCount('categories', targetValues.categories), 400)
  setTimeout(() => animateCount('insights', targetValues.insights), 600)
})

function scrollToLandscape() {
  document.getElementById('landscape')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
```

- [ ] **Step 3: Verify component renders**

```bash
# Will verify after Landing.vue is assembled in Task 6
```

- [ ] **Step 4: Commit**

```bash
git add src/components/landing/HeroSection.vue
git commit -m "feat: add HeroSection component with animated counters"
```

---

## Task 3: ToolLandscape 组件

**Files:**
- Create: `src/components/landing/ToolLandscape.vue`

- [ ] **Step 1: Build ToolLandscape component**

Displays 125 tools grouped by 7 categories as a bubble grid. Each category is a section with a label. Each tool is a circular bubble sized by rating, colored by category.

Uses `categories.js` color mapping → Tailwind apple colors:
- ide → blue (#0a84ff)
- cli → green (#30d158)
- llm → purple (#bf5af2)
- multimodal → pink (#ff375f)
- agent → orange (#ff9f0a)
- mcp → cyan (#64d2ff)
- skill → amber (#ffd60a)

```vue
<!-- src/components/landing/ToolLandscape.vue -->
<template>
  <section
    id="landscape"
    class="max-w-[960px] mx-auto px-5 py-16"
  >
    <h2 class="text-2xl font-bold text-white tracking-tight mb-2">
      工具版图
    </h2>
    <p class="text-sm text-white/35 mb-8">
      {{ toolsStore.tools.length }} 款工具 · 7 大类别 · 点击探索详情
    </p>

    <div class="space-y-8">
      <div
        v-for="cat in groupedTools"
        :key="cat.id"
      >
        <div class="flex items-center gap-2 mb-3">
          <div
            class="w-2.5 h-2.5 rounded-full"
            :style="{ background: cat.color }"
          />
          <span class="text-sm font-semibold text-white/70">{{ cat.nameZh }}</span>
          <span class="text-xs text-white/25">{{ cat.tools.length }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <router-link
            v-for="tool in cat.tools"
            :key="tool.id"
            :to="{ name: 'tool-detail', params: { id: tool.id } }"
            class="group relative flex items-center justify-center rounded-full transition-all hover:scale-110 hover:z-10"
            :style="{
              width: bubbleSize(tool) + 'px',
              height: bubbleSize(tool) + 'px',
              background: cat.color + '18',
              border: '1px solid ' + cat.color + '30',
            }"
            :title="tool.name + ' — ' + (tool.bestFor || '')"
          >
            <ToolLogo
              :tool-id="tool.id"
              :tool-name="tool.name"
              :size="bubbleSize(tool) > 48 ? 'md' : 'sm'"
            />
            <!-- Tooltip on hover -->
            <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20"
              style="background: rgba(20,20,40,0.95); border: 1px solid rgba(255,255,255,0.1);"
            >
              <div class="font-semibold text-white">{{ tool.name }}</div>
              <div class="text-white/50 mt-0.5">{{ tool.personalExperience?.rating?.toFixed(1) }} · {{ tool.bestFor?.substring(0, 30) }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useToolsStore } from '../../stores/tools'
import { categories } from '../../data/categories.js'
import ToolLogo from '../ToolLogo.vue'

const toolsStore = useToolsStore()

const categoryColors = {
  ide: '#0a84ff',
  cli: '#30d158',
  llm: '#bf5af2',
  multimodal: '#ff375f',
  agent: '#ff9f0a',
  mcp: '#64d2ff',
  skill: '#ffd60a'
}

const groupedTools = computed(() => {
  return categories.map(cat => ({
    id: cat.id,
    nameZh: cat.nameZh,
    color: categoryColors[cat.id] || '#ffffff',
    tools: toolsStore.tools
      .filter(t => t.category === cat.id)
      .sort((a, b) => (b.personalExperience?.rating || 0) - (a.personalExperience?.rating || 0))
  }))
})

function bubbleSize(tool) {
  const rating = tool.personalExperience?.rating || 3
  // Map rating 1-5 to size 36-64px
  return 36 + (rating - 1) * 7
}
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/ToolLandscape.vue
git commit -m "feat: add ToolLandscape bubble grid component"
```

---

## Task 4: RecommendationCards 组件

**Files:**
- Create: `src/components/landing/RecommendationCards.vue`

- [ ] **Step 1: Build RecommendationCards component**

```vue
<!-- src/components/landing/RecommendationCards.vue -->
<template>
  <section class="max-w-[960px] mx-auto px-5 py-16">
    <h2 class="text-2xl font-bold text-white tracking-tight mb-2">
      我的推荐栈
    </h2>
    <p class="text-sm text-white/35 mb-8">
      基于日常使用的个人工具组合
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div
        v-for="rec in recommendations"
        :key="rec.id"
        class="glass-card p-4 flex gap-3"
      >
        <div class="flex-shrink-0 flex items-start gap-1.5 pt-0.5">
          <ToolLogo
            v-for="toolId in rec.tools"
            :key="toolId"
            :tool-id="toolId"
            :tool-name="getToolName(toolId)"
            size="sm"
          />
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-[11px] text-accent uppercase tracking-widest font-semibold mb-1">
            {{ rec.label }}
          </div>
          <div class="text-[13px] text-white/55 leading-relaxed"
            style="border-left: 2px solid rgba(48,209,88,0.3); padding-left: 10px;"
          >
            {{ rec.insight }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { recommendations } from '../../data/recommendations.js'
import { useToolsStore } from '../../stores/tools'
import ToolLogo from '../ToolLogo.vue'

const toolsStore = useToolsStore()

function getToolName(toolId) {
  return toolsStore.getToolById(toolId)?.name || toolId
}
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/RecommendationCards.vue
git commit -m "feat: add RecommendationCards component"
```

---

## Task 5: QuickEntryCards 组件

**Files:**
- Create: `src/components/landing/QuickEntryCards.vue`

- [ ] **Step 1: Build QuickEntryCards component**

```vue
<!-- src/components/landing/QuickEntryCards.vue -->
<template>
  <section class="max-w-[960px] mx-auto px-5 py-16">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <router-link
        v-for="entry in entries"
        :key="entry.to"
        :to="entry.to"
        class="glass-card glass-card-interactive p-5 text-center group"
      >
        <component
          :is="entry.icon"
          class="w-6 h-6 mx-auto mb-3 text-white/40 group-hover:text-primary transition-colors"
        />
        <div class="text-sm font-semibold text-white mb-1">
          {{ entry.label }}
        </div>
        <div class="text-xs text-white/35">
          {{ entry.desc }}
        </div>
      </router-link>
    </div>

    <div class="text-center mt-12 text-xs text-white/25">
      Kevin · AI 工具深度用户 · 持续更新中 ·
      <a
        href="https://github.com/ava-agent/ai-tools"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white/35 hover:text-white/60 transition-colors"
      >
        GitHub
      </a>
    </div>
  </section>
</template>

<script setup>
import { LayoutGrid, GitCompare, Workflow } from 'lucide-vue-next'

const entries = [
  { to: '/tools', label: '全景浏览', desc: '125+ 工具分类浏览与搜索', icon: LayoutGrid },
  { to: '/comparison', label: '选型对比', desc: '最多 4 款工具横向对比', icon: GitCompare },
  { to: '/workflows', label: '工作流指南', desc: '6 套实战工作流模板', icon: Workflow }
]
</script>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/landing/QuickEntryCards.vue
git commit -m "feat: add QuickEntryCards component"
```

---

## Task 6: Landing.vue 页面 + 路由变更

**Files:**
- Create: `src/views/Landing.vue`
- Modify: `src/router/index.js`

- [ ] **Step 1: Create Landing.vue**

```vue
<!-- src/views/Landing.vue -->
<template>
  <div class="min-h-screen">
    <HeroSection />
    <ToolLandscape />
    <RecommendationCards />
    <QuickEntryCards />
  </div>
</template>

<script setup>
import HeroSection from '../components/landing/HeroSection.vue'
import ToolLandscape from '../components/landing/ToolLandscape.vue'
import RecommendationCards from '../components/landing/RecommendationCards.vue'
import QuickEntryCards from '../components/landing/QuickEntryCards.vue'
</script>
```

- [ ] **Step 2: Update router**

In `src/router/index.js`:

1. Change `/` route to load `Landing.vue` (lazy):
```javascript
{
  path: '/',
  name: 'landing',
  component: () => import('../views/Landing.vue'),
  meta: {
    title: 'AI工具全书 | 2026深度集成与实战教学版',
    description: '基于真实项目经验的 AI 工具评测与选型指南'
  }
}
```

2. Add new `/tools` route pointing to existing `Home.vue`:
```javascript
{
  path: '/tools',
  name: 'tools',
  component: () => import('../views/Home.vue'),
  meta: {
    title: '全景浏览 - AI工具全书',
    description: '125+ 款 AI 工具分类浏览与搜索'
  }
}
```

3. Change old `home` route name to avoid conflict (the `/` route was previously named `home`).

- [ ] **Step 3: Run dev server and verify landing page renders**

```bash
npm run dev
# Open http://localhost:8765
# Verify: Hero with animated counters, tool landscape, recommendation cards, quick entries
```

- [ ] **Step 4: Verify /tools shows original Home.vue**

```bash
# Open http://localhost:8765/#/tools
# Verify: original tool grid with search/filter is intact
```

- [ ] **Step 5: Commit**

```bash
git add src/views/Landing.vue src/router/index.js
git commit -m "feat: add Landing page as new homepage, move tool list to /tools"
```

---

## Task 7: Header 导航精简

**Files:**
- Modify: `src/components/Header.vue`

- [ ] **Step 1: Update mainNav and secondaryNav arrays**

In `src/components/Header.vue`, replace the nav arrays:

```javascript
// Old mainNav
const mainNav = [
  { to: '/', label: '发现', icon: Search },
  { to: '/comparison', label: '对比', icon: GitCompare },
  { to: '/matcher', label: '匹配', icon: Scale },
  { to: '/pricing', label: '定价', icon: BarChart3 },
]

// New mainNav
const mainNav = [
  { to: '/', label: '首页', icon: Brain },
  { to: '/tools', label: '全景浏览', icon: LayoutGrid },
  { to: '/comparison', label: '工具对比', icon: GitCompare },
  { to: '/workflows', label: '工作流', icon: Workflow },
]
```

Clear secondaryNav:
```javascript
const secondaryNav = []
```

Update imports: add `LayoutGrid` to lucide imports, remove unused icons (`Scale`, `BarChart3`, `BookOpen`, `HelpCircle`).

- [ ] **Step 2: Update search button to navigate to /tools**

Change the search button `@click` from `$router.push('/')` to `$router.push('/tools')` since `/tools` is now where the search bar lives.

- [ ] **Step 3: Verify navigation works on both desktop and mobile**

```bash
# Check desktop segmented control: 4 items
# Check mobile menu: 4 items
# Click each nav item to verify correct routing
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.vue
git commit -m "feat: simplify header nav to 4 items"
```

---

## Task 8: ToolDetail 内容提权

**Files:**
- Modify: `src/views/ToolDetail.vue`

- [ ] **Step 1: Rearrange ToolDetail sections**

Current order (lines 66-260):
1. Info grid (定价/上下文/中文支持) — lines 67-92
2. bestFor — lines 94-101
3. Insight card (使用心得) — lines 103-114
4. Radar chart — lines 116-125
5. Pitfalls (注意事项) — lines 127-143
6. Pros/Cons — lines 145-179
7. SWOT — lines 181-235
8. Versions — lines 237-260+

New order — move Insight + Pitfalls to right after the tool header card (before Info grid):
1. **Insight card** (使用心得) — with enhanced styling
2. **Pitfalls** (注意事项)
3. Info grid (定价/上下文/中文支持)
4. bestFor
5. Radar chart
6. SWOT
7. Pros/Cons
8. Versions

Additionally, enhance the Insight card styling:
- Change from plain `glass-card` to have a left green border + tinted background
- Change title from "💡 使用心得" to "实战洞察"
- Style the pitfalls section with warning coloring

Move the `</div>` that closes the tool header card (line ~101) to before the insight card. Then place the insight card and pitfalls blocks immediately after the header card closing `</div>`, before the info grid.

Specifically:
- Cut lines 103-143 (insight card + pitfalls)
- Paste them after line 101 (after bestFor closing)
- Actually, the insight card is OUTSIDE the header glass-card already. So we need to move it before the info grid. The current structure is: header card (includes info grid + bestFor) → insight → radar → pitfalls → pros/cons → SWOT → versions

Wait, let me re-read: the info grid and bestFor are INSIDE the first `glass-card` div (lines 22-101). Then insight, radar, pitfalls, pros/cons, SWOT, versions are all separate cards after it.

So the reorder is among the separate cards (lines 103+). New order:
1. **Insight card** (was 103-114, enhance styling)
2. **Pitfalls** (was 127-143)
3. Radar chart (was 116-125)
4. Pros/Cons (was 145-179)
5. SWOT (was 181-235)
6. Versions (was 237+)

The Insight card is already in position 1 among the cards. We just need to:
- Move Pitfalls from after Radar to after Insight (swap pitfalls and radar order)
- Move SWOT from after Pros/Cons to after Radar (before Pros/Cons)
- Enhance Insight card styling

Final card order:
1. Insight card (enhanced) ← already here
2. Pitfalls ← move up from position 3
3. Radar chart ← stays, but now after pitfalls
4. SWOT ← move up from position 5
5. Pros/Cons ← move down from position 4
6. Versions ← stays at end

Enhanced insight card template:
```html
<!-- Enhanced Insight card -->
<div
  v-if="tool.personalExperience?.insights"
  class="rounded-xl p-4 mb-4"
  style="background: rgba(48,209,88,0.04); border-left: 4px solid #30d158;"
>
  <div class="text-[13px] font-semibold text-accent mb-2">
    实战洞察
  </div>
  <div class="text-[13px] text-white/60 leading-relaxed">
    {{ tool.personalExperience.insights }}
  </div>
</div>
```

- [ ] **Step 2: Run lint to verify**

```bash
npm run lint
```

- [ ] **Step 3: Verify tool detail page renders correctly**

```bash
# Open http://localhost:8765/#/tool/cursor
# Verify order: header → insight (green border) → pitfalls → radar → SWOT → pros/cons → versions
```

- [ ] **Step 4: Commit**

```bash
git add src/views/ToolDetail.vue
git commit -m "feat: reorder ToolDetail sections — insight and pitfalls first"
```

---

## Task 9: Final verification & polish

- [ ] **Step 1: Run full lint**

```bash
npm run lint
```

Expected: 0 errors

- [ ] **Step 2: Run tests**

```bash
npm run test
```

Expected: 8 tests pass

- [ ] **Step 3: Production build**

```bash
npm run build
```

Expected: Build succeeds, no new chunk significantly larger than before

- [ ] **Step 4: Manual QA checklist**

```bash
npm run preview
```

Verify:
- [ ] Landing page: Hero with animated numbers, tool landscape, recommendations, quick entries
- [ ] Landing CTA scrolls to landscape section
- [ ] Tool bubbles link to correct detail pages
- [ ] `/tools` shows original tool list with search/filter
- [ ] Header has 4 nav items (首页, 全景浏览, 工具对比, 工作流)
- [ ] Hidden pages still accessible via URL: `/matcher`, `/pricing`, `/quiz`, `/profile`, `/resources`
- [ ] ToolDetail page shows insight card with green border before info grid
- [ ] Mobile responsive: header hamburger menu works, landing page stacks vertically

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete dual-layer experience redesign"
git push origin main
```
