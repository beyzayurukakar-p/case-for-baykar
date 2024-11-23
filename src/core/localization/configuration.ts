import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import db from '../../../db.json';
import { registerTranslation, tr } from 'react-native-paper-dates';

/* Default locale is TR */

/* 
i18n configuration.
Using react-i18next to re-render whole app when locale is changed.
*/
i18next.use(initReactI18next).init({
  lng: 'tr',
  debug: true,
  resources: db.translations, // Using json-server's file for convenience
  compatibilityJSON: 'v3',
});

/* Configuring date picker component's locale */
registerTranslation('tr', tr);
