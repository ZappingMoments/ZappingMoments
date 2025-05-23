'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { LocalizedLink } from '@/components/LocalizedLink'
import { LocalizedButton } from '@/components/LocalizedButton'
import { LocalizedNavigation } from '@/components/LocalizedNavigation'
import { navigation as translations } from '@/lib/i18n/translations/navigation'
import { defaultLanguage, isValidLanguage, type Language } from '@/lib/i18n/config'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null)

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false,
}: {
  panelId: string
  icon: React.ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: React.RefObject<HTMLButtonElement>
  invert?: boolean
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!
  const pathname = usePathname()
  const lang = pathname.split('/')[1] || defaultLanguage
  const currentLang = isValidLanguage(lang) ? lang : defaultLanguage
  const t = translations[currentLang as Language]

  return (
    <Container>
      <LocalizedNavigation 
        invert={invert} 
        onLogoHover={setLogoHovered}
      />
      <div className="flex items-center gap-x-8">
        <LanguageSwitcher />
        <LocalizedButton href="/contact" invert={invert}>
          {t.contactUs}
        </LocalizedButton>
        <button
          ref={toggleRef}
          type="button"
          onClick={onToggle}
          aria-expanded={expanded ? 'true' : 'false'}
          aria-controls={panelId}
          className={clsx(
            'group -m-2.5 rounded-full p-2.5 transition',
            invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
          )}
          aria-label="Toggle navigation"
        >
          <Icon
            className={clsx(
              'h-6 w-6',
              invert
                ? 'fill-white group-hover:fill-neutral-200'
                : 'fill-neutral-950 group-hover:fill-neutral-700',
            )}
          />
        </button>
      </div>
    </Container>
  )
}

function NavigationRow({ children, fullWidth = false }: { children: React.ReactNode, fullWidth?: boolean }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className={`grid ${fullWidth ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <LocalizedLink
      href={href}
      className={clsx(
        "group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16 flex justify-center",
        className
      )}
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-full bg-neutral-900 opacity-0 transition group-hover:opacity-100" />
    </LocalizedLink>
  )
}

function Navigation() {
  const pathname = usePathname()
  const lang = pathname.split('/')[1] || defaultLanguage
  const currentLang = isValidLanguage(lang) ? lang : defaultLanguage
  const t = translations[currentLang as Language]

  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/about">{t.about}</NavigationItem>
        <NavigationItem href="/process">{t.process}</NavigationItem>
      </NavigationRow>
      <NavigationRow fullWidth={true}>
        <NavigationItem href="/nuir">NUIR</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  let openRef = useRef<React.ElementRef<'button'>>(null)
  let closeRef = useRef<React.ElementRef<'button'>>(null)
  let navRef = useRef<React.ElementRef<'div'>>(null)
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14 pb-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true }),
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          // @ts-ignore (https://github.com/facebook/react/issues/17157)
          inert={expanded ? undefined : true}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pt-14 pb-28">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true }),
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Our office
                    </h2>
                    <Offices
                      invert
                      className="mt-6 grid grid-cols-1 gap-8"
                    />
                  </div>
                  <div className="sm:border-l sm:border-transparent sm:pl-16">
                    <h2 className="font-display text-base font-semibold text-white">
                      Email us
                    </h2>
                    <div className="mt-6 text-sm text-neutral-300">
                      <a href="mailto:zappingmoments@gmail.com" className="hover:text-neutral-200">
                        zappingmoments@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-48"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-16"
        >
          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
