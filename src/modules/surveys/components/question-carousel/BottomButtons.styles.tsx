import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    buttonsContainer: {
      marginTop: dimensions.rowSpace,
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: dimensions.measure(20),
    },
    nextButton: {
      width: dimensions.measure(200),
    },
    button: {
      backgroundColor: colors.primary,
    },
    buttonDisabled: {
      backgroundColor: colors.primaryContainer,
    },
    labelDisabled: {
      color: colors.inversePrimary2,
    },
  });
