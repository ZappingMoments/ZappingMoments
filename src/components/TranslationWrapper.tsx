'use client';

import { useTranslation } from '@/lib/useTranslation';
import { ReactNode } from 'react';

type TranslationWrapperProps = {
  children: (props: { t: (key: string, params?: Record<string, string>) => string, currentLang: string }) => ReactNode;
};

export function TranslationWrapper({ children }: TranslationWrapperProps) {
  const { t, currentLang } = useTranslation();
  
  return <>{children({ t, currentLang })}</>;
} 