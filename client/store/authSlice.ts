import { createSlice } from "@reduxjs/toolkit";

export type authState = {
}

const initialState: authState = {}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
});

export default authSlice.reducer;