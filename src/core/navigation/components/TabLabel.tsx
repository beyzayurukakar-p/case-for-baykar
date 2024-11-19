import { useLocalization } from '../../localization/useLocale';
import { useTheme, Text } from 'react-native-paper';

const TabBarLabel = (props: { focused: boolean; textId: string }) => {
  const { t } = useLocalization();
  const theme = useTheme();
  return (
    <Text
      style={{
        color: theme.colors.onSurface,
      }}
    >
      {t(props.textId)}
    </Text>
  );
};

export default TabBarLabel;
