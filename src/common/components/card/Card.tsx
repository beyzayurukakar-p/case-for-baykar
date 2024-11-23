import { createStyles } from './Card.styles';
import { TouchableOpacity } from 'react-native';
import { PropsWithChildren } from 'react';
import { useThemedStyles } from '../../../core/colorScheme';

type CardProps = {
  /**
   * Called when Card is pressed
   * */
  onPress?: () => void;
};

/**
 * Basic Card component to encompass content with differing background color.
 */
const Card = (props: PropsWithChildren<CardProps>) => {
  const styles = useThemedStyles(createStyles);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.4}
      disabled={!props.onPress}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Card;
