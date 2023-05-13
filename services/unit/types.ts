import {IEmployee} from "../employee/types";

export interface IUnit {
    ID?: string;
    Name: string;

    EmployeeUnits: {Employee: IEmployee}[];
}

export type UnitRequestBody = Omit<IUnit, "id">;
