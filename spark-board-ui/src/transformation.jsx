/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

import { Handle, Position, useStore } from 'reactflow';

import AddColumnIcon from './assets/addColumn.svg';
import AliasIcon from './assets/alias.svg';
import ExceptIcon from './assets/except.svg';
import ExpandIcon from './assets/expand.svg';
import FilterIcon from './assets/filter.svg';
import GroupIcon from './assets/group.svg';
import IntersectIcon from './assets/intersect.svg';
import JoinIcon from './assets/join.svg';
import PartitionIcon from './assets/partition.svg';
import ProjectIcon from './assets/project.svg';
import SampleIcon from './assets/sample.svg';
import SortIcon from './assets/sort.svg';
import TableIcon from './assets/table.svg';
import TransformIcon from './assets/transform.svg';
import UnionIcon from './assets/union.png';
import UploadIcon from './assets/upload.svg';
import GlobalLimitIcon from './assets/upper-limit.svg';


function TransformationNode({ id, data }) {
    // This resizes the NodeWrapper when the div is resized
    const size = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return {
            height: node.height,
            width: node.width,
        };
    });

    const [color, icon] = getTransformationStyle(data.type);

    const nodeStyle = {
        backgroundColor: color,
        height: size.height,
        width: size.width,
    }

    let classes = ["transformation-node__container"];
    if (data.selected()) {
        classes.push("transformation-node-selected");
    }
    return (
        <div className={ classes.join(" ") } style={ nodeStyle }>
            <Handle type="target" position={Position.Left} id="target" />
            <p>{ data.label }</p>
            <img src={ icon } width="50" height="50" />
            <Handle type="source" position={Position.Right} id="source" />
        </div>
    );
}

export default TransformationNode;


export function getTransformationStyle(transformationType) {
    switch(transformationType) {
        case "Project":
            return ["gold", ProjectIcon];

        case "Filter":
            return ["turquoise", FilterIcon];

        case "Table":
            return ["lightgray", TableIcon];

        case "Transform":
            return ["limegreen", TransformIcon];

        case "Group":
            return ["lightgreen", GroupIcon];

        case "Join":
            return ["violet", JoinIcon];

        case "Sort":
            return ["pink", SortIcon];

        case "Window":
            return ["orange", TableIcon];

        case "Union":
            return ["skyblue", UnionIcon];

        case "Limit":
            return ["green", GlobalLimitIcon];

        case "Except":
            return ["blue", ExceptIcon];

        case "Sample":
            return ["yellow", SampleIcon];

        case "Expand":
            return ["red", ExpandIcon];

        case "Repartition":
            return ["magenta", PartitionIcon];

        case "Intersect":
            return ["lightblue", IntersectIcon];

        case "Deduplicate":
            return ["silver", FilterIcon];

        case "Alias":
            return ["gray", AliasIcon];

        default:
            console.log("WARN: Unknown transformation type: '" + transformationType + "'. Showing a white node")
            return ["white", TableIcon]
    }

    throw new Error("Unknown transformation type: " + transformationType);
}
