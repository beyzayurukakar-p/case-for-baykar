import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from './languages';
import { TextKeys } from './textKeyType';

export const useLocalization = () => {
  const localization = useTranslation();

  const changeLanguage = useCallback(
    (newLang: keyof typeof LANGUAGES) => {
      localization.i18n.changeLanguage(newLang);
    },
    [localization.i18n]
  );

  const t = useCallback(
    (key: TextKeys) => {
      return localization.t(key);
    },
    [localization]
  );

  return {
    t,
    changeLanguage,
  };
};
