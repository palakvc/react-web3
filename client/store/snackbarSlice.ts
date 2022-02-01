import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarData: { message: "", description: "", type: "info" },
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    showMessage: (state, action) => {
      state.snackbarData = {
        message: action.payload.message,
        description: action.payload.description,
        type: action.payload.type,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { showMessage } = snackbarSlice.actions;
export default snackbarSlice.reducer;
