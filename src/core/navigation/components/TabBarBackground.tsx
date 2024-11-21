import { StyleSheet, View } from 'react-native';
import { CreateStylesParams, useThemedStyles } from '../../colorScheme';

const TabBarBackground = () => {
  const styles = useThemedStyles(createStyles);
  return <View style={styles.container} />;
};

const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: colors.surfaceVariant2,
    },
  });

export default TabBarBackground;
