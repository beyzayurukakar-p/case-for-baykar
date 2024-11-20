import { createStaticNavigation } from '@react-navigation/native';
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

export const Navigation = createStaticNavigation(RootStack);
