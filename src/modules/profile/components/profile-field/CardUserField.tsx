import { IconButton, Text } from 'react-native-paper';
import { User } from '../../../../core/user';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './CardUserField.styles';
import { View } from 'react-native';
import dimensions from '../../../../common/styling/dimensions';
import Card from '../../../../common/components/card/Card';

const CardUserField = (props: { fieldKey: keyof User; label: string; value: string }) => {
  const theme = useAppTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <Card>
      <View style={styles.contentLeftContainer}>
        <Text
          variant="labelMedium"
          style={styles.labelText}
        >
          {props.label}
        </Text>
        <Text
          variant="bodyLarge"
          style={styles.valueText}
        >
          {props.value || '-'}
        </Text>
      </View>
      <IconButton
        icon={'square-edit-outline'}
        iconColor={theme.colors.primary}
        size={dimensions.measure(20)}
        onPress={() => {}}
        style={styles.icon}
      />
    </Card>
  );
};

export default CardUserField;
