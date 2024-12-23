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
import FullscreenMessage from '../components/fullscreen-message/FullscreenMessage';

type SectionItem = {
  name: 'not-started' | 'ongoing';
  title: TextKeys;
  data: Array<Survey>;
};

/**
 * Renders the screen to list the ongoing (paused) surveys and the new surveys that the user didn't open yet
 */
const SurveysToDoListScreen = () => {
  const dispatch = useDispatch();

  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const { loading, request } = useService(getSurveys);

  const allSurveys = useSelector(surveySelectors.allSurveys);
  const notStartedSurveys = useSelector(surveySelectors.notStartedSurveys);
  const ongoingSurveys = useSelector(surveySelectors.ongoingSurveys);

  useEffect(() => {
    // Request surveys if not cached
    if (allSurveys.length === 0) {
      request(undefined, {
        onSuccess: (_allSurveys) => {
          if (_allSurveys) {
            // Update surveys in store
            dispatch(surveySlice.actions.setSurveys(_allSurveys));
          }
        },
      });
    }
  }, [allSurveys, dispatch, request]);

  // Data for Section List
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

  if (notStartedSurveys.length === 0 && ongoingSurveys.length === 0) {
    return <FullscreenMessage />;
  }

  return (
    <SectionList
      style={styles.list}
      sections={sectionsData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={_renderItem}
      renderSectionHeader={_renderSectionHeader}
      ListEmptyComponent={FullscreenMessage}
    />
  );
};

export default SurveysToDoListScreen;
