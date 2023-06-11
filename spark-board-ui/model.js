/**
 * IMPORTANT: this file containst the nodes and links for the react-flow application.
 *            however, the actual data will be created by the spark_board application
 *            and this file will be replaced by the real data frame transformation nodes
 *            so this file only exists here to provide a model that allows the react app
 *            to compile and run.
 *            Changes to this file will be irrelevant to the actual production data.
 */

const model_defaultSettings = {
    "animationEnabled": true,
    "animationEnabledOnDrag": true
};

const model_initialNodes = [
    {
        "id": "139708680221312",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n",
            "columns": [
                {
                    "id": "139708680221312->1",
                    "type": "column",
                    "parentNode": "139708680221312",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "139708680223328->1"
                        ]
                    }
                },
                {
                    "id": "139708680221312->2",
                    "type": "column",
                    "parentNode": "139708680221312",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "139708680223328->2"
                        ]
                    }
                },
                {
                    "id": "139708680221312->4",
                    "type": "column",
                    "parentNode": "139708680221312",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "139708680223328->4"
                        ]
                    }
                },
                {
                    "id": "139708680221312->11",
                    "type": "column",
                    "parentNode": "139708680221312",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708680223328->11"
                        ]
                    }
                },
                {
                    "id": "139708680221312->18",
                    "type": "column",
                    "parentNode": "139708680221312",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708680223328->18"
                        ]
                    }
                },
                {
                    "id": "139708680221312->20",
                    "type": "column",
                    "parentNode": "139708680221312",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708680223328->20"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680223328",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- population: long (nullable = true)\n",
            "columns": [
                {
                    "id": "139708680223328->4",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "139708680221984->4"
                        ]
                    }
                },
                {
                    "id": "139708680223328->0",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "139708680221984->0"
                        ]
                    }
                },
                {
                    "id": "139708680223328->1",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "139708680221984->1"
                        ]
                    }
                },
                {
                    "id": "139708680223328->2",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "139708680221984->2"
                        ]
                    }
                },
                {
                    "id": "139708680223328->3",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "139708680221984->3"
                        ]
                    }
                },
                {
                    "id": "139708680223328->20",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708680221984->20"
                        ]
                    }
                },
                {
                    "id": "139708680223328->18",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708680221984->18"
                        ]
                    }
                },
                {
                    "id": "139708680223328->21",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "139708680221984->21"
                        ]
                    }
                },
                {
                    "id": "139708680223328->11",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708680221984->11"
                        ]
                    }
                },
                {
                    "id": "139708680223328->12",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "139708680221984->12"
                        ]
                    }
                },
                {
                    "id": "139708680223328->13",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "139708680221984->13"
                        ]
                    }
                },
                {
                    "id": "139708680223328->33",
                    "type": "column",
                    "parentNode": "139708680223328",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708680221984->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680221984",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "Some((city#4 = city#19))",
            "join_type": "Inner",
            "columns": [
                {
                    "id": "139708680221984->0",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "139708680221072->0"
                        ]
                    }
                },
                {
                    "id": "139708680221984->1",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "139708680221072->1"
                        ]
                    }
                },
                {
                    "id": "139708680221984->2",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "139708680221072->2"
                        ]
                    }
                },
                {
                    "id": "139708680221984->3",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "139708680221072->3"
                        ]
                    }
                },
                {
                    "id": "139708680221984->4",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "139708680221072->4"
                        ]
                    }
                },
                {
                    "id": "139708680221984->20",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708680219968->20"
                        ]
                    }
                },
                {
                    "id": "139708680221984->19",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "139708680219968->19"
                        ]
                    }
                },
                {
                    "id": "139708680221984->18",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708680219968->18"
                        ]
                    }
                },
                {
                    "id": "139708680221984->21",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "139708680219968->21"
                        ]
                    }
                },
                {
                    "id": "139708680221984->11",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708680219968->11"
                        ]
                    }
                },
                {
                    "id": "139708680221984->12",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "139708680219968->12"
                        ]
                    }
                },
                {
                    "id": "139708680221984->13",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "139708680219968->13"
                        ]
                    }
                },
                {
                    "id": "139708680221984->33",
                    "type": "column",
                    "parentNode": "139708680221984",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708680219968->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680219968",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- population: long (nullable = true)\n",
            "columns": [
                {
                    "id": "139708680219968->20",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708680214352->20"
                        ]
                    }
                },
                {
                    "id": "139708680219968->19",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "139708680214352->19"
                        ]
                    }
                },
                {
                    "id": "139708680219968->18",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708680214352->18"
                        ]
                    }
                },
                {
                    "id": "139708680219968->21",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "139708680214352->21"
                        ]
                    }
                },
                {
                    "id": "139708680219968->11",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708680214352->11"
                        ]
                    }
                },
                {
                    "id": "139708680219968->12",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "139708680214352->12"
                        ]
                    }
                },
                {
                    "id": "139708680219968->13",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "139708680214352->13"
                        ]
                    }
                },
                {
                    "id": "139708680219968->33",
                    "type": "column",
                    "parentNode": "139708680219968",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708680214352->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680214352",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "Some((continent#20 = continent#26))",
            "join_type": "Inner",
            "columns": [
                {
                    "id": "139708680214352->19",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "139708680218000->19"
                        ]
                    }
                },
                {
                    "id": "139708680214352->18",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708680218000->18"
                        ]
                    }
                },
                {
                    "id": "139708680214352->20",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708680218000->20"
                        ]
                    }
                },
                {
                    "id": "139708680214352->21",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "139708680218000->21"
                        ]
                    }
                },
                {
                    "id": "139708680214352->11",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708680218000->11"
                        ]
                    }
                },
                {
                    "id": "139708680214352->12",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "139708680218000->12"
                        ]
                    }
                },
                {
                    "id": "139708680214352->13",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "139708680218000->13"
                        ]
                    }
                },
                {
                    "id": "139708680214352->26",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "139708680219488->26"
                        ]
                    }
                },
                {
                    "id": "139708680214352->33",
                    "type": "column",
                    "parentNode": "139708680214352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708680219488->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680219488",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "(population > CAST(100000 AS BIGINT))",
            "columns": [
                {
                    "id": "139708680219488->26",
                    "type": "column",
                    "parentNode": "139708680219488",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "139708661581712->26"
                        ]
                    }
                },
                {
                    "id": "139708680219488->33",
                    "type": "column",
                    "parentNode": "139708680219488",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708661581712->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708661581712",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "columns": [
                {
                    "id": "139708661581712->26",
                    "type": "column",
                    "parentNode": "139708661581712",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "139708661587088->26"
                        ]
                    }
                },
                {
                    "id": "139708661581712->33",
                    "type": "column",
                    "parentNode": "139708661581712",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708661587088->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708661587088",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: long (nullable = true)\n",
            "condition": "Some((continent#26 = continent#47))",
            "join_type": "LeftOuter",
            "columns": [
                {
                    "id": "139708661587088->26",
                    "type": "column",
                    "parentNode": "139708661587088",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": [
                            "139708661587472->26"
                        ]
                    }
                },
                {
                    "id": "139708661587088->47",
                    "type": "column",
                    "parentNode": "139708661587088",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 47,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#47: string\n",
                        "linked_columns": [
                            "139708661588480->47"
                        ]
                    }
                },
                {
                    "id": "139708661587088->33",
                    "type": "column",
                    "parentNode": "139708661587088",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": [
                            "139708661588480->33"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708661588480",
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
                    "id": "139708661588480->47",
                    "type": "column",
                    "parentNode": "139708661588480",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 47,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#47: string\n",
                        "linked_columns": [
                            "139708661593184->47"
                        ]
                    }
                },
                {
                    "id": "139708661588480->33",
                    "type": "column",
                    "parentNode": "139708661588480",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 33,
                        "name": "population",
                        "type": "bigint",
                        "tree_string": "population#33: bigint\n",
                        "linked_columns": []
                    }
                }
            ]
        }
    },
    {
        "id": "139708661593184",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n",
            "columns": [
                {
                    "id": "139708661593184->45",
                    "type": "column",
                    "parentNode": "139708661593184",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 45,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#45: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708661593184->46",
                    "type": "column",
                    "parentNode": "139708661593184",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 46,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#46: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708661593184->47",
                    "type": "column",
                    "parentNode": "139708661593184",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 47,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#47: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708661593184->48",
                    "type": "column",
                    "parentNode": "139708661593184",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 48,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#48: int\n",
                        "linked_columns": []
                    }
                }
            ]
        }
    },
    {
        "id": "139708661587472",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- continent: string (nullable = true)\n",
            "columns": [
                {
                    "id": "139708661587472->26",
                    "type": "column",
                    "parentNode": "139708661587472",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 26,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#26: string\n",
                        "linked_columns": []
                    }
                }
            ]
        }
    },
    {
        "id": "139708680218000",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
            "columns": [
                {
                    "id": "139708680218000->19",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "139708661584352->19"
                        ]
                    }
                },
                {
                    "id": "139708680218000->18",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708661584352->18"
                        ]
                    }
                },
                {
                    "id": "139708680218000->20",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708661584352->20"
                        ]
                    }
                },
                {
                    "id": "139708680218000->21",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "139708661584352->21"
                        ]
                    }
                },
                {
                    "id": "139708680218000->11",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708661584352->11"
                        ]
                    }
                },
                {
                    "id": "139708680218000->12",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "139708661584352->12"
                        ]
                    }
                },
                {
                    "id": "139708680218000->13",
                    "type": "column",
                    "parentNode": "139708680218000",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "139708661584352->13"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708661584352",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
            "condition": "Some((city#19 = city#10))",
            "join_type": "Inner",
            "columns": [
                {
                    "id": "139708661584352->18",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": [
                            "139708661582672->18"
                        ]
                    }
                },
                {
                    "id": "139708661584352->19",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": [
                            "139708661582672->19"
                        ]
                    }
                },
                {
                    "id": "139708661584352->20",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": [
                            "139708661582672->20"
                        ]
                    }
                },
                {
                    "id": "139708661584352->21",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": [
                            "139708661582672->21"
                        ]
                    }
                },
                {
                    "id": "139708661584352->10",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 10,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#10: string\n",
                        "linked_columns": [
                            "139708680216752->10"
                        ]
                    }
                },
                {
                    "id": "139708661584352->11",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": [
                            "139708680216752->11"
                        ]
                    }
                },
                {
                    "id": "139708661584352->12",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": [
                            "139708680216752->12"
                        ]
                    }
                },
                {
                    "id": "139708661584352->13",
                    "type": "column",
                    "parentNode": "139708661584352",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": [
                            "139708680216752->13"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680216752",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
            "columns": [
                {
                    "id": "139708680216752->10",
                    "type": "column",
                    "parentNode": "139708680216752",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 10,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#10: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680216752->11",
                    "type": "column",
                    "parentNode": "139708680216752",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 11,
                        "name": "zip_code",
                        "type": "string",
                        "tree_string": "zip_code#11: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680216752->12",
                    "type": "column",
                    "parentNode": "139708680216752",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 12,
                        "name": "lat",
                        "type": "float",
                        "tree_string": "lat#12: float\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680216752->13",
                    "type": "column",
                    "parentNode": "139708680216752",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 13,
                        "name": "lon",
                        "type": "float",
                        "tree_string": "lon#13: float\n",
                        "linked_columns": []
                    }
                }
            ]
        }
    },
    {
        "id": "139708661582672",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- population: integer (nullable = true)\n",
            "columns": [
                {
                    "id": "139708661582672->18",
                    "type": "column",
                    "parentNode": "139708661582672",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 18,
                        "name": "country",
                        "type": "string",
                        "tree_string": "country#18: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708661582672->19",
                    "type": "column",
                    "parentNode": "139708661582672",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 19,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#19: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708661582672->20",
                    "type": "column",
                    "parentNode": "139708661582672",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 20,
                        "name": "continent",
                        "type": "string",
                        "tree_string": "continent#20: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708661582672->21",
                    "type": "column",
                    "parentNode": "139708661582672",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 21,
                        "name": "population",
                        "type": "int",
                        "tree_string": "population#21: int\n",
                        "linked_columns": []
                    }
                }
            ]
        }
    },
    {
        "id": "139708680221072",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
            "condition": "(city = 'CABA')",
            "columns": [
                {
                    "id": "139708680221072->0",
                    "type": "column",
                    "parentNode": "139708680221072",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "139708680210992->0"
                        ]
                    }
                },
                {
                    "id": "139708680221072->1",
                    "type": "column",
                    "parentNode": "139708680221072",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "139708680210992->1"
                        ]
                    }
                },
                {
                    "id": "139708680221072->2",
                    "type": "column",
                    "parentNode": "139708680221072",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "139708680210992->2"
                        ]
                    }
                },
                {
                    "id": "139708680221072->3",
                    "type": "column",
                    "parentNode": "139708680221072",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "139708680210992->3"
                        ]
                    }
                },
                {
                    "id": "139708680221072->4",
                    "type": "column",
                    "parentNode": "139708680221072",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "139708680210992->4"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680210992",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
            "condition": "(age > 18)",
            "columns": [
                {
                    "id": "139708680210992->0",
                    "type": "column",
                    "parentNode": "139708680210992",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": [
                            "139708680218384->0"
                        ]
                    }
                },
                {
                    "id": "139708680210992->1",
                    "type": "column",
                    "parentNode": "139708680210992",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": [
                            "139708680218384->1"
                        ]
                    }
                },
                {
                    "id": "139708680210992->2",
                    "type": "column",
                    "parentNode": "139708680210992",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": [
                            "139708680218384->2"
                        ]
                    }
                },
                {
                    "id": "139708680210992->3",
                    "type": "column",
                    "parentNode": "139708680210992",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": [
                            "139708680218384->3"
                        ]
                    }
                },
                {
                    "id": "139708680210992->4",
                    "type": "column",
                    "parentNode": "139708680210992",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": [
                            "139708680218384->4"
                        ]
                    }
                }
            ]
        }
    },
    {
        "id": "139708680218384",
        "type": "transformation",
        "data": {
            "type": "Table",
            "label": "Table",
            "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
            "columns": [
                {
                    "id": "139708680218384->0",
                    "type": "column",
                    "parentNode": "139708680218384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 0,
                        "name": "dni",
                        "type": "int",
                        "tree_string": "dni#0: int\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680218384->1",
                    "type": "column",
                    "parentNode": "139708680218384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 1,
                        "name": "name",
                        "type": "string",
                        "tree_string": "name#1: string\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680218384->2",
                    "type": "column",
                    "parentNode": "139708680218384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 2,
                        "name": "age",
                        "type": "int",
                        "tree_string": "age#2: int\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680218384->3",
                    "type": "column",
                    "parentNode": "139708680218384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 3,
                        "name": "weight",
                        "type": "float",
                        "tree_string": "weight#3: float\n",
                        "linked_columns": []
                    }
                },
                {
                    "id": "139708680218384->4",
                    "type": "column",
                    "parentNode": "139708680218384",
                    "extent": "parent",
                    "expandParent": true,
                    "data": {
                        "id": 4,
                        "name": "city",
                        "type": "string",
                        "tree_string": "city#4: string\n",
                        "linked_columns": []
                    }
                }
            ]
        }
    },
    {
        "id": "139708680221312->1",
        "type": "column",
        "parentNode": "139708680221312",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "139708680223328->1"
            ]
        }
    },
    {
        "id": "139708680221312->2",
        "type": "column",
        "parentNode": "139708680221312",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "139708680223328->2"
            ]
        }
    },
    {
        "id": "139708680221312->4",
        "type": "column",
        "parentNode": "139708680221312",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "139708680223328->4"
            ]
        }
    },
    {
        "id": "139708680221312->11",
        "type": "column",
        "parentNode": "139708680221312",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708680223328->11"
            ]
        }
    },
    {
        "id": "139708680221312->18",
        "type": "column",
        "parentNode": "139708680221312",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708680223328->18"
            ]
        }
    },
    {
        "id": "139708680221312->20",
        "type": "column",
        "parentNode": "139708680221312",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708680223328->20"
            ]
        }
    },
    {
        "id": "139708680223328->4",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "139708680221984->4"
            ]
        }
    },
    {
        "id": "139708680223328->0",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "139708680221984->0"
            ]
        }
    },
    {
        "id": "139708680223328->1",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "139708680221984->1"
            ]
        }
    },
    {
        "id": "139708680223328->2",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "139708680221984->2"
            ]
        }
    },
    {
        "id": "139708680223328->3",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "139708680221984->3"
            ]
        }
    },
    {
        "id": "139708680223328->20",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708680221984->20"
            ]
        }
    },
    {
        "id": "139708680223328->18",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708680221984->18"
            ]
        }
    },
    {
        "id": "139708680223328->21",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "139708680221984->21"
            ]
        }
    },
    {
        "id": "139708680223328->11",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708680221984->11"
            ]
        }
    },
    {
        "id": "139708680223328->12",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "139708680221984->12"
            ]
        }
    },
    {
        "id": "139708680223328->13",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "139708680221984->13"
            ]
        }
    },
    {
        "id": "139708680223328->33",
        "type": "column",
        "parentNode": "139708680223328",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708680221984->33"
            ]
        }
    },
    {
        "id": "139708680221984->0",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "139708680221072->0"
            ]
        }
    },
    {
        "id": "139708680221984->1",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "139708680221072->1"
            ]
        }
    },
    {
        "id": "139708680221984->2",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "139708680221072->2"
            ]
        }
    },
    {
        "id": "139708680221984->3",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "139708680221072->3"
            ]
        }
    },
    {
        "id": "139708680221984->4",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "139708680221072->4"
            ]
        }
    },
    {
        "id": "139708680221984->20",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708680219968->20"
            ]
        }
    },
    {
        "id": "139708680221984->19",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139708680219968->19"
            ]
        }
    },
    {
        "id": "139708680221984->18",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708680219968->18"
            ]
        }
    },
    {
        "id": "139708680221984->21",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "139708680219968->21"
            ]
        }
    },
    {
        "id": "139708680221984->11",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708680219968->11"
            ]
        }
    },
    {
        "id": "139708680221984->12",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "139708680219968->12"
            ]
        }
    },
    {
        "id": "139708680221984->13",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "139708680219968->13"
            ]
        }
    },
    {
        "id": "139708680221984->33",
        "type": "column",
        "parentNode": "139708680221984",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708680219968->33"
            ]
        }
    },
    {
        "id": "139708680219968->20",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708680214352->20"
            ]
        }
    },
    {
        "id": "139708680219968->19",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139708680214352->19"
            ]
        }
    },
    {
        "id": "139708680219968->18",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708680214352->18"
            ]
        }
    },
    {
        "id": "139708680219968->21",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "139708680214352->21"
            ]
        }
    },
    {
        "id": "139708680219968->11",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708680214352->11"
            ]
        }
    },
    {
        "id": "139708680219968->12",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "139708680214352->12"
            ]
        }
    },
    {
        "id": "139708680219968->13",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "139708680214352->13"
            ]
        }
    },
    {
        "id": "139708680219968->33",
        "type": "column",
        "parentNode": "139708680219968",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708680214352->33"
            ]
        }
    },
    {
        "id": "139708680214352->19",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139708680218000->19"
            ]
        }
    },
    {
        "id": "139708680214352->18",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708680218000->18"
            ]
        }
    },
    {
        "id": "139708680214352->20",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708680218000->20"
            ]
        }
    },
    {
        "id": "139708680214352->21",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "139708680218000->21"
            ]
        }
    },
    {
        "id": "139708680214352->11",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708680218000->11"
            ]
        }
    },
    {
        "id": "139708680214352->12",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "139708680218000->12"
            ]
        }
    },
    {
        "id": "139708680214352->13",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "139708680218000->13"
            ]
        }
    },
    {
        "id": "139708680214352->26",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "139708680219488->26"
            ]
        }
    },
    {
        "id": "139708680214352->33",
        "type": "column",
        "parentNode": "139708680214352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708680219488->33"
            ]
        }
    },
    {
        "id": "139708680219488->26",
        "type": "column",
        "parentNode": "139708680219488",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "139708661581712->26"
            ]
        }
    },
    {
        "id": "139708680219488->33",
        "type": "column",
        "parentNode": "139708680219488",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708661581712->33"
            ]
        }
    },
    {
        "id": "139708661581712->26",
        "type": "column",
        "parentNode": "139708661581712",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "139708661587088->26"
            ]
        }
    },
    {
        "id": "139708661581712->33",
        "type": "column",
        "parentNode": "139708661581712",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708661587088->33"
            ]
        }
    },
    {
        "id": "139708661587088->26",
        "type": "column",
        "parentNode": "139708661587088",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": [
                "139708661587472->26"
            ]
        }
    },
    {
        "id": "139708661587088->47",
        "type": "column",
        "parentNode": "139708661587088",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#47: string\n",
            "linked_columns": [
                "139708661588480->47"
            ]
        }
    },
    {
        "id": "139708661587088->33",
        "type": "column",
        "parentNode": "139708661587088",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": [
                "139708661588480->33"
            ]
        }
    },
    {
        "id": "139708661588480->47",
        "type": "column",
        "parentNode": "139708661588480",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#47: string\n",
            "linked_columns": [
                "139708661593184->47"
            ]
        }
    },
    {
        "id": "139708661588480->33",
        "type": "column",
        "parentNode": "139708661588480",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "population",
            "type": "bigint",
            "tree_string": "population#33: bigint\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661593184->45",
        "type": "column",
        "parentNode": "139708661593184",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "country",
            "type": "string",
            "tree_string": "country#45: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661593184->46",
        "type": "column",
        "parentNode": "139708661593184",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "city",
            "type": "string",
            "tree_string": "city#46: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661593184->47",
        "type": "column",
        "parentNode": "139708661593184",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#47: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661593184->48",
        "type": "column",
        "parentNode": "139708661593184",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "population",
            "type": "int",
            "tree_string": "population#48: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661587472->26",
        "type": "column",
        "parentNode": "139708661587472",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#26: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680218000->19",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139708661584352->19"
            ]
        }
    },
    {
        "id": "139708680218000->18",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708661584352->18"
            ]
        }
    },
    {
        "id": "139708680218000->20",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708661584352->20"
            ]
        }
    },
    {
        "id": "139708680218000->21",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "139708661584352->21"
            ]
        }
    },
    {
        "id": "139708680218000->11",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708661584352->11"
            ]
        }
    },
    {
        "id": "139708680218000->12",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "139708661584352->12"
            ]
        }
    },
    {
        "id": "139708680218000->13",
        "type": "column",
        "parentNode": "139708680218000",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "139708661584352->13"
            ]
        }
    },
    {
        "id": "139708661584352->18",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": [
                "139708661582672->18"
            ]
        }
    },
    {
        "id": "139708661584352->19",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "139708661582672->19"
            ]
        }
    },
    {
        "id": "139708661584352->20",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": [
                "139708661582672->20"
            ]
        }
    },
    {
        "id": "139708661584352->21",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": [
                "139708661582672->21"
            ]
        }
    },
    {
        "id": "139708661584352->10",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 10,
            "name": "city",
            "type": "string",
            "tree_string": "city#10: string\n",
            "linked_columns": [
                "139708680216752->10"
            ]
        }
    },
    {
        "id": "139708661584352->11",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": [
                "139708680216752->11"
            ]
        }
    },
    {
        "id": "139708661584352->12",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": [
                "139708680216752->12"
            ]
        }
    },
    {
        "id": "139708661584352->13",
        "type": "column",
        "parentNode": "139708661584352",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": [
                "139708680216752->13"
            ]
        }
    },
    {
        "id": "139708680216752->10",
        "type": "column",
        "parentNode": "139708680216752",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 10,
            "name": "city",
            "type": "string",
            "tree_string": "city#10: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680216752->11",
        "type": "column",
        "parentNode": "139708680216752",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 11,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#11: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680216752->12",
        "type": "column",
        "parentNode": "139708680216752",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 12,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#12: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680216752->13",
        "type": "column",
        "parentNode": "139708680216752",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 13,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#13: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661582672->18",
        "type": "column",
        "parentNode": "139708661582672",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "country",
            "type": "string",
            "tree_string": "country#18: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661582672->19",
        "type": "column",
        "parentNode": "139708661582672",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661582672->20",
        "type": "column",
        "parentNode": "139708661582672",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 20,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#20: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708661582672->21",
        "type": "column",
        "parentNode": "139708661582672",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 21,
            "name": "population",
            "type": "int",
            "tree_string": "population#21: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680221072->0",
        "type": "column",
        "parentNode": "139708680221072",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "139708680210992->0"
            ]
        }
    },
    {
        "id": "139708680221072->1",
        "type": "column",
        "parentNode": "139708680221072",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "139708680210992->1"
            ]
        }
    },
    {
        "id": "139708680221072->2",
        "type": "column",
        "parentNode": "139708680221072",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "139708680210992->2"
            ]
        }
    },
    {
        "id": "139708680221072->3",
        "type": "column",
        "parentNode": "139708680221072",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "139708680210992->3"
            ]
        }
    },
    {
        "id": "139708680221072->4",
        "type": "column",
        "parentNode": "139708680221072",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "139708680210992->4"
            ]
        }
    },
    {
        "id": "139708680210992->0",
        "type": "column",
        "parentNode": "139708680210992",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": [
                "139708680218384->0"
            ]
        }
    },
    {
        "id": "139708680210992->1",
        "type": "column",
        "parentNode": "139708680210992",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": [
                "139708680218384->1"
            ]
        }
    },
    {
        "id": "139708680210992->2",
        "type": "column",
        "parentNode": "139708680210992",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": [
                "139708680218384->2"
            ]
        }
    },
    {
        "id": "139708680210992->3",
        "type": "column",
        "parentNode": "139708680210992",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": [
                "139708680218384->3"
            ]
        }
    },
    {
        "id": "139708680210992->4",
        "type": "column",
        "parentNode": "139708680210992",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": [
                "139708680218384->4"
            ]
        }
    },
    {
        "id": "139708680218384->0",
        "type": "column",
        "parentNode": "139708680218384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 0,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#0: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680218384->1",
        "type": "column",
        "parentNode": "139708680218384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 1,
            "name": "name",
            "type": "string",
            "tree_string": "name#1: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680218384->2",
        "type": "column",
        "parentNode": "139708680218384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 2,
            "name": "age",
            "type": "int",
            "tree_string": "age#2: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680218384->3",
        "type": "column",
        "parentNode": "139708680218384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 3,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#3: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "139708680218384->4",
        "type": "column",
        "parentNode": "139708680218384",
        "extent": "parent",
        "expandParent": true,
        "data": {
            "id": 4,
            "name": "city",
            "type": "string",
            "tree_string": "city#4: string\n",
            "linked_columns": []
        }
    }
];

const model_initialEdges = [
    {
        "id": "139708680223328-139708680223328",
        "source": "139708680221312",
        "target": "139708680223328"
    },
    {
        "id": "139708680221984-139708680221984",
        "source": "139708680223328",
        "target": "139708680221984"
    },
    {
        "id": "139708680219968-139708680219968",
        "source": "139708680221984",
        "target": "139708680219968"
    },
    {
        "id": "139708680214352-139708680214352",
        "source": "139708680219968",
        "target": "139708680214352"
    },
    {
        "id": "139708680219488-139708680219488",
        "source": "139708680214352",
        "target": "139708680219488"
    },
    {
        "id": "139708661581712-139708661581712",
        "source": "139708680219488",
        "target": "139708661581712"
    },
    {
        "id": "139708661587088-139708661587088",
        "source": "139708661581712",
        "target": "139708661587088"
    },
    {
        "id": "139708661588480-139708661588480",
        "source": "139708661587088",
        "target": "139708661588480"
    },
    {
        "id": "139708661593184-139708661593184",
        "source": "139708661588480",
        "target": "139708661593184"
    },
    {
        "id": "139708661587472-139708661587472",
        "source": "139708661587088",
        "target": "139708661587472"
    },
    {
        "id": "139708680218000-139708680218000",
        "source": "139708680214352",
        "target": "139708680218000"
    },
    {
        "id": "139708661584352-139708661584352",
        "source": "139708680218000",
        "target": "139708661584352"
    },
    {
        "id": "139708680216752-139708680216752",
        "source": "139708661584352",
        "target": "139708680216752"
    },
    {
        "id": "139708661582672-139708661582672",
        "source": "139708661584352",
        "target": "139708661582672"
    },
    {
        "id": "139708680221072-139708680221072",
        "source": "139708680221984",
        "target": "139708680221072"
    },
    {
        "id": "139708680210992-139708680210992",
        "source": "139708680221072",
        "target": "139708680210992"
    },
    {
        "id": "139708680218384-139708680218384",
        "source": "139708680210992",
        "target": "139708680218384"
    },
    {
        "id": "(139708680221312->1)-(139708680223328->1)",
        "source": "139708680221312->1",
        "target": "139708680223328->1",
        "animated": true
    },
    {
        "id": "(139708680221312->2)-(139708680223328->2)",
        "source": "139708680221312->2",
        "target": "139708680223328->2",
        "animated": true
    },
    {
        "id": "(139708680221312->4)-(139708680223328->4)",
        "source": "139708680221312->4",
        "target": "139708680223328->4",
        "animated": true
    },
    {
        "id": "(139708680221312->11)-(139708680223328->11)",
        "source": "139708680221312->11",
        "target": "139708680223328->11",
        "animated": true
    },
    {
        "id": "(139708680221312->18)-(139708680223328->18)",
        "source": "139708680221312->18",
        "target": "139708680223328->18",
        "animated": true
    },
    {
        "id": "(139708680221312->20)-(139708680223328->20)",
        "source": "139708680221312->20",
        "target": "139708680223328->20",
        "animated": true
    },
    {
        "id": "(139708680223328->4)-(139708680221984->4)",
        "source": "139708680223328->4",
        "target": "139708680221984->4",
        "animated": true
    },
    {
        "id": "(139708680223328->0)-(139708680221984->0)",
        "source": "139708680223328->0",
        "target": "139708680221984->0",
        "animated": true
    },
    {
        "id": "(139708680223328->1)-(139708680221984->1)",
        "source": "139708680223328->1",
        "target": "139708680221984->1",
        "animated": true
    },
    {
        "id": "(139708680223328->2)-(139708680221984->2)",
        "source": "139708680223328->2",
        "target": "139708680221984->2",
        "animated": true
    },
    {
        "id": "(139708680223328->3)-(139708680221984->3)",
        "source": "139708680223328->3",
        "target": "139708680221984->3",
        "animated": true
    },
    {
        "id": "(139708680223328->20)-(139708680221984->20)",
        "source": "139708680223328->20",
        "target": "139708680221984->20",
        "animated": true
    },
    {
        "id": "(139708680223328->18)-(139708680221984->18)",
        "source": "139708680223328->18",
        "target": "139708680221984->18",
        "animated": true
    },
    {
        "id": "(139708680223328->21)-(139708680221984->21)",
        "source": "139708680223328->21",
        "target": "139708680221984->21",
        "animated": true
    },
    {
        "id": "(139708680223328->11)-(139708680221984->11)",
        "source": "139708680223328->11",
        "target": "139708680221984->11",
        "animated": true
    },
    {
        "id": "(139708680223328->12)-(139708680221984->12)",
        "source": "139708680223328->12",
        "target": "139708680221984->12",
        "animated": true
    },
    {
        "id": "(139708680223328->13)-(139708680221984->13)",
        "source": "139708680223328->13",
        "target": "139708680221984->13",
        "animated": true
    },
    {
        "id": "(139708680223328->33)-(139708680221984->33)",
        "source": "139708680223328->33",
        "target": "139708680221984->33",
        "animated": true
    },
    {
        "id": "(139708680221984->0)-(139708680221072->0)",
        "source": "139708680221984->0",
        "target": "139708680221072->0",
        "animated": true
    },
    {
        "id": "(139708680221984->1)-(139708680221072->1)",
        "source": "139708680221984->1",
        "target": "139708680221072->1",
        "animated": true
    },
    {
        "id": "(139708680221984->2)-(139708680221072->2)",
        "source": "139708680221984->2",
        "target": "139708680221072->2",
        "animated": true
    },
    {
        "id": "(139708680221984->3)-(139708680221072->3)",
        "source": "139708680221984->3",
        "target": "139708680221072->3",
        "animated": true
    },
    {
        "id": "(139708680221984->4)-(139708680221072->4)",
        "source": "139708680221984->4",
        "target": "139708680221072->4",
        "animated": true
    },
    {
        "id": "(139708680221984->20)-(139708680219968->20)",
        "source": "139708680221984->20",
        "target": "139708680219968->20",
        "animated": true
    },
    {
        "id": "(139708680221984->19)-(139708680219968->19)",
        "source": "139708680221984->19",
        "target": "139708680219968->19",
        "animated": true
    },
    {
        "id": "(139708680221984->18)-(139708680219968->18)",
        "source": "139708680221984->18",
        "target": "139708680219968->18",
        "animated": true
    },
    {
        "id": "(139708680221984->21)-(139708680219968->21)",
        "source": "139708680221984->21",
        "target": "139708680219968->21",
        "animated": true
    },
    {
        "id": "(139708680221984->11)-(139708680219968->11)",
        "source": "139708680221984->11",
        "target": "139708680219968->11",
        "animated": true
    },
    {
        "id": "(139708680221984->12)-(139708680219968->12)",
        "source": "139708680221984->12",
        "target": "139708680219968->12",
        "animated": true
    },
    {
        "id": "(139708680221984->13)-(139708680219968->13)",
        "source": "139708680221984->13",
        "target": "139708680219968->13",
        "animated": true
    },
    {
        "id": "(139708680221984->33)-(139708680219968->33)",
        "source": "139708680221984->33",
        "target": "139708680219968->33",
        "animated": true
    },
    {
        "id": "(139708680219968->20)-(139708680214352->20)",
        "source": "139708680219968->20",
        "target": "139708680214352->20",
        "animated": true
    },
    {
        "id": "(139708680219968->19)-(139708680214352->19)",
        "source": "139708680219968->19",
        "target": "139708680214352->19",
        "animated": true
    },
    {
        "id": "(139708680219968->18)-(139708680214352->18)",
        "source": "139708680219968->18",
        "target": "139708680214352->18",
        "animated": true
    },
    {
        "id": "(139708680219968->21)-(139708680214352->21)",
        "source": "139708680219968->21",
        "target": "139708680214352->21",
        "animated": true
    },
    {
        "id": "(139708680219968->11)-(139708680214352->11)",
        "source": "139708680219968->11",
        "target": "139708680214352->11",
        "animated": true
    },
    {
        "id": "(139708680219968->12)-(139708680214352->12)",
        "source": "139708680219968->12",
        "target": "139708680214352->12",
        "animated": true
    },
    {
        "id": "(139708680219968->13)-(139708680214352->13)",
        "source": "139708680219968->13",
        "target": "139708680214352->13",
        "animated": true
    },
    {
        "id": "(139708680219968->33)-(139708680214352->33)",
        "source": "139708680219968->33",
        "target": "139708680214352->33",
        "animated": true
    },
    {
        "id": "(139708680214352->19)-(139708680218000->19)",
        "source": "139708680214352->19",
        "target": "139708680218000->19",
        "animated": true
    },
    {
        "id": "(139708680214352->18)-(139708680218000->18)",
        "source": "139708680214352->18",
        "target": "139708680218000->18",
        "animated": true
    },
    {
        "id": "(139708680214352->20)-(139708680218000->20)",
        "source": "139708680214352->20",
        "target": "139708680218000->20",
        "animated": true
    },
    {
        "id": "(139708680214352->21)-(139708680218000->21)",
        "source": "139708680214352->21",
        "target": "139708680218000->21",
        "animated": true
    },
    {
        "id": "(139708680214352->11)-(139708680218000->11)",
        "source": "139708680214352->11",
        "target": "139708680218000->11",
        "animated": true
    },
    {
        "id": "(139708680214352->12)-(139708680218000->12)",
        "source": "139708680214352->12",
        "target": "139708680218000->12",
        "animated": true
    },
    {
        "id": "(139708680214352->13)-(139708680218000->13)",
        "source": "139708680214352->13",
        "target": "139708680218000->13",
        "animated": true
    },
    {
        "id": "(139708680214352->26)-(139708680219488->26)",
        "source": "139708680214352->26",
        "target": "139708680219488->26",
        "animated": true
    },
    {
        "id": "(139708680214352->33)-(139708680219488->33)",
        "source": "139708680214352->33",
        "target": "139708680219488->33",
        "animated": true
    },
    {
        "id": "(139708680219488->26)-(139708661581712->26)",
        "source": "139708680219488->26",
        "target": "139708661581712->26",
        "animated": true
    },
    {
        "id": "(139708680219488->33)-(139708661581712->33)",
        "source": "139708680219488->33",
        "target": "139708661581712->33",
        "animated": true
    },
    {
        "id": "(139708661581712->26)-(139708661587088->26)",
        "source": "139708661581712->26",
        "target": "139708661587088->26",
        "animated": true
    },
    {
        "id": "(139708661581712->33)-(139708661587088->33)",
        "source": "139708661581712->33",
        "target": "139708661587088->33",
        "animated": true
    },
    {
        "id": "(139708661587088->26)-(139708661587472->26)",
        "source": "139708661587088->26",
        "target": "139708661587472->26",
        "animated": true
    },
    {
        "id": "(139708661587088->47)-(139708661588480->47)",
        "source": "139708661587088->47",
        "target": "139708661588480->47",
        "animated": true
    },
    {
        "id": "(139708661587088->33)-(139708661588480->33)",
        "source": "139708661587088->33",
        "target": "139708661588480->33",
        "animated": true
    },
    {
        "id": "(139708661588480->47)-(139708661593184->47)",
        "source": "139708661588480->47",
        "target": "139708661593184->47",
        "animated": true
    },
    {
        "id": "(139708680218000->19)-(139708661584352->19)",
        "source": "139708680218000->19",
        "target": "139708661584352->19",
        "animated": true
    },
    {
        "id": "(139708680218000->18)-(139708661584352->18)",
        "source": "139708680218000->18",
        "target": "139708661584352->18",
        "animated": true
    },
    {
        "id": "(139708680218000->20)-(139708661584352->20)",
        "source": "139708680218000->20",
        "target": "139708661584352->20",
        "animated": true
    },
    {
        "id": "(139708680218000->21)-(139708661584352->21)",
        "source": "139708680218000->21",
        "target": "139708661584352->21",
        "animated": true
    },
    {
        "id": "(139708680218000->11)-(139708661584352->11)",
        "source": "139708680218000->11",
        "target": "139708661584352->11",
        "animated": true
    },
    {
        "id": "(139708680218000->12)-(139708661584352->12)",
        "source": "139708680218000->12",
        "target": "139708661584352->12",
        "animated": true
    },
    {
        "id": "(139708680218000->13)-(139708661584352->13)",
        "source": "139708680218000->13",
        "target": "139708661584352->13",
        "animated": true
    },
    {
        "id": "(139708661584352->18)-(139708661582672->18)",
        "source": "139708661584352->18",
        "target": "139708661582672->18",
        "animated": true
    },
    {
        "id": "(139708661584352->19)-(139708661582672->19)",
        "source": "139708661584352->19",
        "target": "139708661582672->19",
        "animated": true
    },
    {
        "id": "(139708661584352->20)-(139708661582672->20)",
        "source": "139708661584352->20",
        "target": "139708661582672->20",
        "animated": true
    },
    {
        "id": "(139708661584352->21)-(139708661582672->21)",
        "source": "139708661584352->21",
        "target": "139708661582672->21",
        "animated": true
    },
    {
        "id": "(139708661584352->10)-(139708680216752->10)",
        "source": "139708661584352->10",
        "target": "139708680216752->10",
        "animated": true
    },
    {
        "id": "(139708661584352->11)-(139708680216752->11)",
        "source": "139708661584352->11",
        "target": "139708680216752->11",
        "animated": true
    },
    {
        "id": "(139708661584352->12)-(139708680216752->12)",
        "source": "139708661584352->12",
        "target": "139708680216752->12",
        "animated": true
    },
    {
        "id": "(139708661584352->13)-(139708680216752->13)",
        "source": "139708661584352->13",
        "target": "139708680216752->13",
        "animated": true
    },
    {
        "id": "(139708680221072->0)-(139708680210992->0)",
        "source": "139708680221072->0",
        "target": "139708680210992->0",
        "animated": true
    },
    {
        "id": "(139708680221072->1)-(139708680210992->1)",
        "source": "139708680221072->1",
        "target": "139708680210992->1",
        "animated": true
    },
    {
        "id": "(139708680221072->2)-(139708680210992->2)",
        "source": "139708680221072->2",
        "target": "139708680210992->2",
        "animated": true
    },
    {
        "id": "(139708680221072->3)-(139708680210992->3)",
        "source": "139708680221072->3",
        "target": "139708680210992->3",
        "animated": true
    },
    {
        "id": "(139708680221072->4)-(139708680210992->4)",
        "source": "139708680221072->4",
        "target": "139708680210992->4",
        "animated": true
    },
    {
        "id": "(139708680210992->0)-(139708680218384->0)",
        "source": "139708680210992->0",
        "target": "139708680218384->0",
        "animated": true
    },
    {
        "id": "(139708680210992->1)-(139708680218384->1)",
        "source": "139708680210992->1",
        "target": "139708680218384->1",
        "animated": true
    },
    {
        "id": "(139708680210992->2)-(139708680218384->2)",
        "source": "139708680210992->2",
        "target": "139708680218384->2",
        "animated": true
    },
    {
        "id": "(139708680210992->3)-(139708680218384->3)",
        "source": "139708680210992->3",
        "target": "139708680218384->3",
        "animated": true
    },
    {
        "id": "(139708680210992->4)-(139708680218384->4)",
        "source": "139708680210992->4",
        "target": "139708680218384->4",
        "animated": true
    }
];
