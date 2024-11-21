import { StyleSheet } from 'react-native';
import { CreateStylesParams, useThemedStyles } from '../../colorScheme';
import { TextKeys, useLocalization } from '../../localization';
import { Text } from 'react-native-paper';

const TabBarLabel = (props: { focused: boolean; textKey: TextKeys }) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);
  return (
    <Text
      style={props.focused ? styles.focused : styles.notFocused}
      variant={'labelLarge'}
    >
      {t(props.textKey)}
    </Text>
  );
};

const createStyles = ({ colors }: CreateStylesParams) =>
  StyleSheet.create({
    focused: {
      fontWeight: '600',
      color: colors.primary,
    },
    notFocused: {
      fontWeight: '400',
      color: colors.disabledOnSurface,
    },
  });

export default TabBarLabel;
