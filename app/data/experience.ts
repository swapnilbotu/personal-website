export type Entry = {
  role: string
  org: string
  dates: string
  url?: string
  /** Optional short line of concrete impact. */
  detail?: string
}
export type Group = { heading: string; entries: Entry[] }

export const experience: Group[] = [
  {
    heading: 'industry',
    entries: [
      {
        role: 'machine learning engineering intern',
        org: 'home details',
        dates: 'august 2026 – present',
        detail: 'built python/sql pipelines for 2m+ property records; cut aggregation time by 80%.',
      },
      {
        role: 'ai evaluation & machine learning engineering intern',
        org: 'safe robots',
        dates: 'june 2026 – september 2026',
        detail: 'raised safety-standards table classifier accuracy from 60% to 94.6% and reduced inference latency by 74%.',
      },
      {
        role: 'swe developer (contractor)',
        org: 'hewlett packard enterprise',
        dates: 'october 2024 – july 2026',
        detail: 'built configuration tool for 1k+ product records and 240 configurable SKUs; automated 4 licensing workflows.'
      },
      {
        role: 'artificial intelligence engineering intern',
        org: 'reality ai lab',
        dates: 'april 2024 – may 2025',
        detail: 'built ai assistant, flashcard generator, and mcq quiz engine adopted by 200+ students and 50+ teachers; expanded file upload support from 3 to 16 file formats.',
      },
      {
        role: 'lead software development intern',
        org: 'learnhaus',
        dates: 'january 2025 – june 2025',
        detail: 'built a chrome extension that increased platform usage by 54%; developed keyword-based PDF scraper reducing search time by 45%.',
      },
      {
        role: 'data science researcher',
        org: 'diya research',
        dates: 'june 2024 – november 2024',
      },
    ],
  },
  {
    heading: 'teaching & leadership',
    entries: [
      {
        role: 'machine learning bootcamp teaching assistant',
        org: 'folsom lake college',
        dates: 'february 2025 – may 2025',
        detail: 'supported 60+ students and created project materials on core ml concepts.',
      },
      {
        role: 'president, coding & cybersecurity club',
        org: 'west park high school',
        dates: 'august 2023 – may 2026',
        detail: 'helped student teams ship projects and organized hackathons and workshops.',
      },
    ],
  },
]
