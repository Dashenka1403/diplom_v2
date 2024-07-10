import { CompetenceInfo, Discipline, DisciplineInfo } from "../../types/models";

// export interface TitleColumn {
//     id: string;
//     label: string;
//     action: () => void;
// }

export interface TableProps  {
    items: Array<DisciplineInfo>;
    compDescription: Array<CompetenceInfo>;
    open?:boolean;
    className?: string;
    onItemAdd?: () => void;
    onItemEdit?: (id: number) => void;
    onItemClick?:(id:number) => void;
    onItemDelete?: (id:number) => void;
    //action?:  (value : string) => void;
}
