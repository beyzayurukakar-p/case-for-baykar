import { Dimensions, Platform } from 'react-native';

const window = Dimensions.get('window');
const width = Math.min(window?.width, window?.height);
const height = Math.max(window?.width, window?.height);
const designWidth = 360;

const measure = (designSize: number): number => {
  return (designSize / designWidth) * width;
};
const percentOfWidth = (percentage: number): number => {
  return (percentage / 100) * width;
};
const percentOfHeight = (percentage: number): number => {
  return (percentage / 100) * height;
};
const elevation = (e: number | string): number => {
  return measure(Number(Platform.Version) >= 28 ? Number(e) : Number(e) / 3);
};
const isScreenRatioSmall = height / width < 1.75;

export default {
  measure,
  percentOfWidth,
  percentOfHeight,
  width,
  height,
  pageMarginLarge: measure(30),
  pageMargin: measure(15),
  elevation,
  isScreenRatioSmall,
};
