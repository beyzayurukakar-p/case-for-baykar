import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';
import { OngoingSurvey, Survey } from '../types/surveyTypes';
import { compareByOrderFn } from '../utils/sortByOrder';

const allSurveys = createSelector(
  (state: RootState) => state.survey.surveys,
  (surveysObj) => Object.values(surveysObj)
);

const notStartedSurveys = createSelector(
  (state: RootState) => state.survey.notStartedSurveys,
  (notStartedSurveysObj) => Object.values(notStartedSurveysObj)
);

const ongoingSurveys = createSelector(
  (state: RootState) => state.survey.surveys,
  (state: RootState) => state.survey.ongoingSurveys,
  (allSurveyObj, ongoingSurveysObj) => {
    const list: Array<Survey & OngoingSurvey> = [];
    for (const surveyId of Object.keys(ongoingSurveysObj)) {
      list.push({
        ...ongoingSurveysObj[Number(surveyId)],
        ...allSurveyObj[Number(surveyId)],
      });
    }
    return list;
  }
);

const completedSurveys = createSelector(
  (state: RootState) => state.survey.surveys,
  (state: RootState) => state.survey.completedSurveys,
  (allSurveyObj, completedSurveysObj) => {
    const list = [];
    for (const surveyId of Object.keys(completedSurveysObj)) {
      list.push({
        ...completedSurveysObj[Number(surveyId)],
        ...allSurveyObj[Number(surveyId)],
      });
    }
    return list;
  }
);

const surveyById = createSelector(
  (state: RootState) => state.survey.surveys,
  (_state: RootState, surveyId: number) => surveyId,
  (surveys, surveyId) => {
    const survey = surveys[surveyId];
    // order questions
    const surveyQuestions = [...survey.questions];
    surveyQuestions.sort(compareByOrderFn);

    return {
      ...survey,
      questions: surveyQuestions,
    };
  }
);

const ongoingSurveyById = (state: RootState, surveyId: number) =>
  state.survey.ongoingSurveys[surveyId];

const completedSurveyById = (state: RootState, surveyId: number) =>
  state.survey.completedSurveys[surveyId];

const responseCountOfSurvey = createSelector(
  (state: RootState) => state.survey.ongoingSurveys,
  (_state: RootState, surveyId: number) => surveyId,
  (ongoingSurveysObj, surveyId) => {
    const ongoingSurvey: OngoingSurvey | undefined = ongoingSurveysObj[surveyId];
    const responses = ongoingSurvey?.responses;
    return Object.entries(responses || {}).length;
  }
);

const responseOfQuestion = createSelector(
  (state: RootState) => state.survey.ongoingSurveys,
  (_state: RootState, surveyId: number) => surveyId,
  (_state: RootState, _surveyId: number, questionId: number) => questionId,
  (ongoingSurveysObj, surveyId, questionId) => {
    const ongoingSurvey: OngoingSurvey | undefined = ongoingSurveysObj[surveyId];
    const responses = ongoingSurvey?.responses;
    const response = responses?.[questionId];
    return response?.response;
  }
);

export const surveySelectors = {
  // Lists

  /** Returns all surveys */
  allSurveys,

  /** Returns the surveys that the user did not yet start */
  notStartedSurveys,

  /** Returns the surveys that the user started */
  ongoingSurveys,

  /** Returns the surveys that the user has completed */
  completedSurveys,

  // By Survey ID

  surveyById,
  ongoingSurveyById,
  completedSurveyById,

  // Response

  /** Returns the number of user's responses in a survey */
  responseCountOfSurvey,

  /** Returns user's response to a question */
  responseOfQuestion,
};
