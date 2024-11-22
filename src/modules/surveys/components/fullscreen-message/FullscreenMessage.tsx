import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './FullscreenMessage.styles';

const FullscreenMessage = (props: { customMessage?: TextKeys }) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      <Text
        variant="titleLarge"
        style={styles.messageText}
      >
        {t(props.customMessage || 'nothing-to-show-here')}
      </Text>
    </View>
  );
};

export default FullscreenMessage;
