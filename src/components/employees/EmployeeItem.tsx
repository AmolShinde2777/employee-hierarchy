import type { Employee } from "../../data/employees";

interface Props {
    employee: Employee;
    onDelete: (id: number) => void;
}

export default function EmployeeItem({employee, onDelete} : Props) {
    return (
        <li className="bg-white p-4 rounded shadow flex justify-between">
            <div>
                <p className="font-medium">{employee.name}</p>
                <p className="text-sm text-gray-600">{employee.role}</p>
            </div>

            <button
                className="text-red-600 hover:underline"
                onClick={() => onDelete(employee.id)}
            >
                Delete
            </button>
        </li>
    )
}