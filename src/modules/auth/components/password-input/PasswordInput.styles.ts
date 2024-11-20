import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      marginBottom: dimensions.rowSpace,
    },
    forgotPasswordTouchable: {
      alignSelf: 'flex-end',
      paddingVertical: dimensions.measure(3),
    },
    forgotPasswordText: {
      color: colors.onSurface,
    },
  });
