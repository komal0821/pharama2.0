// i18n.js
import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import hiTranslation from './hi.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation,
      },
    },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for React
    },
  });

export default i18n;
