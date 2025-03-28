import type { Metadata } from 'next'
import './styles/globals.css'
import './styles/theme.css'
import { Header } from '@/layout'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <head></head> */}
        <Header />

        <main>{children}</main>
      </body>
    </html>
  )
}
