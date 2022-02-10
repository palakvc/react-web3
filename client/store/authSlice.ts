import { createSlice } from "@reduxjs/toolkit";

export interface IUserDetails {
  fullname: string;
  email: string;
  username: string;
  bio: string;
  accountId?: string;
  profileImage?: string | File | null;
  coverImage?: string | File | null;
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

// export const deleteVideo = createAsyncThunk(
//   "how-to-videos/deleteVideo",
//   async (id, { dispatch, getState }) => {
//     const { videos: prev } = getState().howToVideos;
//     const videos = [...prev];
//     return http("GET", `admin/video/delete/${id}`)
//       .then((res) => {
//         const index = videos.findIndex((i) => i._id === id);
//         if (index !== -1) {
//           videos.splice(index, 1);
//           dispatch(removeVideo([...videos]));
//         }
//       })
//       .catch((err) => {
//         dispatch(
//           showMessage({
//             message: err.message || "Something went wrong",
//             type: "error",
//           })
//         );
//       });
//   }
// );

export default authSlice.reducer;
