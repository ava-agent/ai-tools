import { describe, expect, it } from 'vitest'
import { aiToolsData } from '../tools'
import { TOOL_CATALOG_SIZE } from '../catalogMeta'
import { LANDING_CATEGORY_SUMMARY, LANDING_STATS, LANDING_TOOL_NAMES } from '../landingCatalog'
import { matcherCatalog } from '../generated/matcherCatalog'
import { comparisonCatalog } from '../generated/comparisonCatalog'
import { pricingCatalog } from '../generated/pricingCatalog'
import { interactiveCatalog } from '../generated/interactiveCatalog'
import { battleCatalog } from '../generated/battleCatalog'
import { homeCatalog, loadHomeSearchIndex } from '../generated/homeCatalog'
import { createHomeCatalogEntry, getToolSearchText } from '../../utils/catalogFilters'
import {
  loadToolDetail,
  toolDetailCatalog,
  toolDetailIds
} from '../generated/toolDetails'
import { decisionTrees, getDecisionTree } from '../decisions'
import { categories, recommendedCombos } from '../categories'
import { scenarioGuide } from '../decisions'
import { recommendations } from '../recommendations'
import { resources } from '../resources'
import { funFacts } from '../funFacts'

describe('content freshness safeguards', () => {
  it('keeps the lightweight catalog count aligned with the current data set', () => {
    expect(TOOL_CATALOG_SIZE).toBe(aiToolsData.length)
  })

  it('keeps the generated matcher catalog aligned with the full data source', () => {
    expect(matcherCatalog).toEqual(
      aiToolsData.map((tool) => ({
        id: tool.id,
        name: tool.name,
        verificationStatus: tool.verificationStatus,
        lastVerified: tool.lastVerified,
        sources: tool.sources
      }))
    )
  })

  it('keeps the generated home decision index aligned with the full data source', () => {
    expect(homeCatalog).toEqual(aiToolsData.map(createHomeCatalogEntry))
    homeCatalog.forEach((tool) => {
      expect(tool).not.toHaveProperty('pros')
      expect(tool).not.toHaveProperty('cons')
      expect(tool).not.toHaveProperty('models')
      expect(tool).not.toHaveProperty('sources')
    })
  })

  it('keeps the deferred home search index aligned with full searchable content', async () => {
    const searchIndex = await loadHomeSearchIndex()
    expect(searchIndex).toEqual(
      Object.fromEntries(aiToolsData.map((tool) => [tool.id, getToolSearchText(tool)]))
    )
  })

  it('keeps the generated comparison catalog aligned with displayed comparison fields', () => {
    expect(comparisonCatalog).toEqual(
      aiToolsData.map((tool) => ({
        id: tool.id,
        name: tool.name,
        category: tool.category,
        developer: tool.developer,
        versions: tool.versions?.length ? [{
          pricing: tool.versions[0]?.pricing,
          models: tool.versions[0]?.models
        }] : [],
        personalExperience: { rating: tool.personalExperience?.rating || 0 },
        tags: (tool.tags || []).slice(0, 2)
      }))
    )
    comparisonCatalog.forEach((tool) => {
      expect(tool).not.toHaveProperty('freeQuota')
      expect(tool).not.toHaveProperty('pros')
      expect(tool).not.toHaveProperty('cons')
      expect(tool).not.toHaveProperty('bestFor')
    })
  })

  it('keeps the generated pricing catalog aligned with displayed pricing fields', () => {
    expect(pricingCatalog).toEqual(
      aiToolsData.map((tool) => ({
        id: tool.id,
        name: tool.name,
        category: tool.category,
        verificationStatus: tool.verificationStatus,
        versions: (tool.versions || []).map((version) => ({ pricing: version.pricing })),
        freeQuota: tool.freeQuota,
        personalExperience: { rating: tool.personalExperience?.rating || 0 }
      }))
    )
  })

  it('keeps the generated interactive catalog aligned with quiz and battle fields', () => {
    expect(interactiveCatalog).toEqual(
      aiToolsData.map((tool) => ({
        id: tool.id,
        name: tool.name,
        developer: tool.developer,
        category: tool.category,
        tags: tool.tags,
        freeQuota: tool.freeQuota,
        contextWindow: tool.contextWindow,
        bestFor: tool.bestFor,
        pros: tool.pros,
        cons: tool.cons,
        personalExperience: { rating: tool.personalExperience?.rating || 0 }
      }))
    )
  })

  it('keeps the generated battle catalog aligned with visible matchup fields', () => {
    expect(battleCatalog).toEqual(
      aiToolsData.map((tool) => ({
        id: tool.id,
        name: tool.name,
        developer: tool.developer,
        bestFor: tool.bestFor,
        pros: (tool.pros || []).slice(0, 2),
        personalExperience: { rating: tool.personalExperience?.rating || 0 }
      }))
    )
  })

  it('keeps every generated detail module aligned with the full data source', async () => {
    expect(toolDetailIds).toEqual(aiToolsData.map((tool) => tool.id))
    expect(toolDetailCatalog).toEqual(
      aiToolsData.map((tool) => ({
        id: tool.id,
        name: tool.name,
        category: tool.category,
        subcategory: tool.subcategory,
        developer: tool.developer,
        tags: tool.tags,
        personalExperience: { rating: tool.personalExperience?.rating || 0 }
      }))
    )

    const generatedDetails = await Promise.all(toolDetailIds.map((id) => loadToolDetail(id)))
    expect(generatedDetails).toEqual(aiToolsData)
  })

  it('keeps the lightweight landing summary aligned with the full catalog', () => {
    const insightCount = aiToolsData.reduce(
      (sum, tool) =>
        sum +
        (tool.personalExperience?.insights ? 1 : 0) +
        (tool.personalExperience?.pitfalls?.length || 0) +
        (tool.pros?.length || 0) +
        (tool.cons?.length || 0),
      0,
    )

    expect(LANDING_STATS).toEqual({
      tools: aiToolsData.length,
      categories: categories.length,
      insights: insightCount,
    })

    for (const category of categories) {
      const categoryTools = aiToolsData.filter((tool) => tool.category === category.id)
      const expectedFeaturedIds = categoryTools
        .filter((tool) => tool.verificationStatus === 'verified')
        .sort(
          (a, b) =>
            (b.personalExperience?.rating || 0) - (a.personalExperience?.rating || 0) ||
            a.name.localeCompare(b.name, 'zh-CN'),
        )
        .slice(0, 6)
        .map((tool) => tool.id)
      const summary = LANDING_CATEGORY_SUMMARY[category.id]

      expect(summary.total, category.id).toBe(categoryTools.length)
      expect(summary.featured.map((tool) => tool.id), category.id).toEqual(expectedFeaturedIds)
      summary.featured.forEach((item) => {
        const catalogTool = aiToolsData.find((tool) => tool.id === item.id)
        expect(item.name, item.id).toBe(catalogTool.name)
        expect(item.rating, item.id).toBe(catalogTool.personalExperience?.rating || 0)
        expect(item.bestFor, item.id).toBeTruthy()
      })
    }

    recommendations.flatMap((item) => item.tools).forEach((toolId) => {
      expect(LANDING_TOOL_NAMES[toolId], toolId).toBe(
        aiToolsData.find((tool) => tool.id === toolId)?.name,
      )
    })
  })

  it('keeps the DeepSeek record aligned with official V4 Flash/Pro API docs', () => {
    const deepseek = aiToolsData.find((tool) => tool.id === 'deepseek')
    const text = JSON.stringify(deepseek)

    expect(deepseek).toBeTruthy()
    expect(text).toContain('DeepSeek-V4-Flash')
    expect(text).toContain('DeepSeek-V4-Pro')
    expect(text).toContain('deepseek-v4-flash')
    expect(text).toContain('deepseek-v4-pro')
    expect(text).toContain('1M')
    expect(text).toContain('384K')
    expect(text).toContain('2026-07-24')
    expect(text).toContain('官方预告')
    expect(text).toContain('兼容别名')
    expect(text).toContain('$0.14')
    expect(text).toContain('$0.435')
    expect(text).toContain('$0.28')
    expect(text).toContain('$0.87')
    expect(text).not.toMatch(/DeepSeek-V4\.1|V4\.1|Terminus|DeepSeek-V3|128K/)
    expect(deepseek.sources).toEqual(
      expect.arrayContaining([
        'https://api-docs.deepseek.com/quick_start/pricing',
        'https://api-docs.deepseek.com/news/news260424',
        'https://api-docs.deepseek.com/updates'
      ])
    )
    expect(deepseek.lastVerified).toBe('2026-07-13')
    expect(deepseek.decisionSummary.mainRisk).toMatch(/官方预告|2026-07-24|兼容别名|下线/)
    expect(deepseek.decisionSummary.mainRisk).not.toContain('退役')
  })

  it('keeps Qoder pricing grounded in the official credits plan table', () => {
    const qoder = aiToolsData.find((tool) => tool.id === 'qoder')
    const text = JSON.stringify(qoder)

    expect(qoder).toBeTruthy()
    expect(text).toContain('Community Free')
    expect(text).toContain('Pro $20')
    expect(text).toContain('Pro+ $60')
    expect(text).toContain('Ultra $200')
    expect(text).toContain('20,000 monthly credits')
    expect(text).toContain('$0.02/credit')
    expect(text).toContain('300 credits')
    expect(qoder.lastVerified).toBe('2026-07-13')
    expect(qoder.sources).toEqual(
      expect.arrayContaining([
        'https://docs.qoder.com/account/pricing',
        'https://docs.qoder.com/Credits'
      ])
    )
    expect(qoder.decisionSummary.mainRisk).toMatch(/credits|降级|真实成本/)
  })

  it('flags the Sora 2 Videos API deprecation window', () => {
    const sora = aiToolsData.find((tool) => tool.id === 'sora')
    const text = JSON.stringify(sora)

    expect(sora).toBeTruthy()
    expect(text).toContain('deprecated')
    expect(text).toContain('2026-09-24')
    expect(text).toContain('shut down')
    expect(text).toContain('短期')
    expect(sora.lastVerified).toBe('2026-07-13')
    expect(sora.personalExperience.rating).toBeLessThan(4)
    expect(sora.decisionSummary.avoidIf).toContain('长期稳定 API')
  })

  it('keeps the newest priority media and cloud model updates anchored to current official facts', () => {
    const expectations = {
      midjourney: [
        'V8.1',
        'HD',
        'GPU time',
        'https://updates.midjourney.com/v8-1-is-now-the-default-model/'
      ],
      runway: [
        'Gen-4.5',
        '$0.01/credit',
        'API credits',
        'https://docs.dev.runwayml.com/guides/pricing/'
      ],
      suno: ['v4.5-all', 'v5.5', '非商业用途', 'Pro $10月付或$8/月年付'],
      elevenlabs: ['2026-07-09', 'Scribe v2', 'eleven_multilingual_v1', 'commercial license'],
      'amazon-nova': ['Nova 2', 'extended thinking', 'built-in tools', 'multimodal embeddings']
    }

    for (const [id, terms] of Object.entries(expectations)) {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify(tool)

      expect(tool, id).toBeTruthy()
      expect(tool.lastVerified, id).toBe('2026-07-13')
      terms.forEach((term) => {
        expect(text, `${id} includes ${term}`).toContain(term)
      })
    }
  })

  it('keeps high-traffic multimodal summaries localized for Chinese readers', () => {
    const localizedToolIds = ['meitu-ai', 'jianying', 'meshy', 'hunyuan3d']
    const forbiddenDraftPhrases = [
      /As of 2026-07-\d{2}/,
      /Free access and paid entitlements vary/,
      /CapCut should be framed/,
      /A practical AI 3D prototyping tool/,
      /Consumer engine grants/,
      /A serious China-origin 3D generation option/
    ]

    for (const id of localizedToolIds) {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify({
        versions: tool.versions,
        freeQuota: tool.freeQuota,
        pros: tool.pros,
        cons: tool.cons,
        bestFor: tool.bestFor,
        personalExperience: tool.personalExperience,
        decisionSummary: tool.decisionSummary,
        swot: tool.swot
      })

      expect(tool, id).toBeTruthy()
      expect(text, id).toMatch(/[\u4e00-\u9fff]/)
      forbiddenDraftPhrases.forEach((phrase) => {
        expect(text, id).not.toMatch(phrase)
      })
    }
  })

  it('keeps rotating fun facts away from unverifiable marketing claims', () => {
    const text = JSON.stringify(funFacts)

    expect(text).not.toMatch(/业界首个|代码完全公开可审计|准确率惊人|世界最快|使用最广泛/)
    expect(text).toContain('当前应按 Devin Desktop 口径和配额规则评估')
    expect(text).toContain('API 选型应重点看当前模型、价格、上下文和兼容别名退役日期')
  })

  it('keeps refreshed catalog notes free from English draft fragments', () => {
    const localizedToolIds = [
      'verdent',
      'sequential-thinking-mcp',
      'camel-ai',
      'luma',
      'hailuo',
      'udio',
      'frontend-design-skill',
      'git-cleanup-skill',
      'research-skill',
      'dify',
      'perplexity',
      'autogen',
      'docker-mcp',
      'make'
    ]
    const forbiddenDraftPhrases = [
      /No separate SaaS quota/,
      /runtime cost comes from/,
      /No SaaS quota in the framework itself/,
      /Hailuo membership credits, purchased credits/,
      /MiniMax announced daily free trial credits/,
      /Free credit limits/,
      /10 daily credits/,
      /\$10USD\/month/,
      /\$30USD\/month/,
      /frontend-app-builder handles/,
      /Product Design get-context asks/,
      /adjacent guidance is using-git-worktrees/,
      /do not delete branches automatically/,
      /web search、crawl、citations/,
      /limited-time bonus/,
      /Free users get core search/,
      /Free core search and chat/,
      /Free core search \/ Pro/,
      /conversational single and multi-agent/,
      /no new features or enhancements/,
      /MCP Gateway runs MCP servers/,
      /isolated Docker containers/,
      /credits are the billing unit/,
      /some advanced features leveraging/,
      /scenario runs consume credits/
    ]

    for (const id of localizedToolIds) {
      const tool = aiToolsData.find((item) => item.id === id)
      const text = JSON.stringify({
        versions: tool.versions,
        freeQuota: tool.freeQuota,
        pros: tool.pros,
        cons: tool.cons,
        personalExperience: tool.personalExperience,
        decisionSummary: tool.decisionSummary
      })

      expect(tool, id).toBeTruthy()
      expect(text, id).toMatch(/[\u4e00-\u9fff]/)
      forbiddenDraftPhrases.forEach((phrase) => {
        expect(text, id).not.toMatch(phrase)
      })
    }
  })

  it('keeps high-impact pricing and risk fields localized for Chinese readers', () => {
    const localizedFields = [
      ['zapier-ai', (tool) => [tool.versions[0].pricing, tool.versions[1].pricing, tool.versions[2].pricing, tool.versions[2].models]],
      ['langchain', (tool) => [tool.versions[0].pricing, tool.freeQuota]],
      ['coze', (tool) => [tool.versions[0].pricing]],
      ['gitlab-mcp', (tool) => [tool.versions[0].pricing]],
      ['ideogram', (tool) => [tool.versions[0].pricing, tool.freeQuota, tool.swot.T]],
      ['slack-mcp', (tool) => [tool.pros[5]]],
      ['antv-chart-mcp', (tool) => [tool.swot.W, tool.swot.T]],
      ['supabase-mcp', (tool) => [tool.cons.find((item) => item.includes('分支功能'))]],
      ['sora', (tool) => [tool.versions[0].models]],
      ['flux', (tool) => [tool.swot.T]],
      ['crewai', (tool) => [tool.swot.T]],
      ['nanobanana', (tool) => [tool.swot.T]],
      ['playwright-mcp', (tool) => [tool.swot.T]],
      ['qwen', (tool) => [tool.swot.T]],
      ['devin', (tool) => [tool.swot.T]],
      ['perplexity', (tool) => [tool.versions[0].pricing]],
      ['brave-search-mcp', (tool) => [tool.versions[0].pricing]],
      ['yi', (tool) => [tool.cons[2]]],
      ['notion-mcp', (tool) => [tool.versions[0].models]],
      ['vercel-mcp', (tool) => [tool.versions[0].models, tool.cons[0]]],
      ['stripe-mcp', (tool) => [tool.decisionSummary.mainRisk]],
      ['gitlab-mcp', (tool) => [tool.decisionSummary.mainRisk]],
      ['elasticsearch-mcp', (tool) => [tool.versions[0].models]],
      ['mcp-builder-skill', (tool) => [tool.versions[1].models]],
      ['skill-creator-skill', (tool) => [tool.versions[0].models]],
      ['insecure-defaults-skill', (tool) => [tool.versions[1].models]],
      ['sharp-edges-skill', (tool) => [tool.versions[0].models]],
      ['second-opinion-skill', (tool) => [tool.versions[1].models]],
      ['audit-context-building-skill', (tool) => [tool.versions[0].models]],
      ['git-cleanup-skill', (tool) => [tool.versions[0].models]],
      ['ask-questions-skill', (tool) => [tool.versions[0].models]],
      ['property-based-testing-skill', (tool) => [tool.versions[0].models]],
      ['supabase-skill', (tool) => [tool.versions[1].models]],
      ['supabase-realtime-skill', (tool) => [tool.versions[0].models]]
    ]

    for (const [id, selectFields] of localizedFields) {
      const tool = aiToolsData.find((item) => item.id === id)
      expect(tool, id).toBeTruthy()
      for (const value of selectFields(tool)) {
        expect(value, `${id} localized field`).toMatch(/[\u4e00-\u9fff]/)
      }
    }
  })

  it('does not hard-code stale model versions in the decision tree', () => {
    expect(JSON.stringify(decisionTrees)).not.toMatch(
      /Claude 4\.5|GPT-5\.2|DeepSeek-V3|Qwen3|Composer-1\.5|1000\/天免费|2000\/天免费|业界领先|物理模拟最强|免费额度慷慨|语音质量最强|自托管免费|400\+ 集成|2M 上下文|低幻觉|高循证|杜绝AI幻觉/
    )
  })

  it('keeps MCP matcher source labels aligned with catalog provenance', () => {
    const mcpCodingNode = decisionTrees.mcp.nodes.find((node) => node.id === 'coding')
    const sequentialOption = mcpCodingNode.options.find((option) =>
      option.toolIds?.includes('sequential-thinking-mcp')
    )
    const sequentialTool = aiToolsData.find((tool) => tool.id === 'sequential-thinking-mcp')

    expect(sequentialOption).toBeTruthy()
    expect(sequentialTool).toBeTruthy()
    expect(sequentialOption.reason).toContain('MCP')
    expect(sequentialOption.reason).toContain('结构化')
    expect(sequentialOption.reason).not.toContain('Anthropic 官方')
    expect(JSON.stringify(sequentialTool.sources)).toContain('modelcontextprotocol')
  })

  it('keeps multimodal matcher recommendations from overstating free tiers or subjective superiority', () => {
    const imageNode = decisionTrees.multimodal.nodes.find((node) => node.id === 'image')
    const videoNode = decisionTrees.multimodal.nodes.find((node) => node.id === 'video')
    const fluxOption = imageNode.options.find((option) => option.toolIds?.includes('flux'))
    const jimengOption = imageNode.options.find((option) => option.toolIds?.includes('jimeng'))
    const hailuoOption = videoNode.options.find((option) => option.toolIds?.includes('hailuo'))

    expect(fluxOption.reason).toContain('开放权重')
    expect(fluxOption.reason).toContain('商用授权')
    expect(fluxOption.reason).not.toMatch(/完全免费|免费开源/)
    expect(jimengOption.reason).toContain('当前入口')
    expect(jimengOption.reason).toContain('核算')
    expect(jimengOption.reason).not.toMatch(/中文提示词最佳|免费友好/)
    expect(hailuoOption.reason).toContain('credits')
    expect(hailuoOption.reason).toContain('API')
    expect(hailuoOption.reason).not.toContain('免费层')
  })

  it('keeps medical matcher recommendations conservative', () => {
    const modelVertical = decisionTrees.model.nodes.find((node) => node.id === 'vertical')
    const medicalOption = modelVertical.options.find((option) =>
      option.toolIds?.includes('qinglizi')
    )

    expect(medicalOption.reason).toContain('资料')
    expect(medicalOption.reason).toContain('复核')
    expect(medicalOption.reason).not.toMatch(/低幻觉|高循证|杜绝AI幻觉|诊断|治疗依据/)
  })

  it('keeps legal matcher recommendations conservative and linked to cataloged tools', () => {
    const modelVertical = decisionTrees.model.nodes.find((node) => node.id === 'vertical')
    const legalOption = modelVertical.options.find((option) => option.label === '法律')
    const toolIds = new Set(aiToolsData.map((tool) => tool.id))

    expect(legalOption).toBeTruthy()
    expect(legalOption.result).not.toBe('通义法睿')
    expect(legalOption.toolIds?.every((id) => toolIds.has(id))).toBe(true)
    expect(legalOption.reason).toContain('资料')
    expect(legalOption.reason).toContain('人工复核')
    expect(legalOption.reason).not.toMatch(/法律优化|专业律师|替代律师|诉讼建议|法律意见/)
  })

  it('does not over-promise free plans in recommended combos', () => {
    const text = JSON.stringify(recommendedCombos)

    expect(text).not.toMatch(/Trae[^}]*完全免费/)
    expect(text).not.toMatch(/Codex[^}]*(免费试用|额度充足|免费额度接近)/)
  })

  it('does not present homepage recommendations as literally zero-cost', () => {
    const freeStackRecommendation = recommendations.find((rec) => rec.id === 'free-stack')
    const text = JSON.stringify(freeStackRecommendation)

    expect(freeStackRecommendation.label).toBe('免费层优先')
    expect(text).toContain('账号地区')
    expect(text).not.toMatch(/零成本方案|免费 IDE、官方 CLI 和开源工具/)
  })

  it('provides a decision tree for every matcher category', () => {
    for (const category of categories) {
      expect(getDecisionTree(category.id), `missing decision tree for ${category.id}`).toBeTruthy()
    }
  })

  it('points visual-generation recommendations at dedicated visual tools', () => {
    const visualGeneration = recommendations.find((rec) => rec.id === 'visual-generation')

    expect(visualGeneration).toBeTruthy()
    expect(visualGeneration.tools).toEqual(expect.arrayContaining(['midjourney', 'sora', 'dalle']))
    expect(visualGeneration.tools).not.toContain('gpt')
  })

  it('does not present Qwen CLI as a free budget fallback', () => {
    const qwenCli = aiToolsData.find((tool) => tool.id === 'qwen-cli')
    const budgetCombo = recommendedCombos.find((combo) => combo.name === '预算敏感方案')
    const qwenComboItems = recommendedCombos.flatMap((combo) =>
      combo.tools.filter((item) => item.tool.includes('Qwen CLI'))
    )
    const qwenCliNode = decisionTrees.cli.nodes.find((node) => node.id === 'cli-free-2')
    const longContextScenario = scenarioGuide.find((item) => item.scenario.includes('长文档'))

    expect(JSON.stringify(qwenCli.pros)).not.toContain('支持 Qwen OAuth')
    expect(budgetCombo.tools.map((item) => item.tool)).not.toContain('Gemini CLI + Qwen CLI')
    expect(qwenComboItems.every((item) => !item.cost.includes('免费'))).toBe(true)
    expect(qwenCliNode.no.reason).toContain('Coding Plan')
    expect(qwenCliNode.no.reason).toContain('API')
    expect(qwenCliNode.no.reason).not.toContain('免费层额度')
    expect(longContextScenario.backup).toContain('Coding Plan')
  })

  it('uses explicit valid tool ids for matcher recommendations that are not exact catalog names', () => {
    const toolIds = new Set(aiToolsData.map((tool) => tool.id))
    const modelCode = decisionTrees.model.nodes.find((node) => node.id === 'code')
    const modelChat = decisionTrees.model.nodes.find((node) => node.id === 'chat')
    const modelReasoning = decisionTrees.model.nodes.find((node) => node.id === 'reasoning')
    const modelVertical = decisionTrees.model.nodes.find((node) => node.id === 'vertical')
    const multimodalImage = decisionTrees.multimodal.nodes.find((node) => node.id === 'image')
    const prototypeScenario = scenarioGuide.find((item) => item.scenario === '快速原型验证')
    const videoScenario = scenarioGuide.find((item) => item.scenario === '视频内容创作')

    expect(
      modelCode.options.find((option) => option.result === 'Claude / Claude Code').toolIds
    ).toEqual(['claude', 'claude-code'])
    expect(modelCode.options.find((option) => option.result === 'Qwen Coder').toolIds).toEqual([
      'qwen'
    ])
    expect(
      modelCode.options.find((option) => option.result === 'DeepSeek V4 Flash').toolIds
    ).toEqual(['deepseek'])
    expect(
      modelReasoning.options.find((option) => option.result === 'OpenAI 推理模型').toolIds
    ).toEqual(['gpt'])
    expect(modelChat.options.find((option) => option.result === 'GPT / OpenAI').toolIds).toEqual([
      'gpt'
    ])
    expect(modelChat.options.find((option) => option.result === 'Qwen / DeepSeek').toolIds).toEqual(
      ['qwen', 'deepseek']
    )
    expect(modelVertical.options.find((option) => option.label === '法律').toolIds).toEqual([
      'qwen'
    ])
    expect(
      multimodalImage.options.find((option) => option.result === 'GPT Image / ChatGPT 图像').toolIds
    ).toEqual(['dalle'])
    expect(prototypeScenario.primaryToolIds).toEqual(['trae'])
    expect(videoScenario.primaryToolIds).toEqual(['runway'])

    const decisionToolIds = Object.values(decisionTrees)
      .flatMap((tree) => tree.nodes)
      .flatMap((node) => [node.yes, node.no, ...(node.options || [])])
      .flatMap((entry) => entry?.toolIds || [])

    const scenarioToolIds = scenarioGuide.flatMap((item) => item.primaryToolIds || [])

    for (const id of [...decisionToolIds, ...scenarioToolIds]) {
      expect(toolIds.has(id), `missing catalog tool id "${id}"`).toBe(true)
    }
  })

  it('only links verified catalog entries from active matcher recommendations', () => {
    const toolStatus = new Map(aiToolsData.map((tool) => [tool.id, tool.verificationStatus]))
    const decisionToolIds = Object.values(decisionTrees)
      .flatMap((tree) => tree.nodes)
      .flatMap((node) => [node.yes, node.no, ...(node.options || [])])
      .flatMap((entry) => entry?.toolIds || [])

    const scenarioToolIds = scenarioGuide.flatMap((item) => item.primaryToolIds || [])

    for (const id of [...decisionToolIds, ...scenarioToolIds]) {
      expect(toolStatus.get(id), `${id} active recommendation status`).toBe('verified')
    }
  })

  it('keeps every resource card traceable to a dated local asset', () => {
    for (const resource of resources) {
      expect(resource.date, `${resource.id} date`).toMatch(/^\d{4}-\d{2}$/)
      expect(resource.verificationStatus, `${resource.id} verificationStatus`).toBe('historical')
      expect(resource, `${resource.id} has lastVerified field`).toHaveProperty('lastVerified', null)
      expect(resource.assetCheckedAt, `${resource.id} assetCheckedAt`).toMatch(
        /^\d{4}-\d{2}-\d{2}$/
      )
      expect(resource.freshnessNote, `${resource.id} freshnessNote`).toBe(
        '历史快照：非实时价格、模型或额度依据'
      )
      expect(resource.sources?.length, `${resource.id} sources`).toBeGreaterThan(0)
      expect(resource.sources[0], `${resource.id} source path`).toBe(`/${resource.src}`)
    }
  })

  it('keeps the remaining needs-review and deprecated catalog queues explicit and conservative', () => {
    const needsReviewTools = aiToolsData.filter(
      (tool) => tool.verificationStatus === 'needs-review'
    )
    const deprecatedTools = aiToolsData.filter((tool) => tool.verificationStatus === 'deprecated')
    const historicalTools = aiToolsData.filter((tool) => tool.verificationStatus === 'historical')
    const expectedNeedsReviewIds = ['kiro', 'kling', 'coze', 'yi', 'research-skill']
    const expectedDeprecatedIds = []
    const expectedHistoricalIds = [
      'continue',
      'autogen',
      'supabase-realtime-skill',
      'week-report-skill',
      'think-harder-skill'
    ]
    const reviewBoundaryTools = [...needsReviewTools, ...deprecatedTools, ...historicalTools]
    const uncertaintyPattern =
      /公开来源不足|未发现|未核到|待复核|以产品内为准|取决于|暂无|不能|未确认|未验证|需要|需按/
    const overpromisePattern =
      /永久免费|完全免费|无限额度|效率提升远超成本|最强|价格最低|业界领先|杜绝|完全公开可审计|free forever|completely free|unlimited|strongest|best-in-class|best overall|the best/i
    const reviewBoundaryForbiddenPattern = /一键循证|夯夯|夯夯夯|(?:^|\s)夯(?:\s|$)/
    const reviewBoundarySwotPromotionPattern =
      /需求增长|需求高|生态增长|价值明确|需求真实|需求强|流程可标准化|方法价值高/
    const riskBoundaryPattern = /公开来源|不足|未|不再|没有|不能|需|缺少|依赖|风险|边界|归档|历史/
    const currentVerificationDate = new Date('2026-07-13T23:59:59Z')

    expect(needsReviewTools.map((tool) => tool.id)).toEqual(expectedNeedsReviewIds)
    expect(deprecatedTools.map((tool) => tool.id)).toEqual(expectedDeprecatedIds)
    expect(historicalTools.map((tool) => tool.id)).toEqual(expectedHistoricalIds)

    for (const tool of reviewBoundaryTools) {
      const visibleText = [
        tool.name,
        tool.developer,
        tool.subcategory,
        tool.funRanking,
        ...(tool.tags || []),
        ...(tool.versions || []).flatMap((version) => [
          version.type,
          version.pricing,
          version.models
        ]),
        tool.freeQuota,
        ...(tool.pros || []),
        ...(tool.cons || []),
        tool.bestFor,
        tool.personalExperience?.insights,
        ...(tool.personalExperience?.pitfalls || []),
        tool.decisionSummary?.verdict,
        tool.decisionSummary?.bestFor,
        tool.decisionSummary?.avoidIf,
        tool.decisionSummary?.mainRisk,
        ...(tool.decisionSummary?.alternatives || []),
        tool.swot?.S,
        tool.swot?.W,
        tool.swot?.O,
        tool.swot?.T
      ]
        .filter(Boolean)
        .join(' ')
      const lastVerifiedDate = new Date(`${tool.lastVerified}T00:00:00Z`)
      const sourceText = (tool.sources || []).join(' ')

      expect(tool.lastVerified, `${tool.id} lastVerified`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isNaN(lastVerifiedDate.getTime()), `${tool.id} valid lastVerified`).toBe(false)
      expect(lastVerifiedDate.getTime(), `${tool.id} lastVerified not future`).toBeLessThanOrEqual(
        currentVerificationDate.getTime()
      )
      expect(tool.sources?.length, `${tool.id} sources`).toBeGreaterThan(0)
      expect(sourceText, `${tool.id} source provenance`).toMatch(
        /https?:\/\/|本地核验线索|本地 skill|邻近本地 skill|公开来源不足/
      )
      if (tool.verificationStatus === 'deprecated') {
        expect(tool.funRanking, `${tool.id} deprecated funRanking`).toBe('归档')
      }
      expect(tool.decisionSummary?.mainRisk, `${tool.id} mainRisk`).toBeTruthy()
      expect(tool.decisionSummary?.mainRisk, `${tool.id} mainRisk boundary`).toMatch(
        riskBoundaryPattern
      )
      expect(visibleText, `${tool.id} uncertainty marker`).toMatch(uncertaintyPattern)
      expect(visibleText, `${tool.id} overpromise`).not.toMatch(overpromisePattern)
      expect(visibleText, `${tool.id} review boundary forbidden terms`).not.toMatch(
        reviewBoundaryForbiddenPattern
      )
      expect(
        [tool.swot?.S, tool.swot?.O].filter(Boolean).join(' '),
        `${tool.id} review boundary SWOT promotion`
      ).not.toMatch(reviewBoundarySwotPromotionPattern)
    }
  })

  it('keeps SWOT opportunity language specific across the catalog', () => {
    const genericGrowthPattern =
      /需求增长|需求高|生态增长|价值明确|需求真实|需求强|流程可标准化|方法价值高/

    for (const tool of aiToolsData) {
      const swotOpportunityText = [tool.swot?.S, tool.swot?.O].filter(Boolean).join(' ')

      expect(swotOpportunityText, `${tool.id} SWOT specificity`).not.toMatch(genericGrowthPattern)
    }
  })
})
