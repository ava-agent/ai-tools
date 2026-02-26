# AI Tools Handbook

> 82 款 AI 工具深度评测与选型指南 — 2026 深度集成与实战教学版

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 简介

AI Tools Handbook 是一个全面的 AI 开发工具选型指南，基于实战经验整合了 82 款工具的深度评测数据。涵盖 AI IDE、大语言模型、Deep Research、CLI 工具、多模态、Agent 平台、MCP 工具等多个类别，提供 SWOT 分析、社区评价和最佳实践建议。

## 特性

- **82 款工具评测** - 覆盖 AI IDE、LLM、CLI、多模态、Agent、MCP 等类别
- **SWOT 分析** - 每个工具的优势、劣势、机会、威胁分析
- **智能筛选** - 按类别、标签、开发者快速筛选
- **社区功能** - 工具评分、评论、Battle 投票（Supabase 驱动）
- **游戏化体验** - 经验值、成就系统、个性测试
- **云同步** - 登录后自动同步游戏化进度
- **双版本支持** - 区分国内版(CN)和国际版(Global)
- **响应式设计** - 完美适配桌面和移动设备

## 工具类别

| 类别 | 数量 | 示例 |
|------|------|------|
| AI IDE | 10+ | Cursor, Windsurf, Trae, Devin, Bolt, v0 |
| Deep Research | 5+ | Gemini Deep Research, Perplexity, Grok |
| CLI | 5+ | Claude Code, GitHub Copilot CLI, Warp |
| LLM | 10+ | GPT-4o, Claude, Gemini, DeepSeek, Llama |
| 多模态 | 10+ | Midjourney, DALL-E, Flux, Runway, Suno |
| Agent 平台 | 5+ | Manus, CrewAI, n8n |
| MCP 工具 | 13 | Context7, Playwright, Firecrawl, Supabase |

## 快速开始

```bash
# 克隆仓库
git clone https://github.com/ava-agent/ai-tools.git
cd ai-tools/website

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build
```

### 配置 Supabase（可选）

社区功能（评分、评论、云同步）需要 Supabase：

```bash
# 复制环境变量
cp .env.example .env

# 编辑 .env，填入 Supabase 项目信息
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

未配置 Supabase 时，网站仍可正常运行，社区功能将自动隐藏。

## 技术栈

- **Vue.js 3** - 前端框架（Composition API + `<script setup>`）
- **Vite 5** - 构建工具
- **Tailwind CSS** - 样式框架
- **Pinia** - 状态管理
- **Vue Router** - 路由管理（History 模式）
- **Supabase** - 认证、数据库、云同步
- **Vercel** - 部署平台

## 开发命令

```bash
npm run dev              # 开发服务器
npm run build            # 生产构建
npm run preview          # 预览构建结果
npm run lint             # 代码检查（自动修复）
npm run format           # 代码格式化
npm run test             # 运行测试
npm run test:coverage    # 测试覆盖率
```

## 贡献

欢迎提交 PR 来添加新工具或改进现有内容！

## 许可证

MIT License
