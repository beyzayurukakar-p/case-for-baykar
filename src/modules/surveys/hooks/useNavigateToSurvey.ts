import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

/**
 * Used by homescreen to navigate to the correct screen
 * when 'start a survey' button is pressed
 */
export const useNavigateToSurvey = () => {
  const nav = useNavigation();

  const navigateToSurvey = useCallback(() => {
    nav.navigate('SignedIn', {
      screen: 'SurveysToDoList',
    });
  }, [nav]);

  return navigateToSurvey;
};
