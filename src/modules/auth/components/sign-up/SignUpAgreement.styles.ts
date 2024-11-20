import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

const SPACE = dimensions.measure(12);
export const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: SPACE,
    },
    titleContainer: {
      alignItems: 'center',
      marginBottom: dimensions.rowSpace * 2,
    },
    switchRow: {
      flexDirection: 'row',
      marginBottom: dimensions.rowSpace,
      alignItems: 'center',
      columnGap: dimensions.measure(10),
    },
    switchDescriptionText: {
      flexShrink: 1,
    },
    nextButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: dimensions.measure(20),
      columnGap: dimensions.measure(10),
    },
    nextButton: {
      paddingHorizontal: dimensions.measure(40),
    },
    backTouchable: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: dimensions.rowSpace,
    },
    backText: {
      color: colors.onSurfaceVariant,
      marginLeft: dimensions.measure(5),
    },
  });
