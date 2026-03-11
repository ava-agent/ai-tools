# AI工具全书 - 2026深度集成与实战教学版

> 82 款 AI 工具深度评测与选型指南，涵盖 AI IDE、LLM、CLI、多模态、Agent、MCP 等类别

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 特性

- **82 款工具评测** - 覆盖 AI IDE、LLM、Deep Research、CLI、多模态、Agent 平台、MCP 工具等类别
- **SWOT 分析** - 每个工具的优势、劣势、机会、威胁分析
- **智能搜索和筛选** - 按名称、开发者、类别、标签筛选
- **社区功能** - 工具评分、评论、Battle 投票（Supabase 驱动）
- **游戏化体验** - 经验值、成就系统、个性测试、每日推荐
- **云同步** - 登录后自动同步游戏化进度
- **双版本支持** - 区分国内版(CN)和国际版(Global)
- **响应式设计** - 深色主题，完美适配桌面和移动设备
- **PWA 支持** - Service Worker 离线缓存

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:8765

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

访问 http://localhost:8766

### 运行测试

```bash
npm run test
```

### 代码检查

```bash
npm run lint
npm run format
```

## 项目结构

```
website/
├── public/                 # 静态资源
│   ├── logo.svg           # 网站 Logo
│   ├── favicon.svg        # 网站图标
│   ├── og-image.png       # Open Graph 图片
│   ├── manifest.json      # PWA manifest
│   ├── sw.js              # Service Worker
│   ├── images/            # 工具图片、雷达图
│   ├── videos/            # 工具演示视频
│   └── pdfs/              # PDF 资源
├── src/
│   ├── components/         # Vue 组件（24+）
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── ToolCard.vue
│   │   ├── ToolGrid.vue
│   │   ├── SearchBar.vue
│   │   ├── ToolLogo.vue
│   │   ├── ToolRating.vue
│   │   ├── AuthModal.vue
│   │   ├── ErrorBoundary.vue
│   │   ├── ToastContainer.vue
│   │   ├── IntroVideo.vue
│   │   ├── PdfViewer.vue
│   │   └── gamification/   # 游戏化组件
│   ├── views/              # 页面组件（懒加载）
│   │   ├── Home.vue        # 工具卡片网格
│   │   ├── ToolDetail.vue  # 工具详情页
│   │   ├── Comparison.vue  # 横向对比
│   │   ├── Matcher.vue     # 智能匹配
│   │   ├── Pricing.vue     # 订阅定价指南
│   │   ├── Workflows.vue   # 工作流实践
│   │   ├── Resources.vue   # 资源中心
│   │   ├── Quiz.vue        # 互动测验
│   │   ├── Profile.vue     # 用户档案
│   │   └── NotFound.vue    # 404 页面
│   ├── stores/             # Pinia 状态管理
│   │   ├── tools.js        # 工具数据与过滤
│   │   ├── ui.js           # UI 状态
│   │   ├── auth.js         # 认证状态
│   │   ├── gamification.js # 游戏化进度
│   │   ├── achievements.js # 成就追踪
│   │   └── community.js    # 社区评分/评论
│   ├── data/               # 数据文件
│   │   └── tools.js        # 82 款工具数据库
│   ├── composables/        # Vue 3 组合式函数
│   │   ├── useEasterEggs.js
│   │   ├── useLocalStorage.js
│   │   ├── usePerformance.js
│   │   └── useShareCard.js
│   ├── lib/                # 工具库
│   │   ├── supabase.js     # Supabase 客户端
│   │   └── syncService.js  # 云同步服务
│   ├── utils/
│   │   └── helpers.js      # 辅助函数
│   ├── router/
│   │   └── index.js        # Vue Router 配置
│   ├── plugins/
│   │   └── piniaLocalStorage.js
│   ├── App.vue             # 根组件
│   ├── main.js             # 应用入口
│   └── style.css           # 全局样式
├── vite.config.js          # Vite 配置
├── tailwind.config.js      # Tailwind CSS 配置
├── vitest.config.js        # 测试配置
├── vercel.json             # Vercel 部署配置
├── Dockerfile              # Docker 构建配置
├── nginx.conf              # Nginx 服务器配置
└── package.json            # 项目配置
```

## 技术栈

- **前端框架**：Vue.js 3.5（Composition API + `<script setup>`）
- **构建工具**：Vite 5.4
- **路由管理**：Vue Router 4.6
- **状态管理**：Pinia 2.3
- **样式框架**：Tailwind CSS 3.4
- **图标库**：Lucide Vue Next
- **后端服务**：Supabase（认证、数据库、云同步）
- **测试框架**：Vitest 1.6 + Vue Test Utils
- **代码质量**：ESLint 8 + Prettier 3
- **部署平台**：Vercel / Docker + Nginx

## 配置 Supabase（可选）

社区功能（评分、评论、云同步）需要 Supabase：

```bash
cp .env.example .env
# 编辑 .env，填入 Supabase 项目信息
```

未配置 Supabase 时，网站仍可正常运行，社区功能将自动隐藏。

## Docker 部署

```bash
# 构建镜像
docker build -t ai-tools-website .

# 运行容器
docker run -p 8080:80 ai-tools-website
```

## 性能优化

- 代码分割（vue-vendor、icons、路由级懒加载）
- 资源指纹（hash 命名，长期缓存）
- Gzip 压缩
- ES2020 构建目标
- PWA 离线缓存

## 添加新工具

编辑 `src/data/tools.js`，按以下结构添加工具对象：

```javascript
{
  id: 'tool-id',
  name: 'Tool Name',
  category: 'ide|cli|llm|deep-research|multimodal|agent|mcp',
  subcategory: '细分分类',
  developer: 'Developer Name',
  versions: [
    { type: 'CN/Global', pricing: '定价信息', models: '支持的模型', link: 'https://example.com' }
  ],
  freeQuota: '免费额度说明',
  contextWindow: '上下文窗口',
  chineseSupport: 4,  // 1-5
  pros: ['优势1', '优势2'],
  cons: ['劣势1', '劣势2'],
  bestFor: '最佳使用场景',
  personalExperience: {
    rating: 5,  // 1-5
    insights: '使用心得',
    pitfalls: ['注意事项']
  },
  swot: { S: '优势', W: '劣势', O: '机会', T: '威胁' },
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
