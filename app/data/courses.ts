export type Semester = { term: string; courses: string[] }

// Keep completed and current courses separate; do not present planned courses as completed.
export const courses: Semester[] = []
