import {IUnit} from "../unit/types";

export interface IEmployee {
    ID?: string;
    Name: string;
    Balance: number;

    EmployeeUnits: {Unit: IUnit}[];
}

export type EmployeeRequestBody = Omit<IEmployee, "id">;
