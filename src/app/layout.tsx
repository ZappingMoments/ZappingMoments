import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Zapping Moments',
    default: 'Zapping Moments - Reconnecting people in a digital world',
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/icon.png' }
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
