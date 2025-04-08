import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export function StylizedImage({
  className,
  grayscale = false,
  ...props
}: ImagePropsWithOptionalAlt & { grayscale?: boolean }) {
  return (
    <div
      className={clsx(
        className,
        'relative flex w-full rounded-[40px] overflow-hidden',
        grayscale && 'grayscale',
      )}
    >
      <Image
        alt=""
        className="w-full bg-neutral-100 object-cover"
        {...props}
      />
    </div>
  )
}
