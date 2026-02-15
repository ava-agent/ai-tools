// Tool logo configuration
// Maps tool IDs to brand colors and display initials
// Used by ToolLogo.vue component

export const toolLogos = {
  // === AI IDE ===
  'cursor':          { initials: 'Cu', colors: ['#000000', '#1a1a2e'], text: '#00d4aa' },
  'trae':            { initials: 'Tr', colors: ['#1677ff', '#0958d9'], text: '#ffffff' },
  'windsurf':        { initials: 'Ws', colors: ['#0ea5e9', '#0284c7'], text: '#ffffff' },
  'qoder':           { initials: 'Qd', colors: ['#6366f1', '#4f46e5'], text: '#ffffff' },
  'zed':             { initials: 'Z',  colors: ['#084CFB', '#064AD0'], text: '#ffffff' },
  'replit':          { initials: 'R',  colors: ['#F26207', '#e65100'], text: '#ffffff' },
  'kiro':            { initials: 'Ki', colors: ['#FF9900', '#e68a00'], text: '#ffffff' },
  'codebuddy':       { initials: 'CB', colors: ['#1890ff', '#0070cc'], text: '#ffffff' },
  'antigravity':     { initials: 'AG', colors: ['#7c3aed', '#6d28d9'], text: '#ffffff' },
  'github-copilot':  { initials: 'GH', colors: ['#24292e', '#1b1f23'], text: '#ffffff' },
  'verdent':         { initials: 'Vd', colors: ['#10b981', '#059669'], text: '#ffffff' },
  'jetbrains-ai':    { initials: 'JB', colors: ['#fe315d', '#e0234e'], text: '#ffffff' },

  // === AI CLI ===
  'claude-code':     { initials: 'CC', colors: ['#d97706', '#b45309'], text: '#ffffff' },
  'gemini-cli':      { initials: 'Gc', colors: ['#4285f4', '#3367d6'], text: '#ffffff' },
  'qwen-cli':        { initials: 'Qc', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff' },
  'aider':           { initials: 'Ai', colors: ['#22c55e', '#16a34a'], text: '#ffffff' },
  'cline':           { initials: 'Cl', colors: ['#06b6d4', '#0891b2'], text: '#ffffff' },
  'continue':        { initials: 'Ct', colors: ['#f97316', '#ea580c'], text: '#ffffff' },
  'opencode':        { initials: 'OC', colors: ['#a855f7', '#9333ea'], text: '#ffffff' },
  'codex':           { initials: 'Cx', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff' },
  'goose':           { initials: 'Go', colors: ['#f59e0b', '#d97706'], text: '#ffffff' },
  'openhands':       { initials: 'OH', colors: ['#ef4444', '#dc2626'], text: '#ffffff' },

  // === AI Models ===
  'claude':          { initials: 'Cl', colors: ['#d97706', '#b45309'], text: '#ffffff' },
  'gpt':             { initials: 'GP', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff' },
  'gemini':          { initials: 'Ge', colors: ['#4285f4', '#3367d6'], text: '#ffffff' },
  'deepseek':        { initials: 'DS', colors: ['#0066ff', '#0052cc'], text: '#ffffff' },
  'qwen':            { initials: 'Qw', colors: ['#6236ff', '#4f2dd5'], text: '#ffffff' },
  'glm':             { initials: 'GL', colors: ['#1890ff', '#0070cc'], text: '#ffffff' },
  'kimi':            { initials: 'Ki', colors: ['#000000', '#1a1a2e'], text: '#36d7b7' },
  'minimax':         { initials: 'Mx', colors: ['#ff6b35', '#e65a2e'], text: '#ffffff' },
  'doubao':          { initials: 'Db', colors: ['#3b82f6', '#2563eb'], text: '#ffffff' },
  'grok':            { initials: 'Gk', colors: ['#000000', '#1a1a2e'], text: '#ffffff' },

  // === Multimodal ===
  'midjourney':      { initials: 'MJ', colors: ['#000000', '#1a1a2e'], text: '#ffffff' },
  'dalle':           { initials: 'DE', colors: ['#10a37f', '#0d8c6c'], text: '#ffffff' },
  'stable-diffusion':{ initials: 'SD', colors: ['#a855f7', '#9333ea'], text: '#ffffff' },
  'meitu-ai':        { initials: 'Mt', colors: ['#ff4081', '#e91e63'], text: '#ffffff' },
  'sora':            { initials: 'So', colors: ['#000000', '#1a1a2e'], text: '#10a37f' },
  'kling':           { initials: 'Kl', colors: ['#6366f1', '#4f46e5'], text: '#ffffff' },
  'jianying':        { initials: 'JY', colors: ['#ff4757', '#ff3838'], text: '#ffffff' },
  'meshy':           { initials: 'Me', colors: ['#8b5cf6', '#7c3aed'], text: '#ffffff' },
  'hunyuan3d':       { initials: 'HY', colors: ['#1890ff', '#0070cc'], text: '#ffffff' },

  // === Agent & Others ===
  'notebooklm':      { initials: 'NL', colors: ['#fbbc04', '#e6ab00'], text: '#1a1a2e' },
  'qinglizi':        { initials: 'QL', colors: ['#22d3ee', '#06b6d4'], text: '#ffffff' },
  'coze':            { initials: 'Cz', colors: ['#3b82f6', '#2563eb'], text: '#ffffff' },
  'dify':            { initials: 'Di', colors: ['#1677ff', '#0958d9'], text: '#ffffff' },
  'autogpt':         { initials: 'AT', colors: ['#000000', '#1a1a2e'], text: '#22c55e' },
  'langchain':       { initials: 'LC', colors: ['#1c3c3c', '#0f2e2e'], text: '#2dd4bf' },
  'nanobanana':      { initials: 'NB', colors: ['#f59e0b', '#d97706'], text: '#ffffff' },
  'perplexity':      { initials: 'Pp', colors: ['#20808d', '#1a6b76'], text: '#ffffff' },
}

export function getToolLogo(toolId) {
  return toolLogos[toolId] || null
}
