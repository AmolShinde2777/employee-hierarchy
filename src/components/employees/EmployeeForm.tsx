import { useState } from "react";
import type { Employee } from "../../data/employees";

interface Props {
    onAdd: (employee: Employee) => void;
}
export default function EmployeeForm({
    onAdd
} : Props) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");

    const submitHandler = () => {
        if (!name.trim() || !role.trim()) return;

        onAdd({
            id: Date.now(),
            name,
            role,
            managerId: null
        });

        setName("");
        setRole("");
    };

    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-3">Add Employee</h2>
            <div className="flex gap-3">
                <input
                    className="border p-2 rounded flex-1"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className="border p-2 rounded flex-1"
                    placeholder="Role"
                    value={role}
                    onChange={e => setRole(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 rounded"
                    onClick={submitHandler}
                >
                    Add
                </button>
            </div>
        </div>
    )
}