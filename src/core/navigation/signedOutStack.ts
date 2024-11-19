import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '../../modules/auth';

export const signedOutStack = createStackNavigator({
  screens: {
    Auth: AuthScreen,
  },
});
