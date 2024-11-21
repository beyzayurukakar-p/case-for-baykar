import { createStackNavigator } from '@react-navigation/stack';
import { tabNavigator } from './tabNavigator';
import { PrivacyPolicyScreen, TermsConditionsScreen } from '../../modules/profile';
import { SurveyScreen, SurveyCompletedScreen } from '../../modules/surveys';

export const signedInStack = createStackNavigator({
  screens: {
    Tabs: tabNavigator,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsConditions: TermsConditionsScreen,
    Survey: SurveyScreen,
    SurveyCompleted: SurveyCompletedScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});
