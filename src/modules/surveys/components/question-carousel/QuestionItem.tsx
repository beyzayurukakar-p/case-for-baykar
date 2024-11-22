import { View } from 'react-native';
import { Question } from '../../types/questionTypes';
import { Text } from 'react-native-paper';
import { responseComponentsByType } from '../responses';
import { useAppSelector } from '../../../../core/store';
import { surveySelectors } from '../../store/surveySelectors';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './QuestionItem.styles';
import BottomButtons from './BottomButtons';

const QuestionItem = (props: {
  surveyId: number;
  question: Question;
  questionIndex: number;
  onPressPrevious: () => void;
  onResponseSubmitted: (response: any) => void;
  onPressNext: () => void;
  previousDisabled: boolean;
  nextDisabled: boolean;
}) => {
  const styles = useThemedStyles(createStyles);

  const response = useAppSelector((state) =>
    surveySelectors.responseOfQuestion(state, props.surveyId, props.question.id)
  );
  const ResponseComponent = responseComponentsByType[props.question.type];
  const _onResponseSubmitted = (newValue: any) => {
    props.onResponseSubmitted(newValue);
  };

  return (
    <View style={styles.container}>
      <Text
        variant={'titleLarge'}
        style={styles.questionText}
      >
        {props.question.text}
      </Text>
      <View style={styles.responseContainer}>
        <ResponseComponent
          response={response}
          onResponseSubmitted={_onResponseSubmitted}
          responseData={props.question.responseData}
        />
      </View>
      <BottomButtons
        leftButtonDisabled={props.previousDisabled}
        rightButtonDisabled={props.nextDisabled}
        onPressLeftButton={props.onPressPrevious}
        onPressRightButton={props.onPressNext}
        rightButtonText="next-question"
      />
    </View>
  );
};

export default QuestionItem;
