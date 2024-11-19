import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsSignedIn, useIsSignedOut } from '../auth';
import { signedInStack } from './signedInStack';
import { signedOutStack } from './signedOutStack';

const RootStack = createStackNavigator({
  screens: {
    Auth: {
      if: useIsSignedOut,
      screen: signedOutStack,
    },
    Main: {
      if: useIsSignedIn,
      screen: signedInStack,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);
