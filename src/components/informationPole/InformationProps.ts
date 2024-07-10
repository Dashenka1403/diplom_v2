import { PropsWithChildren } from "react";
import { CompetenceInfo, Discipline, LaborIntensity, TableTab } from "../../types/models";

export interface InformationProps  {
    disciplines?:Array<Discipline>;
    //labIntensities?: Array<LaborIntensity>;
    onTabClick?:(id: number) => void;
    className?: string;

    
}

export type { TableTab };

