/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

import { Handle, Position } from 'reactflow';

import FilterIcon from './assets/filter.svg';
import GroupIcon from './assets/group.svg';
import JoinIcon from './assets/join.svg';
import ProjectIcon from './assets/project.svg';
import SortIcon from './assets/sort.svg';
import TableIcon from './assets/table.svg';
import UploadIcon from './assets/upload.svg';
import UnionIcon from './assets/union.png';
import GlobalLimitIcon from './assets/upper-limit.svg';


function TransformationNode({ data }) {
    const [color, icon] = getTransformationStyle(data.type);

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
                <img src={ icon } width="50" height="50" />
                <Handle type="source" position={Position.Right} id="source" />
            </div>
        </>
    );
}

export default TransformationNode;


export function getTransformationStyle(transformationType) {
    switch(transformationType) {
        case "Project":
            return ["orange", ProjectIcon];

        case "Filter":
            return ["lightblue", FilterIcon];

        case "Table":
            return ["red", TableIcon];

        case "Transform":
            return ["gray", UploadIcon];

        case "Group":
            return ["purple", GroupIcon];

        case "Join":
            return ["green", JoinIcon];

        case "Sort":
            return ["yellow", SortIcon];

        case "Window":
            return ["pink", TableIcon];

        case "Union":
            return ["brown", UnionIcon];

        case "Limit":
            return ["lightgreen", GlobalLimitIcon];
    }

    throw new Error("Unknown transformation type: " + transformationType);
}
