import { intervalToDuration } from 'date-fns';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Icon, IconButton, ProgressBar, Text } from 'react-native-paper';
import { formatDuration } from '../../utils/timerUtils';
import { SafeAreaView, View } from 'react-native';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SurveyHeader.styles';
import dimensions from '../../../../common/styling/dimensions';

export type SurveyHeaderRef = { getDuration: () => number };
type SurveyHeaderProps = {
  surveyTitle: string;
  questionCount: number;
  currentStep: number;
};
const SurveyHeader = forwardRef<SurveyHeaderRef, SurveyHeaderProps>(
  (props: SurveyHeaderProps, ref) => {
    useImperativeHandle(ref, () => ({
      getDuration: () => {
        return durationMs;
      },
    }));

    const { surveyTitle, questionCount, currentStep } = props;

    const styles = useThemedStyles(createStyles);
    const theme = useAppTheme();

    const [durationMs, setDurationMs] = useState<number>(0);
    const durationObj = intervalToDuration({ start: 0, end: durationMs });

    useEffect(() => {
      const id = setInterval(() => {
        setDurationMs((prev) => prev + 1000);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }, []);

    const _renderTimer = () => {
      return (
        <View style={styles.timerContainer}>
          <Icon
            source={'av-timer'}
            size={dimensions.measure(25)}
            color={theme.colors.primaryContainer}
          />
          <Text
            variant="titleLarge"
            style={styles.timeText}
          >
            {formatDuration(durationObj)}
          </Text>
        </View>
      );
    };

    const _renderProgress = () => {
      return (
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              progress={currentStep / questionCount}
              style={styles.progressBar}
              color={theme.colors.onPrimary}
            />
          </View>
          <Text
            variant="bodyLarge"
            style={styles.progressCurrentStepText}
          >
            {currentStep}
            <Text
              variant="bodyMedium"
              style={styles.progressTotalStepText}
            >{` / ${questionCount}`}</Text>
          </Text>
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <IconButton
              icon={'home'}
              mode="contained"
              containerColor={theme.colors.onPrimary}
              onPress={() => {}}
            />
            {_renderTimer()}
          </View>
          <Text
            variant="titleMedium"
            style={styles.surveyTitleText}
          >
            {surveyTitle}
          </Text>
          {_renderProgress()}
        </View>
      </SafeAreaView>
    );
  }
);

export default SurveyHeader;
