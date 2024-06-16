import { UnknownAction, ThunkDispatch } from '@reduxjs/toolkit';

export interface AsyncThunkOptions {
    rejectValue: string;
    dispatch: ThunkDispatch<unknown, unknown, UnknownAction>;
}