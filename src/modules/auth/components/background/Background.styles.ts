import { StyleSheet } from 'react-native';
import dimensions from '../../../../common/styling/dimensions';
import { CreateStylesParams } from '../../../../core/colorScheme';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'contain',
      backgroundColor: colors.inverseSurface,
    },
    innerContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      justifyContent: 'flex-end',
    },
    contentContainer: {
      height: dimensions.isScreenRatioSmall
        ? dimensions.percentOfHeight(80)
        : dimensions.percentOfHeight(65),
      backgroundColor: colors.backdropInverse,
      borderTopLeftRadius: dimensions.measure(50),
      borderTopRightRadius: dimensions.measure(50),
      padding: dimensions.pageMarginLarge,
      paddingTop: dimensions.pageMarginLarge,
    },
  });