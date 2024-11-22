import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';
import { OngoingSurvey } from '../types/surveyTypes';

const notStartedSurveys = createSelector(
  (state: RootState) => state.survey.notStartedSurveys,
  (deneme: string) => deneme,
  (notStartedSurveysObj) => Object.values(notStartedSurveysObj)
);

const ongoingSurveys = createSelector(
  (state: RootState) => state.survey.surveys,
  (state: RootState) => state.survey.ongoingSurveys,
  (allSurveyObj, ongoingSurveysObj) => {
    const list = [];
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
    survey.questions.sort((q1, q2) => {
      if (q1.order > q2.order) return 1;
      if (q2.order > q1.order) return -1;
      return 0;
    });

    return survey;
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

export const surveySelectors = {
  // Lists
  notStartedSurveys,
  ongoingSurveys,
  completedSurveys,

  // By Survey ID
  surveyById,
  ongoingSurveyById,
  completedSurveyById,

  // Other data
  responseCountOfSurvey,
};
