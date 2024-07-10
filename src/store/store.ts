import { configureStore } from '@reduxjs/toolkit';
import {administrationReducer, educationProgrammReducer, userReducer } from './slices';

export const store = configureStore({
    reducer: {
        user: userReducer,
        educationProgramm : educationProgrammReducer,
        administration: administrationReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;