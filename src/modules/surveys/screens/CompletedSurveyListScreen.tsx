import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, View } from 'react-native';
import { useAppSelector } from '../../../core/store';
import { surveySelectors } from '../store/surveySelectors';
import { useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './CompletedSurveyListScreen.styles';
import { ScreenNavigationProp } from '../../../core/navigation/signedInStack';
import { useLocalization } from '../../../core/localization';
import { isSameDay } from 'date-fns';
import { Text } from 'react-native-paper';
import { useMemo } from 'react';
import { CompletedSurvey } from '../types/surveyTypes';
import SurveyItem from '../components/survey-item/SurveyItem';

/**
 * Renders the screen for listing all the completed surveys.
 */
const CompletedSurveyListScreen = () => {
  const styles = useThemedStyles(createStyles);
  const { t } = useLocalization();
  const nav = useNavigation<ScreenNavigationProp<'Tabs'>>();

  const completedSurveys = useAppSelector(surveySelectors.completedSurveys);

  const _surveyCountCompletedToday = useMemo(() => {
    let count = 0;
    const today = new Date();
    for (const survey of completedSurveys) {
      const dateCompleted = new Date(survey.completedOn);
      if (isSameDay(today, dateCompleted)) {
        count++;
      }
    }
    return count;
  }, [completedSurveys]);

  const _onPressSurveyItem = (surveyId: number) => {
    nav.navigate('CompletedSurveyDetail', {
      surveyId,
    });
  };

  const _renderTopInfo = () => {
    return (
      <View style={styles.topInfoContainer}>
        <View style={styles.topSingleInfoContainer}>
          {/* Total count of completed surveys */}
          <Text
            variant="headlineSmall"
            style={styles.topInfoValueText}
          >
            {completedSurveys.length}
          </Text>
          <Text
            variant="titleSmall"
            style={styles.topInfoLabelText}
          >
            {t('total')}
          </Text>
        </View>
        <View style={styles.topSingleInfoContainer}>
          {/* Count of surveys completed today */}
          <Text
            variant="headlineSmall"
            style={styles.topInfoValueText}
          >
            {_surveyCountCompletedToday}
          </Text>
          <Text
            variant="titleSmall"
            style={styles.topInfoLabelText}
          >
            {t('today')}
          </Text>
        </View>
      </View>
    );
  };

  const _renderSurveyItem = ({ item }: { item: CompletedSurvey }) => {
    return (
      <SurveyItem
        item={item}
        onPress={() => _onPressSurveyItem(item.id)}
      />
    );
  };

  const _renderSurveys = () => {
    return (
      <FlatList
        data={completedSurveys}
        renderItem={_renderSurveyItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContentContainer}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text
          variant="headlineSmall"
          style={styles.titleText}
        >
          {t('surveys-completed')}
        </Text>
        {_renderTopInfo()}
        {_renderSurveys()}
      </View>
    </SafeAreaView>
  );
};

export default CompletedSurveyListScreen;
