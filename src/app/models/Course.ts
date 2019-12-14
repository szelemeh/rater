export enum ClassForm {
    LECTION,
    EXERCISE,
    LAB,
    PROJECT
}

export interface Course {
    id: number;
    courseName: string;
    numberOfEtcs: number;
    semester: number;
    classForm: ClassForm;
    maxStudentNumber: number;
    rate: number;
    imagePath: string; 
    description: string;
}