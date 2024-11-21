import { SafeAreaView, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';
import { useLocalization } from '../../../core/localization';
import { useAppTheme, useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './ProfileScreen.styles';
import dimensions from '../../../common/styling/dimensions';
import CardUserField from '../components/profile-field/CardUserField';
import CardButton from '../components/profile-field/CardButton';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, userSlice } from '../../../core/user';
import { formatDate } from 'date-fns';
import { useState } from 'react';

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const { t, currentLanguage, dateLocale } = useLocalization();
  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();

  const user = useSelector(selectUser);

  const [confirmSignout, setConfirmSignout] = useState<boolean>(false);

  const _onPress_SignOut = () => {
    if (confirmSignout === true) {
      dispatch(userSlice.actions.setUser(null));
    } else {
      setConfirmSignout(true);
      setTimeout(() => {
        setConfirmSignout(false);
      }, 2000);
    }
  };

  const _renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Icon
          source="account"
          size={dimensions.measure(25)}
          color={theme.colors.primary}
        />
        <Text
          variant="titleLarge"
          style={styles.headerTitle}
        >
          {t('profile-screen-title').toLocaleUpperCase(currentLanguage)}
        </Text>
      </View>
    );
  };
  const _renderSubtitle = (subtitle: string) => {
    return (
      <Text
        variant="bodyMedium"
        style={styles.subtitle}
      >
        {subtitle}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {_renderHeader()}
        {_renderSubtitle(t('account-info'))}
        <CardUserField
          fieldKey="nickname"
          label={t('nickname')}
          value={user?.nickname as string}
        />
        <CardUserField
          fieldKey="email"
          label={t('email')}
          value={user?.email as string}
        />
        <CardUserField
          fieldKey="birthdate"
          label={t('birthdate')}
          value={user?.birthdate ? formatDate(user?.birthdate, 'PP', { locale: dateLocale }) : ''}
        />
        <CardUserField
          fieldKey="gender"
          label={t('gender')}
          value={user?.gender as string}
        />
        {_renderSubtitle(t('about'))}
        <CardButton
          buttonText={t('privacy-policy')}
          onPress={() => {}}
        />
        <CardButton
          buttonText={t('terms-conditions')}
          onPress={() => {}}
        />
        {_renderSubtitle(t('actions'))}
        <CardButton
          buttonText={confirmSignout ? t('confirm-sign-out') : t('sign-out')}
          isDanger={true}
          onPress={_onPress_SignOut}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
