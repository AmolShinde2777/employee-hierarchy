import { createContext, useContext, useMemo, useReducer, type ReactNode } from "react";
import type { EmployeeAction, EmployeeState } from "./types";
import { employeeReducer } from "./employeeReducer";
import { EMPLOYEES } from "../data/employees"
import { buildEmployeeTree } from "../utils/buildEmployeeTree";
import type { EmployeeTreeNode } from "../types/employeeTree";

interface EmployeeContextValue {
    state: EmployeeState;
    tree: EmployeeTreeNode[];
    dispatch: React.Dispatch<EmployeeAction>
}

const EmployeeContext = createContext<EmployeeContextValue | undefined>(
    undefined
)

export function EmployeeProvider({ children } : { children: ReactNode }) {
    const [state, dispatch] = useReducer(employeeReducer, {
        employees: EMPLOYEES,
    });

    const tree = useMemo(
        () => buildEmployeeTree(state.employees),
        [state.employees]
    );

    const value = useMemo(
        () => ({ state, tree, dispatch }),
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