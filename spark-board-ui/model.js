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
        "data": {
            "type": "Project", "label": "Project", 
            "columns": [
                {"name": "Column 1", "id": 1, "type": "string"}, 
                {"name": "Column 2", "id": 2, "type": "integer"},
            ]
        }
    },
    {
        "id": "2",
        "deletable": false,
        "position": {"x": 1000, "y": 0},
        "type": "transformation",
        "data": {
            "type": "Filter", "label": "Filter",
            "columns": [
                {"name": "Column 3", "id": 3, "type": "string"},
                {"name": "Column 4", "id": 4, "type": "integer"},
                {"name": "Column 5", "id": 5, "type": "boolean"},
            ]
        }
    },
];

const model_initialEdges = [
    {"id": "1-2", "source": "1", "target": "2", "deletable": false},
];
