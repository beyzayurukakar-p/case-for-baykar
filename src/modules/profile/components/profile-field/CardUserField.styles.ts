import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    contentLeftContainer: {
      flexGrow: 1,
      flexShrink: 1,
    },
    labelText: {
      color: colors.outline,
    },
    valueText: {},
    icon: {
      margin: 0,
    },
    buttonText: {
      color: colors.primary,
    },
    buttonTextDanger: {
      color: colors.error,
    },
  });
