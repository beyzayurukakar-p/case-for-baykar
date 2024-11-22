import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: dimensions.measure(20),
    },
    input: {
      maxHeight: dimensions.percentOfHeight(50),
      marginBottom: dimensions.measure(10),
    },
    inputKeyboardOpen: {
      maxHeight: dimensions.percentOfHeight(20),
    },
    button: {
      backgroundColor: colors.primary,
    },
    buttonDisabled: {
      backgroundColor: colors.surfaceDisabled,
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
