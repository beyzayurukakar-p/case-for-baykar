import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: dimensions.pageMargin,
    },
    messageContainer: {
      flexGrow: 1,
      flexShrink: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: dimensions.pageMargin,
    },
    messageTopText: {
      marginBottom: dimensions.measure(10),
      fontWeight: '500',
      color: colors.primary,
    },
    messageBottomText: {
      textAlign: 'center',
      fontWeight: '300',
    },
  });
