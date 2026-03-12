# AI Tools 网站内容与视觉优化 Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand content for 35 underdeveloped AI tools, fix 14 sparse cons, add MCP category to categories.js, and enhance visual presentation across Home/ToolDetail/ToolCard/Comparison views.

**Architecture:** Phase 1-2 are pure data edits in `src/data/tools.js` and `src/data/categories.js`. Phase 3 modifies Vue components for visual enhancements. Phase 4 creates a new `ScoreRadar.vue` component. All changes are additive — no breaking changes to existing functionality.

**Tech Stack:** Vue 3 (Composition API), Tailwind CSS, Vite 5, Vitest

**Spec:** `docs/superpowers/specs/2026-03-12-optimization-design.md`

---

## Chunk 1: Data Content — Multimodal Tools (P0)

These 9 multimodal tools have the worst content quality (insights < 50 chars). Each tool needs: insights ≥ 100 chars, pros ≥ 4 items, cons ≥ 2 items.

### Task 1: Expand Midjourney, DALL-E 3, Stable Diffusion content

**Files:**
- Modify: `website/src/data/tools.js` (search for each tool's `id` field)

- [ ] **Step 1: Expand Midjourney data**

Find the tool with `id: 'midjourney'` and update:

```javascript
// insights: current is "艺术风格最强的图像生成工具。" (14 chars)
// Replace with:
insights: '艺术风格最强的 AI 图像生成工具，V6.1 版本在细节、光影和构图上达到了新高度。通过 Discord 使用的方式门槛较高，但社区生态极其丰富，大量风格模板和提示词可直接复用。适合需要高质量艺术风格图像的设计师和创意工作者，不适合需要快速迭代的场景。',

// pros: current has 3 items, expand to ≥ 4
pros: [
  '艺术风格质量业界领先，光影和构图极其出色',
  '社区生态丰富，海量风格模板和提示词库',
  'V6.1 版本细节表现大幅提升',
  '支持图片混合、风格迁移等高级功能',
  '生成速度快，标准模式约 30 秒出图',
],

// cons: current has 2 items, keep or expand
```

- [ ] **Step 2: Expand DALL-E 3 data**

Find `id: 'dalle'` and update:

```javascript
// insights: current is "与 ChatGPT 集成方便，文字渲染不错。" (22 chars)
insights: '与 ChatGPT 深度集成是最大优势，直接在对话中描述需求即可生成图像，无需学习复杂的提示词语法。文字渲染能力是所有 AI 图像工具中最强的，适合生成包含文字的海报和配图。但艺术风格相对保守，不如 Midjourney 有创意张力。适合需要快速出图、对艺术风格要求不极致的场景。',

// pros: current has 3, expand to ≥ 4
pros: [
  '与 ChatGPT 无缝集成，自然语言描述即可出图',
  '文字渲染能力最强，海报和配图利器',
  '安全过滤严格，商用风险低',
  '支持图像编辑和局部重绘功能',
],

// cons: current is ['订阅制'], expand to ≥ 2
cons: [
  '需要 ChatGPT Plus 订阅（$20/月）',
  '艺术风格偏保守，创意表现力不如 Midjourney',
  '无法精确控制构图和画面元素位置',
],
```

- [ ] **Step 3: Expand Stable Diffusion data**

Find `id: 'stable-diffusion'` and update:

```javascript
// insights: current is "开源免费，本地部署自由度高。" (14 chars)
insights: '开源生态最完善的 AI 图像生成工具，SD3.5 和 SDXL 模型质量已接近商业工具。本地部署完全免费且无审核限制，LoRA 微调可训练专属风格。但上手门槛高，需要配置 Python 环境和 GPU，ComfyUI 工作流学习曲线陡峭。适合有技术背景、需要高度定制化的用户。',

pros: [
  '完全开源免费，无使用次数限制',
  '本地部署隐私安全，无内容审核',
  'LoRA/ControlNet 等扩展生态极其丰富',
  '可训练专属风格模型，定制化能力最强',
  'ComfyUI 工作流支持复杂图像处理流水线',
],

// cons: current has 2, OK
```

- [ ] **Step 4: Run build to verify no syntax errors**

```bash
cd ai-tools/website && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add src/data/tools.js
git commit -m "content: expand Midjourney, DALL-E 3, Stable Diffusion tool data"
```

### Task 2: Expand Sora, 可灵, Meshy, 混元3D content

**Files:**
- Modify: `website/src/data/tools.js`

- [ ] **Step 1: Expand Sora data**

Find `id: 'sora'` and update:

```javascript
// insights: "视频质量极高，Sora 2 已于 2025 年 9 月发布。免费用户已无法使用，需要付费订阅。" (47 chars)
insights: 'OpenAI 的视频生成旗舰，Sora 2 在画质和动作连贯性上达到了业界顶级水平。支持文本生成视频、图片转视频、视频延展等多种模式。但定价较高，需要 ChatGPT Plus 或 Pro 订阅，且免费额度已取消。生成速度较慢，复杂场景需要等待数分钟。适合追求最高画质的专业内容创作者。',
```

- [ ] **Step 2: Expand 可灵 data**

Find `id: 'kling'` and update:

```javascript
// insights: "动作连贯性在国内工具中最好，推荐使用。" (19 chars)
insights: '快手旗下的 AI 视频生成工具，动作连贯性和物理真实感在国产工具中领先。可灵 2.0 支持 1080P 高清输出，运镜控制和场景切换能力强。每日免费赠送积分足够日常使用，性价比极高。中文提示词理解准确，特别适合国内内容创作者。短视频和社交媒体内容制作的首选国产工具。',

pros: [
  '动作连贯性和物理真实感业界领先',
  '每日免费赠送积分，日常使用零成本',
  '中文提示词理解准确',
  '支持 1080P 高清视频输出',
  '运镜控制和场景切换能力强',
],

// cons: ['时长限制'], expand to ≥ 2
cons: [
  '单次生成时长限制（最长 10 秒）',
  '海外访问速度较慢，需要中国网络环境',
],
```

- [ ] **Step 3: Expand Meshy data**

Find `id: 'meshy'` and update:

```javascript
// insights: "快速生成 3D 模型的好工具。" (15 chars)
insights: '目前最易用的 AI 3D 模型生成工具，支持文字描述和图片两种方式生成 3D 模型。Meshy-4 版本在几何细节和纹理质量上有显著提升，支持 PBR 材质导出。适合游戏开发、建筑可视化等场景的快速原型制作。免费版每月有生成额度，专业版 $20/月性价比不错。',

pros: [
  '文字/图片均可生成 3D 模型，上手简单',
  '支持 PBR 材质和多种格式导出（GLB/FBX/OBJ）',
  'Meshy-4 几何细节和纹理质量显著提升',
  '免费版有月度生成额度',
],

// cons: ['质量待提升'], expand
cons: [
  '复杂场景和精细模型质量仍有差距',
  '免费版生成速度较慢，需排队等待',
],
```

- [ ] **Step 4: Expand 混元3D data**

Find `id: 'hunyuan3d'` and update:

```javascript
// insights: "腾讯出品，中文场景友好。" (12 chars)
insights: '腾讯推出的 AI 3D 生成工具，对中文提示词的理解在同类工具中最好。混元 3D 2.0 支持从单张图片生成高质量 3D 模型，纹理细节和几何精度持续提升。作为腾讯生态的一部分，与微信小程序、QQ 等平台的集成潜力大。目前仍在快速迭代中，适合关注国产 3D 生成能力发展的开发者。',

pros: [
  '中文提示词理解最佳',
  '单张图片即可生成 3D 模型',
  '腾讯生态集成潜力大',
  '持续快速迭代，版本更新频繁',
],

// cons: ['生态较新'], expand
cons: [
  '生态和社区相比 Meshy 仍较年轻',
  '导出格式和工作流集成有待完善',
],
```

- [ ] **Step 5: Run build**

```bash
cd ai-tools/website && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/data/tools.js
git commit -m "content: expand Sora, Kling, Meshy, Hunyuan3D tool data"
```

### Task 3: Expand 美图AI, 剪映, Runway, Pika, Ideogram, 即梦 content

**Files:**
- Modify: `website/src/data/tools.js`

- [ ] **Step 1: Expand 美图AI data**

Find `id: 'meitu-ai'` and update:

```javascript
// insights: 55 chars, needs expansion to ≥ 100
insights: '国内最成熟的 AI 图像编辑工具，美颜、背景替换、风格转换等功能开箱即用。移动端体验极佳，操作流畅直觉化，完全不需要设计基础。AI 消除和扩图功能实用性强，处理产品图和社交媒体配图效率极高。免费版功能已经很够用，VIP 价格也很亲民。适合电商、社交媒体运营等需要大量图片处理的场景。',
```

- [ ] **Step 2: Expand 剪映 data**

Find `id: 'jianying'` and update:

```javascript
// insights: 65 chars, needs expansion to ≥ 100
insights: '字节跳动旗下的视频编辑神器，AI 功能全面且易用。智能字幕识别准确率极高，一键生成字幕省去大量手工时间。智能配音、AI 特效、自动卡点等功能让视频制作门槛大幅降低。与抖音深度集成，模板和素材库极其丰富。移动端和桌面端体验一致，随时随地可以编辑。国内短视频创作者的标配工具，免费版功能已非常强大。',
```

- [ ] **Step 3: Expand Runway data**

Find `id: 'runway'` and update:

```javascript
// insights: 83 chars, close but needs ≥ 100
insights: 'AI 视频生成领域的先驱和标杆工具。Gen-4 在几何一致性和运动控制上实现重大突破，画面质量接近专业影视级别。支持文生视频、图生视频、运动笔刷等多种创作模式，创意自由度高。Act-One 功能可以用真人表情驱动虚拟角色。但价格是同类产品中最高的，$12/月起步且额度有限。适合专业影视制作和高端内容创作。',
```

- [ ] **Step 4: Expand Pika data**

Find `id: 'pika'` and update:

```javascript
// insights: 81 chars, close but needs ≥ 100
insights: 'AI 视频生成的平价之选，Pika 2.5 画质大幅提升，已接近 Runway 水平。独特的创意特效（挤压、融化、爆炸等）是差异化亮点，非常适合社交媒体吸睛内容。$8/月起的价格对预算有限的内容创作者极为友好。场景一致性和运动连贯性持续改善，性价比在视频生成工具中数一数二。适合社交媒体短视频和创意内容制作。',
```

- [ ] **Step 5: Expand Ideogram data**

Find `id: 'ideogram'` and update:

```javascript
// insights: 74 chars, needs ≥ 100
insights: '文字渲染最强的 AI 图像生成工具，在图中生成清晰准确的文字是独一无二的优势。Ideogram 3.0 画质全面提升，风格多样性也明显增强。特别适合 Logo 设计、海报制作、社交媒体配图等需要文字元素的场景。免费版每天可生成约 10 张图，日常使用完全够用。价格亲民，$8/月专业版性价比高。是 Midjourney 和 DALL-E 之外的有力补充选项。',
```

- [ ] **Step 6: Expand 即梦 data**

Find `id: 'jimeng'` and update:

```javascript
// insights: 99 chars, just under 100, expand slightly
insights: '字节跳动（剪映/星图团队）的 AI 创作平台，中文提示词支持最佳，直接生成中文字体是独特优势。即梦 3.0 海外版支持电影级画质和 2K 输出，质量已接近 Midjourney。每日登录送 80-100 积分的免费策略极为慷慨。支持图片生成、视频生成和图片编辑三大功能板块，功能全面性在国产工具中领先。',
```

- [ ] **Step 7: Run build**

```bash
cd ai-tools/website && npm run build
```

- [ ] **Step 8: Commit**

```bash
git add src/data/tools.js
git commit -m "content: expand Meitu, Jianying, Runway, Pika, Ideogram, Jimeng tool data"
```

---

## Chunk 2: Data Content — Agent, LLM & Other Tools

### Task 4: Expand Agent category tools (Dify, Coze, AutoGPT, LangChain, Perplexity, NanoBanana, 氢离子)

**Files:**
- Modify: `website/src/data/tools.js`

- [ ] **Step 1: Expand Coze data**

Find `id: 'coze'` and update:

```javascript
// insights: "无代码搭建智能体，插件生态丰富。" (16 chars)
insights: '字节跳动推出的 AI Bot 构建平台，无代码可视化搭建智能体是最大亮点。插件市场丰富，可快速集成搜索、绘图、数据分析等能力。工作流编排支持条件分支和循环，能构建相当复杂的自动化流程。与飞书、微信等国内平台集成便利，适合企业内部自动化场景。免费额度慷慨，入门门槛极低。',

pros: [
  '无代码可视化搭建，零门槛上手',
  '插件生态丰富，集成能力强',
  '与飞书/微信等国内平台深度集成',
  '工作流编排支持条件分支和循环',
  '免费额度慷慨',
],

// cons: ['复杂流程有限'], expand
cons: [
  '极复杂多步骤工作流稳定性有待提升',
  '对海外服务集成不如 n8n 等平台丰富',
],
```

- [ ] **Step 2: Expand Dify data**

Find `id: 'dify'` and update:

```javascript
// insights: "开源可自托管，工作流能力强。" (14 chars)
insights: '最受欢迎的开源 LLMOps 平台，可自托管保障数据隐私。可视化工作流编排能力强大，支持 RAG、Agent、文本生成等多种应用类型。支持接入 OpenAI、Claude、本地模型等几乎所有主流 LLM。社区活跃，插件和模板资源丰富。Docker 一键部署简单，但生产环境配置需要一定运维经验。适合有自托管需求的团队和企业。',

pros: [
  '完全开源，可自托管保障数据安全',
  '可视化工作流编排，支持复杂流程',
  '支持几乎所有主流 LLM 接入',
  '社区活跃，模板和插件丰富',
  'Docker 一键部署，上手快',
],

// cons: ['需要部署'], expand
cons: [
  '自托管需要服务器资源和运维能力',
  '高并发场景下性能调优门槛较高',
],
```

- [ ] **Step 3: Expand AutoGPT data**

Find `id: 'autogpt'` and update:

```javascript
// insights: "开创性的自主 Agent，但稳定性需要优化。" (22 chars)
insights: 'AI Agent 概念的开创者，首次实现了让 AI 自主分解目标、规划步骤并执行任务。AutoGPT 平台版提供可视化界面和预置 Agent 模板，降低了使用门槛。但自主执行的不可控性仍是核心挑战，复杂任务容易陷入循环或偏离目标。作为概念验证和学习 Agent 机制的工具很有价值，生产环境建议用更成熟的框架。',

pros: [
  'AI Agent 概念先驱，社区影响力巨大',
  '自主任务分解和执行能力',
  '平台版提供可视化界面和模板',
  '开源免费，学习 Agent 机制的好工具',
],
```

- [ ] **Step 4: Expand LangChain data**

Find `id: 'langchain'` and update:

```javascript
// insights: "最流行的 Agent 开发框架，灵活度高。" (21 chars)
insights: '最流行的 LLM 应用开发框架，提供了从 RAG 到 Agent 的完整工具链。LangGraph 子项目专注于有状态多步骤 Agent 编排，是构建复杂 Agent 的首选。LangSmith 平台提供调试、追踪和评估能力。但框架抽象层较多，新手学习曲线陡峭，且 API 变化频繁需要持续关注版本更新。适合有 Python 基础的 AI 应用开发者。',

pros: [
  '生态最完善，文档和教程资源极其丰富',
  'LangGraph 有状态 Agent 编排能力强大',
  'LangSmith 提供专业的调试追踪工具',
  '支持几乎所有 LLM 和向量数据库',
],
```

- [ ] **Step 5: Expand Perplexity data**

Find `id: 'perplexity'` and update:

```javascript
// insights: "带引用的搜索型 AI Agent，适合快速调研和验证信息。" (29 chars)
insights: 'AI 搜索引擎的标杆产品，每个回答都标注信息来源和引用链接，可信度远高于普通 AI 对话。Pro Search 会自动分解复杂问题，逐步搜索后综合答案，调研效率极高。支持上传文件和图片进行多模态搜索。免费版每天有一定的 Pro Search 次数，日常调研够用。最适合需要快速验证信息、做竞品调研和技术选型的场景。',

pros: [
  '回答标注信息来源，可信度高',
  'Pro Search 自动分解复杂问题深度搜索',
  '支持多模态搜索（文件、图片）',
  '免费版功能实用，日常调研够用',
  '搜索结果时效性强，接近实时信息',
],

// cons: ['代码能力一般'], expand
cons: [
  '代码生成和技术推理能力不如专用编程助手',
  '深度分析能力不如 Claude/GPT 等对话模型',
],
```

- [ ] **Step 6: Expand NanoBanana data**

Find `id: 'nanobanana'` and update:

```javascript
// insights: "生成架构图和示意图的好工具，免费好用。" (19 chars)
insights: '专注于 AI 生成架构图和流程图的轻量工具，输入文字描述即可生成专业的技术图表。支持系统架构图、流程图、ER 图等多种图表类型，排版和配色自动优化。完全免费使用，无需注册。生成速度快，适合技术方案评审和文档配图。但定制化能力有限，复杂图表建议作为初稿再手动调整。',

pros: [
  '文字描述即可生成专业技术图表',
  '支持架构图、流程图、ER 图等多种类型',
  '完全免费，无需注册',
  '排版和配色自动优化，开箱即用',
],

// cons: ['功能专一'], expand
cons: [
  '功能专注于图表生成，不支持其他场景',
  '复杂图表的布局和细节定制能力有限',
],
```

- [ ] **Step 7: Expand 氢离子 data**

Find `id: 'qinglizi'` and update:

```javascript
// insights: "医学专业 AI，中文医学知识库强大。低幻觉、高循证是亮点。用于健康相关问题咨询。" (40 chars)
insights: '国内医学垂直领域最专业的 AI 工具，低幻觉和高循证是核心优势。回答基于医学文献和临床指南，标注证据等级和参考文献，可信度远高于通用 AI。支持症状分析、用药查询、检查报告解读等场景。中文医学知识库覆盖面广，对罕见病和中医药也有不错的支持。适合医疗从业者辅助决策和普通用户健康咨询，但不能替代专业医生诊断。',
```

- [ ] **Step 8: Run build**

```bash
cd ai-tools/website && npm run build
```

- [ ] **Step 9: Commit**

```bash
git add src/data/tools.js
git commit -m "content: expand Agent category and specialty tools data"
```

### Task 5: Expand LLM category tools (Claude, GPT, Gemini, DeepSeek, Qwen, GLM, Kimi, MiniMax, 豆包, Grok)

**Files:**
- Modify: `website/src/data/tools.js`

- [ ] **Step 1: Expand Claude data**

Find `id: 'claude'` and update:

```javascript
// insights: 93 chars, close to 100
insights: 'Claude 4.5 Sonnet 是目前最均衡的编程模型，代码能力极强，推理稳定，多模态能力显著提升。Opus 推理能力最强但价格较高，Haiku 快速响应性价比高。Artifacts 功能可以实时生成可交互的网页应用，非常适合原型验证。主要用于方案设计、技术文档撰写和复杂代码重构，是编程场景的首选对话模型。',
```

- [ ] **Step 2: Expand GPT data**

Find `id: 'gpt'` and update:

```javascript
// insights: 80 chars
insights: 'GPT-5.2 系列是 OpenAI 最新旗舰，推理能力大幅提升，多模态支持最全面（文本、图片、音频、视频）。o3 是专门的推理增强模型，适合数学和逻辑密集任务。ChatGPT 生态最成熟，插件、GPTs 商店和 Canvas 协作编辑等功能丰富。DALL-E 3 集成于订阅内，一站式满足文本+图像需求。适合需要全能型 AI 助手的用户。',
```

- [ ] **Step 3: Expand Gemini data**

Find `id: 'gemini'` and update:

```javascript
// insights: "Gemini 3 系列是 Google 最新旗舰，1M+ 上下文是巨大优势，推理能力显著提升。" (47 chars)
insights: 'Google 最新旗舰模型系列，最大亮点是 200 万 Token 的超长上下文窗口，处理大型代码库和长文档无压力。Gemini 3 Pro 推理能力显著提升，编码能力已接近 Claude 4.5。Deep Research 功能可自动撰写带引用的深度研究报告，调研场景极为强大。免费版 API 额度慷慨，非常适合长上下文场景和深度调研任务。',
```

- [ ] **Step 4: Expand DeepSeek data**

Find `id: 'deepseek'` and update:

```javascript
// insights: 64 chars
insights: 'DeepSeek R1 推理能力极强，在数学和编程基准测试中可与顶级模型媲美。API 价格远低于 GPT 和 Claude，成本效益是最大优势。完全开源可自托管，适合对数据隐私有要求的场景。V3 模型在日常对话和通用任务上表现出色。中文理解和生成能力在开源模型中领先。唯一不足是峰值期间 API 响应速度可能较慢。',
```

- [ ] **Step 5: Expand Qwen data**

Find `id: 'qwen'` and update:

```javascript
// insights: "Qwen3 中文表现优秀，Qwen-Coder 代码专项版本能力强。生成图片、海报等中文内容效果好。" (50 chars)
insights: '阿里推出的 Qwen3 系列是国产大模型的领军者，中文理解和生成能力出色。Qwen-Coder 代码专项版本在 HumanEval 等基准上表现优异。Qwen3-235B-A22B 采用 MoE 架构，推理和长上下文能力显著增强。生成中文图片、海报等内容效果好。开源版本可自由部署，商业化友好。超长上下文价格陡增是主要短板。',

// cons: ['超长上下文价格陡增'], expand
cons: [
  '超长上下文价格陡增，大文档处理成本高',
  '英文场景表现不如 Claude/GPT 等海外模型',
],
```

- [ ] **Step 6: Expand GLM data**

Find `id: 'glm'` and update:

```javascript
// insights: "GLM-4.7 前端审美和完整度不错，价格便宜。" (24 chars)
insights: '智谱 AI 推出的 GLM-4.7 系列性价比极高，前端代码生成的审美和完整度令人惊喜。价格在国产大模型中非常有竞争力，适合预算敏感的场景。支持联网搜索、代码执行、图像理解等多模态能力。清言（ChatGLM）对话体验流畅，智能体平台功能不断完善。极复杂推理任务上与 Claude/GPT 有差距，但日常使用绰绰有余。',

// cons: ['极复杂任务弱于 Claude/GPT'], expand
cons: [
  '极复杂推理和多步骤任务表现弱于 Claude/GPT',
  '英文内容生成质量不如中文',
],
```

- [ ] **Step 7: Expand Kimi data**

Find `id: 'kimi'` and update:

```javascript
// insights: "Kimi K2.5 长文档处理能力强，中文对话流畅。" (26 chars)
insights: '月之暗面推出的 Kimi K2.5 长文档处理能力是核心亮点，20 万字长文一次读入，摘要和问答质量高。中文对话体验流畅自然，回答风格讨喜。探索版功能支持深度搜索和多步骤推理。免费版额度相对慷慨，日常使用基本够用。适合长文档阅读、论文总结、合同审阅等需要处理大量文本的场景。',
```

- [ ] **Step 8: Expand MiniMax data**

Find `id: 'minimax'` and update:

```javascript
// insights: "M2.1 多语言和后端能力不错，价格极具竞争力。" (24 chars)
insights: 'MiniMax 的 M2.1 模型在多语言能力和后端代码生成上表现不错，性价比在国产模型中极具竞争力。语音合成技术是其独特优势，海螺 AI 的语音克隆和 TTS 能力业界领先。支持 API 和网页两种使用方式，接入灵活。适合需要语音+文本多模态能力的应用场景，以及对成本敏感的 API 调用场景。',

// cons: ['知名度不如顶级玩家'], expand
cons: [
  '知名度和社区生态不如 GPT/Claude 等头部产品',
  '极复杂推理任务表现有提升空间',
],
```

- [ ] **Step 9: Expand 豆包 data**

Find `id: 'doubao'` and update:

```javascript
// insights: "豆包适合" (4 chars) — severely truncated, needs full rewrite
insights: '字节跳动旗下的 AI 对话助手，背靠豆包大模型。日常对话体验流畅，回答风格活泼接地气。与抖音、飞书等字节生态深度集成，办公场景实用性强。支持联网搜索、图片理解、文档处理等多模态功能。免费使用且无需复杂注册，入门门槛极低。适合日常问答和轻量级办公辅助，深度推理和编程任务建议用更专业的模型。',

// cons: ['长上下文分档涨价'], expand
cons: [
  '长上下文使用时按档位涨价，成本不够透明',
  '深度推理和复杂编程能力不如顶级模型',
],
```

- [ ] **Step 10: Expand Grok data**

Find `id: 'grok'` and update:

```javascript
// insights: 68 chars
insights: 'xAI 的旗舰模型 Grok-4 推理能力显著提升，号称「地球上最聪明的 AI」在多项基准中领先。最大差异化优势是实时接入 X (Twitter) 数据，时事和热点话题回答极为及时。内容政策相对宽松，对创意写作限制少。与 X Premium 捆绑订阅，已有 X 会员的用户性价比高。适合需要实时信息和开放内容政策的场景。',
```

- [ ] **Step 11: Run build**

```bash
cd ai-tools/website && npm run build
```

- [ ] **Step 12: Commit**

```bash
git add src/data/tools.js
git commit -m "content: expand LLM category tools data (Claude, GPT, Gemini, etc.)"
```

### Task 6: Expand remaining tools (IDE, CLI, MCP, NotebookLM) + fix truncated MCP tools

**Files:**
- Modify: `website/src/data/tools.js`

- [ ] **Step 1: Expand Replit, Kiro, GitHub Copilot, Qwen CLI data**

Find each tool by id and update:

```javascript
// replit: 89 chars, close
// insights needs slight expansion
// id: 'replit'
insights: '云端开发一体化解决方案，特别适合教学和快速原型验证。Agent 3 可自主工作 200 分钟，支持复杂多步骤任务，内置浏览器测试和自我修复能力强大。团队版 $35/月适合协作开发。无需本地环境配置是最大优势，但网络依赖性强，离线无法使用。',

// kiro: 54 chars
// id: 'kiro'
insights: 'AWS 推出的 AI IDE，最大特色是「Spec 驱动开发」模式——先用 AI 生成需求规格文档，再据此编写代码。集成 Amazon Q Developer 增强企业级能力，对 AWS 生态集成最好。适合需求拆解和规格文档场景，但纯写代码速度不如 Cursor。适合 AWS 技术栈的企业团队。',

// github-copilot: 73 chars
// id: 'github-copilot'
insights: '最成熟的 AI 编程助手，GitHub 生态集成无人能及。已推出 Agent Mode 和 MCP 支持（2025年12月），支持 GPT-4o、Claude 4.5 等多模型选择。代码补全准确率高，在 VS Code 和 JetBrains 中体验一致。适合作为与 Cursor 互补的辅助工具，特别是重度 GitHub 用户。',

// qwen-cli: 3 chars — severely truncated
// id: 'qwen-cli'
insights: '阿里推出的 AI 命令行工具，基于 Qwen3 模型。中文代码生成和理解能力在 CLI 工具中最强，每天 2000 次免费调用额度非常慷慨。支持项目级上下文理解和多文件编辑。作为 Claude Code 和 Gemini CLI 的免费补充选项非常合适，特别适合中文为主的项目开发。',
```

- [ ] **Step 2: Fix truncated MCP tool insights**

Four MCP tools have insights cut off mid-sentence:

```javascript
// id: 'context7' — truncated at 50 chars
insights: 'MCP Core 核心工具之一，零配置远程服务，编码时获取最新库文档。最大价值是解决 LLM 编码时的文档过时问题，确保使用最新 API 和最佳实践。支持主流编程语言和框架，响应速度快。每次安装新依赖或使用不熟悉的库时都应该使用。',

// id: 'sequential-thinking-mcp' — truncated at 94 chars
insights: 'Anthropic 官方出品的 MCP 工具，帮助 LLM 进行分步骤推理。对复杂问题的解决质量有显著提升，特别是架构设计权衡和 Bug 根因分析场景。不过对简单问题有过度思考的倾向，建议仅在需要深度分析时启用。',

// id: 'notion-mcp' — truncated at 79 chars
insights: 'Notion 官方 MCP，21 种工具覆盖页面、数据库、评论等所有核心操作。配合 AI IDE 使用可以在编码过程中直接创建或更新 Notion 文档，实现代码与文档的无缝同步。适合使用 Notion 做项目管理和知识库的团队。',

// id: 'supabase-mcp' — truncated at 89 chars
insights: 'Supabase 全栈开发的核心 MCP，可以直接在 AI 对话中执行 SQL、管理用户认证、操作文件存储、部署 Edge Functions。配合 Claude Code 实现从数据库设计到后端部署的全流程 AI 辅助开发，大幅提升全栈开发效率。',
```

- [ ] **Step 3: Expand NotebookLM data**

Find `id: 'notebooklm'` and update:

```javascript
// insights: 66 chars
insights: '汇报材料神器！Google 出品，完全免费。支持 9 种输出格式（PPT、视频、音频、文档等），从原始资料到成品汇报材料的效率提升巨大。音频概述功能可以把文档变成播客式对话，通勤时听特别方便。是职场人士制作汇报材料和学习总结的必备工具。上传多份资料后可交叉引用分析，洞察力强。',

// cons: ['功能较专一'], expand
cons: [
  '功能聚焦于资料整理和汇报生成，不支持通用对话',
  '上传资料有数量和大小限制',
],
```

- [ ] **Step 4: Expand openmemory-mcp data**

Find `id: 'openmemory-mcp'` and update (96 chars, just under 100):

```javascript
insights: '创新性极强的 MCP 工具，让 AI 拥有跨会话的长期记忆。可以记住你的编码风格、常用库、项目结构等偏好，每次新对话都延续个性化体验。但配置门槛较高，需要启动本地服务和向量数据库（Qdrant）。适合重度 AI 编码用户，能显著减少重复解释项目上下文的时间。',
```

- [ ] **Step 5: Run build**

```bash
cd ai-tools/website && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/data/tools.js
git commit -m "content: expand IDE/CLI/MCP tools data, fix truncated insights"
```

---

## Chunk 3: Categories & Decision Data

### Task 7: Add MCP category to categories.js

**Files:**
- Modify: `website/src/data/categories.js:4-50`

- [ ] **Step 1: Add MCP category definition**

After the `agent` category object (line ~49), add the MCP category:

```javascript
// Add after the agent category closing brace
    {
        id: 'mcp',
        name: 'MCP Tools',
        nameZh: 'MCP 工具',
        icon: 'Plug',
        description: 'MCP 协议工具，连接 AI 与外部数据源和服务',
        color: 'cyan',
        examples: ['Playwright MCP', 'Supabase MCP', 'GitHub MCP', 'Context7']
    }
```

- [ ] **Step 2: Add MCP to quickSelectionGuide**

After the last entry in `quickSelectionGuide` array, add:

```javascript
    { need: '连接外部服务/数据', primary: 'MCP Tools', secondary: 'AI Agent', tip: '先确认 IDE 是否已内置对应 MCP' }
```

- [ ] **Step 3: Run build**

```bash
cd ai-tools/website && npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/data/categories.js
git commit -m "feat: add MCP category to categories.js"
```

---

## Chunk 4: Visual Enhancements — ToolDetail SWOT & PersonalExperience

SWOT already has basic color coding (green/red/blue/yellow). Enhance with icons and stronger visual treatment.

### Task 8: Enhance SWOT visual treatment in ToolDetail.vue

**Files:**
- Modify: `website/src/views/ToolDetail.vue:270-315`

- [ ] **Step 1: Read current SWOT implementation**

Read `website/src/views/ToolDetail.vue` lines 265-320 to understand exact current markup.

- [ ] **Step 2: Enhance SWOT cards with icons and gradient borders**

Replace the existing SWOT grid section with enhanced version. Each card gets:
- A header with icon + label (e.g., Shield icon + "优势 Strengths")
- Gradient left border instead of full border
- Stronger background color treatment

The exact edits depend on current markup — read the file first, then apply changes to the SWOT div (lines ~270-315). Pattern for each card:

```html
<!-- Strengths card enhancement pattern -->
<div class="bg-green-500/5 border-l-4 border-green-500 rounded-lg p-5">
  <div class="flex items-center gap-2 mb-3">
    <Shield class="w-5 h-5 text-green-400" />
    <h3 class="text-green-400 font-semibold">优势 Strengths</h3>
  </div>
  <p class="text-white/80 leading-relaxed">{{ tool.swot?.S }}</p>
</div>
```

Apply similar pattern:
- W: `red-500` + `AlertTriangle` icon
- O: `blue-500` + `TrendingUp` icon
- T: `orange-500` + `AlertCircle` icon (change from yellow to orange for better contrast)

- [ ] **Step 3: Verify icons are imported**

Check the Lucide imports at top of ToolDetail.vue and add missing icons (Shield, AlertCircle, TrendingUp if not present).

- [ ] **Step 4: Run dev server and visually verify**

```bash
cd ai-tools/website && npm run dev
```

Open browser, navigate to any tool detail page, verify SWOT cards render correctly.

- [ ] **Step 5: Commit**

```bash
git add src/views/ToolDetail.vue
git commit -m "ui: enhance SWOT analysis visual treatment with icons and gradient borders"
```

### Task 9: Enhance PersonalExperience section in ToolDetail.vue

**Files:**
- Modify: `website/src/views/ToolDetail.vue:214-250`

- [ ] **Step 1: Read current PersonalExperience section**

Read lines 210-255 of ToolDetail.vue.

- [ ] **Step 2: Add insights text styling enhancement**

The insights text at line ~230 is currently plain text. Enhance with:
- A quote-style left border (blue gradient)
- Slightly larger font for the insights paragraph
- Background card treatment

```html
<!-- Enhanced insights display -->
<div class="bg-primary/5 border-l-4 border-primary rounded-r-lg p-4 mt-4">
  <p class="text-white/90 leading-relaxed text-base">
    {{ tool.personalExperience?.insights || '' }}
  </p>
</div>
```

- [ ] **Step 3: Run dev and verify**

```bash
cd ai-tools/website && npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/views/ToolDetail.vue
git commit -m "ui: enhance PersonalExperience insights display"
```

---

## Chunk 5: Visual Enhancements — Home & ToolCard

### Task 10: Add dynamic stats bar to Home page

**Files:**
- Modify: `website/src/views/Home.vue` (between Hero and SearchBar)
- Reference: `website/src/stores/tools.js` (categoryStats computed)

- [ ] **Step 1: Read Home.vue current structure**

Read Home.vue to identify exact insertion point between Hero and SearchBar components.

- [ ] **Step 2: Add stats section**

Insert between Hero and SearchBar a stats ribbon showing:
- Total tools count
- Category count
- Last updated date

```html
<!-- Stats ribbon — insert after Hero, before SearchBar -->
<div class="max-w-6xl mx-auto px-4 py-6">
  <div class="flex flex-wrap justify-center gap-8 text-center">
    <div>
      <div class="text-3xl font-bold text-primary">{{ toolsStore.tools.length }}</div>
      <div class="text-sm text-white/60 mt-1">AI 工具收录</div>
    </div>
    <div>
      <div class="text-3xl font-bold text-green-400">{{ Object.keys(toolsStore.categoryStats).length }}</div>
      <div class="text-sm text-white/60 mt-1">工具分类</div>
    </div>
    <div>
      <div class="text-3xl font-bold text-purple-400">2026.03</div>
      <div class="text-sm text-white/60 mt-1">最近更新</div>
    </div>
  </div>
</div>
```

Add store import if not already present:

```javascript
import { useToolsStore } from '@/stores/tools'
const toolsStore = useToolsStore()
```

- [ ] **Step 3: Run dev and verify**

```bash
cd ai-tools/website && npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/views/Home.vue
git commit -m "ui: add dynamic stats ribbon to Home page"
```

### Task 11: Enhance ToolCard rating display

**Files:**
- Modify: `website/src/components/ToolCard.vue:25-36`

- [ ] **Step 1: Read ToolCard current rating section**

Read lines 20-40 and 95-110 of ToolCard.vue.

- [ ] **Step 2: Add numeric rating next to stars**

After the star loop, add the numeric rating value:

```html
<!-- After the star v-for loop, add numeric display -->
<span class="text-sm text-white/50 ml-1">
  {{ tool.personalExperience?.rating?.toFixed(1) }}
</span>
```

- [ ] **Step 3: Add category color indicator**

At the top of the card, add a thin colored line based on category:

```html
<!-- At the very top of the card, inside the RouterLink -->
<div :class="categoryColorClass" class="h-1 rounded-t-xl"></div>
```

Add computed in script:

```javascript
const categoryColors = {
  ide: 'bg-blue-500',
  cli: 'bg-green-500',
  llm: 'bg-purple-500',
  multimodal: 'bg-pink-500',
  agent: 'bg-orange-500',
  mcp: 'bg-cyan-500',
}
const categoryColorClass = computed(() => categoryColors[props.tool.category] || 'bg-gray-500')
```

- [ ] **Step 4: Run dev and verify**

```bash
cd ai-tools/website && npm run dev
```

- [ ] **Step 5: Commit**

```bash
git add src/components/ToolCard.vue
git commit -m "ui: add numeric rating and category color indicator to ToolCard"
```

---

## Chunk 6: ScoreRadar Component

### Task 12: Create ScoreRadar.vue component

**Files:**
- Create: `website/src/components/ScoreRadar.vue`
- Modify: `website/src/views/ToolDetail.vue` (integrate component)

- [ ] **Step 1: Create ScoreRadar.vue**

Create `src/components/ScoreRadar.vue`:

```vue
<script setup>
import { computed } from 'vue'

const props = defineProps({
  tool: { type: Object, required: true },
})

// Calculate 5 dimensions from tool data (0-100 scale)
const dimensions = computed(() => {
  const t = props.tool
  const pe = t.personalExperience || {}

  const codeAbility = Math.min((pe.rating || 0) * 20, 100)
  const easeOfUse = Math.min(((t.pros?.length || 0) >= 5 ? 80 : (t.pros?.length || 0) * 16) + (t.freeQuota ? 10 : 0), 100)
  const chineseSupport = Math.min((t.chineseSupport || 0) * 20, 100)

  // Cost effectiveness: free = 100, has free quota = 70, paid only = 40
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

// SVG radar chart geometry
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
</script>

<template>
  <div class="flex flex-col items-center">
    <svg :viewBox="`0 0 ${size} ${size}`" class="w-48 h-48">
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
        fill="rgba(99, 102, 241, 0.2)"
        stroke="rgba(99, 102, 241, 0.8)"
        stroke-width="2"
      />
      <!-- Data points -->
      <circle
        v-for="(d, i) in dimensions"
        :key="'dot-' + i"
        :cx="getPoint(i, d.value).x"
        :cy="getPoint(i, d.value).y"
        r="3"
        fill="rgb(99, 102, 241)"
      />
      <!-- Labels -->
      <text
        v-for="lp in labelPositions"
        :key="lp.label"
        :x="lp.x"
        :y="lp.y"
        text-anchor="middle"
        dominant-baseline="middle"
        class="fill-white/60 text-[10px]"
      >
        {{ lp.label }}
      </text>
    </svg>
  </div>
</template>
```

- [ ] **Step 2: Integrate into ToolDetail.vue**

In ToolDetail.vue, import and use ScoreRadar when no `radarChart` data exists:

```javascript
import ScoreRadar from '@/components/ScoreRadar.vue'
```

In the template, near the personalExperience section (around line 215), add:

```html
<!-- Show ScoreRadar when no custom radarChart exists -->
<ScoreRadar v-if="!tool.radarChart" :tool="tool" />
```

- [ ] **Step 3: Run dev and verify on multiple tool pages**

```bash
cd ai-tools/website && npm run dev
```

Check 3+ tools: one IDE, one multimodal, one MCP tool.

- [ ] **Step 4: Commit**

```bash
git add src/components/ScoreRadar.vue src/views/ToolDetail.vue
git commit -m "feat: add dynamic ScoreRadar component for tool evaluation visualization"
```

---

## Chunk 7: Comparison Page Enhancement

### Task 13: Add recommended comparison groups to Comparison.vue

**Files:**
- Modify: `website/src/views/Comparison.vue`

- [ ] **Step 1: Read Comparison.vue**

Read the file to understand current structure and find where to add recommended groups.

- [ ] **Step 2: Add recommended comparison shortcuts**

At the top of the comparison page (before the table), add quick-access buttons for popular comparisons:

```html
<!-- Recommended comparison groups -->
<div class="mb-6">
  <h3 class="text-sm text-white/50 mb-3">热门对比组合</h3>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="group in recommendedGroups"
      :key="group.label"
      class="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-colors"
      @click="loadCompareGroup(group.ids)"
    >
      {{ group.label }}
    </button>
  </div>
</div>
```

Add to script:

```javascript
const recommendedGroups = [
  { label: 'AI IDE 三强', ids: ['cursor', 'windsurf', 'trae'] },
  { label: 'AI CLI 对决', ids: ['claude-code', 'gemini-cli', 'qwen-cli'] },
  { label: '国产大模型', ids: ['deepseek', 'qwen', 'glm', 'kimi'] },
  { label: '视频生成', ids: ['sora', 'kling', 'runway', 'pika'] },
  { label: '图像生成', ids: ['midjourney', 'dalle', 'stable-diffusion', 'ideogram'] },
]

function loadCompareGroup(ids) {
  toolsStore.clearCompare()
  ids.forEach(id => toolsStore.addToCompare(id))
}
```

- [ ] **Step 3: Run dev and verify**

```bash
cd ai-tools/website && npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/views/Comparison.vue
git commit -m "ui: add recommended comparison group shortcuts"
```

---

## Chunk 8: Final Verification

### Task 14: Full build, lint, and test verification

**Files:**
- All modified files

- [ ] **Step 1: Run lint**

```bash
cd ai-tools/website && npm run lint
```

Expected: No errors, warnings OK.

- [ ] **Step 2: Run build**

```bash
cd ai-tools/website && npm run build
```

Expected: Build succeeds, no errors.

- [ ] **Step 3: Run tests**

```bash
cd ai-tools/website && npm run test
```

Expected: All tests pass.

- [ ] **Step 4: Run dev server and spot-check**

```bash
cd ai-tools/website && npm run dev
```

Verify:
- Home page shows stats ribbon
- ToolCard shows numeric rating and category color
- ToolDetail SWOT has enhanced styling
- ToolDetail shows ScoreRadar for tools without radarChart
- Comparison page has recommended groups
- MCP category appears in filters

- [ ] **Step 5: Final commit if any lint fixes were needed**

```bash
git add -A
git commit -m "chore: lint fixes and final verification"
```
