/**
 * Generate shareable card images using Canvas API
 */
export function useShareCard() {
  /**
   * Create a quiz result share card
   */
  function generateQuizCard({ score, total, level, title }) {
    const canvas = document.createElement('canvas')
    canvas.width = 600
    canvas.height = 340
    const ctx = canvas.getContext('2d')

    // Background
    ctx.fillStyle = '#0f172a'
    ctx.fillRect(0, 0, 600, 340)

    // Gradient accent
    const grad = ctx.createLinearGradient(0, 0, 600, 0)
    grad.addColorStop(0, '#3b82f6')
    grad.addColorStop(1, '#8b5cf6')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 600, 4)

    // Title
    ctx.fillStyle = '#94a3b8'
    ctx.font = '14px sans-serif'
    ctx.fillText('AI 工具竞猜成绩', 40, 50)

    // Score
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 64px sans-serif'
    ctx.fillText(`${score} / ${total}`, 40, 130)

    // Level
    ctx.fillStyle = '#3b82f6'
    ctx.font = '20px sans-serif'
    ctx.fillText(`Lv.${level} ${title}`, 40, 170)

    // Percentage bar
    const pct = score / total
    ctx.fillStyle = '#1e293b'
    roundedRect(ctx, 40, 200, 520, 20, 10)
    ctx.fill()

    const barGrad = ctx.createLinearGradient(40, 0, 40 + 520 * pct, 0)
    barGrad.addColorStop(0, '#3b82f6')
    barGrad.addColorStop(1, '#8b5cf6')
    ctx.fillStyle = barGrad
    roundedRect(ctx, 40, 200, 520 * pct, 20, 10)
    ctx.fill()

    // Footer
    ctx.fillStyle = '#475569'
    ctx.font = '12px sans-serif'
    ctx.fillText('AI工具全书 — 持续核验的实战选型指南', 40, 300)

    return canvas
  }

  /**
   * Create a personality result share card
   */
  function generatePersonalityCard({ name, description, tool }) {
    const canvas = document.createElement('canvas')
    canvas.width = 600
    canvas.height = 340
    const ctx = canvas.getContext('2d')

    // Background
    ctx.fillStyle = '#0f172a'
    ctx.fillRect(0, 0, 600, 340)

    // Gradient accent
    const grad = ctx.createLinearGradient(0, 0, 600, 0)
    grad.addColorStop(0, '#8b5cf6')
    grad.addColorStop(1, '#ec4899')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 600, 4)

    // Label
    ctx.fillStyle = '#94a3b8'
    ctx.font = '14px sans-serif'
    ctx.fillText('我的 AI 工具人格', 40, 50)

    // Personality name
    ctx.fillStyle = '#ffffff'
    ctx.font = 'bold 40px sans-serif'
    ctx.fillText(name, 40, 100)

    // Description (word wrap)
    ctx.fillStyle = '#cbd5e1'
    ctx.font = '16px sans-serif'
    wrapText(ctx, description, 40, 140, 520, 24)

    // Matching tool
    ctx.fillStyle = '#8b5cf6'
    ctx.font = 'bold 18px sans-serif'
    ctx.fillText(`最匹配工具: ${tool}`, 40, 260)

    // Footer
    ctx.fillStyle = '#475569'
    ctx.font = '12px sans-serif'
    ctx.fillText('AI工具全书 — 持续核验的实战选型指南', 40, 300)

    return canvas
  }

  /**
   * Download canvas as PNG
   */
  function downloadCard(canvas, filename = 'ai-tools-card.png') {
    const link = document.createElement('a')
    link.download = filename
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  /**
   * Copy canvas to clipboard
   */
  async function copyCardToClipboard(canvas) {
    try {
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'))
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ])
      return true
    } catch {
      return false
    }
  }

  return {
    generateQuizCard,
    generatePersonalityCard,
    downloadCard,
    copyCardToClipboard,
  }
}

// ── Helpers ──

function roundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.quadraticCurveTo(x + w, y, x + w, y + r)
  ctx.lineTo(x + w, y + h - r)
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
  ctx.lineTo(x + r, y + h)
  ctx.quadraticCurveTo(x, y + h, x, y + h - r)
  ctx.lineTo(x, y + r)
  ctx.quadraticCurveTo(x, y, x + r, y)
  ctx.closePath()
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('')
  let line = ''
  let lineY = y

  for (const char of chars) {
    const testLine = line + char
    const metrics = ctx.measureText(testLine)
    if (metrics.width > maxWidth && line.length > 0) {
      ctx.fillText(line, x, lineY)
      line = char
      lineY += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line, x, lineY)
}
