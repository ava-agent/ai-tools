# AI工具添加指南

本文档指导如何向 AI工具全书 项目中添加新的 AI 工具。

## 目录

1. [快速开始](#快速开始)
2. [数据结构详解](#数据结构详解)
3. [工具类别说明](#工具类别说明)
4. [添加步骤](#添加步骤)
5. [完整示例](#完整示例)
6. [不同类型工具的特殊注意事项](#不同类型工具的特殊注意事项)
7. [最佳实践](#最佳实践)
8. [验证清单](#验证清单)

---

## 快速开始

添加新工具只需修改一个文件：`src/data/tools.js`

```bash
# 文件位置
src/data/tools.js
```

在 `aiToolsData` 数组中添加新的工具对象即可。

---

## 数据结构详解

每个工具对象包含以下字段：

### 基础信息字段

| 字段 | 类型 | 必填 | 说明 | 示例 |
|------|------|------|------|------|
| `id` | string | ✅ | 唯一标识符，用于路由和识别 | `'cursor'` |
| `name` | string | ✅ | 工具显示名称 | `'Cursor'` |
| `category` | string | ✅ | 工具类别 | `'IDE'` |
| `developer` | string | ✅ | 开发商名称 | `'Anysphere'` |
| `bestFor` | string | ✅ | 适用场景描述 | `'日常主力开发、复杂架构重构'` |
| `funRanking` | string | ✅ | 趣味评级（如：夯/夯夯/夯夯夯） | `'夯'` |

### 版本信息 (versions)

数组类型，支持多版本配置：

```javascript
versions: [
  {
    type: 'CN',           // 版本类型：CN(国内版) / Global(国际版)
    pricing: '免费',       // 定价策略
    models: 'DeepSeek R1', // 支持的AI模型
    link: 'https://...'   // 官网链接
  }
]
```

### 优缺点 (pros / cons)

字符串数组，列出工具的主要优缺点：

```javascript
pros: [
  '业内标杆，功能最全',
  'Tab 补全极其流畅'
],
cons: [
  '价格昂贵 ($20/mo 起)',
  '国内访问偶尔需要网络环境优化'
]
```

### 个人体验 (personalExperience)

```javascript
personalExperience: {
  rating: 5,              // 评分：1-5
  insights: '详细的使用体验描述...',
  pitfalls: [             // 使用注意事项
    '不要让它一次性修改超过 10 个文件',
    '注意隐私策略，敏感项目建议关闭云端索引'
  ]
}
```

### SWOT 分析 (swot)

```javascript
swot: {
  S: '优势描述（Strengths）',
  W: '劣势描述（Weaknesses）',
  O: '机会描述（Opportunities）',
  T: '威胁描述（Threats）'
}
```

### 标签 (tags)

字符串数组，用于分类和筛选：

```javascript
tags: ['推荐', 'VS Code 系', 'Agentic', '行业标杆']
```

**推荐标签值：**

#### 推荐级别
- `推荐` - 强烈推荐的工具
- `热门` - 使用广泛的热门工具
- `新品` - 新发布的工具

#### 来源类型
- `国产` - 国内厂商开发
- `开源` - 开源项目
- `商业` - 商业产品

#### 技术特性
- `Agentic` - 具备 Agent 能力
- `多模型` - 支持多种 AI 模型
- `长上下文` - 支持长上下文窗口
- `推理` - 强推理能力
- `代码理解` - 代码理解能力强
- `代码补全` - 代码补全功能
- `多模态` - 支持多种模态（文本、图像、语音）

#### 平台类型
- `IDE` - 集成开发环境
- `VS Code 系` - 基于 VS Code 的工具
- `IDE插件` - IDE 插件
- `插件` - 各类插件
- `LLM` - 大语言模型
- `API` - API 服务
- `CLI` - 命令行工具
- `命令行` - 命令行工具
- `浏览器插件` - 浏览器扩展
- `桌面应用` - 桌面应用
- `移动应用` - 移动端应用
- `代码审查` - 代码审查工具
- `文档生成` - 文档生成工具
- `测试工具` - 测试工具
- `部署工具` - 部署工具

#### 技术生态
- `GitHub` - GitHub 相关
- `VS Code` - VS Code 相关
- `Chrome` - Chrome 相关
- `Firefox` - Firefox 相关
- `macOS` - macOS 平台
- `Windows` - Windows 平台
- `Linux` - Linux 平台
- `REST` - REST API
- `SDK` - SDK 支持

#### 价格相关
- `免费` - 完全免费
- `低价` - 价格低廉
- `订阅制` - 订阅制收费
- `免费试用` - 提供免费试用
- `按量计费` - 按使用量计费

#### 应用场景
- `自动化` - 自动化相关
- `脚本` - 脚本相关
- `DevOps` - DevOps 相关
- `CI/CD` - CI/CD 相关
- `企业级` - 企业级应用
- `质量保证` - 质量保证相关
- `搜索` - 搜索相关
- `前端` - 前端开发
- `后端` - 后端开发
- `全栈` - 全栈开发

#### 特殊标签
- `DeepSeek` - DeepSeek 相关
- `GPT-4` - GPT-4 相关
- `Claude` - Claude 相关
- `行业标杆` - 行业标杆产品

---

## 工具类别说明

本系统支持多种类型的 AI 工具，每个类别有其特定的数据结构特点。

### 支持的类别

| 类别 | 说明 | 示例 |
|------|------|------|
| `IDE` | AI 原生集成开发环境 | Cursor, Trae, Windsurf |
| `LLM` | 大语言模型 API 服务 | Claude, DeepSeek |
| `IDE插件` | IDE 内的 AI 插件 | GitHub Copilot |
| `CLI` | 命令行工具 | GitHub CLI, AI 命令行工具 |
| `API` | API 服务 | OpenAI API, Anthropic API |
| `浏览器插件` | 浏览器扩展 | Perplexity AI, ChatPDF |
| `桌面应用` | 独立桌面软件 | ChatGPT Desktop, Claude Desktop |
| `移动应用` | 移动端应用 | ChatGPT App, Claude App |
| `代码审查` | 代码审查工具 | CodeGPT Review, AI Code Reviewer |
| `文档生成` | 文档生成工具 | Mintlify, Docusaurus AI |
| `测试工具` | AI 测试工具 | TestGPT, AI Test Generator |
| `部署工具` | AI 部署工具 | Vercel AI, AWS Bedrock |

### 类别特殊字段说明

#### CLI 工具特殊字段

CLI 工具需要额外说明安装方式和使用命令：

```javascript
{
  id: 'ai-cli',
  name: 'AI CLI',
  category: 'CLI',
  developer: 'Example Inc',
  versions: [
    {
      type: 'Global',
      pricing: '免费',
      models: 'GPT-4',
      link: 'https://example.com',
      install: 'npm install -g ai-cli',  // 安装命令
      usage: 'ai-cli generate'           // 使用示例
    }
  ],
  // ... 其他字段
}
```

#### API 服务特殊字段

API 服务需要说明认证方式和调用示例：

```javascript
{
  id: 'ai-api',
  name: 'AI API',
  category: 'API',
  developer: 'Example Inc',
  versions: [
    {
      type: 'Global',
      pricing: '按量计费 ($0.01/1K tokens)',
      models: 'GPT-4, Claude 3.5',
      link: 'https://api.example.com',
      auth: 'Bearer Token',              // 认证方式
      endpoint: 'https://api.example.com/v1/chat'  // API 端点
    }
  ],
  // ... 其他字段
}
```

#### 浏览器插件特殊字段

浏览器插件需要说明支持的浏览器和安装方式：

```javascript
{
  id: 'ai-extension',
  name: 'AI Extension',
  category: '浏览器插件',
  developer: 'Example Inc',
  versions: [
    {
      type: 'Global',
      pricing: '免费',
      models: 'GPT-4',
      link: 'https://example.com',
      browsers: ['Chrome', 'Firefox', 'Edge', 'Safari'],  // 支持的浏览器
      install: 'Chrome Web Store 搜索安装'
    }
  ],
  // ... 其他字段
}
```

---

## 添加步骤

### 步骤 1：准备工具信息

收集以下信息：
- [ ] 工具名称和开发商
- [ ] 官网链接
- [ ] 定价策略
- [ ] 支持的AI模型
- [ ] 主要功能和特点
- [ ] 优缺点分析
- [ ] 实际使用体验

### 步骤 2：选择插入位置

打开 `src/data/tools.js`，在 `aiToolsData` 数组中选择合适的位置插入新工具。

**建议排序规则：**
1. 推荐工具放在前面
2. 同类别工具放在一起
3. 新工具可以放在末尾

### 步骤 3：编写工具数据

参考以下模板：

```javascript
{
  id: '工具唯一标识',
  name: '工具名称',
  category: '类别',
  developer: '开发商',
  versions: [
    {
      type: 'Global',
      pricing: '定价',
      models: '支持模型',
      link: '官网链接'
    }
  ],
  pros: [
    '优点1',
    '优点2',
    '优点3'
  ],
  cons: [
    '缺点1',
    '缺点2'
  ],
  bestFor: '适用场景描述',
  funRanking: '夯',
  personalExperience: {
    rating: 4,
    insights: '使用体验总结...',
    pitfalls: [
      '注意事项1',
      '注意事项2'
    ]
  },
  swot: {
    S: '优势分析',
    W: '劣势分析',
    O: '机会分析',
    T: '威胁分析'
  },
  tags: ['标签1', '标签2', '标签3']
}
```

### 步骤 4：验证数据格式

- [ ] 确保所有必填字段已填写
- [ ] 检查 JSON 语法正确（无多余逗号、括号匹配）
- [ ] `id` 值在整个数组中唯一
- [ ] `rating` 值在 1-5 范围内

### 步骤 5：测试验证

```bash
# 安装依赖（如未安装）
npm install

# 启动开发服务器
npm run dev

# 或构建项目
npm run build
```

---

## 完整示例

以下是为不同类型工具提供的完整添加示例：

### IDE 示例

```javascript
{
  id: 'cursor',
  name: 'Cursor',
  category: 'IDE',
  developer: 'Anysphere',
  versions: [
    {
      type: 'Global',
      pricing: '订阅制 ($20/mo)',
      models: 'Composer-1 (Claude 3.5), GPT-4o, o1',
      link: 'https://cursor.sh'
    }
  ],
  pros: [
    '业内标杆，功能最全',
    'Composer-1 模式多文件协同极强',
    'Tab 补全极其流畅',
    '支持本地知识库/Repo Index'
  ],
  cons: ['价格昂贵 ($20/mo 起)', '国内访问偶尔需要网络环境优化', '计费模型变动频繁'],
  bestFor: '日常主力开发、复杂架构重构与高频编码场景',
  funRanking: '夯',
  personalExperience: {
    rating: 5,
    insights: '目前最成熟的 AI 原生 IDE。Composer-1 带来的跨文件重构能力是其护城河。建议作为"主 IDE"使用。',
    pitfalls: [
      '不要让它一次性修改超过 10 个文件，容易出现逻辑漂移。',
      '注意隐私策略，敏感项目建议关闭云端索引。'
    ]
  },
  swot: {
    S: '全流程开发辅助能力一流，生态位稳固',
    W: '订阅成本高，对大仓库索引偶尔占内存',
    O: '逐步演进为代码自治 Agent (Composer 进化)',
    T: '字节 Trae 与 GitHub Copilot Workspace 的激烈竞争'
  },
  tags: ['推荐', 'VS Code 系', 'Agentic', '行业标杆']
}
```

### LLM 示例

```javascript
{
  id: 'claude',
  name: 'Claude',
  category: 'LLM',
  developer: 'Anthropic',
  versions: [
    {
      type: 'Global',
      pricing: '按量计费 / 订阅制',
      models: 'Claude 3.5 Sonnet, Claude 3 Opus, Claude 3 Haiku',
      link: 'https://claude.ai'
    }
  ],
  pros: [
    '代码理解能力极强，上下文窗口大 (200K)',
    '安全性和对齐性业界领先',
    '支持多模态输入',
    'API 稳定可靠'
  ],
  cons: ['相比 GPT-4 在某些创意任务上稍弱', '国内访问需要网络环境', 'API 价格相对较高'],
  bestFor: '代码审查、文档生成、复杂推理任务、需要长上下文的场景',
  funRanking: '夯夯',
  personalExperience: {
    rating: 5,
    insights: 'Claude 3.5 Sonnet 是目前最均衡的模型之一。代码理解能力极强，特别适合代码审查和重构任务。200K 上下文窗口是巨大优势。',
    pitfalls: ['长上下文消耗 token 较快，注意成本控制。', '国内访问不稳定，建议使用代理。']
  },
  swot: {
    S: '代码理解能力强，上下文窗口大，安全性高',
    W: 'API 价格较高，国内访问受限',
    O: '企业级应用市场巨大，多模态能力拓展',
    T: 'GPT-4 的持续迭代，开源模型的竞争'
  },
  tags: ['推荐', 'LLM', '代码理解', '长上下文']
}
```

### IDE 插件示例

```javascript
{
  id: 'github-copilot',
  name: 'GitHub Copilot',
  category: 'IDE插件',
  developer: 'GitHub',
  versions: [
    {
      type: 'Global',
      pricing: '订阅制 ($10/mo)',
      models: 'GPT-4, Codex',
      link: 'https://github.com/features/copilot'
    }
  ],
  pros: ['生态最成熟，支持多种 IDE', '与 GitHub 深度集成', '代码补全流畅准确', '企业版功能强大'],
  cons: ['相比 Cursor 功能较单一', '价格中等', '对复杂重构任务支持有限'],
  bestFor: 'GitHub 用户、多 IDE 开发者、需要稳定代码补全的团队',
  funRanking: '夯',
  personalExperience: {
    rating: 4,
    insights: 'Copilot 是最成熟的 AI 编程助手，生态支持最好。与 GitHub 的深度集成是其最大优势。适合作为辅助工具使用。',
    pitfalls: [
      '对复杂重构任务支持有限，不如 Cursor 的 Composer。',
      '企业版价格较高，小团队可能负担不起。'
    ]
  },
  swot: {
    S: '生态成熟，GitHub 集成，多 IDE 支持',
    W: '功能单一，重构能力不如 Cursor',
    O: 'Workspace 功能潜力巨大，企业市场广阔',
    T: 'Cursor 的 Agentic 能力，开源插件的竞争'
  },
  tags: ['推荐', 'GitHub', '插件', '生态']
}
```

### CLI 工具示例

```javascript
{
  id: 'github-cli',
  name: 'GitHub CLI (gh)',
  category: 'CLI',
  developer: 'GitHub',
  versions: [
    {
      type: 'Global',
      pricing: '免费',
      models: 'GitHub Copilot',
      link: 'https://cli.github.com',
      install: 'winget install --id GitHub.cli',  // Windows 安装
      usage: 'gh repo create, gh pr create, gh issue create'
    },
    {
      type: 'CN',
      pricing: '免费',
      models: 'GitHub Copilot',
      link: 'https://cli.github.com',
      install: 'brew install gh',  // macOS 安装
      usage: 'gh repo create, gh pr create'
    }
  ],
  pros: [
    '官方 GitHub 命令行工具',
    '支持完整的 GitHub 操作',
    '脚本友好，易于自动化',
    '支持 AI 辅助命令生成'
  ],
  cons: ['需要 GitHub 账号', '国内访问可能较慢', '学习曲线有一定门槛'],
  bestFor: 'GitHub 用户、自动化脚本、CI/CD 集成',
  funRanking: '夯',
  personalExperience: {
    rating: 4,
    insights: 'GitHub CLI 是 GitHub 的官方命令行工具，功能非常全面。配合 AI 辅助，可以快速生成复杂的命令。特别适合 DevOps 和自动化场景。',
    pitfalls: [
      '国内访问 GitHub API 可能需要代理。',
      '复杂的命令参数较多，建议使用 gh --help 或 AI 辅助生成。'
    ]
  },
  swot: {
    S: '官方工具、功能全面、脚本友好',
    W: '国内访问受限、学习成本',
    O: 'AI 辅助、自动化市场',
    T: 'GitLab CLI、其他 Git 工具'
  },
  tags: ['推荐', 'CLI', 'GitHub', '免费', '自动化']
}
```

### API 服务示例

```javascript
{
  id: 'openai-api',
  name: 'OpenAI API',
  category: 'API',
  developer: 'OpenAI',
  versions: [
    {
      type: 'Global',
      pricing: '按量计费 (GPT-4: $0.03/1K tokens)',
      models: 'GPT-4, GPT-3.5, DALL-E 3, Whisper',
      link: 'https://platform.openai.com',
      auth: 'Bearer Token (sk-...)'
    }
  ],
  pros: [
    '业界领先的模型质量',
    'API 文档完善，易于集成',
    '支持多种模态（文本、图像、语音）',
    '生态成熟，社区资源丰富'
  ],
  cons: ['价格相对较高', '国内访问需要网络环境', '配额限制'],
  bestFor: '企业级应用、多模态需求、高质量输出场景',
  funRanking: '夯夯',
  personalExperience: {
    rating: 5,
    insights: 'OpenAI API 是目前最成熟的 AI API 服务。GPT-4 的质量仍然是业界标杆，API 设计简洁易用。适合作为主要 AI 能力提供商。',
    pitfalls: [
      '注意控制 token 使用量，成本可能较高。',
      '国内访问不稳定，建议使用代理或国内替代方案。'
    ]
  },
  swot: {
    S: '模型质量领先、API 易用、生态成熟',
    W: '价格高、国内访问受限',
    O: '企业市场、多模态应用',
    T: '开源模型竞争、国内厂商'
  },
  tags: ['推荐', 'API', 'GPT-4', '多模态', '商业']
}
```

### 浏览器插件示例

```javascript
{
  id: 'perplexity-ai',
  name: 'Perplexity AI',
  category: '浏览器插件',
  developer: 'Perplexity AI',
  versions: [
    {
      type: 'Global',
      pricing: '免费 / Pro ($20/mo)',
      models: 'GPT-4, Claude 3, Perplexity Model',
      link: 'https://perplexity.ai',
      browsers: ['Chrome', 'Firefox', 'Edge', 'Safari'],
      install: 'Chrome Web Store 搜索 "Perplexity AI"'
    }
  ],
  pros: [
    '实时搜索 + AI 回答',
    '引用来源，可信度高',
    '浏览器集成方便',
    '支持多种语言'
  ],
  cons: ['免费版有次数限制', '国内访问需要网络环境', '搜索结果可能受地域限制'],
  bestFor: '快速信息检索、研究学习、写作辅助',
  funRanking: '夯夯',
  personalExperience: {
    rating: 4,
    insights: 'Perplexity AI 是搜索引擎和 AI 的完美结合。最大的优势是提供引用来源，让信息可信度大幅提升。浏览器插件使用非常方便。',
    pitfalls: [
      '国内访问不稳定，建议使用代理。',
      '复杂问题可能需要多次追问才能获得满意答案。'
    ]
  },
  swot: {
    S: '搜索+AI、引用来源、浏览器集成',
    W: '国内访问、免费限制',
    O: '教育市场、研究市场',
    T: 'Google SGE、Bing Chat'
  },
  tags: ['推荐', '浏览器插件', '搜索', '免费试用']
}
```

### 桌面应用示例

```javascript
{
  id: 'claude-desktop',
  name: 'Claude Desktop',
  category: '桌面应用',
  developer: 'Anthropic',
  versions: [
    {
      type: 'Global',
      pricing: '免费 / Pro ($20/mo)',
      models: 'Claude 3.5 Sonnet, Claude 3 Opus',
      link: 'https://claude.ai/download',
      platforms: ['macOS', 'Windows', 'Linux']
    }
  ],
  pros: [
    '原生桌面应用，性能优异',
    '支持文件拖拽上传',
    '本地历史记录',
    '快捷键支持'
  ],
  cons: ['需要 Anthropic 账号', '国内访问需要网络环境', '功能相对网页版有限'],
  bestFor: '日常对话、文档处理、代码辅助',
  funRanking: '夯',
  personalExperience: {
    rating: 4,
    insights: 'Claude Desktop 是 Claude 的原生桌面应用，体验比网页版更流畅。支持文件拖拽和快捷键，提高了工作效率。适合作为日常 AI 助手。',
    pitfalls: [
      '国内访问不稳定，建议使用代理。',
      '部分高级功能需要 Pro 订阅。'
    ]
  },
  swot: {
    S: '原生应用、性能好、快捷键',
    W: '功能有限、国内访问',
    O: '桌面市场、企业应用',
    T: 'ChatGPT Desktop、其他桌面 AI'
  },
  tags: ['推荐', '桌面应用', 'Claude', '免费试用']
}
```

### 代码审查工具示例

```javascript
{
  id: 'codegpt-review',
  name: 'CodeGPT Review',
  category: '代码审查',
  developer: 'CodeGPT',
  versions: [
    {
      type: 'Global',
      pricing: '免费 / Pro ($15/mo)',
      models: 'GPT-4, Claude 3.5',
      link: 'https://codegpt.com/review'
    }
  ],
  pros: [
    '自动化代码审查',
    '支持多种编程语言',
    '可自定义审查规则',
    '与 CI/CD 集成方便'
  ],
  cons: ['可能产生误报', '复杂逻辑理解有限', '需要配置才能发挥最大价值'],
  bestFor: '代码质量保证、团队协作、CI/CD 流程',
  funRanking: '夯',
  personalExperience: {
    rating: 4,
    insights: 'CodeGPT Review 是一款优秀的 AI 代码审查工具。可以自动发现常见的代码问题和安全漏洞。与 GitHub Actions 集成后，可以在 PR 时自动进行审查。',
    pitfalls: [
      'AI 审查不能完全替代人工审查，建议作为辅助工具。',
      '需要根据项目特点调整审查规则，避免过多误报。'
    ]
  },
  swot: {
    S: '自动化审查、多语言支持、CI/CD 集成',
    W: '误报、复杂逻辑理解',
    O: '企业市场、DevOps 市场',
    T: 'GitHub Copilot Review、开源工具'
  },
  tags: ['推荐', '代码审查', '自动化', 'CI/CD']
}
```

---

## 不同类型工具的特殊注意事项

### IDE 类工具

**注意事项：**
- 重点描述代码补全、多文件编辑、项目索引等核心功能
- `versions.models` 应列出支持的 AI 模型（如 Composer-1、GPT-4o）
- `bestFor` 应明确适用的开发场景（前端、后端、全栈等）
- `personalExperience.pitfalls` 应包含隐私设置、网络环境等实用建议

**推荐标签：** `IDE`, `VS Code 系`, `Agentic`, `多模型`, `代码补全`

---

### LLM 类工具

**注意事项：**
- 重点描述上下文窗口、代码理解能力、多模态支持
- `versions.pricing` 应明确计费方式（按量计费/订阅制）
- `bestFor` 应明确适用的任务类型（代码审查、文档生成、推理等）
- `personalExperience.pitfalls` 应包含 token 成本、访问稳定性等注意事项

**推荐标签：** `LLM`, `代码理解`, `长上下文`, `推理`, `多模态`, `API`

---

### IDE 插件类工具

**注意事项：**
- 重点描述支持的 IDE 类型、集成方式、与原 IDE 的配合
- `versions.models` 应列出底层使用的 AI 模型
- `bestFor` 应明确适合作为主工具还是辅助工具
- `personalExperience.pitfalls` 应包含与其他插件的兼容性、性能影响等

**推荐标签：** `IDE插件`, `插件`, `代码补全`, `GitHub`, `VS Code`

---

### CLI 类工具

**注意事项：**
- 必须添加 `versions[].install` 字段，说明安装命令
- 必须添加 `versions[].usage` 字段，提供常用命令示例
- 支持多平台时，应分别提供不同平台的安装命令
- `bestFor` 应明确适用的自动化场景（CI/CD、脚本等）
- `personalExperience.pitfalls` 应包含命令复杂度、学习曲线等

**推荐标签：** `CLI`, `命令行`, `自动化`, `脚本`, `DevOps`, `CI/CD`

---

### API 服务类工具

**注意事项：**
- 必须添加 `versions[].auth` 字段，说明认证方式
- 可选添加 `versions[].endpoint` 字段，提供 API 端点
- `versions.pricing` 应明确计费单位（如 $0.01/1K tokens）
- `bestFor` 应明确适用的应用场景（企业级、多模态等）
- `personalExperience.pitfalls` 应包含配额限制、成本控制、访问稳定性等

**推荐标签：** `API`, `REST`, `SDK`, `企业级`, `多模态`, `商业`

---

### 浏览器插件类工具

**注意事项：**
- 必须添加 `versions[].browsers` 字段，列出支持的浏览器
- 必须添加 `versions[].install` 字段，说明安装方式
- `bestFor` 应明确适用的使用场景（信息检索、写作辅助等）
- `personalExperience.pitfalls` 应包含权限要求、隐私设置等

**推荐标签：** `浏览器插件`, `Chrome`, `Firefox`, `搜索`, `免费`

---

### 桌面应用类工具

**注意事项：**
- 必须添加 `versions[].platforms` 字段，列出支持的操作系统
- 重点描述性能优势、快捷键、本地存储等桌面特性
- `bestFor` 应明确适用的日常使用场景
- `personalExperience.pitfalls` 应包含系统资源占用、更新频率等

**推荐标签：** `桌面应用`, `macOS`, `Windows`, `Linux`, `原生`

---

### 代码审查类工具

**注意事项：**
- 重点描述支持的编程语言、审查规则、CI/CD 集成
- `bestFor` 应明确适用的质量保证场景
- `personalExperience.pitfalls` 应包含误报率、配置复杂度等
- 强调作为辅助工具而非替代人工审查

**推荐标签：** `代码审查`, `自动化`, `CI/CD`, `DevOps`, `质量保证`

---

### 文档生成类工具

**注意事项：**
- 重点描述支持的文档格式、生成方式、集成方式
- `versions.models` 应列出底层使用的 AI 模型
- `bestFor` 应明确适用的文档类型（API 文档、用户手册等）
- `personalExperience.pitfalls` 应包含准确性、格式兼容性等

**推荐标签：** `文档生成`, `Markdown`, `API文档`, `自动化`

---

### 测试工具类工具

**注意事项：**
- 重点描述支持的测试类型（单元测试、集成测试、E2E 测试）
- `bestFor` 应明确适用的测试场景
- `personalExperience.pitfalls` 应包含测试覆盖率、维护成本等

**推荐标签：** `测试工具`, `自动化测试`, `单元测试`, `E2E`, `CI/CD`

---

### 部署工具类工具

**注意事项：**
- 重点描述支持的云平台、部署方式、CI/CD 集成
- `versions.pricing` 应明确计费方式（按使用量/订阅制）
- `bestFor` 应明确适用的部署场景（前端、后端、全栈等）
- `personalExperience.pitfalls` 应包含配置复杂度、学习曲线等

**推荐标签：** `部署工具`, `CI/CD`, `DevOps`, `云平台`, `自动化`

---

## 最佳实践

### ID 命名规范

- 使用小写字母和连字符
- 简洁明了，避免缩写
- 确保唯一性

```javascript
// ✅ 好的示例
id: 'cursor'
id: 'github-copilot'
id: 'deepseek-coder'

// ❌ 避免
id: 'Cursor'        // 大写字母
id: 'cursor_ide'    // 下划线
id: 'c'             // 过于简短
```

### 内容撰写建议

1. **pros/cons**：列出 3-5 条，具体且有区分度
2. **insights**：100-200 字，真实且有参考价值
3. **pitfalls**：2-4 条，实用且具体
4. **swot**：每条 20-50 字，简明扼要

### 标签选择策略

- 选择 3-6 个最相关的标签
- 优先使用已有标签，保持分类一致性
- 新标签需考虑通用性

### 版本配置

- 国内有独立版本时，添加 CN 类型
- 国际版统一使用 Global 类型
- 免费工具 pricing 写 `"免费"`

---

## 验证清单

添加新工具后，请检查以下事项：

### 数据完整性
- [ ] `id` 唯一且不重复
- [ ] `name` 不为空
- [ ] `category` 填写正确
- [ ] `developer` 不为空
- [ ] `versions` 数组至少有一个元素
- [ ] `pros` 和 `cons` 至少各有一条
- [ ] `personalExperience.rating` 在 1-5 之间
- [ ] `tags` 至少有一个标签

### 代码质量
- [ ] JSON 语法正确（无多余逗号）
- [ ] 所有字符串使用单引号（与项目风格一致）
- [ ] 缩进正确（2 个空格）

### 功能验证
- [ ] `npm run build` 构建成功
- [ ] 新工具在列表中正常显示
- [ ] 点击新工具能进入详情页
- [ ] SWOT 分析正确显示
- [ ] 标签筛选功能正常

---

## 常见问题

### Q: 添加后页面不显示新工具？

A: 检查以下几点：
1. `id` 是否与其他工具重复
2. JSON 语法是否正确（特别是逗号）
3. 是否重启了开发服务器

### Q: 如何添加工具图标？

A: 本项目使用 `lucide-vue-next` 图标库，如需添加自定义图标：
1. 在 `src/components/icons/` 创建图标组件
2. 在工具详情页引用

### Q: 可以添加图片吗？

A: 可以。将图片放入 `public/images/tools/` 目录，然后在组件中引用：
```vue
<img src="/images/tools/new-tool.png" alt="NewTool" />
```

### Q: 如何修改现有工具信息？

A: 直接在 `src/data/tools.js` 中找到对应工具对象，修改相应字段即可。

---

## 提交规范

添加新工具后，建议提交信息格式：

```bash
git add src/data/tools.js
git commit -m "feat: 添加 [工具名称] 到工具列表

- 添加 [工具名称] 的完整信息
- 包含多版本配置、SWOT分析和个人体验
- 标签: [使用的标签]"
```

---

如有疑问，请参考项目中已有的工具数据作为示例。
