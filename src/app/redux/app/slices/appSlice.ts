import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getGoal } from '../thunks/appThunk';

export interface IAppSlice {
  data: null | string[][];
  pending: boolean;
}

const initialState: IAppSlice = {
  data: null,
  pending: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGoal.fulfilled, (state, action: PayloadAction<{ goal: string[][] }>) => {
      const { goal } = action.payload;
      state.data = goal
      state.pending = false;
    });
    builder.addCase(getGoal.rejected, (state) => {
      state.pending = false;
    });
    builder.addCase(getGoal.pending, (state) => {
      state.pending = true;
    });
  }
});

export const { } = appSlice.actions;
export default appSlice.reducer;
