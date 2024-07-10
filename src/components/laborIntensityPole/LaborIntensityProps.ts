import { PropsWithChildren } from "react";
import { LaborIntensity, TableTab } from "../../types/models";

export interface LaborIntensityProps extends PropsWithChildren {
    labIntensities?: Array<LaborIntensity>;
    // onTabClick?:(id: number) => void;
    // className?: string;
}

export type { TableTab };

