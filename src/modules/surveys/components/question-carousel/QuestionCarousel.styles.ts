import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {},
    surveyCompletedContainer: {
      backgroundColor: colors.background,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
