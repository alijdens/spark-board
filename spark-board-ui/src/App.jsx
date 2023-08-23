import React, { useMemo, useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, MiniMap, Panel, useNodesInitialized, useReactFlow } from 'reactflow';

import { shallow } from 'zustand/shallow';
import TransformationNode, { getTransformationStyle, useTransformationNodeStore, useTransformationNodeDimensionsSync } from './transformation';
import ColumnNode from './column';
import SideBar from './sidebar';
import drawColumnGraph, { useColumnGraphState } from './columnGraph';
import { buildLayout } from './dag'
import useDagAnimation from './useDagAnimation';
import CustomControls from './controls';
import { useSettings, Settings } from "./settings";
import useSparkDag from "./useSparkNodes";

import 'reactflow/dist/style.css';
import './transformation.css';
import './App.css'


// indicates whether the DAG layout was already set (so we can do it only 1 time)
let initialDagLayoutApplied = false;
// whether the node dimensions were already calculated and stored in the store
let dimsInitialized = false;

export default function App() {
    const { fitBounds } = useReactFlow();

    // Selected transformation node: For the time being, it's chosen with onClick because we don't 
    // want to have multiple "selected nodes"
    const { selectedTransformation, setSelectedTransformation } = useTransformationNodeStore((state) => ({
        selectedTransformation: state.selectedTransformation,
        setSelectedTransformation: state.setSelectedTransformation,
    }), shallow);
    // object that maps the node ID to the dimensions of each transformation node
    const transformationNodeDims = useTransformationNodeStore(state => state.dimensions);

    const [settings, setSetting] = useSettings(model_defaultSettings);
    const [modelNodes, modelEdges] = useSparkDag(settings);

    const [nodes, setNodes, onNodesChange] = useNodesState(modelNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(modelEdges);

    // Used to register the transformation and column node types into react-flow
    const nodeTypes = useMemo(() => ({
        transformation: TransformationNode,
        column: ColumnNode
    }), []);

    // positions where the nodes are being pulled to (if the animation is enabled)
    const [transformationNodeTargetPositions, setTransformationNodeTargetPositions] = React.useState(new Map(
        modelNodes.map(node => [node.id, node.position])
    ));
    const nodesInitialized = useNodesInitialized();
    const animation = useDagAnimation(modelNodes, modelEdges, transformationNodeTargetPositions, setNodes, settings.animationEnabled);

    // Map containing all nodes, both transformations and columns
    const nodesById = useMemo(() => getNodesById(modelNodes), [modelNodes]);

    // controls the column for which the column graph is shown
    const [selectedColumn, setSelectedColumn, nodeGraph, onGraphUpdate] = useColumnGraphState(null);
    useMemo(() => {
        drawColumnGraph(setNodes, setEdges, selectedColumn, nodesById, nodesInitialized, onGraphUpdate);
    }, [selectedColumn, nodesInitialized]);

    useEffect(() => {
        setNodes(modelNodes);
        setEdges(modelEdges);

        if (nodesInitialized && dimsInitialized) {
            animation.pause();
            const [dagLayout, _] = buildLayout(modelEdges, transformationNodeDims);
            setTransformationNodeTargetPositions(dagLayout);
            animation.resetSystem(modelNodes, modelEdges, dagLayout);
            if (settings.animationEnabled) {
                animation.start();
            }
        }
        drawColumnGraph(setNodes, setEdges, selectedColumn, nodesById, nodesInitialized, onGraphUpdate);
    }, [nodesInitialized, modelNodes, modelEdges]);

    useMemo(() => {
        // check if the selected node was deleted
        if (selectedTransformation && !nodesById.has(selectedTransformation.id)) {
            setSelectedColumn(null);
            setSelectedTransformation(null);
        }
    }, [modelNodes]);

    // this function will start or stop the animation based on the settings
    useEffect(() => {
        if (nodesInitialized && settings.animationEnabled) {
            // make sure to sync the node positions with the animation
            animation.updatePositions(new Map(nodes.map(node => [node.id, node.position])));
            // start the animation and return the stop function to pause it when unmounted
            animation.start();
        } else if (!settings.animationEnabled) {
            animation.pause();
        }
    }, [nodesInitialized, settings, modelNodes]);

    // sync node sizes in the DOM with the ones in the transformations store
    const updateDims = useTransformationNodeDimensionsSync(nodes);
    useEffect(() => {
        dimsInitialized = updateDims();
    }, [nodeGraph, updateDims]);

    // callback that organizes the nodes in the screen using the default layout
    const organizeNodes = useCallback(() => {
        if (settings.animationEnabled) {
            nodes.forEach(node => {
                animation.setNodeFixed(node.id, false);
                animation.updatePositions(new Map([[node.id, node.position]]));
            });
        } else {
            const [dagLayout, _] = buildLayout(modelEdges, transformationNodeDims);
            setNodes(nodes.map(node => {
                if (dagLayout.has(node.id)) {
                    // only update nodes present in the layout
                    node.position = dagLayout.get(node.id);
                }
                return node;
            }));
        }
    }, [settings, nodes, modelEdges, setNodes]);

    // update the DAG layout when the nodes sizes change
    useMemo(() => {
        if (settings.organizeNodesOnResize && nodesInitialized) {
            // calculate the node positions in the screen
            const [dagLayout, bounds] = buildLayout(modelEdges, transformationNodeDims);
            // set the node animation to position in the layout
            setTransformationNodeTargetPositions(dagLayout);
        }

        // this should be called after the nodes are initialized to organize the viewport and initial positions
        if (!initialDagLayoutApplied && nodesInitialized && dimsInitialized) {
            // calculate the node positions in the screen
            const [dagLayout, bounds] = buildLayout(modelEdges, transformationNodeDims);
            // set the node animation to position in the layout
            setTransformationNodeTargetPositions(dagLayout);
            // fit the viewport to the area of the graph
            fitBounds(bounds, { duration: 0, padding: 0.1 });
            // orgnaize the nodes
            organizeNodes();
    
            animation.setTargetPositions(dagLayout);
            initialDagLayoutApplied = true;
        }
    }, [transformationNodeDims]);

    // Callback to set one node as selected, and reset the column tracking
    const onNodeClick = useCallback((event, node) => {
        if (node.type == "transformation") {
            setSelectedTransformation(node);
            setSelectedColumn(null);
        }
    }, [setSelectedTransformation]);

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
            <SideBar
                width="400px" 
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
