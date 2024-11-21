import { Text } from 'react-native-paper';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './Card.styles';
import { TouchableOpacity, View } from 'react-native';

const CardButton = (props: { buttonText: string; isDanger?: boolean; onPress: () => void }) => {
  const styles = useThemedStyles(createStyles);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.4}
    >
      <View style={styles.contentContainer}>
        <Text
          variant="bodyLarge"
          style={[props.isDanger ? styles.buttonTextDanger : styles.buttonText]}
        >
          {props.buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardButton;
