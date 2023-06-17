/**
 * Module that implements some DAG algorithms.
 */

/**
 * Given a DAG, return the X and Y coordinates of each node in it to build
 * a proper 2D layout.
 * @param {*} nodes 
 * @param {*} edges 
 * @returns Map of node id to and object with `x` and `y` attributes and bounding box
 *          that contains all nodes.
 */
export function buildLayout(root_id, edges) {
    /* algorithm explanation: all nodes are placed in the middle (vertically) of
       their children according to a DFS ordering (this rule applied recursively).
       Leaf nodes (i.e. those without children) will be placed as if they've been
       stacked vertically. except the X coordinate which is calculated using the
       node depth in the DAG. */
    const positions = new Map();
    let leaf_nodes_y = 0

    const vMargin = 30;  // vertical margin between nodes

    const adj_list = buildAdjacencyList(edges);

    function getNodeElem(node_id) {
        // returns the DOM element that contains the node with the given ID
        return document.querySelectorAll(`[data-id="${node_id}"]`)[0];
    }

    function _calculate_position(node_id, depth) {
        if (!positions.has(node_id)) {
            positions.set(node_id, { x: null, y: null });
        }
        const node_pos = positions.get(node_id);

        // find the node container element using the "data-id" attribute
        // we need this to get the node height
        const nodeElem = getNodeElem(node_id);

        if (!hasChildren(node_id, adj_list)) {
            // leaf nodes are positioned one "step" below the last leaf node
            // positioned so far
            node_pos.y = leaf_nodes_y;
            node_pos.x = depth * 200;

            // update the leaf nodes y position for the next one
            leaf_nodes_y += nodeElem.offsetHeight;
            leaf_nodes_y += vMargin;
        } else {
            // calculate the area occupied by the direct children: find the
            // lowest and highest Y coordinates of the children
            const yData = nodeChildren(node_id, adj_list).map((child_id) => {
                return _calculate_position(child_id, depth + 1);
            });
            const child_y_start = Math.min(...yData.map((data) => data.y));
            const child_y_end = Math.max(...yData.map((data) => data.y + data.height));
 
            // calculate the middle point between this node's first and last child
            node_pos.y = (child_y_start + child_y_end) / 2 - nodeElem.offsetHeight / 2;

            node_pos.x = depth * 200;
        }
        let result = { y: node_pos.y, height: nodeElem.offsetHeight };
        console.log("Calculated position for node " + node_id + ": " + JSON.stringify(result));
        return result;        
    }

    _calculate_position(root_id, 0);

    // calculate the total width and height of the DAG by finding the
    // lefmost and bottommost nodes
    const totalW = Math.max(...Array.from(positions).map(([id, pos]) => {
        // important: account for node width too
        return pos.x + getNodeElem(id).offsetWidth;
    }));
    const totalH = leaf_nodes_y;

    const bounds = {
        x: -totalW / 2, y: -totalH / 2,
        width: totalW,
        height: totalH,
    }

    // center the DAG around the origin
    for(const [_, pos] of positions) {
        pos.x -= totalW / 2;
        pos.y -= totalH / 2;
    }
    return [positions, bounds];
}


/**
 * Builds an adjacency list from the given list of edges.
 * 
 * @param {Array} edges List of edges as expected by react-flow.
 * @param {bool} bidirectional If true, the adjacency list will contain both
 *                             directions for each edge  (i.e. form source ot
 *                             target and target to source).
 * @returns Map of node id to list of adjacent node IDs.
 */
export function buildAdjacencyList(edges, bidirectional = false) {
    const adjacencyList = new Map();
    for (const edge of edges) {
        if (edge.animated) {
            // HACK: animated edges are from the column nodes
            continue;
        }
        if (!adjacencyList.has(edge.source)) {
            adjacencyList.set(edge.source, []);
        }
        if (!adjacencyList.has(edge.target)) {
            adjacencyList.set(edge.target, []);
        }
        adjacencyList.get(edge.source).push(edge.target);
        if (bidirectional) {
            adjacencyList.get(edge.target).push(edge.source);
        }
    }
    return adjacencyList;
}

function hasChildren(node_id, adj_list) {
    return adj_list.get(node_id).length > 0;
}

function nodeChildren(node_id, adj_list) {
    return adj_list.get(node_id);
}
