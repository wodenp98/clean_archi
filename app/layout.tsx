import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Christmas Celebration Planner',
  description: 'Plan your Christmas celebration with Secret Santa and meal planning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  )
}

