import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SurveyListScreen from '../../modules/surveys/screens/SurveyListScreen';
import HomeScreen from '../../modules/home/screens/HomeScreen';
import ProfileScreen from '../../modules/profile/screens/ProfileScreen';

export const mainTabNavigator = createBottomTabNavigator({
  screens: {
    Surveys: {
      screen: SurveyListScreen,
    },
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});
