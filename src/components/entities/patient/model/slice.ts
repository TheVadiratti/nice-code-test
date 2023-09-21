/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Patient } from "@/fake-data/types";

interface InitialState {
  patients: Patient[];
}

const initialState: InitialState = {
  patients: [],
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<Patient[]>) {
      state.patients = action.payload;
    },
  },
});

export default patientsSlice.reducer;
export const { setPatients } = patientsSlice.actions;
