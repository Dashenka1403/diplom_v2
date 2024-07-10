import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddDisciplineInfoResponseDto, AddDisciplineResponseDto, AddEducationProgrammResponseDto, EditDisciplineInfoResponseDto, EditDisciplineResponseDto, EditEducationProgrammResponseDto } from '../types/apiTypes';
import { AsyncThunkOptions } from '../types/toolkitTypes';
import { EducationProgramApi } from '../api';
import { DisciplineInfo, EducationProgram } from '../types/models';
import { IdKey } from '../constants/commonConstants';
import { DisciplineInfoApi } from '../api/disciplineInfo';
import { DisciplineApi } from '../api/discipline';

const NAMESPACE = 'educationProgramm';

export const getEducationProgram = createAsyncThunk<Array<EducationProgram>, string | number , AsyncThunkOptions>(
    `${NAMESPACE}/educationProgramm`,
    async(id, { rejectWithValue }) => {
        try {
            return await EducationProgramApi()?.getEducationProgram(id);
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const addEducationProgramm = createAsyncThunk<Array<EducationProgram>, AddEducationProgrammResponseDto, AsyncThunkOptions>(
    `${NAMESPACE}/addEducationProgramm`,
    async(addEducationProgrammData,{rejectWithValue}) => {
        try{
            await EducationProgramApi().addEducationProgramm(addEducationProgrammData);
            return await EducationProgramApi()?.getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const editEducationProgramm = createAsyncThunk<Array<EducationProgram>, EditEducationProgrammResponseDto, AsyncThunkOptions>(
    `${NAMESPACE}/editDepartment`,
    async(editEducationProgrammData,{rejectWithValue}) => {
        try{
            await EducationProgramApi().editEducationProgramm(editEducationProgrammData);
            return await EducationProgramApi().getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const deleteEducationProgramm = createAsyncThunk<Array<EducationProgram>, string|number, AsyncThunkOptions>(
    `${NAMESPACE}/deleteDepartment`,
    async(id,{rejectWithValue}) => {
        try{
            await EducationProgramApi().deleteEducationProgramm(id);
            return await EducationProgramApi().getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const addDisciplineInfo = createAsyncThunk<Array<EducationProgram>, AddDisciplineInfoResponseDto, AsyncThunkOptions>(
    `${NAMESPACE}/addDisciplineInfo`,
    async(addDisciplineInfoData,{rejectWithValue}) => {
        try{
            await DisciplineInfoApi().addDisciplineInfo(addDisciplineInfoData);
            return await EducationProgramApi()?.getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const editDisciplineInfo = createAsyncThunk<Array<EducationProgram>, EditDisciplineInfoResponseDto, AsyncThunkOptions>(
    `${NAMESPACE}/editDisciplineInfo`,
    async(editDisciplineInfoData,{rejectWithValue}) => {
        try{
            await DisciplineInfoApi().editDisciplineInfo(editDisciplineInfoData);
            return await EducationProgramApi().getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);


export const deleteDisciplineInfo = createAsyncThunk<Array<EducationProgram>, string|number, AsyncThunkOptions>(
    `${NAMESPACE}/deleteDisciplineInfo`,
    async(id,{rejectWithValue}) => {
        try{
            await DisciplineInfoApi().deleteDisciplineInfo(id);
            return await EducationProgramApi().getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const addDiscipline = createAsyncThunk<Array<EducationProgram>, AddDisciplineResponseDto, AsyncThunkOptions>(
    `${NAMESPACE}/addDiscipline`,
    async(addDisciplineData,{rejectWithValue}) => {
        try{
            await DisciplineApi().addDiscipline(addDisciplineData);
            return await EducationProgramApi()?.getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const editDiscipline = createAsyncThunk<Array<EducationProgram>, EditDisciplineResponseDto, AsyncThunkOptions>(
    `${NAMESPACE}/editDiscipline`,
    async(editDisciplineData,{rejectWithValue}) => {
        try{
            await DisciplineApi().editDiscipline(editDisciplineData);
            return await EducationProgramApi().getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);


export const deleteDiscipline = createAsyncThunk<Array<EducationProgram>, string|number, AsyncThunkOptions>(
    `${NAMESPACE}/deleteDiscipline`,
    async(id,{rejectWithValue}) => {
        try{
            await DisciplineApi().deleteDiscipline(id);
            return await EducationProgramApi().getEducationProgram(sessionStorage.getItem(IdKey)??'');
        } catch(error) {
            return rejectWithValue((error as Error).message);
        }
    }
);



