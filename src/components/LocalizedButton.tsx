'use client';

import { Button } from '@/components/Button';
import { useLocalizedPath } from '@/lib/i18n/utils';
import { ComponentPropsWithoutRef } from 'react';

type LocalizedButtonProps = Omit<ComponentPropsWithoutRef<typeof Button>, 'href'> & {
  href: string;
};

export function LocalizedButton({ href, ...props }: LocalizedButtonProps) {
  const localizedHref = useLocalizedPath(href);
  
  return <Button href={localizedHref} {...props} />;
} 