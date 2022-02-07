import { createSlice } from "@reduxjs/toolkit";

export interface IUserDetails {
  fullname: string;
  email: string;
  username: string;
  bio: string;
  accountId?: string;
  profileImage?: string;
  coverImage?: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
  userDetails: IUserDetails;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  userDetails: {
    fullname: "",
    email: "",
    username: "",
    bio: "",
    accountId: "",
    profileImage: "",
    coverImage: "",
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
