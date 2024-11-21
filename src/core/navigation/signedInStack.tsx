import { createStackNavigator } from '@react-navigation/stack';
import { tabNavigator } from './tabNavigator';
import { PrivacyPolicyScreen, TermsConditionsScreen } from '../../modules/profile';
import { SurveyScreen, SurveyCompletedScreen, SurveysToDoListScreen } from '../../modules/surveys';
import HeaderTitle from './components/HeaderTitle';

export const signedInStack = createStackNavigator({
  screens: {
    Tabs: tabNavigator,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsConditions: TermsConditionsScreen,
    Survey: SurveyScreen,
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
