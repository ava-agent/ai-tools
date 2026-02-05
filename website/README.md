# AI工具全书 - 2026深度集成与实战教学版

一个全面的AI开发工具选型指南网站，整合了10+份调研文档、SWOT分析与30+款AI工具的CN/Global双版本实战数据。

## ✨ 特性

- 🎯 **6款主流AI工具深度评测**：Cursor、Trae、Claude、DeepSeek、GitHub Copilot、Windsurf
- 📊 **完整SWOT分析**：每个工具的优势、劣势、机会、威胁
- 🔍 **智能搜索和筛选**：按名称、开发者、类别、标签筛选
- 📱 **完全响应式设计**：适配桌面端和移动端
- 🌙 **深色主题**：符合开发者使用习惯
- ⚡ **性能优化**：代码分割、懒加载、资源压缩

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 运行测试

```bash
npm run test
```

### 代码检查

```bash
npm run lint
npm run format
```

## 📁 项目结构

```
website/
├── public/                 # 静态资源
│   ├── logo.svg          # 网站 Logo
│   ├── favicon.svg       # 网站图标
│   └── og-image.png     # Open Graph 图片
├── src/
│   ├── components/        # Vue 组件
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── ToolCard.vue
│   │   ├── ToolGrid.vue
│   │   └── SearchBar.vue
│   ├── views/            # 页面组件
│   │   ├── Home.vue
│   │   ├── ToolDetail.vue
│   │   └── Comparison.vue
│   ├── stores/            # Pinia 状态管理
│   │   ├── tools.js
│   │   └── ui.js
│   ├── data/             # 数据文件
│   │   └── tools.js
│   ├── utils/            # 工具函数
│   │   └── helpers.js
│   ├── router/            # Vue Router 配置
│   │   └── index.js
│   ├── App.vue            # 根组件
│   ├── main.js            # 应用入口
│   └── style.css          # 全局样式
├── index.html             # HTML 模板
├── vite.config.js         # Vite 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── vitest.config.js       # Vitest 测试配置
├── Dockerfile            # Docker 构建配置
├── nginx.conf            # Nginx 服务器配置
└── package.json          # 项目配置
```

## 🛠️ 技术栈

- **前端框架**：Vue.js 3.4.0
- **构建工具**：Vite 5.4.21
- **路由管理**：Vue Router 4.2.0
- **状态管理**：Pinia 2.1.0
- **样式框架**：Tailwind CSS 3.4.1
- **图标库**：lucide-vue-next 0.344.0
- **测试框架**：Vitest 1.2.0
- **代码质量**：ESLint 8.56.0 + Prettier 3.2.5
- **容器化**：Docker + Nginx 1.27

## 📝 开发指南

### 添加新工具

编辑 `src/data/tools.js`，添加新的工具对象：

```javascript
{
  id: 'tool-id',
  name: 'Tool Name',
  category: 'IDE/LLM/插件',
  developer: 'Developer Name',
  versions: [
    {
      type: 'CN/Global',
      pricing: '定价信息',
      models: '支持的模型',
      link: 'https://example.com'
    }
  ],
  pros: ['优势1', '优势2'],
  cons: ['劣势1', '劣势2'],
  bestFor: '最佳使用场景',
  personalExperience: {
    rating: 5,
    insights: '使用心得',
    pitfalls: ['注意事项1', '注意事项2']
  },
  swot: {
    S: '优势描述',
    W: '劣势描述',
    O: '机会描述',
    T: '威胁描述'
  },
  tags: ['标签1', '标签2']
}
```

### 添加新页面

1. 在 `src/router/index.js` 添加路由
2. 在 `src/views/` 创建对应的 Vue 组件
3. 在 `src/components/` 创建可复用组件

### 样式规范

- 使用 Tailwind CSS 类名
- 遵循 BEM 命名约定
- 响应式设计优先（移动优先）

### 代码规范

- 使用 Vue 3 Composition API
- 组件使用 `<script setup>` 语法
- Props 和 Emits 明确定义

## 🧪 测试

### 运行测试

```bash
npm run test
```

### 测试覆盖率

```bash
npm run test:coverage
```

测试报告将生成在 `coverage/` 目录。

## 🐳 Docker 部署

### 构建镜像

```bash
docker build -t ai-tools-website .
```

### 运行容器

```bash
docker run -p 3000:80 ai-tools-website
```

### Docker Compose

```yaml
version: '3.8'
services:
  website:
    build: .
    ports:
      - "3000:80"
    environment:
      - NODE_ENV=production
```

## 📊 性能优化

- ✅ 代码分割（vue-vendor、icons、index）
- ✅ 资源指纹（hash 命名）
- ✅ Gzip 压缩
- ✅ 静态资源缓存（1年）
- ✅ 懒加载（路由级别）

## 🔒 安全性

- ✅ CSP（内容安全策略）配置
- ✅ HTTPS 支持（生产环境）
- ✅ 依赖安全（定期更新）
- ✅ 敏感信息保护

## 📄 浏览器支持

- ✅ Chrome/Edge（最新版本）
- ✅ Firefox（最新版本）
- ✅ Safari（最新版本）
- ✅ 移动端浏览器（iOS Safari、Chrome Mobile）

## 🤝 贡献指南

欢迎贡献代码、文档、工具评测！

1. Fork 项目
2. 创建特性分支：`git checkout -b feature/your-feature`
3. 提交更改：`git commit -m 'Add: 新功能描述'`
4. 推送分支：`git push origin feature/your-feature`
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- 📧 问题反馈：[GitHub Issues](https://github.com/your-username/ai-tools-website/issues)
- 💬 讨论交流：[GitHub Discussions](https://github.com/your-username/ai-tools-website/discussions)

---

**记录每一个技术决策，分享每一次成长经历。**
