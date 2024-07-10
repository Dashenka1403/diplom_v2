export interface User {
    id: number;
    firstname: string;
    lastname: string;
    midname?: string;
    login: string;
    password: string;
    role: 'admin' | 'manager' | 'ruk_OP'| 'rpd';
    groups: Array<EducationProgram>;
   // disciplines: Array<Discipline>;
   
}
export interface EducationProgram{
    id: number;
    title:string;
    year:string;
    description?: string;
    disciplines: Array<Discipline>
    competences: Array<CompetenceInfo>;
}

export interface Discipline{
    id:number;
    codeDisc?: string;
    shortName?: string;
    title: string;
    status:'Новая' | 'В работе' | 'Утверждена'| 'Готова'| 'Завершена';
    goal?: string;
    task?: string;
    disciplineInfos: Array<DisciplineInfo>;
    laborIntensities: Array<LaborIntensity>;
}

export interface CompetenceInfo {
    id:number;
    codeCompetence: string;
    description: string;
}

export interface DisciplineInfo {
    codeCompetence: string;
    description?: string;
    id:number;
    knowledge?:string;
    ownership?: string;
    skill?: string;
}

export interface LaborIntensity{
    id: number;
    idSem: string;
    info: string;
    kolHours: string;
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
