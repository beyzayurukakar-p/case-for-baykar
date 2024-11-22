import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: dimensions.pageMargin,
      backgroundColor: colors.background,
    },
    messageText: {
      color: colors.primary,
      textAlign: 'center',
    },
  });
