export const languages = {
  en: 'English',
  pt: 'Português'
} as const;

export const defaultLanguage = 'en';

export type Language = keyof typeof languages;

export function isValidLanguage(lang: string): lang is Language {
  return lang in languages;
} 