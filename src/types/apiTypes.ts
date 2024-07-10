export interface LoginRequestDto {
    login: string;
    password: string;
}

export interface LoginResponseDto {
    access_token: string;
    username: string;
    role: string;
    id: number;
}

export interface RegistrationRequestDto {
    login: string;
    password: string;
    lastName: string;
    firstName: string;
    midName?: string;
}

export interface AddEducationProgrammResponseDto {
    userId: number| string;
    title: string;
    year: string;
    description?: string;
}

export interface EditEducationProgrammResponseDto {
    id: number;
    title: string;
    year: string;
    description?: string;
}

export interface SetRoleResponseDto {
    userId: number;
    roleName: 'admin' | 'oop' | 'rpd';
}

export interface AddDisciplineInfoResponseDto {
    disciplineId: number;
    codeCompetence: string;
    description: string;
    skill?: string;
    ownership: string;
    knowledge: string;
}

export interface EditDisciplineInfoResponseDto {
    id: number;
    codeCompetence: string;
    description: string;
    skill?: string;
    ownership: string;
    knowledge: string;
}

export interface AddDisciplineResponseDto {
    edProgrammId: number;
    codeDiscipline: string;
    shortName: string;
    title: string;
    goal: string;
    task: string;
    status: string;
}

export interface EditDisciplineResponseDto {
    id: number;
    codeDiscipline: string;
    shortName: string;
    title: string;
    goal: string;
    task: string;
    status: string;
}