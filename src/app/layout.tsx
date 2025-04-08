import { type Metadata } from 'next'
import { redirect } from 'next/navigation'
import { RootLayout } from '@/components/RootLayout'
import { defaultLanguage } from '@/lib/i18n/config'
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
  // Redirect root path to default language
  if (typeof window !== 'undefined' && window.location.pathname === '/') {
    redirect(`/${defaultLanguage}`);
  }

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
