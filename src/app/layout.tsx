import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Beacon',
  description: 'Welcome to The Beacon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
