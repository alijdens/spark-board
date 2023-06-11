import { Controls, ControlButton } from 'reactflow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons'


/**
 * Custom controls component.
 * @param {callback} updateNodePositions Callback that updates the physics simulation node positions.
 * @param {array} nodes Array of react-flow nodes.
 * @returns Component.
 */
export default function CustomControls({ organizeNodes }) {
    return (
        <Controls>
            <ControlButton onClick={organizeNodes} title="Organize nodes">
                <FontAwesomeIcon icon={faRefresh} style={{ color: "black" }} />
            </ControlButton>
        </Controls>
    );
}
