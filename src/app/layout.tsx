import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cody Roberts',
  description: 'Full Stack Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <div></div>
      </body>
    </html>
  )
}
