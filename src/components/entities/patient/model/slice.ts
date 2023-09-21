/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Patient } from "@/fake-data/types";

interface InitialState {
  patients: Patient[];
  current: Patient | null;
}

const initialState: InitialState = {
  patients: [],
  current: null,
};

const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setPatients(state, action: PayloadAction<Patient[]>) {
      state.patients = action.payload;
    },
    setCurrent(state, action: PayloadAction<string>) {
      const current = state.patients.find(
        (patient) => patient.id === action.payload,
      );
      if (current) {
        state.current = current;
      }
    },
  },
});

export default patientsSlice.reducer;
export const { setPatients, setCurrent } = patientsSlice.actions;
