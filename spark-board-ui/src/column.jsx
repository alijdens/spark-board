/**
 * Custom Node component for react-flow to represent transformations' columns.
 */

import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import "./column.css";

function ColumnNode({ data }) {
    return (
        <div className="column-node__container" >
            <Handle type="target" position={Position.Left} id="target" />
            <p>{ data.name }</p>
            <Handle type="source" position={Position.Right} id="source" />
        </div>
    );
}

export default ColumnNode;
