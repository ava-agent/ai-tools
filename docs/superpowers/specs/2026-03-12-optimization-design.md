# AI Tools 网站优化设计文档

> 日期：2026-03-12
> 范围：内容完善 + 视觉优化 + 数据准确性
> 优先级：页面展示和内容 > 性能

## 背景

ai-tools 网站当前收录 82 款 AI 工具，但数据质量参差不齐：
- 28 款工具的 insights/personalExperience 内容过于简短（< 50-80 字符）
- 13 款工具 cons 仅 1 项，缺乏客观性
- 70/82 工具缺少 radarChart 字段
- categories.js 定义了 5 个分类，但 tools.js 实际有 6 个（缺 MCP）
- 视觉展示较为基础，缺乏数据可视化

## Phase 1：数据内容扩充

### 目标
将 28 款内容薄弱工具的数据质量提升至 B+ 级别。

### 标准
- `personalExperience.insights` ≥ 100 字符
- `pros` ≥ 4 项
- `cons` ≥ 2 项
- 所有文本需有实质内容，避免泛泛而谈

### 优先级分组

**P0 — 多模态工具（质量 D 级）**：混元3D、Meshy、Midjourney、DALL-E 3、Sora、可灵、Stable Diffusion、Udio、Suno

**P1 — Agent 工具（质量 C 级）**：Dify、Coze、AutoGPT、LangChain、CrewAI

**P2 — 补充工具**：其余 14 款内容薄弱工具

### 同步修复
- 13 款工具 cons 扩充至 ≥ 2 项

## Phase 2：分类体系补全

### 目标
在 `categories.js` 中增加 MCP 分类定义。

### 新增定义
```javascript
{
  id: 'mcp',
  name: 'MCP Tools',
  nameZh: 'MCP 工具',
  icon: 'Plug',
  description: 'MCP 协议工具，连接 AI 与外部服务',
  color: 'cyan',
  examples: ['Playwright MCP', 'Supabase MCP', 'GitHub MCP']
}
```

### 联动更新
- `quickSelectionGuide` 增加 MCP 场景
- `recommendedCombos` 酌情更新

## Phase 3：视觉优化

### 3.1 首页 Home.vue
- 顶部统计栏：动态展示工具总数、分类数、最近更新日期
- 分类筛选卡片化：带图标 + 工具数量 badge

### 3.2 工具详情 ToolDetail.vue
- SWOT 分析色彩编码：S=绿、W=红、O=蓝、T=橙
- 版本/定价信息表格化展示
- personalExperience 区域视觉增强

### 3.3 对比页 Comparison.vue
- 推荐对比组合快捷入口
- 对比维度高亮差异项

### 3.4 工具卡片 ToolCard.vue
- 评分星级可视化
- 分类色带标识

## Phase 4：动态评分可视化

### 目标
为 70 款缺少 radarChart 的工具动态生成评分雷达图。

### 方案
创建 `ScoreRadar.vue` 组件：
- 基于工具现有数据（rating, chineseSupport, pros/cons 数量等）计算 5 维度分数
- 使用 CSS/Canvas 绘制雷达图，无需额外依赖
- 维度：代码能力、易用性、中文支持、性价比、生态丰富度

### 数据映射
```
代码能力 = personalExperience.rating × 20
易用性 = 基于 pros 中关键词匹配
中文支持 = chineseSupport × 20
性价比 = 基于 freeQuota 和 pricing 推算
生态丰富度 = tags.length × 10 (cap at 100)
```

## 验收标准

1. 所有 82 款工具 insights ≥ 100 字符
2. 所有工具 cons ≥ 2 项
3. categories.js 包含 6 个分类（含 MCP）
4. SWOT 分析有色彩编码
5. ScoreRadar 组件正常渲染
6. `npm run build` 无错误
7. `npm run test` 全部通过
