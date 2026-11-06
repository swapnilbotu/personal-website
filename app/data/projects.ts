export type Project = {
  title: string
  href?: string
  category: string
  description: string
  links?: { label: string; href: string }[]
}

export const projects: Project[] = []
