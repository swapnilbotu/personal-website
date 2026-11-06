export type Project = {
  title: string
  href?: string
  category: string
  description: string
  links?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    title: 'berkeley meal planner',
    href: 'https://github.com/swapnilbotu/berkeley-meal-planner',
    category: 'automation / product',
    description: 'automatically checks roughly 300 berkeley dining dishes each morning and saves personalized lunch and dinner recommendations to google tasks.',
    links: [{ label: 'code', href: 'https://github.com/swapnilbotu/berkeley-meal-planner' }],
  },
  {
    title: 'cadswarm',
    href: 'https://cadswarm.design',
    category: 'ai / engineering',
    description: 'collaborative, ai-powered cad tooling built at cal hacks 13.0. contributed structural optimization that reduced material usage by 12.89%.',
    links: [{ label: 'code', href: 'https://github.com/swapnilbotu/cadswarm' }, { label: 'site', href: 'https://cadswarm.design' }],
  },
  {
    title: 'careermatch',
    href: 'https://github.com/swapnilbotu/CareerMatch',
    category: 'ai / product',
    description: 'a career exploration app with a personalized quiz and gemini-powered assistant, used by 1,500+ students in the sacramento area.',
    links: [{ label: 'code', href: 'https://github.com/swapnilbotu/CareerMatch' }],
  },
  {
    title: 'microfinance loan reliability',
    category: 'machine learning / research',
    description: 'modeled borrower reliability across 2.6m+ loan records using decision trees, random forests, and imbalance-aware training.',
  },
]
