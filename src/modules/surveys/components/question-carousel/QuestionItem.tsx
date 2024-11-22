import { View } from 'react-native';
import { Question } from '../../types/questionTypes';
import { Button, Text } from 'react-native-paper';

const QuestionItem = (props: {
  question: Question;
  questionIndex: number;
  onPressPrevious: () => void;
  onPressAnswer: (response: any) => void;
  onPressNext: () => void;
  previousDisabled: boolean;
  nextDisabled: boolean;
}) => {
  return (
    <View>
      <Text>{props.question.text}</Text>
      <Button
        disabled={props.previousDisabled}
        onPress={props.onPressPrevious}
      >
        Önceki
      </Button>
      <Button onPress={() => props.onPressAnswer(1)}>Cevapla</Button>
      <Button
        disabled={props.nextDisabled}
        onPress={props.onPressNext}
      >
        Sonraki
      </Button>
    </View>
  );
};

export default QuestionItem;
