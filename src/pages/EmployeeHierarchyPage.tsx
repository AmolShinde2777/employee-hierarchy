import type { Employee } from "../data/employees"

interface Props {
    employees: Employee[];
}

export default function EmployeeHierarchyPage({
    employees
}: Props) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee Hierarchy</h1>
            <pre className="bg-white p-4 rounded shadow">
                {JSON.stringify(employees, null, 2)}
            </pre>
        </div>
    )
}