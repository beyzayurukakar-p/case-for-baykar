import { TouchableOpacity, View } from 'react-native';
import { Button, Chip, Text, TextInput } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SignUpForm.styles';
import { useState } from 'react';
import { SceneRendererProps } from 'react-native-tab-view';
import { DatePickerModal } from 'react-native-paper-dates';
import { formatDate } from 'date-fns';

const SignUpForm = (props: SceneRendererProps) => {
  const { t, currentLanguage, dateLocale } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const [gender, setGender] = useState<'male' | 'female'>();
  const [birthdate, setBirthdate] = useState<Date>();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);

  const _onPress_ShowHidePassword = () => {
    setIsPasswordHidden((prev) => !prev);
  };

  const _onConfirmBirthdate = (params: { date: Date | undefined }) => {
    setBirthdate(params.date);
    setIsDatePickerVisible(false);
  };

  const _onPress_Next = () => {
    props.jumpTo('agreement');
  };

  const _onPress_SignIn = () => {
    props.jumpTo('signIn');
  };

  return (
    <View style={styles.container}>
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

      {/* Email input */}
      <TextInput
        mode="outlined"
        label={t('email')}
        style={styles.spaceBelow}
      />

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
        style={styles.spaceBelow}
        secureTextEntry={isPasswordHidden}
      />

      {/* Birthdate input */}
      <TextInput
        mode="outlined"
        label={t('birthdate')}
        right={
          <TextInput.Icon
            icon={'calendar'}
            onPress={_onPress_ShowHidePassword}
          />
        }
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

      {/* Next Button */}
      <View style={styles.nextButtonContainer}>
        <Button
          onPress={_onPress_Next}
          mode="contained"
          contentStyle={styles.nextButton}
        >
          {t('next')}
        </Button>
      </View>

      {/* Go to Signin */}
      <View style={styles.isMemberContainer}>
        <Text
          variant="bodyMedium"
          style={styles.isMemberText}
        >
          {t('not-member')}
        </Text>
        <TouchableOpacity
          onPress={_onPress_SignIn}
          activeOpacity={0.4}
          style={styles.loginTouchable}
        >
          <Text
            variant="labelLarge"
            style={styles.loginText}
          >
            {t('create-account')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpForm;
