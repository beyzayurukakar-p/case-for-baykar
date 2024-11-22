import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: dimensions.pageMargin,
      backgroundColor: colors.surfaceVariant2,
      borderRadius: dimensions.measure(10),
      paddingVertical: dimensions.measure(10),
      marginBottom: dimensions.rowSpace,
    },
    topContainer: {
      flexDirection: 'row',
      columnGap: dimensions.measure(10),
    },
    questionText: {
      flexGrow: 1,
      flexShrink: 1,
    },
    durationText: {
      fontWeight: '500',
      color: colors.primary,
    },
    divider: {
      marginVertical: dimensions.rowSpace,
      backgroundColor: colors.outline,
    },
    yourResponseText: {
      color: colors.outline,
    },
    responseValueText: {
      color: colors.onBackground,
      fontWeight: '600',
      textAlign: 'right',
    },
  });
