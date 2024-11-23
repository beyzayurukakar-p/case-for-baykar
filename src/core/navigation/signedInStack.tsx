import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { tabNavigator } from './tabNavigator';
import {
  CompletedSurveyDetailScreen,
  SurveyScreen,
  SurveysToDoListScreen,
} from '../../modules/surveys';
import HeaderTitle from './components/HeaderTitle';
import { StaticParamList } from '@react-navigation/native';

export const signedInStack = createStackNavigator({
  screens: {
    Tabs: tabNavigator,
    Survey: {
      screen: SurveyScreen,
      options: {
        gestureEnabled: false, // Going back in survey screen needs to be controlled
      },
    },
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
    CompletedSurveyDetail: CompletedSurveyDetailScreen,
  },
  screenOptions: {
    headerShown: false,
  },
});

type SignedInStackParamList = StaticParamList<typeof signedInStack>;

/**
 * Type to access stack navigator methods of useNavigation
 * @example useNavigation<ScreenNavigationProp<'Survey'>>()
 */
export type ScreenNavigationProp<RouteName extends keyof SignedInStackParamList> =
  StackNavigationProp<SignedInStackParamList, RouteName>;
