import { combineReducers } from '@reduxjs/toolkit';
import { colorSchemeSlice } from '../colorScheme';
import { userSlice } from '../user';
import { surveySlice } from '../../modules/surveys/store/surveySlice';

export const rootReducer = combineReducers({
  [colorSchemeSlice.name]: colorSchemeSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [surveySlice.name]: surveySlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
