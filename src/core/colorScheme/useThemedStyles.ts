import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { MD3Theme } from 'react-native-paper';
import { useAppTheme } from './useAppTheme';
import { useMemo } from 'react';
import { customColors } from './customColors';

export type CreateStylesParams = Omit<MD3Theme, 'colors'> & {
  colors: (typeof customColors)['light'];
};
type NamedStyles = {
  [P: string]: ViewStyle | TextStyle | ImageStyle;
};

/**
 * Hook that makes it possible to dynamically update the app's appearance when theme is changed.
 * @param createStyles A function that takes colors and returns named styles
 * @example const createStyles = ({colors}: CreateStylesParams) => StyleSheet.create({ ... })
 * @returns The calculated styles object
 */
export const useThemedStyles = <T extends NamedStyles>(
  createStyles: (params: CreateStylesParams) => T
): T => {
  const theme = useAppTheme();

  const styles = useMemo(() => {
    return createStyles(theme);
  }, [createStyles, theme]);

  return styles;
};

// export type StyleCreatorFn = (colors: MD3Theme['colors']) => {
//   [P: string]: ViewStyle | TextStyle | ImageStyle;
// };

// const getTypedStyleCreatorFn = <CS extends StyleCreatorFn>(createStyle: CS) => {
//   return createStyle;
// };

// const createStyles = getTypedStyleCreatorFn((colors) => ({
//   container: {
//     backgroundColor: colors.primary,
//   },
// }));
