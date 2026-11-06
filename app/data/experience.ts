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
export const experience: Group[] = []
