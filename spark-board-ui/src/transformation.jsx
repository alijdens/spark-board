/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function TransformationNode({ data }) {
    let color = "";
    switch(data.type) {
        case "Project":
            color = "orange";
            break;
        case "Filter":
            color = "lightblue";
            break;
        case "Table":
            color = "red";
            break;
        case "Transform":
            color = "gray";
            break;
        case "Group":
            color = "purple";
            break;
        case "Join":
            color = "green";
            break;
        case "Sort":
            color = "yellow";
            break;
    }

    const nodeStyle = {
        backgroundColor: color,
    }

    return (
        <>
            <div className="transformation-node__container" style={ nodeStyle }>
                <Handle type="target" position={Position.Left} id="target" />
                <p>{ data.label }</p>
                <Handle type="source" position={Position.Right} id="source" />
            </div>
        </>
    );
}

export default TransformationNode;
