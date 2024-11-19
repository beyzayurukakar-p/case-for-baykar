import { Provider } from 'react-redux';
import './src/core/localization/configuration';
import RootContainer from './src/RootContainer';
import { store } from './src/core/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
