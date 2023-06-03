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
        "id": "140503138439408",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n |-- car: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140503138439408->0",
                    "type": "column",
                    "parentNode": "140503138439408",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string",
                        "linked_columns": [
                            "140503138443392->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140503138439408->1",
                    "type": "column",
                    "parentNode": "140503138439408",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>",
                        "linked_columns": [
                            "140503138443392->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140503138439408->5",
                    "type": "column",
                    "parentNode": "140503138439408",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 5,
                        "name": "car",
                        "type": "string",
                        "linked_columns": [
                            "140503138443392->5"
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
        "id": "140503138443392",
        "type": "transformation",
        "data": {
            "type": "Transform",
            "label": "Transform",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n |-- car: string (nullable = true)\n",
            "generator": "explode(cars)",
            "columns": [
                {
                    "id": "140503138443392->0",
                    "type": "column",
                    "parentNode": "140503138443392",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "user",
                        "type": "string",
                        "linked_columns": [
                            "140503138444352->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140503138443392->1",
                    "type": "column",
                    "parentNode": "140503138443392",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "cars",
                        "type": "array<string>",
                        "linked_columns": [
                            "140503138444352->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140503138443392->5",
                    "type": "column",
                    "parentNode": "140503138443392",
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
        "id": "140503138444352",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- user: string (nullable = true)\n |-- cars: array (nullable = true)\n |    |-- element: string (containsNull = true)\n",
            "columns": [
                {
                    "id": "140503138444352->0",
                    "type": "column",
                    "parentNode": "140503138444352",
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
                    "id": "140503138444352->1",
                    "type": "column",
                    "parentNode": "140503138444352",
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
        "id": "140503138439408->0",
        "type": "column",
        "parentNode": "140503138439408",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string",
            "linked_columns": [
                "140503138443392->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140503138439408->1",
        "type": "column",
        "parentNode": "140503138439408",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>",
            "linked_columns": [
                "140503138443392->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140503138439408->5",
        "type": "column",
        "parentNode": "140503138439408",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 5,
            "name": "car",
            "type": "string",
            "linked_columns": [
                "140503138443392->5"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140503138443392->0",
        "type": "column",
        "parentNode": "140503138443392",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "user",
            "type": "string",
            "linked_columns": [
                "140503138444352->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140503138443392->1",
        "type": "column",
        "parentNode": "140503138443392",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "cars",
            "type": "array<string>",
            "linked_columns": [
                "140503138444352->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140503138443392->5",
        "type": "column",
        "parentNode": "140503138443392",
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
        "id": "140503138444352->0",
        "type": "column",
        "parentNode": "140503138444352",
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
        "id": "140503138444352->1",
        "type": "column",
        "parentNode": "140503138444352",
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
        "id": "140503138443392-140503138443392",
        "source": "140503138439408",
        "target": "140503138443392"
    },
    {
        "id": "140503138444352-140503138444352",
        "source": "140503138443392",
        "target": "140503138444352"
    },
    {
        "id": "(140503138439408->0)-(140503138443392->0)",
        "source": "140503138439408->0",
        "target": "140503138443392->0",
        "animated": true
    },
    {
        "id": "(140503138439408->1)-(140503138443392->1)",
        "source": "140503138439408->1",
        "target": "140503138443392->1",
        "animated": true
    },
    {
        "id": "(140503138439408->5)-(140503138443392->5)",
        "source": "140503138439408->5",
        "target": "140503138443392->5",
        "animated": true
    },
    {
        "id": "(140503138443392->0)-(140503138444352->0)",
        "source": "140503138443392->0",
        "target": "140503138444352->0",
        "animated": true
    },
    {
        "id": "(140503138443392->1)-(140503138444352->1)",
        "source": "140503138443392->1",
        "target": "140503138444352->1",
        "animated": true
    }
];
