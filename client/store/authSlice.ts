import { createSlice } from "@reduxjs/toolkit";


export interface IOptions {
  method: "post" | "get",
  body?: {
    account_id: string;
    hash: string;
  },
  isToken?: string
}

export interface IUserDetails {
  id?: number
  accessToken: string
  isLoggedIn: boolean
  fullname: string;
  email: string;
  username: string;
  bio: string;
  account_id?: string;
  profileImage?: string | File | null;
  coverImage?: string | File | null;
}
export interface requestResponse {
  data?: any
  statusCode: number,
  message: string
}
export interface IAuthState {
  loading: boolean;
  error: string;
  userDetails: IUserDetails;
}

export const initialState: IAuthState = {
  loading: false,
  error: "",
  userDetails: {
    isLoggedIn: false,
    accessToken: "",
    fullname: "",
    email: "",
    username: "",
    bio: "",
    account_id: "",
    profileImage: "",
    coverImage: "",
  },
};

export const authSlice = createSlice({
  name: "auth slice",
  initialState,
  reducers: {
    setUserDetails: (state, { payload }) => {
      state.userDetails = { ...state.userDetails, ...payload, isLoggedIn: true };
    },
    loginBegin: (state) => {
      state.loading = true
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false
      state.userDetails = { ...payload, isLoggedIn: true }
    },
    loginFailure: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  },
});

export const { setUserDetails, loginBegin, loginSuccess, loginFailure } =
  authSlice.actions;


export default authSlice.reducer;
