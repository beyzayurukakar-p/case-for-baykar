import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import { MD3DarkTheme, MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import merge from 'deepmerge';
import { customColors } from './customColors';

/*
This code is almost totally copied from the documentation of React Native Paper.
It synchronizes the colors of React Native Paper and React Navigation.
Some custom colors are also added. 
*/

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
  materialLight: { ...MD3LightTheme, colors: customColors.light },
  materialDark: { ...MD3DarkTheme, colors: customColors.dark },
});

export const combinedLightTheme = merge(
  { ...MD3LightTheme, colors: customColors.light },
  {
    ...LightTheme,
    fonts: NavigationDefaultTheme.fonts,
  }
);
export const combinedDarkTheme = merge(
  { ...MD3DarkTheme, colors: customColors.dark },
  {
    ...DarkTheme,
    fonts: NavigationDarkTheme.fonts,
  }
);
