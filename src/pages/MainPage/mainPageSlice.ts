import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Draft } from "@reduxjs/toolkit";

type mainPageSlice = {
  ref: any;
};
const initialState: mainPageSlice = {
  ref: null,
};

export const mainPageSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setRef: (state, action: PayloadAction<HTMLDivElement | null>) => {
      state.ref = action.payload;
    },
  },
});
export const { setRef } = mainPageSlice.actions;

export default mainPageSlice.reducer;
