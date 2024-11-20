import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    titleContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: dimensions.measure(150),
      paddingBottom: dimensions.measure(20),
    },
    signInButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: dimensions.rowSpace * 2,
    },
    signInButton: {
      height: dimensions.measure(40),
      borderRadius: 100,
      paddingHorizontal: dimensions.measure(40),
    },
    notMemberContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: dimensions.measure(5),
    },
    notMemberText: {},
    createAccountTouchable: {
      paddingHorizontal: dimensions.measure(3),
    },
    createAccountText: {
      color: colors.primary,
    },
  });
