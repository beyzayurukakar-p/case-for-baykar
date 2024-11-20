import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: dimensions.rowSpace,
    },
    spaceBelow: {
      marginBottom: dimensions.rowSpace,
    },
    genderInputLabel: {
      marginBottom: dimensions.measure(7),
    },
    genderInputContainer: {
      flexDirection: 'row',
      columnGap: dimensions.measure(10),
      marginBottom: dimensions.rowSpace,
    },
    genderChipContainer: {
      flex: 1,
    },
    nicknameNoteText: {
      marginTop: dimensions.measure(5),
      marginBottom: dimensions.rowSpace,
    },
    nextButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: dimensions.measure(20),
    },
    nextButton: {
      height: dimensions.measure(40),
      borderRadius: 100,
      paddingHorizontal: dimensions.measure(40),
    },
    isMemberContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: dimensions.measure(5),
    },
    isMemberText: {},
    loginTouchable: {
      paddingHorizontal: dimensions.measure(3),
    },
    loginText: {
      color: colors.primary,
    },
  });
