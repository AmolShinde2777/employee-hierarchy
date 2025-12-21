import { useEmployeeContext } from "../context/EmployeeContext"

export default function EmployeeHierarchyPage() {
    const { state } = useEmployeeContext();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee Hierarchy</h1>
            <pre className="bg-white p-4 rounded shadow">
                {JSON.stringify(state.employees, null, 2)}
            </pre>
        </div>
    )
}