
import { UnknownAction , PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EducationProgram } from '../../types/models';
import { 
    addDiscipline,
    addDisciplineInfo,
    addEducationProgramm,
    deleteDiscipline,
    deleteDisciplineInfo,
    deleteEducationProgramm,
    editDiscipline,
    editDisciplineInfo,
    editEducationProgramm,
    getEducationProgram
} from '../../services';

const NAME = 'educationProgramm';

interface EducationProgrammState {
    educationProgramms: Array<EducationProgram>;
    loading: boolean;
    educationProgrammsError?: string | null;
}

const initialState: EducationProgrammState = {
    educationProgramms: [],
    loading: false,
    educationProgrammsError: undefined
}

const isLoading = (action: UnknownAction ) => action.type.endsWith('pending');

const isError = (action: UnknownAction ) => action.type.endsWith('rejected');

const setState = (state: any, action: any) => {
    state.educationProgramms = action.payload;
    state.educationProgrammsError = undefined;
    state.loading = false;
}

const EducationProgrammsSlice = createSlice({
    name: NAME,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getEducationProgram.fulfilled, (state, action) => {
                setState(state, action);
            })
            .addCase(addEducationProgramm.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(editEducationProgramm.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(deleteEducationProgramm.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(addDisciplineInfo.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(editDisciplineInfo.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(deleteDisciplineInfo.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(addDiscipline.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(editDiscipline.fulfilled, (state, action) => {
                setState(state,action)
             })
             .addCase(deleteDiscipline.fulfilled, (state, action) => {
                setState(state,action)
             })
           
            .addMatcher(isLoading, (state) => {
                state.loading = true;
                state.educationProgrammsError = undefined;
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.educationProgrammsError = action.payload;
            })
    }
});

export const educationProgrammReducer = EducationProgrammsSlice.reducer;


