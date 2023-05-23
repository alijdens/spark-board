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
        "id": "140719047918544",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n |-- car: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140719047918544->0",
                    "type": "column",
                    "parentNode": "140719047918544",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string"
                    },
                    "position": {
                        "x": 15,
                        "y": 25
                    }
                },
                {
                    "id": "140719047918544->1",
                    "type": "column",
                    "parentNode": "140719047918544",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>"
                    },
                    "position": {
                        "x": 15,
                        "y": 25
                    }
                },
                {
                    "id": "140719047918544->5",
                    "type": "column",
                    "parentNode": "140719047918544",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 5,
                        "name": "car",
                        "type": "string"
                    },
                    "position": {
                        "x": 15,
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
        "id": "140719047925264",
        "type": "transformation",
        "data": {
            "type": "Transform",
            "label": "Transform",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n |-- car: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140719047925264->0",
                    "type": "column",
                    "parentNode": "140719047925264",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string"
                    },
                    "position": {
                        "x": 15,
                        "y": 25
                    }
                },
                {
                    "id": "140719047925264->1",
                    "type": "column",
                    "parentNode": "140719047925264",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>"
                    },
                    "position": {
                        "x": 15,
                        "y": 25
                    }
                },
                {
                    "id": "140719047925264->5",
                    "type": "column",
                    "parentNode": "140719047925264",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 5,
                        "name": "car",
                        "type": "string"
                    },
                    "position": {
                        "x": 15,
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
        "id": "140719047926224",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n",
            "columns": [
                {
                    "id": "140719047926224->0",
                    "type": "column",
                    "parentNode": "140719047926224",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string"
                    },
                    "position": {
                        "x": 15,
                        "y": 25
                    }
                },
                {
                    "id": "140719047926224->1",
                    "type": "column",
                    "parentNode": "140719047926224",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>"
                    },
                    "position": {
                        "x": 15,
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
        "id": "140719047918544->0",
        "type": "column",
        "parentNode": "140719047918544",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047918544->1",
        "type": "column",
        "parentNode": "140719047918544",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047918544->5",
        "type": "column",
        "parentNode": "140719047918544",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 5,
            "name": "car",
            "type": "string"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047925264->0",
        "type": "column",
        "parentNode": "140719047925264",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047925264->1",
        "type": "column",
        "parentNode": "140719047925264",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047925264->5",
        "type": "column",
        "parentNode": "140719047925264",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 5,
            "name": "car",
            "type": "string"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047926224->0",
        "type": "column",
        "parentNode": "140719047926224",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    },
    {
        "id": "140719047926224->1",
        "type": "column",
        "parentNode": "140719047926224",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>"
        },
        "position": {
            "x": 15,
            "y": 25
        }
    }
];

const model_initialEdges = [
    {
        "id": "140719047925264-140719047925264",
        "source": "140719047918544",
        "target": "140719047925264"
    },
    {
        "id": "140719047926224-140719047926224",
        "source": "140719047925264",
        "target": "140719047926224"
    },
    {
        "id": "(140719047918544->0)-(140719047925264->0)",
        "source": "140719047918544->0",
        "target": "140719047925264->0"
    },
    {
        "id": "(140719047918544->1)-(140719047925264->1)",
        "source": "140719047918544->1",
        "target": "140719047925264->1"
    },
    {
        "id": "(140719047918544->5)-(140719047925264->5)",
        "source": "140719047918544->5",
        "target": "140719047925264->5"
    },
    {
        "id": "(140719047925264->0)-(140719047926224->0)",
        "source": "140719047925264->0",
        "target": "140719047926224->0"
    },
    {
        "id": "(140719047925264->1)-(140719047926224->1)",
        "source": "140719047925264->1",
        "target": "140719047926224->1"
    }
];
