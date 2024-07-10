import { Discipline } from '../../types/models';

export interface DisciplineListProps {
    disciplineList:Array<Discipline>;
    onItemClick?:(id:number) => void;
    open?:boolean;
    onItemEdit?:(id:number) => void;
    onItemDelete?:(id:number) => void;

}