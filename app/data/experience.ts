export type Entry = {
  role: string
  org: string
  dates: string
  url?: string
  /** Optional short line of concrete impact. */
  detail?: string
}
export type Group = { heading: string; entries: Entry[] }

// Dates and accomplishments are taken from Swapnil's November 2026 résumé.
// Review them before making your site public, particularly the organization names.
export const experience: Group[] = [
  {
    heading: 'industry',
    entries: [
      {
        role: 'machine learning engineering intern',
        org: 'home details',
        dates: 'aug 2026 – present',
        detail: 'built python/sql pipelines for 2m+ property records; cut aggregation time by 80%.',
      },
      {
        role: 'ai evaluation & machine learning engineering intern',
        org: 'safe robots',
        dates: 'jun – sep 2026',
        detail: 'raised table classifier accuracy from 60% to 94.6% and reduced inference latency by 74%.',
      },
      {
        role: 'lead software development intern',
        org: 'learnhaus',
        dates: 'jan – jun 2025',
        detail: 'built a chrome extension that increased platform usage by 54%.',
      },
    ],
  },
  {
    heading: 'research & ai',
    entries: [
      {
        role: 'artificial intelligence engineering intern',
        org: 'reality ai lab',
        dates: 'apr 2024 – may 2025',
        detail: 'expanded an edtech platform from 3 to 16 supported file formats.',
      },
    ],
  },
  {
    heading: 'teaching & leadership',
    entries: [
      {
        role: 'machine learning bootcamp teaching assistant',
        org: 'folsom lake college',
        dates: 'feb – may 2025',
        detail: 'supported 60+ students and created project materials on core ml concepts.',
      },
      {
        role: 'president, coding & cybersecurity club',
        org: 'west park high school',
        dates: 'aug 2023 – may 2026',
        detail: 'helped student teams ship projects and organized hackathons and workshops.',
      },
    ],
  },
]
