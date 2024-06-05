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
    onItemEdit?: (id: number) => void;
    action?:  (value : string) => void;
}
