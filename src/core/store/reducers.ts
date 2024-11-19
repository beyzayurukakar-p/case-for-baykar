import { combineReducers } from '@reduxjs/toolkit';
import { colorSchemeSlice } from '../colorScheme';

export const rootReducer = combineReducers({
  [colorSchemeSlice.name]: colorSchemeSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
