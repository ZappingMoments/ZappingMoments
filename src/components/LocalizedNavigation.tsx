import { useLocalizedPath } from '@/lib/i18n/utils'
import { LocalizedButton } from './LocalizedButton'
import Link from 'next/link'
import { Logomark, Logo } from './Logo'

interface LocalizedNavigationProps {
  invert?: boolean
  onLogoHover?: (hovered: boolean) => void
}

export function LocalizedNavigation({ invert = false, onLogoHover }: LocalizedNavigationProps) {
  const homePath = useLocalizedPath('/')
  const contactPath = useLocalizedPath('/contact')

  return (
    <div className="flex items-center justify-between">
      <Link
        href={homePath}
        aria-label="Home"
        onMouseEnter={() => onLogoHover?.(true)}
        onMouseLeave={() => onLogoHover?.(false)}
      >
        <Logomark
          className="h-24 sm:hidden"
          invert={invert}
        />
        <Logo
          className="hidden h-24 sm:block"
          invert={invert}
        />
      </Link>
      <div className="flex items-center gap-x-8">
        <LocalizedButton href="/contact" invert={invert}>
          Contact us
        </LocalizedButton>
      </div>
    </div>
  )
} 