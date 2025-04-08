'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languages } from '@/lib/i18n/config';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Extract the current language and path
  const pathSegments = pathname.split('/');
  const currentLang = pathSegments[1] || 'en';
  
  // Get the path without the language prefix
  const pathWithoutLang = pathSegments.slice(2).join('/') || '';
  
  // Create the path for each language
  const getPathForLang = (lang: string) => {
    return pathWithoutLang ? `/${lang}/${pathWithoutLang}` : `/${lang}`;
  };

  return (
    <div className="fixed top-4 right-4 flex gap-2 z-50">
      {Object.entries(languages).map(([lang, label]) => (
        <Link
          key={lang}
          href={getPathForLang(lang)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
            ${currentLang === lang
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {label}
        </Link>
      ))}
    </div>
  );
} 