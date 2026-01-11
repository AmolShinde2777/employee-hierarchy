import EmployeeTreeNode from "../components/hierarchy/EmployeeTreeNode";
import { useAppSelector } from "../store/hooks";
import { selectEmployeeTree } from "../store/selectors";

export default function EmployeeHierarchyPage() {
    const tree = useAppSelector(selectEmployeeTree);
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Employee Hierarchy</h1>

            {tree.length === 0 ? (
                <p className="text-gray-500">No Employees</p>
            ): (
                tree.map(node => (
                    <EmployeeTreeNode key={node.id} node={node}/>
                ))
            )}
        </div>
    )
}