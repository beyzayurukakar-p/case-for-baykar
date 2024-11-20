import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from './types';

type UserState = {
  user: User | null;
};

const INITIAL_STATE: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const selectUserExists = (state: RootState) => state.user.user !== null;
