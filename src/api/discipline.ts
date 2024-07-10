import { AccessTokenKey } from "../constants/commonConstants";
import { AddDisciplineResponseDto, EditDisciplineResponseDto } from "../types/apiTypes";
import { AxiosInstance } from "./axiosInstance";

export const DisciplineApi = () => {
    const token = sessionStorage.getItem(AccessTokenKey)?? '';


const {axiosPost, axiosGet, axiosDelete, axiosPut} = AxiosInstance(token);

// const getDisciplineInfo = async() => 
//     await axiosGet('/Employees') as Array<DisciplineInfo>;

const addDiscipline = async(addDisciplineData: AddDisciplineResponseDto) => {
    await axiosPost('/addDiscipline', addDisciplineData) as number;
}

const editDiscipline = async(editDisciplineData:EditDisciplineResponseDto) => 
    await axiosPut('/editDiscipline', editDisciplineData) as void;


const deleteDiscipline = async(id:string|number) => 
    await axiosDelete(`/deleteDiscipline?id=${id}`) as void;

    return {
        addDiscipline,
        editDiscipline,
        deleteDiscipline,
       
    }
        
    }