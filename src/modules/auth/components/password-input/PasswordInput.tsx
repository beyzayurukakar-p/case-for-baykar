import { Text, TextInput } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './PasswordInput.styles';
import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

const PasswordInput = (props: {
  value?: string;
  onChange: (val: string) => void;
  showForgotPassword?: boolean;
  onPressForgotPassword?: () => void;
}) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const _onPress_ShowHidePassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={t('password')}
        value={props.value}
        onChangeText={props.onChange}
        right={
          <TextInput.Icon
            icon={isPasswordHidden ? 'eye-off' : 'eye'}
            onPress={_onPress_ShowHidePassword}
          />
        }
        secureTextEntry={isPasswordHidden}
        autoCapitalize="none"
      />
      {props.showForgotPassword ? (
        <TouchableOpacity
          onPress={props.onPressForgotPassword}
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
      ) : null}
    </View>
  );
};

export default PasswordInput;
