import { useState } from "react";
import type { Employee } from "../../data/employees";

interface Props {
    employee: Employee;
    onUpdate: (e: Employee) => void;
    onDelete: (id: number) => void;
}

export default function EmployeeItem({employee, onDelete, onUpdate} : Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(employee.name);
    const [role, setRole] = useState(employee.role);

    const saveHandler = () => {
        if (!name.trim() || !role.trim()) return;

        onUpdate({
            ...employee,
            name,
            role
        })

        setIsEditing(false);
    };

    return (
       <li className="bg-white p-4 rounded shadow flex justify-between gap-4">
            {
                isEditing ? (
                    <div className="flex gap-2 flex-1"> 
                        <input
                            className="border p-2 rounded flex-1"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="border p-2 rounded flex-1"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
                ) : (
                    <div className="flex-1">
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-gray-600">{employee.role}</p>
                    </div>
                )
            }

            <div className="flex gap-2">
                {
                    isEditing ? (
                        <button
                            className="text-green-600 hover:underline"
                            onClick={saveHandler}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="text-blue-600 hover:underline"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                    )
                }
                <button
                    className="text-red-600 hover:underline"
                    onClick={() => onDelete(employee.id)}
                >
                    Delete
                </button>
            </div>
       </li>
    )
}