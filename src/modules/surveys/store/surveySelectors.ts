import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';

export const surveySelectors = {
  notStartedSurveys: createSelector(
    (state: RootState) => state.survey.notStartedSurveys,
    (notStartedSurveysObj) => Object.values(notStartedSurveysObj)
  ),
  ongoingSurveys: createSelector(
    (state: RootState) => state.survey.ongoingSurveys,
    (ongoingSurveysObj) => Object.values(ongoingSurveysObj)
  ),
  completedSurveys: createSelector(
    (state: RootState) => state.survey.completedSurveys,
    (completedSurveysObj) => Object.values(completedSurveysObj)
  ),
};
