import fs from 'fs'
import path from 'path'
import { parseFrontmatter } from './frontmatter'

export type Hobby = { slug: string; title: string; content: string }
const ORDER = ['soccer', 'fitness', 'hackathons']

export function getHobbies(): Hobby[] {
  const dir = path.join(process.cwd(), 'app', 'content', 'hobbies')
  return fs.readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')
    .map((file) => {
      const { meta, body } = parseFrontmatter(fs.readFileSync(path.join(dir, file), 'utf-8'))
      const slug = path.basename(file, '.mdx')
      return { slug, title: meta.title || slug, content: body }
    })
    .sort((a, b) => ORDER.indexOf(a.slug) - ORDER.indexOf(b.slug))
}
