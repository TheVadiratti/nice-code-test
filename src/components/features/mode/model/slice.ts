/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  selectPatientsCards: {
    isEnable: boolean;
    checked: string[];
  };
}

const initialState: InitialState = {
  selectPatientsCards: {
    isEnable: false,
    checked: [],
  },
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setSelectPatientsCardsMode(state, action: PayloadAction<boolean>) {
      state.selectPatientsCards.isEnable = action.payload;
    },
    selectPatient(state, action: PayloadAction<string>) {
      state.selectPatientsCards.checked.push(action.payload);
    },
    selectPatients(state, action: PayloadAction<string[]>) {
      state.selectPatientsCards.checked.push(...action.payload);
    },
    removePatient(state, action: PayloadAction<string>) {
      state.selectPatientsCards.checked =
        state.selectPatientsCards.checked.filter((id) => id !== action.payload);
    },
    removeAllChecks(state) {
      state.selectPatientsCards.checked =
        initialState.selectPatientsCards.checked;
    },
  },
});

export default modeSlice.reducer;
export const {
  setSelectPatientsCardsMode,
  selectPatient,
  selectPatients,
  removePatient,
  removeAllChecks,
} = modeSlice.actions;
