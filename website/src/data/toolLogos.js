// Tool logo configuration
// Maps tool IDs to brand colors and display initials
// Used by ToolLogo.vue component
// logoUrl: 使用 DuckDuckGo Favicon 服务获取网站图标 (稳定可靠，无重定向)

export const toolLogos = {
  // === AI IDE ===
  'cursor':          { initials: 'Cu', colors: ['#000000', '#1a1a2e'], text: '#00d4aa', logoUrl: 'https://icons.duckduckgo.com/ip3/cursor.com.ico' },
  'trae':            { initials: 'Tr', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/trae.ai.ico' },
  'windsurf':        { initials: 'Ws', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/codeium.com.ico' },
  'qoder':           { initials: 'Qd', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/qoder.com.ico' },
  'zed':             { initials: 'Z',  colors: ['#084CFB', '#064AD0'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/zed.dev.ico' },
  'replit':          { initials: 'R',  colors: ['#F26207', '#e65100'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/replit.com.ico' },
  'kiro':            { initials: 'Ki', colors: ['#FF9900', '#e68a00'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/aws.amazon.com.ico' },
  'codebuddy':       { initials: 'CB', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/cloud.tencent.com.ico' },
  'antigravity':     { initials: 'AG', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://antigravity.google&size=128' },
  'github-copilot':  { initials: 'GH', colors: ['#24292e', '#1b1f23'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/github.com.ico' },
  'verdent':         { initials: 'Vd', colors: ['#10b981', '#059669'], text: '#ffffff', logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://verdent.ai&size=128' },
  'jetbrains-ai':    { initials: 'JB', colors: ['#fe315d', '#e0234e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/jetbrains.com.ico' },

  // === AI CLI ===
  'claude-code':     { initials: 'CC', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/anthropic.com.ico' },
  'gemini-cli':      { initials: 'Gc', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/google.com.ico' },
  'qwen-cli':        { initials: 'Qc', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/qwen.ai.ico' },
  'aider':           { initials: 'Ai', colors: ['#22c55e', '#16a34a'], text: '#ffffff', logoUrl: 'https://aider.chat/assets/logo.svg' },
  'cline':           { initials: 'Cl', colors: ['#06b6d4', '#0891b2'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/cline.bot.ico' },
  'continue':        { initials: 'Ct', colors: ['#f97316', '#ea580c'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/continue.dev.ico' },
  'opencode':        { initials: 'OC', colors: ['#a855f7', '#9333ea'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/opencode.ai.ico' },
  'codex':           { initials: 'Cx', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/openai.com.ico' },
  'goose':           { initials: 'Go', colors: ['#f59e0b', '#d97706'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/block.xyz.ico' },
  'openhands':       { initials: 'OH', colors: ['#ef4444', '#dc2626'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/all-hands.dev.ico' },

  // === AI Models ===
  'claude':          { initials: 'Cl', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/anthropic.com.ico' },
  'gpt':             { initials: 'GP', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/openai.com.ico' },
  'gemini':          { initials: 'Ge', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/google.com.ico' },
  'deepseek':        { initials: 'DS', colors: ['#0066ff', '#0052cc'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/deepseek.com.ico' },
  'glm':             { initials: 'GL', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/bigmodel.cn.ico' },
  'kimi':            { initials: 'Ki', colors: ['#000000', '#1a1a2e'], text: '#36d7b7', logoUrl: 'https://icons.duckduckgo.com/ip3/moonshot.cn.ico' },
  'minimax':         { initials: 'Mx', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/minimaxi.com.ico' },
  'doubao':          { initials: 'Db', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/doubao.com.ico' },

  // === Multimodal ===
  'midjourney':      { initials: 'MJ', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/midjourney.com.ico' },
  'dalle':           { initials: 'DE', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/openai.com.ico' },
  'stable-diffusion':{ initials: 'SD', colors: ['#a855f7', '#9333ea'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/stability.ai.ico' },
  'meitu-ai':        { initials: 'Mt', colors: ['#ff4081', '#e91e63'], text: '#ffffff', logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meituxiuxiu.com&size=128' },
  'sora':            { initials: 'So', colors: ['#000000', '#1a1a2e'], text: '#10a37f', logoUrl: 'https://icons.duckduckgo.com/ip3/openai.com.ico' },
  'kling':           { initials: 'Kl', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/klingai.com.ico' },
  'jianying':        { initials: 'JY', colors: ['#ff4757', '#ff3838'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/capcut.com.ico' },
  'hunyuan3d':       { initials: 'HY', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/tencent.com.ico' },

  // === Agent & Others ===
  'notebooklm':      { initials: 'NL', colors: ['#fbbc04', '#e6ab00'], text: '#1a1a2e', logoUrl: 'https://icons.duckduckgo.com/ip3/google.com.ico' },
  'qinglizi':        { initials: 'QL', colors: ['#22d3ee', '#06b6d4'], text: '#ffffff' },
  'coze':            { initials: 'Cz', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/coze.com.ico' },
  'dify':            { initials: 'Di', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/cloud.dify.ai.ico' },
  'autogpt':         { initials: 'AT', colors: ['#000000', '#1a1a2e'], text: '#22c55e', logoUrl: 'https://icons.duckduckgo.com/ip3/autogpt.net.ico' },
  'langchain':       { initials: 'LC', colors: ['#1c3c3c', '#0f2e2e'], text: '#2dd4bf', logoUrl: 'https://icons.duckduckgo.com/ip3/langchain.com.ico' },
  'nanobanana':      { initials: 'NB', colors: ['#f59e0b', '#d97706'], text: '#ffffff', logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://gemini.google&size=128' },
  'perplexity':      { initials: 'Pp', colors: ['#20808d', '#1a6b76'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/perplexity.ai.ico' },

  // === AI 应用构建器 (新增) ===
  'devin':           { initials: 'Dv', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/cognition.ai.ico' },
  'bolt-new':        { initials: 'Bn', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/bolt.new.ico' },
  'v0':              { initials: 'V0', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/v0.dev.ico' },
  'lovable':         { initials: 'Lv', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/lovable.dev.ico' },
  'tabnine':         { initials: 'Tn', colors: ['#00b4d8', '#0077b6'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/tabnine.com.ico' },
  'warp':            { initials: 'Wp', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/warp.dev.ico' },

  // === 更多 AI 模型 ===
  'llama':           { initials: 'Ll', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/meta.ai.ico' },
  'mistral':         { initials: 'Mi', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/mistral.ai.ico' },
  'yi':              { initials: 'Yi', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/01.ai.ico' },
  'ernie':           { initials: 'Er', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/yiyan.baidu.com.ico' },
  'qwen':            { initials: 'Qw', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/qwen.ai.ico' },
  'grok':            { initials: 'Gk', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/x.ai.ico' },

  // === Agent 平台 ===
  'manus':           { initials: 'Mn', colors: ['#10b981', '#059669'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/manus.im.ico' },
  'crewai':          { initials: 'Cr', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/crewai.com.ico' },
  'n8n':             { initials: 'n8', colors: ['#ff6d5a', '#ff4d4d'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/n8n.io.ico' },

  // === Agent SDK ===
  'openai-agents-sdk': { initials: 'OA', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/openai.com.ico' },
  'claude-agent-sdk':  { initials: 'CA', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/anthropic.com.ico' },
  'google-adk':        { initials: 'GA', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/google.com.ico' },

  // === MCP 工具 ===
  'context7':          { initials: 'C7', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/context7.com.ico' },
  'playwright-mcp':    { initials: 'PW', colors: ['#2ead4c', '#1e8a3a'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/playwright.dev.ico' },
  'firecrawl-mcp':     { initials: 'FC', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/firecrawl.dev.ico' },
  'github-mcp':        { initials: 'GM', colors: ['#24292e', '#1b1f23'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/github.com.ico' },
  'supabase-mcp':      { initials: 'SM', colors: ['#3ecf8e', '#2ecc71'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/supabase.com.ico' },
  'figma-mcp':         { initials: 'FM', colors: ['#f24e1e', '#e24b1f'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/figma.com.ico' },
  'vercel-mcp':        { initials: 'VM', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/vercel.com.ico' },
  'notion-mcp':        { initials: 'NM', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/notion.so.ico' },
  'postman-mcp':       { initials: 'PM', colors: ['#ff6c37', '#e65c2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/postman.com.ico' },
  'brave-search-mcp':  { initials: 'BS', colors: ['#fb542b', '#e04a24'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/brave.com.ico' },

  // === Skills ===
  'frontend-design-skill': { initials: 'FD', colors: ['#3b82f6', '#2563eb'], text: '#ffffff' },
  'webapp-testing-skill':  { initials: 'WT', colors: ['#10b981', '#059669'], text: '#ffffff' },
  'mcp-builder-skill':     { initials: 'MB', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff' },
  'skill-creator-skill':   { initials: 'SC', colors: ['#f59e0b', '#d97706'], text: '#ffffff' },
  'semgrep-skill':         { initials: 'SG', colors: ['#14b8a6', '#0d9488'], text: '#ffffff' },
  'differential-review-skill': { initials: 'DR', colors: ['#ef4444', '#dc2626'], text: '#ffffff' },
  'insecure-defaults-skill':   { initials: 'ID', colors: ['#f97316', '#ea580c'], text: '#ffffff' },
  'sharp-edges-skill':     { initials: 'SE', colors: ['#eab308', '#ca8a04'], text: '#ffffff' },
  'second-opinion-skill':  { initials: '2O', colors: ['#6366f1', '#4f46e5'], text: '#ffffff' },
  'audit-context-building-skill': { initials: 'AC', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff' },
  'git-cleanup-skill':     { initials: 'GC', colors: ['#f43f5e', '#e11d48'], text: '#ffffff' },
  'ask-questions-skill':   { initials: 'AQ', colors: ['#06b6d4', '#0891b2'], text: '#ffffff' },
  'property-based-testing-skill': { initials: 'PB', colors: ['#22c55e', '#16a34a'], text: '#ffffff' },
  'supabase-skill':        { initials: 'SB', colors: ['#3ecf8e', '#2ecc71'], text: '#ffffff' },
  'supabase-realtime-skill': { initials: 'SR', colors: ['#3ecf8e', '#2ecc71'], text: '#ffffff' },
  'ui-ux-pro-max-skill':   { initials: 'UX', colors: ['#ec4899', '#db2777'], text: '#ffffff' },
  'week-report-skill':     { initials: 'WR', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff' },
  'think-harder-skill':    { initials: 'TH', colors: ['#a855f7', '#9333ea'], text: '#ffffff' },
  'research-skill':        { initials: 'RS', colors: ['#6366f1', '#4f46e5'], text: '#ffffff' },

  // === 新增工具 (Crush等) ===
  'crush':           { initials: 'Cr', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/charm.land.ico' },

  // === 多媒体工具 (补充) ===
  'suno':            { initials: 'Sn', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/suno.com.ico' },
  'elevenlabs':      { initials: 'EL', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/elevenlabs.io.ico' },
  'flux':            { initials: 'Fl', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/blackforestlabs.ai.ico' },
  'runway':          { initials: 'Rw', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/runwayml.com.ico' },
  'pika':            { initials: 'Pk', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/pika.art.ico' },
  'ideogram':        { initials: 'Id', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/ideogram.ai.ico' },
  'jimeng':          { initials: 'Jm', colors: ['#ff4757', '#ff3838'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/jimeng.jianying.com.ico' },
  'meshy':           { initials: 'Me', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff', logoUrl: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://meshy.ai&size=128' },

  // === MCP 工具 (补充) ===
  'sequential-thinking-mcp': { initials: 'ST', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/anthropic.com.ico' },
  'antv-chart-mcp':          { initials: 'AC', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/antv.antgroup.com.ico' },
  'openmemory-mcp':          { initials: 'OM', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/mem0.ai.ico' },
  'atlassian-mcp':           { initials: 'AM', colors: ['#0052cc', '#0747a6'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/atlassian.com.ico' },

  // === 新增 MCP 工具 ===
  'slack-mcp':         { initials: 'SL', colors: ['#4a154b', '#611f69'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/slack.com.ico' },
  'linear-mcp':        { initials: 'LN', colors: ['#5e6ad2', '#4f5bd5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/linear.app.ico' },
  'sentry-mcp':        { initials: 'ST', colors: ['#362d59', '#2b1d4e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/sentry.io.ico' },
  'docker-mcp':        { initials: 'DK', colors: ['#2496ed', '#1a7bc1'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/docker.com.ico' },
  'stripe-mcp':        { initials: 'SP', colors: ['#635bff', '#5046e5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/stripe.com.ico' },
  'cloudflare-mcp':    { initials: 'CF', colors: ['#f38020', '#e07318'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/cloudflare.com.ico' },
  'gitlab-mcp':        { initials: 'GL', colors: ['#fc6d26', '#e24329'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/gitlab.com.ico' },
  'elasticsearch-mcp': { initials: 'ES', colors: ['#fed10a', '#f0c800'], text: '#1a1a2e', logoUrl: 'https://icons.duckduckgo.com/ip3/elastic.co.ico' },

  // === 新增 Agent 平台 ===
  'autogen':           { initials: 'AG', colors: ['#0078d4', '#005a9e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/microsoft.com.ico' },
  'zapier-ai':         { initials: 'ZP', colors: ['#ff4f00', '#e04600'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/zapier.com.ico' },
  'make':              { initials: 'Mk', colors: ['#6d00cc', '#5a00aa'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/make.com.ico' },
  'camel-ai':          { initials: 'CA', colors: ['#c4820e', '#a66d0c'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/camel-ai.org.ico' },
  'agentscope':        { initials: 'AS', colors: ['#0078d4', '#005a9e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/modelscope.cn.ico' },

  // === 新增多模态 ===
  'luma':              { initials: 'Lm', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/lumalabs.ai.ico' },
  'hailuo':            { initials: 'HL', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/hailuoai.video.ico' },
  'udio':              { initials: 'Ud', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/udio.com.ico' },

  // === 新增 LLM ===
  'cohere':            { initials: 'Co', colors: ['#39594d', '#2d4840'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/cohere.com.ico' },
  'amazon-nova':       { initials: 'AN', colors: ['#ff9900', '#e68a00'], text: '#1a1a2e', logoUrl: 'https://icons.duckduckgo.com/ip3/aws.amazon.com.ico' },
  'hunyuan':           { initials: 'HY', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://icons.duckduckgo.com/ip3/tencent.com.ico' },
}

export function getToolLogo(toolId) {
  return toolLogos[toolId] || null
}
