import { Navigate, Route, Routes } from "react-router-dom";
import EmployeeListPage from "../pages/EmployeeListPage";
import EmployeeHierarchyPage from "../pages/EmployeeHierarchyPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/employees"
                element={<EmployeeListPage />}>
            </Route>
            <Route
                path="/hierarchy"
                element={<EmployeeHierarchyPage/>}>
            </Route>
            <Route path="/" element={<Navigate to="/employees" replace />} />
        </Routes>
    )
}