export interface IEmployee {
    ID?: string;
    Name: string;
    Balance: number;
}

export type EmployeeRequestBody = Omit<IEmployee, "id">;
