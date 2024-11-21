import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    buttonText: {
      color: colors.primary,
    },
    buttonTextDanger: {
      color: colors.error,
    },
  });
