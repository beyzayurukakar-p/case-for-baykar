import { Button, Icon, Text } from 'react-native-paper';
import { createStyles } from './SurveyItem.styles';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OngoingSurvey, Survey } from '../../types/surveyTypes';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';
import Card from '../../../../common/components/card/Card';
import { formatDate, intervalToDuration } from 'date-fns';
import { formatDuration } from '../../utils/timerUtils';

const SurveyItem = (props: { item: Survey & Partial<OngoingSurvey> }) => {
  const { item } = props;

  const { t, dateLocale } = useLocalization();
  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();
  const nav = useNavigation();

  const isNewSurvey = !item.surveyDuration;

  const _onPress_StartContinue = () => {
    nav.navigate('SignedIn', {
      screen: 'Survey',
      params: {
        surveyId: item.id,
      },
    });
  };

  const _renderOngoingPart = () => {
    if (isNewSurvey) {
      return null;
    }

    return (
      <View style={styles.bottomContainer}>
        <Icon
          source={'calendar-month'}
          size={dimensions.measure(15)}
          color={theme.colors.primary}
        />
        <Text
          variant="bodySmall"
          style={styles.dateTimeText}
        >
          {item.lastUpdatedOn ? formatDate(item.lastUpdatedOn, 'PP', { locale: dateLocale }) : '-'}
        </Text>
        <Icon
          source={'clock-edit-outline'}
          size={dimensions.measure(15)}
          color={theme.colors.primary}
        />
        <Text
          variant="bodySmall"
          style={styles.dateTimeText}
        >
          {item.surveyDuration
            ? formatDuration(intervalToDuration({ start: 0, end: item.surveyDuration }))
            : '-'}
        </Text>
      </View>
    );
  };

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text
            variant="titleMedium"
            style={styles.surveyTitleText}
            numberOfLines={1}
          >
            {t(item.title as TextKeys)}
          </Text>
          <Button
            mode={'outlined'}
            onPress={_onPress_StartContinue}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
          >
            {t(isNewSurvey ? 'start' : 'continue')}
          </Button>
        </View>
        {_renderOngoingPart()}
      </View>
    </Card>
  );
};

export default SurveyItem;
