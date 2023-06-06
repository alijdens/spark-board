/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

import { Handle, Position } from 'reactflow';

import DocumentIcon from './assets/document.svg';
import FilterIcon from './assets/filter.svg';
import DefaultIcon from './assets/general processor.jpg';
import GroupIcon from './assets/group.svg';
import JoinIcon from './assets/join.svg';
import ProjectIcon from './assets/project.svg';
import SortIcon from './assets/sort.svg';
import TableIcon from './assets/table.svg';
import UploadIcon from './assets/upload.svg';

function TransformationNode({ data }) {
    let color = "";
    let icon = DefaultIcon;
    switch(data.type) {
        case "Project":
            [color, icon] = ["orange", ProjectIcon];
            break;
        case "Filter":
            [color, icon] = ["lightblue", FilterIcon];
            break;
        case "Table":
            [color, icon] = ["red", TableIcon];
            break;
        case "Transform":
            [color, icon] = ["gray", UploadIcon];
            break;
        case "Group":
            [color, icon] = ["purple", GroupIcon];
            break;
        case "Join":
            [color, icon] = ["green", JoinIcon];
            break;
        case "Sort":
            [color, icon] = ["yellow", SortIcon];
            break;
        case "Window":
            [color, icon] = ["pink", TableIcon];
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
                <img src={ icon } />
                <Handle type="source" position={Position.Right} id="source" />
            </div>
        </>
    );
}

export default TransformationNode;
