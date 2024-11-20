import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon, Switch, Text } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SignUpAgreement.styles';
import { SceneRendererProps } from 'react-native-tab-view';
import FormButton from '../form-button/FormButton';

const SignUpAgreement = (props: SceneRendererProps) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const [agreedA, setAgreedA] = useState<boolean>(false);
  const [agreedB, setAgreedB] = useState<boolean>(false);
  const [agreedC, setAgreedC] = useState<boolean>(false);

  const _onPress_Back = () => {
    props.jumpTo('signUp');
  };

  const _renderSwitch = (description: string, value: boolean, onToggle: () => void) => {
    return (
      <View style={styles.switchRow}>
        <Switch
          value={value}
          onValueChange={onToggle}
        />
        <Text
          variant="bodyMedium"
          style={styles.switchDescriptionText}
        >
          {description}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text variant="titleMedium">Hassas Veriler Hakkında</Text>
        <Text variant="bodyMedium">lsdalksdmlakldk</Text>
      </View>
      {_renderSwitch('DenemeA', agreedA, () => setAgreedA((prev) => !prev))}
      {_renderSwitch('DenemeB', agreedB, () => setAgreedB((prev) => !prev))}
      {_renderSwitch('DenemeC', agreedC, () => setAgreedC((prev) => !prev))}

      {/* Next Button */}
      <FormButton
        mainButtonTextKey="next"
        onPressMainButton={() => {}}
        showAlternateButton={false}
      />

      {/* Back Button */}
      <TouchableOpacity
        onPress={_onPress_Back}
        activeOpacity={0.4}
        style={styles.backTouchable}
      >
        <Icon
          size={20}
          source={'arrow-left'}
          color={styles.backText.color}
        />
        <Text
          variant="labelLarge"
          style={styles.backText}
        >
          {t('previous')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpAgreement;
