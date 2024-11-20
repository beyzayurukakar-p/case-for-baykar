import { TouchableOpacity, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SignInForm.styles';
import { useState } from 'react';

const SignInForm = (props: { onPressCreateAccount: () => void }) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  const _onPress_ShowHidePassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const _onPress_ForgotPassword = () => {};

  const _onPress_Login = () => {};

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text
          variant="headlineSmall"
          style={styles.titleText}
        >
          {t('welcome')}
        </Text>
      </View>

      {/* Nickname input */}
      <TextInput
        mode="outlined"
        label={t('nickname')}
      />
      <Text
        variant="bodySmall"
        style={styles.nicknameNoteText}
      >
        {t('we-care-about-privacy')}
      </Text>

      {/* Password input */}
      <TextInput
        mode="outlined"
        label={t('password')}
        right={
          <TextInput.Icon
            icon={isPasswordHidden ? 'eye-off' : 'eye'}
            onPress={_onPress_ShowHidePassword}
          />
        }
        style={styles.passwordInput}
        secureTextEntry={isPasswordHidden}
      />
      <TouchableOpacity
        onPress={_onPress_ForgotPassword}
        activeOpacity={0.4}
        style={styles.forgotPasswordTouchable}
      >
        <Text
          variant="labelSmall"
          style={styles.forgotPasswordText}
        >
          {t('forgot-password')}
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <View style={styles.loginButtonContainer}>
        <Button
          onPress={_onPress_Login}
          mode="contained"
          contentStyle={styles.loginButton}
        >
          {t('login')}
        </Button>
      </View>

      {/* Go to Signup */}
      <View style={styles.notMemberContainer}>
        <Text
          variant="bodyMedium"
          style={styles.notMemberText}
        >
          {t('not-member')}
        </Text>
        <TouchableOpacity
          onPress={props.onPressCreateAccount}
          activeOpacity={0.4}
          style={styles.createAccountTouchable}
        >
          <Text
            variant="labelLarge"
            style={styles.createAccountText}
          >
            {t('create-account')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInForm;
