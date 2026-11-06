# Swapnil Botu's personal website

A personal portfolio covering experience, projects, about, courses, and hobbies.
Experience is the homepage at `/` and is also available at `/experience`.

## Features

- Minimalist layout with Georgia typography, an ivory background, and muted-blue accents.
- Persistent selected-tab highlighting and scroll-preserving navigation.
- Responsive profile layout and arrow controls for navigation on narrow screens.
- MDX content, individual hobby pages, résumé download, and professional links.
- Page metadata, an SVG favicon, sitemap, robots.txt, and Vercel analytics.

## Technology

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS/PostCSS, and
next-mdx-remote. KaTeX renders math and sugar-high handles syntax highlighting.
Dependencies are pinned by `pnpm-lock.yaml`; the pnpm version is specified in
`package.json`.

## Local development

Use Node.js 22 (see `.nvmrc`) and pnpm 10.26.1.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:3000. To test the production build:

```sh
pnpm build
pnpm start
```

## Editing content

| Content | Location |
| --- | --- |
| Introduction, profile image, and professional links | `app/intro.mdx` |
| Experience | `app/data/experience.ts` |
| Projects | `app/data/projects.ts` |
| About and section introductions | `app/sections/` |
| Courses | `app/data/courses.ts` |
| Hobby articles | `app/content/hobbies/` |
| Résumé | `public/resume.pdf` |
| Colors and layout | `app/global.css` |
| Metadata and footer links | `app/layout.tsx` |

The profile currently uses `public/profile-placeholder.svg`.

## Deployment

1. Create an empty, independent GitHub repository named
   `swapnilbotu/personal-website` if it does not already exist.
2. Push the local `main` branch when ready, then import that repository into Vercel.
3. Select the Next.js preset, Node.js 22, `pnpm install --frozen-lockfile` for
   installation, and `pnpm build` for the build command.
4. Set `NEXT_PUBLIC_SITE_URL` to the actual public HTTPS URL, then deploy or redeploy.
   `.env.example` shows the variable format; do not use its placeholder as a live URL.
5. Check all five sections, the résumé link, `/sitemap.xml`, and `/robots.txt`.

`app/lib/site.ts` uses `NEXT_PUBLIC_SITE_URL`, then Vercel's production URL,
then localhost for local development. Set the public URL before the production
build so generated metadata and sitemap links use the correct domain.

Third-party dependencies retain their respective license notices.
