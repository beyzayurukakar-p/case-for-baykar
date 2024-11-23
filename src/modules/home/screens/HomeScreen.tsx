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
import { useMemo } from 'react';

const HomeScreen = () => {
  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();
  const { t } = useLocalization();

  const user = useSelector(selectUser);
  const navigateToSurvey = useNavigateToSurvey();

  // Dark and light mode require different setup of gradient to look good
  const gradientColors = useMemo(() => {
    if (theme.dark) {
      return [
        theme.colors.backgroundTransparent,
        theme.colors.backgroundTransparent,
        theme.colors.surfaceVariant2,
        theme.colors.background,
      ];
    }
    return [theme.colors.backgroundTransparent, theme.colors.background];
  }, [theme]);

  // Dark and light mode require different setup of gradient to look good
  const gradientLocations = useMemo(() => {
    if (theme.dark) {
      return [0, 0.1, 0.6, 0.8];
    }
    return [0, 0.2];
  }, [theme]);

  return (
    <ImageBackground
      source={imageSources.background()}
      style={styles.imageBackground}
    >
      <LinearGradient
        colors={gradientColors}
        locations={gradientLocations}
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
            labelStyle={styles.startSurveyButtonLabel}
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
