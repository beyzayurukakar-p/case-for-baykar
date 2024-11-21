import { ImageBackground, View } from 'react-native';
import { imageSources } from '../../../common/assets/images';
import { useAppTheme, useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './HomeScreen.styles';
import LinearGradient from 'react-native-linear-gradient';
import { Button, Text } from 'react-native-paper';
import { useLocalization } from '../../../core/localization';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../core/user';
import { useNavigateToSurvey } from '../../surveys';

const HomeScreen = () => {
  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();
  const { t } = useLocalization();

  const user = useSelector(selectUser);
  const navigateToSurvey = useNavigateToSurvey();

  return (
    <ImageBackground
      source={imageSources.background()}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={[theme.colors.backgroundTransparent, theme.colors.background]}
        locations={[0, 0.2]}
        style={styles.gradient}
      >
        <Text variant="titleMedium">
          {t('hello') + ' '}
          <Text style={styles.nicknameText}>{user?.nickname?.toUpperCase()}</Text>
          {' !'}
        </Text>
        <View style={styles.startSurveyButtonContainer}>
          <Button
            mode="contained"
            contentStyle={styles.startSurveyButtonContent}
            onPress={navigateToSurvey}
          >
            {t('start-survey')}
          </Button>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeScreen;
