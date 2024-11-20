import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SignInForm.styles';
import { useState } from 'react';
import { SceneRendererProps } from 'react-native-tab-view';
import NicknameInput from '../nickname-input/NicknameInput';
import PasswordInput from '../password-input/PasswordInput';
import FormButton from '../form-button/FormButton';

const SignInForm = (props: SceneRendererProps) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const [nickname, setNickname] = useState<string>();
  const [password, setPassword] = useState<string>();

  const _onPress_ForgotPassword = () => {};

  const _onPress_Login = () => {};

  const _onPress_CreateAccount = () => {
    props.jumpTo('signUp');
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text variant="headlineSmall">{t('welcome')}</Text>
      </View>

      {/* Nickname input */}
      <NicknameInput
        value={nickname}
        onChange={setNickname}
      />

      {/* Password input */}
      <PasswordInput
        value={password}
        onChange={setPassword}
        showForgotPassword
        onPressForgotPassword={_onPress_ForgotPassword}
      />

      {/* Login Button */}
      <FormButton
        mainButtonTextKey="login"
        onPressMainButton={_onPress_Login}
        showAlternateButton
        alternateButtonPreTextKey="not-member"
        alternateButtonTextKey="create-account"
        onPressAlternateButton={_onPress_CreateAccount}
      />
    </View>
  );
};

export default SignInForm;
