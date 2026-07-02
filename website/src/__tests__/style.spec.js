import { describe, expect, it } from 'vitest'
import { readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const stylePath = resolve(process.cwd(), 'src/style.css')
const pdfViewerPath = resolve(process.cwd(), 'src/components/PdfViewer.vue')

async function collectVueFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = resolve(dir, entry.name)
    if (entry.isDirectory()) return collectVueFiles(fullPath)
    return entry.isFile() && entry.name.endsWith('.vue') ? [fullPath] : []
  }))

  return files.flat()
}

describe('global styles', () => {
  it('defines shared interactive tokens used by utility classes', async () => {
    const css = await readFile(stylePath, 'utf8')

    expect(css).toMatch(/--color-primary:\s*#0a84ff;/)
  })

  it('keeps segmented navigation targets touch friendly', async () => {
    const css = await readFile(stylePath, 'utf8')
    const segmentBlock = css.match(/(?:^|\n)\s*\.segment\s*\{(?<body>[^}]+)\}/)?.groups?.body || ''

    expect(segmentBlock).toMatch(/min-height:\s*44px;/)
  })

  it('limits ordinary glass-card hover feedback to hover-capable devices', async () => {
    const css = await readFile(stylePath, 'utf8')

    expect(css).toMatch(/@media\s*\(hover:\s*hover\)\s*\{[\s\S]*?\.glass-card:hover/)
  })

  it('keeps the embedded PDF viewer height usable on short mobile screens', async () => {
    const source = await readFile(pdfViewerPath, 'utf8')

    expect(source).toMatch(/\.pdf-container\s*\{[\s\S]*?height:\s*60vh;[\s\S]*?min-height:\s*280px;/)
    expect(source).toMatch(/@media\s*\(min-width:\s*640px\)\s*\{[\s\S]*?\.pdf-container\s*\{[\s\S]*?height:\s*70vh;[\s\S]*?min-height:\s*400px;/)
  })

  it('does not use negative letter spacing in Vue surfaces', async () => {
    const files = await collectVueFiles(resolve(process.cwd(), 'src'))
    const violations = []

    for (const file of files) {
      const source = await readFile(file, 'utf8')
      if (/letter-spacing\s*:\s*-\d/.test(source) || /\btracking-tight\b/.test(source)) {
        violations.push(file.replace(process.cwd(), '').replace(/^[\\/]/, ''))
      }
    }

    expect(violations).toEqual([])
  })
})
