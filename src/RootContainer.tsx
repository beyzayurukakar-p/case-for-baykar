import { useAppTheme } from './core/colorScheme';
import { Navigation } from './core/navigation/Navigation';
import { PaperProvider } from 'react-native-paper';

const RootContainer = () => {
  const theme = useAppTheme();

  return (
    <PaperProvider theme={theme}>
      <Navigation theme={theme} />
    </PaperProvider>
  );
};

export default RootContainer;
