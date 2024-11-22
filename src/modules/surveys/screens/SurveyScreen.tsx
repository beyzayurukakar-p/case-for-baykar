import { StaticScreenProps } from '@react-navigation/native';
import { useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';
import SurveyHeader, { SurveyHeaderRef } from '../components/survey-header/SurveyHeader';
import { useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './SurveyScreen.styles';
import { surveySelectors } from '../store/surveySelectors';
import { useAppSelector } from '../../../core/store';

const SurveyScreen = (
  props: StaticScreenProps<{
    surveyId: number;
  }>
) => {
  const { surveyId } = props.route.params;
  const surveyHeaderRef = useRef<SurveyHeaderRef>(null);
  const styles = useThemedStyles(createStyles);
  const survey = useAppSelector((state) => surveySelectors.surveyById(state, surveyId));

  return (
    <View style={styles.container}>
      <SurveyHeader
        ref={surveyHeaderRef}
        surveyTitle={survey.title}
        questionCount={survey.questions.length}
        currentStep={1}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <Button
            onPress={() => {
              console.log(surveyHeaderRef.current?.getDuration());
            }}
          >
            Press
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SurveyScreen;
