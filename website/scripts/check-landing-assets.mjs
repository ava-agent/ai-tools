import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const directory = resolve(process.cwd(), 'public/images/landing')
const expectedAssets = new Map([
  ['cat-agent.webp', 384],
  ['cat-cli.webp', 384],
  ['cat-ide.webp', 384],
  ['cat-llm.webp', 384],
  ['cat-mcp.webp', 384],
  ['cat-multimodal.webp', 384],
  ['cat-skill.webp', 384],
  ['entry-browse.webp', 640],
  ['entry-compare.webp', 640],
  ['entry-workflow.webp', 640],
  ['rec-coding.webp', 384],
  ['rec-design.webp', 384],
  ['rec-free.webp', 384],
  ['rec-refactor.webp', 384],
])

function readUint24LE(buffer, offset) {
  return buffer[offset] | (buffer[offset + 1] << 8) | (buffer[offset + 2] << 16)
}

function readWebpDimensions(buffer) {
  if (buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WEBP') {
    throw new Error('not a valid WebP file')
  }

  let offset = 12
  while (offset + 8 <= buffer.length) {
    const chunkType = buffer.toString('ascii', offset, offset + 4)
    const chunkLength = buffer.readUInt32LE(offset + 4)
    const dataOffset = offset + 8

    if (chunkType === 'VP8X' && dataOffset + 10 <= buffer.length) {
      return {
        width: readUint24LE(buffer, dataOffset + 4) + 1,
        height: readUint24LE(buffer, dataOffset + 7) + 1,
      }
    }

    if (chunkType === 'VP8 ' && dataOffset + 10 <= buffer.length) {
      const signature = buffer.subarray(dataOffset + 3, dataOffset + 6)
      if (signature.equals(Buffer.from([0x9d, 0x01, 0x2a]))) {
        return {
          width: buffer.readUInt16LE(dataOffset + 6) & 0x3fff,
          height: buffer.readUInt16LE(dataOffset + 8) & 0x3fff,
        }
      }
    }

    if (chunkType === 'VP8L' && dataOffset + 5 <= buffer.length && buffer[dataOffset] === 0x2f) {
      const bits = buffer.readUInt32LE(dataOffset + 1)
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      }
    }

    offset = dataOffset + chunkLength + (chunkLength % 2)
  }

  throw new Error('WebP dimensions could not be read')
}

const files = (await readdir(directory)).sort()
const expectedFiles = [...expectedAssets.keys()].sort()

if (JSON.stringify(files) !== JSON.stringify(expectedFiles)) {
  throw new Error(`landing asset set differs from the expected list: ${files.join(', ')}`)
}

let totalBytes = 0
for (const [name, expectedSize] of expectedAssets) {
  const path = resolve(directory, name)
  const [buffer, file] = await Promise.all([readFile(path), stat(path)])
  const { width, height } = readWebpDimensions(buffer)

  if (width !== expectedSize || height !== expectedSize) {
    throw new Error(`${name} must be ${expectedSize}x${expectedSize}; received ${width}x${height}`)
  }
  if (file.size > 48 * 1024) {
    throw new Error(`${name} exceeds the 48 KiB per-file budget`)
  }
  totalBytes += file.size
}

if (totalBytes > 256 * 1024) {
  throw new Error(`landing artwork exceeds the 256 KiB total budget: ${totalBytes} bytes`)
}

console.log(`Landing assets verified: ${expectedAssets.size} WebP files, ${totalBytes} bytes total.`)
