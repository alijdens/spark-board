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
        "id": "139625629979728",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- sum: double (nullable = true)\n",
            "columns": [
                {
                    "id": "139625629979728->0",
                    "type": "column",
                    "parentNode": "139625629979728",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "a",
                        "type": "double",
                        "tree_string": "a#0: double\n",
                        "linked_columns": [
                            "139625629983472->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "139625629979728->1",
                    "type": "column",
                    "parentNode": "139625629979728",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "b",
                        "type": "double",
                        "tree_string": "b#1: double\n",
                        "linked_columns": [
                            "139625629983472->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "139625629979728->2",
                    "type": "column",
                    "parentNode": "139625629979728",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "c",
                        "type": "double",
                        "tree_string": "c#2: double\n",
                        "linked_columns": [
                            "139625629983472->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "139625629979728->6",
                    "type": "column",
                    "parentNode": "139625629979728",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 6,
                        "name": "sum",
                        "type": "double",
                        "tree_string": "((a#0 + b#1) / c#2) AS sum#6\n+- ((a#0 + b#1) / c#2)\n   :- (a#0 + b#1)\n   :  :- a#0: double\n   :  +- b#1: double\n   +- c#2: double\n",
                        "linked_columns": [
                            "139625629983472->0",
                            "139625629983472->1",
                            "139625629983472->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                }
            ]
        },
        "position": {
            "x": 0,
            "y": 0.0
        }
    },
    {
        "id": "139625629983472",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n",
            "columns": [
                {
                    "id": "139625629983472->0",
                    "type": "column",
                    "parentNode": "139625629983472",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "a",
                        "type": "double",
                        "tree_string": "a#0: double\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "139625629983472->1",
                    "type": "column",
                    "parentNode": "139625629983472",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "b",
                        "type": "double",
                        "tree_string": "b#1: double\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "139625629983472->2",
                    "type": "column",
                    "parentNode": "139625629983472",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "c",
                        "type": "double",
                        "tree_string": "c#2: double\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                }
            ]
        },
        "position": {
            "x": 200,
            "y": 0
        }
    },
    {
        "id": "139625629979728->0",
        "type": "column",
        "parentNode": "139625629979728",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "a",
            "type": "double",
            "tree_string": "a#0: double\n",
            "linked_columns": [
                "139625629983472->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "139625629979728->1",
        "type": "column",
        "parentNode": "139625629979728",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "b",
            "type": "double",
            "tree_string": "b#1: double\n",
            "linked_columns": [
                "139625629983472->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "139625629979728->2",
        "type": "column",
        "parentNode": "139625629979728",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "c",
            "type": "double",
            "tree_string": "c#2: double\n",
            "linked_columns": [
                "139625629983472->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "139625629979728->6",
        "type": "column",
        "parentNode": "139625629979728",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 6,
            "name": "sum",
            "type": "double",
            "tree_string": "((a#0 + b#1) / c#2) AS sum#6\n+- ((a#0 + b#1) / c#2)\n   :- (a#0 + b#1)\n   :  :- a#0: double\n   :  +- b#1: double\n   +- c#2: double\n",
            "linked_columns": [
                "139625629983472->0",
                "139625629983472->1",
                "139625629983472->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "139625629983472->0",
        "type": "column",
        "parentNode": "139625629983472",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "a",
            "type": "double",
            "tree_string": "a#0: double\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "139625629983472->1",
        "type": "column",
        "parentNode": "139625629983472",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "b",
            "type": "double",
            "tree_string": "b#1: double\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "139625629983472->2",
        "type": "column",
        "parentNode": "139625629983472",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "c",
            "type": "double",
            "tree_string": "c#2: double\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    }
];

const model_initialEdges = [
    {
        "id": "139625629983472-139625629983472",
        "source": "139625629979728",
        "target": "139625629983472"
    },
    {
        "id": "(139625629979728->0)-(139625629983472->0)",
        "source": "139625629979728->0",
        "target": "139625629983472->0",
        "animated": true
    },
    {
        "id": "(139625629979728->1)-(139625629983472->1)",
        "source": "139625629979728->1",
        "target": "139625629983472->1",
        "animated": true
    },
    {
        "id": "(139625629979728->2)-(139625629983472->2)",
        "source": "139625629979728->2",
        "target": "139625629983472->2",
        "animated": true
    },
    {
        "id": "(139625629979728->6)-(139625629983472->0)",
        "source": "139625629979728->6",
        "target": "139625629983472->0",
        "animated": true
    },
    {
        "id": "(139625629979728->6)-(139625629983472->1)",
        "source": "139625629979728->6",
        "target": "139625629983472->1",
        "animated": true
    },
    {
        "id": "(139625629979728->6)-(139625629983472->2)",
        "source": "139625629979728->6",
        "target": "139625629983472->2",
        "animated": true
    }
];
