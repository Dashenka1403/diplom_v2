export interface User {
    id: number;
    firstName: string;
    lastName: string;
    midleName?: string;
    login: string;
    password: string;
    role: 'admin' | 'zav_kaf' | 'ruk_OP'| 'teacher';
    groups: Array<EducationProgram>;
   // disciplines: Array<Discipline>;
   
}
export interface EducationProgram{
    id: number;
    title:string;
    year:number;
    description?: string;
    disciplines: Array<Discipline>
    competences: Array<CompetenceInfo>;
}

export interface Discipline{
    id:number;
    codeDisc?: number;
    shortName?: string;
    title: string;
    status:'Новая' | 'В работе' | 'Утверждена'| 'Готова'| 'Завершена';
    goal?: string;
    task?: string;
    info: Array<DisciplineInfo>;
    laborIntensity: Array<LaborIntensity>;
}

export interface CompetenceInfo {
    id:number;
    codeComp: string;
    description: string;
}

export interface DisciplineInfo {
    id:number;
    codeComp: string;
    description?: string;
    knowledge?:string;
    skill?: string;
    ownership?: string;
}

export interface LaborIntensity{
    id: number;
    id_sem: number;
    info: string;
}


export interface TableTab {
    id: number;
    tabTitle: string;
}

// export interface TableDataResults {
//     id: number;
//     competence: string;
//     results:string;
// }
