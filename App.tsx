import { Provider } from 'react-redux';
import './src/core/localization/configuration';
import RootContainer from './src/RootContainer';
import { store } from './src/core/store';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/common/components/toast/toastConfig';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
      <Toast config={toastConfig} />
    </Provider>
  );
};

export default App;
