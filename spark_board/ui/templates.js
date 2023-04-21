const $ = go.GraphObject.make;


/**
 * Create a transformation node type and attach it to the diagram. You can then
 * assign the template to a node instance by setting the node's `type` property
 * to the `typename`.
 * 
 * ```js
 * makeTransformation(diagram, "awesome_type", ...)
 * "nodeDataArray": [ 
 *     {"key": 0, "type": "awesome_type", ...},
 * ]
 * ```
 * 
 * The input and output ports can be linked to form the graph. Use `makePort`
 * to create the ports.
 * 
 * @param {*} diagram Diagram where the template will be attached to.
 * @param {string} typename Template key to be used in the node's `type` property.
 * @param {string} icon An icon to display in the transformation node.
 * @param {string} background Background color.
 * @param {Array} inports List of input ports for the transformation.
 * @param {Array} outports List of output ports for the transformation.
 */
function templates_makeTransformation(diagram, typename, icon, background, inports, outports) {
    var node = $(go.Node, "Spot",
        $(go.Panel, "Auto", { width: 100, height: 120 },
            $(go.Shape, "Rectangle", {
                fill: background,
                stroke: null,
                strokeWidth: 0,
                spot1: go.Spot.TopLeft,
                spot2: go.Spot.BottomRight
            }),
            $(go.Panel, "Table",
                $(go.TextBlock, typename, {
                    row: 0,
                    margin: 3,
                    maxSize: new go.Size(80, NaN),
                    stroke: "white",
                    font: "bold 11pt sans-serif"
                }),
                $(go.Picture, icon, {
                    row: 1,
                    width: 16,
                    height: 16,
                    scale: 3.0
                }),
                $(go.TextBlock, {
                        row: 2,
                        margin: 3,
                        editable: true,
                        maxSize: new go.Size(80, 40),
                        stroke: "white",
                        font: "bold 9pt sans-serif"
                    },
                    new go.Binding("text", "name").makeTwoWay()
                )
            ), {
                // define a tooltip for each node that displays the schema as text
                toolTip: $(
                    "ToolTip",
                    $(go.TextBlock, { margin: 4 }, new go.Binding("text", "schema_string"))
                )
            }
        ),
        $(go.Panel, "Vertical", {
                alignment: go.Spot.Left,
                alignmentFocus: new go.Spot(0, 0.5, 8, 0)
            },
            inports),
        $(go.Panel, "Vertical", {
                alignment: go.Spot.Right,
                alignmentFocus: new go.Spot(1, 0.5, -8, 0)
            },
            outports)
    );

    // add the template to the diagram so we can use it with the actual node instances
    diagram.nodeTemplateMap.set(typename, node);
}


/**
 * Create a port to be used when creating a template with `makeTransformation`.
 * Ports are used to attach connections between the transformation nodes and
 * build the graph.
 * 
 * @param {string} name Port name.
 * @param {boolean} leftside Whether to attach the port to the left or right side of the node.
 * @returns 
 */
function templates_makePort(name, leftside) {
    var port = $(go.Shape, "Rectangle", {
        fill: "gray",
        stroke: null,
        desiredSize: new go.Size(8, 8),
        portId: name, // declare this object to be a "port"
        toMaxLinks: 1, // don't allow more than one link into a port
        cursor: "pointer" // show a different cursor to indicate potential link point
    });

    var lab = $(go.TextBlock, name, // the name of the port
        {
            font: "7pt sans-serif"
        });

    var panel = $(go.Panel, "Horizontal", {
        margin: new go.Margin(2, 0)
    });

    // set up the port/panel based on which side of the node it will be on
    if (leftside) {
        port.toSpot = go.Spot.Left;
        port.toLinkable = true;
        lab.margin = new go.Margin(1, 0, 0, 1);
        panel.alignment = go.Spot.TopLeft;
        panel.add(port);
        panel.add(lab);
    } else {
        port.fromSpot = go.Spot.Right;
        port.fromLinkable = true;
        lab.margin = new go.Margin(1, 1, 0, 0);
        panel.alignment = go.Spot.TopRight;
        panel.add(lab);
        panel.add(port);
    }
    return panel;
}