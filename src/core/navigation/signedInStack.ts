import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen } from '../../modules/auth';

export const signedInStack = createStackNavigator({
  screens: {
    Auth: AuthScreen,
  },
});
