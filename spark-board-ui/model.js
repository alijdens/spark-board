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
        "id": "140251708310864",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n |-- car: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140251708310864->0",
                    "type": "column",
                    "parentNode": "140251708310864",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string",
                        "linked_columns": [
                            "140251708317584->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140251708310864->1",
                    "type": "column",
                    "parentNode": "140251708310864",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>",
                        "linked_columns": [
                            "140251708317584->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140251708310864->5",
                    "type": "column",
                    "parentNode": "140251708310864",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 5,
                        "name": "car",
                        "type": "string",
                        "linked_columns": [
                            "140251708317584->5"
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
        "id": "140251708317584",
        "type": "transformation",
        "data": {
            "type": "Transform",
            "label": "Transform",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n |-- car: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140251708317584->0",
                    "type": "column",
                    "parentNode": "140251708317584",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string",
                        "linked_columns": [
                            "140251708318544->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140251708317584->1",
                    "type": "column",
                    "parentNode": "140251708317584",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>",
                        "linked_columns": [
                            "140251708318544->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140251708317584->5",
                    "type": "column",
                    "parentNode": "140251708317584",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 5,
                        "name": "car",
                        "type": "string",
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
            "y": 0.0
        }
    },
    {
        "id": "140251708318544",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n",
            "columns": [
                {
                    "id": "140251708318544->0",
                    "type": "column",
                    "parentNode": "140251708318544",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140251708318544->1",
                    "type": "column",
                    "parentNode": "140251708318544",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>",
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
            "x": 400,
            "y": 0
        }
    },
    {
        "id": "140251708310864->0",
        "type": "column",
        "parentNode": "140251708310864",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string",
            "linked_columns": [
                "140251708317584->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708310864->1",
        "type": "column",
        "parentNode": "140251708310864",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>",
            "linked_columns": [
                "140251708317584->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708310864->5",
        "type": "column",
        "parentNode": "140251708310864",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 5,
            "name": "car",
            "type": "string",
            "linked_columns": [
                "140251708317584->5"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708317584->0",
        "type": "column",
        "parentNode": "140251708317584",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string",
            "linked_columns": [
                "140251708318544->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708317584->1",
        "type": "column",
        "parentNode": "140251708317584",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>",
            "linked_columns": [
                "140251708318544->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708317584->5",
        "type": "column",
        "parentNode": "140251708317584",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 5,
            "name": "car",
            "type": "string",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708318544->0",
        "type": "column",
        "parentNode": "140251708318544",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140251708318544->1",
        "type": "column",
        "parentNode": "140251708318544",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>",
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
        "id": "140251708317584-140251708317584",
        "source": "140251708310864",
        "target": "140251708317584"
    },
    {
        "id": "140251708318544-140251708318544",
        "source": "140251708317584",
        "target": "140251708318544"
    },
    {
        "id": "(140251708310864->0)-(140251708317584->0)",
        "source": "140251708310864->0",
        "target": "140251708317584->0",
        "animated": true,
    },
    {
        "id": "(140251708310864->1)-(140251708317584->1)",
        "source": "140251708310864->1",
        "target": "140251708317584->1",
        "animated": true,
    },
    {
        "id": "(140251708310864->5)-(140251708317584->5)",
        "source": "140251708310864->5",
        "target": "140251708317584->5",
        "animated": true,
    },
    {
        "id": "(140251708317584->0)-(140251708318544->0)",
        "source": "140251708317584->0",
        "target": "140251708318544->0",
        "animated": true,
    },
    {
        "id": "(140251708317584->1)-(140251708318544->1)",
        "source": "140251708317584->1",
        "target": "140251708318544->1",
        "animated": true,
    }
];
