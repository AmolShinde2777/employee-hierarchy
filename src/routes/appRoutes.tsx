import { Navigate, Route, Routes } from "react-router-dom";
import EmployeeListPage from "../pages/EmployeeListPage";
import EmployeeHierarchyPage from "../pages/EmployeeHierarchyPage";
import { useState } from "react";
import { EMPLOYEES, type Employee } from "../data/employees";

export default function AppRoutes() {
    const [employees, setEmployees] = useState<Employee[]>(EMPLOYEES);

    const addEmployee = (employee: Employee) => {
        setEmployees((prev) => [...prev, employee]);
    };

    const updateEmployee = (employee: Employee) => {
        setEmployees((prev) =>
            prev.map((e) => (e.id === employee.id) ? employee : e)
        );
    };

    const deleteEmployee = (id: number) => {
        setEmployees((prev) => prev.filter((e) => e.id !== id));
    }

    return (
        <Routes>
            <Route
                path="/employees"
                element={
                <EmployeeListPage
                    employees={employees}
                    onAdd={addEmployee}
                    onUpdate={updateEmployee}
                    onDelete={deleteEmployee}
                />}
            >
            </Route>
            <Route
                path="/hierarchy"
                element={
                    <EmployeeHierarchyPage
                        employees={employees}
                    />}>
            </Route>
            <Route path="/" element={<Navigate to="/employees" replace />} />
        </Routes>
    )
}