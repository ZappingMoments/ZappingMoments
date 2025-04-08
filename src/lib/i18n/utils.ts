'use client';

import { usePathname } from 'next/navigation';
import { defaultLanguage, isValidLanguage } from './config';

/**
 * Returns a path with the current language prefix
 * @param path The path to add the language prefix to
 * @returns The path with the language prefix
 */
export function useLocalizedPath(path: string = '') {
  const pathname = usePathname();
  
  // Extract the language from the pathname
  const pathSegments = pathname.split('/');
  const lang = pathSegments[1] || defaultLanguage;
  
  // Validate the language
  const currentLang = isValidLanguage(lang) ? lang : defaultLanguage;
  
  // If the path is empty, just return the language prefix
  if (!path) {
    return `/${currentLang}`;
  }
  
  // Ensure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // If the path already has a language prefix, replace it with the current language
  if (normalizedPath.startsWith('/en/') || normalizedPath.startsWith('/pt/')) {
    return `/${currentLang}${normalizedPath.substring(3)}`;
  }
  
  // Return the path with the language prefix
  return `/${currentLang}${normalizedPath}`;
} 