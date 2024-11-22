import { OngoingSurvey, Survey } from '../../types/surveyTypes';
import Carousel, { CarouselRenderItem, ICarouselInstance } from 'react-native-reanimated-carousel';
import dimensions from '../../../../common/styling/dimensions';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { surveySlice } from '../../store/surveySlice';
import QuestionItem from './QuestionItem';
import { SurveyHeaderRef } from '../survey-header/SurveyHeader';
import { View } from 'react-native';
import SurveyCompleted from './SurveyCompleted';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './QuestionCarousel.styles';

const isQuestionAnswered = (questionId: number, ongoingSurvey?: OngoingSurvey) => {
  return ongoingSurvey?.responses[questionId] !== undefined;
};

const QuestionCarousel = (props: {
  survey: Survey;
  ongoingSurvey?: OngoingSurvey;
  timerRef: RefObject<SurveyHeaderRef>;
}) => {
  const { survey, ongoingSurvey, timerRef } = props;

  const dispatch = useDispatch();
  const styles = useThemedStyles(createStyles);

  const carouselRef = useRef<ICarouselInstance>(null);

  // States
  const [isInitialIndexUpdated, setIsInitialIndexUpdated] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showSurveyCompleted, setShowSurveyComplete] = useState<boolean>(false);

  useEffect(() => {
    // Make sure this callback is run once:
    if (isInitialIndexUpdated) {
      return;
    }

    // Set the currentIndex to where the user left off
    const lastIndex = ongoingSurvey?.ongoingQuestion?.index;
    if (currentIndex === 0 && lastIndex && lastIndex !== 0) {
      setCurrentIndex(lastIndex);
      setIsInitialIndexUpdated(true);
    }
  }, [isInitialIndexUpdated, currentIndex, ongoingSurvey?.ongoingQuestion?.index]);

  useEffect(() => {
    /*
    Every time the current index changes:
    1. Scroll carousel to that index
    2. Notify store that the question at {currentIndex} is being viewed
    */
    carouselRef.current?.scrollTo({ index: currentIndex, animated: true });
    dispatch(
      surveySlice.actions.viewQuestion({
        surveyId: survey.id,
        duration: timerRef.current?.getDuration() || 0,
        questionIndex: currentIndex,
      })
    );
  }, [dispatch, timerRef, survey.id, currentIndex]);

  const _onPressAnswer = useCallback(
    (index: number, response: any) => {
      // Notify store that an answer is given to a question
      dispatch(
        surveySlice.actions.answerQuestion({
          surveyId: survey.id,
          duration: timerRef.current?.getDuration() || 0,
          questionId: survey.questions[index].id,
          response: response,
        })
      );
    },
    [dispatch, timerRef, survey.id, survey.questions]
  );

  const _onPressPrevious = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);
  const _onPressNext = useCallback(() => {
    if (currentIndex === survey.questions.length - 1) {
      // If this is the last question, then show 'survey completed' message
      setShowSurveyComplete(true);
      timerRef.current?.pause();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, survey.questions.length, timerRef]);

  const _onPressBackToQuestions = () => {
    setShowSurveyComplete(false);
    timerRef.current?.resume();
  };

  const _renderQuestionItem: CarouselRenderItem<(typeof survey)['questions'][0]> = useCallback(
    ({ item: question, index }) => {
      return (
        <QuestionItem
          surveyId={survey.id}
          question={question}
          questionIndex={index}
          onPressPrevious={_onPressPrevious}
          onResponseSubmitted={(response: any) => _onPressAnswer(index, response)}
          onPressNext={_onPressNext}
          previousDisabled={index === 0}
          nextDisabled={!isQuestionAnswered(question.id, ongoingSurvey)}
        />
      );
    },
    [_onPressPrevious, _onPressAnswer, _onPressNext, ongoingSurvey, survey.id]
  );

  return (
    <>
      <Carousel
        ref={carouselRef}
        loop={false}
        data={survey.questions}
        renderItem={_renderQuestionItem}
        width={dimensions.width}
        enabled={false}
      />
      {showSurveyCompleted ? (
        <View style={styles.surveyCompletedContainer}>
          <SurveyCompleted
            surveyId={survey.id}
            onPressBack={_onPressBackToQuestions}
          />
        </View>
      ) : null}
    </>
  );
};

export default QuestionCarousel;