// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './src/locales/en.json'; // Загружаем файл с переводом для английского
import translationFR from './src/locales/fr.json'; // Загружаем файл с переводом для французского

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next) // Подключаем реакт-специфичные функции i18next
  .init({
    resources,
    lng: 'fr', // Устанавливаем язык по умолчанию
    fallbackLng: 'en', // Указываем язык, который будет использован, если перевод не найден
    interpolation: {
      escapeValue: false, // Не экранировать строки, потому что React это делает сам
    },
  });

export default i18n;