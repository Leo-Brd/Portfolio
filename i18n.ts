// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importez vos traductions directement
import frTranslations from '@/public/locales/fr/common.json';
import enTranslations from '@/public/locales/en/common.json';

i18n
  .use(initReactI18next) // Initialise react-i18next
  .init({
    resources: {
      fr: { common: frTranslations }, // Traductions en français
      en: { common: enTranslations }, // Traductions en anglais
    },
    fallbackLng: 'fr', // Langue de secours
    debug: process.env.NODE_ENV === 'development', // Active le mode debug en développement
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les valeurs React
    },
  });

export default i18n;