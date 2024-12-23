import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SignInForm.styles';
import { useState } from 'react';
import { SceneRendererProps } from 'react-native-tab-view';
import NicknameInput from '../nickname-input/NicknameInput';
import PasswordInput from '../password-input/PasswordInput';
import FormButton from '../form-button/FormButton';
import { signin } from '../../services/signin';
import { useService } from '../../../../common/services/useService';
import Toast from 'react-native-toast-message';
import { User } from '../../../../core/user/types';
import { useAppDispatch } from '../../../../core/store';
import { userSlice } from '../../../../core/user';

/** A Sign-in form that is a scene in react-native-tab-view*/
const SignInForm = (props: SceneRendererProps) => {
  const dispatch = useAppDispatch();

  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);
  const { loading, request: requestSignIn } = useService(signin);

  const [nickname, setNickname] = useState<string>();
  const [password, setPassword] = useState<string>();

  const _onPress_ForgotPassword = () => {
    Toast.show({
      type: 'info',
      text1: ':(',
    });
  };

  const _onSignInSuccessful = (data?: User) => {
    // Set user in store
    dispatch(userSlice.actions.setUser(data || null));
  };

  const _onPress_SignIn = () => {
    // Validate
    if (
      nickname === undefined ||
      nickname.trim().length === 0 ||
      password === undefined ||
      password.trim().length === 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Lütfen kullanıcı adı ve şifre alanlarını doldurun.',
      });
      return;
    }

    // Sign In
    requestSignIn(
      {
        nickname,
        password,
      },
      {
        onSuccess: _onSignInSuccessful,
      }
    );
  };

  const _onPress_CreateAccount = () => {
    props.jumpTo('signUp');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContentContainer}
      showsVerticalScrollIndicator={false}
    >
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

      {/* SignIn Button */}
      <FormButton
        mainButtonTextKey="sign-in"
        onPressMainButton={_onPress_SignIn}
        showAlternateButton
        alternateButtonPreTextKey="not-member"
        alternateButtonTextKey="create-account"
        onPressAlternateButton={_onPress_CreateAccount}
        loading={loading}
      />
    </ScrollView>
  );
};

export default SignInForm;
