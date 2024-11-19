import { Text } from 'react-native';
import { useLocale } from '../../localization';

const TabBarLabel = (props: { focused: boolean; textId: string }) => {
  const localized = useLocale();
  return <Text>{localized(props.textId)}</Text>;
};

export default TabBarLabel;
