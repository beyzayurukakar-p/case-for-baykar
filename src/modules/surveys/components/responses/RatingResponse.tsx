import { Text } from 'react-native-paper';
import { RatingResponseData } from '../../types/responseTypes';
import { useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './RatingResponse.styles';
import { TextKeys, useLocalization } from '../../../../core/localization';
import { useMemo } from 'react';
import { compareByOrderFn } from '../../utils/sortByOrder';
import { TouchableOpacity, View } from 'react-native';

const RatingResponse = (props: {
  responseData: RatingResponseData;
  response: string;
  onResponseSubmitted: (value: string) => void;
}) => {
  const { responseData, response, onResponseSubmitted } = props;

  const styles = useThemedStyles(createStyles);
  const { t } = useLocalization();

  const options = useMemo(() => {
    return [...responseData.options].sort(compareByOrderFn);
  }, [responseData]);

  const _onPress = (value: string) => {
    onResponseSubmitted(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        {options.map((item) => (
          <TouchableOpacity
            key={item.value}
            style={[
              styles.choiceTouchable,
              response === item.value ? { borderColor: item.color } : null,
            ]}
            onPress={() => _onPress(item.value)}
          >
            <View style={[styles.choiceInnerContainer, { backgroundColor: item.color }]}>
              <Text
                variant="titleMedium"
                style={styles.label}
              >
                {t(item.label as TextKeys)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default RatingResponse;
