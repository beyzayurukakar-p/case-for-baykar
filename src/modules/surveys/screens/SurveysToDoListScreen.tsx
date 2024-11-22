import { SectionList, SectionListData, SectionListRenderItemInfo, Text, View } from 'react-native';
import { useService } from '../../../common/services/useService';
import { getSurveys } from '../services/getSurveys';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { surveySlice } from '../store/surveySlice';
import { surveySelectors } from '../store/surveySelectors';
import { ActivityIndicator } from 'react-native-paper';
import { useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './SurveysToDoListScreen.styles';
import dimensions from '../../../common/styling/dimensions';
import { Survey } from '../types/surveyTypes';
import { TextKeys, useLocalization } from '../../../core/localization';
import SurveyItem from '../components/survey-item/SurveyItem';

type SectionItem = {
  name: 'not-started' | 'ongoing';
  title: TextKeys;
  data: Array<Survey>;
};

const SurveysToDoListScreen = () => {
  const dispatch = useDispatch();

  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const { loading, request } = useService(getSurveys);

  const notStartedSurveys = useSelector(surveySelectors.notStartedSurveys);
  const ongoingSurveys = useSelector(surveySelectors.ongoingSurveys);

  useEffect(() => {
    if (notStartedSurveys.length === 0 && ongoingSurveys.length === 0) {
      request(undefined, {
        onSuccess: (allSurveys) => {
          if (allSurveys) {
            dispatch(surveySlice.actions.setSurveys(allSurveys));
          }
        },
      });
    }
  }, [notStartedSurveys, ongoingSurveys, dispatch, request]);

  const sectionsData: SectionItem[] = useMemo(() => {
    return [
      {
        name: 'not-started',
        title: 'not-started-surveys',
        data: notStartedSurveys,
      },
      {
        name: 'ongoing',
        title: 'ongoing-surveys',
        data: ongoingSurveys,
      },
    ];
  }, [notStartedSurveys, ongoingSurveys]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={dimensions.measure(50)} />
      </View>
    );
  }

  const _renderSectionHeader = ({ section }: { section: SectionListData<Survey, SectionItem> }) => {
    if (section.name === 'not-started' && notStartedSurveys.length === 0) return null;
    if (section.name === 'ongoing' && ongoingSurveys.length === 0) return null;

    return <Text style={styles.sectionTitleText}>{t(section.title)}</Text>;
  };

  const _renderItem = ({ item }: SectionListRenderItemInfo<Survey>) => {
    const surveyItem = item as Survey;
    return <SurveyItem item={surveyItem} />;
  };

  return (
    <SectionList
      style={styles.list}
      sections={sectionsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={_renderItem}
      renderSectionHeader={_renderSectionHeader}
    />
  );
};

export default SurveysToDoListScreen;
