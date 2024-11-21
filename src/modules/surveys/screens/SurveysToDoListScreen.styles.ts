import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';
import dimensions from '../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    list: {
      flex: 1,
      paddingHorizontal: dimensions.pageMargin,
      paddingTop: dimensions.pageMargin,
    },
    sectionTitleText: {
      color: colors.outlineVariant2,
      marginTop: dimensions.rowSpace,
      marginBottom: dimensions.rowSpace * 0.5,
    },
  });
