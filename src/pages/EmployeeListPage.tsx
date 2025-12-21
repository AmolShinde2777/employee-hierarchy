import type { Employee } from "../data/employees"

interface Props {
    employees: Employee[];
    onAdd: (e: Employee) => void;
    onUpdate: (e: Employee) => void;
    onDelete: (id: number) => void;
}

export default function EmployeeListPage({
    employees,
    onDelete,
}: Props) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee List</h1>
            <ul className="space-y-2">
                {employees.map((emp) => (
                    <li
                        key={emp.id}
                        className="bg-white p-4 rounded shadow flex justify-between"
                    >
                        <span>
                            {emp.name} - {emp.role}
                        </span>
                        <button
                            className="text-red-600 hover:underline"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}