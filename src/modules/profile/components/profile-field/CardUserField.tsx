import { IconButton, Text } from 'react-native-paper';
import { User } from '../../../../core/user';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './CardUserField.styles';
import { View } from 'react-native';
import dimensions from '../../../../common/styling/dimensions';
import Card from '../../../../common/components/card/Card';

/**
 * A Card that renders a profile field.
 * @param props.fieldKey User object's property key
 * @param props.label Readable name of this key
 * @param props.value Value of this property
 */
const CardUserField = (props: { fieldKey: keyof User; label: string; value: string }) => {
  const theme = useAppTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <Card>
      <View style={styles.contentContainer}>
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
      </View>
    </Card>
  );
};

export default CardUserField;
