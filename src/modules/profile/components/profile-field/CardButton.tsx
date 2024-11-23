import { Text } from 'react-native-paper';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './CardButton.styles';
import Card from '../../../../common/components/card/Card';

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
