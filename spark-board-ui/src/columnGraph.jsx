/*
This module handles all logic related to bulding the graph of column relations
when a column is selected in the sidebar.

To use this module you first have to call `useColumnGraphState` in order to
create the column that is selected to be shown.

Then, you'll have to add the `ColumnGraph` component to the `ReactFlow` component
and pass the `setNodes` and `setEdges` callbacks to it, along with the selected
column state created before.
 */

import React from 'react';


/**
 * Creates the state for the selected column in the graph.
 * Returns the column and the callback to update it.
 * To unset the column (and hide the column graph) you can set it to `null`.
 * 
 * @param {node} initialColumn Initial column selected (or null).
 * @returns selected column state
 *          setSelectedColumn callback to update the selected column.
 *          nodeGraph: a dummy state to chain when the node graph is updated.
 *          onGraphUpdate: callback to update the node graph (and trigger dependent effects).
 */
export function useColumnGraphState(initialColumn) {
    // When the user selects a column, the column tracking has the ids for all the columns that 
    // originate the selected one.
    const [selectedColumn, setSelectedColumn] = React.useState(initialColumn);

    const [nodeGraph, setNodeGraph] = React.useState({});

    return [selectedColumn, setSelectedColumn, nodeGraph, () => setNodeGraph({})];
}

/**
 * This is the hook that renders a column graph. `setNodes` and `setEdges` are the callbacks
 * returned by the `useNodesState` and `useEdgesState` React-flow hooks.
 * 
 * @param {callback} setNodes callback returned by react-flow.
 * @param {callback} setEdges callback returned by react-flow.
 * @param {node} selectedColumn Column to show the graph for (or null).
 * @param {Map} nodesById a dictionary of all nodes by id.
 * @param {callback} onUpdate update callback returned by `useColumnGraphState`.
 */
function drawColumnGraph(setNodes, setEdges, selectedColumn, nodesById, nodesInitialized, onUpdate) {
    const isColumnSelected = (selectedColumn !== null) && (selectedColumn !== undefined);

    // find the selected column graph
    const columnGraph = buildColumnGraph(nodesById, selectedColumn);

    if (nodesInitialized) {
        // visual effect over column nodes when a column is selected to show its graph
        setNodes((nds) => {
            let visitedTransformationNodes = {};
            return nds.map((node) => {
                if (node.type == "column") {
                    return applyColumnNodeEffectOnColumnTrackingChanged(node, columnGraph, visitedTransformationNodes);
                }
                return node;
            }).map((node) => {
                if (node.type == "transformation") {
                    return applyTransformationNodeEffectOnColumnTrackingChanged(
                        node,
                        visitedTransformationNodes,
                        isColumnSelected,
                    );
                }
                return node;
            });
        });
    }

    // visual effect over edges for the selected column graph
    setEdges((eds) => eds.map((edge) => {
        // TODO: Taking advantage of this flag, which is not semantically correct. Add an edge type
        // instead
        if (edge.animated) {
            return applyEdgesEffectOnColumnTrackingChanged(edge, columnGraph, isColumnSelected);
        }
        return edge;
    }));

    onUpdate();
}

export default drawColumnGraph;


/**
 * Builds the column graph for the selected column. This graph relates the
 * columns across the transformations that are passed or transformed bewteen
 * them.
 * 
 * @param {Map} nodesById map of node id to node.
 * @param {node} column Column node for which to create the graph.
 * @returns 
 */
function buildColumnGraph(nodesById, column) {
    if (!column) {
        return [];
    }
    return [column.id].concat(column.data.linked_columns.map((linkedId) =>
        buildColumnGraph(nodesById, nodesById.get(linkedId))
    )).flat();
}

function applyColumnNodeEffectOnColumnTrackingChanged(currentNode, columnTracking, visitedTransformationNodes) {
    if (columnTracking.includes(currentNode.id)) {
        if (currentNode.parentNode in visitedTransformationNodes) {
            visitedTransformationNodes[currentNode.parentNode] = visitedTransformationNodes[currentNode.parentNode] + 1;
        } else {
            visitedTransformationNodes[currentNode.parentNode] = 1;
        }
        currentNode.position = {"x": 10, "y": 25 * visitedTransformationNodes[currentNode.parentNode]};
        currentNode.hidden = false;
        currentNode.style = { ...currentNode.style };
    } else {
        currentNode.hidden = true;
        currentNode.style = { ...currentNode.style };
    }
    return currentNode;
}

/**
 * Sets transformation node CSS style when the selected column for tracking
 * changes for a particular node.
 * 
 * @param {object} node reac-flow node to be updated.
 * @param {object} visitedTransformationNodes Map from node ID to times a node was visited.
 * @param {bool} isColumnSelected Whether there is a column selected for tracking or not.
 * @returns Updated node.
 */
function applyTransformationNodeEffectOnColumnTrackingChanged(
    node,
    visitedTransformationNodes,
    isColumnSelected,
) {
    let newStyle = {
        // set transition to make the opacity change smooth when selecting columns
        transition: "opacity 0.3s",
    };
    if (node.id in visitedTransformationNodes) {
        newStyle.opacity = "100%";
    } else {
        if (isColumnSelected) {
            // at this point there is a specific column selected to show the tracking
            // but this node is not part of it, so we make it more transparent to
            // highlight the nodes that actually are
            newStyle.opacity = "30%";
        } else {
            newStyle.opacity = "100%";
        }
    }
    node.style = { ...node.style, ...newStyle };
    return node;
}

function applyEdgesEffectOnColumnTrackingChanged(currentEdge, columnTracking, isColumnSelected) {
    if (isColumnSelected && columnTracking.includes(currentEdge.source) && columnTracking.includes(currentEdge.target)) {
        currentEdge.hidden = false;
        currentEdge.zIndex = 1;
    } else {
        currentEdge.hidden = true;
    }
    return currentEdge;
}
