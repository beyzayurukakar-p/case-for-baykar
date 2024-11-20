import { View } from 'react-native';
import { Chip, Text, TextInput } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SignUpForm.styles';
import { useContext, useState } from 'react';
import { SceneRendererProps } from 'react-native-tab-view';
import { DatePickerModal } from 'react-native-paper-dates';
import { formatDate } from 'date-fns';
import NicknameInput from '../nickname-input/NicknameInput';
import PasswordInput from '../password-input/PasswordInput';
import FormButton from '../form-button/FormButton';
import { useService } from '../../../../common/services/useService';
import { checkIfUserExists } from '../../services/checkIfUserExists';
import Toast from 'react-native-toast-message';
import { SignUpFormContext } from '../../store/signUpFormContext';

const SignUpForm = (props: SceneRendererProps) => {
  const { t, currentLanguage, dateLocale } = useLocalization();
  const styles = useThemedStyles(createStyles);
  const { request: requestCheckIfUserExists, loading } = useService(checkIfUserExists);
  const formData = useContext(SignUpFormContext);

  const [gender, setGender] = useState<'male' | 'female'>();
  const [nickname, setNickname] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [birthdate, setBirthdate] = useState<Date>();

  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const _onConfirmBirthdate = (params: { date: Date | undefined }) => {
    setBirthdate(params.date);
    setIsDatePickerVisible(false);
  };

  const _onPress_Next = () => {
    // Validate fields
    if (
      gender === undefined ||
      nickname === undefined ||
      nickname.trim().length === 0 ||
      email === undefined ||
      email.trim().length === 0 ||
      password === undefined ||
      password.trim().length === 0 ||
      birthdate === undefined
    ) {
      Toast.show({
        type: 'error',
        text1: t('missing-input'),
      });
      return;
    }
    // Check if user already exists
    requestCheckIfUserExists(
      { nickname },
      {
        onSuccess: (data) => {
          if (data === true) {
            // If user does not exist, go to agreement step
            formData?.setValue?.({
              birthdate: birthdate.toISOString(),
              nickname,
              email,
              password,
              gender,
            });
            props.jumpTo('agreement');
          }
        },
      }
    );
  };

  const _onPress_SignIn = () => {
    props.jumpTo('signIn');
  };

  const _renderGenderInput = () => {
    return (
      <>
        <Text
          variant="bodyLarge"
          style={styles.genderInputLabel}
        >
          {t('select-gender')}
        </Text>
        <View style={styles.genderInputContainer}>
          <View style={styles.genderChipContainer}>
            <Chip
              onPress={() => setGender('female')}
              selected={gender === 'female'}
              mode="outlined"
            >
              {t('female')}
            </Chip>
          </View>
          <View style={styles.genderChipContainer}>
            <Chip
              onPress={() => setGender('male')}
              selected={gender === 'male'}
              mode="outlined"
            >
              {t('male')}
            </Chip>
          </View>
        </View>
      </>
    );
  };

  const _renderBirthdateInput = () => {
    return (
      <>
        <TextInput
          mode="outlined"
          label={t('birthdate')}
          right={<TextInput.Icon icon={'calendar'} />}
          value={birthdate ? formatDate(birthdate, 'PP', { locale: dateLocale }) : ''}
          editable={false}
          onPress={() => setIsDatePickerVisible(true)}
        />
        <DatePickerModal
          locale={currentLanguage}
          mode="single"
          visible={isDatePickerVisible}
          onDismiss={() => setIsDatePickerVisible(false)}
          date={birthdate}
          onConfirm={_onConfirmBirthdate}
          validRange={{ endDate: new Date() }}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      {_renderGenderInput()}

      {/* Email input */}
      <TextInput
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        label={t('email')}
        style={styles.spaceBelow}
      />

      {/* Nickname input */}
      <NicknameInput
        value={nickname}
        onChange={setNickname}
      />

      {/* Password input */}
      <PasswordInput
        value={password}
        onChange={setPassword}
        showForgotPassword={false}
      />

      {_renderBirthdateInput()}

      {/* Next Button */}
      <FormButton
        mainButtonTextKey="next"
        onPressMainButton={_onPress_Next}
        showAlternateButton
        alternateButtonPreTextKey="is-member"
        alternateButtonTextKey="sign-in"
        onPressAlternateButton={_onPress_SignIn}
        loading={loading}
      />
    </View>
  );
};

export default SignUpForm;
