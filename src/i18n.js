import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json'; // Путь к вашему английскому JSON
import ruTranslation from './locales/ru/translation.json'; // Путь к вашему русскому JSON
import kaTranslation from './locales/ka/translation.json'; // Путь к вашему грузинскому JSON

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
      ka: { translation: kaTranslation },
    },
    lng: 'ru', // Язык по умолчанию
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false, // React уже безопасно для XSS
    },
  });

export default i18n;
