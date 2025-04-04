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
      { url: '/ZM.png?v=2' },
      { url: '/icon.png?v=2' }
    ],
    shortcut: '/ZM.png?v=2',
    apple: '/ZM.png?v=2',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <head>
        <link rel="icon" href="/ZM.png?v=3" />
        <link rel="shortcut icon" href="/ZM.png?v=3" />
        <link rel="apple-touch-icon" href="/ZM.png?v=3" />
      </head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
