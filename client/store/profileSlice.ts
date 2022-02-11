import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetcher from "lib/fetchJson";
import { AppDispatch, RootState } from "store";
import { setUserDetails } from "./authSlice";
import { showMessage } from "./notifySlice";

interface IProfile {
  loading: boolean;
  error: string;
  response: string;
}

const initialState: IProfile = {
  loading: false,
  error: "",
  response: "",
};

export const profileSlice = createSlice({
  name: "profile slice",
  initialState,
  reducers: {
    updateProfileBegin: (state) => {
      state = { ...state, loading: true };
    },
    updateProfileSuccess: (state, { payload }) => {
      state = {
        ...state,
        loading: false,
        response: payload,
      };
    },
    updateProfileFailure: (state, { payload }) => {
      state = {
        ...state,
        loading: false,
        error: payload,
      };
    },
  },
});

export const {
  updateProfileBegin,
  updateProfileSuccess,
  updateProfileFailure,
} = profileSlice.actions;

interface IOptions {
  userId: number;
  formData: FormData;
  cb?: (response?: any) => void;
}

export const updateProfile = createAsyncThunk<
  any,
  IOptions,
  {
    dispatch?: AppDispatch;
    state?: RootState;
  }
>(
  "update-profile",
  async ({ userId, formData, cb = () => {} }, { dispatch }) => {
    dispatch(updateProfileBegin());
    return fetcher(`users/${userId}`, "put", formData, "")
      .then((response: any) => {
        dispatch(setUserDetails(response?.data));
        dispatch(updateProfileSuccess(response.data.message));
        cb(response?.data);
      })
      .catch((error) => {
        console.error(error);
        const { statusCode, message } = error.response.data;
        dispatch(updateProfileFailure(error.response.data));
        dispatch(
          showMessage({ message: `${statusCode} - ${message}`, type: "error" })
        );
      });
  }
);

export default profileSlice.reducer;
