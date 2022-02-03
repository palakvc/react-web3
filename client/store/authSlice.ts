import { createSlice } from "@reduxjs/toolkit";

export type authState = {
  isLoggedIn: boolean;
  userDetails: {
    name: string;
    email: string;
    username: string;
    publicAdress: string;
    accountId: string;
  };
};

const initialState: authState = {
  isLoggedIn: false,
  userDetails: {
    name: "",
    email: "",
    username: "",
    publicAdress: "",
    accountId: "",
  },
};

export const authSlice = createSlice({
  name: "auth slice",
  initialState,
  reducers: {
    setUserAuthentication: (state, { payload }) => {
      state = { ...state, isLoggedIn: true };
    },
    setUserDetails: (state, { payload }) => {
      state.isLoggedIn = true;
      state.userDetails = { ...state.userDetails, ...payload };
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
      state.userDetails = initialState.userDetails;
    },
  },
});

export const { setUserDetails, setUserAuthentication, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
