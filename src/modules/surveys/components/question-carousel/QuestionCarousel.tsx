import { OngoingSurvey, Survey } from '../../types/surveyTypes';
import Carousel, { CarouselRenderItem, ICarouselInstance } from 'react-native-reanimated-carousel';
import dimensions from '../../../../common/styling/dimensions';
import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { surveySlice } from '../../store/surveySlice';
import QuestionItem from './QuestionItem';
import { SurveyHeaderRef } from '../survey-header/SurveyHeader';

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

  const carouselRef = useRef<ICarouselInstance>(null);

  // States
  const [isInitialIndexUpdated, setIsInitialIndexUpdated] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
    carouselRef.current?.scrollTo({ index: currentIndex });
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
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const _renderQuestionItem: CarouselRenderItem<(typeof survey)['questions'][0]> = useCallback(
    ({ item: question, index }) => {
      return (
        <QuestionItem
          question={question}
          questionIndex={index}
          onPressPrevious={_onPressPrevious}
          onPressAnswer={(response: any) => _onPressAnswer(index, response)}
          onPressNext={_onPressNext}
          previousDisabled={index === 0}
          nextDisabled={!isQuestionAnswered(question.id, ongoingSurvey)}
        />
      );
    },
    [_onPressPrevious, _onPressAnswer, _onPressNext, ongoingSurvey]
  );

  return (
    <Carousel
      ref={carouselRef}
      loop={false}
      data={survey.questions}
      renderItem={_renderQuestionItem}
      width={dimensions.width}
    />
  );
};

export default QuestionCarousel;
