# Apple-Style UI Modernization Design Spec

> AI Tools 网站全面现代化 UI 升级，参考 macOS App Store + Apple HIG Dark Mode 风格

## 1. Design Direction

**选定方向**：macOS/iOS App 风格（非营销网站，非 apple.com 风格）

参考 macOS App Store 的信息密集型应用设计，而非 Apple 营销网站的大图叙事。重点是高效的工具浏览与信息获取体验。

**全量重建**：所有页面和组件统一重建，不做增量修补。

## 2. Design System

### 2.1 Color Palette — Apple System Colors (Dark Mode)

| Token | Value | Usage |
|-------|-------|-------|
| `--color-blue` | `#0a84ff` | Primary actions, links, selected states |
| `--color-green` | `#30d158` | Positive indicators, scores, pros |
| `--color-purple` | `#bf5af2` | Featured labels, accent highlights |
| `--color-yellow` | `#ffd60a` | Star ratings, warnings |
| `--color-red` | `#ff453a` | Cons, errors, negative indicators |
| `--color-orange` | `#ff9f0a` | Threats, secondary warnings |

### 2.2 Background System

```
Body background: linear-gradient(180deg, #05051a 0%, #0a0a2a 40%, #0f0a1e 100%)
```

Subtle radial gradient orbs for depth:
- Blue orb: `radial-gradient(circle, rgba(10,132,255,0.06-0.08) 0%, transparent 70%)`
- Purple orb: `radial-gradient(circle, rgba(191,90,242,0.06) 0%, transparent 70%)`

### 2.3 Vibrancy Material System

三层透明材质，通过 opacity 和 blur 区分层级：

| Layer | Background | Blur | Border | Usage |
|-------|-----------|------|--------|-------|
| Surface (Nav) | `rgba(255,255,255,0.04)` | `blur(20px)` | `rgba(255,255,255,0.06)` 1px bottom | Top navigation bar |
| Card | `rgba(255,255,255,0.04)` | `blur(16px)` | `rgba(255,255,255,0.06)` 1px | Content cards |
| Elevated | `rgba(255,255,255,0.06)` | `blur(16px)` | `rgba(255,255,255,0.08)` 1px | Hover states, modals |

### 2.4 Typography

保留现有 IBM Plex Sans + JetBrains Mono 字体组合。

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Page title | 28px | 700 | `#fff` |
| Section title | 18px | 700 | `#fff` |
| Card title | 14px | 600 | `#fff` |
| Body text | 13px | 400 | `rgba(255,255,255,0.55)` |
| Caption | 12px | 400 | `rgba(255,255,255,0.45)` |
| Label | 11px | 400 | `rgba(255,255,255,0.35)` |
| Micro label | 10px | 600 | Accent color (uppercase, letter-spacing: 1px) |

Letter-spacing: Titles use `-0.3px` to `-0.8px` (Apple tight tracking).

### 2.5 Border Radius

| Element | Radius |
|---------|--------|
| Capsule buttons/pills | `980px` |
| Large cards | `16px` |
| Standard cards | `14px` |
| Info cells | `12px` |
| Small elements | `9px` |
| Segmented control | `8px` (outer), `6px` (inner) |
| Logo icon | `6px` |

### 2.6 Spacing

| Token | Value |
|-------|-------|
| Page max-width | `960px` (home), `720px` (detail) |
| Page padding | `24px 20px` |
| Card padding | `16px` |
| Card gap | `10px` |
| Section gap | `16-20px` |
| Nav height | `48px` |

### 2.7 Shadows & Effects

- Cards: No visible box-shadow (vibrancy border replaces shadow)
- Transitions: `all 0.2s ease`
- Hover: Increase background opacity to `rgba(255,255,255,0.06)` + border to `rgba(255,255,255,0.08)`

## 3. Component Specifications

### 3.1 Navigation Bar

```
Height: 48px
Background: rgba(255,255,255,0.04) + backdrop-filter: blur(20px)
Border: bottom 1px solid rgba(255,255,255,0.06)
Position: sticky top
Content max-width: 960px, centered
```

**Left**: Logo icon (24px, gradient `#0a84ff` → `#bf5af2`, radius 6px) + "AI Tools" text (15px, 600 weight)

**Center**: Segmented Control
- Container: `rgba(255,255,255,0.06)`, radius 8px, padding 2px
- Active segment: `rgba(255,255,255,0.12)`, radius 6px, white text, 500 weight
- Inactive segment: `rgba(255,255,255,0.45)` text
- Segments: 发现 / 对比 / 匹配 / 定价
- Font: 12px

**Right**: Search trigger (icon + "搜索" placeholder, same vibrancy card style, radius 8px)

### 3.2 Category Filter Pills

```
Layout: flex, wrap, gap 8px
Active pill: background #0a84ff, color #fff, 500 weight
Inactive pill: background rgba(255,255,255,0.06), color rgba(255,255,255,0.6)
All pills: padding 6px 16px, radius 980px, font-size 13px
Inactive has: backdrop-filter blur(10px)
```

Categories: 全部 / IDE / CLI / 大模型 / 多模态 / Agent / MCP

### 3.3 Featured Card (Editor's Pick)

```
Background: vibrancy card material
Border-radius: 16px
Padding: 20px
Layout: flex, align-items center, gap 16px
```

- **Icon**: 56px square, gradient bg (`rgba(10,132,255,0.3)` → `rgba(191,90,242,0.2)`), radius 14px, centered emoji 24px
- **Content**: Micro label ("编辑推荐", purple `#bf5af2`, uppercase), title (18px, 700), description (13px, 0.5 opacity)
- **CTA**: Capsule button (blue `#0a84ff`, 12px, radius 980px, padding 6px 16px)

### 3.4 Tool Card (Grid Item)

```
Background: vibrancy card material
Border-radius: 14px
Padding: 16px
Grid: 3 columns on desktop, gap 10px
Hover: elevated material
```

- **Header row**: flex, gap 10px
  - Icon: 36px square, colored background (category-specific, 0.15 opacity), radius 9px, emoji 16px
  - Name: 14px, 600 weight, `-0.2px` letter-spacing
  - Developer: 11px, `rgba(255,255,255,0.4)`
- **Description**: 12px, `rgba(255,255,255,0.45)`, line-height 1.5, margin-bottom 10px
- **Footer**: flex, space-between
  - Stars: 11px, yellow `#ffd60a`
  - Score badge: 11px, green `#30d158`, background `rgba(48,209,88,0.1)`, radius 6px, padding 2px 8px

**Category icon colors**:

| Category | Background |
|----------|-----------|
| IDE | `rgba(10,132,255,0.15)` (blue) |
| CLI | `rgba(10,132,255,0.15)` (blue) |
| Deep Research | `rgba(48,209,88,0.15)` (green) |
| LLM | `rgba(255,214,10,0.15)` (yellow) |
| Multimodal | `rgba(191,90,242,0.15)` (purple) |
| Agent | `rgba(255,159,10,0.15)` (orange) |
| MCP | `rgba(255,69,58,0.15)` (red) |

### 3.5 Info Grid Cell

```
Background: vibrancy card material
Border-radius: 12px
Padding: 14px
Text-align: center
```

- Label: 11px, `rgba(255,255,255,0.35)`
- Value: 14px, 600 weight, `#fff`

### 3.6 Insight Card

```
Background: vibrancy card material
Border-radius: 14px
Padding: 16px
```

- Header: 💡 emoji + "使用心得", 13px, 600 weight, white
- Content: 13px, `rgba(255,255,255,0.55)`, line-height 1.7

### 3.7 Pros & Cons Dual Column

```
Layout: grid, 2 columns, gap 10px
```

**Pros card**:
- Background: `rgba(48,209,88,0.04)`
- Border: 1px solid `rgba(48,209,88,0.1)`
- Title color: `#30d158`

**Cons card**:
- Background: `rgba(255,69,58,0.04)`
- Border: 1px solid `rgba(255,69,58,0.1)`
- Title color: `#ff453a`

Both: radius 14px, padding 16px, items 12px with bullet points, line-height 1.8

### 3.8 SWOT Grid

```
Layout: grid, 2x2, gap 8px
Container: vibrancy card, radius 14px, padding 16px
```

Each cell:
- Left border: 3px solid accent color
- Background: accent color at 0.06 opacity
- Border-radius: 0 8px 8px 0
- Padding: 10px 12px
- Label: 11px, 600 weight, accent color
- Content: 12px, `rgba(255,255,255,0.5)`

| Cell | Accent |
|------|--------|
| S 优势 | `#30d158` |
| W 劣势 | `#ff453a` |
| O 机会 | `#0a84ff` |
| T 威胁 | `#ff9f0a` |

### 3.9 Tag Pills

```
Layout: flex, wrap, gap 6px
```

- Highlighted tag: `rgba(10,132,255,0.1)` bg, `#0a84ff` text
- Normal tag: `rgba(255,255,255,0.06)` bg, `rgba(255,255,255,0.5)` text
- All: padding 4px 12px, radius 980px, font-size 11px

### 3.10 Capsule CTA Button

```
Background: #0a84ff
Color: #fff
Padding: 8px 20px (large) / 6px 16px (small)
Border-radius: 980px
Font: 13px / 12px, 500 weight
```

### 3.11 Radar Chart (ScoreRadar)

Existing `ScoreRadar.vue` component retained. Container uses vibrancy card material. Five dimensions: 能力 / 易用 / 中文 / 性价比 / 生态.

Fill: `rgba(10,132,255,0.15)`, stroke: `rgba(10,132,255,0.6)`.

## 4. Page Specifications

### 4.1 Home Page (`/`)

**Sections (top → bottom)**:
1. **Navigation bar** — sticky, vibrancy material
2. **Hero** — "发现最好的 AI 工具" (28px, 700) + subtitle "82 款工具深度评测 · 持续更新" (14px)
3. **Category pills** — horizontal filter row
4. **Featured card** — Editor's pick with CTA
5. **Tool card grid** — 3-column responsive grid

**Responsive**:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column

### 4.2 Tool Detail Page (`/tool/:id`)

**Header bar**: Back arrow ("← 返回", blue `#0a84ff`) + centered tool name + empty spacer. Max-width 720px.

**Sections (top → bottom)**:
1. **Tool header** — 64px icon + name (24px) + developer (14px) + rating + CTA "访问官网"
2. **Info grid** — 3-column: 定价 / 上下文窗口 / 中文支持
3. **Insight card** — 使用心得
4. **Radar chart** — ScoreRadar in vibrancy container
5. **Pros & Cons** — Dual column
6. **SWOT grid** — 2x2 analysis
7. **Tags** — Capsule pills row

### 4.3 Comparison Page (`/comparison`)

保持现有功能（工具横向对比），视觉升级：

- **选择器区域**: Vibrancy card container, tool selection capsule pills
- **对比表格**: Vibrancy card rows, alternating `rgba(255,255,255,0.02)` / transparent
- **推荐分组**: 5 preset comparison groups as capsule quick-select buttons
- **表头**: Sticky, vibrancy material, tool icons + names

### 4.4 Matcher Page (`/matcher`)

智能工具匹配器，视觉升级：

- **问答流程**: Each question in vibrancy card, options as selectable capsule pills
- **Active option**: Blue `#0a84ff` background
- **Result cards**: Same as Home tool cards, with match score badge in green

### 4.5 Pricing Page (`/pricing`)

订阅定价指南，视觉升级：

- **定价卡片**: Vibrancy cards with highlighted "推荐" card using purple `#bf5af2` top border
- **价格对比表**: Info grid cells style, 3-column layout
- **免费额度**: Green `#30d158` accent badges

### 4.6 Workflows Page (`/workflows`)

工作流最佳实践，视觉升级：

- **Workflow cards**: Vibrancy containers with step indicators
- **Step numbers**: Blue `#0a84ff` circle badges
- **Tool references**: Inline capsule tags linking to tool details

## 5. Tailwind CSS Configuration

Replace existing custom Tailwind theme with Apple design tokens:

```javascript
// tailwind.config.js
colors: {
  apple: {
    blue: '#0a84ff',
    green: '#30d158',
    purple: '#bf5af2',
    yellow: '#ffd60a',
    red: '#ff453a',
    orange: '#ff9f0a',
  },
  surface: {
    base: '#05051a',
    mid: '#0a0a2a',
    deep: '#0f0a1e',
  },
  glass: {
    card: 'rgba(255,255,255,0.04)',
    elevated: 'rgba(255,255,255,0.06)',
    border: 'rgba(255,255,255,0.06)',
    'border-hover': 'rgba(255,255,255,0.08)',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.55)',
    tertiary: 'rgba(255,255,255,0.45)',
    quaternary: 'rgba(255,255,255,0.35)',
    muted: 'rgba(255,255,255,0.25)',
  },
},
borderRadius: {
  capsule: '980px',
  card: '14px',
  'card-lg': '16px',
  cell: '12px',
  icon: '9px',
  control: '8px',
  'control-inner': '6px',
  logo: '6px',
},
backdropBlur: {
  nav: '20px',
  card: '16px',
  pill: '10px',
},
```

### 5.1 Utility Classes

Define reusable glass utility classes in `src/assets/main.css`:

```css
.glass-nav {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.glass-card {
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
}

.glass-elevated {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
}

.capsule {
  border-radius: 980px;
}

.apple-gradient-bg {
  background: linear-gradient(180deg, #05051a 0%, #0a0a2a 40%, #0f0a1e 100%);
}
```

## 6. Migration Notes

### 6.1 Components to Rebuild

| Current Component | Action |
|------------------|--------|
| `AppHeader.vue` | Rebuild → Vibrancy nav + segmented control |
| `ToolCard.vue` | Rebuild → Glass card with icon/score/stars |
| `SearchBar.vue` | Rebuild → Compact search trigger in nav |
| `CategoryFilter.vue` | Rebuild → Capsule pills row |
| `ScoreRadar.vue` | Keep logic, wrap in glass container |
| `LoadingSpinner.vue` | Keep, minor visual update |
| All view components | Rebuild layout and styling |

### 6.2 Stores

No store changes needed — data model and state management remain identical.

### 6.3 Router

No router changes — same routes, same hash mode. Only view component visuals change.

### 6.4 Data

No data model changes — `tools/index.js` structure stays the same.

## 7. Responsive Breakpoints

| Breakpoint | Grid Columns | Max-Width | Notes |
|-----------|-------------|-----------|-------|
| Mobile (< 640px) | 1 | 100% | Stack everything, full-width pills scroll |
| Tablet (640-1024px) | 2 | 720px | Compact nav, 2-col SWOT |
| Desktop (> 1024px) | 3 | 960px | Full layout as designed |

## 8. Accessibility

- Minimum contrast ratio: 4.5:1 for body text on glass backgrounds
- Focus states: 2px blue `#0a84ff` outline with 2px offset
- Motion: Respect `prefers-reduced-motion` — disable transitions
- Keyboard: Full tab navigation for segmented control, pills, cards
