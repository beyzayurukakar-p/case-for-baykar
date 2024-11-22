import { StyleSheet } from 'react-native';
import dimensions from '../../../../common/styling/dimensions';
import { CreateStylesParams } from '../../../../core/colorScheme';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    bottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: dimensions.measure(5),
    },
    surveyTitleText: {
      color: colors.onSurface,
    },
    dateTimeText: {
      marginHorizontal: dimensions.measure(5),
    },
    buttonContent: {
      backgroundColor: colors.inversePrimary,
      height: dimensions.measure(30),
    },
    buttonLabel: {
      color: colors.onPrimary,
      marginVertical: 0,
    },
  });
