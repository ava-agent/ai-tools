// AI工具完整数据库
// 当前收录 125 款工具；高影响工具信息按 2026-06-25 目标分批核验
const DEFAULT_VERIFICATION_METADATA = {
  verificationStatus: 'needs-review',
  lastVerified: null,
  sources: []
}

function withDefaultVerificationMetadata(tool) {
  return {
    ...DEFAULT_VERIFICATION_METADATA,
    ...tool,
    sources: Array.isArray(tool.sources) ? tool.sources : []
  }
}

export const aiToolsData = [
  // ============= AI IDE (13个) =============
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Anysphere',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Hobby 免费 / Individual $20/月 / Teams $40/用户/月 / Enterprise 定制；高级模型和额外用量按官方模型与用量池规则核算',
        models: '前沿模型、Auto、Composer 系列与第三方模型（以官方 Models & Pricing 当前表为准）',
        link: 'https://cursor.com/pricing'
      }
    ],
    freeQuota:
      'Hobby Free：有限 Agent requests 与有限 Tab completions；Individual/Teams 的高级模型用量需按当前 usage pool 估算',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: [
      'AI 原生 IDE 体验成熟',
      'Individual 计划包含扩展 Agent 限额、无限 Tab、背景 Agents',
      '支持 MCP、Skills 与 Hooks 等可扩展工作流',
      'Teams 计划提供集中账单、Marketplace、Bugbot、Cloud Agents/Automations、Analytics、Privacy Mode 与 SSO',
      'VS Code 生态迁移成本低'
    ],
    cons: [
      '用量制和模型额度会影响真实成本',
      '敏感项目需确认 Privacy Mode 与代码处理策略',
      '价格从 $20/月起，团队版 $40/用户/月',
      '国内访问需优化'
    ],
    bestFor: '日常主力开发、复杂架构重构与高频编码',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，官方 pricing 与 Models & Pricing 页仍确认 Cursor 是多档订阅的 AI 原生 IDE：Hobby 免费，Individual $20/月，Teams $40/用户/月，Enterprise 定制。适合作为主力，但要按 usage pool、高级模型消耗、Cloud Agents/Bugbot 与隐私策略一起核算。',
      pitfalls: ['不要让它一次性改超过 10 个文件', '敏感项目先确认 Privacy Mode 与代码处理策略']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://cursor.com/pricing',
      'https://cursor.com/docs/models-and-pricing',
      'https://cursor.com/data-use',
      'https://cursor.com/changelog'
    ],
    decisionSummary: {
      verdict:
        '综合体验成熟，适合作为主力 AI IDE；真实成本取决于 usage pool、高级模型选择、Cloud Agents/Bugbot 和团队治理策略。',
      bestFor: '日常主力开发、复杂架构重构与高频编码',
      avoidIf: '预算极低，或项目禁止云端索引、外部模型处理和用量制计费',
      mainRisk: 'Agent 请求、高级模型、Cloud Agents/Bugbot 与额外用量可能让实际成本高于标价',
      alternatives: ['Trae', 'Windsurf', 'GitHub Copilot']
    },
    swot: {
      S: '全流程开发能力一流',
      W: '订阅成本高',
      O: '演进为代码自治 Agent',
      T: 'Trae、GitHub Copilot 竞争'
    },
    tags: ['推荐', 'VS Code系', 'Agentic', '行业标杆'],
    video: { src: './videos/cursor.mp4' },
    radarChart: 'images/cursor_radar_chart.png'
  },
  {
    id: 'trae',
    name: 'Trae',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: '字节跳动',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Free / Lite $3/月 / Pro 7 天试用后 $10/月 / Pro+ $30/月 / Ultra $100/月',
        models: '多模型与内置模型；模型消耗按 Basic/Bonus usage 规则计算',
        link: 'https://www.trae.ai/pricing'
      }
    ],
    freeQuota:
      'Free：5,000 次/月 Autocompletion、有限 Basic usage，云任务并发和模型访问按当前计划表限制',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: [
      '价格梯度清晰，Lite $3/月起，Pro 7 天试用后 $10/月',
      '付费档 Autocompletion 不限量，Basic usage 和 Bonus usage 随档位提升',
      '同时提供 TRAE IDE 和 TRAE Work 两条产品线',
      'SOLO mode 覆盖 Web/Desktop，并发云任务随档位提升',
      '对国内开发者的上手成本较低'
    ],
    cons: [
      '不同档位的 Basic/Bonus usage 与模型可用性会影响真实成本',
      'Free 的使用量和并发能力有限，不适合当作无限主力',
      '敏感代码仍需先确认企业/团队的数据处理要求'
    ],
    bestFor: '国内开发者、预算有限团队、快速原型',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，Trae 官方 pricing 明确展示 Free、Lite、Pro、Pro+、Ultra，多档 Basic usage、Bonus usage、Autocompletion 和并发云任务限制。它仍适合预算敏感团队，但不能再按“免费无限”理解。',
      pitfalls: ['不要再按“完全免费”做采购判断', '敏感代码先确认数据处理和企业管控能力']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.trae.ai/pricing',
      'https://docs.trae.ai/ide/new-plans-and-billing',
      'https://docs.trae.ai/ide/models',
      'https://www.trae.ai/'
    ],
    decisionSummary: {
      verdict:
        '低价入门优势仍在，但核心应按 Basic/Bonus usage、SOLO mode、并发云任务和模型消耗一起评估。',
      bestFor: '国内开发者、预算有限团队、快速原型',
      avoidIf: '团队需要非常稳定的企业治理、明确的数据驻留承诺，或必须精确锁定模型供应',
      mainRisk: '真实成本取决于 Basic/Bonus usage、模型消耗、SOLO mode 和并发云任务档位',
      alternatives: ['Cursor', 'Windsurf', 'Kiro']
    },
    swot: {
      S: '低价档位、SOLO mode、国内上手成本低',
      W: '档位和用量规则需要仔细核算',
      O: '国内 AI IDE 市场继续增长',
      T: 'Cursor、Windsurf、Kiro 快速迭代'
    },
    tags: ['推荐', '国产', '低价入门', 'SOLO', '云任务'],
    video: { src: './videos/trae.mp4' },
    radarChart: 'images/trae_radar_chart.png'
  },
  {
    id: 'windsurf',
    name: 'Windsurf',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Cognition',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0 / Pro $20/月 / Max $200/月 / Teams $80/月起 + $40/月每 full dev seat / Enterprise 定制',
        models:
          'Devin Desktop / Windsurf 模型按 plan quota 与 extra usage 计费；可用模型以官方模型页为准',
        link: 'https://windsurf.com/pricing'
      }
    ],
    freeQuota: 'Free：轻量 agent quota、有限模型可用性；2026-03 起由 credits 转为日/周 quota',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'Windsurf 已迁移为 Devin Desktop 产品线，Free、Pro、Max、Teams 和 Enterprise 档位明确',
      '自助计划按日/周 quota 与 extra usage 管理，不再沿用旧 credits 主叙事',
      'Teams 当前是 $80/月起并按 full dev seat 加价，适合多人共享管理',
      '仍保留 agentic coding 与 IDE 工作流，并向 Devin Cloud/Agent Command Center 延展'
    ],
    cons: [
      '品牌从 Codeium/Windsurf 到 Cognition/Devin Desktop 的迁移容易造成资料混乱',
      'Teams 不再适合写成简单 $40/席/月，采购前必须核对当前 seat 结构',
      '高阶模型和 extra usage 成本需要按官方估算表单独核算',
      '中文资料和社区仍弱于主流 VS Code 生态'
    ],
    bestFor: '复杂逻辑重构、多文件协作、预算敏感',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Windsurf/Devin Desktop 官方 pricing 展示 Free $0、Pro $20/月、Max $200/月、Teams $80/月起 + $40/月每 full dev seat、Enterprise 定制。旧的 $15/月、Teams $40/席/月和 credits 主叙事都要避免。',
      pitfalls: [
        '不要沿用旧 Codeium/Windsurf 价格',
        'Teams 采购要按 base fee + full dev seat 计算',
        '长任务和高阶模型要先估算 extra usage 成本',
        '复杂重构仍要限制改动范围并跑测试'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://windsurf.com/pricing',
      'https://devin.ai/pricing/',
      'https://docs.devin.ai/desktop/accounts/usage',
      'https://docs.devin.ai/desktop/accounts/quota',
      'https://docs.devin.ai/desktop/devin-desktop-faq'
    ],
    decisionSummary: {
      verdict:
        '仍值得观察，但应按 Devin Desktop 新品牌、quota/extra usage 和 Teams 新 seat 结构重新评估。',
      bestFor: '复杂逻辑重构、多文件协作、希望接入 Devin 生态的团队',
      avoidIf: '你需要稳定中文资料、低学习成本，或不想处理品牌迁移和配额规则变化',
      mainRisk:
        'Windsurf/Devin 迁移期文档、Teams seat 结构、quota 与 extra usage 口径变化大，容易误算成本',
      alternatives: ['Cursor', 'Trae', 'Kiro']
    },
    swot: {
      S: 'Cascade/Devin 生态协同',
      W: '品牌和计费迁移期复杂',
      O: '从 IDE 延展到更强自治开发',
      T: 'Cursor、Trae、GitHub Copilot 争夺主力 IDE 位'
    },
    tags: ['推荐', 'DevinDesktop', 'Cascade', '迁移期', '配额制'],
    video: { src: './videos/windsurf.mp4' },
    radarChart: 'images/windsurf_radar_chart.png'
  },
  {
    id: 'qoder',
    name: 'Qoder',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'BRIGHT ZENITH PRIVATE LIMITED',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Community Free / Pro $20/月 / Pro+ $60/月 / Ultra $200/月 / Teams；付费档按 credits 管理高级模型资源',
        models:
          'Basic models + premium models；Quest、Repo Wiki、Knowledge Card 等高级能力随付费档开放',
        link: 'https://docs.qoder.com/account/pricing'
      }
    ],
    freeQuota:
      'Community Edition 免费；新用户 14 天 Pro Trial 含 300 credits、无限 Completions & Next Edits、Chat Ask & Agent、Quest、Repo Wiki、Knowledge Card',
    contextWindow: '取决于模型与代码库索引；官方称支持最多 100k 文件分析',
    chineseSupport: 5,
    pros: [
      '官方文档已明确 Community、Pro、Pro+、Ultra 与 Teams 计划',
      'Pro/Pro+/Ultra 分别提供 2,000 / 6,000 / 20,000 monthly credits 用于 premium models',
      'Credits 耗尽后会降级到 basic models，仍有每日限制',
      'Quest、Repo Wiki、Knowledge Card 等能力适合中大型代码库理解和任务委派',
      'Credit Packs 可按 $0.02/credit、最低 1,000 credits 购买'
    ],
    cons: [
      '高级模型真实成本取决于 credits 消耗和具体功能',
      'credits 到期和降级规则需要团队提前理解',
      'Teams 计划和企业治理能力需另进官方 Teams pricing 核对',
      '相对小众，第三方评测和社区经验仍少'
    ],
    bestFor: '中大型后端项目、工作项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，Qoder docs 已给出 Community Free、Pro $20、Pro+ $60、Ultra $200 和 Teams 计划。它适合 Quest/Repo Wiki/Knowledge Card 这类代码库理解与长任务，但采购判断必须按 credits、premium/basic models 降级和 top-up 规则一起算。',
      pitfalls: [
        '按 credits 而不是月费单点估算',
        '留意 credits 到期和 basic models 降级',
        '大型代码库先用 Trial 或 Pro 小范围试跑'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://docs.qoder.com/account/pricing',
      'https://docs.qoder.com/account/credits',
      'https://qoder.com/pricing',
      'https://qoder.com/en'
    ],
    decisionSummary: {
      verdict:
        '适合继续观察和试用，现在可按公开价格与 credits 体系做初步预算，不应再写成价格不透明。',
      bestFor: '中大型后端项目、存量代码理解、代码库知识沉淀',
      avoidIf: '你需要成熟社区生态、清晰模型固定清单，或不想管理 credits/top-up/降级规则',
      mainRisk:
        'Pro/Pro+/Ultra 的表面月费不等于无限高级模型，premium credits 消耗、过期和降级规则会影响真实成本',
      alternatives: ['Trae', 'Cursor', 'Kiro']
    },
    swot: {
      S: 'Quest、Repo Wiki 与 credits 体系明确',
      W: '生态和模型透明度仍需观察',
      O: '存量代码理解与企业知识库场景',
      T: 'Cursor、Kiro、Trae 的成熟度竞争'
    },
    tags: ['国产', '后端', 'Quest', 'KnowledgeEngine', 'Credits'],
    video: { src: './videos/qoder.mp4' },
    radarChart: 'images/qoder_radar_chart.png'
  },
  {
    id: 'zed',
    name: 'Zed',
    category: 'ide',
    subcategory: '性能优先IDE',
    developer: 'Zed Industries',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Personal $0 / Pro $10/月 / Business $30/席/月；Pro 含 $5 token credits，超出按 API list price +10%',
        models:
          'Zed Agent 可走 Zed-hosted models、provider API keys、subscriptions、gateways、local models，也可接 external agents',
        link: 'https://zed.dev/pricing'
      }
    ],
    freeQuota:
      'Personal：$0 forever，含 2,000 accepted edit predictions；BYOK 或 external agents 成本按外部 provider/agent 计算',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      '高速编辑器、多人协作和每周发布节奏仍是核心优势',
      'Personal 可免费日常使用，并允许 BYOK 或连接 Claude Agent、Codex CLI 等外部 Agent',
      'Pro $10/月包含 Zed-hosted models、无限 Edit Predictions 和 $5 token credits',
      'Pro trial 为两周或 $20 token credits，用完或到期即结束',
      'Business 提供 org-wide AI model policies、data governance、统一 spend visibility 和 RBAC',
      'AI 文档把 Agent、model access 和 features 分开，便于按团队策略配置'
    ],
    cons: [
      'Personal 免费不等于托管 AI 无限使用',
      'Pro 超出 $5 token credits 后按 API list price +10% 计费',
      'Business seats 不固定捆绑 LLM credits，团队需要另行管理模型支出',
      'SSO、SAML 和 SCIM 官方仍标注为“计划中，当前不可用”',
      'VS Code 生态迁移仍要评估扩展覆盖'
    ],
    bestFor: '追求高速编辑、多人协作、BYOK/外部 Agent 组合的开发者',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，Zed 官方 pricing 将 Personal、Pro、Business 分层展示：Personal $0 并含 2,000 accepted edit predictions，Pro $10/月含 $5 token credits，Business $30/席/月提供组织控制。Pro trial 为两周或 $20 token credits；它更适合把高速编辑器、BYOK 和外部 Agent 组合起来，而不是把所有 AI 能力理解成免费无限。',
      pitfalls: [
        '先确认是 Personal/BYOK 路径还是 Pro 托管模型路径',
        '团队治理能力需要按 Business controls 和当前 SSO 状态核对'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://zed.dev/pricing', 'https://zed.dev/docs/ai/overview'],
    decisionSummary: {
      verdict:
        '适合作为高速、协作优先的编辑器底座；AI 预算要按 Personal/BYOK、Pro credits 和 Business 管理能力分开算。',
      bestFor: '追求高速编辑、多人协作、BYOK/外部 Agent 组合的开发者',
      avoidIf: '你想要 Cursor 式开箱即用的一体化 Agent IDE，或企业必须立即具备完整 SSO/SAML/SCIM',
      mainRisk:
        'Personal 免费容易被误读成托管 AI 免费；Pro 和 Business 的真实成本仍取决于 token/provider 用量',
      alternatives: ['Cursor', 'Windsurf', 'Warp']
    },
    swot: {
      S: '性能、协作、BYOK/外部 Agent 灵活',
      W: '托管 AI 需要 credits/usage 管理',
      O: 'Zed Agent 与外部 Agent 生态',
      T: 'VS Code/Cursor 生态惯性'
    },
    tags: ['性能', '协作', 'BYOK', 'Agent', 'Rust']
  },
  {
    id: 'replit',
    name: 'Replit',
    category: 'ide',
    subcategory: '云端IDE',
    developer: 'Replit',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Starter 免费 / Core $25月付或$20/月年付 / Pro $100月付或$95/月年付 / Enterprise 定制',
        models: 'Replit Agent 与 Replit AI 集成，模型和 Agent 模式按计划与 credits 消耗开放',
        link: 'https://replit.com/pricing'
      }
    ],
    freeQuota:
      'Starter：Free daily Agent credits，最多发布 1 个项目；Agent 使用按 effort-based pricing 消耗 credits',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      '云端一体开发、数据库、部署和 AI Agent 放在同一工作台',
      'Starter 免费可探索 Agent、数据库和 1 个发布项目',
      'Core 包含 $25 monthly credits、最多 5 个协作者和 2 个并行 agents',
      'Pro 包含 $100 monthly credits、最多 15 个协作者和 10 个并行 agents',
      '适合教学、快速原型、非本地环境开发'
    ],
    cons: [
      'Replit Agent 是 effort-based pricing，复杂任务会比简单请求贵',
      'Agent 文本指导、Plan Mode 对话和代码变更都可能计费',
      '第三方 API 成本会从 Replit credits 扣除',
      '浏览器云环境对复杂本地依赖和离线工作不友好'
    ],
    bestFor: '快速原型验证、编程教学、分布式团队、非技术人员构建内部工具',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，Replit pricing 仍以 Starter、Core、Pro、Enterprise 展示，并把 Agent/Assistant/部署能力放进 credits 体系。它适合快速把想法跑起来，但要用 budget、usage dashboard 和小任务试跑控制成本。',
      pitfalls: [
        '复杂任务先拆小，避免一次性烧太多 credits',
        '上线前设置 usage alerts 和 budget limits',
        '私有代码和第三方 API 成本要单独评估'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://replit.com/pricing', 'https://docs.replit.com/billing/ai-billing'],
    decisionSummary: {
      verdict:
        '云端原型和教学很顺手，但 Replit Agent 的真实成本取决于 effort-based credits，不应只看订阅价。',
      bestFor: '快速原型验证、编程教学、分布式团队、非技术人员构建内部工具',
      avoidIf: '你需要离线开发、复杂本地依赖、严格成本上限，或不想把 Agent 和云托管绑定在一起',
      mainRisk: 'Agent 对话、计划和代码修改都可能计费，复杂任务与第三方 API 会快速消耗 credits',
      alternatives: ['Bolt.new', 'Lovable', 'v0']
    },
    swot: {
      S: '云端一体、发布快、教学友好',
      W: 'credits 和 effort-based 成本需管理',
      O: '非技术用户和快速原型市场',
      T: 'Bolt、Lovable、本地 AI IDE'
    },
    tags: ['云端', '教学', '部署', 'Credits', 'Agent']
  },
  {
    id: 'kiro',
    name: 'Kiro',
    category: 'ide',
    subcategory: 'Spec驱动IDE',
    developer: 'Amazon',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free 50 credits / Pro $20/用户/月 / Pro+ $40/用户/月 / Pro Max $100/用户/月 / Power $200/用户/月',
        models:
          'Auto、open-weight models 与 premium models；Free 含 open-weight models 和 Claude Sonnet 4.6（按计划限制）',
        link: 'https://kiro.dev/pricing/'
      }
    ],
    freeQuota: 'Free：50 credits；付费档按月 credits，超额 $0.04/credit',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'Spec 驱动工作流适合把需求、设计和任务拆成可追踪交付物',
      '价格页明确列出 Free、Pro、Pro+、Pro Max、Power 档位',
      'Free 可用 50 credits、open-weight models 和受限 Claude Sonnet 4.6',
      '付费档可使用 open-weight 与 premium models，并支持 add-on credits',
      '按 credits 计费，适合先用低档验证团队工作流'
    ],
    cons: [
      'Free 只有 50 credits，难以支撑持续主力开发',
      'credit 计费和高阶模型选择会影响真实成本',
      'Spec 驱动对轻量临时代码任务会显得偏重'
    ],
    bestFor: '需求拆解、规格文档、任务分解',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Kiro 官方 pricing 页显示 Free 50 credits，付费档从 Pro $20 到 Power $200，Pro Max $100 保留。Free 当前口径包含 open-weight models 与受限 Claude Sonnet 4.6；优势仍是 Spec 驱动，而不是最快的自由写码 IDE。',
      pitfalls: [
        'Free credits 太少',
        '高阶模型和超额 credits 要提前估算',
        '轻量修修补补不一定值得上 Spec 流程'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://kiro.dev/pricing/'],
    decisionSummary: {
      verdict:
        '适合把需求拆成规格和任务的团队，但 Free 很小，正式使用应按 credits 和模型档位估算。',
      bestFor: '需求拆解、规格文档、任务分解、偏规范化的团队开发',
      avoidIf: '你只需要轻量补全、快速原型，或不想引入 Spec 驱动流程',
      mainRisk: 'Free credits 很少，复杂任务可能快速进入付费或超额 credits',
      alternatives: ['Cursor', 'Trae', 'Qoder']
    },
    swot: {
      S: 'Spec 驱动和任务追踪清晰',
      W: 'credit 计费和流程偏重',
      O: '企业规范化开发',
      T: '轻量 AI IDE 和 CLI 工具'
    },
    tags: ['Amazon', 'Spec', '规范', 'Credits', 'ProMax'],
    video: { src: './videos/kiro.mp4' },
    radarChart: 'images/kiro_radar_chart.png'
  },
  {
    id: 'codebuddy',
    name: 'Codebuddy',
    category: 'ide',
    subcategory: '云集成IDE',
    developer: '腾讯',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Pro $9.95/month（原价 $19.90/month）或 $119.40/year；Team Plan $40.00/person/month 或 $480.00/person/year',
        models: '内置模型 + models.json 自定义模型；自定义端点需使用 OpenAI interface format',
        link: 'https://www.codebuddy.ai/docs/ide/Account/pricing'
      }
    ],
    freeQuota:
      '正式计划按 credits 管理；Pro 含 1,000 credits / month，Team Plan 含 1,000 credits per seat per month；更高用量可购买 top-ups / add-on credits',
    contextWindow:
      '取决于所选内置/自定义模型；models.json 可配置 maxInputTokens 与 maxOutputTokens',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.codebuddy.ai/docs/ide/Account/pricing',
      'https://www.codebuddy.ai/docs/ide/Account/credits',
      'https://www.codebuddy.ai/docs/ide/Features/models'
    ],
    decisionSummary: {
      verdict:
        '适合腾讯生态或需要 IDE/CLI/plugin 多入口的团队试用，但不应再按旧的永久免费 token 口径推荐。',
      bestFor: '腾讯云用户、需要 CodeBuddy IDE/CLI/plugin 与 credits 统一管理的团队',
      avoidIf: '你需要成熟的多会话体验、稳定的跨项目 Agent 工作流，或不想管理 credits/add-on',
      mainRisk:
        '所有 conversation 相关请求都会消耗 credits，复杂任务和高级模型会更快消耗额度；自定义模型仍要按 OpenAI interface format 配置',
      alternatives: ['Trae', 'Cursor', 'Qoder']
    },
    pros: [
      'Pro 与 Team Plan 价格/credits 分层清晰',
      'Pro 含 1,000 credits / month，Team Plan 含 1,000 credits per seat per month',
      'Credits 会按模型 tier、任务复杂度和上下文长度消耗',
      'Pricing 页列出 Pro 1,000 credits top-up $9.95 以及 Teams 批量 top-ups',
      '支持 IDE/CLI/plugin 多种使用形式',
      '可通过 models.json 配置自定义模型列表和 maxInputTokens',
      '自定义模型端点按 OpenAI interface format 接入',
      'Plan Mode、Subagents、Skills、Hooks、MCP 等功能路径已进入官方文档'
    ],
    cons: [
      'credits 消耗随模型和任务复杂度变化，真实成本需实测',
      '自定义模型配置需要处理 API key 和完整接口路径',
      '多会话和稳定性体验仍需项目内实测',
      '价格与促销可能随地区和账号状态变化'
    ],
    bestFor: '腾讯云用户、快速部署（非主力）',
    funRanking: '夯',
    personalExperience: {
      rating: 2.5,
      insights:
        '截至 2026-07-07，官方文档将 CodeBuddy 计费写成 Pro / Team Plan + credits / top-ups 的口径，并说明 Credits 会按模型 tier、任务复杂度和上下文长度消耗。旧的固定免费 token/月说法不再适合作为当前推荐理由。',
      pitfalls: [
        '先用真实项目测 credits 消耗',
        '不要把 add-on credits 当成无限额度',
        '自定义模型要按 OpenAI interface format 配置完整 URL',
        '不适合作为未经验证的主力开发工具'
      ]
    },
    swot: {
      S: '腾讯云集成、IDE/CLI/plugin 多入口',
      W: 'credits 计费和体验成熟度仍需实测',
      O: '云服务市场和国内团队采购',
      T: 'Cursor/Trae/Qoder 等成熟竞品'
    },
    tags: ['国产', '腾讯', 'Credits', 'Team Plan', 'OpenAI interface format'],
    video: { src: './videos/codebuddy.mp4' },
    radarChart: 'images/codebuddy_radar_chart.png'
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    category: 'ide',
    subcategory: 'AI原生IDE',
    developer: 'Google',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free / Google AI Pro $19.99/month / Google AI Ultra $99.99 或 $199.99/month；Antigravity 具体限额按官方 Plans 页面与 Google AI 订阅说明',
        models: 'Gemini 与第三方模型接入范围以 Antigravity 当前 Plans 和模型选择器为准',
        link: 'https://antigravity.google/pricing'
      }
    ],
    freeQuota:
      'Free 层可用；Google AI Pro 提供更高 Antigravity limits 与 prioritized traffic；Google AI Ultra 视计划提供相对 Pro 5x 或 20x usage quota，并可用 AI credits overage',
    contextWindow:
      '取决于所选 agent model；Antigravity 限额按订阅层级、任务复杂度和 AI credits 机制管理',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://antigravity.google/pricing',
      'https://gemini.google/subscriptions/',
      'https://support.google.com/googleone/answer/14534406?hl=en',
      'https://support.google.com/googleone/answer/16286513?hl=en'
    ],
    decisionSummary: {
      verdict:
        '适合 Google/Gemini 生态用户尝试 agent-first IDE；正式使用应按 Free/Pro/Ultra 限额和 AI credits 机制评估。',
      bestFor:
        'Google AI Pro/Ultra 用户、想在 Gemini 生态里尝试 Agent Manager 和 agentic IDE 的开发者',
      avoidIf: '你需要明确透明的固定用量、成熟团队治理，或不希望订阅层级影响模型访问',
      mainRisk:
        'Google AI Pro/Ultra 的 Antigravity 限额是 rate limits / usage limits 口径，不等同于无限使用；达到 baseline quota 后可能需要 AI credits',
      alternatives: ['Gemini CLI', 'Cursor', 'Qoder']
    },
    pros: [
      'Google 官方 agentic development platform',
      'Google AI Pro $19.99/month 提供 Antigravity higher rate limits',
      'Google AI Ultra $99.99/month 与 $199.99/month 层级提供更高 limits，官方 Help 写明相对 Pro 可达 5x 或 20x quota',
      'Google One Help 明确 Ultra 有最高 limits、prioritized traffic、first access to new models 与 baseline quota / AI credits 两层机制',
      '支持通过 AI credits 扩展 Antigravity 用量',
      '适合与 Gemini、Jules、AI Studio 等 Google 开发生态联动'
    ],
    cons: [
      '实际可用模型和限额受账号、地区、订阅层级与容量影响',
      '官方 Help 当前写明 Antigravity prompt/instructions 只支持英文，容量不保证',
      'rate limits 按复杂度/任务工作量消耗，不适合用请求次数简单估算',
      '新平台安全和自主执行边界需要谨慎配置',
      '团队治理、审计和企业采购路径仍需验证'
    ],
    bestFor: 'Google 生态用户、尝鲜新品',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，Antigravity 已不应只按“Public Preview 免费”描述。Google AI Pro / Ultra 订阅页和 Google One Help 都把 Antigravity 放进订阅权益与 AI credits 体系里，重点是 baseline quota、限额层级、优先流量、英文提示限制和超额续用机制。',
      pitfalls: [
        '先确认所在地区和账号能否使用对应计划',
        '把 baseline quota 与 AI credits 分开估算',
        '自主 Agent 执行前要检查权限和审批设置',
        '不要把 Ultra 口径理解成无限使用',
        '英文提示和容量限制会影响非英语团队试用'
      ]
    },
    swot: {
      S: 'Google、Gemini、Antigravity highest usage limits 路径',
      W: '限额透明度和成熟度仍需实测',
      O: 'Google AI 订阅和开发生态整合',
      T: '成熟 AI IDE 与多模型 CLI'
    },
    tags: ['Google', 'Gemini', 'AgentFirst', 'Google AI Pro', 'Google AI Ultra', 'AI credits'],
    video: { src: './videos/antigravity.mp4' },
    radarChart: 'images/antigravity_radar_chart.png'
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'GitHub',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0 / Pro $10/月 / Pro+ $39/月 / Max $100/月 / Business $19/席/月 / Enterprise $39/席/月',
        models:
          '按计划开放自动模型选择、premium models、Agent mode、Cloud agent 与 AI credits；具体模型以 GitHub Docs 当前表为准',
        link: 'https://github.com/features/copilot/plans'
      }
    ],
    freeQuota:
      'Free：最多 2,000 次代码补全/月；付费个人计划含 AI credits，Pro 1,500、Pro+ 7,000、Max 20,000/月',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'GitHub 生态集成最稳',
      'Free 计划可用 2,000 次代码补全/月',
      'Pro、Pro+、Max 计划提供无限 inline suggestions 和不同额度 AI credits',
      'Agent mode、Cloud agent、code review 和 MCP 能力持续扩展',
      'Business/Enterprise 提供组织策略、审计和集中管理；Enterprise 仍可联系销售采购'
    ],
    cons: [
      'Free 更适合试用而不是主力',
      '高级模型、Cloud agent、代码审查和 Agent 用量受 AI credits 影响',
      '大型跨文件重构不如 AI 原生 IDE 顺手',
      '代码隐私与企业策略需要单独确认',
      '自 2026-04-22 起，GitHub Free/Team 组织的新 Copilot Business 自助注册暂时暂停，采购前需确认销售或企业路径',
      '离线无法使用'
    ],
    bestFor: 'GitHub 用户、多 IDE 开发者',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-13，GitHub 官方 plans/docs 列出 Free、Pro、Pro+、Max、Business 与 Enterprise；其中 GitHub Free/Team 组织的新 Business 自助注册自 2026-04-22 起暂时暂停。它更像可靠的 GitHub 工作流底座，不是替代 Cursor/Claude Code 的完整深度重构 Agent。',
      pitfalls: [
        'Free 只有 2,000 次代码补全/月，主力使用通常要升级',
        '高级模型、Cloud agent 和 Agent mode 用量要看 AI credits',
        'GitHub Free/Team 组织的新 Business 自助注册当前暂停，应走官方当前采购入口确认'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-13',
    sources: [
      'https://github.com/features/copilot/plans',
      'https://docs.github.com/en/copilot/get-started/plans',
      'https://docs.github.com/en/copilot/concepts/billing/individual-plans',
      'https://docs.github.com/en/copilot/concepts/billing/organizations-and-enterprises'
    ],
    decisionSummary: {
      verdict:
        '成熟的跨 IDE 与 GitHub 工作流底座，AI credits 体系更透明，但仍不应替代深度重构 Agent。',
      bestFor: 'GitHub 用户、多 IDE 开发者、需要低摩擦代码补全和 Agent mode 的团队',
      avoidIf: '你需要 AI 原生 IDE 的项目级规划、跨文件大改和独立工作区体验',
      mainRisk:
        '高级模型与 Agent 功能的 AI credits 消耗需要持续观察；Business 新自助注册当前还有采购入口限制',
      alternatives: ['Cursor', 'Claude Code', 'Gemini CLI']
    },
    swot: { S: '生态成熟', W: '功能单一', O: 'Workspace', T: 'Cursor' },
    tags: ['推荐', 'GitHub', '插件', '生态', 'CodingAgent']
  },
  {
    id: 'verdent',
    name: 'Verdent',
    category: 'ide',
    subcategory: '多Agent IDE',
    developer: 'Verdent Team',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          '免费试用：7 天 100 credits；Starter $19/月；Pro $59/月；Max $179/月；Teams $20/用户/月；Top-ups 约 1 credit = $0.059，当前标注 No Markup on Model Costs',
        models:
          'Pricing 页展示 Claude Fable/Opus/Sonnet、GPT-5.5、Gemini 3.1 Pro、GLM-5.2、Kimi K2.7 Code 等；模型与 provider pricing 以官方模型价格页为准',
        link: 'https://www.verdent.ai/pricing'
      }
    ],
    freeQuota: '7 天免费试用含 100 credits；包含 Eco Mode，BYOK/BYOA 可降低或绕开部分 credits 消耗',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.verdent.ai/pricing',
      'https://www.verdent.ai/blog/swe-bench-verified-technical-report',
      'https://www.verdent.ai/docs/account-billing/model-pricing',
      'https://www.verdent.ai/blog/introducing-eco-mode-byok-and-updated-pricing'
    ],
    decisionSummary: {
      verdict:
        '适合愿意尝试多 Agent 编码和 VS Code/desktop 双入口的开发者；benchmark 可作为参考，但不要单独当成选型结论。',
      bestFor: '复杂任务分解、多 Agent 协作、需要 Eco Mode / BYOK / PAYG 控制成本的开发者',
      avoidIf: '你只需要稳定补全或不想管理 credits、top-up、BYOK 和模型选择',
      mainRisk:
        '官方 pricing 有限时 bonus 和 credits 结构，真实成本取决于模型 provider pricing、任务复杂度和 Eco Mode/BYOK 使用方式',
      alternatives: ['Cursor', 'Claude Code', 'OpenAI Agents SDK']
    },
    pros: [
      '免费试用提供 7 天 100 credits',
      'Starter / Pro / Max 分别提供 480、1,500、4,500 monthly credits（含限时 bonus）',
      'Eco Mode 可用低成本模型继续工作，且不消耗 Verdent credits',
      'BYOK / BYOA 支持自带模型或账号来控制成本',
      'Pricing 页当前标注 No Markup on Model Costs，并给出 never expire top-ups',
      '官方技术报告披露 SWE-bench Verified 上的 76.1% pass@1 / 81.2% pass@3',
      '模型价格页公开 provider pricing，标注按每 1M tokens 计价'
    ],
    cons: [
      '限时 bonus 会变化，不能把当前 credits 当成长期固定额度',
      'credits 消耗依赖模型类型和工作负载',
      'SWE-bench 分数来自官方技术报告，仍需结合真实项目验证',
      '新工具生态、社区和企业治理成熟度仍要观察'
    ],
    bestFor: '复杂任务分解、多 Agent 协作、代码审查',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，Verdent 的亮点是多 Agent 工作流和成本控制组合，而不是单一 benchmark 分数。官方 pricing 仍显示 7 天 100 credits、Starter/Pro/Max/Teams、No Markup on Model Costs 和 top-ups；2026-04-02 博文则说明 Eco Mode、BYOK、PAYG 与 subscription credits 并存。',
      pitfalls: [
        '先看任务类型会消耗多少 credits',
        '注意限时 bonus 变化',
        'SWE-bench 结果要与本仓库真实任务试跑结合',
        '需要熟悉多 Agent 工作流'
      ]
    },
    swot: {
      S: '多 Agent、Eco Mode、BYOK、PAYG',
      W: 'credits 与模型价格估算复杂',
      O: '复杂工程任务和成本可控 Agent 市场',
      T: '成熟 IDE Agent 与 benchmark 过拟合风险'
    },
    tags: ['多Agent', 'Eco Mode', 'BYOK', 'PAYG', 'provider pricing', 'SWE-bench'],
    video: { src: './videos/verdent.mp4' }
  },
  {
    id: 'jetbrains-ai',
    name: 'JetBrains AI Assistant',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'JetBrains',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'AI Free / AI Pro / AI Ultimate；具体价格和 credit 额度按官方账号与地区页面为准',
        models: '云端大模型 + 本地 AI（Ollama/LM Studio 等路径以官方 IDE 支持为准）',
        link: 'https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html'
      }
    ],
    freeQuota: 'AI Free 提供有限 AI credits；本地补全和云端功能额度按官方计划区分',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      '原生集成到 IntelliJ、PyCharm 等 JetBrains IDE',
      'AI Free / Pro / Ultimate 分层清晰',
      'IDE 内代码补全、聊天、解释和重构体验一致',
      '支持企业购买与团队管理路径',
      '本地 AI 路径可降低部分隐私和成本压力'
    ],
    cons: [
      '主要价值绑定 JetBrains IDE',
      '云端 AI credits 和本地补全不是同一种额度',
      '不同地区和账号类型的价格/税费需要按结账页确认',
      '上下文理解不如专用 Agent IDE 激进',
      '非 JetBrains 用户迁移成本高'
    ],
    bestFor: 'JetBrains 生态系统用户、企业团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，JetBrains 官方说明仍将 AI Assistant 归入 AI Free、AI Pro、AI Ultimate 计划，并用 AI credits 管理云端能力。本地补全、云端聊天、企业购买和 IDE 支持范围需要分开评估，不再用旧的固定欧元年费做当前口径。',
      pitfalls: [
        '先确认账号所在地区的价格和税费',
        '区分本地补全与云端 AI credits',
        '仅限 JetBrains IDE 生态'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html',
      'https://www.jetbrains.com/ai-ides/buy/'
    ],
    decisionSummary: {
      verdict:
        'JetBrains IDE 用户的低摩擦 AI 路线，适合企业和长期 JetBrains 生态，但额度要按 AI credits 计划管理。',
      bestFor: 'JetBrains 生态系统用户、企业团队、希望保留熟悉 IDE 的开发者',
      avoidIf: '你主要使用 VS Code/Cursor，或需要跨编辑器的强 Agent 工作流',
      mainRisk:
        'AI Free、Pro、Ultimate 的云端 credits、本地能力和地区价格容易被混成一个“免费层”判断',
      alternatives: ['GitHub Copilot', 'Cline', 'Cursor']
    },
    swot: { S: 'JetBrains 集成、企业级', W: '仅限 JetBrains', O: '企业市场', T: 'GitHub Copilot' },
    tags: ['IDE', 'JetBrains', '企业', '插件', '本地AI']
  },

  // ============= AI CLI (11个) =============
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Anthropic',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Claude Pro/Max 订阅路径可用；API 路径按 token 消耗计费，订阅计划价格以 claude.com/pricing 为准',
        models: 'Claude models（以当前账号/计划/API 可用模型为准）',
        link: 'https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan'
      }
    ],
    freeQuota: '无独立永久免费额度；Pro/Max 使用量与 Claude 共用，API 路径按 token 和组织限制计费',
    contextWindow: '取决于当前 Claude 模型与订阅/API 路径',
    chineseSupport: 4,
    pros: [
      '终端和支持的 IDE 中直接使用 Claude models',
      'Pro/Max 订阅与 Claude Code 统一，不一定需要单独 API key',
      'VS Code、Cursor forks、JetBrains 等 IDE 路径可用',
      'API 路径按 token 消耗，适合需要组织级计费、限额和自动化的场景',
      '官方成本文档强调按模型、代码库规模和自动化使用量管理成本'
    ],
    cons: [
      'Pro/Max 使用量与 Claude 共用',
      'API token 消耗与订阅路径分开，开错路径会产生额外成本',
      'Max/订阅路径仍有使用限制和优先级差异',
      '仅限 Claude 生态，模型选择不如多模型 CLI 灵活',
      '简单任务可能过度消耗高价值额度'
    ],
    bestFor: '关键方案、复杂重构、高难定位、大型代码库',
    funRanking: '夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，Claude Code 仍适合把高难任务交给 Claude 在终端或 IDE 里推进。官方成本文档强调 API 路径按 token 消耗计费，订阅计划价格应回到 claude.com/pricing；Pro/Max 订阅路径和 API 路径要分开管理。',
      pitfalls: [
        '先确认是 Pro/Max 订阅路径还是 API token 路径',
        '关键任务再用',
        '订阅路径仍有使用限制和优先级差异',
        '简单任务可能过度消耗高价值额度'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan',
      'https://support.claude.com/en/articles/11049741-what-is-the-max-plan',
      'https://docs.anthropic.com/en/docs/claude-code/costs',
      'https://docs.anthropic.com/en/docs/about-claude/pricing'
    ],
    decisionSummary: {
      verdict:
        '强任务优先的 Claude 终端/IDE Agent，适合复杂方案和高难重构，但要严控订阅路径和 API token 成本。',
      bestFor: '关键方案、复杂重构、高难定位、大型代码库',
      avoidIf: '你需要永久免费主力工具、多模型自由切换，或不希望与 Claude 对话额度共享',
      mainRisk: 'Pro/Max 使用量与 Claude 共用，API token 消耗又是单独计费路径，容易误判真实成本',
      alternatives: ['Gemini CLI', 'Codex', 'Cursor']
    },
    swot: { S: '复杂任务能力突出', W: '价格高', O: '企业需求', T: '低成本替代' },
    tags: ['推荐', 'CLI', 'Claude', 'AgentTeams', 'ContextCompaction', 'AdaptiveThinking'],
    video: { src: './videos/claude-code.mp4' },
    radarChart: 'images/claude_code.png'
  },
  {
    id: 'gemini-cli',
    name: 'Gemini CLI',
    category: 'cli',
    subcategory: '终端Agent',
    developer: 'Google',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          '个人 Google 账号 OAuth 免费额度；API/企业路径按 Google AI / Gemini Code Assist 计划计费',
        models: 'Gemini 3 models，1M token context（以官方 README 当前说明为准）',
        link: 'https://github.com/google-gemini/gemini-cli'
      }
    ],
    freeQuota: '个人 Google 账号：60 requests/minute，1,000 requests/day',
    contextWindow: '1M token context',
    chineseSupport: 4,
    pros: [
      '官方 GitHub 项目，Apache-2.0 开源',
      '个人账号 OAuth 无需 API key 即可使用免费额度',
      '60 requests/minute 与 1,000 requests/day 对调研很友好',
      'Gemini 3 models 与 1M token context 适合读仓库和长日志',
      '内置工具与 MCP 支持，终端优先'
    ],
    cons: [
      '请求数和日额度有上限，高阶/Pro 模型可用性可能低于总额度',
      '复杂工程落地仍需要人工审查',
      'Google 账号、Code Assist license 和网络环境会影响可用性',
      '企业级权限、审计和计费需要走对应 Google 路径',
      '模型可用性随官方最新策略变化'
    ],
    bestFor: '读仓库、长日志、多文件定位、方案调研',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，官方 README 仍确认个人 Google 账号 OAuth 路径可用 60 RPM / 1,000 RPD 免费额度、Gemini 3 models、1M token context、内置工具与 MCP。适合先读懂项目，再决定是否交给更贵的 Agent 执行。',
      pitfalls: [
        '有请求数和日额度上限',
        '高阶模型和付费 license 可用性要按当前账号确认',
        '极复杂任务仍要人工拆分或交给 Claude Code/Codex',
        'MCP 工具权限需要按项目最小化配置'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://github.com/google-gemini/gemini-cli',
      'https://github.com/google-gemini/gemini-cli/blob/main/docs/resources/quota-and-pricing.md',
      'https://developers.google.com/gemini-code-assist/resources/quotas'
    ],
    decisionSummary: {
      verdict:
        '免费长上下文调研首选，适合读仓库和日志；复杂执行和高阶模型可用性仍要按账号/计划确认。',
      bestFor: '读仓库、长日志、多文件定位、方案调研',
      avoidIf: '你需要无请求上限、企业级审计，或需要一次性完成高风险重构',
      mainRisk: '免费额度、高阶模型可用性、Code Assist license 和 Google 账号路径会影响稳定性',
      alternatives: ['Claude Code', 'Codex', 'Aider']
    },
    swot: { S: '1M 上下文、免费', W: '复杂工程一般', O: 'Google 生态', T: 'Claude Code 能力' },
    tags: ['推荐', 'CLI', '免费', '长上下文', 'Google', 'Gemini', 'MCP', 'FlashLite', 'Video'],
    video: { src: './videos/gemini-cli.mp4' },
    radarChart: 'images/geminicli.png'
  },
  {
    id: 'qwen-cli',
    name: 'Qwen CLI',
    category: 'cli',
    subcategory: '终端Agent',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing:
          'Alibaba ModelStudio：Coding Plan 固定订阅 / Token Plan 用量计费 / Standard API Key；第三方或自定义 provider 另行计费',
        models:
          'Coding Plan 支持 qwen3-coder-plus、qwen3.7-plus、qwen3-max-2026-01-23、GLM、Kimi、MiniMax 等，按地区和计划可用性变化',
        link: 'https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/'
      }
    ],
    freeQuota:
      '旧 OAuth 免费层已于 2026-04-15 停止；当前需 Coding Plan 或自行配置 API key/provider',
    contextWindow: '取决于当前 Qwen 模型与 API/provider 路径',
    chineseSupport: 5,
    pros: [
      '官方 Qwen Code 项目，适合中文代码和终端 Agent 场景',
      '当前 /auth 主入口是 Alibaba ModelStudio、第三方 provider 和自定义 provider',
      'Coding Plan 提供较可预测成本，Token Plan 和 Standard API Key 适合团队或已有 ModelStudio 配额',
      '可接 Qwen Coder/Max、GLM、Kimi、MiniMax 等当前 Coding Plan 支持模型',
      'MCP 服务器集成，适合国内模型栈试验'
    ],
    cons: [
      '旧 OAuth 免费请求额度已于 2026-04-15 停止，不能再按免费 CLI 规划',
      'Coding Plan、Token Plan、Standard API Key、第三方 provider 的成本和地区入口不同',
      'API/provider 计费、地区和模型可用性需分别确认',
      '大型仓库仍需人工审查',
      '成熟度不如 Claude Code/Gemini CLI'
    ],
    bestFor: '中文需求、中小项目开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Qwen Code 官方认证文档明确旧 OAuth free tier 已于 2026-04-15 停止；当前 /auth 应在 Alibaba ModelStudio、第三方 provider 或自定义 provider 中选择。Coding Plan 适合个人开发者做固定成本路径，Token Plan/API Key 则要按 Model Studio 当前模型价格核算。',
      pitfalls: [
        '旧 OAuth 免费额度不可再作为预算依据',
        '先确认 Coding Plan 或 API provider',
        '大型仓库仍需人工审查'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/',
      'https://www.alibabacloud.com/help/en/model-studio/coding-plan',
      'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
      'https://github.com/QwenLM/qwen-code'
    ],
    decisionSummary: {
      verdict:
        '中文和 Qwen 生态里的终端 Agent 值得跟进，但旧免费额度已停止，必须按 Coding Plan/API 路径重新估算成本。',
      bestFor: '中文需求、中小项目开发、Qwen/API provider 已就绪的团队',
      avoidIf: '你依赖旧的每日免费调用额度，或不想配置 Coding Plan/API key',
      mainRisk:
        '2026-04-15 后 OAuth 免费层已停，Coding Plan、Token Plan、Standard API Key 和 provider 计费路径容易被误判',
      alternatives: ['Gemini CLI', 'Aider', 'OpenCode']
    },
    swot: {
      S: '中文、Qwen 生态、ModelStudio 路径明确',
      W: '计费和地区入口较复杂',
      O: '国内模型栈和终端 Agent 试点',
      T: 'Gemini CLI、Aider、OpenCode'
    },
    tags: ['推荐', 'CLI', '国产', '中文', 'Qwen', 'CodingPlan', '多模态', 'MCP'],
    radarChart: 'images/qwencli.png'
  },
  {
    id: 'aider',
    name: 'Aider',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Paul Gauthier',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '免费开源；API/订阅由所选模型 provider 自付',
        models:
          '可连接多数 LLM；官方当前 best-models 页仍建议用代码编辑能力强的模型，并参考 Aider LLM leaderboards',
        link: 'https://aider.chat/docs/llms.html'
      }
    ],
    freeQuota: '工具免费；可接免费 API provider 或本地模型，但能力和限额取决于 provider',
    contextWindow: '取决于所选模型；按需将文件加入 chat',
    chineseSupport: 3,
    pros: [
      'Git 深度集成，AI 修改会自动落到 Git 工作流中',
      '可连接多数 LLM，支持免费 provider 和 Ollama/本地模型路径',
      '安装路径简单，官方推荐 aider-install',
      '支持把指定文件加入 chat，并可自动提交与 /undo',
      '适合喜欢终端和可审计 diff 的开发者'
    ],
    cons: [
      '无完整 GUI/IDE 体验，需要命令行舒适度',
      '模型能力决定编辑质量，较弱模型可能无法可靠完成修改',
      'API key、provider 配额和网络环境需要自行管理',
      '大型代码库仍要主动选择相关文件进入上下文'
    ],
    bestFor: 'Git 工作流、多模型切换、隐私意识强团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，Aider 官方文档仍强调“连接多数 LLM”，并建议查看 LLM leaderboards 选择更会返回 code edits 的模型。它的核心价值是 Git-first、终端内可审计修改和多 provider 灵活性，不应写成某个固定模型绑定工具。',
      pitfalls: [
        '需要自带 API key 或配置本地模型',
        '仅终端无完整 GUI',
        '低能力模型会明显拖累编辑质量',
        '大型代码库要主动挑文件进上下文'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://github.com/aider-ai/aider',
      'https://aider.chat/docs/llms.html',
      'https://aider.chat/docs/usage.html'
    ],
    decisionSummary: {
      verdict: '终端和 Git 工作流用户的稳健开源选择，但效果高度依赖所选模型和上下文文件选择。',
      bestFor: 'Git 工作流、多模型切换、隐私意识强团队',
      avoidIf: '你想要完整 IDE 图形体验，或不愿管理 API key、模型和上下文文件',
      mainRisk: '模型能力、provider 额度和手动上下文选择会直接影响编辑质量',
      alternatives: ['Gemini CLI', 'Codex', 'OpenCode']
    },
    swot: {
      S: '开源、Git-first、多模型',
      W: '仅终端且需自管 provider',
      O: '本地模型和开源社区持续增长',
      T: 'IDE 内置 Agent 降低使用门槛'
    },
    tags: ['开源', 'CLI', 'Git', '多模型', 'TerminalNative', 'LocalLLM']
  },
  {
    id: 'cline',
    name: 'Cline',
    category: 'cli',
    subcategory: 'VS Code插件',
    developer: '开源社区',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          '插件开源；Cline (usage-billing) 按 credits 付费；ClinePass $9.99/月；自带 API key / provider 另计',
        models:
          'Cline (usage-billing) 100+ 模型、ClinePass open coding models、Claude、OpenAI、Gemini、本地模型等',
        link: 'https://cline.bot/pricing'
      }
    ],
    freeQuota: '个人开源扩展免费；模型调用、Cline credits、ClinePass 或自带 provider 费用另计',
    contextWindow: '200K-400K+ (取决于模型)',
    chineseSupport: 3,
    pros: [
      'VS Code 扩展与 CLI 路径成熟，JetBrains 扩展需按当前企业/产品页确认',
      'Plan/Act 双模式适合审批式 Agent 工作流',
      '支持 Cline (usage-billing)、ClinePass 与自带 API key',
      'ClinePass 是单独 provider，$9.99/月，面向精选 open coding models 提供更高限额',
      'MCP 协议生态集成',
      '人在环审批和检查点回滚适合代码库内操作',
      '本地优先架构降低部分数据外流风险'
    ],
    cons: [
      '插件开源不等于模型调用免费',
      'Cline credits、ClinePass 和自带 provider 的计费边界需要看清',
      '超时问题特别是 Ollama',
      '偶尔生成错误代码',
      '长上下文分割问题',
      '运行时调试能力有限',
      '边缘情况工作流失败'
    ],
    bestFor: 'VS Code 用户、自主执行任务',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，Cline 官方价格页说明个人开源扩展免费、只按 AI inference 付费；文档将 Cline (usage-billing) 和 ClinePass 明确拆成两个 provider。它仍是强力的 VS Code/CLI Agent，但预算应按 credits、ClinePass 或自带 provider 分开管理。',
      pitfalls: [
        '先确认使用 Cline (usage-billing)、ClinePass 还是自带 API key',
        '学习曲线',
        '超时问题特别是 Ollama',
        '模型调用成本可能被低估'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://cline.bot/pricing',
      'https://docs.cline.bot/getting-started/cline-provider',
      'https://docs.cline.bot/getting-started/clinepass'
    ],
    decisionSummary: {
      verdict:
        'VS Code/CLI 里的开源 Agent 插件强选，但真实成本取决于 Cline (usage-billing)、ClinePass 或自带模型 provider。',
      bestFor: 'VS Code 用户、自主执行任务、需要人在环审批的团队',
      avoidIf: '你需要一个不接任何付费模型/provider 的长期主力方案',
      mainRisk:
        '插件开源、Cline credits、ClinePass $9.99/月和自带 API key 会形成多条计费路径，容易低估成本',
      alternatives: ['Continue', 'OpenCode', 'GitHub Copilot']
    },
    swot: { S: 'VS Code 集成', W: '需 API', O: '插件生态', T: 'Copilot' },
    tags: ['CLI', 'VS Code', '插件', 'Provider', 'JetBrains', 'MCP', 'ComputerUse']
  },
  {
    id: 'continue',
    name: 'Continue',
    category: 'cli',
    subcategory: '开源平台',
    developer: '开源社区',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '仓库已不再主动维护且对用户 read-only；历史开源版本仍可参考，模型/provider 自付',
        models:
          'OpenAI、Anthropic、Gemini、DeepSeek、Mistral、本地模型等 provider 配置（以历史文档为准）',
        link: 'https://www.continue.dev/'
      }
    ],
    freeQuota: '历史开源项目；本地/自带 provider 成本取决于模型和部署方式',
    contextWindow: '取决于模型 (Claude 200K+, 自动上下文选择)',
    chineseSupport: 3,
    pros: [
      '历史上成熟的 VS Code/JetBrains 开源 AI 编码助手',
      '模型 provider 配置灵活',
      '本地助手配置和工作区规则仍有参考价值',
      '官方 GitHub README 明确 final 2.0.0 release 覆盖 VS Code extension、CLI 和 JetBrains plugin',
      '可作为理解开源 AI IDE 架构和迁移到 Cursor 后生态去向的资料'
    ],
    cons: [
      '官方首页说明 Continue 已被 Cursor 收购，仓库已不再主动维护且对用户 read-only',
      '不适合作为新项目长期依赖的主推工具',
      '代码质量依赖所选模型',
      '本地模型需大量内存',
      '历史文档和当前 Cursor 生态之间需要区分'
    ],
    bestFor: '多 IDE 用户、自托管需求',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-08，Continue 官方首页显示团队已加入 Cursor，GitHub 仓库 README 明确该仓库已不再主动维护、对所有用户只读，并有 final 2.0.0 release 覆盖 VS Code extension、CLI 和 JetBrains plugin。它仍适合做历史参考或迁移评估，但不应继续作为“正在快速演进的开源主力平台”推荐。',
      pitfalls: [
        '新项目优先评估 Cursor 或其他活跃替代',
        '区分历史 Continue 文档与当前 Cursor 生态',
        '代码质量仍取决于所选模型/provider'
      ]
    },
    verificationStatus: 'historical',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.continue.dev/',
      'https://github.com/continuedev/continue',
      'https://docs.continue.dev/customize/model-providers/overview'
    ],
    decisionSummary: {
      verdict: 'Continue 现在更适合作为历史开源 AI 编码助手参考；新项目不宜把它列为活跃主推工具。',
      bestFor: '迁移评估、开源架构参考、仍在使用 Continue 的存量团队',
      avoidIf: '你正在为新团队选择长期维护的 AI 编码平台',
      mainRisk:
        '官方已加入 Cursor，仓库不再主动维护且对用户 read-only；final 2.0.0 release 之后的历史能力和当前维护状态容易混淆',
      alternatives: ['Cursor', 'Cline', 'OpenCode']
    },
    swot: { S: '开源、多 IDE', W: '配置复杂', O: '开源生态', T: '商业产品' },
    tags: ['开源', 'CLI', '多IDE', '历史信息', 'Cursor', 'Provider']
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Anomaly',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '开源免费；可用免费模型/自带 provider；OpenCode Go 可选 $5 首月后 $10/月',
        models: '75+ providers（含本地模型）；OpenCode Go 提供精选 open coding models',
        link: 'https://opencode.ai/'
      }
    ],
    freeQuota:
      '工具开源免费；OpenCode Go 可选，含 5h $12、weekly $30、monthly $60 的 dollar-value limits',
    contextWindow: '取决于 provider/model',
    chineseSupport: 3,
    pros: [
      '当前官方站定位为 open source AI coding agent',
      '支持终端、IDE 扩展和 desktop beta',
      '75+ providers，可接 GitHub Copilot、ChatGPT Plus/Pro 或本地模型',
      'OpenCode Go 文档列出 GLM-5.2、Kimi K2.7 Code、MiniMax M3、Qwen3.7、DeepSeek V4 等 open coding models',
      'LSP、multi-session、share links 和 build/plan agents 完整',
      '官方强调不存储代码和上下文数据'
    ],
    cons: [
      '旧 opencode-ai 归档结论不再适用于当前 anomalyco/opencode 项目',
      'OpenCode Go 是可选订阅，不是使用 OpenCode 的必需项',
      'provider、Go 订阅和 Zen 按量服务容易让新用户混淆',
      '模型列表和 Go limits 可能随官方策略变化'
    ],
    bestFor: '开源终端 Agent、多 provider、隐私敏感开发',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，OpenCode 官方站仍将其定位为开源 AI coding agent，覆盖 terminal、IDE 和 desktop beta；OpenCode Go 文档最后更新于 2026-07-05，列出 $5 首月后 $10/月、5h/weekly/monthly dollar-value limits 和一批 open coding models。旧的“已归档、迁移至 Crush”说法应移除。',
      pitfalls: [
        '不要再链接旧 opencode-ai/opencode 归档仓库',
        'OpenCode Go 是可选订阅而非必选',
        '接入企业项目时仍需确认 provider 数据策略'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://opencode.ai/',
      'https://github.com/anomalyco/opencode',
      'https://opencode.ai/docs/go/'
    ],
    decisionSummary: {
      verdict: '当前是活跃的开源 coding agent，适合终端优先和多 provider 用户；旧归档判断已过时。',
      bestFor: '开源终端 Agent、多 provider、隐私敏感开发',
      avoidIf: '你需要成熟商业 SLA、一站式企业管理，或不想理解 provider/Go/Zen 的差异',
      mainRisk: '开源工具、可选订阅和不同 provider 的责任边界容易混淆',
      alternatives: ['Aider', 'Codex', 'Gemini CLI']
    },
    swot: {
      S: '活跃开源、多 provider、终端/IDE/desktop 覆盖',
      W: '商业支持和订阅边界需解释',
      O: '适合多模型与本地模型工作流',
      T: 'Aider、Codex、Gemini CLI 争夺终端用户'
    },
    tags: ['开源', 'CLI', '多模型', 'LSP', 'PrivacyFirst'],
    video: { src: './videos/opencode-cli.mp4' },
    radarChart: 'images/opencode.png'
  },
  {
    id: 'codex',
    name: 'Codex',
    category: 'cli',
    subcategory: '代码生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Codex 已包含在 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise；超出计划可用量时按 flexible credits / API 路径计费',
        models: 'Codex 推荐模型与可选模型以官方 Codex Models 文档为准',
        link: 'https://developers.openai.com/codex/pricing'
      }
    ],
    freeQuota:
      'Codex 随 ChatGPT Free/Go 等计划开放有限能力；各计划限制和 flexible credits 以官方 Codex pricing/Help Center 为准',
    contextWindow: '取决于所选 OpenAI 模型',
    chineseSupport: 3,
    pros: [
      'OpenAI 官方 Codex CLI/开发者文档持续维护',
      'Codex pricing 页明确列出 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise 覆盖',
      '可通过 /model 或 codex --model 切换模型，具体模型以官方 Codex Models 为准',
      'Help Center 明确说明计划限制和 credit options 会随计划变化',
      '适合与 OpenAI API/code generation 工作流衔接'
    ],
    cons: [
      '模型命名和可用性变化快，需要按官方文档核验',
      '价格与额度取决于 ChatGPT 计划、flexible credits 或 API 路径',
      '旧固定 Codex 型号和价格说法已从本站推荐语中移除',
      '国内访问受限',
      '高风险改动仍需要测试与人工审查'
    ],
    bestFor: 'OpenAI 生态内的代码生成、代码审查、CLI Agent 任务',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，OpenAI 官方 Codex pricing 页明确 Codex 包含在 ChatGPT Free、Go、Plus、Pro、Business、Edu、Enterprise 中；Help Center 说明不同计划的 usage limits 和 credit options 不同。采购或部署时应按官方 Codex pricing、models 和 credits 文档核验。',
      pitfalls: [
        '模型名和额度变化快，使用前看官方 Codex docs',
        '不要沿用旧的固定 Codex 型号和价格断言',
        '区分 ChatGPT 计划、flexible credits 和 API 路径',
        '高风险改动必须保留测试和人工审查'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://developers.openai.com/codex/pricing',
      'https://developers.openai.com/codex/cli/features',
      'https://developers.openai.com/codex/models',
      'https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan',
      'https://help.openai.com/en/articles/12642688-using-credits-for-flexible-usage-in-chatgpt-freegopluspro-sora'
    ],
    decisionSummary: {
      verdict:
        'OpenAI 生态首选的代码 Agent 路线，适合已经使用 ChatGPT/OpenAI API 的团队；模型、计划限制和 credits 必须跟官方文档走。',
      bestFor: 'OpenAI 生态内的代码生成、代码审查、CLI Agent 任务',
      avoidIf: '你需要固定模型名、固定免费额度，或项目无法使用 OpenAI 服务',
      mainRisk:
        'Codex 模型推荐、计划限制、flexible credits 和 API 计费路径变化快，旧资料很容易过时',
      alternatives: ['Claude Code', 'Gemini CLI', 'GitHub Copilot']
    },
    swot: { S: '代码生成、生态', W: '价格、访问', O: '企业级市场', T: '开源替代' },
    tags: ['推荐', 'CLI', 'OpenAI', '代码生成', '多语言', 'GPT-5', 'Agent'],
    video: { src: './videos/codex-cli.mp4' },
    radarChart: 'images/codex.png'
  },
  {
    id: 'goose',
    name: 'Goose',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'AAIF / Goose community',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Apache-2.0 开源软件；模型、云 provider 或企业部署费用另计',
        models:
          '15+ providers：Anthropic、OpenAI、Google、Ollama、OpenRouter、Azure、Bedrock 等，另有 ACP 和 70+ MCP extensions',
        link: 'https://goose-docs.ai/docs/getting-started/providers/'
      }
    ],
    freeQuota: 'Goose 软件开源；本地模型、托管 provider、API key 和企业环境成本需分别核算',
    contextWindow: '取决于所选 provider/model',
    chineseSupport: 3,
    pros: [
      '项目已从 block/goose 迁到 Linux Foundation 旗下 Agentic AI Foundation (AAIF)',
      '官方 README 定位为 desktop app、CLI 和 API 三种形态的本地开源 AI agent',
      'Apache-2.0 开源，适合自托管和二次开发',
      '支持 15+ provider、ACP 订阅接入和 70+ MCP extensions',
      '适合把终端、文件和工具调用放在本地工作流中'
    ],
    cons: [
      'Goose 项目已迁到 AAIF 组织，旧 block/goose 链接不宜作为当前主链接',
      '软件开源不代表模型调用免费',
      '本地模型需额外配置下载',
      '某些 provider 需预配置 AWS/Azure/API 凭证',
      '配置复杂',
      '生态仍在变化'
    ],
    bestFor: '本地部署、隐私优先用户',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，Goose 官方 README 明确项目已从 block/goose 迁到 AAIF，并定位为 desktop app、CLI、API 都可用的本地开源 AI agent。它适合本地优先、多 provider 和可扩展 Agent 场景，但预算仍应按所选模型/API/云环境核算。',
      pitfalls: [
        '不要再把旧 block/goose 当作当前主仓库',
        '需要配置模型 provider 或本地模型',
        '软件开源不等于推理成本为零'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://goose-docs.ai/',
      'https://github.com/aaif-goose/goose',
      'https://goose-docs.ai/docs/getting-started/providers/'
    ],
    decisionSummary: {
      verdict:
        'AAIF 旗下本地优先、多 provider 的开源 Agent 选择，适合想掌控运行环境的开发者，但模型和云端成本要单独算。',
      bestFor: '本地部署、隐私优先用户、多 provider Agent 实验',
      avoidIf: '你想要开箱即用的托管商业 Agent 或不愿配置模型 provider',
      mainRisk: '旧仓库地址、开源软件成本和 provider 推理成本容易混淆',
      alternatives: ['OpenCode', 'Cline', 'OpenHands']
    },
    swot: { S: '开源、本地', W: '生态新', O: '隐私市场', T: '云端工具' },
    tags: ['开源', 'CLI', '本地', 'AAIF', 'Rust', 'MCP', 'MultiModel', 'SessionForking']
  },
  {
    id: 'crush',
    name: 'Crush',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'Charm Bracelet',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Crush 工具开源；模型可 BYOK / provider 自付 / Charm Hyper credits',
        models:
          'Multi-Model：OpenAI/Anthropic-compatible APIs、provider 路径和 Charm Hyper 等，以配置为准',
        link: 'https://github.com/charmbracelet/crush'
      }
    ],
    freeQuota:
      'Crush 本体可安装使用；Charm Hyper 公开 Free 层为 100 Hypercredits/月，Subscription $20/月提供每日刷新的 250 Hypercredits；预付包从 $5/100 Hypercredits 起且不失效',
    contextWindow: '取决于所选模型',
    chineseSupport: 3,
    pros: [
      'Charm Bracelet 官方维护，定位为终端里的 AI coding companion',
      'Multi-Model：可选择多种 LLM，也支持 OpenAI/Anthropic-compatible APIs',
      '支持会话上下文、mid-session model switching、LSP 增强和 MCP 扩展',
      '跨 macOS、Linux、Windows PowerShell/WSL、BSD 等终端环境',
      '可配 Charm Hyper 获取 coding-optimized inference 和 Hypercredits 计费路径'
    ],
    cons: [
      '工具本身与推理费用是两件事，BYOK/provider/Hyper 成本需要分开算',
      'Hypercredits 映射 token 成本，官方当前写明 1 Hypercredit = 5¢',
      '项目仍快速演进，企业治理和团队预算需跟进官方说明',
      '需要自行配置 provider、API key 或 Hyper 账户',
      '中文资料和国内网络体验需要实测'
    ],
    bestFor: '喜欢精美 TUI 的开源 CLI 用户',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Charm 官方 GitHub 将 Crush 描述为可在终端中运行的 AI coding companion，支持 Multi-Model、session-based context、LSP 和 MCP。Charm Hyper 另有 Free 100 Hypercredits/月、$20/月订阅、预付 bundles 和 1 Hypercredit = 5¢ 口径，因此应把 Crush 本体、BYOK/provider 成本和 Hyper credits 分开评估。',
      pitfalls: [
        '不要把开源工具本体等同于免费推理',
        '先确认走 BYOK、provider API 还是 Charm Hyper credits'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://github.com/charmbracelet/crush',
      'https://charm.land/blog/crush-comes-home/',
      'https://hyper.charm.land/'
    ],
    decisionSummary: {
      verdict:
        '适合喜欢终端 TUI、开源生态和多 provider 配置的开发者；预算要按 BYOK/provider 或 Hypercredits 单独核算。',
      bestFor: '喜欢精美 TUI 的开源 CLI 用户',
      avoidIf: '你想要商业 IDE 级开箱即用、统一账单和成熟企业管理控制台',
      mainRisk:
        '开源安装、provider API 与 Charm Hyper 是不同成本层，容易被混成“完全免费”或单一订阅',
      alternatives: ['OpenCode', 'Goose', 'Warp']
    },
    swot: {
      S: '精美 TUI、Multi-Model、LSP、MCP、Charm 生态',
      W: 'provider/credits 成本需自管',
      O: '终端 Agent 与 Hyper 推理生态',
      T: 'Claude Code、Codex、Warp 等商业路径'
    },
    tags: ['开源', 'CLI', 'TUI', 'Charm', 'MCP', 'MultiModel']
  },
  {
    id: 'openhands',
    name: 'OpenHands',
    category: 'cli',
    subcategory: '开源CLI',
    developer: 'OpenHands Community',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Local / Individual / Enterprise；本地自托管与云端计划能力不同，价格以官方 pricing 为准',
        models: 'OpenHands + 所选 LLM/provider；本地或云端路径以官方当前说明为准',
        link: 'https://www.openhands.dev/pricing'
      }
    ],
    freeQuota: '本地自托管和云端 Individual/Enterprise 路径分开；模型/API/托管资源成本需单独确认',
    contextWindow: '取决于所选模型/provider',
    chineseSupport: 3,
    pros: [
      '官方 pricing 已将 Local、Individual、Enterprise 路径拆开',
      '开源代码库活跃，适合自托管研究和工程实验',
      '可作为软件开发 Agent 运行命令、编辑文件和连接工具',
      '适合需要本地/企业部署选择的团队',
      '多 provider 路径便于结合现有模型账号'
    ],
    cons: [
      '本地自托管、云端 Individual、Enterprise 的能力和成本不同',
      '模型/API、计算资源和托管计划可能分别计费',
      '学习曲线陡',
      '需要配置环境',
      '企业能力需按官方销售/计划确认'
    ],
    bestFor: '开源用户、多模型切换',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，OpenHands 官方 pricing 将 Local、Individual、Enterprise 分层展示：Local open source 免费，Individual SaaS 免费但 BYOK 或 at-cost provider 另计，Enterprise 定制价格。它仍是开源软件开发 Agent 的重要选择，但要避免把本地自托管、云端计划和模型/API 成本合并成一个简单“免费版”。',
      pitfalls: [
        '先选 Local、Individual 还是 Enterprise 路径',
        '模型/API 和托管资源成本另算',
        '需要配置环境和权限边界'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://www.openhands.dev/pricing', 'https://github.com/OpenHands/OpenHands'],
    decisionSummary: {
      verdict:
        '开源软件开发 Agent 的重要路线，适合自托管和企业评估；成本要按 Local/Individual/Enterprise 与模型 provider 拆开。',
      bestFor: '开源用户、多模型切换、本地/企业部署评估',
      avoidIf: '你需要不配置环境的轻量 IDE 插件，或希望所有成本由单一免费层覆盖',
      mainRisk: '本地部署、云端计划、模型/API 和企业能力边界容易混淆',
      alternatives: ['Goose', 'OpenCode', 'Cline']
    },
    swot: { S: '开源、综合界面', W: '学习曲线', O: '开源社区', T: '商业产品' },
    tags: ['开源', 'CLI', '多模型', '综合', 'OpenHandsLM', 'MCP', '企业级', 'RBAC']
  },

  // ============= LLM (14个) =============
  {
    id: 'claude',
    name: 'Claude',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'Anthropic',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Claude Free / Pro $20月付或$17/月年付 / Max $100/月起 / Team 标准席 $25月付或$20/月年付、Premium 席 $125月付或$100/月年付 / Enterprise；API 按模型计费',
        models: 'Claude Fable 5, Claude Opus 4.8, Claude Sonnet 5, Claude Haiku 4.5 等',
        link: 'https://claude.com/pricing'
      }
    ],
    freeQuota: 'Claude.ai Free 有限使用；API 无固定永久免费额度，按官方价格页计费',
    contextWindow: '默认 200K；部分模型和 API 路径支持更长上下文，以上线文档为准',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://platform.claude.com/docs/en/about-claude/models/overview',
      'https://claude.com/pricing',
      'https://support.anthropic.com/en/articles/11049762-choosing-a-claude-ai-plan'
    ],
    decisionSummary: {
      verdict:
        '强代码、强推理、长上下文的一线通用模型，适合复杂工程和严肃写作，但成本和额度要按计划管理。',
      bestFor: '代码审查、方案设计、长上下文任务、多模态任务、复杂推理',
      avoidIf: '你需要极低 API 成本、国内无障碍访问，或只做轻量日常问答',
      mainRisk:
        'Claude.ai 计划、API 价格和具体可用模型变化快，不能按旧 Sonnet/Opus 版本号做长期判断',
      alternatives: ['GPT-5.5 / OpenAI', 'Gemini', 'DeepSeek']
    },
    pros: [
      'Claude Fable 5 是 Anthropic 当前高能力模型之一，适合长任务 Agent 和复杂执行',
      'Opus 4.8 面向复杂 agentic coding 和企业工作，Sonnet 5 平衡速度与能力，Haiku 4.5 控制延迟与成本',
      'Claude.com 已把 Free/Pro/Max/Team/Enterprise 和 API 分开展示，个人与团队入口更清晰',
      'Fable/Opus/Sonnet 当前文档展示 1M context，适合长文档和工程上下文任务',
      'Artifacts、文件、代码执行、Research、Skills 与连接器增强了知识工作流'
    ],
    cons: [
      'API 价格通常高于国产低价模型',
      'Free/Pro/Max/Team 的使用额度、seat 类型和模型能力需要按官方价格页核验',
      '国内访问受限',
      '模型名称和可用性变化快，旧固定 Claude 结论需要持续更新'
    ],
    bestFor: '代码审查、方案设计、长上下文任务、多模态任务、复杂推理',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，Anthropic 模型页显示 Claude Fable 5、Opus 4.8、Sonnet 5、Haiku 4.5，并把 API 价格、context 和模型 ID 分开说明；Claude.com pricing 也将 Free/Pro/Max、Team 标准席/Premium 席和 Enterprise 分层。Claude 仍是复杂代码、长上下文方案和严肃写作的强选，但要按 seat、usage 和 API 价格管理成本。',
      pitfalls: [
        '按官方模型页确认当前可用型号',
        '输出成本高，长任务先估算 token',
        '国内访问需代理或企业路径'
      ]
    },
    swot: {
      S: '代码能力、推理稳定、长上下文',
      W: '成本和额度管理压力',
      O: '企业知识工作和工程 Agent',
      T: 'GPT-5.5、Gemini、国产低价模型'
    },
    tags: ['推荐', 'LLM', '代码', '长上下文', '多模态', '已核验']
  },
  {
    id: 'gpt',
    name: 'GPT-5.5 / OpenAI',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'OpenAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'ChatGPT Free/Go/Plus/Pro/Business/Edu/Enterprise；API 按模型、工具、服务层和缓存计费',
        models: 'gpt-5.5, gpt-5.5-pro, GPT-5 family, reasoning/audio/image/video models',
        link: 'https://developers.openai.com/api/docs/guides/latest-model'
      }
    ],
    freeQuota: 'ChatGPT Free 有限；API 无固定永久免费额度，按官方价格页计费',
    contextWindow: '取决于模型、API 与工具配置；以官方模型和价格文档为准',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://developers.openai.com/api/docs/guides/latest-model',
      'https://developers.openai.com/api/docs/pricing',
      'https://openai.com/chatgpt/pricing/'
    ],
    decisionSummary: {
      verdict:
        '生态最完整的通用 AI 平台，GPT-5.5 适合复杂生产工作流和 Agent，但价格/工具计费要精细控制。',
      bestFor: '通用任务、生态集成、推理任务、Agent 工作流、多模态工具链',
      avoidIf: '你需要固定低成本、国内无障碍访问，或只做简单批量文本任务',
      mainRisk: '模型、ChatGPT 计划、API 工具和服务层计费变化快，旧固定 GPT 口径会误导成本判断',
      alternatives: ['Claude', 'Gemini', 'DeepSeek']
    },
    pros: [
      '官方 GPT-5.5 文档定位为复杂生产工作流、工具型 Agent、长上下文检索和代码场景',
      'Responses API、托管工具、结构化输出、推理 effort 和 verbosity 控制完整',
      'ChatGPT 生态成熟，覆盖对话、文件、数据分析、图像、视频和自定义 GPT/应用入口',
      'OpenAI API 平台和 Codex/Agents SDK 生态衔接强',
      '模型和工具选择丰富，适合从个人到企业不同路径'
    ],
    cons: [
      'API 成本由模型、reasoning effort、工具、缓存和服务层共同决定，容易低估',
      '旧固定 GPT 迁移提示不能直接复用到当前模型',
      '国内访问受限',
      '高质量 Agent 流程需要评测和编排，不是简单替换模型名'
    ],
    bestFor: '通用任务、生态集成、推理任务、插件生态',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，OpenAI 官方开发者文档的最新模型指南仍指向 GPT-5.5，并强调不要把它当作旧 GPT-5.x 提示词栈的直接替换。本站采用 GPT-5.5 / OpenAI 生态口径：适合复杂生产工作流、工具型 Agent、长上下文检索和代码任务，但必须按模型、工具、缓存、服务层和实际 token 用量控制成本。',
      pitfalls: [
        '不要沿用旧固定 GPT 提示词和价格判断',
        '控制 reasoning effort、verbosity 和工具调用',
        '高风险任务要用评测和人工审查兜底'
      ]
    },
    swot: {
      S: '生态成熟、工具链完整、推理强',
      W: '成本复杂、国内访问受限',
      O: 'Agent 和企业流程自动化',
      T: 'Claude、Gemini、国产低价模型'
    },
    tags: ['推荐', 'LLM', 'OpenAI', '生态', '推理', 'GPT-5.5', '已核验']
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'Google',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Gemini app / Google AI Pro / Google AI Ultra；Gemini API 有 Free、Paid、Enterprise 层，按模型、token、grounding、batch/flex/priority 等路径计费',
        models:
          'Gemini 3.5 Flash、Gemini 3.1 Pro Preview、Gemini 3.1 Flash-Lite、Gemini Omni Flash Preview 等',
        link: 'https://ai.google.dev/gemini-api/docs/pricing'
      }
    ],
    freeQuota: 'Gemini app 有免费入口；API 免费层和额度以 Google AI Studio/官方 pricing 为准',
    contextWindow: '取决于模型；Gemini 系列主打长上下文，具体 token limit 以官方模型页为准',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://ai.google.dev/gemini-api/docs/models',
      'https://ai.google.dev/gemini-api/docs/pricing',
      'https://gemini.google/subscriptions/'
    ],
    decisionSummary: {
      verdict:
        '长上下文和 Google 生态成熟的通用路线之一，适合读长资料、研究和多模态，但要看清免费层和数据/计费边界。',
      bestFor: '长文档处理、多模态任务、方案设计、Google 生态工作流',
      avoidIf: '你需要固定低延迟、完全脱离 Google 账号/云生态，或非常明确的国内可用性',
      mainRisk: 'Gemini app 订阅、API 免费层、模型上下文和数据使用政策分属不同入口，容易混淆',
      alternatives: ['GPT-5.5 / OpenAI', 'Claude', 'Qwen']
    },
    pros: [
      '官方 Gemini API 提供多型号选择，当前 pricing 将 Gemini 3.5 Flash、3.1 Pro Preview、3.1 Flash-Lite 等分档展示',
      'Free、Paid、Enterprise 三层入口清楚，Paid 明确内容不用于改进产品',
      '长上下文能力适合整仓库、长文档和研究材料处理',
      '多模态和 Google 生态整合强，适合搜索、文档、工作区和 Android 用户',
      'Batch/Flex/Priority 与 grounding 计费路径适合按任务做成本优化'
    ],
    cons: [
      'Gemini app 订阅、API 免费层、Paid Tier 和 Enterprise/Google Cloud 路径不同，不能混为一谈',
      '免费层数据使用和额度策略需要按官方文档确认',
      '国内访问受限',
      '最高上下文、模型可用性和价格随型号变化明显'
    ],
    bestFor: '长文档处理、多模态任务、方案设计',
    funRanking: '夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，Google 官方 Gemini API pricing 将 Free、Paid、Enterprise、Gemini 3.5 Flash、3.1 Pro Preview、3.1 Flash-Lite、Omni Flash Preview 等入口和价格分开说明。本站不再把 Gemini 固定写成单一系列结论，而是强调长上下文、多模态、Google 生态和不同计费路径的边界。',
      pitfalls: [
        '区分 Gemini app 订阅和 API 计费',
        '免费层数据和额度按官方条款确认',
        '长上下文任务先估算输入输出成本'
      ]
    },
    swot: {
      S: '长上下文、多模态、Google 生态',
      W: '入口和计费路径复杂',
      O: '搜索/文档/移动生态整合',
      T: 'Claude、GPT、国产模型'
    },
    tags: ['推荐', 'LLM', 'Google', '长上下文', '推理', '已核验']
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '深度求索',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: 'Web/App 有免费入口；API 按官方价格页计费',
        models: 'DeepSeek-V4-Pro / DeepSeek-V4-Flash（入口以官方当前开放为准）',
        link: 'https://deepseek.com'
      },
      {
        type: 'Global',
        pricing:
          'API 每 1M tokens：V4-Flash 输入 $0.14 / 输出 $0.28；V4-Pro 输入 $0.435 / 输出 $0.87（缓存命中另计）',
        models:
          'deepseek-v4-flash / deepseek-v4-pro；官方预告 deepseek-chat/reasoner 兼容别名将在 2026-07-24 下线',
        link: 'https://api-docs.deepseek.com/quick_start/pricing'
      }
    ],
    freeQuota: 'Web/App 有免费入口；API 免费额度未在本站核验，按官方控制台/价格页为准',
    contextWindow: '官方 pricing 页展示 V4-Flash / V4-Pro 均为 1M 上下文，最大输出 384K tokens',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://api-docs.deepseek.com/quick_start/pricing',
      'https://api-docs.deepseek.com/news/news260424',
      'https://api-docs.deepseek.com/updates'
    ],
    decisionSummary: {
      verdict:
        '中文和低成本 API 的强选，适合预算敏感的推理/代码/批处理任务，但要按 V4 Flash/Pro 当前档位和业务稳定性实测。',
      bestFor: '预算有限、中文场景、推理任务、批量 API 调用',
      avoidIf: '你需要最成熟的企业生态、强多模态工具链，或严格 SLA 的全球服务',
      mainRisk:
        'deepseek-chat / deepseek-reasoner 仍可兼容路由，但官方预告这些旧别名将在 2026-07-24 下线，生产迁移应改用 deepseek-v4-flash / deepseek-v4-pro',
      alternatives: ['Qwen', 'GPT-5.5 / OpenAI', 'Claude']
    },
    pros: [
      '官方 pricing 页列出 DeepSeek-V4-Flash 与 DeepSeek-V4-Pro 两档，输入/输出价格明显适合批量 API 任务',
      'V4-Flash 与 V4-Pro 均支持 1M 上下文和 384K 最大输出，适合长资料与代码库分析',
      '官方保留 deepseek-chat / deepseek-reasoner 兼容期，给旧调用留出迁移窗口',
      '中文、代码和推理任务性价比高，适合批量分类、摘要、轻量推理和中文内容处理',
      '开源和社区生态仍有吸引力'
    ],
    cons: [
      'API 稳定性和峰值体验需要按业务实测',
      '多模态和工具生态不如 OpenAI/Google/Anthropic 成熟',
      '企业治理、区域可用性和合规能力需要单独评估',
      '旧 deepseek-chat/reasoner 调用需要按官方预告在 2026-07-24 前迁移到 V4 Flash/Pro 模型名'
    ],
    bestFor: '预算有限、中文场景、推理任务',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，DeepSeek 官方价格页将 API 主模型列为 deepseek-v4-flash 与 deepseek-v4-pro：两者均支持 1M 上下文、384K 最大输出，价格分别为输入 $0.14/$0.435、输出 $0.28/$0.87（每 1M tokens，缓存命中另计）。deepseek-chat 与 deepseek-reasoner 是兼容别名，官方预告将在 2026-07-24 下线；新项目应直接使用 V4 Flash/Pro 模型名。',
      pitfalls: [
        '新项目直接用 deepseek-v4-flash / deepseek-v4-pro',
        '旧 deepseek-chat/reasoner 调用要按官方预告日期迁移',
        '高峰期稳定性要压测',
        '强多模态任务另选专业工具'
      ]
    },
    swot: {
      S: '中文强、价格低、推理/代码性价比',
      W: '生态和稳定性需实测',
      O: '企业降本和国产替代',
      T: 'Qwen、OpenAI/Anthropic 降价'
    },
    tags: ['推荐', '国产', '低价', '推理', 'API', '已核验']
  },
  {
    id: 'qwen',
    name: 'Qwen',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '阿里巴巴',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: '通义千问/Model Studio 分入口；API 按阿里云 Model Studio pricing 分模型计费',
        models: 'qwen3.7-max, qwen3.7-plus, qwen3.7-vl-plus, qwen-coder 等',
        link: 'https://tongyi.aliyun.com'
      }
    ],
    freeQuota: '通义千问消费入口有免费/订阅路径；API 额度以阿里云 Model Studio 控制台为准',
    contextWindow: '取决于模型；长上下文、思考模型、视觉模型分档计费',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
      'https://www.alibabacloud.com/help/en/model-studio/models',
      'https://www.alibabacloud.com/help/en/model-studio/coding-plan'
    ],
    decisionSummary: {
      verdict:
        '中文、代码和国内云生态的稳妥路线，适合国内团队，但 API 模型/价格表要按 Model Studio 当前页核对。',
      bestFor: '中文场景、代码任务、阿里云/国内企业工作流',
      avoidIf: '你主要做英文复杂推理、海外 SaaS 集成，或希望完全脱离云厂商控制台',
      mainRisk:
        'Qwen 模型名、长上下文和 thinking/VL/coder 档位很多，旧固定 Qwen 单一口径会误导选型和成本',
      alternatives: ['DeepSeek', 'Gemini', 'GPT-5.5 / OpenAI']
    },
    pros: [
      '中文理解和生成能力强，国内用户入口多',
      'Model Studio pricing 明确列出 qwen3.7-max 等模型，并注明 pay-as-you-go、batch/context cache 与地区价格差异',
      '代码、视觉、多模态和长上下文有独立模型路线',
      '国际服务部署范围才有部分免费 quota，国内和国际入口要分开核价',
      '开源 Qwen 社区活跃，便于本地/私有化探索'
    ],
    cons: [
      '模型名和价格表非常细，选错档位容易高估或低估成本',
      '超长上下文、thinking、视觉和 coder 模型需分别核价',
      '海外开发者体验和生态成熟度不如 OpenAI/Anthropic/Google',
      '英文复杂推理场景仍建议和 Claude/GPT/Gemini 对比评测'
    ],
    bestFor: '中文场景、代码任务',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，阿里云 Model Studio 官方价格页将 Qwen API 明确放在 pay-as-you-go 体系里，并列出 qwen3.7-max 等模型的国际/中国大陆部署价格、1M token 级别价格和免费 quota 适用范围。本站不再把 Qwen 固定写成单个型号，而是按中文/代码/视觉/云生态的模型家族来选型。',
      pitfalls: [
        '先按模型价格表核对输入、输出和 long-context 单价',
        '不要把通义千问 App 免费入口等同于 API 免费',
        '英文复杂推理需要交叉评测'
      ]
    },
    swot: {
      S: '中文、代码、阿里云生态',
      W: '模型和计费分档复杂',
      O: '国内企业和私有化市场',
      T: '竞争压力来自 DeepSeek、OpenAI、Anthropic 和 Google'
    },
    tags: ['国产', 'LLM', '中文', '阿里', '代码', '已核验']
  },
  {
    id: 'glm',
    name: 'GLM / Z.AI',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '智谱 AI',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: 'Z.AI / BigModel API 按模型、输入、输出和缓存计费，需按官方 pricing 逐项核价',
        models: 'GLM-5.2 / GLM-4.7 / GLM-4.6 / GLM-Z1 等，以官方当前列表为准',
        link: 'https://docs.z.ai/guides/overview/pricing'
      }
    ],
    freeQuota: '清言/开放平台可能有试用或促销；API 免费额度以控制台和官方 pricing 为准',
    contextWindow: '取决于模型；GLM-5.2 等上下文和输出上限以官方模型页/价格页为准',
    chineseSupport: 5,
    pros: [
      '官方 Z.AI/BigModel pricing 已列出 GLM-5.2 等当前模型',
      '中文、前端 demo 和 Agent 场景体验仍有吸引力',
      '国内账号、企业和 API 路径相对友好',
      '可按不同 GLM 型号在成本、速度和能力间取舍'
    ],
    cons: [
      'GLM 型号和计费档位变化快，不能继续按单一 GLM-4.7 价格判断',
      '极复杂推理和多步骤任务仍需和 Claude/GPT/Gemini 交叉评测',
      '海外生态和工具链不如国际头部模型成熟'
    ],
    bestFor: '前端开发、完整 demo、Agent 场景',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，Z.AI/BigModel 官方 pricing 已把 GLM 拆成 GLM-5.2、GLM-4.7、GLM-4.6、GLM-Z1 等多档。本站不再把 GLM 固定写成 GLM-4.7 单一版本，而是按“GLM / Z.AI 模型家族”展示，使用前应按实际模型和 token 计费核算。',
      pitfalls: [
        '先按官方 pricing 选择具体 GLM 型号',
        '极复杂任务建议和 Claude/GPT/Gemini 交叉评测',
        'API 免费额度以控制台为准'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://docs.z.ai/guides/overview/pricing', 'https://bigmodel.cn/pricing'],
    decisionSummary: {
      verdict:
        '中文和前端/Agent 场景里的国产模型家族选择，适合国内团队，但必须按 GLM-5.2 等具体型号核价。',
      bestFor: '前端 demo、中文 Agent、国内账号/API 路径',
      avoidIf: '你需要固定旧 GLM-4.7 成本口径，或不想频繁跟随模型/价格变化',
      mainRisk: 'GLM-5.2、GLM-4.7 等型号和计费档位并存，旧单一型号/价格会误导预算',
      alternatives: ['Qwen', 'DeepSeek', 'Gemini']
    },
    swot: { S: '前端、价格', W: '复杂任务', O: '国内市场', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '低价', 'Agent']
  },
  {
    id: 'kimi',
    name: 'Kimi / Moonshot',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '月之暗面',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: 'Kimi API 按模型、输入/输出 token 和缓存计费；具体单价以官方 pricing 为准',
        models:
          'kimi-k2.7-code / kimi-k2.7-code-highspeed / kimi-k2.6 / kimi-k2.5 / Moonshot V1；旧 kimi-k2 与 kimi-latest 已停用',
        link: 'https://platform.kimi.ai/docs/models'
      }
    ],
    freeQuota: 'Kimi Chat 有免费入口；API 免费额度、试用和价格以 platform.kimi.ai 当前说明为准',
    contextWindow: '取决于模型；Kimi 长上下文和代码模型需按官方模型页确认',
    chineseSupport: 5,
    pros: [
      '官方文档已列出 kimi-k2.7-code、kimi-k2.7-code-highspeed、kimi-k2.6、kimi-k2.5 等当前模型',
      '长文档、中文问答和代码模型路线清晰',
      '模型页明确旧 kimi-k2 系列、kimi-latest 和 kimi-thinking-preview 已停用',
      'Kimi Chat 和 API 平台入口分开，适合从个人使用过渡到开发集成'
    ],
    cons: [
      'Kimi Chat 免费入口不等于 API 免费额度',
      '代码模型、Thinking 模型和通用模型计费可能不同',
      '多模态能力和企业治理需按当前官方入口确认'
    ],
    bestFor: '长文档、中文对话、方案调研',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，Kimi API 官方文档已显示 kimi-k2.7-code、kimi-k2.7-code-highspeed、kimi-k2.6、kimi-k2.5 和 Moonshot V1，并标记旧 kimi-k2 系列、kimi-latest、kimi-thinking-preview 已停用。长文档和中文仍是强项，但 API 价格、缓存和代码模型要按官方 pricing 单独核算。',
      pitfalls: [
        '不要把 Chat 免费入口等同于 API 免费',
        '代码模型和 Thinking 模型先按 pricing 核价',
        '长上下文任务先估算输入输出成本'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://platform.kimi.ai/docs/models',
      'https://platform.kimi.ai/docs/pricing/chat',
      'https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart'
    ],
    decisionSummary: {
      verdict:
        '中文长文档和代码模型路线值得关注，适合资料阅读、方案调研和 Kimi API 集成；新项目应优先看 K2.7 Code 或 K2.6，不能沿用旧 kimi-k2/kimi-latest 口径。',
      bestFor: '长文档、中文对话、方案调研、Kimi API 代码任务',
      avoidIf: '你需要已验证的强视觉能力，或不想区分 Chat 与 API 计费',
      mainRisk:
        'K2.7 Code、K2.6、K2.5、Moonshot V1 与 Chat/API 入口不同，旧 kimi-k2/kimi-latest 和泛化免费说法会误导成本',
      alternatives: ['Qwen', 'GLM / Z.AI', 'DeepSeek']
    },
    swot: { S: '长文档、中文', W: '无视觉', O: '国内市场', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '长上下文', '中文']
  },
  {
    id: 'minimax',
    name: 'MiniMax / MiniMax-M3',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'MiniMax',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing:
          'MiniMax-M3 按输入长度分档，Standard/Priority 价格不同；文本、语音、视频等能力分产品核价',
        models:
          'MiniMax-M3 1M context / M2.7 / M2.7-highspeed / Speech / Video 等，以官方当前文档为准',
        link: 'https://platform.minimax.io/docs/guides/text-generation'
      }
    ],
    freeQuota: '平台可能有试用或活动额度；API 正式用量按官方 pay-as-you-go pricing 为准',
    contextWindow: 'MiniMax-M3 1,000,000 tokens；M2.7 系列 204,800 tokens；其他模型以官方文档为准',
    chineseSupport: 5,
    pros: [
      '官方文档已列出 MiniMax-M3、M2.7 等文本模型路线',
      'MiniMax-M3 面向 agentic reasoning、tool use、coding 和 long-context tasks',
      'M3 价格页显示 ≤512k 与 >512k 输入分档，并有 permanent 50% off 口径',
      '文本、语音、图像/视频产品线完整，适合多模态应用组合',
      'API 文档和 pay-as-you-go pricing 路径清晰',
      '中文和多语言场景成本可控'
    ],
    cons: [
      '旧 M2.1 口径已不能代表当前模型线',
      '文本、语音、视频等产品分开计费，不能只看单一文本单价',
      '社区生态和国际知名度不如 OpenAI/Anthropic/Google'
    ],
    bestFor: '多语言项目、高频 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，MiniMax 官方文档显示 MiniMax-M3 是最新 M-series language model，支持 1M context，并按 ≤512k / >512k 输入和 Standard / Priority 分档计费。它适合多语言文本、语音和多模态应用组合，但不要再用 M2.1 旧型号和单一低价口径做预算。',
      pitfalls: [
        '按文本、语音、视频等产品分别核价',
        '不要继续用 M2.1 作为当前主模型口径',
        '复杂推理任务建议与 Claude/GPT/Gemini 交叉测试'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://platform.minimax.io/docs/guides/text-generation',
      'https://platform.minimax.io/docs/guides/pricing-paygo',
      'https://platform.minimax.io/docs/release-notes/models'
    ],
    decisionSummary: {
      verdict:
        '多语言文本与语音/多模态应用组合值得考虑，当前应按 MiniMax-M3 1M context、M2.7 和产品线分项核价。',
      bestFor: '多语言项目、语音+文本应用、高频 API 调用',
      avoidIf: '你只想按旧 M2.1 单价做长期预算，或需要最成熟的国际开发者生态',
      mainRisk:
        'M3 输入长度分档、Priority 1.5x、文本/语音/视频产品线分开计费，旧 M2.1 低价口径会低估真实成本',
      alternatives: ['Doubao / Volcano Ark', 'Qwen', 'DeepSeek']
    },
    swot: { S: '多语言、价格', W: '知名度', O: 'API 市场', T: '顶级模型' },
    tags: ['国产', 'LLM', '低价', '多语言']
  },
  {
    id: 'doubao',
    name: 'Doubao / Volcano Ark',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '字节跳动',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: '火山方舟模型价格页 2026-07-06 更新；按模型、输入/输出 token、缓存和产品能力计费',
        models:
          'doubao-seed-2-1-pro / doubao-seed-2-1-turbo 为当前 Seed 2.1 主线；Seedance、Seedream 等按能力分开核价',
        link: 'https://www.volcengine.com/docs/82379/1330310'
      }
    ],
    freeQuota: '豆包 App 与火山方舟 API 分属不同入口；API 免费试用/额度以控制台和官方价格页为准',
    contextWindow: '取决于 doubao-seed-2-1-pro / turbo、长上下文和缓存配置',
    chineseSupport: 5,
    pros: [
      '火山方舟模型列表于 2026-07-07 更新，并把最新模型指向 Seed 2.1',
      'Seed 2.1 面向 Coding、Agent、深度思考和长上下文任务，有 Pro/Turbo 路径',
      '字节生态、豆包 App 和企业 API 入口完整',
      'Responses API、缓存、深度思考、视频/图片生成能力需按官方分项核价',
      '中文、办公和轻量开发场景上手门槛低'
    ],
    cons: [
      '豆包 App 免费入口不等于火山方舟 API 免费',
      'Seed Code、Thinking、长上下文和缓存计费需要分开看',
      '深度推理和复杂编程能力仍建议与头部模型实测对比'
    ],
    bestFor: '前端开发、Bug 修复',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，火山方舟模型列表已经更新并指向 Seed 2.1，模型价格页在 2026-07-06 更新。本站不再把 Doubao 写成 Seed Code/Thinking/1.6 旧主线，而是优先按 doubao-seed-2-1-pro / turbo、App 与 API、缓存和多模态能力拆分。',
      pitfalls: [
        '区分豆包 App 和火山方舟 API',
        'Seed Code、Thinking、长上下文和缓存分别核价',
        '复杂编程任务先做小样本评测'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.volcengine.com/docs/82379/1330310',
      'https://www.volcengine.com/docs/82379/2549861?lang=zh',
      'https://www.volcengine.com/docs/82379/1544106'
    ],
    decisionSummary: {
      verdict:
        '字节/火山生态里的中文与办公模型路线，适合轻量开发和企业 API 试点；当前应按 Seed 2.1 Pro/Turbo、App 与 API 成本分开看。',
      bestFor: '前端开发、Bug 修复、办公助手、字节/火山生态团队',
      avoidIf: '你需要单一固定模型价格，或不想区分 App、API、缓存、长上下文和代码模型',
      mainRisk:
        'Seed 2.1 Pro/Turbo、深度思考、缓存、Responses API、Seedance/Seedream 和 App/API 入口混在一起会误判成本',
      alternatives: ['MiniMax / MiniMax-M3', 'Qwen', 'GLM / Z.AI']
    },
    swot: { S: '前端、缓存', W: '长上下文贵', O: '字节生态', T: 'DeepSeek' },
    tags: ['国产', 'LLM', '字节', '前端']
  },
  {
    id: 'grok',
    name: 'Grok / xAI',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'xAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Grok App / X / xAI API 分入口；订阅和 API 价格以 xAI 官方页面为准',
        models: 'Grok 4.3 / Grok 4 / Grok Build 等，以官方模型页为准',
        link: 'https://docs.x.ai/developers/models'
      }
    ],
    freeQuota: 'Grok App/X 订阅与 xAI API 分开；免费或试用入口以官方 Grok/pricing 页面为准',
    contextWindow: '取决于 Grok 4.3、Grok Build 等具体模型和 API 入口',
    chineseSupport: 3,
    pros: [
      '官方模型页已列出 Grok 4.3、Grok Build 等当前模型路线',
      'Grok App/X 与 xAI API 入口清晰，适合实时信息和开放内容场景',
      'X 平台信息流整合是差异化优势',
      '适合需要时事、热点和较开放创意写作的用户'
    ],
    cons: [
      'Grok App/X 订阅不等于 xAI API 额度',
      '模型名、订阅和 API pricing 变化快',
      '企业生态和中文场景仍需实测',
      '国内访问和合规路径需要单独评估'
    ],
    bestFor: '实时信息、推理任务、X 平台用户、特定内容（成人内容等）',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，xAI 官方模型页已展示 Grok 4.3、Grok Build 等模型，pricing 页面区分 Grok App/订阅和 xAI API。本站不再把 Grok 固定写成旧系列名和单一 X 订阅口径，而是强调入口和计费路径需要按官方当前页确认。',
      pitfalls: ['区分 Grok App/X 订阅和 xAI API', '模型与价格变化快', '中文和企业场景先实测']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://docs.x.ai/developers/models', 'https://x.ai/pricing', 'https://x.ai/grok'],
    decisionSummary: {
      verdict:
        '实时信息和 X 生态里的差异化模型路线，适合热点、开放内容和 xAI API 试点，但订阅/API 路径要分开核算。',
      bestFor: '实时信息、X 平台用户、热点研究、开放创意写作',
      avoidIf: '你需要稳定企业生态、国内可用性，或不想处理 Grok App/X/API 多入口',
      mainRisk: 'Grok 4.3、Grok Build、App 订阅和 API pricing 变化快，旧单一 X 订阅口径会误导预算',
      alternatives: ['GPT-5.5 / OpenAI', 'Gemini', 'Claude']
    },
    swot: { S: '实时信息、推理', W: '生态新', O: 'X 整合', T: 'GPT/Claude' },
    tags: ['LLM', 'xAI', '实时', '推理']
  },

  // ============= 多模态 (17个) =============
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Midjourney',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Basic $10 / Standard $30 / Pro $60 / Mega $120；Fast/Relax/Turbo GPU time、HD、video 和 Stealth 能力按计划消耗',
        models: 'Midjourney V8.1 default, V7/V6.1 legacy options',
        link: 'https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans'
      }
    ],
    freeQuota: 'Discord 与 midjourney.com 当前无免费试用；niji・journey app 有 limited trial',
    contextWindow: 'N/A',
    chineseSupport: 2,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans',
      'https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version',
      'https://docs.midjourney.com/hc/en-us/articles/32016412137741-GPU-Speed-Fast-Relax-Turbo',
      'https://updates.midjourney.com/v8-1-is-now-the-default-model/',
      'https://docs.midjourney.com/hc/en-us/articles/37460773864589-Video',
      'https://docs.midjourney.com/hc/en-us/articles/27870399340173-Free-Trials'
    ],
    pros: [
      'V8.1 已成为官方默认模型，官方更新称其更会遵循详细提示、渲染文字并保持 V7 风格参考一致性',
      'V8.1 HD 可直接生成更高分辨率图像，官方 Version 文档标注 SD/HD GPU time 差异',
      'Basic/Standard/Pro/Mega 四档计划和 Fast GPU time 可按官方表格估算',
      'Standard 及以上计划支持 Relax 模式，Pro/Mega 面向更重度的并发和隐私需求',
      '视频模式会按 batch size、SD/HD 和 Fast/Relax 消耗 GPU time，适合提前做成本估算',
      '仍是高质感概念图、海报、角色和视觉 moodboard 的强选'
    ],
    cons: [
      '没有面向 Discord 或官网的常规免费试用，低频用户需要先评估订阅是否值得',
      'V8.1 HD、video batch、Relax、Stealth 等能力和计划/GPU time 绑定，不能只看月费数字',
      '中文提示词和品牌一致性仍需要人工校对',
      '商业授权、人物/品牌/版权素材仍要按具体项目审查'
    ],
    bestFor: '艺术创作、概念设计',
    funRanking: '夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，Midjourney 官方更新页显示 V8.1 已成为默认模型；Version 文档说明 V8.1 HD 图像和 SD/HD GPU time，Video 文档也给出 batch size 对 GPU 成本的影响。本站不再按 V7 默认口径展示，而改为按 V8.1、GPU time、HD/video 和计划能力做采购判断。',
      pitfalls: [
        '先按 Fast/Relax GPU time 估算月用量',
        '确认是否需要 V8.1 HD、Video、Stealth 和更高并发',
        'niji app limited trial 不等于官网永久免费层'
      ]
    },
    decisionSummary: {
      verdict:
        '适合高质感视觉概念、海报和角色创作，当前应按 V8.1、HD/video 与 GPU time 计划做预算。',
      bestFor: '概念设计、海报、角色、广告视觉、品牌 moodboard',
      avoidIf: '你只需要偶发免费出图，或需要完全本地可控的开源模型',
      mainRisk:
        '订阅价格、Fast/Relax/Turbo GPU time、V8.1 HD、视频 batch 和隐私能力分属不同计划，不能只看单一月费。',
      alternatives: ['GPT Image 2 / ChatGPT Images', 'FLUX', 'Stable Diffusion']
    },
    swot: {
      S: 'V8.1 默认模型、HD 和参考控制',
      W: '无常规官网免费试用',
      O: '品牌视觉和创意市场',
      T: 'OpenAI、FLUX、Stable Diffusion'
    },
    tags: ['图像', '艺术', 'V8.1', 'HD', '已核验']
  },
  {
    id: 'dalle',
    name: 'GPT Image 2 / ChatGPT Images',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'ChatGPT 计划或 Images API 计费（以官方 pricing / calculator 为准）',
        models: 'gpt-image-2 / ChatGPT Images 2.0',
        link: 'https://developers.openai.com/api/docs/guides/images-vision'
      }
    ],
    freeQuota: 'ChatGPT Free 有限额度',
    contextWindow: 'N/A',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://developers.openai.com/api/docs/guides/images-vision',
      'https://developers.openai.com/api/docs/models/gpt-image-2',
      'https://openai.com/index/introducing-chatgpt-images-2-0/'
    ],
    pros: [
      'OpenAI 官方 Images API 当前主推 GPT Image models，最新模型为 gpt-image-2',
      '支持文本生成图像、图像编辑和多轮迭代工作流',
      '适合海报、配图、信息图、产品图和需要文字渲染的视觉任务',
      '与 ChatGPT / Responses API / Images API 生态衔接',
      '可按官方 pricing 和 image generation calculator 估算成本'
    ],
    cons: [
      'ChatGPT 入口和 API 入口的可用性、额度与计费路径不同',
      '高质量/大尺寸图像成本需要按官方价格页单独估算',
      '艺术风格和品牌一致性仍需要人工审查',
      '安全策略和版权风险需要按具体商用场景评估'
    ],
    bestFor: '与 ChatGPT 配合使用，快速出图',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，OpenAI 官方 Images 文档仍将 API 图像能力表述为 GPT Image models，并列出最新模型 gpt-image-2；ChatGPT 产品侧对应 ChatGPT Images 2.0。本站不再展示 “DALL-E 4” 或固定 “GPT-5 图像生成” 口径，改为按官方 Images API/ChatGPT 图像入口核验。',
      pitfalls: [
        '入口和额度按 ChatGPT 计划或 API 路径区分',
        '生成成本按官方 calculator 估算',
        '涉及品牌、人物和版权的商用图像要人工审查'
      ]
    },
    decisionSummary: {
      verdict:
        'OpenAI 图像生成条目应按 GPT Image 2 / ChatGPT Images 2.0 口径展示，而不是继续使用 DALL-E 旧命名。',
      bestFor: '需要 ChatGPT 集成、文字渲染、图像编辑、多轮视觉迭代和 OpenAI API 生态衔接的团队',
      avoidIf:
        '你需要本地自托管、完全可控的开源模型权重，或无法接受按 ChatGPT/API 路径分别核算额度和成本',
      mainRisk:
        'ChatGPT 产品入口与 API Images / Responses API 的可用性、额度、价格和安全策略不同，商用前要逐项确认。',
      alternatives: ['Midjourney V7', 'FLUX', 'Stable Diffusion']
    },
    swot: {
      S: 'ChatGPT 集成、文字渲染',
      W: '订阅制、风格保守',
      O: 'OpenAI 生态垄断',
      T: 'Midjourney、FLUX 品质追赶'
    },
    tags: ['推荐', '图像', 'OpenAI', '集成', '文字渲染']
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Stability AI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Core Models 自托管许可有收入门槛；API 1 credit = $0.01 并按模型扣费',
        models: 'Stable Diffusion 3.5 / Stable Image / Stability API',
        link: 'https://stability.ai/license'
      }
    ],
    freeQuota: '核心模型可在许可范围内使用；商业收入超过 USD $1M 等情况需看 Stability AI license',
    contextWindow: 'N/A',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://stability.ai/license',
      'https://platform.stability.ai/pricing',
      'https://stability.ai/stable-image'
    ],
    pros: [
      'Stable Diffusion 3.5 仍是本地和私有化图像生成的重要路线',
      'Core Models license 对低于 USD $1M 年收入的商业主体更友好，但不是无条件无限制',
      'Stability API 以 credits 计费，1 credit = $0.01，适合把自托管和 API 成本分开估算',
      'ComfyUI、LoRA、ControlNet 等生态适合定制化工作流',
      '可在自托管、API 和 Stable Assistant 等入口之间选择'
    ],
    cons: [
      '许可、收入门槛、模型范围和衍生作品规则需要逐项核对',
      '本地部署仍需要 GPU、模型管理和安全策略',
      'API 与自托管的成本、审核和数据边界不同',
      '高质量工作流对提示词、节点和后处理能力要求高'
    ],
    bestFor: '本地部署、定制需求',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Stability AI 官方许可页把 Stable Diffusion 3.5 Suite 放在 Core Models 许可框架内，并明确 USD $1M 年收入门槛；开发者平台 pricing 则按 credits 计费。本站不再把它写成无条件免费、无限制或无审核，而改为“自托管许可 + API credits + 本地算力”的三段式判断。',
      pitfalls: [
        '先确认收入规模和用途是否落在许可范围内',
        'API 成本按 credits 和具体模型估算',
        '本地工作流需要 GPU、模型和内容安全治理'
      ]
    },
    decisionSummary: {
      verdict: '适合需要本地可控、风格定制和 ComfyUI 工作流的团队，但许可与算力成本必须单独核算。',
      bestFor: '本地部署、私有化图像管线、LoRA 风格训练、可控工作流',
      avoidIf: '你不想维护 GPU/模型环境，或需要开箱即用的消费者级体验',
      mainRisk:
        '“开源/免费”容易被误读，Core Models 许可、收入门槛、API credits 和内容治理是不同问题。',
      alternatives: ['FLUX', 'Midjourney', 'GPT Image 2 / ChatGPT Images']
    },
    swot: {
      S: '本地可控、生态成熟',
      W: '许可和部署复杂',
      O: '私有化视觉生产',
      T: '商业云端图像模型'
    },
    tags: ['图像', 'Stable Diffusion 3.5', '本地', '已核验']
  },
  {
    id: 'meitu-ai',
    name: '美图AI',
    category: 'multimodal',
    subcategory: '图像编辑',
    developer: '美图',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: 'App/PC 订阅分为美图 VIP、美图 VIP+、美图 PC VIP、AI Agent VIP 等权益包',
        models: '美图 AI 图像编辑套件',
        link: 'https://www.meituxiuxiu.com'
      }
    ],
    freeQuota: '免费入口和付费权益会随 App、PC 客户端、地区和当前订阅条款变化',
    contextWindow: 'N/A',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.meituxiuxiu.com',
      'https://pc.meitu.com/en/pc',
      'https://pro.meitu.com/xiuxiu/agreements/global-terms-of-service.html?lang=en'
    ],
    pros: [
      '官方美图 AI 套件覆盖 AI 消除、AI 抠图、照片扩展、AI 滤镜、AI 人像和 AI 绘画等流程',
      '美图 PC 的 ImageBeautify 聚焦物体/文字/Logo 移除、背景替换和图片放大',
      '移动端和 PC 入口适合批量修图、商品图清理和轻量电商视觉',
      '中文消费级流程成熟，非专业创作者学习成本低',
      '订阅条款明确区分美图 VIP、美图 VIP+、美图 PC VIP 和 AI Agent VIP 等权益'
    ],
    cons: [
      '移动端、PC 和 AI Agent 订阅权益拆分，购买前必须在当前产品内确认可用范围',
      '更偏消费级编辑器，不是 API 优先的生产管线',
      '商用图片仍要复核源素材权利、生成结果权利和平台使用规则',
      '批量协作和团队治理能力弱于专业设计资产管理平台'
    ],
    bestFor: 'AI 修图、抠图、商品图清理、人像处理和快速社媒视觉',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，美图更适合描述为带有明确 AI 工具的消费级图像编辑套件，而不是泛泛的低价修图软件。官方页面突出 AI 消除、AI 抠图、照片扩展、人像和绘画能力，订阅条款则显示多个付费权益包并存。',
      pitfalls: [
        '付费前在产品内确认具体美图 VIP 或 PC 权益',
        '不要默认一个订阅能解锁移动端、PC 和 AI Agent 的全部工作流',
        '商用前复核源图片和生成编辑结果的权利边界'
      ]
    },
    decisionSummary: {
      verdict:
        '适合快速修图和抠图的消费级 AI 编辑器，但订阅权益范围和商用输出权利比旧式“性价比”标签更重要。',
      bestFor: 'AI 消除、AI 抠图、照片扩展、人像清理、电商图片清理和轻量社媒视觉',
      avoidIf: '你需要可审计 API 自动化、企业 DAM 流程，或一个明确覆盖所有美图端口的统一订阅',
      mainRisk:
        '美图 VIP、美图 VIP+、美图 PC VIP 和 AI Agent VIP 属于相关但不同的订阅权益，团队容易高估单一计划能覆盖的能力。',
      alternatives: ['Adobe Firefly / Photoshop', 'Canva', 'Clipdrop']
    },
    swot: {
      S: '中文消费级编辑体验顺滑，修图流程成熟',
      W: '订阅权益分散',
      O: '批量商品图和社媒图片清理',
      T: 'Adobe、Canva 和新一代 AI 原生编辑器'
    },
    tags: ['图像', '编辑', '美颜', '国产', '已核验']
  },
  {
    id: 'sora',
    name: 'Sora',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'OpenAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'ChatGPT/Sora 入口随计划与地区开放；Videos API 按模型、时长和分辨率计费；官方已标记 Sora 2/Videos API 将于 2026-09-24 下线',
        models: 'sora-2、sora-2-pro（已弃用）',
        link: 'https://developers.openai.com/api/docs/guides/video-generation'
      }
    ],
    freeQuota: 'OpenAI API Free tier 不支持 Sora；ChatGPT/Sora App 可用性以账号计划和地区为准',
    contextWindow: 'N/A',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://developers.openai.com/api/docs/guides/video-generation',
      'https://developers.openai.com/api/docs/pricing',
      'https://developers.openai.com/api/docs/models/sora-2'
    ],
    decisionSummary: {
      verdict:
        'OpenAI 视频生成仍有参考价值，但官方已标记 Sora 2/Videos API 将在 2026-09-24 下线，新项目不应做长期依赖。',
      bestFor: '短期高质量视频试验、历史项目迁移评估、营销素材概念验证',
      avoidIf: '你需要长期稳定 API、大量低成本短视频、真人/公众人物生成，或必须即时返回结果',
      mainRisk:
        'Sora 2 与 Videos API 官方已标记 deprecated，并将于 2026-09-24 shut down；仍要额外管理异步渲染、模型/时长/分辨率计费和内容限制',
      alternatives: ['Runway Gen-3/Gen-4', '可灵 (Kling)', 'Luma Dream Machine']
    },
    pros: [
      '官方文档仍可核验 sora-2 / sora-2-pro 的文本/图像输入与视频/音频输出能力',
      'sora-2 注重速度和探索，sora-2-pro 注重高质量输出',
      '支持同步音频、图像参考、视频延展和视频编辑等视频工作流能力',
      '模型页明确展示 Sora 2 按秒计费，便于旧项目估算迁移成本',
      '适合作为短期概念片和历史 API 迁移参考'
    ],
    cons: [
      '官方已标记 Sora 2 video generation models 与 Videos API deprecated，并将于 2026-09-24 下线',
      'API Free tier 不支持 Sora，成本按模型、时长和分辨率上升',
      '异步渲染可能需要数分钟，不适合强实时体验',
      '对未成年人不适内容、版权角色/音乐、真人和公众人物有严格限制',
      '复杂视频工作流需要队列、轮询/webhook、存储和失败重试设计'
    ],
    bestFor: '短期视频概念验证、历史 Sora API 迁移评估',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，OpenAI 官方 Video generation 文档明确提示 Sora 2 video generation models 与 Videos API 已 deprecated，并将于 2026-09-24 shut down；模型页仍列出 sora-2 / sora-2-pro 与按秒计费信息。现阶段它更适合短期概念验证和迁移评估，而不是新建长期视频 API 依赖。',
      pitfalls: [
        '不要把 Sora 2 作为新的长期 API 依赖',
        '先按 2026-09-24 下线日期制定迁移计划',
        '仍需估算模型/时长/分辨率成本并处理异步任务'
      ]
    },
    swot: {
      S: '质量与同步音频能力仍可参考',
      W: '官方已标记 deprecated 且有下线日期',
      O: '短期概念验证与迁移窗口',
      T: '可灵、Runway、Luma 及后续 OpenAI 视频路线'
    },
    tags: ['视频', 'OpenAI', 'DeprecatedAPI', '迁移风险', '已核验']
  },
  {
    id: 'kling',
    name: '可灵 (Kling)',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: '快手',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: '网页端订阅/积分与 API Resource Packages 分开核算',
        models: 'Kling 3.0 series / Kling AI API',
        link: 'https://kling.ai/document-api/quickStart/productIntroduction/overview'
      }
    ],
    freeQuota: '网页端活动额度和 API 资源包分属不同入口，按账号页与 API billing 页面确认',
    contextWindow: 'N/A',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://app.klingai.com',
      'https://kling.ai/document-api/quickStart/productIntroduction/overview',
      'https://kling.ai/document-api/updates/api',
      'https://kling.ai/document-api/productBilling/prePaidResourcePackage'
    ],
    pros: [
      '官方 API 文档已迁到 kling.ai/document-api，Kling 3.0 series 和后续更新以新文档为准',
      'Kling AI 覆盖 Text-to-Video、Image-to-Video、Extend with Prompts、camera motion 和 keyframe editing 等能力',
      '网页端和 API 都有清晰入口，适合从创作工具过渡到批量生成流程',
      '中文短视频、商品展示、社媒素材和动作类镜头仍是核心使用场景',
      'API 侧可通过 Resource Packages / billing 页面估算生产成本'
    ],
    cons: [
      '网页端积分、订阅和 API Resource Packages 容易混淆',
      'Kling 3.0 与旧规格并存，接入前要确认当前文档和参数',
      '部分 billing / 能力页面需要登录或 JS 渲染，采购前仍要进账号核对',
      '真人、品牌、版权角色和广告素材仍需人工合规审查'
    ],
    bestFor: '短视频创作、动作连贯',
    funRanking: '夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-07，可灵官方 API 文档主入口已经迁到 kling.ai/document-api，API guide 和 updates 继续围绕 Kling 3.0 series、Text-to-Video、Image-to-Video、Extend with Prompts、运镜和关键帧等能力更新。本站不再把旧轻雀文档作为主来源，而是区分网页端额度、订阅积分和 API Resource Packages。',
      pitfalls: [
        '先确认走网页端还是 API 端',
        'Kling 3.0 series 参数按最新规格文档实现',
        '成本按 Resource Packages 与账号订阅分别核算'
      ]
    },
    decisionSummary: {
      verdict: '适合中文短视频和批量视频生成试点，但要分清网页端积分和 API 资源包。',
      bestFor: '中文短视频、商品视频、社媒素材、API 化视频批量生成',
      avoidIf: '你需要完全公开透明的免登录价格表，或不想处理国内外账号与计费差异',
      mainRisk:
        'Kling 3.0 文档、旧规格、网页积分和 API Resource Packages 并存，容易误估成本和能力边界。',
      alternatives: ['Sora', 'Runway Gen-4.5', 'Luma Dream Machine']
    },
    swot: {
      S: '中文视频和 API 能力',
      W: '计费入口复杂',
      O: '短视频和电商内容',
      T: 'Sora、Runway、Luma'
    },
    tags: ['推荐', '视频', '国产', 'Kling 3.0', '已核验']
  },
  {
    id: 'jianying',
    name: '剪映',
    category: 'multimodal',
    subcategory: '视频编辑',
    developer: '字节跳动',
    logo: null,
    versions: [
      {
        type: 'CN/Global',
        pricing: 'CapCut Pro 和 Teams 价格会随地区、设备、计费周期和促销变化',
        models: 'CapCut / 剪映 AI 编辑套件',
        link: 'https://www.capcut.com'
      }
    ],
    freeQuota: '免费版和 Pro 能力随市场变化；当前 Pro 页面展示月付与年付订阅',
    contextWindow: 'N/A',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.capcut.com/help/how-much-does-capcut-pro-cost',
      'https://www.capcut.com/help/pricing-change',
      'https://www.capcut.com/help/capcut-teams-price'
    ],
    pros: [
      'CapCut 覆盖浏览器、桌面和移动端编辑，并提供 AI 辅助视频与素材工作流',
      '官方定价帮助说明价格会因地区变化，Pro 以月付和年付订阅销售',
      '升级后的 Pro 计划说明 AI points 从 550 提升到 1200，云存储从 100GB 提升到 1TB',
      'Teams 提供 Standard Plan，用于 CapCut Online 协作管理',
      '模板、字幕、特效和快速社媒视频流程仍适合高频内容生产'
    ],
    cons: [
      'Teams 设置和付款通过 CapCut Online 管理，并不覆盖每个桌面或移动端表面',
      '地区定价和促销差异让固定价格标签很容易过时',
      'AI points、存储和协作权益会随计划代际变化',
      '品牌、创作者素材和生成内容在发布前仍需要合规复核'
    ],
    bestFor: '视频/照片二次编辑',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，CapCut/剪映不应再被简单写成通用免费编辑器，而应视为跨设备视频编辑器：Pro、Teams、存储和 AI points 规则都需要按地区和设备核对。最新帮助页已经明确提示价格和计划权益会变化。',
      pitfalls: [
        '报价前确认目标地区和设备上的实际价格',
        '个人 Pro 和 Teams Standard Plan 要分开决策',
        '比较旧计划和升级计划时要跟踪 AI points 与存储权益'
      ]
    },
    decisionSummary: {
      verdict:
        '适合快速社媒视频生产的 AI 辅助编辑器，但采购时应以当前 CapCut Pro 或 CapCut Online Teams 条款为准。',
      bestFor: '短视频编辑、字幕、模板、创作者流程，以及 CapCut Online 里的轻量团队审阅',
      avoidIf: '你需要跨地区固定公开价格、深度专业 NLE 控制，或围绕每个生成资产做企业级治理',
      mainRisk:
        '价格会随地区变化，Pro/Teams 的 AI points、存储和 Standard Plan 管理也不是全球统一常量。',
      alternatives: ['Adobe Premiere Pro', 'Runway', 'DaVinci Resolve']
    },
    swot: {
      S: '社媒视频流程快，设备覆盖广',
      W: '地区价格和计划权益会变化',
      O: '创作者团队和短视频生产',
      T: '专业 NLE 与 AI 视频套件竞争'
    },
    tags: ['视频', '编辑', '国产', '字节', '已核验']
  },
  {
    id: 'meshy',
    name: 'Meshy',
    category: 'multimodal',
    subcategory: '3D生成',
    developer: 'Meshy',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Free $0、Pro $20/月、Studio $60/月、Enterprise 定制',
        models: 'Meshy-6 Text to 3D（Preview）、Image to 3D 与 API 工作流',
        link: 'https://www.meshy.ai/pricing'
      }
    ],
    freeQuota: 'Free 计划每月 100 credits；计划 credits 每月重置且不累积',
    contextWindow: 'N/A',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.meshy.ai/pricing',
      'https://docs.meshy.ai/en/api/pricing',
      'https://www.meshy.ai/features/text-to-3d'
    ],
    pros: [
      '公开价格列出 $0、$20/月、$60/月和 Enterprise 档位',
      'Free 每月 100 credits；Pro 每月 1,000 credits，并支持额外 credits 购买',
      'Text to 3D（Preview）和 Image to 3D 在 API 定价中列出 Meshy-6 credit 成本：Text to 3D Preview 20 credits，Image to 3D 20/30 credits',
      'API 定价还覆盖 Retexture 10、Remesh 5、Auto-Rigging 5、Animation 3 credits 等后处理工作流',
      '导出和下游 3D 工作流适合游戏、电商和原型资产',
      '付费计划相比需署名的免费输出，更适合隐私和商业流程'
    ],
    cons: [
      '免费输出要求 CC BY 4.0 署名，商用团队应先选对计划再使用资产',
      '计划 credits 每月重置且不累积，会影响真实预算效率',
      'API credit 价格可能变化，生产管线需要实时成本护栏',
      '高质量主视觉资产仍可能需要在 Blender 或 DCC 工具里手工清理'
    ],
    bestFor: '快速 3D 原型',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Meshy 官方 pricing 页确认 Free $0、Pro $20/月、Studio $60/月和 Enterprise 定制；Free 每月 100 credits，Pro 每月 1,000 credits，且免费输出按 CC BY 4.0。API 定价已把 Meshy-6 Text to 3D Preview、Image to 3D、Retexture、Remesh、Rigging、Animation 等拆成 credits per call，采购时要按资产类型和后处理链路估算。',
      pitfalls: [
        '免费输出要计入 CC BY 4.0 署名要求',
        '自动化前按资产类型估算 API credits per call',
        '精修 3D 交付物要预留人工清理时间'
      ]
    },
    decisionSummary: {
      verdict: '实用的 AI 3D 原型工具，公开档位清晰，但输出权利和每月 credit 过期必须纳入决策。',
      bestFor: 'Text to 3D（Preview）、Image to 3D、游戏道具、产品 mockup 和快速 3D 构思',
      avoidIf: '你需要保证主视觉级拓扑、免费层无需署名，或 credits 可以无限结转',
      mainRisk: '$0 档适合试用，但 CC BY 4.0 署名要求和过期 credits 可能让商业团队低估成本。',
      alternatives: ['Tencent Hunyuan3D', 'Tripo AI', 'Blender manual modeling']
    },
    swot: {
      S: '3D 生成上手快，credits 规则清晰',
      W: '署名和质量受计划限制',
      O: '游戏、电商和原型 3D 资产',
      T: '专业 DCC 工具和竞品 3D 生成器'
    },
    tags: ['3D', '多模态', '快速', 'Meshy-6', '已核验']
  },
  {
    id: 'hunyuan3d',
    name: '混元3D',
    category: 'multimodal',
    subcategory: '3D生成',
    developer: '腾讯',
    logo: null,
    versions: [
      {
        type: 'CN/Open Source',
        pricing:
          '消费端、腾讯云 API 和开源模型分开核算；腾讯云 API 首次开通可领 100 积分，预付 1,000 积分 100 元，后付 0.12 元/积分',
        models: 'Hunyuan 3D 3.0、Hunyuan3D 2.0、Hunyuan3D-2.1 Series',
        link: 'https://3d.hunyuan.tencent.com'
      }
    ],
    freeQuota:
      '腾讯云 API 首次开通可手动领取一次性 100 积分免费包；消费端免费次数以站点/账号内为准；本地开源使用取决于许可和算力',
    contextWindow: 'N/A',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.tencent.com/en-us/articles/2202235.html',
      'https://cloud.tencent.com/document/product/1804/123461',
      'https://github.com/Tencent-Hunyuan/Hunyuan3D-2',
      'https://huggingface.co/tencent/Hunyuan3D-2'
    ],
    pros: [
      '腾讯将 Hunyuan 3D 3.0 定位为全球 3D 创作引擎，支持 text-to-3D、image-to-3D 和 Sketch-to-3D 输入',
      '腾讯云混元生3D API 文档列出一次性 100 积分免费包、1,000 积分 100 元、10,000 积分 980 元、后付费 0.12 元/积分',
      '腾讯云 API 扣减规则显示专业版 Normal 20 积分/次、LowPoly/Sketch 25、Geometry 15；极速版文/图生 3D 默认 15 积分/次',
      '开源 Hunyuan3D 2.0 与 Hunyuan3D-2.1 Series 提供消费站点之外的本地和研究路径',
      '消费端和开源/本地路线要按具体入口确认 OBJ 和 GLB 等导出格式',
      'GitHub model zoo 记录了 6GB、16GB 等不同显存选项',
      '当格式和质量要求匹配时，输出可进入 Unity、Unreal、Blender 等常见 3D 工作流'
    ],
    cons: [
      '消费云端、腾讯云 API、GitHub 和 Hugging Face 路线的许可、成本和运维假设不同',
      '不能把消费端免费次数或 credits 直接套用到腾讯云 API 计费',
      '本地运行需要 GPU 显存和依赖管理，不只是开一个网页账号',
      '商用要按所选路线复核许可和生成资产权利',
      '模型质量仍需人工检查拓扑、纹理接缝、比例和动画准备度'
    ],
    bestFor: '中文 3D 创作',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，混元 3D 应拆成三条路线看：Hunyuan 3D 3.0 消费/云端产品、腾讯云混元生3D API，以及开源 Hunyuan3D 2.0 / Hunyuan3D-2.1 Series 模型。腾讯云 API 现有一次性 100 积分免费包、预付积分包和 0.12 元/积分后付费，且不同生成类型会按 15/20/25/30/50 等积分扣减；这个区分比“国产 3D 工具”标签更影响成本、许可和部署判断。',
      pitfalls: [
        '比较成本前先选定网页、腾讯云 API 或开源路线',
        '不要把消费端免费次数套用到腾讯云 API',
        '按具体模型或服务复核许可和输出权利',
        '本地部署前确认 6GB、16GB 等显存要求'
      ]
    },
    decisionSummary: {
      verdict:
        '严肃的国产 3D 生成选项，兼具消费端、API 和开源路线，但每条路线的成本、许可和算力含义不同。',
      bestFor:
        'text-to-3D、image-to-3D、Sketch-to-3D、中文 3D 原型，以及同时需要网页和本地模型选项的团队',
      avoidIf: '你需要单一简单 SaaS 计划、成熟企业资产治理，或不想做 GPU 规划的本地生成',
      mainRisk:
        'Hunyuan 3D 3.0 消费站点、腾讯云 API 计费和 Hunyuan3D 2.0 / Hunyuan3D-2.1 Series 开源模型很容易混为一谈，从而造成许可、成本或硬件判断错误。',
      alternatives: ['Meshy', 'Tripo AI', 'Blender plus manual art pipeline']
    },
    swot: {
      S: '输入模式多，并有开源路线',
      W: '不同路线的许可和算力复杂度较高',
      O: '中文 3D 创作和本地模型部署',
      T: 'Meshy、Tripo 和专业 DCC 管线竞争'
    },
    tags: ['3D', '国产', '腾讯', 'Hunyuan3D', '已核验']
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    category: 'multimodal',
    subcategory: '内容生成',
    developer: 'Google',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '标准版免费 / Google AI Plus、Pro、Ultra 或 Workspace 升级',
        models: 'Gemini-powered research and writing assistant',
        link: 'https://notebooklm.google.com'
      }
    ],
    freeQuota:
      '标准版：100 notebooks、每个 notebook 50 sources、每个 source 500,000 words；每日 50 chat queries、3 audio generations，并在升级表中列出 Video Overviews / Deep Research 等额外限额',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: [
      '基于资料源的研究和写作助手，回答能回到 source',
      '标准版可建 100 notebooks，每个 notebook 支持 50 sources',
      '单个 source 上限 500,000 words 或 200MB 本地上传',
      '标准版每日 50 chat queries 和 3 audio generations',
      'Google AI Pro 可把 notebook source limit 提升到 300 sources per notebook，Ultra 可到 500/600 sources per notebook',
      '升级页已列出 Video Overviews、Reports、Flashcards、Quizzes、Mind Maps、Deep Research、Data Tables、Infographics、Slide Decks 和 Watermark Removal 等限额/权益',
      'Cloud / Workspace 路径强调 enterprise-grade data protection 和更高 artifact limits'
    ],
    cons: [
      '适合资料研读，不是通用聊天或自主 Agent',
      '更高 limits 依赖 Google AI Plans、Cloud 或 Workspace 权益',
      'Deep Research、Slides、Infographics、Watermark Removal 等能力按计划分层，不能默认所有用户可用',
      '具体功能可用性受地区、账号类型和计划影响'
    ],
    bestFor: '资料研读、课程/报告整理、带来源的知识库问答',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，NotebookLM 更适合被定位为“基于资料源的研究/写作助手”。标准版仍是 100 notebooks、50 sources/notebook、50 chat queries/day 的个人资料整理入口；如果团队需要 Video Overviews、Deep Research、Slide Decks、Infographics、Watermark Removal 或更高 source limits，应核对 Plus/Pro/Ultra、Cloud 或 Workspace 权益。',
      pitfalls: [
        '不是通用对话模型',
        '高级额度与功能受 Google 计划、地区和账号类型影响',
        'Deep Research 和 artifact 输出仍需人工检查来源质量',
        '上传资料仍需注意版权、隐私和来源质量'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://support.google.com/notebooklm/answer/16269187?hl=en',
      'https://support.google.com/notebooklm/answer/16213268?hl=en',
      'https://support.google.com/googleone/answer/14534406?hl=en'
    ],
    decisionSummary: {
      verdict:
        '个人和小团队做资料研读、课程整理、报告初稿很强，但应按“source-grounded notebook”而不是通用助手来选。',
      bestFor: '把 PDF、网页、文档沉淀成可问答、可复用的研究 notebook',
      avoidIf: '你需要跨应用执行任务、无资料源自由聊天，或明确企业级数据治理流程',
      mainRisk:
        '额度和高级输出绑定 Google AI/Workspace/Cloud 计划，Deep Research 与 artifact 输出并不等于事实自动核验，且上传资料涉及隐私、版权和来源可靠性。',
      alternatives: ['Perplexity', 'Dify', 'LangChain']
    },
    swot: {
      S: '资料源问答和学习输出',
      W: '不是通用 Agent',
      O: '教育和办公知识管理',
      T: '企业知识库与搜索产品'
    },
    tags: ['推荐', '资料研读', '知识库', 'Google']
  },

  // ============= Agent 平台 (8个) =============
  {
    id: 'qinglizi',
    name: '氢离子 / 阿里健康',
    category: 'llm',
    subcategory: '医学垂直助手',
    developer: '阿里健康 / 杭州智循建模科技',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing:
          'App Store / 产品内页面曾列出免费 App 与若干内购档位；具体价格、权益和机构权限以当前商店页及产品内为准',
        models: '医学文献检索、指南阅读、AI 翻译和智能问答助手',
        link: 'https://ali-doctor.com/login'
      }
    ],
    freeQuota: 'App Store 标注免费 App + App 内购买；公开来源未核到稳定免费问答额度',
    contextWindow: '未公开',
    chineseSupport: 5,
    pros: [
      '面向医生的医学文献、指南和原文阅读场景',
      'App Store 描述覆盖搜文献、搜指南、查疾病、查药品、AI 翻译和总结',
      '强调医学资料出处，但仍需追溯原文并人工复核，适合作为医学资料检索和科研阅读辅助',
      'App Store / 产品内页面曾列出若干内购档位，当前价格和权益需以商店页及产品内为准'
    ],
    cons: [
      '公开页面未列出完整模型卡、机构权限和产品内额度',
      'App Store 免责声明写明仅作为医疗行业专业用户参考',
      'AI 问答及疾病/药品模块不作为诊断、确诊和治疗依据',
      '不能代替医生面诊和医院诊断，医学结论必须由专业人士复核'
    ],
    bestFor: '医学文献检索、指南查阅、科研阅读辅助',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，可以通过阿里健康/氢离子入口和 App Store 确认其医学 AI 助手定位，主要围绕搜文献、查指南、查药品、AI 翻译和原文总结。本站只核验产品存在、免费 App + App 内购买线索和免责声明；当前价格权益、模型卡、临床效果或机构权限仍需以商店页及产品内为准。',
      pitfalls: [
        '不要把回答当作诊断或处方',
        '价格、额度和机构权限以产品内为准',
        '医学结论需追溯原文并由专业人士复核'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://ali-doctor.com/login',
      'https://apps.apple.com/cn/app/%E6%B0%A2%E7%A6%BB%E5%AD%90-%E5%8C%BB%E5%AD%A6ai%E5%8A%A9%E6%89%8B/id6738349403'
    ],
    decisionSummary: {
      verdict:
        '产品定位、商店页入口和医疗免责声明已核验；适合作为医学文献/指南资料入口，但不能替代诊断、确诊或治疗依据。',
      bestFor: '医生、医学生和科研人员做文献/指南查阅',
      avoidIf: '你需要经过临床验证的诊疗决策系统或明确 API 价格',
      mainRisk:
        'App Store 免责声明限定其仅供医疗行业专业用户参考，不能代替医生面诊和医院诊断；公开来源暂未给出完整模型卡和机构权限边界。',
      alternatives: ['Perplexity', 'GPT-5.5 / OpenAI', 'Claude']
    },
    swot: {
      S: '医学资料检索入口清晰',
      W: '公开模型和价格信息不足',
      O: '可作为医生科研与指南阅读线索',
      T: '医疗合规与临床验证要求高'
    },
    tags: ['医学', 'AI', '国产', '垂直', '已核验']
  },
  {
    id: 'coze',
    name: 'Coze',
    category: 'agent',
    subcategory: '无代码平台',
    developer: '字节跳动',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '免费版每天 10 积分；Premium Lite 每天 100 积分；Premium $19；Premium Plus $39',
        models: '多模型 Agent / Workflow / Plugin',
        link: 'https://www.coze.com'
      },
      {
        type: 'CN',
        pricing: '以 coze.cn 产品内为准',
        models: '多模型 Agent / Workflow',
        link: 'https://coze.cn'
      }
    ],
    freeQuota:
      'Global Free：10 credits/day；Premium plans 标注 3-day free trial，额度按模型调用和能力消耗',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    pros: [
      '面向 AI Agent 的低代码/无代码构建平台',
      'Global 版 Free 每日 10 credits，Premium Lite 每日 100 credits',
      'Premium 和 Premium Plus 分别提供更高日额度，官方页列出 $19 和 $39 档',
      '官方文档将 Premium plan、message credits、Coze tokens、API/Web SDK 与非 SDK 场景计费分开说明',
      '工作流、插件、知识库和 API/Web SDK 可组合',
      '适合快速把 Bot、Workflow 和外部工具串成可发布应用'
    ],
    cons: [
      'credit 消耗随模型调用和能力而变化，长期成本要按实际工作流压测',
      'Premium 页面和 docs 页面是 JS-heavy，采购时仍要以登录后账单页、订阅页和当前文档为准',
      'CN 与 Global 版能力、生态和计费口径可能不同',
      '复杂多步骤 Agent 仍需要日志、回放和人工验收'
    ],
    bestFor: '快速搭建 Bot、轻量工作流和可发布的 Agent 应用',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Coze 更适合当作低代码 Agent 发布平台评估：先用 Free 10 credits/day 做原型，再按 Premium Lite 100 credits/day 或更高档估算真实调用成本。官方 docs 同时区分 message credits、Coze tokens、API/Web SDK 和非 SDK 场景费用，不要只看“能搭起来”，要看账单页、日志、异常恢复和渠道发布后的维护成本。',
      pitfalls: ['credit 模型需要实测', 'CN/Global 计费和能力可能不同', '复杂流程要保留人工兜底']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.coze.com/premium',
      'https://www.coze.com/open/docs/guides/subscription',
      'https://www.coze.com/open/docs/guides/message_credits'
    ],
    decisionSummary: {
      verdict: '适合快速发布 Agent/Bot 原型，生产使用前要按 credit 消耗做成本和稳定性压测。',
      bestFor: '业务人员和开发者快速组合 Bot、Workflow、Plugin 与知识库',
      avoidIf: '你需要强自托管、严格版本锁定，或非常复杂的跨系统事务编排',
      mainRisk:
        'credit、message billing、Coze tokens、API/Web SDK 与非 SDK 插件费用会随模型、插件、工作流复杂度变化，账单预测不能只看订阅名义价格。',
      alternatives: ['Dify', 'n8n', 'Make (Integromat)']
    },
    swot: {
      S: '低代码 Agent 发布',
      W: 'credit 成本需实测',
      O: '业务自动化和 Bot 分发',
      T: 'Dify、n8n、Make 等平台'
    },
    tags: ['推荐', 'Agent', '无代码', '字节']
  },
  {
    id: 'dify',
    name: 'Dify',
    category: 'agent',
    subcategory: '开源平台',
    developer: '开源社区',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Sandbox Free；Professional $59/月或 $590/year；Team $159/月或 $1590/year；Enterprise 定制；Self-hosted Community Edition',
        models: 'Agentic workflows、RAG pipelines、integrations、observability',
        link: 'https://dify.ai/pricing'
      }
    ],
    freeQuota:
      'Sandbox Free：200 message credits、1 workspace、1 member、5 apps；Community Edition 可自托管',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: [
      'Dify Cloud 明确提供 Sandbox Free、Professional 和 Team 档',
      'Professional 当前价格页展示 $590/workspace/year，含 5,000 message credits/month',
      'Team 当前价格页展示 $1590/workspace/year，含 10,000 message credits/month',
      'Sandbox Free 含 200 message credits、5 apps、50 knowledge documents 和 30 days log history',
      'Community Edition 支持免费自托管的受控部署',
      '产品定位覆盖 agentic workflows、RAG pipelines、integrations 和 observability'
    ],
    cons: [
      'Cloud 额度受 workspace 订阅限制，自托管也需要模型、向量库和运维成本',
      '生产环境要关注知识库数据存储、日志、权限和 API rate limit',
      '插件和模型供应商配置会影响实际部署复杂度'
    ],
    bestFor: '团队搭建 RAG、Agentic workflow 和可观测的 AI 应用',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Dify 的价值不只是“可自托管”，而是把 RAG、Workflow、Agent、插件和观测做成一套产品化工作台。当前 pricing 页默认展示 Professional $590/year、Team $1590/year 与 Sandbox Free 200 message credits；选型时应把 Cloud workspace 额度、annual/monthly billing 和 Community Edition 的运维成本分开算。',
      pitfalls: [
        'Cloud 额度不是无限',
        '自托管仍要承担模型和基础设施成本',
        '企业数据权限和日志留存需要单独设计'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://dify.ai/pricing',
      'https://docs.dify.ai/en/cloud/use-dify/workspace/subscription-management',
      'https://dify.ai/education'
    ],
    decisionSummary: {
      verdict:
        '适合希望产品化搭建 RAG/Agent 工作流的团队，Cloud 快速启动，自托管适合数据边界更清晰的场景。',
      bestFor: '知识库问答、客服 Agent、内部 AI 应用和可观测工作流',
      avoidIf: '你只需要一个简单聊天机器人，或没有人维护模型、权限和部署环境',
      mainRisk: 'Cloud 订阅额度、自托管基础设施和模型调用成本需要合并预算，否则容易低估长期成本。',
      alternatives: ['Coze', 'LangChain', 'n8n']
    },
    swot: {
      S: 'RAG/Workflow 产品化',
      W: '部署和额度要规划',
      O: '企业 AI 应用落地',
      T: '低代码 Agent 与工程框架竞争'
    },
    tags: ['开源', 'Agent', '自托管']
  },
  {
    id: 'autogpt',
    name: 'AutoGPT',
    category: 'agent',
    subcategory: '自主Agent',
    developer: 'Significant Gravitas / AutoGPT',
    logo: null,
    versions: [
      {
        type: '托管云版',
        pricing:
          'Pro $42.50/月（年付，1x usage）；Max $272.00/月（年付，8.5x usage）；Team 计划标注即将推出',
        models: 'AutoPilot、可视化 Agent Builder、运行看板、Marketplace',
        link: 'https://agpt.co/pricing/'
      },
      {
        type: '自托管',
        pricing: 'Self-Host 开源路线；需自带模型 API key、硬件/云资源和运维能力',
        models: 'AutoGPT Platform 与经典仓库组件',
        link: 'https://github.com/Significant-Gravitas/AutoGPT'
      }
    ],
    freeQuota:
      '自托管可避开托管订阅费，但仍有基础设施和模型调用成本；云版按计划与 credits 规则使用',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://agpt.co/pricing/',
      'https://agpt.co/docs/platform',
      'https://github.com/Significant-Gravitas/AutoGPT/blob/master/LICENSE'
    ],
    pros: [
      'AutoGPT Platform 现在更偏向 AutoPilot 对话创建、可视化 Agent Builder、运行看板、marketplace agents、定时任务、触发器和集成',
      '云版价格页列出 Pro 与 Max，Team 计划仍标注即将推出',
      '功能矩阵包含可视化 Agent Builder、MCP Tool Support、浏览器自动化、GitHub CLI、作为积木的 sub-agents 和任务历史',
      'Max 计划标注 8.5x usage；价格页同时展示 AutoPilot Chat allowance 和 credit wallet pay-as-you-go 机制',
      '自托管仍适合想控制基础设施和模型 key 的技术团队',
      '适合可重复的数字工作流，便于观察、停止、恢复和复盘运行记录'
    ],
    cons: [
      '托管云版和自托管是两套成本模型；自带模型 key、存储、计算与运维可能才是真实预算大头',
      '许可边界需要核对：autogpt_platform 使用 Polyform Shield License，其他部分使用 MIT License',
      '长时间运行的 Agent 会影响外部应用和账号，因此定时、触发器、凭证和 webhook 权限都需要治理',
      '高风险业务动作仍需要人工复核、限定凭证范围并保留运行可见性'
    ],
    bestFor: '可重复数字工作流、可视化 Agent 编排、定时/触发式自动化',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，AutoGPT 更应该按平台型 Agent 自动化工具评估，而不是只看早期经典 autonomous-agent demo。关键问题是你的流程是否需要云端运行管理、可视化积木、marketplace agents、定时任务、MCP 集成、AutoPilot Chat 和 pay-as-you-go credits，还是自托管加模型成本更合适。',
      pitfalls: [
        '分开核算托管订阅和自托管成本',
        '再分发或平台复用前核对 Polyform Shield License 边界',
        '写入类动作要使用限定凭证并保留人工复核'
      ]
    },
    decisionSummary: {
      verdict:
        '适合可重复工作流的知名 Agent 自动化平台，但选型时必须分清托管计划、自托管运维、credits 和双许可边界。',
      bestFor: '定时 Agent、可视化流程编排、marketplace agents、可观测自动化和 MCP 工具工作流',
      avoidIf:
        '你需要低风险无人值守决策系统、所有目录统一宽松许可，或不跟踪模型/API 使用量的稳定成本',
      mainRisk:
        '项目已经从经典 AutoGPT 演示转向平台模式；托管云成本、自托管基础设施、凭证治理，以及 Polyform Shield License 与 MIT License 的边界都容易被误读。',
      alternatives: ['Dify', 'LangChain / LangGraph', 'CrewAI']
    },
    swot: {
      S: '平台化 Agent 编排和可观测运行',
      W: '许可、credits 和自托管成本复杂',
      O: '业务流程自动化和 Agent marketplace',
      T: 'Dify、LangGraph、CrewAI、托管 Agent 平台'
    },
    tags: ['Agent', '自动化', 'AutoPilot', 'Visual Builder', 'MCP', '已核验']
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'agent',
    subcategory: '开发框架',
    developer: '开源社区',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'LangChain/LangGraph 为开源软件；LangSmith 开发者版每席位 $0，Plus 每席位 $39，企业版定制',
        models: 'LangChain, LangGraph, LangSmith, Deep Agents',
        link: 'https://www.langchain.com'
      }
    ],
    freeQuota:
      'LangGraph 采用 MIT 许可证；LangSmith Developer 每席位 $0，含每月 5,000 条基础追踪，超出后按量计费；Plus 含每月 10,000 条基础追踪',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'LangChain 提供 agent 开发入口，LangGraph 负责更可控的 stateful orchestration',
      'LangGraph 采用 MIT 许可证，适合自建复杂 Agent 系统',
      'LangSmith 覆盖 observe、evaluate、deploy 和 monitor',
      'LangSmith Developer 每席位 $0，Plus 每席位 $39，Enterprise 定制',
      'Plus 计划含每月 10,000 条基础追踪；大模型用量另行计费，按所接模型供应商核算',
      '官方称 open source frameworks 约 100M+ monthly downloads'
    ],
    cons: [
      'LangSmith 不是开源产品，超出免费 trace 后按量计费',
      '工程能力要求高，框架选择要在 LangChain、LangGraph、Deep Agents 间取舍',
      '生产环境需要自建评测、追踪、权限和模型成本治理'
    ],
    bestFor: '开发者构建可观测、可评估、可部署的 Agent 应用',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，LangChain 条目应拆成“开源框架 + LangSmith 平台”来理解：LangGraph 适合需要明确状态和控制流的 Agent，LangSmith 则解决追踪、评测和部署。团队选型时要同时评估代码复杂度、每月 5,000/10,000 条基础追踪阶梯、大模型用量另行计费和可观测性预算。',
      pitfalls: ['需要工程化能力', 'LangSmith 超额按量', '框架组合要避免过度设计']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.langchain.com/',
      'https://www.langchain.com/pricing',
      'https://docs.langchain.com/langsmith/faq'
    ],
    decisionSummary: {
      verdict:
        '适合工程团队构建可控 Agent/RAG 系统，尤其需要 LangGraph 状态编排和 LangSmith 观测评测时。',
      bestFor: '需要代码级控制、评测、追踪和部署流水线的 AI 应用团队',
      avoidIf: '你更需要无代码 Bot 发布，或没有人维护框架、测试和观测链路',
      mainRisk: '容易低估工程复杂度与 LangSmith trace/seat 成本，原型和生产治理要分阶段推进。',
      alternatives: ['Dify', 'CrewAI', 'OpenAI Agents SDK']
    },
    swot: {
      S: 'LangGraph 控制力与 LangSmith 观测',
      W: '工程复杂度高',
      O: 'Agent 工程平台化',
      T: '低代码平台和托管 Agent SDK'
    },
    tags: ['开源', 'Agent', '框架', '开发者']
  },
  {
    id: 'nanobanana',
    name: 'Nano Banana / Gemini Image',
    category: 'multimodal',
    subcategory: '图像生成/编辑',
    developer: 'Google',
    logo: null,
    versions: [
      {
        type: 'Gemini App',
        pricing:
          'Gemini app 访问取决于地区、账号年龄、计划和额度；Google AI Pro/Plus/Ultra 用户有更高的 Nano Banana Pro 使用权益',
        models: 'Nano Banana 2、Nano Banana Pro、Gemini 图像生成与编辑',
        link: 'https://gemini.google/overview/image-generation/'
      },
      {
        type: 'Gemini API',
        pricing: 'Gemini API 图像模型按官方 API 价格和所选模型计费',
        models: 'gemini-3.1-flash-lite-image、gemini-3.1-flash-image、gemini-3-pro-image',
        link: 'https://ai.google.dev/gemini-api/docs/image-generation'
      }
    ],
    freeQuota: '消费者入口有额度限制；API 与企业使用应按 Google AI 价格和计划规则单独估算',
    contextWindow: 'N/A',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://gemini.google/overview/image-generation/',
      'https://ai.google.dev/gemini-api/docs/image-generation',
      'https://blog.google/innovation-and-ai/products/nano-banana-pro/',
      'https://ai.google.dev/gemini-api/docs/pricing'
    ],
    pros: [
      'Nano Banana 2 定位为 Gemini 内的图像生成与编辑能力，可通过 Gemini app 的 Create images 入口使用',
      'Gemini API 文档将 Nano Banana 描述为 Gemini 原生图像生成能力，支持对话式图文编辑',
      'API 模型族包含 Nano Banana 2 Lite（Gemini 3.1 Flash Lite Image）、Nano Banana 2（Gemini 3.1 Flash Image）和 Nano Banana Pro（Gemini 3 Pro Image）',
      '开发者模型 ID 包括 gemini-3.1-flash-image 和 gemini-3-pro-image',
      'Gemini API 文档已将 gemini-2.5-flash-image 标为 legacy，并建议新项目迁移到 Nano Banana 2 Lite',
      'Gemini 图像输出会使用 SynthID 和可见水印来标识 AI 生成视觉内容'
    ],
    cons: [
      'Nano Banana 不是独立图表网站，而是横跨消费者、API 和企业入口的 Gemini 图像模型族',
      '可用性、额度和 Pro 重新生成能力取决于国家/地区、账号、年龄与 Google 计划',
      'API 成本、延迟和质量由模型选择决定，不能按单一免费层理解',
      '品牌、肖像、事实型信息图和政策敏感输出仍需要人工审核'
    ],
    bestFor: 'Gemini 内的图片生成、照片编辑、文字海报、视觉草图和 API 图像工作流',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，这个条目应指向 Gemini 图像生成，而不是一个独立轻量图表服务。Nano Banana 是 Google 在 Gemini app 与 Gemini API 场景中的图像模型族昵称，当前选型重点是 Nano Banana 2 Lite、Nano Banana 2 与 Nano Banana Pro；旧的 gemini-2.5-flash-image 已进入 legacy 迁移口径。',
      pitfalls: [
        '使用 Gemini 或 Google AI Studio 官方入口',
        '明确选择 API 模型 ID',
        '新项目不要继续默认使用 gemini-2.5-flash-image',
        '发布前检查水印、内容政策和权利边界'
      ]
    },
    decisionSummary: {
      verdict:
        '这是 Google Gemini 的图像生成与编辑路线，最好按模型层级、计划额度、API 价格和水印/政策要求来评估。',
      bestFor: 'Gemini app 图片编辑、含文字海报、照片变换、API 图像工作流和创意草稿',
      avoidIf: '你需要专门的结构化图表工具、完全没有水印/政策约束，或稳定的免费生产额度',
      mainRisk:
        '旧条目容易把 Nano Banana 误认为独立免费图表站；真实产品是 Gemini 图像模型族，涉及计划限制、API 价格、legacy 模型迁移、SynthID 和可见水印义务。',
      alternatives: ['Ideogram', 'GPT Image / ChatGPT Images', 'Adobe Firefly']
    },
    swot: {
      S: 'Gemini 原生图像编辑与 API 入口',
      W: '计划额度和水印/政策约束',
      O: '消费者编辑与 API 创意工作流',
      T: '竞争压力来自 OpenAI Images、Adobe Firefly 和 Ideogram'
    },
    tags: ['Google', 'Gemini', 'Nano Banana 2', '图像生成', 'SynthID', '已核验']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    category: 'agent',
    subcategory: '搜索增强Agent',
    developer: 'Perplexity AI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          '核心搜索免费；Pro 每月 $20 或每年 $200；Max 每月 $200；Enterprise Pro 每月 $40；Enterprise Max 每月 $325',
        models: 'Answer Engine、Pro Search、Comet Browser、API',
        link: 'https://www.perplexity.ai'
      }
    ],
    freeQuota:
      'Free 用户可用 core search 和 chat；Pro/Max 解锁更高 limits、Spaces、file uploads 和高级模型能力',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'Answer Engine 面向实时 open web research，并提供 cited answers',
      'Free core search 和 chat 可直接开始使用',
      'Pro $20/month 或 $200/year，解锁 Pro Search、Spaces、file uploads、image generation 和 higher limits',
      'Max $200/monthly 或 $2000/year，包含 Max Assistant on Comet、Brain Research Preview、Create files/apps 和 highest weekly browser agent query limits',
      'Enterprise Pro 每月 40 美元，Enterprise Max 每月 325 美元',
      '覆盖 Web、移动端、Comet Browser 和 API；API usage 仍与订阅/Enterprise seat 分开计费'
    ],
    cons: [
      '高级研究、文件和模型能力集中在 Pro/Max/Enterprise',
      'Brain 仍为 Research Preview 且逐步开放，不是所有 Max 用户第一天都能看到',
      'Max/Enterprise seats 不包含 API credits，API access 需要单独购买或充值',
      '需要检查引用质量，不能把 cited answers 当作自动事实核验完成',
      '企业隐私、安全和留存策略要看 Enterprise 计划'
    ],
    bestFor: '实时资料调研、带引用问答、竞品/市场/技术搜索',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Perplexity 应定位为 web-first research/answer engine：强项是实时网页研究、inline citations、多模型路由和 Comet/Computer 工作流。Max 帮助页当天更新，新增/强调 Max Assistant on Comet、Brain Research Preview、Create files/apps 与 API 另行计费；Pro/Max/Enterprise 的差异不建议只用“免费/$20”概括。',
      pitfalls: [
        '引用仍需抽查原文',
        '高级功能多在付费档',
        'API 与订阅/Enterprise seat 分开计费',
        'Brain Research Preview 逐步开放'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.perplexity.ai/hub',
      'https://www.perplexity.ai/help-center/en/articles/11680686-perplexity-max',
      'https://www.perplexity.ai/help-center/en/articles/10352986-enterprise-pricing-and-billing-frequently-asked-questions'
    ],
    decisionSummary: {
      verdict: '适合需要快速查证和引用链的研究任务，尤其是资料、市场、技术选型和竞争情报。',
      bestFor: '实时网页调研、带来源摘要、轻量报告和研究工作流',
      avoidIf: '你需要离线私有知识库、严格可复现搜索，或深度代码生成工作流',
      mainRisk:
        '引用存在质量差异，最终事实仍要打开原文核验；Max/Enterprise 与 API 是不同成本路径，Brain 和 Comet agent 功能也有逐步开放和使用限额。',
      alternatives: ['NotebookLM', 'ChatGPT', 'Claude']
    },
    swot: {
      S: '实时搜索与引用',
      W: '引用质量需抽查',
      O: '研究与知识工作流',
      T: '传统搜索、NotebookLM、通用模型'
    },
    tags: ['推荐', '搜索', 'Agent', '调研', '引用']
  },

  // ============= 新增 Agent 应用构建器 + IDE (5个) =============
  {
    id: 'devin',
    name: 'Devin',
    category: 'agent',
    subcategory: '自主Agent',
    developer: 'Cognition Labs',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0 / Pro $20/月 / Max $200/月 / Teams $80/月 plan + $40/月每 full dev seat / Enterprise 定制',
        models:
          'Devin Desktop、Devin Cloud、SWE 1.6、OpenAI/Claude/Gemini frontier models 与开源模型（以官方计划可用为准）',
        link: 'https://devin.ai/pricing/'
      }
    ],
    freeQuota:
      'Free：light quota to code with agents、limited model availability、unlimited inline edits 与 Tab completions；付费超额可按 API pricing 购买 extra usage',
    contextWindow: '取决于模型',
    chineseSupport: 2,
    pros: [
      '官方 pricing 已把 Devin Desktop/Cloud 与 Windsurf 迁移后的计划放在同一 Devin 口径下',
      'Free 提供轻量 agent quota、有限模型、无限 inline edits 与 Tab completions',
      'Pro $20 可访问 OpenAI、Claude、Gemini frontier models、SWE 1.6、Devin Cloud 和 extra usage',
      'Teams 是 $80/月 plan + $40/月每 full dev seat，并支持 unlimited team members 与集中管理',
      'DeepWiki/Ask Devin/Devin Review/Integrations 扩展了代码库理解和 PR 审查场景'
    ],
    cons: [
      '旧 Core、Team $500 或旧 Windsurf 价格结论不再准确',
      'Free 只是轻量 quota，持续 agent 使用需要 Pro/Max/Teams 或 Enterprise',
      '超出 included quota 后可按 API pricing 购买 extra usage，成本仍需预算控制',
      '模型选择、任务大小和 reasoning 会影响单条消息成本',
      '复杂任务仍要人审查输出和 PR'
    ],
    bestFor: '自主化开发任务、端到端功能实现、Bug 修复自动化',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Devin pricing 明确展示 Free、Pro $20、Max $200、Teams $80/月 plan + $40/月每 full dev seat、Enterprise，并说明 Windsurf 已迁入 Devin Desktop。它仍适合团队 backlog、迁移、PR Review 和多工具集成，而不是个人随手补全。',
      pitfalls: [
        '不要再按旧 $500 Team 入门价判断',
        '先用小任务测算 quota 和额外用量',
        '复杂任务必须让人审查 PR、测试和安全影响'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://devin.ai/pricing/',
      'https://cognition.com/blog/new-self-serve-plans-for-devin',
      'https://docs.devin.ai/get-started/devin-intro',
      'https://docs.devin.ai/integrations/overview',
      'https://devin.ai/'
    ],
    decisionSummary: {
      verdict:
        'Devin 更适合团队级 backlog、迁移和 PR 审查自动化；价格门槛降低了，但持续使用仍要按 quota 和额外用量管理。',
      bestFor: '自主化开发任务、端到端功能实现、Bug 修复自动化、工程团队 backlog',
      avoidIf: '你只是个人日常写代码、预算很低，或团队没有成熟代码审查和测试流程',
      mainRisk:
        'included quota、extra usage、full dev seat 和模型/任务复杂度会影响真实成本，复杂任务输出不能免审',
      alternatives: ['Claude Code', 'Codex', 'Replit']
    },
    swot: {
      S: '端到端工程任务、Devin Desktop/Cloud 和集成强',
      W: '成本、seat 结构和审查压力仍高',
      O: '企业自动化、迁移、PR Review',
      T: '竞争压力来自 Claude Code、Cursor 和 Replit Agent'
    },
    tags: ['自主Agent', '企业级', '端到端', 'Backlog', 'PRReview']
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    category: 'agent',
    subcategory: 'AI应用构建器',
    developer: 'StackBlitz',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Free $0 / Pro $25/月 / Teams $30/成员/月 / Enterprise 定制',
        models: '自动路由模型；Standard 全用户，Max Pro only',
        link: 'https://bolt.new/pricing'
      }
    ],
    freeQuota:
      'Free：300K tokens/day，1M tokens/month，含公开/私有项目、Bolt branding 和 10MB 文件上传限制',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      '通过聊天创建 apps 和 websites，支持从 Figma/GitHub 导入',
      '基于 StackBlitz WebContainers，可在浏览器里安装 npm 包、运行 Node.js servers、编辑和部署',
      'Pro 起无 daily token limit，10M tokens/month 起，并支持自定义域名、SEO、数据库和 AI 图片编辑',
      'Teams 增加集中账单、团队访问管理、私有 npm registry 和设计系统知识',
      '适合前端/全栈原型从提示词直接跑起来'
    ],
    cons: [
      '核心计费约束是 tokens，项目文件系统越大每次消息可能越耗 token',
      'Free 有 300K/day 和 1M/month 限制，触顶后 AI 交互暂停或需要升级',
      'GitHub README 仍提示产品在快速演进，复杂后端和大型项目要谨慎',
      '浏览器环境不等于完整生产工程治理'
    ],
    bestFor: '快速原型、全栈 Web 应用构建、MVP 验证',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Bolt 官方价格页显示 Free、Pro $25、Teams $30/成员、Enterprise 定制，并以 token 额度管理使用；Free 是 300K/day、1M/month，Pro 从 10M/month 起且取消 daily token limit。它的独特点仍是 WebContainers 里的可运行全栈环境，适合快速把网页和应用原型跑起来。',
      pitfalls: [
        '先控制项目体量，文件越多越耗 token',
        'Free 触顶后会暂停 AI 交互',
        '生产级权限、数据和测试仍要离开“vibe coding”心态做审查'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://bolt.new/pricing',
      'https://github.com/stackblitz/bolt.new',
      'https://bolt.new/'
    ],
    decisionSummary: {
      verdict:
        '浏览器全栈原型很强，但预算要按 tokens、项目文件系统规模和团队席位估算，不能只看月费。',
      bestFor: '快速原型、全栈 Web 应用构建、MVP 验证',
      avoidIf: '你需要严格后端架构控制、复杂生产环境、或项目文件体量已经很大',
      mainRisk:
        'token 消耗与项目文件系统规模强相关，Free/Pro/Teams 额度和 rollover 规则可能比预期更快影响迭代',
      alternatives: ['Lovable', 'Replit', 'v0']
    },
    swot: {
      S: '零配置全栈、WebContainers、即开即用',
      W: 'token 成本和浏览器环境边界',
      O: '快速原型和营销站/小应用市场',
      T: 'Replit、Lovable、v0'
    },
    tags: ['推荐', '全栈', '零配置', '浏览器', 'Token制']
  },
  {
    id: 'v0',
    name: 'v0',
    category: 'agent',
    subcategory: 'AI应用构建器',
    developer: 'Vercel',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0 / Team $30/用户/月 / Business $100/用户/月 / Enterprise 定制；模型按 token 定价',
        models: 'v0 Mini, v0 Pro, v0 Max, v0 Max Fast',
        link: 'https://v0.app/pricing'
      }
    ],
    freeQuota:
      'Free：$5 monthly credits，7 messages/day，可部署到 Vercel、Design Mode、GitHub sync',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'Prompt → Build → Publish，适合快速生成可运行页面和应用',
      '可一键部署到 Vercel、Design Mode 可视化调整、GitHub sync',
      '提供模板、设计系统、iOS app 和 agentic build 流程',
      '官方价格页列出 v0 Mini/Pro/Max/Max Fast 的 token 定价',
      '与 Vercel 生态、React/Next.js/shadcn 类工作流贴合'
    ],
    cons: [
      '当前公开价格页不再展示旧 Premium $20 口径，旧资料需移除',
      '真实成本由 credits 与模型 token 价格共同决定',
      '强绑定 Vercel/前端应用工作流，不是通用后端工程 Agent',
      '复杂交互和业务逻辑仍需要开发者审查'
    ],
    bestFor: 'UI 快速原型、React 组件生成、Landing Page',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，v0 官方 pricing 显示 Free、Team、Business、Enterprise，并列出 v0 Mini/Pro/Max/Max Fast 的 token 价格。Free 含 $5 monthly credits 和 7 messages/day，Team/Business 是 $30/$100 每用户每月且每用户含 $30 monthly credits。旧的 Premium $20 和具体 GPT-5/AutoFix 断言不应再保留。',
      pitfalls: [
        '预算按 credits 和 token 单价估算',
        '复杂 UI 和业务逻辑仍要人工改',
        '不适合脱离 Vercel/React 生态的项目'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['https://v0.app/pricing', 'https://v0.app/', 'https://v0.app/docs'],
    decisionSummary: {
      verdict:
        'Vercel/React UI 和应用原型首选之一，但当前计费核心是 credits 与 v0 模型 token 成本。',
      bestFor: 'UI 快速原型、React 组件生成、Landing Page、Vercel 应用',
      avoidIf: '你需要通用后端工程、非 React/Vercel 栈，或不想承担 token/credits 波动',
      mainRisk: '模型 token 价格和 credits 消耗会让迭代成本高于订阅标价',
      alternatives: ['Bolt.new', 'Lovable', 'Replit']
    },
    swot: {
      S: 'React/Vercel 集成、Design Mode、发布快',
      W: '计费和生态绑定',
      O: '前端原型与应用生成市场',
      T: 'Bolt、Lovable、Replit'
    },
    tags: ['推荐', 'React', 'Next.js', 'Vercel', 'Credits', 'UI生成']
  },
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'agent',
    subcategory: 'AI应用构建器',
    developer: 'Lovable (原 GPT Engineer)',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free / Pro 100 credits 起 $25/月 / Business 100 credits 起 $50/月 / Enterprise 定制；Top-up：Pro $15/50 credits、Business $30/50 credits',
        models: '托管模型未固定；一个 credit balance 覆盖 build、Cloud 与部署后 AI gateway usage',
        link: 'https://lovable.dev/pricing'
      }
    ],
    freeQuota: 'Free：5 build credits/day（每月最多 30），20 Cloud credits/月，4 AI credits/月',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      '自然语言构建全栈 Web app，并通过 Lovable Cloud 运行',
      '原生 Supabase 集成，可在同一聊天界面管理 UI 与 PostgreSQL 后端',
      'GitHub 集成支持代码备份、协作、双向同步、分支和本地 IDE 工作流',
      '一个 credit balance 正在滚动覆盖 building、hosting/running 和部署后 AI features',
      'Plan mode 每条消息 1 credit，Build mode 随请求复杂度浮动，适合先规划再构建'
    ],
    cons: [
      '免费 build credits 每月封顶 30，复杂 MVP 很快触顶',
      'credits 用尽后 building 会停止，依赖 Lovable Cloud 或 AI features 的部署应用也可能暂停',
      '统一 credit balance 正在逐步 rollout，部分 workspace 可能仍看到旧 Cloud/AI balance',
      'GitHub 集成不能导入既有 GitHub repo 到 Lovable，只能从 Lovable 导出/同步',
      '复杂业务逻辑和生产治理仍需要开发者审查'
    ],
    bestFor: '全栈 Web 应用快速构建、非技术人员建站',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，Lovable 官方文档显示其正在滚动到一个 credit balance：building、Lovable Cloud hosting/running 和部署后 AI gateway usage 都会从 credits 扣除。Free 有 5 daily build credits（每月最多 30）、20 Cloud credits/月和 4 AI credits/月；Plan mode 每条消息 1 credit，Build mode 随复杂度浮动。',
      pitfalls: [
        '先估算 build/cloud/AI 都会吃同一 credit balance',
        'credits 用尽会阻断继续构建甚至影响托管应用',
        '接 GitHub 前理解只能从 Lovable 向 GitHub 同步的限制'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://lovable.dev/pricing',
      'https://docs.lovable.dev/introduction/subscription-plans',
      'https://docs.lovable.dev/integrations/supabase',
      'https://docs.lovable.dev/integrations/github',
      'https://docs.lovable.dev/introduction/credits-and-usage'
    ],
    decisionSummary: {
      verdict: '全栈 MVP 和 Supabase/GitHub 流程很顺，但核心风险是 credits 体系和生产治理。',
      bestFor: '全栈 Web 应用快速构建、非技术人员建站、Supabase MVP',
      avoidIf: '你需要导入既有大型 GitHub repo、严格成本上限，或生产级复杂业务逻辑',
      mainRisk: '同一 credits balance 覆盖 build、Cloud 和 AI features，用尽后会停止构建或影响运行',
      alternatives: ['Bolt.new', 'Replit', 'v0']
    },
    swot: {
      S: '全栈、Supabase、GitHub sync',
      W: 'credits 成本和导入限制',
      O: 'MVP、内部工具、非技术创业者',
      T: 'Bolt.new、Replit、v0'
    },
    tags: ['全栈', 'Supabase', 'GitHub', 'Credits', 'MVP']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    category: 'ide',
    subcategory: 'IDE插件',
    developer: 'Tabnine',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Code Assistant $39/用户/月（Annual subscription）/ Agentic Platform $59/用户/月；实际购买以 quote/合同为准',
        models:
          'Anthropic、OpenAI、Google、Meta、Mistral 等 LLM + Tabnine enterprise context / private deployment',
        link: 'https://www.tabnine.com/pricing/'
      }
    ],
    freeQuota:
      '公开 pricing 当前以团队/企业年付方案为主；试用、个人入口或免费能力需以官网注册/销售确认',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'Code Assistant 平台提供代码补全、IDE chat 和代码库上下文',
      'Agentic Platform 增加 agentic workflows、Tabnine Context Engine 和 CLI 能力',
      '支持 SaaS、VPC、on-premises、air-gapped 等部署形态',
      '强调不保留代码、不使用用户代码训练模型，也不与第三方共享代码',
      'Agentic Platform 可通过 MCP 使用 Git、测试框架、linters、Jira、Confluence、Docker、CI/CD 等工具',
      '面向 GDPR、SOC 2、ISO 27001 等合规要求的企业团队'
    ],
    cons: [
      '公开价格已明显转向企业/团队 annual subscription，个人低价档需重新确认',
      'Tabnine-provided LLM access 可能按 provider price + 5% handling fee 另计',
      '需要组织级上下文和治理时才更容易体现价值',
      '和 Copilot/Cursor 相比，个人开发者上手成本更高'
    ],
    bestFor: '企业隐私优先、合规要求严格的团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-08，Tabnine 官方 pricing 将 Code Assistant 标为 $39/用户/月（Annual subscription），Agentic Platform 标为 $59/用户/月，并强调私有部署、Context Engine、CLI、MCP 工具调用和合规能力；Tabnine-provided LLM access 另按实际 provider price + 5% handling fee 计。它更像企业 AI coding platform，而不是个人低价补全插件。',
      pitfalls: [
        '先确认合同价格、LLM access 计费和部署形态',
        '不要继续用旧的 Dev 低价档或免费版口径做采购预算'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['https://www.tabnine.com/pricing/', 'https://www.tabnine.com/'],
    decisionSummary: {
      verdict:
        '适合把隐私、合规、私有部署和组织上下文放在第一位的企业；个人低价补全不是当前公开 pricing 的主轴。',
      bestFor: '企业隐私优先、合规要求严格的团队',
      avoidIf: '个人开发者只想要低价、即时开通、强创意代码生成',
      mainRisk:
        '公开价格、annual subscription、quote/合同和 Tabnine-provided LLM access 附加计费需要分开核实，不能沿用旧 Dev/Enterprise 档位',
      alternatives: ['GitHub Copilot', 'Cursor', 'JetBrains AI Assistant']
    },
    swot: {
      S: '隐私、合规、私有部署、Context Engine',
      W: '个人入门成本不清晰',
      O: '企业 agentic 平台',
      T: 'Copilot/Cursor 生态压力'
    },
    tags: ['企业', '隐私', '合规', 'IDE', '私有部署']
  },

  // ============= 新增 AI CLI (1个) =============
  {
    id: 'warp',
    name: 'Warp',
    category: 'cli',
    subcategory: 'AI终端',
    developer: 'Warp',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0 / Build $20/月（年付 $18/月）/ Max $200/月 / Business $50/用户/月；Enterprise 定制',
        models:
          'Warp Agent + frontier OpenAI、Anthropic、Google models；Free 可 BYOK / custom endpoint / subscription',
        link: 'https://www.warp.dev/pricing'
      }
    ],
    freeQuota:
      'Free 包含现代终端核心能力和 BYOK；官方 docs 明确 Free plan 不含 Warp Agent bundled AI usage',
    contextWindow: '取决于模型',
    chineseSupport: 2,
    pros: [
      'Free 层保留现代终端、BYOK、有限 cloud agents access 和 Drive/协作能力',
      'Build $20/月含 1,500 credits per month for cloud and local agents',
      'Build 解锁完整 Warp Agent，并包含 OpenAI、Anthropic、Google 等 frontier models',
      'Max 提供 Build 的 12× included credits，Business $50/用户/月提供团队 usage metrics、data controls 和 SAML SSO',
      'Enterprise 支持 custom shared credit pools、advanced spend controls、Enterprise Analytics API 和 self-hosted cloud agents',
      'docs 将 BYOK、custom endpoint、SuperGrok/X Premium subscription 和 paid plans 区分清楚'
    ],
    cons: [
      'Free 不再等同内置 AI 请求配额，使用 Warp Agent 需要付费或自带推理',
      'credits 同时覆盖 cloud/local agents，重度使用要设置 reload 和 spend cap',
      '企业侧 pricing 和 shared credit pools 需要销售确认',
      '需要登录账号和联网能力，中文/CJK 输入体验仍建议实测'
    ],
    bestFor: '终端重度用户、DevOps 工程师、命令行学习',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Warp 官方 pricing 是 Free、Build、Max、Business、Enterprise，并用 credits 管理 cloud/local agents。Free 可 BYOK，但 docs 明确不含 Warp Agent bundled AI usage；如果要完整 Agent 能力，至少应按 Build $20/月、1,500 credits 和 reload/spend cap 估算。',
      pitfalls: [
        '不要再用旧请求数或旧档位口径预算',
        '先估算 Build credits 是否覆盖真实 cloud/local agent 用量'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.warp.dev/pricing',
      'https://docs.warp.dev/support-and-community/plans-and-billing/plans-pricing-refunds/'
    ],
    decisionSummary: {
      verdict:
        '适合把终端、Agent 和团队协作放到同一个工作台；真实成本要按 Build/Max/Business credits 或 BYOK 分开核算。',
      bestFor: '终端重度用户、DevOps 工程师、命令行学习',
      avoidIf: '你只想要完全本地、无需账号、无需 credits 管理的传统终端',
      mainRisk:
        'Free 不含 bundled AI usage，Build/Max/Business credits、add-on credits 和 BYOK/custom endpoint 口径不同，旧请求数口径会低估使用 Warp Agent 的真实成本',
      alternatives: ['Claude Code', 'Codex', 'Crush']
    },
    swot: {
      S: 'Agent 终端、BYOK、credits 透明度',
      W: '登录和 credits 管理门槛',
      O: 'DevOps/团队 agentic terminal',
      T: '传统终端和 CLI Agent 分流'
    },
    tags: ['CLI', '终端', 'BYOK', 'Credits', '团队协作']
  },

  // ============= 新增 LLM (4个) =============
  {
    id: 'llama',
    name: 'Llama 4 / Meta',
    category: 'llm',
    subcategory: '开源大模型',
    developer: 'Meta',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '权重可下载；推理成本取决于自托管、云服务和许可约束',
        models:
          'Llama 4 Scout (17B active / 109B total), Llama 4 Maverick (17B active / 400B total)',
        link: 'https://www.llama.com/models/llama-4/'
      }
    ],
    freeQuota: '权重可下载；自托管算力和托管 API 另行计费',
    contextWindow: 'Scout 10M / Maverick 1M（官方模型卡注明评估条件）',
    chineseSupport: 3,
    pros: [
      'Llama 4 Scout 和 Llama 4 Maverick 是官方当前 4 代主模型',
      '原生多模态输入，支持文本与图像理解',
      'Scout 官方标注 10M context，Maverick 标注 1M context',
      'MoE 架构每 token 17B active parameters，适合自部署和云部署评估',
      'Meta 官方博客说明 Scout/Maverick 已可在 llama.com 和 Hugging Face 下载，Behemoth 仍是 preview/teacher model 线索',
      '官方模型卡、prompt format 和下载入口完整'
    ],
    cons: [
      '不是 Apache/MIT 等无条件许可，商用和分发需遵守 Meta Llama 许可',
      '10M context 的官方脚注说明了特定评估条件，不能直接等同所有部署可用',
      '需要自行处理推理基础设施、量化、监控和安全护栏',
      '中文和本地生态体验通常不如国产平台开箱即用'
    ],
    bestFor: '本地部署、隐私优先、长上下文处理',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Meta 官方 Llama 4 页面、模型卡和 Meta AI 博客列出 Scout 与 Maverick：两者都是多模态 MoE 模型，Scout 标注 10M context，Maverick 标注 1M context；Behemoth 仍应作为 preview/teacher model 线索而非已发布主力。本站不再把它描述成无条件免费开源，而改为开放权重 + 自托管/云成本 + 许可约束的口径。',
      pitfalls: [
        '先核 Meta Llama 许可与使用场景',
        '长上下文能力要在目标部署上实测',
        '自托管需要预算 GPU、推理框架和安全评估'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.llama.com/models/llama-4/',
      'https://www.llama.com/docs/model-cards-and-prompt-formats/llama4/',
      'https://ai.meta.com/blog/llama-4-multimodal-intelligence/'
    ],
    decisionSummary: {
      verdict: '适合需要开放权重、自托管和长上下文实验的团队，成本和许可要单独评估。',
      bestFor: '隐私优先、本地推理、多模态长文档分析',
      avoidIf: '你需要无需运维的托管聊天产品或无许可限制的模型',
      mainRisk:
        '部署成本、许可边界、Behemoth preview 状态和长上下文实际效果都需要在目标环境里验证。',
      alternatives: ['Qwen', 'DeepSeek', 'Mistral / Le Chat']
    },
    swot: {
      S: '开放权重、多模态、长上下文',
      W: '自部署门槛和许可约束',
      O: '企业私有化和边缘推理',
      T: 'Qwen、DeepSeek、Mistral 开放模型竞争'
    },
    tags: ['开放权重', 'Meta', 'MoE', '长上下文', '本地', '已核验']
  },
  {
    id: 'mistral',
    name: 'Mistral / Le Chat',
    category: 'llm',
    subcategory: '通用大模型',
    developer: 'Mistral AI (法国)',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'API 按模型 token 计费；Large 3 官方模型卡列出 $0.5/M input、$1.5/M output',
        models: 'Mistral Medium 3.5, Mistral Small 4, Mistral Large 3, Ministral 3',
        link: 'https://docs.mistral.ai/models/overview'
      }
    ],
    freeQuota: '账号和 API tier 以 Mistral 控制台为准；生产用量按模型计费',
    contextWindow: 'Large 3 / Medium 3.5 / Small 4 / Ministral 3 最高 256K',
    chineseSupport: 3,
    pros: [
      '官方模型列表已包含 Mistral Medium 3.5、Small 4、Large 3 和 Ministral 3',
      'Mistral Large 3 是 open-weight general-purpose multimodal MoE 模型',
      'Ministral 3 系列面向更小规模和本地/边缘部署',
      '官方模型卡直接列出上下文、价格和端点能力',
      '欧洲供应商和自部署选项适合合规敏感团队评估'
    ],
    cons: [
      '不同模型的开放程度、价格和上下文不同，不能用单一订阅价概括',
      '中文生态、国内访问和第三方教程不如国产模型丰富',
      '复杂 Agent 工作流仍需与 OpenAI、Claude、Gemini、Qwen 实测比较'
    ],
    bestFor: '性价比优先、开源部署、欧洲合规场景',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Mistral 官方模型页的主线已经不只是 Large 3，还包括 Medium 3.5、Small 4、Devstral 2 和 Ministral 3；known limitations 仍提醒按具体模型能力和限制选型。本站改为 Mistral / Le Chat 生态口径：适合想在开放权重、欧洲合规和 API 成本之间找平衡的团队，但不要用未经验证的榜单或订阅价做采购判断。',
      pitfalls: [
        '按具体模型卡核上下文和价格',
        '中文/国内场景先做小样本评测',
        '开放权重不等于所有商业限制都消失'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://docs.mistral.ai/models/overview',
      'https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12',
      'https://docs.mistral.ai/resources/known-limitations'
    ],
    decisionSummary: {
      verdict: '适合欧洲合规、开放权重和 API 成本都要兼顾的团队，按具体模型而不是品牌做选择。',
      bestFor: '欧洲合规、多模态 API、自部署或边缘模型评估',
      avoidIf: '你需要中文生态优先或只想用一个通用托管聊天入口',
      mainRisk: '模型线更新快，采购前要逐项确认模型卡、价格、上下文和可用区域。',
      alternatives: ['Llama 4 / Meta', 'Qwen', 'Claude']
    },
    swot: {
      S: '开放权重、欧洲供应商、模型梯度完整',
      W: '中文生态相对弱',
      O: '合规市场和私有化部署',
      T: 'Llama、Qwen、DeepSeek、OpenAI'
    },
    tags: ['开放权重', '欧洲', 'MoE', 'API', '已核验']
  },
  {
    id: 'yi',
    name: 'Yi / 01.AI',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '零一万物 (01.AI)',
    logo: null,
    versions: [
      {
        type: '01.AI API Platform',
        pricing:
          '公开价格表未在文本页面核到；platform 仍展示 Billing / Payment，采购需登录账户确认',
        models: '托管 API 可用模型、上下文、限流和 SLA 需以当前 platform 为准',
        link: 'https://platform.01.ai/docs'
      },
      {
        type: 'Yi open-weight models',
        pricing: '官方 GitHub 写明代码和权重 Apache 2.0；不同分发路径仍需按具体 license/terms 核验',
        models: 'Yi-1.5、Yi-Coder、Yi-VL、Yi 6B/9B/34B 等可通过 01.AI、Hugging Face 和 GitHub 追踪',
        link: 'https://github.com/01-ai/Yi'
      },
      {
        type: 'NVIDIA API / Terms path',
        pricing:
          'Terms of Use 写明 limited trial purposes only，without use of Yi Model or Outputs in production；生产需额外许可确认',
        models: 'NVIDIA API trial path 与 01.AI platform / open weights 需要分开评估',
        link: 'https://platform.01.ai/termsPage.html'
      }
    ],
    freeQuota: '公开来源未核到稳定免费额度',
    contextWindow:
      'Yi-1.5 页面展示 4K/16K/32K，Yi-Coder 页面展示 128K；当前托管 API 可用上下文需以 platform/docs 为准',
    chineseSupport: 5,
    pros: [
      '01.AI 官网仍展示 WorldWise Enterprise LLM Platform、Yi-Lightning、Yi-Large 和 Yi Open-source 线索',
      'Yi Foundation Models 页面列出 Yi-1.5、Yi-Coder、Yi-VL 等模型线及 coding、math、reasoning 等方向',
      '官方 01-ai Hugging Face 组织和 01-ai/Yi GitHub 仍可追踪 Yi-Coder、Yi-1.5、Yi-VL 和 Yi 系列模型',
      '01-ai/Yi GitHub 写明代码和权重 Apache 2.0，可作为开放权重路径的核验来源',
      'platform 文档入口仍提供 Documentation、API Keys、Billing、Payment 和 Profile'
    ],
    cons: [
      '公开 API 文档页面信息很少，价格和最新托管模型能力需要登录 platform billing 确认',
      '用户协议要求账号注册、手机号绑定和 real-name authentication',
      '《使用条款》中的 NVIDIA API 服务路径写明仅限试用，不得在生产环境使用 Yi Model 或其输出',
      'Privacy Policy 说明会记录交互输入、评价、usage history、input and generated content',
      '开放权重、01.AI platform API、NVIDIA API trial 和企业 WorldWise 授权需要分开评估'
    ],
    bestFor: '跟踪 01.AI 企业 Agent、Yi 开放模型和中文场景备选',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-08，01.AI 官网可确认 Yi-Lightning、Yi Open-source 和 WorldWise 企业方向仍在展示；Yi Foundation Models、Hugging Face 与 GitHub 能核验开放模型线，platform 入口能核验 Billing / Payment 等账号路径。公开资料仍不足以给出 API 价格、托管模型 SLA 或生产采购结论。',
      pitfalls: [
        '价格和额度要登录 platform billing 确认',
        '分清开放权重、01.AI platform API、NVIDIA API trial 和企业 WorldWise 授权',
        '不要沿用旧 benchmark、速度或无限制许可数字'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.01.ai/',
      'https://www.01.ai/yi-models',
      'https://www.01.ai/yi-license',
      'https://platform.01.ai/docs',
      'https://huggingface.co/01-ai',
      'https://github.com/01-ai/Yi',
      'https://platform.01.ai/useragreement',
      'https://platform.01.ai/termsPage.html',
      'https://platform.01.ai/privacypolicy'
    ],
    decisionSummary: {
      verdict:
        '已核验为活跃的 01.AI/Yi 生态条目，但公开资料仍不足以直接支撑 API 价格、SLA 或采购结论。',
      bestFor: '需要跟踪 Yi 开放模型、企业 Agent 和中文模型备选的团队',
      avoidIf: '你需要立即可核验的 API 价格、额度和稳定模型 SLA',
      mainRisk:
        '开放权重、01.AI platform API、NVIDIA API trial 与企业 WorldWise 授权边界不同；Billing/Payment、real-name authentication、limited trial purposes only 和输入/生成内容记录都需要账户内和协议层面确认。',
      alternatives: ['Qwen', 'DeepSeek', 'ERNIE / 百度千帆']
    },
    swot: {
      S: 'Yi 模型线、开放权重和企业平台仍可追踪',
      W: '公开 API 价格和托管 SLA 不足',
      O: '可继续观察企业 Agent 和中文场景',
      T: 'Qwen、DeepSeek、百度千帆竞争'
    },
    tags: ['国产', 'Yi', '企业', '中文', '开放权重', '已核验']
  },
  {
    id: 'ernie',
    name: 'ERNIE / 百度千帆',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '百度',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing: 'ERNIE 5.1：按当前千帆计费页和订单页核算；ERNIE 5.0 仍在模型列表与价格页中',
        models: 'ERNIE 5.1, ERNIE 5.0, ERNIE 5.0 Thinking',
        link: 'https://cloud.baidu.com/product-s/qianfan_home'
      },
      {
        type: 'CN',
        pricing: 'ERNIE 4.5 Turbo 128K：输入 ¥0.0008/千tokens，输出 ¥0.0032/千tokens',
        models: 'ERNIE 4.5 Turbo, ERNIE 4.5 Turbo VL, ERNIE X1.1 Preview',
        link: 'https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya'
      }
    ],
    freeQuota: '消费者入口和千帆 API 分开核算；API 以千帆价格页和控制台为准',
    contextWindow: 'ERNIE 5.1 / 5.0 / 4.5 Turbo 128K；ERNIE X1.1 Preview 64K',
    chineseSupport: 5,
    pros: [
      '百度千帆官方模型列表已列出 ERNIE 5.1、ERNIE 5.0、ERNIE 4.5 Turbo 和 ERNIE X1.1 Preview',
      '千帆首页定位为以 Agent 为核心的一站式企业级大模型服务平台，包含多智能体协同Agent、自主规划Agent、工作流Agent、知识库RAG 和全链路可观测',
      '千帆模型列表提供接入点、上下文、最大输入输出和默认流控',
      '价格页列出按量推理和预付费资源包口径',
      '首页同时可见 DeepSeek-V4 预览版 API 服务入口，说明千帆还承载第三方模型服务',
      '中文搜索、百度云和企业应用生态衔接强',
      'ERNIE 4.5 Turbo 128K 的 API 价格和上下文信息可被官方文档核验'
    ],
    cons: [
      '消费者文心入口和千帆 API 是不同路径，不能混用免费结论',
      '海外访问、企业合规和账号体系要单独确认',
      '与 DeepSeek/Qwen/OpenAI 的效果对比应按任务实测，不宜用单一榜单判断'
    ],
    bestFor: '中文场景、百度生态用户、预算敏感',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，百度千帆官方页面已列出 ERNIE 5.1、ERNIE 5.0、ERNIE-5.0-Thinking-Preview、ERNIE 4.5 Turbo、ERNIE 4.5 Turbo VL 和 ERNIE X1.1 Preview，并给出 API 接入点、上下文和价格。千帆首页现在更强调以 Agent 为核心的一站式企业级大模型服务平台，本站去掉消费者端永久免费和对标 GPT 的强结论，改为百度千帆 API/Agent 平台选型口径。',
      pitfalls: [
        '按 API/消费者入口分别核算费用',
        '中文任务先做自有数据评测',
        '海外或跨境业务要确认访问与合规'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://cloud.baidu.com/product-s/qianfan_home',
      'https://cloud.baidu.com/doc/qianfan-docs/s/7m95lyy43',
      'https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j',
      'https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya'
    ],
    decisionSummary: {
      verdict: '适合百度云和中文企业场景，API 价格、模型和上下文已有官方千帆文档可查。',
      bestFor: '百度生态、中文搜索增强、企业 API 接入',
      avoidIf: '你需要全球化开发者生态或开源自托管模型',
      mainRisk:
        '消费者入口、千帆 API、Agent 平台、第三方模型服务和资源包价格要分开核算，不能用单一免费结论覆盖。',
      alternatives: ['Qwen', 'DeepSeek', 'Hunyuan']
    },
    swot: {
      S: '中文和百度云生态强',
      W: '全球生态较弱',
      O: '国内企业 API 和搜索增强',
      T: 'Qwen、DeepSeek、OpenAI 竞争'
    },
    tags: ['国产', '中文', '百度', '千帆', '已核验']
  },

  // ============= 新增多模态 (7个) =============
  {
    id: 'flux',
    name: 'FLUX',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Black Forest Labs',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'BFL API 按 credits/像素计费，1 credit = $0.01 USD；FLUX.2 [klein] 4B text-to-image from $0.014',
        models: 'FLUX.2 [klein]/[pro]/[max]/[flex], FLUX.1 [schnell]/[dev]/[pro], FLUX MCP',
        link: 'https://bfl.ai/pricing'
      }
    ],
    freeQuota:
      'FLUX.1 [schnell] 与 FLUX.2 [klein] 4B 提供 Apache 2.0（Apache2.0）路线；FLUX.2 [klein] 9B 使用 FLUX NCL，BFL API 采用 1 credit = $0.01 USD 的按图计费',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'FLUX.2 是当前推荐模型家族，覆盖 [klein]/[pro]/[max]/[flex] 多档',
      '官方文档明确 FLUX.2 支持 multi-reference editing、color control 和 up to 4MP output',
      'FLUX.2 [klein] 覆盖 4B Apache 2.0 与 9B FLUX NCL 权重路线，FLUX.1 [schnell] 仍适合本地开发与个人探索',
      '官方页面已把 FLUX MCP 放进开发者入口，适合把图像能力接入 Claude Desktop、Cursor 等 MCP host',
      'API 与 Playground 使用 credit-based pricing，便于按图估算',
      'Open Weights Licensing 覆盖 Builder、Platform、Professional、Enterprise 等路径'
    ],
    cons: [
      'FLUX.2 [dev] 文档标注为 local only / non-commercial，需要区分用途',
      '高质量或商用部署要看 API、Open Weights Licensing 或企业条款',
      'FLUX.2 [flex]、实验端点和 MCP 工具链仍可能有 beta/preview 风险',
      '本地运行仍依赖 GPU/显存和工作流配置',
      '中文提示词、字体和商业交付需要实测'
    ],
    bestFor: '开源/开放权重图像工作流、API 图像生成、本地 ComfyUI 探索',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-07，Black Forest Labs 官方文档把 FLUX.2 作为推荐模型家族：FLUX.2 [klein] 面向实时/高量，[pro] 面向生产，[flex] 面向精细控制，[max] 面向最高质量。价格页和 API 文档都强调按生成计费，FLUX MCP 与开放权重路线也要按授权和 host 权限单独评估。',
      pitfalls: [
        '先区分 API、Playground、本地权重和商业授权路径',
        'FLUX.2 [dev] 的 non-commercial 限制要在商用前核对',
        '本地部署要单独评估显存、速度和工作流维护成本'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://bfl.ai/pricing',
      'https://docs.bfl.ai/quick_start/pricing',
      'https://docs.bfl.ai/flux_2/flux2_overview',
      'https://bfl.ai/blog/24-08-01-bfl'
    ],
    decisionSummary: {
      verdict:
        '适合需要本地开放权重或可控 API 图像生成的团队，但要按 FLUX.2 计费、授权和硬件路径分开评估。',
      bestFor: '开源/开放权重图像工作流、API 图像生成、本地 ComfyUI 探索',
      avoidIf: '你需要完全托管的一体化设计产品，或商用授权/数据权利无法接受额外核对',
      mainRisk:
        '“开源模型”和“商用可用”不是同一件事，FLUX.2 API、FLUX.2 [klein] 4B/9B、FLUX.2 [dev]、FLUX MCP 与 Open Weights Licensing 需要分开看',
      alternatives: ['Midjourney', 'Stable Diffusion', 'GPT Image / ChatGPT Images']
    },
    swot: {
      S: 'FLUX.2 模型族、API 和开放权重路径清晰',
      W: '授权与硬件路径复杂',
      O: '本地和企业图像工作流',
      T: '竞争压力来自 Midjourney、OpenAI Images 和 Stable Diffusion'
    },
    tags: ['推荐', '开源', '免费', '图像', '本地', 'ComfyUI']
  },
  {
    id: 'runway',
    name: 'Runway Gen-4.5',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'Runway',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free 一次性 125 credits；Standard $15/月或$12/月年付、Pro $35/$28、Max $95/$76、Enterprise 定制；API credits $0.01/credit',
        models: 'Gen-4.5, Gen-4 Turbo, Aleph 2.0, Seedance 2.0, Veo 3.1 and Runway API models',
        link: 'https://runwayml.com/pricing'
      }
    ],
    freeQuota:
      'Free plan 一次性 125 credits，不会刷新；生产用量需按付费计划、API credits 或 Max 计划估算',
    contextWindow: 'N/A',
    chineseSupport: 2,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://runwayml.com/pricing',
      'https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5',
      'https://docs.dev.runwayml.com/guides/pricing/',
      'https://docs.dev.runwayml.com/api-details/api_changelog/',
      'https://help.runwayml.com/hc/en-us/articles/18053095835795-Unlimited-plan-details'
    ],
    pros: [
      '官方 pricing 页显示 Free、Standard、Pro、Max、Enterprise，并把 Gen-4.5 秒数换算进 credits',
      'Gen-4.5 帮助文档标注 Standard 及以上可用、12 credits per second、支持 2-10 秒输出',
      'Free plan 提供一次性 125 credits，适合试用但不适合作为持续免费层',
      'Runway API 单独通过 developer portal 购买 credits，官方 API pricing 标注 $0.01/credit',
      '适合高质量广告片、产品镜头、影视预览和动态图形工作流',
      'Max 正在替代旧 Unlimited 作为高产量计划，旧订阅迁移日期需要团队留意'
    ],
    cons: [
      '免费 credits 不刷新，试完就需要升级或补充计划',
      'Gen-4.5、Aleph、Seedance、Veo、API endpoints 的 credit rate 不同，短片成本会随模型和时长快速上升',
      'Web app credits、API credits、Max/旧 Unlimited 计划不是同一个简单额度池',
      '中文提示、人物一致性和品牌安全仍要人工评测'
    ],
    bestFor: '专业视频创作、影视级内容生成',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Runway pricing 页显示 Free 一次性 125 credits、Standard/Pro/Max/Enterprise 计划，并明确 Gen-4.5 约 60 credits/5s；Gen-4.5 帮助文档标注 12 credits per second。Runway API 另按 developer portal credits 计费，$0.01/credit，不能和 Web app 计划混算。',
      pitfalls: [
        '按 seconds * credits rate 估算每条视频成本',
        'Free plan 不会刷新 credits',
        'Web app credits、API credits 和旧 Unlimited/Max 迁移要分开核算'
      ]
    },
    decisionSummary: {
      verdict:
        '适合专业视频生成和团队创作，但要按 Gen-4.5 credits per second、Web/API credits 和 Max/Enterprise 计划分别估算成本。',
      bestFor: '广告片、产品视频、影视预览、动态图形、团队视频工作流',
      avoidIf: '你需要长期免费生成，或预算无法承受按秒扣 credits 的视频模型',
      mainRisk:
        'Free 125 credits 是一次性试用，Gen-4.5 以 12 credits per second 计费，API credits 与 Web app 计划分离，旧 Unlimited 正在向 Max 迁移。',
      alternatives: ['Sora', '可灵 (Kling)', 'Luma Dream Machine']
    },
    swot: {
      S: '专业视频工作流和 API',
      W: 'Web/API credits 与计划迁移复杂',
      O: '品牌和影视生产',
      T: 'Sora、Kling、Luma'
    },
    tags: ['视频', '专业', 'Gen-4.5', 'API', '已核验']
  },
  {
    id: 'pika',
    name: 'Pika',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'Pika Labs',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Basic $0；Standard $8/月、Pro $28/月、Fancy $76/月（年付口径）；Basic 80、Standard 700、Pro 2,300、Fancy 6,000 monthly video credits',
        models: 'Pika 2.5, Pikascenes, Pikadditions, Pikaswaps, Pikatwists, Pikaffects',
        link: 'https://pika.art/pricing'
      }
    ],
    freeQuota:
      'Basic/Free $0 展示 80 monthly video credits；Standard 700、Pro 2,300、Fancy 6,000；不同功能按 10/20/60/80 credits per video 等规则消耗',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '官方 pricing 明确 Pika 2.5 与 Pikascenes、Pikadditions、Pikaswaps、Pikatwists、Pikaffects 等功能',
      'Basic $0、Standard $8、Pro $28、Fancy $76 按 monthly video credits 分档',
      'Standard 700、Pro 2,300、Fancy 6,000 monthly video credits，适合按短视频批量估算预算',
      'Pika API 官方页面指向 Fal.ai，API 集成要按 Fal.ai 入口另行核算',
      '商业使用、无水印下载和 roll over credits 随计划开放',
      '适合短视频创意效果、图片转视频和社媒素材试验',
      '入门计划价格低于多数专业视频生成平台'
    ],
    cons: [
      '不同功能、模型和分辨率的 credit 消耗差异较大',
      'Free/Basic 只适合轻量试用或 480p 路径',
      '正式商用需确认计划、水印、商业使用和素材权利',
      'API 页面指向 Fal.ai，并非单独公开完整 Pika 自营 API 价格页',
      '长片段、稳定角色和精细镜头控制仍需和 Runway/Sora/Luma 对比实测'
    ],
    bestFor: '社交媒体内容、创意短视频、AI 视频入门',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Pika 官方 pricing 页显示 Basic $0/80 monthly video credits、Standard $8/700、Pro $28/2,300、Fancy $76/6,000（年付口径），并列出 Pika 2.5、Pikascenes、Pikadditions、Pikaswaps、Pikatwists 和 Pikaffects 的 credit 消耗。API 页面把 Pika 视频模型入口指向 Fal.ai，采购判断要把 Web 订阅和 API 路径分开。',
      pitfalls: [
        '先按目标功能估算每条视频 credits',
        'Basic $0 分辨率和功能范围有限',
        'API 集成要确认 Fal.ai 入口的计费、速率和服务条款',
        '商业内容要确认计划权益和下载水印'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['https://pika.art/pricing', 'https://pika.art/', 'https://pika.art/api'],
    decisionSummary: {
      verdict:
        '适合短视频创意效果和轻量试验；预算估算要按 monthly video credits 与单功能消耗来算。',
      bestFor: '社交媒体内容、创意短视频、AI 视频入门',
      avoidIf: '你需要长片、强叙事连续性、稳定商业级镜头控制，或不想处理 credits 明细',
      mainRisk:
        'Pika 订阅档位和 API 入口容易混算；Pikascenes/Pikadditions/Pikatwists 等功能的 credits 消耗、分辨率限制和 Fal.ai API 路径会影响真实成本',
      alternatives: ['Runway', 'Sora', 'Luma Dream Machine']
    },
    swot: {
      S: '入门价格低、创意功能多',
      W: 'credits 口径复杂',
      O: '社媒短视频和创意营销',
      T: 'Runway、Sora、Luma'
    },
    tags: ['视频', '性价比', '创意', '社交媒体']
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: 'Ideogram',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free 每周 10 积分；Plus 每月 20 美元；Pro 每月 60 美元；Team 按成员计费；API 4.0 Turbo 每张图 0.03 美元起',
        models: 'Ideogram 4.0 plus web app, API, MCP, and open-weight routes',
        link: 'https://ideogram.ai'
      }
    ],
    freeQuota:
      '免费计划每周含 10 积分；付费计划的优先积分和慢速积分额度因套餐而异',
    contextWindow: 'N/A',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://ideogram.ai/',
      'https://docs.ideogram.ai/plans-and-pricing/available-plans',
      'https://docs.ideogram.ai/plans-and-pricing/ideogram-api',
      'https://docs.ideogram.ai/frequently-asked-questions',
      'https://ideogram.ai/api-pricing/',
      'https://developer.ideogram.ai/'
    ],
    pros: [
      'Ideogram 4.0 是当前公开定位中的旗舰图像生成与编辑能力',
      '计划包含 Free Plan、Plus Plan、Pro Plan 和 Team Plan，Basic 计划已被描述为 legacy',
      '官方文档标注 Plus Plan 为 $20/月、Pro Plan 为 $60/月，并区分 Priority credits 与 slow credits',
      'API pricing 页列出 Ideogram 4.0 Turbo $0.03/image、Default $0.06/image、Quality $0.10/image',
      'Generate w/ Gemini API pricing 单列 1K/2K $0.20/image、4K $0.36/image',
      'API、MCP 和开发者入口支持 key 访问、credits 计费和自动充值设置，便于生产接入',
      'FAQ 表示在遵守条款与政策边界的前提下，Ideogram 不限制用户对输出内容的权利'
    ],
    cons: [
      'Free Plan 只有 10 credits/周，真实使用通常需要付费计划或 API 余额',
      'Priority credits、slow credits、月度过期和自动充值行为都需要预算控制',
      'API 余额、MCP/开发者入口与网页订阅 credits 需要分开预算',
      '输出权利仍取决于 Ideogram 条款、输入素材权利和下游平台规则'
    ],
    bestFor: '含文字的图像设计、Logo、海报、社交媒体配图',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Ideogram 应围绕 Ideogram 4.0、当前计划梯度、API pricing 和 MCP/开发者入口来介绍。它仍然是文字密集型图像任务的强候选，但比较重点应放在 credits、自动充值、API 单图价格和输出权利政策，而不是旧低价层级。',
      pitfalls: [
        '分开跟踪 Priority credits 与 slow credits',
        '只有配置支出提醒后再开启自动充值',
        '确认任务应放在网页端、API 还是 MCP/开发者入口'
      ]
    },
    decisionSummary: {
      verdict:
        '适合文字排版型视觉和品牌 mockup 的强图像生成工具，当前价值应优先看 Plus、Pro、Team、API 和 MCP 路线。',
      bestFor: 'Logo、海报、社交图、图中文字实验，以及已配置 credit 控制的 API/MCP 图像生成',
      avoidIf: '你需要无限生成、固定且不过期的 credits，或没有充值和政策控制的生产 API 使用',
      mainRisk:
        'Free Plan、Priority credits、slow credits、API 单图价格、MCP/开发者入口和自动充值设置混在一起，容易造成预算误判。',
      alternatives: ['Midjourney', 'GPT Image / ChatGPT Images', 'Adobe Firefly']
    },
    swot: {
      S: '文字渲染强，多入口可用',
      W: 'credits 与充值规则复杂',
      O: '品牌、海报和社交设计工作流',
      T: '竞争压力来自 Midjourney、OpenAI Images 和 Adobe Firefly'
    },
    tags: ['图像', '文字渲染', '设计', 'Logo', 'Ideogram 4.0', '已核验']
  },
  {
    id: 'jimeng',
    name: '即梦 (Jimeng)',
    category: 'multimodal',
    subcategory: '图像生成',
    developer: '字节跳动',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing:
          '消费者端以积分/会员页和订单结算页价格为准；API：图片生成3.0系列约 0.2 元/张，4.0/4.6 约 0.22 元/张，视频生成3.0 Pro 约 1 元/秒',
        models: '即梦AI 图片生成4.0/4.6、视频生成3.0 Pro/3.0、Seedance 2.0 等',
        link: 'https://jimeng.jianying.com'
      }
    ],
    freeQuota:
      '免费、会员赠送积分和充值积分规则会变化；官方协议要求以产品页、积分/会员页和订单结算页价格为准',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '官网定位是一站式智能创作平台，覆盖 AI 绘画和 AIGC 视频',
      '火山引擎文档列出图片生成4.0、图片生成4.6、视频生成3.0 Pro、视频生成3.0 等 API 能力',
      '火山引擎 API 价格口径可拆到图片 0.2/0.22 元每张、视频 3.0 Pro 1 元/秒、1080p 0.63 元/秒、720p 0.28 元/秒',
      '付费服务协议明确积分可用于图片生成、视频生成、数字人等平台功能',
      '消费者端和 API 端入口都比较完整，适合国内中文创作链路评估',
      '剪映/抖音账号体系对国内内容生产者上手友好'
    ],
    cons: [
      '消费者端价格、会员权益和积分消耗以实际购买页面为准，公开静态页不适合写死价格',
      '积分类型有效期不同，会员赠送积分、每日赠送积分和充值积分要分开看',
      'API 计费与 App/网页会员不是同一个口径',
      '海外访问、账号体系和商用权益需要单独确认'
    ],
    bestFor: '中文图像/视频创作、国潮设计、社交媒体内容',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，可官方确认的是即梦AI官网的一站式创作定位、火山引擎的即梦AI图片/视频 API 文档，以及付费服务协议中的积分/会员规则。页面不再写死第三方整理的消费者会员价或每日积分数；API 预算则按图片 0.2/0.22 元每张、视频 3.0 Pro 1 元/秒、1080p 0.63 元/秒、720p 0.28 元/秒这类火山引擎计费口径估算。',
      pitfalls: [
        '消费者端会员价和权益以订单结算页价格为准',
        'API 计费与 App/网页积分体系分开核算',
        '商用输出、水印和素材权利要在实际入口确认'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://jimeng.jianying.com/',
      'https://www.volcengine.com/docs/85621/1544714?lang=zh',
      'https://www.volcengine.com/docs/85621/1544715?lang=zh',
      'https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/dreamina/b966ce40-d931-4397-8def-38fe5d03c729.html'
    ],
    decisionSummary: {
      verdict:
        '适合国内中文图像/视频创作链路，但消费者会员、积分和 API 计费必须按当前入口分别核算。',
      bestFor: '中文图像/视频创作、国潮设计、社交媒体内容',
      avoidIf: '你需要海外团队无障碍协作、透明固定 API 价格，或必须提前锁定长期不变的会员权益',
      mainRisk:
        '会员价、积分消耗和火山引擎 API 计费入口不同；图片按张、视频按秒计费，协议也明确实际价格以产品页和订单结算页为准',
      alternatives: ['Midjourney', 'GPT Image / ChatGPT Images', '可灵 (Kling)']
    },
    swot: {
      S: '国内中文创作和视频 API 入口完整',
      W: '价格/积分口径需进产品内确认',
      O: '中文短视频和电商内容',
      T: 'Midjourney、OpenAI Images、Kling'
    },
    tags: ['推荐', '国产', '免费', '图像', '中文', '字节']
  },
  {
    id: 'suno',
    name: 'Suno',
    category: 'multimodal',
    subcategory: '音乐生成',
    developer: 'Suno',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Free $0 / Pro $10月付或$8/月年付 / Premier $30月付或$24/月年付',
        models: 'Free: v4.5-all；Pro/Premier: v5.5 + Suno Studio / advanced editing',
        link: 'https://suno.com/pricing'
      }
    ],
    freeQuota:
      'Free plan 50 credits 每日刷新，约 10 songs per day；Free/Basic 生成歌曲仅限个人非商业用途',
    contextWindow: 'N/A',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://suno.com/pricing',
      'https://help.suno.com/en/articles/2746945',
      'https://help.suno.com/en/articles/2416769',
      'https://suno.com/terms-of-service',
      'https://suno.com/community-guidelines'
    ],
    pros: [
      '官方 pricing 将 Free、Pro、Premier 分层展示，Pro/Premier 年付分别折算 $8/$24 每月',
      'Free plan 提供 50 credits 每日刷新，官方页面说明约 10 songs per day',
      'Pro/Premier 分别提供 2,500 / 10,000 monthly credits，适合按歌曲数量估算',
      '付费计划包含订阅期间新歌商业使用权，适合内容创作和营销配乐',
      'Suno Studio、stem separation、audio upload 等高级功能逐步集中在付费层'
    ],
    cons: [
      'Free/Basic plan 适合试用，但官方帮助页写明 Suno 保留生成歌曲所有权且仅允许非商业用途',
      'credits、歌曲数量、commercial use rights 和高级编辑能力随计划变化',
      '音乐版权、声音相似性和训练数据争议仍需要项目级法务判断',
      '中文歌词和风格稳定性仍要多轮试听和人工筛选'
    ],
    bestFor: '快速音乐创作、内容配乐、音乐灵感',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，Suno 官方 pricing 显示 Free $0、Pro $10 月付或 $8/月年付、Premier $30 月付或 $24/月年付；Free 使用 v4.5-all 且每日 50 credits，付费档使用 v5.5 并给新歌商业使用权。官方帮助页同时说明 Free/Basic 生成歌曲只可非商业使用。',
      pitfalls: [
        '商业用途优先确认是否来自付费计划',
        '按 monthly credits 和歌曲数量估算产能',
        '版权和相似性风险仍要人工审核'
      ]
    },
    decisionSummary: {
      verdict: '适合快速生成带人声的音乐草案和内容配乐，商用时要按付费计划与版权风险管理。',
      bestFor: '短视频配乐、广告 demo、音乐灵感、社媒内容',
      avoidIf: '你需要可证明的原创版权链、复杂编曲可控性，或完全免费的商业使用权',
      mainRisk:
        'Free credits、Free/Basic 非商业限制、paid commercial use rights、v5.5 模型能力和版权风险不能混为一个“可商用免费”结论。',
      alternatives: ['Udio', 'ElevenLabs', 'Luma Dream Machine']
    },
    swot: {
      S: 'v5.5 和快速成歌',
      W: '商用和版权风险',
      O: '短视频和广告配乐',
      T: 'Udio 与版权治理'
    },
    tags: ['音乐', '人声', 'v5.5', '版权风险', '已核验']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'multimodal',
    subcategory: '语音合成',
    developer: 'ElevenLabs',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0 / Starter $6 / Creator $22 / Pro $99 / Scale $299 / Business $990 / Enterprise 定制',
        models: 'Eleven v3, Multilingual v2, Flash v2.5, Scribe v2 / Scribe v2 Realtime',
        link: 'https://elevenlabs.io/pricing'
      }
    ],
    freeQuota: 'Free plan 10,000 credits；免费层不含 commercial license，公开发布需按官方政策署名',
    contextWindow: 'N/A',
    chineseSupport: 4,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://elevenlabs.io/docs/overview/models',
      'https://elevenlabs.io/docs/changelog/2026/6/8',
      'https://elevenlabs.io/docs/changelog',
      'https://elevenlabs.io/pricing',
      'https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform'
    ],
    pros: [
      'Eleven v3 是官方当前最先进语音合成模型，强调自然、多语言和高情绪表达',
      'Multilingual v2 适合稳定长文本，Flash v2.5 面向低延迟和更低 API 成本',
      '官方模型页和 2026-06-08 changelog 已标注 scribe_v1、eleven_monolingual_v1、eleven_multilingual_v1 于 2026-07-09 移除',
      'pricing 页列出 Free 10,000 credits 以及 Starter/Creator/Pro/Scale/Business 等计划',
      '付费计划包含 commercial license，适合旁白、播客、有声书和产品语音',
      'API、Studio、Dubbing、Agents 等能力共享 credits 或按专门价格计费，需要分场景核算'
    ],
    cons: [
      'Free plan 不包含 commercial license，不能直接用于商业发布',
      '旧 TTS v1 与 Scribe v1 已过 2026-07-09 移除日期，历史集成必须确认迁移完成',
      'credits 与 API 美元计费、Agents call minutes 等口径并不完全相同',
      'v3、Multilingual v2、Flash v2.5 在质量、延迟、语言覆盖和字符限制上取舍不同',
      '语音克隆、肖像声纹和授权素材需要额外合规审查'
    ],
    bestFor: '专业配音、有声读物、视频旁白、多语言内容',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-12，ElevenLabs 官方模型文档列出 Eleven v3、Multilingual v2、Flash v2.5 以及 Scribe v2 路线；2026-06-08 changelog 明确 scribe_v1、eleven_monolingual_v1、eleven_multilingual_v1 于 2026-07-09 移除。pricing 页显示 Free 10,000 credits，且 free plan 不含 commercial license。',
      pitfalls: [
        'Free plan 不可直接商用',
        '旧 v1 / Scribe v1 集成应确认已完成迁移',
        'API、Studio、Agents 的计费口径要分开',
        '语音克隆和声纹授权需合规审查'
      ]
    },
    decisionSummary: {
      verdict: '适合专业配音、多语言旁白和语音产品原型，商用必须进入付费授权和 credits 成本核算。',
      bestFor: '有声书、视频旁白、产品语音、多语言配音、语音 Agent',
      avoidIf: '你只想用免费层做商业素材，或需要完全离线的声纹/数据控制',
      mainRisk:
        'Free 10,000 credits 不含 commercial license；旧 scribe_v1、eleven_monolingual_v1、eleven_multilingual_v1 将于 2026-07-09 移除，且 TTS/API/Agents/Studio 的计费口径不同。',
      alternatives: ['Suno', 'Udio', '开源 TTS']
    },
    swot: {
      S: 'Eleven v3 和多语言语音',
      W: '商用授权与计费复杂',
      O: '语音产品和内容生产',
      T: '开源 TTS 与平台内置语音'
    },
    tags: ['语音', '配音', '多语言', 'commercial license', '已核验']
  },

  // ============= 新增 Agent 平台 (6个) =============
  {
    id: 'manus',
    name: 'Manus',
    category: 'agent',
    subcategory: '自主Agent',
    developer: 'Manus / Meta',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0；Pro from $20/month，另有 $40/month 起含 7-day free trial 的更高 Pro 档；Team from $20 per seat/month；更高额度按计划升级或 add-on credits',
        models: 'Chat Mode, Manus 1.6 Lite / Manus 1.6 / Manus 1.6 Max Agent Mode',
        link: 'https://manus.im/pricing'
      }
    ],
    freeQuota:
      'Free：300 credits daily，支持 1 个并发任务；Pro 从 4,000 credits per month 起，更高 Pro 档从 8,000 credits per month 起；Team plan 共享团队 credits',
    contextWindow: '取决于模型',
    chineseSupport: 4,
    pros: [
      '官网明确 Manus is now part of Meta，并提供 Web app、AI slides、AI image generator、AI music generator、Wide Research、Slack integration 等入口',
      'Free/Pro/Team 计划和 credits 口径已在帮助中心公开',
      'Free 仅可在 Agent Mode 使用 Manus 1.6 Lite，Pro 计划可用 Manus 1.6 Max / 1.6 / 1.6 Lite Agent Mode',
      '$20 起 Pro 档从 4,000 monthly credits 起，$40 起 Pro 档从 8,000 monthly credits 起并标注 7-day free trial',
      'Team plan 支持共享 credit pool、SSO 和 Data Training Opt-Out',
      'credits 与任务复杂度相关，仪表盘可在任务前估算消耗'
    ],
    cons: [
      '复杂或长任务消耗更多 credits，不能按“免费 Agent”估算成本',
      'Plan credits 每月重置，add-on credits 才不会过期',
      '团队隐私、SSO、共享 deliverables 和数据训练 opt-out 需要看 Team/Enterprise 权益',
      '实际可完成任务质量仍需按具体工作流试跑'
    ],
    bestFor: '自动化调研、幻灯片/网页/内容生成、团队级 AI 工作流探索',
    funRanking: '夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-07，Manus 官网已显示其属于 Meta，并公开 Free、Pro、Team 的 credits 与并发任务口径。帮助中心把 Free 写成每日 300 credits、1 个并发任务；Pro 有 $20 起 4,000 monthly credits 和 $40 起 8,000 monthly credits 两类入口。页面不再保留未经官方来源支持的交易金额、收入和媒体评价，选型重点改为 credits、团队隐私和任务可交付性。',
      pitfalls: [
        '先用低风险任务估算 credit 消耗',
        '团队使用前确认 Data Training Opt-Out、SSO 和共享权限',
        '复杂任务仍要人工审查中间结果'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://manus.im/',
      'https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus',
      'https://manus.im/help/credits',
      'https://manus.im/docs/introduction/plans'
    ],
    decisionSummary: {
      verdict:
        '适合试做调研、网页、幻灯片和轻量 Agent 工作流；正式采用前要按 credits、隐私和交付质量试跑。',
      bestFor: '自动化调研、幻灯片/网页/内容生成、团队级 AI 工作流探索',
      avoidIf: '你需要可预测的固定成本、严格本地化执行，或对团队数据训练与共享策略不能接受额外配置',
      mainRisk:
        'credits 会随任务复杂度、LLM tokens、虚拟机和第三方 API 增加，Plan credits 月度重置，add-on credits 才不失效，Team/Enterprise 才提供更完整团队治理',
      alternatives: ['Devin', 'n8n', 'OpenAI Agents SDK']
    },
    swot: {
      S: 'Meta 背书、Agent 工作台和团队计划',
      W: 'credits 与复杂任务成本不易预估',
      O: '企业 AI 工作流和内容自动化',
      T: 'Devin、Replit、n8n 等 Agent 平台'
    },
    tags: ['Agent', '自主', 'Meta', '调研', 'Credits']
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    category: 'agent',
    subcategory: '多Agent框架',
    developer: 'CrewAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Basic Free；Enterprise Custom；Basic 含 50 workflow executions/month',
        models: 'CrewAI OSS, Crews, Flows, Crew Control Plane / AMP Suite',
        link: 'https://crewai.com/pricing'
      }
    ],
    freeQuota: 'Basic Free：50 workflow executions/month；开源框架本地运行成本取决于所接 LLM/API',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      '官方文档定位为设计 agents、编排 crews、自动化 flows，并内置 guardrails、memory、knowledge、observability',
      'GitHub 项目是 open-source Python framework，支持 Crews 与 Flows 两套抽象',
      'Pricing 页将商业计划简化为 Basic Free 与 Enterprise Custom',
      'Basic Free 提供 Visual editor、AI copilot、GitHub integration 和 50 workflow executions/month',
      '官网称已被 63% of the Fortune 500 使用，适合把它视为企业化控制平面与开源框架组合',
      '开源页强调 MCP、A2A、checkpointing、async/await、tools、knowledge 和 LLM 调用'
    ],
    cons: [
      'Basic 的 50 workflow executions/month 更适合原型，不适合高频生产',
      '开源框架成本主要来自所接 LLM、工具和部署基础设施',
      'Enterprise Custom 才覆盖 private infrastructure、客户基础设施、现场支持和更完整治理',
      '多 Agent 编排调试复杂，仍需观测和测试纪律'
    ],
    bestFor: '多 Agent 工作流编排、AI 自动化任务',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，CrewAI 应按“开源 Python 编排框架 + 商业控制平面”理解。官方 pricing 当前突出 Basic Free 与 Enterprise Custom，不再沿用旧的固定月费/年费档描述；企业页强调 private infrastructure 与 63% of the Fortune 500。适合会写代码、需要 Crews/Flows 和观测治理的团队。',
      pitfalls: [
        '把开源框架成本和 CrewAI 云端 workflow executions 分开算',
        '生产工作流先接 tracing/observability',
        '多 Agent 任务要从单 crew 小范围验证'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://crewai.com/pricing',
      'https://docs.crewai.com/',
      'https://github.com/crewAIInc/crewAI',
      'https://crewai.com/open-source'
    ],
    decisionSummary: {
      verdict:
        '适合代码优先的多 Agent 编排和生产工作流探索；商业成本要按 Basic/Enterprise 与外部 LLM 成本分开算。',
      bestFor: '多 Agent 工作流编排、AI 自动化任务、需要 Crews 与 Flows 的 Python 团队',
      avoidIf: '你只需要无代码自动化，或团队没有能力调试多 Agent 状态、工具调用和观测链路',
      mainRisk:
        'Basic Free 的 50 workflow executions/month 与开源本地运行不是同一成本模型，生产部署还要承担 LLM/API/基础设施成本',
      alternatives: ['LangGraph', 'OpenAI Agents SDK', 'Google ADK']
    },
    swot: {
      S: 'Crews/Flows、Python、观测和控制平面',
      W: '生产调试与成本分层复杂',
      O: '企业 Agent 自动化',
      T: '竞争压力来自 LangGraph、OpenAI Agents SDK 和 Google ADK'
    },
    tags: ['Agent', '多Agent', 'Python', '开源', '框架']
  },
  {
    id: 'n8n',
    name: 'n8n',
    category: 'agent',
    subcategory: '工作流自动化',
    developer: 'n8n GmbH (德国)',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Cloud Starter 20€/mo 年付起，Pro 50€/mo 年付起；Business self-hosted 667€/mo 年付起；Community Edition 可自托管但受 Sustainable Use License 限制',
        models:
          '工作流可集成 OpenAI、Anthropic、Google Gemini 等节点；模型成本按对应 provider 计算',
        link: 'https://n8n.io/pricing/'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://n8n.io/pricing/',
      'https://docs.n8n.io/sustainable-use-license/',
      'https://docs.n8n.io/advanced-ai/ai-workflow-builder/'
    ],
    decisionSummary: {
      verdict:
        '适合技术团队做工作流自动化和 AI 编排，但要区分 Cloud 执行次数计费、Business 自托管和 Community Edition 许可边界。',
      bestFor: '内部工作流自动化、AI Agent 编排、跨系统数据同步、企业集成',
      avoidIf: '你需要中文界面、低维护成本托管，或计划把 n8n 嵌入面向客户的商业产品但未确认许可',
      mainRisk:
        'Cloud 按 monthly workflow executions 计费；Community Edition 使用 Sustainable Use License，不应简单理解为无限制开源。',
      alternatives: ['Make', 'Zapier AI', 'Dify']
    },
    freeQuota:
      'Cloud Starter/Pro 有 free trial；Community Edition 可自托管用于个人、非商业或内部业务场景，商业分发/嵌入需看许可',
    contextWindow: '取决于集成模型',
    chineseSupport: 2,
    pros: [
      'Cloud 计划包含 unlimited users、unlimited workflows 和 every integration',
      '按完整 workflow execution 计费，而不是按每一步计费',
      'Starter 年付 20€/mo 含 2.5K executions 与 50 AI Workflow Builder credits',
      'Pro 年付 50€/mo 含 10K executions 与 150 AI Workflow Builder credits',
      'Business self-hosted 年付 667€/mo 起，Enterprise cloud 可含 1000 AI Workflow Builder credits',
      'Community Edition 可自托管，适合内部自动化和技术团队控制数据位置',
      '支持 JS/Python code steps、API、webhooks、queues、credentials 和多种集成节点'
    ],
    cons: [
      '中文界面不支持（仅英文）',
      'Community Edition 受 Sustainable Use License 限制，不是 OSI 开源',
      '自托管需技术能力和运维成本',
      'SSO/SAML、Git 版本控制、长留存和企业治理能力主要在 Business/Enterprise',
      '复杂工作流调试和执行历史留存受计划限制'
    ],
    bestFor: '工作流自动化、AI Agent 编排、企业集成',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，n8n 仍是技术团队做自动化和 AI 工作流的强选择，但当前页面应按官方 pricing、AI Workflow Builder credits 与 Sustainable Use License 来解释。Cloud 价格以完整 workflow executions、并发和 AI Workflow Builder credits 为核心；Community Edition 更适合内部业务或个人场景，面向客户的商业嵌入要先看许可。',
      pitfalls: [
        '先确认 Cloud 还是 Community Edition 路径',
        '商业嵌入和再分发要核对 Sustainable Use License',
        '自托管要预留运维、备份和安全配置成本'
      ]
    },
    swot: {
      S: 'execution 计费、集成丰富、可自托管',
      W: '许可边界和运维门槛',
      O: 'AI 自动化和内部工具编排',
      T: 'Make.com、Zapier、Dify'
    },
    tags: ['推荐', 'fair-code', '工作流', '自动化', 'AI Workflow Builder']
  },
  {
    id: 'openai-agents-sdk',
    name: 'OpenAI Agents SDK',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'OpenAI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'MIT 开源 SDK；模型/API 成本按 OpenAI Responses/Chat Completions 或接入 provider 另计',
        models:
          'provider-agnostic：支持 OpenAI Responses、Chat Completions APIs 以及 100+ other LLMs',
        link: 'https://openai.github.io/openai-agents-python/'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://openai.github.io/openai-agents-python/',
      'https://developers.openai.com/api/docs/guides/agents',
      'https://github.com/openai/openai-agents-python'
    ],
    decisionSummary: {
      verdict:
        '适合用少量核心抽象构建多 Agent 工作流；当前官方 README 已强调 provider-agnostic，不应写成只支持 OpenAI。',
      bestFor:
        'OpenAI 优先但希望保留多 provider 接入的 Agent 应用、工具调用、Handoffs 和可追踪工作流',
      avoidIf: '你需要成熟的图编排生态、低代码画布，或团队已经深度依赖 LangGraph/CrewAI',
      mainRisk:
        'SDK 本身轻量，但生产成本和能力边界取决于所选模型/provider、Tracing 留存和 Guardrails 设计。',
      alternatives: ['Claude Agent SDK', 'Google ADK', 'LangChain']
    },
    freeQuota: 'SDK 免费，API 按量计费',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'OpenAI 官方维护的 lightweight multi-agent framework',
      '官方 Agents 指南把 code-first agent app 作为 SDK 快速路径',
      'provider-agnostic，README 标注支持 OpenAI APIs 和 100+ other LLMs',
      '核心能力包括 Agents、Tools、Handoffs、Guardrails、Streaming 和 Human-in-the-loop',
      'Tracing 可记录 agent run、tool calls、handoffs 和 guardrails 等事件',
      'Python SDK 文档完整，并有 JavaScript/TypeScript SDK 路径'
    ],
    cons: [
      '复杂图编排和长期状态仍可能需要 LangGraph 等生态补足',
      '多 provider 接入后的成本、速率限制和错误处理需要自行治理',
      'Guardrails 需要按业务风险设计，不是默认安全保证',
      '生产可观测性要规划 Tracing 数据策略'
    ],
    bestFor: 'OpenAI 生态下的 Agent 开发',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，OpenAI Agents SDK 的价值在于 code-first、抽象少、上手快，同时把 Handoffs、Guardrails 和 Tracing 这些生产 Agent 必需件放进官方路径。旧文案把它写成只支持 OpenAI 模型已经不准确；现在应按 provider-agnostic 框架来描述，并提醒成本取决于具体 provider。',
      pitfalls: [
        '不要把 provider-agnostic 理解成所有模型能力一致',
        'Tracing 和 Guardrails 要按生产隐私与安全策略配置',
        '复杂状态编排先评估 LangGraph/工作流框架'
      ]
    },
    swot: {
      S: '轻量、Handoffs、Tracing、Guardrails',
      W: '复杂编排需外部生态',
      O: '多 provider Agent 应用',
      T: 'LangGraph/CrewAI/ADK'
    },
    tags: ['Agent', '框架', 'OpenAI', 'provider-agnostic', 'Handoffs', 'Guardrails', 'Tracing']
  },
  {
    id: 'claude-agent-sdk',
    name: 'Claude Agent SDK',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'Anthropic',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'MIT 开源 SDK；运行成本取决于 Claude Code / Anthropic API / 订阅或自定义 CLI 路径',
        models:
          'Claude Code as a library；Python and TypeScript SDK 暴露 Claude Code 的工具、agent loop 和 context management',
        link: 'https://code.claude.com/docs/en/agent-sdk/overview'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://code.claude.com/docs/en/agent-sdk/overview',
      'https://github.com/anthropics/claude-agent-sdk-python',
      'https://github.com/anthropics/claude-agent-sdk-typescript'
    ],
    decisionSummary: {
      verdict:
        '适合把 Claude Code 的 agent loop 程序化进代码任务；Python/TypeScript 都可用，但成本与权限要按 Claude Code/Anthropic 配置确认。',
      bestFor: '代码库读取、命令执行、文件编辑、复杂代码工作流自动化',
      avoidIf: '你需要非 Claude 模型优先、多 provider 抽象，或不希望 agent 具备文件/命令执行能力',
      mainRisk:
        'SDK 会把 Claude Code 的文件、命令和编辑能力库化，生产使用必须限制工具权限、工作目录和成本路径。',
      alternatives: ['OpenAI Agents SDK', 'Google ADK', 'LangChain']
    },
    freeQuota: 'SDK 免费，API 按量计费',
    contextWindow: '取决于 Claude Code / 模型配置',
    chineseSupport: 3,
    pros: [
      '官方定位是 Build production AI agents with Claude Code as a library',
      '提供与 Claude Code 相同的 tools、agent loop 和 context management',
      'Python and TypeScript 两条 SDK 路径',
      'Python 包要求 Python 3.10+，并内置 Claude Code CLI',
      'TypeScript 包名为 @anthropic-ai/claude-agent-sdk',
      '认证路径覆盖 Amazon Bedrock、Google Cloud 与 Microsoft Azure 等企业部署环境',
      'SDK 能力包含 MCP、Permissions、Sessions、Hooks、Subagents 和内置工具',
      '适合让 agent 自主读文件、跑命令、搜索网页、编辑代码'
    ],
    cons: [
      '模型与运行路径主要围绕 Claude Code / Anthropic 生态',
      '具备文件和命令能力，权限边界必须明确',
      '成本取决于 Claude Code/Anthropic 当前计划与用量',
      '本地/CI 集成前要确认 CLI 路径、工作目录和沙箱策略'
    ],
    bestFor: '构建代码智能体、复杂推理 Agent',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-08，Claude Agent SDK 更像是把 Claude Code 的 agent loop 变成可编程库。它适合代码任务自动化，但能力强也意味着权限风险更高：读写文件、运行命令、搜索网页、MCP 和 Permissions 都要在明确边界内使用。旧的上下文数字和泛化能力排行不如官方 SDK/CLI 能力描述可靠。',
      pitfalls: [
        '限制工作目录和工具权限',
        '确认 Python 3.10+ 或 TypeScript 包路径',
        '把 Claude Code/Anthropic 用量成本纳入预算'
      ]
    },
    swot: {
      S: 'Claude Code agent loop 库化',
      W: '权限和成本治理要求高',
      O: '代码任务自动化',
      T: 'OpenAI Agents SDK、ADK、多 provider 框架'
    },
    tags: [
      '推荐',
      'Agent',
      '框架',
      'Claude',
      'Anthropic',
      'Claude Code as a library',
      'Python and TypeScript'
    ]
  },
  {
    id: 'google-adk',
    name: 'Google ADK',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'Google',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Apache 2.0 开源 SDK；模型、Vertex AI、Gemini Enterprise 或 Google Cloud 资源按对应服务计费',
        models:
          'ADK 2.0、Graph Workflows；支持 Gemini 模型能力；ADK 可用于 Python, TypeScript, Go, Java, and Kotlin',
        link: 'https://adk.dev/'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://adk.dev/',
      'https://adk.dev/agents/models/google-gemini/',
      'https://github.com/google/adk-python'
    ],
    decisionSummary: {
      verdict:
        '适合希望用 Google 官方多语言 ADK 构建、调试和部署 agent 的团队，尤其是已在 Gemini/Google Cloud 生态内的项目。',
      bestFor: 'Google 生态、多语言 agent 开发、Gemini 工具能力、企业级调试与部署路径',
      avoidIf: '你不想绑定 Google Cloud/Gemini 生态，或需要更成熟的第三方框架社区',
      mainRisk:
        'ADK 框架开源不等于运行免费；Gemini、Vertex AI、Agent Engine 和企业能力仍需按对应服务计费与权限治理。',
      alternatives: ['OpenAI Agents SDK', 'Claude Agent SDK', 'LangChain']
    },
    freeQuota: 'SDK 开源；Gemini/API/Cloud 免费层和计费以对应 Google 官方服务为准',
    contextWindow: '取决于 Gemini 模型与部署配置',
    chineseSupport: 3,
    pros: [
      'Google 官方 open-source agent development framework',
      '支持 Python, TypeScript, Go, Java, and Kotlin',
      'ADK 2.0 面向 build、debug、deploy production agents，并突出 Graph Workflows',
      '官方说明 ADK can work with almost any generative AI model，虽然 Google/Gemini 生态路径最顺',
      'Gemini 模型页说明支持 Code Execution、Google Search、Context caching、Computer use 和 Interactions API',
      'Python 仓库采用 Apache 2.0 License',
      '可与 Gemini Enterprise / Google Cloud agent 平台衔接'
    ],
    cons: [
      '主要优势在 Google/Gemini 生态，跨 provider 抽象不如部分独立框架',
      '部分生产部署、企业治理和观测能力依赖 Google Cloud / Gemini Enterprise',
      '内置工具组合有已知限制，需要按文档规避',
      '模型和云资源成本要单独核算'
    ],
    bestFor: '利用 Gemini 长上下文构建复杂 Agent',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Google ADK 当前更应按官方多语言 production agents 框架来介绍，而不是只强调某个上下文数字。ADK 2.0、Graph Workflows、几乎任意生成式模型接入、Google Search / Code Execution 等 Gemini 工具能力，以及后续部署到企业平台的路径，是当前选型重点。',
      pitfalls: [
        '先确认是本地 SDK、Vertex AI 还是 Gemini Enterprise 路径',
        '模型和云资源成本分开核算',
        '内置工具组合限制要看 Gemini 模型页'
      ]
    },
    swot: {
      S: '多语言、Google/Gemini 工具能力',
      W: '生态绑定和云成本',
      O: '企业级 agent 部署',
      T: 'OpenAI/Claude SDK 与独立框架'
    },
    tags: [
      'Agent',
      '框架',
      'Google',
      'Gemini',
      'Python, TypeScript, Go, Java, and Kotlin',
      'Apache 2.0'
    ]
  },

  // ============= MCP 工具 (14个+1) =============
  {
    id: 'context7',
    name: 'Context7',
    category: 'mcp',
    subcategory: 'AI增强',
    developer: 'Upstash',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free for personal use：1,000 API calls/月；Pro $10/seat/月，含 5,000 free API calls/seat/月，额外 $10/1,000 calls',
        models: '无需 LLM，提供远程 MCP、CLI + Skills 与私有仓库/团队计划',
        link: 'https://context7.com/plans'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://context7.com/plans',
      'https://context7.com/docs/installation',
      'https://context7.com/docs/resources/all-clients',
      'https://github.com/upstash/context7',
      'https://context7.com/about'
    ],
    decisionSummary: {
      verdict:
        '适合给 AI 编码工具补最新库文档，但应按 public/private repo、API calls 和团队席位区分成本。',
      bestFor: 'Cursor、Claude Code、Codex、Gemini CLI 等需要查询最新 API/框架文档的编码场景',
      avoidIf: '你需要完全离线、完全本地的文档检索，或对社区收录文档质量没有复核流程',
      mainRisk:
        'Free 计划只有 1,000 API calls/月；Pro 为 $10/seat/月并含 5,000 free API calls/seat/月，私有仓库解析另按 tokens 计费。',
      alternatives: ['Playwright MCP', 'Firecrawl MCP', '官方框架文档']
    },
    freeQuota:
      'Free for personal use，公开仓库场景含 1,000 API calls/月；更高限额、私有仓库和团队协作需 Pro/Enterprise',
    contextWindow: '按需查询',
    chineseSupport: 3,
    pros: [
      '提供远程 MCP 服务和本地 npx MCP Server 两种接入',
      '支持 CLI + Skills 与 MCP 双模式',
      '可查询版本化文档和代码示例',
      '支持 Cursor / Claude Code / Codex / Gemini CLI 等多种客户端配置',
      'API key 可提升限额并支持私有仓库能力',
      'Enterprise pricing 按 seat 和 teamspace size 调整，小团队约 $30/user/month 起，大团队可低至 $2.50/user/month',
      '由 Upstash 团队维护且开源 MCP server'
    ],
    cons: [
      '免费层有 1,000 API calls/月限制',
      '私有仓库和团队协作需要 Pro 或 Enterprise',
      '查询结果依赖社区收录与源文档质量',
      '需要联网使用',
      '私有仓库解析按 token 另计费'
    ],
    bestFor: '开发时实时查阅最新 API 文档、减少过期代码示例和 hallucinated API',
    funRanking: '夯夯夯',
    personalExperience: {
      rating: 5,
      insights:
        '截至 2026-07-08，MCP Core 核心工具之一。它把最新、版本化的库文档拉进 AI 编码上下文，尤其适合处理训练数据落后的 API 用法。当前不能再按“无限免费”理解：个人公开仓库有免费层，团队、私有仓库、较高调用量、Enterprise seat pricing 和解析私有源都要看 Context7 Plans。',
      pitfalls: [
        '免费层 API calls 有月度上限',
        '私有仓库解析和团队空间会产生额外成本',
        '社区收录内容仍需对照官方文档复核'
      ]
    },
    swot: {
      S: '远程 MCP、版本化文档',
      W: '调用限额与私有仓库成本',
      O: '成为 AI 编码文档层',
      T: '各框架自建 MCP 或 IDE 内置文档检索'
    },
    tags: ['推荐', 'MCP', 'Free tier', '文档查询', '防幻觉', 'API key']
  },
  {
    id: 'playwright-mcp',
    name: 'Playwright MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'Microsoft',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Apache-2.0 开源 MCP server；运行成本来自本地/CI 浏览器资源而非托管额度',
        models: '无需 LLM，基于 Playwright 和 accessibility snapshots 的浏览器自动化',
        link: 'https://playwright.dev/docs/getting-started-mcp'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://playwright.dev/docs/getting-started-mcp',
      'https://github.com/microsoft/playwright-mcp'
    ],
    decisionSummary: {
      verdict:
        '适合让 AI 通过结构化页面快照做浏览器验证；高吞吐编码代理可优先评估 Playwright CLI + Skills。',
      bestFor: '网页回归验证、表单流测试、截图核对、需要真实浏览器状态的调试',
      avoidIf: '你只需要一次性抓取静态网页，或无法在本地/CI 环境稳定运行浏览器',
      mainRisk:
        '需要 Node.js 18+ 和 MCP 客户端；accessibility snapshots 会占上下文，复杂任务还会消耗本地浏览器资源。',
      alternatives: ['Chrome DevTools MCP', 'Firecrawl MCP', 'Playwright CLI + Skills']
    },
    freeQuota: '开源软件本身无托管用量限制；实际成本取决于本地机器、CI 分钟数和浏览器会话数量',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '微软/Playwright 官方维护',
      '通过 accessibility snapshots 让 LLM 操作页面而不依赖视觉模型',
      '支持导航、点击、输入、截图、网络监控和 storage state',
      '支持 VS Code、Cursor、Windsurf、Claude Code、Codex 等 MCP 客户端',
      '可用 npx @playwright/mcp@latest 快速接入',
      '支持 headless、浏览器选择、独立 HTTP server 等配置'
    ],
    cons: [
      '需要 Node.js 18 或更新版本',
      '复杂页面会增加上下文与浏览器资源消耗',
      '某些动作需要可信客户端才能启用 browser_run_code_unsafe',
      '高频自动化最好评估 Playwright CLI + Skills 的 token 成本'
    ],
    bestFor: 'Web 自动化测试、页面截图、爬取动态页面',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        'MCP Core 核心工具之一。它的优势是把浏览器交互转成结构化快照和工具调用，适合让 AI 在真实页面里做回归验证、交互测试和截图核对。官方也提醒 CLI + Skills 在高吞吐编码场景可能更省上下文；MCP 更适合需要持续页面状态和探索式自动化的任务。',
      pitfalls: [
        '先确认本地或 CI 能稳定跑浏览器',
        '复杂页面要控制上下文和截图频率',
        '只给可信客户端开放任意 Playwright 代码执行'
      ]
    },
    swot: {
      S: '官方维护、结构化快照',
      W: '浏览器资源与上下文成本',
      O: 'AI 驱动测试自动化',
      T: '竞争或替代方案包括 Chrome DevTools MCP，以及 CLI 与 Skills 组合'
    },
    tags: ['推荐', 'MCP', '开源', '微软', 'E2E测试', '浏览器', 'accessibility snapshots']
  },
  {
    id: 'firecrawl-mcp',
    name: 'Firecrawl MCP',
    category: 'mcp',
    subcategory: '数据工具',
    developer: 'Mendable / Firecrawl',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free：1,000 credits / month；Hobby $16/月（年付）5,000 pages；Standard $83/月（年付）100,000 pages',
        models: '无需 LLM，提供 scrape/crawl/map/search/interact 等网页上下文 API',
        link: 'https://www.firecrawl.dev/pricing'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.firecrawl.dev/pricing',
      'https://github.com/firecrawl/firecrawl-mcp-server'
    ],
    decisionSummary: {
      verdict:
        '适合把网页搜索、抓取和结构化提取接进 AI agent；成本要按 credits、并发和 endpoint 计算。',
      bestFor: 'RAG 数据准备、网页转 Markdown、带搜索的研究代理、需要 JS 渲染页面的抓取',
      avoidIf: '你只需要少量静态页面 fetch，或不希望引入 FIRECRAWL_API_KEY 与月度 credits 管理',
      mainRisk:
        'Free 只有 1,000 credits / month；Scrape/Crawl/Map 通常 1 credit/page，Search 2/10 results，Interact 按 browser minute 扣 credits。',
      alternatives: ['普通 fetch MCP', 'Playwright MCP', '自建爬虫']
    },
    freeQuota:
      'Free 计划 1,000 credits / month，低 rate limits；更高并发和用量需 Hobby/Standard/Growth/Scale',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '官方 Firecrawl MCP Server',
      '支持 scrape、crawl、map、search、extract、deep research 等工具',
      '自动转换为 LLM 友好的 Markdown 或结构化数据',
      '支持 JavaScript 渲染和交互型网页',
      '可通过 FIRECRAWL_API_KEY 接入 MCP 客户端',
      'Search 2/10 results 并可通过反馈返还部分 search credit'
    ],
    cons: [
      '免费层 credits 和并发有限',
      '需要 API key 或平台侧认证',
      '大规模抓取成本按 credits 累计',
      '部分网站反爬机制仍可能导致失败',
      '标准计划 credits 不自动结转'
    ],
    bestFor: '深度网站爬取、内容提取转 Markdown、RAG 数据准备',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '比简单 fetch 更适合深度抓取和 RAG 数据准备。当前价格已经从旧的固定免费次数表述变化为 credits 体系，Free 是 1,000 credits / month；如果用 search、interact 或大规模 crawl，要先按 endpoint credits 和并发需求估算。',
      pitfalls: [
        '注意 endpoint credits 消耗',
        '反爬严格的网站可能失败',
        '大规模抓取前先小样本测试并记录成本'
      ]
    },
    swot: {
      S: 'Markdown 转换、智能爬取',
      W: 'credits 与并发限制',
      O: 'RAG 数据管道',
      T: '自建爬虫与浏览器自动化方案'
    },
    tags: ['MCP', '爬取', 'Markdown', 'API', 'credits']
  },
  {
    id: 'github-mcp',
    name: 'GitHub MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'GitHub (Microsoft)',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'MIT 开源本地 server；远程 OAuth 入口随 GitHub Copilot/IDE 支持而定，GitHub API 仍受权限与 rate limits 约束',
        models: '无需 LLM，封装 GitHub API 的 remote/local MCP server',
        link: 'https://github.com/github/github-mcp-server'
      }
    ],
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/github/github-mcp-server',
      'https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server',
      'https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server'
    ],
    decisionSummary: {
      verdict:
        '适合把仓库、Issue、PR 和 Actions 接进 AI IDE；默认应从 read-only、最小 toolsets 和最小权限开始。',
      bestFor: '仓库查询、Issue/PR 协作、CI 排障、代码搜索、AI DevOps 工作流',
      avoidIf: '你无法管理 OAuth/PAT 权限，或不希望 AI 工具获得任何写入 GitHub 的能力',
      mainRisk:
        '远程 OAuth 可免 PAT，但不同 IDE 支持不同；本地模式常用 PAT，toolsets 和 read-only 配置必须严格收敛权限。',
      alternatives: ['GitHub CLI', 'GitLab MCP', '只读 GitHub App']
    },
    freeQuota:
      'server 本身开源；实际使用受 GitHub 账号、Copilot/IDE 远程支持、OAuth/PAT 权限与 GitHub API rate limits 影响',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'GitHub 官方 MCP Server',
      'remote GitHub MCP server 已进入官方主路径，适合 repo、Issue、PR、Actions 的受控 AI 工作流',
      '支持远程 OAuth 与本地 Docker/二进制部署路径',
      '覆盖 repos、issues、pull_requests、actions、code_security 等 toolsets',
      '可用 --toolsets 或 GITHUB_TOOLSETS 缩小暴露能力',
      '支持 read-only 模式降低误操作风险',
      '适合把 GitHub 上下文直接接入 Copilot/Claude/Codex 等 IDE 工作流'
    ],
    cons: [
      'OAuth、PAT 和 GitHub App 支持随宿主 IDE 而异',
      '受 GitHub API rate limits 与仓库权限约束',
      '写入工具需要严格最小权限',
      '默认工具集仍可能暴露较多上下文给模型'
    ],
    bestFor: '在 AI IDE 中直接管理 GitHub 仓库、Issue、PR',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        'MCP Core 核心工具之一。GitHub 官方 server 的价值在于把 repo、Issue、PR、Actions 和代码搜索变成可控工具集。生产使用时不要只看“能连上”：先开 read-only 或最小 toolsets，再逐步放开写入能力；OAuth 优先，PAT 只给必要 scope。',
      pitfalls: [
        'Token 权限要最小化',
        '注意 API rate limits',
        '默认先启用 read-only 和最小 toolsets'
      ]
    },
    swot: {
      S: '官方出品、toolsets 完整',
      W: '权限与 rate limits',
      O: 'AI DevOps 核心',
      T: 'GitLab MCP 与平台原生代理'
    },
    tags: ['推荐', 'MCP', '开源', 'GitHub', '官方', 'PR管理', 'read-only']
  },
  {
    id: 'sequential-thinking-mcp',
    name: 'Sequential Thinking',
    category: 'mcp',
    subcategory: 'AI增强',
    developer: 'Model Context Protocol reference servers',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'MIT License 参考 MCP server；可在支持 MCP 的 host 中通过 npx 或 Docker 运行',
        models: 'sequential_thinking 工具',
        link: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking'
      }
    ],
    freeQuota:
      '该参考 server 本身没有独立 SaaS 额度；实际成本来自 host 模型调用、本地 Node/Docker 运行和外围 Agent 工作流',
    contextWindow: 'N/A',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
      'https://www.npmjs.com/package/@modelcontextprotocol/server-sequential-thinking',
      'https://modelcontextprotocol.io/examples'
    ],
    pros: [
      '提供 sequential_thinking MCP 工具，让支持 MCP 的 host 能进行动态、可回看的问题分解',
      '官方配置支持 npx -y @modelcontextprotocol/server-sequential-thinking，也支持 Docker 执行',
      '工具 schema 包含 thought、thoughtNumber、totalThoughts 和 nextThoughtNeeded，便于形成迭代推理轨迹',
      'isRevision、branchFromThought 等修订与分支字段支持在假设变化时调整方向',
      '人工核验说明强调：非简单问题中 host 会多次调用该工具，而不是一次性完成'
    ],
    cons: [
      '该 server 本身不解决问题，效果取决于 host 模型是否会在合适时机调用工具',
      '额外工具调用会在简单问题上增加延迟、token 使用和 trace 噪声',
      '推理轨迹可能包含敏感任务上下文，部分实现提供 DISABLE_THOUGHT_LOGGING 等日志控制项',
      '不同 MCP 客户端的安装方式不同，Windows 上尤其要处理命令包装'
    ],
    bestFor: '复杂业务逻辑分析、算法问题分解、代码 Bug 根因分析',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Sequential Thinking 更准确的定位是一个提供结构化推理工具的参考 MCP server。它的价值不是“神奇提质”，而是让复杂多步推理能被 MCP host 多次调用并显式记录。',
      pitfalls: [
        '确认 MCP host 真的展示 sequential_thinking 调用',
        '避免不必要地记录敏感推理轨迹',
        '把它用于非平凡规划/调试，而不是每个 prompt 都调用'
      ]
    },
    decisionSummary: {
      verdict: '可作为复杂规划和调试的轻量 MCP 推理脚手架，前提是 host 能可靠查看并调用工具。',
      bestFor: '架构取舍分析、生产调试、迁移规划，以及需要修订或分支的问题',
      avoidIf: '你期待 server 在不增加调用的情况下直接提升模型，或无法接受额外 trace/log 暴露',
      mainRisk:
        'MCP server 会暴露结构化推理状态；如果 host 日志或分享控制不好，敏感任务上下文可能进入 trace，简单任务也会浪费模型调用。',
      alternatives: ['原生模型推理模式', '规划提示词', '项目专用 runbook']
    },
    swot: {
      S: '结构化 MCP 推理状态',
      W: '额外调用与 trace 暴露',
      O: 'MCP 感知的调试和规划工作流',
      T: '前沿模型的原生推理功能'
    },
    tags: ['MCP', 'reference server', 'sequential_thinking', 'npx', 'Docker', '已核验']
  },
  {
    id: 'antv-chart-mcp',
    name: 'AntV Chart MCP',
    category: 'mcp',
    subcategory: '可视化',
    developer: '蚂蚁集团 (AntV)',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          '开源 MCP server package；可本地运行，也可通过 HTTP/SSE 或受支持的 MCP marketplace 使用',
        models: '@antv/mcp-server-chart、chart-visualization skill',
        link: 'https://github.com/antvis/mcp-server-chart'
      }
    ],
    freeQuota: 'package 本身没有托管额度；成本来自 MCP host、渲染服务、部署和外部地图服务使用',
    contextWindow: 'N/A',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/antvis/mcp-server-chart',
      'https://www.npmjs.com/package/@antv/mcp-server-chart',
      'https://github.com/antvis/chart-visualization-skills'
    ],
    pros: [
      '@antv/mcp-server-chart 是基于 AntV 的 TypeScript MCP server，用于图表生成和数据分析',
      'server 暴露 25+ 图表类型，包括 generate_word_cloud_chart、generate_spreadsheet 等工具',
      '支持通过 npx 安装接入桌面 MCP 客户端，Windows 场景需要 cmd 包装',
      '也可在 Dify 中使用，并支持 HTTP、SSE 或 Streamable transport',
      '配套 chart-visualization skill 可根据数据描述辅助选择合适图表类型'
    ],
    cons: [
      '输入数据结构仍决定生成图表是否有效或误导',
      '地理可视化使用 AMap 服务，目前只支持中国范围地图生成',
      '生成图表应视为分析和报告草稿，不应直接当作审计过的统计结论',
      '生产可控使用需要配置部署、环境变量、禁用工具和私有渲染服务'
    ],
    bestFor: '数据可视化、生成报表图表、项目进度展示',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，AntV Chart MCP 是具体的可视化 MCP server，而不是泛泛的数据分析承诺。它最适合数据已经结构化、用户需要通过 MCP host 或 Dify 工作流生成图表 artifact 的场景。',
      pitfalls: [
        '生成图表前验证数据 schema 与聚合口径',
        '不要把中国地图工具用于其支持范围之外',
        '发布决策前复核生成图表'
      ]
    },
    decisionSummary: {
      verdict:
        '实用的 AntV MCP server，可把结构化数据转成图表 artifact，并支持本地与托管 MCP 路线。',
      bestFor: 'AI 辅助图表、快速报告视觉、Dify 图表生成，以及需要 25+ 图表类型的 MCP 工作流',
      avoidIf: '你需要经过审计的 BI 看板、高度定制交互应用，或在 AMap 支持范围外生成地图',
      mainRisk:
        '即便输入 schema、聚合口径或地理范围有误，图表也可能显得很有说服力；地图生成还依赖 AMap 且有地区限制。',
      alternatives: ['ECharts', 'Observable Plot', 'Python matplotlib/Altair', 'BI dashboards']
    },
    swot: {
      S: '通过 MCP 调用 AntV 生成图表',
      W: '数据结构和地图区域存在约束',
      O: '适用于 AI 辅助报告和 Dify 工作流',
      T: '面临 BI 工具和自定义可视化技术栈的竞争'
    },
    tags: ['推荐', 'MCP', 'AntV', '25+ chart types', 'Dify', 'chart-visualization', '已核验']
  },
  {
    id: 'brave-search-mcp',
    name: 'Brave Search MCP',
    category: 'mcp',
    subcategory: '搜索',
    developer: 'Brave Software',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Search 每 1,000 次请求 5 美元，含每月 5 美元免费额度；Answers 每 1,000 次请求 4 美元，另加每百万输入/输出 token 5 美元',
        models: 'Brave Search API + Brave Search MCP Server',
        link: 'https://brave.com/search/api/'
      }
    ],
    freeQuota:
      '每月自动应用 $5 in free monthly credits；建议在 dashboard 设置 usage limits 控制预算',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Brave 官方 MCP Server，集成 Brave Search API',
      'Search 计划列出 $5 per 1,000 requests，并包含 $5 in free monthly credits',
      'Answers 计划列出 $4 per 1,000 requests + $5 per million input/output tokens',
      'MCP Server 支持 web、local、video、image、news、summarizer、place search 和 brave_llm_context',
      '默认 STDIO transport，HTTP 需设置 BRAVE_MCP_TRANSPORT 或 --transport http',
      '适合给 RAG 和 Agent 提供独立搜索索引与 LLM context'
    ],
    cons: [
      '旧的 2,000 免费查询/月口径已不适合作为当前价格说明',
      '需要 Brave Search API key，必须监控用量并设置 usage limits',
      'Answers 还会产生 token 费用',
      '中文搜索效果和索引覆盖需要按场景实测'
    ],
    bestFor: '在 AI IDE 中进行隐私优先的网络搜索和信息检索',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Brave Search API 已按 credits 和请求数展示价格：Search 是 $5/1,000 requests，Answers 是 $4/1,000 requests 外加 token 费用。Brave MCP Server 本身是官方仓库，但真实成本取决于 API key 用量。',
      pitfalls: [
        '不要再写 2,000 免费查询/月',
        '先设置 usage limits',
        'Answers 费用要把 request 和 token 分开算'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://brave.com/search/api/',
      'https://github.com/brave/brave-search-mcp-server',
      'https://brave.com/search/api/guides/use-with-openclaw/'
    ],
    decisionSummary: {
      verdict:
        '适合把独立 Web search、LLM context 和 summarizer 接入 Agent，但必须按 API credits 和 usage limits 管理成本。',
      bestFor: 'RAG/Agent 的实时网页搜索、技术资料检索、独立搜索索引需求',
      avoidIf: '你需要长期固定免费额度、强中文搜索质量，或不想管理 API key 和月度预算',
      mainRisk:
        '旧免费查询口径已过时；Search、Answers 和 token 费用不同，泄露 API key 或未设 usage limits 都可能造成额外账单。',
      alternatives: ['Perplexity API', 'Firecrawl MCP', '自建搜索/抓取']
    },
    swot: {
      S: '独立索引、官方 MCP、LLM context',
      W: '中文和费用需实测',
      O: 'Agent/RAG 搜索需求',
      T: 'Google、Perplexity、Tavily 等搜索 API'
    },
    tags: ['MCP', '搜索', '隐私', '隐私搜索', 'Brave', 'API']
  },
  {
    id: 'openmemory-mcp',
    name: 'OpenMemory / Mem0 MCP',
    category: 'mcp',
    subcategory: 'AI增强',
    developer: 'Mem0',
    logo: null,
    versions: [
      {
        type: 'Cloud MCP',
        pricing: 'Mem0 Platform account + API key；平台价格和额度以 Mem0 pricing 为准',
        models: 'cloud-hosted MCP server requires no local installation, https://mcp.mem0.ai/mcp',
        link: 'https://docs.mem0.ai/platform/mem0-mcp'
      },
      {
        type: 'Claude Code plugin',
        pricing: 'Plugin + MCP + lifecycle hooks；需要 MEM0_API_KEY',
        models: '9 memory tools plus lifecycle hooks and SDK skill',
        link: 'https://docs.mem0.ai/integrations/claude-code'
      },
      {
        type: 'Legacy package',
        pricing: '旧 mem0-mcp-server repository 已 archived，不再作为新项目首选',
        models: 'archived wrapper for Mem0 Memory API',
        link: 'https://github.com/mem0ai/mem0-mcp'
      }
    ],
    freeQuota:
      '云端按 Mem0 Platform pricing 和 API key 额度；OSS/本地部署仍需自行承担 LLM、embedding、vector store 与 hosting 成本',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Mem0 MCP 官方文档要求 Mem0 Platform account 和 API key，可通过托管端点接入 Claude、Claude Code、Codex、Cursor、Windsurf、VS Code 等客户端',
      'cloud-hosted MCP server requires no local installation，适合先验证跨会话记忆工作流',
      'OpenMemory 强调 self-hostable、user-owned memory；Mem0 MCP API 路径适合 add_memory、search_memories、get_memories 和 delete_memory',
      '可暴露 add_memory、search_memories、get_memories、get_memory、update_memory、delete_memory、delete_all_memories 等 9 memory tools',
      'Claude Code 集成可用 MEM0_API_KEY、MCP server、lifecycle hooks 和 SDK skill',
      '旧 mem0-mcp-server 已 archived，新项目应优先看官方托管 MCP 文档'
    ],
    cons: [
      'memory persistence risk：记忆可能包含敏感偏好、客户信息、项目结构或过时结论，需要删除、更新和作用域治理',
      '云端版依赖 Mem0 Platform 账号、API key 和 pricing/free tier 额度',
      '本地/OSS 路径仍要维护 LLM、embedding、vector store、storage、backup 和访问控制',
      '记忆召回质量取决于写入粒度、embedding、过滤器和用户清理习惯',
      '跨客户端共享记忆前要明确哪些内容允许长期保存'
    ],
    bestFor: '跨 AI 客户端保存长期偏好、项目上下文和可复用工作方式',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，OpenMemory/Mem0 的关键变化是托管 Mem0 MCP 已明确可用，同时 OpenMemory 强调 self-hostable、user-owned memory。选型时应把“本地 OpenMemory / OSS 依赖”和“Mem0 cloud MCP / API key / pricing”分开评估。',
      pitfalls: ['先确认保存哪些记忆', '敏感项目默认不开长期记忆', '定期清理过期或错误记忆']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://mem0.ai/blog/introducing-openmemory-mcp',
      'https://docs.mem0.ai/platform/mem0-mcp',
      'https://github.com/mem0ai/mem0-mcp',
      'https://docs.mem0.ai/integrations/claude-code',
      'https://mem0.ai/pricing'
    ],
    decisionSummary: {
      verdict:
        '适合需要跨会话记忆的重度 AI 用户，但必须明确 cloud MCP、本地部署、API key、记忆治理和成本边界。',
      bestFor: '跨客户端长期偏好、项目背景、工作习惯和可复用上下文',
      avoidIf: '你不能把项目上下文长期保存，或无法治理 API key、记忆删除、过期内容和敏感信息',
      mainRisk:
        'memory persistence risk：错误或敏感记忆会跨会话持续影响 Agent；云端版受 Mem0 Platform 额度和 API key 控制，本地版受部署和存储治理质量影响。',
      alternatives: ['Claude Project Memory', 'Codex memories', '本地 Markdown runbook']
    },
    swot: {
      S: '跨会话记忆和多客户端接入',
      W: '记忆治理和成本边界复杂',
      O: '个性化 Agent 工作流增长',
      T: 'IDE/Agent 原生记忆能力'
    },
    tags: ['MCP', '记忆', '跨会话', 'Mem0', '已核验']
  },
  {
    id: 'notion-mcp',
    name: 'Notion MCP',
    category: 'mcp',
    subcategory: '协作工具',
    developer: 'Notion Labs',
    logo: null,
    versions: [
      {
        type: 'Remote',
        pricing: 'Notion hosted server；Notion workspace、plan、权限和 API 限流另行适用',
        models:
          '托管式远程 MCP 服务，采用标准 OAuth，并根据访问权限读写内容',
        link: 'https://developers.notion.com/guides/mcp/overview'
      },
      {
        type: 'Local legacy',
        pricing: 'local MCP server repository 不再是优先支持路径',
        models: 'local MCP server repository；remote MCP 和 OAuth 入口优先',
        link: 'https://github.com/makenotion/notion-mcp-server'
      }
    ],
    freeQuota:
      'MCP 连接本身不代表 Notion 功能或额度承诺；实际能力受 workspace plan、Notion AI、用户权限与 rate limits 影响',
    contextWindow: 'N/A',
    chineseSupport: 4,
    pros: [
      'Notion 官方 hosted server 可通过 remote MCP 接入',
      'standard OAuth 授权后按用户 access and permissions 执行 read and write',
      '可查询、创建和更新页面、数据库、评论等 Notion workspace 内容',
      '官方 supported tools 文档可作为工具面来源',
      '适合把项目文档、任务库和团队知识带入 AI 客户端'
    ],
    cons: [
      'OAuth 后 Agent 可按用户权限读写真实 workspace 内容，需先限定工作区和页面访问范围',
      '查询 data sources、connected sources 和 AI search 会受 Notion AI、Business/Enterprise 能力与 rate limits 影响',
      'local MCP server repository 已不是推荐集成路径，GitHub issues/PRs not actively monitored',
      '复杂数据库 schema 和团队权限仍需要人工确认'
    ],
    bestFor: '在 AI 客户端中受控查询、创建和更新 Notion 文档、数据库、项目资料',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Notion MCP 的准确口径应从旧本地包转向官方 hosted server：remote MCP + standard OAuth，Agent 能在用户 access and permissions 范围内 read and write。选型重点是权限、限流、Notion AI/计划门槛和写操作确认。',
      pitfalls: ['限定 workspace/page 权限', '写入前人工确认', '不要按旧本地包口径采购']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://developers.notion.com/guides/mcp/overview',
      'https://developers.notion.com/guides/mcp/get-started-with-mcp',
      'https://github.com/makenotion/notion-mcp-server'
    ],
    decisionSummary: {
      verdict:
        '适合把 Notion workspace 纳入 AI 客户端，但必须按 OAuth、用户权限、工具面和限流治理来评估。',
      bestFor: '团队文档、项目数据库、知识库页面和评论的受控查询与更新',
      avoidIf:
        '你不能接受 Agent 按用户权限读写 Notion 内容，或无法治理 workspace 访问范围与计划限制',
      mainRisk:
        'OAuth 授权后 Agent 可按 access and permissions 对 Notion 内容 read and write；部分搜索和数据源能力受 Notion AI、计划与 rate limits 影响。',
      alternatives: ['Notion Web/API', '只读知识库同步', '本地 Markdown runbook']
    },
    swot: {
      S: '官方 hosted server 与 OAuth',
      W: '权限和计划边界复杂',
      O: 'AI 文档与项目资料自动化',
      T: 'Google Drive/Confluence/飞书等知识库 MCP'
    },
    tags: ['MCP', 'Notion', '知识库', 'OAuth', '官方', '团队协作', '已核验']
  },
  {
    id: 'postman-mcp',
    name: 'Postman MCP',
    category: 'mcp',
    subcategory: 'API工具',
    developer: 'Postman',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Postman 官方 MCP Server；Postman 工作区、计划和 API 权限另行适用',
        models: 'Minimal / Code / Full tool configurations, 100+ Postman tools',
        link: 'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/overview'
      },
      {
        type: 'US Remote',
        pricing: 'OAuth 推荐；也支持 Bearer API key',
        models: 'https://mcp.postman.com/minimal, /code, /mcp',
        link: 'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server'
      },
      {
        type: 'EU / Local',
        pricing: 'EU remote server 和 local server 需要 Postman API key',
        models: 'https://mcp.eu.postman.com/minimal, /code, /mcp',
        link: 'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server'
      }
    ],
    freeQuota:
      'MCP server 本身不是独立免费额度承诺；实际使用受 Postman account、workspace 权限、API key/OAuth 与 pricing plan 影响',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'Postman 官方 MCP Server，可让 Agent 管理 collections、specs、environments、workspaces 等 Postman 资源',
      '提供 Minimal、Code、Full 三种配置，Full 覆盖 100+ tools，日常可先用 Minimal 降低工具面',
      'remote MCP 支持 OAuth、DCR 和 PKCE，US/EU endpoint 与认证方式需要分开配置',
      'US remote server 支持 OAuth，官方说明 OAuth 不需要手动 API key，且符合 MCP Authorization specification',
      'EU remote server only supports API key authentication，local server 也需要 API key',
      'Codex 可用 remote URL https://mcp.postman.com/minimal，或通过 npx @postman/postman-mcp-server 搭配 POSTMAN_API_KEY'
    ],
    cons: [
      'Full 模式工具面很大，Agent 可改 collections、environments、workspace 等资源，需限制工作区和人工确认',
      'API key 应存入环境变量或 secret store，不要写进共享配置',
      'EU remote server 必须使用 API key，不能按 US OAuth 流程配置',
      'Postman pricing、团队权限和高级协作能力仍按 Postman 计划结算'
    ],
    bestFor: '让 Agent 在受控工作区内辅助维护 Postman collections、specs、environments 和 API 文档',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Postman MCP 已有官方文档和 remote server。选型重点不是“能不能免费启动”，而是 Minimal/Code/Full 的工具面、OAuth/DCR/PKCE/API key 的区域差异，以及 Agent 是否会改动共享工作区资源。',
      pitfalls: ['默认先用 Minimal', 'API key 放 secrets', 'Full 模式写操作要人工确认']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/overview',
      'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server',
      'https://www.postman.com/pricing/'
    ],
    decisionSummary: {
      verdict:
        '适合 Postman 重度用户把 API 文档、集合和环境维护接入 Agent；默认用 Minimal，写共享资源前人工确认。',
      bestFor: 'Postman collections/specs/environments 的查询、同步和轻量维护',
      avoidIf: '你无法治理 workspace 权限、API key/OAuth、区域差异和 Agent 写操作确认',
      mainRisk:
        'Full 配置暴露 100+ Postman tools；OAuth/API key 与 EU remote server 规则不同，权限过大时可能误改共享 API 资产。',
      alternatives: ['Postman Web/桌面端', 'Postman CLI/Newman', 'OpenAPI tooling']
    },
    swot: {
      S: '官方 remote/local MCP 与 Postman API 深集成',
      W: 'Full 工具面和共享资源写风险',
      O: 'API 协作自动化',
      T: 'IDE 内置 HTTP/OpenAPI 工具'
    },
    tags: ['MCP', 'Postman', 'API测试', 'API', '官方']
  },
  {
    id: 'atlassian-mcp',
    name: 'Atlassian Rovo MCP',
    category: 'mcp',
    subcategory: '协作工具',
    developer: 'Atlassian / Sooperset community alternative',
    logo: null,
    versions: [
      {
        type: 'Official Cloud',
        pricing:
          '官方 Atlassian Rovo MCP Server；当前 Remote MCP 不单独消耗 Rovo credits，但 Beta tools 未来可能计入 Rovo credits',
        models: 'Atlassian Rovo MCP Server, Generally Available, OAuth 2.1 or API tokens',
        link: 'https://github.com/atlassian/atlassian-mcp-server'
      },
      {
        type: 'Community self-hosted',
        pricing: '社区 Sooperset 版本；需自行部署并配置 Atlassian API token/PAT',
        models: 'Cloud and Server/Data Center deployments for Confluence and Jira',
        link: 'https://github.com/sooperset/mcp-atlassian'
      }
    ],
    freeQuota:
      '官方 Remote MCP 受 Atlassian Cloud 计划、站点权限、API rate limits 和未来 Beta tools/Rovo credits 规则影响；社区版仍需 Atlassian 账号和 API/PAT 权限',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '官方 Atlassian Rovo MCP Server 是 cloud-hosted bridge，可连接 Jira、Confluence、Jira Service Management、Bitbucket 和 Compass',
      '官方 GitHub 标注 Generally Available，并支持 OAuth 2.1 or API tokens',
      '每次操作 respects existing access controls，按用户已有权限和 scopes 执行',
      'supported tools 页面说明 Beta tools 当前可用，但未来可能成为 paid features billed in Rovo credits',
      'Sooperset 社区版仍可作为 Cloud and Server/Data Center deployments 的自托管替代'
    ],
    cons: [
      '写操作可创建或更新 Jira issue、Confluence page 等真实协作资产，应按 Read/Write/Search 权限组和人工确认收敛',
      'API token 方式、domain allowlist、审计日志和组织策略需要管理员治理',
      'Jira/Confluence API rate limits 会影响大规模查询和自动化',
      '官方 cloud MCP 与 Sooperset 社区版部署、认证和产品范围不同，不能混写',
      '合规场景需先确认 Rovo MCP 对 FedRAMP、HIPAA、数据驻留和审计要求的支持'
    ],
    bestFor:
      'Atlassian Cloud 团队在 AI 客户端中查询、总结和受控更新 Jira/Confluence/Bitbucket 资料',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Atlassian 已有官方 Atlassian Rovo MCP Server，旧条目不能再按“仅有社区版、未来才可能有官方方案”的口径推荐。现在的重点是选择官方云端 Rovo MCP 还是 Sooperset 自托管替代，并把写权限、审计、API rate limits 和 Rovo credits 风险说清楚。',
      pitfalls: [
        '默认限制 Read/Search',
        '写入 Jira/Confluence 前人工确认',
        '社区版和官方版不要混配认证说明'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.atlassian.com/platform/remote-mcp-server',
      'https://github.com/atlassian/atlassian-mcp-server',
      'https://support.atlassian.com/atlassian-rovo-mcp-server/docs/supported-tools/',
      'https://github.com/sooperset/mcp-atlassian',
      'https://developer.atlassian.com/cloud/jira/platform/rate-limiting/'
    ],
    decisionSummary: {
      verdict:
        '官方 Atlassian Rovo MCP 已可作为首选评估；社区 Sooperset 版本只作为自托管/Server/Data Center 替代。',
      bestFor: '已在 Atlassian Cloud 上管理工程、产品、支持和知识库的团队',
      avoidIf: '无法治理 AI 客户端写操作、API token、domain allowlist、权限组和审计日志',
      mainRisk:
        'Agent 可在 existing access controls 范围内读取和更新真实 Jira/Confluence/Bitbucket 资料；Beta tools、Rovo credits、API rate limits 和合规要求必须逐项确认。',
      alternatives: ['Jira/Confluence Web UI', 'Atlassian REST API', 'Sooperset mcp-atlassian']
    },
    swot: {
      S: '官方 cloud MCP 和 Atlassian 权限体系',
      W: '写操作治理复杂',
      O: 'AI 客户端接入系统-of-record',
      T: '通用项目管理 MCP 和内置 Rovo 能力'
    },
    tags: ['MCP', 'Atlassian', 'Jira', 'Confluence', 'Rovo', '已核验']
  },
  {
    id: 'supabase-mcp',
    name: 'Supabase MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'Supabase',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '官方 Remote MCP Server；使用受 Supabase 项目、组织权限和计划限制；server pre-1.0',
        models:
          'Database, docs, debugging, development, functions, storage, branching feature groups',
        link: 'https://supabase.com/docs/guides/ai-tools/mcp'
      }
    ],
    freeQuota:
      'MCP server 本身不单独售卖；Branching requires a paid plan，项目资源仍按 Supabase 计划计费',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'Supabase 官方 MCP Server，Remote URL 为 https://mcp.supabase.com/mcp',
      'OAuth 登录通常不再需要手动 PAT；CI 可用 Authorization header',
      '可用 read_only=true 让 SQL 以 read-only Postgres user 执行并禁用 mutating tools',
      '可用 project_ref 限定单个项目，避免访问组织内所有项目',
      '可用 features=database,docs 等参数只启用必要工具组',
      '覆盖 database、debugging、development、functions、docs、storage、branching 等 feature groups'
    ],
    cons: [
      '官方明确提示切勿将 MCP 服务器连接到生产数据；仅用于开发和测试',
      '不设 project_ref 时可访问组织内所有项目，权限面过大',
      'read-only 只控制数据库写入和 mutating tools，仍要管理 OAuth/PAT 与组织权限',
      'server pre-1.0，工具和 schema 可能变化',
      '分支功能需要付费套餐'
    ],
    bestFor: '在 AI IDE 中直接管理 Supabase 项目：数据库、Auth、存储、Functions',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-08，Supabase 官方文档已经把安全边界写得很清楚：默认建议 project_ref + read_only=true，并可用 features 限制工具组。它适合开发和测试，不应直接连生产数据。',
      pitfalls: [
        '默认加 project_ref 和 read_only=true',
        '生产数据不要直连',
        '用 features=database,docs 收敛工具面'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['https://supabase.com/docs/guides/ai-tools/mcp', 'https://github.com/supabase/mcp'],
    decisionSummary: {
      verdict:
        '适合开发/测试环境中让 Agent 查询 Supabase schema、日志和文档；默认应 project-scoped、read-only、最小 feature groups。',
      bestFor: '开发环境数据库查询、schema 理解、日志排查、TypeScript types 生成',
      avoidIf: '你要让未充分约束的 Agent 直接连接生产数据库、Auth 或 Storage',
      mainRisk:
        '未设置 project_ref、read_only 和 features 会扩大权限面；官方也提示切勿将 MCP 服务器连接到生产数据。',
      alternatives: ['Supabase CLI', '只读数据库账号', 'Postgres MCP']
    },
    swot: {
      S: '官方 remote MCP 与 Supabase 深集成',
      W: '权限和生产数据风险高',
      O: 'AI 辅助全栈开发',
      T: 'Postgres/Firebase/Neon MCP'
    },
    tags: ['推荐', 'MCP', '免费', '开源', 'Supabase', '全栈', '官方']
  },
  {
    id: 'figma-mcp',
    name: 'Figma MCP',
    category: 'mcp',
    subcategory: '设计工具',
    developer: 'Figma',
    logo: null,
    versions: [
      {
        type: 'Remote beta',
        pricing:
          'Beta 期间免费；未来将成为按用量计费功能。View/Collab 席位最多 6 次/月；Dev/Full 席位按计划最多 200 次/日，Enterprise 最多 600 次/日',
        models:
          '远程 server 覆盖所有 seat/plan；OAuth endpoint 为 https://mcp.figma.com/mcp',
        link: 'https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/'
      },
      {
        type: 'Desktop beta',
        pricing: '桌面 server 需要付费计划中的 Dev 或 Full seat',
        models: '本地 desktop server，可提供 design context 并支持 write native Figma content',
        link: 'https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server'
      }
    ],
    freeQuota:
      'Beta 期间免费；View/Collab 最多 6 次/月，Dev/Full 最多 200 次/日，Enterprise Dev/Full 最多 600 次/日，另有每分钟限流',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'Figma 官方 MCP server 可向 Agent 提供 design context',
      '远程 server 覆盖所有 seat/plan，入口为 https://mcp.figma.com/mcp',
      '桌面 server 需要 Dev 或 Full seat，可更贴近桌面端文件上下文',
      '支持将 Agent 输出写成 write native Figma content',
      '适合设计系统提取、设计理解和设计到代码的受控辅助'
    ],
    cons: [
      '当前 Beta 期间免费，但官方已说明未来会成为按用量计费功能',
      'View/Collab 仅最多 6 次/月；Dev/Full 依计划为最多 200 次/日，Enterprise 最多 600 次/日，且另有每分钟限流',
      '写入 canvas、生成设计内容和转码结果都需要人工审查',
      '仅在 supported clients 和正确 OAuth 流程下稳定使用'
    ],
    bestFor: '把 Figma 文件上下文带入 AI 客户端，辅助设计理解、转码和设计系统整理',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-13，Figma MCP 远程端点覆盖所有 seat/plan，但 View/Collab 只有最多 6 次/月；Dev/Full 依计划最多 200 次/日，Enterprise 最多 600 次/日。桌面 server 仍要求付费计划的 Dev 或 Full seat。',
      pitfalls: ['核对 seat 对应的月/日调用上限', '确认文件权限与支持的 MCP 客户端', '写入设计前人工审查']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-13',
    sources: [
      'https://developers.figma.com/docs/figma-mcp-server/',
      'https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/',
      'https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server',
      'https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/'
    ],
    decisionSummary: {
      verdict:
        '适合设计与前端团队试点，但要把 beta、seat、文件权限、rate limits 和未来 usage 计费写入采购判断。',
      bestFor: 'Figma design context、设计系统提取、设计转码辅助和受控写入画布',
      avoidIf: '你需要稳定长期固定价格，或无法人工审查 AI 写入的设计内容与生成代码',
      mainRisk:
        'View/Collab 每月最多 6 次调用，Dev/Full 的日限额也随计划变化；未来计费、OAuth、文件权限和支持客户端仍可能变化。',
      alternatives: ['Figma REST API', 'Figma Dev Mode', '手动设计交付/截图标注']
    },
    swot: {
      S: '官方 MCP 与设计上下文质量',
      W: 'beta 计费和席位边界未完全稳定',
      O: '设计转码和设计系统自动化',
      T: 'Builder.io/Locofy/设计工具原生 AI'
    },
    tags: ['MCP', 'Figma', '设计', '设计转码', 'OAuth', '官方', '已核验']
  },
  {
    id: 'vercel-mcp',
    name: 'Vercel MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'Vercel',
    logo: null,
    versions: [
      {
        type: 'Remote Beta',
        pricing:
          'Vercel MCP is Beta and available on all plans；Vercel 资源、seat、domain 和用量仍按计划计费',
        models:
          'OAuth 远程端点为 https://mcp.vercel.com；工具分为公开工具和需认证工具',
        link: 'https://vercel.com/docs/agent-resources/vercel-mcp'
      }
    ],
    freeQuota:
      'MCP 入口本身不等于资源免单；项目、部署、日志、域名购买和运行资源按 Vercel plan/resource billing applies',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'Vercel 官方 remote MCP，Beta 阶段可在 all plans 试用',
      '入口为 https://mcp.vercel.com，使用 OAuth 授权',
      '将 public tools 与 authenticated tools 分开，未登录可查文档，登录后可触达项目、部署、日志和 Agent Runs',
      '工具参考包含 get_runtime_logs 等日志排查能力',
      'approved by Vercel 的客户端会收到 reviewed/approved 标识；官方仍有 approved clients 支持边界'
    ],
    cons: [
      '需认证工具可触达真实项目、部署、日志、受保护 URL、Toolbar 讨论串、域名查询或购买及 CLI 部署操作，必须启用人工确认',
      '官方明确提示 prompt injection 风险，不能把未审查网页内容直接变成生产操作',
      '实际成本按 Vercel plan、资源用量、seat 和域名交易结算',
      'Beta 工具面和客户端支持可能变化'
    ],
    bestFor: '在 AI 客户端中查询 Vercel 文档、项目、部署状态和运行日志，并受控执行平台操作',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Vercel MCP 是官方 Beta remote MCP。它适合让 Agent 查 docs、项目、部署和日志，但 authenticated tools 已经接近运维入口，且官方客户端支持有 approved clients 限制；必须把 human confirmation、prompt injection 和账单边界放在第一层。',
      pitfalls: ['开启 human confirmation', '限制 OAuth 账号权限', '高风险操作先在预览环境验证']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://vercel.com/docs/agent-resources/vercel-mcp',
      'https://vercel.com/docs/agent-resources/vercel-mcp/tools'
    ],
    decisionSummary: {
      verdict:
        '适合 Vercel 用户把 docs、projects、deployments 和 runtime logs 接入 Agent；生产动作必须有确认和账单意识。',
      bestFor: 'Vercel 项目诊断、部署状态查询、运行日志排查和文档检索',
      avoidIf: '你无法控制 OAuth 授权范围、账单风险，或不愿对 Agent 触发的平台动作做人工确认',
      mainRisk:
        'authenticated tools 可触达真实 Vercel 资源；prompt injection 与误操作可能造成部署、域名购买或账单影响，必须 human confirmation。',
      alternatives: ['Vercel Dashboard', 'Vercel CLI', '只读日志/部署摘要导出']
    },
    swot: {
      S: '官方 remote MCP 与 Vercel 平台上下文',
      W: 'Beta 与平台绑定',
      O: 'AI 辅助部署诊断和日志排查',
      T: 'Netlify/Cloudflare/Render 工具链'
    },
    tags: ['MCP', 'Vercel', '部署', 'Next.js', 'OAuth', '官方', '已核验']
  },

  // ============= 新增 MCP 工具 (8个) =============
  {
    id: 'slack-mcp',
    name: 'Slack MCP',
    category: 'mcp',
    subcategory: '协作工具',
    developer: 'Slack',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Slack MCP server；Slack workspace/Enterprise 权限、partner app 和计划另行适用',
        models: 'Slack MCP tools for search, messages, canvases, member info',
        link: 'https://slack.com/help/articles/48855576908307-Guide-to-Model-Context-Protocol-in-Slack'
      }
    ],
    freeQuota:
      '未作为独立永久免费额度承诺；可用性取决于 Slack workspace/Enterprise、partner app、管理员批准和 OAuth scopes',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Slack 官方说明 MCP server provides secure access to your Slack workspace，让第三方 AI assistants 能访问组织数据',
      '官方 Slack MCP Server 可搜索频道、发送消息，并由工作区管理员审批和管理 MCP 客户端集成',
      '官方端点为 https://mcp.slack.com/mcp；工具同样受 Slack Web API rate limits 约束',
      '可搜索消息、文件、成员和频道，并读取或发送消息',
      '连接后 AI 助手可以读取指定频道或会话、发送消息并创建 Canvas',
      'Slack OAuth 使用权限范围；权限范围决定应用具体可以访问哪些功能和数据',
      '适合把 Slack 搜索和线程上下文带入受控 Agent 工作流'
    ],
    cons: [
      '消息、文件、成员资料和 channel history 都可能含敏感信息，OAuth scopes 必须最小化',
      '发送消息属于写操作，默认应要求人工确认',
      'Slack MCP 依赖 partner app/管理员批准，不能把任意客户端接入视为稳定可用',
      '非 Marketplace 或自建应用还要关注 Slack API rate limits 和 workspace policy'
    ],
    bestFor: '在受控 workspace 中让 Agent 检索 Slack 上下文，或在人工确认后辅助回复线程',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Slack 已有官方 MCP Server 文档。它的关键价值是把 Slack 搜索、频道/线程、消息发送和 Canvas 变成 Agent 上下文；关键风险是同一个连接可能读取或发送消息，所以应按工作区策略、管理员审批和 OAuth 权限范围进行最小授权。',
      pitfalls: ['最小化 OAuth scopes', '写消息前人工确认', '敏感频道先排除']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://docs.slack.dev/ai/slack-mcp-server',
      'https://slack.com/help/articles/48855576908307-Guide-to-Model-Context-Protocol-in-Slack',
      'https://api.slack.com/authentication/oauth-v2'
    ],
    decisionSummary: {
      verdict:
        '适合把 Slack 历史消息和线程上下文接入 Agent；默认按只读优先、最小 scopes、发送消息人工确认来配置。',
      bestFor: 'Slack 消息/文件/成员/频道搜索，线程上下文整理，人工确认后的回复草稿',
      avoidIf:
        '你无法限制频道范围、OAuth scopes、partner app 权限，或不希望 Agent 接触内部沟通数据',
      mainRisk:
        'Slack MCP 可读取指定频道或会话，也可发送消息；OAuth 权限范围和工作区管理不到位会扩大内部数据与误发消息风险。',
      alternatives: ['Slack 搜索', 'Slack Workflow Builder', '只读导出/知识库同步']
    },
    swot: { S: '团队沟通集成', W: '权限管理复杂', O: '远程办公需求', T: '原生 Slack AI' },
    tags: ['MCP', 'Slack', '协作', '消息', '官方']
  },
  {
    id: 'linear-mcp',
    name: 'Linear MCP',
    category: 'mcp',
    subcategory: '项目管理',
    developer: 'Linear',
    logo: null,
    versions: [
      {
        type: 'Remote',
        pricing:
          'Linear workspace 计划适用：Free 含 250 issues，Basic $10 per user/month，Business $16 per user/month',
        models: 'https://mcp.linear.app/mcp；OAuth token 或 API keys；Authorization: Bearer',
        link: 'https://linear.app/docs/mcp'
      }
    ],
    freeQuota:
      'Linear Free 计划含 250 issues；MCP access、AI credits、issue/project/comment 操作和 API limits 受 workspace plan 与权限影响',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Linear 官方 remote MCP，入口为 https://mcp.linear.app/mcp',
      '支持通过 OAuth token 或 API keys 接入，API key 可用 Authorization: Bearer 头',
      '适合在 AI 客户端查找、创建和更新 issues、projects、comments',
      'Pricing 页面明确列出 Free、Basic $10 per user/month、Business $16 per user/month',
      'Agent platform 中包含 MCP access 和 AI credits 相关能力'
    ],
    cons: [
      '不是独立无限额度能力，受 Linear workspace plan、OAuth scopes、API keys 权限和 API limits 影响',
      '写入 issue、comment、project status 前应做人工确认',
      'Free 的 250 issues 和 AI credits 边界需要按 workspace 当前计划复核',
      '管理员应最小化 token 权限并定期轮换'
    ],
    bestFor: '把 Linear issue、project、comment 上下文接入 AI 客户端，辅助研发任务流转',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Linear MCP 应按官方 remote MCP 和 workspace 计划来判断：它很适合让 Agent 处理 issues/projects/comments，但费用、AI credits、API limits 和 token scopes 都跟 Linear workspace 治理绑定。',
      pitfalls: ['OAuth/API key 最小权限', '写操作人工确认', '复核 plan 与 AI credits']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['https://linear.app/docs/mcp', 'https://linear.app/pricing'],
    decisionSummary: {
      verdict:
        '适合 Linear 团队把 issue/project/comment 流程接入 AI 客户端；价格与额度按 workspace plan、MCP access 和 AI credits 判断。',
      bestFor: '研发任务查询、issue/comment 草稿、项目状态整理和低风险更新',
      avoidIf: '你无法治理 OAuth token、API keys、Authorization: Bearer 凭据或写操作确认',
      mainRisk:
        'Agent 可创建和更新真实 Linear 记录；AI credits、Free/Basic/Business 计划、API limits 与权限治理会影响成本和可靠性。',
      alternatives: ['Linear Web/App', 'Linear API', 'Jira/GitHub Issues']
    },
    swot: {
      S: '官方 remote MCP 与研发任务语义强',
      W: '计划、credits 和权限边界需要治理',
      O: 'AI 辅助 issue/project 流转',
      T: 'Jira/GitHub Issues/Shortcut'
    },
    tags: ['MCP', 'Linear', '项目管理', 'Issue', 'OAuth', '官方', '已核验']
  },
  {
    id: 'sentry-mcp',
    name: 'Sentry MCP',
    category: 'mcp',
    subcategory: '监控调试',
    developer: 'Sentry',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Sentry MCP / OAuth；Sentry 项目、组织和计划另行适用',
        models: 'Sentry issue, project and telemetry context through MCP',
        link: 'https://docs.sentry.io/product/sentry-mcp/'
      }
    ],
    freeQuota:
      'MCP 连接不等于 Sentry 数据免费；使用受 Sentry plan、organization/project permissions、OAuth/Auth Token scopes 限制',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Sentry MCP 支持通过 OAuth authentication flow 连接 Claude Code 等 MCP client',
      '官方仓库说明 remote MCP 主要面向 human-in-the-loop coding agents 和 debugging workflows，不是 general-purpose MCP server',
      '可把 Sentry issue、stack trace、project context 和 production error data 带入 Agent 排查',
      'Auth Token 模式需要明确 permissions and scopes，并映射到 Sentry API 权限',
      '适合只读查看错误上下文、生成修复假设和复现线索',
      '可与项目/组织权限结合，按 project scopes 收敛访问面'
    ],
    cons: [
      'production error data 可能包含 PII、请求参数、客户标识或内部路径，接入 Agent 前需确认数据脱敏和保留策略',
      'Auth Token scopes 过大时可访问组织或项目级敏感数据',
      'AI 给出的根因和修复建议仍需复现、测试和人工审查',
      '完整 API 能力和历史数据受 Sentry plan 与组织权限影响'
    ],
    bestFor: '在 AI IDE 中只读检索 Sentry 错误上下文，并辅助生成可验证的修复方案',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '截至 2026-07-08，Sentry MCP 的选型重点是错误数据治理：OAuth/Auth Token 如何授权、哪些 project scopes 可见、production error data 中是否含 PII，以及 Agent 输出是否有测试闭环。它更适合 human-in-the-loop coding agents，不应当成 general-purpose MCP server。',
      pitfalls: ['优先只读和最小 scopes', '确认 PII 脱敏', '修复建议必须复现和测试']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://mcp.sentry.dev/',
      'https://github.com/getsentry/sentry-mcp',
      'https://docs.sentry.io/product/sentry-mcp/',
      'https://docs.sentry.io/account/auth-tokens/',
      'https://docs.sentry.io/api/auth/'
    ],
    decisionSummary: {
      verdict:
        '适合把 Sentry 错误上下文带入 Agent 做排查辅助；默认只读、项目级授权、保护 PII，并用测试验证修复。',
      bestFor: '错误堆栈分析、issue 聚类、复现线索整理、修复草案生成',
      avoidIf: '你无法约束 organization/project scopes，或错误事件中包含未脱敏的客户数据和 PII',
      mainRisk:
        'Sentry MCP 会暴露 production error data；Auth Token/OAuth permissions and scopes 配置过大时，Agent 可接触敏感项目和用户数据。',
      alternatives: ['Sentry Web UI', 'Sentry CLI', '只读错误摘要导出']
    },
    swot: { S: 'AI 辅助 Debug 闭环', W: '依赖 Sentry', O: '可观测性 + AI', T: '其他 APM 工具 MCP' },
    tags: ['MCP', 'Sentry', '监控', 'Debug', '错误追踪']
  },
  {
    id: 'docker-mcp',
    name: 'Docker MCP',
    category: 'mcp',
    subcategory: 'DevOps',
    developer: 'Docker',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Docker MCP Toolkit / MCP Catalog；Availability: Beta，Docker Desktop/Hub/plan 规则另行适用',
        models: 'MCP Toolkit、Catalog、Gateway 和容器化 MCP servers',
        link: 'https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/'
      }
    ],
    freeQuota:
      'MCP Toolkit 不是生产资源免费承诺；实际镜像、Docker Desktop、Hub、运行环境和第三方 server 使用仍按各自规则处理',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Docker MCP Toolkit 官方文档标注 Availability: Beta',
      'Docker MCP Catalog 提供 300+ verified servers，并通过 profiles 组织不同项目的 server 配置',
      'MCP Gateway 将 MCP servers 运行在隔离 Docker 容器中，并限制权限、网络访问和资源使用',
      '内置 logging 与 call-tracing，便于治理 AI 工具活动',
      'Docker MCP Toolkit 结合 passive 和 active security，减少 MCP server 运行时攻击面',
      '运行时限制包括 1 CPU 和 2 GB memory allocation'
    ],
    cons: [
      'Beta 阶段界面和工具行为可能变化，需匹配 Docker Desktop 版本',
      '容器隔离降低风险但不等于可放心操作生产 Docker host',
      'MCP servers 仍可能接触本地文件、网络、凭据或 Docker socket，应按 profile 和权限逐项审查',
      '第三方 MCP server 的供应链和权限边界仍需单独评估'
    ],
    bestFor: '在 Docker Desktop 管理的开发环境中运行和治理容器化 MCP servers',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Docker MCP 更准确的定位是 Catalog/Toolkit/Gateway：用 300+ verified servers、profiles、容器隔离、资源限制和调用追踪来管理 MCP server，而不是让 Agent 直接随意控制 Docker 主机。',
      pitfalls: [
        '只在开发 profile 试点',
        '审查 server 权限和镜像来源',
        '生产环境走 CI/CD 和人工审批'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/',
      'https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/'
    ],
    decisionSummary: {
      verdict:
        '适合用 Docker Desktop/Toolkit 管理容器化 MCP servers；重点是隔离、资源限制、日志追踪和 profile 权限治理。',
      bestFor: '本地开发中的 MCP server 发现、隔离运行、权限治理和调用追踪',
      avoidIf: '你要让 Agent 操作生产 Docker host，或无法审计镜像来源、网络访问和凭据暴露面',
      mainRisk:
        'Docker MCP Gateway 以隔离 Docker 容器降低风险，但 server 仍可能通过网络访问、资源使用或宿主权限造成影响；Beta 阶段需谨慎试点。',
      alternatives: ['Docker CLI/Compose', 'CI/CD pipeline', 'Kubernetes RBAC']
    },
    swot: { S: '开发环境管理', W: '安全风险', O: '容器化普及', T: 'K8s 管理工具' },
    tags: ['MCP', 'Docker', 'DevOps', '容器', '官方']
  },
  {
    id: 'stripe-mcp',
    name: 'Stripe MCP',
    category: 'mcp',
    subcategory: '支付API',
    developer: 'Stripe',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Stripe 官方 remote MCP server；MCP server 不单独定价，实际操作受 Stripe 产品费用、API 权限和账号模式影响',
        models: 'Stripe API tools, documentation search, implementation planner',
        link: 'https://docs.stripe.com/mcp'
      }
    ],
    freeQuota:
      '连接方式优先 OAuth；自主 Agent 可用 restricted API keys，sandbox and live mode access 分开管理',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Stripe 官方 MCP Server，remote URL 为 https://mcp.stripe.com',
      '支持 Cursor、Claude Code、ChatGPT、VS Code 和自定义 MCP client',
      '默认推荐 OAuth，比直接使用 secret key 更细粒度且可撤销',
      'Autonomous agents 可用 restricted API keys，并按最小权限授权',
      '工具包括 stripe_api_search、stripe_api_details、stripe_api_read、stripe_api_write、create_refund、search_stripe_documentation 等',
      'MCP access 在 Dashboard 中按 sandbox and live mode 分开管理'
    ],
    cons: [
      '涉及客户、付款、退款、发票和订阅等高敏资源',
      'stripe_api_write 可触发 POST/PATCH/PUT/DELETE，必须启用 human confirmation',
      '与其他 MCP server 混用时要防 prompt injection',
      '不要把 restricted or secret API keys 写入代码，应放入 secrets vault 或环境变量',
      'Connect 平台调用 connected accounts 时不能用 OAuth，需要 restricted access keys 和 Stripe-Account header'
    ],
    bestFor: '在 AI IDE 中查询支付数据、调试 Webhook、管理产品',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Stripe MCP 是官方 remote MCP server，不应再指向泛 Claude Code 仓库。支付类 MCP 的重点是权限治理：OAuth 优先，Agent 用 restricted API keys，写工具必须 human confirmation，并且 sandbox/live mode 分开管理。',
      pitfalls: [
        '优先 OAuth 和 restricted API keys',
        '启用 human confirmation',
        'sandbox/live mode 分开授权'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://docs.stripe.com/mcp',
      'https://github.com/stripe/ai',
      'https://docs.stripe.com/keys/restricted-api-keys'
    ],
    decisionSummary: {
      verdict:
        '适合让 Agent 辅助 Stripe 集成和只读排查；涉及写操作、退款、订阅变更时必须人工确认和最小权限。',
      bestFor: 'Stripe 文档检索、API 集成规划、客户/订单/订阅只读排查、sandbox 调试',
      avoidIf: '你不能治理 OAuth session、restricted keys、sandbox/live mode 和写工具确认流程',
      mainRisk:
        'stripe_api_write、create_refund 等工具可修改真实支付资源；应使用受限 API 密钥、人工确认，并隔离沙箱与正式环境。',
      alternatives: ['Stripe Dashboard', 'Stripe CLI', '自建只读后台']
    },
    swot: {
      S: '官方 remote MCP 与 Stripe API/文档结合',
      W: '支付写操作高风险',
      O: 'SaaS 计费与 AI 编程工具融合',
      T: 'Dashboard/CLI 和自建权限层'
    },
    tags: ['MCP', '免费', 'Stripe', '支付', 'SaaS']
  },
  {
    id: 'cloudflare-mcp',
    name: 'Cloudflare MCP',
    category: 'mcp',
    subcategory: 'DevOps',
    developer: 'Cloudflare',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Cloudflare managed remote MCP servers；实际资源按 Cloudflare 产品与计划计费',
        models: 'Cloudflare API Code Mode server and product-specific MCP servers',
        link: 'https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/'
      }
    ],
    freeQuota:
      'MCP server 连接本身不代表资源免费；Workers、R2、D1、AI Gateway、DNS 等仍按 Cloudflare 计划和用量计费',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Cloudflare 官方 managed remote MCP servers，可通过 OAuth 接入',
      'Cloudflare API MCP server 覆盖 over 2,500 endpoints across DNS, Workers, R2, Zero Trust 等',
      'Code Mode 仅暴露 search() 和 execute() 两个工具，约 1,000 tokens 即可覆盖大量 API',
      '生成代码在 isolated Dynamic Worker sandbox 中执行',
      'CI/CD 或 automation 可用 Cloudflare API token，并只授予所需 permissions',
      'managed remote MCP servers 支持 streamable-http transport；SSE transport 已标注 deprecated',
      '另有 docs、bindings、builds、observability、browser、AI Gateway、audit logs、DNS Analytics 等 product-specific MCP servers'
    ],
    cons: [
      'execute() 可执行 Cloudflare API 调用，可能改 DNS、Workers、KV/R2/D1、Zero Trust 等资源',
      'OAuth 授权或 API token 权限过大时风险很高',
      'MCP server 免费不等于 Cloudflare 资源免费',
      'Code Mode 广覆盖适合专家，普通团队应优先使用 product-specific servers 收敛工具面'
    ],
    bestFor: '在 AI IDE 中管理 Cloudflare Workers、KV 存储和 DNS',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，Cloudflare MCP 分为广覆盖的 API Code Mode server 和更收敛的 product-specific MCP servers。它很强，但应按权限治理来用：OAuth 选择最小权限，CI/CD 用 API token，并优先选择具体产品 server 降低误操作面；当前文档以 streamable-http 为主，SSE 属 deprecated transport。',
      pitfalls: [
        'OAuth/API token 只给必要权限',
        'DNS/Workers/R2/D1 写操作要人工确认',
        '能连接 MCP 不代表资源免费'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/',
      'https://github.com/cloudflare/mcp',
      'https://github.com/cloudflare/mcp-server-cloudflare'
    ],
    decisionSummary: {
      verdict:
        '适合 Cloudflare 重度用户把查询、调试和部署接入 Agent；默认应最小权限、优先 product-specific server、写操作人工确认。',
      bestFor: 'Workers、R2、D1、DNS、AI Gateway、Observability 和 Audit Logs 的 AI 辅助运维/开发',
      avoidIf:
        '你无法约束 OAuth/API token 权限，或不希望 Agent 拥有 DNS、部署、存储和安全配置的执行能力',
      mainRisk:
        'Cloudflare API MCP 覆盖 over 2,500 endpoints，search()/execute() 能触达大量资源；权限过大可能造成 DNS、部署或账单风险。',
      alternatives: ['Wrangler CLI', 'Cloudflare Dashboard', 'product-specific MCP servers']
    },
    swot: {
      S: '官方 remote MCP、Code Mode 覆盖面大',
      W: '权限和误操作面大',
      O: '边缘应用和 AI 运维增长',
      T: 'AWS/GCP/Vercel 平台工具'
    },
    tags: ['MCP', '免费', 'Cloudflare', 'Workers', 'DevOps', '官方']
  },
  {
    id: 'gitlab-mcp',
    name: 'GitLab MCP',
    category: 'mcp',
    subcategory: '开发工具',
    developer: 'GitLab',
    logo: null,
    versions: [
      {
        type: 'Official Beta',
        pricing: '适用于 Premium、Ultimate；当前状态：Beta',
        models: 'OAuth 2.0 Dynamic Client Registration over HTTP transport at /api/v4/mcp',
        link: 'https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/'
      },
      {
        type: 'PAT fallback',
        pricing: 'personal access tokens 需按最小 scope 管理',
        models: 'Rotate and Revoke token lifecycle；GitLab.com/Self-Managed/Dedicated 权限另行适用',
        link: 'https://docs.gitlab.com/user/profile/personal_access_tokens/'
      }
    ],
    freeQuota:
      '官方 MCP server 是 Premium, Ultimate 的 Beta 功能；账号、项目权限、Duo/MCP 工具和 rate limits 另行适用',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'GitLab 官方 MCP server，Status: Beta，适用于 Premium, Ultimate',
      '使用 OAuth 2.0 Dynamic Client Registration 和 HTTP transport，端点为 /api/v4/mcp',
      '可让客户端访问 GitLab 数据，并代表用户执行操作',
      '工具覆盖 issue、merge request、pipeline、search、semantic_code_search 等研发场景',
      '支持 GitLab.com, Self-Managed and Dedicated 时需按实例与权限配置'
    ],
    cons: [
      '不是社区免维护工具，需确认 Premium, Ultimate 层级、Beta 状态和组织策略',
      'AI 客户端可代表用户执行 GitLab 操作，create_issue、create_merge_request、manage_pipeline 等需人工确认',
      'personal access tokens 仍需最小 scope、Rotate、Revoke 和到期策略',
      '自托管网络、OAuth 注册和 rate limits 需要管理员治理'
    ],
    bestFor:
      'GitLab Premium/Ultimate 团队在 AI 客户端中受控查询和更新 issue、MR、pipeline 与代码搜索',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，GitLab MCP 已有官方 Beta 文档，应按 Premium, Ultimate、GitLab.com, Self-Managed and Dedicated、OAuth DCR、HTTP /api/v4/mcp 和工具权限来评估。它能触达真实 MR、issue 和 pipeline，因此风险管理比“能不能连上”更重要。',
      pitfalls: [
        '确认 Premium/Ultimate 和 Beta 限制',
        'OAuth/PAT 最小权限',
        'pipeline/MR 操作人工确认'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/',
      'https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server_tools/',
      'https://docs.gitlab.com/user/profile/personal_access_tokens/'
    ],
    decisionSummary: {
      verdict:
        '适合已在 GitLab Premium/Ultimate 上的团队试点官方 Beta MCP；必须按 OAuth、PAT、工具权限和人工确认治理。',
      bestFor: 'issue/MR/pipeline/search/semantic_code_search 的受控 AI 辅助',
      avoidIf:
        '你只使用 Free/无 Duo 场景，或无法配置 OAuth 2.0 Dynamic Client Registration、PAT 生命周期和审计策略',
      mainRisk:
        'GitLab MCP 可代你执行操作；manage_pipeline、MR 和 issue 写入会影响真实研发流程，个人访问令牌必须定期轮换或撤销，并遵循最小授权。',
      alternatives: ['GitLab Web UI', 'GitLab CLI/API', 'GitHub MCP']
    },
    swot: {
      S: '官方 GitLab MCP 与企业权限体系',
      W: 'Beta 与 Premium/Ultimate 门槛',
      O: '企业研发流程 AI 化',
      T: 'GitHub/Jira/CI 平台工具'
    },
    tags: ['MCP', 'GitLab', 'CI/CD', 'MR', 'OAuth', '官方', '已核验']
  },
  {
    id: 'elasticsearch-mcp',
    name: 'Elasticsearch MCP',
    category: 'mcp',
    subcategory: '数据工具',
    developer: 'Elastic',
    logo: null,
    versions: [
      {
        type: 'Agent Builder',
        pricing: 'Elastic project、Kibana 和基础设施成本另行适用',
        models:
          'Agent Builder MCP 服务；Elasticsearch 9.2+ 和 Serverless 项目的推荐方案',
        link: 'https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/mcp-server'
      },
      {
        type: 'Legacy server',
        pricing: '旧版 mcp-server-elasticsearch 可自托管，官方定位为较早 Elasticsearch 版本的受限路径',
        models: '提供两种 MCP 服务器方案；访问范围由 API 密钥被授予的权限决定',
        link: 'https://github.com/elastic/mcp-server-elasticsearch'
      }
    ],
    freeQuota:
      'MCP server 不包含 Elastic 集群或 Serverless 项目成本；API_KEY 权限、KIBANA_URL、索引范围和最小权限原则需要自行治理',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Elastic 官方文档提供两种 MCP 服务器方案：Agent Builder MCP server 与旧版 mcp-server-elasticsearch',
      'Agent Builder MCP server 是 Elasticsearch 9.2 及以上版本和 Serverless 项目的推荐方案',
      '通过 KIBANA_URL 与 API_KEY 接入，能力取决于 API 密钥被授予的权限范围',
      '旧版服务器仍可用于较早 Elasticsearch 版本的有限查询场景',
      '适合把日志、索引 mapping、ES|QL/search 辅助带入受控 Agent 流程'
    ],
    cons: [
      '旧 mcp-server-elasticsearch 已不应作为新项目首选，主要适合老版本或迁移期',
      'API_KEY 权限过大可能暴露大量日志、PII、业务数据或高成本查询面',
      '必须按最小权限原则、索引范围、只读查询和查询成本限制来配置',
      '大规模搜索/ES|QL 查询可能影响集群性能与费用'
    ],
    bestFor:
      'Elastic 9.2+ 或 Serverless 项目优先评估 Agent Builder MCP server，旧集群再考虑 legacy server',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Elastic MCP 选型要先区分 Agent Builder MCP server 与 legacy server。新 Elastic 9.2+ 与 Serverless projects 优先走 Agent Builder；旧 server 适合有限只读排查，并且 API_KEY 必须最小权限。',
      pitfalls: ['优先 Agent Builder', 'API_KEY 最小 scope', '限制索引与查询成本']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.elastic.co/docs/explore-analyze/ai-features',
      'https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/mcp-server',
      'https://github.com/elastic/mcp-server-elasticsearch'
    ],
    decisionSummary: {
      verdict:
        '新项目优先评估 Elastic Agent Builder MCP server；旧版服务器只适合较早 Elasticsearch 版本的受限只读查询和迁移期。',
      bestFor: 'Elastic 日志/搜索数据的受控查询、mapping 理解、ES|QL 辅助和排障上下文整理',
      avoidIf:
        '你不能限制 API_KEY、索引范围、查询成本或敏感日志访问，或希望 Agent 直接处理生产高风险数据',
      mainRisk:
        'KIBANA_URL 与 API_KEY 的暴露面取决于 API 密钥权限；若未按最小权限原则配置，Agent 可能读取敏感日志或触发昂贵查询。',
      alternatives: ['Kibana Discover/Agent Builder', 'Elastic API', '只读日志导出']
    },
    swot: {
      S: '官方 Agent Builder 路径与 Elastic 数据上下文',
      W: '旧 server 与新路径容易混淆',
      O: 'AI 辅助可观测性和搜索排障',
      T: 'Datadog/Splunk/OpenSearch 工具链'
    },
    tags: ['MCP', 'Elasticsearch', 'Elastic', '日志', '搜索', '数据', '已核验']
  },

  // ============= 新增 Agent 平台/框架 (5个) =============
  {
    id: 'autogen',
    name: 'AutoGen',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'Microsoft',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: '开源代码可用；模型/API 成本另计；GitHub 仓库标注为维护模式',
        models: 'AutoGen Studio、AgentChat、Core、v0.4 迁移',
        link: 'https://microsoft.github.io/autogen/stable/'
      }
    ],
    freeQuota: '框架代码可用；运行需自行承担模型、工具和基础设施成本',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    pros: [
      'AutoGen Studio 提供无代码原型界面，基于 AgentChat',
      'AgentChat 面向对话式单 Agent 和多 Agent 应用，要求 Python 3.10+',
      'Core 是事件驱动框架，可构建可扩展的多 Agent AI 系统',
      'v0.4 引入异步、事件驱动架构，并提供从 v0.2 迁移指南',
      '文档覆盖 Selector Group Chat、Swarm、Magentic-One、GraphFlow、Memory and RAG、Tracing and Observability'
    ],
    cons: [
      'GitHub 仓库标注为维护模式，不再新增功能或增强项',
      '从 v0.2 到 v0.4 存在破坏性变更，旧 pyautogen 包也有来源提醒',
      'Microsoft 建议新项目从 Microsoft Agent Framework 开始，AutoGen 后续更偏向社区维护',
      '新项目需要评估是否采用后续 Microsoft Agent Framework 或其他活跃框架'
    ],
    bestFor: '学习多 Agent 架构、维护历史 AutoGen 项目、迁移 v0.2 到 v0.4',
    funRanking: '夯夯',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-08，AutoGen 更适合“历史项目维护与多 Agent 架构学习”而不是默认新项目首选。官方稳定版文档仍覆盖 AutoGen Studio、autogen-agentchat、Core 和 v0.4 迁移，但 GitHub 仓库已标注为维护模式，并建议新项目评估 Microsoft Agent Framework；后续维护更偏向社区。',
      pitfalls: [
        '维护模式会影响长期路线',
        'v0.2/v0.4 迁移成本不可忽略',
        '生产项目需评估替代框架活跃度'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://microsoft.github.io/autogen/stable/',
      'https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/migration-guide.html',
      'https://github.com/microsoft/autogen'
    ],
    decisionSummary: {
      verdict: '适合作为 AutoGen 历史项目维护和多 Agent 概念学习资料；新项目默认选型要谨慎。',
      bestFor: '维护既有 AutoGen 项目、学习 AgentChat/Core/Magentic-One 等多 Agent 模式',
      avoidIf: '你要启动长期生产项目，并希望依赖持续新增功能的核心框架',
      mainRisk: 'GitHub 仓库标注为维护模式，长期路线、依赖升级和社区活跃度都需要重新评估。',
      alternatives: ['Microsoft Agent Framework', 'LangGraph', 'CrewAI']
    },
    swot: {
      S: '多 Agent 文档和历史案例',
      W: '目前处于维护模式',
      O: '迁移和教学场景',
      T: '更活跃的新框架'
    },
    tags: ['Agent', '免费', '开源', '微软', '多Agent', '企业']
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI Automation',
    category: 'agent',
    subcategory: '工作流自动化',
    developer: 'Zapier',
    logo: null,
    versions: [
      {
        type: 'Platform',
        pricing:
          '免费版 $0/月，每月含 100 个任务；专业版 $19.99/月起；团队版 $69/月起',
        models: 'Zap 工作流、Zapier MCP Beta、SDK、Agents、Chatbots、Tables 与 Forms',
        link: 'https://zapier.com/pricing'
      },
      {
        type: 'Zapier MCP',
        pricing: '按任务量计费；AI 步骤、代码和 SDK 共用同一个任务额度池',
        models: '9,000+ apps, 40,000+ actions, dynamic tool discovery',
        link: 'https://docs.zapier.com/mcp/home'
      },
      {
        type: 'Legacy AI Actions',
        pricing: '仅供现有用户参考',
        models: 'AI Actions 已停止开发和支持',
        link: 'https://help.zapier.com/hc/en-us/articles/17013994198925-Zapier-AI-actions-in-other-apps'
      }
    ],
    freeQuota: 'Free：100 tasks per month；Zap workflows、MCP server actions 等共享任务额度',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Zapier MCP 可把 AI 客户端连接到 9,000+ apps 和 40,000+ actions',
      'Free 计划包含 100 tasks per month，适合低频验证',
      '定价页显示 AI steps, code, and SDK 采用统一 task-based pricing，便于跨产品估算成本',
      'MCP、SDK、Agents、Chatbots、Tables 和 Forms 已纳入统一平台叙事',
      'Each successful action in a Zap counts as a separate task，MCP/AI 调用也要按任务池管理'
    ],
    cons: [
      'AI Actions is no longer being developed and supported，新项目应优先评估 Zapier MCP Beta、SDK 或 Agents',
      'shared task pool 意味着 Zap workflows、AI steps、code、MCP、SDK 会共同消耗任务额度',
      '自动化一旦连接真实 SaaS 账号，AI 工具调用可能发送邮件、改 CRM、建 issue 或更新表格，需要权限和确认策略',
      '高级治理、SSO、审计、app controls 等能力集中在 Team/Enterprise 档位',
      '国内访问、SaaS 授权和数据出境要按企业环境实测'
    ],
    bestFor: '需要 9,000+ SaaS 连接、AI-to-app 操作和统一治理的业务自动化团队',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Zapier 条目不应再以 AI Actions 为主。官方帮助页说明 AI Actions 已停止开发和支持；当前选型应看 Zapier MCP Beta、SDK、Agents 和统一任务计费。',
      pitfalls: [
        '先按真实动作数估算 tasks',
        'AI 调用真实 SaaS 前设置人工确认',
        '不要把 AI Actions 当新项目入口'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://zapier.com/pricing',
      'https://zapier.com/apps',
      'https://docs.zapier.com/mcp/home',
      'https://help.zapier.com/hc/en-us/articles/17013994198925-Zapier-AI-actions-in-other-apps',
      'https://help.zapier.com/hc/en-us/articles/32337438839565-What-s-included-in-Zapier-s-Free-plan'
    ],
    decisionSummary: {
      verdict:
        'Zapier 仍适合 AI-to-app 自动化，但 AI Actions 已转为存量参考，新项目应优先看 Zapier MCP、SDK 或 Agents。',
      bestFor: '跨 SaaS 应用的自然语言操作、业务自动化、团队治理和低代码工作流',
      avoidIf: '你需要本地优先、开源自托管、低成本高频任务，或无法治理 AI 对真实 SaaS 账号的写操作',
      mainRisk:
        'task-based pricing 和 shared task pool 会让 Zap workflows、AI steps、code、MCP、SDK 共用额度；AI 工具调用真实业务系统前必须控制权限和确认。',
      alternatives: ['Make', 'n8n', 'Pipedream']
    },
    swot: {
      S: 'SaaS 连接面广、MCP/SDK/Agents 统一',
      W: '任务计费和治理复杂',
      O: 'AI orchestration 平台化',
      T: 'Make、n8n、Pipedream 等自动化平台'
    },
    tags: ['Agent', '部分免费', '自动化', '工作流', 'ZapierMCP', '已核验']
  },
  {
    id: 'make',
    name: 'Make (Integromat)',
    category: 'agent',
    subcategory: '工作流自动化',
    developer: 'Make',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free $0/mo，最多 1,000 credits/month；Core $9/mo、Pro $16/mo、Teams $29/mo 默认按 10k credits/mo 展示',
        models: '可视化工作流构建器、3000+ apps、350+ AI apps',
        link: 'https://www.make.com/en/pricing'
      },
      {
        type: 'Make + AI',
        pricing: 'AI Provider 可在所有计划使用；部分 AI/advanced apps 动态消耗 credits',
        models:
          'Make AI Agents beta、Make MCP Server、AI Toolkit、AI Web Search beta、AI Content Extractor',
        link: 'https://help.make.com/credits'
      }
    ],
    freeQuota:
      'Free：1,000 credits/month；credits 是计费单位，过量后需升级、购买额外 credits 或启用自动购买',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      'Free 计划含 1,000 credits/month、无代码可视化工作流构建器和 3000+ apps',
      'Core $9/mo、Pro $16/mo、Teams $29/mo 都以 10k credits/mo 为页面默认价格口径',
      'Make + AI 覆盖 350+ AI apps、Make MCP Server、AI Content Extractor、AI Web Search beta、Make AI Agents beta 和 Make AI Toolkit',
      'credits 是计费单位，常见模块动作通常 1 credit，便于从场景执行量估算成本',
      '可视化 scenario、routers、filters、error handlers 和 scheduled scenarios 适合复杂业务流程建模'
    ],
    cons: [
      '使用 Make AI Provider 的部分高级功能可能消耗更多，AI usage 也可能取决于 token/model',
      'credits replaced operations，不能再用旧的操作数口径做成本对比',
      'Make MCP Server 和 scenario runs 会消耗 credits，AI Agent 聊天和工具调用也要估算 credits',
      '免费层适合试用但 active scenarios、调度间隔、执行时长和数据传输都有差异',
      '国内访问、英文文档和权限治理需要团队实测'
    ],
    bestFor: '可视化编排、复杂分支、跨 SaaS 流程、AI agent/MCP 与自动化结合',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，Make 已把旧 operations 口径更新为 credits。它适合偏可视化编排和复杂 scenario 的团队，但 credits、AI Provider token/model 用量和 billing toggle 会影响真实成本，不能和 Zapier tasks 直接一比一比较。',
      pitfalls: [
        '按 scenario 逐步估算 credits',
        'AI Provider 费用单独看 tokens/model',
        '不要用旧 operations 文案'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://www.make.com/en/pricing',
      'https://www.make.com/en/integrations',
      'https://help.make.com/credits',
      'https://www.make.com/en/mcp',
      'https://www.make.com/en/ai-agents'
    ],
    decisionSummary: {
      verdict:
        'Make 适合复杂可视化编排和 AI 自动化场景；真实成本必须按 credits、AI token/model 和 scenario 运行频率估算。',
      bestFor: '复杂流程、分支/错误处理、AI Agents、Make MCP Server 和跨 SaaS 自动化',
      avoidIf: '你需要极低学习成本、中文本地化支持，或无法持续监控 credits 与 AI 用量',
      mainRisk:
        'credits 是计费单位；AI features 可能随 token/model/usage 动态消耗 credits，Make MCP Server 和 scenario runs 也会消耗 credits，不能沿用旧 operations 口径。',
      alternatives: ['Zapier', 'n8n', 'Pipedream']
    },
    swot: {
      S: '可视化 scenario 编排和 AI/MCP 能力',
      W: 'credits 与 AI 计费需要细算',
      O: '业务流程和 Agent 自动化增长',
      T: 'Zapier、n8n、Pipedream 竞争'
    },
    tags: ['Agent', '部分免费', '自动化', '可视化', '工作流', '已核验']
  },
  {
    id: 'camel-ai',
    name: 'CAMEL-AI',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'CAMEL-AI.org',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Apache 2.0 开源框架；模型 API、向量库、工具和部署成本另计',
        models: 'ChatAgent、Agent Societies、Workforce、RAG、工具、记忆、数据生成',
        link: 'https://github.com/camel-ai/camel'
      }
    ],
    freeQuota: '框架本身没有 SaaS 额度；运行成本取决于所选模型供应商和外部工具',
    contextWindow: '取决于模型',
    chineseSupport: 3,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/camel-ai/camel',
      'https://docs.camel-ai.org/',
      'https://pypi.org/project/camel-ai/'
    ],
    pros: [
      'CAMEL 聚焦多 Agent 研究与开发，覆盖 scaling laws、任务自动化、世界模拟和数据生成',
      'Quick start 使用 pip install camel-ai，并提供由模型供应商和工具支撑的 ChatAgent 示例',
      'GitHub 当前 release 线显示 v0.2.90，仍处在快速演进阶段',
      '核心模块包含 Agent Societies、Data Generation、Models、Tools、Memory、Storage、Benchmarks、Interpreters、Retrievers、Runtime 和 Human-in-the-Loop',
      'Apache 2.0 源码许可适合开放实验和内部框架工作',
      'Cookbooks 覆盖 RAG、Graph RAG、工具使用、数据生成、文档/视频处理和多 Agent 应用'
    ],
    cons: [
      '框架覆盖面大且演进快，团队需要版本锁定、回归测试和清晰模块边界',
      '多 Agent 工作流会放大模型调用、工具调用、日志和调试面',
      '研究导向示例进入生产前需要补齐权限、可观测性、重试和数据边界',
      '外部模型供应商、搜索工具、向量库和部署环境都有各自成本与条款'
    ],
    bestFor: '多 Agent 研究、数据生成、RAG/工具编排、Agent society 原型',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，CAMEL-AI 更像一个宽口径的多 Agent 研究与工程框架，而不是简单的角色扮演 demo。它在 agent societies、数据生成、RAG、工具和实验上很有潜力；当前 v0.2.90 仍提示生产用户需要为模型/工具调用和快速依赖演进预留预算。',
      pitfalls: [
        '锁定框架和供应商版本',
        '多 Agent 生产运行前补齐 traces 与测试',
        '为模型、检索和工具调用成本做预算'
      ]
    },
    decisionSummary: {
      verdict:
        '适合多 Agent 研究和原型的开源框架，尤其适合需要在代码中组合 agent societies、数据生成、工具、记忆和 RAG 的团队。',
      bestFor: 'Agent societies、研究原型、合成数据生成、RAG 实验和多 Agent 自动化 cookbook',
      avoidIf: '你需要托管无代码产品、小而稳定的 API 面，或没有 instrumentation 也能预测模型支出',
      mainRisk:
        'CAMEL-AI 活跃且覆盖广，但多 Agent 系统会迅速增加版本、依赖、可观测性和模型/工具成本复杂度。',
      alternatives: ['LangChain / LangGraph', 'CrewAI', 'AgentScope']
    },
    swot: {
      S: 'Agent societies 与研究覆盖广',
      W: '依赖面大且变化快',
      O: '多 Agent 研究和数据生成',
      T: '托管 Agent 平台与更窄框架'
    },
    tags: ['Agent', '开源', 'Apache 2.0', '多Agent', 'ChatAgent', '已核验']
  },
  {
    id: 'agentscope',
    name: 'AgentScope',
    category: 'agent',
    subcategory: '开发框架',
    developer: 'agentscope-ai / open-source community',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Apache License 2.0 开源框架；模型供应商和工具运行时成本另计',
        models: 'AgentScope 2.0、事件系统、权限系统、沙箱、多会话服务',
        link: 'https://github.com/agentscope-ai/agentscope'
      }
    ],
    freeQuota: 'package 本身没有托管额度；运行成本取决于模型供应商、沙箱后端和部署方式',
    contextWindow: '取决于模型',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/agentscope-ai/agentscope',
      'https://docs.agentscope.io/',
      'https://pypi.org/project/agentscope/'
    ],
    pros: [
      'AgentScope 2.0 定位为具备事件驱动抽象的 production-ready agent framework',
      'Quickstart 要求 Python 3.11 或更高版本，并支持 uv pip install agentscope 或 pip install agentscope',
      'GitHub release 线显示 v2.0.4，新闻中持续强调 long-term memory、Agentic Memory、RAG 和 Agent Team',
      '2.0 核心能力包含 Event System、Permission System、Multi-tenancy & Multi-session Service、Workspace / Sandbox Support、middleware、RAG 和长期记忆',
      'Agent-as-service 示例提供 FastAPI 服务和面向多会话 Agent 的 Web UI 模式',
      'Apache License 2.0 让核心框架可用于内部和商业工程，但仍需常规许可审查'
    ],
    cons: [
      'AgentScope 2.0 相比旧 API 是一次主要迁移，因此需要迁移和兼容性测试',
      '权限、沙箱、多租户和 agent service 能力会增加运维责任，而不是自动消除风险',
      'DashScope、OpenAI、Anthropic、Ollama 等外部模型后端仍决定成本、延迟和政策约束',
      '使用 Bash、Read、Write、Edit、Docker 或 E2B 类 workspace 执行工具时，需要明确权限设计'
    ],
    bestFor: '需要事件流、权限、沙箱、多租户和服务化的 Agent 应用',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，更有用的理解方式是 AgentScope 2.0：事件流、权限控制、多会话服务、workspace/sandbox 支持、long-term memory 和 Agent Team。这让它更适合生产形态实验，但也带来迁移和治理工作。',
      pitfalls: [
        '把 2.0 当作迁移边界处理',
        '授予工具写权限前先设计权限和沙箱策略',
        '测算模型和 workspace 后端成本'
      ]
    },
    decisionSummary: {
      verdict:
        '严肃的开源 Agent 框架，适合构建可见、可授权、服务化的 Agent，尤其在沙箱和多会话架构重要时更有价值。',
      bestFor: 'Agent 服务后端、受控工具使用、RAG 服务、沙箱编码 Agent 和事件流 UI 集成',
      avoidIf: '你需要无代码 Bot builder、无法承接 AgentScope 2.0 迁移，或不想治理工具权限',
      mainRisk:
        'AgentScope 2.0 增强了事件、权限、沙箱和服务抽象，但迁移、API 变化、工具权限和模型供应商成本都需要主动管理。',
      alternatives: ['LangGraph', 'CAMEL-AI', 'Dify']
    },
    swot: {
      S: '事件、权限、沙箱和服务抽象',
      W: '2.0 迁移与治理复杂度',
      O: '生产形态 Agent 服务',
      T: 'LangGraph、Dify、CrewAI、CAMEL-AI'
    },
    tags: ['Agent', '开源', 'Apache License 2.0', 'AgentScope 2.0', '权限', '沙箱', '已核验']
  },

  // ============= 新增多模态 (3个) =============
  {
    id: 'luma',
    name: 'Luma',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'Luma AI',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing: 'Plus $30/月；Pro $90/月；Ultra $300/月；Team/Enterprise 需联系销售',
        models:
          'UNI-1/UNI-1.1、Ray3、Ray3.2、Ray3.14、Photon、Luma Agents，以及 Seedance、Kling、Veo、GPT Image、Nano Banana Pro 等第三方模型',
        link: 'https://lumalabs.ai/pricing'
      }
    ],
    freeQuota:
      '各计划包含月度 credits；生成成本按模型和输出规格变化，pricing 页列出 Ray3、Photon、Seedance、Kling、Veo、GPT Image、Nano Banana Pro 等模型成本',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      '当前 pricing 页展示 Plus、Pro、Ultra 和 Team/Enterprise，个人计划从 $30/月起',
      'Pro/Ultra 分别提供 Luma Agents 的 4 倍 / 15 倍用量',
      'pricing 页列出 Ray3.2、Ray3.14 和多种第三方模型成本，适合按模型与输出规格估算',
      'Luma 官方 LLM 信息页说明 Dream Machine 已是 retired terminology，应按 Luma、Ray3、Photon 与 Luma Agents 介绍',
      '官方说明 API 使用 credit system，模型和输出规格会影响消耗',
      'Team/Enterprise 继续覆盖团队协作、用量管理和更高治理需求'
    ],
    cons: [
      '免费试用 credits 不等于长期免费额度',
      '订阅 credits 与 API/企业用量口径需要分开确认，不能简单互相替代',
      '月度 credits、top-up 和第三方模型成本规则需要以当前 pricing 页为准',
      '商业、团队共享、SSO 和训练数据策略需要看 Team/Enterprise'
    ],
    bestFor: '高质量短视频生成、产品展示视频、创意团队视频工作流',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Luma 已把个人计划整理为 Plus $30/月、Pro $90/月、Ultra $300/月，并强调 Luma Agents 与按模型/输出规格变化的 credits。官方说明中 Dream Machine 已是 retired terminology，页面应转向 Luma、Ray3、Photon、Luma Agents 和多模型成本表。',
      pitfalls: [
        '先确认是订阅内 credits、API 用量还是团队/企业计划',
        '按 Ray3、Photon 或第三方模型分别估算消耗',
        '商用团队要核对 Team/Enterprise 权益'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://lumalabs.ai/pricing',
      'https://lumalabs.ai/llm-info',
      'https://lumalabs.ai/learning-hub/dream-machine-credit-system'
    ],
    decisionSummary: {
      verdict:
        '适合创意团队用 Luma Agents、Ray3 和 Photon 做视频/图像工作流；预算要按计划、API 用量和模型成本分开算。',
      bestFor: '高质量短视频生成、产品展示视频、创意团队视频工作流',
      avoidIf: '你需要长期固定免费额度、订阅/API credits 互通，或无法接受按模型规格变化的计费',
      mainRisk:
        '订阅 credits、API 用量、第三方模型成本和 Team/Enterprise 规则不同，不能再按旧 Dream Machine 口径估算',
      alternatives: ['Sora', 'Runway', 'Pika']
    },
    swot: {
      S: 'Ray3、Photon、Luma Agents、创意团队计划',
      W: 'credits/订阅/API 口径多',
      O: '营销、影视预览、电商视频',
      T: 'Sora、Runway、Kling'
    },
    tags: ['多模态', '部分免费', '视频生成', 'AI视频', '3D']
  },
  {
    id: 'hailuo',
    name: '海螺AI (Hailuo)',
    category: 'multimodal',
    subcategory: '视频生成',
    developer: 'MiniMax',
    logo: null,
    versions: [
      {
        type: 'Global/CN',
        pricing:
          'Standard $14.99/1,000 credits；Pro $54.99/4,500；Master $119.99/10,000；Ultra $124.99/12,000；Max $199.99/20,000 + Relax Mode；Open Platform API pay-go 分开核算',
        models: 'Hailuo 2.3、MiniMax-Hailuo-2.3-Fast、MiniMax-Hailuo-2.3、Media Agent',
        link: 'https://hailuoai.video'
      }
    ],
    freeQuota:
      '免费/Bonus credits 可能随活动变化；长期生产成本应按 Membership Credits、Purchased Credits 或 Open Platform API pricing 估算',
    contextWindow: 'N/A',
    chineseSupport: 5,
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://hailuoai.video/',
      'https://hailuoai.video/doc/payment-policy.html',
      'https://www.minimax.io/news/minimax-hailuo-23',
      'https://platform.minimax.io/docs/pricing/overview',
      'https://platform.minimax.io/docs/guides/pricing-paygo'
    ],
    pros: [
      'MiniMax 表示 Hailuo 2.3 已覆盖网站、移动 app 和 Open Platform API',
      '支付政策列出 Standard、Pro、Master、Ultra、Max 多档会员，并把 Max 的 Relax Mode 单独作为高用量权益',
      '支付政策区分 Membership Credits 与 Purchased Credits，其中 Purchased Credits 标价为 $1 可购买 70 credits',
      'MiniMax Open Platform 价格将实时 API 计费与订阅式 quota plans 分开',
      'API pay-go 列出 MiniMax-Hailuo-2.3-Fast，并包含 Fast 768P、6 秒视频 $0.19 和常规模型 768P、6 秒视频 $0.28 的价格',
      'Hailuo 2.3 发布资料同时强调视频模型与 Media Agent，适合把消费者端和 API 端一起评估'
    ],
    cons: [
      '消费者 Hailuo credits 与 MiniMax Open Platform API 计费是不同账户路径',
      'Membership Credits 按月过期且不结转，Purchased Credits 也有自己的有效期规则',
      'Bonus credits、Membership Credits 和 Purchased Credits 的有效期与用途不同，不能混成一个余额池',
      '异步 API 工作流、排队、内容政策和失败生成处理都需要实现规划'
    ],
    bestFor: '中文场景视频生成、短视频内容创作',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Hailuo 应作为 MiniMax 视频栈评估：既有消费者 app 入口，也有 Open Platform API 入口。当前需要保留的关键事实是 Hailuo 2.3、Media Agent、多档会员价格、Membership Credits、Purchased Credits、Bonus credits 和 API pay-go 价格。',
      pitfalls: [
        '分开核算消费者 credits 与 Open Platform API 计费',
        '不要把活动/Bonus credits 视为稳定生产预算',
        '按模型、分辨率、时长和异步流程开销估算视频成本'
      ]
    },
    decisionSummary: {
      verdict:
        '可信的 MiniMax 视频生成选项，适合中文和全球创意工作流，但必须按 credit 类型和 API 路线分别建模成本。',
      bestFor: '短视频生成、Hailuo 网页/移动端实验，以及基于 Hailuo 2.3 模型的 API 视频渲染',
      avoidIf:
        '你需要永久免费额度、覆盖所有 Hailuo 和 MiniMax 入口的统一 credit 钱包，或无需排队处理的实时视频生成',
      mainRisk:
        'Membership Credits、Purchased Credits、Bonus credits 和 MiniMax Open Platform API pay-go 很容易混淆，从而扭曲生产成本估算。',
      alternatives: ['Sora', 'Kling', 'Runway', 'Luma']
    },
    swot: {
      S: 'Hailuo 2.3 覆盖网页、移动端和 API',
      W: '多套 credit 与 API 计费路径',
      O: '中文与全球短视频生产',
      T: 'Sora、Kling、Runway、Luma'
    },
    tags: ['多模态', '视频生成', '国产', '中文', 'Hailuo 2.3', '已核验']
  },
  {
    id: 'udio',
    name: 'Udio',
    category: 'multimodal',
    subcategory: '音乐生成',
    developer: 'Udio',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Free 有 credit limits；Standard $10/月；Pro $30/月；年付 Standard 示例为 $96 + tax',
        models: 'Udio 音乐生成、Extend、Remix、Inpaint、Edit',
        link: 'https://www.udio.com/pricing'
      }
    ],
    freeQuota:
      'Free：每日 10 credits，另有每月 100 credits 上限；Standard 每月 2,400 credits，Pro 每月 6,000 credits',
    contextWindow: 'N/A',
    chineseSupport: 2,
    pros: [
      '官方帮助中心明确 credit limits：Free 每日 10 credits + 每月 100 credits 上限',
      'Standard subscription 每月最多 2,400 credits，Pro subscription 每月最多 6,000 credits',
      'Create、Extend、Remix、Inpaint、Edit 都会生成两首并消耗 credits',
      '32 秒与 130 秒歌曲的 credit 消耗不同，便于按长度估算',
      'subscription trial 最长可到 7 天，但官方说明 trial 不提高 credit limits，且没有 Pro trial',
      'a la carte credits 可在 pricing 页购买且不会过期'
    ],
    cons: [
      '免费账号 130 秒歌曲有每日 3 首限制',
      'subscription trials 不提高 credit limit，试用和正式订阅权益不同',
      'trial 不能用来验证 Pro 额度或高产量生产能力',
      'credits 不结转，订阅结束会回到 free-account credit limits',
      '商用、版权和平台分发仍需按 Udio 条款和内容用途审查'
    ],
    bestFor: '原创音乐创作、BGM 生成、歌曲制作',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-07，Udio 官方帮助中心比 pricing 页更适合核验 credits：Free 是每日 10 credits + 每月 100 credits 上限，Standard 是每月 2,400 credits，Pro 是每月 6,000 credits；subscription trial 最长 7 天但不提高额度，也没有 Pro trial。页面不再用“每月 10 首”或主观质量对比做选型结论。',
      pitfalls: [
        '按 32 秒/130 秒歌曲长度估算 credits',
        'trial 不等于正式订阅额度，也不能代表 Pro 额度',
        '商用和版权用途要单独审查'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://www.udio.com/pricing',
      'https://help.udio.com/en/articles/10739134-credits-and-credit-limits',
      'https://help.udio.com/en/articles/10739199-changing-or-canceling-your-subscription',
      'https://help.udio.com/en/articles/13338649-the-subscription-trial'
    ],
    decisionSummary: {
      verdict:
        '适合试做歌曲、BGM 和音乐创意草稿；预算要按每日/月度 credit limits 与歌曲长度消耗来算。',
      bestFor: '原创音乐创作、BGM 生成、歌曲制作',
      avoidIf: '你需要无限免费生成、明确无风险商用授权，或不想处理 credits 与版权边界',
      mainRisk:
        'Free、trial、Standard、Pro 的 credit limits 不同，trial 不提升额度且没有 Pro trial，长歌生成、编辑和 remix 都会消耗 credits',
      alternatives: ['Suno', 'ElevenLabs Music', '开源音乐模型']
    },
    swot: {
      S: '音乐生成和编辑入口完整',
      W: 'credits、trial 和版权边界需管理',
      O: '短视频/广告配乐和音乐草稿',
      T: 'Suno 与传统音乐版权治理'
    },
    tags: ['多模态', '部分免费', '音乐生成', 'AI音乐', '人声']
  },

  // ============= 新增 LLM (3个) =============
  {
    id: 'cohere',
    name: 'Cohere / Command',
    category: 'llm',
    subcategory: '企业大模型',
    developer: 'Cohere',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          'Command A / R+ 按 input/output token 计费；A 与 R+ 当前均列出 $2.5/M input、$10/M output',
        models: 'Command A+ 05-2026, Command A 03-2025, Command R+ 08-2024, Command R 08-2024',
        link: 'https://docs.cohere.com/docs/models'
      }
    ],
    freeQuota: 'Trial / production usage 以 Cohere dashboard 和 pricing docs 为准',
    contextWindow: 'Command A 256K；Command A+ / Command R+ 128K',
    chineseSupport: 2,
    pros: [
      'Command A+ 是 2026 年 Cohere Command A family 最新模型之一，支持图像、Agent、reasoning 和翻译能力',
      'Command A 官方定位为企业 Agent、tool use、RAG 和多语言任务',
      'Command R / R+ 仍适合 RAG 与多步工具调用场景',
      '官方文档列出模型 ID、上下文、输出上限和计费方式',
      '可通过私有部署、云服务和企业集成路径评估数据边界'
    ],
    cons: [
      'Command R+ 08-2024 已不是唯一推荐入口，多数新场景应同时评估 Command A 系列',
      '中文生态和国内可访问性不如国产平台',
      '试用/生产限制、私有部署和企业安全配置需要账户级确认'
    ],
    bestFor: '企业 RAG 应用、知识库检索、多语言业务',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，Cohere 官方模型页已经把 Command A+、Command A、Command A Reasoning/Vision 与 Command R/R+ 并列展示，并提供 rate limits / pricing docs 供生产前核验。本站不再把 Cohere 简化为 Command R+，而按企业 RAG、Agent、tool use 和多语言场景来定位。',
      pitfalls: [
        '新项目优先比较 Command A 系列',
        'RAG 效果要结合自有知识库评测',
        '生产 usage tier、rate limit 和私有部署需向 Cohere 确认'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://docs.cohere.com/docs/models',
      'https://docs.cohere.com/docs/how-does-cohere-pricing-work',
      'https://docs.cohere.com/docs/command-a'
    ],
    decisionSummary: {
      verdict: '适合企业 RAG、Agent 和多语言任务，当前选型应从 Command A 系列开始比较。',
      bestFor: '企业知识库、tool use、Agent、多语言检索增强',
      avoidIf: '你需要中文生态优先、消费级聊天入口或国内部署便利性',
      mainRisk: '旧 Command R+ 口径容易低估新模型线；试用、限额和私有部署要账户级确认。',
      alternatives: ['Claude', 'GPT-5.5 / OpenAI', 'Amazon Nova']
    },
    swot: {
      S: '企业 RAG 和 Agent 定位清晰',
      W: '国内生态弱',
      O: '企业知识库和私有部署',
      T: 'OpenAI、Anthropic、云厂商托管模型'
    },
    tags: ['LLM', 'RAG', '企业', '多语言', '已核验']
  },
  {
    id: 'amazon-nova',
    name: 'Amazon Nova',
    category: 'llm',
    subcategory: '云平台大模型',
    developer: 'Amazon (AWS)',
    logo: null,
    versions: [
      {
        type: 'Global',
        pricing:
          '通过 Amazon Bedrock / Nova pricing 按 tier、区域、模型和 modality 计费；Nova 2 能力以 nova2 user guide 为准',
        models:
          'Amazon Nova 2 Lite, Nova 2 multimodal embeddings, Nova Premier/Pro/Lite/Micro, Nova Canvas/Reel/Sonic',
        link: 'https://docs.aws.amazon.com/nova/latest/nova2-userguide/what-is-nova-2.html'
      }
    ],
    freeQuota: 'AWS 试用和免费层以控制台和区域为准；Bedrock/Nova 生产按量计费',
    contextWindow:
      'Nova 2 文档标注 up to 1M context；Nova v1 Premier 1M / Pro-Lite 300K / Micro 128K',
    chineseSupport: 3,
    pros: [
      'Amazon Nova 2 文档已经列出 extended thinking and reasoning、built-in tools、AI agent building、enhanced document/video understanding',
      'Nova 2 Lite 支持 extended thinking，面向多步骤推理、agentic workflows、数学、规划和代码生成',
      'Nova 2 built-in tools 包含 web grounding 和 code interpreter，减少外部集成成本',
      'Nova Multimodal Embeddings 支持文本、文档、图像、视频和音频的统一语义空间',
      '与 Bedrock Knowledge Bases、Agents、Guardrails、评估和批处理能力衔接',
      'Nova v1 系列仍包含 Premier、Pro、Lite、Micro、Canvas、Reel、Sonic，老项目需要按模型线区分'
    ],
    cons: [
      '强依赖 AWS 账号、区域和 Bedrock 权限',
      '独立聊天体验不如 ChatGPT/Claude/Gemini 直接',
      'Nova 2、Nova v1、embedding、image/video/speech 模型价格要按模型、区域、tier 和输入模态计算',
      '国内网络、账单和合规流程需要额外评估'
    ],
    bestFor: 'AWS 生态应用、成本敏感的 AI 部署、长文档处理',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，AWS Nova 2 文档已经把 Nova 2 描述为支持 up to 1M context、advanced reasoning、built-in tools、AI agent building、document/video understanding 与 multimodal embeddings 的新路线。本站不再只按 Nova v1 Premier/Pro/Lite/Micro 口径展示，而是把 Nova 2 与 Bedrock 生态一起评估。',
      pitfalls: [
        '先确认目标区域是否支持',
        '用 Bedrock pricing 按模型和 tier 估算成本',
        '与 Claude/OpenAI/Google on Bedrock 做同任务评测'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://docs.aws.amazon.com/nova/latest/nova2-userguide/what-is-nova-2.html',
      'https://docs.aws.amazon.com/nova/latest/nova2-userguide/whats-new.html',
      'https://docs.aws.amazon.com/nova/latest/nova2-userguide/extended-thinking.html',
      'https://docs.aws.amazon.com/nova/latest/nova2-userguide/embeddings.html',
      'https://docs.aws.amazon.com/nova/latest/userguide/what-is-nova.html',
      'https://aws.amazon.com/nova/pricing/',
      'https://aws.amazon.com/bedrock/pricing/'
    ],
    decisionSummary: {
      verdict:
        '适合 AWS/Bedrock 原生团队做多模态、RAG、Agent 和 embeddings 应用，下一批选型应优先看 Nova 2 能力。',
      bestFor:
        'AWS 生态、Bedrock Agents/Knowledge Bases、Nova 2 reasoning/tools、长文档和多模态输入',
      avoidIf: '你不想接入 AWS 账号、区域权限和 Bedrock 账单体系',
      mainRisk:
        'Nova 2、Nova v1、multimodal embeddings、Canvas/Reel/Sonic 和 Bedrock 服务层价格/区域不同，不能用单一低价结论采购。',
      alternatives: ['Claude on Bedrock', 'OpenAI on Bedrock', 'Cohere / Command']
    },
    swot: {
      S: 'AWS 集成、Nova 2 reasoning/tools、长上下文、多模态 embeddings',
      W: '平台绑定和模型线区分明显',
      O: 'Bedrock 企业应用',
      T: 'Anthropic、OpenAI、Google 和 Meta 模型同台竞争'
    },
    tags: ['LLM', '按量计费', 'AWS', '企业', '长上下文', '已核验']
  },
  {
    id: 'hunyuan',
    name: '腾讯混元 / Tencent HY',
    category: 'llm',
    subcategory: '通用大模型',
    developer: '腾讯',
    logo: null,
    versions: [
      {
        type: 'CN',
        pricing:
          'Hy3 preview / TokenHub 新入口优先确认；旧平台免费资源包和后付费规则仍适用于存量模型',
        models: 'Hy3：192K 最大输入、128K 最大输出、295B/21B MoE、no_think/think_low/think_high',
        link: 'https://cloud.tencent.com/product/tclm'
      },
      {
        type: 'CN',
        pricing: '新模型能力逐步迁移至 TokenHub，原平台不再新增模型能力',
        models: 'TokenHub / hunyuan-a13b / Tencent HY Vision 1.5 / translation / role 等存量路径',
        link: 'https://cloud.tencent.com/document/product/1729/97731'
      }
    ],
    freeQuota:
      '旧平台首次开通部分模型会发放一次性免费资源包，例如 hunyuan-a13b 100 万 tokens；Hy3/TokenHub 以控制台为准',
    contextWindow: 'Hy3 最大输入 192K、最大输出 128K；hunyuan-a13b 与视觉模型按旧平台文档另行核算',
    chineseSupport: 5,
    pros: [
      '腾讯云官方页面将混元描述为通用与多模态大模型家族，覆盖文本、图像、视频、3D 等模态',
      'Hy3 于 2026-07-06 更新，强化 Coding、长文、推理和 Agent 能力',
      'Hy3 采用 295B 总参数、21B 激活 MoE 架构，并提供 no_think / think_low / think_high',
      '产品概述列出角色扮演、翻译、视觉理解等专项模型',
      '购买指南列出免费资源包、后付费、预付费和 token 单价',
      '与腾讯云、腾讯元器和企业微信等生态更易衔接'
    ],
    cons: [
      '原混元平台新购/新增能力正在向 TokenHub 迁移，入口和计费路径需要确认',
      '国际生态和第三方教程不如 AWS/OpenAI/Anthropic 丰富',
      '腾讯生态外的独立开发体验需要实测',
      '旧模型命名和新 TokenHub 资源容易混淆'
    ],
    bestFor: '腾讯生态应用、中文内容生成、企业微信集成',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-07，腾讯云混元产品页已将 Hy3 preview 放到主推位置，标注 192K 输入、128K 输出、295B/21B MoE 和多档思考模式；购买指南仍提示旧平台能力逐步迁移至 TokenHub。本站不再以 hunyuan-a13b 作为唯一主线，而是把 Hy3/TokenHub 与旧平台存量模型分开展示。',
      pitfalls: [
        '先确认是否走 Hy3 / TokenHub 新入口',
        '免费资源包耗尽后默认不一定自动转后付费',
        '腾讯生态外接入要实测 SDK、区域和账单流程'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: [
      'https://cloud.tencent.com/product/tclm',
      'https://cloud.tencent.com/document/product/1729/104753',
      'https://cloud.tencent.com/document/product/1729/97731'
    ],
    decisionSummary: {
      verdict:
        '适合腾讯云/企微生态内的中文和多模态应用，当前要优先确认 Hy3/TokenHub 新入口与旧平台计费路径。',
      bestFor: '腾讯云、企业微信、腾讯元器、中文内容和多模态 API',
      avoidIf: '你需要国际生态、开源自托管或非常清晰的跨云迁移路径',
      mainRisk:
        'Hy3、TokenHub、hunyuan-a13b 等旧平台模型、免费资源包和后付费设置并存，需要逐项确认。',
      alternatives: ['Qwen', 'ERNIE / 百度千帆', 'Doubao / Volcano Ark']
    },
    swot: {
      S: '腾讯生态、Hy3、中文、多模态',
      W: '入口迁移和生态绑定',
      O: '企微和腾讯云企业应用',
      T: '通义千问、文心、豆包竞争'
    },
    tags: ['LLM', '部分免费', '国产', '腾讯', '中文', '已核验']
  },
  // ============= AI Skills (20个) =============
  {
    id: 'frontend-design-skill',
    name: 'frontend-app-builder',
    category: 'skill',
    subcategory: 'UI/UX设计',
    developer: 'OpenAI curated build-web-apps plugin',
    logo: null,
    versions: [
      {
        type: 'Installed skill',
        pricing: '随当前 Codex 插件环境可用；无独立免费额度声明',
        models:
          'frontend-app-builder 处理新前端应用、dashboard、game、creative website 和 redesign/restyle/modernization',
        link: 'https://openai.com/codex/'
      },
      {
        type: 'Validation workflow',
        pricing: '真实浏览器验证成本取决于本地运行、Browser 插件和模型使用',
        models:
          '要求 Browser/IAB 或可说明的 Playwright 降级验证，检查页面身份、非空、console 和截图证据',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '无独立免费额度证据；取决于 Codex/插件环境与模型使用',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '当前核验环境存在精确 frontend-app-builder Skill',
      '适合新前端应用、仪表盘、游戏、创意网站和 redesign/restyle/modernization',
      '流程强调视觉方向、实现和浏览器验证闭环',
      '要求 Browser/IAB 或可说明的 Playwright 降级验证做渲染检查',
      '适合把页面现代化需求拆成可验证的实现步骤'
    ],
    cons: [
      '不是固定风格库或一键 UI 生成器',
      '完整视觉流程可能需要明确 brief、截图、浏览器验证和多轮对比',
      '如果没有明确视觉来源，设计方向仍需人工确认'
    ],
    bestFor: '页面改版、前端视觉现代化、从设计方向到真实浏览器验收的工作流',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '当前核验环境存在精确 frontend-app-builder Skill。它适合作为旧页面现代化入口，但价值在于把设计方向、实现和真实浏览器验证串起来，而不是承诺固定风格库或调色板数量。',
      pitfalls: [
        '先明确页面目标和视觉来源',
        '不要承诺固定风格库或调色板数量',
        '渲染验收要看真实浏览器截图'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-07',
    sources: ['本地 skill: build-web-apps:frontend-app-builder'],
    decisionSummary: {
      verdict:
        '当前核验环境已确认 frontend-app-builder，可作为页面现代化和前端视觉实现的已核验工作流入口。',
      bestFor: '需要从视觉方向、前端实现到真实浏览器验收串起来的页面优化任务',
      avoidIf: '你需要可量化设计系统生成、固定风格库或不经过浏览器验收的静态 UI 建议',
      mainRisk: '输出质量依赖 brief、视觉来源和浏览器验证；缺少这些边界时容易变成主观改色。',
      alternatives: [
        'Product Design get-context',
        'Product Design ideate',
        'frontend-testing-debugging'
      ]
    },
    swot: {
      S: '已确认前端实现与浏览器验收流程',
      W: '依赖 brief 和视觉来源质量',
      O: '可作为旧页面现代化入口',
      T: 'Figma / v0 / Lovable 等设计到代码工具竞争'
    },
    tags: ['Skills', 'UI/UX', '设计', '前端', '本地核验']
  },
  {
    id: 'webapp-testing-skill',
    name: 'frontend-testing-debugging',
    category: 'skill',
    subcategory: '测试',
    developer: 'OpenAI curated build-web-apps plugin',
    logo: null,
    versions: [
      {
        type: 'Installed skill',
        pricing: '随当前 Codex 插件环境可用；无独立免费额度声明',
        models: '优先使用 Browser 插件；仅在 Browser 不可用或受阻时降级到 Playwright',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '无独立免费额度证据；按 Codex/插件环境和模型使用计费',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      'frontend-testing-debugging 明确服务于渲染后的前端验证、UI 回归和交互调试',
      'Browser plugin 路径优先，包含页面身份、非空、无框架 overlay 检查',
      '要求 DOM 快照、控制台健康检查、截图证据和交互证明',
      'Browser 不可用时可记录原因并使用 Playwright 降级验证',
      '适合在本地 dev server 上验证桌面和移动视口'
    ],
    cons: [
      '更偏 QA 验证流程，不是通用测试框架生成器',
      '需要能启动目标前端应用并访问渲染页面',
      '浏览器插件或 Playwright 环境异常时需要记录 fallback 原因'
    ],
    bestFor: '前端页面烟测、渲染错误排查、交互回归验证、响应式布局和控制台健康检查',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '这个条目应从“自动生成测试用例”调整为“真实浏览器验证工作流”。它的价值在于把页面身份、空白页、错误 overlay、控制台健康检查、截图证据和交互证明串成一套可复核的 QA 闭环。',
      pitfalls: [
        '先定义目标 flow',
        '不要只用 build 结果替代浏览器验证',
        '截图和交互状态要能支撑结论'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['本地 skill: build-web-apps:frontend-testing-debugging'],
    decisionSummary: {
      verdict:
        '当前核验环境已确认 frontend-testing-debugging，可作为前端渲染、响应式和交互 QA 的已核验工作流。',
      bestFor: '本地页面加载、样式回归、控制台错误、响应式和核心交互验证',
      avoidIf: '你只想生成单元测试或覆盖率报告，而不需要打开真实页面',
      mainRisk:
        '它验证真实页面状态，不替代单元测试覆盖率；Browser 插件不可用或 dev server 无法启动时需要降级到 Playwright，并清楚记录 fallback 原因。',
      alternatives: ['frontend-testing-debugging', 'Playwright', 'Vitest + Vue Test Utils']
    },
    swot: {
      S: '真实浏览器 QA 闭环可复用',
      W: '依赖页面可运行和浏览器工具',
      O: '可作为前端验收流程',
      T: 'Playwright / Cypress 原生工作流竞争'
    },
    tags: ['Skills', '测试', '前端QA', 'Browser', '本地核验']
  },
  {
    id: 'mcp-builder-skill',
    name: 'building-mcp-server-on-cloudflare',
    category: 'skill',
    subcategory: 'MCP开发',
    developer: 'Cloudflare / OpenAI curated plugin',
    logo: null,
    versions: [
      {
        type: 'Installed skill',
        pricing:
          '随当前 Cloudflare/Codex 插件环境可用；Cloudflare Workers 和外部 API 成本需单独评估',
        models: 'building-mcp-server-on-cloudflare 聚焦 remote MCP servers on Cloudflare Workers',
        link: 'https://modelcontextprotocol.io/docs/learn/architecture'
      },
      {
        type: 'Official MCP reference',
        pricing: 'MCP 是协议和 SDK 生态；具体托管、模型和工具成本取决于实现',
        models:
          'MCP 架构涵盖主机、客户端、服务器、工具、资源、提示词和传输层',
        link: 'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'
      }
    ],
    freeQuota: '暂无该 Skill 的独立免费额度证据；MCP 实现成本取决于宿主、服务器和外部 API',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '当前核验环境存在精确 building-mcp-server-on-cloudflare Skill',
      '适合规划 remote MCP servers on Cloudflare Workers',
      '官方 MCP architecture 明确 host、client、server、data layer 和 transport layer 边界',
      'tools expose executable functions，适合把 API、文件操作或数据库查询暴露给 AI 应用',
      'MCP 同时包含 resources 和 prompts 等 primitives，可帮助梳理 server 设计范围'
    ],
    cons: [
      '这是 Cloudflare Workers 方向，不是所有语言/平台的通用 MCP 生成器',
      '具体 server 实现仍需复核，鉴权、部署和安全边界差异很大',
      'MCP 规范版本和 SDK 更新较快，旧模板可能过时'
    ],
    bestFor:
      'Cloudflare Workers 上的 remote MCP server 规划、MCP architecture 学习、把外部能力封装成 tools/resources/prompts',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        '当前核验环境存在精确 building-mcp-server-on-cloudflare Skill。推荐时应把它写成 Cloudflare Workers remote MCP server 工作流，而不是泛化成所有平台和语言的 mcp-builder。',
      pitfalls: [
        '先确认目标是否是 Cloudflare Workers',
        '按目标 SDK 复核代码模板',
        '安全、鉴权和部署需要单独设计'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      '本地 skill: cloudflare:building-mcp-server-on-cloudflare',
      'https://modelcontextprotocol.io/docs/learn/architecture',
      'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'
    ],
    decisionSummary: {
      verdict:
        '当前核验环境已确认 building-mcp-server-on-cloudflare；可作为 Cloudflare Workers remote MCP server 的已核验工作流入口。',
      bestFor:
        '想在 Cloudflare Workers 上规划 remote MCP server，并评估哪些 API 可以暴露为 tools 的开发者',
      avoidIf: '你需要跨所有运行时的通用 MCP 生成器，或不打算使用 Cloudflare Workers',
      mainRisk: '能力范围偏 Cloudflare Workers；语言、鉴权、部署和安全边界仍需按项目复核。',
      alternatives: ['MCP official SDKs', 'MCP Inspector', 'Cloudflare Workers docs']
    },
    swot: {
      S: '已确认 Cloudflare Workers MCP 工作流',
      W: '平台范围不等于通用生成器',
      O: '可作为 remote MCP server 规划入口',
      T: '官方 SDK 和成熟模板竞争'
    },
    tags: ['Skills', 'MCP', 'Cloudflare', 'API', '已核验']
  },
  {
    id: 'skill-creator-skill',
    name: 'skill-creator',
    category: 'skill',
    subcategory: 'Skills开发',
    developer: 'OpenAI system skill',
    logo: null,
    versions: [
      {
        type: 'Installed system skill',
        pricing: '随当前 Codex Skills 环境可用；无独立免费额度声明',
        models:
          '创建或更新 SKILL.md 目录，可选包含脚本、参考资料、资源文件和 agents/openai.yaml',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '无独立免费额度证据；主要消耗来自 Codex 会话和模型调用',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      'skill-creator 是当前核验环境已安装的 system Skill，用于创建或更新 Codex Skills',
      '明确要求每个 Skill 具备 SKILL.md，并可按需包含 scripts、references、assets',
      '提供 scripts/init_skill.py 初始化模板，减少手工结构错误',
      '提供 scripts/quick_validate.py 校验 YAML frontmatter、必填字段和命名规则',
      '支持生成 agents/openai.yaml，并强调 progressive disclosure 减少上下文浪费'
    ],
    cons: [
      '高质量 Skill 仍需要清楚的触发场景和领域样例',
      '复杂 Skill 需要 forward-testing 或 subagent 验证',
      '不应把 README、安装指南等无关文件塞进 Skill 目录'
    ],
    bestFor: '创建新的 Codex Skill、维护已有 Skill、为可重复工作流沉淀脚本和参考资料',
    funRanking: '夯',
    personalExperience: {
      rating: 4,
      insights:
        '这个条目有明确安装环境来源：skill-creator 指导从示例理解、资源规划、init_skill.py 初始化、SKILL.md 编辑到 quick_validate.py 校验的完整流程。它的重点不是泛泛的提示词技巧，而是把可重复流程沉淀成结构化 Skill。',
      pitfalls: ['先明确真实使用样例', '资源只放必要内容', '修改后运行 quick_validate.py']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['本地 skill: skill-creator'],
    decisionSummary: {
      verdict:
        '当前核验环境已安装并读取 skill-creator，可作为 Codex Skill 创建/维护工作流保留为已核验条目。',
      bestFor: '需要把稳定流程、领域知识、脚本或模板沉淀成 Codex Skill 的用户',
      avoidIf: '只是一次性普通提示词，不需要可复用的文件夹、脚本或参考资料',
      mainRisk:
        'Skill 质量取决于触发描述、资源边界和验证流程；过度堆文档会浪费上下文并降低可用性。',
      alternatives: ['plugin-creator', 'skill-installer', 'template-creator']
    },
    swot: {
      S: 'system Skill 来源明确',
      W: '产物质量依赖需求澄清',
      O: '可沉淀个人工作流',
      T: '一次性提示词和插件形态竞争'
    },
    tags: ['Skills', '元技能', '开发', '创建', '本地核验']
  },

  // --- 安全审计 Skills ---
  {
    id: 'semgrep-skill',
    name: 'semgrep',
    category: 'skill',
    subcategory: '安全审计',
    developer: 'Semgrep / Semgrep Skills',
    logo: null,
    versions: [
      {
        type: 'Public Skill',
        pricing:
          'semgrep/skills 公开仓库提供 semgrep Skill；需要通过 semgrep/skills 或技能管理器单独安装，无独立额度承诺',
        models:
          '运行 Semgrep static analysis scans、创建 custom detection rules；有 MCP tools 时优先用 MCP，否则回退 CLI',
        link: 'https://github.com/semgrep/skills/blob/main/skills/semgrep/SKILL.md'
      },
      {
        type: 'Semgrep CLI / AppSec Platform',
        pricing:
          'semgrep scan 可无登录运行 Community Edition 轻量 SAST；Semgrep Code、Secrets、Supply Chain 和 AppSec Platform 为单独授权/付费路径',
        models:
          'Semgrep Community Edition, Semgrep Code, Pro Rules, Pro Engine, cross-file analysis',
        link: 'https://docs.semgrep.dev/for-developers/cli'
      }
    ],
    freeQuota:
      'Semgrep Skill 本身无独立额度；Semgrep CLI CE 和 Platform/Code/Secrets/Supply Chain 需按当前 licensing 与 pricing 分开核算',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'semgrep/skills 公开仓库已列出 semgrep Skill，可运行 Semgrep static analysis scans 和 custom detection rules',
      '需要 Semgrep CLI 或 Semgrep MCP tools，适合把规则扫描纳入 Agent 工作流',
      'Semgrep Community Edition 可通过 semgrep scan 执行轻量 SAST，且不需要登录',
      'Semgrep Code / Pro Engine 支持跨函数和可选 cross-file analysis，但需按授权状态确认',
      'Semgrep CE engine 为 LGPL 2.1，AppSec Platform / Code / Secrets / Supply Chain 为 proprietary 路径'
    ],
    cons: [
      '该 Skill 需要单独安装，不能当作当前 Codex 环境内置能力',
      'Semgrep Community Edition 与 Semgrep Code / Pro Engine 能力边界不同',
      '跨文件分析可能更慢、占用更多内存，超大项目会回退或超时',
      '规则集、配置和授权状态会显著影响发现率',
      '安全发现需要人工复核，不能直接替代人工审计'
    ],
    bestFor:
      '已安装 Semgrep Skill、Semgrep CLI 或 MCP tools 的代码安全扫描、规则化漏洞检查、PR 辅助审计',
    funRanking: '归档',
    personalExperience: {
      rating: 4,
      insights:
        'Semgrep 的公开 semgrep/skills 仓库已经能核验 semgrep Skill 上游存在；实际扫描能力仍取决于是否安装该 Skill、Semgrep CLI/MCP tools、规则集和授权档位。采购或推荐时应把 Skill wrapper、Semgrep Community Edition、Semgrep Code 和 AppSec Platform 分开评估。',
      pitfalls: [
        '先确认是否已安装 semgrep/skills 或 Semgrep CLI',
        '区分 Community Edition 与 Pro/Code 能力',
        '将结果作为安全线索而非最终结论'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/semgrep/skills',
      'https://github.com/semgrep/skills/blob/main/skills/semgrep/SKILL.md',
      'https://semgrep.dev/pricing/',
      'https://docs.semgrep.dev/for-developers/cli',
      'https://docs.semgrep.dev/semgrep-pro-vs-oss',
      'https://docs.semgrep.dev/semgrep-code/semgrep-pro-engine-intro',
      'https://docs.semgrep.dev/licensing'
    ],
    decisionSummary: {
      verdict:
        'semgrep Skill 的公开上游和 Semgrep 产品边界已核验；适合作为需要单独安装的 Semgrep 工作流入口。',
      bestFor:
        '已有 Semgrep 规则、CLI/MCP tools 或平台授权的团队，用于辅助 PR 安全检查和修复建议整理',
      avoidIf: '你希望无需安装、无需规则配置、无需授权即可获得完整安全审计',
      mainRisk:
        '需要单独安装 Skill/CLI 或配置 MCP tools；Semgrep Community Edition 与 Semgrep Code / Pro Engine 能力、价格和 cross-file analysis 范围不同，发现仍需人工复核。',
      alternatives: ['Semgrep CLI', 'GitHub Advanced Security', 'Snyk Code']
    },
    swot: {
      S: '公开 Skill 上游和成熟静态分析工具链',
      W: '依赖外部 CLI、规则和授权',
      O: '可作为 PR 安全检查候选入口',
      T: 'GitHub Advanced Security / Snyk / SonarQube 竞争'
    },
    tags: ['Skills', '安全', 'Semgrep', '静态分析', '已核验']
  },
  {
    id: 'differential-review-skill',
    name: 'differential-review',
    category: 'skill',
    subcategory: '安全审计',
    developer: 'Trail of Bits / Omar Inuwa',
    logo: null,
    versions: [
      {
        type: 'Public plugin skill',
        pricing: 'Trail of Bits community/plugin Skill；需要单独安装，无独立免费额度承诺',
        models:
          '面向 PR、commit 或 diff 的 security-focused differential review；使用 Git history、blast radius、test coverage 和 markdown report',
        link: 'https://github.com/trailofbits/skills/tree/main/plugins/differential-review'
      },
      {
        type: 'Official adjacent reference',
        pricing: 'Claude Code Review / GitHub Action 按 Anthropic 计划和 API 使用计费',
        models: 'managed Code Review, /code-review, claude-code-security-review action',
        link: 'https://github.com/anthropics/claude-code-security-review'
      }
    ],
    freeQuota:
      '该 Skill 无独立免费额度承诺；Trail of Bits plugin 安装、Codex/Claude 会话和 Anthropic Code Review 计费需分开核算',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      'Trail of Bits 公开 plugins/differential-review，可通过 plugin install 路径单独安装',
      '需要 Git 仓库，围绕 PR、commit 或 diff 做 security-focused differential review',
      'Skill 描述覆盖 git history、blast radius、test coverage、risk-first triage 和 markdown report',
      '官方 Claude Code Review 参考显示发现会标注严重性，但不会批准或阻止 PR',
      '结果适合进入人工复核，辅助 reviewer 聚焦风险'
    ],
    cons: [
      '该 Skill 需要单独安装，不能当作当前 Codex 环境内置能力',
      '差异审查可能遗漏运行时配置、依赖和历史上下文问题',
      '官方 security-review action 明示缺少提示注入防护证据，只建议用于可信 PR',
      '安全发现是建议性质，需要人工复核',
      '大型变更会增加上下文和误报成本'
    ],
    bestFor: '有 Git diff 的 PR 风险初筛、人工 Code Review 前的安全线索整理',
    funRanking: '夯',
    personalExperience: {
      rating: 3.5,
      insights:
        'Trail of Bits 的公开插件仓库已能核验 differential-review Skill 上游存在；它更像“安全差异审查工作流”，帮助 reviewer 关注认证、权限、输入校验、依赖、Git history、blast radius 和 test coverage。它不能替代人工判断，也不能自动阻断 PR。',
      pitfalls: [
        '先确认是否已安装 Trail of Bits differential-review plugin',
        '不要用于不可信 PR 的自动安全结论',
        '复杂安全问题仍需人工判断和复现'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://github.com/trailofbits/skills/tree/main/plugins/differential-review',
      'https://github.com/trailofbits/skills/blob/main/plugins/differential-review/skills/differential-review/SKILL.md',
      'https://code.claude.com/docs/en/code-review',
      'https://github.com/anthropics/claude-code-security-review'
    ],
    decisionSummary: {
      verdict:
        'Trail of Bits differential-review Skill 已有公开上游证据，可作为需要单独安装的安全差异审查工作流入口。',
      bestFor: '可信代码库中的 PR diff 初筛、人工审查前的风险问题清单',
      avoidIf: '需要合规级安全审计、全仓扫描、自动阻断或处理不可信 PR',
      mainRisk:
        '需要单独安装，且差异审查不等于全仓审计；官方相邻能力也说明 Code Review 不会批准或阻止 PR，security-review action 缺少提示注入防护证据，只审查 diff 可能漏掉上下文问题。',
      alternatives: ['Claude Code Review', 'claude-code-security-review action', 'Semgrep CLI']
    },
    swot: {
      S: '公开 Skill 上游和差异审查方法明确',
      W: '依赖 Git history、安装状态和上下文质量',
      O: '可作为 DevSecOps 审查入口',
      T: '官方 Code Review 和专业 SAST 工具竞争'
    },
    tags: ['Skills', '安全', 'PR审查', 'DevSecOps', '已核验']
  },
  {
    id: 'insecure-defaults-skill',
    name: 'insecure-defaults',
    category: 'skill',
    subcategory: '安全审计',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models: 'Detects fail-open defaults, hardcoded secrets, weak auth, permissive security',
        link: 'https://trailofbits.com/skills/insecure-defaults/'
      },
      {
        type: 'Adjacent installed skill',
        pricing: '随当前 Codex Skills 环境可用；无独立免费额度声明',
        models:
          'security-best-practices 为受支持的技术栈提供默认安全指导和重大问题审查',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无该 Skill 的独立免费额度证据；取决于 Codex 会话和外部工具',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明该 Skill 检测 fail-open defaults、hardcoded secrets、weak auth 和 permissive security',
      'security-best-practices 强调写 secure-by-default code，并可在报告模式下梳理 major issues',
      '适合把认证、授权、环境配置、公开资源 ID 和开发/生产差异纳入人工清单',
      '发现结果应进入人工复核，而不是直接作为漏洞结论',
      '可与具体语言/框架安全参考一起使用，减少泛泛而谈'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      '强相关 Skill 只覆盖部分语言和框架，超出范围需要额外来源',
      '业务例外和部署环境差异需要人工判断'
    ],
    bestFor: '上线前安全默认值复核、配置风险清单、secure-by-default 编码检查的辅助视角',
    funRanking: '归档',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，insecure-defaults 有 Trail of Bits 公开上游，适合定位 fail-open defaults、hardcoded secrets、weak auth 等生产可达配置风险；实际使用前需安装 Trail of Bits plugin 并人工复核。',
      pitfalls: ['先补充同名 Skill 的上游仓库', '按实际技术栈加载安全参考', '所有发现都要人工复核']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/insecure-defaults/',
      '邻近本地 skill: security-best-practices'
    ],
    decisionSummary: {
      verdict: '公开上游已验证，需单独安装；适合作为 fail-open 默认值和弱配置审查方向展示。',
      bestFor: '把 secure-by-default、环境配置和高影响安全问题纳入上线前人工复核',
      avoidIf: '你需要可审计覆盖率、规则集和误报率明确的安全扫描产品',
      mainRisk: '需单独安装该 Skill；即便使用公开上游，发现也必须验证生产可达性并由人工复核。',
      alternatives: ['security-best-practices', 'Semgrep CLI', 'GitHub Advanced Security']
    },
    swot: {
      S: '聚焦安全默认值和高影响问题',
      W: '需单独安装且需人工复核',
      O: '可并入上线前安全复核清单',
      T: 'SAST、配置扫描和云安全平台竞争'
    },
    tags: ['Skills', '安全', '配置', 'secure-defaults', '已核验', 'public-upstream']
  },
  {
    id: 'sharp-edges-skill',
    name: 'sharp-edges',
    category: 'skill',
    subcategory: '安全审计',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models: '对容易误用的危险设计、API 设计和抗误用能力进行 Sharp Edges 分析',
        link: 'https://trailofbits.com/skills/sharp-edges/'
      },
      {
        type: 'Adjacent installed skill',
        pricing: '随当前 Codex Skills 环境可用；无独立免费额度声明',
        models:
          'security-best-practices can guide secure-by-default implementation and review reports',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无该 Skill 的独立免费额度证据；取决于 Codex 会话和外部工具',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明该 Skill 识别 error-prone APIs、dangerous configurations 和 footgun designs',
      '强调 misuse resistance、API design、默认行为和错误路径是否容易被误用',
      '可结合 security-best-practices 的 secure-by-default guidance 做人工复核',
      '适合在 SDK、权限接口、危险操作和配置 API 设计阶段使用',
      '结论适合作为人工复核的问题清单，而非自动合规结论'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      'API 设计判断高度依赖业务语境和威胁模型',
      '仅靠该视角无法替代安全测试、SAST 或正式审计'
    ],
    bestFor: 'API design 评审、SDK 易误用风险梳理、权限/配置接口的 secure-by-default 设计检查',
    funRanking: '归档',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，sharp-edges 有 Trail of Bits 公开上游，定位是发现 footgun designs、危险配置和缺乏 misuse resistance 的 API design；推荐时要说明需单独安装并结合人工复核。',
      pitfalls: ['先确认同名 Skill 来源', '结合威胁模型判断', '安全结论需要人工复核']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/sharp-edges/',
      '邻近本地 skill: security-best-practices'
    ],
    decisionSummary: {
      verdict:
        '公开上游已验证，需单独安装；适合作为 API design 和 misuse resistance 审查方向展示。',
      bestFor: '评审 SDK、权限、配置和危险操作 API 是否容易被误用',
      avoidIf: '你需要可量化覆盖率、自动扫描或合规审计结论',
      mainRisk: '需单独安装该 Skill；API design 建议仍依赖业务语境、威胁模型和人工复核。',
      alternatives: ['security-best-practices', 'security-threat-model', 'differential-review']
    },
    swot: {
      S: '能聚焦 API 易误用和默认行为',
      W: '需单独安装且判断主观',
      O: '可并入 API/SDK 安全设计复核',
      T: '威胁建模和专业 API 安全测试竞争'
    },
    tags: ['Skills', '安全', 'API', '设计审计', '已核验', 'public-upstream']
  },

  // --- 代码质量 Skills ---
  {
    id: 'second-opinion-skill',
    name: 'second-opinion',
    category: 'skill',
    subcategory: '代码质量',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models: 'Codex CLI / Gemini CLI second-opinion diff review workflow',
        link: 'https://trailofbits.com/skills/second-opinion/'
      },
      {
        type: 'Adjacent installed workflow',
        pricing: '随当前 Superpowers 插件环境可用；无独立额度声明',
        models:
          '使用 requesting-code-review 和 receiving-code-review 组织审查闭环与反馈处理',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；若外接其他模型或 CLI，按对应工具计费',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明可用 Codex CLI 与 Gemini CLI 对 diff 运行 second-opinion review',
      'Codex 路径使用 codex exec read-only；Gemini 路径提示 --yolo 会自动批准工具调用',
      'requesting-code-review 强调在 major feature 或 merge 前派发 reviewer subagent',
      'receiving-code-review 强调先验证反馈是否适合当前代码库，再逐项实现',
      '适合把高风险变更送入结构化复核，而不是承诺外部模型自动结论',
      '可与人工 review、测试和 diff 检查组合使用'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      'Codex CLI 或 Gemini CLI 未安装、无 API key/订阅时不能使用',
      'reviewer 建议仍需用代码证据验证，不能盲目采纳'
    ],
    bestFor: '重大变更前的结构化复核、代码审查反馈处理、需要第二视角但可人工验证的场景',
    funRanking: '归档',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，second-opinion 有 Trail of Bits 公开上游，定位是通过 Codex CLI / Gemini CLI 对 diff 做外部第二意见；页面按公开上游说明展示，并提醒 Gemini --yolo 风险和工具/订阅前置条件。',
      pitfalls: [
        '先确认同名 Skill 上游',
        '不要把外部模型调用写成默认能力',
        'review 结论必须用测试或代码证据复核'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/second-opinion/',
      '邻近本地 skill: superpowers:requesting-code-review',
      '邻近本地 skill: superpowers:receiving-code-review'
    ],
    decisionSummary: {
      verdict:
        '公开上游已验证，需单独安装；适合作为需要 Codex CLI / Gemini CLI 的外部 diff review 工作流展示。',
      bestFor: '重大变更后的 reviewer subagent 检查，以及收到 review feedback 后的技术验证流程',
      avoidIf: '你明确需要自动调用其他模型 CLI 的实现和可审计日志',
      mainRisk:
        '需单独安装该 Skill；Gemini --yolo 会自动批准工具调用，Codex/Gemini CLI、API key 或订阅状态都需现场核验。',
      alternatives: ['requesting-code-review', 'receiving-code-review', 'GitHub PR review']
    },
    swot: {
      S: '复核流程可作为线索',
      W: '需单独安装且依赖外部 CLI/订阅',
      O: '可并入真实 code-review workflows',
      T: 'GitHub Copilot review 和 IDE 内置 review 竞争'
    },
    tags: ['Skills', '代码审查', '复核', '已核验', 'public-upstream']
  },
  {
    id: 'audit-context-building-skill',
    name: 'audit-context-building',
    category: 'skill',
    subcategory: '代码质量',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models: '在查找漏洞或缺陷前，逐行构建深入的架构上下文',
        link: 'https://trailofbits.com/skills/audit-context-building/'
      },
      {
        type: 'Adjacent security workflow',
        pricing: '随当前 security skills 环境可用；无独立额度声明',
        models:
          'repository-grounded threat modeling plus security-best-practices major issues review',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；取决于 Codex 会话和外部安全工具',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明该 Skill 用 line-by-line / block-by-block 分析构建 deep architectural context',
      'security-threat-model 要求 repository-grounded threat modeling，并枚举 trust boundaries、assets、entry points 和 abuse paths',
      'security-best-practices 可在安全报告中聚焦 major issues',
      '适合把代码证据、架构假设和攻击面整理清楚后再审查',
      '输出应标注假设和证据，不负责直接给漏洞结论'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      '不是独立审计 Skill，需要和威胁建模或安全最佳实践流程搭配',
      '大型仓库仍需要明确范围和人工确认'
    ],
    bestFor: '安全审计前的系统模型梳理、trust boundaries 和关键资产盘点、基于仓库证据的风险分析',
    funRanking: '归档',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，audit-context-building 有 Trail of Bits 公开上游，定位是审计前用 line-by-line 分析建立 deep architectural context；它不负责直接给漏洞结论，实际使用前需单独安装。',
      pitfalls: ['先确认审计范围', '所有架构判断都要有仓库证据', '不要把上下文构建当作漏洞扫描']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/audit-context-building/',
      '邻近本地 skill: security-threat-model',
      '邻近本地 skill: security-best-practices'
    ],
    decisionSummary: {
      verdict: '公开上游已验证，需单独安装；适合作为审计前上下文构建工作流展示。',
      bestFor: '需要先厘清系统边界、资产、入口和假设，再做安全审查的仓库',
      avoidIf: '你需要已验证的自动漏洞扫描、逐行审计或全仓数据流分析能力',
      mainRisk:
        '需单独安装该 Skill；若范围和证据不明确，line-by-line context building 仍会变成泛泛架构总结。',
      alternatives: ['security-threat-model', 'security-best-practices', 'Semgrep CLI']
    },
    swot: {
      S: '可帮助审计先列证据和边界',
      W: '需单独安装且依赖审计范围质量',
      O: '可并入 threat model / security-best-practices',
      T: 'SAST 和专业威胁建模工具竞争'
    },
    tags: ['Skills', '代码审计', '安全', 'deprecated']
  },

  // --- 开发工具 Skills ---
  {
    id: 'git-cleanup-skill',
    name: 'git-cleanup',
    category: 'skill',
    subcategory: '开发工具',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models:
          '清理本地分支和 worktree 的流程；仅执行本地清理，并设置两次确认',
        link: 'https://trailofbits.com/skills/git-cleanup/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；本地 Git 操作本身无平台额度',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明该 Skill 处理 local branches and worktrees，并强调 local cleanup only',
      '清理流程包含 two confirmation gates，要求用户在删除前确认目标和计划',
      'using-git-worktrees 提供隔离工作区检测和创建流程',
      '强调先检测现有 worktree 和 submodule，避免破坏 harness 状态',
      '任何清理动作都应 dry-run、列出目标并等待明确确认'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      '不要自动删除分支，仍应作为人工维护流程入口',
      '分支状态可能与远端和 PR 状态不一致'
    ],
    bestFor: 'Git 工作区隔离、worktree 状态检查、清理前审计清单，而不是自动删除分支',
    funRanking: '归档',
    personalExperience: {
      rating: 3,
      insights:
        '截至 2026-07-08，git-cleanup 有 Trail of Bits 公开上游，定位是清理 local branches and worktrees；它强调 local cleanup only、two confirmation gates 和人工确认，适合作为谨慎的 Git 维护流程入口。',
      pitfalls: ['先列出目标和理由', '不要自动删除本地分支', '确认是否有 worktree 或未推送提交']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/git-cleanup/',
      '邻近本地 skill: superpowers:using-git-worktrees'
    ],
    decisionSummary: {
      verdict:
        '公开上游已验证，需单独安装；适合作为 local branches and worktrees 清理前的人工确认工作流。',
      bestFor: '开始 feature work 前确认是否在 isolated workspace，或清理前生成人工审计清单',
      avoidIf: '你希望无确认地自动删除本地分支、worktree 或远端引用',
      mainRisk:
        'Git 删除操作不可逆风险高；即便使用公开上游，也必须保留 two confirmation gates 和人工确认。',
      alternatives: ['using-git-worktrees', 'git branch --merged', 'Git GUI cleanup tools']
    },
    swot: {
      S: 'Git 维护前审计线索清晰',
      W: '需单独安装且删除动作风险高',
      O: '可作为 worktree 清理前检查清单',
      T: 'Git GUI 和原生命令竞争'
    },
    tags: ['Skills', 'Git', '维护', '已核验', 'public-upstream']
  },
  {
    id: 'ask-questions-skill',
    name: 'ask-questions-if-underspecified',
    category: 'skill',
    subcategory: '开发工具',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models:
          '针对需求不明确的任务，提出最少量澄清问题，识别必须回答的问题并处理未声明假设',
        link: 'https://trailofbits.com/skills/ask-questions-if-underspecified/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；取决于 Codex 会话和相关插件',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明该 Skill 生成 minimum set of clarifying questions',
      '强调 implementation 前先提出 must-have questions，或在用户同意后明确 assumptions',
      'brainstorming 要求先探索上下文、提出方案并获得设计批准',
      'Product Design get-context 要求在 UI 工作前确认产品、视觉来源和交互级别',
      '适合用 one targeted question 解决关键不确定性'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      '过度提问会阻塞明确任务',
      '需要区分必须澄清和可用保守默认处理的问题'
    ],
    bestFor: '复杂需求前的 brief 澄清、产品设计上下文确认、降低误解返工风险',
    funRanking: '归档',
    personalExperience: {
      rating: 4,
      insights:
        '截至 2026-07-08，ask-questions-if-underspecified 有 Trail of Bits 公开上游，定位是用 minimum set of clarifying questions 找出 must-have questions；它应与 brainstorming 和 get-context 搭配，避免过度提问。',
      pitfalls: [
        '只问阻塞决策的问题',
        '能用安全默认值推进时不要过度等待',
        '产品设计问题先走 get-context'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/ask-questions-if-underspecified/',
      '邻近本地 skill: superpowers:brainstorming',
      '邻近本地 skill: product-design:get-context'
    ],
    decisionSummary: {
      verdict: '公开上游已验证，需单独安装；适合作为复杂任务前的最小澄清问题工作流。',
      bestFor: '模糊需求、产品 UI brief、复杂实现前的关键决策澄清',
      avoidIf: '任务已经明确、低风险，继续提问只会拖慢执行',
      mainRisk:
        '如果不控制问题数量，minimum set of clarifying questions 仍可能把主动协作变成阻塞。',
      alternatives: ['brainstorming', 'Product Design get-context', 'writing-plans']
    },
    swot: {
      S: '可减少需求误解',
      W: '需单独安装且容易过度提问',
      O: '可并入 brainstorming / get-context',
      T: '模型原生意图理解提升'
    },
    tags: ['Skills', '需求澄清', '协作', '已核验', 'public-upstream']
  },

  // --- 测试 Skills ---
  {
    id: 'property-based-testing-skill',
    name: 'property-based-testing',
    category: 'skill',
    subcategory: '测试',
    developer: 'Trail of Bits / public upstream',
    logo: null,
    versions: [
      {
        type: 'Public upstream',
        pricing: '公开上游已验证；需单独安装 Trail of Bits plugin',
        models:
          '提供覆盖 Hypothesis、fast-check、proptest 和 Echidna 的属性测试指导',
        link: 'https://trailofbits.com/skills/property-based-testing/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；实际成本取决于所选测试库和运行环境',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开上游已验证；需要通过 Trail of Bits plugin 单独安装',
      'Trail of Bits 页面说明该 Skill 会按语言推荐 Hypothesis、fast-check、proptest 或 Echidna',
      '强调 roundtrip property、invariants、edge cases 和生成式测试设计',
      'test-driven-development 提供 RED/GREEN/REFACTOR 纪律，可承接属性测试用例设计',
      'systematic-debugging 强调先复现和找根因，适合分析 fuzz 失败样本',
      '适合在解析、序列化、状态机等高风险逻辑中考虑性质约束'
    ],
    cons: [
      '需要单独安装该 Skill，当前页面按公开上游能力展示',
      '属性定义和 shrink 结果解释需要经验',
      '测试运行成本和随机性需要种子管理'
    ],
    bestFor: '把属性测试作为方法论纳入 TDD/调试流程，而不是依赖不存在的同名 Skill',
    funRanking: '归档',
    personalExperience: {
      rating: 3.5,
      insights:
        '截至 2026-07-08，property-based-testing 有 Trail of Bits 公开上游，覆盖 Hypothesis、fast-check、proptest、Echidna 和 roundtrip property 等模式；实际落地仍要按语言生态选择库并固定失败样本。',
      pitfalls: ['先选择语言对应测试库', '固定随机种子', '把失败样本转成回归测试']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      'https://trailofbits.com/skills/property-based-testing/',
      '邻近本地 skill: superpowers:test-driven-development',
      '邻近本地 skill: superpowers:systematic-debugging'
    ],
    decisionSummary: {
      verdict: '公开上游已验证，需单独安装；适合作为属性测试方法和语言库选择的工作流入口。',
      bestFor: '解析器、序列化、状态机、权限规则等适合定义不变量的代码',
      avoidIf: '团队没有选定属性测试库，或当前只需要小范围示例回归测试',
      mainRisk: '属性不变量写错会制造噪音，随机失败需要固定种子、保存失败样本并系统化复现。',
      alternatives: [
        'test-driven-development',
        'systematic-debugging',
        'language-specific property testing libraries'
      ]
    },
    swot: {
      S: '适合不变量测试场景',
      W: '需单独安装且属性设计门槛高',
      O: '可并入 TDD 和 systematic-debugging',
      T: '语言生态原生测试库竞争'
    },
    tags: ['Skills', '测试', '属性测试', '已核验', 'public-upstream']
  },

  // --- 数据库 Skills ---
  {
    id: 'supabase-skill',
    name: 'supabase',
    category: 'skill',
    subcategory: '数据库',
    developer: 'Supabase / OpenAI curated plugin',
    logo: null,
    versions: [
      {
        type: 'Installed skill',
        pricing: '随当前 Supabase 插件环境可用；Supabase 项目和外部服务按官方账户计费',
        models:
          'Supabase Database, Auth, Edge Functions, Realtime, Storage, Vectors, Cron, Queues, CLI and MCP server',
        link: 'https://supabase.com/docs'
      },
      {
        type: 'Postgres best practices',
        pricing: 'MIT skill guidance；数据库运行成本按 Supabase/Postgres 环境计费',
        models:
          'Postgres 性能、RLS、模式、查询、连接、锁和监控指导',
        link: 'https://supabase.com/docs/guides/database/overview'
      }
    ],
    freeQuota: 'Skill 本身无独立免费额度声明；Supabase 服务额度以当前官方计划为准',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '当前核验环境中的 supabase Skill 覆盖 Database、Auth、Edge Functions、Realtime、Storage、Vectors、Cron、Queues、CLI 和 MCP server',
      '明确提醒 Supabase changes frequently，需要 verify against changelog 和当前 docs',
      '安全清单覆盖 RLS、service_role 暴露、JWT metadata、views、SECURITY DEFINER 和 storage upsert',
      'Supabase CLI 命令要求通过 --help 发现，避免记忆过时',
      'supabase-postgres-best-practices 覆盖 Postgres performance、connection、schema、RLS、locking 和 monitoring'
    ],
    cons: [
      '强依赖 Supabase 生态和项目权限',
      '实现 schema/auth/RLS 改动后必须执行真实验证',
      '文档和 CLI 更新频繁，需要按任务检索最新资料'
    ],
    bestFor: 'Supabase 项目开发、Auth/RLS 安全复核、CLI/MCP 排障、Postgres schema 和性能优化',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        '这是本批里证据更充分的条目之一：当前核验环境有精确 supabase Skill，也有 Supabase Postgres best practices。推荐时重点应放在“先查 changelog / docs、做真实 SQL 或 CLI 验证、严守 RLS 安全清单”。',
      pitfalls: [
        '先查 changelog 和 docs',
        'RLS/权限变更必须验证',
        '不要暴露 service_role 或 secret key'
      ]
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: [
      '本地 skill: supabase',
      '本地 skill: build-web-apps:supabase-postgres-best-practices',
      'https://supabase.com/docs'
    ],
    decisionSummary: {
      verdict:
        '当前核验环境存在精确 Supabase Skill 和 Supabase Postgres 最佳实践，可作为已核验条目保留。',
      bestFor: 'Supabase Auth/RLS/CLI/MCP/Schema/Realtime/Storage 等项目开发和排障',
      avoidIf: '项目不是 Supabase/Postgres 技术栈，或没有数据库权限可验证变更',
      mainRisk:
        'Supabase 变更频繁；如果不查 changelog/docs 并执行真实验证，容易按过时 API 或错误 RLS 模式实现。',
      alternatives: [
        'Supabase MCP server',
        'supabase-postgres-best-practices',
        'Postgres official docs'
      ]
    },
    swot: {
      S: '安装环境来源明确且覆盖广',
      W: '平台绑定和验证成本高',
      O: 'BaaS 与 Postgres 应用增长',
      T: 'Firebase / Neon / PlanetScale 竞争'
    },
    tags: ['Skills', 'Supabase', '数据库', 'PostgreSQL', '已核验']
  },
  {
    id: 'supabase-realtime-skill',
    name: 'supabase-realtime',
    category: 'skill',
    subcategory: '数据库',
    developer: 'Supabase historical alias',
    logo: null,
    versions: [
      {
        type: 'Historical catalog alias',
        pricing:
          '未发现可公开核验的同名 Skill；以 Supabase Skill 的 Realtime 触发范围和官方 Realtime 文档作为邻近来源',
        models:
          'Supabase Skill 将 Realtime 与身份认证、RLS、CLI 和 MCP 服务工作一并列为适用场景',
        link: 'https://supabase.com/docs/guides/realtime'
      }
    ],
    freeQuota: '暂无该 Skill 的独立免费额度证据；Supabase Realtime 用量以官方项目计划为准',
    contextWindow: 'N/A',
    chineseSupport: 3,
    pros: [
      '公开来源不足，适合作为 Supabase Realtime 子方向保留',
      '精确 supabase Skill 描述中包含 Realtime 触发范围',
      '可与 auth、RLS、CLI 和 MCP server 排障一起处理',
      '适合在 Supabase 项目内讨论实时消息、通知、presence 或协作需求',
      '需要按官方 Realtime docs 和项目设置继续复核'
    ],
    cons: [
      '未找到可公开核验的同名 supabase-realtime Skill，不能确认同名 Skill 的专门迁移指南',
      '实时功能和 RLS/鉴权耦合强，必须用项目环境验证',
      'WebSocket、channel 和权限问题排查成本较高'
    ],
    bestFor:
      'Supabase 项目中的 Realtime 功能规划、RLS/权限排查和实现前资料入口；作为历史别名指向主 Supabase Skill',
    funRanking: '历史',
    personalExperience: {
      rating: 4,
      insights:
        '当前不能把它写成独立 Realtime 专家 Skill；更准确的是 Supabase Skill 的一个子场景和历史别名。保留时要提示用户回到 Supabase 官方 Realtime 文档和项目配置中验证。',
      pitfalls: ['先确认项目 Realtime 设置', 'RLS/授权和频道订阅要一起测', '不要承诺具体迁移路线']
    },
    verificationStatus: 'historical',
    lastVerified: '2026-07-08',
    sources: [
      '公开来源不足：未发现同名 supabase-realtime skill（检查于 2026-07-08）',
      '邻近本地 skill: supabase',
      'https://supabase.com/docs/guides/realtime'
    ],
    decisionSummary: {
      verdict:
        '作为历史别名保留，指向 Supabase 主 Skill 与官方 Realtime 文档；不要宣传独立专项 Skill、专门迁移或性能能力。',
      bestFor: '已有 Supabase 项目，想把 Realtime 与 auth/RLS/CLI/MCP 排障放在一起处理',
      avoidIf: '你需要独立的 Realtime 专项 Skill、完整迁移指南或跨平台实时系统方案',
      mainRisk: '同名来源缺失；实时订阅问题高度依赖项目设置、RLS 和网络环境。',
      alternatives: ['supabase', 'Supabase Realtime docs', 'Firebase Realtime / Firestore']
    },
    swot: {
      S: 'Supabase 主 Skill 覆盖 Realtime 线索',
      W: '同名专项公开来源不足',
      O: '可作为协作和通知子场景线索',
      T: 'Firebase / Ably / Pusher 竞争'
    },
    tags: ['Skills', 'Supabase', 'Realtime', 'historical']
  },

  // --- UI/UX Skills ---
  {
    id: 'ui-ux-pro-max-skill',
    name: 'ui-ux-pro-max',
    category: 'skill',
    subcategory: 'UI/UX设计',
    developer: '历史概念 / 公开来源不足',
    logo: null,
    versions: [
      {
        type: '历史概念',
        pricing:
          '未发现可公开核验的同名 Skill；建议并入 frontend-app-builder / Product Design ideate',
        models: '历史概念；UI 构思和实现应使用真实设计工作流 Skill',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；取决于实际使用的设计/图像/模型能力',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '公开来源不足，旧条目可作为 UI/UX 设计增强概念留档',
      'frontend-app-builder 是真实前端设计与实现工作流',
      'Product Design ideate 可在 get-context 后生成视觉方向',
      '历史概念，不能继续使用未证实的数字化风格库卖点',
      '可把设计系统、概念探索和浏览器验收拆给真实 Skill'
    ],
    cons: [
      '未找到可公开核验的同名 ui-ux-pro-max Skill',
      '旧文案数字化卖点未找到来源',
      '与 frontend-design/frontend-app-builder 职责重复'
    ],
    bestFor: '历史内容迁移时的合并候选；新任务应转用 frontend-app-builder 或 Product Design ideate',
    funRanking: '归档',
    personalExperience: {
      rating: 2.5,
      insights:
        '这个条目的旧文案最像过时宣传页。没有同名来源时，应标为历史概念，并把用户导向 frontend-app-builder / ideate 这些实际存在的设计流程。',
      pitfalls: [
        '不要引用未证实的风格/调色板数量',
        '避免和 frontend-design 重复',
        '需要真实视觉 brief 和截图验收'
      ]
    },
    verificationStatus: 'deprecated',
    lastVerified: '2026-07-08',
    sources: [
      '公开来源不足：未发现同名 ui-ux-pro-max skill（检查于 2026-07-08）',
      '邻近本地 skill: build-web-apps:frontend-app-builder',
      '邻近本地 skill: product-design:ideate'
    ],
    decisionSummary: {
      verdict: '不建议继续作为独立 active Skill 展示；应作为过时 UI/UX 概念并入真实设计工作流。',
      bestFor: '清理旧目录时提示用户转向 frontend-app-builder 或 Product Design ideate',
      avoidIf: '你需要可验证的风格库、调色板库或跨技术栈生成能力',
      mainRisk: '旧数字卖点没有来源，继续展示会误导用户认为存在全能 UI/UX Skill。',
      alternatives: ['frontend-app-builder', 'Product Design ideate', 'Product Design audit']
    },
    swot: {
      S: '可作为旧内容合并入口',
      W: '同名来源缺失且卖点夸张',
      O: '设计工作流可转向真实 Skill',
      T: 'Figma / v0 / Product Design 插件竞争'
    },
    tags: ['Skills', 'UI/UX', '设计系统', 'deprecated']
  },

  // --- 内容生成 Skills ---
  {
    id: 'week-report-skill',
    name: 'week-report-generator',
    category: 'skill',
    subcategory: '内容生成',
    developer: '历史概念 / 公开来源不足',
    logo: null,
    versions: [
      {
        type: '历史概念',
        pricing: '未找到可公开核验的同名 Skill；需要真实内部数据源和模板后才能恢复推荐',
        models: '需要具体内部数据源、报告 schema 和访问路径',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；内部数据源、告警平台和模型调用成本需单独确认',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '公开来源不足，适合保留为内部报告自动化想法',
      '需要具体内部数据源，缺少数据源时不能承诺生成质量',
      '需要报告 schema、字段映射、访问权限和输出模板',
      '适合在已有告警/工单/监控数据接入后重新评估',
      '历史概念，当前不应作为公开可用 Skill 推荐'
    ],
    cons: [
      '未找到可公开核验的同名 week-report-generator Skill',
      '内部平台、数据权限和模板均未验证',
      '没有样例输入输出时无法判断适用场景'
    ],
    bestFor: '内部周报自动化需求的待办线索；恢复前需补真实数据源、模板和样例',
    funRanking: '归档',
    personalExperience: {
      rating: 2.5,
      insights:
        '这是典型的“自研想法遗留项”：没有安装环境 Skill 或数据源证据时，应先弃用公开推荐，只保留为后续补模板和数据接入的候选。',
      pitfalls: ['先补真实数据源', '提供样例周报模板', '明确访问权限和脱敏规则']
    },
    verificationStatus: 'deprecated',
    lastVerified: '2026-07-08',
    sources: ['公开来源不足：未发现同名 week-report-generator skill（检查于 2026-07-08）'],
    decisionSummary: {
      verdict: '当前不建议作为 active Skill 展示；需要补齐内部数据源、模板和运行证据后再恢复。',
      bestFor: '内部监控/告警/工单数据已经可访问，且有固定周报模板的团队',
      avoidIf: '没有真实数据源、字段定义、访问授权或样例输出',
      mainRisk: '所有核心卖点都依赖未验证的内部平台和模板，公开展示会过度承诺。',
      alternatives: ['notion-knowledge-capture', 'spreadsheets reports', 'custom report template']
    },
    swot: {
      S: '内部报告自动化线索待补证',
      W: '同名来源和数据源缺失',
      O: '可并入已有 BI/监控报告流程',
      T: 'BI/监控平台自带报告'
    },
    tags: ['Skills', '周报', '自动化', 'deprecated']
  },

  // --- 思维增强 Skills ---
  {
    id: 'think-harder-skill',
    name: 'think-harder',
    category: 'skill',
    subcategory: '思维增强',
    developer: '历史概念 / 公开来源不足',
    logo: null,
    versions: [
      {
        type: '历史概念',
        pricing:
          '未发现可公开核验的同名 Skill；建议并入 brainstorming / systematic-debugging 等具体流程',
        models: '历史概念；用任务专用推理流程替代泛化思维增强',
        link: 'https://openai.com/codex/'
      }
    ],
    freeQuota: '暂无独立免费额度证据；增加推理深度通常意味着更多模型用量',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '公开来源不足，可作为“更深入分析”的历史概念保留',
      'brainstorming 提供需求到设计的结构化流程',
      'systematic-debugging 提供找根因的四阶段流程',
      '历史概念，应该转向具体工作流而不是泛化思维增强',
      '适合在目录中提示用户选择更具体的 Skill'
    ],
    cons: [
      '未找到可公开核验的同名 think-harder Skill',
      '泛化表述无法证明具体收益',
      '容易变成增加等待时间但没有验证产物'
    ],
    bestFor:
      '旧目录迁移时的合并提示；复杂问题应选择 brainstorming、systematic-debugging 或 writing-plans',
    funRanking: '归档',
    personalExperience: {
      rating: 2.5,
      insights:
        '没有同名来源时，“think-harder”不应作为产品化 Skill 展示。更好的目录体验是把用户导向具体流程：需求设计用 brainstorming，问题排查用 systematic-debugging。',
      pitfalls: [
        '不要把模型内部推理当功能卖点',
        '选择具体流程而不是泛化增强',
        '以产物和验证衡量效果'
      ]
    },
    verificationStatus: 'deprecated',
    lastVerified: '2026-07-08',
    sources: [
      '公开来源不足：未发现同名 think-harder skill（检查于 2026-07-08）',
      '邻近本地 skill: superpowers:brainstorming',
      '邻近本地 skill: superpowers:systematic-debugging'
    ],
    decisionSummary: {
      verdict: '不建议继续作为独立 active Skill；应并入更具体的设计、调试或规划流程。',
      bestFor: '帮助用户从旧条目跳转到 brainstorming、systematic-debugging 等真实工作流',
      avoidIf: '你需要可验证的具体能力、测试或交付物',
      mainRisk: '缺少同名来源；泛化“深度推理”无法被页面核验，容易变成不可证明的卖点。',
      alternatives: ['brainstorming', 'systematic-debugging', 'writing-plans']
    },
    swot: {
      S: '表达了深入分析的历史诉求',
      W: '同名来源缺失且不可验证',
      O: '可转向具体流程 Skill',
      T: '模型原生推理能力和任务专用 Skill'
    },
    tags: ['Skills', '推理', 'deprecated']
  },
  {
    id: 'research-skill',
    name: 'research',
    category: 'skill',
    subcategory: '研究分析',
    developer: 'Product Design / AnyCap',
    logo: null,
    versions: [
      {
        type: 'Product Design research',
        pricing: '随 Product Design 插件环境可用；需要公共或内部来源访问',
        models: '快速、基于来源的 UX 研究，聚焦当前产品痛点和体验摩擦',
        link: 'https://openai.com/codex/'
      },
      {
        type: 'AnyCap Deep Research',
        pricing: '需要 anycap CLI 已认证；外部搜索/发布能力按 AnyCap 环境而定',
        models: '多来源研究，覆盖网页搜索、抓取、引用、综合分析和交付工作流',
        link: 'https://anycap.ai'
      }
    ],
    freeQuota: '无独立免费额度证据；取决于 Product Design / AnyCap / 搜索和模型调用环境',
    contextWindow: 'N/A',
    chineseSupport: 5,
    pros: [
      '精确 research Skill 存在：快速、基于来源的 UX 研究，聚焦用户痛点和体验摩擦',
      '要求引用来源，并区分观察证据与推断',
      '适合产品体验、入门流程、文档/帮助、开发者体验和支持痛点研究',
      'AnyCap Deep Research 提供多来源研究、网页搜索/抓取、引用、综合分析和交付工作流',
      '适合把 UX 快速扫描和更深的市场/技术研究区分开'
    ],
    cons: [
      'Product Design research 范围偏产品/UX，不等同于任意技术深研',
      'AnyCap Deep Research 需要 anycap CLI 已认证',
      '公开来源信号可能弱，必须说明来源访问缺失或证据较弱'
    ],
    bestFor: '产品 UX 研究、用户痛点聚类、竞品/市场/技术深度研究的证据化报告',
    funRanking: '夯夯',
    personalExperience: {
      rating: 4.5,
      insights:
        'research 现在应拆成两层：Product Design 的 research 负责当前用户痛点和体验摩擦；AnyCap Deep Research 负责更广的多源研究报告。共同边界是必须引用来源、区分证据和推断。',
      pitfalls: ['先确认研究范围和时间窗口', '来源弱时要明说', '不要把轶事当频率结论']
    },
    verificationStatus: 'verified',
    lastVerified: '2026-07-08',
    sources: ['本地 skill: product-design:research', '本地 skill: anycap-deepresearch'],
    decisionSummary: {
      verdict:
        '当前核验环境存在精确 Product Design research Skill，并有 AnyCap Deep Research 作为深研邻近能力，可保留为已核验条目。',
      bestFor: '产品 UX pain 扫描、开发者体验/文档摩擦研究、竞品或技术主题的多源报告',
      avoidIf: '你无法提供产品/研究范围，或需要不带来源的快速主观判断',
      mainRisk: '研究结论依赖来源质量；必须区分观察证据和推断，公开来源弱时要降置信度。',
      alternatives: ['anycap-deepresearch', 'Product Design audit', 'notion-research-documentation']
    },
    swot: {
      S: '精确 UX research 来源和 AnyCap 深研来源都存在',
      W: '依赖来源质量和工具授权',
      O: '可支撑产品决策和竞品研究流程',
      T: 'Perplexity、Glean、Notion AI 等研究工具竞争'
    },
    tags: ['Skills', '研究', 'UX', '引用', '本地核验']
  }
].map(withDefaultVerificationMetadata)

// 工具分类统计
export const getToolsByCategory = (category) => aiToolsData.filter((t) => t.category === category)
export const getToolById = (id) => aiToolsData.find((t) => t.id === id)
export const getAllCategories = () => [...new Set(aiToolsData.map((t) => t.category))]
export const getAllTags = () => [...new Set(aiToolsData.flatMap((t) => t.tags))]
