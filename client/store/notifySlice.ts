import { createSlice } from "@reduxjs/toolkit";

export interface IToastSlice {
  open: boolean;
  duration: number;
  message: string;
  type: "success" | "error" | "info" | "warning" | "";
}

const initialState: IToastSlice = {
  open: false,
  message: "",
  duration: 6000,
  type: "",
};

export const notifySlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showMessage: (state, { payload }) => {
      console.log(payload);
      state.open = true;
      state.duration = payload.duration;
      state.message = payload.message;
      state.type = payload.type;
    },
    hideMessage: (state) => {
      state.open = false;
      state.duration = initialState.duration;
      state.message = initialState.message;
      state.type = initialState.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showMessage, hideMessage } = notifySlice.actions;
export default notifySlice.reducer;
