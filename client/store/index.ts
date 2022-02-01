import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import snackbarReducer from "./snackbarSlice";

export const store = configureStore({
    reducer: {
        snackbarReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;