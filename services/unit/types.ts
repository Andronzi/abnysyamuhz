export interface IUnit {
    ID?: string;
    Name: string;
}

export type UnitRequestBody = Omit<IUnit, "id">;
