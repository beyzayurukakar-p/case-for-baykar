import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors: _colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      columnGap: dimensions.measure(10),
    },
    choiceContainer: {
      flexDirection: 'row',
    },
    labelStyle: {
      marginLeft: dimensions.measure(10),
    },
  });
