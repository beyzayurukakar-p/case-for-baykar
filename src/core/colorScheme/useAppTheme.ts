import { useAppSelector } from '../store';
import { combinedDarkTheme, combinedLightTheme } from './combinedThemes';
import { selectColorScheme } from './slice';

/**
 * @returns The theme object which also includes colors
 */
export const useAppTheme = () => {
  const colorScheme = useAppSelector(selectColorScheme);

  if (colorScheme === 'dark') {
    return combinedDarkTheme;
  }

  // default
  return combinedLightTheme;
};
