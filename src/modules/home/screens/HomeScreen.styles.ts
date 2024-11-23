import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../core/colorScheme';
import dimensions from '../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    imageBackground: {
      flex: 1,
      resizeMode: 'contain',
      justifyContent: 'flex-end',
    },
    gradient: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    nicknameText: {
      color: colors.primary,
      fontWeight: '800',
    },
    startSurveyButtonContainer: {
      marginTop: dimensions.rowSpace,
    },
    startSurveyButtonContent: {
      backgroundColor: colors.primary,
      paddingHorizontal: dimensions.measure(15),
    },
    startSurveyButtonLabel: {
      color: colors.onPrimary,
    },
  });
