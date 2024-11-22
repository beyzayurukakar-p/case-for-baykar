import { Button, TextInput } from 'react-native-paper';
import { OpenEndedResponseData } from '../../types/responseTypes';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './OpenEndedResponse.styles';
import { useEffect, useState } from 'react';
import { Keyboard, ScrollView } from 'react-native';
import { useLocalization } from '../../../../core/localization';

const OpenEndedResponse = (props: {
  responseData: OpenEndedResponseData;
  response: string | undefined;
  onResponseSubmitted: (value: string) => void;
}) => {
  const { responseData, response, onResponseSubmitted } = props;

  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  const [value, setValue] = useState<string>(response || '');
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);

  const buttonDisabled = responseData.required && value.trim().length === 0;

  useEffect(() => {
    const listener1 = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    const listener2 = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });
    () => {
      listener1.remove();
      listener2.remove();
    };
  }, []);

  const _onPress = () => {
    Keyboard.dismiss();
    onResponseSubmitted(value);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        multiline
        mode="outlined"
        style={[styles.input, keyboardOpen ? styles.inputKeyboardOpen : null]}
        value={value}
        onChangeText={setValue}
      />
      <Button
        mode="contained"
        onPress={_onPress}
        disabled={buttonDisabled}
        contentStyle={[styles.button, buttonDisabled ? styles.buttonDisabled : null]}
      >
        {t('ok')}
      </Button>
    </ScrollView>
  );
};

export default OpenEndedResponse;
