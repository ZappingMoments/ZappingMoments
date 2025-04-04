import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logoImage from '@/images/ZM.png'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
}) {
  return (
    <div className="h-24" {...props}>
      <Image 
        src={logoImage} 
        alt="Zapping Moments" 
        height={96}
        width={96}
        className={clsx(
          'h-24 w-auto transition-all duration-300',
          invert ? 'filter invert' : ''
        )}
      />
    </div>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <div
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Image 
        src={logoImage} 
        alt="Zapping Moments" 
        height={96}
        width={390}
        className={clsx(
          'h-24 w-auto transition-all duration-300',
          invert ? 'filter invert' : ''
        )}
      />
    </div>
  )
}
