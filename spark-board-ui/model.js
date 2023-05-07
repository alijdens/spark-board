/**
 * IMPORTANT: this file containst the nodes and links for the react-flow application.
 *            however, the actual data will be created by the spark_board application
 *            and this file will be replaced by the real data frame transformation nodes
 *            so this file only exists here to provide a model that allows the react app
 *            to compile and run.
 *            Changes to this file will be irrelevant to the actual production data.
 */

const model_initialNodes = [
    {
        "id": "1",
        "deletable": false,
        "position": {"x": 0, "y": 0},
        "type": "transformation",
        "data": {"type": "Project", "label": "Project"},
    },
    {
        "id": "2",
        "deletable": false,
        "position": {"x": 1000, "y": 0},
        "type": "transformation",
        "data": {"type": "Filter", "label": "Filter"},
    },
];

const model_initialEdges = [
    {"id": "1-2", "source": "1", "target": "2", "deletable": false},
];
