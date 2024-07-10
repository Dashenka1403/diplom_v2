import { AccessTokenKey } from '../constants/commonConstants';
import {  AddDisciplineInfoResponseDto, AddEducationProgrammResponseDto, EditDisciplineInfoResponseDto, EditEducationProgrammResponseDto } from '../types/apiTypes';
import { EducationProgram } from '../types/models';
import { AxiosInstance } from './axiosInstance';

export const EducationProgramApi = () => {
    const token = sessionStorage.getItem(AccessTokenKey) ?? '';
    
    const { axiosDelete, axiosGet, axiosPut, axiosPost} = AxiosInstance(token);

    const getEducationProgram = async(id: string | number) =>
        await axiosGet(`/educationProgramm?id=${id}`) as Array<EducationProgram>;

    const addEducationProgramm = async(addEducationData: AddEducationProgrammResponseDto) => 
        await axiosPost('/addEduactionProgramm', addEducationData) as number;

    const editEducationProgramm = async(editDepartmentData: EditEducationProgrammResponseDto) => 
        await axiosPut('/updateEducationProgramm', editDepartmentData) as void;

    const deleteEducationProgramm = async(id: string | number) => 
        await axiosDelete(`/deleteEducationProgramm?id=${id}`) as void;

    return {
      getEducationProgram,
      addEducationProgramm,
      editEducationProgramm,
      deleteEducationProgramm,

    };
}
