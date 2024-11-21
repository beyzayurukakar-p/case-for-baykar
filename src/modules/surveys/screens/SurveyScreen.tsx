import { StaticScreenProps } from '@react-navigation/native';
import { Text, View } from 'react-native';

const SurveyScreen = (
  props: StaticScreenProps<{
    surveyId: number;
  }>
) => {
  console.log(props.route.params.surveyId);
  return (
    <View>
      <Text>SurveyScreen</Text>
    </View>
  );
};

export default SurveyScreen;
