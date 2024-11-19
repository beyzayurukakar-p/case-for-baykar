import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SurveyListScreen } from '../../modules/surveys';
import { HomeScreen } from '../../modules/home';
import { ProfileScreen } from '../../modules/profile';
import TabBarLabel from './components/TabLabel';

export const mainTabNavigator = createBottomTabNavigator({
  screens: {
    Surveys: {
      screen: SurveyListScreen,
      options: {
        tabBarLabel: ({ focused }) => {
          return <TabBarLabel focused={focused} textId="surveys-screen-title" />;
        },
      },
    },
    Home: {
      screen: HomeScreen,
      options: {
        tabBarLabel: ({ focused }) => {
          return <TabBarLabel focused={focused} textId="home-screen-title" />;
        },
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarLabel: ({ focused }) => {
          return <TabBarLabel focused={focused} textId="profile-screen-title" />;
        },
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});
