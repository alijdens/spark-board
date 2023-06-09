import { Controls, ControlButton } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'


/**
 * Custom controls component.
 * @param {callback} updateNodePositions Callback that updates the physics simulation node positions.
 * @param {array} nodes Array of react-flow nodes.
 * @returns Component.
 */
export default function CustomControls({ updateNodePositions, nodes }) {
    return (
        <Controls>
            <ControlButton onClick={() => setNodePositions(updateNodePositions, nodes)} title="Organize nodes">
                <FontAwesomeIcon icon={faRefresh} style={{ color: "black" }} />
            </ControlButton>
        </Controls>
    );
}


/**
 * This function will synchronize the DAG animation nodes position
 * with the react-flow nodes position.
 * In this way, the nodes will be animated back to the original DAG layout.
 */
function setNodePositions(updateNodePositions, nodes) {
    const positions = new Map();
    nodes.forEach(node => {
        positions.set(node.id, node.position);
    });

    updateNodePositions(positions);
}
