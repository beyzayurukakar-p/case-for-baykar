import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CompletedSurvey, OngoingQuestion, OngoingSurvey, Survey } from '../types/surveyTypes';

type SurveyState = {
  surveys: {
    [surveyId: number]: Survey;
  };
  notStartedSurveys: {
    [surveyId: number]: Survey;
  };
  ongoingSurveys: {
    [surveyId: number]: OngoingSurvey;
  };
  completedSurveys: {
    [surveyId: number]: CompletedSurvey;
  };
};

const INITIAL_STATE: SurveyState = {
  surveys: {},
  notStartedSurveys: {},
  ongoingSurveys: {},
  completedSurveys: {},
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState: INITIAL_STATE,
  reducers: {
    setSurveys: (state, action: PayloadAction<Survey[]>) => {
      for (const survey of action.payload) {
        state.surveys[survey.id] = survey;

        // Also find not started surveys
        if (!state.ongoingSurveys[survey.id] && !state.completedSurveys[survey.id]) {
          state.notStartedSurveys[survey.id] = survey;
        }
      }
    },

    /*
    SURVEY STEPS:
    - view question
    - answer question
    - pause survey
    - complete survey
    Important to know: The user cannot pass a question without answering it!
    */
    viewQuestion: (
      state,
      action: PayloadAction<{
        surveyId: number;
        questionIndex: number;
        duration: number;
      }>
    ) => {
      const { surveyId, questionIndex, duration } = action.payload;
      const questionId = state.surveys[surveyId].questions[questionIndex].id;

      /*
      If this is the first time the user views this survey,
      1. Create an ongoing survey instance and set duration to 0.
      2. Remove the survey from not started surveys
      */
      if (!state.ongoingSurveys[surveyId]) {
        state.ongoingSurveys[surveyId] = {
          id: surveyId,
          responses: {},
          surveyDuration: 0,
          ongoingQuestion: {
            id: questionId,
            duration: 0,
            index: questionIndex,
          },
        };
        delete state.notStartedSurveys[surveyId];
        return;
      }

      /*
      In all steps in a survey (except first view), save survey duration.
      So that we can get the difference to use it to calculate the duration of the next step
      */
      state.ongoingSurveys[surveyId].surveyDuration = duration;

      /*
      If there is NO response to this question and the question is already not ongoing,
      then the user has viewed other questions in this survey but views this question for the first time.
      So, update ongoing question instance and set question duration to 0
      */
      if (
        !state.ongoingSurveys[surveyId].responses[questionId] &&
        state.ongoingSurveys[surveyId].ongoingQuestion?.id !== questionId
      ) {
        state.ongoingSurveys[surveyId].ongoingQuestion = {
          id: questionId,
          index: questionIndex,
          duration: 0,
        };
        return;
      }

      /*
      If there IS a response to this question,
      then the user came back to this question.
      So, change the ongoing question to this question
      */
      if (state.ongoingSurveys[surveyId].responses[questionId]) {
        const responseDuration = state.ongoingSurveys[surveyId].responses[questionId].duration;
        state.ongoingSurveys[surveyId].ongoingQuestion = {
          id: questionId,
          index: questionIndex,
          duration: responseDuration,
        };
        return;
      }
    },
    answerQuestion: (
      state,
      action: PayloadAction<{
        surveyId: number;
        questionId: number;
        response: any;
        duration: number;
      }>
    ) => {
      const { surveyId, questionId, response, duration } = action.payload;

      /* Get the latest duration saved */
      const latestDurationSaved = state.ongoingSurveys[surveyId].surveyDuration;
      const timeSinceLastStep = duration - latestDurationSaved;

      /*
      In all steps in a survey (except first view), save survey duration.
      So that we can get the difference to use it to calculate the duration of the next step
      */
      state.ongoingSurveys[surveyId].surveyDuration = duration;

      /* 
      Update ongoing question's duration
      */
      const ongoingQuestion = state.ongoingSurveys[surveyId].ongoingQuestion as OngoingQuestion;
      ongoingQuestion.duration += timeSinceLastStep;

      /*
      Add/Update user's response
      */
      if (!state.ongoingSurveys[surveyId].responses[questionId]) {
        state.ongoingSurveys[surveyId].responses[questionId] = {
          duration: timeSinceLastStep,
          response: response,
        };
      } else {
        state.ongoingSurveys[surveyId].responses[questionId].response = response;
        state.ongoingSurveys[surveyId].responses[questionId].duration = ongoingQuestion.duration;
      }
    },
    pauseSurvey: (
      state,
      action: PayloadAction<{ surveyId: number; duration: number; date: string }>
    ) => {
      const { surveyId, duration, date } = action.payload;

      /* Get the latest duration saved */
      const latestDurationSaved = state.ongoingSurveys[surveyId].surveyDuration;
      const timeSinceLastStep = duration - latestDurationSaved;

      /* Update ongoing question duration */
      const ongoingQuestion = state.ongoingSurveys[surveyId].ongoingQuestion;
      if (ongoingQuestion) {
        ongoingQuestion.duration += timeSinceLastStep;
      }

      /* Update lastUpdate date */
      state.ongoingSurveys[surveyId].lastUpdatedOn = date;

      /*
      In all steps in a survey (except first view), save survey duration.
      So that we can get the difference to use it to calculate the duration of the next step
      */
      state.ongoingSurveys[surveyId].surveyDuration = duration;
    },
    endSurvey: (
      state,
      action: PayloadAction<{ surveyId: number; duration: number; date: string }>
    ) => {
      const { surveyId, duration, date } = action.payload;

      /* Get the latest duration saved */
      const latestDurationSaved = state.ongoingSurveys[surveyId].surveyDuration;
      const timeSinceLastStep = duration - latestDurationSaved;

      /* Update survey duration */
      const ongoingSurvey = state.ongoingSurveys[surveyId];
      ongoingSurvey.surveyDuration += timeSinceLastStep;

      /* Calculate result */
      let result = 0;
      for (const response of Object.values(ongoingSurvey.responses)) {
        if (!isNaN(Number(response.response))) {
          result += Number(response.response);
        }
      }

      /* Add to completed surveys */
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { lastUpdatedOn: _, ...rest } = ongoingSurvey;
      const originalSurvey = state.surveys[surveyId];
      state.completedSurveys[surveyId] = {
        ...rest,
        ...originalSurvey,
        result,
        completedOn: date,
      };

      /* Remove survey from ongoing surveys */
      delete state.ongoingSurveys[surveyId];
    },
  },
});
