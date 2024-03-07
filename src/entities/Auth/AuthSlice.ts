import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IData, IUser } from "./types";
import { login, getMe, logout } from "./actions";

const initialState: IData = {
  userData: {} as IUser,
  status: "not authorized",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStateData(state, action) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.status = "not authorized";
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = "authorized";
        state.userData = action.payload as IUser;
      })
      .addCase(getMe.rejected, (state) => {
        state.status = "not authorized";
        state.userData = {} as IUser;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.status = "not authorized";
      });
  },
});
export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
