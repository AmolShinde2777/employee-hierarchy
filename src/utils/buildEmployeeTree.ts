import type { Employee } from "../data/employees";
import type { EmployeeTreeNode } from "../types/employeeTree";

export function buildEmployeeTree(
    employees: Employee[]
) : EmployeeTreeNode[] {

    const map = new Map<number, EmployeeTreeNode>();
    const roots: EmployeeTreeNode[] = [];

    for (const emp of employees) {
        map.set(emp.id, { ...emp, children: []});
    }

    for (const emp of employees) {
        const node = map.get(emp.id);

        if (node) {
            if (emp.managerId == null) {
                roots.push(node);
            } else {
                const parent = map.get(emp.managerId);
                parent?.children.push(node);
            }
        }
    }

    return roots;
}