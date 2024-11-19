import { Text } from 'react-native';
import { useLocalization } from '../../localization/useLocale';

const TabBarLabel = (props: { focused: boolean; textId: string }) => {
  const { t } = useLocalization();
  return <Text>{t(props.textId)}</Text>;
};

export default TabBarLabel;
