import { IEmployee } from "../../../services/employee/types";

export interface Task {
    Name: string;
    Description: string;
    Reward: number;
    ratingReward: number;
    EventID: number;
    Employees: IEmployee[];
}
