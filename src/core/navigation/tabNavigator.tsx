import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompletedSurveyListScreen } from '../../modules/surveys';
import { HomeScreen } from '../../modules/home';
import { ProfileScreen } from '../../modules/profile';
import TabBarLabel from './components/TabBarLabel';
import TabBarIcon from './components/TabBarIcon';
import TabBarBackground from './components/TabBarBackground';
import { TextKeys } from '../localization';

const getTabBarOptions = (labelKey: TextKeys, iconKey: string) => ({
  tabBarIcon: ({ focused }: { focused: boolean }) => {
    return (
      <TabBarIcon
        focused={focused}
        iconKey={iconKey}
      />
    );
  },
  tabBarLabel: ({ focused }: { focused: boolean }) => {
    return (
      <TabBarLabel
        focused={focused}
        textKey={labelKey}
      />
    );
  },
});

export const tabNavigator = createBottomTabNavigator({
  screens: {
    Surveys: {
      screen: CompletedSurveyListScreen,
      options: {
        ...getTabBarOptions('surveys-screen-title', 'chart-timeline-variant'),
      },
    },
    Home: {
      screen: HomeScreen,
      options: {
        ...getTabBarOptions('home-screen-title', 'home'),
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        ...getTabBarOptions('profile-screen-title', 'account'),
      },
    },
  },
  initialRouteName: 'Home',
  screenOptions: {
    headerShown: false,
    tabBarBackground: TabBarBackground,
  },
});
