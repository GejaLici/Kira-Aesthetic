
import type { Locale } from '@/i18n-config';

// Define a more specific type for your dictionary
export type Dictionary = {
  header: {
    home: string;
    services: string;
    about: string;
    gallery: string;
    blog: string;
    faq: string;
    contact: string;
    bookConsultation: string;
  };
  [key: string]: any; // Allow other properties
};


const dictionaries: { [key in Locale]: () => Promise<Dictionary> } = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
  sq: () => import('@/dictionaries/sq.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  const loader = dictionaries[locale] || dictionaries.en;
  return loader();
};
