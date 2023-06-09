import { useRef, useEffect } from 'react';
import { createSystem, getSprings } from './createSystem';
import { stepSimulation } from './physics';


/**
 * This hook will animate the nodes in react-flow DAGs as if they were connected
 * to their `targetPosition` with a spring. The animation will stop once the
 * nodes have reached their target position the forces are small enough.
 * You can update the `targetPositions` to move the nodes as if the springs
 * changed.
 * 
 * @param {Array} nodes react-flow nodes.
 * @param {Array} edges react-flow edges.
 * @param {Map} targetPositions Map from the node IDs to the target positions (objects with `x` and `y`).
 * @param {Callback} setNodes react-flow state setter to update the nodes.
 * @returns Callback that will start the animation when called.
 */
export function useDagAnimation(nodes, edges, targetPositions, setNodes) {    
    let nodeIdMapping = useRef(createNodeIdMapping(nodes));
    let state = useRef(createSystem(nodes, edges, targetPositions, nodeIdMapping.current));

    const animationId = useRef(null);

    const dt = 1/60;
    var startT = useRef(null);

    function onFrame(t) {
        if (!startT.current) {
            startT.current = t;
        }
        let elapsed = (t - startT.current) / 1000;

        // use a constant time step for the simulation
        let hasUpdated = false;
        while(elapsed >= dt) {
            hasUpdated |= stepSimulation(state.current, dt);

            elapsed -= dt;
            startT.current += dt * 1000;
        }

        if (hasUpdated) {
            // update the node positions
            setNodes(nodes.map((node) => {
                if (node.type == "column") {
                    return node
                }
                const i = nodeIdMapping.current.get(node.id);
                return {
                    ...node,
                    position: {
                        x: state.current[0][i * 2],
                        y: state.current[0][i * 2 + 1]
                    }
                }
            }));
        }

        // wait for the next frame
        animationId.current = requestAnimationFrame(onFrame)
    }

    useEffect(() => {
        // update artificial node positions with new ones
        const [pos, v, adjList, distances, mass] = state.current;

        for(let [id, i] of nodeIdMapping.current) {
            let j = i * 2 + nodeIdMapping.current.size * 2;
            pos[j] = targetPositions.get(id).x;
            pos[j + 1] = targetPositions.get(id).y;
        }

        // update the spring distances
        state.current[3] = getSprings(targetPositions, nodeIdMapping.current, adjList, nodes);
    }, [targetPositions]);

    // return a function that will start the animation
    return () => {
        animationId.current = requestAnimationFrame(onFrame);
        return () => cancelAnimationFrame(animationId.current);
    };
}


function createNodeIdMapping(nodes) {
    const nodeMapping = new Map();

    let id = 0;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].type == "transformation") {
            nodeMapping.set(nodes[i].id, id);
            id += 1;
        }
    }
    return nodeMapping;
}
