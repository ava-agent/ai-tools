/**
 * Easter egg definitions
 */
export const easterEggs = {
  konami: {
    id: 'konami',
    name: 'Konami Code',
    sequence: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    description: '你发现了隐藏的 Konami Code！',
  },
  search42: {
    id: 'search42',
    name: 'The Answer',
    trigger: 'search',
    value: '42',
    response: 'The answer to AI, the Universe, and Everything',
  },
  tripleClick: {
    id: 'tripleClick',
    name: 'Rainbow Mode',
    trigger: 'logo-triple-click',
    description: '彩虹模式已激活！',
    duration: 5000,
  },
}

/**
 * Console welcome message (ASCII art)
 */
export const consoleWelcome = `
%c
    ╔═══════════════════════════════════╗
    ║                                   ║
    ║   🤖 AI工具全书 — Dev Console      ║
    ║                                   ║
    ║   发现隐藏彩蛋了吗？               ║
    ║   试试 Konami Code 或搜索 "42"     ║
    ║                                   ║
    ╚═══════════════════════════════════╝
`

export const consoleStyle = 'color: #3b82f6; font-size: 14px; font-family: monospace;'
