import { Provider } from 'react-redux';
import './src/core/localization/configuration';
import RootContainer from './src/RootContainer';
import { store } from './src/core/store';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/common/components/toast/toastConfig';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { configureReanimatedLogger } from 'react-native-reanimated';

// For disabling a reanimated warning caused by a library
configureReanimatedLogger({
  strict: false,
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootContainer />
        <Toast config={toastConfig} />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
