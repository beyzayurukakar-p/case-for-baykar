import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import db from '../../../db.json';

i18next.use(initReactI18next).init({
  lng: 'tr',
  debug: true,
  resources: db.translations,
  compatibilityJSON: 'v3',
});
