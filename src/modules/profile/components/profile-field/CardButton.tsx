import { Text } from 'react-native-paper';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './CardButton.styles';
import Card from '../../../../common/components/card/Card';

/**
 * A Card that acts as a button.
 * Used in ProfileScreen for rendering touchable cards.
 * @param props.buttonText Text to render on button
 * @param props.isDanger Makes the text red-like color
 * @param props.onPress Called when card is pressed
 */
const CardButton = (props: { buttonText: string; isDanger?: boolean; onPress: () => void }) => {
  const styles = useThemedStyles(createStyles);

  return (
    <Card onPress={props.onPress}>
      <Text
        variant="bodyLarge"
        style={[props.isDanger ? styles.buttonTextDanger : styles.buttonText]}
      >
        {props.buttonText}
      </Text>
    </Card>
  );
};

export default CardButton;
