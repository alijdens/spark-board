import React, { useMemo, useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';

import TransformationNode from './transformation';
import ColumnNode from './column';
import SideBar from './sidebar';
import drawColumnGraph, { useColumnGraphState } from './columnGraph';

import 'reactflow/dist/style.css';
import './transformation.css';
import './App.css'


export default function App() {
    // Selected transformation node: For the time being, it's chosen with onClick because we don't 
    // want to have multiple "selected nodes"
    const [selectedTransformation, setSelectedTransformation] = React.useState(null);

    // model_initialNodes and model_initialEdges are defined in model.js, which is
    // included in the index.html file because this file will be generated by
    // spark_board while processing the data frame.
    // For development purposes, we also added a model.js file here in order to
    // be able to compile and execute the project.
    model_initialNodes.forEach(node => {
        // add a callback inside the node `data` that defines whether the node
        // is selected or not
        node.data.selected = useCallback(() =>
            // we check if the node is selected by comparing the nodes data
            selectedTransformation !== null && selectedTransformation.data == node.data
        )
    });
    const [nodes, setNodes, onNodesChange] = useNodesState(model_initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(model_initialEdges);

    // Used to register the transformation and column node types into react-flow
    const nodeTypes = useMemo(() => ({
        transformation: TransformationNode,
        column: ColumnNode
    }), []);

    // controls the column for which the column graph is shown
    const [selectedColumn, setSelectedColumn] = useColumnGraphState(null);

    // hook that renders the column graph
    drawColumnGraph(setNodes, setEdges, selectedColumn);

    // Callback to set one node as selected, and reset the column tracking
    const onNodeClick = useCallback((event, node) => {
        if (node.type == "transformation") {
            setSelectedTransformation(node);
            setSelectedColumn(null);
        }
    }, [selectedTransformation, selectedColumn]);

    return (
        <div className="app_container" style={{ width: '100vw', height: '100vh' }}>
            <SideBar width="400px" node={selectedTransformation} onSelectedColumnChange={setSelectedColumn} />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                fitViewOptions={{ includeHiddenNodes: true, padding: 0.1 }}
            >
                <Controls />
                <MiniMap zoomable pannable/>
            </ReactFlow>
        </div>
    );
}