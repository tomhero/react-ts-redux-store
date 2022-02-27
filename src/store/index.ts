import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";


const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  }
});


export type RootState = ReturnType<typeof store.getState>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch

export default store;
