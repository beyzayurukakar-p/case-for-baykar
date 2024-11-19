import { createStackNavigator } from '@react-navigation/stack';
import { mainTabNavigator } from './mainTabNavigator';
import { PrivacyPolicyScreen, TermsConditionsScreen } from '../../modules/profile';
import { QuestionScreen, SurveyCompletedScreen } from '../../modules/surveys';

export const signedInStack = createStackNavigator({
  screens: {
    Tabs: mainTabNavigator,
    PrivacyPolicy: PrivacyPolicyScreen,
    TermsConditions: TermsConditionsScreen,
    QuestionScreen: QuestionScreen,
    SurveyCompleted: SurveyCompletedScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});
