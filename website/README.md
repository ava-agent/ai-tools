# AI工具全书 - 持续核验的实战选型指南

> 125+ 款 AI 工具深度评测与选型指南，涵盖 AI IDE、LLM、CLI、多模态、Agent、MCP、AI 技能等 7 大类别

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-aitools.rxcloud.group-blue)](https://aitools.rxcloud.group)

**在线访问**：[https://aitools.rxcloud.group](https://aitools.rxcloud.group)

<p align="center">
  <img src="../docs/screenshots/landing-hero.png" alt="Landing Page" width="700">
</p>

## 特性

- **125+ 款工具评测** - 覆盖 AI IDE、LLM、CLI、多模态、Agent 平台、MCP 工具、AI 技能等 7 大类别
- **SWOT 分析** - 每个工具的优势、劣势、机会、威胁分析
- **雷达图评分** - 功能、性能、易用性、生态、性价比五维可视化
- **智能搜索和筛选** - 按名称、开发者、类别、标签筛选
- **横向对比** - 最多 4 款工具同屏对比
- **工作流指南** - 6 套实战工作流模板
- **社区功能** - 工具评分、评论、Battle 投票（Supabase 驱动）
- **游戏化体验** - 经验值、成就系统、个性测试、每日推荐
- **云同步** - 登录后自动同步游戏化进度
- **PWA 支持** - Service Worker 离线缓存

## 快速开始

```bash
npm install         # 安装依赖
npm run dev         # 开发服务器（:8765）
npm run build       # 生产构建
npm run preview     # 预览构建（:8766）
npm run test        # 运行一次性测试
npm run test:watch  # 本地 watch 测试
npm run lint        # 代码检查（自动修复）
npm run format      # 代码格式化
```

> 内容维护提示：工具价格、模型版本、免费额度和产品状态正在按 2026-06-25 的目标分批核验。未标明来源或核验日期的强时效信息，应先按“待核验”处理。

## 页面截图

<details>
<summary>展开查看所有页面</summary>

### 全景浏览
<img src="../docs/screenshots/tool-browse.png" alt="Tool Browse" width="700">

### 工具详情
<img src="../docs/screenshots/tool-detail.png" alt="Tool Detail" width="700">

### 横向对比
<img src="../docs/screenshots/tool-compare.png" alt="Tool Comparison" width="700">

### 工作流指南
<img src="../docs/screenshots/workflows.png" alt="Workflows" width="700">

</details>

## 项目结构

```
website/
├── public/                 # 静态资源（logo, favicon, images, videos）
├── src/
│   ├── components/         # Vue 组件（30+）
│   │   ├── landing/        # 落地页组件（Hero, ToolLandscape, Recommendations）
│   │   └── gamification/   # 游戏化组件
│   ├── views/              # 页面组件（懒加载）
│   │   ├── Landing.vue     # 首页落地页
│   │   ├── Home.vue        # 工具卡片网格
│   │   ├── ToolDetail.vue  # 工具详情（SWOT/雷达图）
│   │   ├── Comparison.vue  # 横向对比
│   │   ├── Workflows.vue   # 工作流实践
│   │   ├── Matcher.vue     # 智能匹配
│   │   ├── Pricing.vue     # 订阅定价指南
│   │   ├── Resources.vue   # 资源中心
│   │   ├── Quiz.vue        # 互动测验
│   │   └── Profile.vue     # 用户档案
│   ├── stores/             # Pinia 状态管理
│   │   ├── tools.js        # 工具数据与过滤（125+ 工具）
│   │   ├── ui.js           # UI 状态
│   │   ├── auth.js         # 认证状态
│   │   ├── gamification.js # 游戏化进度
│   │   ├── achievements.js # 成就追踪
│   │   └── community.js    # 社区评分/评论
│   ├── data/tools.js       # 125+ 工具数据库
│   ├── composables/        # Vue 3 组合式函数
│   ├── lib/                # Supabase 集成
│   ├── utils/              # 工具函数
│   └── router/             # Vue Router（Hash 模式）
├── vite.config.js          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── vitest.config.js        # 测试配置
├── vercel.json             # Vercel 部署配置
└── Dockerfile              # Docker 构建配置
```

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue.js | 3.4 | 前端框架（Composition API + `<script setup>`） |
| Vite | 8.1 | 构建工具 |
| Tailwind CSS | 3.4 | 样式框架（深色主题） |
| Pinia | 2.1 | 状态管理 |
| Vue Router | 4.2 | 路由（Hash 模式） |
| Lucide | 0.344 | 图标库 |
| Supabase | 2.97 | 认证、数据库、云同步 |
| Vitest | 4.1 | 测试框架 |
| ESLint + Prettier | 8 / 3 | 代码质量 |

## 配置 Supabase（可选）

```bash
cp .env.example .env
# 编辑 .env，填入 Supabase 项目信息
```

未配置 Supabase 时，网站仍可正常运行，社区功能将自动隐藏。

## Docker 部署

```bash
docker build -t ai-tools-website .
docker run -p 8080:80 ai-tools-website
```

## 添加新工具

编辑 `src/data/tools.js`，按以下结构添加工具对象：

```javascript
{
  id: 'tool-id',
  name: 'Tool Name',
  category: 'ide|cli|llm|multimodal|agent|mcp|skill',
  developer: 'Developer Name',
  versions: [{ type: 'CN/Global', pricing: '定价', models: '模型', link: 'URL' }],
  verificationStatus: 'needs-review',
  lastVerified: null,
  sources: ['官方文档或价格页 URL'],
  personalExperience: { rating: 5, insights: '心得', pitfalls: ['注意事项'] },
  swot: { S: '优势', W: '劣势', O: '机会', T: '威胁' },
  radarChart: { 功能: 5, 性能: 4, 易用性: 5, 生态: 4, 性价比: 3 },
  tags: ['标签1', '标签2']
}
```

## 贡献指南

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add: 新功能描述'`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 Pull Request

## 许可证

MIT License
