import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from './languages';

export const useLocalization = () => {
  const localization = useTranslation();

  const changeLanguage = useCallback(
    (newLang: keyof typeof LANGUAGES) => {
      localization.i18n.changeLanguage(newLang);
    },
    [localization.i18n]
  );

  return {
    t: localization.t,
    changeLanguage,
  };
};
