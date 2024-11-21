import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';

export const createStyles = ({ colors: _colors }: CreateStylesParams) =>
  StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
