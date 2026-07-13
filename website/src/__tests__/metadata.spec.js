import { describe, expect, it } from 'vitest'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createHash } from 'node:crypto'

const readProjectFile = (path) => readFile(resolve(process.cwd(), path), 'utf8')

describe('production metadata', () => {
  it('ships a real 1200 by 630 PNG social preview', async () => {
    const image = await readFile(resolve(process.cwd(), 'public/og-image.png'))

    expect([...image.subarray(0, 8)]).toEqual([137, 80, 78, 71, 13, 10, 26, 10])
    expect(image.readUInt32BE(16)).toBe(1200)
    expect(image.readUInt32BE(20)).toBe(630)
  })

  it('uses the production domain for canonical and social metadata', async () => {
    const html = await readProjectFile('index.html')

    expect(html).toContain('<link rel="canonical" href="https://aitools.rxcloud.group/" />')
    expect(html).toContain('<meta property="og:url" content="https://aitools.rxcloud.group/" />')
    expect(html).toContain(
      '<meta property="og:image" content="https://aitools.rxcloud.group/og-image.png" />'
    )
    expect(html).toContain('<meta property="twitter:url" content="https://aitools.rxcloud.group/" />')
    expect(html).not.toContain('https://ava-agent.github.io/ai-tools')
    expect(html).not.toMatch(/10\+份调研文档|125\+款|CN\/Global双版本/)
    expect(html).toContain('125 款 AI 工具')
  })

  it('publishes valid website structured data without a nonexistent search route', async () => {
    const html = await readProjectFile('index.html')
    const jsonLd = html.match(
      /<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/
    )?.[1]

    expect(jsonLd).toBeTruthy()
    expect(JSON.parse(jsonLd)).toMatchObject({
      '@type': 'WebSite',
      url: 'https://aitools.rxcloud.group/',
      inLanguage: 'zh-CN'
    })
    expect(jsonLd).not.toContain('SearchAction')
  })

  it('keeps PWA and crawler entry points aligned with history routes', async () => {
    const manifest = JSON.parse(await readProjectFile('public/manifest.json'))
    const robots = await readProjectFile('public/robots.txt')
    const sitemap = await readProjectFile('public/sitemap.xml')
    const vercel = JSON.parse(await readProjectFile('vercel.json'))

    expect(manifest.shortcuts).toContainEqual(
      expect.objectContaining({ name: '工具对比', url: './comparison' })
    )
    expect(robots).toContain('Sitemap: https://aitools.rxcloud.group/sitemap.xml')
    expect(sitemap).toContain('<loc>https://aitools.rxcloud.group/</loc>')
    expect(sitemap).toContain('<loc>https://aitools.rxcloud.group/comparison</loc>')
    expect(sitemap).toContain('<loc>https://aitools.rxcloud.group/tools/cursor</loc>')
    expect(sitemap.match(/<url>/g)?.length).toBe(133)
    expect(vercel.rewrites[0].source).toContain('images/')
    expect(vercel.rewrites[0].source).toContain('pdfs/')
    expect(vercel.rewrites[0].source).toContain('videos/')
    expect(vercel.rewrites[0].source).toContain('og-image\\.png')
    expect(vercel.rewrites[0].source).toContain('sitemap\\.xml')
    const csp = vercel.headers
      .flatMap((entry) => entry.headers)
      .find((header) => header.key === 'Content-Security-Policy')?.value
    expect(csp).toContain("script-src 'self'")
    expect(csp).toContain("object-src 'none'")
    expect(csp).not.toContain("'unsafe-eval'")
    expect(csp).not.toContain("script-src 'self' 'unsafe-inline'")
    const jsonLdBlock = (await readProjectFile('index.html')).match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
    )?.[1]
    const normalizedJsonLd = jsonLdBlock.replace(/\r\n/g, '\n')
    const jsonLdHash = createHash('sha256').update(normalizedJsonLd).digest('base64')
    expect(csp).toContain(`'sha256-${jsonLdHash}'`)
    expect(csp).toContain("style-src-attr 'unsafe-inline'")
  })
})
