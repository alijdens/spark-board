/**
 * Module that implements some DAG algorithms.
 */



// margin between nodes in the horizontal coordinates
const HORIZONTAL_MARGIN = 140;

/**
 * Given a DAG, return the X and Y coordinates of each node in it to build
 * a proper 2D layout.
 * @param {*} nodes 
 * @param {*} edges 
 * @returns Map of node id to and object with `x` and `y` attributes and bounding box
 *          that contains all nodes.
 */
export function buildLayout(edges, tfNodeDims) {
    /* algorithm explanation: all nodes are placed in the middle (vertically) of
       their children according to a DFS ordering (this rule applied recursively).
       Leaf nodes (i.e. those without children) will be placed as if they've been
       stacked vertically. except the X coordinate which is calculated using the
       node depth in the DAG. */
    const positions = new Map();
    let leaf_nodes_y = 0;

    const vMargin = 30;  // vertical margin between nodes

    const adj_list = buildAdjacencyList(edges, false);

    const nodeLevel = getNodeLevels(adj_list);
    const levelWidths = calculateDagLevelWidth(adj_list, tfNodeDims);
    const levelOffset = calculateLevelOffset(adj_list, tfNodeDims);

    function getNodeDims(id) { return tfNodeDims[id] || {width: 80, height: 60}; }

    // set X coordinates of all nodes based on their DAG depth
    for (let [nodeId, level] of nodeLevel) {
        // calculate the node X coordinate to center it horizontally in its level
        const xCoord = levelOffset[level] + (levelWidths.get(level) - getNodeDims(nodeId).width) / 2;
        positions.set(nodeId, { x: xCoord, y: null });
    }

    function _calculateVerticalPosition(nodeId) {
        const node_pos = positions.get(nodeId);
        const nodeDims = getNodeDims(nodeId);

        if (!hasChildren(nodeId, adj_list, nodeLevel)) {
            // leaf nodes are positioned one "step" below the last leaf node
            // positioned so far
            node_pos.y = leaf_nodes_y;

            // update the leaf nodes y position for the next one
            leaf_nodes_y += nodeDims.height;
            leaf_nodes_y += vMargin;
        } else {
            // calculate the area occupied by the direct children: find the
            // lowest and highest Y coordinates of the children
            const yData = nodeChildren(nodeId, adj_list, nodeLevel).map((child_id) => {
                return _calculateVerticalPosition(child_id);
            });
            const child_y_start = Math.min(...yData.map((data) => data.y));
            const child_y_end = Math.max(...yData.map((data) => data.y + data.height));
 
            // calculate the middle point between this node's first and last child
            node_pos.y = (child_y_start + child_y_end) / 2 - nodeDims.height / 2;
        }
        return { y: node_pos.y, height: nodeDims.height };
    }

    for (let nodeId of findRootNodes(adj_list)) {
        _calculateVerticalPosition(nodeId);
        leaf_nodes_y += vMargin;
    }

    // calculate the total width and height of the DAG by finding the
    // lefmost and bottommost nodes
    const totalW = Math.max(...Array.from(positions).map(([id, pos]) => {
        // important: account for node width too
        return pos.x + getNodeDims(id).width;
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

        let [src, tgt] = [edge.source, edge.target];

        if (!adjacencyList.has(src)) {
            adjacencyList.set(src, []);
        }
        if (!adjacencyList.has(tgt)) {
            adjacencyList.set(tgt, []);
        }
        adjacencyList.get(src).push(tgt);
        if (bidirectional) {
            adjacencyList.get(tgt).push(src);
        }
    }
    return adjacencyList;
}

function hasChildren(node_id, adj_list, nodeLevel) {
    return nodeChildren(node_id, adj_list, nodeLevel).length > 0;
}

function nodeChildren(node_id, adj_list, nodeLevel) {
    const level = nodeLevel.get(node_id);
    // make sure to only return the children that are directly afetr the node
    // it may happen that a single node has multiple parents, so we make sure to poition it
    // after the parent node that is deepest
    return adj_list.get(node_id).filter(childId => nodeLevel.get(childId) == level + 1);
}

/**
 * Calculates the X coordinates for a node in a particular level of the DAG.
 * @param {*} rootId Root node ID.
 * @param {*} adjList Adjacency list that defines the DAG.
 * @returns Array where each index is the X offset for the level.
 */
function calculateLevelOffset(adjList, tfNodeDims) {
    const levelWidths = calculateDagLevelWidth(adjList, tfNodeDims);
    const levelOffsets = [];

    let level = 0;
    while (levelWidths.has(level)) {
        if (level > 0) {
            levelOffsets[level] = levelWidths.get(level - 1) + levelOffsets[level - 1] + HORIZONTAL_MARGIN;
        } else {
            levelOffsets[0] = 0;
        }
        level += 1;
    }
    return levelOffsets;
}

/**
 * Calculate the width of each depth level in the DAG.
 * 
 * @param {Map} adjList Map from node IDs to a list of their child node IDs.
 * @returns A map mapping the depth level (integer) to its total width.
 */
function calculateDagLevelWidth(adjList, tfNodeDims) {
    // maps the DAG depth levels into their corresponding width
    const levelWidths = new Map();

    const nodeLevel = getNodeLevels(adjList);

    for (let [node, level] of nodeLevel) {
        const dims = tfNodeDims[node] || { height: 80, width: 60 };

        // the level width will be the widest element in it
        if (!levelWidths.has(level) || levelWidths.get(level) < dims.width) {
            levelWidths.set(level, dims.width);
        }
    }

    return levelWidths;
}

/**
 * Returns the IDs of all nodes that have no parent. It is expected
 * that at least 1 node has none.
 * @param {Map} adjList Adjacency list.
 * @returns Set of root node IDs.
 */
function findRootNodes(adjList) {
    const nodesWithParent = new Set();
    for (let [node, children] of adjList) {
        for (let child of children) {
            nodesWithParent.add(child);
        }
    }

    const rootNodes = [];
    for (let [node, _] of adjList) {
        if (!nodesWithParent.has(node)) {
            rootNodes.push(node);
        }
    }
    return rootNodes;
}

/**
 * Maps a node ID to its assigned depth level in the DAG (counting
 * from the root nodes).
 * @param {Map} adjList Adjacency list
 * @returns Map from node ID to integer DAG level.
 */
function getNodeLevels(adjList) {
    // maps the node ID to its depth level in the DAG
    const nodeLevel = new Map();

    // stack of unvisited nodes (start by the root ones)
    const visitStack = findRootNodes(adjList);

    // initialize root nodes as depth 0
    for (let rootNode of visitStack) {
        nodeLevel.set(rootNode, 0);
    }

    while (visitStack.length > 0) {
        const current = visitStack.pop();
        const currentLevel = nodeLevel.get(current);

        // push child nodes of current node into the visit stack
        for (let child of adjList.get(current)) {
            if (nodeLevel.has(child)) {
                // handle the case where a node has multiple parents: we assign the child to the
                // deepest parent
                if (currentLevel + 1 > nodeLevel.get(child)) {
                    nodeLevel.set(child, currentLevel + 1);

                    // we have to update the descendants too
                    visitStack.push(child);
                }
            } else {
                nodeLevel.set(child, currentLevel + 1);
                visitStack.push(child);
            }
        }
    }

    return nodeLevel;
}
