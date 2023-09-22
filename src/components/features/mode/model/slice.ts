/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  selectPatientsCards: boolean;
}

const initialState: InitialState = {
  selectPatientsCards: false,
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setSelectPatientsCardsMode(state, action: PayloadAction<boolean>) {
      state.selectPatientsCards = action.payload;
    },
  },
});

export default modeSlice.reducer;
export const { setSelectPatientsCardsMode } = modeSlice.actions;
