import { describe, it, expect } from 'vitest'
import {
  formatChineseSupport,
  formatContextWindow,
  formatMetricValue,
  formatVersionType,
  getDecisionSummary,
  getToolVerification,
  getVerificationBadgeClass,
  hasMeaningfulContextWindow,
  isPlaceholderMetricValue
} from '../toolMetadata'
import { aiToolsData } from '../../data/tools'

describe('toolMetadata', () => {
  it('formats raw catalog placeholders into user-facing copy', () => {
    expect(formatMetricValue('N/A')).toBe('未公开')
    expect(formatMetricValue(' n/a ', '待补充')).toBe('待补充')
    expect(formatMetricValue('unknown', '待补充')).toBe('待补充')
    expect(formatMetricValue('null', '待补充')).toBe('待补充')
    expect(formatMetricValue('-', '待补充')).toBe('待补充')
    expect(formatMetricValue('', '待补充')).toBe('待补充')
    expect(formatMetricValue('Pro $20/月')).toBe('Pro $20/月')
    expect(formatContextWindow('N/A')).toBe('不适用')
    expect(hasMeaningfulContextWindow('N/A')).toBe(false)
    expect(hasMeaningfulContextWindow('unknown')).toBe(false)
    expect(hasMeaningfulContextWindow('-')).toBe(false)
    expect(hasMeaningfulContextWindow('未公开')).toBe(false)
    expect(hasMeaningfulContextWindow('200K')).toBe(true)
    expect(isPlaceholderMetricValue(undefined)).toBe(true)
    expect(isPlaceholderMetricValue('200K')).toBe(false)
    expect(formatChineseSupport(undefined)).toBe('未评分')
    expect(formatChineseSupport(3.6)).toBe('★★★★☆')
    expect(formatVersionType('Global')).toBe('国际版')
    expect(formatVersionType('CN')).toBe('中国版')
    expect(formatVersionType('Official Beta')).toBe('官方测试版')
    expect(formatVersionType('Gemini API')).toBe('Gemini API')
    expect(formatVersionType(undefined)).toBe('未标注版本')
  })

  it('returns conservative defaults when metadata is missing', () => {
    const tool = {
      bestFor: '日常开发',
      cons: ['价格较高'],
      personalExperience: {
        insights: '适合作为主力工具。复杂任务需要人工审查。',
        pitfalls: ['不要一次改太多文件']
      }
    }

    expect(getToolVerification(tool)).toEqual({
      status: 'needs-review',
      label: '待核验',
      description: '价格、模型、额度或能力边界尚未完成可追踪来源核验',
      lastVerified: null,
      sources: [],
      sourceCount: 0,
      publicSourceCount: 0,
      isVerified: false
    })

    expect(getDecisionSummary(tool)).toEqual({
      verdict: '适合作为主力工具',
      bestFor: '日常开发',
      avoidIf: '价格较高',
      mainRisk: '不要一次改太多文件',
      alternatives: []
    })
  })

  it('normalizes verified metadata and badge classes', () => {
    const tool = {
      verificationStatus: 'verified',
      lastVerified: '2026-06-25',
      sources: ['https://example.com/pricing'],
      decisionSummary: {
        verdict: '适合作为重度开发主力',
        bestFor: '复杂代码任务',
        avoidIf: '预算极低',
        mainRisk: '订阅成本高',
        alternatives: ['Trae', 'Windsurf']
      }
    }

    expect(getToolVerification(tool)).toEqual({
      status: 'verified',
      label: '已核验',
      description: '核心价格、模型、产品状态或能力边界已按可追踪来源核验',
      lastVerified: '2026-06-25',
      sources: ['https://example.com/pricing'],
      sourceCount: 1,
      publicSourceCount: 1,
      isVerified: true
    })
    expect(getDecisionSummary(tool).alternatives).toEqual(['Trae', 'Windsurf'])
    expect(getVerificationBadgeClass(tool)).toContain('text-[#30d158]')
  })

  it('distinguishes local-only verification from public-source verification', () => {
    const tool = {
      verificationStatus: 'verified',
      lastVerified: '2026-07-08',
      sources: ['本地 skill: skill-creator']
    }

    expect(getToolVerification(tool)).toMatchObject({
      status: 'local-verified',
      label: '本地核验',
      publicSourceCount: 0,
      isVerified: true
    })
    expect(getVerificationBadgeClass(tool)).toContain('text-[#64d2ff]')
  })

  it('tracks official-source metadata for the first high-impact verification wave', () => {
    const expectedSources = {
      cursor: ['https://cursor.com/pricing'],
      'github-copilot': ['https://github.com/features/copilot/plans'],
      'claude-code': [
        'https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan',
        'https://support.claude.com/en/articles/11049741-what-is-the-max-plan'
      ],
      'gemini-cli': ['https://github.com/google-gemini/gemini-cli'],
      codex: [
        'https://developers.openai.com/codex/pricing',
        'https://developers.openai.com/codex/cli/features'
      ]
    }

    Object.entries(expectedSources).forEach(([id, sources]) => {
      const tool = aiToolsData.find((item) => item.id === id)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe(id === 'github-copilot' ? '2026-07-13' : '2026-07-07')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.alternatives?.length).toBeGreaterThan(0)
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
    })
  })

  it('tracks official-source metadata for the second coding-tool verification wave', () => {
    const expectedSources = {
      trae: ['https://www.trae.ai/pricing'],
      windsurf: [
        'https://windsurf.com/pricing',
        'https://devin.ai/pricing/',
        'https://docs.devin.ai/desktop/accounts/usage'
      ],
      kiro: ['https://kiro.dev/pricing/'],
      qoder: ['https://docs.qoder.com/account/pricing'],
      aider: [
        'https://github.com/aider-ai/aider',
        'https://aider.chat/docs/llms.html',
        'https://aider.chat/docs/usage.html'
      ],
      opencode: [
        'https://opencode.ai/',
        'https://github.com/anomalyco/opencode',
        'https://opencode.ai/docs/go/'
      ]
    }

    Object.entries(expectedSources).forEach(([id, sources]) => {
      const tool = aiToolsData.find((item) => item.id === id)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe('2026-07-07')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.alternatives?.length).toBeGreaterThan(0)
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
    })
  })

  it('tracks official-source metadata for the agent builder verification wave', () => {
    const expectedSources = {
      devin: [
        'https://cognition.com/blog/new-self-serve-plans-for-devin',
        'https://docs.devin.ai/get-started/devin-intro',
        'https://docs.devin.ai/integrations/overview'
      ],
      'bolt-new': ['https://bolt.new/pricing', 'https://github.com/stackblitz/bolt.new'],
      replit: ['https://replit.com/pricing', 'https://docs.replit.com/billing/ai-billing'],
      v0: ['https://v0.app/pricing', 'https://v0.app/'],
      lovable: [
        'https://lovable.dev/pricing',
        'https://docs.lovable.dev/introduction/subscription-plans',
        'https://docs.lovable.dev/integrations/supabase',
        'https://docs.lovable.dev/integrations/github'
      ]
    }

    Object.entries(expectedSources).forEach(([id, sources]) => {
      const tool = aiToolsData.find((item) => item.id === id)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe('2026-07-07')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.alternatives?.length).toBeGreaterThan(0)
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
    })
  })

  it('tracks official-source metadata for the model and multimodal verification wave', () => {
    const expectedSources = {
      claude: [
        'https://platform.claude.com/docs/en/about-claude/models/overview',
        'https://claude.com/pricing',
        'https://support.anthropic.com/en/articles/11049762-choosing-a-claude-ai-plan'
      ],
      gpt: [
        'https://developers.openai.com/api/docs/guides/latest-model',
        'https://developers.openai.com/api/docs/pricing',
        'https://openai.com/chatgpt/pricing/'
      ],
      gemini: [
        'https://ai.google.dev/gemini-api/docs/models',
        'https://ai.google.dev/gemini-api/docs/pricing',
        'https://gemini.google/subscriptions/'
      ],
      deepseek: [
        'https://api-docs.deepseek.com/quick_start/pricing',
        'https://api-docs.deepseek.com/news/news260424'
      ],
      qwen: [
        'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
        'https://www.alibabacloud.com/help/en/model-studio/models'
      ],
      sora: [
        'https://developers.openai.com/api/docs/guides/video-generation',
        'https://developers.openai.com/api/docs/pricing',
        'https://developers.openai.com/api/docs/models/sora-2'
      ]
    }

    Object.entries(expectedSources).forEach(([id, sources]) => {
      const tool = aiToolsData.find((item) => item.id === id)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe('2026-07-07')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.alternatives?.length).toBeGreaterThan(0)
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
    })
  })

  it('tracks official-source metadata for the priority multimodal verification wave', () => {
    const expected = {
      midjourney: {
        lastVerified: '2026-07-07',
        sources: [
          'https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans',
          'https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version',
          'https://updates.midjourney.com/v8-1-is-now-the-default-model/',
          'https://docs.midjourney.com/hc/en-us/articles/27870399340173-Free-Trials'
        ],
        mustInclude: ['V8.1', '$120', 'HD', 'GPU time'],
        forbidden: /MJ v6|\$10-60|需要 Discord|V7 已是官方默认/
      },
      'stable-diffusion': {
        lastVerified: '2026-07-07',
        sources: [
          'https://stability.ai/license',
          'https://platform.stability.ai/pricing',
          'https://stability.ai/stable-image'
        ],
        mustInclude: ['Stable Diffusion 3.5', 'USD $1M', '1 credit = $0.01'],
        forbidden: /完全免费|无内容审核|SD 3, SDXL/
      },
      kling: {
        lastVerified: '2026-07-07',
        sources: [
          'https://app.klingai.com',
          'https://kling.ai/document-api/quickStart/productIntroduction/overview',
          'https://kling.ai/document-api/updates/api',
          'https://kling.ai/document-api/productBilling/prePaidResourcePackage'
        ],
        mustInclude: ['Kling 3.0', 'Resource Packages', 'Text-to-Video', 'kling.ai/document-api'],
        forbidden: /可灵 2\.0|日常使用零成本|业界领先|最长 10 秒/
      },
      runway: {
        lastVerified: '2026-07-07',
        sources: [
          'https://runwayml.com/pricing',
          'https://help.runwayml.com/hc/en-us/articles/46974685288467-Creating-with-Gen-4-5',
          'https://docs.dev.runwayml.com/guides/pricing/'
        ],
        mustInclude: ['Gen-4.5', '12 credits per second', '125 credits', '$0.01/credit'],
        forbidden: /Gen-3 Alpha|业界领先|团队成员按 editor/
      },
      suno: {
        lastVerified: '2026-07-07',
        sources: [
          'https://suno.com/pricing',
          'https://help.suno.com/en/articles/2746945',
          'https://help.suno.com/en/articles/2416769'
        ],
        mustInclude: ['v5.5', 'v4.5-all', '50 credits', '非商业用途'],
        forbidden: /Suno v4|4690 万|60 秒内/
      },
      elevenlabs: {
        lastVerified: '2026-07-07',
        sources: [
          'https://elevenlabs.io/docs/overview/models',
          'https://elevenlabs.io/docs/changelog/2026/6/8',
          'https://elevenlabs.io/pricing',
          'https://help.elevenlabs.io/hc/en-us/articles/13313564601361-Can-I-publish-the-content-I-generate-on-the-platform'
        ],
        mustInclude: ['Eleven v3', 'Scribe v2', '10,000 credits', '2026-07-09'],
        forbidden: /\$5\/\$22\/\$99\/\$330|10,000 字符|业界最强|3 倍预估/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-01', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the remaining coding-tool verification wave', () => {
    const expected = {
      'qwen-cli': {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/',
          'https://www.alibabacloud.com/help/en/model-studio/coding-plan',
          'https://github.com/QwenLM/qwen-code'
        ]
      },
      cline: {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://cline.bot/pricing',
          'https://docs.cline.bot/getting-started/cline-provider',
          'https://docs.cline.bot/getting-started/clinepass'
        ]
      },
      continue: {
        status: 'historical',
        lastVerified: '2026-07-08',
        sources: [
          'https://www.continue.dev/',
          'https://github.com/continuedev/continue',
          'https://docs.continue.dev/customize/model-providers/overview'
        ],
        mustInclude: ['Cursor 收购', '不再主动维护', 'final 2.0.0 release']
      },
      goose: {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://goose-docs.ai/',
          'https://github.com/aaif-goose/goose',
          'https://goose-docs.ai/docs/getting-started/providers/'
        ]
      },
      openhands: {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: ['https://www.openhands.dev/pricing', 'https://github.com/OpenHands/OpenHands']
      },
      'jetbrains-ai': {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html',
          'https://www.jetbrains.com/ai-ides/buy/'
        ]
      }
    }

    Object.entries(expected).forEach(([id, { status, lastVerified, sources }]) => {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool?.verificationStatus).toBe(status)
      expect(tool?.lastVerified).toBe(lastVerified)
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
      expect(text).not.toMatch(/\u5b8c\u5168\u514d\u8d39/)
    })

    const qwenCli = aiToolsData.find((item) => item.id === 'qwen-cli')
    expect(JSON.stringify(qwenCli)).not.toMatch(
      /2000\u6b21\/\u5929|1000\u6b21\/\u5929|60\u6b21\/\u5206\u949f/
    )
    expect(qwenCli?.decisionSummary?.mainRisk).toMatch(/2026-04-15|OAuth|Coding Plan|API/)
  })

  it('tracks official-source metadata for the continued LLM verification wave', () => {
    const expected = {
      glm: {
        lastVerified: '2026-07-07',
        sources: ['https://docs.z.ai/guides/overview/pricing', 'https://bigmodel.cn/pricing'],
        mustInclude: ['GLM-5.2']
      },
      kimi: {
        lastVerified: '2026-07-07',
        sources: [
          'https://platform.kimi.ai/docs/models',
          'https://platform.kimi.ai/docs/pricing/chat',
          'https://platform.kimi.ai/docs/guide/kimi-k2-7-code-quickstart'
        ],
        mustInclude: ['kimi-k2.7-code', 'kimi-k2.6', 'kimi-latest']
      },
      minimax: {
        lastVerified: '2026-07-07',
        sources: [
          'https://platform.minimax.io/docs/guides/text-generation',
          'https://platform.minimax.io/docs/guides/pricing-paygo',
          'https://platform.minimax.io/docs/release-notes/models'
        ],
        mustInclude: ['MiniMax-M3', '1,000,000', 'permanent 50% off']
      },
      doubao: {
        lastVerified: '2026-07-07',
        sources: [
          'https://www.volcengine.com/docs/82379/1330310',
          'https://www.volcengine.com/docs/82379/2549861?lang=zh',
          'https://www.volcengine.com/docs/82379/1544106'
        ],
        mustInclude: ['doubao-seed-2-1-pro', '2026-07-06', 'Seed 2.1']
      },
      grok: {
        lastVerified: '2026-07-07',
        sources: [
          'https://docs.x.ai/developers/models',
          'https://x.ai/pricing',
          'https://x.ai/grok'
        ],
        mustInclude: ['Grok 4.3', 'Grok Build']
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-06-29', sources, mustInclude }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        expect(tool?.freeQuota).not.toMatch(/有免费额度|有免费对话|X Premium 订阅/)
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude?.forEach((term) => {
          expect(text).toContain(term)
        })
      }
    )

    expect(aiToolsData.find((item) => item.id === 'glm')?.name).not.toBe('GLM-4.7')
    expect(aiToolsData.find((item) => item.id === 'kimi')?.name).not.toBe('Kimi K2.5')
    expect(aiToolsData.find((item) => item.id === 'minimax')?.name).not.toBe('MiniMax M2.1')
    expect(JSON.stringify(aiToolsData.find((item) => item.id === 'doubao'))).not.toMatch(
      /Doubao-Seed-Code/
    )
    const grok = aiToolsData.find((item) => item.id === 'grok')
    expect(grok?.name).not.toBe('Grok-4 Series')
    expect(JSON.stringify(grok)).not.toMatch(/Grok-4 Series|X Premium/)
  })

  it('tracks official-source metadata for the remaining LLM verification wave', () => {
    const expected = {
      qinglizi: {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: [
          'https://ali-doctor.com/login',
          'https://apps.apple.com/cn/app/%E6%B0%A2%E7%A6%BB%E5%AD%90-%E5%8C%BB%E5%AD%A6ai%E5%8A%A9%E6%89%8B/id6738349403'
        ],
        mustInclude: [
          'App 内购买',
          '当前商店页及产品内为准',
          '不作为诊断、确诊和治疗依据',
          '不能代替医生面诊',
          '医疗行业专业用户参考'
        ],
        forbidden: /\u6700\u4e13\u4e1a|\u8fdc\u9ad8\u4e8e|\u675c\u7eddAI\u5e7b\u89c9|低幻觉|高循证/
      },
      llama: {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: [
          'https://www.llama.com/models/llama-4/',
          'https://www.llama.com/docs/model-cards-and-prompt-formats/llama4/',
          'https://ai.meta.com/blog/llama-4-multimodal-intelligence/'
        ],
        mustInclude: ['Llama 4 Scout', 'Llama 4 Maverick', '10M', '1M', 'Behemoth'],
        forbidden:
          /\u5b8c\u5168\u514d\u8d39|\u5b8c\u5168\u5f00\u6e90|EU \u5730\u533a\u7981\u6b62|AI Act/
      },
      mistral: {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://docs.mistral.ai/models/overview',
          'https://docs.mistral.ai/models/model-cards/mistral-large-3-25-12',
          'https://docs.mistral.ai/resources/known-limitations'
        ],
        mustInclude: ['Mistral Medium 3.5', 'Mistral Large 3', 'Ministral 3'],
        forbidden: /GPT-5|\$14\.99|\u6700\u4fbf\u5b9c|\u6b27\u6d32\u6700\u5f3a/
      },
      yi: {
        status: 'verified',
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
        mustInclude: [
          'Yi-Lightning',
          'Yi-Coder',
          'Apache 2.0',
          'Billing',
          'real-name authentication',
          'limited trial purposes only',
          'without use of Yi Model or Outputs in production',
          'input and generated content'
        ],
        forbidden: /\$0\.14|200\+|500\+|\u65e0\u5546\u7528\u9650\u5236/
      },
      ernie: {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: [
          'https://cloud.baidu.com/product-s/qianfan_home',
          'https://cloud.baidu.com/doc/qianfan-docs/s/7m95lyy43',
          'https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j',
          'https://cloud.baidu.com/doc/qianfan/s/wmh4sv6ya'
        ],
        mustInclude: [
          'ERNIE 5.1',
          'ERNIE 5.0',
          'ERNIE-5.0-Thinking-Preview',
          'ERNIE 4.5 Turbo',
          'ERNIE X1.1',
          '多智能体协同Agent',
          'DeepSeek-V4'
        ],
        forbidden:
          /\u6d88\u8d39\u8005\u5b8c\u5168\u514d\u8d39|\u8d85\u8d8a GPT-4\.5|ERNIE 5\.0 \u4e8e 2025/
      },
      cohere: {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://docs.cohere.com/docs/models',
          'https://docs.cohere.com/docs/how-does-cohere-pricing-work',
          'https://docs.cohere.com/docs/command-a'
        ],
        mustInclude: ['Command A+', 'Command A', 'Command R+'],
        forbidden:
          /\u9886\u57df\u9886\u5148|\u6781\u5177\u7ade\u4e89\u529b|\u6781\u5176\u4fbf\u5b9c/
      },
      'amazon-nova': {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://docs.aws.amazon.com/nova/latest/nova2-userguide/what-is-nova-2.html',
          'https://docs.aws.amazon.com/nova/latest/nova2-userguide/whats-new.html',
          'https://docs.aws.amazon.com/nova/latest/userguide/what-is-nova.html',
          'https://aws.amazon.com/nova/pricing/',
          'https://aws.amazon.com/bedrock/pricing/'
        ],
        mustInclude: ['Nova 2', 'extended thinking', 'built-in tools', 'multimodal embeddings'],
        forbidden: /\u4fbf\u5b9c 75%|GPT-4 \u4fbf\u5b9c|\u6027\u4ef7\u6bd4\u6781\u9ad8/
      },
      hunyuan: {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: [
          'https://cloud.tencent.com/product/tclm',
          'https://cloud.tencent.com/document/product/1729/104753',
          'https://cloud.tencent.com/document/product/1729/97731'
        ],
        mustInclude: ['Hy3', '295B', 'TokenHub', 'hunyuan-a13b'],
        forbidden: /\u514d\u8d39\(腾讯云试用\)|Turbo\/Pro\/Lite/
      }
    }

    Object.entries(expected).forEach(
      ([id, { status, lastVerified = '2026-07-01', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe(status)
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the continued developer-tool verification wave', () => {
    const expected = {
      zed: {
        lastVerified: '2026-07-07',
        sources: ['https://zed.dev/pricing', 'https://zed.dev/docs/ai/overview'],
        mustInclude: [
          '$20 token credits',
          'Personal',
          '$10',
          'Business',
          '2,000 accepted edit predictions'
        ],
        forbidden: /\u5b8c\u5168\u514d\u8d39\u5f00\u6e90|\u5b8c\u5168\u8de8\u5e73\u53f0/
      },
      tabnine: {
        lastVerified: '2026-07-08',
        sources: ['https://www.tabnine.com/pricing/', 'https://www.tabnine.com/'],
        mustInclude: ['Code Assistant', '$39', 'Agentic Platform', '$59', 'MCP', '5% handling fee'],
        forbidden:
          /\$12|\u514d\u8d39\u7248\u57fa\u7840\u4ee3\u7801\u8865\u5168|\$39\u7528\u6237\u6708\(Enterprise\)/
      },
      warp: {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.warp.dev/pricing',
          'https://docs.warp.dev/support-and-community/plans-and-billing/plans-pricing-refunds/'
        ],
        mustInclude: [
          'Build',
          '$20',
          '1,500 credits',
          'Business $50',
          'Enterprise Analytics API',
          'BYOK'
        ],
        forbidden: /150 AI \u8bf7\u6c42|150\u8bf7\u6c42|Pro\)|Turbo|Lightspeed/
      },
      crush: {
        lastVerified: '2026-07-07',
        sources: [
          'https://github.com/charmbracelet/crush',
          'https://charm.land/blog/crush-comes-home/',
          'https://hyper.charm.land/'
        ],
        mustInclude: ['Multi-Model', 'LSP', 'MCP', '100 Hypercredits', '1 Hypercredit = 5¢'],
        forbidden: /\u7ee7\u4efbOpenCode|OpenCode \u7684\u8fc1\u79fb\u76ee\u6807/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the priority MCP verification wave', () => {
    const expected = {
      context7: {
        sources: [
          'https://context7.com/plans',
          'https://context7.com/docs/installation',
          'https://context7.com/docs/resources/all-clients',
          'https://github.com/upstash/context7'
        ],
        mustInclude: [
          'Free for personal use',
          'Pro',
          '$10',
          '5,000 free API calls',
          'Enterprise',
          '$30/user/month',
          '$2.50/user/month'
        ],
        forbidden: /完全免费|零配置即可使用|必装/
      },
      'playwright-mcp': {
        sources: [
          'https://playwright.dev/docs/getting-started-mcp',
          'https://github.com/microsoft/playwright-mcp'
        ],
        mustInclude: ['Node.js 18', 'accessibility snapshots', 'CLI + Skills'],
        forbidden: /完全免费|零依赖安装|功能远超/
      },
      'firecrawl-mcp': {
        sources: [
          'https://www.firecrawl.dev/pricing',
          'https://github.com/firecrawl/firecrawl-mcp-server'
        ],
        mustInclude: ['1,000 credits / month', '$16', 'FIRECRAWL_API_KEY', 'Search 2/10 results'],
        forbidden: /500次|500 次|\$19月|\$49月|免费 500/
      },
      'github-mcp': {
        sources: [
          'https://github.com/github/github-mcp-server',
          'https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/set-up-the-github-mcp-server',
          'https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp-in-your-ide/use-the-github-mcp-server'
        ],
        mustInclude: ['OAuth', 'PAT', 'toolsets', 'read-only', 'remote GitHub MCP server'],
        forbidden: /完全免费|Go 语言编译方式启动较慢|体验极好/
      }
    }

    Object.entries(expected).forEach(([id, { sources, mustInclude, forbidden }]) => {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe('2026-07-08')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
      mustInclude.forEach((term) => {
        expect(text).toContain(term)
      })
      expect(text).not.toMatch(forbidden)
    })
  })

  it('tracks official-source metadata for the agent framework verification wave', () => {
    const expected = {
      n8n: {
        lastVerified: '2026-07-08',
        sources: [
          'https://n8n.io/pricing/',
          'https://docs.n8n.io/sustainable-use-license/',
          'https://docs.n8n.io/advanced-ai/ai-workflow-builder/'
        ],
        mustInclude: [
          '20€/mo',
          '50€/mo',
          '2.5K executions',
          '50 AI Workflow Builder credits',
          '667€/mo',
          'Community Edition',
          'Sustainable Use License'
        ],
        forbidden: /自托管完全免费|\$20月|\$50月|开源社区|400\+ 集成/
      },
      'openai-agents-sdk': {
        lastVerified: '2026-07-08',
        sources: [
          'https://openai.github.io/openai-agents-python/',
          'https://developers.openai.com/api/docs/guides/agents',
          'https://github.com/openai/openai-agents-python'
        ],
        mustInclude: [
          'code-first',
          'provider-agnostic',
          '100+ other LLMs',
          'Handoffs',
          'Guardrails',
          'Tracing'
        ],
        forbidden: /仅支持 OpenAI 模型|GPT-5, o1, o3|2025 年发布/
      },
      'claude-agent-sdk': {
        lastVerified: '2026-07-08',
        sources: [
          'https://code.claude.com/docs/en/agent-sdk/overview',
          'https://github.com/anthropics/claude-agent-sdk-python',
          'https://github.com/anthropics/claude-agent-sdk-typescript'
        ],
        mustInclude: [
          'Claude Code as a library',
          'Python and TypeScript',
          'Python 3.10+',
          '@anthropic-ai/claude-agent-sdk',
          'Amazon Bedrock',
          'Google Cloud',
          'Microsoft Azure',
          'MCP',
          'Permissions'
        ],
        forbidden: /200K|业界最强|无缝集成|文档持续完善中/
      },
      'google-adk': {
        lastVerified: '2026-07-08',
        sources: [
          'https://adk.dev/',
          'https://adk.dev/agents/models/google-gemini/',
          'https://github.com/google/adk-python'
        ],
        mustInclude: [
          'ADK 2.0',
          'Python, TypeScript, Go, Java, and Kotlin',
          'Graph Workflows',
          'almost any generative AI model',
          'Code Execution',
          'Google Search',
          'Apache 2.0'
        ],
        forbidden: /2M|Gemini API 有慷慨免费额度|Python 优先|2025 年发布/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the AI IDE cleanup verification wave', () => {
    const expected = {
      codebuddy: {
        lastVerified: '2026-07-07',
        sources: [
          'https://www.codebuddy.ai/docs/ide/Account/pricing',
          'https://www.codebuddy.ai/docs/ide/Account/credits',
          'https://www.codebuddy.ai/docs/ide/Features/models'
        ],
        mustInclude: [
          '$9.95/month',
          '1,000 credits',
          'Team Plan',
          'OpenAI interface format',
          '任务复杂度'
        ],
        forbidden: /个人版完全免费|10万token|200K\+|混元 \+ DeepSeek 双模型架构/
      },
      antigravity: {
        lastVerified: '2026-07-07',
        sources: [
          'https://antigravity.google/pricing',
          'https://gemini.google/subscriptions/',
          'https://support.google.com/googleone/answer/14534406?hl=en',
          'https://support.google.com/googleone/answer/16286513?hl=en'
        ],
        mustInclude: [
          'Google AI Pro',
          'Google AI Ultra',
          '$99.99',
          '$199.99',
          'highest usage limits',
          'baseline quota'
        ],
        forbidden: /Public Preview期间免费|每 5 小时刷新配额|2026年1月14日|Beta免费/
      },
      verdent: {
        lastVerified: '2026-07-07',
        sources: [
          'https://www.verdent.ai/pricing',
          'https://www.verdent.ai/blog/swe-bench-verified-technical-report',
          'https://www.verdent.ai/docs/account-billing/model-pricing',
          'https://www.verdent.ai/blog/introducing-eco-mode-byok-and-updated-pricing'
        ],
        mustInclude: [
          '7 天 100 credits',
          'Eco Mode',
          'BYOK',
          'No Markup on Model Costs',
          '76.1% pass@1',
          'provider pricing'
        ],
        forbidden:
          /Free 7天100 credits\/Starter \$19\/月\/Pro \$59\/月\/Max \$179\/月|SWE-bench Verified 76\.1% pass@1|证明其实力/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the agent and creative-tool verification wave', () => {
    const expected = {
      manus: {
        lastVerified: '2026-07-07',
        sources: [
          'https://manus.im/',
          'https://help.manus.im/en/articles/11711111-what-is-the-current-membership-pricing-for-manus',
          'https://manus.im/help/credits',
          'https://manus.im/docs/introduction/plans'
        ],
        mustInclude: [
          'Manus 1.6',
          '$20/month',
          '$40/month',
          '300 credits',
          '4,000 credits per month',
          '8,000 credits per month',
          'Team plan'
        ],
        forbidden:
          /订阅制（具体定价待定）|等待名单近百万|2025 年 12 月|20亿|MIT Technology Review|不建议专业业务使用|年化收入/
      },
      crewai: {
        lastVerified: '2026-07-08',
        sources: [
          'https://crewai.com/pricing',
          'https://docs.crewai.com/',
          'https://github.com/crewAIInc/crewAI',
          'https://crewai.com/open-source'
        ],
        mustInclude: [
          'Basic Free',
          '50 workflow executions/month',
          'Enterprise Custom',
          'Crews',
          'Flows',
          'private infrastructure',
          '63% of the Fortune 500'
        ],
        forbidden: /\$99|6000\/年|不支持按量付费|文档和社区在建设中|免费\(50次\/月\)\/\$99月/
      },
      flux: {
        lastVerified: '2026-07-07',
        sources: [
          'https://bfl.ai/pricing',
          'https://docs.bfl.ai/quick_start/pricing',
          'https://docs.bfl.ai/flux_2/flux2_overview',
          'https://bfl.ai/blog/24-08-01-bfl'
        ],
        mustInclude: [
          'FLUX.2',
          '1 credit = $0.01 USD',
          'from $0.014',
          'up to 4MP',
          'Apache 2.0',
          'FLUX NCL',
          'FLUX MCP'
        ],
        forbidden: /完全免费|堪比 Midjourney|首个真正超越 Midjourney|最佳选择|最流行/
      },
      pika: {
        lastVerified: '2026-07-08',
        sources: ['https://pika.art/pricing', 'https://pika.art/', 'https://pika.art/api'],
        mustInclude: [
          'Pika 2.5',
          'Basic $0',
          'Standard $8',
          'Pro $28',
          'Fancy $76',
          '80 monthly video credits',
          '700',
          '2,300',
          '6,000',
          'Pikascenes',
          'Fal.ai'
        ],
        forbidden:
          /免费版每日有限 credits|已接近 Runway 水平|性价比在视频生成工具中数一数二|免费\/\$8\/\$28\/月|Basic \$8|Standard \$28|Pro \$76/
      },
      jimeng: {
        lastVerified: '2026-07-08',
        sources: [
          'https://jimeng.jianying.com/',
          'https://www.volcengine.com/docs/85621/1544714?lang=zh',
          'https://www.volcengine.com/docs/85621/1544715?lang=zh',
          'https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/dreamina/b966ce40-d931-4397-8def-38fe5d03c729.html'
        ],
        mustInclude: [
          '图片生成4.0',
          '图片生成4.6',
          '视频生成3.0 Pro',
          '积分/会员',
          '以订单结算页价格为准',
          '0.2 元/张',
          '0.22 元/张',
          '1 元/秒',
          '0.63 元/秒',
          '0.28 元/秒'
        ],
        forbidden:
          /¥69月|每日 80-100 积分|中文提示词支持最佳|质量已接近 Midjourney|极为慷慨|12种电影级/
      },
      luma: {
        lastVerified: '2026-07-07',
        sources: [
          'https://lumalabs.ai/pricing',
          'https://lumalabs.ai/llm-info',
          'https://lumalabs.ai/learning-hub/dream-machine-credit-system'
        ],
        mustInclude: [
          '$30/月',
          '$90/月',
          '$300/月',
          'Ray3.2',
          'Ray3.14',
          'Photon',
          'Luma Agents',
          'retired terminology'
        ],
        forbidden:
          /免费\(30代\/月\)|\$29\/\$99\/\$499|Dream Machine 2\.0|与 Sora 相比生成速度更快|免费额度也更友好/
      },
      udio: {
        lastVerified: '2026-07-07',
        sources: [
          'https://www.udio.com/pricing',
          'https://help.udio.com/en/articles/10739134-credits-and-credit-limits',
          'https://help.udio.com/en/articles/10739199-changing-or-canceling-your-subscription',
          'https://help.udio.com/en/articles/13338649-the-subscription-trial'
        ],
        mustInclude: [
          '每日 10 credits',
          '100 credits',
          'Standard',
          '2,400 credits',
          'Pro',
          '6,000 credits',
          '$10/月',
          '$30/月',
          '最长 7 天',
          '没有 Pro trial'
        ],
        forbidden: /免费\(10首\/月\)|最强竞争者|顶级|稍有优势|免费版每月 10 首/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the knowledge and agent platform verification wave', () => {
    const expected = {
      notebooklm: {
        lastVerified: '2026-07-07',
        sources: [
          'https://support.google.com/notebooklm/answer/16269187?hl=en',
          'https://support.google.com/notebooklm/answer/16213268?hl=en',
          'https://support.google.com/googleone/answer/14534406?hl=en'
        ],
        mustInclude: [
          '100 notebooks',
          '50 sources',
          '500,000 words',
          '50 chat queries',
          '3 audio generations',
          'Google AI Pro',
          'Deep Research',
          'Watermark Removal'
        ],
        forbidden: /完全免费|PPT\/视频\/音频生成|9 种输出格式|汇报材料神器|Google 出品，完全免费/
      },
      coze: {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.coze.com/premium',
          'https://www.coze.com/open/docs/guides/subscription',
          'https://www.coze.com/open/docs/guides/message_credits'
        ],
        mustInclude: [
          '10 credits/day',
          '100 credits/day',
          '$19',
          '$39',
          '3-day free trial',
          'message credits',
          'Coze tokens',
          'API/Web SDK'
        ],
        forbidden: /免费额度慷慨|飞书\/微信|深度集成|免费\/订阅|入门门槛极低/
      },
      dify: {
        lastVerified: '2026-07-07',
        sources: [
          'https://dify.ai/pricing',
          'https://docs.dify.ai/en/cloud/use-dify/workspace/subscription-management',
          'https://dify.ai/education'
        ],
        mustInclude: ['Sandbox Free', '200 message credits', '$590', '$1590', 'Community Edition'],
        forbidden: /开源免费|完全开源|完全免费|Docker 一键部署|几乎所有主流 LLM/
      },
      langchain: {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.langchain.com/',
          'https://www.langchain.com/pricing',
          'https://docs.langchain.com/langsmith/faq'
        ],
        mustInclude: [
          'LangSmith',
          '每席位 $0',
          '每席位 $39',
          '每月 5,000 条基础追踪',
          '每月 10,000 条基础追踪',
          '大模型用量另行计费',
          'LangGraph',
          'MIT 许可证',
          '100M+'
        ],
        forbidden: /最流行|生态最完善|首选|API 变化频繁|完全免费/
      },
      perplexity: {
        lastVerified: '2026-07-07',
        sources: [
          'https://www.perplexity.ai/hub',
          'https://www.perplexity.ai/help-center/en/articles/11680686-perplexity-max',
          'https://www.perplexity.ai/help-center/en/articles/10352986-enterprise-pricing-and-billing-frequently-asked-questions'
        ],
        mustInclude: [
          '$20/month',
          '$200/monthly',
          'Enterprise Pro 每月 40 美元',
          'Enterprise Max 每月 325 美元',
          'cited answers',
          'Comet Browser',
          'Brain Research Preview',
          'API 另行计费'
        ],
        forbidden: /免费\/\$20\/月|每天有一定|代码能力一般|搜索引擎的标杆|可信度远高于/
      },
      autogen: {
        lastVerified: '2026-07-08',
        sources: [
          'https://microsoft.github.io/autogen/stable/',
          'https://microsoft.github.io/autogen/stable/user-guide/agentchat-user-guide/migration-guide.html',
          'https://github.com/microsoft/autogen'
        ],
        mustInclude: [
          '维护模式',
          'Python 3.10+',
          'autogen-agentchat',
          'v0.4',
          'Magentic-One',
          'Microsoft Agent Framework',
          '偏向社区维护'
        ],
        forbidden: /企业级可靠性|活跃的开源社区|微软背书|完全免费|Python 限定/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks official-source metadata for the high-risk MCP verification wave', () => {
    const expected = {
      'brave-search-mcp': {
        sources: [
          'https://brave.com/search/api/',
          'https://github.com/brave/brave-search-mcp-server',
          'https://brave.com/search/api/guides/use-with-openclaw/'
        ],
        mustInclude: [
          '$5 in free monthly credits',
          '$5 per 1,000 requests',
          '$4 per 1,000 requests',
          'BRAVE_MCP_TRANSPORT',
          'brave_llm_context'
        ],
        forbidden: /2000次\/月|\$3\/1000次|免费额度充足|基本够用/
      },
      'supabase-mcp': {
        sources: [
          'https://supabase.com/docs/guides/ai-tools/mcp',
          'https://github.com/supabase/mcp'
        ],
        mustInclude: [
          'read_only=true',
          'project_ref',
          'features=database,docs',
          '切勿将 MCP 服务器连接到生产数据',
          'pre-1.0'
        ],
        forbidden: /supabase-community\/supabase-mcp|完全免费|强烈推荐|AI 全栈开发|只读 Token/
      },
      'stripe-mcp': {
        sources: [
          'https://docs.stripe.com/mcp',
          'https://github.com/stripe/ai',
          'https://docs.stripe.com/keys/restricted-api-keys'
        ],
        mustInclude: [
          'https://mcp.stripe.com',
          'OAuth',
          'restricted API keys',
          'sandbox and live mode',
          'human confirmation',
          'stripe_api_write'
        ],
        forbidden:
          /anthropics\/claude-code|Stripe\/Community|完全免费|只用 test mode API Key|避免 AI 自动操作支付/
      },
      'cloudflare-mcp': {
        sources: [
          'https://developers.cloudflare.com/agents/model-context-protocol/cloudflare/servers-for-cloudflare/',
          'https://github.com/cloudflare/mcp',
          'https://github.com/cloudflare/mcp-server-cloudflare'
        ],
        mustInclude: [
          'over 2,500 endpoints',
          'search()',
          'execute()',
          'OAuth',
          'API token',
          'Dynamic Worker sandbox',
          'streamable-http',
          'SSE',
          'deprecated'
        ],
        forbidden: /完全免费|官方出品质量保证|全栈覆盖|效率提升明显|Workers 计费/
      },
      'slack-mcp': {
        sources: [
          'https://docs.slack.dev/ai/slack-mcp-server',
          'https://slack.com/help/articles/48855576908307-Guide-to-Model-Context-Protocol-in-Slack',
          'https://api.slack.com/authentication/oauth-v2'
        ],
        mustInclude: [
          'secure access to your Slack workspace',
          '搜索消息',
          '发送消息',
          '工作区管理员',
          'https://mcp.slack.com/mcp',
          'rate limits',
          'OAuth',
          'scopes',
          '读取指定频道或会话'
        ],
        forbidden: /完全免费|必备|无缝|Bot Token|anthropics\/claude-code/
      },
      'postman-mcp': {
        sources: [
          'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/overview',
          'https://learning.postman.com/docs/reference/postman-api/postman-mcp-server/postman-mcp-remote-server',
          'https://www.postman.com/pricing/'
        ],
        mustInclude: [
          'Minimal',
          'Code',
          'Full',
          '100+',
          'OAuth',
          'DCR',
          'PKCE',
          'EU remote server',
          'API key',
          'https://mcp.postman.com/minimal'
        ],
        forbidden: /完全免费|瑞士军刀|企业级功能|全流程|github.com\/nicobailon/
      },
      'sentry-mcp': {
        sources: [
          'https://mcp.sentry.dev/',
          'https://github.com/getsentry/sentry-mcp',
          'https://docs.sentry.io/product/sentry-mcp/',
          'https://docs.sentry.io/account/auth-tokens/',
          'https://docs.sentry.io/api/auth/'
        ],
        mustInclude: [
          'OAuth',
          'Auth Token',
          'permissions and scopes',
          'production error data',
          'human-in-the-loop coding agents',
          'general-purpose MCP server',
          'PII',
          'project scopes'
        ],
        forbidden: /完全免费|杀手级|极佳|大幅减少|直接定位到出错代码/
      },
      'docker-mcp': {
        sources: [
          'https://docs.docker.com/ai/mcp-catalog-and-toolkit/toolkit/',
          'https://docs.docker.com/ai/mcp-catalog-and-toolkit/mcp-gateway/'
        ],
        mustInclude: [
          'Availability: Beta',
          '300+ verified',
          'profiles',
          '隔离 Docker 容器',
          '限制权限',
          '网络访问',
          '资源使用',
          'logging',
          'call-tracing',
          '1 CPU',
          '2 GB'
        ],
        forbidden: /完全免费|开发环境管理利器|Docker\/Community|anthropics\/claude-code|智能生成/
      }
    }

    Object.entries(expected).forEach(([id, { sources, mustInclude, forbidden }]) => {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe('2026-07-08')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
      mustInclude.forEach((term) => {
        expect(text).toContain(term)
      })
      expect(text).not.toMatch(forbidden)
    })
  })

  it('tracks current metadata for memory, collaboration, and automation platforms', () => {
    const expected = {
      'openmemory-mcp': {
        lastVerified: '2026-07-08',
        sources: [
          'https://mem0.ai/blog/introducing-openmemory-mcp',
          'https://docs.mem0.ai/platform/mem0-mcp',
          'https://github.com/mem0ai/mem0-mcp',
          'https://docs.mem0.ai/integrations/claude-code',
          'https://mem0.ai/pricing'
        ],
        mustInclude: [
          'cloud-hosted MCP server requires no local installation',
          'Mem0 Platform account',
          'API key',
          'self-hostable',
          'user-owned memory',
          'add_memory',
          'delete_memory',
          '9 memory tools',
          'archived',
          'MEM0_API_KEY',
          'memory persistence risk'
        ],
        forbidden: /云端版待定|自托管免费|无缝集成|显著减少|创新性极强|Qdrant/
      },
      'atlassian-mcp': {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.atlassian.com/platform/remote-mcp-server',
          'https://github.com/atlassian/atlassian-mcp-server',
          'https://support.atlassian.com/atlassian-rovo-mcp-server/docs/supported-tools/',
          'https://github.com/sooperset/mcp-atlassian',
          'https://developer.atlassian.com/cloud/jira/platform/rate-limiting/'
        ],
        mustInclude: [
          'Atlassian Rovo MCP Server',
          'Generally Available',
          'OAuth 2.1 or API tokens',
          'existing access controls',
          'Beta tools',
          'Rovo credits',
          'Cloud and Server/Data Center deployments',
          'API rate limits'
        ],
        forbidden:
          /完全免费|企业级团队协作利器|适合生产环境|只读模式保护生产数据|官方 MCP 出现|无缝|效率利器/
      },
      'zapier-ai': {
        lastVerified: '2026-07-08',
        sources: ['https://zapier.com/pricing', 'https://zapier.com/apps'],
        mustInclude: [
          '9,000+ apps',
          '100 tasks per month',
          '$19.99/月',
          'task-based pricing',
          'AI steps, code, and SDK',
          'Zapier MCP Beta',
          'shared task pool',
          'Each successful action'
        ],
        forbidden:
          /7000\+|\$29\.99|8M\+|老牌王者|应用集成数量最多|企业级可靠性和安全性|复杂流程建议用 n8n|AI Actions API/
      },
      make: {
        lastVerified: '2026-07-08',
        sources: ['https://www.make.com/en/pricing', 'https://www.make.com/en/integrations'],
        mustInclude: [
          '1,000 credits/month',
          '$9/mo',
          '$16/mo',
          '$29/mo',
          '3000+ apps',
          '350+ AI apps',
          'Make MCP Server',
          'credits 是计费单位',
          '使用 Make AI Provider 的部分高级功能可能消耗更多'
        ],
        forbidden:
          /\$10\.59|2000\+|性价比高于 Zapier|比 Zapier 更灵活|免费版给 1000 操作\/月比 Zapier 大方|知名度不如 Zapier|操作\/月/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks current metadata for collaboration, deployment, and data MCP platforms', () => {
    const expected = {
      'notion-mcp': {
        sources: [
          'https://developers.notion.com/guides/mcp/overview',
          'https://developers.notion.com/guides/mcp/get-started-with-mcp',
          'https://github.com/makenotion/notion-mcp-server'
        ],
        mustInclude: [
          'hosted server',
          'read and write',
          'access and permissions',
          'standard OAuth',
          'remote MCP',
          'local MCP server repository',
          'not actively monitored'
        ],
        forbidden: /完全免费|21 种工具|无缝衔接|Token 配置简单|推荐 Notion 用户安装|npx 一键启动/
      },
      'figma-mcp': {
        sources: [
          'https://developers.figma.com/docs/figma-mcp-server/',
          'https://developers.figma.com/docs/figma-mcp-server/rate-limits-access/',
          'https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server',
          'https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/'
        ],
        mustInclude: [
          '远程 server 覆盖所有 seat/plan',
          '桌面 server 需要 Dev 或 Full seat',
          'View/Collab 只有最多 6 次/月',
          'Enterprise 最多 600 次/日',
          'https://mcp.figma.com/mcp',
          'write native Figma content'
        ],
        forbidden: /完全免费|零配置|无缝集成|无需本地安装|需要 Figma API Key|付费版获取完整功能/
      },
      'vercel-mcp': {
        sources: [
          'https://vercel.com/docs/agent-resources/vercel-mcp',
          'https://vercel.com/docs/agent-resources/vercel-mcp/tools'
        ],
        mustInclude: [
          'Beta',
          'all plans',
          'https://mcp.vercel.com',
          'OAuth',
          'approved by Vercel',
          'approved clients',
          'public tools',
          'authenticated tools',
          'get_runtime_logs',
          'human confirmation',
          'prompt injection'
        ],
        forbidden: /完全免费|零配置|效率利器|Toolbar 评论|域名管理和 DNS 配置|触发、回滚部署/
      },
      'linear-mcp': {
        sources: ['https://linear.app/docs/mcp', 'https://linear.app/pricing'],
        mustInclude: [
          'https://mcp.linear.app/mcp',
          'OAuth token',
          'API keys',
          'Authorization: Bearer',
          'Free',
          '250 issues',
          '$10 per user/month',
          '$16 per user/month',
          'MCP access',
          'AI credits'
        ],
        forbidden:
          /完全免费|anthropics\/claude-code|Linear\/Community|最受开发者欢迎|避免频繁切换|修 Bug → 更新 Issue/
      },
      'gitlab-mcp': {
        sources: [
          'https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/',
          'https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server_tools/',
          'https://docs.gitlab.com/user/profile/personal_access_tokens/'
        ],
        mustInclude: [
          'OAuth 2.0 Dynamic Client Registration',
          'HTTP transport',
          '/api/v4/mcp',
          'Premium, Ultimate',
          'GitLab.com, Self-Managed and Dedicated',
          'Status: Beta',
          '代表用户执行操作',
          'personal access tokens',
          'Rotate',
          'Revoke'
        ],
        forbidden:
          /完全免费|anthropics\/claude-code|GitLab\/Community|支持自托管实例是相对 GitHub MCP 的独特优势|一应俱全/
      },
      'elasticsearch-mcp': {
        sources: [
          'https://www.elastic.co/docs/explore-analyze/ai-features',
          'https://www.elastic.co/docs/explore-analyze/ai-features/agent-builder/mcp-server',
          'https://github.com/elastic/mcp-server-elasticsearch'
        ],
        mustInclude: [
          '两种 MCP 服务器方案',
          'Agent Builder MCP server',
          'Elasticsearch 9.2 及以上版本',
          'Serverless projects',
          'KIBANA_URL',
          'API_KEY',
          'API 密钥被授予的权限',
          '最小权限原则',
          '较早 Elasticsearch 版本'
        ],
        forbidden:
          /完全免费|Elastic\/Community|anthropics\/claude-code|自然语言转 ES 查询|不用记 DSL|非常实用|聚合查询结果可视化/
      }
    }

    Object.entries(expected).forEach(([id, { sources, mustInclude, forbidden }]) => {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool?.verificationStatus).toBe('verified')
      expect(tool?.lastVerified).toBe(id === 'figma-mcp' ? '2026-07-13' : '2026-07-08')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
      mustInclude.forEach((term) => {
        expect(text).toContain(term)
      })
      expect(text).not.toMatch(forbidden)
    })
  })

  it('tracks current metadata for multimodal creator tools with pricing and credit risks', () => {
    const expected = {
      'meitu-ai': {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.meituxiuxiu.com',
          'https://pc.meitu.com/en/pc',
          'https://pro.meitu.com/xiuxiu/agreements/global-terms-of-service.html?lang=en'
        ],
        mustInclude: [
          'AI 消除',
          'AI 抠图',
          '照片扩展',
          '美图 VIP',
          '美图 VIP+',
          '美图 PC VIP',
          'AI Agent VIP',
          '订阅权益'
        ],
        forbidden:
          /免费版功能已经很够用|VIP 价格也很亲民|完全不需要设计基础|电商、社交媒体运营|非开发者工具/
      },
      jianying: {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.capcut.com/help/how-much-does-capcut-pro-cost',
          'https://www.capcut.com/help/pricing-change',
          'https://www.capcut.com/help/capcut-teams-price'
        ],
        mustInclude: [
          '价格会因地区变化',
          '月付和年付订阅',
          'AI points 从 550 提升到 1200',
          '云存储从 100GB 提升到 1TB',
          'Standard Plan',
          'CapCut Online'
        ],
        forbidden:
          /免费版功能强大|与抖音深度集成|国内短视频创作者的标配|智能字幕识别准确率极高|免费版功能已非常强大/
      },
      hailuo: {
        lastVerified: '2026-07-07',
        sources: [
          'https://hailuoai.video/',
          'https://hailuoai.video/doc/payment-policy.html',
          'https://www.minimax.io/news/minimax-hailuo-23',
          'https://platform.minimax.io/docs/pricing/overview',
          'https://platform.minimax.io/docs/guides/pricing-paygo'
        ],
        mustInclude: [
          'Hailuo 2.3',
          '网站、移动 app 和 Open Platform API',
          'Standard $14.99/1,000 credits',
          'Pro $54.99/4,500',
          'Max $199.99/20,000',
          'Media Agent',
          'Membership Credits',
          'Purchased Credits',
          'Bonus credits',
          '$1 可购买 70 credits',
          'MiniMax-Hailuo-2.3-Fast',
          '768P、6 秒视频 $0.19',
          '768P、6 秒视频 $0.28'
        ],
        forbidden:
          /免费\(每日额度\)|每日免费额度|免费使用是最大亮点|国际知名度较低|人物动态表现自然/
      },
      ideogram: {
        lastVerified: '2026-07-07',
        sources: [
          'https://ideogram.ai/',
          'https://docs.ideogram.ai/plans-and-pricing/available-plans',
          'https://docs.ideogram.ai/plans-and-pricing/ideogram-api',
          'https://docs.ideogram.ai/frequently-asked-questions',
          'https://ideogram.ai/api-pricing/',
          'https://developer.ideogram.ai/'
        ],
        mustInclude: [
          'Ideogram 4.0',
          'Free Plan',
          'Plus Plan',
          'Pro Plan',
          'Team Plan',
          'Free 每周 10 积分',
          'Plus 每月 20 美元',
          'Pro 每月 60 美元',
          'Priority credits',
          'Basic 计划已被描述为 legacy',
          'API 4.0 Turbo 每张图 0.03 美元起',
          'Default $0.06/image',
          'Generate w/ Gemini',
          'MCP',
          '自动充值',
          '不限制用户对输出内容的权利'
        ],
        forbidden:
          /\$8\/\$20\/月|Ideogram 2\.0\/3\.0|免费版每日有限生成|每天可生成约 10 张图|\$8\/月专业版性价比高|文字渲染能力业界最强/
      },
      meshy: {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.meshy.ai/pricing',
          'https://docs.meshy.ai/en/api/pricing',
          'https://www.meshy.ai/features/text-to-3d'
        ],
        mustInclude: [
          '$0',
          '$20/月',
          '$60/月',
          '每月 100 credits',
          'CC BY 4.0',
          '每月 1,000 credits',
          '每月重置且不累积',
          'Text to 3D（Preview）',
          'Image to 3D',
          'Meshy-6',
          '20 credits',
          '30 credits',
          'Retexture 10',
          'Auto-Rigging 5',
          'Animation 3 credits'
        ],
        forbidden: /免费\/订阅|有免费额度|Meshy-4|专业版 \$20\/月性价比不错|免费版每月有生成额度/
      },
      hunyuan3d: {
        lastVerified: '2026-07-08',
        sources: [
          'https://www.tencent.com/en-us/articles/2202235.html',
          'https://cloud.tencent.com/document/product/1804/123461',
          'https://github.com/Tencent-Hunyuan/Hunyuan3D-2',
          'https://huggingface.co/tencent/Hunyuan3D-2'
        ],
        mustInclude: [
          '腾讯云混元生3D API',
          '100 积分',
          '1,000 积分 100 元',
          '0.12 元/积分',
          '20 积分/次',
          '25',
          '15 积分/次',
          'Hunyuan 3D 3.0',
          'Hunyuan3D 2.0',
          'Hunyuan3D-2.1 Series',
          'text-to-3D',
          'image-to-3D',
          'Sketch-to-3D',
          'OBJ 和 GLB',
          '6GB',
          '16GB'
        ],
        forbidden:
          /免费\/低价|有免费额度|中文提示词理解最佳|腾讯生态集成潜力大|导出格式有限|每日 20 次免费生成和 200 免费 credits|消费端每日 20 次免费生成并提供 200 免费 credits/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks current metadata for agent frameworks, MCP utilities, and Gemini image generation', () => {
    const expected = {
      autogpt: {
        lastVerified: '2026-07-08',
        sources: [
          'https://agpt.co/pricing/',
          'https://agpt.co/docs/platform',
          'https://github.com/Significant-Gravitas/AutoGPT/blob/master/LICENSE'
        ],
        mustInclude: [
          'Pro',
          '$42.50/月',
          'Max',
          '$272.00/月',
          '8.5x usage',
          'pay-as-you-go',
          'Self-Host 开源',
          '可视化 Agent Builder',
          'AutoPilot Chat',
          'MCP Tool Support',
          'Polyform Shield License',
          'MIT License'
        ],
        forbidden: /完全免费|开源免费|自主任务分解和执行能力|概念验证|稳定性一般|复杂任务易失控/
      },
      nanobanana: {
        lastVerified: '2026-07-07',
        sources: [
          'https://gemini.google/overview/image-generation/',
          'https://ai.google.dev/gemini-api/docs/image-generation',
          'https://blog.google/innovation-and-ai/products/nano-banana-pro/'
        ],
        mustInclude: [
          'Nano Banana 2',
          'Gemini 3.1 Flash Image',
          'Nano Banana Pro',
          'Gemini 3 Pro Image',
          'gemini-3.1-flash-image',
          'gemini-3-pro-image',
          'gemini-2.5-flash-image',
          'legacy',
          'Nano Banana 2 Lite',
          'SynthID',
          '可见水印',
          'Create images'
        ],
        forbidden:
          /图表生成|https:\/\/nanobanana\.google|完全免费|无需注册|架构图|流程图|ER 图|技术文档配图/
      },
      'sequential-thinking-mcp': {
        lastVerified: '2026-07-08',
        sources: [
          'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking',
          'https://www.npmjs.com/package/@modelcontextprotocol/server-sequential-thinking',
          'https://modelcontextprotocol.io/examples'
        ],
        mustInclude: [
          'sequential_thinking',
          '@modelcontextprotocol/server-sequential-thinking',
          'npx -y',
          'Docker',
          'nextThoughtNeeded',
          'isRevision',
          'branchFromThought',
          'host 会多次调用该工具',
          'MIT License'
        ],
        forbidden:
          /Anthropic \(MCP 官方\)|思维链构建透明可观测|显著提升|杀鸡用牛刀|Claude Code 内置深度思考能力|完全免费/
      },
      'antv-chart-mcp': {
        lastVerified: '2026-07-08',
        sources: [
          'https://github.com/antvis/mcp-server-chart',
          'https://www.npmjs.com/package/@antv/mcp-server-chart',
          'https://github.com/antvis/chart-visualization-skills'
        ],
        mustInclude: [
          '@antv/mcp-server-chart',
          '25+ 图表类型',
          'generate_word_cloud_chart',
          'generate_spreadsheet',
          'Dify',
          'AMap 服务',
          '只支持中国范围地图生成',
          'chart-visualization'
        ],
        forbidden:
          /完全免费|无需LLM|质量有保障|输出格式美观|SDK 支持程序化调用|图表交互性有限|国际化文档较少/
      },
      'camel-ai': {
        lastVerified: '2026-07-08',
        sources: [
          'https://github.com/camel-ai/camel',
          'https://docs.camel-ai.org/',
          'https://pypi.org/project/camel-ai/'
        ],
        mustInclude: [
          'pip install camel-ai',
          'ChatAgent',
          'Agent Societies',
          'Data Generation',
          'Tools',
          'Memory',
          'Human-in-the-Loop',
          'Apache 2.0',
          'v0.2.90'
        ],
        forbidden:
          /首个 LLM 多 Agent 框架|学术界广泛引用|生产部署经验有限|文档不够工程化|工程化程度不如|完全免费/
      },
      agentscope: {
        lastVerified: '2026-07-08',
        sources: [
          'https://github.com/agentscope-ai/agentscope',
          'https://docs.agentscope.io/',
          'https://pypi.org/project/agentscope/'
        ],
        mustInclude: [
          'AgentScope 2.0',
          'Python 3.11 或更高版本',
          'uv pip install agentscope',
          'Event System',
          'Permission System',
          'Multi-tenancy & Multi-session Service',
          'Workspace / Sandbox Support',
          'Apache License 2.0',
          'v2.0.4',
          'Agent Team',
          'long-term memory'
        ],
        forbidden:
          /微软亚研院出品|质量有保障|中文文档完善|国产 Agent 框架的领先者|国际知名度不如 LangChain|完全免费/
      }
    }

    Object.entries(expected).forEach(
      ([id, { lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe('verified')
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks public-source metadata for security skill entries with runtime caveats', () => {
    const expected = {
      'semgrep-skill': {
        status: 'verified',
        sources: [
          'https://github.com/semgrep/skills',
          'https://github.com/semgrep/skills/blob/main/skills/semgrep/SKILL.md',
          'https://semgrep.dev/pricing/',
          'https://docs.semgrep.dev/for-developers/cli',
          'https://docs.semgrep.dev/semgrep-pro-vs-oss',
          'https://docs.semgrep.dev/semgrep-code/semgrep-pro-engine-intro',
          'https://docs.semgrep.dev/licensing'
        ],
        mustInclude: [
          'semgrep/skills',
          '需要单独安装',
          '需要 Semgrep CLI',
          'Semgrep Community Edition',
          'Semgrep Code',
          '轻量 SAST',
          'LGPL 2.1',
          '人工复核'
        ],
        forbidden:
          /Claude Code 内置|预装|完整 Semgrep 静态分析扫描|自动检测项目语言并选择规则集|并行 Worker|极其有价值|锦上添花|完全免费/
      },
      'differential-review-skill': {
        status: 'verified',
        sources: [
          'https://github.com/trailofbits/skills/tree/main/plugins/differential-review',
          'https://github.com/trailofbits/skills/blob/main/plugins/differential-review/skills/differential-review/SKILL.md',
          'https://code.claude.com/docs/en/code-review',
          'https://github.com/anthropics/claude-code-security-review'
        ],
        mustInclude: [
          'Trail of Bits',
          '需要单独安装',
          '需要 Git 仓库',
          'PR、commit 或 diff',
          'blast radius',
          'test coverage',
          '不会批准或阻止 PR',
          '缺少提示注入防护证据',
          '人工复核'
        ],
        forbidden:
          /安全审计利器|自动计算变更爆炸半径|检测安全回归|测试覆盖率分析|完整 Markdown 审查报告|能发现普通 Code Review 容易遗漏|完全免费/
      }
    }

    Object.entries(expected).forEach(([id, { status, sources, mustInclude, forbidden }]) => {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool?.verificationStatus).toBe(status)
      expect(tool?.lastVerified).toBe('2026-07-08')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
      mustInclude.forEach((term) => {
        expect(text).toContain(term)
      })
      expect(text).not.toMatch(forbidden)
    })
  })

  it('tracks source boundaries for community skill catalog entries', () => {
    const expected = {
      'frontend-design-skill': {
        status: 'verified',
        lastVerified: '2026-07-07',
        sources: ['本地 skill: build-web-apps:frontend-app-builder'],
        mustInclude: [
          'frontend-app-builder',
          'redesign/restyle/modernization',
          'Browser/IAB',
          '真实浏览器',
          '页面现代化'
        ],
        forbidden:
          /Claude Code 内置|完全免费|67 种风格|96 种调色板|57 种字体|25 种图表类型|shadcn\/ui MCP 集成/
      },
      'webapp-testing-skill': {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: ['本地 skill: build-web-apps:frontend-testing-debugging'],
        mustInclude: [
          'frontend-testing-debugging',
          'Browser plugin',
          'Playwright 降级验证',
          'DOM 快照',
          '控制台健康检查',
          '交互证明'
        ],
        forbidden:
          /Claude Code 内置|完全免费|Playwright\/Cypress 集成|测试覆盖率分析|属性测试|快照测试/
      },
      'mcp-builder-skill': {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: [
          '本地 skill: cloudflare:building-mcp-server-on-cloudflare',
          'https://modelcontextprotocol.io/docs/learn/architecture',
          'https://modelcontextprotocol.io/specification/2025-06-18/server/tools'
        ],
        mustInclude: [
          'building-mcp-server-on-cloudflare',
          'Cloudflare Workers',
          'remote MCP servers',
          'MCP architecture',
          'tools expose executable functions'
        ],
        forbidden:
          /Claude Code 内置|完全免费|完整的 MCP 协议支持|TypeScript\/Python 双语言支持|文档自动生成/
      },
      'skill-creator-skill': {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: ['本地 skill: skill-creator'],
        mustInclude: [
          'skill-creator',
          'SKILL.md',
          'scripts/init_skill.py',
          'scripts/quick_validate.py',
          'agents/openai.yaml',
          'progressive disclosure'
        ],
        forbidden: /Claude Code 内置|完全免费|领域专家设计原则|提示词工程最佳实践|技能发布流程指导/
      },
      'insecure-defaults-skill': {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: [
          'https://trailofbits.com/skills/insecure-defaults/',
          '邻近本地 skill: security-best-practices'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'fail-open',
          'hardcoded secrets',
          'weak auth',
          'security-best-practices',
          '人工复核'
        ],
        forbidden: /Claude Code 内置|本机|完全免费|未找到可公开核验|不建议继续作为独立 active Skill/
      },
      'sharp-edges-skill': {
        status: 'verified',
        lastVerified: '2026-07-08',
        sources: [
          'https://trailofbits.com/skills/sharp-edges/',
          '邻近本地 skill: security-best-practices'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'footgun',
          'misuse resistance',
          'API design',
          '人工复核'
        ],
        forbidden: /Claude Code 内置|本机|完全免费|未找到可公开核验|不建议继续作为独立 active Skill/
      }
    }

    Object.entries(expected).forEach(
      ([id, { status, lastVerified = '2026-07-08', sources, mustInclude, forbidden }]) => {
        const tool = aiToolsData.find((item) => item.id === id)
        const text = JSON.stringify(tool)

        expect(tool?.verificationStatus).toBe(status)
        expect(tool?.lastVerified).toBe(lastVerified)
        expect(tool?.decisionSummary?.verdict).toBeTruthy()
        expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
        sources.forEach((source) => {
          expect(tool?.sources).toContain(source)
        })
        mustInclude.forEach((term) => {
          expect(text).toContain(term)
        })
        expect(text).not.toMatch(forbidden)
      }
    )
  })

  it('tracks source boundaries for remaining skill catalog entries', () => {
    const expected = {
      'second-opinion-skill': {
        status: 'verified',
        sources: [
          'https://trailofbits.com/skills/second-opinion/',
          '邻近本地 skill: superpowers:requesting-code-review',
          '邻近本地 skill: superpowers:receiving-code-review'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'Codex CLI',
          'Gemini CLI',
          '--yolo',
          'codex exec'
        ],
        forbidden: /完全免费|本机|公开来源不足|没有同名 Skill|不建议继续作为独立 active Skill/
      },
      'audit-context-building-skill': {
        status: 'verified',
        sources: [
          'https://trailofbits.com/skills/audit-context-building/',
          '邻近本地 skill: security-threat-model',
          '邻近本地 skill: security-best-practices'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'line-by-line',
          'deep architectural context',
          '不负责直接给漏洞结论'
        ],
        forbidden: /完全免费|Claude Code 内置|本机|公开来源不足|未找到可公开核验/
      },
      'git-cleanup-skill': {
        status: 'verified',
        sources: [
          'https://trailofbits.com/skills/git-cleanup/',
          '邻近本地 skill: superpowers:using-git-worktrees'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'local branches and worktrees',
          'two confirmation gates',
          'local cleanup only'
        ],
        forbidden: /完全免费|Claude Code 内置|本机|公开来源不足|未找到可公开核验/
      },
      'ask-questions-skill': {
        status: 'verified',
        sources: [
          'https://trailofbits.com/skills/ask-questions-if-underspecified/',
          '邻近本地 skill: superpowers:brainstorming',
          '邻近本地 skill: product-design:get-context'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'minimum set of clarifying questions',
          'must-have questions',
          'brainstorming',
          'get-context'
        ],
        forbidden: /完全免费|Claude Code 内置|本机|公开来源不足/
      },
      'property-based-testing-skill': {
        status: 'verified',
        sources: [
          'https://trailofbits.com/skills/property-based-testing/',
          '邻近本地 skill: superpowers:test-driven-development',
          '邻近本地 skill: superpowers:systematic-debugging'
        ],
        mustInclude: [
          '公开上游已验证',
          '需单独安装',
          'Hypothesis',
          'fast-check',
          'proptest',
          'Echidna',
          'roundtrip property'
        ],
        forbidden: /完全免费|Claude Code 内置|本机|公开来源不足|未找到可公开核验/
      },
      'supabase-skill': {
        status: 'verified',
        sources: [
          '本地 skill: supabase',
          '本地 skill: build-web-apps:supabase-postgres-best-practices',
          'https://supabase.com/docs'
        ],
        mustInclude: [
          'Supabase changes frequently',
          'verify against changelog',
          'RLS',
          'Supabase CLI',
          'MCP server',
          'Postgres performance'
        ],
        forbidden: /完全免费|Claude Code 内置|Supabase 全栈开发专家|高级功能需 Supabase Pro/
      },
      'supabase-realtime-skill': {
        status: 'historical',
        sources: [
          '公开来源不足：未发现同名 supabase-realtime skill（检查于 2026-07-08）',
          '邻近本地 skill: supabase'
        ],
        mustInclude: [
          '历史别名',
          '未找到可公开核验的同名 supabase-realtime Skill',
          'Supabase Skill 将 Realtime',
          '身份认证',
          'RLS',
          'MCP 服务'
        ],
        forbidden:
          /完全免费|Claude Code 内置|postgres_changes 到 broadcast 迁移指南|可扩展模式设计|实时功能专精/
      },
      'ui-ux-pro-max-skill': {
        status: 'deprecated',
        sources: [
          '公开来源不足：未发现同名 ui-ux-pro-max skill（检查于 2026-07-08）',
          '邻近本地 skill: build-web-apps:frontend-app-builder',
          '邻近本地 skill: product-design:ideate'
        ],
        mustInclude: [
          '公开来源不足',
          '未找到可公开核验的同名 ui-ux-pro-max Skill',
          '历史概念',
          'frontend-app-builder',
          'ideate'
        ],
        forbidden:
          /完全免费|Claude Code 内置|67 种设计风格|96 种调色板|57 种字体配对|13 种技术栈覆盖|shadcn\/ui MCP 深度集成/
      },
      'week-report-skill': {
        status: 'deprecated',
        sources: ['公开来源不足：未发现同名 week-report-generator skill（检查于 2026-07-08）'],
        mustInclude: [
          '公开来源不足',
          '未找到可公开核验的同名 week-report-generator Skill',
          '历史概念',
          '具体内部数据源'
        ],
        forbidden: /完全免费|Claude Code 内置|BigEyes 平台集成|自动化企业周报生成|中文优化到位/
      },
      'think-harder-skill': {
        status: 'deprecated',
        sources: [
          '公开来源不足：未发现同名 think-harder skill（检查于 2026-07-08）',
          '邻近本地 skill: superpowers:brainstorming',
          '邻近本地 skill: superpowers:systematic-debugging'
        ],
        mustInclude: [
          '公开来源不足',
          '未找到可公开核验的同名 think-harder Skill',
          '历史概念',
          'brainstorming',
          'systematic-debugging'
        ],
        forbidden: /完全免费|Claude Code 内置|增强分析推理能力|多角度思考复杂问题|模型自身推理增强/
      },
      'research-skill': {
        status: 'verified',
        sources: ['本地 skill: product-design:research', '本地 skill: anycap-deepresearch'],
        mustInclude: [
          '基于来源的 UX 研究',
          '体验摩擦',
          'AnyCap Deep Research',
          '多来源研究',
          '引用',
          '区分观察证据与推断'
        ],
        forbidden:
          /完全免费|Claude Code 内置|并行 Subagent 深度研究|自动引用来源|比手动搜索效率高出数倍/
      }
    }

    Object.entries(expected).forEach(([id, { status, sources, mustInclude, forbidden }]) => {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool?.verificationStatus).toBe(status)
      expect(tool?.lastVerified).toBe('2026-07-08')
      expect(tool?.decisionSummary?.verdict).toBeTruthy()
      expect(tool?.decisionSummary?.mainRisk).toBeTruthy()
      sources.forEach((source) => {
        expect(tool?.sources).toContain(source)
      })
      mustInclude.forEach((term) => {
        expect(text).toContain(term)
      })
      expect(text).not.toMatch(forbidden)
    })
  })

  it('requires metadata on every LLM entry', () => {
    const llmTools = aiToolsData.filter((tool) => tool.category === 'llm')

    llmTools.forEach((tool) => {
      expect(tool.verificationStatus, `${tool.id} verificationStatus`).toBeTruthy()
      expect(tool.lastVerified, `${tool.id} lastVerified`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(tool.sources?.length, `${tool.id} sources`).toBeGreaterThan(0)
    })
  })

  it('keeps source-pending audit tokens out of user-facing copy', () => {
    const internalAuditPhrases = [
      /\bsource pending\b/i,
      /\bnot the same as\b/i,
      /\bserver-specific implementation still needs review\b/i,
      /\bnot a verified multi-model CLI bridge\b/i,
      /\bnot a standalone audit Skill\b/i,
      /\bnot a standalone clarification Skill\b/i,
      /\bnot an installed fuzzing Skill\b/i,
      /\bmanual triage\b/i,
      /\bhuman review\b/i,
      /\bdoes not approve or block\b/i,
      /\bnot hardened against prompt injection attacks\b/i,
      /\bBrowser plugin first\b/i,
      /\bPlaywright fallback\b/i,
      /\bDOM snapshot\b/i,
      /\bconsole health\b/i,
      /\binteraction proof\b/i,
      /\brequires Semgrep CLI\b/i,
      /\bcross-file analysis runs on full scans\b/i,
      /\bGit repository required\b/i,
      /\bdiff-only review limitation\b/i,
      /来源待补/,
      /本机/,
      /随本地[^，。；]*环境/,
      /本地强相关/,
      /精确本地来源/,
      /真实本地前端/,
      /本地来源：/,
      /未在本机找到精确同名/,
      /未找到精确同名/,
      /未发现精确同名/,
      /弃用概念/,
      /人工分诊/,
      /未针对提示注入攻击加固/
    ]

    aiToolsData.forEach((tool) => {
      const { sources: _sources, ...visibleMetadata } = tool
      const visibleText = JSON.stringify(visibleMetadata)

      expect(visibleText, tool.id).not.toMatch(/\bno exact local [^"'，。]+ skill found\b/i)
      internalAuditPhrases.forEach((phrase) => {
        expect(visibleText, tool.id).not.toMatch(phrase)
      })
    })
  })

  it('keeps private local paths and audit tokens out of bundled sources', () => {
    const forbiddenSourceTokens = [
      /local-skill:/i,
      /source-pending:/i,
      /C:[\\/]/i,
      /C:\\/i,
      /\.codex/i,
      /(^|[\\/])\.agents([\\/]|$)/i,
      /Users[\\/]PC/i
    ]

    aiToolsData.forEach((tool) => {
      tool.sources.forEach((source) => {
        forbiddenSourceTokens.forEach((token) => {
          expect(source, `${tool.id} source`).not.toMatch(token)
        })
      })
    })
  })

  it('makes verification metadata explicit on every catalog entry', () => {
    const validStatuses = ['verified', 'needs-review', 'historical', 'deprecated']

    aiToolsData.forEach((tool) => {
      expect(validStatuses, `${tool.id} verificationStatus`).toContain(tool.verificationStatus)
      expect(tool, `${tool.id} has lastVerified field`).toHaveProperty('lastVerified')
      expect(Array.isArray(tool.sources), `${tool.id} sources array`).toBe(true)
      expect(tool.decisionSummary?.verdict, `${tool.id} decision verdict`).toBeTruthy()
      expect(tool.decisionSummary?.mainRisk, `${tool.id} decision mainRisk`).toBeTruthy()

      if (['verified', 'needs-review'].includes(tool.verificationStatus)) {
        expect(tool.lastVerified, `${tool.id} lastVerified`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
        expect(tool.sources.length, `${tool.id} verification sources`).toBeGreaterThan(0)
      }
    })
  })
})
