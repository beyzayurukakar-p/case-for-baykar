import { createStaticNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsSignedIn, useIsSignedOut } from '../auth';
import { mainTabNavigator } from './mainTabNavigator';
import { signedOutStack } from './signedOutStack';

const RootStack = createStackNavigator({
  screens: {
    SignedOut: {
      if: useIsSignedOut,
      screen: signedOutStack,
    },
    SignedIn: {
      if: useIsSignedIn,
      screen: mainTabNavigator,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigation = createStaticNavigation(RootStack);
