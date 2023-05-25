import React, { useMemo, useCallback, useEffect } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls } from 'reactflow';

import TransformationNode from './transformation';
import ColumnNode from './column';
import SideBar from './sidebar';

import 'reactflow/dist/style.css';
import './transformation.css';
import './App.css'

function calculateColumnTracking(nodesById, column) {
  return [column.id].concat(column.data.linked_columns.map((linkedId) =>
    calculateColumnTracking(nodesById, nodesById.get(linkedId))
  )).flat();
}

function getNodesById(initialNodes) {
  return new Map(initialNodes.map(node => [node.id, node]),);
}

export default function App() {
  // model_initialNodes and model_initialEdges are defined in model.js, which is
  // included in the index.html file because this file will be generated by
  // spark_board while processing the data frame.
  // For development purposes, we also added a model.js file here in order to
  // be able to compile and execute the project.
  const [nodes, setNodes, onNodesChange] = useNodesState(model_initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(model_initialEdges);

  // Selected node: For the time being, it's chosen with onClick because we don't want
  // to have multiple "selected nodes"
  const [selectedNode, setSelectedNode] = React.useState(model_initialNodes[0]);
  
  // When the user selects a column, the column tracking has the ids for all the columns that 
  // originate the selected one.
  const [columnTracking, setColumnTracking] = React.useState([]);

  // Map containing all nodes, both transformations and columns
  const nodesById = useMemo(() => getNodesById(model_initialNodes), [model_initialNodes]);

  // Callback to set one node as selected, and reset the column tracking
  const onNodeClick = useCallback((event, node) => {
    if (node.type == "transformation") {
      setSelectedNode(node);
      setColumnTracking([]);
    }
  }, []);

  // Used to register the transformation and column node types into react-flow
  const nodeTypes = useMemo(() => ({
    transformation: TransformationNode,
    column: ColumnNode
  }), [setSelectedNode, setColumnTracking]);

  useEffect(() => setNodes((nds) => nds.map((node) => {
    if (node.type == "transformation") {
      if (node.id === selectedNode.id) {
        node.style = { ...node.style, fontWeight: "bold" };
      } else {
        node.style = { ...node.style, fontWeight: "normal" };
      }
    }
    return node;
  })), [selectedNode]);

  useEffect(() => setNodes((nds) => nds.map((node) => {
    if (node.type == "column") {
      if (columnTracking.includes(node.id)) {
        node.style = { ...node.style };
        node.data.hidden = false;
      } else {
        node.style = { ...node.style };
        node.data.hidden = true;
      }
    }
    return node;
  })), [columnTracking]);

  useEffect(() => setEdges((eds) => eds.map((edge) => {
    // TODO: Taking advantage of this flag, which is not semantically correct. Add an edge type
    // instead
    if (edge.animated) {
      if (columnTracking.includes(edge.source) && columnTracking.includes(edge.target)) {
        edge.hidden = false;
        edge.zIndex = 1;
      } else {
        edge.hidden = true;
      }
    }
    return edge;
  })), [columnTracking]);

  return (
    <div className="app_container" style={{ width: '100vw', height: '100vh' }}>
      <SideBar width="400px" node={selectedNode} onSelectedColumnChange={(column) => {
        const colTracking = calculateColumnTracking(nodesById, column);
        setColumnTracking(colTracking);
      }} />
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
      >
        <Controls />
        <MiniMap zoomable pannable/>
      </ReactFlow>
    </div>
  );
}