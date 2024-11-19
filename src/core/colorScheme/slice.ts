import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type ColorSchemes = 'light' | 'dark';
type ColorSchemeState = {
  colorScheme: ColorSchemes;
};

const INITIAL_STATE: ColorSchemeState = {
  colorScheme: 'light',
};

export const colorSchemeSlice = createSlice({
  name: 'colorScheme',
  initialState: INITIAL_STATE,
  reducers: {
    changeColorScheme: (state, action: PayloadAction<ColorSchemes>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const selectColorScheme = (state: RootState) => state.colorScheme.colorScheme;
