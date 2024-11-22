import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: dimensions.pageMargin,
      paddingTop: dimensions.percentOfHeight(15),
    },
    valueCircle: {
      alignSelf: 'center',
      padding: dimensions.measure(20),
      borderWidth: dimensions.measure(3),
      borderColor: colors.primary,
      borderRadius: dimensions.measure(100),
      minWidth: dimensions.measure(90),
      minHeight: dimensions.measure(90),
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: dimensions.measure(40),
    },
    valueText: {
      color: colors.primary,
      fontWeight: '700',
    },
  });
