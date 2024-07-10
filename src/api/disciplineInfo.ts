import { AccessTokenKey } from "../constants/commonConstants";
import { AddDisciplineInfoResponseDto, EditDisciplineInfoResponseDto } from "../types/apiTypes";
import { DisciplineInfo } from "../types/models";
import { AxiosInstance } from "./axiosInstance";

export const DisciplineInfoApi = () => {
    const token = sessionStorage.getItem(AccessTokenKey)?? '';


const {axiosPost, axiosGet, axiosDelete, axiosPut} = AxiosInstance(token);

// const getDisciplineInfo = async() => 
//     await axiosGet('/Employees') as Array<DisciplineInfo>;

const addDisciplineInfo = async(addDisciplineInfoData: AddDisciplineInfoResponseDto) => {
    await axiosPost('/addDisciplineInfo', addDisciplineInfoData) as number;
}

const editDisciplineInfo = async(editDisciplineInfoData:EditDisciplineInfoResponseDto) => 
    await axiosPut('/editDisciplineInfo', editDisciplineInfoData) as void;


const deleteDisciplineInfo = async(id:string|number) => 
    await axiosDelete(`/deleteDisciplineInfo?id=${id}`) as void;

    return {
        addDisciplineInfo,
        editDisciplineInfo,
        deleteDisciplineInfo,
       
    }
        
    }