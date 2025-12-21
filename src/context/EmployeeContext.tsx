import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import type { EmployeeAction, EmployeeState } from "./types";
import { employeeReducer } from "./employeeReducer";
import { EMPLOYEES } from "../data/employees"

interface EmployeeContextValue {
    state: EmployeeState;
    dispatch: React.Dispatch<EmployeeAction>
}

const EmployeeContext = createContext<EmployeeContextValue | undefined>(
    undefined
)

export function EmployeeProvider({ children } : { children: ReactNode }) {
    const [state, dispatch] = useReducer(employeeReducer, {
        employees: EMPLOYEES,
    });

    const value = useMemo(
        () => ({ state, dispatch }),
        [state]
    );

    return (
        <EmployeeContext.Provider value={value}>
            { children }
        </EmployeeContext.Provider>
    );
}

export function useEmployeeContext() {
    const context = useContext(EmployeeContext);

    if (!context) {
        throw new Error(
            "useEmployeeContext must be used inside EmployeeProvider"
        )
    }

    return context;
}