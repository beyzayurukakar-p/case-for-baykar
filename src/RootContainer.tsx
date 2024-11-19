import { Navigation } from './core/navigation/Navigation';
import { PaperProvider } from 'react-native-paper';

const RootContainer = () => {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  );
};

export default RootContainer;
