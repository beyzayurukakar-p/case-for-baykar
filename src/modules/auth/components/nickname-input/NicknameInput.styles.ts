import { StyleSheet } from 'react-native';
import { CreateStylesParams } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';

export const createStyles = ({ colors: _colors }: CreateStylesParams) =>
  StyleSheet.create({
    nicknameNoteText: {
      marginTop: dimensions.measure(5),
      marginBottom: dimensions.rowSpace,
    },
  });
