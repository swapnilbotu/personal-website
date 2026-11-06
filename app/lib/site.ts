// Set NEXT_PUBLIC_SITE_URL in Vercel once you know your actual deployment URL.
// During local development, relative links work normally.
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
export const baseUrl = rawUrl.replace(/\/$/, '')
