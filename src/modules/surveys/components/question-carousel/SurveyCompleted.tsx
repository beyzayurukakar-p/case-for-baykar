import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SurveyCompleted.styles';
import BottomButtons from './BottomButtons';
import { useLocalization } from '../../../../core/localization';

const SurveyCompleted = (props: { surveyId: number; onPressBack: () => void }) => {
  const styles = useThemedStyles(createStyles);
  const { t } = useLocalization();

  const _onPressEndSurvey = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text
          variant="headlineMedium"
          style={styles.messageTopText}
        >
          {t('survey-complete')}
        </Text>
        <Text
          variant="bodyLarge"
          style={styles.messageBottomText}
        >
          {t('go-back-or-view-results')}
        </Text>
      </View>
      <BottomButtons
        leftButtonDisabled={false}
        rightButtonDisabled={false}
        onPressLeftButton={props.onPressBack}
        onPressRightButton={_onPressEndSurvey}
        rightButtonText="end-survey"
      />
    </View>
  );
};

export default SurveyCompleted;
