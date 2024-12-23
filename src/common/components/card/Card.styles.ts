import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';
import dimensions from '../../styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.elevation.level2,
      borderRadius: dimensions.measure(7),
      marginBottom: dimensions.rowSpace,
      paddingHorizontal: dimensions.pageMargin,
      paddingVertical: dimensions.measure(10),
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
