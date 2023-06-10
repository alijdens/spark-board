import { Controls, ControlButton } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'


/**
 * Custom controls component.
 * @param {callback} updateNodePositions Callback that updates the physics simulation node positions.
 * @param {array} nodes Array of react-flow nodes.
 * @returns Component.
 */
export default function CustomControls({ animation, nodes }) {
    return (
        <Controls>
            <ControlButton onClick={() => unfixNodes(animation, nodes)} title="Organize nodes">
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
function unfixNodes(animation, nodes) {
    const positions = new Map();
    nodes.forEach(node => {
        animation.setNodeFixed(node.id, false);
    });
}
