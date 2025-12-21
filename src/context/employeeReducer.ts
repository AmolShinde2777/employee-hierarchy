import type { EmployeeAction, EmployeeState } from "./types";

export function employeeReducer(
    state: EmployeeState,
    action: EmployeeAction
) : EmployeeState {
    switch(action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [...state.employees, action.payload]
            };

        case "UPDATE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.map(emp =>
                    emp.id === action.payload.id ? action.payload : emp
                ),
            };

        case "DELETE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.filter(emp =>
                    emp.id !== action.payload
                )
            }
        
        default:
            return state;
    }
}