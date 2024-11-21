import { Icon } from 'react-native-paper';
import { useAppTheme } from '../../colorScheme';
import dimensions from '../../../common/styling/dimensions';

const TabBarIcon = (props: { focused: boolean; iconKey: string }) => {
  const theme = useAppTheme();
  return (
    <Icon
      source={props.iconKey}
      size={props.focused ? dimensions.measure(25) : dimensions.measure(20)}
      color={props.focused ? theme.colors.primary : theme.colors.disabledOnSurface}
    />
  );
};

export default TabBarIcon;
