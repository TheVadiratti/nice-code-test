import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { patientsSlice } from "@/components/entities/patient";
import navigationSlice from "@/components/features/navigation";

const rootReducer = combineReducers({ patientsSlice, navigationSlice });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
