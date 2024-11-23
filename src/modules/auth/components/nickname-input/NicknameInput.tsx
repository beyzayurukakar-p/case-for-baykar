import { Text, TextInput } from 'react-native-paper';
import { useLocalization } from '../../../../core/localization';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './NicknameInput.styles';

/** Nickname textinput with privacy related text beneath */
const NicknameInput = (props: { value?: string; onChange: (val: string) => void }) => {
  const { t } = useLocalization();
  const styles = useThemedStyles(createStyles);

  return (
    <>
      <TextInput
        mode="outlined"
        label={t('nickname')}
        value={props.value}
        onChangeText={props.onChange}
        autoCapitalize="none"
      />
      <Text
        variant="bodySmall"
        style={styles.nicknameNoteText}
      >
        {t('we-care-about-privacy')}
      </Text>
    </>
  );
};

export default NicknameInput;
