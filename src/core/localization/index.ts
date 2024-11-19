import { useCallback } from 'react';

export const useLocale = () => {
  const translate = useCallback((textId: string) => {
    return textId;
  }, []);

  return translate;
};
