import fs from 'fs'
import path from 'path'
import { parseFrontmatter } from './frontmatter'

// The order here is the order recruiters see in the navigation.
export const SECTION_IDS = ['experience', 'projects', 'about', 'courses', 'hobbies'] as const
export type SectionId = (typeof SECTION_IDS)[number]

export const SECTION_HREFS: Record<SectionId, string> = {
  experience: '/experience',
  projects: '/projects',
  about: '/about',
  courses: '/courses',
  hobbies: '/hobbies',
}

export type Section = {
  id: SectionId
  href: string
  label: string
  before: string
  after: string
}

const LIST_MARKER = /^[ \t]*<!--\s*list\s*-->[ \t]*$/m

export function getSections(): Record<SectionId, Section> {
  const entries = SECTION_IDS.map((id) => {
    const raw = fs.readFileSync(path.join(process.cwd(), 'app', 'sections', `${id}.mdx`), 'utf-8')
    const { meta, body } = parseFrontmatter(raw)
    const parts = body.split(LIST_MARKER)
    return [id, {
      id,
      href: SECTION_HREFS[id],
      label: meta.label || id,
      before: parts[0].trim(),
      after: parts.slice(1).join('\n\n').trim(),
    }] as const
  })
  return Object.fromEntries(entries) as Record<SectionId, Section>
}
