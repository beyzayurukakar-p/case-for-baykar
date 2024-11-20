import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from './languages';
import { TextKeys } from './textKeyType';
import { en, registerTranslation, tr } from 'react-native-paper-dates';
import { tr as dateTr, enUS as dateEn } from 'date-fns/locale';

export const useLocalization = () => {
  const localization = useTranslation();

  const changeLanguage = useCallback(
    (newLang: keyof typeof LANGUAGES) => {
      localization.i18n.changeLanguage(newLang);
      registerTranslation(newLang, newLang === 'tr' ? tr : en);
    },
    [localization.i18n]
  );

  const t = useCallback(
    (key: TextKeys) => {
      return localization.t(key);
    },
    [localization]
  );

  const dateLocale = localization.i18n.language === 'tr' ? dateTr : dateEn;

  return {
    t,
    dateLocale,
    currentLanguage: localization.i18n.language,
    changeLanguage,
  };
};
