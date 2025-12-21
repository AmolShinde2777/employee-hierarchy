import EmployeeForm from "../components/employees/EmployeeForm";
import EmployeeItem from "../components/employees/EmployeeItem";
import { useEmployeeContext } from "../context/EmployeeContext";

export default function EmployeeListPage() {

    const { state, dispatch } = useEmployeeContext();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee List</h1>

            <EmployeeForm onAdd={employee => dispatch({ type: "ADD_EMPLOYEE", payload: employee})} />
                
            <ul className="space-y-3 mt-6">
                {
                    state.employees.map((emp) => (
                        <EmployeeItem
                            key={emp.id}
                            employee={emp}
                            onUpdate={employee =>
                                dispatch({ type: "UPDATE_EMPLOYEE", payload: employee})
                            }
                            onDelete={id =>
                                dispatch({ type: "DELETE_EMPLOYEE", payload: id })
                            }
                        />
                    ))
                }
            </ul>
        </div>
    )
}