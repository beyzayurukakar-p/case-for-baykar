import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    mainButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: dimensions.rowSpace * 2,
    },
    mainButton: {
      height: dimensions.measure(40),
      borderRadius: 100,
      paddingHorizontal: dimensions.measure(40),
    },
    alternateContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: dimensions.measure(5),
    },
    alternateButtonTouchable: {
      paddingHorizontal: dimensions.measure(3),
    },
    alternateButtonText: {
      color: colors.primary,
    },
  });
