import { getHobbies } from 'app/lib/hobbies'
import { baseUrl } from 'app/lib/site'

export default function sitemap() {
  const paths = ['', '/experience', '/projects', '/about', '/courses', '/hobbies']
  const routes = paths.map((route) => ({ url: `${baseUrl}${route}` }))
  const hobbies = getHobbies().map((hobby) => ({ url: `${baseUrl}/hobbies/${hobby.slug}` }))
  return [...routes, ...hobbies]
}
