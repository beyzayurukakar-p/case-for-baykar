import { TouchableOpacity, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './FormButton.styles';

/**
 * Button/s that are rendered on the bottom of Sign-in / Sign-up forms.
 * There are two buttons: Main & Alternate
 */
const FormButton = (props: {
  onPressMainButton: () => void;
  mainButtonTextKey: TextKeys;
  showAlternateButton?: boolean;
  onPressAlternateButton?: () => void;
  alternateButtonTextKey?: TextKeys;
  alternateButtonPreTextKey?: TextKeys;
  loading?: boolean;
}) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  return (
    <>
      <View style={styles.mainButtonContainer}>
        <Button
          onPress={props.loading ? undefined : props.onPressMainButton}
          mode="contained"
          contentStyle={styles.mainButton}
          loading={props.loading}
        >
          {t(props.mainButtonTextKey)}
        </Button>
      </View>
      {props.showAlternateButton ? (
        <View style={styles.alternateContainer}>
          <Text variant="bodyMedium">{t(props.alternateButtonPreTextKey as TextKeys)}</Text>
          <TouchableOpacity
            onPress={props.loading ? undefined : props.onPressAlternateButton}
            activeOpacity={0.4}
            style={styles.alternateButtonTouchable}
            disabled={props.loading}
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
