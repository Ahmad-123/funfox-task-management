/**
 * @file Contains the app slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppSliceState } from "./app.types";

export const appInitialState: AppSliceState = {
  userDetailPageType: "",
  eventStatusType: "",
  eventName: "",
  toggle2Fa: "",
  wallets: [],
};

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setUserDetailPageType(
      state: AppSliceState,
      { payload }: PayloadAction<{ userDetailPageType: string }>
    ) {
      state.userDetailPageType = payload?.userDetailPageType;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
