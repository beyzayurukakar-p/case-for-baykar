import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import SurveyHeader, { SurveyHeaderRef } from '../components/survey-header/SurveyHeader';
import { useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './SurveyScreen.styles';
import { surveySelectors } from '../store/surveySelectors';
import { useAppSelector } from '../../../core/store';
import QuestionCarousel from '../components/question-carousel/QuestionCarousel';
import { useDispatch } from 'react-redux';
import { surveySlice } from '../store/surveySlice';
import { ScreenNavigationProp } from '../../../core/navigation/signedInStack';

const SurveyScreen = (
  props: StaticScreenProps<{
    surveyId: number;
  }>
) => {
  const { surveyId } = props.route.params;

  const dispatch = useDispatch();
  const nav = useNavigation<ScreenNavigationProp<'Survey'>>();
  const styles = useThemedStyles(createStyles);
  const surveyHeaderRef = useRef<SurveyHeaderRef>(null);

  // Selected data
  const survey = useAppSelector((state) => surveySelectors.surveyById(state, surveyId));
  const ongoingSurvey = useAppSelector((state) =>
    surveySelectors.ongoingSurveyById(state, surveyId)
  );
  const responseCount = useAppSelector((state) =>
    surveySelectors.responseCountOfSurvey(state, surveyId)
  );

  // Handlers
  const _onPressHome = () => {
    /*
    When user leaves this screen,
    notify the store that the survey is paused
     */
    dispatch(
      surveySlice.actions.pauseSurvey({
        surveyId: survey.id,
        date: new Date().toISOString(),
        duration: surveyHeaderRef.current?.getDuration() || 0,
      })
    );
    nav.popTo('Tabs', { screen: 'Home' });
  };

  return (
    <View style={styles.container}>
      <SurveyHeader
        ref={surveyHeaderRef}
        surveyTitle={survey.title}
        questionCount={survey.questions.length}
        currentStep={responseCount}
        startDurationFrom={ongoingSurvey?.surveyDuration}
        onPressHome={_onPressHome}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <QuestionCarousel
            survey={survey}
            ongoingSurvey={ongoingSurvey}
            timerRef={surveyHeaderRef}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SurveyScreen;
