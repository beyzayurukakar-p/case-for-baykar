import { View } from 'react-native';
import { Question } from '../../types/questionTypes';
import { Button, Icon, Text } from 'react-native-paper';
import { responseComponentsByType } from '../responses';
import { useAppSelector } from '../../../../core/store';
import { surveySelectors } from '../../store/surveySelectors';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './QuestionItem.styles';
import { useLocalization } from '../../../../core/localization';
import dimensions from '../../../../common/styling/dimensions';

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
  const theme = useAppTheme();
  const { t } = useLocalization();

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
      <View style={styles.buttonsContainer}>
        <Button
          mode="contained"
          disabled={props.previousDisabled}
          onPress={props.onPressPrevious}
          contentStyle={[styles.button, props.previousDisabled ? styles.buttonDisabled : null]}
        >
          <Icon
            source={'arrow-left'}
            size={dimensions.measure(20)}
            color={props.previousDisabled ? theme.colors.inversePrimary2 : theme.colors.onPrimary}
          />
        </Button>
        <Button
          mode="contained"
          disabled={props.nextDisabled}
          onPress={props.onPressNext}
          contentStyle={[
            styles.nextButton,
            styles.button,
            props.nextDisabled ? styles.buttonDisabled : null,
          ]}
          labelStyle={props.nextDisabled ? styles.labelDisabled : null}
        >
          {t('next-question')}
        </Button>
      </View>
    </View>
  );
};

export default QuestionItem;
