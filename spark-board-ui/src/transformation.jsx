/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

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

    let classes = ["transformation-node__container"];
    if (data.selected()) {
        classes.push("transformation-node-selected");
    }
    return (
        <>
            <div className={ classes.join(" ") } style={ nodeStyle }>
                <Handle type="target" position={Position.Left} id="target" />
                <p>{ data.label }</p>
                {
                    // TODO: Foreach non-hidden column
                    <br />
                }
                <Handle type="source" position={Position.Right} id="source" />
            </div>
        </>
    );
}

export default TransformationNode;
