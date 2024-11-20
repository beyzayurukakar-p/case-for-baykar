import { TextKeys, useLocalization } from '../../localization';
import { useTheme, Text } from 'react-native-paper';

const TabBarLabel = (props: { focused: boolean; textKey: TextKeys }) => {
  const { t } = useLocalization();
  const theme = useTheme();
  return (
    <Text
      style={{
        color: theme.colors.onSurface,
      }}
    >
      {t(props.textKey)}
    </Text>
  );
};

export default TabBarLabel;
