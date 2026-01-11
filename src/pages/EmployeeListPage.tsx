import EmployeeForm from "../components/employees/EmployeeForm";
import EmployeeItem from "../components/employees/EmployeeItem";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
    addEmployee,
    updateEmployee,
    deleteEmployee
} from "../store/employeeSlice";

export default function EmployeeListPage() {

    const employees = useAppSelector(
        state => state.employees.employees
    );

    const dispatch = useAppDispatch();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee List</h1>

            <EmployeeForm onAdd={employee => dispatch(addEmployee(employee))} />
                
            <ul className="space-y-3 mt-6">
                {
                    employees.map((emp) => (
                        <EmployeeItem
                            key={emp.id}
                            employee={emp}
                            onUpdate={employee =>
                                dispatch(updateEmployee(employee))
                            }
                            onDelete={id =>
                                dispatch(deleteEmployee(id))
                            }
                        />
                    ))
                }
            </ul>
        </div>
    )
}