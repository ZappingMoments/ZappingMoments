'use client';

import { usePathname } from 'next/navigation';
import { defaultLanguage, isValidLanguage } from './i18n/config';
import { locales } from './i18n/locales';

// Helper function to get nested translation by key path
function getNestedTranslation(obj: any, path: string) {
  return path.split('.').reduce((prev, curr) => {
    return prev ? prev[curr] : undefined;
  }, obj);
}

// This is a simple implementation of the useTranslation hook
// In a real application, you would load translations from files or an API
export function useTranslation() {
  const pathname = usePathname();
  
  // Extract the language from the pathname
  const pathSegments = pathname.split('/');
  const lang = pathSegments[1] || defaultLanguage;
  
  // Validate the language
  const currentLang = isValidLanguage(lang) ? lang : defaultLanguage;
  
  // Get the translations for the current language
  const currentTranslations = locales[currentLang] || locales[defaultLanguage];
  
  // Translation function
  const t = (key: string, params?: Record<string, string>) => {
    // Get the translation for the key
    let translation = getNestedTranslation(currentTranslations, key);
    
    // If no translation found, try the default language
    if (translation === undefined && currentLang !== defaultLanguage) {
      translation = getNestedTranslation(locales[defaultLanguage], key);
    }
    
    // If still no translation found, return the key
    if (translation === undefined) {
      console.warn(`Translation key "${key}" not found for language "${currentLang}"`);
      return key;
    }
    
    // Replace parameters if provided
    if (params) {
      return Object.entries(params).reduce(
        (acc, [key, value]) => acc.replace(`{{${key}}}`, value),
        translation
      );
    }
    
    return translation;
  };
  
  return {
    t,
    currentLang,
  };
} 