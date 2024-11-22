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
      columnGap: dimensions.measure(20),
    },
    bottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: dimensions.measure(5),
    },
    surveyTitleText: {
      color: colors.onSurface,
      flexShrink: 1,
      flexGrow: 1,
    },
    dateTimeText: {
      marginHorizontal: dimensions.measure(5),
    },
    buttonContent: {
      height: dimensions.measure(30),
    },
    buttonLabel: {
      marginVertical: 0,
    },
  });
