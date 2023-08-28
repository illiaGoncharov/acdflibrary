// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Подключите языковые файлы
import headerRU from './ru/headerRU.json';
import footerRU from './ru/footerRU.json';
import homeRU from './ru/homeRU.json';
import aboutRU from './ru/aboutRU.json';
import mediaRU from './ru/mediaRU.json';
import eventsRU from './ru/eventsRU.json';

import headerEN from './en/headerEN.json';
import footerEN from './en/footerEN.json';
import homeEN from './en/homeEN.json';
import aboutEN from './en/aboutEN.json';
import mediaEN from './en/mediaEN.json';
import eventsEN from './en/eventsEN.json';

import headerUZ from './uz/headerUZ.json';
import footerUZ from './uz/footerUZ.json';
import homeUZ from './uz/homeUZ.json';
import aboutUZ from './uz/aboutUZ.json';
import mediaUZ from './uz/mediaUZ.json';
import eventsUZ from './uz/eventsUZ.json';

const resources = {
  ru: { 
    header: headerRU,
    footer: footerRU,
    home: homeRU,
    about: aboutRU,
    media: mediaRU,
    events: eventsRU,
  },
  en: { 
    header: headerEN,
    footer: footerEN,
    home: homeEN,
    about: aboutEN,
    media: mediaEN,
    events: eventsEN,
  },
  uz: { 
    header: headerUZ,
    footer: footerUZ,
    home: homeUZ,
    about: aboutUZ,
    media: mediaUZ,
    events: eventsUZ
  },
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
