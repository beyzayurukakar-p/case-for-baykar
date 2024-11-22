import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors: _colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    choiceContainer: {
      flexDirection: 'row',
    },
    checkboxItem: {
      paddingLeft: 0,
    },
    labelStyle: {
      marginLeft: dimensions.measure(10),
    },
  });
