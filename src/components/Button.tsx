import Link from 'next/link'
import clsx from 'clsx'
import { LocalizedLink } from '@/components/LocalizedLink'

type ButtonProps = {
  invert?: boolean
  localized?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export function Button({
  invert = false,
  localized = false,
  className,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800',
  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  if (localized) {
    return (
      <LocalizedLink className={className} href={props.href as string}>
        {inner}
      </LocalizedLink>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
