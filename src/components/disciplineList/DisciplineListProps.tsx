import { Discipline } from '../../types/models';

export interface DisciplineListProps {
    disciplineList:Array<Discipline>;
    onItemClick?:(id:number) => void;
    open?:boolean;
    onCancel?:()=> void;
    onSave?:() => void;
}