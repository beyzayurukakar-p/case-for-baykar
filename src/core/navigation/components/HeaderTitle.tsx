import { TextKeys, useLocalization } from '../../localization';
import { Text } from 'react-native-paper';

const HeaderTitle = (props: { textKey: TextKeys }) => {
  const { t } = useLocalization();
  return <Text variant={'titleMedium'}>{t(props.textKey)}</Text>;
};

export default HeaderTitle;
