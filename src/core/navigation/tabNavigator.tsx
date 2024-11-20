import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SurveyListScreen } from '../../modules/surveys';
import { HomeScreen } from '../../modules/home';
import { ProfileScreen } from '../../modules/profile';
import TabBarLabel from './components/TabLabel';

export const tabNavigator = createBottomTabNavigator({
  screens: {
    Surveys: {
      screen: SurveyListScreen,
      options: {
        tabBarLabel: ({ focused }) => {
          return (
            <TabBarLabel
              focused={focused}
              textKey="surveys-screen-title"
            />
          );
        },
      },
    },
    Home: {
      screen: HomeScreen,
      options: {
        tabBarLabel: ({ focused }) => {
          return (
            <TabBarLabel
              focused={focused}
              textKey="home-screen-title"
            />
          );
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarLabel: ({ focused }) => {
          return (
            <TabBarLabel
              focused={focused}
              textKey="profile-screen-title"
            />
          );
        },
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});
