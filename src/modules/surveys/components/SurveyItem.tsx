import { Button, Icon, Text } from 'react-native-paper';
import Card from '../../../common/components/card/Card';
import { OngoingSurvey, Survey } from '../types/surveyTypes';
import { useAppTheme, useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './SurveyItem.styles';
import { View } from 'react-native';
import { useLocalization } from '../../../core/localization';
import dimensions from '../../../common/styling/dimensions';
import { useNavigation } from '@react-navigation/native';

const SurveyItem = (props: { item: Survey & Partial<OngoingSurvey> }) => {
  const { item } = props;

  const { t } = useLocalization();
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
          {'01.10.2021'}
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
          {'07:20'}
        </Text>
      </View>
    );
  };

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text
            variant="labelLarge"
            style={styles.surveyTitleText}
          >
            {item.title}
          </Text>
          <Button
            mode={'contained-tonal'}
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
