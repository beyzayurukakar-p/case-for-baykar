import { Checkbox } from 'react-native-paper';
import { MultipleChoiceResponseData } from '../../types/responseTypes';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './MultipleChoiceResponse.styles';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useMemo } from 'react';
import { compareByOrderFn } from '../../utils/sortByOrder';
import { ScrollView, View } from 'react-native';

/**
 * Renders response input for multiple choice questions.
 * Renders a set of checkboxes.
 */
const MultipleChoiceResponse = (props: {
  responseData: MultipleChoiceResponseData;
  response: string[];
  onResponseSubmitted: (value: string[]) => void;
}) => {
  const { responseData, response, onResponseSubmitted } = props;

  const styles = useThemedStyles(createStyles);
  const { t } = useLocalization();

  const options = useMemo(() => {
    return [...responseData.options].sort(compareByOrderFn);
  }, [responseData]);

  const _onPress = (value: string) => {
    const indexOfValue = response?.indexOf(value);
    const copyResponse = [...(response || [])];
    if (indexOfValue >= 0) {
      copyResponse.splice(indexOfValue, 1);
      onResponseSubmitted(copyResponse);
    } else {
      copyResponse.push(value);
      onResponseSubmitted(copyResponse);
    }
  };

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}
    >
      {options.map((item) => (
        <View
          key={item.value + item.order.toString()}
          style={styles.choiceContainer}
        >
          <Checkbox.Item
            label={t(item.label as TextKeys)}
            status={response?.includes(item.value) ? 'checked' : 'unchecked'}
            onPress={() => _onPress(item.value)}
            position="leading"
            labelStyle={styles.labelStyle}
            style={styles.checkboxItem}
            mode="android"
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MultipleChoiceResponse;
