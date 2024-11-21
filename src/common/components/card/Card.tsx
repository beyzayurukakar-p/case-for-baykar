import { createStyles } from './Card.styles';
import { TouchableOpacity, View } from 'react-native';
import { PropsWithChildren } from 'react';
import { useThemedStyles } from '../../../core/colorScheme';

const Card = (props: PropsWithChildren<{ onPress?: () => void }>) => {
  const styles = useThemedStyles(createStyles);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.4}
      disabled={!props.onPress}
      onPress={props.onPress}
    >
      <View style={styles.contentContainer}>{props.children}</View>
    </TouchableOpacity>
  );
};

export default Card;