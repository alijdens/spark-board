/*
This module handles all logic related to bulding the graph of column relations
when a column is selected in the sidebar.

To use this module you first have to call `useColumnGraphState` in order to
create the column that is selected to be shown.

Then, you'll have to add the `ColumnGraph` component to the `ReactFlow` component
and pass the `setNodes` and `setEdges` callbacks to it, along with the selected
column state created before.
 */

import React, { useMemo, useEffect } from 'react';


/**
 * Creates the state for the selected column in the graph.
 * Returns the column and the callback to update it.
 * To unset the column (and hide the column graph) you can set it to `null`.
 * 
 * @param {node} initialColumn Initial column selected (or null). 
 */
export function useColumnGraphState(initialColumn) {
    // When the user selects a column, the column tracking has the ids for all the columns that 
    // originate the selected one.
    const [selectedColumn, setSelectedColumn] = React.useState(initialColumn);
    return [selectedColumn, setSelectedColumn]
}

/**
 * This is the hook that renders a column graph. `setNodes` and `setEdges` are the callbacks
 * returned by the `useNodesState` and `useEdgesState` React-flow hooks.
 * 
 * @param {callback} setNodes callback returned by react-flow.
 * @param {callback} setEdges callback returned by react-flow.
 * @param {node} selectedColumn Column to show the graph for (or null).
 * @param {Map} nodesById a dictionary of all nodes by id-
 */
function drawColumnGraph(setNodes, setEdges, selectedColumn, nodesById) {
    // the column graph will contain the column node IDs that are related to the selected column
    const [columnGraph, setColumnGraph] = React.useState([]);

    // find the selected column graph
    useEffect(() =>
        setColumnGraph(buildColumnGraph(nodesById, selectedColumn))
    , [selectedColumn]);

    // Effect over column nodes when a column is selected to show its graph
    useEffect(() => setNodes((nds) => {
        let visitedTransformationNodes = {};
        return nds.map((node) => {
            if (node.type == "column") {
                return applyColumnNodeEffectOnColumnTrackingChanged(node, columnGraph, visitedTransformationNodes);
            }
            return node;
        }).map((node) => {
            if (node.type == "transformation") {
                return applyTransformationNodeEffectOnColumnTrackingChanged(node, columnGraph, visitedTransformationNodes);
            }
            return node;
        });
    }), [columnGraph]);

    // Effect over edges for the selected column graph
    useEffect(() => setEdges((eds) => eds.map((edge) => {
        // TODO: Taking advantage of this flag, which is not semantically correct. Add an edge type
        // instead
        if (edge.animated) {
            return applyEdgesEffectOnColumnTrackingChanged(edge, columnGraph);
        }
        return edge;
    })), [columnGraph]);

    return columnGraph;
}

function max(a, b) {
    return a > b ? a : b;
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
    if (column === null) {
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

function applyTransformationNodeEffectOnColumnTrackingChanged(node, columnGraph, visitedTransformationNodes) {
    let DOMNode = getNodeElem(node.id);
    let nodeHeight = DOMNode.scrollHeight;

    if (node.id in visitedTransformationNodes) {
        let h = max(nodeHeight, 90 + visitedTransformationNodes[node.id] * 15);
        node.height = h;
        node.style = { ...node.style, height: h };
    } else {
        node.height = nodeHeight;
        node.style = { ...node.style, height: node.height };
    }
    return node;
}

function applyEdgesEffectOnColumnTrackingChanged(currentEdge, columnTracking) {
    if (columnTracking.includes(currentEdge.source) && columnTracking.includes(currentEdge.target)) {
        currentEdge.hidden = false;
        currentEdge.zIndex = 1;
    } else {
        currentEdge.hidden = true;
    }
    return currentEdge;
}

function getNodeElem(node_id) {
    // returns the DOM element that contains the node with the given ID
    return document.querySelectorAll(`[data-id="${node_id}"]`)[0];
}
