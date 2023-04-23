/**
 * Create the diagram and load the model.
 * 
 * @param {string} div_id The id of the div to create the diagram in.
 */
function main_createDiagram(div_id) {
    const $ = go.GraphObject.make;

    const diagram =
        $(go.Diagram, div_id, {
            initialContentAlignment: go.Spot.Left,
            initialAutoScale: go.Diagram.UniformToFill,
            layout: $(go.LayeredDigraphLayout, {
                direction: 0
            }),
            "undoManager.isEnabled": true
        });

    // define aliases to make the code more compact
    const makePort = templates_makePort;
    const makeTemplate = templates_makeTransformation;

    // Define the node templates for the Spark transformations
    makeTemplate(diagram, "Table", "images/table.svg", "forestgreen", [], [makePort("OUT", false)]);
    makeTemplate(diagram, "Join", "images/join.svg", "mediumorchid", [makePort("L", true), makePort("R", true)], [makePort("OUT", false)]);
    makeTemplate(diagram, "Project", "images/project.svg", "darkcyan", [makePort("", true)], [makePort("OUT", false)]);
    makeTemplate(diagram, "Filter", "images/filter.svg", "cornflowerblue", [makePort("", true)], [makePort("OUT", false)]);
    makeTemplate(diagram, "Group", "images/group.svg", "mediumpurple", [makePort("", true)], [makePort("OUT", false)]);
    makeTemplate(diagram, "Sort", "images/sort.svg", "sienna", [makePort("", true)], [makePort("OUT", false)]);
    makeTemplate(diagram, "Export", "images/upload.svg", "darkred", [makePort("", true)], []);

    diagram.linkTemplate =
        $(go.Link, {
                routing: go.Link.Orthogonal,
                corner: 5,
                relinkableFrom: true,
                relinkableTo: true
            },
            $(go.Shape, {
                stroke: "gray",
                strokeWidth: 2
            }),
            $(go.Shape, {
                stroke: "gray",
                fill: "gray",
                toArrow: "Standard"
            })
        );

    return diagram;
}