/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PatientDataPages } from "./types";

interface InitialState {
  currentPage: PatientDataPages;
}

const initialState: InitialState = {
  currentPage: "notes",
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setPatientsDataPage(state, action: PayloadAction<PatientDataPages>) {
      state.currentPage = action.payload;
    },
  },
});

export default navigationSlice.reducer;
export const { setPatientsDataPage } = navigationSlice.actions;
