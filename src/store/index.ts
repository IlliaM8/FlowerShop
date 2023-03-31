import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "pages/MainPage";

export const store = configureStore({
  reducer: {
    mainPage: mainPageReducer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
