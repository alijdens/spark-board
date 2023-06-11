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
        "id": "140668280195056",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140668280195056->1",
                    "type": "column",
                    "parentNode": "140668280195056",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "140668270391696->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668280195056->2",
                    "type": "column",
                    "parentNode": "140668280195056",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "140668270391696->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668280195056->4",
                    "type": "column",
                    "parentNode": "140668280195056",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "140668270391696->4"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668280195056->11",
                    "type": "column",
                    "parentNode": "140668280195056",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668270391696->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668280195056->18",
                    "type": "column",
                    "parentNode": "140668280195056",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668270391696->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668280195056->20",
                    "type": "column",
                    "parentNode": "140668280195056",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668270391696->20"
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
            "y": 125.0
        }
    },
    {
        "id": "140668270391696",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- population: long (nullable = true)\n",
            "columns": [
                {
                    "id": "140668270391696->4",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "140668270386080->4"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->0",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "140668270386080->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->1",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "140668270386080->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->2",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "140668270386080->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->3",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "140668270386080->3"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->20",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668270386080->20"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->18",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668270386080->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->21",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "140668270386080->21"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->11",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668270386080->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->12",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "140668270386080->12"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->13",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "140668270386080->13"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270391696->33",
                    "type": "column",
                    "parentNode": "140668270391696",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668270386080->33"
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
            "x": 200,
            "y": 125.0
        }
    },
    {
        "id": "140668270386080",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "Some((city#4 = city#19))",
            "join_type": "Inner",
            "columns": [
                {
                    "id": "140668270386080->0",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "140668270381328->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->1",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "140668270381328->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->2",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "140668270381328->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->3",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "140668270381328->3"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->4",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "140668270381328->4"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->20",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668270394768->20"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->19",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "140668270394768->19"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->18",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668270394768->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->21",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "140668270394768->21"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->11",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668270394768->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->12",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "140668270394768->12"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->13",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "140668270394768->13"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270386080->33",
                    "type": "column",
                    "parentNode": "140668270386080",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668270394768->33"
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
            "x": 400,
            "y": 125.0
        }
    },
    {
        "id": "140668270394768",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- population: long (nullable = true)\n",
            "columns": [
                {
                    "id": "140668270394768->20",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668252198784->20"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->19",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "140668252198784->19"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->18",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668252198784->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->21",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "140668252198784->21"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->11",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668252198784->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->12",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "140668252198784->12"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->13",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "140668252198784->13"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270394768->33",
                    "type": "column",
                    "parentNode": "140668270394768",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668252198784->33"
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
            "x": 600,
            "y": 250.0
        }
    },
    {
        "id": "140668252198784",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "Some((continent#20 = continent#26))",
            "join_type": "Inner",
            "columns": [
                {
                    "id": "140668252198784->19",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "140668252197632->19"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->18",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668252197632->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->20",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668252197632->20"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->21",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "140668252197632->21"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->11",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668252197632->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->12",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "140668252197632->12"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->13",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "140668252197632->13"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->26",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "140668252197248->26"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252198784->33",
                    "type": "column",
                    "parentNode": "140668252198784",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668252197248->33"
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
            "x": 800,
            "y": 250.0
        }
    },
    {
        "id": "140668252197248",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "(population > CAST(100000 AS BIGINT))",
            "columns": [
                {
                    "id": "140668252197248->26",
                    "type": "column",
                    "parentNode": "140668252197248",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "140668252201424->26"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197248->33",
                    "type": "column",
                    "parentNode": "140668252197248",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668252201424->33"
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
            "x": 1000,
            "y": 350.0
        }
    },
    {
        "id": "140668252201424",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "columns": [
                {
                    "id": "140668252201424->26",
                    "type": "column",
                    "parentNode": "140668252201424",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "140668252202432->26"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252201424->33",
                    "type": "column",
                    "parentNode": "140668252201424",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668252202432->33"
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
            "x": 1200,
            "y": 350.0
        }
    },
    {
        "id": "140668252202432",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "Some((continent#26 = continent#47))",
            "join_type": "LeftOuter",
            "columns": [
                {
                    "id": "140668252202432->26",
                    "type": "column",
                    "parentNode": "140668252202432",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "140668252203680->26"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252202432->47",
                    "type": "column",
                    "parentNode": "140668252202432",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 47,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#47: string\n",
                        "linked_columns": [
                            "140668252203584->47"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252202432->33",
                    "type": "column",
                    "parentNode": "140668252202432",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "140668252203584->33"
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
            "x": 1400,
            "y": 350.0
        }
    },
    {
        "id": "140668252203584",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "aggregate_expressions": [
                "continent",
                "sum(population) AS population"
            ],
            "grouping_expressions": [
                "continent"
            ],
            "columns": [
                {
                    "id": "140668252203584->47",
                    "type": "column",
                    "parentNode": "140668252203584",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 47,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#47: string\n",
                        "linked_columns": [
                            "140668252208336->47"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252203584->33",
                    "type": "column",
                    "parentNode": "140668252203584",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
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
            "x": 1600,
            "y": 400.0
        }
    },
    {
        "id": "140668252208336",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n",
            "columns": [
                {
                    "id": "140668252208336->45",
                    "type": "column",
                    "parentNode": "140668252208336",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 45,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#45: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252208336->46",
                    "type": "column",
                    "parentNode": "140668252208336",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 46,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#46: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252208336->47",
                    "type": "column",
                    "parentNode": "140668252208336",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 47,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#47: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252208336->48",
                    "type": "column",
                    "parentNode": "140668252208336",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 48,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#48: int\n",
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
            "x": 1800,
            "y": 400
        }
    },
    {
        "id": "140668252203680",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- continent: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140668252203680->26",
                    "type": "column",
                    "parentNode": "140668252203680",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
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
            "x": 1600,
            "y": 300
        }
    },
    {
        "id": "140668252197632",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
            "columns": [
                {
                    "id": "140668252197632->19",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "140668252196384->19"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197632->18",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668252196384->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197632->20",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668252196384->20"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197632->21",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "140668252196384->21"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197632->11",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668252196384->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197632->12",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "140668252196384->12"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252197632->13",
                    "type": "column",
                    "parentNode": "140668252197632",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "140668252196384->13"
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
            "x": 1000,
            "y": 150.0
        }
    },
    {
        "id": "140668252196384",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
            "condition": "Some((city#19 = city#10))",
            "join_type": "Inner",
            "columns": [
                {
                    "id": "140668252196384->18",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "140668252192928->18"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->19",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "140668252192928->19"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->20",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "140668252192928->20"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->21",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "140668252192928->21"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->10",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 10,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#10: string\n",
                        "linked_columns": [
                            "140668270392128->10"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->11",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "140668270392128->11"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->12",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "140668270392128->12"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252196384->13",
                    "type": "column",
                    "parentNode": "140668252196384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "140668270392128->13"
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
            "x": 1200,
            "y": 150.0
        }
    },
    {
        "id": "140668270392128",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
            "columns": [
                {
                    "id": "140668270392128->10",
                    "type": "column",
                    "parentNode": "140668270392128",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 10,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#10: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270392128->11",
                    "type": "column",
                    "parentNode": "140668270392128",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270392128->12",
                    "type": "column",
                    "parentNode": "140668270392128",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270392128->13",
                    "type": "column",
                    "parentNode": "140668270392128",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
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
            "x": 1400,
            "y": 200
        }
    },
    {
        "id": "140668252192928",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n",
            "columns": [
                {
                    "id": "140668252192928->18",
                    "type": "column",
                    "parentNode": "140668252192928",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252192928->19",
                    "type": "column",
                    "parentNode": "140668252192928",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252192928->20",
                    "type": "column",
                    "parentNode": "140668252192928",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668252192928->21",
                    "type": "column",
                    "parentNode": "140668252192928",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
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
            "x": 1400,
            "y": 100
        }
    },
    {
        "id": "140668270381328",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
            "condition": "(city = 'CABA')",
            "columns": [
                {
                    "id": "140668270381328->0",
                    "type": "column",
                    "parentNode": "140668270381328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "140668270382960->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270381328->1",
                    "type": "column",
                    "parentNode": "140668270381328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "140668270382960->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270381328->2",
                    "type": "column",
                    "parentNode": "140668270381328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "140668270382960->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270381328->3",
                    "type": "column",
                    "parentNode": "140668270381328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "140668270382960->3"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270381328->4",
                    "type": "column",
                    "parentNode": "140668270381328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "140668270382960->4"
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
            "x": 600,
            "y": 0.0
        }
    },
    {
        "id": "140668270382960",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
            "condition": "(age > 18)",
            "columns": [
                {
                    "id": "140668270382960->0",
                    "type": "column",
                    "parentNode": "140668270382960",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "140668270382240->0"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382960->1",
                    "type": "column",
                    "parentNode": "140668270382960",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "140668270382240->1"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382960->2",
                    "type": "column",
                    "parentNode": "140668270382960",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "140668270382240->2"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382960->3",
                    "type": "column",
                    "parentNode": "140668270382960",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "140668270382240->3"
                        ]
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382960->4",
                    "type": "column",
                    "parentNode": "140668270382960",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "140668270382240->4"
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
            "x": 800,
            "y": 0.0
        }
    },
    {
        "id": "140668270382240",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
            "columns": [
                {
                    "id": "140668270382240->0",
                    "type": "column",
                    "parentNode": "140668270382240",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382240->1",
                    "type": "column",
                    "parentNode": "140668270382240",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382240->2",
                    "type": "column",
                    "parentNode": "140668270382240",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382240->3",
                    "type": "column",
                    "parentNode": "140668270382240",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": []
                    },
                    "position": {
                        "x": 0,
                        "y": 25
                    }
                },
                {
                    "id": "140668270382240->4",
                    "type": "column",
                    "parentNode": "140668270382240",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
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
            "x": 1000,
            "y": 0
        }
    },
    {
        "id": "140668280195056->1",
        "type": "column",
        "parentNode": "140668280195056",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "140668270391696->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668280195056->2",
        "type": "column",
        "parentNode": "140668280195056",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "140668270391696->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668280195056->4",
        "type": "column",
        "parentNode": "140668280195056",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "140668270391696->4"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668280195056->11",
        "type": "column",
        "parentNode": "140668280195056",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668270391696->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668280195056->18",
        "type": "column",
        "parentNode": "140668280195056",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668270391696->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668280195056->20",
        "type": "column",
        "parentNode": "140668280195056",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668270391696->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->4",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "140668270386080->4"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->0",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "140668270386080->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->1",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "140668270386080->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->2",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "140668270386080->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->3",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "140668270386080->3"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->20",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668270386080->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->18",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668270386080->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->21",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "140668270386080->21"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->11",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668270386080->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->12",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "140668270386080->12"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->13",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "140668270386080->13"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270391696->33",
        "type": "column",
        "parentNode": "140668270391696",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668270386080->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->0",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "140668270381328->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->1",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "140668270381328->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->2",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "140668270381328->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->3",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "140668270381328->3"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->4",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "140668270381328->4"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->20",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668270394768->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->19",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140668270394768->19"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->18",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668270394768->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->21",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "140668270394768->21"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->11",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668270394768->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->12",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "140668270394768->12"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->13",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "140668270394768->13"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270386080->33",
        "type": "column",
        "parentNode": "140668270386080",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668270394768->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->20",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668252198784->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->19",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140668252198784->19"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->18",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668252198784->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->21",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "140668252198784->21"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->11",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668252198784->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->12",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "140668252198784->12"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->13",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "140668252198784->13"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270394768->33",
        "type": "column",
        "parentNode": "140668270394768",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668252198784->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->19",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140668252197632->19"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->18",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668252197632->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->20",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668252197632->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->21",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "140668252197632->21"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->11",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668252197632->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->12",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "140668252197632->12"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->13",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "140668252197632->13"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->26",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "140668252197248->26"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252198784->33",
        "type": "column",
        "parentNode": "140668252198784",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668252197248->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197248->26",
        "type": "column",
        "parentNode": "140668252197248",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "140668252201424->26"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197248->33",
        "type": "column",
        "parentNode": "140668252197248",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668252201424->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252201424->26",
        "type": "column",
        "parentNode": "140668252201424",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "140668252202432->26"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252201424->33",
        "type": "column",
        "parentNode": "140668252201424",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668252202432->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252202432->26",
        "type": "column",
        "parentNode": "140668252202432",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "140668252203680->26"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252202432->47",
        "type": "column",
        "parentNode": "140668252202432",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#47: string\n",
            "linked_columns": [
                "140668252203584->47"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252202432->33",
        "type": "column",
        "parentNode": "140668252202432",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "140668252203584->33"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252203584->47",
        "type": "column",
        "parentNode": "140668252203584",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#47: string\n",
            "linked_columns": [
                "140668252208336->47"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252203584->33",
        "type": "column",
        "parentNode": "140668252203584",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252208336->45",
        "type": "column",
        "parentNode": "140668252208336",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "country",
            "type": "string",
            "tree_string": "country#45: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252208336->46",
        "type": "column",
        "parentNode": "140668252208336",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "city",
            "type": "string",
            "tree_string": "city#46: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252208336->47",
        "type": "column",
        "parentNode": "140668252208336",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#47: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252208336->48",
        "type": "column",
        "parentNode": "140668252208336",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "population",
            "type": "int",
            "tree_string": "population#48: int\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252203680->26",
        "type": "column",
        "parentNode": "140668252203680",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->19",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140668252196384->19"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->18",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668252196384->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->20",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668252196384->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->21",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "140668252196384->21"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->11",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668252196384->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->12",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "140668252196384->12"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252197632->13",
        "type": "column",
        "parentNode": "140668252197632",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "140668252196384->13"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->18",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "140668252192928->18"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->19",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140668252192928->19"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->20",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "140668252192928->20"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->21",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "140668252192928->21"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->10",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 10,
            "name": "city",
            "type": "string",
            "tree_string": "city#10: string\n",
            "linked_columns": [
                "140668270392128->10"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->11",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "140668270392128->11"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->12",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "140668270392128->12"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252196384->13",
        "type": "column",
        "parentNode": "140668252196384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "140668270392128->13"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270392128->10",
        "type": "column",
        "parentNode": "140668270392128",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 10,
            "name": "city",
            "type": "string",
            "tree_string": "city#10: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270392128->11",
        "type": "column",
        "parentNode": "140668270392128",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270392128->12",
        "type": "column",
        "parentNode": "140668270392128",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270392128->13",
        "type": "column",
        "parentNode": "140668270392128",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252192928->18",
        "type": "column",
        "parentNode": "140668252192928",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252192928->19",
        "type": "column",
        "parentNode": "140668252192928",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252192928->20",
        "type": "column",
        "parentNode": "140668252192928",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668252192928->21",
        "type": "column",
        "parentNode": "140668252192928",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270381328->0",
        "type": "column",
        "parentNode": "140668270381328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "140668270382960->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270381328->1",
        "type": "column",
        "parentNode": "140668270381328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "140668270382960->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270381328->2",
        "type": "column",
        "parentNode": "140668270381328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "140668270382960->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270381328->3",
        "type": "column",
        "parentNode": "140668270381328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "140668270382960->3"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270381328->4",
        "type": "column",
        "parentNode": "140668270381328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "140668270382960->4"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382960->0",
        "type": "column",
        "parentNode": "140668270382960",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "140668270382240->0"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382960->1",
        "type": "column",
        "parentNode": "140668270382960",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "140668270382240->1"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382960->2",
        "type": "column",
        "parentNode": "140668270382960",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "140668270382240->2"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382960->3",
        "type": "column",
        "parentNode": "140668270382960",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "140668270382240->3"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382960->4",
        "type": "column",
        "parentNode": "140668270382960",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "140668270382240->4"
            ]
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382240->0",
        "type": "column",
        "parentNode": "140668270382240",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382240->1",
        "type": "column",
        "parentNode": "140668270382240",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382240->2",
        "type": "column",
        "parentNode": "140668270382240",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382240->3",
        "type": "column",
        "parentNode": "140668270382240",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": []
        },
        "position": {
            "x": 0,
            "y": 25
        }
    },
    {
        "id": "140668270382240->4",
        "type": "column",
        "parentNode": "140668270382240",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
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
        "id": "140668270391696-140668270391696",
        "source": "140668280195056",
        "target": "140668270391696"
    },
    {
        "id": "140668270386080-140668270386080",
        "source": "140668270391696",
        "target": "140668270386080"
    },
    {
        "id": "140668270394768-140668270394768",
        "source": "140668270386080",
        "target": "140668270394768"
    },
    {
        "id": "140668252198784-140668252198784",
        "source": "140668270394768",
        "target": "140668252198784"
    },
    {
        "id": "140668252197248-140668252197248",
        "source": "140668252198784",
        "target": "140668252197248"
    },
    {
        "id": "140668252201424-140668252201424",
        "source": "140668252197248",
        "target": "140668252201424"
    },
    {
        "id": "140668252202432-140668252202432",
        "source": "140668252201424",
        "target": "140668252202432"
    },
    {
        "id": "140668252203584-140668252203584",
        "source": "140668252202432",
        "target": "140668252203584"
    },
    {
        "id": "140668252208336-140668252208336",
        "source": "140668252203584",
        "target": "140668252208336"
    },
    {
        "id": "140668252203680-140668252203680",
        "source": "140668252202432",
        "target": "140668252203680"
    },
    {
        "id": "140668252197632-140668252197632",
        "source": "140668252198784",
        "target": "140668252197632"
    },
    {
        "id": "140668252196384-140668252196384",
        "source": "140668252197632",
        "target": "140668252196384"
    },
    {
        "id": "140668270392128-140668270392128",
        "source": "140668252196384",
        "target": "140668270392128"
    },
    {
        "id": "140668252192928-140668252192928",
        "source": "140668252196384",
        "target": "140668252192928"
    },
    {
        "id": "140668270381328-140668270381328",
        "source": "140668270386080",
        "target": "140668270381328"
    },
    {
        "id": "140668270382960-140668270382960",
        "source": "140668270381328",
        "target": "140668270382960"
    },
    {
        "id": "140668270382240-140668270382240",
        "source": "140668270382960",
        "target": "140668270382240"
    },
    {
        "id": "(140668280195056->1)-(140668270391696->1)",
        "source": "140668280195056->1",
        "target": "140668270391696->1",
        "animated": true
    },
    {
        "id": "(140668280195056->2)-(140668270391696->2)",
        "source": "140668280195056->2",
        "target": "140668270391696->2",
        "animated": true
    },
    {
        "id": "(140668280195056->4)-(140668270391696->4)",
        "source": "140668280195056->4",
        "target": "140668270391696->4",
        "animated": true
    },
    {
        "id": "(140668280195056->11)-(140668270391696->11)",
        "source": "140668280195056->11",
        "target": "140668270391696->11",
        "animated": true
    },
    {
        "id": "(140668280195056->18)-(140668270391696->18)",
        "source": "140668280195056->18",
        "target": "140668270391696->18",
        "animated": true
    },
    {
        "id": "(140668280195056->20)-(140668270391696->20)",
        "source": "140668280195056->20",
        "target": "140668270391696->20",
        "animated": true
    },
    {
        "id": "(140668270391696->4)-(140668270386080->4)",
        "source": "140668270391696->4",
        "target": "140668270386080->4",
        "animated": true
    },
    {
        "id": "(140668270391696->0)-(140668270386080->0)",
        "source": "140668270391696->0",
        "target": "140668270386080->0",
        "animated": true
    },
    {
        "id": "(140668270391696->1)-(140668270386080->1)",
        "source": "140668270391696->1",
        "target": "140668270386080->1",
        "animated": true
    },
    {
        "id": "(140668270391696->2)-(140668270386080->2)",
        "source": "140668270391696->2",
        "target": "140668270386080->2",
        "animated": true
    },
    {
        "id": "(140668270391696->3)-(140668270386080->3)",
        "source": "140668270391696->3",
        "target": "140668270386080->3",
        "animated": true
    },
    {
        "id": "(140668270391696->20)-(140668270386080->20)",
        "source": "140668270391696->20",
        "target": "140668270386080->20",
        "animated": true
    },
    {
        "id": "(140668270391696->18)-(140668270386080->18)",
        "source": "140668270391696->18",
        "target": "140668270386080->18",
        "animated": true
    },
    {
        "id": "(140668270391696->21)-(140668270386080->21)",
        "source": "140668270391696->21",
        "target": "140668270386080->21",
        "animated": true
    },
    {
        "id": "(140668270391696->11)-(140668270386080->11)",
        "source": "140668270391696->11",
        "target": "140668270386080->11",
        "animated": true
    },
    {
        "id": "(140668270391696->12)-(140668270386080->12)",
        "source": "140668270391696->12",
        "target": "140668270386080->12",
        "animated": true
    },
    {
        "id": "(140668270391696->13)-(140668270386080->13)",
        "source": "140668270391696->13",
        "target": "140668270386080->13",
        "animated": true
    },
    {
        "id": "(140668270391696->33)-(140668270386080->33)",
        "source": "140668270391696->33",
        "target": "140668270386080->33",
        "animated": true
    },
    {
        "id": "(140668270386080->0)-(140668270381328->0)",
        "source": "140668270386080->0",
        "target": "140668270381328->0",
        "animated": true
    },
    {
        "id": "(140668270386080->1)-(140668270381328->1)",
        "source": "140668270386080->1",
        "target": "140668270381328->1",
        "animated": true
    },
    {
        "id": "(140668270386080->2)-(140668270381328->2)",
        "source": "140668270386080->2",
        "target": "140668270381328->2",
        "animated": true
    },
    {
        "id": "(140668270386080->3)-(140668270381328->3)",
        "source": "140668270386080->3",
        "target": "140668270381328->3",
        "animated": true
    },
    {
        "id": "(140668270386080->4)-(140668270381328->4)",
        "source": "140668270386080->4",
        "target": "140668270381328->4",
        "animated": true
    },
    {
        "id": "(140668270386080->20)-(140668270394768->20)",
        "source": "140668270386080->20",
        "target": "140668270394768->20",
        "animated": true
    },
    {
        "id": "(140668270386080->19)-(140668270394768->19)",
        "source": "140668270386080->19",
        "target": "140668270394768->19",
        "animated": true
    },
    {
        "id": "(140668270386080->18)-(140668270394768->18)",
        "source": "140668270386080->18",
        "target": "140668270394768->18",
        "animated": true
    },
    {
        "id": "(140668270386080->21)-(140668270394768->21)",
        "source": "140668270386080->21",
        "target": "140668270394768->21",
        "animated": true
    },
    {
        "id": "(140668270386080->11)-(140668270394768->11)",
        "source": "140668270386080->11",
        "target": "140668270394768->11",
        "animated": true
    },
    {
        "id": "(140668270386080->12)-(140668270394768->12)",
        "source": "140668270386080->12",
        "target": "140668270394768->12",
        "animated": true
    },
    {
        "id": "(140668270386080->13)-(140668270394768->13)",
        "source": "140668270386080->13",
        "target": "140668270394768->13",
        "animated": true
    },
    {
        "id": "(140668270386080->33)-(140668270394768->33)",
        "source": "140668270386080->33",
        "target": "140668270394768->33",
        "animated": true
    },
    {
        "id": "(140668270394768->20)-(140668252198784->20)",
        "source": "140668270394768->20",
        "target": "140668252198784->20",
        "animated": true
    },
    {
        "id": "(140668270394768->19)-(140668252198784->19)",
        "source": "140668270394768->19",
        "target": "140668252198784->19",
        "animated": true
    },
    {
        "id": "(140668270394768->18)-(140668252198784->18)",
        "source": "140668270394768->18",
        "target": "140668252198784->18",
        "animated": true
    },
    {
        "id": "(140668270394768->21)-(140668252198784->21)",
        "source": "140668270394768->21",
        "target": "140668252198784->21",
        "animated": true
    },
    {
        "id": "(140668270394768->11)-(140668252198784->11)",
        "source": "140668270394768->11",
        "target": "140668252198784->11",
        "animated": true
    },
    {
        "id": "(140668270394768->12)-(140668252198784->12)",
        "source": "140668270394768->12",
        "target": "140668252198784->12",
        "animated": true
    },
    {
        "id": "(140668270394768->13)-(140668252198784->13)",
        "source": "140668270394768->13",
        "target": "140668252198784->13",
        "animated": true
    },
    {
        "id": "(140668270394768->33)-(140668252198784->33)",
        "source": "140668270394768->33",
        "target": "140668252198784->33",
        "animated": true
    },
    {
        "id": "(140668252198784->19)-(140668252197632->19)",
        "source": "140668252198784->19",
        "target": "140668252197632->19",
        "animated": true
    },
    {
        "id": "(140668252198784->18)-(140668252197632->18)",
        "source": "140668252198784->18",
        "target": "140668252197632->18",
        "animated": true
    },
    {
        "id": "(140668252198784->20)-(140668252197632->20)",
        "source": "140668252198784->20",
        "target": "140668252197632->20",
        "animated": true
    },
    {
        "id": "(140668252198784->21)-(140668252197632->21)",
        "source": "140668252198784->21",
        "target": "140668252197632->21",
        "animated": true
    },
    {
        "id": "(140668252198784->11)-(140668252197632->11)",
        "source": "140668252198784->11",
        "target": "140668252197632->11",
        "animated": true
    },
    {
        "id": "(140668252198784->12)-(140668252197632->12)",
        "source": "140668252198784->12",
        "target": "140668252197632->12",
        "animated": true
    },
    {
        "id": "(140668252198784->13)-(140668252197632->13)",
        "source": "140668252198784->13",
        "target": "140668252197632->13",
        "animated": true
    },
    {
        "id": "(140668252198784->26)-(140668252197248->26)",
        "source": "140668252198784->26",
        "target": "140668252197248->26",
        "animated": true
    },
    {
        "id": "(140668252198784->33)-(140668252197248->33)",
        "source": "140668252198784->33",
        "target": "140668252197248->33",
        "animated": true
    },
    {
        "id": "(140668252197248->26)-(140668252201424->26)",
        "source": "140668252197248->26",
        "target": "140668252201424->26",
        "animated": true
    },
    {
        "id": "(140668252197248->33)-(140668252201424->33)",
        "source": "140668252197248->33",
        "target": "140668252201424->33",
        "animated": true
    },
    {
        "id": "(140668252201424->26)-(140668252202432->26)",
        "source": "140668252201424->26",
        "target": "140668252202432->26",
        "animated": true
    },
    {
        "id": "(140668252201424->33)-(140668252202432->33)",
        "source": "140668252201424->33",
        "target": "140668252202432->33",
        "animated": true
    },
    {
        "id": "(140668252202432->26)-(140668252203680->26)",
        "source": "140668252202432->26",
        "target": "140668252203680->26",
        "animated": true
    },
    {
        "id": "(140668252202432->47)-(140668252203584->47)",
        "source": "140668252202432->47",
        "target": "140668252203584->47",
        "animated": true
    },
    {
        "id": "(140668252202432->33)-(140668252203584->33)",
        "source": "140668252202432->33",
        "target": "140668252203584->33",
        "animated": true
    },
    {
        "id": "(140668252203584->47)-(140668252208336->47)",
        "source": "140668252203584->47",
        "target": "140668252208336->47",
        "animated": true
    },
    {
        "id": "(140668252197632->19)-(140668252196384->19)",
        "source": "140668252197632->19",
        "target": "140668252196384->19",
        "animated": true
    },
    {
        "id": "(140668252197632->18)-(140668252196384->18)",
        "source": "140668252197632->18",
        "target": "140668252196384->18",
        "animated": true
    },
    {
        "id": "(140668252197632->20)-(140668252196384->20)",
        "source": "140668252197632->20",
        "target": "140668252196384->20",
        "animated": true
    },
    {
        "id": "(140668252197632->21)-(140668252196384->21)",
        "source": "140668252197632->21",
        "target": "140668252196384->21",
        "animated": true
    },
    {
        "id": "(140668252197632->11)-(140668252196384->11)",
        "source": "140668252197632->11",
        "target": "140668252196384->11",
        "animated": true
    },
    {
        "id": "(140668252197632->12)-(140668252196384->12)",
        "source": "140668252197632->12",
        "target": "140668252196384->12",
        "animated": true
    },
    {
        "id": "(140668252197632->13)-(140668252196384->13)",
        "source": "140668252197632->13",
        "target": "140668252196384->13",
        "animated": true
    },
    {
        "id": "(140668252196384->18)-(140668252192928->18)",
        "source": "140668252196384->18",
        "target": "140668252192928->18",
        "animated": true
    },
    {
        "id": "(140668252196384->19)-(140668252192928->19)",
        "source": "140668252196384->19",
        "target": "140668252192928->19",
        "animated": true
    },
    {
        "id": "(140668252196384->20)-(140668252192928->20)",
        "source": "140668252196384->20",
        "target": "140668252192928->20",
        "animated": true
    },
    {
        "id": "(140668252196384->21)-(140668252192928->21)",
        "source": "140668252196384->21",
        "target": "140668252192928->21",
        "animated": true
    },
    {
        "id": "(140668252196384->10)-(140668270392128->10)",
        "source": "140668252196384->10",
        "target": "140668270392128->10",
        "animated": true
    },
    {
        "id": "(140668252196384->11)-(140668270392128->11)",
        "source": "140668252196384->11",
        "target": "140668270392128->11",
        "animated": true
    },
    {
        "id": "(140668252196384->12)-(140668270392128->12)",
        "source": "140668252196384->12",
        "target": "140668270392128->12",
        "animated": true
    },
    {
        "id": "(140668252196384->13)-(140668270392128->13)",
        "source": "140668252196384->13",
        "target": "140668270392128->13",
        "animated": true
    },
    {
        "id": "(140668270381328->0)-(140668270382960->0)",
        "source": "140668270381328->0",
        "target": "140668270382960->0",
        "animated": true
    },
    {
        "id": "(140668270381328->1)-(140668270382960->1)",
        "source": "140668270381328->1",
        "target": "140668270382960->1",
        "animated": true
    },
    {
        "id": "(140668270381328->2)-(140668270382960->2)",
        "source": "140668270381328->2",
        "target": "140668270382960->2",
        "animated": true
    },
    {
        "id": "(140668270381328->3)-(140668270382960->3)",
        "source": "140668270381328->3",
        "target": "140668270382960->3",
        "animated": true
    },
    {
        "id": "(140668270381328->4)-(140668270382960->4)",
        "source": "140668270381328->4",
        "target": "140668270382960->4",
        "animated": true
    },
    {
        "id": "(140668270382960->0)-(140668270382240->0)",
        "source": "140668270382960->0",
        "target": "140668270382240->0",
        "animated": true
    },
    {
        "id": "(140668270382960->1)-(140668270382240->1)",
        "source": "140668270382960->1",
        "target": "140668270382240->1",
        "animated": true
    },
    {
        "id": "(140668270382960->2)-(140668270382240->2)",
        "source": "140668270382960->2",
        "target": "140668270382240->2",
        "animated": true
    },
    {
        "id": "(140668270382960->3)-(140668270382240->3)",
        "source": "140668270382960->3",
        "target": "140668270382240->3",
        "animated": true
    },
    {
        "id": "(140668270382960->4)-(140668270382240->4)",
        "source": "140668270382960->4",
        "target": "140668270382240->4",
        "animated": true
    }
];
