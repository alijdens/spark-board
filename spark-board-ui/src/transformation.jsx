/**
 * Custom Node component for react-flow to represent Spark transformations.
 */

import { useLayoutEffect, useRef, useMemo, useEffect, useCallback } from "react";
import { Handle, Position, getRectOfNodes } from 'reactflow';
import { max } from './utils';
import { create } from 'zustand';

import QuestionMarkIcon from './assets/questionMarkIcon.svg';
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


/**
 * This state stores transformation node properties that we want to expose to the main app.
 */
export const useTransformationNodeStore = create((set, get) => ({
    // seletected transformation node (used to render the sidebar)
    selectedTransformation: null,
    // map from node Id to dimensions (width and height)
    dimensions: {},
    // node content dimension (not counting strech by column nodes)
    contentDims: {},
    refs: new Map(),

    // sets the given node as the selected one
    setSelectedTransformation: (node) => {
        const state = get();
        set({ ...state, selectedTransformation: node });
    },

    // returns whtether the given `nodeId` corresponds to the selected node
    isSelected: (nodeId) => {
        return (get().selectedTransformation !== null) && (get().selectedTransformation.id == nodeId)
    },

    setContentDims: (id, dims) => {
        const state = get();
        const contentDims = state.contentDims;
        contentDims[id] = dims;

        set({ ...state, contentDims: contentDims });
    },

    setDimensions: (nodeId, dims) => {
        const state = get();
        const current = state.dimensions[nodeId];

        // change only if the node was not registered or the dims changed
        if (!current) {
            state.dimensions[nodeId] = dims;
            set({ ...state, dimensions: { ...state.dimensions } });
        } else if ((current.width != dims.width) || (current.height != dims.height)) {
            state.dimensions[nodeId] = dims;
            set({ ...state, dimensions: { ...state.dimensions } });
        }
    },

    getDimensions: (nodeId) => {
        const dims = get().dimensions[nodeId];
        if (!dims) {
            return { width: 0, height: 0 };
        }
        return dims;
    },

    setRef: (nodeId, ref) => {
        const state = get();
        const refs = state.refs;
        refs.set(nodeId, ref);
        return set({ ...state });
    },
}));


/**
 * Synchronize node DOM element sizes so we can link changes in size to
 * actions in react.
 */
export function useTransformationNodeDimensionsSync(nodes) {
    const setDimensions = useTransformationNodeStore(state => state.setDimensions);
    const refs = useTransformationNodeStore(state => state.refs);
    const contentDims = useTransformationNodeStore(state => state.contentDims);

    return useCallback(() => {
        let updated = false;
        for (const [id, targetRef] of refs) {
            if (targetRef.current) {
                // column nodes associated to this node
                const columns = nodes.filter(node => 
                    (node.type == "column") && (node.parentNode == id) && !node.hidden
                );
                    
                // bounding box that contains all of the columns
                const bb = getRectOfNodes(columns);
                const content = contentDims[id];
                setDimensions(id, {
                    width: max(content.width, bb.width) + 20,
                    // FIXME: the external div seems to be displaced 50px (or so) from the content
                    //        so we have to add it manually
                    height: max(content.height, bb.height) + 50,
                });

                updated = true;
            }
        }
        return updated;
    }, [nodes]);
}


function TransformationNode({ id, data }) {
    // we use this to calculate this component's size
    // https://stackoverflow.com/questions/49058890/how-to-get-a-react-components-size-height-width-before-render
    const dimensions = useTransformationNodeStore(state => state.getDimensions(id));
    const setRef = useTransformationNodeStore(state => state.setRef);
    const setContentDims = useTransformationNodeStore(state => state.setContentDims);

    const targetRef = useRef();
    useLayoutEffect(() => {
        setRef(id, targetRef);

        const content = targetRef.current.querySelector(".transformation-node-content");
        setContentDims(id, {
            width: content.scrollWidth,
            height: content.scrollHeight,
        });
    }, []);

    const [color, icon] = getTransformationStyle(data.type);

    const nodeStyle = {
        padding: `${PADDING}px`,
        backgroundColor: color,
        height: dimensions.height,
        width: dimensions.width,
    }

    let classes = ["transformation-node__container"];
    if (useTransformationNodeStore(state => state.isSelected(id))) {
        classes.push("transformation-node-selected");
    }

    return (
        <div ref={targetRef} className={ classes.join(" ") } style={ nodeStyle }>
            {/* add an inner div so we can calculate the domensions of the node content.
                we'll use this (and the column node sizes) to calculate the final node size
                set in the `nodeStyle` */}
            <div className="transformation-node-content">
                <Handle type="target" position={Position.Left} id="target" />
                <p>{ data.label }</p>
                <img src={ icon } width="50" height="50" />
                <Summary transformation_type={data.type} metadata={data.metadata} />
                <Handle type="source" position={Position.Right} id="source" />
            </div>
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

        case "Unknown":
            return ["white", QuestionMarkIcon];

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
            if (metadata.type == "relation" && metadata.database && metadata.table) {
                return <div>
                    <p><b>{metadata.type}:</b><br />
                    {metadata.database}.{metadata.table}</p>
                </div>
            } else if (metadata.location_files) {
                return <div>
                    <p><b>{metadata.type}:</b><br />
                    {metadata.location_files[0]}</p>
                </div>
            } else {
                return <div>
                    <p>{metadata.type}</p>
                </div>
            }

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

        case "Unknown": return <p><b>{metadata.inferred_type}</b></p>

        default:
            // TODO: Handle this
            console.log(`Unhandled transformation '${transformation_type}'`);
            return <></>;
    }
}
