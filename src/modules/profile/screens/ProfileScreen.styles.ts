import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';
import dimensions from '../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: colors.background,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: dimensions.pageMargin,
      paddingVertical: dimensions.rowSpace,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerTitle: {
      marginLeft: dimensions.measure(5),
      color: colors.primary,
      fontWeight: '500',
    },
    subtitle: {
      color: colors.outlineVariant2,
      marginTop: dimensions.rowSpace,
      marginBottom: dimensions.rowSpace * 0.5,
    },
  });
