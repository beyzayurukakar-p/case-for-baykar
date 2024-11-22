import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: colors.primary,
    },
    container: {
      paddingHorizontal: dimensions.pageMargin,
      paddingVertical: dimensions.measure(10),
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: dimensions.measure(7),
    },
    timerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeText: {
      color: colors.primaryContainer,
      fontWeight: '700',
      marginLeft: dimensions.measure(7),
    },
    surveyTitleText: {
      color: colors.onPrimary,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: dimensions.measure(20),
    },
    progressBarContainer: {
      flexGrow: 1,
      flexShrink: 1,
    },
    progressBar: {
      backgroundColor: colors.inversePrimary2,
    },
    progressCurrentStepText: {
      color: colors.onPrimary,
      fontWeight: '700',
    },
    progressTotalStepText: {
      color: colors.inversePrimary2,
    },
  });
