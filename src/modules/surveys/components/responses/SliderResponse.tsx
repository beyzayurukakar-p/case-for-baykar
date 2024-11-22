import { Text } from 'react-native-paper';
import { SliderResponseData } from '../../types/responseTypes';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SliderResponse.styles';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';

const SliderResponse = (props: {
  responseData: SliderResponseData;
  response: number | undefined;
  onResponseSubmitted: (value: number) => void;
}) => {
  const { responseData, response, onResponseSubmitted } = props;

  const styles = useThemedStyles(createStyles);
  const theme = useAppTheme();

  const [value, setValue] = useState<number>(response || responseData.min);

  return (
    <View style={styles.container}>
      <View style={styles.valueCircle}>
        <Text
          variant="headlineLarge"
          style={styles.valueText}
        >
          {value}
        </Text>
      </View>
      <Slider
        minimumValue={responseData.min}
        maximumValue={responseData.max}
        step={responseData.step}
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.colors.outlineVariant}
        thumbTintColor={theme.colors.primary}
        value={response || responseData.min}
        onValueChange={setValue}
        onSlidingComplete={onResponseSubmitted}
      />
    </View>
  );
};

export default SliderResponse;
