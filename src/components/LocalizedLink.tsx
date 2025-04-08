'use client';

import Link from 'next/link';
import { useLocalizedPath } from '@/lib/i18n/utils';
import { ComponentPropsWithoutRef } from 'react';

type LocalizedLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  href: string;
};

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const localizedHref = useLocalizedPath(href);
  
  return <Link href={localizedHref} {...props} />;
} 