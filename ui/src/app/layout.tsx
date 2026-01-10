import type { ReactNode } from 'react'
import './normalize.css'

type Props = {
  children: ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
