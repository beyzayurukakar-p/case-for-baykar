import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    optionsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: dimensions.measure(10),
      marginBottom: dimensions.measure(20),
    },
    choiceTouchable: {
      borderRadius: dimensions.measure(10),
      borderWidth: dimensions.measure(1.5),
      borderColor: colors.background,
    },
    selectedChoiceBorder: {},
    choiceInnerContainer: {
      padding: dimensions.measure(10),
      borderRadius: dimensions.measure(8),
      margin: dimensions.measure(2),
    },
    label: {
      color: colors.onPrimary,
      fontWeight: '700',
    },
  });
