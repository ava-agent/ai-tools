import { describe, expect, it } from 'vitest'
import { aiToolsData } from '../tools'
import { decisionTrees, getDecisionTree } from '../decisions'
import { categories, recommendedCombos } from '../categories'
import { scenarioGuide } from '../decisions'
import { recommendations } from '../recommendations'
import { resources } from '../resources'
import { funFacts } from '../funFacts'

describe('content freshness safeguards', () => {
  it('keeps the DeepSeek record aligned with official V4 Flash/Pro API docs', () => {
    const deepseek = aiToolsData.find(tool => tool.id === 'deepseek')
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
    expect(deepseek.sources).toEqual(expect.arrayContaining([
      'https://api-docs.deepseek.com/quick_start/pricing',
      'https://api-docs.deepseek.com/news/news260424',
      'https://api-docs.deepseek.com/updates',
    ]))
    expect(deepseek.lastVerified).toBe('2026-07-02')
    expect(deepseek.decisionSummary.mainRisk).toMatch(/官方预告|2026-07-24|兼容别名|下线/)
    expect(deepseek.decisionSummary.mainRisk).not.toContain('退役')
  })

  it('keeps high-traffic multimodal summaries localized for Chinese readers', () => {
    const localizedToolIds = ['meitu-ai', 'jianying', 'meshy', 'hunyuan3d']
    const forbiddenDraftPhrases = [
      /As of 2026-07-02/,
      /Free access and paid entitlements vary/,
      /CapCut should be framed/,
      /A practical AI 3D prototyping tool/,
      /Consumer engine grants/,
      /A serious China-origin 3D generation option/,
    ]

    for (const id of localizedToolIds) {
      const tool = aiToolsData.find(item => item.id === id)
      const text = JSON.stringify({
        versions: tool.versions,
        freeQuota: tool.freeQuota,
        pros: tool.pros,
        cons: tool.cons,
        bestFor: tool.bestFor,
        personalExperience: tool.personalExperience,
        decisionSummary: tool.decisionSummary,
        swot: tool.swot,
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
      'make',
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
      /scenario runs consume credits/,
    ]

    for (const id of localizedToolIds) {
      const tool = aiToolsData.find(item => item.id === id)
      const text = JSON.stringify({
        versions: tool.versions,
        freeQuota: tool.freeQuota,
        pros: tool.pros,
        cons: tool.cons,
        personalExperience: tool.personalExperience,
        decisionSummary: tool.decisionSummary,
      })

      expect(tool, id).toBeTruthy()
      expect(text, id).toMatch(/[\u4e00-\u9fff]/)
      forbiddenDraftPhrases.forEach((phrase) => {
        expect(text, id).not.toMatch(phrase)
      })
    }
  })

  it('does not hard-code stale model versions in the decision tree', () => {
    expect(JSON.stringify(decisionTrees)).not.toMatch(
      /Claude 4\.5|GPT-5\.2|DeepSeek-V3|Qwen3|Composer-1\.5|1000\/天免费|2000\/天免费|业界领先|物理模拟最强|免费额度慷慨|语音质量最强|自托管免费|400\+ 集成|2M 上下文|低幻觉|高循证|杜绝AI幻觉/,
    )
  })

  it('keeps MCP matcher source labels aligned with catalog provenance', () => {
    const mcpCodingNode = decisionTrees.mcp.nodes.find(node => node.id === 'coding')
    const sequentialOption = mcpCodingNode.options.find(option => option.toolIds?.includes('sequential-thinking-mcp'))
    const sequentialTool = aiToolsData.find(tool => tool.id === 'sequential-thinking-mcp')

    expect(sequentialOption).toBeTruthy()
    expect(sequentialTool).toBeTruthy()
    expect(sequentialOption.reason).toContain('MCP')
    expect(sequentialOption.reason).toContain('结构化')
    expect(sequentialOption.reason).not.toContain('Anthropic 官方')
    expect(JSON.stringify(sequentialTool.sources)).toContain('modelcontextprotocol')
  })

  it('keeps multimodal matcher recommendations from overstating free tiers or subjective superiority', () => {
    const imageNode = decisionTrees.multimodal.nodes.find(node => node.id === 'image')
    const videoNode = decisionTrees.multimodal.nodes.find(node => node.id === 'video')
    const fluxOption = imageNode.options.find(option => option.toolIds?.includes('flux'))
    const jimengOption = imageNode.options.find(option => option.toolIds?.includes('jimeng'))
    const klingOption = videoNode.options.find(option => option.toolIds?.includes('kling'))

    expect(fluxOption.reason).toContain('开放权重')
    expect(fluxOption.reason).toContain('商用授权')
    expect(fluxOption.reason).not.toMatch(/完全免费|免费开源/)
    expect(jimengOption.reason).toContain('当前入口')
    expect(jimengOption.reason).toContain('核算')
    expect(jimengOption.reason).not.toMatch(/中文提示词最佳|免费友好/)
    expect(klingOption.reason).toContain('订阅积分')
    expect(klingOption.reason).toContain('API Resource Packages')
    expect(klingOption.reason).not.toContain('免费层')
  })

  it('keeps medical matcher recommendations conservative', () => {
    const modelVertical = decisionTrees.model.nodes.find(node => node.id === 'vertical')
    const medicalOption = modelVertical.options.find(option => option.toolIds?.includes('qinglizi'))

    expect(medicalOption.reason).toContain('资料')
    expect(medicalOption.reason).toContain('复核')
    expect(medicalOption.reason).not.toMatch(/低幻觉|高循证|杜绝AI幻觉|诊断|治疗依据/)
  })

  it('keeps legal matcher recommendations conservative and linked to cataloged tools', () => {
    const modelVertical = decisionTrees.model.nodes.find(node => node.id === 'vertical')
    const legalOption = modelVertical.options.find(option => option.label === '法律')
    const toolIds = new Set(aiToolsData.map(tool => tool.id))

    expect(legalOption).toBeTruthy()
    expect(legalOption.result).not.toBe('通义法睿')
    expect(legalOption.toolIds?.every(id => toolIds.has(id))).toBe(true)
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
    const freeStackRecommendation = recommendations.find(rec => rec.id === 'free-stack')
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
    const visualGeneration = recommendations.find(rec => rec.id === 'visual-generation')

    expect(visualGeneration).toBeTruthy()
    expect(visualGeneration.tools).toEqual(expect.arrayContaining(['midjourney', 'sora', 'dalle']))
    expect(visualGeneration.tools).not.toContain('gpt')
  })

  it('does not present Qwen CLI as a free budget fallback', () => {
    const qwenCli = aiToolsData.find(tool => tool.id === 'qwen-cli')
    const budgetCombo = recommendedCombos.find(combo => combo.name === '预算敏感方案')
    const qwenComboItems = recommendedCombos.flatMap(combo => combo.tools.filter(item => item.tool.includes('Qwen CLI')))
    const qwenCliNode = decisionTrees.cli.nodes.find(node => node.id === 'cli-free-2')
    const longContextScenario = scenarioGuide.find(item => item.scenario.includes('长文档'))

    expect(JSON.stringify(qwenCli.pros)).not.toContain('支持 Qwen OAuth')
    expect(budgetCombo.tools.map(item => item.tool)).not.toContain('Gemini CLI + Qwen CLI')
    expect(qwenComboItems.every(item => !item.cost.includes('免费'))).toBe(true)
    expect(qwenCliNode.no.reason).toContain('Coding Plan')
    expect(qwenCliNode.no.reason).toContain('API')
    expect(qwenCliNode.no.reason).not.toContain('免费层额度')
    expect(longContextScenario.backup).toContain('Coding Plan')
  })

  it('uses explicit valid tool ids for matcher recommendations that are not exact catalog names', () => {
    const toolIds = new Set(aiToolsData.map(tool => tool.id))
    const modelCode = decisionTrees.model.nodes.find(node => node.id === 'code')
    const modelChat = decisionTrees.model.nodes.find(node => node.id === 'chat')
    const modelReasoning = decisionTrees.model.nodes.find(node => node.id === 'reasoning')
    const modelVertical = decisionTrees.model.nodes.find(node => node.id === 'vertical')
    const multimodalImage = decisionTrees.multimodal.nodes.find(node => node.id === 'image')
    const prototypeScenario = scenarioGuide.find(item => item.scenario === '快速原型验证')
    const videoScenario = scenarioGuide.find(item => item.scenario === '视频内容创作')

    expect(modelCode.options.find(option => option.result === 'Claude / Claude Code').toolIds).toEqual(['claude', 'claude-code'])
    expect(modelCode.options.find(option => option.result === 'Qwen Coder').toolIds).toEqual(['qwen'])
    expect(modelCode.options.find(option => option.result === 'DeepSeek V4 Flash').toolIds).toEqual(['deepseek'])
    expect(modelReasoning.options.find(option => option.result === 'OpenAI 推理模型').toolIds).toEqual(['gpt'])
    expect(modelChat.options.find(option => option.result === 'GPT / OpenAI').toolIds).toEqual(['gpt'])
    expect(modelChat.options.find(option => option.result === 'Qwen / DeepSeek').toolIds).toEqual(['qwen', 'deepseek'])
    expect(modelVertical.options.find(option => option.label === '法律').toolIds).toEqual(['qwen'])
    expect(multimodalImage.options.find(option => option.result === 'GPT Image / ChatGPT 图像').toolIds).toEqual(['dalle'])
    expect(prototypeScenario.primaryToolIds).toEqual(['trae'])
    expect(videoScenario.primaryToolIds).toEqual(['kling'])

    const decisionToolIds = Object.values(decisionTrees)
      .flatMap(tree => tree.nodes)
      .flatMap(node => [
        node.yes,
        node.no,
        ...(node.options || []),
      ])
      .flatMap(entry => entry?.toolIds || [])

    const scenarioToolIds = scenarioGuide.flatMap(item => item.primaryToolIds || [])

    for (const id of [...decisionToolIds, ...scenarioToolIds]) {
      expect(toolIds.has(id), `missing catalog tool id "${id}"`).toBe(true)
    }
  })

  it('only links verified catalog entries from active matcher recommendations', () => {
    const toolStatus = new Map(aiToolsData.map(tool => [tool.id, tool.verificationStatus]))
    const decisionToolIds = Object.values(decisionTrees)
      .flatMap(tree => tree.nodes)
      .flatMap(node => [
        node.yes,
        node.no,
        ...(node.options || []),
      ])
      .flatMap(entry => entry?.toolIds || [])

    const scenarioToolIds = scenarioGuide.flatMap(item => item.primaryToolIds || [])

    for (const id of [...decisionToolIds, ...scenarioToolIds]) {
      expect(toolStatus.get(id), `${id} active recommendation status`).toBe('verified')
    }
  })

  it('keeps every resource card traceable to a dated local asset', () => {
    for (const resource of resources) {
      expect(resource.date, `${resource.id} date`).toMatch(/^\d{4}-\d{2}$/)
      expect(resource.verificationStatus, `${resource.id} verificationStatus`).toBe('historical')
      expect(resource, `${resource.id} has lastVerified field`).toHaveProperty('lastVerified', null)
      expect(resource.assetCheckedAt, `${resource.id} assetCheckedAt`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(resource.freshnessNote, `${resource.id} freshnessNote`).toBe('历史快照：非实时价格、模型或额度依据')
      expect(resource.sources?.length, `${resource.id} sources`).toBeGreaterThan(0)
      expect(resource.sources[0], `${resource.id} source path`).toBe(`/${resource.src}`)
    }
  })

  it('keeps the remaining needs-review and deprecated catalog queues explicit and conservative', () => {
    const needsReviewTools = aiToolsData.filter(tool => tool.verificationStatus === 'needs-review')
    const deprecatedTools = aiToolsData.filter(tool => tool.verificationStatus === 'deprecated')
    const historicalTools = aiToolsData.filter(tool => tool.verificationStatus === 'historical')
    const expectedNeedsReviewIds = []
    const expectedDeprecatedIds = [
      'insecure-defaults-skill',
      'sharp-edges-skill',
      'second-opinion-skill',
      'audit-context-building-skill',
      'git-cleanup-skill',
      'ask-questions-skill',
      'property-based-testing-skill',
      'ui-ux-pro-max-skill',
      'week-report-skill',
      'think-harder-skill',
    ]
    const expectedHistoricalIds = [
      'continue',
      'supabase-realtime-skill',
    ]
    const reviewBoundaryTools = [...needsReviewTools, ...deprecatedTools]
    const uncertaintyPattern = /公开来源不足|未发现|未核到|待复核|以产品内为准|取决于|暂无|不能|未确认|未验证|需要|需按/
    const overpromisePattern = /永久免费|完全免费|无限额度|效率提升远超成本|最强|价格最低|业界领先|杜绝|完全公开可审计|free forever|completely free|unlimited|strongest|best-in-class|best overall|the best/i
    const reviewBoundaryForbiddenPattern = /一键循证|夯夯|夯夯夯/
    const reviewBoundarySwotPromotionPattern = /需求增长|需求高|生态增长|价值明确|需求真实|需求强|流程可标准化|方法价值高/
    const riskBoundaryPattern = /公开来源|不足|未|没有|不能|需|缺少|依赖|风险|边界/
    const currentVerificationDate = new Date('2026-07-02T23:59:59Z')

    expect(needsReviewTools.map(tool => tool.id)).toEqual(expectedNeedsReviewIds)
    expect(deprecatedTools.map(tool => tool.id)).toEqual(expectedDeprecatedIds)
    expect(historicalTools.map(tool => tool.id)).toEqual(expectedHistoricalIds)

    for (const tool of reviewBoundaryTools) {
      const visibleText = [
        tool.name,
        tool.developer,
        tool.subcategory,
        tool.funRanking,
        ...(tool.tags || []),
        ...(tool.versions || []).flatMap(version => [
          version.type,
          version.pricing,
          version.models,
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
        tool.swot?.T,
      ].filter(Boolean).join(' ')
      const lastVerifiedDate = new Date(`${tool.lastVerified}T00:00:00Z`)
      const sourceText = (tool.sources || []).join(' ')

      expect(tool.lastVerified, `${tool.id} lastVerified`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(Number.isNaN(lastVerifiedDate.getTime()), `${tool.id} valid lastVerified`).toBe(false)
      expect(lastVerifiedDate.getTime(), `${tool.id} lastVerified not future`).toBeLessThanOrEqual(currentVerificationDate.getTime())
      expect(tool.sources?.length, `${tool.id} sources`).toBeGreaterThan(0)
      expect(sourceText, `${tool.id} source provenance`).toMatch(/https?:\/\/|本地核验线索|公开来源不足/)
      expect(tool.decisionSummary?.mainRisk, `${tool.id} mainRisk`).toBeTruthy()
      expect(tool.decisionSummary?.mainRisk, `${tool.id} mainRisk boundary`).toMatch(riskBoundaryPattern)
      expect(visibleText, `${tool.id} uncertainty marker`).toMatch(uncertaintyPattern)
      expect(visibleText, `${tool.id} overpromise`).not.toMatch(overpromisePattern)
      expect(visibleText, `${tool.id} review boundary forbidden terms`).not.toMatch(reviewBoundaryForbiddenPattern)
      expect([
        tool.swot?.S,
        tool.swot?.O,
      ].filter(Boolean).join(' '), `${tool.id} review boundary SWOT promotion`).not.toMatch(reviewBoundarySwotPromotionPattern)
    }
  })

  it('keeps SWOT opportunity language specific across the catalog', () => {
    const genericGrowthPattern = /需求增长|需求高|生态增长|价值明确|需求真实|需求强|流程可标准化|方法价值高/

    for (const tool of aiToolsData) {
      const swotOpportunityText = [
        tool.swot?.S,
        tool.swot?.O,
      ].filter(Boolean).join(' ')

      expect(swotOpportunityText, `${tool.id} SWOT specificity`).not.toMatch(genericGrowthPattern)
    }
  })
})
