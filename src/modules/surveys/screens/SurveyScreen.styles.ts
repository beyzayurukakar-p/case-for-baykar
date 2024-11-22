import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';

export const createStyles = ({ colors: _colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
    },
  });
