import { Button, Icon, Text } from 'react-native-paper';
import { createStyles } from './SurveyItem.styles';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CompletedSurvey, OngoingSurvey, Survey } from '../../types/surveyTypes';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import dimensions from '../../../../common/styling/dimensions';
import Card from '../../../../common/components/card/Card';
import { formatDate, intervalToDuration } from 'date-fns';
import { formatDuration } from '../../utils/timerUtils';
import { useMemo } from 'react';

/**
 * Renders a survey item for completed, ongoing, or not-started survey lists.
 */
const SurveyItem = (props: {
  item: Survey | (Survey & OngoingSurvey) | CompletedSurvey;
  onPress?: () => void;
}) => {
  const { item: surveyItem } = props;

  const { t, dateLocale } = useLocalization();
  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();
  const nav = useNavigation();

  const status: 'ongoing' | 'completed' | 'new' = useMemo(() => {
    if ((surveyItem as CompletedSurvey).completedOn) {
      return 'completed';
    }
    if ((surveyItem as OngoingSurvey).lastUpdatedOn) {
      return 'ongoing';
    }
    return 'new';
  }, [surveyItem]);

  const dateString = useMemo(() => {
    if (status === 'completed') {
      return formatDate((surveyItem as CompletedSurvey).completedOn, 'PP', { locale: dateLocale });
    }
    if (status === 'ongoing') {
      return formatDate((surveyItem as OngoingSurvey).lastUpdatedOn as string, 'PP', {
        locale: dateLocale,
      });
    }
    return '-';
  }, [status, surveyItem, dateLocale]);

  const timeString = useMemo(() => {
    if (status === 'completed' || status === 'ongoing') {
      return formatDuration(
        intervalToDuration({
          start: 0,
          end: (surveyItem as CompletedSurvey | OngoingSurvey).surveyDuration,
        })
      );
    }
    return '-';
  }, [status, surveyItem]);

  // For starting new surveys or continuing ongoing surveys
  const _onPress_StartContinue = () => {
    nav.navigate('SignedIn', {
      screen: 'Survey',
      params: {
        surveyId: surveyItem.id,
      },
    });
  };

  const _renderDateTimePart = () => {
    if (status === 'new') {
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
          {dateString}
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
          {timeString}
        </Text>
      </View>
    );
  };

  return (
    <Card onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text
            variant="titleMedium"
            style={styles.surveyTitleText}
            numberOfLines={1}
          >
            {t(surveyItem.title as TextKeys)}
          </Text>
          {status !== 'completed' ? (
            <Button
              mode={'outlined'}
              onPress={_onPress_StartContinue}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
            >
              {t(status === 'new' ? 'start' : 'continue')}
            </Button>
          ) : null}
        </View>
        {_renderDateTimePart()}
      </View>
    </Card>
  );
};

export default SurveyItem;
