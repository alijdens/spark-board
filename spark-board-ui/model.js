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
    "animationEnabledOnDrag": true,
    "duplicateDataSources": true,
    "organizeNodesOnResize": false,
    "invertDag": false
};

const model_initialNodes = [
    {
        "id": "140719078509248",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n |-- is_top_continent: boolean (nullable = false)\n"
            },
            "columns": [
                "140719078509248->35",
                "140719078509248->113",
                "140719078509248->19",
                "140719078509248->16",
                "140719078509248->17",
                "140719078509248->122",
                "140719078509248->61",
                "140719078509248->198",
                "140719078509248->84",
                "140719078509248->231",
                "140719078509248->109",
                "140719078509248->245",
                "140719078509248->258",
                "140719078509248->272"
            ]
        }
    },
    {
        "id": "140719078398064",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n |-- is_top_country: boolean (nullable = false)\n"
            },
            "columns": [
                "140719078398064->35",
                "140719078398064->113",
                "140719078398064->19",
                "140719078398064->16",
                "140719078398064->17",
                "140719078398064->122",
                "140719078398064->61",
                "140719078398064->198",
                "140719078398064->84",
                "140719078398064->231",
                "140719078398064->109",
                "140719078398064->245",
                "140719078398064->258"
            ]
        }
    },
    {
        "id": "140719078831632",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- a: double (nullable = true)\n |-- b: double (nullable = true)\n |-- c: double (nullable = true)\n |-- d: double (nullable = true)\n |-- sum: double (nullable = true)\n |-- is_top_city: boolean (nullable = false)\n"
            },
            "columns": [
                "140719078831632->35",
                "140719078831632->113",
                "140719078831632->19",
                "140719078831632->16",
                "140719078831632->17",
                "140719078831632->122",
                "140719078831632->61",
                "140719078831632->198",
                "140719078831632->84",
                "140719078831632->231",
                "140719078831632->109",
                "140719078831632->245"
            ]
        }
    },
    {
        "id": "140719079551088",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#212)\n:- continent#35: string\n+- continent#212: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            212
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n"
            },
            "columns": [
                "140719079551088->35",
                "140719079551088->113",
                "140719079551088->19",
                "140719079551088->16",
                "140719079551088->17",
                "140719079551088->122",
                "140719079551088->61",
                "140719079551088->198",
                "140719079551088->84",
                "140719079551088->231",
                "140719079551088->109"
            ]
        }
    },
    {
        "id": "140719078396336",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140719078396336->231",
                "140719078396336->212",
                "140719078396336->109"
            ]
        }
    },
    {
        "id": "140719078826400",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "limit_expr": "1"
            },
            "columns": [
                "140719078826400->231",
                "140719078826400->212",
                "140719078826400->109"
            ]
        }
    },
    {
        "id": "140719078516832",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "order": [
                    "continent_population DESC NULLS LAST"
                ]
            },
            "columns": [
                "140719078516832->231",
                "140719078516832->212",
                "140719078516832->109"
            ]
        }
    },
    {
        "id": "140719078822368",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent_code",
                    "continent",
                    "sum(country_population) AS continent_population"
                ],
                "grouping_expressions": [
                    "continent_code",
                    "continent"
                ]
            },
            "columns": [
                "140719078822368->231",
                "140719078822368->212",
                "140719078822368->109"
            ]
        }
    },
    {
        "id": "140719078518128",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#212 = continent#230)\n:- continent#212: string\n+- continent#230: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            212,
                            230
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n"
            },
            "columns": [
                "140719078518128->212",
                "140719078518128->210",
                "140719078518128->211",
                "140719078518128->227",
                "140719078518128->84",
                "140719078518128->231"
            ]
        }
    },
    {
        "id": "140719078398352",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078398352->230",
                "140719078398352->231"
            ]
        }
    },
    {
        "id": "140719078521248",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#212 = continent#229)\n:- continent#212: string\n+- continent#229: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            212,
                            229
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140719078521248->212",
                "140719078521248->210",
                "140719078521248->211",
                "140719078521248->227",
                "140719078521248->84"
            ]
        }
    },
    {
        "id": "140719078820448",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent",
                    "country",
                    "sum(city_population) AS country_population"
                ],
                "grouping_expressions": [
                    "continent",
                    "country"
                ]
            },
            "columns": [
                "140719078820448->229",
                "140719078820448->227",
                "140719078820448->84"
            ]
        }
    },
    {
        "id": "140719078507856",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#213 = city#228)\n:- city#213: string\n+- city#228: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            213,
                            228
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140719078507856->213",
                "140719078507856->214",
                "140719078507856->215",
                "140719078507856->216",
                "140719078507856->61",
                "140719078507856->227",
                "140719078507856->229"
            ]
        }
    },
    {
        "id": "140719078829280",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078829280->227",
                "140719078829280->228",
                "140719078829280->229"
            ]
        }
    },
    {
        "id": "140719078521824",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "tree_string": "(city#213 = city#221)\n:- city#213: string\n+- city#221: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            213,
                            221
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140719078521824->213",
                "140719078521824->214",
                "140719078521824->215",
                "140719078521824->216",
                "140719078521824->61"
            ]
        }
    },
    {
        "id": "140719078824528",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140719078824528->221",
                "140719078824528->61"
            ]
        }
    },
    {
        "id": "140719078829184",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078829184->217",
                "140719078829184->218",
                "140719078829184->219",
                "140719078829184->220",
                "140719078829184->221"
            ]
        }
    },
    {
        "id": "140719078819584",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078819584->222",
                "140719078819584->223",
                "140719078819584->224",
                "140719078819584->225",
                "140719078819584->226"
            ]
        }
    },
    {
        "id": "140719078822080",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140719078822080->222",
                "140719078822080->223",
                "140719078822080->224",
                "140719078822080->225",
                "140719078822080->226"
            ]
        }
    },
    {
        "id": "140719078520864",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078520864->222",
                "140719078520864->223",
                "140719078520864->224",
                "140719078520864->225",
                "140719078520864->226"
            ]
        }
    },
    {
        "id": "140719078831872",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140719078831872->217",
                "140719078831872->218",
                "140719078831872->219",
                "140719078831872->220",
                "140719078831872->221"
            ]
        }
    },
    {
        "id": "140719078507808",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078507808->217",
                "140719078507808->218",
                "140719078507808->219",
                "140719078507808->220",
                "140719078507808->221"
            ]
        }
    },
    {
        "id": "140719078823088",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078823088->213",
                "140719078823088->214",
                "140719078823088->215",
                "140719078823088->216"
            ]
        }
    },
    {
        "id": "140719079548640",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719079548640->210",
                "140719079548640->211",
                "140719079548640->212"
            ]
        }
    },
    {
        "id": "140719079550032",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(country = country)",
                    "tree_string": "(country#113 = country#196)\n:- country#113: string\n+- country#196: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "country": [
                            113,
                            196
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city_population: long (nullable = true)\n |-- continent: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140719079550032->113",
                "140719079550032->19",
                "140719079550032->16",
                "140719079550032->17",
                "140719079550032->122",
                "140719079550032->35",
                "140719079550032->61",
                "140719079550032->198",
                "140719079550032->84"
            ]
        }
    },
    {
        "id": "140719078060096",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140719078060096->198",
                "140719078060096->196",
                "140719078060096->84"
            ]
        }
    },
    {
        "id": "140719078232160",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140719078232160->198",
                "140719078232160->196",
                "140719078232160->84"
            ]
        }
    },
    {
        "id": "140719078242768",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "order": [
                    "country_population DESC NULLS LAST"
                ]
            },
            "columns": [
                "140719078242768->198",
                "140719078242768->196",
                "140719078242768->84"
            ]
        }
    },
    {
        "id": "140719078058704",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent",
                    "country",
                    "sum(city_population) AS country_population"
                ],
                "grouping_expressions": [
                    "continent",
                    "country"
                ]
            },
            "columns": [
                "140719078058704->198",
                "140719078058704->196",
                "140719078058704->84"
            ]
        }
    },
    {
        "id": "140719078507952",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#182 = city#197)\n:- city#182: string\n+- city#197: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            182,
                            197
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140719078507952->182",
                "140719078507952->183",
                "140719078507952->184",
                "140719078507952->185",
                "140719078507952->61",
                "140719078507952->196",
                "140719078507952->198"
            ]
        }
    },
    {
        "id": "140719078236912",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078236912->196",
                "140719078236912->197",
                "140719078236912->198"
            ]
        }
    },
    {
        "id": "140719078514768",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "tree_string": "(city#182 = city#190)\n:- city#182: string\n+- city#190: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            182,
                            190
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140719078514768->182",
                "140719078514768->183",
                "140719078514768->184",
                "140719078514768->185",
                "140719078514768->61"
            ]
        }
    },
    {
        "id": "140719078400656",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140719078400656->190",
                "140719078400656->61"
            ]
        }
    },
    {
        "id": "140719078402720",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078402720->186",
                "140719078402720->187",
                "140719078402720->188",
                "140719078402720->189",
                "140719078402720->190"
            ]
        }
    },
    {
        "id": "140719078404880",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078404880->191",
                "140719078404880->192",
                "140719078404880->193",
                "140719078404880->194",
                "140719078404880->195"
            ]
        }
    },
    {
        "id": "140719078406896",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140719078406896->191",
                "140719078406896->192",
                "140719078406896->193",
                "140719078406896->194",
                "140719078406896->195"
            ]
        }
    },
    {
        "id": "140719078510352",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078510352->191",
                "140719078510352->192",
                "140719078510352->193",
                "140719078510352->194",
                "140719078510352->195"
            ]
        }
    },
    {
        "id": "140719078232640",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140719078232640->186",
                "140719078232640->187",
                "140719078232640->188",
                "140719078232640->189",
                "140719078232640->190"
            ]
        }
    },
    {
        "id": "140719078506848",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078506848->186",
                "140719078506848->187",
                "140719078506848->188",
                "140719078506848->189",
                "140719078506848->190"
            ]
        }
    },
    {
        "id": "140719078060528",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078060528->182",
                "140719078060528->183",
                "140719078060528->184",
                "140719078060528->185"
            ]
        }
    },
    {
        "id": "140719078512560",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(spark_catalog.default.people.city = spark_catalog.default.people.city)",
                    "tree_string": "(city#19 = city#167)\n:- city#19: string\n+- city#167: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            19,
                            167
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140719078512560->19",
                "140719078512560->16",
                "140719078512560->17",
                "140719078512560->122",
                "140719078512560->113",
                "140719078512560->35",
                "140719078512560->61"
            ]
        }
    },
    {
        "id": "140719273377024",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140719273377024->167",
                "140719273377024->61"
            ]
        }
    },
    {
        "id": "140719078235376",
        "type": "transformation",
        "data": {
            "type": "Limit",
            "label": "Limit",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "limit_expr": "10"
            },
            "columns": [
                "140719078235376->167",
                "140719078235376->61"
            ]
        }
    },
    {
        "id": "140719078522112",
        "type": "transformation",
        "data": {
            "type": "Sort",
            "label": "Sort",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "order": [
                    "city_population DESC NULLS LAST"
                ]
            },
            "columns": [
                "140719078522112->167",
                "140719078522112->61"
            ]
        }
    },
    {
        "id": "140719078508192",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140719078508192->167",
                "140719078508192->61"
            ]
        }
    },
    {
        "id": "140719078512848",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078512848->163",
                "140719078512848->164",
                "140719078512848->165",
                "140719078512848->166",
                "140719078512848->167"
            ]
        }
    },
    {
        "id": "140719078821408",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078821408->168",
                "140719078821408->169",
                "140719078821408->170",
                "140719078821408->171",
                "140719078821408->172"
            ]
        }
    },
    {
        "id": "140719078062544",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140719078062544->168",
                "140719078062544->169",
                "140719078062544->170",
                "140719078062544->171",
                "140719078062544->172"
            ]
        }
    },
    {
        "id": "140719078517552",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078517552->168",
                "140719078517552->169",
                "140719078517552->170",
                "140719078517552->171",
                "140719078517552->172"
            ]
        }
    },
    {
        "id": "140719078236048",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140719078236048->163",
                "140719078236048->164",
                "140719078236048->165",
                "140719078236048->166",
                "140719078236048->167"
            ]
        }
    },
    {
        "id": "140719078403728",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078403728->163",
                "140719078403728->164",
                "140719078403728->165",
                "140719078403728->166",
                "140719078403728->167"
            ]
        }
    },
    {
        "id": "140719078242912",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140719078242912->16",
                "140719078242912->17",
                "140719078242912->19",
                "140719078242912->122",
                "140719078242912->113",
                "140719078242912->35"
            ]
        }
    },
    {
        "id": "140719078509056",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(spark_catalog.default.people.city = city)",
                    "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            19,
                            114
                        ]
                    }
                },
                "join_type": "Inner",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n"
            },
            "columns": [
                "140719078509056->19",
                "140719078509056->15",
                "140719078509056->16",
                "140719078509056->17",
                "140719078509056->18",
                "140719078509056->35",
                "140719078509056->40",
                "140719078509056->109",
                "140719078509056->113",
                "140719078509056->122",
                "140719078509056->123",
                "140719078509056->124"
            ]
        }
    },
    {
        "id": "140719078521152",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            114,
                            121
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n"
            },
            "columns": [
                "140719078521152->114",
                "140719078521152->35",
                "140719078521152->40",
                "140719078521152->109",
                "140719078521152->113",
                "140719078521152->122",
                "140719078521152->123",
                "140719078521152->124"
            ]
        }
    },
    {
        "id": "140719078230096",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078230096->121",
                "140719078230096->122",
                "140719078230096->123",
                "140719078230096->124"
            ]
        }
    },
    {
        "id": "140719078506752",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            115
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n |-- continent_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078506752->35",
                "140719078506752->40",
                "140719078506752->109",
                "140719078506752->113",
                "140719078506752->114"
            ]
        }
    },
    {
        "id": "140719078395808",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078395808->113",
                "140719078395808->114",
                "140719078395808->115"
            ]
        }
    },
    {
        "id": "140719078519904",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "condition": "(continent_population > CAST(100000 AS BIGINT))"
            },
            "columns": [
                "140719078519904->40",
                "140719078519904->35",
                "140719078519904->109"
            ]
        }
    },
    {
        "id": "140719078405168",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent_code: integer (nullable = true)\n |-- continent: string (nullable = true)\n |-- continent_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent_code",
                    "continent",
                    "sum(country_population) AS continent_population"
                ],
                "grouping_expressions": [
                    "continent_code",
                    "continent"
                ]
            },
            "columns": [
                "140719078405168->40",
                "140719078405168->35",
                "140719078405168->109"
            ]
        }
    },
    {
        "id": "140719078513520",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            39
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n |-- continent_code: integer (nullable = true)\n"
            },
            "columns": [
                "140719078513520->35",
                "140719078513520->33",
                "140719078513520->34",
                "140719078513520->88",
                "140719078513520->84",
                "140719078513520->40"
            ]
        }
    },
    {
        "id": "140719078392544",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- continent_code: integer (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078392544->39",
                "140719078392544->40"
            ]
        }
    },
    {
        "id": "140719078512128",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(continent = continent)",
                    "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "continent": [
                            35,
                            90
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n"
            },
            "columns": [
                "140719078512128->35",
                "140719078512128->33",
                "140719078512128->34",
                "140719078512128->88",
                "140719078512128->84"
            ]
        }
    },
    {
        "id": "140719078508384",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- continent: string (nullable = true)\n |-- country: string (nullable = true)\n |-- country_population: long (nullable = true)\n",
                "aggregate_expressions": [
                    "continent",
                    "country",
                    "sum(city_population) AS country_population"
                ],
                "grouping_expressions": [
                    "continent",
                    "country"
                ]
            },
            "columns": [
                "140719078508384->90",
                "140719078508384->88",
                "140719078508384->84"
            ]
        }
    },
    {
        "id": "140719078511216",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = city)",
                    "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            25,
                            89
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n |-- country: string (nullable = true)\n |-- continent: string (nullable = true)\n"
            },
            "columns": [
                "140719078511216->25",
                "140719078511216->26",
                "140719078511216->27",
                "140719078511216->28",
                "140719078511216->61",
                "140719078511216->88",
                "140719078511216->90"
            ]
        }
    },
    {
        "id": "140719078521344",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078521344->88",
                "140719078521344->89",
                "140719078521344->90"
            ]
        }
    },
    {
        "id": "140719078511024",
        "type": "transformation",
        "data": {
            "type": "Join",
            "label": "Join",
            "metadata": {
                "condition": {
                    "sql_str": "(city = spark_catalog.default.people.city)",
                    "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
                    "is_equi_join": true,
                    "equi_join_columns": {
                        "city": [
                            25,
                            137
                        ]
                    }
                },
                "join_type": "LeftOuter",
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n |-- city_population: long (nullable = true)\n"
            },
            "columns": [
                "140719078511024->25",
                "140719078511024->26",
                "140719078511024->27",
                "140719078511024->28",
                "140719078511024->61"
            ]
        }
    },
    {
        "id": "140719078236288",
        "type": "transformation",
        "data": {
            "type": "Group",
            "label": "Group",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- city_population: long (nullable = false)\n",
                "aggregate_expressions": [
                    "spark_catalog.default.people.city",
                    "count(1) AS city_population"
                ],
                "grouping_expressions": [
                    "spark_catalog.default.people.city"
                ]
            },
            "columns": [
                "140719078236288->137",
                "140719078236288->61"
            ]
        }
    },
    {
        "id": "140719078519280",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078519280->133",
                "140719078519280->134",
                "140719078519280->135",
                "140719078519280->136",
                "140719078519280->137"
            ]
        }
    },
    {
        "id": "140719078230336",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078230336->138",
                "140719078230336->139",
                "140719078230336->140",
                "140719078230336->141",
                "140719078230336->142"
            ]
        }
    },
    {
        "id": "140719078509872",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140719078509872->138",
                "140719078509872->139",
                "140719078509872->140",
                "140719078509872->141",
                "140719078509872->142"
            ]
        }
    },
    {
        "id": "140719078397824",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078397824->138",
                "140719078397824->139",
                "140719078397824->140",
                "140719078397824->141",
                "140719078397824->142"
            ]
        }
    },
    {
        "id": "140719078405264",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140719078405264->133",
                "140719078405264->134",
                "140719078405264->135",
                "140719078405264->136",
                "140719078405264->137"
            ]
        }
    },
    {
        "id": "140719078401328",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078401328->133",
                "140719078401328->134",
                "140719078401328->135",
                "140719078401328->136",
                "140719078401328->137"
            ]
        }
    },
    {
        "id": "140719078510784",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- city: string (nullable = true)\n |-- zip_code: string (nullable = true)\n |-- lat: float (nullable = true)\n |-- lon: float (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078510784->25",
                "140719078510784->26",
                "140719078510784->27",
                "140719078510784->28"
            ]
        }
    },
    {
        "id": "140719078407232",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- country: string (nullable = true)\n |-- city: string (nullable = true)\n |-- continent: string (nullable = true)\n",
                "type": "Logical RDD"
            },
            "columns": [
                "140719078407232->33",
                "140719078407232->34",
                "140719078407232->35"
            ]
        }
    },
    {
        "id": "140719078233312",
        "type": "transformation",
        "data": {
            "type": "Union",
            "label": "Union",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078233312->15",
                "140719078233312->16",
                "140719078233312->17",
                "140719078233312->18",
                "140719078233312->19"
            ]
        }
    },
    {
        "id": "140719078241904",
        "type": "transformation",
        "data": {
            "type": "Project",
            "label": "Project",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n"
            },
            "columns": [
                "140719078241904->44",
                "140719078241904->45",
                "140719078241904->46",
                "140719078241904->47",
                "140719078241904->48"
            ]
        }
    },
    {
        "id": "140719078239072",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.age < 65)"
            },
            "columns": [
                "140719078239072->44",
                "140719078239072->45",
                "140719078239072->46",
                "140719078239072->47",
                "140719078239072->48"
            ]
        }
    },
    {
        "id": "140719078393120",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078393120->44",
                "140719078393120->45",
                "140719078393120->46",
                "140719078393120->47",
                "140719078393120->48"
            ]
        }
    },
    {
        "id": "140719078230192",
        "type": "transformation",
        "data": {
            "type": "Filter",
            "label": "Filter",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "condition": "(spark_catalog.default.people.city = 'CABA')"
            },
            "columns": [
                "140719078230192->15",
                "140719078230192->16",
                "140719078230192->17",
                "140719078230192->18",
                "140719078230192->19"
            ]
        }
    },
    {
        "id": "140719078404256",
        "type": "transformation",
        "data": {
            "type": "DataSource",
            "label": "DataSource",
            "metadata": {
                "schema_string": "root\n |-- dni: integer (nullable = true)\n |-- name: string (nullable = true)\n |-- age: integer (nullable = true)\n |-- weight: float (nullable = true)\n |-- city: string (nullable = true)\n",
                "type": "relation",
                "file_format": "Parquet",
                "database": "default",
                "table": "people",
                "partition_columns": [],
                "storage": "Storage(Location: file:/tmp/tmp7sngr74q/spark-warehouse/people)"
            },
            "columns": [
                "140719078404256->15",
                "140719078404256->16",
                "140719078404256->17",
                "140719078404256->18",
                "140719078404256->19"
            ]
        }
    },
    {
        "id": "140719078509248->35",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078398064->35"
            ]
        }
    },
    {
        "id": "140719078509248->113",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078398064->113"
            ]
        }
    },
    {
        "id": "140719078509248->19",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719078398064->19"
            ]
        }
    },
    {
        "id": "140719078509248->16",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078398064->16"
            ]
        }
    },
    {
        "id": "140719078509248->17",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078398064->17"
            ]
        }
    },
    {
        "id": "140719078509248->122",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078398064->122"
            ]
        }
    },
    {
        "id": "140719078509248->61",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078398064->61"
            ]
        }
    },
    {
        "id": "140719078509248->198",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140719078398064->198"
            ]
        }
    },
    {
        "id": "140719078509248->84",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078398064->84"
            ]
        }
    },
    {
        "id": "140719078509248->231",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078398064->231"
            ]
        }
    },
    {
        "id": "140719078509248->109",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078398064->109"
            ]
        }
    },
    {
        "id": "140719078509248->245",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139994974908336->163"
            ]
        }
    },
    {
        "id": "139994974897104->164",
        "type": "column",
        "parentNode": "139994974897104",
        "expandParent": false,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139994974908336->164"
            ]
        }
    },
    {
        "id": "139994974897104->165",
        "type": "column",
        "parentNode": "139994974897104",
        "expandParent": false,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139994974908336->165"
            ]
        }
    },
    {
        "id": "139994974897104->166",
        "type": "column",
        "parentNode": "139994974897104",
        "expandParent": false,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139994974908336->166"
            ]
        }
    },
    {
        "id": "139994974897104->171",
        "type": "column",
        "parentNode": "139994974897104",
        "expandParent": false,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139994974908336->171"
            ]
        }
    },
    {
        "id": "139994974897104->291",
        "type": "column",
        "parentNode": "139994974897104",
        "expandParent": false,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "140719078398064->245"
            ]
        }
    },
    {
        "id": "140719078509248->258",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "is_top_country#309: boolean\n",
            "linked_columns": [
                "140719078398064->258"
            ]
        }
    },
    {
        "id": "140719078509248->272",
        "type": "column",
        "parentNode": "140719078509248",
        "expandParent": true,
        "data": {
            "id": 328,
            "name": "is_top_continent",
            "type": "boolean",
            "tree_string": "(coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_continent#328\n+- (coalesce(continent_population#109L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(continent_population#109L, cast(0 as bigint))\n   :  :- continent_population#109: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140719078398064->109"
            ]
        }
    },
    {
        "id": "140719078398064->35",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078831632->35"
            ]
        }
    },
    {
        "id": "140719078398064->113",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078831632->113"
            ]
        }
    },
    {
        "id": "140719078398064->19",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719078831632->19"
            ]
        }
    },
    {
        "id": "140719078398064->16",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078831632->16"
            ]
        }
    },
    {
        "id": "140719078398064->17",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078831632->17"
            ]
        }
    },
    {
        "id": "140719078398064->122",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078831632->122"
            ]
        }
    },
    {
        "id": "140719078398064->61",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078831632->61"
            ]
        }
    },
    {
        "id": "140719078398064->198",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140719078831632->198"
            ]
        }
    },
    {
        "id": "140719078398064->84",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078831632->84"
            ]
        }
    },
    {
        "id": "140719078398064->231",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078831632->231"
            ]
        }
    },
    {
        "id": "140719078398064->109",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078831632->109"
            ]
        }
    },
    {
        "id": "140719078398064->245",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139994974900944->163"
            ]
        }
    },
    {
        "id": "139994974908336->164",
        "type": "column",
        "parentNode": "139994974908336",
        "expandParent": false,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139994974900944->164"
            ]
        }
    },
    {
        "id": "139994974908336->165",
        "type": "column",
        "parentNode": "139994974908336",
        "expandParent": false,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139994974900944->165"
            ]
        }
    },
    {
        "id": "139994974908336->166",
        "type": "column",
        "parentNode": "139994974908336",
        "expandParent": false,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139994974900944->166"
            ]
        }
    },
    {
        "id": "139994974908336->171",
        "type": "column",
        "parentNode": "139994974908336",
        "expandParent": false,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139994974900944->171"
            ]
        }
    },
    {
        "id": "139994974908336->291",
        "type": "column",
        "parentNode": "139994974908336",
        "expandParent": false,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "is_top_city#291: boolean\n",
            "linked_columns": [
                "140719078831632->245"
            ]
        }
    },
    {
        "id": "140719078398064->258",
        "type": "column",
        "parentNode": "140719078398064",
        "expandParent": true,
        "data": {
            "id": 309,
            "name": "is_top_country",
            "type": "boolean",
            "tree_string": "(coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_country#309\n+- (coalesce(country_population#84L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(country_population#84L, cast(0 as bigint))\n   :  :- country_population#84: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140719078831632->84"
            ]
        }
    },
    {
        "id": "140719078831632->35",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719079551088->35"
            ]
        }
    },
    {
        "id": "140719078831632->113",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719079551088->113"
            ]
        }
    },
    {
        "id": "140719078831632->19",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719079551088->19"
            ]
        }
    },
    {
        "id": "140719078831632->16",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719079551088->16"
            ]
        }
    },
    {
        "id": "140719078831632->17",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719079551088->17"
            ]
        }
    },
    {
        "id": "140719078831632->122",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719079551088->122"
            ]
        }
    },
    {
        "id": "140719078831632->61",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719079551088->61"
            ]
        }
    },
    {
        "id": "140719078831632->198",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140719079551088->198"
            ]
        }
    },
    {
        "id": "140719078831632->84",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719079551088->84"
            ]
        }
    },
    {
        "id": "140719078831632->231",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#231: int\n",
            "linked_columns": [
                "140719079551088->231"
            ]
        }
    },
    {
        "id": "140719078831632->109",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719079551088->109"
            ]
        }
    },
    {
        "id": "140719078831632->245",
        "type": "column",
        "parentNode": "140719078831632",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "139994974901904->245"
            ]
        }
    },
    {
        "id": "139994974900944->109",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "139994974901904->109"
            ]
        }
    },
    {
        "id": "139994974900944->163",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 163,
            "name": "a",
            "type": "double",
            "tree_string": "a#163: double\n",
            "linked_columns": [
                "139994974901904->163"
            ]
        }
    },
    {
        "id": "139994974900944->164",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 164,
            "name": "b",
            "type": "double",
            "tree_string": "b#164: double\n",
            "linked_columns": [
                "139994974901904->164"
            ]
        }
    },
    {
        "id": "139994974900944->165",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 165,
            "name": "c",
            "type": "double",
            "tree_string": "c#165: double\n",
            "linked_columns": [
                "139994974901904->165"
            ]
        }
    },
    {
        "id": "139994974900944->166",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 166,
            "name": "d",
            "type": "double",
            "tree_string": "d#166: double\n",
            "linked_columns": [
                "139994974901904->166"
            ]
        }
    },
    {
        "id": "139994974900944->171",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 171,
            "name": "sum",
            "type": "double",
            "tree_string": "sum#171: double\n",
            "linked_columns": [
                "139994974901904->171"
            ]
        }
    },
    {
        "id": "139994974900944->291",
        "type": "column",
        "parentNode": "139994974900944",
        "expandParent": false,
        "data": {
            "id": 291,
            "name": "is_top_city",
            "type": "boolean",
            "tree_string": "(coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint)) AS is_top_city#291\n+- (coalesce(city_population#61L, cast(0 as bigint)) > cast(0 as bigint))\n   :- coalesce(city_population#61L, cast(0 as bigint))\n   :  :- city_population#61: bigint\n   :  +- cast(0 as bigint)\n   :     +- 0\n   +- cast(0 as bigint)\n      +- 0\n",
            "linked_columns": [
                "140719079551088->61"
            ]
        }
    },
    {
        "id": "140719079551088->35",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#212)\n:- continent#35: string\n+- continent#212: string\n",
            "linked_columns": [
                "140719079550032->35",
                "140719078396336->212"
            ]
        }
    },
    {
        "id": "140719079551088->113",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719079550032->113"
            ]
        }
    },
    {
        "id": "140719079551088->19",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719079550032->19"
            ]
        }
    },
    {
        "id": "140719079551088->16",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719079550032->16"
            ]
        }
    },
    {
        "id": "140719079551088->17",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719079550032->17"
            ]
        }
    },
    {
        "id": "140719079551088->122",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719079550032->122"
            ]
        }
    },
    {
        "id": "140719079551088->61",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719079550032->61"
            ]
        }
    },
    {
        "id": "140719079551088->198",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#212)\n:- continent#35: string\n+- continent#212: string\n",
            "linked_columns": [
                "140719079550032->35",
                "140719078396336->212"
            ]
        }
    },
    {
        "id": "140719079551088->84",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719079550032->84"
            ]
        }
    },
    {
        "id": "140719079551088->231",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078396336->231"
            ]
        }
    },
    {
        "id": "140719079551088->109",
        "type": "column",
        "parentNode": "140719079551088",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078396336->109"
            ]
        }
    },
    {
        "id": "140719078396336->231",
        "type": "column",
        "parentNode": "140719078396336",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078826400->231"
            ]
        }
    },
    {
        "id": "140719078396336->212",
        "type": "column",
        "parentNode": "140719078396336",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140719078826400->212"
            ]
        }
    },
    {
        "id": "140719078396336->109",
        "type": "column",
        "parentNode": "140719078396336",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078826400->109"
            ]
        }
    },
    {
        "id": "140719078826400->231",
        "type": "column",
        "parentNode": "140719078826400",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078516832->231"
            ]
        }
    },
    {
        "id": "140719078826400->212",
        "type": "column",
        "parentNode": "140719078826400",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": [
                "140719078516832->212"
            ]
        }
    },
    {
        "id": "140719078826400->109",
        "type": "column",
        "parentNode": "140719078826400",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078516832->109"
            ]
        }
    },
    {
        "id": "140719078516832->231",
        "type": "column",
        "parentNode": "140719078516832",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078822368->231"
            ]
        }
    },
    {
        "id": "140719078516832->212",
        "type": "column",
        "parentNode": "140719078516832",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140719078822368->212"
            ]
        }
    },
    {
        "id": "140719078516832->109",
        "type": "column",
        "parentNode": "140719078516832",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078822368->109"
            ]
        }
    },
    {
        "id": "140719078822368->231",
        "type": "column",
        "parentNode": "140719078822368",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078518128->231"
            ]
        }
    },
    {
        "id": "140719078822368->212",
        "type": "column",
        "parentNode": "140719078822368",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#226: string\n",
            "linked_columns": [
                "140719078518128->212"
            ]
        }
    },
    {
        "id": "140719078822368->109",
        "type": "column",
        "parentNode": "140719078822368",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140719078518128->84"
            ]
        }
    },
    {
        "id": "140719078518128->212",
        "type": "column",
        "parentNode": "140719078518128",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#212 = continent#230)\n:- continent#212: string\n+- continent#230: string\n",
            "linked_columns": [
                "140719078521248->212",
                "140719078398352->230"
            ]
        }
    },
    {
        "id": "140719078518128->210",
        "type": "column",
        "parentNode": "140719078518128",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "140719078521248->210"
            ]
        }
    },
    {
        "id": "140719078518128->211",
        "type": "column",
        "parentNode": "140719078518128",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "140719078521248->211"
            ]
        }
    },
    {
        "id": "140719078518128->227",
        "type": "column",
        "parentNode": "140719078518128",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140719078521248->227"
            ]
        }
    },
    {
        "id": "140719078518128->84",
        "type": "column",
        "parentNode": "140719078518128",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078521248->84"
            ]
        }
    },
    {
        "id": "140719078518128->231",
        "type": "column",
        "parentNode": "140719078518128",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": [
                "140719078398352->231"
            ]
        }
    },
    {
        "id": "140719078398352->230",
        "type": "column",
        "parentNode": "140719078398352",
        "expandParent": true,
        "data": {
            "id": 244,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#244: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078398352->231",
        "type": "column",
        "parentNode": "140719078398352",
        "expandParent": true,
        "data": {
            "id": 245,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#245: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078521248->212",
        "type": "column",
        "parentNode": "140719078521248",
        "expandParent": true,
        "data": {
            "id": 226,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#212 = continent#229)\n:- continent#212: string\n+- continent#229: string\n",
            "linked_columns": [
                "140719079548640->212",
                "140719078820448->229"
            ]
        }
    },
    {
        "id": "140719078521248->210",
        "type": "column",
        "parentNode": "140719078521248",
        "expandParent": true,
        "data": {
            "id": 224,
            "name": "country",
            "type": "string",
            "tree_string": "country#224: string\n",
            "linked_columns": [
                "140719079548640->210"
            ]
        }
    },
    {
        "id": "140719078521248->211",
        "type": "column",
        "parentNode": "140719078521248",
        "expandParent": true,
        "data": {
            "id": 225,
            "name": "city",
            "type": "string",
            "tree_string": "city#225: string\n",
            "linked_columns": [
                "140719079548640->211"
            ]
        }
    },
    {
        "id": "140719078521248->227",
        "type": "column",
        "parentNode": "140719078521248",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140719078820448->227"
            ]
        }
    },
    {
        "id": "140719078521248->84",
        "type": "column",
        "parentNode": "140719078521248",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078820448->84"
            ]
        }
    },
    {
        "id": "140719078820448->229",
        "type": "column",
        "parentNode": "140719078820448",
        "expandParent": true,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "140719078507856->229"
            ]
        }
    },
    {
        "id": "140719078820448->227",
        "type": "column",
        "parentNode": "140719078820448",
        "expandParent": true,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "140719078507856->227"
            ]
        }
    },
    {
        "id": "140719078820448->84",
        "type": "column",
        "parentNode": "140719078820448",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140719078507856->61"
            ]
        }
    },
    {
        "id": "140719078507856->213",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 213,
            "name": "city",
            "type": "string",
            "tree_string": "(city#213 = city#228)\n:- city#213: string\n+- city#228: string\n",
            "linked_columns": [
                "140719078521824->213",
                "140719078829280->228"
            ]
        }
    },
    {
        "id": "140719078507856->214",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 214,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#214: string\n",
            "linked_columns": [
                "140719078521824->214"
            ]
        }
    },
    {
        "id": "140719078507856->215",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 215,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#215: float\n",
            "linked_columns": [
                "140719078521824->215"
            ]
        }
    },
    {
        "id": "140719078507856->216",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 216,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#216: float\n",
            "linked_columns": [
                "140719078521824->216"
            ]
        }
    },
    {
        "id": "140719078507856->61",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078521824->61"
            ]
        }
    },
    {
        "id": "140719078507856->227",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "country",
            "type": "string",
            "tree_string": "country#227: string\n",
            "linked_columns": [
                "140719078829280->227"
            ]
        }
    },
    {
        "id": "140719078507856->229",
        "type": "column",
        "parentNode": "140719078507856",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#229: string\n",
            "linked_columns": [
                "140719078829280->229"
            ]
        }
    },
    {
        "id": "140719078829280->227",
        "type": "column",
        "parentNode": "140719078829280",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "139994973839872->230"
            ]
        }
    },
    {
        "id": "139994973882496->61",
        "type": "column",
        "parentNode": "139994973882496",
        "expandParent": false,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139994973839872->61"
            ]
        }
    },
    {
        "id": "139994973882496->241",
        "type": "column",
        "parentNode": "139994973882496",
        "expandParent": false,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139994973839872->241"
            ]
        }
    },
    {
        "id": "140719078829280->228",
        "type": "column",
        "parentNode": "140719078829280",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "city",
            "type": "string",
            "tree_string": "city#228: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078829280->229",
        "type": "column",
        "parentNode": "140719078829280",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "139994973839872->243"
            ]
        }
    },
    {
        "id": "139994973839872->227",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "city#227: string\n",
            "linked_columns": [
                "139994973834160->227"
            ]
        }
    },
    {
        "id": "139994973839872->228",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "139994973834160->228"
            ]
        }
    },
    {
        "id": "139994973839872->229",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "139994973834160->229"
            ]
        }
    },
    {
        "id": "139994973839872->230",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "139994973834160->230"
            ]
        }
    },
    {
        "id": "139994973839872->61",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "139994973834160->61"
            ]
        }
    },
    {
        "id": "139994973839872->241",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": [
                "139994975346144->241"
            ]
        }
    },
    {
        "id": "139994973839872->242",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 242,
            "name": "city",
            "type": "string",
            "tree_string": "city#242: string\n",
            "linked_columns": [
                "139994975346144->242"
            ]
        }
    },
    {
        "id": "139994973839872->243",
        "type": "column",
        "parentNode": "139994973839872",
        "expandParent": false,
        "data": {
            "id": 243,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#243: string\n",
            "linked_columns": [
                "139994975346144->243"
            ]
        }
    },
    {
        "id": "139994975346144->241",
        "type": "column",
        "parentNode": "139994975346144",
        "expandParent": false,
        "data": {
            "id": 241,
            "name": "country",
            "type": "string",
            "tree_string": "country#241: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078521824->213",
        "type": "column",
        "parentNode": "140719078521824",
        "expandParent": true,
        "data": {
            "id": 242,
            "name": "city",
            "type": "string",
            "tree_string": "(city#213 = city#221)\n:- city#213: string\n+- city#221: string\n",
            "linked_columns": [
                "140719078823088->213",
                "140719078824528->221"
            ]
        }
    },
    {
        "id": "140719078521824->214",
        "type": "column",
        "parentNode": "140719078521824",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": [
                "140719078823088->214"
            ]
        }
    },
    {
        "id": "140719078521824->215",
        "type": "column",
        "parentNode": "140719078521824",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": [
                "140719078823088->215"
            ]
        }
    },
    {
        "id": "140719078521824->216",
        "type": "column",
        "parentNode": "140719078521824",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": [
                "140719078823088->216"
            ]
        }
    },
    {
        "id": "140719078521824->61",
        "type": "column",
        "parentNode": "140719078521824",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078824528->61"
            ]
        }
    },
    {
        "id": "140719078824528->221",
        "type": "column",
        "parentNode": "140719078824528",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140719078829184->221"
            ]
        }
    },
    {
        "id": "140719078824528->61",
        "type": "column",
        "parentNode": "140719078824528",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078829184->217",
        "type": "column",
        "parentNode": "140719078829184",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "140719078831872->217"
            ]
        }
    },
    {
        "id": "140719078829184->218",
        "type": "column",
        "parentNode": "140719078829184",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "140719078831872->218"
            ]
        }
    },
    {
        "id": "140719078829184->219",
        "type": "column",
        "parentNode": "140719078829184",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "140719078831872->219"
            ]
        }
    },
    {
        "id": "140719078829184->220",
        "type": "column",
        "parentNode": "140719078829184",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "140719078831872->220"
            ]
        }
    },
    {
        "id": "140719078829184->221",
        "type": "column",
        "parentNode": "140719078829184",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140719078831872->221"
            ]
        }
    },
    {
        "id": "140719078819584->222",
        "type": "column",
        "parentNode": "140719078819584",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "140719078822080->222"
            ]
        }
    },
    {
        "id": "140719078819584->223",
        "type": "column",
        "parentNode": "140719078819584",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "140719078822080->223"
            ]
        }
    },
    {
        "id": "140719078819584->224",
        "type": "column",
        "parentNode": "140719078819584",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "140719078822080->224"
            ]
        }
    },
    {
        "id": "140719078819584->225",
        "type": "column",
        "parentNode": "140719078819584",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "140719078822080->225"
            ]
        }
    },
    {
        "id": "140719078819584->226",
        "type": "column",
        "parentNode": "140719078819584",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "140719078822080->226"
            ]
        }
    },
    {
        "id": "140719078822080->222",
        "type": "column",
        "parentNode": "140719078822080",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": [
                "140719078520864->222"
            ]
        }
    },
    {
        "id": "140719078822080->223",
        "type": "column",
        "parentNode": "140719078822080",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": [
                "140719078520864->223"
            ]
        }
    },
    {
        "id": "140719078822080->224",
        "type": "column",
        "parentNode": "140719078822080",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": [
                "140719078520864->224"
            ]
        }
    },
    {
        "id": "140719078822080->225",
        "type": "column",
        "parentNode": "140719078822080",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": [
                "140719078520864->225"
            ]
        }
    },
    {
        "id": "140719078822080->226",
        "type": "column",
        "parentNode": "140719078822080",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": [
                "140719078520864->226"
            ]
        }
    },
    {
        "id": "140719078520864->222",
        "type": "column",
        "parentNode": "140719078520864",
        "expandParent": true,
        "data": {
            "id": 236,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#236: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078520864->223",
        "type": "column",
        "parentNode": "140719078520864",
        "expandParent": true,
        "data": {
            "id": 237,
            "name": "name",
            "type": "string",
            "tree_string": "name#237: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078520864->224",
        "type": "column",
        "parentNode": "140719078520864",
        "expandParent": true,
        "data": {
            "id": 238,
            "name": "age",
            "type": "int",
            "tree_string": "age#238: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078520864->225",
        "type": "column",
        "parentNode": "140719078520864",
        "expandParent": true,
        "data": {
            "id": 239,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#239: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078520864->226",
        "type": "column",
        "parentNode": "140719078520864",
        "expandParent": true,
        "data": {
            "id": 240,
            "name": "city",
            "type": "string",
            "tree_string": "city#240: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078831872->217",
        "type": "column",
        "parentNode": "140719078831872",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": [
                "140719078507808->217"
            ]
        }
    },
    {
        "id": "140719078831872->218",
        "type": "column",
        "parentNode": "140719078831872",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": [
                "140719078507808->218"
            ]
        }
    },
    {
        "id": "140719078831872->219",
        "type": "column",
        "parentNode": "140719078831872",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": [
                "140719078507808->219"
            ]
        }
    },
    {
        "id": "140719078831872->220",
        "type": "column",
        "parentNode": "140719078831872",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": [
                "140719078507808->220"
            ]
        }
    },
    {
        "id": "140719078831872->221",
        "type": "column",
        "parentNode": "140719078831872",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": [
                "140719078507808->221"
            ]
        }
    },
    {
        "id": "140719078507808->217",
        "type": "column",
        "parentNode": "140719078507808",
        "expandParent": true,
        "data": {
            "id": 231,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#231: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078507808->218",
        "type": "column",
        "parentNode": "140719078507808",
        "expandParent": true,
        "data": {
            "id": 232,
            "name": "name",
            "type": "string",
            "tree_string": "name#232: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078507808->219",
        "type": "column",
        "parentNode": "140719078507808",
        "expandParent": true,
        "data": {
            "id": 233,
            "name": "age",
            "type": "int",
            "tree_string": "age#233: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078507808->220",
        "type": "column",
        "parentNode": "140719078507808",
        "expandParent": true,
        "data": {
            "id": 234,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#234: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078507808->221",
        "type": "column",
        "parentNode": "140719078507808",
        "expandParent": true,
        "data": {
            "id": 235,
            "name": "city",
            "type": "string",
            "tree_string": "city#235: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078823088->213",
        "type": "column",
        "parentNode": "140719078823088",
        "expandParent": true,
        "data": {
            "id": 227,
            "name": "city",
            "type": "string",
            "tree_string": "city#227: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078823088->214",
        "type": "column",
        "parentNode": "140719078823088",
        "expandParent": true,
        "data": {
            "id": 228,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#228: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078823088->215",
        "type": "column",
        "parentNode": "140719078823088",
        "expandParent": true,
        "data": {
            "id": 229,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#229: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078823088->216",
        "type": "column",
        "parentNode": "140719078823088",
        "expandParent": true,
        "data": {
            "id": 230,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#230: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719079548640->210",
        "type": "column",
        "parentNode": "140719079548640",
        "expandParent": true,
        "data": {
            "id": 210,
            "name": "country",
            "type": "string",
            "tree_string": "country#210: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719079548640->211",
        "type": "column",
        "parentNode": "140719079548640",
        "expandParent": true,
        "data": {
            "id": 211,
            "name": "city",
            "type": "string",
            "tree_string": "city#211: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719079548640->212",
        "type": "column",
        "parentNode": "140719079548640",
        "expandParent": true,
        "data": {
            "id": 212,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#212: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719079550032->113",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "(country#113 = country#196)\n:- country#113: string\n+- country#196: string\n",
            "linked_columns": [
                "140719078512560->113",
                "140719078060096->196"
            ]
        }
    },
    {
        "id": "140719079550032->19",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#196: string\n",
            "linked_columns": [
                "140719078512560->19"
            ]
        }
    },
    {
        "id": "140719079550032->16",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078512560->16"
            ]
        }
    },
    {
        "id": "140719079550032->17",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078512560->17"
            ]
        }
    },
    {
        "id": "140719079550032->122",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078512560->122"
            ]
        }
    },
    {
        "id": "140719079550032->35",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078512560->35"
            ]
        }
    },
    {
        "id": "140719079550032->61",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078512560->61"
            ]
        }
    },
    {
        "id": "140719079550032->198",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140719078060096->198"
            ]
        }
    },
    {
        "id": "140719079550032->84",
        "type": "column",
        "parentNode": "140719079550032",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078060096->84"
            ]
        }
    },
    {
        "id": "140719078060096->198",
        "type": "column",
        "parentNode": "140719078060096",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140719078232160->198"
            ]
        }
    },
    {
        "id": "140719078060096->196",
        "type": "column",
        "parentNode": "140719078060096",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140719078232160->196"
            ]
        }
    },
    {
        "id": "140719078060096->84",
        "type": "column",
        "parentNode": "140719078060096",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078232160->84"
            ]
        }
    },
    {
        "id": "140719078232160->198",
        "type": "column",
        "parentNode": "140719078232160",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140719078242768->198"
            ]
        }
    },
    {
        "id": "140719078232160->196",
        "type": "column",
        "parentNode": "140719078232160",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140719078242768->196"
            ]
        }
    },
    {
        "id": "140719078232160->84",
        "type": "column",
        "parentNode": "140719078232160",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078242768->84"
            ]
        }
    },
    {
        "id": "140719078242768->198",
        "type": "column",
        "parentNode": "140719078242768",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140719078058704->198"
            ]
        }
    },
    {
        "id": "140719078242768->196",
        "type": "column",
        "parentNode": "140719078242768",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140719078058704->196"
            ]
        }
    },
    {
        "id": "140719078242768->84",
        "type": "column",
        "parentNode": "140719078242768",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078058704->84"
            ]
        }
    },
    {
        "id": "140719078058704->198",
        "type": "column",
        "parentNode": "140719078058704",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140719078507952->198"
            ]
        }
    },
    {
        "id": "140719078058704->196",
        "type": "column",
        "parentNode": "140719078058704",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140719078507952->196"
            ]
        }
    },
    {
        "id": "140719078058704->84",
        "type": "column",
        "parentNode": "140719078058704",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140719078507952->61"
            ]
        }
    },
    {
        "id": "140719078507952->182",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "(city#182 = city#197)\n:- city#182: string\n+- city#197: string\n",
            "linked_columns": [
                "140719078514768->182",
                "140719078236912->197"
            ]
        }
    },
    {
        "id": "140719078507952->183",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": [
                "140719078514768->183"
            ]
        }
    },
    {
        "id": "140719078507952->184",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#184: float\n",
            "linked_columns": [
                "140719078514768->184"
            ]
        }
    },
    {
        "id": "140719078507952->185",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#185: float\n",
            "linked_columns": [
                "140719078514768->185"
            ]
        }
    },
    {
        "id": "140719078507952->61",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078514768->61"
            ]
        }
    },
    {
        "id": "140719078507952->196",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "country",
            "type": "string",
            "tree_string": "country#196: string\n",
            "linked_columns": [
                "140719078236912->196"
            ]
        }
    },
    {
        "id": "140719078507952->198",
        "type": "column",
        "parentNode": "140719078507952",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": [
                "140719078236912->198"
            ]
        }
    },
    {
        "id": "140719078236912->196",
        "type": "column",
        "parentNode": "140719078236912",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "city#196: string\n",
            "linked_columns": [
                "139994974725184->196"
            ]
        }
    },
    {
        "id": "140719078236912->197",
        "type": "column",
        "parentNode": "140719078236912",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": [
                "139994974725184->197"
            ]
        }
    },
    {
        "id": "140719078236912->198",
        "type": "column",
        "parentNode": "140719078236912",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#198: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078514768->182",
        "type": "column",
        "parentNode": "140719078514768",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "city",
            "type": "string",
            "tree_string": "(city#182 = city#190)\n:- city#182: string\n+- city#190: string\n",
            "linked_columns": [
                "140719078060528->182",
                "140719078400656->190"
            ]
        }
    },
    {
        "id": "140719078514768->183",
        "type": "column",
        "parentNode": "140719078514768",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#183: string\n",
            "linked_columns": [
                "140719078060528->183"
            ]
        }
    },
    {
        "id": "140719078514768->184",
        "type": "column",
        "parentNode": "140719078514768",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": [
                "140719078060528->184"
            ]
        }
    },
    {
        "id": "140719078514768->185",
        "type": "column",
        "parentNode": "140719078514768",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": [
                "140719078060528->185"
            ]
        }
    },
    {
        "id": "140719078514768->61",
        "type": "column",
        "parentNode": "140719078514768",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078400656->61"
            ]
        }
    },
    {
        "id": "140719078400656->190",
        "type": "column",
        "parentNode": "140719078400656",
        "expandParent": true,
        "data": {
            "id": 190,
            "name": "city",
            "type": "string",
            "tree_string": "city#190: string\n",
            "linked_columns": [
                "140719078402720->190"
            ]
        }
    },
    {
        "id": "140719078400656->61",
        "type": "column",
        "parentNode": "140719078400656",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078402720->186",
        "type": "column",
        "parentNode": "140719078402720",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "140719078232640->186"
            ]
        }
    },
    {
        "id": "140719078402720->187",
        "type": "column",
        "parentNode": "140719078402720",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "140719078232640->187"
            ]
        }
    },
    {
        "id": "140719078402720->188",
        "type": "column",
        "parentNode": "140719078402720",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "140719078232640->188"
            ]
        }
    },
    {
        "id": "140719078402720->189",
        "type": "column",
        "parentNode": "140719078402720",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "140719078232640->189"
            ]
        }
    },
    {
        "id": "140719078402720->190",
        "type": "column",
        "parentNode": "140719078402720",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140719078232640->190"
            ]
        }
    },
    {
        "id": "140719078404880->191",
        "type": "column",
        "parentNode": "140719078404880",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "140719078406896->191"
            ]
        }
    },
    {
        "id": "140719078404880->192",
        "type": "column",
        "parentNode": "140719078404880",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "140719078406896->192"
            ]
        }
    },
    {
        "id": "140719078404880->193",
        "type": "column",
        "parentNode": "140719078404880",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "140719078406896->193"
            ]
        }
    },
    {
        "id": "140719078404880->194",
        "type": "column",
        "parentNode": "140719078404880",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "140719078406896->194"
            ]
        }
    },
    {
        "id": "140719078404880->195",
        "type": "column",
        "parentNode": "140719078404880",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "140719078406896->195"
            ]
        }
    },
    {
        "id": "140719078406896->191",
        "type": "column",
        "parentNode": "140719078406896",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": [
                "140719078510352->191"
            ]
        }
    },
    {
        "id": "140719078406896->192",
        "type": "column",
        "parentNode": "140719078406896",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": [
                "140719078510352->192"
            ]
        }
    },
    {
        "id": "140719078406896->193",
        "type": "column",
        "parentNode": "140719078406896",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": [
                "140719078510352->193"
            ]
        }
    },
    {
        "id": "140719078406896->194",
        "type": "column",
        "parentNode": "140719078406896",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": [
                "140719078510352->194"
            ]
        }
    },
    {
        "id": "140719078406896->195",
        "type": "column",
        "parentNode": "140719078406896",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": [
                "140719078510352->195"
            ]
        }
    },
    {
        "id": "140719078510352->191",
        "type": "column",
        "parentNode": "140719078510352",
        "expandParent": true,
        "data": {
            "id": 205,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#205: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510352->192",
        "type": "column",
        "parentNode": "140719078510352",
        "expandParent": true,
        "data": {
            "id": 206,
            "name": "name",
            "type": "string",
            "tree_string": "name#206: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510352->193",
        "type": "column",
        "parentNode": "140719078510352",
        "expandParent": true,
        "data": {
            "id": 207,
            "name": "age",
            "type": "int",
            "tree_string": "age#207: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510352->194",
        "type": "column",
        "parentNode": "140719078510352",
        "expandParent": true,
        "data": {
            "id": 208,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#208: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510352->195",
        "type": "column",
        "parentNode": "140719078510352",
        "expandParent": true,
        "data": {
            "id": 209,
            "name": "city",
            "type": "string",
            "tree_string": "city#209: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078232640->186",
        "type": "column",
        "parentNode": "140719078232640",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": [
                "140719078506848->186"
            ]
        }
    },
    {
        "id": "140719078232640->187",
        "type": "column",
        "parentNode": "140719078232640",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": [
                "140719078506848->187"
            ]
        }
    },
    {
        "id": "140719078232640->188",
        "type": "column",
        "parentNode": "140719078232640",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": [
                "140719078506848->188"
            ]
        }
    },
    {
        "id": "140719078232640->189",
        "type": "column",
        "parentNode": "140719078232640",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": [
                "140719078506848->189"
            ]
        }
    },
    {
        "id": "140719078232640->190",
        "type": "column",
        "parentNode": "140719078232640",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": [
                "140719078506848->190"
            ]
        }
    },
    {
        "id": "140719078506848->186",
        "type": "column",
        "parentNode": "140719078506848",
        "expandParent": true,
        "data": {
            "id": 200,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#200: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078506848->187",
        "type": "column",
        "parentNode": "140719078506848",
        "expandParent": true,
        "data": {
            "id": 201,
            "name": "name",
            "type": "string",
            "tree_string": "name#201: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078506848->188",
        "type": "column",
        "parentNode": "140719078506848",
        "expandParent": true,
        "data": {
            "id": 202,
            "name": "age",
            "type": "int",
            "tree_string": "age#202: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078506848->189",
        "type": "column",
        "parentNode": "140719078506848",
        "expandParent": true,
        "data": {
            "id": 203,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#203: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078506848->190",
        "type": "column",
        "parentNode": "140719078506848",
        "expandParent": true,
        "data": {
            "id": 204,
            "name": "city",
            "type": "string",
            "tree_string": "city#204: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078060528->182",
        "type": "column",
        "parentNode": "140719078060528",
        "expandParent": true,
        "data": {
            "id": 196,
            "name": "city",
            "type": "string",
            "tree_string": "city#196: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078060528->183",
        "type": "column",
        "parentNode": "140719078060528",
        "expandParent": true,
        "data": {
            "id": 197,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#197: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078060528->184",
        "type": "column",
        "parentNode": "140719078060528",
        "expandParent": true,
        "data": {
            "id": 198,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#198: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078060528->185",
        "type": "column",
        "parentNode": "140719078060528",
        "expandParent": true,
        "data": {
            "id": 199,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#199: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078512560->19",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#167)\n:- city#19: string\n+- city#167: string\n",
            "linked_columns": [
                "140719078242912->19",
                "140719273377024->167"
            ]
        }
    },
    {
        "id": "140719078512560->16",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078242912->16"
            ]
        }
    },
    {
        "id": "140719078512560->17",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078242912->17"
            ]
        }
    },
    {
        "id": "140719078512560->122",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078242912->122"
            ]
        }
    },
    {
        "id": "140719078512560->113",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078242912->113"
            ]
        }
    },
    {
        "id": "140719078512560->35",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078242912->35"
            ]
        }
    },
    {
        "id": "140719078512560->61",
        "type": "column",
        "parentNode": "140719078512560",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719273377024->61"
            ]
        }
    },
    {
        "id": "140719273377024->167",
        "type": "column",
        "parentNode": "140719273377024",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140719078235376->167"
            ]
        }
    },
    {
        "id": "140719273377024->61",
        "type": "column",
        "parentNode": "140719273377024",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078235376->61"
            ]
        }
    },
    {
        "id": "140719078235376->167",
        "type": "column",
        "parentNode": "140719078235376",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140719078522112->167"
            ]
        }
    },
    {
        "id": "140719078235376->61",
        "type": "column",
        "parentNode": "140719078235376",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078522112->61"
            ]
        }
    },
    {
        "id": "140719078522112->167",
        "type": "column",
        "parentNode": "140719078522112",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140719078508192->167"
            ]
        }
    },
    {
        "id": "140719078522112->61",
        "type": "column",
        "parentNode": "140719078522112",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078508192->61"
            ]
        }
    },
    {
        "id": "140719078508192->167",
        "type": "column",
        "parentNode": "140719078508192",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140719078512848->167"
            ]
        }
    },
    {
        "id": "140719078508192->61",
        "type": "column",
        "parentNode": "140719078508192",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078512848->163",
        "type": "column",
        "parentNode": "140719078512848",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "140719078236048->163"
            ]
        }
    },
    {
        "id": "140719078512848->164",
        "type": "column",
        "parentNode": "140719078512848",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "140719078236048->164"
            ]
        }
    },
    {
        "id": "140719078512848->165",
        "type": "column",
        "parentNode": "140719078512848",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "140719078236048->165"
            ]
        }
    },
    {
        "id": "140719078512848->166",
        "type": "column",
        "parentNode": "140719078512848",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "140719078236048->166"
            ]
        }
    },
    {
        "id": "140719078512848->167",
        "type": "column",
        "parentNode": "140719078512848",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140719078236048->167"
            ]
        }
    },
    {
        "id": "140719078821408->168",
        "type": "column",
        "parentNode": "140719078821408",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "140719078062544->168"
            ]
        }
    },
    {
        "id": "140719078821408->169",
        "type": "column",
        "parentNode": "140719078821408",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "140719078062544->169"
            ]
        }
    },
    {
        "id": "140719078821408->170",
        "type": "column",
        "parentNode": "140719078821408",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "140719078062544->170"
            ]
        }
    },
    {
        "id": "140719078821408->171",
        "type": "column",
        "parentNode": "140719078821408",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "140719078062544->171"
            ]
        }
    },
    {
        "id": "140719078821408->172",
        "type": "column",
        "parentNode": "140719078821408",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "140719078062544->172"
            ]
        }
    },
    {
        "id": "140719078062544->168",
        "type": "column",
        "parentNode": "140719078062544",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": [
                "140719078517552->168"
            ]
        }
    },
    {
        "id": "140719078062544->169",
        "type": "column",
        "parentNode": "140719078062544",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": [
                "140719078517552->169"
            ]
        }
    },
    {
        "id": "140719078062544->170",
        "type": "column",
        "parentNode": "140719078062544",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": [
                "140719078517552->170"
            ]
        }
    },
    {
        "id": "140719078062544->171",
        "type": "column",
        "parentNode": "140719078062544",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": [
                "140719078517552->171"
            ]
        }
    },
    {
        "id": "140719078062544->172",
        "type": "column",
        "parentNode": "140719078062544",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": [
                "140719078517552->172"
            ]
        }
    },
    {
        "id": "140719078517552->168",
        "type": "column",
        "parentNode": "140719078517552",
        "expandParent": true,
        "data": {
            "id": 182,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#182: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078517552->169",
        "type": "column",
        "parentNode": "140719078517552",
        "expandParent": true,
        "data": {
            "id": 183,
            "name": "name",
            "type": "string",
            "tree_string": "name#183: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078517552->170",
        "type": "column",
        "parentNode": "140719078517552",
        "expandParent": true,
        "data": {
            "id": 184,
            "name": "age",
            "type": "int",
            "tree_string": "age#184: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078517552->171",
        "type": "column",
        "parentNode": "140719078517552",
        "expandParent": true,
        "data": {
            "id": 185,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#185: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078517552->172",
        "type": "column",
        "parentNode": "140719078517552",
        "expandParent": true,
        "data": {
            "id": 186,
            "name": "city",
            "type": "string",
            "tree_string": "city#186: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078236048->163",
        "type": "column",
        "parentNode": "140719078236048",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": [
                "140719078403728->163"
            ]
        }
    },
    {
        "id": "140719078236048->164",
        "type": "column",
        "parentNode": "140719078236048",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": [
                "140719078403728->164"
            ]
        }
    },
    {
        "id": "140719078236048->165",
        "type": "column",
        "parentNode": "140719078236048",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": [
                "140719078403728->165"
            ]
        }
    },
    {
        "id": "140719078236048->166",
        "type": "column",
        "parentNode": "140719078236048",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": [
                "140719078403728->166"
            ]
        }
    },
    {
        "id": "140719078236048->167",
        "type": "column",
        "parentNode": "140719078236048",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": [
                "140719078403728->167"
            ]
        }
    },
    {
        "id": "140719078403728->163",
        "type": "column",
        "parentNode": "140719078403728",
        "expandParent": true,
        "data": {
            "id": 177,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#177: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078403728->164",
        "type": "column",
        "parentNode": "140719078403728",
        "expandParent": true,
        "data": {
            "id": 178,
            "name": "name",
            "type": "string",
            "tree_string": "name#178: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078403728->165",
        "type": "column",
        "parentNode": "140719078403728",
        "expandParent": true,
        "data": {
            "id": 179,
            "name": "age",
            "type": "int",
            "tree_string": "age#179: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078403728->166",
        "type": "column",
        "parentNode": "140719078403728",
        "expandParent": true,
        "data": {
            "id": 180,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#180: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078403728->167",
        "type": "column",
        "parentNode": "140719078403728",
        "expandParent": true,
        "data": {
            "id": 181,
            "name": "city",
            "type": "string",
            "tree_string": "city#181: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078242912->16",
        "type": "column",
        "parentNode": "140719078242912",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078509056->16"
            ]
        }
    },
    {
        "id": "140719078242912->17",
        "type": "column",
        "parentNode": "140719078242912",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078509056->17"
            ]
        }
    },
    {
        "id": "140719078242912->19",
        "type": "column",
        "parentNode": "140719078242912",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719078509056->19"
            ]
        }
    },
    {
        "id": "140719078242912->122",
        "type": "column",
        "parentNode": "140719078242912",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078509056->122"
            ]
        }
    },
    {
        "id": "140719078242912->113",
        "type": "column",
        "parentNode": "140719078242912",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078509056->113"
            ]
        }
    },
    {
        "id": "140719078242912->35",
        "type": "column",
        "parentNode": "140719078242912",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078509056->35"
            ]
        }
    },
    {
        "id": "140719078509056->19",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "(city#19 = city#114)\n:- city#19: string\n+- city#114: string\n",
            "linked_columns": [
                "140719078233312->19",
                "140719078521152->114"
            ]
        }
    },
    {
        "id": "140719078509056->15",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140719078233312->15"
            ]
        }
    },
    {
        "id": "140719078509056->16",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078233312->16"
            ]
        }
    },
    {
        "id": "140719078509056->17",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078233312->17"
            ]
        }
    },
    {
        "id": "140719078509056->18",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140719078233312->18"
            ]
        }
    },
    {
        "id": "140719078509056->35",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078521152->35"
            ]
        }
    },
    {
        "id": "140719078509056->40",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140719078521152->40"
            ]
        }
    },
    {
        "id": "140719078509056->109",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078521152->109"
            ]
        }
    },
    {
        "id": "140719078509056->113",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078521152->113"
            ]
        }
    },
    {
        "id": "140719078509056->122",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078521152->122"
            ]
        }
    },
    {
        "id": "140719078509056->123",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140719078521152->123"
            ]
        }
    },
    {
        "id": "140719078509056->124",
        "type": "column",
        "parentNode": "140719078509056",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140719078521152->124"
            ]
        }
    },
    {
        "id": "140719078521152->114",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "(city#114 = city#121)\n:- city#114: string\n+- city#121: string\n",
            "linked_columns": [
                "140719078506752->114",
                "140719078230096->121"
            ]
        }
    },
    {
        "id": "140719078521152->35",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078506752->35"
            ]
        }
    },
    {
        "id": "140719078521152->40",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140719078506752->40"
            ]
        }
    },
    {
        "id": "140719078521152->109",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078506752->109"
            ]
        }
    },
    {
        "id": "140719078521152->113",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078506752->113"
            ]
        }
    },
    {
        "id": "140719078521152->122",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": [
                "140719078230096->122"
            ]
        }
    },
    {
        "id": "140719078521152->123",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": [
                "140719078230096->123"
            ]
        }
    },
    {
        "id": "140719078521152->124",
        "type": "column",
        "parentNode": "140719078521152",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": [
                "140719078230096->124"
            ]
        }
    },
    {
        "id": "140719078230096->121",
        "type": "column",
        "parentNode": "140719078230096",
        "expandParent": true,
        "data": {
            "id": 121,
            "name": "city",
            "type": "string",
            "tree_string": "city#121: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078230096->122",
        "type": "column",
        "parentNode": "140719078230096",
        "expandParent": true,
        "data": {
            "id": 122,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#122: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078230096->123",
        "type": "column",
        "parentNode": "140719078230096",
        "expandParent": true,
        "data": {
            "id": 123,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#123: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078230096->124",
        "type": "column",
        "parentNode": "140719078230096",
        "expandParent": true,
        "data": {
            "id": 124,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#124: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078506752->35",
        "type": "column",
        "parentNode": "140719078506752",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#115)\n:- continent#35: string\n+- continent#115: string\n",
            "linked_columns": [
                "140719078519904->35",
                "140719078395808->115"
            ]
        }
    },
    {
        "id": "140719078506752->40",
        "type": "column",
        "parentNode": "140719078506752",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140719078519904->40"
            ]
        }
    },
    {
        "id": "140719078506752->109",
        "type": "column",
        "parentNode": "140719078506752",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078519904->109"
            ]
        }
    },
    {
        "id": "140719078506752->113",
        "type": "column",
        "parentNode": "140719078506752",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": [
                "140719078395808->113"
            ]
        }
    },
    {
        "id": "140719078506752->114",
        "type": "column",
        "parentNode": "140719078506752",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": [
                "140719078395808->114"
            ]
        }
    },
    {
        "id": "140719078395808->113",
        "type": "column",
        "parentNode": "140719078395808",
        "expandParent": true,
        "data": {
            "id": 113,
            "name": "country",
            "type": "string",
            "tree_string": "country#113: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078395808->114",
        "type": "column",
        "parentNode": "140719078395808",
        "expandParent": true,
        "data": {
            "id": 114,
            "name": "city",
            "type": "string",
            "tree_string": "city#114: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078395808->115",
        "type": "column",
        "parentNode": "140719078395808",
        "expandParent": true,
        "data": {
            "id": 115,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#115: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078519904->40",
        "type": "column",
        "parentNode": "140719078519904",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140719078405168->40"
            ]
        }
    },
    {
        "id": "140719078519904->35",
        "type": "column",
        "parentNode": "140719078519904",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078405168->35"
            ]
        }
    },
    {
        "id": "140719078519904->109",
        "type": "column",
        "parentNode": "140719078519904",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "continent_population#109: bigint\n",
            "linked_columns": [
                "140719078405168->109"
            ]
        }
    },
    {
        "id": "140719078405168->40",
        "type": "column",
        "parentNode": "140719078405168",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140719078513520->40"
            ]
        }
    },
    {
        "id": "140719078405168->35",
        "type": "column",
        "parentNode": "140719078405168",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": [
                "140719078513520->35"
            ]
        }
    },
    {
        "id": "140719078405168->109",
        "type": "column",
        "parentNode": "140719078405168",
        "expandParent": true,
        "data": {
            "id": 109,
            "name": "continent_population",
            "type": "bigint",
            "tree_string": "sum(country_population#84L) AS continent_population#109L\n+- sum(country_population#84L)\n   +- sum(country_population#84L)\n      +- country_population#84: bigint\n",
            "linked_columns": [
                "140719078513520->84"
            ]
        }
    },
    {
        "id": "140719078513520->35",
        "type": "column",
        "parentNode": "140719078513520",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#39)\n:- continent#35: string\n+- continent#39: string\n",
            "linked_columns": [
                "140719078512128->35",
                "140719078392544->39"
            ]
        }
    },
    {
        "id": "140719078513520->33",
        "type": "column",
        "parentNode": "140719078513520",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140719078512128->33"
            ]
        }
    },
    {
        "id": "140719078513520->34",
        "type": "column",
        "parentNode": "140719078513520",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140719078512128->34"
            ]
        }
    },
    {
        "id": "140719078513520->88",
        "type": "column",
        "parentNode": "140719078513520",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140719078512128->88"
            ]
        }
    },
    {
        "id": "140719078513520->84",
        "type": "column",
        "parentNode": "140719078513520",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078512128->84"
            ]
        }
    },
    {
        "id": "140719078513520->40",
        "type": "column",
        "parentNode": "140719078513520",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": [
                "140719078392544->40"
            ]
        }
    },
    {
        "id": "140719078392544->39",
        "type": "column",
        "parentNode": "140719078392544",
        "expandParent": true,
        "data": {
            "id": 39,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#39: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078392544->40",
        "type": "column",
        "parentNode": "140719078392544",
        "expandParent": true,
        "data": {
            "id": 40,
            "name": "continent_code",
            "type": "int",
            "tree_string": "continent_code#40: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078512128->35",
        "type": "column",
        "parentNode": "140719078512128",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "(continent#35 = continent#90)\n:- continent#35: string\n+- continent#90: string\n",
            "linked_columns": [
                "140719078407232->35",
                "140719078508384->90"
            ]
        }
    },
    {
        "id": "140719078512128->33",
        "type": "column",
        "parentNode": "140719078512128",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": [
                "140719078407232->33"
            ]
        }
    },
    {
        "id": "140719078512128->34",
        "type": "column",
        "parentNode": "140719078512128",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": [
                "140719078407232->34"
            ]
        }
    },
    {
        "id": "140719078512128->88",
        "type": "column",
        "parentNode": "140719078512128",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140719078508384->88"
            ]
        }
    },
    {
        "id": "140719078512128->84",
        "type": "column",
        "parentNode": "140719078512128",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "country_population#84: bigint\n",
            "linked_columns": [
                "140719078508384->84"
            ]
        }
    },
    {
        "id": "140719078508384->90",
        "type": "column",
        "parentNode": "140719078508384",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140719078511216->90"
            ]
        }
    },
    {
        "id": "140719078508384->88",
        "type": "column",
        "parentNode": "140719078508384",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140719078511216->88"
            ]
        }
    },
    {
        "id": "140719078508384->84",
        "type": "column",
        "parentNode": "140719078508384",
        "expandParent": true,
        "data": {
            "id": 84,
            "name": "country_population",
            "type": "bigint",
            "tree_string": "sum(city_population#61L) AS country_population#84L\n+- sum(city_population#61L)\n   +- sum(city_population#61L)\n      +- city_population#61: bigint\n",
            "linked_columns": [
                "140719078511216->61"
            ]
        }
    },
    {
        "id": "140719078511216->25",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#89)\n:- city#25: string\n+- city#89: string\n",
            "linked_columns": [
                "140719078511024->25",
                "140719078521344->89"
            ]
        }
    },
    {
        "id": "140719078511216->26",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140719078511024->26"
            ]
        }
    },
    {
        "id": "140719078511216->27",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140719078511024->27"
            ]
        }
    },
    {
        "id": "140719078511216->28",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140719078511024->28"
            ]
        }
    },
    {
        "id": "140719078511216->61",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078511024->61"
            ]
        }
    },
    {
        "id": "140719078511216->88",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": [
                "140719078521344->88"
            ]
        }
    },
    {
        "id": "140719078511216->90",
        "type": "column",
        "parentNode": "140719078511216",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": [
                "140719078521344->90"
            ]
        }
    },
    {
        "id": "140719078521344->88",
        "type": "column",
        "parentNode": "140719078521344",
        "expandParent": true,
        "data": {
            "id": 88,
            "name": "country",
            "type": "string",
            "tree_string": "country#88: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078521344->89",
        "type": "column",
        "parentNode": "140719078521344",
        "expandParent": true,
        "data": {
            "id": 89,
            "name": "city",
            "type": "string",
            "tree_string": "city#89: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078521344->90",
        "type": "column",
        "parentNode": "140719078521344",
        "expandParent": true,
        "data": {
            "id": 90,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#90: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078511024->25",
        "type": "column",
        "parentNode": "140719078511024",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "(city#25 = city#137)\n:- city#25: string\n+- city#137: string\n",
            "linked_columns": [
                "140719078510784->25",
                "140719078236288->137"
            ]
        }
    },
    {
        "id": "140719078511024->26",
        "type": "column",
        "parentNode": "140719078511024",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": [
                "140719078510784->26"
            ]
        }
    },
    {
        "id": "140719078511024->27",
        "type": "column",
        "parentNode": "140719078511024",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": [
                "140719078510784->27"
            ]
        }
    },
    {
        "id": "140719078511024->28",
        "type": "column",
        "parentNode": "140719078511024",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": [
                "140719078510784->28"
            ]
        }
    },
    {
        "id": "140719078511024->61",
        "type": "column",
        "parentNode": "140719078511024",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "city_population#61: bigint\n",
            "linked_columns": [
                "140719078236288->61"
            ]
        }
    },
    {
        "id": "140719078236288->137",
        "type": "column",
        "parentNode": "140719078236288",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140719078519280->137"
            ]
        }
    },
    {
        "id": "140719078236288->61",
        "type": "column",
        "parentNode": "140719078236288",
        "expandParent": true,
        "data": {
            "id": 61,
            "name": "city_population",
            "type": "bigint",
            "tree_string": "count(1) AS city_population#61L\n+- count(1)\n   +- count(1)\n      +- 1\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078519280->133",
        "type": "column",
        "parentNode": "140719078519280",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140719078405264->133"
            ]
        }
    },
    {
        "id": "140719078519280->134",
        "type": "column",
        "parentNode": "140719078519280",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140719078405264->134"
            ]
        }
    },
    {
        "id": "140719078519280->135",
        "type": "column",
        "parentNode": "140719078519280",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140719078405264->135"
            ]
        }
    },
    {
        "id": "140719078519280->136",
        "type": "column",
        "parentNode": "140719078519280",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140719078405264->136"
            ]
        }
    },
    {
        "id": "140719078519280->137",
        "type": "column",
        "parentNode": "140719078519280",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140719078405264->137"
            ]
        }
    },
    {
        "id": "140719078230336->138",
        "type": "column",
        "parentNode": "140719078230336",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140719078509872->138"
            ]
        }
    },
    {
        "id": "140719078230336->139",
        "type": "column",
        "parentNode": "140719078230336",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140719078509872->139"
            ]
        }
    },
    {
        "id": "140719078230336->140",
        "type": "column",
        "parentNode": "140719078230336",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140719078509872->140"
            ]
        }
    },
    {
        "id": "140719078230336->141",
        "type": "column",
        "parentNode": "140719078230336",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140719078509872->141"
            ]
        }
    },
    {
        "id": "140719078230336->142",
        "type": "column",
        "parentNode": "140719078230336",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140719078509872->142"
            ]
        }
    },
    {
        "id": "140719078509872->138",
        "type": "column",
        "parentNode": "140719078509872",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": [
                "140719078397824->138"
            ]
        }
    },
    {
        "id": "140719078509872->139",
        "type": "column",
        "parentNode": "140719078509872",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": [
                "140719078397824->139"
            ]
        }
    },
    {
        "id": "140719078509872->140",
        "type": "column",
        "parentNode": "140719078509872",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": [
                "140719078397824->140"
            ]
        }
    },
    {
        "id": "140719078509872->141",
        "type": "column",
        "parentNode": "140719078509872",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": [
                "140719078397824->141"
            ]
        }
    },
    {
        "id": "140719078509872->142",
        "type": "column",
        "parentNode": "140719078509872",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": [
                "140719078397824->142"
            ]
        }
    },
    {
        "id": "140719078397824->138",
        "type": "column",
        "parentNode": "140719078397824",
        "expandParent": true,
        "data": {
            "id": 138,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#138: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078397824->139",
        "type": "column",
        "parentNode": "140719078397824",
        "expandParent": true,
        "data": {
            "id": 139,
            "name": "name",
            "type": "string",
            "tree_string": "name#139: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078397824->140",
        "type": "column",
        "parentNode": "140719078397824",
        "expandParent": true,
        "data": {
            "id": 140,
            "name": "age",
            "type": "int",
            "tree_string": "age#140: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078397824->141",
        "type": "column",
        "parentNode": "140719078397824",
        "expandParent": true,
        "data": {
            "id": 141,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#141: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078397824->142",
        "type": "column",
        "parentNode": "140719078397824",
        "expandParent": true,
        "data": {
            "id": 142,
            "name": "city",
            "type": "string",
            "tree_string": "city#142: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078405264->133",
        "type": "column",
        "parentNode": "140719078405264",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": [
                "140719078401328->133"
            ]
        }
    },
    {
        "id": "140719078405264->134",
        "type": "column",
        "parentNode": "140719078405264",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": [
                "140719078401328->134"
            ]
        }
    },
    {
        "id": "140719078405264->135",
        "type": "column",
        "parentNode": "140719078405264",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": [
                "140719078401328->135"
            ]
        }
    },
    {
        "id": "140719078405264->136",
        "type": "column",
        "parentNode": "140719078405264",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": [
                "140719078401328->136"
            ]
        }
    },
    {
        "id": "140719078405264->137",
        "type": "column",
        "parentNode": "140719078405264",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": [
                "140719078401328->137"
            ]
        }
    },
    {
        "id": "140719078401328->133",
        "type": "column",
        "parentNode": "140719078401328",
        "expandParent": true,
        "data": {
            "id": 133,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#133: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078401328->134",
        "type": "column",
        "parentNode": "140719078401328",
        "expandParent": true,
        "data": {
            "id": 134,
            "name": "name",
            "type": "string",
            "tree_string": "name#134: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078401328->135",
        "type": "column",
        "parentNode": "140719078401328",
        "expandParent": true,
        "data": {
            "id": 135,
            "name": "age",
            "type": "int",
            "tree_string": "age#135: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078401328->136",
        "type": "column",
        "parentNode": "140719078401328",
        "expandParent": true,
        "data": {
            "id": 136,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#136: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078401328->137",
        "type": "column",
        "parentNode": "140719078401328",
        "expandParent": true,
        "data": {
            "id": 137,
            "name": "city",
            "type": "string",
            "tree_string": "city#137: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510784->25",
        "type": "column",
        "parentNode": "140719078510784",
        "expandParent": true,
        "data": {
            "id": 25,
            "name": "city",
            "type": "string",
            "tree_string": "city#25: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510784->26",
        "type": "column",
        "parentNode": "140719078510784",
        "expandParent": true,
        "data": {
            "id": 26,
            "name": "zip_code",
            "type": "string",
            "tree_string": "zip_code#26: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510784->27",
        "type": "column",
        "parentNode": "140719078510784",
        "expandParent": true,
        "data": {
            "id": 27,
            "name": "lat",
            "type": "float",
            "tree_string": "lat#27: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078510784->28",
        "type": "column",
        "parentNode": "140719078510784",
        "expandParent": true,
        "data": {
            "id": 28,
            "name": "lon",
            "type": "float",
            "tree_string": "lon#28: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078407232->33",
        "type": "column",
        "parentNode": "140719078407232",
        "expandParent": true,
        "data": {
            "id": 33,
            "name": "country",
            "type": "string",
            "tree_string": "country#33: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078407232->34",
        "type": "column",
        "parentNode": "140719078407232",
        "expandParent": true,
        "data": {
            "id": 34,
            "name": "city",
            "type": "string",
            "tree_string": "city#34: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078407232->35",
        "type": "column",
        "parentNode": "140719078407232",
        "expandParent": true,
        "data": {
            "id": 35,
            "name": "continent",
            "type": "string",
            "tree_string": "continent#35: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078233312->15",
        "type": "column",
        "parentNode": "140719078233312",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140719078230192->15"
            ]
        }
    },
    {
        "id": "140719078233312->16",
        "type": "column",
        "parentNode": "140719078233312",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078230192->16"
            ]
        }
    },
    {
        "id": "140719078233312->17",
        "type": "column",
        "parentNode": "140719078233312",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078230192->17"
            ]
        }
    },
    {
        "id": "140719078233312->18",
        "type": "column",
        "parentNode": "140719078233312",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140719078230192->18"
            ]
        }
    },
    {
        "id": "140719078233312->19",
        "type": "column",
        "parentNode": "140719078233312",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719078230192->19"
            ]
        }
    },
    {
        "id": "140719078241904->44",
        "type": "column",
        "parentNode": "140719078241904",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140719078239072->44"
            ]
        }
    },
    {
        "id": "140719078241904->45",
        "type": "column",
        "parentNode": "140719078241904",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140719078239072->45"
            ]
        }
    },
    {
        "id": "140719078241904->46",
        "type": "column",
        "parentNode": "140719078241904",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140719078239072->46"
            ]
        }
    },
    {
        "id": "140719078241904->47",
        "type": "column",
        "parentNode": "140719078241904",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140719078239072->47"
            ]
        }
    },
    {
        "id": "140719078241904->48",
        "type": "column",
        "parentNode": "140719078241904",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140719078239072->48"
            ]
        }
    },
    {
        "id": "140719078239072->44",
        "type": "column",
        "parentNode": "140719078239072",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": [
                "140719078393120->44"
            ]
        }
    },
    {
        "id": "140719078239072->45",
        "type": "column",
        "parentNode": "140719078239072",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": [
                "140719078393120->45"
            ]
        }
    },
    {
        "id": "140719078239072->46",
        "type": "column",
        "parentNode": "140719078239072",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": [
                "140719078393120->46"
            ]
        }
    },
    {
        "id": "140719078239072->47",
        "type": "column",
        "parentNode": "140719078239072",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": [
                "140719078393120->47"
            ]
        }
    },
    {
        "id": "140719078239072->48",
        "type": "column",
        "parentNode": "140719078239072",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": [
                "140719078393120->48"
            ]
        }
    },
    {
        "id": "140719078393120->44",
        "type": "column",
        "parentNode": "140719078393120",
        "expandParent": true,
        "data": {
            "id": 44,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#44: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078393120->45",
        "type": "column",
        "parentNode": "140719078393120",
        "expandParent": true,
        "data": {
            "id": 45,
            "name": "name",
            "type": "string",
            "tree_string": "name#45: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078393120->46",
        "type": "column",
        "parentNode": "140719078393120",
        "expandParent": true,
        "data": {
            "id": 46,
            "name": "age",
            "type": "int",
            "tree_string": "age#46: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078393120->47",
        "type": "column",
        "parentNode": "140719078393120",
        "expandParent": true,
        "data": {
            "id": 47,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#47: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078393120->48",
        "type": "column",
        "parentNode": "140719078393120",
        "expandParent": true,
        "data": {
            "id": 48,
            "name": "city",
            "type": "string",
            "tree_string": "city#48: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078230192->15",
        "type": "column",
        "parentNode": "140719078230192",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": [
                "140719078404256->15"
            ]
        }
    },
    {
        "id": "140719078230192->16",
        "type": "column",
        "parentNode": "140719078230192",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": [
                "140719078404256->16"
            ]
        }
    },
    {
        "id": "140719078230192->17",
        "type": "column",
        "parentNode": "140719078230192",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": [
                "140719078404256->17"
            ]
        }
    },
    {
        "id": "140719078230192->18",
        "type": "column",
        "parentNode": "140719078230192",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": [
                "140719078404256->18"
            ]
        }
    },
    {
        "id": "140719078230192->19",
        "type": "column",
        "parentNode": "140719078230192",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": [
                "140719078404256->19"
            ]
        }
    },
    {
        "id": "140719078404256->15",
        "type": "column",
        "parentNode": "140719078404256",
        "expandParent": true,
        "data": {
            "id": 15,
            "name": "dni",
            "type": "int",
            "tree_string": "dni#15: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078404256->16",
        "type": "column",
        "parentNode": "140719078404256",
        "expandParent": true,
        "data": {
            "id": 16,
            "name": "name",
            "type": "string",
            "tree_string": "name#16: string\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078404256->17",
        "type": "column",
        "parentNode": "140719078404256",
        "expandParent": true,
        "data": {
            "id": 17,
            "name": "age",
            "type": "int",
            "tree_string": "age#17: int\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078404256->18",
        "type": "column",
        "parentNode": "140719078404256",
        "expandParent": true,
        "data": {
            "id": 18,
            "name": "weight",
            "type": "float",
            "tree_string": "weight#18: float\n",
            "linked_columns": []
        }
    },
    {
        "id": "140719078404256->19",
        "type": "column",
        "parentNode": "140719078404256",
        "expandParent": true,
        "data": {
            "id": 19,
            "name": "city",
            "type": "string",
            "tree_string": "city#19: string\n",
            "linked_columns": []
        }
    }
];

const model_initialEdges = [
    {
        "id": "140719078509248-140719078398064",
        "source": "140719078509248",
        "target": "140719078398064"
    },
    {
        "id": "140719078398064-140719078831632",
        "source": "140719078398064",
        "target": "140719078831632"
    },
    {
        "id": "140719078831632-140719079551088",
        "source": "140719078831632",
        "target": "140719079551088"
    },
    {
        "id": "140719079551088-140719078396336",
        "source": "140719079551088",
        "target": "140719078396336"
    },
    {
        "id": "140719078396336-140719078826400",
        "source": "140719078396336",
        "target": "140719078826400"
    },
    {
        "id": "140719078826400-140719078516832",
        "source": "140719078826400",
        "target": "140719078516832"
    },
    {
        "id": "140719078516832-140719078822368",
        "source": "140719078516832",
        "target": "140719078822368"
    },
    {
        "id": "140719078822368-140719078518128",
        "source": "140719078822368",
        "target": "140719078518128"
    },
    {
        "id": "140719078518128-140719078398352",
        "source": "140719078518128",
        "target": "140719078398352"
    },
    {
        "id": "140719078518128-140719078521248",
        "source": "140719078518128",
        "target": "140719078521248"
    },
    {
        "id": "140719078521248-140719078820448",
        "source": "140719078521248",
        "target": "140719078820448"
    },
    {
        "id": "140719078820448-140719078507856",
        "source": "140719078820448",
        "target": "140719078507856"
    },
    {
        "id": "140719078507856-140719078829280",
        "source": "140719078507856",
        "target": "140719078829280"
    },
    {
        "id": "140719078507856-140719078521824",
        "source": "140719078507856",
        "target": "140719078521824"
    },
    {
        "id": "140719078521824-140719078824528",
        "source": "140719078521824",
        "target": "140719078824528"
    },
    {
        "id": "140719078824528-140719078829184",
        "source": "140719078824528",
        "target": "140719078829184"
    },
    {
        "id": "140719078829184-140719078819584",
        "source": "140719078829184",
        "target": "140719078819584"
    },
    {
        "id": "140719078819584-140719078822080",
        "source": "140719078819584",
        "target": "140719078822080"
    },
    {
        "id": "140719078822080-140719078520864",
        "source": "140719078822080",
        "target": "140719078520864"
    },
    {
        "id": "140719078829184-140719078831872",
        "source": "140719078829184",
        "target": "140719078831872"
    },
    {
        "id": "140719078831872-140719078507808",
        "source": "140719078831872",
        "target": "140719078507808"
    },
    {
        "id": "140719078521824-140719078823088",
        "source": "140719078521824",
        "target": "140719078823088"
    },
    {
        "id": "140719078521248-140719079548640",
        "source": "140719078521248",
        "target": "140719079548640"
    },
    {
        "id": "140719079551088-140719079550032",
        "source": "140719079551088",
        "target": "140719079550032"
    },
    {
        "id": "140719079550032-140719078060096",
        "source": "140719079550032",
        "target": "140719078060096"
    },
    {
        "id": "140719078060096-140719078232160",
        "source": "140719078060096",
        "target": "140719078232160"
    },
    {
        "id": "140719078232160-140719078242768",
        "source": "140719078232160",
        "target": "140719078242768"
    },
    {
        "id": "140719078242768-140719078058704",
        "source": "140719078242768",
        "target": "140719078058704"
    },
    {
        "id": "140719078058704-140719078507952",
        "source": "140719078058704",
        "target": "140719078507952"
    },
    {
        "id": "140719078507952-140719078236912",
        "source": "140719078507952",
        "target": "140719078236912"
    },
    {
        "id": "140719078507952-140719078514768",
        "source": "140719078507952",
        "target": "140719078514768"
    },
    {
        "id": "140719078514768-140719078400656",
        "source": "140719078514768",
        "target": "140719078400656"
    },
    {
        "id": "140719078400656-140719078402720",
        "source": "140719078400656",
        "target": "140719078402720"
    },
    {
        "id": "140719078402720-140719078404880",
        "source": "140719078402720",
        "target": "140719078404880"
    },
    {
        "id": "140719078404880-140719078406896",
        "source": "140719078404880",
        "target": "140719078406896"
    },
    {
        "id": "140719078406896-140719078510352",
        "source": "140719078406896",
        "target": "140719078510352"
    },
    {
        "id": "140719078402720-140719078232640",
        "source": "140719078402720",
        "target": "140719078232640"
    },
    {
        "id": "140719078232640-140719078506848",
        "source": "140719078232640",
        "target": "140719078506848"
    },
    {
        "id": "140719078514768-140719078060528",
        "source": "140719078514768",
        "target": "140719078060528"
    },
    {
        "id": "140719079550032-140719078512560",
        "source": "140719079550032",
        "target": "140719078512560"
    },
    {
        "id": "140719078512560-140719273377024",
        "source": "140719078512560",
        "target": "140719273377024"
    },
    {
        "id": "140719273377024-140719078235376",
        "source": "140719273377024",
        "target": "140719078235376"
    },
    {
        "id": "140719078235376-140719078522112",
        "source": "140719078235376",
        "target": "140719078522112"
    },
    {
        "id": "140719078522112-140719078508192",
        "source": "140719078522112",
        "target": "140719078508192"
    },
    {
        "id": "140719078508192-140719078512848",
        "source": "140719078508192",
        "target": "140719078512848"
    },
    {
        "id": "140719078512848-140719078821408",
        "source": "140719078512848",
        "target": "140719078821408"
    },
    {
        "id": "140719078821408-140719078062544",
        "source": "140719078821408",
        "target": "140719078062544"
    },
    {
        "id": "140719078062544-140719078517552",
        "source": "140719078062544",
        "target": "140719078517552"
    },
    {
        "id": "140719078512848-140719078236048",
        "source": "140719078512848",
        "target": "140719078236048"
    },
    {
        "id": "140719078236048-140719078403728",
        "source": "140719078236048",
        "target": "140719078403728"
    },
    {
        "id": "140719078512560-140719078242912",
        "source": "140719078512560",
        "target": "140719078242912"
    },
    {
        "id": "140719078242912-140719078509056",
        "source": "140719078242912",
        "target": "140719078509056"
    },
    {
        "id": "140719078509056-140719078521152",
        "source": "140719078509056",
        "target": "140719078521152"
    },
    {
        "id": "140719078521152-140719078230096",
        "source": "140719078521152",
        "target": "140719078230096"
    },
    {
        "id": "140719078521152-140719078506752",
        "source": "140719078521152",
        "target": "140719078506752"
    },
    {
        "id": "140719078506752-140719078395808",
        "source": "140719078506752",
        "target": "140719078395808"
    },
    {
        "id": "140719078506752-140719078519904",
        "source": "140719078506752",
        "target": "140719078519904"
    },
    {
        "id": "140719078519904-140719078405168",
        "source": "140719078519904",
        "target": "140719078405168"
    },
    {
        "id": "140719078405168-140719078513520",
        "source": "140719078405168",
        "target": "140719078513520"
    },
    {
        "id": "140719078513520-140719078392544",
        "source": "140719078513520",
        "target": "140719078392544"
    },
    {
        "id": "140719078513520-140719078512128",
        "source": "140719078513520",
        "target": "140719078512128"
    },
    {
        "id": "140719078512128-140719078508384",
        "source": "140719078512128",
        "target": "140719078508384"
    },
    {
        "id": "140719078508384-140719078511216",
        "source": "140719078508384",
        "target": "140719078511216"
    },
    {
        "id": "140719078511216-140719078521344",
        "source": "140719078511216",
        "target": "140719078521344"
    },
    {
        "id": "140719078511216-140719078511024",
        "source": "140719078511216",
        "target": "140719078511024"
    },
    {
        "id": "140719078511024-140719078236288",
        "source": "140719078511024",
        "target": "140719078236288"
    },
    {
        "id": "140719078236288-140719078519280",
        "source": "140719078236288",
        "target": "140719078519280"
    },
    {
        "id": "140719078519280-140719078230336",
        "source": "140719078519280",
        "target": "140719078230336"
    },
    {
        "id": "140719078230336-140719078509872",
        "source": "140719078230336",
        "target": "140719078509872"
    },
    {
        "id": "140719078509872-140719078397824",
        "source": "140719078509872",
        "target": "140719078397824"
    },
    {
        "id": "140719078519280-140719078405264",
        "source": "140719078519280",
        "target": "140719078405264"
    },
    {
        "id": "140719078405264-140719078401328",
        "source": "140719078405264",
        "target": "140719078401328"
    },
    {
        "id": "140719078511024-140719078510784",
        "source": "140719078511024",
        "target": "140719078510784"
    },
    {
        "id": "140719078512128-140719078407232",
        "source": "140719078512128",
        "target": "140719078407232"
    },
    {
        "id": "140719078509056-140719078233312",
        "source": "140719078509056",
        "target": "140719078233312"
    },
    {
        "id": "140719078233312-140719078241904",
        "source": "140719078233312",
        "target": "140719078241904"
    },
    {
        "id": "140719078241904-140719078239072",
        "source": "140719078241904",
        "target": "140719078239072"
    },
    {
        "id": "140719078239072-140719078393120",
        "source": "140719078239072",
        "target": "140719078393120"
    },
    {
        "id": "140719078233312-140719078230192",
        "source": "140719078233312",
        "target": "140719078230192"
    },
    {
        "id": "140719078230192-140719078404256",
        "source": "140719078230192",
        "target": "140719078404256"
    },
    {
        "id": "(140719078509248->35)-(140719078398064->35)",
        "source": "140719078509248->35",
        "target": "140719078398064->35",
        "animated": true
    },
    {
        "id": "(140719078509248->113)-(140719078398064->113)",
        "source": "140719078509248->113",
        "target": "140719078398064->113",
        "animated": true
    },
    {
        "id": "(140719078509248->19)-(140719078398064->19)",
        "source": "140719078509248->19",
        "target": "140719078398064->19",
        "animated": true
    },
    {
        "id": "(140719078509248->16)-(140719078398064->16)",
        "source": "140719078509248->16",
        "target": "140719078398064->16",
        "animated": true
    },
    {
        "id": "(140719078509248->17)-(140719078398064->17)",
        "source": "140719078509248->17",
        "target": "140719078398064->17",
        "animated": true
    },
    {
        "id": "(140719078509248->122)-(140719078398064->122)",
        "source": "140719078509248->122",
        "target": "140719078398064->122",
        "animated": true
    },
    {
        "id": "(140719078509248->61)-(140719078398064->61)",
        "source": "140719078509248->61",
        "target": "140719078398064->61",
        "animated": true
    },
    {
        "id": "(140719078509248->198)-(140719078398064->198)",
        "source": "140719078509248->198",
        "target": "140719078398064->198",
        "animated": true
    },
    {
        "id": "(140719078509248->84)-(140719078398064->84)",
        "source": "140719078509248->84",
        "target": "140719078398064->84",
        "animated": true
    },
    {
        "id": "(140719078509248->231)-(140719078398064->231)",
        "source": "140719078509248->231",
        "target": "140719078398064->231",
        "animated": true
    },
    {
        "id": "(140719078509248->109)-(140719078398064->109)",
        "source": "140719078509248->109",
        "target": "140719078398064->109",
        "animated": true
    },
    {
        "id": "(140719078509248->245)-(140719078398064->245)",
        "source": "140719078509248->245",
        "target": "140719078398064->245",
        "animated": true
    },
    {
        "id": "(140719078509248->258)-(140719078398064->258)",
        "source": "140719078509248->258",
        "target": "140719078398064->258",
        "animated": true
    },
    {
        "id": "(140719078509248->272)-(140719078398064->109)",
        "source": "140719078509248->272",
        "target": "140719078398064->109",
        "animated": true
    },
    {
        "id": "(140719078398064->35)-(140719078831632->35)",
        "source": "140719078398064->35",
        "target": "140719078831632->35",
        "animated": true
    },
    {
        "id": "(140719078398064->113)-(140719078831632->113)",
        "source": "140719078398064->113",
        "target": "140719078831632->113",
        "animated": true
    },
    {
        "id": "(140719078398064->19)-(140719078831632->19)",
        "source": "140719078398064->19",
        "target": "140719078831632->19",
        "animated": true
    },
    {
        "id": "(140719078398064->16)-(140719078831632->16)",
        "source": "140719078398064->16",
        "target": "140719078831632->16",
        "animated": true
    },
    {
        "id": "(140719078398064->17)-(140719078831632->17)",
        "source": "140719078398064->17",
        "target": "140719078831632->17",
        "animated": true
    },
    {
        "id": "(140719078398064->122)-(140719078831632->122)",
        "source": "140719078398064->122",
        "target": "140719078831632->122",
        "animated": true
    },
    {
        "id": "(140719078398064->61)-(140719078831632->61)",
        "source": "140719078398064->61",
        "target": "140719078831632->61",
        "animated": true
    },
    {
        "id": "(140719078398064->198)-(140719078831632->198)",
        "source": "140719078398064->198",
        "target": "140719078831632->198",
        "animated": true
    },
    {
        "id": "(140719078398064->84)-(140719078831632->84)",
        "source": "140719078398064->84",
        "target": "140719078831632->84",
        "animated": true
    },
    {
        "id": "(140719078398064->231)-(140719078831632->231)",
        "source": "140719078398064->231",
        "target": "140719078831632->231",
        "animated": true
    },
    {
        "id": "(140719078398064->109)-(140719078831632->109)",
        "source": "140719078398064->109",
        "target": "140719078831632->109",
        "animated": true
    },
    {
        "id": "(140719078398064->245)-(140719078831632->245)",
        "source": "140719078398064->245",
        "target": "140719078831632->245",
        "animated": true
    },
    {
        "id": "(140719078398064->258)-(140719078831632->84)",
        "source": "140719078398064->258",
        "target": "140719078831632->84",
        "animated": true
    },
    {
        "id": "(140719078831632->35)-(140719079551088->35)",
        "source": "140719078831632->35",
        "target": "140719079551088->35",
        "animated": true
    },
    {
        "id": "(140719078831632->113)-(140719079551088->113)",
        "source": "140719078831632->113",
        "target": "140719079551088->113",
        "animated": true
    },
    {
        "id": "(140719078831632->19)-(140719079551088->19)",
        "source": "140719078831632->19",
        "target": "140719079551088->19",
        "animated": true
    },
    {
        "id": "(140719078831632->16)-(140719079551088->16)",
        "source": "140719078831632->16",
        "target": "140719079551088->16",
        "animated": true
    },
    {
        "id": "(140719078831632->17)-(140719079551088->17)",
        "source": "140719078831632->17",
        "target": "140719079551088->17",
        "animated": true
    },
    {
        "id": "(140719078831632->122)-(140719079551088->122)",
        "source": "140719078831632->122",
        "target": "140719079551088->122",
        "animated": true
    },
    {
        "id": "(140719078831632->61)-(140719079551088->61)",
        "source": "140719078831632->61",
        "target": "140719079551088->61",
        "animated": true
    },
    {
        "id": "(140719078831632->198)-(140719079551088->198)",
        "source": "140719078831632->198",
        "target": "140719079551088->198",
        "animated": true
    },
    {
        "id": "(140719078831632->84)-(140719079551088->84)",
        "source": "140719078831632->84",
        "target": "140719079551088->84",
        "animated": true
    },
    {
        "id": "(140719078831632->231)-(140719079551088->231)",
        "source": "140719078831632->231",
        "target": "140719079551088->231",
        "animated": true
    },
    {
        "id": "(140719078831632->109)-(140719079551088->109)",
        "source": "140719078831632->109",
        "target": "140719079551088->109",
        "animated": true
    },
    {
        "id": "(140719078831632->245)-(140719079551088->61)",
        "source": "140719078831632->245",
        "target": "140719079551088->61",
        "animated": true
    },
    {
        "id": "(140719079551088->35)-(140719079550032->35)",
        "source": "140719079551088->35",
        "target": "140719079550032->35",
        "animated": true
    },
    {
        "id": "(140719079551088->35)-(140719078396336->212)",
        "source": "140719079551088->35",
        "target": "140719078396336->212",
        "animated": true
    },
    {
        "id": "(140719079551088->113)-(140719079550032->113)",
        "source": "140719079551088->113",
        "target": "140719079550032->113",
        "animated": true
    },
    {
        "id": "(140719079551088->19)-(140719079550032->19)",
        "source": "140719079551088->19",
        "target": "140719079550032->19",
        "animated": true
    },
    {
        "id": "(140719079551088->16)-(140719079550032->16)",
        "source": "140719079551088->16",
        "target": "140719079550032->16",
        "animated": true
    },
    {
        "id": "(140719079551088->17)-(140719079550032->17)",
        "source": "140719079551088->17",
        "target": "140719079550032->17",
        "animated": true
    },
    {
        "id": "(140719079551088->122)-(140719079550032->122)",
        "source": "140719079551088->122",
        "target": "140719079550032->122",
        "animated": true
    },
    {
        "id": "(140719079551088->61)-(140719079550032->61)",
        "source": "140719079551088->61",
        "target": "140719079550032->61",
        "animated": true
    },
    {
        "id": "(140719079551088->198)-(140719079550032->35)",
        "source": "140719079551088->198",
        "target": "140719079550032->35",
        "animated": true
    },
    {
        "id": "(140719079551088->198)-(140719078396336->212)",
        "source": "140719079551088->198",
        "target": "140719078396336->212",
        "animated": true
    },
    {
        "id": "(140719079551088->84)-(140719079550032->84)",
        "source": "140719079551088->84",
        "target": "140719079550032->84",
        "animated": true
    },
    {
        "id": "(140719079551088->231)-(140719078396336->231)",
        "source": "140719079551088->231",
        "target": "140719078396336->231",
        "animated": true
    },
    {
        "id": "(140719079551088->109)-(140719078396336->109)",
        "source": "140719079551088->109",
        "target": "140719078396336->109",
        "animated": true
    },
    {
        "id": "(140719078396336->231)-(140719078826400->231)",
        "source": "140719078396336->231",
        "target": "140719078826400->231",
        "animated": true
    },
    {
        "id": "(140719078396336->212)-(140719078826400->212)",
        "source": "140719078396336->212",
        "target": "140719078826400->212",
        "animated": true
    },
    {
        "id": "(140719078396336->109)-(140719078826400->109)",
        "source": "140719078396336->109",
        "target": "140719078826400->109",
        "animated": true
    },
    {
        "id": "(140719078826400->231)-(140719078516832->231)",
        "source": "140719078826400->231",
        "target": "140719078516832->231",
        "animated": true
    },
    {
        "id": "(140719078826400->212)-(140719078516832->212)",
        "source": "140719078826400->212",
        "target": "140719078516832->212",
        "animated": true
    },
    {
        "id": "(140719078826400->109)-(140719078516832->109)",
        "source": "140719078826400->109",
        "target": "140719078516832->109",
        "animated": true
    },
    {
        "id": "(140719078516832->231)-(140719078822368->231)",
        "source": "140719078516832->231",
        "target": "140719078822368->231",
        "animated": true
    },
    {
        "id": "(140719078516832->212)-(140719078822368->212)",
        "source": "140719078516832->212",
        "target": "140719078822368->212",
        "animated": true
    },
    {
        "id": "(140719078516832->109)-(140719078822368->109)",
        "source": "140719078516832->109",
        "target": "140719078822368->109",
        "animated": true
    },
    {
        "id": "(140719078822368->231)-(140719078518128->231)",
        "source": "140719078822368->231",
        "target": "140719078518128->231",
        "animated": true
    },
    {
        "id": "(140719078822368->212)-(140719078518128->212)",
        "source": "140719078822368->212",
        "target": "140719078518128->212",
        "animated": true
    },
    {
        "id": "(140719078822368->109)-(140719078518128->84)",
        "source": "140719078822368->109",
        "target": "140719078518128->84",
        "animated": true
    },
    {
        "id": "(140719078518128->212)-(140719078521248->212)",
        "source": "140719078518128->212",
        "target": "140719078521248->212",
        "animated": true
    },
    {
        "id": "(140719078518128->212)-(140719078398352->230)",
        "source": "140719078518128->212",
        "target": "140719078398352->230",
        "animated": true
    },
    {
        "id": "(140719078518128->210)-(140719078521248->210)",
        "source": "140719078518128->210",
        "target": "140719078521248->210",
        "animated": true
    },
    {
        "id": "(140719078518128->211)-(140719078521248->211)",
        "source": "140719078518128->211",
        "target": "140719078521248->211",
        "animated": true
    },
    {
        "id": "(140719078518128->227)-(140719078521248->227)",
        "source": "140719078518128->227",
        "target": "140719078521248->227",
        "animated": true
    },
    {
        "id": "(140719078518128->84)-(140719078521248->84)",
        "source": "140719078518128->84",
        "target": "140719078521248->84",
        "animated": true
    },
    {
        "id": "(140719078518128->231)-(140719078398352->231)",
        "source": "140719078518128->231",
        "target": "140719078398352->231",
        "animated": true
    },
    {
        "id": "(140719078521248->212)-(140719079548640->212)",
        "source": "140719078521248->212",
        "target": "140719079548640->212",
        "animated": true
    },
    {
        "id": "(140719078521248->212)-(140719078820448->229)",
        "source": "140719078521248->212",
        "target": "140719078820448->229",
        "animated": true
    },
    {
        "id": "(140719078521248->210)-(140719079548640->210)",
        "source": "140719078521248->210",
        "target": "140719079548640->210",
        "animated": true
    },
    {
        "id": "(140719078521248->211)-(140719079548640->211)",
        "source": "140719078521248->211",
        "target": "140719079548640->211",
        "animated": true
    },
    {
        "id": "(140719078521248->227)-(140719078820448->227)",
        "source": "140719078521248->227",
        "target": "140719078820448->227",
        "animated": true
    },
    {
        "id": "(140719078521248->84)-(140719078820448->84)",
        "source": "140719078521248->84",
        "target": "140719078820448->84",
        "animated": true
    },
    {
        "id": "(140719078820448->229)-(140719078507856->229)",
        "source": "140719078820448->229",
        "target": "140719078507856->229",
        "animated": true
    },
    {
        "id": "(140719078820448->227)-(140719078507856->227)",
        "source": "140719078820448->227",
        "target": "140719078507856->227",
        "animated": true
    },
    {
        "id": "(140719078820448->84)-(140719078507856->61)",
        "source": "140719078820448->84",
        "target": "140719078507856->61",
        "animated": true
    },
    {
        "id": "(140719078507856->213)-(140719078521824->213)",
        "source": "140719078507856->213",
        "target": "140719078521824->213",
        "animated": true
    },
    {
        "id": "(140719078507856->213)-(140719078829280->228)",
        "source": "140719078507856->213",
        "target": "140719078829280->228",
        "animated": true
    },
    {
        "id": "(140719078507856->214)-(140719078521824->214)",
        "source": "140719078507856->214",
        "target": "140719078521824->214",
        "animated": true
    },
    {
        "id": "(140719078507856->215)-(140719078521824->215)",
        "source": "140719078507856->215",
        "target": "140719078521824->215",
        "animated": true
    },
    {
        "id": "(140719078507856->216)-(140719078521824->216)",
        "source": "140719078507856->216",
        "target": "140719078521824->216",
        "animated": true
    },
    {
        "id": "(140719078507856->61)-(140719078521824->61)",
        "source": "140719078507856->61",
        "target": "140719078521824->61",
        "animated": true
    },
    {
        "id": "(140719078507856->227)-(140719078829280->227)",
        "source": "140719078507856->227",
        "target": "140719078829280->227",
        "animated": true
    },
    {
        "id": "(140719078507856->229)-(140719078829280->229)",
        "source": "140719078507856->229",
        "target": "140719078829280->229",
        "animated": true
    },
    {
        "id": "(140719078521824->213)-(140719078823088->213)",
        "source": "140719078521824->213",
        "target": "140719078823088->213",
        "animated": true
    },
    {
        "id": "(140719078521824->213)-(140719078824528->221)",
        "source": "140719078521824->213",
        "target": "140719078824528->221",
        "animated": true
    },
    {
        "id": "(140719078521824->214)-(140719078823088->214)",
        "source": "140719078521824->214",
        "target": "140719078823088->214",
        "animated": true
    },
    {
        "id": "(140719078521824->215)-(140719078823088->215)",
        "source": "140719078521824->215",
        "target": "140719078823088->215",
        "animated": true
    },
    {
        "id": "(140719078521824->216)-(140719078823088->216)",
        "source": "140719078521824->216",
        "target": "140719078823088->216",
        "animated": true
    },
    {
        "id": "(140719078521824->61)-(140719078824528->61)",
        "source": "140719078521824->61",
        "target": "140719078824528->61",
        "animated": true
    },
    {
        "id": "(140719078824528->221)-(140719078829184->221)",
        "source": "140719078824528->221",
        "target": "140719078829184->221",
        "animated": true
    },
    {
        "id": "(140719078829184->217)-(140719078831872->217)",
        "source": "140719078829184->217",
        "target": "140719078831872->217",
        "animated": true
    },
    {
        "id": "(140719078829184->218)-(140719078831872->218)",
        "source": "140719078829184->218",
        "target": "140719078831872->218",
        "animated": true
    },
    {
        "id": "(140719078829184->219)-(140719078831872->219)",
        "source": "140719078829184->219",
        "target": "140719078831872->219",
        "animated": true
    },
    {
        "id": "(140719078829184->220)-(140719078831872->220)",
        "source": "140719078829184->220",
        "target": "140719078831872->220",
        "animated": true
    },
    {
        "id": "(140719078829184->221)-(140719078831872->221)",
        "source": "140719078829184->221",
        "target": "140719078831872->221",
        "animated": true
    },
    {
        "id": "(140719078819584->222)-(140719078822080->222)",
        "source": "140719078819584->222",
        "target": "140719078822080->222",
        "animated": true
    },
    {
        "id": "(140719078819584->223)-(140719078822080->223)",
        "source": "140719078819584->223",
        "target": "140719078822080->223",
        "animated": true
    },
    {
        "id": "(140719078819584->224)-(140719078822080->224)",
        "source": "140719078819584->224",
        "target": "140719078822080->224",
        "animated": true
    },
    {
        "id": "(140719078819584->225)-(140719078822080->225)",
        "source": "140719078819584->225",
        "target": "140719078822080->225",
        "animated": true
    },
    {
        "id": "(140719078819584->226)-(140719078822080->226)",
        "source": "140719078819584->226",
        "target": "140719078822080->226",
        "animated": true
    },
    {
        "id": "(140719078822080->222)-(140719078520864->222)",
        "source": "140719078822080->222",
        "target": "140719078520864->222",
        "animated": true
    },
    {
        "id": "(140719078822080->223)-(140719078520864->223)",
        "source": "140719078822080->223",
        "target": "140719078520864->223",
        "animated": true
    },
    {
        "id": "(140719078822080->224)-(140719078520864->224)",
        "source": "140719078822080->224",
        "target": "140719078520864->224",
        "animated": true
    },
    {
        "id": "(140719078822080->225)-(140719078520864->225)",
        "source": "140719078822080->225",
        "target": "140719078520864->225",
        "animated": true
    },
    {
        "id": "(140719078822080->226)-(140719078520864->226)",
        "source": "140719078822080->226",
        "target": "140719078520864->226",
        "animated": true
    },
    {
        "id": "(140719078831872->217)-(140719078507808->217)",
        "source": "140719078831872->217",
        "target": "140719078507808->217",
        "animated": true
    },
    {
        "id": "(140719078831872->218)-(140719078507808->218)",
        "source": "140719078831872->218",
        "target": "140719078507808->218",
        "animated": true
    },
    {
        "id": "(140719078831872->219)-(140719078507808->219)",
        "source": "140719078831872->219",
        "target": "140719078507808->219",
        "animated": true
    },
    {
        "id": "(140719078831872->220)-(140719078507808->220)",
        "source": "140719078831872->220",
        "target": "140719078507808->220",
        "animated": true
    },
    {
        "id": "(140719078831872->221)-(140719078507808->221)",
        "source": "140719078831872->221",
        "target": "140719078507808->221",
        "animated": true
    },
    {
        "id": "(140719079550032->113)-(140719078512560->113)",
        "source": "140719079550032->113",
        "target": "140719078512560->113",
        "animated": true
    },
    {
        "id": "(140719079550032->113)-(140719078060096->196)",
        "source": "140719079550032->113",
        "target": "140719078060096->196",
        "animated": true
    },
    {
        "id": "(140719079550032->19)-(140719078512560->19)",
        "source": "140719079550032->19",
        "target": "140719078512560->19",
        "animated": true
    },
    {
        "id": "(140719079550032->16)-(140719078512560->16)",
        "source": "140719079550032->16",
        "target": "140719078512560->16",
        "animated": true
    },
    {
        "id": "(140719079550032->17)-(140719078512560->17)",
        "source": "140719079550032->17",
        "target": "140719078512560->17",
        "animated": true
    },
    {
        "id": "(140719079550032->122)-(140719078512560->122)",
        "source": "140719079550032->122",
        "target": "140719078512560->122",
        "animated": true
    },
    {
        "id": "(140719079550032->35)-(140719078512560->35)",
        "source": "140719079550032->35",
        "target": "140719078512560->35",
        "animated": true
    },
    {
        "id": "(140719079550032->61)-(140719078512560->61)",
        "source": "140719079550032->61",
        "target": "140719078512560->61",
        "animated": true
    },
    {
        "id": "(140719079550032->198)-(140719078060096->198)",
        "source": "140719079550032->198",
        "target": "140719078060096->198",
        "animated": true
    },
    {
        "id": "(140719079550032->84)-(140719078060096->84)",
        "source": "140719079550032->84",
        "target": "140719078060096->84",
        "animated": true
    },
    {
        "id": "(140719078060096->198)-(140719078232160->198)",
        "source": "140719078060096->198",
        "target": "140719078232160->198",
        "animated": true
    },
    {
        "id": "(140719078060096->196)-(140719078232160->196)",
        "source": "140719078060096->196",
        "target": "140719078232160->196",
        "animated": true
    },
    {
        "id": "(140719078060096->84)-(140719078232160->84)",
        "source": "140719078060096->84",
        "target": "140719078232160->84",
        "animated": true
    },
    {
        "id": "(140719078232160->198)-(140719078242768->198)",
        "source": "140719078232160->198",
        "target": "140719078242768->198",
        "animated": true
    },
    {
        "id": "(140719078232160->196)-(140719078242768->196)",
        "source": "140719078232160->196",
        "target": "140719078242768->196",
        "animated": true
    },
    {
        "id": "(140719078232160->84)-(140719078242768->84)",
        "source": "140719078232160->84",
        "target": "140719078242768->84",
        "animated": true
    },
    {
        "id": "(140719078242768->198)-(140719078058704->198)",
        "source": "140719078242768->198",
        "target": "140719078058704->198",
        "animated": true
    },
    {
        "id": "(140719078242768->196)-(140719078058704->196)",
        "source": "140719078242768->196",
        "target": "140719078058704->196",
        "animated": true
    },
    {
        "id": "(140719078242768->84)-(140719078058704->84)",
        "source": "140719078242768->84",
        "target": "140719078058704->84",
        "animated": true
    },
    {
        "id": "(140719078058704->198)-(140719078507952->198)",
        "source": "140719078058704->198",
        "target": "140719078507952->198",
        "animated": true
    },
    {
        "id": "(140719078058704->196)-(140719078507952->196)",
        "source": "140719078058704->196",
        "target": "140719078507952->196",
        "animated": true
    },
    {
        "id": "(140719078058704->84)-(140719078507952->61)",
        "source": "140719078058704->84",
        "target": "140719078507952->61",
        "animated": true
    },
    {
        "id": "(140719078507952->182)-(140719078514768->182)",
        "source": "140719078507952->182",
        "target": "140719078514768->182",
        "animated": true
    },
    {
        "id": "(140719078507952->182)-(140719078236912->197)",
        "source": "140719078507952->182",
        "target": "140719078236912->197",
        "animated": true
    },
    {
        "id": "(140719078507952->183)-(140719078514768->183)",
        "source": "140719078507952->183",
        "target": "140719078514768->183",
        "animated": true
    },
    {
        "id": "(140719078507952->184)-(140719078514768->184)",
        "source": "140719078507952->184",
        "target": "140719078514768->184",
        "animated": true
    },
    {
        "id": "(140719078507952->185)-(140719078514768->185)",
        "source": "140719078507952->185",
        "target": "140719078514768->185",
        "animated": true
    },
    {
        "id": "(140719078507952->61)-(140719078514768->61)",
        "source": "140719078507952->61",
        "target": "140719078514768->61",
        "animated": true
    },
    {
        "id": "(140719078507952->196)-(140719078236912->196)",
        "source": "140719078507952->196",
        "target": "140719078236912->196",
        "animated": true
    },
    {
        "id": "(140719078507952->198)-(140719078236912->198)",
        "source": "140719078507952->198",
        "target": "140719078236912->198",
        "animated": true
    },
    {
        "id": "(140719078514768->182)-(140719078060528->182)",
        "source": "140719078514768->182",
        "target": "140719078060528->182",
        "animated": true
    },
    {
        "id": "(140719078514768->182)-(140719078400656->190)",
        "source": "140719078514768->182",
        "target": "140719078400656->190",
        "animated": true
    },
    {
        "id": "(140719078514768->183)-(140719078060528->183)",
        "source": "140719078514768->183",
        "target": "140719078060528->183",
        "animated": true
    },
    {
        "id": "(140719078514768->184)-(140719078060528->184)",
        "source": "140719078514768->184",
        "target": "140719078060528->184",
        "animated": true
    },
    {
        "id": "(140719078514768->185)-(140719078060528->185)",
        "source": "140719078514768->185",
        "target": "140719078060528->185",
        "animated": true
    },
    {
        "id": "(140719078514768->61)-(140719078400656->61)",
        "source": "140719078514768->61",
        "target": "140719078400656->61",
        "animated": true
    },
    {
        "id": "(140719078400656->190)-(140719078402720->190)",
        "source": "140719078400656->190",
        "target": "140719078402720->190",
        "animated": true
    },
    {
        "id": "(140719078402720->186)-(140719078232640->186)",
        "source": "140719078402720->186",
        "target": "140719078232640->186",
        "animated": true
    },
    {
        "id": "(140719078402720->187)-(140719078232640->187)",
        "source": "140719078402720->187",
        "target": "140719078232640->187",
        "animated": true
    },
    {
        "id": "(140719078402720->188)-(140719078232640->188)",
        "source": "140719078402720->188",
        "target": "140719078232640->188",
        "animated": true
    },
    {
        "id": "(140719078402720->189)-(140719078232640->189)",
        "source": "140719078402720->189",
        "target": "140719078232640->189",
        "animated": true
    },
    {
        "id": "(140719078402720->190)-(140719078232640->190)",
        "source": "140719078402720->190",
        "target": "140719078232640->190",
        "animated": true
    },
    {
        "id": "(140719078404880->191)-(140719078406896->191)",
        "source": "140719078404880->191",
        "target": "140719078406896->191",
        "animated": true
    },
    {
        "id": "(140719078404880->192)-(140719078406896->192)",
        "source": "140719078404880->192",
        "target": "140719078406896->192",
        "animated": true
    },
    {
        "id": "(140719078404880->193)-(140719078406896->193)",
        "source": "140719078404880->193",
        "target": "140719078406896->193",
        "animated": true
    },
    {
        "id": "(140719078404880->194)-(140719078406896->194)",
        "source": "140719078404880->194",
        "target": "140719078406896->194",
        "animated": true
    },
    {
        "id": "(140719078404880->195)-(140719078406896->195)",
        "source": "140719078404880->195",
        "target": "140719078406896->195",
        "animated": true
    },
    {
        "id": "(140719078406896->191)-(140719078510352->191)",
        "source": "140719078406896->191",
        "target": "140719078510352->191",
        "animated": true
    },
    {
        "id": "(140719078406896->192)-(140719078510352->192)",
        "source": "140719078406896->192",
        "target": "140719078510352->192",
        "animated": true
    },
    {
        "id": "(140719078406896->193)-(140719078510352->193)",
        "source": "140719078406896->193",
        "target": "140719078510352->193",
        "animated": true
    },
    {
        "id": "(140719078406896->194)-(140719078510352->194)",
        "source": "140719078406896->194",
        "target": "140719078510352->194",
        "animated": true
    },
    {
        "id": "(140719078406896->195)-(140719078510352->195)",
        "source": "140719078406896->195",
        "target": "140719078510352->195",
        "animated": true
    },
    {
        "id": "(140719078232640->186)-(140719078506848->186)",
        "source": "140719078232640->186",
        "target": "140719078506848->186",
        "animated": true
    },
    {
        "id": "(140719078232640->187)-(140719078506848->187)",
        "source": "140719078232640->187",
        "target": "140719078506848->187",
        "animated": true
    },
    {
        "id": "(140719078232640->188)-(140719078506848->188)",
        "source": "140719078232640->188",
        "target": "140719078506848->188",
        "animated": true
    },
    {
        "id": "(140719078232640->189)-(140719078506848->189)",
        "source": "140719078232640->189",
        "target": "140719078506848->189",
        "animated": true
    },
    {
        "id": "(140719078232640->190)-(140719078506848->190)",
        "source": "140719078232640->190",
        "target": "140719078506848->190",
        "animated": true
    },
    {
        "id": "(140719078512560->19)-(140719078242912->19)",
        "source": "140719078512560->19",
        "target": "140719078242912->19",
        "animated": true
    },
    {
        "id": "(140719078512560->19)-(140719273377024->167)",
        "source": "140719078512560->19",
        "target": "140719273377024->167",
        "animated": true
    },
    {
        "id": "(140719078512560->16)-(140719078242912->16)",
        "source": "140719078512560->16",
        "target": "140719078242912->16",
        "animated": true
    },
    {
        "id": "(140719078512560->17)-(140719078242912->17)",
        "source": "140719078512560->17",
        "target": "140719078242912->17",
        "animated": true
    },
    {
        "id": "(140719078512560->122)-(140719078242912->122)",
        "source": "140719078512560->122",
        "target": "140719078242912->122",
        "animated": true
    },
    {
        "id": "(140719078512560->113)-(140719078242912->113)",
        "source": "140719078512560->113",
        "target": "140719078242912->113",
        "animated": true
    },
    {
        "id": "(140719078512560->35)-(140719078242912->35)",
        "source": "140719078512560->35",
        "target": "140719078242912->35",
        "animated": true
    },
    {
        "id": "(140719078512560->61)-(140719273377024->61)",
        "source": "140719078512560->61",
        "target": "140719273377024->61",
        "animated": true
    },
    {
        "id": "(140719273377024->167)-(140719078235376->167)",
        "source": "140719273377024->167",
        "target": "140719078235376->167",
        "animated": true
    },
    {
        "id": "(140719273377024->61)-(140719078235376->61)",
        "source": "140719273377024->61",
        "target": "140719078235376->61",
        "animated": true
    },
    {
        "id": "(140719078235376->167)-(140719078522112->167)",
        "source": "140719078235376->167",
        "target": "140719078522112->167",
        "animated": true
    },
    {
        "id": "(140719078235376->61)-(140719078522112->61)",
        "source": "140719078235376->61",
        "target": "140719078522112->61",
        "animated": true
    },
    {
        "id": "(140719078522112->167)-(140719078508192->167)",
        "source": "140719078522112->167",
        "target": "140719078508192->167",
        "animated": true
    },
    {
        "id": "(140719078522112->61)-(140719078508192->61)",
        "source": "140719078522112->61",
        "target": "140719078508192->61",
        "animated": true
    },
    {
        "id": "(140719078508192->167)-(140719078512848->167)",
        "source": "140719078508192->167",
        "target": "140719078512848->167",
        "animated": true
    },
    {
        "id": "(140719078512848->163)-(140719078236048->163)",
        "source": "140719078512848->163",
        "target": "140719078236048->163",
        "animated": true
    },
    {
        "id": "(140719078512848->164)-(140719078236048->164)",
        "source": "140719078512848->164",
        "target": "140719078236048->164",
        "animated": true
    },
    {
        "id": "(140719078512848->165)-(140719078236048->165)",
        "source": "140719078512848->165",
        "target": "140719078236048->165",
        "animated": true
    },
    {
        "id": "(140719078512848->166)-(140719078236048->166)",
        "source": "140719078512848->166",
        "target": "140719078236048->166",
        "animated": true
    },
    {
        "id": "(140719078512848->167)-(140719078236048->167)",
        "source": "140719078512848->167",
        "target": "140719078236048->167",
        "animated": true
    },
    {
        "id": "(140719078821408->168)-(140719078062544->168)",
        "source": "140719078821408->168",
        "target": "140719078062544->168",
        "animated": true
    },
    {
        "id": "(140719078821408->169)-(140719078062544->169)",
        "source": "140719078821408->169",
        "target": "140719078062544->169",
        "animated": true
    },
    {
        "id": "(140719078821408->170)-(140719078062544->170)",
        "source": "140719078821408->170",
        "target": "140719078062544->170",
        "animated": true
    },
    {
        "id": "(140719078821408->171)-(140719078062544->171)",
        "source": "140719078821408->171",
        "target": "140719078062544->171",
        "animated": true
    },
    {
        "id": "(140719078821408->172)-(140719078062544->172)",
        "source": "140719078821408->172",
        "target": "140719078062544->172",
        "animated": true
    },
    {
        "id": "(140719078062544->168)-(140719078517552->168)",
        "source": "140719078062544->168",
        "target": "140719078517552->168",
        "animated": true
    },
    {
        "id": "(140719078062544->169)-(140719078517552->169)",
        "source": "140719078062544->169",
        "target": "140719078517552->169",
        "animated": true
    },
    {
        "id": "(140719078062544->170)-(140719078517552->170)",
        "source": "140719078062544->170",
        "target": "140719078517552->170",
        "animated": true
    },
    {
        "id": "(140719078062544->171)-(140719078517552->171)",
        "source": "140719078062544->171",
        "target": "140719078517552->171",
        "animated": true
    },
    {
        "id": "(140719078062544->172)-(140719078517552->172)",
        "source": "140719078062544->172",
        "target": "140719078517552->172",
        "animated": true
    },
    {
        "id": "(140719078236048->163)-(140719078403728->163)",
        "source": "140719078236048->163",
        "target": "140719078403728->163",
        "animated": true
    },
    {
        "id": "(140719078236048->164)-(140719078403728->164)",
        "source": "140719078236048->164",
        "target": "140719078403728->164",
        "animated": true
    },
    {
        "id": "(140719078236048->165)-(140719078403728->165)",
        "source": "140719078236048->165",
        "target": "140719078403728->165",
        "animated": true
    },
    {
        "id": "(140719078236048->166)-(140719078403728->166)",
        "source": "140719078236048->166",
        "target": "140719078403728->166",
        "animated": true
    },
    {
        "id": "(140719078236048->167)-(140719078403728->167)",
        "source": "140719078236048->167",
        "target": "140719078403728->167",
        "animated": true
    },
    {
        "id": "(140719078242912->16)-(140719078509056->16)",
        "source": "140719078242912->16",
        "target": "140719078509056->16",
        "animated": true
    },
    {
        "id": "(140719078242912->17)-(140719078509056->17)",
        "source": "140719078242912->17",
        "target": "140719078509056->17",
        "animated": true
    },
    {
        "id": "(140719078242912->19)-(140719078509056->19)",
        "source": "140719078242912->19",
        "target": "140719078509056->19",
        "animated": true
    },
    {
        "id": "(140719078242912->122)-(140719078509056->122)",
        "source": "140719078242912->122",
        "target": "140719078509056->122",
        "animated": true
    },
    {
        "id": "(140719078242912->113)-(140719078509056->113)",
        "source": "140719078242912->113",
        "target": "140719078509056->113",
        "animated": true
    },
    {
        "id": "(140719078242912->35)-(140719078509056->35)",
        "source": "140719078242912->35",
        "target": "140719078509056->35",
        "animated": true
    },
    {
        "id": "(140719078509056->19)-(140719078233312->19)",
        "source": "140719078509056->19",
        "target": "140719078233312->19",
        "animated": true
    },
    {
        "id": "(140719078509056->19)-(140719078521152->114)",
        "source": "140719078509056->19",
        "target": "140719078521152->114",
        "animated": true
    },
    {
        "id": "(140719078509056->15)-(140719078233312->15)",
        "source": "140719078509056->15",
        "target": "140719078233312->15",
        "animated": true
    },
    {
        "id": "(140719078509056->16)-(140719078233312->16)",
        "source": "140719078509056->16",
        "target": "140719078233312->16",
        "animated": true
    },
    {
        "id": "(140719078509056->17)-(140719078233312->17)",
        "source": "140719078509056->17",
        "target": "140719078233312->17",
        "animated": true
    },
    {
        "id": "(140719078509056->18)-(140719078233312->18)",
        "source": "140719078509056->18",
        "target": "140719078233312->18",
        "animated": true
    },
    {
        "id": "(140719078509056->35)-(140719078521152->35)",
        "source": "140719078509056->35",
        "target": "140719078521152->35",
        "animated": true
    },
    {
        "id": "(140719078509056->40)-(140719078521152->40)",
        "source": "140719078509056->40",
        "target": "140719078521152->40",
        "animated": true
    },
    {
        "id": "(140719078509056->109)-(140719078521152->109)",
        "source": "140719078509056->109",
        "target": "140719078521152->109",
        "animated": true
    },
    {
        "id": "(140719078509056->113)-(140719078521152->113)",
        "source": "140719078509056->113",
        "target": "140719078521152->113",
        "animated": true
    },
    {
        "id": "(140719078509056->122)-(140719078521152->122)",
        "source": "140719078509056->122",
        "target": "140719078521152->122",
        "animated": true
    },
    {
        "id": "(140719078509056->123)-(140719078521152->123)",
        "source": "140719078509056->123",
        "target": "140719078521152->123",
        "animated": true
    },
    {
        "id": "(140719078509056->124)-(140719078521152->124)",
        "source": "140719078509056->124",
        "target": "140719078521152->124",
        "animated": true
    },
    {
        "id": "(140719078521152->114)-(140719078506752->114)",
        "source": "140719078521152->114",
        "target": "140719078506752->114",
        "animated": true
    },
    {
        "id": "(140719078521152->114)-(140719078230096->121)",
        "source": "140719078521152->114",
        "target": "140719078230096->121",
        "animated": true
    },
    {
        "id": "(140719078521152->35)-(140719078506752->35)",
        "source": "140719078521152->35",
        "target": "140719078506752->35",
        "animated": true
    },
    {
        "id": "(140719078521152->40)-(140719078506752->40)",
        "source": "140719078521152->40",
        "target": "140719078506752->40",
        "animated": true
    },
    {
        "id": "(140719078521152->109)-(140719078506752->109)",
        "source": "140719078521152->109",
        "target": "140719078506752->109",
        "animated": true
    },
    {
        "id": "(140719078521152->113)-(140719078506752->113)",
        "source": "140719078521152->113",
        "target": "140719078506752->113",
        "animated": true
    },
    {
        "id": "(140719078521152->122)-(140719078230096->122)",
        "source": "140719078521152->122",
        "target": "140719078230096->122",
        "animated": true
    },
    {
        "id": "(140719078521152->123)-(140719078230096->123)",
        "source": "140719078521152->123",
        "target": "140719078230096->123",
        "animated": true
    },
    {
        "id": "(140719078521152->124)-(140719078230096->124)",
        "source": "140719078521152->124",
        "target": "140719078230096->124",
        "animated": true
    },
    {
        "id": "(140719078506752->35)-(140719078519904->35)",
        "source": "140719078506752->35",
        "target": "140719078519904->35",
        "animated": true
    },
    {
        "id": "(140719078506752->35)-(140719078395808->115)",
        "source": "140719078506752->35",
        "target": "140719078395808->115",
        "animated": true
    },
    {
        "id": "(140719078506752->40)-(140719078519904->40)",
        "source": "140719078506752->40",
        "target": "140719078519904->40",
        "animated": true
    },
    {
        "id": "(140719078506752->109)-(140719078519904->109)",
        "source": "140719078506752->109",
        "target": "140719078519904->109",
        "animated": true
    },
    {
        "id": "(140719078506752->113)-(140719078395808->113)",
        "source": "140719078506752->113",
        "target": "140719078395808->113",
        "animated": true
    },
    {
        "id": "(140719078506752->114)-(140719078395808->114)",
        "source": "140719078506752->114",
        "target": "140719078395808->114",
        "animated": true
    },
    {
        "id": "(140719078519904->40)-(140719078405168->40)",
        "source": "140719078519904->40",
        "target": "140719078405168->40",
        "animated": true
    },
    {
        "id": "(140719078519904->35)-(140719078405168->35)",
        "source": "140719078519904->35",
        "target": "140719078405168->35",
        "animated": true
    },
    {
        "id": "(140719078519904->109)-(140719078405168->109)",
        "source": "140719078519904->109",
        "target": "140719078405168->109",
        "animated": true
    },
    {
        "id": "(140719078405168->40)-(140719078513520->40)",
        "source": "140719078405168->40",
        "target": "140719078513520->40",
        "animated": true
    },
    {
        "id": "(140719078405168->35)-(140719078513520->35)",
        "source": "140719078405168->35",
        "target": "140719078513520->35",
        "animated": true
    },
    {
        "id": "(140719078405168->109)-(140719078513520->84)",
        "source": "140719078405168->109",
        "target": "140719078513520->84",
        "animated": true
    },
    {
        "id": "(140719078513520->35)-(140719078512128->35)",
        "source": "140719078513520->35",
        "target": "140719078512128->35",
        "animated": true
    },
    {
        "id": "(140719078513520->35)-(140719078392544->39)",
        "source": "140719078513520->35",
        "target": "140719078392544->39",
        "animated": true
    },
    {
        "id": "(140719078513520->33)-(140719078512128->33)",
        "source": "140719078513520->33",
        "target": "140719078512128->33",
        "animated": true
    },
    {
        "id": "(140719078513520->34)-(140719078512128->34)",
        "source": "140719078513520->34",
        "target": "140719078512128->34",
        "animated": true
    },
    {
        "id": "(140719078513520->88)-(140719078512128->88)",
        "source": "140719078513520->88",
        "target": "140719078512128->88",
        "animated": true
    },
    {
        "id": "(140719078513520->84)-(140719078512128->84)",
        "source": "140719078513520->84",
        "target": "140719078512128->84",
        "animated": true
    },
    {
        "id": "(140719078513520->40)-(140719078392544->40)",
        "source": "140719078513520->40",
        "target": "140719078392544->40",
        "animated": true
    },
    {
        "id": "(140719078512128->35)-(140719078407232->35)",
        "source": "140719078512128->35",
        "target": "140719078407232->35",
        "animated": true
    },
    {
        "id": "(140719078512128->35)-(140719078508384->90)",
        "source": "140719078512128->35",
        "target": "140719078508384->90",
        "animated": true
    },
    {
        "id": "(140719078512128->33)-(140719078407232->33)",
        "source": "140719078512128->33",
        "target": "140719078407232->33",
        "animated": true
    },
    {
        "id": "(140719078512128->34)-(140719078407232->34)",
        "source": "140719078512128->34",
        "target": "140719078407232->34",
        "animated": true
    },
    {
        "id": "(140719078512128->88)-(140719078508384->88)",
        "source": "140719078512128->88",
        "target": "140719078508384->88",
        "animated": true
    },
    {
        "id": "(140719078512128->84)-(140719078508384->84)",
        "source": "140719078512128->84",
        "target": "140719078508384->84",
        "animated": true
    },
    {
        "id": "(140719078508384->90)-(140719078511216->90)",
        "source": "140719078508384->90",
        "target": "140719078511216->90",
        "animated": true
    },
    {
        "id": "(140719078508384->88)-(140719078511216->88)",
        "source": "140719078508384->88",
        "target": "140719078511216->88",
        "animated": true
    },
    {
        "id": "(140719078508384->84)-(140719078511216->61)",
        "source": "140719078508384->84",
        "target": "140719078511216->61",
        "animated": true
    },
    {
        "id": "(140719078511216->25)-(140719078511024->25)",
        "source": "140719078511216->25",
        "target": "140719078511024->25",
        "animated": true
    },
    {
        "id": "(140719078511216->25)-(140719078521344->89)",
        "source": "140719078511216->25",
        "target": "140719078521344->89",
        "animated": true
    },
    {
        "id": "(140719078511216->26)-(140719078511024->26)",
        "source": "140719078511216->26",
        "target": "140719078511024->26",
        "animated": true
    },
    {
        "id": "(140719078511216->27)-(140719078511024->27)",
        "source": "140719078511216->27",
        "target": "140719078511024->27",
        "animated": true
    },
    {
        "id": "(140719078511216->28)-(140719078511024->28)",
        "source": "140719078511216->28",
        "target": "140719078511024->28",
        "animated": true
    },
    {
        "id": "(140719078511216->61)-(140719078511024->61)",
        "source": "140719078511216->61",
        "target": "140719078511024->61",
        "animated": true
    },
    {
        "id": "(140719078511216->88)-(140719078521344->88)",
        "source": "140719078511216->88",
        "target": "140719078521344->88",
        "animated": true
    },
    {
        "id": "(140719078511216->90)-(140719078521344->90)",
        "source": "140719078511216->90",
        "target": "140719078521344->90",
        "animated": true
    },
    {
        "id": "(140719078511024->25)-(140719078510784->25)",
        "source": "140719078511024->25",
        "target": "140719078510784->25",
        "animated": true
    },
    {
        "id": "(140719078511024->25)-(140719078236288->137)",
        "source": "140719078511024->25",
        "target": "140719078236288->137",
        "animated": true
    },
    {
        "id": "(140719078511024->26)-(140719078510784->26)",
        "source": "140719078511024->26",
        "target": "140719078510784->26",
        "animated": true
    },
    {
        "id": "(140719078511024->27)-(140719078510784->27)",
        "source": "140719078511024->27",
        "target": "140719078510784->27",
        "animated": true
    },
    {
        "id": "(140719078511024->28)-(140719078510784->28)",
        "source": "140719078511024->28",
        "target": "140719078510784->28",
        "animated": true
    },
    {
        "id": "(140719078511024->61)-(140719078236288->61)",
        "source": "140719078511024->61",
        "target": "140719078236288->61",
        "animated": true
    },
    {
        "id": "(140719078236288->137)-(140719078519280->137)",
        "source": "140719078236288->137",
        "target": "140719078519280->137",
        "animated": true
    },
    {
        "id": "(140719078519280->133)-(140719078405264->133)",
        "source": "140719078519280->133",
        "target": "140719078405264->133",
        "animated": true
    },
    {
        "id": "(140719078519280->134)-(140719078405264->134)",
        "source": "140719078519280->134",
        "target": "140719078405264->134",
        "animated": true
    },
    {
        "id": "(140719078519280->135)-(140719078405264->135)",
        "source": "140719078519280->135",
        "target": "140719078405264->135",
        "animated": true
    },
    {
        "id": "(140719078519280->136)-(140719078405264->136)",
        "source": "140719078519280->136",
        "target": "140719078405264->136",
        "animated": true
    },
    {
        "id": "(140719078519280->137)-(140719078405264->137)",
        "source": "140719078519280->137",
        "target": "140719078405264->137",
        "animated": true
    },
    {
        "id": "(140719078230336->138)-(140719078509872->138)",
        "source": "140719078230336->138",
        "target": "140719078509872->138",
        "animated": true
    },
    {
        "id": "(140719078230336->139)-(140719078509872->139)",
        "source": "140719078230336->139",
        "target": "140719078509872->139",
        "animated": true
    },
    {
        "id": "(140719078230336->140)-(140719078509872->140)",
        "source": "140719078230336->140",
        "target": "140719078509872->140",
        "animated": true
    },
    {
        "id": "(140719078230336->141)-(140719078509872->141)",
        "source": "140719078230336->141",
        "target": "140719078509872->141",
        "animated": true
    },
    {
        "id": "(140719078230336->142)-(140719078509872->142)",
        "source": "140719078230336->142",
        "target": "140719078509872->142",
        "animated": true
    },
    {
        "id": "(140719078509872->138)-(140719078397824->138)",
        "source": "140719078509872->138",
        "target": "140719078397824->138",
        "animated": true
    },
    {
        "id": "(140719078509872->139)-(140719078397824->139)",
        "source": "140719078509872->139",
        "target": "140719078397824->139",
        "animated": true
    },
    {
        "id": "(140719078509872->140)-(140719078397824->140)",
        "source": "140719078509872->140",
        "target": "140719078397824->140",
        "animated": true
    },
    {
        "id": "(140719078509872->141)-(140719078397824->141)",
        "source": "140719078509872->141",
        "target": "140719078397824->141",
        "animated": true
    },
    {
        "id": "(140719078509872->142)-(140719078397824->142)",
        "source": "140719078509872->142",
        "target": "140719078397824->142",
        "animated": true
    },
    {
        "id": "(140719078405264->133)-(140719078401328->133)",
        "source": "140719078405264->133",
        "target": "140719078401328->133",
        "animated": true
    },
    {
        "id": "(140719078405264->134)-(140719078401328->134)",
        "source": "140719078405264->134",
        "target": "140719078401328->134",
        "animated": true
    },
    {
        "id": "(140719078405264->135)-(140719078401328->135)",
        "source": "140719078405264->135",
        "target": "140719078401328->135",
        "animated": true
    },
    {
        "id": "(140719078405264->136)-(140719078401328->136)",
        "source": "140719078405264->136",
        "target": "140719078401328->136",
        "animated": true
    },
    {
        "id": "(140719078405264->137)-(140719078401328->137)",
        "source": "140719078405264->137",
        "target": "140719078401328->137",
        "animated": true
    },
    {
        "id": "(140719078233312->15)-(140719078230192->15)",
        "source": "140719078233312->15",
        "target": "140719078230192->15",
        "animated": true
    },
    {
        "id": "(140719078233312->16)-(140719078230192->16)",
        "source": "140719078233312->16",
        "target": "140719078230192->16",
        "animated": true
    },
    {
        "id": "(140719078233312->17)-(140719078230192->17)",
        "source": "140719078233312->17",
        "target": "140719078230192->17",
        "animated": true
    },
    {
        "id": "(140719078233312->18)-(140719078230192->18)",
        "source": "140719078233312->18",
        "target": "140719078230192->18",
        "animated": true
    },
    {
        "id": "(140719078233312->19)-(140719078230192->19)",
        "source": "140719078233312->19",
        "target": "140719078230192->19",
        "animated": true
    },
    {
        "id": "(140719078241904->44)-(140719078239072->44)",
        "source": "140719078241904->44",
        "target": "140719078239072->44",
        "animated": true
    },
    {
        "id": "(140719078241904->45)-(140719078239072->45)",
        "source": "140719078241904->45",
        "target": "140719078239072->45",
        "animated": true
    },
    {
        "id": "(140719078241904->46)-(140719078239072->46)",
        "source": "140719078241904->46",
        "target": "140719078239072->46",
        "animated": true
    },
    {
        "id": "(140719078241904->47)-(140719078239072->47)",
        "source": "140719078241904->47",
        "target": "140719078239072->47",
        "animated": true
    },
    {
        "id": "(140719078241904->48)-(140719078239072->48)",
        "source": "140719078241904->48",
        "target": "140719078239072->48",
        "animated": true
    },
    {
        "id": "(140719078239072->44)-(140719078393120->44)",
        "source": "140719078239072->44",
        "target": "140719078393120->44",
        "animated": true
    },
    {
        "id": "(140719078239072->45)-(140719078393120->45)",
        "source": "140719078239072->45",
        "target": "140719078393120->45",
        "animated": true
    },
    {
        "id": "(140719078239072->46)-(140719078393120->46)",
        "source": "140719078239072->46",
        "target": "140719078393120->46",
        "animated": true
    },
    {
        "id": "(140719078239072->47)-(140719078393120->47)",
        "source": "140719078239072->47",
        "target": "140719078393120->47",
        "animated": true
    },
    {
        "id": "(140719078239072->48)-(140719078393120->48)",
        "source": "140719078239072->48",
        "target": "140719078393120->48",
        "animated": true
    },
    {
        "id": "(140719078230192->15)-(140719078404256->15)",
        "source": "140719078230192->15",
        "target": "140719078404256->15",
        "animated": true
    },
    {
        "id": "(140719078230192->16)-(140719078404256->16)",
        "source": "140719078230192->16",
        "target": "140719078404256->16",
        "animated": true
    },
    {
        "id": "(140719078230192->17)-(140719078404256->17)",
        "source": "140719078230192->17",
        "target": "140719078404256->17",
        "animated": true
    },
    {
        "id": "(140719078230192->18)-(140719078404256->18)",
        "source": "140719078230192->18",
        "target": "140719078404256->18",
        "animated": true
    },
    {
        "id": "(140719078230192->19)-(140719078404256->19)",
        "source": "140719078230192->19",
        "target": "140719078404256->19",
        "animated": true
    }
];
