import { View } from 'react-native';
import { Button, Icon } from 'react-native-paper';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './BottomButtons.styles';
import { TextKeys, useLocalization } from '../../../../core/localization';
import dimensions from '../../../../common/styling/dimensions';

const BottomButtons = (props: {
  onPressLeftButton: () => void;
  onPressRightButton: () => void;
  leftButtonDisabled: boolean;
  rightButtonDisabled: boolean;
  rightButtonText: TextKeys;
}) => {
  const {
    leftButtonDisabled,
    rightButtonDisabled,
    onPressLeftButton,
    onPressRightButton,
    rightButtonText,
  } = props;

  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();
  const { t } = useLocalization();

  return (
    <View style={styles.buttonsContainer}>
      <Button
        mode="contained"
        disabled={leftButtonDisabled}
        onPress={onPressLeftButton}
        contentStyle={[styles.button, leftButtonDisabled ? styles.buttonDisabled : null]}
      >
        <Icon
          source={'arrow-left'}
          size={dimensions.measure(20)}
          color={leftButtonDisabled ? theme.colors.inversePrimary2 : theme.colors.onPrimary}
        />
      </Button>
      <Button
        mode="contained"
        disabled={rightButtonDisabled}
        onPress={onPressRightButton}
        contentStyle={[
          styles.nextButton,
          styles.button,
          rightButtonDisabled ? styles.buttonDisabled : null,
        ]}
        labelStyle={rightButtonDisabled ? styles.labelDisabled : null}
      >
        {t(rightButtonText)}
      </Button>
    </View>
  );
};

export default BottomButtons;
