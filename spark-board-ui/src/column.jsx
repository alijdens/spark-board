/**
 * Custom Node component for react-flow to represent transformations' columns.
 */

import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import "./column.css";

function ColumnNode({ data }) {
    const nodeStyle = {}

    function isHidden(data) {
        if (data.hidden === undefined) {
            return true;
        }
        return data.hidden;
    }

    return (
        <>
            <div className="column-node__container" style={ nodeStyle } hidden={ isHidden(data) } >
                <Handle type="target" position={Position.Left} id="target" />
                <p>{ data.name }</p>
                <Handle type="source" position={Position.Right} id="source" />
            </div>
        </>
    );
}

export default ColumnNode;
