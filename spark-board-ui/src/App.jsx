import React, { useMemo, useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Panel, useNodesInitialized, useReactFlow } from 'reactflow';

import TransformationNode, { getTransformationStyle } from './transformation';
import ColumnNode from './column';
import SideBar from './sidebar';
import drawColumnGraph, { useColumnGraphState } from './columnGraph';
import { buildLayout } from './dag'
import useDagAnimation from './useDagAnimation';
import CustomControls from './controls';
import { useSettings, Settings } from "./settings";

import 'reactflow/dist/style.css';
import './transformation.css';
import './App.css'


export default function App() {
    const { fitBounds } = useReactFlow();

    // Selected transformation node: For the time being, it's chosen with onClick because we don't 
    // want to have multiple "selected nodes"
    const [selectedTransformation, setSelectedTransformation] = React.useState(null);

    // model_initialNodes, model_initialEdges and model_defaultSettings are defined in model.js, which is
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
        );

        node.position = (node.type == "transformation" ? {x: 0, y: 0} : {x: 0, y: 25});

        if (node.type == "column") {
            node.draggable = false;
        }
    });
    const [settings, setSetting] = useSettings(model_defaultSettings);

    const [nodes, setNodes, onNodesChange] = useNodesState(model_initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(model_initialEdges);

    // Used to register the transformation and column node types into react-flow
    const nodeTypes = useMemo(() => ({
        transformation: TransformationNode,
        column: ColumnNode
    }), []);

    // positions where the nodes are being pulled to (if the animation is enabled)
    const [transformationNodeTargetPositions, setTransformationNodeTargetPositions] = React.useState(new Map(
        model_initialNodes.map(node => [node.id, node.position])
    ));
    const nodesInitialized = useNodesInitialized();
    const animation = useDagAnimation(nodes, edges, transformationNodeTargetPositions, setNodes);

    // this function will start or stop the animation based on the settings
    useEffect(() => {
        if (nodesInitialized && settings.animationEnabled) {
            // make sure to sync the node positions with the animation
            animation.updatePositions(new Map(nodes.map(node => [node.id, node.position])));
            // start the animation and return the stop function to pause it when unmounted
            return animation.start();
        } else if (!settings.animationEnabled) {
            animation.pause();
        }
    }, [nodesInitialized, settings]);

    // controls the column for which the column graph is shown
    const [selectedColumn, setSelectedColumn] = useColumnGraphState(null);

    // this should be called after the nodes are initialized to organize the viewport and initial positions
    useEffect(() => {
        if (nodesInitialized) {
            // calculate the node positions in the screen
            const [dagLayout, bounds] = buildLayout(model_initialEdges[0].source, model_initialEdges);
            // set the node animation to position in the layout
            setTransformationNodeTargetPositions(dagLayout);
            // fit the viewport to the area of the graph
            fitBounds(bounds, { duration: 0, padding: 0.1 });
            // orgnaize the nodes
            organizeNodes();
        }
    }, [nodesInitialized]);

    // Map containing all nodes, both transformations and columns
    const nodesById = useMemo(() => getNodesById(model_initialNodes), [model_initialNodes]);

    // hook that renders the column graph
    const columnGraph = drawColumnGraph(setNodes, setEdges, selectedColumn, nodesById);

    // callback that organizes the nodes in the screen using the default layout
    const organizeNodes = useCallback(() => {
        if (settings.animationEnabled) {
            nodes.forEach(node => {
                animation.setNodeFixed(node.id, false);
                animation.updatePositions(new Map([[node.id, node.position]]));
            });
        } else {
            const [dagLayout, _] = buildLayout(model_initialEdges[0].source, model_initialEdges);
            setNodes(nodes.map(node => {
                if (dagLayout.has(node.id)) {
                    // only update nodes present in the layout
                    node.position = dagLayout.get(node.id);
                }
                return node;
            }));
        }
    }, [settings, nodes, setNodes]);

    // hook that renders the column graph
    drawColumnGraph(setNodes, setEdges, selectedColumn, nodesById);

    // Callback to set one node as selected, and reset the column tracking
    const onNodeClick = useCallback((event, node) => {
        if (node.type == "transformation") {
            setSelectedTransformation(node);
            setSelectedColumn(null);
        }
    }, []);

    const onNodeDragStart = useCallback((event, node) => {
        // fix node to the position where the user drops the node
        animation.setNodeFixed(node.id, true);
    }, [animation]);
    const onNodeDrag = useCallback((event, node) => {
        if (settings.animationEnabledOnDrag) {
            // sync the node in the animation with the node in the react-flow so it stretches the springs
            animation.updatePositions(new Map([[node.id, node.position]]));
        }
    }, [animation, settings]);

    return (
        <div className="app_container" style={{ width: '100vw', height: '100vh' }}>
            <SideBar width="400px" 
                node={selectedTransformation} 
                nodesById={nodesById}
                onSelectedColumnChange={setSelectedColumn} 
                selectedColumn={selectedColumn} />
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
                nodeTypes={nodeTypes}
                onNodeClick={onNodeClick}
                onNodeDragStart={onNodeDragStart}
                onNodeDrag={onNodeDrag}
                fitViewOptions={{ includeHiddenNodes: true, padding: 0.1 }}
                minZoom={0.01}
            >
                <Panel position="top-right"><Settings settings={settings} setSetting={setSetting} /></Panel>
                <CustomControls organizeNodes={organizeNodes} />
                <MiniMap zoomable pannable nodeColor={node => {
                    if (node.type == "transformation") {
                        return getTransformationStyle(node.data.type)[0];
                    }
                }} />
            </ReactFlow>
        </div>
    );
}

/**
 * Generates a `Map` that maps the node id to the node itself.
 * 
 * @param {*} initialNodes List of transformation nodes.
 * @returns Map of node id to node.
 */
function getNodesById(initialNodes) {
    return new Map(initialNodes.map(node => [node.id, node]),);
}
