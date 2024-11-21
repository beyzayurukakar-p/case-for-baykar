import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../core/store';

export const surveySelectors = {
  notStartedSurveys: createSelector(
    (state: RootState) => state.survey.notStartedSurveys,
    (notStartedSurveysObj) => Object.values(notStartedSurveysObj)
  ),
  ongoingSurveys: createSelector(
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
  ),
  completedSurveys: createSelector(
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
  ),
};
