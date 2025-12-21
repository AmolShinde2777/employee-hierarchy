import EmployeeForm from "../components/employees/EmployeeForm";
import EmployeeItem from "../components/employees/EmployeeItem";
import type { Employee } from "../data/employees"

interface Props {
    employees: Employee[];
    onAdd: (e: Employee) => void;
    onUpdate: (e: Employee) => void;
    onDelete: (id: number) => void;
}

export default function EmployeeListPage({
    employees,
    onAdd,
    onDelete,
    onUpdate
}: Props) {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee List</h1>
            <EmployeeForm onAdd={onAdd} />
            <ul className="space-y-3 mt-6">
                {
                    employees.map((emp) => (
                        <EmployeeItem
                            key={emp.id}
                            employee={emp}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                        />
                    ))
                }
            </ul>
        </div>
    )
}