import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors: _colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: dimensions.pageMargin,
    },
    questionText: {
      marginBottom: dimensions.rowSpace,
    },
    responseContainer: {
      flexGrow: 1,
      flexShrink: 1,
    },
    buttonsContainer: {
      marginTop: dimensions.rowSpace,
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: dimensions.measure(20),
    },
    previousButton: {
      width: 20,
      marginHorizontal: 0,
      // width: dimensions.measure(30),
    },
  });
