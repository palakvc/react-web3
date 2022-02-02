import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import snackbarReducer from "./snackbarSlice";
import authSliceReducer from "./authSlice"
import commonReducer from "./commonSlice"
import { useDispatch, useSelector, TypedUseSelectorHook, } from 'react-redux';


export const store = configureStore({
    reducer: {
        snackbarReducer,
        authSliceReducer,
        commonReducer
    },
});


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;