import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';
import dimensions from '../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      padding: dimensions.pageMargin,
    },
    titleText: {
      alignSelf: 'center',
      marginBottom: dimensions.rowSpace,
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
      marginTop: dimensions.measure(5),
    },
    topInfoValueText: {
      color: colors.primary,
    },
    flatListContentContainer: {
      paddingBottom: dimensions.measure(150),
    },
  });
