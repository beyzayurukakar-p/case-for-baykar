import { TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './FormButton.styles';

const FormButton = (props: {
  onPressMainButton: () => void;
  mainButtonTextKey: TextKeys;
  showAlternateButton?: boolean;
  onPressAlternateButton?: () => void;
  alternateButtonTextKey?: TextKeys;
  alternateButtonPreTextKey?: TextKeys;
}) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  return (
    <>
      <View style={styles.mainButtonContainer}>
        <Button
          onPress={props.onPressMainButton}
          mode="contained"
          contentStyle={styles.mainButton}
        >
          {t(props.mainButtonTextKey)}
        </Button>
      </View>
      {props.showAlternateButton ? (
        <View style={styles.alternateContainer}>
          <Text variant="bodyMedium">{t(props.alternateButtonPreTextKey as TextKeys)}</Text>
          <TouchableOpacity
            onPress={props.onPressAlternateButton}
            activeOpacity={0.4}
            style={styles.alternateButtonTouchable}
          >
            <Text
              variant="labelLarge"
              style={styles.alternateButtonText}
            >
              {t(props.alternateButtonTextKey as TextKeys)}
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </>
  );
};

export default FormButton;
