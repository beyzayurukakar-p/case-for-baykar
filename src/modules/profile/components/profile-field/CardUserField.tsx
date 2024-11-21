import { IconButton, Text } from 'react-native-paper';
import { User } from '../../../../core/user';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './Card.styles';
import { View } from 'react-native';
import dimensions from '../../../../common/styling/dimensions';

const CardUserField = (props: { fieldKey: keyof User; label: string; value: string }) => {
  const theme = useAppTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
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
    </View>
  );
};

export default CardUserField;
