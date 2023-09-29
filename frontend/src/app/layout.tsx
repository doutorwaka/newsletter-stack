import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

const roboto = Roboto({ weight: '300', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DoutorWaka :: Newsletter',
  description: 'DoutorWaka newsletter application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={twMerge(roboto.className, "bg-zinc-800", "text-zinc-600")}>{children}</body>
    </html>
  )
}
