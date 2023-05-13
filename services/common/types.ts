export interface ICommon {
    ID?: string;
}

export interface Employee {
    ID?: string;
    Name: string;
    Balance: number;
}

export type EmployeeRequestBody = Omit<Employee, "id">;

export type TagType = "News" | "Products" | "Achievements" | "Employee";

export const EmployeeObj = {
    ID: "",
    Name: "",
    Balance: 0,
}
