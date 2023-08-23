// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Подключите языковые файлы
import translationRU from './ru/translation.json';
import translationEN from './en/translation.json';
import translationUZ from './uz/translation.json';

const resources = {
  ru: { translation: translationRU },
  en: { translation: translationEN },
  uz: { translation: translationUZ },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru', // Здесь задайте язык по умолчанию
  fallbackLng: 'en', // Язык по умолчанию в случае, если запрошенного нет в поддерживаемых
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
