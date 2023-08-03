/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

import { useLayoutEffect, useState, useRef } from "react";
import { Handle, Position, useStore, getRectOfNodes, useNodes } from 'reactflow';
import { max } from './utils';

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


const PADDING = 10;


function TransformationNode({ id, data }) {
    // we use this to calculate this component's size
    // https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
    const [dimensions, setDimensions] = useState({ width:0, height: 0 });
    const targetRef = useRef();
    useLayoutEffect(() => {
        if (targetRef.current) {
          setDimensions({
            width: targetRef.current.scrollWidth,
            height: targetRef.current.scrollHeight
          });
        }
      }, []);

    // This resizes the NodeWrapper when the div is resized
    const size = useStore((s) => {
        const node = s.nodeInternals.get(id);
        return {
            height: node.height,
            width: node.width,
        };
    });

    // column nodes associated to this node
    const columns = useNodes().filter(node => 
        (node.type == "column") && (node.parentNode == id) && !node.hidden
    );

    // bounding box that contains all of the columns
    const bb = getRectOfNodes(columns);

    const [color, icon] = getTransformationStyle(data.type);

    const nodeStyle = {
        padding: `${PADDING}px`,
        backgroundColor: color,
        height: max(dimensions.height, bb.height + PADDING * 2),
        width: max(dimensions.width, bb.width + PADDING * 2),
    }

    let classes = ["transformation-node__container"];
    if (data.selected()) {
        classes.push("transformation-node-selected");
    }

    return (
        <div ref={targetRef} className={ classes.join(" ") } style={ nodeStyle }>
            <Handle type="target" position={Position.Left} id="target" />
            <p>{ data.label }</p>
            <img src={ icon } width="50" height="50" />
            <Summary transformation_type={data.type} metadata={data.metadata} />
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

        case "DataSource":
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
}

/**
 * Returns the HTML element that will render the node summary, which is the
 * data shown below the icon.
 *
 * @param {string} type Transformation type. 
 * @param {object} metadata Node metadata.
 */
function Summary({transformation_type, metadata}) {
    switch(transformation_type) {
        case "Project": return <></>;

        case "Filter": return <></>;

        case "DataSource":
            if (metadata.type === "relation")
                return <div>
                    <p><b>{metadata.type}:</b><br />
                    {metadata.database}.{metadata.table}</p>
                </div>
            else
                return <div>
                    <p>{metadata.type}</p>
                </div>

        case "Transform": return <></>;

        case "Group": return <></>;

        case "Join": return <p><b>Type:</b> {metadata.join_type}</p>;

        case "Sort": return <></>;

        case "Window": return <></>;

        case "Union": return <></>;

        case "Limit": return <p><b>Rows: </b>{metadata.limit_expr}</p>;

        case "Except": return <p><b>Preserve duplicates:</b> {metadata.preserves_duplicates}</p>;
        
        case "Sample":
            return <div>
                <p><b>Seed: </b>{metadata.seed}</p><br />
                <p><b>Fraction: </b>{metadata.fraction}</p>
            </div>    

        case "Expand": return <></>

        case "Repartition": return <p><b>Num partitions:</b> {metadata.num_partitions}</p>

        case "Intersect":
            return <p><b>Preserve duplicates:</b> {metadata.preserves_duplicates}</p>

        case "Deduplicate": return <></>

        case "Alias": return <p>{metadata.alias}</p>

        default:
            // TODO: Handle this
            console.log(`Unhandled transformation '${transformation_type}'`);
            return <></>;
    }
}
