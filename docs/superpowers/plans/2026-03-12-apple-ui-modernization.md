# Apple-Style UI Modernization Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AI Tools website UI with macOS App Store / Apple HIG Dark Mode aesthetics — vibrancy glass materials, Apple system colors, segmented control navigation, and capsule patterns.

**Architecture:** Full visual rebuild of all components and views. No data model, store, or router changes. Replace existing Tailwind theme colors, CSS utility classes, and component templates with Apple design system. Keep all existing functionality (search, filter, compare, match, etc.) intact.

**Tech Stack:** Vue 3.4 (Composition API), Vite 5.4, Tailwind CSS 3.4, Lucide Vue Next, Vitest

**Spec:** `docs/superpowers/specs/2026-03-12-apple-ui-modernization-design.md`

---

## Chunk 1: Foundation — Design Tokens & Global Styles

### Task 1: Update Tailwind Config with Apple Design Tokens

**Files:**
- Modify: `website/tailwind.config.js`

- [ ] **Step 1: Replace Tailwind color and theme configuration**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        // Legacy aliases (keep for gradual migration)
        background: '#05051a',
        surface: '#0a0a2a',
        primary: '#0a84ff',
        secondary: '#bf5af2',
        accent: '#30d158',
        // Apple system colors
        apple: {
          blue: '#0a84ff',
          green: '#30d158',
          purple: '#bf5af2',
          yellow: '#ffd60a',
          red: '#ff453a',
          orange: '#ff9f0a',
        },
      },
      borderRadius: {
        capsule: '980px',
        card: '14px',
        'card-lg': '16px',
        cell: '12px',
        icon: '9px',
        control: '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: []
}
```

- [ ] **Step 2: Verify build succeeds**

Run: `cd website && npm run build`
Expected: Build completes without errors

- [ ] **Step 3: Commit**

```bash
git add website/tailwind.config.js
git commit -m "feat: update Tailwind config with Apple design tokens"
```

---

### Task 2: Rebuild Global CSS with Apple Materials

**Files:**
- Modify: `website/src/style.css`

- [ ] **Step 1: Replace style.css with Apple vibrancy material system**

```css
/* Import Design Typography */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    color-scheme: dark;
  }

  body {
    font-family: 'IBM Plex Sans', system-ui, sans-serif;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(180deg, #05051a 0%, #0a0a2a 40%, #0f0a1e 100%);
    min-height: 100vh;
  }

  /* Focus visible for keyboard navigation */
  *:focus-visible {
    outline: 2px solid #0a84ff;
    outline-offset: 2px;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}

@layer components {
  /* ===== Vibrancy Material System ===== */

  .glass-nav {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 14px;
    transition: all 0.2s ease;
  }

  .glass-card:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.08);
  }

  .glass-card-interactive {
    cursor: pointer;
  }

  .glass-card-interactive:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }

  .glass-elevated {
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
  }

  /* ===== Capsule Buttons ===== */

  .btn-capsule {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 20px;
    background: #0a84ff;
    color: #fff;
    border-radius: 980px;
    font-size: 13px;
    font-weight: 500;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
  }

  .btn-capsule:hover {
    filter: brightness(1.1);
  }

  .btn-capsule-sm {
    padding: 6px 16px;
    font-size: 12px;
  }

  /* ===== Category Pills ===== */

  .pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px 16px;
    border-radius: 980px;
    font-size: 13px;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
  }

  .pill-active {
    background: #0a84ff;
    color: #fff;
    font-weight: 500;
  }

  .pill-inactive {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  .pill-inactive:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
  }

  /* ===== Tag Pills ===== */

  .tag-pill {
    display: inline-flex;
    align-items: center;
    padding: 4px 12px;
    border-radius: 980px;
    font-size: 11px;
    transition: all 0.2s ease;
  }

  .tag-pill-highlight {
    background: rgba(10, 132, 255, 0.1);
    color: #0a84ff;
  }

  .tag-pill-default {
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.5);
  }

  /* ===== Info Grid Cell ===== */

  .info-cell {
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 14px;
    text-align: center;
  }

  /* ===== Segmented Control ===== */

  .segmented-control {
    display: flex;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 2px;
  }

  .segment {
    padding: 5px 14px;
    font-size: 12px;
    border-radius: 6px;
    transition: all 0.2s ease;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.45);
    border: none;
    background: none;
  }

  .segment-active {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    font-weight: 500;
  }

  /* ===== Input ===== */

  .input-field {
    width: 100%;
    padding: 6px 12px;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.06);
    transition: all 0.2s ease;
  }

  .input-field::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }

  .input-field:focus {
    outline: none;
    border-color: rgba(10, 132, 255, 0.5);
    box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
  }

  /* ===== Legacy compat (removed gradually) ===== */

  .gradient-text {
    background: linear-gradient(135deg, #0a84ff, #bf5af2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

- [ ] **Step 2: Verify build succeeds**

Run: `cd website && npm run build`
Expected: Build completes without errors

- [ ] **Step 3: Commit**

```bash
git add website/src/style.css
git commit -m "feat: rebuild global CSS with Apple vibrancy material system"
```

---

### Task 3: Update App.vue Root Layout

**Files:**
- Modify: `website/src/App.vue`

- [ ] **Step 1: Update App.vue template — remove container constraint, apply gradient background**

Replace the template section. Key changes:
- Remove `container mx-auto px-4 py-8` from main (pages handle their own layout)
- Remove `bg-background` (body handles gradient via CSS)
- Keep ErrorBoundary, transitions, toasts, auth modal

```html
<template>
  <div id="app" class="min-h-screen">
    <ErrorBoundary>
      <Header />
      <main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      <Footer />
      <ToastContainer />
      <AchievementToast />
      <AuthModal />
    </ErrorBoundary>
  </div>
</template>
```

- [ ] **Step 2: Verify dev server renders correctly**

Run: `cd website && npm run dev`
Expected: Page renders with deep gradient background, content visible

- [ ] **Step 3: Commit**

```bash
git add website/src/App.vue
git commit -m "feat: update App.vue root layout for Apple gradient background"
```

---

## Chunk 2: Navigation — Header & Footer

### Task 4: Rebuild Header with Segmented Control Navigation

**Files:**
- Modify: `website/src/components/Header.vue`

- [ ] **Step 1: Rewrite Header.vue with vibrancy nav bar + segmented control**

Full rewrite. Key design:
- 48px height, glass-nav material, sticky top, z-50
- Left: Logo icon (24px gradient square) + "AI Tools" (15px, 600 weight)
- Center: Segmented control with 4 segments (发现 / 对比 / 匹配 / 定价)
- Right: Search icon trigger + mobile menu button
- Remove gamification elements (XpBar, StreakCounter, LevelBadge) from header — they remain accessible via Profile page
- Keep mobile menu but restyle with vibrancy cards

```vue
<template>
  <header class="sticky top-0 z-50 glass-nav">
    <div class="max-w-[960px] mx-auto flex items-center h-12 px-5 gap-3">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 flex-shrink-0">
        <div class="w-6 h-6 rounded-md flex items-center justify-center text-xs"
             style="background: linear-gradient(135deg, #0a84ff, #bf5af2);">
          <Brain class="w-3.5 h-3.5 text-white" />
        </div>
        <span class="text-[15px] font-semibold text-white tracking-tight hidden sm:block">AI Tools</span>
      </router-link>

      <!-- Spacer -->
      <div class="flex-1" />

      <!-- Segmented Control (desktop) -->
      <nav class="hidden md:flex segmented-control" aria-label="Main navigation">
        <router-link
          v-for="item in mainNav"
          :key="item.to"
          :to="item.to"
          custom
          v-slot="{ navigate, isActive }"
        >
          <button
            class="segment"
            :class="{ 'segment-active': isActive }"
            @click="navigate"
          >
            {{ item.label }}
          </button>
        </router-link>
      </nav>

      <!-- Spacer -->
      <div class="flex-1" />

      <!-- Right: More nav + Search + Auth + Mobile -->
      <div class="flex items-center gap-2">
        <!-- Secondary nav links (desktop) -->
        <router-link
          v-for="item in secondaryNav"
          :key="item.to"
          :to="item.to"
          class="hidden lg:block text-xs text-white/45 hover:text-white transition-colors px-2"
        >
          {{ item.label }}
        </router-link>

        <!-- Search trigger -->
        <button
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-control text-xs cursor-pointer"
          style="background: rgba(255,255,255,0.06);"
          @click="$router.push('/')"
        >
          <Search class="w-3.5 h-3.5 text-white/25" />
          <span class="text-white/25 hidden sm:inline">搜索</span>
        </button>

        <!-- Auth -->
        <button
          v-if="authStore.isAuthenticated"
          class="flex items-center p-1.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          @click="isProfileOpen = true"
        >
          <img
            v-if="authStore.avatarUrl"
            :src="authStore.avatarUrl"
            :alt="authStore.displayName"
            class="w-6 h-6 rounded-full border border-white/20"
          >
          <UserCircle v-else class="w-6 h-6 text-white/45" />
        </button>

        <!-- Mobile menu button -->
        <button
          class="md:hidden p-2 rounded-lg text-white/45 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-5 h-5" />
          <X v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden px-5 pb-4 pt-2 border-t border-white/[0.06]">
        <div class="flex flex-col gap-1">
          <router-link
            v-for="item in [...mainNav, ...secondaryNav]"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-3 py-2.5 rounded-cell text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            @click="isMobileMenuOpen = false"
          >
            <component :is="item.icon" class="w-4 h-4" />
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </transition>

    <!-- User Profile Panel -->
    <UserProfilePanel
      :is-open="isProfileOpen"
      @close="isProfileOpen = false"
    />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Brain, Menu, X, Search, Scale, BarChart3, GitCompare, Workflow, BookOpen, HelpCircle, UserCircle } from 'lucide-vue-next'
import { useAuthStore } from '../stores/auth.js'
import UserProfilePanel from './gamification/UserProfilePanel.vue'

const authStore = useAuthStore()
const isMobileMenuOpen = ref(false)
const isProfileOpen = ref(false)

const mainNav = [
  { to: '/', label: '发现', icon: Search },
  { to: '/comparison', label: '对比', icon: GitCompare },
  { to: '/matcher', label: '匹配', icon: Scale },
  { to: '/pricing', label: '定价', icon: BarChart3 },
]

const secondaryNav = [
  { to: '/workflows', label: '工作流', icon: Workflow },
  { to: '/resources', label: '资源', icon: BookOpen },
  { to: '/quiz', label: '竞猜', icon: HelpCircle },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>
```

- [ ] **Step 2: Verify header renders on dev server**

Run: `cd website && npm run dev`
Expected: Vibrancy nav bar with segmented control, search trigger, mobile responsive

- [ ] **Step 3: Commit**

```bash
git add website/src/components/Header.vue
git commit -m "feat: rebuild Header with vibrancy nav bar and segmented control"
```

---

### Task 5: Rebuild Footer with Apple Styling

**Files:**
- Modify: `website/src/components/Footer.vue`

- [ ] **Step 1: Restyle Footer with vibrancy material and compact layout**

Replace glass-effect with glass-nav, update colors to Apple system colors, simplify layout. Keep same content structure (brand, links, resources, copyright). Replace gradient-text with new Apple gradient. Max-width 960px centered.

- [ ] **Step 2: Verify footer renders correctly**

Run: `cd website && npm run dev`
Expected: Footer with vibrancy material, Apple colors

- [ ] **Step 3: Commit**

```bash
git add website/src/components/Footer.vue
git commit -m "feat: restyle Footer with Apple vibrancy material"
```

---

## Chunk 3: Home Page Components

### Task 6: Rebuild Hero.vue and SearchBar.vue

**Files:**
- Modify: `website/src/components/Hero.vue`
- Modify: `website/src/components/SearchBar.vue`

- [ ] **Step 1: Simplify Hero.vue — minimal title + subtitle only**

Replace the current large Hero with a minimal section:
- "发现最好的 AI 工具" (28px, 700 weight, white, letter-spacing -0.8px)
- Subtitle: "XX 款工具深度评测 · 持续更新" (14px, rgba(255,255,255,0.45))
- Remove CTA buttons (segmented control handles navigation now)
- Remove background decorative blobs
- Max-width 960px, padding 24px 20px, margin-bottom 0

- [ ] **Step 2: Rebuild SearchBar.vue — category pills row only (search moved to header)**

Replace current SearchBar with just the category filter pills row:
- Horizontal flex, wrap, gap 8px
- Active pill: `.pill-active` (blue bg)
- Inactive pill: `.pill-inactive` (glass bg)
- Categories: 全部 / IDE / CLI / 大模型 / 多模态 / Agent / MCP
- Remove the search input (search is now a trigger in the header that scrolls/focuses)
- Remove curated tags section (simplified to just categories)
- Keep store interactions: `toolsStore.setSelectedCategory()`

- [ ] **Step 3: Verify Hero and SearchBar render**

Run: `cd website && npm run dev`
Expected: Minimal hero title + category pills row

- [ ] **Step 4: Commit**

```bash
git add website/src/components/Hero.vue website/src/components/SearchBar.vue
git commit -m "feat: rebuild Hero and SearchBar with Apple minimal design"
```

---

### Task 7: Rebuild ToolGrid.vue and Home.vue

**Files:**
- Modify: `website/src/components/ToolGrid.vue`
- Modify: `website/src/views/Home.vue`

- [ ] **Step 1: Rebuild ToolGrid.vue — glass cards in 3-column grid**

Update grid styling:
- Grid gap from `gap-6` to `gap-[10px]`
- Keep responsive: 1/2/3 columns
- Max-width 960px centered
- Remove section heading "AI工具列表" (Hero covers this)
- Keep TransitionGroup animation
- Keep empty state but restyle with glass-card

- [ ] **Step 2: Rebuild Home.vue — assemble new sections**

Rewrite Home.vue to assemble the new design:
1. Hero (minimal)
2. Category pills (SearchBar)
3. Featured card (new: "编辑推荐" — pick highest-rated tool)
4. Tool grid
- Remove IntroVideo, stats ribbon, ToolOfTheDayCompact, FunFact, featured resources carousel, replay button
- Add a featured/editor-pick card between pills and grid

Featured card template:
```html
<div class="glass-card glass-card-interactive p-5 mb-4 flex items-center gap-4"
     style="border-radius: 16px;"
     @click="$router.push({ name: 'tool-detail', params: { id: featuredTool.id } })">
  <div class="w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl flex-shrink-0"
       style="background: linear-gradient(135deg, rgba(10,132,255,0.3), rgba(191,90,242,0.2));">
    <!-- icon -->
  </div>
  <div class="flex-1 min-w-0">
    <div class="text-[10px] text-apple-purple uppercase tracking-wider font-semibold mb-0.5">编辑推荐</div>
    <div class="text-lg font-bold text-white tracking-tight">{{ featuredTool.name }}</div>
    <div class="text-[13px] text-white/50 mt-0.5 line-clamp-1">{{ featuredTool.personalExperience?.insights }}</div>
  </div>
  <div class="flex-shrink-0">
    <span class="btn-capsule btn-capsule-sm">查看</span>
  </div>
</div>
```

- [ ] **Step 3: Verify home page renders with new design**

Run: `cd website && npm run dev`
Expected: Minimal hero + category pills + featured card + glass card grid

- [ ] **Step 4: Commit**

```bash
git add website/src/components/ToolGrid.vue website/src/views/Home.vue
git commit -m "feat: rebuild Home page with Apple App Store layout"
```

---

### Task 8: Rebuild ToolCard with Apple Glass Design

**Files:**
- Modify: `website/src/components/ToolCard.vue`

- [ ] **Step 1: Rewrite ToolCard.vue with Apple card design**

Replace entire template and styles. New design:
- `.glass-card .glass-card-interactive` base
- Padding 16px, border-radius 14px
- Header: 36px icon (colored bg per category, radius 9px, emoji) + name (14px, 600) + developer (11px, white/40)
- Description: 12px, white/45, line-height 1.5, line-clamp-2
- Footer: star rating (11px, yellow #ffd60a) + numeric score badge (green bg pill)
- Remove: category color bar, gradient hover overlay, pro highlight, "查看详情" CTA text
- Keep: router-link wrapper, category color logic

Category icon background colors:
```javascript
const categoryIconBg = {
  ide: 'rgba(10,132,255,0.15)',
  cli: 'rgba(10,132,255,0.15)',
  'deep-research': 'rgba(48,209,88,0.15)',
  llm: 'rgba(255,214,10,0.15)',
  multimodal: 'rgba(191,90,242,0.15)',
  agent: 'rgba(255,159,10,0.15)',
  mcp: 'rgba(255,69,58,0.15)',
}
```

Category emoji icons:
```javascript
const categoryEmoji = {
  ide: '⚡',
  cli: '💻',
  'deep-research': '🔬',
  llm: '🤖',
  multimodal: '🎨',
  agent: '🧠',
  mcp: '🔗',
}
```

- [ ] **Step 2: Run existing ToolCard tests**

Run: `cd website && npm run test -- --run src/components/__tests__/ToolCard.spec.js`
Expected: Some tests may fail due to changed DOM structure

- [ ] **Step 3: Update ToolCard tests for new DOM structure**

Update `website/src/components/__tests__/ToolCard.spec.js`:
- Update stubs (remove ToolLogo if no longer used)
- Update DOM queries to match new template
- Test: renders tool name and developer
- Test: shows star rating
- Test: renders as link to tool detail
- Test: displays score badge

- [ ] **Step 4: Verify all tests pass**

Run: `cd website && npm run test -- --run`
Expected: All tests pass

- [ ] **Step 5: Commit**

```bash
git add website/src/components/ToolCard.vue website/src/components/__tests__/ToolCard.spec.js
git commit -m "feat: rebuild ToolCard with Apple glass design"
```

---

## Chunk 4: Tool Detail Page

### Task 9: Rebuild ToolDetail.vue with Apple Detail Layout

**Files:**
- Modify: `website/src/views/ToolDetail.vue`

- [ ] **Step 1: Rewrite ToolDetail.vue template**

Full rewrite. Max-width 720px centered. Sections (all use glass-card):

1. **Back nav header**: `← 返回` (blue, clickable) + centered tool name + empty spacer
2. **Tool header**: 64px gradient icon + name (24px) + developer (14px) + star rating + fun ranking + "访问官网" capsule CTA
3. **Info grid**: 3-column grid — 定价 / 上下文窗口 / 中文支持 (`.info-cell`)
4. **Insight card**: 💡 使用心得 title + insights text
5. **Radar chart**: ScoreRadar in glass-card container
6. **Pros/Cons dual column**: Green-tinted card for pros, red-tinted card for cons
7. **SWOT grid**: 2x2 inside glass-card, each cell with colored left border
8. **Tags**: Capsule pills row (.tag-pill-highlight for "推荐", .tag-pill-default for others)

Keep all existing data bindings and computed properties. Just replace the template and remove unused styles.

- [ ] **Step 2: Verify detail page renders for a real tool**

Run: `cd website && npm run dev`
Navigate to: `http://localhost:8765/#/tool/cursor`
Expected: Full Apple-style detail page with all sections

- [ ] **Step 3: Commit**

```bash
git add website/src/views/ToolDetail.vue
git commit -m "feat: rebuild ToolDetail with Apple vibrancy layout"
```

---

## Chunk 5: Secondary Pages

### Task 10: Restyle Comparison.vue

**Files:**
- Modify: `website/src/views/Comparison.vue`

- [ ] **Step 1: Update Comparison.vue styling**

Key changes:
- Page max-width: 960px centered
- Recommended groups: capsule pills (`.pill-active` / `.pill-inactive`)
- Selected tools display: glass-card with remove button
- Comparison table: glass-card container, rows with alternating subtle bg
- Table header: sticky, glass-nav material
- Replace all `bg-white/5`, `bg-surface`, `border-white/10` patterns with glass system classes
- Keep all existing logic (sorting, selection, max 4)

- [ ] **Step 2: Verify comparison page works end-to-end**

Run: `cd website && npm run dev`
Navigate to comparison, select tools, verify table renders
Expected: Glass-styled comparison with working interactions

- [ ] **Step 3: Commit**

```bash
git add website/src/views/Comparison.vue
git commit -m "feat: restyle Comparison page with Apple glass design"
```

---

### Task 11: Restyle Matcher.vue

**Files:**
- Modify: `website/src/views/Matcher.vue`

- [ ] **Step 1: Update Matcher.vue styling**

Key changes:
- Category selection buttons: capsule pills
- Decision tree questions: glass-card containers
- Option buttons: pill-inactive, blue when selected
- Result card: glass-card with tool info + match score badge (green)
- Scenario guide table: info-cell grid
- Max-width 720px centered

- [ ] **Step 2: Verify matcher flow works**

Run: `cd website && npm run dev`
Navigate to matcher, complete a flow
Expected: Glass-styled matcher with working decision tree

- [ ] **Step 3: Commit**

```bash
git add website/src/views/Matcher.vue
git commit -m "feat: restyle Matcher page with Apple glass design"
```

---

### Task 12: Restyle Pricing.vue

**Files:**
- Modify: `website/src/views/Pricing.vue`

- [ ] **Step 1: Update Pricing.vue styling**

Key changes:
- Budget tier buttons: capsule pills
- Recommended combo cards: glass-cards
- Pricing table: glass-card container with info-cell rows
- Cost calculator tip: glass-card with blue accent
- Progress bars: Apple blue `#0a84ff`
- Max-width 960px centered

- [ ] **Step 2: Verify pricing page renders**

Run: `cd website && npm run dev`
Expected: Glass-styled pricing with working tier filter

- [ ] **Step 3: Commit**

```bash
git add website/src/views/Pricing.vue
git commit -m "feat: restyle Pricing page with Apple glass design"
```

---

### Task 13: Restyle Workflows.vue

**Files:**
- Modify: `website/src/views/Workflows.vue`

- [ ] **Step 1: Update Workflows.vue styling**

Key changes:
- Workflow tab buttons: segmented control or capsule pills
- Step cards: glass-cards with blue numbered circle badges
- Tips boxes: glass-card with blue left border
- Pitfalls grid: glass-cards per category
- Prompt templates: glass-card with copy button
- Best practices: glass-cards
- Max-width 960px centered

- [ ] **Step 2: Verify workflows page renders**

Run: `cd website && npm run dev`
Expected: Glass-styled workflows with working tab switching

- [ ] **Step 3: Commit**

```bash
git add website/src/views/Workflows.vue
git commit -m "feat: restyle Workflows page with Apple glass design"
```

---

## Chunk 6: Remaining Components & Sub-Components

### Task 14: Update ScoreRadar, LoadingSpinner, and ToolLogo

**Files:**
- Modify: `website/src/components/ScoreRadar.vue`
- Modify: `website/src/components/LoadingSpinner.vue`
- Modify: `website/src/components/ToolLogo.vue`

- [ ] **Step 1: Update ScoreRadar.vue colors**

Change radar fill to `rgba(10,132,255,0.15)`, stroke to `rgba(10,132,255,0.6)`. Labels use `rgba(255,255,255,0.4)`.

- [ ] **Step 2: Update LoadingSpinner.vue and ToolLogo.vue**

LoadingSpinner: Replace any `primary` color references with `#0a84ff` / `text-apple-blue`.
ToolLogo: Update border/background to match glass material system.

- [ ] **Step 3: Commit**

```bash
git add website/src/components/ScoreRadar.vue website/src/components/LoadingSpinner.vue website/src/components/ToolLogo.vue
git commit -m "feat: update ScoreRadar, LoadingSpinner, ToolLogo with Apple colors"
```

---

### Task 15: Restyle ToolDetail Sub-Components (ToolRating, ToolReviews, VideoPlayer)

**Files:**
- Modify: `website/src/components/ToolRating.vue` — used in ToolDetail for community rating
- Modify: `website/src/components/ToolReviews.vue` — used in ToolDetail for community reviews
- Modify: `website/src/components/VideoPlayer.vue` — used in ToolDetail and Resources

- [ ] **Step 1: Restyle ToolRating.vue**

Update star colors to Apple yellow `#ffd60a`, background to glass-card material, text colors to Apple text hierarchy.

- [ ] **Step 2: Restyle ToolReviews.vue**

Update review cards to glass-card style, text colors to Apple hierarchy, buttons to capsule style.

- [ ] **Step 3: Restyle VideoPlayer.vue**

Update container to glass-card, controls to Apple colors. Minimal changes — keep video functionality intact.

- [ ] **Step 4: Commit**

```bash
git add website/src/components/ToolRating.vue website/src/components/ToolReviews.vue website/src/components/VideoPlayer.vue
git commit -m "feat: restyle ToolRating, ToolReviews, VideoPlayer with Apple glass design"
```

---

### Task 16: Restyle Gamification Widgets

**Files:**
- Modify: `website/src/components/gamification/LevelBadge.vue`
- Modify: `website/src/components/gamification/XpBar.vue`
- Modify: `website/src/components/gamification/StreakCounter.vue`
- Modify: `website/src/components/gamification/UserProfilePanel.vue`
- Modify: `website/src/components/gamification/AchievementGrid.vue`
- Modify: `website/src/components/gamification/AchievementToast.vue`

- [ ] **Step 1: Restyle gamification widgets**

Apply glass-card material to panels, Apple system colors to progress bars (blue), badges (purple), and achievements. Keep existing functionality. These components are used in Profile.vue and Header's UserProfilePanel.

- [ ] **Step 2: Commit**

```bash
git add website/src/components/gamification/
git commit -m "feat: restyle gamification widgets with Apple glass design"
```

---

### Task 17: Restyle Interactive Components (Quiz, Battle, Personality)

**Files:**
- Modify: `website/src/components/interactive/QuizGame.vue`
- Modify: `website/src/components/interactive/QuizQuestion.vue`
- Modify: `website/src/components/interactive/PersonalityQuiz.vue`
- Modify: `website/src/components/interactive/PersonalityResult.vue`
- Modify: `website/src/components/interactive/ToolBattle.vue`
- Modify: `website/src/components/interactive/ShareCardPreview.vue`
- Modify: `website/src/components/BattleResults.vue`

- [ ] **Step 1: Restyle interactive components**

Apply glass-card material to question cards and result panels. Use pill-active/pill-inactive for option buttons. Apple system colors for scores and feedback. Keep all quiz/battle logic intact.

- [ ] **Step 2: Commit**

```bash
git add website/src/components/interactive/ website/src/components/BattleResults.vue
git commit -m "feat: restyle interactive components with Apple glass design"
```

---

### Task 18: Restyle Remaining Views (NotFound, Resources, Quiz, Profile)

**Files:**
- Modify: `website/src/views/NotFound.vue`
- Modify: `website/src/views/Resources.vue`
- Modify: `website/src/views/Quiz.vue`
- Modify: `website/src/views/Profile.vue`

- [ ] **Step 1: Restyle NotFound.vue and Resources.vue**

NotFound: glass-card centered message, capsule CTA button.
Resources: glass-card grid for resource items, pill filters, Apple colors.

- [ ] **Step 2: Restyle Quiz.vue and Profile.vue**

Quiz: glass-card containers, segmented control for quiz types.
Profile: glass-cards for user info, achievements, stats. Apple system colors.

- [ ] **Step 3: Commit**

```bash
git add website/src/views/NotFound.vue website/src/views/Resources.vue website/src/views/Quiz.vue website/src/views/Profile.vue
git commit -m "feat: restyle remaining views with Apple glass design"
```

---

### Task 19: Restyle AuthModal and ToastContainer

**Files:**
- Modify: `website/src/components/AuthModal.vue`
- Modify: `website/src/components/ToastContainer.vue`

- [ ] **Step 1: Restyle AuthModal.vue**

Update modal overlay and panel to glass-elevated material, buttons to btn-capsule, input fields to input-field class.

- [ ] **Step 2: Restyle ToastContainer.vue**

Update toast cards to glass-elevated material, status colors to Apple system colors (green for success, red for error, blue for info).

- [ ] **Step 3: Commit**

```bash
git add website/src/components/AuthModal.vue website/src/components/ToastContainer.vue
git commit -m "feat: restyle AuthModal and ToastContainer with Apple glass design"
```

---

## Chunk 7: Final Verification & Cleanup

### Task 20: Full Build, Lint, and Test Verification

**Files:** None (verification only)

- [ ] **Step 1: Run linter**

Run: `cd website && npm run lint`
Expected: No errors (warnings acceptable)

- [ ] **Step 2: Run all tests**

Run: `cd website && npm run test -- --run`
Expected: All tests pass

- [ ] **Step 3: Run production build**

Run: `cd website && npm run build`
Expected: Build succeeds, check output size is reasonable

- [ ] **Step 4: Preview production build**

Run: `cd website && npm run preview`
Navigate through all pages: Home, Detail, Comparison, Matcher, Pricing, Workflows
Expected: All pages render correctly with Apple design

- [ ] **Step 5: Final commit if any fixes needed**

```bash
git add -A website/
git commit -m "fix: address build/lint/test issues from UI modernization"
```

---

### Task 21: Cleanup Unused Code

**Files:**
- Check: `website/src/components/CategoryShowcase.vue` — likely unused, verify and delete
- Check: `website/src/components/CompareView.vue` — verify usage
- Check: `website/src/components/IntroVideo.vue` — no longer imported from Home, verify no other usage
- Check: `website/src/components/gamification/ToolOfTheDay.vue` — verify usage
- Check: `website/src/components/gamification/ToolOfTheDayCompact.vue` — removed from Home
- Check: `website/src/components/gamification/FunFact.vue` — removed from Home

- [ ] **Step 1: Search for imports of potentially unused components**

Run: `grep -r "CategoryShowcase\|CompareView\|IntroVideo\|ToolOfTheDay\|ToolOfTheDayCompact\|FunFact" website/src/ --include="*.vue" --include="*.js" -l`

- [ ] **Step 2: Delete truly unused components**

Only delete files with zero imports.

- [ ] **Step 3: Verify build still succeeds**

Run: `cd website && npm run build`
Expected: Build completes without errors

- [ ] **Step 4: Commit cleanup**

```bash
git add -A website/src/
git commit -m "chore: remove unused components after UI modernization"
```
