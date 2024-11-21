import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useNavigateToSurvey = () => {
  const nav = useNavigation();

  const navigateToSurvey = useCallback(() => {
    nav.navigate('SignedIn', {
      screen: 'SurveysToDoList',
    });
  }, [nav]);

  return navigateToSurvey;
};
