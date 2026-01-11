import type { Employee } from "../data/employees";

export interface EmployeeTreeNode extends Employee {
    children: EmployeeTreeNode[];
}