import { View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './CompletedResponseItem.styles';
import { Question } from '../../types/questionTypes';
import { GivenResponse } from '../../types/surveyTypes';
import { formatDuration } from '../../utils/timerUtils';
import { intervalToDuration } from 'date-fns';
import { getResponseText } from '../../utils/getResponseText';
import Card from '../../../../common/components/card/Card';

const CompletedResponseItem = (props: { response: GivenResponse & { question: Question } }) => {
  const { response } = props;

  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  return (
    <Card>
      <View style={styles.topContainer}>
        <Text
          variant="bodyLarge"
          style={styles.questionText}
        >
          {t(response.question.text as TextKeys)}
        </Text>
        <Text
          variant="bodyLarge"
          style={styles.durationText}
        >
          {formatDuration(intervalToDuration({ start: 0, end: response.duration }))}
        </Text>
      </View>
      <Divider style={styles.divider} />
      <Text
        variant="bodyLarge"
        style={styles.yourResponseText}
      >
        {`${t('your-response')}:`}
      </Text>
      <Text
        variant="titleLarge"
        style={styles.responseValueText}
      >
        {getResponseText(response.response, response.question, t)}
      </Text>
    </Card>
  );
};

export default CompletedResponseItem;
