import { intervalToDuration } from 'date-fns';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Icon, IconButton, ProgressBar, Text } from 'react-native-paper';
import { formatDuration } from '../../utils/timerUtils';
import { View } from 'react-native';
import { useAppTheme, useThemedStyles } from '../../../../core/colorScheme';
import { createStyles } from './SurveyHeader.styles';
import dimensions from '../../../../common/styling/dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type SurveyHeaderRef = { getDuration: () => number };
type SurveyHeaderProps = {
  surveyTitle: string;
  questionCount: number;
  currentStep: number;
  startDurationFrom?: number;
  onPressHome: () => void;
};

const SurveyHeader = forwardRef<SurveyHeaderRef, SurveyHeaderProps>(
  (props: SurveyHeaderProps, ref) => {
    const { surveyTitle, questionCount, currentStep, startDurationFrom } = props;

    const styles = useThemedStyles(createStyles);
    const theme = useAppTheme();
    const insets = useSafeAreaInsets();

    const [durationMs, setDurationMs] = useState<number>(startDurationFrom || 0);
    const durationObj = intervalToDuration({ start: 0, end: durationMs });

    useEffect(() => {
      // Setting up timer
      const id = setInterval(() => {
        setDurationMs((prev) => prev + 1000);
      }, 1000);
      return () => {
        clearInterval(id);
      };
    }, []);

    // Ref methods
    useImperativeHandle(
      ref,
      () => ({
        getDuration: () => durationMs,
      }),
      [durationMs]
    );

    // Renderers
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
      <View style={[styles.container, insets.top > 0 ? { paddingTop: insets.top } : null]}>
        <View style={styles.topContainer}>
          <IconButton
            icon={'home'}
            mode="contained"
            containerColor={theme.colors.onPrimary}
            onPress={props.onPressHome}
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
    );
  }
);

export default SurveyHeader;
