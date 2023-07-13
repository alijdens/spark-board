/**
 * Returns the element in the DOM that represents the node with the given ID.
 * @param {string} nodeId Id of the node to get the element.
 * @returns DOM element that represents the node.
 */
export function getNodeElem(nodeId) {
    // returns the DOM element that contains the node with the given ID
    return document.querySelectorAll(`[data-id="${nodeId}"]`)[0];
}