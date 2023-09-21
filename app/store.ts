import { configureStore } from '@reduxjs/toolkit';
import localeReducer from "./features/localeSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    localeReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

