import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { aiToolsData } from '../src/data/tools.js'
import { createHomeCatalogEntry, getToolSearchText } from '../src/utils/catalogFilters.js'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const mode = process.argv.includes('--check') ? 'check' : 'write'

const homeCatalog = aiToolsData.map(createHomeCatalogEntry)
const homeSearchIndex = Object.fromEntries(
  aiToolsData.map((tool) => [tool.id, getToolSearchText(tool)])
)

const categoryIds = [...new Set(aiToolsData.map((tool) => tool.category))]
const landingStats = {
  tools: aiToolsData.length,
  categories: categoryIds.length,
  verifiedTools: homeCatalog.filter((tool) => tool.verificationStatus === 'verified').length
}
const landingCategorySummary = Object.fromEntries(
  categoryIds.map((category) => {
    const categoryTools = aiToolsData.filter((tool) => tool.category === category)
    return [
      category,
      {
        total: categoryTools.length,
        featured: categoryTools
          .filter((tool) => tool.verificationStatus === 'verified')
          .sort(
            (a, b) =>
              (b.personalExperience?.rating || 0) - (a.personalExperience?.rating || 0) ||
              a.name.localeCompare(b.name, 'zh-CN')
          )
          .slice(0, 6)
          .map((tool) => ({
            id: tool.id,
            name: tool.name,
            bestFor: tool.decisionSummary?.bestFor || tool.bestFor,
            rating: tool.personalExperience?.rating || 0
          }))
      }
    ]
  })
)
const landingToolNames = Object.fromEntries(aiToolsData.map((tool) => [tool.id, tool.name]))

const publicRoutePaths = [
  '',
  'tools',
  'comparison',
  'matcher',
  'pricing',
  'workflows',
  'resources',
  'quiz'
]
const sitemapUrls = [
  ...publicRoutePaths.map((path) => `https://aitools.rxcloud.group/${path}`),
  ...aiToolsData.map((tool) => `https://aitools.rxcloud.group/tools/${tool.id}`)
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
  .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
  .join('\n')}\n</urlset>\n`

const matcherCatalog = aiToolsData.map((tool) => ({
  id: tool.id,
  name: tool.name,
  verificationStatus: tool.verificationStatus,
  lastVerified: tool.lastVerified,
  sources: tool.sources
}))

const comparisonCatalog = aiToolsData.map((tool) => ({
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

const pricingCatalog = aiToolsData.map((tool) => ({
  id: tool.id,
  name: tool.name,
  category: tool.category,
  verificationStatus: tool.verificationStatus,
  versions: (tool.versions || []).map((version) => ({ pricing: version.pricing })),
  freeQuota: tool.freeQuota,
  personalExperience: { rating: tool.personalExperience?.rating || 0 }
}))

const interactiveCatalog = aiToolsData.map((tool) => ({
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

const battleCatalog = aiToolsData.map((tool) => ({
  id: tool.id,
  name: tool.name,
  developer: tool.developer,
  bestFor: tool.bestFor,
  pros: (tool.pros || []).slice(0, 2),
  personalExperience: { rating: tool.personalExperience?.rating || 0 }
}))

for (const tool of aiToolsData) {
  if (!/^[a-z0-9-]+$/.test(tool.id)) {
    throw new Error(`Tool id cannot be used as a generated filename: ${tool.id}`)
  }
}

const detailDirectory = resolve(projectRoot, 'src/data/generated/toolDetails')
const toolDetailCatalog = aiToolsData.map((tool) => ({
  id: tool.id,
  name: tool.name,
  category: tool.category,
  subcategory: tool.subcategory,
  developer: tool.developer,
  tags: tool.tags,
  personalExperience: { rating: tool.personalExperience?.rating || 0 }
}))
const toolDetailLoaderEntries = aiToolsData
  .map((tool) => `  ${JSON.stringify(tool.id)}: () => import('./toolDetails/${tool.id}.js').then((module) => module.default)`)
  .join(',\n')
const toolDetailLoaderModule = `// Generated loader for per-tool detail chunks.\nexport const toolDetailIds = ${JSON.stringify(aiToolsData.map((tool) => tool.id), null, 2)}\n\nconst toolDetailLoaders = {\n${toolDetailLoaderEntries}\n}\n\nexport function hasToolDetail(id) {\n  return Boolean(toolDetailLoaders[id])\n}\n\nexport async function loadToolDetail(id) {\n  const loader = toolDetailLoaders[id]\n  return loader ? loader() : null\n}\n`
const toolDetailsModule = `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const toolDetailCatalog = ${JSON.stringify(toolDetailCatalog, null, 2)}\n\nexport { toolDetailIds, hasToolDetail, loadToolDetail } from './toolDetailLoader.js'\n`

const outputs = [
  {
    path: resolve(projectRoot, 'public/sitemap.xml'),
    content: sitemap
  },
  {
    path: resolve(projectRoot, 'src/data/generated/homeCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const homeCatalog = ${JSON.stringify(homeCatalog, null, 2)}\n\nexport function loadHomeSearchIndex() {\n  return import('./homeSearchIndex.js').then((module) => module.homeSearchIndex)\n}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/landingCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const LANDING_STATS = ${JSON.stringify(landingStats, null, 2)}\n\nexport const LANDING_CATEGORY_SUMMARY = ${JSON.stringify(landingCategorySummary, null, 2)}\n\nexport const LANDING_TOOL_NAMES = ${JSON.stringify(landingToolNames, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/homeSearchIndex.js'),
    content: `// Generated from src/data/tools.js. Loaded only after a user starts searching.\nexport const homeSearchIndex = ${JSON.stringify(homeSearchIndex, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/matcherCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const matcherCatalog = ${JSON.stringify(matcherCatalog, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/comparisonCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const comparisonCatalog = ${JSON.stringify(comparisonCatalog, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/pricingCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const pricingCatalog = ${JSON.stringify(pricingCatalog, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/interactiveCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const interactiveCatalog = ${JSON.stringify(interactiveCatalog, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/interactiveCatalogLoader.js'),
    content: `// Generated loader for the deferred quiz catalog.\nexport function loadInteractiveCatalog() {\n  return import('./interactiveCatalog.js').then((module) => module.interactiveCatalog)\n}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/battleCatalog.js'),
    content: `// Generated from src/data/tools.js. Run npm run generate:data after catalog edits.\nexport const battleCatalog = ${JSON.stringify(battleCatalog, null, 2)}\n`
  },
  {
    path: resolve(projectRoot, 'src/data/generated/toolDetails.js'),
    content: toolDetailsModule
  },
  {
    path: resolve(projectRoot, 'src/data/generated/toolDetailLoader.js'),
    content: toolDetailLoaderModule
  },
  ...aiToolsData.map((tool) => ({
    path: resolve(detailDirectory, `${tool.id}.js`),
    content: `// Generated from src/data/tools.js.\nexport default ${JSON.stringify(tool, null, 2)}\n`
  }))
]

if (mode === 'check') {
  let isCurrent = true
  for (const output of outputs) {
    let current = ''
    try {
      current = await readFile(output.path, 'utf8')
    } catch {
      // A missing generated file is reported by the same actionable error below.
    }
    if (current !== output.content) isCurrent = false
  }
  try {
    const actualDetailFiles = (await readdir(detailDirectory)).sort()
    const expectedDetailFiles = aiToolsData.map((tool) => `${tool.id}.js`).sort()
    if (JSON.stringify(actualDetailFiles) !== JSON.stringify(expectedDetailFiles)) {
      isCurrent = false
    }
  } catch {
    isCurrent = false
  }

  if (!isCurrent) {
    console.error('Generated tool indexes are stale. Run: npm run generate:data')
    process.exitCode = 1
  }
} else {
  await rm(detailDirectory, { recursive: true, force: true })
  for (const output of outputs) {
    await mkdir(dirname(output.path), { recursive: true })
    await writeFile(output.path, output.content, 'utf8')
  }
  console.log(`Generated ${matcherCatalog.length} home, matcher, pricing, comparison, interactive, and detail entries.`)
}
