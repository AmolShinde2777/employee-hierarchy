export interface Employee {
    id: number;
    name: string;
    role: string;
    managerId: number | null;
}

export const EMPLOYEES: Employee[] = [
    { id: 1, name: "Alice", role: "CEO", managerId: null },
    { id: 2, name: "Bob", role: "CTO", managerId: 1 },
    { id: 3, name: "Charlie", role: "Engineering Manager", managerId: 2 },
    { id: 4, name: "David", role: "Engineer", managerId: 3 },
    { id: 5, name: "Eva", role: "Engineer", managerId: 3 }
]