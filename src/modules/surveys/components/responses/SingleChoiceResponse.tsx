import { RadioButton } from 'react-native-paper';
import { SingleChoiceResponseData } from '../../types/responseTypes';
import { ScrollView, View } from 'react-native';
import { useMemo } from 'react';
import { compareByOrderFn } from '../../utils/sortByOrder';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SingleChoiceResponse.styles';
import { TextKeys, useLocalization } from '../../../../core/localization';

/**
 * Renders response input for single choice questions.
 * Renders a basic radio button.
 */
const SingleChoiceResponse = (props: {
  responseData: SingleChoiceResponseData;
  response: string;
  onResponseSubmitted: (value: string) => void;
}) => {
  const { responseData, response, onResponseSubmitted } = props;

  const styles = useThemedStyles(createStyles);
  const { t } = useLocalization();

  const options = useMemo(() => {
    return [...responseData.options].sort(compareByOrderFn);
  }, [responseData]);

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      <RadioButton.Group
        value={response}
        onValueChange={onResponseSubmitted}
      >
        {options.map((item) => {
          return (
            <View
              key={item.value}
              style={styles.choiceContainer}
            >
              <RadioButton.Item
                mode="android"
                label={t(item.label as TextKeys)}
                value={item.value}
                position="leading"
                labelStyle={styles.labelStyle}
                labelVariant="titleMedium"
              />
            </View>
          );
        })}
      </RadioButton.Group>
    </ScrollView>
  );
};

export default SingleChoiceResponse;
