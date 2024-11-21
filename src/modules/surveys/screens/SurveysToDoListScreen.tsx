import { Text, View } from 'react-native';
import { useService } from '../../../common/services/useService';
import { getSurveys } from '../services/getSurveys';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { surveySlice } from '../store/surveySlice';
import { surveySelectors } from '../store/surveySelectors';
import { ActivityIndicator } from 'react-native-paper';
import { useThemedStyles } from '../../../core/colorScheme';
import { createStyles } from './SurveysToDoListScreen.styles';
import dimensions from '../../../common/styling/dimensions';

const SurveysToDoListScreen = () => {
  const dispatch = useDispatch();

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

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={dimensions.measure(50)} />
      </View>
    );
  }

  return (
    <View>
      <Text>SurveysToDoListScreen</Text>
    </View>
  );
};

export default SurveysToDoListScreen;
