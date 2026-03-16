// Tool logo configuration
// Maps tool IDs to brand colors and display initials
// Used by ToolLogo.vue component
// logoUrl: 官方logo图片地址（优先使用本地 /logos/xxx.svg 或官方CDN）

export const toolLogos = {
  // === AI IDE ===
  'cursor':          { initials: 'Cu', colors: ['#000000', '#1a1a2e'], text: '#00d4aa', logoUrl: 'https://cursor.sh/favicon.svg' },
  'trae':            { initials: 'Tr', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://www.trae.ai/favicon.ico' },
  'windsurf':        { initials: 'Ws', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://codeium.com/favicon.ico' },
  'qoder':           { initials: 'Qd', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://img.alicdn.com/tfs/TB1Ly5oS3HqK1RjSZFPXXcwapXa-32-32.ico' },
  'zed':             { initials: 'Z',  colors: ['#084CFB', '#064AD0'], text: '#ffffff', logoUrl: 'https://zed.dev/favicon.svg' },
  'replit':          { initials: 'R',  colors: ['#F26207', '#e65100'], text: '#ffffff', logoUrl: 'https://replit.com/public/images/favicon.ico' },
  'kiro':            { initials: 'Ki', colors: ['#FF9900', '#e68a00'], text: '#ffffff', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  'codebuddy':       { initials: 'CB', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://cloud.tencent.com/favicon.ico' },
  'antigravity':     { initials: 'AG', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://www.google.com/favicon.ico' },
  'github-copilot':  { initials: 'GH', colors: ['#24292e', '#1b1f23'], text: '#ffffff', logoUrl: 'https://github.githubassets.com/favicons/favicon.svg' },
  'verdent':         { initials: 'Vd', colors: ['#10b981', '#059669'], text: '#ffffff', logoUrl: 'https://verdent.dev/favicon.ico' },
  'jetbrains-ai':    { initials: 'JB', colors: ['#fe315d', '#e0234e'], text: '#ffffff', logoUrl: 'https://www.jetbrains.com/favicon.ico' },

  // === AI CLI ===
  'claude-code':     { initials: 'CC', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.anthropic.com/favicon.svg' },
  'gemini-cli':      { initials: 'Gc', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png' },
  'qwen-cli':        { initials: 'Qc', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff', logoUrl: 'https://qwenlm.github.io/favicon.ico' },
  'aider':           { initials: 'Ai', colors: ['#22c55e', '#16a34a'], text: '#ffffff', logoUrl: 'https://aider.chat/favicon.ico' },
  'cline':           { initials: 'Cl', colors: ['#06b6d4', '#0891b2'], text: '#ffffff', logoUrl: 'https://cline.bot/favicon.ico' },
  'continue':        { initials: 'Ct', colors: ['#f97316', '#ea580c'], text: '#ffffff', logoUrl: 'https://docs.continue.dev/favicon.ico' },
  'opencode':        { initials: 'OC', colors: ['#a855f7', '#9333ea'], text: '#ffffff' },
  'codex':           { initials: 'Cx', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://openai.com/favicon.ico' },
  'goose':           { initials: 'Go', colors: ['#f59e0b', '#d97706'], text: '#ffffff', logoUrl: 'https://block.github.io/goose/favicon.ico' },
  'openhands':       { initials: 'OH', colors: ['#ef4444', '#dc2626'], text: '#ffffff', logoUrl: 'https://img.shields.io/badge/OpenHands-red' },

  // === AI Models ===
  'claude':          { initials: 'Cl', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.anthropic.com/favicon.svg' },
  'gpt':             { initials: 'GP', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://openai.com/favicon.ico' },
  'gemini':          { initials: 'Ge', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png' },
  'deepseek':        { initials: 'DS', colors: ['#0066ff', '#0052cc'], text: '#ffffff', logoUrl: 'https://www.deepseek.com/favicon.ico' },
  'glm':             { initials: 'GL', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://www.zhipuai.cn/favicon.ico' },
  'kimi':            { initials: 'Ki', colors: ['#000000', '#1a1a2e'], text: '#36d7b7', logoUrl: 'https://www.moonshot.cn/favicon.ico' },
  'minimax':         { initials: 'Mx', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.minimaxi.com/favicon.ico' },
  'doubao':          { initials: 'Db', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://www.doubao.com/favicon.ico' },

  // === Multimodal ===
  'midjourney':      { initials: 'MJ', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.midjourney.com/favicon.ico' },
  'dalle':           { initials: 'DE', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://openai.com/favicon.ico' },
  'stable-diffusion':{ initials: 'SD', colors: ['#a855f7', '#9333ea'], text: '#ffffff', logoUrl: 'https://stability.ai/favicon.ico' },
  'meitu-ai':        { initials: 'Mt', colors: ['#ff4081', '#e91e63'], text: '#ffffff', logoUrl: 'https://www.meitu.com/favicon.ico' },
  'sora':            { initials: 'So', colors: ['#000000', '#1a1a2e'], text: '#10a37f', logoUrl: 'https://openai.com/favicon.ico' },
  'kling':           { initials: 'Kl', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://klingai.com/favicon.ico' },
  'jianying':        { initials: 'JY', colors: ['#ff4757', '#ff3838'], text: '#ffffff', logoUrl: 'https://www.capcut.com/favicon.ico' },
  'hunyuan3d':       { initials: 'HY', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://hunyuan.tencent.com/favicon.ico' },

  // === Agent & Others ===
  'notebooklm':      { initials: 'NL', colors: ['#fbbc04', '#e6ab00'], text: '#1a1a2e', logoUrl: 'https://notebooklm.google/favicon.ico' },
  'qinglizi':        { initials: 'QL', colors: ['#22d3ee', '#06b6d4'], text: '#ffffff', logoUrl: 'https://qinglizi.com/favicon.ico' },
  'coze':            { initials: 'Cz', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://www.coze.com/favicon.ico' },
  'dify':            { initials: 'Di', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://docs.dify.ai/favicon.ico' },
  'autogpt':         { initials: 'AT', colors: ['#000000', '#1a1a2e'], text: '#22c55e', logoUrl: 'https://agpt.co/favicon.ico' },
  'langchain':       { initials: 'LC', colors: ['#1c3c3c', '#0f2e2e'], text: '#2dd4bf', logoUrl: 'https://python.langchain.com/favicon.ico' },
  'nanobanana':      { initials: 'NB', colors: ['#f59e0b', '#d97706'], text: '#ffffff', logoUrl: 'https://www.google.com/favicon.ico' },
  'perplexity':      { initials: 'Pp', colors: ['#20808d', '#1a6b76'], text: '#ffffff', logoUrl: 'https://www.perplexity.ai/favicon.ico' },

  // === AI 应用构建器 (新增) ===
  'devin':           { initials: 'Dv', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.cognition.ai/favicon.ico' },
  'bolt-new':        { initials: 'Bn', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://bolt.new/favicon.ico' },
  'v0':              { initials: 'V0', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://v0.dev/favicon.ico' },
  'lovable':         { initials: 'Lv', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://lovable.dev/favicon.ico' },
  'tabnine':         { initials: 'Tn', colors: ['#00b4d8', '#0077b6'], text: '#ffffff', logoUrl: 'https://www.tabnine.com/favicon.ico' },
  'warp':            { initials: 'Wp', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://www.warp.dev/favicon.ico' },

  // === 更多 AI 模型 ===
  'llama':           { initials: 'Ll', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://ai.meta.com/favicon.ico' },
  'mistral':         { initials: 'Mi', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://mistral.ai/favicon.ico' },
  'yi':              { initials: 'Yi', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://www.01.ai/favicon.ico' },
  'ernie':           { initials: 'Er', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://yiyan.baidu.com/favicon.ico' },
  'qwen':            { initials: 'Qw', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff', logoUrl: 'https://qwenlm.github.io/favicon.ico' },
  'grok':            { initials: 'Gk', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://x.ai/favicon.ico' },

  // === Agent 平台 ===
  'manus':           { initials: 'Mn', colors: ['#10b981', '#059669'], text: '#ffffff', logoUrl: 'https://manus.im/favicon.ico' },
  'crewai':          { initials: 'Cr', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.crewai.com/favicon.ico' },
  'n8n':             { initials: 'n8', colors: ['#ff6d5a', '#ff4d4d'], text: '#ffffff', logoUrl: 'https://n8n.io/favicon.ico' },

  // === Agent SDK ===
  'openai-agents-sdk': { initials: 'OA', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://openai.com/favicon.ico' },
  'claude-agent-sdk':  { initials: 'CA', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.anthropic.com/favicon.svg' },
  'google-adk':        { initials: 'GA', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png' },

  // === MCP 工具 ===
  'context7':          { initials: 'C7', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://context7.com/favicon.ico' },
  'playwright-mcp':    { initials: 'PW', colors: ['#2ead4c', '#1e8a3a'], text: '#ffffff', logoUrl: 'https://playwright.dev/favicon.ico' },
  'firecrawl-mcp':     { initials: 'FC', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.firecrawl.dev/favicon.ico' },
  'github-mcp':        { initials: 'GM', colors: ['#24292e', '#1b1f23'], text: '#ffffff', logoUrl: 'https://github.githubassets.com/favicons/favicon.svg' },
  'supabase-mcp':      { initials: 'SM', colors: ['#3ecf8e', '#2ecc71'], text: '#ffffff', logoUrl: 'https://supabase.com/favicon.ico' },
  'figma-mcp':         { initials: 'FM', colors: ['#f24e1e', '#e24b1f'], text: '#ffffff', logoUrl: 'https://www.figma.com/favicon.ico' },
  'vercel-mcp':        { initials: 'VM', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://vercel.com/favicon.ico' },
  'notion-mcp':        { initials: 'NM', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.notion.so/favicon.ico' },
  'postman-mcp':       { initials: 'PM', colors: ['#ff6c37', '#e65c2e'], text: '#ffffff', logoUrl: 'https://www.postman.com/favicon.ico' },
  'brave-search-mcp':  { initials: 'BS', colors: ['#fb542b', '#e04a24'], text: '#ffffff', logoUrl: 'https://brave.com/favicon.ico' },

  // === Skills (新添加) ===
  'frontend-design-skill': { initials: 'FD', colors: ['#3b82f6', '#2563eb'], text: '#ffffff' },
  'webapp-testing-skill':  { initials: 'WT', colors: ['#10b981', '#059669'], text: '#ffffff' },
  'mcp-builder-skill':     { initials: 'MB', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff' },
  'skill-creator-skill':   { initials: 'SC', colors: ['#f59e0b', '#d97706'], text: '#ffffff' },

  // === 新增工具 (Crush等) ===
  'crush':           { initials: 'Cr', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://charm.sh/favicon.ico' },

  // === 多媒体工具 (补充) ===
  'suno':            { initials: 'Sn', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://suno.com/favicon.ico' },
  'elevenlabs':      { initials: 'EL', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://elevenlabs.io/favicon.ico' },
  'flux':            { initials: 'Fl', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://blackforestlabs.ai/favicon.ico' },
  'runway':          { initials: 'Rw', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://runwayml.com/favicon.ico' },
  'pika':            { initials: 'Pk', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://pika.art/favicon.ico' },
  'ideogram':        { initials: 'Id', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://ideogram.ai/favicon.ico' },
  'jimeng':          { initials: 'Jm', colors: ['#ff4757', '#ff3838'], text: '#ffffff', logoUrl: 'https://jimeng.jianying.com/favicon.ico' },
  'meshy':           { initials: 'Me', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff', logoUrl: 'https://www.meshy.ai/favicon.ico' },

  // === MCP 工具 (补充) ===
  'sequential-thinking-mcp': { initials: 'ST', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.anthropic.com/favicon.svg' },
  'antv-chart-mcp':          { initials: 'AC', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://antv.antgroup.com/favicon.ico' },
  'openmemory-mcp':          { initials: 'OM', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://mem0.ai/favicon.ico' },
  'atlassian-mcp':           { initials: 'AM', colors: ['#0052cc', '#0747a6'], text: '#ffffff', logoUrl: 'https://www.atlassian.com/favicon.ico' },
}

export function getToolLogo(toolId) {
  return toolLogos[toolId] || null
}
