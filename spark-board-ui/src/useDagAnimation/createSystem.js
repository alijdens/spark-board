/**
 * This file creates the spring system from the given DAG. Each node
 * is mapped into a mass, and each each edge is mapped into a spring
 * connecting the masses.
 * It also creates artificial nodes with infinite mass that will be
 * used to force the real nodes to the target positions.
 */

import { buildAdjacencyList } from '../dag';


/**
 * Creates the spring mass system from the given DAG definition.
 * 
 * @param {Array} nodes DAG nodes as expected by react-flow.
 * @param {Array} edges DAG edges as expected by react-flow.
 * @param {Map} targetPositions Map of node IDs to target positions (i.e. the positions
 *                            where the nodes should be once the simulation converges). 
 * @param {Map} nodeIdMapping Map from the node IDs to the internal IDs used by the
 *                          physics engine (sequential integers starting from 0).
 * @param {Number} mass Mass of the nodes in the system.
 * @returns Array of [positions, velocities, adjList, distances, masses]
 */
export function createSystem(nodes, edges, targetPositions, nodeIdMapping, mass) {
    // store the node and the index in the array (we'll need it later to index
    // the position and velocity arrays)
    const nodesById = new Map(nodes.map(
        (node) => [node.id, {i: nodeIdMapping.get(node.id), n: node}])
    );

    // total number of nodes (real + artificial)
    const n = nodeIdMapping.size * 2;

    const [positions, velocities, masses] = [
        new Float32Array(n * 2),  // 2D coordinates for each real + artificial node
        new Float32Array(n * 2),  // velocity vectors for each read + artificial node
        new Float32Array(n),  // masses for each real + artificial node
    ];

    // get an adjacency list for the nodes using internal IDs
    const adjList = new Map(Array.from(buildAdjacencyList(edges, true)).map(([id, deps]) => {
        return [nodeIdMapping.get(id), deps.map((i) => nodeIdMapping.get(i))]
    }))

    // initialize the real node positions and velocities
    for(let [id, i] of nodeIdMapping) {
        const node = nodesById.get(id).n;

        positions[i * 2] = node.position.x;
        positions[i * 2 + 1] = node.position.y;
        velocities[i * 2] = 0;
        velocities[i * 2 + 1] = 0;
        masses[i] = mass;
    }

    // now initialize the artificial nodes to have the target position
    // of the real nodes in the layout and infinite mass so they pull
    // the real nodes towards their target position
    for(let [id, i] of nodeIdMapping) {
        const node = nodesById.get(id).n;

        const nid = i + nodeIdMapping.size;
        adjList.set(nid, [i]);
        adjList.get(i).push(nid);

        let j = n * 2 + 2*i;

        positions[j] = targetPositions.get(node.id).x;
        positions[j + 1] = targetPositions.get(node.id).y;

        velocities[j] = 0;
        velocities[j + 1] = 0;
        masses[nodeIdMapping.size + i] = Infinity;
    }

    const distances = getSprings(targetPositions, nodeIdMapping, adjList, nodes);
    
    return [positions, velocities, adjList, distances, masses]
}


/**
 * Set the springs in the 'distances' matrix.
 * @param {Map} targetPositions Positions where the nodes should be in the final layout.
 * @param {Map} nodeIdMapping Map from the node IDs to the internal IDs.
 * @param {Map} adjList Adjacency list for the nodes.
 * @param {Array} nodes react-flow nodes
 * @returns Map of distances between the nodes. The keys are the node (internal) IDs
 *          concatenated with a dash, e.g. '0-1'.
 */
export function getSprings(targetPositions, nodeIdMapping, adjList, nodes) {
    const distances = new Map();

    // store the node and the index in the array (we'll need it later to index
    // the position and velocity arrays)
    const nodesById = new Map(nodes.map(
        (node) => [node.id, {i: nodeIdMapping.get(node.id), n: node}])
    );

    for(let [id, i] of nodeIdMapping) {
        // if the node has a connection, we link them together with a spring
        // the spring will have the same length as the distance between the nodes
        // in the final layout
        for(let [otherId, otherNode] of nodesById) {
            if (!adjList.get(i).includes(otherNode.i)) {
                continue;
            }

            const otherPos = targetPositions.get(otherId);
            const thisPos = targetPositions.get(id);
            const distance = Math.sqrt(
                Math.pow(thisPos.x - otherPos.x, 2) +
                Math.pow(thisPos.y - otherPos.y, 2)
            );

            // store the distance between the nodes in the 'distances' map
            // by joining the node ids with a dash as key
            distances.set(`${i}-${otherNode.i}`, distance);
        }

        // set springs between artificial nodes and their "real" ones with
        // length 0 (to force the nodes to the target positions)
        distances.set(`${i}-${i + nodeIdMapping.size}`, 0);
        distances.set(`${i + nodeIdMapping.size}-${i}`, 0);
    }

    return distances;
}

