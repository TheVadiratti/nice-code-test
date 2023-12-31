import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { patientsSlice } from "@/components/entities/patient";
import navigationSlice from "@/components/features/navigation";
import modeSlice from "@/components/features/mode";

const rootReducer = combineReducers({
  patientsSlice,
  navigationSlice,
  modeSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
