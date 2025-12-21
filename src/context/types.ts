import type { Employee } from "../data/employees";

export interface EmployeeState {
    employees: Employee[];
}

export type EmployeeAction = 
    | { type: "ADD_EMPLOYEE"; payload: Employee }
    | { type: "UPDATE_EMPLOYEE"; payload: Employee }
    | { type: "DELETE_EMPLOYEE"; payload: number }