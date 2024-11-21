import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsSignedIn, useIsSignedOut } from '../user';
import { signedOutStack } from './signedOutStack';
import { signedInStack } from './signedInStack';

const RootStack = createStackNavigator({
  screens: {
    SignedOut: {
      if: useIsSignedOut,
      screen: signedOutStack,
    },
    SignedIn: {
      if: useIsSignedIn,
      screen: signedInStack,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
