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
        url: 'https://www.homedetailservices.com/',
        detail: 'deployed XGBoost lead-scoring for 1.1M+ homes; doubling booking rates and yielding $15K additional revenue.',
      },
      {
        role: 'ai evaluation & machine learning engineering intern',
        org: 'safe robots',
        dates: 'june 2026 – september 2026',
        url: 'https://www.saferobots.co/',
        detail: 'raised safety-standards table classifier accuracy from 60% to 94.6% and reduced inference latency by 74%.',
      },
      {
        role: 'swe developer (contractor)',
        org: 'hewlett packard enterprise',
        dates: 'october 2024 – july 2026',
        url: 'https://www.hpe.com/',
        detail: 'developed configuration tool for 1k+ product records and 240 configurable SKUs; automated 4 licensing workflows.'
      },
      {
        role: 'artificial intelligence engineering intern',
        org: 'reality ai lab',
        dates: 'april 2024 – may 2025',
        detail: 'built ai assistant, flashcard generator, and mcq quiz engine adopted by 200+ students and 50+ teachers nationwide.',
      },
      {
        role: 'lead software development intern',
        org: 'learnhaus',
        dates: 'january 2025 – june 2025',
        url: 'https://learnhaus.ai/',
        detail: 'led 10 interns; shipped chrome extension boosting platform usage 54%; built PDF scraper (45% faster searches).',
      },
      {
        role: 'machine learning researcher',
        org: 'vanderbilt university',
        dates: 'june 2024 – august 2026',
        url: 'https://www.vanderbilt.edu/',
        detail: '[first-authored research](https://www.vanderbilt.edu/youngscientistjournal/article/identifying-reliable-clients-for-microlending-a-data-driven-approach/) predicting microloan borrower reliability without credit history (96% recall, 86% precision).',
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
        detail: 'designed project-based curriculum for 60+ students; created targeted learning materials which improved scores 20%.',
      },
      {
        role: 'president, coding & cybersecurity club',
        org: 'west park high school',
        dates: 'august 2023 – may 2026',
        detail: 'led and guided members through 7 coding projects alongside organizing 4 hackathons and 3 networking events.',
      },
    ],
  },
]
