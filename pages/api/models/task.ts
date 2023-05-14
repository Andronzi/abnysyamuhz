import {Employee} from "./employee";

export interface Task {
    Name: string;
    Description: string;
    Reward: number;
    EventID: number;
    Employees: Employee[];
}
