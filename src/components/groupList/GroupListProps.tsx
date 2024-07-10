import { Discipline, EducationProgram } from "../../types/models";

export interface GroupListProps {
    
    groupList:Array<EducationProgram>;
    onItemEdit?:(id:number) => void;
    onItemDelete?:(id:number) => void;
    onItemClick?:(id:number) => void; 
    disciplineList?:Array<Discipline>;  
}