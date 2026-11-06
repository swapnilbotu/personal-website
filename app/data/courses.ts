export type Semester = { term: string; courses: string[] }

// Keep completed and current courses separate; do not present planned courses as completed.
export const courses: Semester[] = [
  {
    term: 'fall 2026 (in progress)',
    courses: [
      'demog 110: introduction to population analysis',
      'dutch 171ac: the dutch golden age',
      'cs 47a: structure & interpretation of computer programs (bridge)',
      'cs 47b: data structures (bridge)',
      'data 198: real world data science decal',
    ],
  },
  {
    term: 'summer 2026 (transfer coursework)',
    courses: [
      'data 8 equivalent: foundations of data science (folsom lake college)',
      'cs 61a equivalent: structure & interpretation of computer programs (diablo valley college)',
      'linear algebra (west valley college)',
    ],
  },
  {
    term: 'earlier selected coursework',
    courses: [
      'machine learning & natural language processing (folsom lake college)',
      'data structures and embedded programming (sierra college)',
      'calculus, statistics, and discrete mathematics',
    ],
  },
]
