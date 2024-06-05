import { Discipline, EducationProgram } from "../../types/models";

export interface GroupListProps {
    
    groupList:Array<EducationProgram>;
    onItemClick?:(id:number) => void; 
    disciplineList?:Array<Discipline>;  
}