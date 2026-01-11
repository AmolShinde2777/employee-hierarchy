import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Employee } from "../data/employees";
import { EMPLOYEES } from "../data/employees";

interface EmployeeState {
    employees: Employee[];
}

const initialState: EmployeeState = {
    employees: EMPLOYEES,
};

const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee(state, action: PayloadAction<Employee>) {
            state.employees.push(action.payload);
        },
        updateEmployee(state, action: PayloadAction<Employee>) {
            const index = state.employees.findIndex(
                e => e.id === action.payload.id
            );
            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        },
        deleteEmployee(state, action: PayloadAction<number>){
            state.employees = state.employees.filter(
                e => e.id !== action.payload
            );
        },
    },
});

export const {
    addEmployee,
    updateEmployee,
    deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;

