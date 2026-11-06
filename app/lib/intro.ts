import fs from 'fs'
import path from 'path'
import { parseFrontmatter } from './frontmatter'

type Intro = { image: string; imageAlt: string; content: string }
const DEFAULTS = { image: '/profile-placeholder.svg', imageAlt: 'profile photo placeholder' }

export function getIntro(): Intro {
  const raw = fs.readFileSync(path.join(process.cwd(), 'app', 'intro.mdx'), 'utf-8')
  const { meta, body } = parseFrontmatter(raw)
  return { image: meta.image || DEFAULTS.image, imageAlt: meta.imageAlt || DEFAULTS.imageAlt, content: body }
}
