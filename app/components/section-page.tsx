import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomMDX } from 'app/components/mdx'
import { KeepScroll, rememberScroll } from 'app/components/keep-scroll'
import { TabRow } from 'app/components/tab-row'
import { inline } from 'app/lib/inline'
import { getHobbies } from 'app/lib/hobbies'
import { getIntro } from 'app/lib/intro'
import { getSections, type Section, type SectionId } from 'app/lib/sections'
import { courses } from 'app/data/courses'
import { experience, type Group } from 'app/data/experience'
import { projects } from 'app/data/projects'

function CourseList() {
  return (
    <>
      {courses.map((semester) => (
        <React.Fragment key={semester.term}>
          <h2>{semester.term}</h2>
          <ul>
            {semester.courses.map((course, i) => <li key={i}>{inline(course)}</li>)}
          </ul>
        </React.Fragment>
      ))}
    </>
  )
}

function HobbyList() {
  return (
    <ul>
      {getHobbies().map((hobby) => (
        <li key={hobby.slug}>
          <Link href={`/hobbies/${hobby.slug}`}>{hobby.title}</Link>
        </li>
      ))}
    </ul>
  )
}

// Understated entries with an optional impact line for each role.
function GroupedEntries({ groups }: { groups: Group[] }) {
  return (
    <>
      {groups.map((group) => (
        <React.Fragment key={group.heading}>
          <h2>{group.heading}</h2>
          <ul className="entries">
            {group.entries.map((entry, i) => (
              <li key={i}>
                {entry.role},{' '}
                {entry.url ? (
                  <a href={entry.url} target="_blank" rel="noopener noreferrer">{entry.org}</a>
                ) : entry.org}{' '}
                <span className="meta">({entry.dates})</span>
                {entry.detail && <div className="entry-detail">{entry.detail}</div>}
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </>
  )
}

function ProjectList() {
  return (
    <>
      <h2>selected projects</h2>
      <ul className="entries">
        {projects.map((project) => (
          <li key={project.title}>
            {project.href ? (
              <a href={project.href} target="_blank" rel="noopener noreferrer">{project.title}</a>
            ) : project.title}{' '}
            <span className="meta">({project.category})</span>
            <div className="entry-detail">
              {project.description}
              {project.links?.length ? (
                <span className="project-links">
                  {' '}·{' '}
                  {project.links.map((link, i) => (
                    <React.Fragment key={link.label}>
                      {i > 0 && ' / '}
                      <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>
                    </React.Fragment>
                  ))}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

const CONTENT: Record<SectionId, React.ReactNode> = {
  experience: <GroupedEntries groups={experience} />,
  projects: <ProjectList />,
  about: null,
  courses: <CourseList />,
  hobbies: <HobbyList />,
}

function Tabs({ sections, current }: { sections: Section[]; current: SectionId }) {
  return (
    <TabRow>
      <nav aria-label="sections">
        {sections.map((section, i) => (
          <React.Fragment key={section.id}>
            {i > 0 && <span className="sep" aria-hidden="true">|</span>}
            <Link
              href={section.href}
              scroll={false}
              onClick={rememberScroll}
              aria-current={section.id === current ? 'page' : undefined}
            >
              {section.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </TabRow>
  )
}

export function SectionPage({ current }: { current: SectionId }) {
  const intro = getIntro()
  const sections = getSections()
  const section = sections[current]

  return (
    <>
      <KeepScroll />
      <div className="intro">
        <div className="text"><CustomMDX source={intro.content} /></div>
        <Image src={intro.image} alt={intro.imageAlt} width={220} height={220} priority unoptimized />
      </div>

      <Tabs sections={Object.values(sections)} current={current} />

      <section id={section.id}>
        {section.before && <CustomMDX source={section.before} />}
        {CONTENT[current]}
        {section.after && <CustomMDX source={section.after} />}
      </section>
    </>
  )
}
