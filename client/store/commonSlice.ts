import { createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";


export type commonState = {
    globalObjects?: {
        ethereumObject: any,
        provider: any
    }
}

let initialState: commonState = {}

if (typeof window !== "undefined" && (window as any)?.ethereum) {
    initialState = {
        ...initialState,
        globalObjects: {
            ethereumObject: (window as any)?.ethereum,
            provider: new ethers.providers.Web3Provider((window as any)?.ethereum)
        }
    };
}


export const commonSlice = createSlice({
    name: "common slice",
    initialState,
    reducers: {
    },
});

export default commonSlice.reducer;