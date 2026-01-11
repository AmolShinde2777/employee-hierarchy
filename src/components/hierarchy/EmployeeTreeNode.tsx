import { memo, useState } from "react";
import type { EmployeeTreeNode } from "../../types/employeeTree";

interface Props {
    node: EmployeeTreeNode
}

function EmployeeTreeNodeComponent({ node }: Props) {
    const [expanded, setExpanded] = useState(true);

    return (
        <div className="ml-4 mt-2">
            <div className="flex items-center gap-2">
                {node.children.length > 0 && (
                    <button
                        className="text-xs text-blue-600"
                        onClick={()=> setExpanded(v => !v)}
                    >
                        {expanded ? "_" : "+"}
                    </button>
                )}

                <span className="font-medium">{node.name}</span>
                <span className="text-sm text-gray-600">({node.role})</span>
            </div>

            {expanded && (
                <div className="border-l ml-2 pl-2">
                    {node.children.map(child => (
                        <EmployeeTreeNodeComponent
                            key={child.id}
                            node={child}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default memo(EmployeeTreeNodeComponent);