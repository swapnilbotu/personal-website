import './global.css'
import 'katex/dist/katex.min.css'

export const metadata = { title: 'personal website' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><main>{children}</main></body></html>
}
