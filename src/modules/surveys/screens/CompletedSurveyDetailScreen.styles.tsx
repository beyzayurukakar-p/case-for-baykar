import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';
import dimensions from '../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    safeArea: {
      flex: 1,
    },
    contentContainer: {
      flex: 1,
      padding: dimensions.pageMargin,
    },
    topInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: dimensions.rowSpace,
    },
    topSingleInfoContainer: {
      alignItems: 'center',
    },
    topInfoLabelText: {
      color: colors.outline,
      marginBottom: dimensions.measure(5),
    },
    topInfoValueText: {
      color: colors.primary,
    },
    flatListContentContainer: {
      paddingBottom: dimensions.measure(150),
    },
  });
