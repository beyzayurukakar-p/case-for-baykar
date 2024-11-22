import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { useAppSelector } from '../../../core/store';
import { surveySelectors } from '../store/surveySelectors';
import FullscreenMessage from '../components/fullscreen-message/FullscreenMessage';
import { useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './CompletedSurveyDetailScreen.styles';
import SurveyHeader from '../components/survey-header/SurveyHeader';
import { ScreenNavigationProp } from '../../../core/navigation/signedInStack';
import { useLocalization } from '../../../core/localization';
import { formatDate } from 'date-fns';
import { Text } from 'react-native-paper';
import { useMemo } from 'react';
import { GivenResponse } from '../types/surveyTypes';
import { Question } from '../types/questionTypes';
import CompletedResponseItem from '../components/completed-response-item/CompletedResponseItem';

const CompletedSurveyDetailScreen = (
  props: StaticScreenProps<{
    surveyId: number;
    waitForResults?: boolean;
  }>
) => {
  const surveyId = props.route.params.surveyId;

  const styles = useThemedStyles(createStyles);
  const { t, dateLocale } = useLocalization();
  const nav = useNavigation<ScreenNavigationProp<'Survey'>>();

  const completedSurvey = useAppSelector((state) =>
    surveySelectors.completedSurveyById(state, surveyId)
  );

  const modifiedResponseData = useMemo(() => {
    if (completedSurvey === undefined) {
      return [];
    }
    const responses: Array<GivenResponse & { question: Question }> = [];
    for (let [questionId, response] of Object.entries(completedSurvey.responses)) {
      const question = completedSurvey.questions.find((_question) => {
        return _question.id === Number(questionId);
      });
      if (question) {
        responses.push({
          ...response,
          question,
        });
      }
    }

    return responses;
  }, [completedSurvey]);

  const _onPressHome = () => {
    nav.popTo('Tabs', { screen: 'Home' });
  };

  if (completedSurvey === undefined) {
    return <FullscreenMessage customMessage="waiting-for-results" />;
  }

  const _renderTopInfo = () => {
    return (
      <View style={styles.topInfoContainer}>
        <View style={styles.topSingleInfoContainer}>
          <Text
            variant="titleSmall"
            style={styles.topInfoLabelText}
          >
            {t('date-completed')}
          </Text>
          <Text
            variant="headlineSmall"
            style={styles.topInfoValueText}
          >
            {formatDate(completedSurvey.completedOn, 'PP', { locale: dateLocale })}
          </Text>
        </View>
        <View style={styles.topSingleInfoContainer}>
          <Text
            variant="titleSmall"
            style={styles.topInfoLabelText}
          >
            {t('result')}
          </Text>
          <Text
            variant="headlineSmall"
            style={styles.topInfoValueText}
          >
            {completedSurvey.result}
          </Text>
        </View>
      </View>
    );
  };

  const _renderResponseItem = ({ item }: { item: GivenResponse & { question: Question } }) => {
    return <CompletedResponseItem response={item} />;
  };

  const _renderResponses = () => {
    return (
      <View>
        <Text
          variant="titleSmall"
          style={styles.topInfoLabelText}
        >
          {t('your-responses')}
        </Text>
        <FlatList
          data={modifiedResponseData}
          renderItem={_renderResponseItem}
          keyExtractor={(item) => item.question.id.toString()}
          contentContainerStyle={styles.flatListContentContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SurveyHeader
        surveyTitle={completedSurvey.title}
        initiallyPaused
        startDurationFrom={completedSurvey.surveyDuration}
        onPressHome={_onPressHome}
      />
      <View style={styles.contentContainer}>
        {_renderTopInfo()}
        {_renderResponses()}
      </View>
    </View>
  );
};

export default CompletedSurveyDetailScreen;
