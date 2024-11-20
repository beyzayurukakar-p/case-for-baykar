import { combineReducers } from '@reduxjs/toolkit';
import { colorSchemeSlice } from '../colorScheme';
import { userSlice } from '../user';

export const rootReducer = combineReducers({
  [colorSchemeSlice.name]: colorSchemeSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;
