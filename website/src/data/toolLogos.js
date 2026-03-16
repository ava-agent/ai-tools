// Tool logo configuration
// Maps tool IDs to brand colors and display initials
// Used by ToolLogo.vue component
// logoUrl: 使用 Google Favicon 服务获取网站图标 (稳定可靠)

export const toolLogos = {
  // === AI IDE ===
  'cursor':          { initials: 'Cu', colors: ['#000000', '#1a1a2e'], text: '#00d4aa', logoUrl: 'https://www.google.com/s2/favicons?domain=cursor.com&sz=128' },
  'trae':            { initials: 'Tr', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=trae.ai&sz=128' },
  'windsurf':        { initials: 'Ws', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=codeium.com&sz=128' },
  'qoder':           { initials: 'Qd', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=qoder.com&sz=128' },
  'zed':             { initials: 'Z',  colors: ['#084CFB', '#064AD0'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=zed.dev&sz=128' },
  'replit':          { initials: 'R',  colors: ['#F26207', '#e65100'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=replit.com&sz=128' },
  'kiro':            { initials: 'Ki', colors: ['#FF9900', '#e68a00'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128' },
  'codebuddy':       { initials: 'CB', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=cloud.tencent.com&sz=128' },
  'antigravity':     { initials: 'AG', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=antigravity.co&sz=128' },
  'github-copilot':  { initials: 'GH', colors: ['#24292e', '#1b1f23'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128' },
  'verdent':         { initials: 'Vd', colors: ['#10b981', '#059669'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=verdent.dev&sz=128' },
  'jetbrains-ai':    { initials: 'JB', colors: ['#fe315d', '#e0234e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=jetbrains.com&sz=128' },

  // === AI CLI ===
  'claude-code':     { initials: 'CC', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=128' },
  'gemini-cli':      { initials: 'Gc', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },
  'qwen-cli':        { initials: 'Qc', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=qwenlm.github.io&sz=128' },
  'aider':           { initials: 'Ai', colors: ['#22c55e', '#16a34a'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=aider.chat&sz=128' },
  'cline':           { initials: 'Cl', colors: ['#06b6d4', '#0891b2'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=cline.bot&sz=128' },
  'continue':        { initials: 'Ct', colors: ['#f97316', '#ea580c'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=continue.dev&sz=128' },
  'opencode':        { initials: 'OC', colors: ['#a855f7', '#9333ea'], text: '#ffffff' },
  'codex':           { initials: 'Cx', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
  'goose':           { initials: 'Go', colors: ['#f59e0b', '#d97706'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=block.github.io&sz=128' },
  'openhands':       { initials: 'OH', colors: ['#ef4444', '#dc2626'], text: '#ffffff' },

  // === AI Models ===
  'claude':          { initials: 'Cl', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=128' },
  'gpt':             { initials: 'GP', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
  'gemini':          { initials: 'Ge', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },
  'deepseek':        { initials: 'DS', colors: ['#0066ff', '#0052cc'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=deepseek.com&sz=128' },
  'glm':             { initials: 'GL', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=zhipuai.cn&sz=128' },
  'kimi':            { initials: 'Ki', colors: ['#000000', '#1a1a2e'], text: '#36d7b7', logoUrl: 'https://www.google.com/s2/favicons?domain=moonshot.cn&sz=128' },
  'minimax':         { initials: 'Mx', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=minimaxi.com&sz=128' },
  'doubao':          { initials: 'Db', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=doubao.com&sz=128' },

  // === Multimodal ===
  'midjourney':      { initials: 'MJ', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=midjourney.com&sz=128' },
  'dalle':           { initials: 'DE', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
  'stable-diffusion':{ initials: 'SD', colors: ['#a855f7', '#9333ea'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=stability.ai&sz=128' },
  'meitu-ai':        { initials: 'Mt', colors: ['#ff4081', '#e91e63'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=meitu.com&sz=128' },
  'sora':            { initials: 'So', colors: ['#000000', '#1a1a2e'], text: '#10a37f', logoUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
  'kling':           { initials: 'Kl', colors: ['#6366f1', '#4f46e5'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=klingai.com&sz=128' },
  'jianying':        { initials: 'JY', colors: ['#ff4757', '#ff3838'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=capcut.com&sz=128' },
  'hunyuan3d':       { initials: 'HY', colors: ['#1890ff', '#0070cc'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=tencent.com&sz=128' },

  // === Agent & Others ===
  'notebooklm':      { initials: 'NL', colors: ['#fbbc04', '#e6ab00'], text: '#1a1a2e', logoUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },
  'qinglizi':        { initials: 'QL', colors: ['#22d3ee', '#06b6d4'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=qinglizi.com&sz=128' },
  'coze':            { initials: 'Cz', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=coze.com&sz=128' },
  'dify':            { initials: 'Di', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=dify.ai&sz=128' },
  'autogpt':         { initials: 'AT', colors: ['#000000', '#1a1a2e'], text: '#22c55e', logoUrl: 'https://www.google.com/s2/favicons?domain=agpt.co&sz=128' },
  'langchain':       { initials: 'LC', colors: ['#1c3c3c', '#0f2e2e'], text: '#2dd4bf', logoUrl: 'https://www.google.com/s2/favicons?domain=langchain.com&sz=128' },
  'nanobanana':      { initials: 'NB', colors: ['#f59e0b', '#d97706'], text: '#ffffff' },
  'perplexity':      { initials: 'Pp', colors: ['#20808d', '#1a6b76'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=perplexity.ai&sz=128' },

  // === AI 应用构建器 (新增) ===
  'devin':           { initials: 'Dv', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=cognition.ai&sz=128' },
  'bolt-new':        { initials: 'Bn', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=bolt.new&sz=128' },
  'v0':              { initials: 'V0', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=v0.dev&sz=128' },
  'lovable':         { initials: 'Lv', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=lovable.dev&sz=128' },
  'tabnine':         { initials: 'Tn', colors: ['#00b4d8', '#0077b6'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=tabnine.com&sz=128' },
  'warp':            { initials: 'Wp', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=warp.dev&sz=128' },

  // === 更多 AI 模型 ===
  'llama':           { initials: 'Ll', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=meta.ai&sz=128' },
  'mistral':         { initials: 'Mi', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=mistral.ai&sz=128' },
  'yi':              { initials: 'Yi', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=01.ai&sz=128' },
  'ernie':           { initials: 'Er', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=yiyan.baidu.com&sz=128' },
  'qwen':            { initials: 'Qw', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=qwenlm.github.io&sz=128' },
  'grok':            { initials: 'Gk', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=x.ai&sz=128' },

  // === Agent 平台 ===
  'manus':           { initials: 'Mn', colors: ['#10b981', '#059669'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=manus.im&sz=128' },
  'crewai':          { initials: 'Cr', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=crewai.com&sz=128' },
  'n8n':             { initials: 'n8', colors: ['#ff6d5a', '#ff4d4d'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=n8n.io&sz=128' },

  // === Agent SDK ===
  'openai-agents-sdk': { initials: 'OA', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=openai.com&sz=128' },
  'claude-agent-sdk':  { initials: 'CA', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=128' },
  'google-adk':        { initials: 'GA', colors: ['#4285f4', '#3367d6'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=google.com&sz=128' },

  // === MCP 工具 ===
  'context7':          { initials: 'C7', colors: ['#3b82f6', '#2563eb'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=context7.com&sz=128' },
  'playwright-mcp':    { initials: 'PW', colors: ['#2ead4c', '#1e8a3a'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=playwright.dev&sz=128' },
  'firecrawl-mcp':     { initials: 'FC', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=firecrawl.dev&sz=128' },
  'github-mcp':        { initials: 'GM', colors: ['#24292e', '#1b1f23'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128' },
  'supabase-mcp':      { initials: 'SM', colors: ['#3ecf8e', '#2ecc71'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=128' },
  'figma-mcp':         { initials: 'FM', colors: ['#f24e1e', '#e24b1f'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=figma.com&sz=128' },
  'vercel-mcp':        { initials: 'VM', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=128' },
  'notion-mcp':        { initials: 'NM', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=notion.so&sz=128' },
  'postman-mcp':       { initials: 'PM', colors: ['#ff6c37', '#e65c2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=postman.com&sz=128' },
  'brave-search-mcp':  { initials: 'BS', colors: ['#fb542b', '#e04a24'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=brave.com&sz=128' },

  // === Skills (新添加) ===
  'frontend-design-skill': { initials: 'FD', colors: ['#3b82f6', '#2563eb'], text: '#ffffff' },
  'webapp-testing-skill':  { initials: 'WT', colors: ['#10b981', '#059669'], text: '#ffffff' },
  'mcp-builder-skill':     { initials: 'MB', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff' },
  'skill-creator-skill':   { initials: 'SC', colors: ['#f59e0b', '#d97706'], text: '#ffffff' },

  // === 新增工具 (Crush等) ===
  'crush':           { initials: 'Cr', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff' },

  // === 多媒体工具 (补充) ===
  'suno':            { initials: 'Sn', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=suno.com&sz=128' },
  'elevenlabs':      { initials: 'EL', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128' },
  'flux':            { initials: 'Fl', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=blackforestlabs.ai&sz=128' },
  'runway':          { initials: 'Rw', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=runwayml.com&sz=128' },
  'pika':            { initials: 'Pk', colors: ['#ff6b9d', '#e91e63'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=pika.art&sz=128' },
  'ideogram':        { initials: 'Id', colors: ['#000000', '#1a1a2e'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128' },
  'jimeng':          { initials: 'Jm', colors: ['#ff4757', '#ff3838'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=jimeng.jianying.com&sz=128' },
  'meshy':           { initials: 'Me', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=meshy.ai&sz=128' },

  // === MCP 工具 (补充) ===
  'sequential-thinking-mcp': { initials: 'ST', colors: ['#d97706', '#b45309'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=anthropic.com&sz=128' },
  'antv-chart-mcp':          { initials: 'AC', colors: ['#1677ff', '#0958d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=antv.antgroup.com&sz=128' },
  'openmemory-mcp':          { initials: 'OM', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=mem0.ai&sz=128' },
  'atlassian-mcp':           { initials: 'AM', colors: ['#0052cc', '#0747a6'], text: '#ffffff', logoUrl: 'https://www.google.com/s2/favicons?domain=atlassian.com&sz=128' },
}

export function getToolLogo(toolId) {
  return toolLogos[toolId] || null
}
