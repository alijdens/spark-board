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
 */
function drawColumnGraph(setNodes, setEdges, selectedColumn) {
    // the column graph will contain the column node IDs that are related to the selected column
    const [columnGraph, setColumnGraph] = React.useState([]);
    
    // Map containing all nodes, both transformations and columns
    const nodesById = useMemo(() => getNodesById(model_initialNodes), [model_initialNodes]);

    // find the selected column graph
    useEffect(() =>
        setColumnGraph(buildColumnGraph(nodesById, selectedColumn))
    , [selectedColumn]);

    // Effect over column nodes when a column is selected to show its graph
    useEffect(() => setNodes((nds) => nds.map((node) => {
        if (node.type == "column") {
            return applyColumnNodeEffectOnColumnTrackingChanged(node, columnGraph);
        }
        return node;
    })), [columnGraph]);

    // Effect over edges for the selected column graph
    useEffect(() => setEdges((eds) => eds.map((edge) => {
        // TODO: Taking advantage of this flag, which is not semantically correct. Add an edge type
        // instead
        if (edge.animated) {
            return applyEdgesEffectOnColumnTrackingChanged(edge, columnGraph);
        }
        return edge;
    })), [columnGraph]);
}


export default drawColumnGraph;


/**
 * Generates a `Map` that maps the node id to the node itself.
 * 
 * @param {*} initialNodes List of transformation nodes.
 * @returns Map of node id to node.
 */
function getNodesById(initialNodes) {
    return new Map(initialNodes.map(node => [node.id, node]),);
}

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

function applyColumnNodeEffectOnColumnTrackingChanged(currentNode, columnTracking) {
    if (columnTracking.includes(currentNode.id)) {
        currentNode.hidden = false;
    } else {
        currentNode.hidden = true;
    }
    return currentNode;
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
