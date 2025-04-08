'use client'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { LocalizedLink } from '@/components/LocalizedLink'
import { usePathname } from 'next/navigation'
import { navigation as translations } from '@/lib/i18n/translations/navigation'
import { defaultLanguage, isValidLanguage, type Language } from '@/lib/i18n/config'

type NavigationSection = {
  titleKey: keyof typeof translations.en
  links: Array<{
    titleKey: keyof typeof translations.en
    href: string
  }>
}

const navigation: NavigationSection[] = [
  {
    titleKey: 'company',
    links: [
      { titleKey: 'about', href: '/about' },
      { titleKey: 'process', href: '/process' },
      { titleKey: 'nuir', href: '/nuir' },
      { titleKey: 'contactUs', href: '/contact' },
    ],
  },
]

function Navigation() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] || defaultLanguage
  const currentLang = isValidLanguage(lang) ? lang : defaultLanguage
  const t = translations[currentLang as Language]

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {t[section.titleKey]}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <LocalizedLink
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {t[link.titleKey]}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] || defaultLanguage
  const currentLang = isValidLanguage(lang) ? lang : defaultLanguage
  const t = translations[currentLang as Language].newsletter

  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        {t.title}
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        {t.description}
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder={t.placeholder}
          autoComplete="email"
          aria-label={t.placeholder}
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label={t.submit}
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <LocalizedLink href="/" aria-label="Home">
            <Logo className="h-24" />
          </LocalizedLink>
          <p className="text-sm text-neutral-700">
            © Zapping Moments lda. 2025
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
