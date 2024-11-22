import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { tabNavigator } from './tabNavigator';
import { PrivacyPolicyScreen, TermsConditionsScreen } from '../../modules/profile';
import { SurveyScreen, SurveyCompletedScreen, SurveysToDoListScreen } from '../../modules/surveys';
import HeaderTitle from './components/HeaderTitle';
import { StaticParamList } from '@react-navigation/native';

export const signedInStack = createStackNavigator({
  screens: {
    Tabs: tabNavigator,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsConditions: TermsConditionsScreen,
    Survey: {
      screen: SurveyScreen,
      options: {
        gestureEnabled: false,
      },
    },
    SurveyCompleted: SurveyCompletedScreen,
    SurveysToDoList: {
      screen: SurveysToDoListScreen,
      options: {
        headerShown: true,
        headerBackButtonDisplayMode: 'minimal',
        headerTitle: () => {
          return <HeaderTitle textKey={'start-survey'} />;
        },
      },
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

type SignedInStackParamList = StaticParamList<typeof signedInStack>;
export type ScreenNavigationProp<RouteName extends keyof SignedInStackParamList> =
  StackNavigationProp<SignedInStackParamList, RouteName>;
