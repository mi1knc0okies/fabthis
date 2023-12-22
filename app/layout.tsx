import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  weight: ['400'],
  subsets: ['latin'],
  style: 'normal',
})

export const metadata: Metadata = {
  title: "FabThis - Tampa Bay's Premier automotive fabrication shop",
  description: "FABTHIS is Tampa Bay’s premier automotive fabrication shop. Coming Soon!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
