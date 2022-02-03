import { createSlice } from "@reduxjs/toolkit";

export type authState = {
    isLoggedIn: Boolean,
    userDetails: {
        name: String,
        email: String,
        username: String,
        publicAdress: String,
    }
}

const initialState: authState = {
    isLoggedIn: false,
    userDetails: {
        name: "",
        email: "",
        username: "",
        publicAdress: "",
    }
}

export const authSlice = createSlice({
    name: "auth slice",
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state = {
                ...state, isLoggedIn: true,
                userDetails: {
                    ...state.userDetails,
                    ...action.payload
                }
            }
        }
    },
});

export const { setUserDetails } = authSlice.actions
export default authSlice.reducer;